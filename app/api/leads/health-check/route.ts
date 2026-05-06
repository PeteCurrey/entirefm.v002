import { NextResponse } from "next/server";
import { supabase } from "@/integrations/supabase/client";
import { sendContactNotification } from "@/lib/mail";

export async function POST(req: Request) {
  try {
    const { contact, results } = await req.json();

    if (!contact?.email) {
      return NextResponse.json({ error: "Missing contact info" }, { status: 400 });
    }

    const message = `FM Health Check Score: ${results?.score}/${results?.maxScore}\nBracket: ${results?.label}\n\nGaps identified: ${results?.gapCount || 0}`;
    const { data: leadData, error } = await supabase.from("contact_submissions").insert({
      name: contact.name,
      email: contact.email,
      company: contact.company || null,
      phone: contact.phone || null,
      subject: "FM Health Check Quiz Lead",
      message,
      source_page: "/tools/fm-health-check",
      status: "new",
    }).select().single();

    if (error) throw error;

    if (leadData) {
      await sendContactNotification({
        name: contact.name,
        email: contact.email,
        company: contact.company || null,
        phone: contact.phone || null,
        subject: "FM Health Check Quiz Lead",
        message,
        source_page: "/tools/fm-health-check",
        id: leadData.id
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Health check lead error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
