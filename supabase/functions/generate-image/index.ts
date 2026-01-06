import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { prompt, type, aspect_ratio, content_item_id } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    // Enhance prompt based on type
    let enhancedPrompt = prompt;
    switch (type) {
      case "featured":
        enhancedPrompt = `Professional business image for a facilities management company blog. ${prompt}. Clean, modern, corporate style. High quality photography or illustration style.`;
        break;
      case "social":
        enhancedPrompt = `Eye-catching social media graphic. ${prompt}. Vibrant colors, engaging composition, suitable for LinkedIn/Twitter.`;
        break;
      case "infographic":
        enhancedPrompt = `Clean infographic style illustration. ${prompt}. Professional, minimal design with clear visual hierarchy.`;
        break;
      case "thumbnail":
        enhancedPrompt = `Thumbnail image. ${prompt}. Bold, clear subject, works well at small sizes.`;
        break;
      default:
        enhancedPrompt = `Professional business image. ${prompt}. High quality, modern style.`;
    }

    // Add aspect ratio to prompt
    if (aspect_ratio) {
      enhancedPrompt += ` ${aspect_ratio} aspect ratio.`;
    }

    console.log(`Generating ${type || 'general'} image with prompt: ${enhancedPrompt.substring(0, 100)}...`);

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash-image-preview",
        messages: [
          { role: "user", content: enhancedPrompt }
        ],
        modalities: ["image", "text"]
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
    const imageUrl = data.choices?.[0]?.message?.images?.[0]?.image_url?.url;
    
    if (!imageUrl) {
      throw new Error("No image was generated");
    }

    // If we have a content_item_id, save the media asset to the database
    if (content_item_id) {
      const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
      const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
      const supabase = createClient(supabaseUrl, supabaseKey);

      const { error: dbError } = await supabase
        .from('media_assets')
        .insert({
          content_item_id,
          type: type || 'image',
          prompt: prompt,
          url: imageUrl,
          alt_text: prompt.substring(0, 255)
        });

      if (dbError) {
        console.error("Error saving media asset:", dbError);
      }
    }

    console.log("Successfully generated image");

    return new Response(JSON.stringify({ 
      success: true, 
      image_url: imageUrl,
      type 
    }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });

  } catch (error) {
    console.error("Error in generate-image function:", error);
    return new Response(JSON.stringify({ 
      error: error instanceof Error ? error.message : "Unknown error" 
    }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
