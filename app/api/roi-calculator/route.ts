import { NextResponse } from "next/server";
import { calculateROI, type FMInputs } from "@/lib/roiCalculator";
import { supabase } from "@/integrations/supabase/client";

export async function POST(req: Request) {
  try {
    const { inputs, contact } = await req.json() as { inputs: FMInputs; contact: any };

    const results = calculateROI(inputs);

    // Save lead
    if (contact?.email) {
      try {
        await supabase.from("contact_submissions").insert({
          name: contact.name,
          email: contact.email,
          company: contact.company || null,
          phone: contact.phone || null,
          subject: "FM ROI Calculator Lead",
          message: `Annual saving: £${results.annualSaving.toLocaleString()}. 5yr saving: £${results.fiveYearSaving.toLocaleString()}. ROI: ${results.roiPercentage}%. Sector: ${inputs.sector}. Sites: ${inputs.numberOfSites}. Wants proposal: ${contact.wantsProposal}`,
          source_page: "/tools/fm-roi-calculator",
          status: "new",
        });
      } catch (e) {
        console.warn("Could not save ROI lead:", e);
      }
    }

    // Generate AI summary
    let summary = `Based on your inputs, switching to EntireFM TFM could save you approximately £${results.annualSaving.toLocaleString()} per year — a total of £${results.fiveYearSaving.toLocaleString()} over five years, representing a ${results.roiPercentage}% return on your FM investment. Your current model carries £${results.currentHiddenCosts.toLocaleString()} in hidden costs that are not reflected in your FM budget. We recommend requesting a detailed site survey to validate these figures and build a precise cost proposal for your estate.`;

    try {
      let apiKey = process.env.ANTHROPIC_API_KEY;
      if (!apiKey) {
        const { data } = await supabase.from("api_integrations").select("credentials").eq("service_type", "anthropic").eq("is_active", true).single();
        if (data?.credentials) apiKey = (data.credentials as any).api_key;
      }

      if (apiKey) {
        const aiRes = await fetch("https://api.anthropic.com/v1/messages", {
          method: "POST",
          headers: { "x-api-key": apiKey, "anthropic-version": "2023-06-01", "content-type": "application/json" },
          body: JSON.stringify({
            model: "claude-3-5-sonnet-20240620",
            max_tokens: 300,
            system: "You are an FM financial analyst. Write a 3-sentence executive summary of these FM cost comparison results. Be specific, use the numbers, and end with a clear recommendation. Professional tone. Return plain text only — no markdown.",
            messages: [{ role: "user", content: `Annual saving: £${results.annualSaving.toLocaleString()}. 5-year saving: £${results.fiveYearSaving.toLocaleString()}. ROI: ${results.roiPercentage}%. Hidden costs identified: £${results.currentHiddenCosts.toLocaleString()}. Main savings: reactive reduction £${results.projectedReactiveSavings.toLocaleString()}, management time £${results.projectedManagementTimeSaving.toLocaleString()}, compliance £${results.projectedComplianceSaving.toLocaleString()}. Sector: ${inputs.sector}. Sites: ${inputs.numberOfSites}.` }],
          }),
        });
        if (aiRes.ok) {
          const aiData = await aiRes.json();
          summary = aiData.content[0]?.text ?? summary;
        }
      }
    } catch (e) {
      console.warn("AI summary failed, using fallback:", e);
    }

    return NextResponse.json({ results, summary });
  } catch (error) {
    console.error("ROI calculator error:", error);
    return NextResponse.json({ error: "Calculation failed" }, { status: 500 });
  }
}
