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
If user describes a fault or issue, gather:
1. Site name and location
2. Asset/equipment type and location (e.g., "2nd floor east wing, panel 3")
3. Severity: Emergency (life safety), Urgent (loss of service), Routine
4. Description of issue
5. Access requirements (keys, permits, escort needed)
6. Contact name and number

Then summarize and say: "I can help you log this with our 24/7 helpdesk. You can report the issue here: https://entirefm.com/fm-operations/report-issue or call 0800 123 4567 for immediate assistance."

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

    // Return the stream directly
    return new Response(response.body, {
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
