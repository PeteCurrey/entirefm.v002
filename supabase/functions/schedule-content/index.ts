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
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    const now = new Date().toISOString();
    console.log(`Running schedule check at ${now}`);

    // Check for scheduled content items
    const { data: scheduledContent, error: contentError } = await supabase
      .from('content_items')
      .select('*')
      .eq('status', 'scheduled')
      .lte('scheduled_for', now);

    if (contentError) {
      console.error("Error fetching scheduled content:", contentError);
      throw contentError;
    }

    let publishedContent = 0;
    let publishedSocial = 0;

    // Publish scheduled content
    for (const item of scheduledContent || []) {
      const { error: updateError } = await supabase
        .from('content_items')
        .update({
          status: 'published',
          published_at: now,
          updated_at: now
        })
        .eq('id', item.id);

      if (updateError) {
        console.error(`Error publishing content ${item.id}:`, updateError);
      } else {
        publishedContent++;
        console.log(`Published content: ${item.title}`);
      }
    }

    // Check for scheduled social posts
    const { data: scheduledSocial, error: socialError } = await supabase
      .from('social_posts')
      .select('*')
      .eq('status', 'scheduled')
      .lte('scheduled_for', now);

    if (socialError) {
      console.error("Error fetching scheduled social posts:", socialError);
      throw socialError;
    }

    // Process scheduled social posts
    for (const post of scheduledSocial || []) {
      // In a real implementation, you would call the respective social media APIs here
      // For now, we just mark them as posted
      const { error: updateError } = await supabase
        .from('social_posts')
        .update({
          status: 'posted',
          posted_at: now
        })
        .eq('id', post.id);

      if (updateError) {
        console.error(`Error updating social post ${post.id}:`, updateError);
      } else {
        publishedSocial++;
        console.log(`Posted to ${post.platform}: ${post.post_text.substring(0, 50)}...`);
      }
    }

    const summary = {
      checked_at: now,
      content_published: publishedContent,
      social_posted: publishedSocial,
      total_processed: publishedContent + publishedSocial
    };

    console.log("Schedule check complete:", summary);

    return new Response(JSON.stringify({ 
      success: true, 
      ...summary
    }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });

  } catch (error) {
    console.error("Error in schedule-content function:", error);
    return new Response(JSON.stringify({ 
      error: error instanceof Error ? error.message : "Unknown error" 
    }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
