import { NextResponse } from "next/server";
import { vaultDocuments, getDocumentById } from "@/lib/documentVault";
import { supabase } from "@/integrations/supabase/client";
import { sendContactNotification } from "@/lib/mail";

export async function POST(req: Request) {
  try {
    const { documentId, name, email, company, phone, wantsFollowUp } = await req.json();

    if (!documentId || !name || !email || !company) {
      return NextResponse.json({ error: "Name, email, and company are required" }, { status: 400 });
    }

    const doc = getDocumentById(documentId);
    if (!doc) {
      return NextResponse.json({ error: "Document not found" }, { status: 404 });
    }

    // Log download
    console.log("[Vault Download]", {
      documentId,
      documentTitle: doc.title,
      name,
      email,
      company,
      phone: phone || null,
      wantsFollowUp: !!wantsFollowUp,
      timestamp: new Date().toISOString(),
    });

    // Save lead to Supabase
    try {
      const message = `Downloaded: ${doc.title} (${doc.slug}.${doc.fileType.toLowerCase()})\nFollowUp requested: ${wantsFollowUp ? "Yes" : "No"}`;
      const { data: leadData, error: leadError } = await supabase.from("contact_submissions").insert({
        name,
        email,
        company,
        phone: phone || null,
        subject: `Document Vault Download: ${doc.title}`,
        message,
        source_page: "/resources/document-vault",
        status: "new",
      }).select().single();

      if (!leadError && leadData) {
        await sendContactNotification({
          name,
          email,
          company,
          phone,
          subject: `Document Vault Download: ${doc.title}`,
          message,
          source_page: "/resources/document-vault",
          id: leadData.id
        });
      }
    } catch (e) {
      console.warn("Could not save or notify vault lead:", e);
    }

    return NextResponse.json({
      success: true,
      downloadUrl: `/documents/${doc.slug}.${doc.fileType.toLowerCase()}`,
      documentTitle: doc.title,
    });
  } catch (error) {
    console.error("Vault download error:", error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
