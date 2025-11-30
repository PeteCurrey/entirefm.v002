import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.3";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    const payload = await req.json();
    console.log('Received job payload:', payload);

    // Validate required fields
    const requiredFields = [
      'siteName',
      'siteLocation',
      'assetOrArea',
      'priority',
      'description',
      'contactName',
      'contactPhone'
    ];

    const missingFields = requiredFields.filter(field => !payload[field]);
    
    if (missingFields.length > 0) {
      console.error('Missing required fields:', missingFields);
      return new Response(
        JSON.stringify({ 
          error: 'Missing required fields',
          missing: missingFields 
        }),
        { 
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      );
    }

    // Generate job reference
    const { data: jobRefData, error: jobRefError } = await supabase
      .rpc('generate_job_ref');

    if (jobRefError) {
      console.error('Error generating job ref:', jobRefError);
      return new Response(
        JSON.stringify({ error: 'Failed to generate job reference' }),
        { 
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      );
    }

    const jobRef = jobRefData;
    console.log('Generated job ref:', jobRef);

    // Insert job into database
    const { data: job, error: insertError } = await supabase
      .from('jobs')
      .insert({
        job_ref: jobRef,
        site_name: payload.siteName,
        site_location: payload.siteLocation,
        asset_or_area: payload.assetOrArea,
        priority: payload.priority,
        description: payload.description,
        access_requirements: payload.accessRequirements || null,
        contact_name: payload.contactName,
        contact_phone: payload.contactPhone,
        contact_email: payload.contactEmail || null,
        source: payload.source || 'web-chat',
        status: 'Logged'
      })
      .select()
      .single();

    if (insertError) {
      console.error('Error inserting job:', insertError);
      return new Response(
        JSON.stringify({ error: 'Failed to create job', details: insertError }),
        { 
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      );
    }

    console.log('Job created successfully:', job);

    return new Response(
      JSON.stringify({
        jobRef: jobRef,
        status: 'logged',
        message: 'Job successfully created.',
        job: job
      }),
      { 
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    );

  } catch (error) {
    console.error('Unexpected error:', error);
    return new Response(
      JSON.stringify({ 
        error: 'Internal server error',
        message: error instanceof Error ? error.message : 'Unknown error'
      }),
      { 
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    );
  }
});