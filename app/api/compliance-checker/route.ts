import { NextResponse } from "next/server";
import { supabase } from "@/integrations/supabase/client";
import type { ComplianceReport, ComplianceObligation } from "@/lib/toolTypes";

const systemPrompt = `You are an expert UK facilities management compliance advisor with deep knowledge of statutory building maintenance requirements, SFG20, fire safety regulations, electrical compliance, water safety (Legionella L8 ACoP), and health and safety law.

Your job is to analyse a building's profile and produce a clear, practical compliance report. Be specific, authoritative, and genuinely useful. Reference actual UK legislation and standards where relevant (Regulatory Reform (Fire Safety) Order 2005, BS 7671, L8 ACoP, EICR regulations etc.)

Always structure your response using exactly this JSON format — no preamble, no markdown, just JSON:

{
  "overallRisk": "Low" | "Medium" | "High",
  "summary": "2-3 sentence summary of their compliance position",
  "obligations": [
    {
      "area": "Area name e.g. Fire Safety",
      "status": "Required" | "Recommended" | "Review Needed",
      "frequency": "e.g. Annual / Quarterly / 6-monthly",
      "detail": "1-2 sentences on what is required and the relevant standard or legislation",
      "urgency": "Immediate" | "Within 3 months" | "Within 12 months"
    }
  ],
  "topRisks": [
    "Short string describing top risk 1",
    "Short string describing top risk 2",
    "Short string describing top risk 3"
  ],
  "recommendation": "2-3 sentence tailored recommendation — what they should do first and why EntireFM is well placed to help"
}`;

function buildUserPrompt(answers: Record<string, string>): string {
  return `Please analyse the following building profile and produce a compliance report:

Building type: ${answers.buildingType || "Not specified"}
Sector: ${answers.sector || "Not specified"}
Approximate size: ${answers.size || "Not specified"}
Number of floors: ${answers.floors || "Not specified"}
Current FM arrangement: ${answers.currentFM || "Not specified"}
Last PPM review: ${answers.lastPPM || "Not specified"}
Known compliance gaps: ${answers.gaps || "None specified"}
Primary concern: ${answers.concern || "Not specified"}

Produce the compliance report JSON as instructed.`;
}

export async function POST(req: Request) {
  try {
    const { answers, contact } = await req.json();

    if (!answers || typeof answers !== "object") {
      return NextResponse.json({ error: "Invalid answers" }, { status: 400 });
    }

    // Save lead
    if (contact?.email) {
      try {
        await supabase.from("contact_submissions").insert({
          name: contact.name || "Compliance Audit Lead",
          email: contact.email,
          company: contact.company || null,
          phone: contact.phone || null,
          subject: "FM Compliance Audit Lead",
          message: `Compliance Checker submission:\nBuilding: ${answers.buildingType}\nSector: ${answers.sector}\n${JSON.stringify(answers, null, 2)}`,
          source_page: "/tools/compliance-checker",
          status: "new",
        });
      } catch (e) {
        console.warn("Could not save compliance lead:", e);
      }
    }

    // Get API key — env first, then DB
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
      return NextResponse.json({ error: "Could not generate report" }, { status: 500 });
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
        max_tokens: 2048,
        system: systemPrompt,
        messages: [
          {
            role: "user",
            content: buildUserPrompt(answers),
          },
        ],
      }),
    });

    if (!response.ok) {
      const err = await response.json();
      console.error("Anthropic API error:", err);
      return NextResponse.json({ error: "Could not generate report" }, { status: 500 });
    }

    const data = await response.json();
    const rawText: string = data.content[0]?.text ?? "";

    // Strip markdown code fences if any
    const jsonText = rawText
      .replace(/^```json\s*/i, "")
      .replace(/^```\s*/i, "")
      .replace(/\s*```$/i, "")
      .trim();

    let report: ComplianceReport;
    try {
      report = JSON.parse(jsonText);
    } catch {
      console.error("JSON parse error. Raw:", rawText);
      return NextResponse.json({ error: "Could not generate report" }, { status: 500 });
    }

    return NextResponse.json(report);
  } catch (error) {
    console.error("Compliance checker error:", error);
    return NextResponse.json({ error: "Could not generate report" }, { status: 500 });
  }
}
