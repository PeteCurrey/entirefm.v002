import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.3';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface SupplierApplicationData {
  companyName: string;
  registeredAddress: string;
  yearsEstablished: number;
  website?: string;
  contactName: string;
  email: string;
  phone: string;
  regions: string[];
  serviceCategories: string[];
  hasSafetyPolicy: boolean;
  hasNearMissReporting: boolean;
  hasEngineerQualificationTracking: boolean;
  insuranceFiles: Array<{ name: string; path: string; size: number }>;
  accreditationFiles: Array<{ name: string; path: string; size: number }>;
  ramsFile?: { name: string; path: string; size: number };
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_ANON_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    const applicationData: SupplierApplicationData = await req.json();

    console.log('Received supplier application:', {
      company: applicationData.companyName,
      email: applicationData.email,
      regions: applicationData.regions,
      categories: applicationData.serviceCategories,
    });

    // Insert application into database
    const { data, error } = await supabase
      .from('supplier_applications')
      .insert({
        company_name: applicationData.companyName,
        registered_address: applicationData.registeredAddress,
        years_established: applicationData.yearsEstablished,
        website: applicationData.website,
        contact_name: applicationData.contactName,
        email: applicationData.email,
        phone: applicationData.phone,
        regions: applicationData.regions,
        service_categories: applicationData.serviceCategories,
        has_safety_policy: applicationData.hasSafetyPolicy,
        has_near_miss_reporting: applicationData.hasNearMissReporting,
        has_engineer_qualification_tracking: applicationData.hasEngineerQualificationTracking,
        insurance_documents: applicationData.insuranceFiles,
        accreditation_documents: applicationData.accreditationFiles,
        rams_template: applicationData.ramsFile,
        status: 'pending',
      })
      .select()
      .single();

    if (error) {
      console.error('Database error:', error);
      throw error;
    }

    console.log('Successfully created supplier application:', data.id);

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Application submitted successfully',
        applicationId: data.id,
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      }
    );
  } catch (error) {
    console.error('Error processing supplier application:', error);

    const errorMessage = error instanceof Error ? error.message : 'Failed to submit application';

    return new Response(
      JSON.stringify({
        success: false,
        error: errorMessage,
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      }
    );
  }
});
