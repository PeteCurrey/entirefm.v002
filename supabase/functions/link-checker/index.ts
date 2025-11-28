import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.84.0';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// All site routes to validate
const SITE_ROUTES = [
  '/', '/about', '/contact', '/request-proposal', '/services', '/sectors', '/locations',
  '/resources', '/case-studies', '/fm-operations',
  
  // Core services
  '/services/fire-safety', '/services/electrical-compliance', '/services/hvac-compliance',
  '/services/water-hygiene', '/services/gas-safety', '/services/ppm-compliance',
  '/services/emergency-lighting', '/services/emergency-systems', '/services/building-fabric',
  '/services/hard-services',
  
  // Critical infrastructure services
  '/services/critical/lightning-protection', '/services/critical/ups-maintenance',
  '/services/critical/generator-maintenance', '/services/critical/thermal-imaging',
  '/services/critical/arc-flash-assessment', '/services/critical/hv-switching',
  '/services/critical/power-redundancy', '/services/critical/power-quality',
  '/services/critical/data-room-audits',
  
  // Sectors
  '/sectors/offices', '/sectors/residential', '/sectors/industrial-logistics',
  '/sectors/hospitality-leisure', '/sectors/education', '/sectors/healthcare-public',
  '/sectors/airports', '/sectors/retail-service-stations',
  
  // Locations
  '/locations/london', '/locations/birmingham', '/locations/manchester', '/locations/leeds',
  '/locations/sheffield', '/locations/nottingham', '/locations/derby', '/locations/chesterfield',
  '/locations/lincoln', '/locations/leicester', '/locations/liverpool',
  
  // FM Operations
  '/fm-operations/ppm-delivery', '/fm-operations/reactive-maintenance', '/fm-operations/helpdesk',
  '/fm-operations/mobilisation', '/fm-operations/asset-lifecycle', '/fm-operations/business-continuity',
  '/fm-operations/fm-strategy', '/fm-operations/occupier-experience', '/fm-operations/tender-support',
];

// Generate regional service URLs
function generateRegionalRoutes(): string[] {
  const services = ['fire', 'electrical', 'hvac', 'water', 'gas', 'ppm', 'emergency-lighting'];
  const criticalServices = [
    'lightning-protection', 'ups-maintenance', 'generator-maintenance', 'thermal-imaging',
    'arc-flash-assessment', 'hv-switching', 'power-redundancy', 'power-quality', 'data-room-audits'
  ];
  const cities = ['london', 'birmingham', 'manchester', 'leeds', 'sheffield', 'nottingham', 'derby', 'chesterfield', 'lincoln'];
  const urls: string[] = [];
  
  services.forEach(service => {
    cities.forEach(city => {
      urls.push(`/services/${service}/${city}`);
    });
  });
  
  criticalServices.forEach(service => {
    cities.forEach(city => {
      urls.push(`/services/critical/${service}/${city}`);
    });
  });
  
  return urls;
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    console.log('Starting link validation check...');
    const startTime = Date.now();

    // Get all routes to check
    const allRoutes = [...SITE_ROUTES, ...generateRegionalRoutes()];
    console.log(`Checking ${allRoutes.length} routes...`);

    const brokenLinks: { url: string; status: number }[] = [];
    const baseUrl = Deno.env.get('SITE_URL') || 'https://entirefm.com';

    // Check each route
    let checkedCount = 0;
    for (const route of allRoutes) {
      try {
        const url = `${baseUrl}${route}`;
        const response = await fetch(url, { 
          method: 'HEAD',
          redirect: 'follow',
          signal: AbortSignal.timeout(5000) // 5 second timeout
        });
        
        if (response.status === 404) {
          brokenLinks.push({ url: route, status: 404 });
          console.log(`❌ 404: ${route}`);
        } else if (response.status >= 400) {
          brokenLinks.push({ url: route, status: response.status });
          console.log(`⚠️ ${response.status}: ${route}`);
        }
        
        checkedCount++;
        if (checkedCount % 50 === 0) {
          console.log(`Checked ${checkedCount}/${allRoutes.length} routes...`);
        }
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        console.error(`Error checking ${route}:`, errorMessage);
        brokenLinks.push({ url: route, status: 0 });
      }
    }

    const duration = Date.now() - startTime;
    const healthScore = Math.round(((allRoutes.length - brokenLinks.length) / allRoutes.length) * 100);

    const resultsData = {
      timestamp: new Date().toISOString(),
      totalRoutes: allRoutes.length,
      brokenLinks: brokenLinks,
      healthScore: healthScore,
      scanDurationMs: duration
    };

    // Store results
    const { error: insertError } = await supabase
      .from('link_validation_results')
      .insert({
        total_links_checked: allRoutes.length,
        broken_links: brokenLinks.length,
        health_score: healthScore,
        results_data: resultsData,
        scan_duration_ms: duration
      });

    if (insertError) {
      console.error('Error storing results:', insertError);
    }

    console.log(`✅ Link check complete: ${healthScore}% healthy (${brokenLinks.length} broken)`);

    return new Response(
      JSON.stringify({
        success: true,
        totalChecked: allRoutes.length,
        brokenLinks: brokenLinks.length,
        healthScore: healthScore,
        duration: `${(duration / 1000).toFixed(2)}s`,
        brokenUrls: brokenLinks
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200 
      }
    );

  } catch (error) {
    console.error('Link checker error:', error);
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
