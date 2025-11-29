import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const SYSTEM_PROMPT = `You are the AI assistant for EntireFM, a UK facilities management specialist.

CORE RESPONSIBILITIES:
1. Answer questions about FM services, compliance, and operations
2. Help users log jobs/issues and route them to the helpdesk
3. Guide users to relevant pages and forms

SERVICES WE PROVIDE:
- Fire Safety & Life Protection: Fire alarms, emergency lighting, fire risk assessments, compartmentation surveys
- Electrical Compliance: EICR testing, PAT testing, fixed wire testing, electrical maintenance
- HVAC & F-Gas: Air conditioning, heating, ventilation, F-Gas compliance, TM44 audits
- Water Hygiene: Legionella risk assessments, water testing, tank cleaning, temperature monitoring (ACOP L8)
- Gas Safety: Gas safety inspections, landlord certificates, commercial gas compliance
- PPM & Asset Lifecycle: Planned preventive maintenance programs, asset management
- Critical Infrastructure: Lightning protection, UPS maintenance, generator servicing, arc flash assessments, HV switching, power quality
- Hard Services: Plumbing, building fabric, drainage, plant room maintenance
- Soft Services: Cleaning, concierge, grounds maintenance, waste management
- FM Operations: 24/7 helpdesk, reactive maintenance, mobilisation, business continuity

SECTORS WE SERVE:
- Logistics & Industrial
- Retail & Service Stations
- Offices & Corporate Estates
- Aviation & Travel Hubs
- Hospitality & Leisure
- Residential & PBSA
- Healthcare & Public Sector

COMPLIANCE GUIDANCE:
- Fire alarms: Test weekly (call points), full servicing every 6 months
- Emergency lighting: Monthly function tests, annual duration tests, 3-yearly certification
- EICR: Every 5 years for commercial, 3 years for HMOs, 1 year for high-risk
- TM44: Required for A/C systems over 12kW cooling capacity, every 5 years
- ACOP L8: Legionella risk assessments annually, water testing monthly/quarterly
- F-Gas: Annual leak checks, service records, phase-down compliance
- PAT Testing: Annually for Class I equipment, 6-monthly for high-use

JOB LOGGING FLOW:
When the user says they want to log a job, report a fault, raise a repair, or similar (e.g. "I need to log a job", "I need to report an issue", "we've got a fault", "I need to raise a ticket"), use a clean, conversational, step-by-step flow.

Do NOT dump a long list. Do NOT output numbered points or big bullet clusters. Guide them gently, one question at a time.

Step 1 – Site & Location
Reply: "No problem, I can log that for you. Let's do it step by step. First, which site is this for and what's the exact location? (For example: 'ABC Office, 2nd floor east wing.')"
Wait for user response.

Step 2 – Asset / Area
Reply: "Got it, thanks. What's the asset or area with the issue? (For example: VRF unit in meeting room 2, toilet in reception, lighting in warehouse aisle 3.)"
Wait for user response.

Step 3 – Priority
Reply: "Understood. How urgent is this?

• Emergency – safety risk, major leak, fire alarm, power loss
• Urgent – affecting business operations
• Routine – minor fault or general maintenance"
Wait for user response.

Step 4 – Description
Reply: "Thanks. Please give me a brief description of what's happening."
Wait for user response.

Step 5 – Access Requirements
Reply: "Got it. Are there any access requirements? (Examples: keys from security, permit needed, escort, restricted area, out-of-hours only.)"
Wait for user response.

Step 6 – Contact Details
Reply: "Thanks. Finally, can I take your name and contact number in case an engineer or the helpdesk need to reach you?"
Wait for user response.

Step 7 – Confirmation
After you have ALL of the following: site, location, asset/area, priority, description, access requirements, contact details

Reply with confirmation: "Perfect — I've got everything I need. I'll log this with the 24/7 EntireFM helpdesk now.

[JOB_SUBMISSION_MARKER]
Site: [site location]
Asset: [asset/area]
Priority: [priority level]
Description: [description]
Access: [access requirements]
Contact: [name]
Phone: [phone number]
Category: [best matching category from list]
[/JOB_SUBMISSION_MARKER]

Your job has been logged and the helpdesk team has been notified.

🔴 If this becomes an emergency at any point (safety risk, major leak, fire, loss of critical power), please also call 01246 808012 immediately.

You can also report or track issues here: https://entirefm.com/fm-operations/report-issue"

IMPORTANT: You must output the [JOB_SUBMISSION_MARKER] block with all collected information so the system can automatically submit the job. Use one of these categories: Fire Safety, Electrical, HVAC, Water Hygiene, Gas Safety, Plumbing, Building Fabric, Cleaning, Security, Other

Tone Rules:
• Keep all responses short, clean, human, and conversational.
• One step per message — no large checklists.
• Never output long bullet lists except the 3-item priority menu.
• Always offer emergency escalation in the final message.

ROUTING GUIDANCE:
- For full proposals → /request-proposal
- For general enquiries → /contact
- For compliance questions → /resources or /fm-insights pages
- For specific services → /services/[service-name]
- For job logging → Direct to helpdesk form or call 0800 123 4567

TONE & SAFETY:
- Quietly confident, informative, professional
- No hype or "we're the best" claims
- Focus on clarity, compliance risk, and next steps
- Never promise specific response times unless stated on site
- Avoid legal/financial opinions - suggest speaking to the FM team if out of scope
- If uncertain, say "Let me connect you with our specialist team"

Keep responses concise and actionable. Ask clarifying questions when needed.`;

async function extractAndSubmitJob(fullResponse: string, messages: any[], sessionId: string, sourcePage: string) {
  const markerStart = fullResponse.indexOf('[JOB_SUBMISSION_MARKER]');
  const markerEnd = fullResponse.indexOf('[/JOB_SUBMISSION_MARKER]');
  
  if (markerStart === -1 || markerEnd === -1) {
    return null;
  }

  const jobData = fullResponse.substring(markerStart + 23, markerEnd).trim();
  const lines = jobData.split('\n');
  
  const extracted: any = {};
  for (const line of lines) {
    const [key, ...valueParts] = line.split(':');
    if (key && valueParts.length > 0) {
      extracted[key.trim().toLowerCase()] = valueParts.join(':').trim();
    }
  }

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;

    const submitResponse = await fetch(`${supabaseUrl}/functions/v1/submit-helpdesk-job`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${supabaseKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: extracted.contact || 'AI Chat User',
        role: 'User',
        company: extracted.site || 'Unknown',
        email: 'ai-chat@entirefm.com',
        phone: extracted.phone || 'Not provided',
        site_location: extracted.site || 'Unknown',
        category: extracted.category || 'Other',
        priority: extracted.priority || 'Routine',
        asset_reference: extracted.asset || 'Unknown',
        description: `${extracted.description}\n\nAccess Requirements: ${extracted.access}`,
        source_page: `AI Chat - ${sourcePage || 'unknown'}`,
      }),
    });

    if (submitResponse.ok) {
      const result = await submitResponse.json();
      console.log('Job submitted successfully:', result.jobId);
      return result.jobId;
    } else {
      console.error('Failed to submit job:', await submitResponse.text());
      return null;
    }
  } catch (error) {
    console.error('Error submitting job:', error);
    return null;
  }
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages, sessionId, sourcePage } = await req.json();

    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
    if (!LOVABLE_API_KEY) {
      throw new Error('LOVABLE_API_KEY not configured');
    }

    console.log('AI Assistant request:', { 
      messageCount: messages.length, 
      sessionId,
      sourcePage 
    });

    // Call Lovable AI Gateway
    const response = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${LOVABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemini-2.5-flash',
        messages: [
          { role: 'system', content: SYSTEM_PROMPT },
          ...messages,
        ],
        stream: true,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: 'Rate limit exceeded. Please try again in a moment.' }),
          { status: 429, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: 'Service temporarily unavailable.' }),
          { status: 402, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
      const errorText = await response.text();
      console.error('AI Gateway error:', response.status, errorText);
      throw new Error('AI service error');
    }

    // Stream the response and collect it for job extraction
    const reader = response.body!.getReader();
    const encoder = new TextEncoder();
    const decoder = new TextDecoder();
    let fullResponse = '';

    const stream = new ReadableStream({
      async start(controller) {
        try {
          while (true) {
            const { done, value } = await reader.read();
            if (done) break;
            
            const chunk = decoder.decode(value, { stream: true });
            
            // Parse SSE data and extract content
            const lines = chunk.split('\n');
            for (const line of lines) {
              if (line.startsWith('data: ') && !line.includes('[DONE]')) {
                try {
                  const jsonStr = line.slice(6);
                  const data = JSON.parse(jsonStr);
                  const content = data.choices?.[0]?.delta?.content;
                  if (content) {
                    fullResponse += content;
                  }
                } catch (e) {
                  // Skip invalid JSON
                }
              }
            }
            
            controller.enqueue(value);
          }

          // After streaming completes, check for job submission
          const jobId = await extractAndSubmitJob(fullResponse, messages, sessionId, sourcePage);
          
          if (jobId) {
            // Send job ID as final message
            const jobIdMessage = `\n\n**Job Reference: ${jobId}**\n\nThe helpdesk team at helpdesk@entirefm.com has been notified and will be in touch soon.`;
            const finalChunk = `data: ${JSON.stringify({
              choices: [{
                delta: { content: jobIdMessage },
                index: 0
              }]
            })}\n\n`;
            controller.enqueue(encoder.encode(finalChunk));
          }

          controller.enqueue(encoder.encode('data: [DONE]\n\n'));
          controller.close();
        } catch (error) {
          console.error('Stream error:', error);
          controller.error(error);
        }
      }
    });

    return new Response(stream, {
      headers: {
        ...corsHeaders,
        'Content-Type': 'text/event-stream',
      },
    });

  } catch (error: any) {
    console.error('AI assistant error:', error);
    return new Response(
      JSON.stringify({ error: error.message || 'An error occurred' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
