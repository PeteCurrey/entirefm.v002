import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    let apiKey = process.env.ANTHROPIC_API_KEY;

    // Search database if env var is missing
    if (!apiKey) {
      const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
      const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
      const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

      if (supabaseUrl && (serviceRoleKey || anonKey)) {
        const fetchClient = createClient(supabaseUrl, (serviceRoleKey || anonKey) as string, {
          auth: { persistSession: false },
        });

        const { data, error } = await fetchClient
          .from('api_integrations')
          .select('credentials')
          .eq('service_type', 'anthropic')
          .eq('is_active', true)
          .single();

        if (!error && data?.credentials) {
          const creds = data.credentials as any;
          apiKey = creds.api_key;
        } else if (error) {
          console.error("DB lookup error:", error.message);
        }
      }
    }

    // Final check for API key
    if (!apiKey) {
      console.error("AI CONFIG ERROR: No Anthropic API key found in env or database.");
      return NextResponse.json({ 
        error: "AI Advisor is not configured.", 
        details: "The Claude API key is missing from the database. Please visit Settings -> AI Advisor to configure it." 
      }, { status: 400 });
    }

    const systemPrompt = `You are the EntireFM virtual FM advisor...`;

    try {
      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "x-api-key": apiKey as string,
          "anthropic-version": "2023-06-01",
          "content-type": "application/json",
        },
        body: JSON.stringify({
          model: "claude-3-5-sonnet-20240620",
          max_tokens: 1024,
          system: systemPrompt,
          messages: messages.map((m: any) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error("ANTHROPIC API REJECTION:", errorData);
        return NextResponse.json({ 
          error: "Claude API Error", 
          details: errorData.error?.message || "Verify your API key has enough credits." 
        }, { status: response.status });
      }

      const data = await response.json();
      return NextResponse.json({ reply: data.content[0].text });
    } catch (apiError: any) {
      console.error("ANTHROPIC CONNECTION ERROR:", apiError);
      return NextResponse.json({ 
        error: "Connection Refused", 
        details: "Could not reach the Claude API servers." 
      }, { status: 502 });
    }
  } catch (error: any) {
    console.error("SYSTEM CHAT ERROR:", error);
    return NextResponse.json({ 
      error: "Internal Server Error", 
      details: error.message || "Unknown system failure." 
    }, { status: 500 });
  }
}
0 });
  }
}
