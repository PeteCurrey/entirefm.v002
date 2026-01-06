import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { type, topic, keywords, tone, length, category } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    let systemPrompt = "";
    let userPrompt = "";

    switch (type) {
      case "blog":
        systemPrompt = `You are an expert content writer for a facilities management company called EFM Innovations. 
Write engaging, informative blog posts that demonstrate expertise in FM, compliance, and building services.
Always include practical insights and UK-specific regulations where relevant.
Use a professional but approachable tone.`;
        userPrompt = `Write a blog post about: ${topic}
${keywords ? `Include these keywords naturally: ${keywords.join(', ')}` : ''}
${tone ? `Tone: ${tone}` : 'Tone: Professional and informative'}
${length === 'short' ? 'Length: Around 500 words' : length === 'long' ? 'Length: Around 1500 words' : 'Length: Around 800 words'}

Format the response as JSON:
{
  "title": "Blog post title",
  "excerpt": "2-3 sentence summary",
  "content": "Full blog post in markdown format",
  "meta_title": "SEO optimized title (max 60 chars)",
  "meta_description": "SEO meta description (max 160 chars)",
  "suggested_keywords": ["keyword1", "keyword2", ...]
}`;
        break;

      case "fm-insights":
        systemPrompt = `You are a technical writer specializing in facilities management best practices.
Write authoritative articles about FM industry trends, compliance requirements, and operational excellence.
Focus on UK regulations and standards. Include actionable advice for FM professionals.`;
        userPrompt = `Write an FM Insights article about: ${topic}
${keywords ? `Include these keywords naturally: ${keywords.join(', ')}` : ''}
${category ? `Category: ${category}` : ''}

Format the response as JSON:
{
  "title": "Article title",
  "excerpt": "2-3 sentence summary",
  "content": "Full article in markdown format with sections and subheadings",
  "meta_title": "SEO optimized title (max 60 chars)",
  "meta_description": "SEO meta description (max 160 chars)",
  "suggested_keywords": ["keyword1", "keyword2", ...],
  "key_takeaways": ["takeaway1", "takeaway2", ...]
}`;
        break;

      case "social":
        systemPrompt = `You are a social media specialist for a facilities management company.
Create engaging social media posts that drive engagement and position the company as an industry leader.
Adapt content style for each platform while maintaining brand voice.`;
        userPrompt = `Create social media posts about: ${topic}
Generate versions for LinkedIn, Twitter, and Facebook.

Format the response as JSON:
{
  "linkedin": {
    "post_text": "LinkedIn post (professional, can be longer)",
    "hashtags": ["#hashtag1", "#hashtag2"]
  },
  "twitter": {
    "post_text": "Twitter post (280 chars max, engaging)",
    "hashtags": ["#hashtag1", "#hashtag2"]
  },
  "facebook": {
    "post_text": "Facebook post (conversational, medium length)",
    "hashtags": ["#hashtag1", "#hashtag2"]
  }
}`;
        break;

      case "seo-improve":
        systemPrompt = `You are an SEO expert. Analyze and improve content for search engine optimization.
Focus on UK search patterns and local SEO where relevant.`;
        userPrompt = `Improve the following content for SEO:
${topic}

Provide suggestions as JSON:
{
  "improved_title": "SEO optimized title",
  "improved_meta_description": "Optimized meta description",
  "keyword_suggestions": ["keyword1", "keyword2"],
  "content_improvements": ["suggestion1", "suggestion2"],
  "internal_linking_opportunities": ["page1", "page2"],
  "readability_score": "Good/Needs Improvement/Poor",
  "readability_suggestions": ["suggestion1", "suggestion2"]
}`;
        break;

      default:
        throw new Error(`Unknown content type: ${type}`);
    }

    console.log(`Generating ${type} content for topic: ${topic}`);

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userPrompt }
        ],
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Rate limit exceeded. Please try again later." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "API credits exhausted. Please add funds." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      throw new Error(`AI gateway error: ${response.status}`);
    }

    const data = await response.json();
    const generatedContent = data.choices[0].message.content;
    
    // Try to parse as JSON, otherwise return as raw content
    let parsedContent;
    try {
      // Extract JSON from markdown code blocks if present
      const jsonMatch = generatedContent.match(/```json\n?([\s\S]*?)\n?```/) || 
                        generatedContent.match(/```\n?([\s\S]*?)\n?```/);
      const jsonStr = jsonMatch ? jsonMatch[1] : generatedContent;
      parsedContent = JSON.parse(jsonStr);
    } catch {
      parsedContent = { raw_content: generatedContent };
    }

    console.log(`Successfully generated ${type} content`);

    return new Response(JSON.stringify({ 
      success: true, 
      content: parsedContent,
      type 
    }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });

  } catch (error) {
    console.error("Error in generate-content function:", error);
    return new Response(JSON.stringify({ 
      error: error instanceof Error ? error.message : "Unknown error" 
    }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
