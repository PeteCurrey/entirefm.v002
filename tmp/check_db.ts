import { supabase } from "./src/integrations/supabase/client";

async function checkIntegrations() {
  const { data, error } = await supabase
    .from('api_integrations')
    .select('*')
    .eq('service_type', 'anthropic');
  
  if (error) {
    console.error("Error fetching integrations:", error);
  } else {
    console.log("Anthropic integrations found:", data.length);
    data.forEach(d => {
      console.log(`ID: ${d.id}, Name: ${d.name}, Active: ${d.is_active}`);
    });
  }
}

checkIntegrations();
