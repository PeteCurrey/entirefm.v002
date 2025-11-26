import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log('Pinging Google with sitemap update...');
    
    const sitemapUrl = 'https://entirefm.com/sitemap.xml';
    const googlePingUrl = `https://www.google.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`;
    
    // Ping Google's public sitemap endpoint
    const response = await fetch(googlePingUrl, {
      method: 'GET',
    });
    
    if (!response.ok) {
      console.error('Google ping failed:', response.status, response.statusText);
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: `Google returned status ${response.status}` 
        }),
        { 
          status: 500, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }
    
    console.log('Successfully pinged Google sitemap endpoint');
    
    // Also ping Bing's sitemap endpoint
    const bingPingUrl = `https://www.bing.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`;
    const bingResponse = await fetch(bingPingUrl, {
      method: 'GET',
    });
    
    console.log('Bing ping status:', bingResponse.status);
    
    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Successfully notified Google and Bing of sitemap update',
        details: {
          google: response.status === 200 ? 'success' : 'failed',
          bing: bingResponse.status === 200 ? 'success' : 'failed',
          sitemapUrl,
          timestamp: new Date().toISOString()
        }
      }),
      { 
        status: 200, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );
    
  } catch (error) {
    console.error('Error pinging sitemap:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: errorMessage 
      }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );
  }
});
