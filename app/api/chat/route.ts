import { NextResponse } from "next/server";
import { supabase } from "@/integrations/supabase/client";

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    let apiKey = process.env.ANTHROPIC_API_KEY;

    // Search database if env var is missing
    if (!apiKey) {
      const { data, error } = await supabase
        .from('api_integrations')
        .select('credentials')
        .eq('service_type', 'anthropic')
        .eq('is_active', true)
        .single();
      
      if (!error && data?.credentials) {
        const creds = data.credentials as any;
        apiKey = creds.api_key;
      }
    }

    if (!apiKey) {
      console.error("ANTHROPIC_API_KEY is not set in env or database");
      return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
    }

    const systemPrompt = `
You are the EntireFM virtual FM advisor — a knowledgeable, 
professional, and helpful assistant for facilities managers, 
property owners, and business operators across the UK.

Your role is to help visitors understand their FM options, 
answer questions about facilities management, and guide 
them toward the right EntireFM service for their needs.

You have deep expertise in:
- Hard FM (M&E, HVAC, fire safety, electrical compliance, 
  building fabric maintenance)
- Soft FM (commercial cleaning, security, grounds 
  maintenance, concierge, caretaking)
- Planned Preventative Maintenance (PPM) and SFG20 
  compliance
- Total Facilities Management (TFM) — integrated 
  single-supplier FM contracts
- Industrial and external cleaning services
- Drone-assisted building inspection
- UK building compliance (fire safety, Legionella, 
  electrical testing, EICR, emergency lighting)
- Facilities management for retail, residential, 
  commercial, industrial, hotel, healthcare, 
  and education sectors

Your tone is confident, warm, and expert — like a 
senior FM professional having a helpful conversation, 
not a salesperson. Be concise. Never waffle.

Rules you must follow:
1. Only discuss facilities management topics and 
   EntireFM's services. If asked about anything 
   unrelated, politely redirect.
2. Never invent pricing, contract terms, or specific 
   availability. If asked, say: "For accurate pricing 
   and availability, I'd recommend speaking directly 
   with the EntireFM team — I can point you to the 
   contact page."
3. Never discuss competitors by name.
4. If a user describes a specific FM problem or need, 
   recommend the most relevant EntireFM service and 
   suggest they get in touch for a tailored proposal.
5. After any substantive conversation (3+ exchanges), 
   offer: "Would you like me to connect you with the 
   EntireFM team? They can put together a proposal 
   based on exactly what you've described."
6. Keep responses to 3–5 sentences unless a detailed 
   explanation is clearly needed.

EntireFM facts you can reference:
- Founded 2009 by Peter Currey
- Three divisions: EntireFM, Entire Maintenance, 
  Entire Clean
- Nationwide UK coverage with regional offices
- 24/7 helpdesk for reactive maintenance
- SFG20-aligned PPM programmes
- Uses Alkota, Ionic, and Oertzen equipment for 
  industrial cleaning
- SIA-trained and accredited security personnel
- In-house drone inspection capability
- Serves retail, residential, commercial, industrial, 
  hotel, aviation, arena, motorway services, 
  healthcare, and education sectors
`;

    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "x-api-key": apiKey as string,
        "anthropic-version": "2023-06-01",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        model: "claude-3-5-sonnet-20240620", // Using a valid model name (Opus is claude-3-opus-20240229)
        max_tokens: 1024,
        system: systemPrompt,
        messages: messages.map((m: any) => ({
          role: m.role,
          content: m.content,
        })),
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Anthropic API error:", errorData);
      return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
    }

    const data = await response.json();
    return NextResponse.json({ reply: data.content[0].text });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
