import jsPDF from "jspdf";

interface ComplianceItem {
  system: string;
  frequency: string;
  regulation: string;
  scope: string;
}

interface CapabilitySection {
  title: string;
  items?: string[];
  content?: string;
}

const BRAND_COLORS = {
  charcoal: [30, 30, 30] as [number, number, number],
  pink: [236, 72, 153] as [number, number, number],
  gray: [100, 100, 100] as [number, number, number],
  lightGray: [240, 240, 240] as [number, number, number],
  white: [255, 255, 255] as [number, number, number],
};

async function loadLogo(): Promise<string | null> {
  try {
    const response = await fetch("/lovable-uploads/16610aea-7e67-4abc-8be4-33e34e7ef402.png");
    const blob = await response.blob();
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result as string);
      reader.onerror = () => resolve(null);
      reader.readAsDataURL(blob);
    });
  } catch {
    return null;
  }
}

function generateChecklistPreview(
  doc: jsPDF,
  title: string,
  subtitle: string | null,
  companyName: string | null,
  footerNote: string | null,
  items: ComplianceItem[],
  logoData: string | null
): void {
  const pageWidth = doc.internal.pageSize.getWidth();
  let yPos = 20;

  // Header with logo
  if (logoData) {
    doc.addImage(logoData, "PNG", 15, yPos, 40, 16);
  }

  // Company name on right
  doc.setFontSize(10);
  doc.setTextColor(...BRAND_COLORS.gray);
  doc.text(companyName || "EntireFM", pageWidth - 15, yPos + 8, { align: "right" });

  yPos += 30;

  // Title
  doc.setFontSize(20);
  doc.setTextColor(...BRAND_COLORS.charcoal);
  doc.setFont("helvetica", "bold");
  doc.text(title, pageWidth / 2, yPos, { align: "center" });

  yPos += 10;

  // Subtitle
  if (subtitle) {
    doc.setFontSize(11);
    doc.setTextColor(...BRAND_COLORS.gray);
    doc.setFont("helvetica", "normal");
    doc.text(subtitle, pageWidth / 2, yPos, { align: "center" });
  }

  yPos += 15;

  // Pink accent line
  doc.setDrawColor(...BRAND_COLORS.pink);
  doc.setLineWidth(2);
  doc.line(pageWidth / 2 - 30, yPos, pageWidth / 2 + 30, yPos);

  yPos += 15;

  // Table header
  const colWidths = [60, 35, 35, 50];
  const startX = 15;

  doc.setFillColor(...BRAND_COLORS.charcoal);
  doc.rect(startX, yPos, pageWidth - 30, 10, "F");

  doc.setFontSize(9);
  doc.setTextColor(...BRAND_COLORS.white);
  doc.setFont("helvetica", "bold");

  let xPos = startX + 3;
  doc.text("System / Equipment", xPos, yPos + 7);
  xPos += colWidths[0];
  doc.text("Frequency", xPos, yPos + 7);
  xPos += colWidths[1];
  doc.text("Regulation", xPos, yPos + 7);
  xPos += colWidths[2];
  doc.text("Scope", xPos, yPos + 7);

  yPos += 12;

  // Table rows
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);

  items.forEach((item, index) => {
    if (yPos > 260) {
      doc.addPage();
      yPos = 20;
    }

    // Alternating row background
    if (index % 2 === 0) {
      doc.setFillColor(...BRAND_COLORS.lightGray);
      doc.rect(startX, yPos, pageWidth - 30, 10, "F");
    }

    doc.setTextColor(...BRAND_COLORS.charcoal);
    xPos = startX + 3;
    doc.text(item.system.substring(0, 35), xPos, yPos + 7);
    xPos += colWidths[0];
    doc.text(item.frequency, xPos, yPos + 7);
    xPos += colWidths[1];
    doc.text(item.regulation, xPos, yPos + 7);
    xPos += colWidths[2];
    doc.text(item.scope.substring(0, 30), xPos, yPos + 7);

    yPos += 10;
  });

  // Footer
  yPos = 280;
  if (footerNote) {
    doc.setFontSize(8);
    doc.setTextColor(...BRAND_COLORS.gray);
    doc.text(footerNote, pageWidth / 2, yPos, { align: "center", maxWidth: pageWidth - 40 });
  }

  // Page number
  doc.setFontSize(8);
  doc.text(`Page 1 of 1`, pageWidth - 15, 290, { align: "right" });
}

function generateCapabilityPackPreview(
  doc: jsPDF,
  title: string,
  subtitle: string | null,
  companyName: string | null,
  items: unknown,
  logoData: string | null
): void {
  const pageWidth = doc.internal.pageSize.getWidth();
  let yPos = 20;

  // Header
  if (logoData) {
    doc.addImage(logoData, "PNG", 15, yPos, 50, 20);
  }

  yPos += 35;

  // Title
  doc.setFontSize(24);
  doc.setTextColor(...BRAND_COLORS.charcoal);
  doc.setFont("helvetica", "bold");
  doc.text(title, pageWidth / 2, yPos, { align: "center" });

  yPos += 12;

  if (subtitle) {
    doc.setFontSize(12);
    doc.setTextColor(...BRAND_COLORS.gray);
    doc.setFont("helvetica", "normal");
    doc.text(subtitle, pageWidth / 2, yPos, { align: "center" });
  }

  yPos += 15;

  // Pink line
  doc.setDrawColor(...BRAND_COLORS.pink);
  doc.setLineWidth(2);
  doc.line(pageWidth / 2 - 40, yPos, pageWidth / 2 + 40, yPos);

  yPos += 20;

  // Parse sections if items is array
  const sections = Array.isArray(items) ? items as CapabilitySection[] : [];

  sections.forEach((section) => {
    if (yPos > 250) {
      doc.addPage();
      yPos = 20;
    }

    // Section title with pink accent
    doc.setFillColor(...BRAND_COLORS.pink);
    doc.rect(15, yPos, 3, 10, "F");

    doc.setFontSize(14);
    doc.setTextColor(...BRAND_COLORS.charcoal);
    doc.setFont("helvetica", "bold");
    doc.text(section.title, 22, yPos + 7);

    yPos += 15;

    // Section content
    doc.setFontSize(10);
    doc.setTextColor(...BRAND_COLORS.gray);
    doc.setFont("helvetica", "normal");

    if (section.items && Array.isArray(section.items)) {
      section.items.forEach((item: string) => {
        if (yPos > 270) {
          doc.addPage();
          yPos = 20;
        }
        doc.text(`• ${item}`, 22, yPos);
        yPos += 6;
      });
    }

    if (section.content) {
      const lines = doc.splitTextToSize(section.content, pageWidth - 40);
      doc.text(lines, 22, yPos);
      yPos += lines.length * 5;
    }

    yPos += 10;
  });

  // Footer
  doc.setFontSize(8);
  doc.setTextColor(...BRAND_COLORS.gray);
  doc.text(`${companyName || "EntireFM"} | Capability Pack`, pageWidth / 2, 290, { align: "center" });
}

export async function generatePreviewPDF(
  templateKey: string,
  title: string,
  subtitle: string | null,
  companyName: string | null,
  footerNote: string | null,
  items: ComplianceItem[] | unknown
): Promise<string> {
  const doc = new jsPDF();
  const logoData = await loadLogo();

  if (templateKey === "capability-pack") {
    generateCapabilityPackPreview(doc, title, subtitle, companyName, items, logoData);
  } else {
    generateChecklistPreview(
      doc,
      title,
      subtitle,
      companyName,
      footerNote,
      items as ComplianceItem[],
      logoData
    );
  }

  // Return blob URL for preview
  const blob = doc.output("blob");
  return URL.createObjectURL(blob);
}
