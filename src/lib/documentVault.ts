export type FileType = "PDF" | "XLSX" | "DOCX";

export interface VaultDocument {
  id: string;
  title: string;
  description: string;
  category: string;
  fileType: FileType;
  pages: number;
  downloadCount: number;
  popular: boolean;
  tags: string[];
  slug: string;
  relatedService: string;
}

export const vaultDocuments: VaultDocument[] = [
  // ── PPM & Maintenance ──
  {
    id: "ppm-schedule-commercial",
    title: "PPM Schedule Template — Commercial Buildings",
    description: "A ready-to-use planned preventative maintenance schedule template for commercial buildings. Covers HVAC, M&E, fire safety, electrical compliance, and building fabric with SFG20-aligned service frequencies pre-populated.",
    category: "PPM & Maintenance",
    fileType: "XLSX",
    pages: 8,
    downloadCount: 1247,
    popular: true,
    tags: ["PPM", "schedule", "commercial", "SFG20", "template"],
    slug: "ppm-schedule-commercial",
    relatedService: "/services/ppm",
  },
  {
    id: "ppm-schedule-residential",
    title: "PPM Schedule Template — Residential Buildings",
    description: "Planned preventative maintenance schedule template specifically structured for residential blocks and managed developments — covering communal M&E, lifts, fire safety, and grounds assets.",
    category: "PPM & Maintenance",
    fileType: "XLSX",
    pages: 6,
    downloadCount: 843,
    popular: false,
    tags: ["PPM", "residential", "schedule", "block management"],
    slug: "ppm-schedule-residential",
    relatedService: "/services/ppm",
  },
  {
    id: "reactive-maintenance-log",
    title: "Reactive Maintenance Log Template",
    description: "Track all reactive maintenance jobs in one place. Includes job number, date reported, location, fault description, engineer assigned, resolution, cost, and SLA compliance tracking.",
    category: "PPM & Maintenance",
    fileType: "XLSX",
    pages: 2,
    downloadCount: 976,
    popular: true,
    tags: ["reactive maintenance", "log", "tracking", "helpdesk"],
    slug: "reactive-maintenance-log",
    relatedService: "/services/helpdesk",
  },
  {
    id: "asset-register-template",
    title: "Asset Register Template",
    description: "A comprehensive building asset register covering all mechanical, electrical, and fabric assets. Includes asset ID, location, make/model, installation date, warranty, service history, and criticality rating columns.",
    category: "PPM & Maintenance",
    fileType: "XLSX",
    pages: 4,
    downloadCount: 1089,
    popular: true,
    tags: ["asset register", "CAFM", "inventory", "building assets"],
    slug: "asset-register-template",
    relatedService: "/services/ppm",
  },
  // ── Compliance ──
  {
    id: "building-compliance-checklist",
    title: "Building Compliance Audit Checklist",
    description: "A comprehensive compliance audit checklist covering all key statutory requirements — fire safety, electrical testing, water safety, HVAC, emergency lighting, and more. Includes sign-off columns and action tracking.",
    category: "Compliance",
    fileType: "PDF",
    pages: 12,
    downloadCount: 1412,
    popular: true,
    tags: ["compliance", "audit", "checklist", "statutory"],
    slug: "building-compliance-checklist",
    relatedService: "/services/hard-fm",
  },
  {
    id: "fire-safety-record-book",
    title: "Fire Safety Record Book Template",
    description: "Document all fire safety maintenance, testing, and inspections in one place. Covers fire alarm tests, fire extinguisher servicing, emergency lighting checks, fire door inspections, and evacuation drill records.",
    category: "Compliance",
    fileType: "PDF",
    pages: 16,
    downloadCount: 892,
    popular: false,
    tags: ["fire safety", "compliance", "record keeping", "RRO"],
    slug: "fire-safety-record-book",
    relatedService: "/services/hard-fm",
  },
  {
    id: "legionella-risk-checklist",
    title: "Legionella Risk Assessment Checklist",
    description: "A structured checklist to help building managers assess Legionella risk in line with the L8 ACoP. Covers water systems, temperature monitoring, risk scoring, and control measures.",
    category: "Compliance",
    fileType: "PDF",
    pages: 8,
    downloadCount: 634,
    popular: false,
    tags: ["Legionella", "water safety", "L8", "risk assessment"],
    slug: "legionella-risk-checklist",
    relatedService: "/services/hard-fm",
  },
  {
    id: "fm-compliance-calendar-2025",
    title: "FM Compliance Calendar 2025",
    description: "A full-year compliance calendar showing statutory maintenance requirements month by month. Covers fire safety, electrical, HVAC, water safety, and emergency systems. Printable A3 format.",
    category: "Compliance",
    fileType: "PDF",
    pages: 2,
    downloadCount: 1156,
    popular: true,
    tags: ["calendar", "compliance", "annual", "statutory", "schedule"],
    slug: "fm-compliance-calendar-2025",
    relatedService: "/services/ppm",
  },
  // ── Procurement & Contracts ──
  {
    id: "fm-tender-evaluation-matrix",
    title: "FM Tender Evaluation Matrix",
    description: "Score and compare FM providers objectively. Weighted scoring matrix covering service capability, compliance, pricing, account management, technology, and references — with automatic total score calculation.",
    category: "Procurement & Contracts",
    fileType: "XLSX",
    pages: 3,
    downloadCount: 478,
    popular: false,
    tags: ["tender", "procurement", "evaluation", "FM selection"],
    slug: "fm-tender-evaluation-matrix",
    relatedService: "/services/total-facilities-management",
  },
  {
    id: "contractor-vetting-questionnaire",
    title: "FM Contractor Vetting Questionnaire",
    description: "A structured questionnaire for vetting FM contractors and subcontractors. Covers accreditations, insurance, health & safety policy, RAMS process, references, and financial stability checks.",
    category: "Procurement & Contracts",
    fileType: "PDF",
    pages: 6,
    downloadCount: 367,
    popular: false,
    tags: ["contractor vetting", "subcontractor", "due diligence", "procurement"],
    slug: "contractor-vetting-questionnaire",
    relatedService: "/services/total-facilities-management",
  },
  {
    id: "fm-sla-template",
    title: "FM Service Level Agreement (SLA) Template",
    description: "A professional SLA template defining response times, performance KPIs, escalation procedures, and reporting requirements for FM contracts. Suitable for use with any FM provider.",
    category: "Procurement & Contracts",
    fileType: "DOCX",
    pages: 10,
    downloadCount: 589,
    popular: true,
    tags: ["SLA", "contract", "KPI", "performance", "FM"],
    slug: "fm-sla-template",
    relatedService: "/services/total-facilities-management",
  },
  // ── Operations ──
  {
    id: "site-induction-pack",
    title: "Site Induction Pack Template",
    description: "A complete site induction document for FM engineers and contractors arriving on site for the first time. Covers site rules, emergency procedures, permit to work, hazard identification, and sign-off.",
    category: "Operations",
    fileType: "PDF",
    pages: 8,
    downloadCount: 412,
    popular: false,
    tags: ["site induction", "health & safety", "permit to work", "contractor"],
    slug: "site-induction-pack",
    relatedService: "/services/hard-fm",
  },
  {
    id: "helpdesk-job-sheet",
    title: "FM Helpdesk Job Sheet Template",
    description: "A clean, professional job sheet for logging and tracking reactive maintenance callouts. Includes job details, site information, fault description, work carried out, parts used, time on site, and customer sign-off.",
    category: "Operations",
    fileType: "PDF",
    pages: 2,
    downloadCount: 723,
    popular: false,
    tags: ["job sheet", "helpdesk", "reactive", "engineer"],
    slug: "helpdesk-job-sheet",
    relatedService: "/services/helpdesk",
  },
  {
    id: "multi-site-fm-dashboard",
    title: "Multi-Site FM Reporting Dashboard Template",
    description: "A monthly FM performance reporting template for multi-site estates. Covers PPM compliance rates, reactive job volumes, SLA performance, spend analysis, and open actions — designed for board or client reporting.",
    category: "Operations",
    fileType: "XLSX",
    pages: 5,
    downloadCount: 634,
    popular: true,
    tags: ["reporting", "dashboard", "multi-site", "KPI", "performance"],
    slug: "multi-site-fm-dashboard",
    relatedService: "/services/total-facilities-management",
  },
];

export const vaultCategories = ["PPM & Maintenance", "Compliance", "Procurement & Contracts", "Operations"];
export const fileTypeOptions: Array<"PDF" | "XLSX" | "DOCX"> = ["PDF", "XLSX", "DOCX"];

export function getDocumentById(id: string): VaultDocument | undefined {
  return vaultDocuments.find((d) => d.id === id);
}
