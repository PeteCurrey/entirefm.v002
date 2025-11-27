import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.84.0";
import { Resend } from "https://esm.sh/resend@2.0.0";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const resend = new Resend(Deno.env.get('RESEND_API_KEY'));

const AI_TRIAGE_PROMPT = `You are an FM maintenance triage assistant. Summarise this maintenance issue in 1-2 sentences for an engineer or helpdesk team. Include:
- Key asset/equipment
- Location
- Risk level
- Likely discipline (fire, electrical, HVAC, water, gas, fabric, security)

Be concise and technical. Focus on actionable information.`;

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    const {
      name,
      role,
      company,
      email,
      phone,
      site_location,
      category,
      priority,
      asset_reference,
      description,
      source_page,
      attachment_url
    } = await req.json();

    console.log('Processing helpdesk job submission:', { name, company, category, priority });

    // Generate AI summary
    let aiSummary = null;
    try {
      const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
      if (LOVABLE_API_KEY) {
        const aiResponse = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${LOVABLE_API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            model: 'google/gemini-2.5-flash',
            messages: [
              { role: 'system', content: AI_TRIAGE_PROMPT },
              { 
                role: 'user', 
                content: `Category: ${category}\nPriority: ${priority}\nAsset: ${asset_reference}\nLocation: ${site_location}\nDescription: ${description}` 
              }
            ],
            temperature: 0.3,
          }),
        });

        if (aiResponse.ok) {
          const aiData = await aiResponse.json();
          aiSummary = aiData.choices?.[0]?.message?.content;
          console.log('AI triage summary generated');
        }
      }
    } catch (error) {
      console.error('AI triage failed (non-critical):', error);
    }

    // Insert into database
    const { data: job, error: dbError } = await supabase
      .from('helpdesk_jobs')
      .insert({
        name,
        role,
        company,
        email,
        phone,
        site_location,
        category,
        priority,
        asset_reference,
        description,
        source_page,
        ai_summary: aiSummary,
        attachment_url
      })
      .select()
      .single();

    if (dbError) {
      console.error('Database error:', dbError);
      throw new Error('Failed to save job to database');
    }

    console.log('Helpdesk job saved:', job.id);

    // Send email notification
    try {
      const priorityEmoji = priority === 'Emergency' ? '🚨' : priority === 'Urgent' ? '⚠️' : '📋';
      const emailHtml = `
        <h2>${priorityEmoji} New Helpdesk Job: ${category}</h2>
        <p><strong>Job ID:</strong> ${job.id}</p>
        <p><strong>Priority:</strong> ${priority}</p>
        <p><strong>Submitted:</strong> ${new Date(job.created_at).toLocaleString('en-GB')}</p>
        
        <hr />
        
        <h3>Contact Details</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Role:</strong> ${role}</p>
        <p><strong>Company/Site:</strong> ${company}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
        
        <h3>Issue Details</h3>
        <p><strong>Location:</strong> ${site_location}</p>
        <p><strong>Category:</strong> ${category}</p>
        <p><strong>Asset/Area:</strong> ${asset_reference}</p>
        <p><strong>Description:</strong></p>
        <p style="white-space: pre-wrap;">${description}</p>
        
        ${aiSummary ? `
        <hr />
        <h3>🤖 AI Triage Summary</h3>
        <p><em>${aiSummary}</em></p>
        ` : ''}
        
        ${attachment_url ? `
        <hr />
        <p><strong>Attachment:</strong> <a href="${attachment_url}">View file</a></p>
        ` : ''}
        
        <hr />
        <p style="color: #666; font-size: 12px;">This job was submitted via ${source_page || 'the EntireFM helpdesk form'}</p>
      `;

      await resend.emails.send({
        from: 'EntireFM Helpdesk <onboarding@resend.dev>',
        to: ['helpdesk@entirefm.com'],
        subject: `${priorityEmoji} ${priority} - ${category} Issue at ${company}`,
        html: emailHtml,
      });

      console.log('Notification email sent to helpdesk');
    } catch (emailError) {
      console.error('Email notification failed (non-critical):', emailError);
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        jobId: job.id,
        message: 'Job logged successfully' 
      }),
      {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );

  } catch (error: any) {
    console.error('Error in submit-helpdesk-job:', error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message || 'Failed to submit job' 
      }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});