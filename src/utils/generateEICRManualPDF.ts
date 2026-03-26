import { jsPDF } from "jspdf";
import logoImage from "@/assets/logo.png";

// Helper to load image as base64
async function loadImageAsBase64(src: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.drawImage(img, 0, 0);
        resolve(canvas.toDataURL("image/png"));
      } else {
        reject(new Error("Could not get canvas context"));
      }
    };
    img.onerror = reject;
    img.src = src;
  });
}

const COLORS = {
  charcoal: [30, 30, 30] as const,
  pink: [236, 72, 153] as const,
  darkGray: [60, 60, 60] as const,
  gray: [100, 100, 100] as const,
  lightGray: [240, 240, 240] as const,
  white: [255, 255, 255] as const,
  red: [220, 38, 38] as const,
  orange: [234, 88, 12] as const,
  amber: [202, 138, 4] as const,
  blue: [37, 99, 235] as const,
  green: [22, 163, 74] as const,
};

export async function downloadEICRManualComprehensive(): Promise<void> {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 20;
  const contentWidth = pageWidth - margin * 2;
  let logoBase64: string | null = null;

  try {
    logoBase64 = await loadImageAsBase64((logoImage as any).src || logoImage);
  } catch {
    // continue without logo
  }

  let yPos = 0;

  // ─── Helper functions ───

  function addFooter(pageNum: number) {
    doc.setDrawColor(...COLORS.pink);
    doc.setLineWidth(0.3);
    doc.line(margin, pageHeight - 18, margin + contentWidth, pageHeight - 18);
    doc.setFontSize(7);
    doc.setTextColor(...COLORS.gray);
    doc.setFont("helvetica", "normal");
    doc.text("EntireFM | 0800 024 8550 | hello@entirefm.com | www.entirefm.com", margin, pageHeight - 12);
    doc.text(`Page ${pageNum}`, pageWidth - margin, pageHeight - 12, { align: "right" });
  }

  function checkPageBreak(needed: number, pageNum: { value: number }): number {
    if (yPos + needed > pageHeight - 30) {
      addFooter(pageNum.value);
      doc.addPage();
      pageNum.value++;
      return margin + 5;
    }
    return yPos;
  }

  function sectionHeading(title: string, pageNum: { value: number }) {
    yPos = checkPageBreak(20, pageNum);
    // Pink accent bar
    doc.setFillColor(...COLORS.pink);
    doc.rect(margin, yPos, 3, 12, "F");
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(...COLORS.charcoal);
    doc.text(title, margin + 8, yPos + 9);
    yPos += 18;
  }

  function bodyText(text: string, pageNum: { value: number }) {
    doc.setFontSize(9.5);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(...COLORS.darkGray);
    const lines = doc.splitTextToSize(text, contentWidth);
    lines.forEach((line: string) => {
      yPos = checkPageBreak(5, pageNum);
      doc.text(line, margin, yPos);
      yPos += 5;
    });
    yPos += 3;
  }

  function bulletPoint(text: string, pageNum: { value: number }, color?: readonly [number, number, number]) {
    yPos = checkPageBreak(7, pageNum);
    doc.setFontSize(9.5);
    doc.setTextColor(...(color || COLORS.pink));
    doc.text("•", margin + 4, yPos);
    doc.setTextColor(...COLORS.darkGray);
    doc.setFont("helvetica", "normal");
    const lines = doc.splitTextToSize(text, contentWidth - 12);
    doc.text(lines, margin + 10, yPos);
    yPos += lines.length * 5 + 2;
  }

  function numberedPoint(num: string, title: string, desc: string, pageNum: { value: number }) {
    yPos = checkPageBreak(14, pageNum);
    doc.setFontSize(9.5);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(...COLORS.pink);
    doc.text(num, margin + 4, yPos);
    doc.setTextColor(...COLORS.charcoal);
    doc.text(title, margin + 12, yPos);
    yPos += 5;
    doc.setFont("helvetica", "normal");
    doc.setTextColor(...COLORS.darkGray);
    const lines = doc.splitTextToSize(desc, contentWidth - 14);
    doc.text(lines, margin + 12, yPos);
    yPos += lines.length * 5 + 3;
  }

  const pageNum = { value: 1 };

  // ═══════════════════════════════════════════════
  // PAGE 1 — COVER / TITLE PAGE
  // ═══════════════════════════════════════════════

  // Full charcoal header
  doc.setFillColor(...COLORS.charcoal);
  doc.rect(0, 0, pageWidth, 70, "F");

  if (logoBase64) {
    doc.addImage(logoBase64, "PNG", margin, 10, 35, 35);
  }

  doc.setTextColor(...COLORS.white);
  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  doc.text("EntireFM", margin + 42, 20);

  doc.setFontSize(24);
  doc.setFont("helvetica", "bold");
  doc.text("EICR Survival Manual", margin + 42, 36);

  doc.setFontSize(11);
  doc.setFont("helvetica", "normal");
  doc.text("Electrical Installation Condition Reports", margin + 42, 46);
  doc.text("A Comprehensive Guide for Property Managers & Duty Holders", margin + 42, 54);

  const today = new Date().toLocaleDateString("en-GB", { month: "long", year: "numeric" });
  doc.setFontSize(9);
  doc.text(`Updated: ${today}`, margin + 42, 64);

  yPos = 85;

  // About this guide
  sectionHeading("About This Guide", pageNum);
  bodyText(
    "This manual provides property managers, landlords, and duty holders with everything they need to understand, manage, and maintain compliance with Electrical Installation Condition Report (EICR) requirements. It covers the legal framework, classification codes, testing frequencies, remedial priorities, contractor selection, and ongoing compliance management.",
    pageNum
  );
  bodyText(
    "Whether you manage a single commercial property or a national portfolio, this guide will help you navigate the regulatory landscape and ensure your electrical installations are safe, compliant, and properly documented.",
    pageNum
  );

  // ─── What is an EICR? ───
  sectionHeading("1. What is an EICR?", pageNum);
  bodyText(
    "An Electrical Installation Condition Report (EICR) is a formal document produced following a periodic inspection and testing of the fixed electrical installation in a building. It assesses the safety and condition of the wiring, circuits, distribution boards, and protective devices against the requirements of BS 7671 — the IET Wiring Regulations.",
    pageNum
  );
  bodyText("An EICR will identify:", pageNum);
  bulletPoint("Defects or deterioration that could lead to danger", pageNum);
  bulletPoint("Non-compliance with current wiring standards (BS 7671:2018+A2:2022)", pageNum);
  bulletPoint("Circuits or equipment that are overloaded or inadequately protected", pageNum);
  bulletPoint("Missing or defective earthing and bonding", pageNum);
  bulletPoint("Items requiring further investigation or immediate remedial action", pageNum);

  bodyText(
    "The outcome is a classification of the overall installation as either 'Satisfactory' or 'Unsatisfactory', along with individual observation codes for any defects found.",
    pageNum
  );

  // ─── Legal Framework ───
  sectionHeading("2. Legal Framework & Obligations", pageNum);
  bodyText(
    "Electrical safety in buildings is governed by several overlapping pieces of legislation. Understanding your legal obligations is critical to avoiding enforcement action, prosecution, and liability for injury or death.",
    pageNum
  );

  numberedPoint("2.1", "Electricity at Work Regulations 1989 (EAW)", 
    "The primary legislation requiring all electrical systems to be maintained in a safe condition. Applies to all workplaces. Regulation 4(2) specifically requires that electrical systems are maintained so as to prevent danger. Non-compliance can result in criminal prosecution with unlimited fines and imprisonment.",
    pageNum
  );
  numberedPoint("2.2", "BS 7671:2018+A2:2022 (IET Wiring Regulations)",
    "The national standard for electrical installation in the UK. While not law itself, compliance with BS 7671 is accepted as evidence of meeting the requirements of the EAW Regulations. The 18th Edition (Amendment 2) is the current version and applies to all new installations and significant alterations.",
    pageNum
  );
  numberedPoint("2.3", "The Regulatory Reform (Fire Safety) Order 2005",
    "Requires the Responsible Person to ensure electrical installations do not pose a fire risk. EICRs provide documented evidence of compliance with this requirement. Post-Grenfell amendments have strengthened enforcement powers.",
    pageNum
  );
  numberedPoint("2.4", "Landlord & Tenant Act / Electrical Safety Standards",
    "The Electrical Safety Standards in the Private Rented Sector (England) Regulations 2020 mandate 5-yearly EICR inspections for all private rented properties. Scotland has similar requirements under the Housing (Scotland) Act 2006. Non-compliance can result in fines up to £30,000.",
    pageNum
  );
  numberedPoint("2.5", "Health and Safety at Work Act 1974",
    "Places general duties on employers and building owners to ensure, so far as reasonably practicable, the safety of employees and others who may be affected by work activities. This includes maintaining electrical installations.",
    pageNum
  );

  // ─── Classification Codes ───
  sectionHeading("3. EICR Classification Codes Explained", pageNum);
  bodyText(
    "Every observation recorded during an EICR is assigned a classification code indicating its severity and the urgency of remedial action required. Understanding these codes is essential for prioritising works and managing budgets.",
    pageNum
  );

  // C1
  yPos = checkPageBreak(30, pageNum);
  doc.setFillColor(254, 226, 226);
  doc.rect(margin, yPos - 2, contentWidth, 28, "F");
  doc.setFontSize(11);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(...COLORS.red);
  doc.text("C1 — Danger Present", margin + 4, yPos + 6);
  doc.setFontSize(9);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(...COLORS.darkGray);
  doc.text("Risk of injury exists. Requires immediate remedial action.", margin + 4, yPos + 14);
  doc.text("Examples: exposed live parts, absent earthing, burnt connections, imminent fire risk.", margin + 4, yPos + 20);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(...COLORS.red);
  doc.text("Action: Immediate — make safe at time of inspection or isolate.", margin + 4, yPos + 26);
  yPos += 34;

  // C2
  yPos = checkPageBreak(30, pageNum);
  doc.setFillColor(255, 237, 213);
  doc.rect(margin, yPos - 2, contentWidth, 28, "F");
  doc.setFontSize(11);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(...COLORS.orange);
  doc.text("C2 — Potentially Dangerous", margin + 4, yPos + 6);
  doc.setFontSize(9);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(...COLORS.darkGray);
  doc.text("Could become dangerous. Requires urgent remedial action.", margin + 4, yPos + 14);
  doc.text("Examples: deteriorated wiring, inadequate RCD protection, overloaded circuits.", margin + 4, yPos + 20);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(...COLORS.orange);
  doc.text("Action: Within 28 days — schedule remedial works as a priority.", margin + 4, yPos + 26);
  yPos += 34;

  // C3
  yPos = checkPageBreak(30, pageNum);
  doc.setFillColor(254, 249, 195);
  doc.rect(margin, yPos - 2, contentWidth, 28, "F");
  doc.setFontSize(11);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(...COLORS.amber);
  doc.text("C3 — Improvement Recommended", margin + 4, yPos + 6);
  doc.setFontSize(9);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(...COLORS.darkGray);
  doc.text("Does not comply with current standards but is not immediately dangerous.", margin + 4, yPos + 14);
  doc.text("Examples: lack of RCD on socket circuits, old consumer unit without covers.", margin + 4, yPos + 20);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(...COLORS.amber);
  doc.text("Action: Recommended at next inspection — plan improvements into budgets.", margin + 4, yPos + 26);
  yPos += 34;

  // FI
  yPos = checkPageBreak(24, pageNum);
  doc.setFillColor(219, 234, 254);
  doc.rect(margin, yPos - 2, contentWidth, 22, "F");
  doc.setFontSize(11);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(...COLORS.blue);
  doc.text("FI — Further Investigation Required", margin + 4, yPos + 6);
  doc.setFontSize(9);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(...COLORS.darkGray);
  doc.text("The inspector could not fully assess this area. Further investigation is needed to determine the classification.", margin + 4, yPos + 14);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(...COLORS.blue);
  doc.text("Action: Arrange follow-up inspection — treat as potentially C1/C2 until resolved.", margin + 4, yPos + 20);
  yPos += 30;

  // ─── Testing Frequencies ───
  sectionHeading("4. Testing Frequencies by Premises Type", pageNum);
  bodyText(
    "BS 7671 and IET Guidance Note 3 recommend maximum intervals between periodic inspections based on the type of installation and its use. These are maximums — more frequent testing may be appropriate for high-risk environments.",
    pageNum
  );

  const frequencies = [
    ["Commercial Offices", "5 years", "BS 7671 Table 3A"],
    ["Retail Premises", "5 years", "BS 7671 Table 3A"],
    ["Industrial / Factories", "3 years", "EAW 1989 / BS 7671"],
    ["Rented Residential (England)", "5 years", "ESSR 2020 (mandatory)"],
    ["Rented Residential (Scotland)", "5 years", "Housing (Scotland) Act"],
    ["Healthcare / Hospitals", "5 years", "HTM 06-01"],
    ["Educational Establishments", "5 years", "BB100 / BS 7671"],
    ["Leisure / Public Assembly", "3 years", "BS 7671 Table 3A"],
    ["Hotels / Guest Houses", "5 years", "BS 7671 Table 3A"],
    ["Petrol Stations / Hazardous", "1 year", "BS 7671 Table 3A"],
    ["Construction Sites", "3 months", "BS 7671 Table 3A"],
    ["Swimming Pools / Saunas", "1 year", "BS 7671 Part 7"],
    ["Agricultural / Horticultural", "3 years", "BS 7671 Table 3A"],
    ["Caravans / Marinas", "1–3 years", "BS 7671 Part 7"],
    ["Places of Public Entertainment", "1–3 years", "Licensing conditions"],
  ];

  // Table
  yPos = checkPageBreak(10 + frequencies.length * 8, pageNum);
  const colWidths = [70, 40, contentWidth - 110];
  const headers = ["Premises Type", "Max Interval", "Regulatory Reference"];

  doc.setFillColor(...COLORS.charcoal);
  doc.rect(margin, yPos, contentWidth, 9, "F");
  doc.setFontSize(8);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(...COLORS.white);
  let xPos = margin + 3;
  headers.forEach((h, i) => {
    doc.text(h, xPos, yPos + 6);
    xPos += colWidths[i];
  });
  yPos += 11;

  doc.setFontSize(8);
  doc.setFont("helvetica", "normal");
  frequencies.forEach((row, idx) => {
    yPos = checkPageBreak(9, pageNum);
    if (idx % 2 === 0) {
      doc.setFillColor(...COLORS.lightGray);
      doc.rect(margin, yPos - 2, contentWidth, 8, "F");
    }
    doc.setTextColor(...COLORS.charcoal);
    xPos = margin + 3;
    doc.setFont("helvetica", "bold");
    doc.text(row[0], xPos, yPos + 4);
    xPos += colWidths[0];
    doc.setFont("helvetica", "normal");
    doc.setTextColor(...COLORS.pink);
    doc.text(row[1], xPos, yPos + 4);
    xPos += colWidths[1];
    doc.setTextColor(...COLORS.gray);
    doc.text(row[2], xPos, yPos + 4);
    yPos += 8;
  });
  yPos += 8;

  // ─── Common Failures ───
  sectionHeading("5. Common EICR Failures & Remedial Priorities", pageNum);
  bodyText(
    "Understanding the most frequently reported defects helps you proactively address issues before they appear on an EICR, reducing remedial costs and avoiding unsatisfactory reports.",
    pageNum
  );

  const failures = [
    { title: "Missing or defective RCD protection", severity: "C2", desc: "Socket circuits and circuits in bathrooms/kitchens must be RCD-protected. Retrofit RCBOs or add an RCD board." },
    { title: "Deteriorated consumer unit / distribution board", severity: "C2", desc: "Old rewireable fuse boards should be upgraded to modern MCB/RCBO boards with proper labelling." },
    { title: "Absent or inadequate earthing and bonding", severity: "C1/C2", desc: "Main protective bonding to gas, water, and oil must be present and correctly sized. Supplementary bonding in bathrooms." },
    { title: "Damaged or exposed cable runs", severity: "C1/C2", desc: "Cables must be properly supported, protected by trunking/conduit where exposed, and free from damage." },
    { title: "Overloaded circuits", severity: "C2", desc: "Ring final circuits with excessive spurs or multiple high-load appliances on a single circuit." },
    { title: "Obsolete wiring systems", severity: "C2/C3", desc: "Lead-sheathed, rubber-insulated, or imperial-sized cables should be replaced as part of planned works." },
    { title: "Missing circuit identification / labelling", severity: "C3", desc: "All circuits must be identified at the distribution board with a schedule of circuits affixed." },
    { title: "Lack of fire stopping at penetrations", severity: "C2", desc: "Where cables pass through fire-rated walls/floors, proper fire stopping must be installed." },
  ];

  failures.forEach((f) => {
    yPos = checkPageBreak(18, pageNum);
    doc.setFontSize(9.5);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(...COLORS.charcoal);
    doc.text(f.title, margin + 4, yPos);

    // Severity badge
    const badgeColor = f.severity.includes("C1") ? COLORS.red : f.severity.includes("C2") ? COLORS.orange : COLORS.amber;
    const badgeW = doc.getTextWidth(f.severity) + 6;
    doc.setFillColor(badgeColor[0], badgeColor[1], badgeColor[2]);
    doc.roundedRect(pageWidth - margin - badgeW - 2, yPos - 4, badgeW, 6, 1, 1, "F");
    doc.setFontSize(7);
    doc.setTextColor(...COLORS.white);
    doc.text(f.severity, pageWidth - margin - badgeW + 1, yPos);

    yPos += 5;
    doc.setFontSize(9);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(...COLORS.darkGray);
    const lines = doc.splitTextToSize(f.desc, contentWidth - 8);
    doc.text(lines, margin + 4, yPos);
    yPos += lines.length * 5 + 5;
  });

  // ─── Contractor Selection ───
  sectionHeading("6. Selecting a Competent EICR Contractor", pageNum);
  bodyText(
    "Not all electricians are qualified to carry out EICR inspections. The testing must be performed by a competent person registered with an appropriate Competent Person Scheme. When selecting a contractor, verify the following:",
    pageNum
  );

  const contractorChecks = [
    "Registration with NICEIC, NAPIT, ELECSA, or equivalent Competent Person Scheme",
    "Individual engineer holds City & Guilds 2391 (Inspection & Testing) or equivalent",
    "Current public liability insurance (minimum £2m, ideally £5m+)",
    "Professional indemnity insurance for the reports being issued",
    "Experience with your premises type (commercial, industrial, healthcare, etc.)",
    "Ability to provide a clear written specification of works before commencing",
    "Willingness to provide sample reports and references from similar projects",
    "Competence in issuing remedial quotations with clear C-code prioritisation",
    "Digital reporting capability with photo evidence and certificate management",
  ];

  contractorChecks.forEach((check) => {
    bulletPoint(check, pageNum, COLORS.green);
  });

  // ─── Managing Your EICR Programme ───
  sectionHeading("7. Managing Your EICR Programme", pageNum);
  bodyText(
    "For multi-site portfolios, a structured approach to EICR management ensures compliance is maintained across the estate. Consider the following best practices:",
    pageNum
  );

  numberedPoint("7.1", "Asset Register",
    "Maintain a complete register of all electrical distribution boards, their locations, the date of the last EICR, and the next due date. Include the overall assessment outcome (Satisfactory/Unsatisfactory) and the number of outstanding observations.",
    pageNum
  );
  numberedPoint("7.2", "Remedial Works Tracking",
    "Log all C1, C2, and C3 observations in a remedial tracker. Assign ownership, target completion dates, and budget allocations. C1 defects must be addressed immediately; C2 within 28 days; C3 should be programmed into planned works.",
    pageNum
  );
  numberedPoint("7.3", "Certificate Storage",
    "Store all EICR certificates, Minor Works Certificates, and Electrical Installation Certificates in a centralised, accessible system. Original certificates should be retained for the life of the installation. Digital copies should be backed up.",
    pageNum
  );
  numberedPoint("7.4", "Compliance Calendar",
    "Set up automated reminders 6 months before each EICR expires. This provides sufficient lead time to procure a contractor, schedule access, and complete the inspection before the certificate lapses.",
    pageNum
  );
  numberedPoint("7.5", "Budget Planning",
    "Allow for remedial works in your annual maintenance budget. A typical EICR may identify £500–£5,000 of remedial works per distribution board, depending on the age and condition of the installation. Consumer unit replacements typically cost £800–£2,500 each.",
    pageNum
  );

  // ─── Risks of Non-Compliance ───
  sectionHeading("8. Risks of Non-Compliance", pageNum);
  bodyText(
    "Failure to maintain valid EICRs and address identified defects exposes organisations to significant legal, financial, and safety risks:",
    pageNum
  );

  const risks = [
    "Criminal prosecution under the Electricity at Work Regulations 1989 — unlimited fines, imprisonment for manslaughter in cases of fatal electrocution",
    "Civil liability for personal injury claims from employees, tenants, or visitors",
    "Enforcement action by the HSE, local authority, or fire service — including Improvement and Prohibition Notices",
    "Insurance policy invalidation — insurers may refuse to pay claims if electrical compliance has lapsed",
    "Fines up to £30,000 per property for residential landlords under the Electrical Safety Standards Regulations 2020",
    "Rent Repayment Orders — tenants can reclaim up to 12 months' rent for serious non-compliance",
    "Reputational damage and loss of operating licences for care homes, schools, and hospitality venues",
    "Fire risk — electrical faults remain the leading cause of non-dwelling fires in the UK",
  ];

  risks.forEach((r) => {
    bulletPoint(r, pageNum, COLORS.red);
  });

  // ─── Quick Reference ───
  sectionHeading("9. Quick Reference Summary", pageNum);

  const quickRef = [
    ["What", "Detail"],
    ["Standard", "BS 7671:2018+A2:2022 (18th Edition)"],
    ["Legislation", "Electricity at Work Regulations 1989"],
    ["Max interval (commercial)", "5 years"],
    ["Max interval (industrial)", "3 years"],
    ["Max interval (rented residential)", "5 years (mandatory)"],
    ["C1 response time", "Immediate — isolate or make safe"],
    ["C2 response time", "Within 28 days"],
    ["C3 response time", "At next scheduled inspection"],
    ["FI response time", "Arrange follow-up ASAP"],
    ["Competent person schemes", "NICEIC, NAPIT, ELECSA, STROMA"],
    ["Engineer qualification", "City & Guilds 2391 or equivalent"],
    ["Certificate retention", "Life of the installation"],
  ];

  yPos = checkPageBreak(10 + quickRef.length * 7, pageNum);
  // Header
  doc.setFillColor(...COLORS.charcoal);
  doc.rect(margin, yPos, contentWidth, 8, "F");
  doc.setFontSize(8);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(...COLORS.white);
  doc.text(quickRef[0][0], margin + 3, yPos + 6);
  doc.text(quickRef[0][1], margin + 55, yPos + 6);
  yPos += 10;

  doc.setFontSize(8);
  quickRef.slice(1).forEach((row, idx) => {
    yPos = checkPageBreak(8, pageNum);
    if (idx % 2 === 0) {
      doc.setFillColor(...COLORS.lightGray);
      doc.rect(margin, yPos - 2, contentWidth, 7, "F");
    }
    doc.setFont("helvetica", "bold");
    doc.setTextColor(...COLORS.charcoal);
    doc.text(row[0], margin + 3, yPos + 3);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(...COLORS.darkGray);
    doc.text(row[1], margin + 55, yPos + 3);
    yPos += 7;
  });

  yPos += 10;

  // ─── Call to Action ───
  yPos = checkPageBreak(35, pageNum);
  doc.setFillColor(...COLORS.charcoal);
  doc.roundedRect(margin, yPos, contentWidth, 32, 3, 3, "F");
  doc.setFontSize(13);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(...COLORS.white);
  doc.text("Need Professional EICR Testing?", margin + 8, yPos + 12);
  doc.setFontSize(9);
  doc.setFont("helvetica", "normal");
  doc.text("Our NICEIC-approved engineers deliver comprehensive EICR testing, remedial works,", margin + 8, yPos + 20);
  doc.text("and ongoing compliance management across your entire portfolio.", margin + 8, yPos + 26);

  // Final footer
  addFooter(pageNum.value);

  doc.save("entirefm-eicr-survival-manual.pdf");
}
