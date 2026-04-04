const { loadEnvConfig } = require('@next/env')
const { createClient } = require('@supabase/supabase-js')

loadEnvConfig(process.cwd())

async function check() {
  const client = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  )
  const { data, error } = await client
    .from('api_integrations')
    .update({ name: 'Anthropic Claude API' })
    .eq('service_type', 'anthropic')
    
  console.log('Update Error:', error)
  console.log('Update Data:', data)
}
check()
