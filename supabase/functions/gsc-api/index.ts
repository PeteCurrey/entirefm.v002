import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.84.0';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? '',
      { global: { headers: { Authorization: req.headers.get('Authorization')! } } }
    );

    const { data: { user } } = await supabaseClient.auth.getUser();
    if (!user) {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), {
        status: 401,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const url = new URL(req.url);
    const action = url.searchParams.get('action');

    switch (action) {
      case 'exchange-code': {
        const { code, redirectUri } = await req.json();
        const tokenResponse = await fetch('https://oauth2.googleapis.com/token', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams({
            code,
            client_id: Deno.env.get('GOOGLE_CLIENT_ID') ?? '',
            client_secret: Deno.env.get('GOOGLE_CLIENT_SECRET') ?? '',
            redirect_uri: redirectUri,
            grant_type: 'authorization_code',
          }),
        });

        if (!tokenResponse.ok) {
          console.error('Token exchange failed:', await tokenResponse.text());
          throw new Error('Failed to exchange authorization code');
        }

        const tokens = await tokenResponse.json();
        
        // Get user's sites from GSC
        const sitesResponse = await fetch('https://www.googleapis.com/webmasters/v3/sites', {
          headers: { 'Authorization': `Bearer ${tokens.access_token}` },
        });

        if (!sitesResponse.ok) {
          console.error('Failed to fetch sites:', await sitesResponse.text());
          throw new Error('Failed to fetch GSC sites');
        }

        const sitesData = await sitesResponse.json();
        const sites = sitesData.siteEntry || [];

        // Store connection for first site (or let user select)
        if (sites.length > 0) {
          const expiresAt = new Date(Date.now() + tokens.expires_in * 1000).toISOString();
          
          await supabaseClient.from('gsc_connections').upsert({
            user_id: user.id,
            site_url: sites[0].siteUrl,
            access_token: tokens.access_token,
            refresh_token: tokens.refresh_token,
            token_expires_at: expiresAt,
          });
        }

        return new Response(JSON.stringify({ success: true, sites }), {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }

      case 'get-connection': {
        const { data: connection } = await supabaseClient
          .from('gsc_connections')
          .select('*')
          .eq('user_id', user.id)
          .single();

        return new Response(JSON.stringify({ connection }), {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }

      case 'refresh-token': {
        const { connectionId } = await req.json();
        
        const { data: connection } = await supabaseClient
          .from('gsc_connections')
          .select('*')
          .eq('id', connectionId)
          .eq('user_id', user.id)
          .single();

        if (!connection) {
          throw new Error('Connection not found');
        }

        const tokenResponse = await fetch('https://oauth2.googleapis.com/token', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams({
            refresh_token: connection.refresh_token,
            client_id: Deno.env.get('GOOGLE_CLIENT_ID') ?? '',
            client_secret: Deno.env.get('GOOGLE_CLIENT_SECRET') ?? '',
            grant_type: 'refresh_token',
          }),
        });

        if (!tokenResponse.ok) {
          throw new Error('Failed to refresh token');
        }

        const tokens = await tokenResponse.json();
        const expiresAt = new Date(Date.now() + tokens.expires_in * 1000).toISOString();

        await supabaseClient
          .from('gsc_connections')
          .update({
            access_token: tokens.access_token,
            token_expires_at: expiresAt,
          })
          .eq('id', connectionId);

        return new Response(JSON.stringify({ success: true }), {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }

      case 'inspect-url': {
        const inspectUrl = url.searchParams.get('url');
        const { data: connection } = await supabaseClient
          .from('gsc_connections')
          .select('*')
          .eq('user_id', user.id)
          .single();

        if (!connection) {
          throw new Error('No GSC connection found');
        }

        // Check if token needs refresh
        if (new Date(connection.token_expires_at) < new Date()) {
          const refreshUrl = new URL(req.url);
          refreshUrl.searchParams.set('action', 'refresh-token');
          await fetch(refreshUrl, {
            method: 'POST',
            headers: { Authorization: req.headers.get('Authorization')! },
            body: JSON.stringify({ connectionId: connection.id }),
          });
        }

        const inspectionResponse = await fetch(
          `https://searchconsole.googleapis.com/v1/urlInspection/index:inspect`,
          {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${connection.access_token}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              inspectionUrl: inspectUrl,
              siteUrl: connection.site_url,
            }),
          }
        );

        if (!inspectionResponse.ok) {
          console.error('URL inspection failed:', await inspectionResponse.text());
          throw new Error('Failed to inspect URL');
        }

        const data = await inspectionResponse.json();
        return new Response(JSON.stringify(data), {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }

      case 'search-analytics': {
        const { startDate, endDate, dimensions } = await req.json();
        
        const { data: connection } = await supabaseClient
          .from('gsc_connections')
          .select('*')
          .eq('user_id', user.id)
          .single();

        if (!connection) {
          throw new Error('No GSC connection found');
        }

        const analyticsResponse = await fetch(
          `https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(connection.site_url)}/searchAnalytics/query`,
          {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${connection.access_token}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              startDate,
              endDate,
              dimensions: dimensions || ['page'],
              rowLimit: 1000,
            }),
          }
        );

        if (!analyticsResponse.ok) {
          console.error('Search analytics failed:', await analyticsResponse.text());
          throw new Error('Failed to fetch search analytics');
        }

        const data = await analyticsResponse.json();
        
        // Cache the data
        if (data.rows) {
          for (const row of data.rows) {
            await supabaseClient.from('gsc_crawl_data').upsert({
              connection_id: connection.id,
              url: row.keys[0],
              clicks: row.clicks,
              impressions: row.impressions,
              position: row.position,
              indexed: true,
            });
          }
        }

        return new Response(JSON.stringify(data), {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }

      case 'crawl-stats': {
        const { data: connection } = await supabaseClient
          .from('gsc_connections')
          .select('*')
          .eq('user_id', user.id)
          .single();

        if (!connection) {
          throw new Error('No GSC connection found');
        }

        const sitemapsResponse = await fetch(
          `https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(connection.site_url)}/sitemaps`,
          {
            headers: { 'Authorization': `Bearer ${connection.access_token}` },
          }
        );

        if (!sitemapsResponse.ok) {
          console.error('Sitemaps fetch failed:', await sitemapsResponse.text());
          throw new Error('Failed to fetch sitemaps');
        }

        const sitemapsData = await sitemapsResponse.json();

        return new Response(JSON.stringify(sitemapsData), {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }

      default:
        return new Response(JSON.stringify({ error: 'Invalid action' }), {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
    }
  } catch (error) {
    console.error('Error in gsc-api function:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    return new Response(JSON.stringify({ error: errorMessage }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});