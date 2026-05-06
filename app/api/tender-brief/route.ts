import { NextResponse } from "next/server";
import { supabase } from "@/integrations/supabase/client";
import type { TenderBrief, TenderBriefSection } from "@/lib/toolTypes";
import { sendContactNotification } from "@/lib/mail";

const systemPrompt = `You are a senior UK facilities management consultant with extensive experience writing FM service specifications and tender documents. Your task is to produce a professional, structured FM brief that a client could use to go to tender or share with FM providers.

The document should read as if written by an experienced FM procurement specialist. Use professional language, reference relevant UK standards (SFG20, BESA, BS standards where appropriate), and be specific about service frequencies, KPIs, and SLA expectations.

Respond ONLY in this JSON format:

{
  "documentTitle": "FM Service Specification — [Company/Site Name]",
  "executiveSummary": "150 words professional summary of the requirement",
  "sections": [
    {
      "title": "Section heading",
      "content": "Full section content — multiple paragraphs where needed"
    }
  ],
  "kpis": ["KPI 1 — specific and measurable", "KPI 2", "KPI 3"],
  "slaRequirements": ["SLA 1 — e.g. Emergency response: within 2 hours", "SLA 2"],
  "complianceRequirements": ["Compliance requirement 1", "Compliance requirement 2"],
  "evaluationCriteria": ["Evaluation criterion 1", "Evaluation criterion 2"]
}

Sections to include (build content for each based on the user's inputs):
1. Background and Scope of Requirement
2. Site Portfolio Overview
3. Hard FM Services Required
4. Soft FM Services Required
5. PPM and Compliance Requirements
6. Helpdesk and Reactive Maintenance
7. Reporting and Account Management
8. TUPE Considerations (if applicable)
9. Contract Term and Mobilisation
10. Sustainability Requirements`;

function buildUserPrompt(r: Record<string, any>): string {
  return `Please produce a professional FM tender brief for the following requirement:

Organisation: ${r.orgName || "Not specified"}
Site description: ${r.siteDescription || "Not specified"}
Number of sites: ${r.siteCount || "Not specified"}
Sectors: ${Array.isArray(r.sectors) ? r.sectors.join(", ") : (r.sectors || "Not specified")}
Hard FM services needed: ${Array.isArray(r.hardFM) ? r.hardFM.join(", ") : (r.hardFM || "Not specified")}
Soft FM services needed: ${Array.isArray(r.softFM) ? r.softFM.join(", ") : (r.softFM || "Not specified")}
Current annual FM spend: ${r.currentSpend || "Not specified"}
Contract length preference: ${r.contractLength || "Not specified"}
Key pain points: ${r.painPoints || "Not specified"}
Compliance priorities: ${r.compliance || "Not specified"}
Mobilisation timeline: ${r.timeline || "Not specified"}
Additional requirements: ${r.additional || "None"}

Produce the FM specification JSON as instructed.`;
}

export async function POST(req: Request) {
  try {
    const { requirements, contact } = await req.json();

    if (!requirements || typeof requirements !== "object") {
      return NextResponse.json({ error: "Invalid requirements" }, { status: 400 });
    }

    // Save lead
    if (contact?.email) {
      try {
        const message = `Tender Brief submission:\nOrg: ${requirements.orgName}\n${JSON.stringify(requirements, null, 2)}`;
        const { data: leadData, error: leadError } = await supabase.from("contact_submissions").insert({
          name: contact.name || "Tender Brief Lead",
          email: contact.email,
          company: contact.company || null,
          phone: contact.phone || null,
          subject: "FM Tender Brief Generator Lead",
          message: message,
          source_page: "/tools/tender-brief",
          status: "new",
        }).select().single();

        if (!leadError && leadData) {
          await sendContactNotification({
            name: contact.name || "Tender Brief Lead",
            email: contact.email,
            company: contact.company || null,
            phone: contact.phone || null,
            subject: "FM Tender Brief Generator Lead",
            message: message,
            source_page: "/tools/tender-brief",
            id: leadData.id
          });
        }
      } catch (e) {
        console.warn("Could not save or notify lead:", e);
      }
    }

    let apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) {
      const { data } = await supabase
        .from("api_integrations")
        .select("credentials")
        .eq("service_type", "anthropic")
        .eq("is_active", true)
        .single();
      if (data?.credentials) apiKey = (data.credentials as any).api_key;
    }

    if (!apiKey) {
      return NextResponse.json({ error: "Could not generate document" }, { status: 500 });
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
        max_tokens: 3000,
        system: systemPrompt,
        messages: [{ role: "user", content: buildUserPrompt(requirements) }],
      }),
    });

    if (!response.ok) {
      console.error("Anthropic API error:", await response.json());
      return NextResponse.json({ error: "Could not generate document" }, { status: 500 });
    }

    const data = await response.json();
    const rawText: string = data.content[0]?.text ?? "";
    const jsonText = rawText.replace(/^```json\s*/i, "").replace(/^```\s*/i, "").replace(/\s*```$/i, "").trim();

    let brief: TenderBrief;
    try {
      brief = JSON.parse(jsonText);
    } catch {
      console.error("JSON parse error. Raw:", rawText);
      return NextResponse.json({ error: "Could not generate document" }, { status: 500 });
    }

    return NextResponse.json(brief);
  } catch (error) {
    console.error("Tender brief error:", error);
    return NextResponse.json({ error: "Could not generate document" }, { status: 500 });
  }
}
