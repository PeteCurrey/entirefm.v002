import jsPDF from "jspdf";
import { format } from "date-fns";

interface ActivityLog {
  id: string;
  action: string;
  field_name: string | null;
  old_value: string | null;
  new_value: string | null;
  notes: string | null;
  created_at: string;
  created_by: string | null;
}

interface CAFMJob {
  id: string;
  job_ref: string;
  created_at: string;
  site_name: string;
  site_location: string;
  asset_or_area: string;
  priority: string;
  description: string;
  access_requirements: string | null;
  contact_name: string;
  contact_phone: string;
  contact_email: string | null;
  status: string;
  admin_notes: string | null;
  source: string;
}

interface HelpdeskJob {
  id: string;
  created_at: string;
  name: string;
  role: string;
  company: string;
  email: string;
  phone: string | null;
  site_location: string;
  category: string;
  priority: string;
  asset_reference: string;
  description: string;
  ai_summary: string | null;
  status: string;
  source_page: string | null;
}

const getActionLabel = (action: string): string => {
  switch (action) {
    case "status_change": return "Status Changed";
    case "notes_updated": return "Notes Updated";
    case "created": return "Job Created";
    case "email_sent": return "Email Notification Sent";
    default: return action.replace(/_/g, " ").replace(/\b\w/g, l => l.toUpperCase());
  }
};

const formatStatus = (status: string): string => {
  return status.replace(/_/g, " ").replace(/\b\w/g, l => l.toUpperCase());
};

export function exportCAFMJobToPdf(job: CAFMJob, activities: ActivityLog[]) {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  const margin = 20;
  let yPos = 20;

  // Header
  doc.setFontSize(20);
  doc.setFont("helvetica", "bold");
  doc.text("CAFM Job Report", margin, yPos);
  yPos += 10;

  doc.setFontSize(12);
  doc.setFont("helvetica", "normal");
  doc.text(`Reference: ${job.job_ref}`, margin, yPos);
  yPos += 6;
  doc.text(`Generated: ${format(new Date(), "PPpp")}`, margin, yPos);
  yPos += 12;

  // Divider
  doc.setDrawColor(200);
  doc.line(margin, yPos, pageWidth - margin, yPos);
  yPos += 10;

  // Job Details Section
  doc.setFontSize(14);
  doc.setFont("helvetica", "bold");
  doc.text("Job Details", margin, yPos);
  yPos += 8;

  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");

  const details = [
    ["Status", formatStatus(job.status)],
    ["Priority", job.priority],
    ["Created", format(new Date(job.created_at), "PPpp")],
    ["Site Name", job.site_name],
    ["Site Location", job.site_location],
    ["Asset/Area", job.asset_or_area],
    ["Source", job.source],
  ];

  details.forEach(([label, value]) => {
    doc.setFont("helvetica", "bold");
    doc.text(`${label}:`, margin, yPos);
    doc.setFont("helvetica", "normal");
    doc.text(value || "N/A", margin + 40, yPos);
    yPos += 6;
  });

  yPos += 6;

  // Description
  doc.setFont("helvetica", "bold");
  doc.text("Description:", margin, yPos);
  yPos += 6;
  doc.setFont("helvetica", "normal");
  const descLines = doc.splitTextToSize(job.description, pageWidth - margin * 2);
  doc.text(descLines, margin, yPos);
  yPos += descLines.length * 5 + 6;

  // Access Requirements
  if (job.access_requirements) {
    doc.setFont("helvetica", "bold");
    doc.text("Access Requirements:", margin, yPos);
    yPos += 6;
    doc.setFont("helvetica", "normal");
    const accessLines = doc.splitTextToSize(job.access_requirements, pageWidth - margin * 2);
    doc.text(accessLines, margin, yPos);
    yPos += accessLines.length * 5 + 6;
  }

  // Check for page break
  if (yPos > 250) {
    doc.addPage();
    yPos = 20;
  }

  // Contact Section
  yPos += 4;
  doc.setFontSize(14);
  doc.setFont("helvetica", "bold");
  doc.text("Contact Information", margin, yPos);
  yPos += 8;

  doc.setFontSize(10);
  const contactDetails = [
    ["Name", job.contact_name],
    ["Phone", job.contact_phone],
    ["Email", job.contact_email || "N/A"],
  ];

  contactDetails.forEach(([label, value]) => {
    doc.setFont("helvetica", "bold");
    doc.text(`${label}:`, margin, yPos);
    doc.setFont("helvetica", "normal");
    doc.text(value, margin + 25, yPos);
    yPos += 6;
  });

  // Admin Notes
  if (job.admin_notes) {
    yPos += 6;
    doc.setFont("helvetica", "bold");
    doc.text("Admin Notes:", margin, yPos);
    yPos += 6;
    doc.setFont("helvetica", "normal");
    const notesLines = doc.splitTextToSize(job.admin_notes, pageWidth - margin * 2);
    doc.text(notesLines, margin, yPos);
    yPos += notesLines.length * 5 + 6;
  }

  // Activity Log Section
  if (activities.length > 0) {
    if (yPos > 220) {
      doc.addPage();
      yPos = 20;
    }

    yPos += 6;
    doc.setDrawColor(200);
    doc.line(margin, yPos, pageWidth - margin, yPos);
    yPos += 10;

    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text("Activity Log", margin, yPos);
    yPos += 10;

    doc.setFontSize(9);
    activities.forEach((activity) => {
      if (yPos > 270) {
        doc.addPage();
        yPos = 20;
      }

      doc.setFont("helvetica", "bold");
      doc.text(getActionLabel(activity.action), margin, yPos);
      doc.setFont("helvetica", "normal");
      doc.text(format(new Date(activity.created_at), "PPp"), margin + 60, yPos);
      if (activity.created_by) {
        doc.text(`by ${activity.created_by}`, margin + 120, yPos);
      }
      yPos += 5;

      if (activity.action === "status_change" && activity.old_value && activity.new_value) {
        doc.text(`${formatStatus(activity.old_value)} → ${formatStatus(activity.new_value)}`, margin + 5, yPos);
        yPos += 5;
      }

      if (activity.notes) {
        const noteLines = doc.splitTextToSize(activity.notes, pageWidth - margin * 2 - 5);
        doc.text(noteLines, margin + 5, yPos);
        yPos += noteLines.length * 4;
      }

      yPos += 4;
    });
  }

  // Save the PDF
  doc.save(`CAFM-Job-${job.job_ref}-${format(new Date(), "yyyy-MM-dd")}.pdf`);
}

export function exportHelpdeskJobToPdf(job: HelpdeskJob, activities: ActivityLog[]) {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  const margin = 20;
  let yPos = 20;

  // Header
  doc.setFontSize(20);
  doc.setFont("helvetica", "bold");
  doc.text("Helpdesk Job Report", margin, yPos);
  yPos += 10;

  doc.setFontSize(12);
  doc.setFont("helvetica", "normal");
  doc.text(`Job ID: ${job.id.substring(0, 8)}...`, margin, yPos);
  yPos += 6;
  doc.text(`Generated: ${format(new Date(), "PPpp")}`, margin, yPos);
  yPos += 12;

  // Divider
  doc.setDrawColor(200);
  doc.line(margin, yPos, pageWidth - margin, yPos);
  yPos += 10;

  // Job Details Section
  doc.setFontSize(14);
  doc.setFont("helvetica", "bold");
  doc.text("Job Details", margin, yPos);
  yPos += 8;

  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");

  const details = [
    ["Status", formatStatus(job.status)],
    ["Priority", job.priority],
    ["Category", job.category],
    ["Created", format(new Date(job.created_at), "PPpp")],
    ["Site Location", job.site_location],
    ["Asset Reference", job.asset_reference],
  ];

  if (job.source_page) {
    details.push(["Source Page", job.source_page]);
  }

  details.forEach(([label, value]) => {
    doc.setFont("helvetica", "bold");
    doc.text(`${label}:`, margin, yPos);
    doc.setFont("helvetica", "normal");
    doc.text(value || "N/A", margin + 45, yPos);
    yPos += 6;
  });

  yPos += 6;

  // Description
  doc.setFont("helvetica", "bold");
  doc.text("Issue Description:", margin, yPos);
  yPos += 6;
  doc.setFont("helvetica", "normal");
  const descLines = doc.splitTextToSize(job.description, pageWidth - margin * 2);
  doc.text(descLines, margin, yPos);
  yPos += descLines.length * 5 + 6;

  // Check for page break
  if (yPos > 250) {
    doc.addPage();
    yPos = 20;
  }

  // Reporter Section
  yPos += 4;
  doc.setFontSize(14);
  doc.setFont("helvetica", "bold");
  doc.text("Reporter Information", margin, yPos);
  yPos += 8;

  doc.setFontSize(10);
  const reporterDetails = [
    ["Name", job.name],
    ["Role", job.role],
    ["Company", job.company],
    ["Email", job.email],
    ["Phone", job.phone || "N/A"],
  ];

  reporterDetails.forEach(([label, value]) => {
    doc.setFont("helvetica", "bold");
    doc.text(`${label}:`, margin, yPos);
    doc.setFont("helvetica", "normal");
    doc.text(value, margin + 25, yPos);
    yPos += 6;
  });

  // AI Summary / Engineer Notes
  if (job.ai_summary) {
    yPos += 6;
    doc.setFont("helvetica", "bold");
    doc.text("Engineer Notes / AI Summary:", margin, yPos);
    yPos += 6;
    doc.setFont("helvetica", "normal");
    const notesLines = doc.splitTextToSize(job.ai_summary, pageWidth - margin * 2);
    doc.text(notesLines, margin, yPos);
    yPos += notesLines.length * 5 + 6;
  }

  // Activity Log Section
  if (activities.length > 0) {
    if (yPos > 220) {
      doc.addPage();
      yPos = 20;
    }

    yPos += 6;
    doc.setDrawColor(200);
    doc.line(margin, yPos, pageWidth - margin, yPos);
    yPos += 10;

    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text("Activity Log", margin, yPos);
    yPos += 10;

    doc.setFontSize(9);
    activities.forEach((activity) => {
      if (yPos > 270) {
        doc.addPage();
        yPos = 20;
      }

      doc.setFont("helvetica", "bold");
      doc.text(getActionLabel(activity.action), margin, yPos);
      doc.setFont("helvetica", "normal");
      doc.text(format(new Date(activity.created_at), "PPp"), margin + 60, yPos);
      if (activity.created_by) {
        doc.text(`by ${activity.created_by}`, margin + 120, yPos);
      }
      yPos += 5;

      if (activity.action === "status_change" && activity.old_value && activity.new_value) {
        doc.text(`${formatStatus(activity.old_value)} → ${formatStatus(activity.new_value)}`, margin + 5, yPos);
        yPos += 5;
      }

      if (activity.notes) {
        const noteLines = doc.splitTextToSize(activity.notes, pageWidth - margin * 2 - 5);
        doc.text(noteLines, margin + 5, yPos);
        yPos += noteLines.length * 4;
      }

      yPos += 4;
    });
  }

  // Save the PDF
  doc.save(`Helpdesk-Job-${job.id.substring(0, 8)}-${format(new Date(), "yyyy-MM-dd")}.pdf`);
}
