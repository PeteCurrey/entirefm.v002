import { NextResponse } from "next/server";
import { supabase } from "@/integrations/supabase/client";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    // Map partner application to contact_submissions
    const { error } = await supabase
      .from("contact_submissions")
      .insert({
        name: data.name,
        email: data.email,
        company: data.company,
        subject: `Partner Application: ${data.partnerType}`,
        message: `
[PARTNER APPLICATION]
Partner Type: ${data.partnerType}
Job Title: ${data.jobTitle || 'N/A'}
Phone: ${data.phone}
Client Volume: ${data.clientVolume}
Website: ${data.website || 'N/A'}

Message:
${data.message}
        `,
        metadata: {
          type: "partner_application",
          partner_type: data.partnerType,
          client_volume: data.clientVolume,
          phone: data.phone,
          company: data.company
        }
      });

    if (error) throw error;

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Partner application failed:", err);
    return NextResponse.json({ error: "Application failed" }, { status: 500 });
  }
}
