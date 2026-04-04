const { loadEnvConfig } = require('@next/env')
const { createClient } = require('@supabase/supabase-js')

loadEnvConfig(process.cwd())

async function check() {
  console.log("URL:", !!process.env.NEXT_PUBLIC_SUPABASE_URL)
  console.log("Service Key:", !!process.env.SUPABASE_SERVICE_ROLE_KEY)
  console.log("Anon Key:", !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)
  console.log("Anthropic Key in Env:", !!process.env.ANTHROPIC_API_KEY)
  
  const client = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  )
  const { data, error } = await client
    .from('api_integrations')
    .select('*')
    .eq('service_type', 'anthropic')
    
  console.log('Error:', error)
  console.log('Data:', data)
}
check()
