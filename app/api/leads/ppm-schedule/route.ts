import { NextResponse } from "next/server";
import { supabase } from "@/integrations/supabase/client";

export async function POST(req: Request) {
  try {
    const { contact, selectedAssets } = await req.json();

    if (!contact?.email) {
      return NextResponse.json({ error: "Missing contact info" }, { status: 400 });
    }

    const { error } = await supabase.from("contact_submissions").insert({
      name: contact.name,
      email: contact.email,
      company: contact.company || null,
      phone: contact.phone || null,
      subject: "PPM Schedule Builder Lead",
      message: `PPM Schedule created with ${selectedAssets?.length || 0} assets.\n\nAssets: ${Array.isArray(selectedAssets) ? selectedAssets.join(", ") : "None"}`,
      source_page: "/tools/ppm-schedule-builder",
      status: "new",
    });

    if (error) throw error;

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("PPM lead error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
