import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactNotification({
  name,
  email,
  phone,
  company,
  message,
  subject: submissionSubject,
  source_page,
  id
}: {
  name: string;
  email: string;
  phone?: string | null;
  company?: string | null;
  message: string;
  subject?: string | null;
  source_page?: string | null;
  id?: string;
}) {
  if (!process.env.RESEND_API_KEY) {
    console.warn("RESEND_API_KEY is not configured. Email notification skipped.");
    return;
  }

  try {
    // IMPORTANT: Resend requires a verified domain to send to non-owner addresses.
    // The 'from' address must use a domain verified in your Resend dashboard.
    const fromAddress = "EntireFM <contact@entirefm.com>";
    
    // During testing (before domain verification), you can only send to the 
    // email address you signed up for Resend with.
    const toAddress = ["enquiries@entirefm.com"];

    const { data, error } = await resend.emails.send({
      from: fromAddress,
      to: toAddress,
      subject: `New Contact Submission: ${submissionSubject || 'General Inquiry'} from ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #eee; border-radius: 10px; padding: 20px;">
          <h2 style="color: #000; border-bottom: 2px solid #eee; padding-bottom: 10px;">New Website Enquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          ${phone ? `<p><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>` : ""}
          ${company ? `<p><strong>Company:</strong> ${company}</p>` : ""}
          ${source_page ? `<p><strong>Source Page:</strong> ${source_page}</p>` : ""}
          
          <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; margin-top: 20px;">
            <h3 style="margin-top: 0; font-size: 14px; text-transform: uppercase; color: #666;">Message Content</h3>
            <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
          </div>
          
          ${id ? `<p style="margin-top: 20px; font-size: 11px; color: #999;">Submission ID: ${id}</p>` : ""}
        </div>
      `,
    });

    if (error) {
      console.error("Resend API Error:", error);
      throw error;
    }

    return data;
  } catch (error) {
    console.error("Failed to send contact notification email:", error);
    throw error;
  }
}
