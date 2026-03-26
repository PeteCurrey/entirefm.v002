import { NextResponse } from "next/server";
import { supabase } from "@/integrations/supabase/client";

export async function POST(req: Request) {
  try {
    const { contact, results } = await req.json();

    if (!contact?.email) {
      return NextResponse.json({ error: "Missing contact info" }, { status: 400 });
    }

    const { error } = await supabase.from("contact_submissions").insert({
      name: contact.name,
      email: contact.email,
      company: contact.company || null,
      phone: contact.phone || null,
      subject: "FM Health Check Quiz Lead",
      message: `FM Health Check Score: ${results?.score}/${results?.maxScore}\nBracket: ${results?.label}\n\nGaps identified: ${results?.gapCount || 0}`,
      source_page: "/tools/fm-health-check",
      status: "new",
    });

    if (error) throw error;

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Health check lead error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
