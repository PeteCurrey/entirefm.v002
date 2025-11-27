import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.3";
import { Resend } from "https://esm.sh/resend@2.0.0";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface ProposalRequest {
  company_name: string;
  contact_name?: string;
  email: string;
  phone?: string;
  business_type?: string;
  sites: Array<{
    city: string;
    buildings: number;
    is24_7: boolean;
  }>;
  services: string[];
  has_existing_provider?: boolean;
  contract_expiry_date?: string;
  budget_approval_status?: string;
  urgency_level?: string;
  documents?: string[];
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? ''
    );

    const proposalData: ProposalRequest = await req.json();

    console.log('Received proposal submission:', {
      company: proposalData.company_name,
      email: proposalData.email,
      services_count: proposalData.services.length,
      sites_count: proposalData.sites.length,
    });

    // Validate required fields
    if (!proposalData.company_name || !proposalData.email) {
      return new Response(
        JSON.stringify({ error: 'Company name and email are required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Insert proposal into database
    const { data, error } = await supabaseClient
      .from('proposal_requests')
      .insert({
        company_name: proposalData.company_name,
        contact_name: proposalData.contact_name,
        email: proposalData.email,
        phone: proposalData.phone,
        business_type: proposalData.business_type,
        sites: proposalData.sites,
        services: proposalData.services,
        has_existing_provider: proposalData.has_existing_provider,
        contract_expiry_date: proposalData.contract_expiry_date,
        budget_approval_status: proposalData.budget_approval_status,
        urgency_level: proposalData.urgency_level,
        documents: proposalData.documents || [],
        status: 'new',
      })
      .select()
      .single();

    if (error) {
      console.error('Database error:', error);
      return new Response(
        JSON.stringify({ error: 'Failed to submit proposal' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log('Proposal submitted successfully:', data.id);

    // Send email notification using Resend
    try {
      const resendApiKey = Deno.env.get('RESEND_API_KEY');
      if (resendApiKey) {
        const resend = new Resend(resendApiKey);
        
        const servicesHtml = proposalData.services.map(s => `<li>${s}</li>`).join('');
        const sitesHtml = proposalData.sites.map((site, idx) => `
          <li>
            <strong>Site ${idx + 1}:</strong> ${site.city} - 
            ${site.buildings} building${site.buildings > 1 ? 's' : ''} 
            ${site.is24_7 ? '(24/7 operation)' : ''}
          </li>
        `).join('');
        
        await resend.emails.send({
          from: 'EntireFM Proposals <onboarding@resend.dev>',
          to: ['enquiries@entirefm.com'],
          subject: `New Proposal Request from ${proposalData.company_name}`,
          html: `
            <h2>New Proposal Request</h2>
            <h3>Company Information</h3>
            <p><strong>Company:</strong> ${proposalData.company_name}</p>
            ${proposalData.contact_name ? `<p><strong>Contact:</strong> ${proposalData.contact_name}</p>` : ''}
            <p><strong>Email:</strong> ${proposalData.email}</p>
            ${proposalData.phone ? `<p><strong>Phone:</strong> ${proposalData.phone}</p>` : ''}
            ${proposalData.business_type ? `<p><strong>Business Type:</strong> ${proposalData.business_type}</p>` : ''}
            
            <h3>Sites (${proposalData.sites.length})</h3>
            <ul>${sitesHtml}</ul>
            
            <h3>Services Required (${proposalData.services.length})</h3>
            <ul>${servicesHtml}</ul>
            
            <h3>Procurement Details</h3>
            ${proposalData.has_existing_provider !== undefined ? `<p><strong>Existing Provider:</strong> ${proposalData.has_existing_provider ? 'Yes' : 'No'}</p>` : ''}
            ${proposalData.contract_expiry_date ? `<p><strong>Contract Expiry:</strong> ${proposalData.contract_expiry_date}</p>` : ''}
            ${proposalData.budget_approval_status ? `<p><strong>Budget Status:</strong> ${proposalData.budget_approval_status}</p>` : ''}
            ${proposalData.urgency_level ? `<p><strong>Urgency:</strong> ${proposalData.urgency_level}</p>` : ''}
            
            <hr>
            <p><small>Submission ID: ${data.id}</small></p>
          `,
        });
        console.log('Email notification sent successfully');
      } else {
        console.warn('RESEND_API_KEY not configured - email notification skipped');
      }
    } catch (emailError: any) {
      console.error('Failed to send email notification:', emailError);
      // Don't fail the entire request if email fails
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        id: data.id,
        message: 'Proposal submitted successfully' 
      }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error: any) {
    console.error('Error in submit-proposal function:', error);
    return new Response(
      JSON.stringify({ error: error?.message || 'An unexpected error occurred' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});