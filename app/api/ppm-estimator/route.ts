import { NextResponse } from "next/server";
import { supabase } from "@/integrations/supabase/client";
import type { PPMEstimate } from "@/lib/toolTypes";
import { sendContactNotification } from "@/lib/mail";

const systemPrompt = `You are an expert UK FM pricing consultant for EntireFM. Your job is to produce a realistic ballpark PPM cost estimate based on a site profile.

UK FM PPM pricing benchmarks to use as your basis:
- Small single site (under 500 sqm): £3,000–£8,000 per annum
- Medium single site (500–2,000 sqm): £8,000–£25,000 per annum
- Large single site (2,000–10,000 sqm): £25,000–£80,000 per annum
- Enterprise single site (10,000+ sqm): £80,000–£250,000+ per annum
- Multiply by 0.7 per additional site (economies of scale)
- Add 20-35% for hard FM complexity in industrial and healthcare sectors
- Add 15% for hotel and hospitality (24/7 uptime requirements)
- Adjust up if services requested are comprehensive, down if basic PPM only

You must respond in exactly this JSON format only:

{
  "annualLow": number,
  "annualHigh": number,
  "monthlyLow": number,
  "monthlyHigh": number,
  "includedServices": ["Service 1", "Service 2"],
  "assumptions": ["Assumption 1", "Assumption 2", "Assumption 3"],
  "savingsEstimate": "e.g. Switching from reactive to PPM could save an estimated £X–£Y per annum based on industry benchmarks",
  "nextStep": "1-2 sentence personalised recommendation for this specific site profile"
}`;

function buildUserPrompt(profile: Record<string, string>): string {
  return `Please estimate a PPM programme cost for this site profile:

Sector: ${profile.sector || "Not specified"}
Building type: ${profile.buildingType || "Not specified"}
Number of sites: ${profile.siteCount || "Not specified"}
Site size: ${profile.size || "Not specified"}
Current annual reactive spend: ${profile.reactiveSpend || "Not specified"}
Services required: ${profile.services || "Not specified"}
Compliance priority: ${profile.compliance || "Not specified"}

Produce the cost estimate JSON as instructed.`;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { profile, contact } = body;

    if (!profile || typeof profile !== "object") {
      return NextResponse.json({ error: "Invalid profile" }, { status: 400 });
    }

    // Store lead in Supabase contact_submissions
    if (contact?.email) {
      try {
        const message = `PPM Estimator submission:\n${JSON.stringify(profile, null, 2)}`;
        const { data: leadData, error: leadError } = await supabase.from("contact_submissions").insert({
          name: contact.name || "PPM Estimator Lead",
          email: contact.email,
          company: contact.company || null,
          phone: contact.phone || null,
          subject: "PPM Cost Estimator Lead",
          message: message,
          source_page: "/tools/ppm-estimator",
          status: "new",
        }).select().single();

        if (!leadError && leadData) {
          await sendContactNotification({
            name: contact.name || "PPM Estimator Lead",
            email: contact.email,
            company: contact.company || null,
            phone: contact.phone || null,
            subject: "PPM Cost Estimator Lead",
            message: message,
            source_page: "/tools/ppm-estimator",
            id: leadData.id
          });
        }
      } catch (e) {
        // Non-fatal — continue generating estimate
        console.warn("Could not save or notify lead:", e);
      }
    }

    // Get API key
    let apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) {
      const { data } = await supabase
        .from("api_integrations")
        .select("credentials")
        .eq("service_type", "anthropic")
        .eq("is_active", true)
        .single();
      if (data?.credentials) {
        apiKey = (data.credentials as any).api_key;
      }
    }

    if (!apiKey) {
      return NextResponse.json({ error: "Could not generate estimate" }, { status: 500 });
    }

    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        model: "claude-3-5-sonnet-20240620",
        max_tokens: 1024,
        system: systemPrompt,
        messages: [{ role: "user", content: buildUserPrompt(profile) }],
      }),
    });

    if (!response.ok) {
      const err = await response.json();
      console.error("Anthropic API error:", err);
      return NextResponse.json({ error: "Could not generate estimate" }, { status: 500 });
    }

    const data = await response.json();
    const rawText: string = data.content[0]?.text ?? "";

    const jsonText = rawText
      .replace(/^```json\s*/i, "")
      .replace(/^```\s*/i, "")
      .replace(/\s*```$/i, "")
      .trim();

    let estimate: PPMEstimate;
    try {
      estimate = JSON.parse(jsonText);
    } catch {
      console.error("JSON parse error. Raw:", rawText);
      return NextResponse.json({ error: "Could not generate estimate" }, { status: 500 });
    }

    return NextResponse.json(estimate);
  } catch (error) {
    console.error("PPM Estimator error:", error);
    return NextResponse.json({ error: "Could not generate estimate" }, { status: 500 });
  }
}
