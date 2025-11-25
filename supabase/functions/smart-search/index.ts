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
    const { query, results } = await req.json();
    
    if (!query) {
      return new Response(
        JSON.stringify({ error: 'Query is required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
    if (!LOVABLE_API_KEY) {
      throw new Error('LOVABLE_API_KEY is not configured');
    }

    // Create context from search results
    const resultsContext = results.map((r: any) => 
      `${r.category}: ${r.title} - ${r.description || ''}`
    ).join('\n');

    const systemPrompt = `You are an intelligent search assistant for EntireFM, a facilities management company. 
Analyze the user's search query and categorize their intent. Return structured suggestions based on these categories:

**Services Categories:**
- Fire Safety: fire alarms, emergency lighting, sprinklers, AOV, smoke vents, fire dampers, fire doors
- Electrical: EICR, electrical compliance, power quality, UPS, emergency lighting
- HVAC: TM44, F-Gas, air conditioning, ventilation, AHU, fume extraction
- Water Hygiene: Legionella, ACOP L8, water treatment, TMV testing
- Gas Safety: Gas Safe, landlord certificates, commercial gas
- PPM: planned maintenance, asset lifecycle, reactive maintenance
- Height & Safety: BMU cradles, mansafe testing, abseil rails, roof safety
- Industrial: lifting equipment, LEV, dock levellers, compressor systems, pump stations

**Sectors:** offices, hotels, airports, PBSA, student housing, logistics, healthcare, retail, education

**Soft Services:** cleaning, grounds maintenance, concierge, waste management

Identify which categories match the query and explain why. Be specific about related services.`;

    const response = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${LOVABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemini-2.5-flash',
        messages: [
          { role: 'system', content: systemPrompt },
          { 
            role: 'user', 
            content: `Search query: "${query}"\n\nAvailable results:\n${resultsContext}\n\nAnalyze this query and suggest the most relevant categories and services.`
          }
        ],
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: 'Rate limit exceeded. Please try again shortly.' }),
          { status: 429, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: 'AI service temporarily unavailable.' }),
          { status: 402, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
      const errorText = await response.text();
      console.error('AI gateway error:', response.status, errorText);
      throw new Error(`AI gateway error: ${response.status}`);
    }

    const data = await response.json();
    const aiAnalysis = data.choices[0]?.message?.content || '';

    return new Response(
      JSON.stringify({ 
        success: true,
        analysis: aiAnalysis
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200 
      }
    );

  } catch (error) {
    console.error('Smart search error:', error);
    return new Response(
      JSON.stringify({ 
        error: error instanceof Error ? error.message : 'Search failed',
        success: false
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500 
      }
    );
  }
});
