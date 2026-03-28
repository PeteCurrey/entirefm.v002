import { NextResponse } from "next/server";
import { supabase } from "@/integrations/supabase/client";

export async function POST(req: Request) {
  try {
    const { type, data, context } = await req.json();

    if (!type || !data) {
      return NextResponse.json({ error: "Invalid request data" }, { status: 400 });
    }

    // Get Claude API key from env or database
    let apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) {
      const { data: dbData } = await supabase
        .from('api_integrations')
        .select('credentials')
        .eq('service_type', 'anthropic')
        .eq('is_active', true)
        .single();
      
      if (dbData?.credentials) {
        apiKey = (dbData.credentials as any).api_key;
      }
    }

    if (!apiKey) {
      return NextResponse.json({ error: "AI service not configured" }, { status: 500 });
    }

    let systemPrompt = "";
    let userPrompt = "";

    if (type === 'competitor-analysis') {
      systemPrompt = `You are an elite SEO strategist specializing in the UK Facilities Management sector. 
Your goal is to analyze competitor data and identify clear opportunities for EntireFM to gain market share.
Provide a high-impact, boutique-level strategy including:
1. Keyword Gaps: Where competitors are winning and we are missing.
2. Authority Comparison: How our Domain Rating and Backlink profile compares.
3. Actionable Content Pillars: 3-5 specific topics to create content around to outrank them.

Be concise, professional, and strategic.`;
      
      userPrompt = `Analyze this competitor data for EntireFM:
Competitor: ${data.competitorName}
Our Metrics: ${JSON.stringify(data.ourMetrics)}
Their Metrics: ${JSON.stringify(data.theirMetrics)}
Keyword Overlap: ${JSON.stringify(data.keywordOverlap)}

Context: ${context || "None provided"}`;
    } else if (type === 'keyword-strategy') {
      systemPrompt = `You are an SEO content specialist. Analyze a list of target keywords and cluster them into logical "Topic Hubs".
Suggest the best "parent" keyword for each cluster and provide a suggested Meta Title and H1 for a new page covering this cluster.
Ensure the tone is professional and search-intent focused.`;
      
      userPrompt = `Keyword List: ${JSON.stringify(data.keywords)}
Current Ranking Status: ${JSON.stringify(data.currentRankings)}
Business Goals: ${context || "UK Facilities Management lead generation"}`;
    } else if (type === 'site-audit-insights') {
      systemPrompt = `You are a technical SEO auditor. Analyze the findings from a site audit and prioritize the top 3 high-impact fixes.
Explain WHY these fixes matter and how they impact rankings.`;
      
      userPrompt = `Audit Summary: ${JSON.stringify(data.auditSummary)}
Health Score: ${data.healthScore}%
Critical Issues: ${JSON.stringify(data.issues)}`;
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
        max_tokens: 1500,
        system: systemPrompt,
        messages: [{ role: "user", content: userPrompt }],
      }),
    });

    if (!response.ok) {
      const err = await response.json();
      console.error("Anthropic API error:", err);
      return NextResponse.json({ error: "AI analysis failed" }, { status: 500 });
    }

    const aiResponse = await response.json();
    return NextResponse.json({ insight: aiResponse.content[0].text });

  } catch (error) {
    console.error("SEO Audit API error:", error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
