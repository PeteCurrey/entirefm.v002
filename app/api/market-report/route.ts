import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/integrations/supabase/client";
import { sendContactNotification } from "@/lib/mail";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, company, jobTitle, phone, sector } = body;

    if (!name || !email || !company || !jobTitle || !sector) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Log lead as a contact submission
    if (supabase) {
      const message = `Job Title: ${jobTitle} | Downloaded 2025 UK FM Market Report`;
      const { data: leadData, error: dbError } = await supabase.from("contact_submissions").insert([{
        name,
        email,
        company,
        phone,
        sector,
        subject: "Market Report 2025 Download",
        message,
        source_page: "/fm-market-report",
        status: "new"
      }]).select().single();

      if (dbError) throw dbError;

      if (leadData) {
        await sendContactNotification({
          name,
          email,
          company,
          phone,
          subject: "Market Report 2025 Download",
          message,
          source_page: "/fm-market-report",
          id: leadData.id
        });
      }
    }

    // In a real app, we'd trigger an email with the download link.
    // For now, we return success so the client can show the download button.
    return NextResponse.json({ success: true, downloadUrl: "/reports/entirefm-uk-market-report-2025.pdf" });
  } catch (error) {
    console.error("Market report lead capture error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
