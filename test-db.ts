import { createClient } from '@supabase/supabase-js'

const supabaseUrl = ''
const supabaseKey = ''
const supabase = createClient(supabaseUrl, supabaseKey)

async function test() {
  const { data, error } = await supabase.from('api_integrations').select('*')
  console.log('Data:', data)
  console.log('Error:', error)
}

test()
