import { NextResponse } from "next/server";
import { z } from "zod";
import { sendContactNotification } from "@/lib/mail";
import { saveLead } from "@/lib/leads";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  phone: z.string().trim().max(20).optional().or(z.literal("")),
  company: z.string().trim().max(100).optional().or(z.literal("")),
  message: z.string().trim().min(1, "Message is required").max(2000),
  source_page: z.string().optional(),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const validated = contactSchema.parse(body);

    const lead = await saveLead({
      name: validated.name,
      email: validated.email,
      phone: validated.phone || null,
      company: validated.company || null,
      message: validated.message,
      source_page: validated.source_page || "/contact",
      status: "new",
      subject: "General Inquiry",
    });

    // Send email notification using shared utility
    try {
      await sendContactNotification({
        name: validated.name,
        email: validated.email,
        phone: validated.phone,
        company: validated.company,
        message: validated.message,
        source_page: validated.source_page,
        id: lead.id,
      });
    } catch (emailError) {
      // Error is already logged in the utility
    }

    return NextResponse.json({ success: true, id: lead.id });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({ error: err.errors[0].message }, { status: 400 });
    }
    console.error("Contact form API error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
