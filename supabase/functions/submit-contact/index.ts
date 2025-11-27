import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.3";
import { Resend } from "https://esm.sh/resend@2.0.0";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface ContactRequest {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
  sector?: string;
  location?: string;
  subject?: string;
  source_page?: string;
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

    const contactData: ContactRequest = await req.json();

    console.log('Received contact submission:', {
      name: contactData.name,
      email: contactData.email,
    });

    // Validate required fields
    if (!contactData.name || !contactData.email || !contactData.message) {
      return new Response(
        JSON.stringify({ error: 'Name, email, and message are required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Insert contact submission into database
    const { data, error } = await supabaseClient
      .from('contact_submissions')
      .insert({
        name: contactData.name,
        email: contactData.email,
        phone: contactData.phone,
        company: contactData.company,
        message: contactData.message,
        sector: contactData.sector,
        location: contactData.location,
        subject: contactData.subject,
        source_page: contactData.source_page,
        status: 'new',
      })
      .select()
      .single();

    if (error) {
      console.error('Database error:', error);
      return new Response(
        JSON.stringify({ error: 'Failed to submit contact form' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log('Contact submission successful:', data.id);

    // Send email notification using Resend
    try {
      const resendApiKey = Deno.env.get('RESEND_API_KEY');
      if (resendApiKey) {
        const resend = new Resend(resendApiKey);
        
        await resend.emails.send({
          from: 'EntireFM Contact Form <onboarding@resend.dev>',
          to: ['enquiries@entirefm.com'],
          subject: `New Contact Submission from ${contactData.name}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${contactData.name}</p>
            <p><strong>Email:</strong> ${contactData.email}</p>
            ${contactData.phone ? `<p><strong>Phone:</strong> ${contactData.phone}</p>` : ''}
            ${contactData.company ? `<p><strong>Company:</strong> ${contactData.company}</p>` : ''}
            ${contactData.sector ? `<p><strong>Sector:</strong> ${contactData.sector}</p>` : ''}
            ${contactData.location ? `<p><strong>Location:</strong> ${contactData.location}</p>` : ''}
            ${contactData.subject ? `<p><strong>Subject:</strong> ${contactData.subject}</p>` : ''}
            ${contactData.source_page ? `<p><strong>Source Page:</strong> ${contactData.source_page}</p>` : ''}
            <h3>Message:</h3>
            <p>${contactData.message.replace(/\n/g, '<br>')}</p>
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
        message: 'Contact form submitted successfully' 
      }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error: any) {
    console.error('Error in submit-contact function:', error);
    return new Response(
      JSON.stringify({ error: error?.message || 'An unexpected error occurred' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});