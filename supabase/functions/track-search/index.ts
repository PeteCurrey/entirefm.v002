import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.84.0';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface SearchTrackingData {
  query: string;
  results_count: number;
  clicked_result?: string;
  click_position?: number;
  category?: string;
  source_page?: string;
  user_agent?: string;
}

Deno.serve(async (req) => {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    const body: SearchTrackingData = await req.json();
    
    // Validate required fields
    if (!body.query || body.query.trim().length === 0) {
      return new Response(
        JSON.stringify({ error: 'Query is required' }),
        { 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 400 
        }
      );
    }

    console.log(`📊 Tracking search: "${body.query}" (${body.results_count} results)`);

    // Insert search analytics record
    const { data, error } = await supabase
      .from('search_analytics')
      .insert({
        query: body.query.trim().toLowerCase(),
        results_count: body.results_count || 0,
        clicked_result: body.clicked_result || null,
        click_position: body.click_position || null,
        category: body.category || null,
        source_page: body.source_page || null,
        user_agent: body.user_agent || null,
      })
      .select()
      .single();

    if (error) {
      console.error('Error inserting search analytics:', error);
      return new Response(
        JSON.stringify({ error: 'Failed to track search' }),
        { 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 500 
        }
      );
    }

    console.log(`✅ Search tracked successfully: ${data.id}`);

    return new Response(
      JSON.stringify({ success: true, id: data.id }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200 
      }
    );

  } catch (error) {
    console.error('Track search error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return new Response(
      JSON.stringify({ error: errorMessage }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500 
      }
    );
  }
});
