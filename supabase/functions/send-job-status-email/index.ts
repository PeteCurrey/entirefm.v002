import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

interface JobStatusEmailRequest {
  jobType: "cafm" | "helpdesk";
  jobRef?: string;
  recipientEmail: string;
  recipientName: string;
  oldStatus: string;
  newStatus: string;
  siteName?: string;
  siteLocation: string;
  category?: string;
  description: string;
}

const getStatusLabel = (status: string): string => {
  const statusMap: Record<string, string> = {
    // CAFM statuses
    "Logged": "Logged",
    "Acknowledged": "Acknowledged",
    "Assigned": "Assigned to Engineer",
    "In Progress": "Work In Progress",
    "On Hold": "On Hold",
    "Completed": "Completed",
    "Cancelled": "Cancelled",
    // Helpdesk statuses
    "new": "New",
    "acknowledged": "Acknowledged",
    "in_progress": "In Progress",
    "awaiting_parts": "Awaiting Parts",
    "awaiting_access": "Awaiting Access",
    "resolved": "Resolved",
    "closed": "Closed",
  };
  return statusMap[status] || status;
};

const getStatusColor = (status: string): string => {
  const colorMap: Record<string, string> = {
    "Logged": "#2563eb",
    "Acknowledged": "#4f46e5",
    "Assigned": "#7c3aed",
    "In Progress": "#ca8a04",
    "On Hold": "#6b7280",
    "Completed": "#16a34a",
    "Cancelled": "#dc2626",
    "new": "#2563eb",
    "acknowledged": "#4f46e5",
    "in_progress": "#ca8a04",
    "awaiting_parts": "#7c3aed",
    "awaiting_access": "#7c3aed",
    "resolved": "#16a34a",
    "closed": "#6b7280",
  };
  return colorMap[status] || "#6b7280";
};

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const payload: JobStatusEmailRequest = await req.json();
    console.log("Received job status email request:", payload);

    const {
      jobType,
      jobRef,
      recipientEmail,
      recipientName,
      oldStatus,
      newStatus,
      siteName,
      siteLocation,
      category,
      description,
    } = payload;

    // Validate required fields
    if (!recipientEmail || !newStatus || !siteLocation) {
      throw new Error("Missing required fields: recipientEmail, newStatus, siteLocation");
    }

    const statusLabel = getStatusLabel(newStatus);
    const statusColor = getStatusColor(newStatus);
    const jobTitle = jobType === "cafm" ? `Job ${jobRef}` : `Helpdesk Issue - ${category || "General"}`;

    const emailHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Job Status Update</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f4f4f5;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width: 600px; margin: 0 auto; padding: 40px 20px;">
    <tr>
      <td>
        <!-- Header -->
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #18181b; border-radius: 8px 8px 0 0; padding: 30px;">
          <tr>
            <td align="center">
              <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 600;">EntireFM</h1>
              <p style="color: #a1a1aa; margin: 8px 0 0 0; font-size: 14px;">Facilities Management</p>
            </td>
          </tr>
        </table>

        <!-- Content -->
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #ffffff; padding: 30px;">
          <tr>
            <td>
              <p style="color: #18181b; margin: 0 0 20px 0; font-size: 16px;">
                Hello ${recipientName || "there"},
              </p>
              
              <p style="color: #52525b; margin: 0 0 24px 0; font-size: 15px; line-height: 1.6;">
                We wanted to let you know that there's been an update to your reported issue.
              </p>

              <!-- Status Badge -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #fafafa; border-radius: 8px; padding: 20px; margin-bottom: 24px;">
                <tr>
                  <td>
                    <p style="color: #71717a; margin: 0 0 8px 0; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">
                      Current Status
                    </p>
                    <span style="display: inline-block; background-color: ${statusColor}; color: #ffffff; padding: 8px 16px; border-radius: 20px; font-size: 14px; font-weight: 600;">
                      ${statusLabel}
                    </span>
                  </td>
                </tr>
              </table>

              <!-- Job Details -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin-bottom: 24px;">
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e4e4e7;">
                    <p style="color: #71717a; margin: 0 0 4px 0; font-size: 12px; text-transform: uppercase;">
                      ${jobType === "cafm" ? "Job Reference" : "Category"}
                    </p>
                    <p style="color: #18181b; margin: 0; font-size: 15px; font-weight: 500;">
                      ${jobType === "cafm" ? jobRef : category}
                    </p>
                  </td>
                </tr>
                ${siteName ? `
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e4e4e7;">
                    <p style="color: #71717a; margin: 0 0 4px 0; font-size: 12px; text-transform: uppercase;">
                      Site
                    </p>
                    <p style="color: #18181b; margin: 0; font-size: 15px; font-weight: 500;">
                      ${siteName}
                    </p>
                  </td>
                </tr>
                ` : ""}
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e4e4e7;">
                    <p style="color: #71717a; margin: 0 0 4px 0; font-size: 12px; text-transform: uppercase;">
                      Location
                    </p>
                    <p style="color: #18181b; margin: 0; font-size: 15px; font-weight: 500;">
                      ${siteLocation}
                    </p>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0;">
                    <p style="color: #71717a; margin: 0 0 4px 0; font-size: 12px; text-transform: uppercase;">
                      Description
                    </p>
                    <p style="color: #18181b; margin: 0; font-size: 14px; line-height: 1.5;">
                      ${description.length > 200 ? description.substring(0, 200) + "..." : description}
                    </p>
                  </td>
                </tr>
              </table>

              <p style="color: #52525b; margin: 0; font-size: 14px; line-height: 1.6;">
                If you have any questions about this update, please don't hesitate to contact our helpdesk team.
              </p>
            </td>
          </tr>
        </table>

        <!-- Footer -->
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #fafafa; border-radius: 0 0 8px 8px; padding: 20px;">
          <tr>
            <td align="center">
              <p style="color: #71717a; margin: 0 0 8px 0; font-size: 13px;">
                EntireFM Technical Helpdesk
              </p>
              <p style="color: #a1a1aa; margin: 0; font-size: 12px;">
                020 4586 5422 | helpdesk@entirefm.com
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `;

    const emailResponse = await resend.emails.send({
      from: "EntireFM <notifications@entirefm.com>",
      to: [recipientEmail],
      subject: `Status Update: ${jobTitle} - ${statusLabel}`,
      html: emailHtml,
    });

    console.log("Job status email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, ...emailResponse }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Error sending job status email:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
