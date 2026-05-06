import { NextResponse } from "next/server";
import { supabase } from "@/integrations/supabase/client";
import { sendContactNotification } from "@/lib/mail";

export async function POST(req: Request) {
  try {
    const { contact, selectedAssets } = await req.json();

    if (!contact?.email) {
      return NextResponse.json({ error: "Missing contact info" }, { status: 400 });
    }

    const message = `PPM Schedule created with ${selectedAssets?.length || 0} assets.\n\nAssets: ${Array.isArray(selectedAssets) ? selectedAssets.join(", ") : "None"}`;
    const { data: leadData, error } = await supabase.from("contact_submissions").insert({
      name: contact.name,
      email: contact.email,
      company: contact.company || null,
      phone: contact.phone || null,
      subject: "PPM Schedule Builder Lead",
      message,
      source_page: "/tools/ppm-schedule-builder",
      status: "new",
    }).select().single();

    if (error) throw error;

    if (leadData) {
      await sendContactNotification({
        name: contact.name,
        email: contact.email,
        company: contact.company || null,
        phone: contact.phone || null,
        subject: "PPM Schedule Builder Lead",
        message,
        source_page: "/tools/ppm-schedule-builder",
        id: leadData.id
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("PPM lead error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
