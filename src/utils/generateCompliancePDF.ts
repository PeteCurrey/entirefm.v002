import { jsPDF } from "jspdf";
import { supabase } from "@/integrations/supabase/client";
import logoImage from "@/assets/logo.png";

interface ComplianceItem {
  system: string;
  frequency: string;
  regulation: string;
  scope: string;
}

interface PDFOptions {
  title: string;
  subtitle?: string;
  companyName?: string;
  items: ComplianceItem[];
  footerNote?: string;
}

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

export async function generateCompliancePDF(options: PDFOptions): Promise<void> {
  const { title, subtitle, companyName = "EntireFM", items, footerNote } = options;
  
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 20;
  const contentWidth = pageWidth - (margin * 2);
  
  let yPos = margin;

  // Header background
  doc.setFillColor(30, 30, 30); // charcoal
  doc.rect(0, 0, pageWidth, 45, "F");

  // Add logo
  try {
    const logoBase64 = await loadImageAsBase64((logoImage as any).src || logoImage);
    doc.addImage(logoBase64, "PNG", margin, 8, 30, 30);
  } catch (error) {
    console.warn("Could not load logo for PDF:", error);
  }

  // Company name (positioned after logo)
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(12);
  doc.setFont("helvetica", "normal");
  doc.text(companyName, margin + 35, 18);

  // Title (positioned after logo)
  doc.setFontSize(18);
  doc.setFont("helvetica", "bold");
  doc.text(title, margin + 35, 30);

  // Subtitle
  if (subtitle) {
    doc.setFontSize(9);
    doc.setFont("helvetica", "normal");
    doc.text(subtitle, margin + 35, 38);
  }

  yPos = 55;

  // Reset text color
  doc.setTextColor(0, 0, 0);

  // Table header
  const colWidths = [45, 30, 35, contentWidth - 110];
  const headers = ["System / Component", "Frequency", "Regulation", "Scope"];
  
  // Header row background
  doc.setFillColor(240, 240, 240);
  doc.rect(margin, yPos, contentWidth, 10, "F");
  
  doc.setFontSize(9);
  doc.setFont("helvetica", "bold");
  
  let xPos = margin + 2;
  headers.forEach((header, index) => {
    doc.text(header, xPos, yPos + 7);
    xPos += colWidths[index];
  });

  yPos += 12;

  // Table rows
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);

  items.forEach((item, index) => {
    // Check if we need a new page
    if (yPos > pageHeight - 40) {
      doc.addPage();
      yPos = margin;
      
      // Repeat header on new page
      doc.setFillColor(240, 240, 240);
      doc.rect(margin, yPos, contentWidth, 10, "F");
      
      doc.setFontSize(9);
      doc.setFont("helvetica", "bold");
      
      let headerX = margin + 2;
      headers.forEach((header, idx) => {
        doc.text(header, headerX, yPos + 7);
        headerX += colWidths[idx];
      });
      
      yPos += 12;
      doc.setFont("helvetica", "normal");
      doc.setFontSize(8);
    }

    // Alternating row background
    if (index % 2 === 0) {
      doc.setFillColor(250, 250, 250);
      doc.rect(margin, yPos - 2, contentWidth, 10, "F");
    }

    // Draw cell borders
    doc.setDrawColor(230, 230, 230);
    doc.line(margin, yPos + 8, margin + contentWidth, yPos + 8);

    xPos = margin + 2;
    
    // System
    doc.setFont("helvetica", "bold");
    doc.text(item.system.substring(0, 25), xPos, yPos + 5);
    xPos += colWidths[0];
    
    // Frequency - with color coding
    doc.setFont("helvetica", "normal");
    const freq = item.frequency;
    if (freq === "Weekly") {
      doc.setTextColor(220, 38, 38); // red
    } else if (freq === "Monthly") {
      doc.setTextColor(234, 88, 12); // orange
    } else if (freq === "Quarterly") {
      doc.setTextColor(202, 138, 4); // yellow
    } else if (freq === "6-Monthly") {
      doc.setTextColor(37, 99, 235); // blue
    } else {
      doc.setTextColor(236, 72, 153); // primary pink
    }
    doc.text(freq, xPos, yPos + 5);
    doc.setTextColor(0, 0, 0);
    xPos += colWidths[1];
    
    // Regulation
    doc.setTextColor(100, 100, 100);
    doc.text(item.regulation, xPos, yPos + 5);
    doc.setTextColor(0, 0, 0);
    xPos += colWidths[2];
    
    // Scope - wrap text if needed
    const scopeText = item.scope.substring(0, 55) + (item.scope.length > 55 ? "..." : "");
    doc.text(scopeText, xPos, yPos + 5);

    yPos += 10;
  });

  // Footer
  yPos = Math.max(yPos + 10, pageHeight - 35);
  
  // Footer line
  doc.setDrawColor(236, 72, 153); // primary pink
  doc.setLineWidth(0.5);
  doc.line(margin, yPos, margin + contentWidth, yPos);

  yPos += 8;

  if (footerNote) {
    doc.setFontSize(9);
    doc.setFont("helvetica", "italic");
    doc.setTextColor(100, 100, 100);
    doc.text(footerNote, margin, yPos);
    yPos += 6;
  }

  // Contact info
  doc.setFontSize(8);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(100, 100, 100);
  doc.text("EntireFM | 0800 024 8550 | hello@entirefm.com | www.entirefm.com", margin, yPos + 5);
  
  // Generated date
  const today = new Date().toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric"
  });
  doc.text(`Generated: ${today}`, pageWidth - margin - 40, yPos + 5);

  // Save the PDF
  const filename = title.toLowerCase().replace(/[^a-z0-9]+/g, "-") + "-checklist.pdf";
  doc.save(filename);
}

// Pre-configured checklist generators
export const fireAlarmComplianceItems: ComplianceItem[] = [
  { system: "Fire Alarm System", frequency: "Weekly", regulation: "BS 5839-1", scope: "Manual call point test (different zone each week)" },
  { system: "Fire Alarm System", frequency: "Quarterly", regulation: "BS 5839-1", scope: "25% of detectors tested, visual inspection, battery checks" },
  { system: "Fire Alarm System", frequency: "Annually", regulation: "BS 5839-1", scope: "100% detector test, cause & effect verification, full system check" },
  { system: "Emergency Lighting", frequency: "Monthly", regulation: "BS 5266-1", scope: "Functional test (flick test) of all luminaires" },
  { system: "Emergency Lighting", frequency: "Annually", regulation: "BS 5266-1", scope: "Full 3-hour duration test with battery discharge" },
  { system: "Fire Doors", frequency: "Quarterly", regulation: "RRO Article 17", scope: "Visual inspection, gap checks, ironmongery, intumescent seals" },
  { system: "Fire Doors", frequency: "Annually", regulation: "BS 8214", scope: "Comprehensive inspection by competent person" },
  { system: "Sprinkler Systems", frequency: "Weekly", regulation: "BS EN 12845", scope: "Visual check, pump test, pressure readings" },
  { system: "Sprinkler Systems", frequency: "Annually", regulation: "LPC Rules", scope: "Full flow test, valve inspection, comprehensive service" },
  { system: "Dry Risers", frequency: "6-Monthly", regulation: "BS 9990", scope: "Visual inspection, inlet/outlet checks" },
  { system: "Dry Risers", frequency: "Annually", regulation: "BS 9990", scope: "Wet pressure test to 10 bar for 15 minutes" },
  { system: "Fire Extinguishers", frequency: "Annually", regulation: "BS 5306-3", scope: "Service & certification by competent technician" },
  { system: "Smoke Control / AOVs", frequency: "Weekly", regulation: "BS EN 12101-2", scope: "Functional test of automatic vents" },
  { system: "Smoke Control / AOVs", frequency: "Annually", regulation: "BS 7346-8", scope: "Full system test and certification" }
];

export const emergencyLightingComplianceItems: ComplianceItem[] = [
  { system: "Emergency Lighting", frequency: "Monthly", regulation: "BS 5266-1", scope: "Functional test (flick test) of all luminaires" },
  { system: "Emergency Lighting", frequency: "Annually", regulation: "BS 5266-1", scope: "Full 3-hour duration test with battery discharge" },
  { system: "Exit Signage", frequency: "Monthly", regulation: "BS 5266-1", scope: "Illumination verification and condition check" },
  { system: "Central Battery", frequency: "Monthly", regulation: "BS 5266-1", scope: "Charger output, battery condition, alarm tests" },
  { system: "Central Battery", frequency: "Annually", regulation: "BS 5266-1", scope: "Full load duration test with capacity verification" },
  { system: "Maintained Fittings", frequency: "Monthly", regulation: "BS 5266-1", scope: "Lamp condition and mains switching test" },
  { system: "Non-Maintained", frequency: "Monthly", regulation: "BS 5266-1", scope: "Activation on mains failure simulation" }
];

export const waterHygieneComplianceItems: ComplianceItem[] = [
  { system: "Legionella Risk Assessment", frequency: "Every 2 Years", regulation: "ACOP L8", scope: "Full system survey, risk scoring, remedial recommendations" },
  { system: "Hot Water Temperature", frequency: "Monthly", regulation: "HSG274", scope: "Sentinel outlets — must reach 50°C within 1 minute" },
  { system: "Cold Water Temperature", frequency: "Monthly", regulation: "HSG274", scope: "Sentinel outlets — must be below 20°C within 2 minutes" },
  { system: "Water Sampling", frequency: "As Risk Dictates", regulation: "ACOP L8", scope: "Legionella bacteria testing via UKAS laboratory" },
  { system: "Tank Inspection", frequency: "Annually", regulation: "ACOP L8", scope: "Visual inspection, lid integrity, insulation, chlorination" },
  { system: "TMV Servicing", frequency: "Annually", regulation: "HSG274", scope: "Fail-safe verification, temperature calibration" },
  { system: "Dead Leg Removal", frequency: "On Identification", regulation: "ACOP L8", scope: "Elimination of stagnation risk points" },
  { system: "Flushing Regime", frequency: "Weekly", regulation: "HSG274", scope: "Little-used outlets flushed to prevent stagnation" }
];

export const hvacComplianceItems: ComplianceItem[] = [
  { system: "F-Gas Systems", frequency: "Annually", regulation: "F-Gas Regulations", scope: "Leak detection, refrigerant logs, system certification" },
  { system: "Air Conditioning (>12kW)", frequency: "Every 5 Years", regulation: "TM44", scope: "Air conditioning energy assessment" },
  { system: "HVAC PPM", frequency: "Quarterly", regulation: "SFG20", scope: "PPM task scheduling and verification" },
  { system: "Building Regs Compliance", frequency: "On Install/Change", regulation: "Part L", scope: "Energy efficiency compliance" },
  { system: "Filter Changes", frequency: "Monthly", regulation: "SFG20", scope: "Air handling unit filter replacement" },
  { system: "Coil Cleaning", frequency: "Annually", regulation: "SFG20", scope: "Evaporator and condenser coil cleaning" },
  { system: "Belt & Drive Inspection", frequency: "Quarterly", regulation: "SFG20", scope: "Fan belt tension, pulley alignment, drive condition" },
  { system: "Refrigerant Checks", frequency: "6-Monthly", regulation: "F-Gas", scope: "Pressure readings, leak detection, oil levels" }
];

export const electricalComplianceItems: ComplianceItem[] = [
  { system: "EICR Testing", frequency: "Every 5 Years", regulation: "BS 7671", scope: "Electrical Installation Condition Report" },
  { system: "PAT Testing", frequency: "Annually", regulation: "IET Code of Practice", scope: "Portable appliance testing and labelling" },
  { system: "Emergency Lighting", frequency: "Monthly", regulation: "BS 5266-1", scope: "Functional test of all emergency luminaires" },
  { system: "Emergency Lighting", frequency: "Annually", regulation: "BS 5266-1", scope: "Full 3-hour duration test" },
  { system: "RCD Testing", frequency: "Quarterly", regulation: "BS 7671", scope: "Residual current device trip testing" },
  { system: "Thermographic Survey", frequency: "Annually", regulation: "BS 7671", scope: "Infrared inspection of electrical infrastructure" },
  { system: "Lightning Protection", frequency: "Annually", regulation: "BS EN 62305", scope: "Earth resistance and bonding verification" },
  { system: "Generator Testing", frequency: "Monthly", regulation: "BS 7698", scope: "Load test and operational verification" }
];

// Fetch template from database with fallback to defaults
async function fetchTemplate(templateKey: string, fallbackItems: ComplianceItem[], fallbackOptions: { title: string; subtitle: string; footerNote: string }) {
  try {
    const { data, error } = await supabase
      .from("pdf_templates")
      .select("*")
      .eq("template_key", templateKey)
      .eq("is_active", true)
      .single();
    
    if (error || !data) {
      return {
        title: fallbackOptions.title,
        subtitle: fallbackOptions.subtitle,
        items: fallbackItems,
        footerNote: fallbackOptions.footerNote,
        companyName: "EntireFM"
      };
    }
    
    return {
      title: data.title,
      subtitle: data.subtitle || fallbackOptions.subtitle,
      items: (Array.isArray(data.items) ? data.items : fallbackItems) as ComplianceItem[],
      footerNote: data.footer_note || fallbackOptions.footerNote,
      companyName: data.company_name || "EntireFM"
    };
  } catch {
    return {
      title: fallbackOptions.title,
      subtitle: fallbackOptions.subtitle,
      items: fallbackItems,
      footerNote: fallbackOptions.footerNote,
      companyName: "EntireFM"
    };
  }
}

export async function downloadFireAlarmChecklist() {
  const template = await fetchTemplate("fire-alarm", fireAlarmComplianceItems, {
    title: "Fire Safety Compliance Checklist",
    subtitle: "UK Statutory Testing Requirements — BS 5839, BS 5266, RRO",
    footerNote: "All visits logged. All records stored. Easily retrievable for audits or HSE."
  });
  await generateCompliancePDF(template);
}

export async function downloadEmergencyLightingChecklist() {
  const template = await fetchTemplate("emergency-lighting", emergencyLightingComplianceItems, {
    title: "Emergency Lighting Compliance Checklist",
    subtitle: "UK Statutory Testing Requirements — BS 5266",
    footerNote: "Monthly functional tests and annual 3-hour duration tests required."
  });
  await generateCompliancePDF(template);
}

export async function downloadWaterHygieneChecklist() {
  const template = await fetchTemplate("water-hygiene", waterHygieneComplianceItems, {
    title: "Water Hygiene Compliance Checklist",
    subtitle: "UK Statutory Testing Requirements — ACOP L8, HSG274",
    footerNote: "Legionella control requires ongoing monitoring and risk assessment refresh."
  });
  await generateCompliancePDF(template);
}

export async function downloadHVACChecklist() {
  const template = await fetchTemplate("hvac", hvacComplianceItems, {
    title: "HVAC Compliance Checklist",
    subtitle: "UK Statutory Testing Requirements — F-Gas, SFG20, TM44",
    footerNote: "F-Gas certified engineers required for refrigerant handling."
  });
  await generateCompliancePDF(template);
}

export async function downloadElectricalChecklist() {
  const template = await fetchTemplate("electrical", electricalComplianceItems, {
    title: "Electrical Compliance Checklist",
    subtitle: "UK Statutory Testing Requirements — BS 7671, IET",
    footerNote: "NICEIC or equivalent certification required for all electrical testing."
  });
  await generateCompliancePDF(template);
}

export const eicrManualItems: ComplianceItem[] = [
  { system: "EICR Testing Cycle", frequency: "Every 5 years", regulation: "BS 7671", scope: "All fixed electrical installations" },
  { system: "C1 (Danger Present) Remedials", frequency: "Immediate", regulation: "EAW 1989", scope: "Defects posing immediate risk of injury" },
  { system: "C2 (Potentially Dangerous)", frequency: "Within 28 days", regulation: "BS 7671", scope: "Defects likely to become dangerous" },
  { system: "C3 (Improvement Recommended)", frequency: "Next inspection", regulation: "BS 7671", scope: "Non-compliant but not immediately dangerous" },
  { system: "FI (Further Investigation)", frequency: "As required", regulation: "BS 7671", scope: "Areas requiring additional testing or access" },
  { system: "Contractor Accreditation", frequency: "Annual", regulation: "NICEIC/NAPIT", scope: "Verify contractor competent person scheme membership" },
  { system: "Distribution Board Inspection", frequency: "Every 5 years", regulation: "BS 7671", scope: "Consumer units, RCDs, MCBs, labelling" },
  { system: "Emergency Lighting Circuit", frequency: "Monthly/Annual", regulation: "BS 5266", scope: "Emergency lighting on electrical circuits" },
];

export async function downloadEICRManual() {
  const template = await fetchTemplate("eicr-manual", eicrManualItems, {
    title: "EICR Survival Manual",
    subtitle: "Electrical Installation Condition Report — Compliance Checklist",
    footerNote: "Based on BS 7671 (IET Wiring Regulations) and Electricity at Work Regulations 1989. For guidance only."
  });
  await generateCompliancePDF(template);
}

// Capability Pack PDF Generator
export async function downloadCapabilityPack(): Promise<void> {
  // Fetch template from database for metadata
  let title = "Capability Pack";
  let subtitle = "Comprehensive FM Services for UK Commercial & Public Estates";
  let companyName = "EntireFM";
  
  try {
    const { data } = await supabase
      .from("pdf_templates")
      .select("*")
      .eq("template_key", "capability-pack")
      .eq("is_active", true)
      .single();
    
    if (data) {
      title = data.title || title;
      subtitle = data.subtitle || subtitle;
      companyName = data.company_name || companyName;
    }
  } catch {
    // Use defaults
  }
  
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 20;
  const contentWidth = pageWidth - (margin * 2);
  
  let yPos = margin;

  // Header background
  doc.setFillColor(30, 30, 30);
  doc.rect(0, 0, pageWidth, 50, "F");

  // Add logo
  try {
    const logoBase64 = await loadImageAsBase64((logoImage as any).src || logoImage);
    doc.addImage(logoBase64, "PNG", margin, 8, 35, 35);
  } catch (error) {
    console.warn("Could not load logo for PDF:", error);
  }

  // Company name
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(12);
  doc.setFont("helvetica", "normal");
  doc.text(companyName, margin + 42, 18);

  // Title
  doc.setFontSize(22);
  doc.setFont("helvetica", "bold");
  doc.text(title, margin + 42, 32);

  // Subtitle
  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  doc.text(subtitle, margin + 42, 42);

  yPos = 60;
  doc.setTextColor(0, 0, 0);

  // Introduction
  doc.setFontSize(14);
  doc.setFont("helvetica", "bold");
  doc.text("About EntireFM", margin, yPos);
  yPos += 8;

  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  const intro = "EntireFM is a leading facilities management provider delivering compliance-first solutions across the UK. We serve commercial offices, retail estates, healthcare facilities, education campuses, and industrial sites with end-to-end maintenance and safety services.";
  const introLines = doc.splitTextToSize(intro, contentWidth);
  doc.text(introLines, margin, yPos);
  yPos += introLines.length * 5 + 10;

  // Services Section
  doc.setFontSize(14);
  doc.setFont("helvetica", "bold");
  doc.text("Our Core Services", margin, yPos);
  yPos += 10;

  const services = [
    { name: "Fire Safety Systems", desc: "Fire alarms, suppression, extinguishers, emergency lighting — BS 5839, BS 5266 compliant" },
    { name: "M&E Maintenance", desc: "Electrical, HVAC, plumbing, and building fabric maintenance — SFG20 scheduled" },
    { name: "Water Hygiene", desc: "Legionella risk assessment, temperature monitoring, TMV servicing — ACOP L8 certified" },
    { name: "Statutory Compliance", desc: "EICR, PAT testing, gas safety, lift servicing — full regulatory coverage" },
    { name: "Reactive Repairs", desc: "24/7 helpdesk, rapid response, nationwide engineer coverage" },
    { name: "Planned Preventive Maintenance", desc: "Asset lifecycle management, condition surveys, PPM scheduling" }
  ];

  doc.setFontSize(10);
  services.forEach((service) => {
    if (yPos > pageHeight - 40) {
      doc.addPage();
      yPos = margin;
    }
    doc.setFont("helvetica", "bold");
    doc.setTextColor(236, 72, 153);
    doc.text("•", margin, yPos);
    doc.text(service.name, margin + 5, yPos);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(80, 80, 80);
    doc.text(" — " + service.desc, margin + 5 + doc.getTextWidth(service.name), yPos);
    yPos += 8;
  });

  yPos += 10;

  // Accreditations
  doc.setFontSize(14);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(0, 0, 0);
  doc.text("Accreditations & Certifications", margin, yPos);
  yPos += 10;

  const accreditations = [
    "ISO 9001:2015 — Quality Management",
    "ISO 14001:2015 — Environmental Management",
    "ISO 45001:2018 — Occupational Health & Safety",
    "SafeContractor Approved",
    "CHAS Accredited",
    "NICEIC Approved Contractor",
    "Gas Safe Registered",
    "F-Gas Certified Engineers"
  ];

  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  accreditations.forEach((acc) => {
    if (yPos > pageHeight - 40) {
      doc.addPage();
      yPos = margin;
    }
    doc.setTextColor(37, 99, 235);
    doc.text("✓", margin, yPos);
    doc.setTextColor(60, 60, 60);
    doc.text(acc, margin + 6, yPos);
    yPos += 7;
  });

  yPos += 10;

  // Why Choose Us
  if (yPos > pageHeight - 60) {
    doc.addPage();
    yPos = margin;
  }

  doc.setFontSize(14);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(0, 0, 0);
  doc.text("Why Choose EntireFM", margin, yPos);
  yPos += 10;

  const benefits = [
    "Single point of contact for all FM needs",
    "48-hour proposal turnaround",
    "Transparent pricing with no hidden fees",
    "Real-time compliance dashboard access",
    "Dedicated account management",
    "Nationwide engineer network with local expertise"
  ];

  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  benefits.forEach((benefit) => {
    doc.setTextColor(236, 72, 153);
    doc.text("→", margin, yPos);
    doc.setTextColor(60, 60, 60);
    doc.text(benefit, margin + 8, yPos);
    yPos += 7;
  });

  // Footer
  yPos = pageHeight - 25;
  doc.setDrawColor(236, 72, 153);
  doc.setLineWidth(0.5);
  doc.line(margin, yPos, margin + contentWidth, yPos);

  yPos += 8;
  doc.setFontSize(9);
  doc.setTextColor(100, 100, 100);
  doc.text("EntireFM | 0800 024 8550 | hello@entirefm.com | www.entirefm.com", margin, yPos);
  
  const today = new Date().toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric"
  });
  doc.text(`Generated: ${today}`, pageWidth - margin - 40, yPos);

  doc.save("entirefm-capability-pack.pdf");
}

