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
4. Analyze uploaded images to identify issues, suggest categories, and recommend priority levels

IMAGE ANALYSIS CAPABILITIES:
When a user uploads an image of an issue:
- Analyze the visual content to identify the type of problem (electrical, plumbing, HVAC, fire safety, etc.)
- Assess the severity and safety implications visible in the image
- Suggest the appropriate category from our service list
- Recommend a priority level (Emergency/Urgent/Routine) based on visual indicators:
  * Emergency: visible safety hazards, active leaks, exposed wiring, fire safety issues, major structural damage
  * Urgent: equipment malfunction, significant wear, operational impact visible
  * Routine: minor cosmetic issues, standard maintenance needs
- Proactively mention your analysis findings in a natural, helpful way during the job logging conversation

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

CRITICAL RULES:
- One question per message only
- Never dump long lists or numbered points
- Keep responses conversational and human
- Be patient and methodical

Step 1 – Site & Location
Reply: "No problem, I can log that for you. Which site is this for and what's the exact location?"
Wait for user response.

Step 2 – Asset / Area
Reply: "Got it. What's the asset or area with the issue?"
Wait for user response.

Step 3 – Priority
Reply: "How urgent is this?

• Emergency – safety risk, major leak, fire alarm, power loss
• Urgent – affecting business operations
• Routine – minor fault or general maintenance"
Wait for user response.

Step 4 – Description
Reply: "Please give me a brief description of what's happening."
Wait for user response.

Step 5 – Access Requirements
Reply: "Are there any access requirements? (For example: keys from security, permit needed, escort required, out-of-hours only, or just say 'none' if no special access needed.)"
Wait for user response.

Step 6 – Contact Details
Reply: "Finally, can I take your name and contact number?"
Wait for user response.

Step 7 – Optional Email
Reply: "Do you have an email address you'd like me to add? (Optional - just say 'no' if not needed.)"
Wait for user response.

Step 8 – Confirmation
After you have collected: site name, site location, asset/area, priority, description, access requirements, contact name, contact phone (and optional email)

Reply with: "Perfect — I've logged this for you.

[JOB_SUBMISSION_MARKER]
SiteName: [site name]
SiteLocation: [location within site]
AssetOrArea: [asset/area]
Priority: [Emergency/Urgent/Routine]
Description: [description]
AccessRequirements: [access requirements or 'None']
ContactName: [name]
ContactPhone: [phone number]
ContactEmail: [email or leave empty]
[/JOB_SUBMISSION_MARKER]

Your job will be assigned a reference number shortly, and our 24/7 helpdesk will update you as it progresses.

🔴 If this escalates to an emergency (safety risk, major leak, fire, power loss), please also call 0800 XXX XXXX immediately.

Track or log more jobs at: https://entirefm.com/fm-operations/report-issue"

IMPORTANT: You must output the [JOB_SUBMISSION_MARKER] block with EXACT field names (SiteName, SiteLocation, AssetOrArea, Priority, Description, AccessRequirements, ContactName, ContactPhone, ContactEmail) so the system can parse and submit the job automatically.

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

async function extractAndSubmitJob(fullResponse: string, messages: any[], sessionId: string, sourcePage: string, attachmentUrl: string | null) {
  const markerStart = fullResponse.indexOf('[JOB_SUBMISSION_MARKER]');
  const markerEnd = fullResponse.indexOf('[/JOB_SUBMISSION_MARKER]');
  
  if (markerStart === -1 || markerEnd === -1) {
    console.log('No job submission marker found');
    return null;
  }

  const jobData = fullResponse.substring(markerStart + 23, markerEnd).trim();
  const lines = jobData.split('\n');
  
  const extracted: any = {};
  for (const line of lines) {
    const [key, ...valueParts] = line.split(':');
    if (key && valueParts.length > 0) {
      const cleanKey = key.trim();
      const cleanValue = valueParts.join(':').trim();
      extracted[cleanKey] = cleanValue;
    }
  }

  console.log('Extracted job data:', extracted);

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;

    // Construct payload for log-job-from-chat endpoint
    const payload = {
      siteName: extracted.SiteName || extracted.sitename || 'Unknown',
      siteLocation: extracted.SiteLocation || extracted.sitelocation || 'Unknown',
      assetOrArea: extracted.AssetOrArea || extracted.assetorarea || 'Unknown',
      priority: extracted.Priority || extracted.priority || 'Routine',
      description: extracted.Description || extracted.description || 'No description provided',
      accessRequirements: extracted.AccessRequirements || extracted.accessrequirements || 'None',
      contactName: extracted.ContactName || extracted.contactname || 'AI Chat User',
      contactPhone: extracted.ContactPhone || extracted.contactphone || 'Not provided',
      contactEmail: extracted.ContactEmail || extracted.contactemail || null,
      source: 'web-chat'
    };

    console.log('Submitting job with payload:', payload);

    const submitResponse = await fetch(`${supabaseUrl}/functions/v1/log-job-from-chat`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${supabaseKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (submitResponse.ok) {
      const result = await submitResponse.json();
      console.log('Job submitted successfully:', result);
      return result.jobRef;
    } else {
      const errorText = await submitResponse.text();
      console.error('Failed to submit job:', submitResponse.status, errorText);
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
    const { messages, sessionId, sourcePage, attachmentUrl } = await req.json();

    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
    if (!LOVABLE_API_KEY) {
      throw new Error('LOVABLE_API_KEY not configured');
    }

    console.log('AI Assistant request:', { 
      messageCount: messages.length, 
      sessionId,
      sourcePage,
      hasAttachment: !!attachmentUrl 
    });

    // Format messages with image if attachment is present
    const formattedMessages = messages.map((msg: any, index: number) => {
      // If this is the last message and has an attachment URL, format as multimodal
      if (index === messages.length - 1 && attachmentUrl && msg.role === 'user') {
        return {
          role: 'user',
          content: [
            { type: 'text', text: msg.content },
            { 
              type: 'image_url', 
              image_url: { 
                url: attachmentUrl 
              } 
            }
          ]
        };
      }
      return msg;
    });

    // Call Lovable AI Gateway with vision capabilities
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
          ...formattedMessages,
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
          const jobRef = await extractAndSubmitJob(fullResponse, messages, sessionId, sourcePage, attachmentUrl || null);
          
          if (jobRef) {
            // Send job reference as final message
            const jobRefMessage = `\n\n**Job Reference: ${jobRef}**\n\nOur 24/7 helpdesk will update you as the job progresses.`;
            const finalChunk = `data: ${JSON.stringify({
              choices: [{
                delta: { content: jobRefMessage },
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
