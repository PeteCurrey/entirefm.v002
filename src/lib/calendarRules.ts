export type ComplianceFrequency = "monthly" | "quarterly" | "sixMonthly" | "annual" | "twoYearly";
export type Urgency = "critical" | "important" | "recommended";

export interface ComplianceEvent {
  id: string;
  title: string;
  category: string;
  frequency: ComplianceFrequency;
  statutory: boolean;
  description: string;
  legislation: string;
  assetTypes: string[];
  sectors: string[] | "all";
  urgency: Urgency;
  icsDescription: string;
  entireFMService: string;
  months: number[]; // Add months array for quick lookup
}

export const complianceEvents: ComplianceEvent[] = [
  { id: "fire-alarm-test-monthly", title: "Fire Alarm Weekly Test", category: "Fire Safety", frequency: "monthly", statutory: true, description: "Weekly fire alarm activation test required under BS 5839-1. Log all tests in your fire safety record book.", legislation: "BS 5839-1 / RRO 2005", assetTypes: ["fire-alarm"], sectors: "all", urgency: "critical", icsDescription: "Weekly fire alarm test due. Log result in fire safety record book. EntireFM fire safety: entirefm.com/services/hard-fm", entireFMService: "/services/hard-fm" },
  { id: "fire-alarm-service-quarterly", title: "Fire Alarm System Service", category: "Fire Safety", frequency: "quarterly", statutory: true, description: "Full inspection and service of fire alarm panel, detectors, call points, and sounders by a competent engineer. Required under BS 5839-1.", legislation: "BS 5839-1", assetTypes: ["fire-alarm"], sectors: "all", urgency: "critical", icsDescription: "Quarterly fire alarm service due. Competent engineer required. Book via EntireFM: entirefm.com/services/hard-fm", entireFMService: "/services/hard-fm" },
  { id: "fire-extinguisher-annual", title: "Fire Extinguisher Annual Service", category: "Fire Safety", frequency: "annual", statutory: true, description: "Annual inspection and service of all fire extinguishers by a competent person. Required under BS 5306-3.", legislation: "BS 5306-3 / RRO 2005", assetTypes: ["fire-extinguisher"], sectors: "all", urgency: "critical", icsDescription: "Annual fire extinguisher service due. All extinguishers must be inspected and records updated.", entireFMService: "/services/hard-fm" },
  { id: "emergency-lighting-monthly", title: "Emergency Lighting Monthly Test", category: "Fire Safety", frequency: "monthly", statutory: true, description: "Monthly functional test of all emergency lighting units — press and hold test button for minimum 25% of rated duration. Log all results.", legislation: "BS 5266-1", assetTypes: ["emergency-lighting"], sectors: "all", urgency: "critical", icsDescription: "Monthly emergency lighting functional test due. Log results. Full annual test managed by EntireFM.", entireFMService: "/services/hard-fm" },
  { id: "emergency-lighting-annual", title: "Emergency Lighting Full Duration Annual Test", category: "Fire Safety", frequency: "annual", statutory: true, description: "Annual full rated duration test of all emergency lighting units by a competent engineer. Must be logged with pass/fail records retained.", legislation: "BS 5266-1", assetTypes: ["emergency-lighting"], sectors: "all", urgency: "critical", icsDescription: "Annual emergency lighting full duration test due. Competent engineer required. Book: entirefm.com/services/hard-fm", entireFMService: "/services/hard-fm" },
  { id: "dry-riser-annual", title: "Dry Riser Annual Inspection", category: "Fire Safety", frequency: "annual", statutory: true, description: "Annual inspection and pressure test of dry riser system by a competent engineer. Required under BS 9990.", legislation: "BS 9990", assetTypes: ["dry-riser"], sectors: "all", urgency: "critical", icsDescription: "Annual dry riser inspection and pressure test due.", entireFMService: "/services/hard-fm" },
  { id: "dry-riser-sixmonthly", title: "Dry Riser Six-Monthly Visual Inspection", category: "Fire Safety", frequency: "sixMonthly", statutory: true, description: "Six-monthly visual inspection of dry riser inlet, outlets, and cabinet condition.", legislation: "BS 9990", assetTypes: ["dry-riser"], sectors: "all", urgency: "critical", icsDescription: "Dry riser six-monthly visual inspection due.", entireFMService: "/services/hard-fm" },
  { id: "eicr-review", title: "Fixed Wire Test (EICR) Due", category: "Electrical", frequency: "twoYearly", statutory: true, description: "Electrical Installation Condition Report (EICR) required every 5 years for commercial premises (3-5 years for HMOs). Must be carried out by a qualified electrician.", legislation: "BS 7671 / IEE Wiring Regulations", assetTypes: ["electrical"], sectors: "all", urgency: "critical", icsDescription: "EICR review due — check your last test date. Required every 5 years. Book: entirefm.com/services/hard-fm", entireFMService: "/services/hard-fm" },
  { id: "pat-testing-annual", title: "PAT Testing", category: "Electrical", frequency: "annual", statutory: false, description: "Annual portable appliance testing of all relevant electrical equipment. Frequency depends on environment and risk — annual is standard for most commercial premises.", legislation: "IET Code of Practice", assetTypes: ["electrical"], sectors: "all", urgency: "important", icsDescription: "Annual PAT testing review due. Schedule with qualified engineer.", entireFMService: "/services/hard-fm" },
  { id: "hvac-service-sixmonthly", title: "HVAC System Six-Monthly Service", category: "HVAC", frequency: "sixMonthly", statutory: false, description: "Six-monthly inspection and service of air handling units, fan coil units, and split systems. Filter replacement, coil clean, belt check, and performance test.", legislation: "SFG20 / CIBSE TM26", assetTypes: ["hvac", "ahu", "fcu"], sectors: "all", urgency: "important", icsDescription: "HVAC six-monthly service due. Book engineer via EntireFM: entirefm.com/services/hard-fm", entireFMService: "/services/hard-fm" },
  { id: "boiler-annual", title: "Commercial Boiler Annual Service", category: "HVAC", frequency: "annual", statutory: true, description: "Annual service of all commercial boilers by a Gas Safe registered engineer. Mandatory under gas safety regulations.", legislation: "Gas Safety (Installation & Use) Regulations 1998", assetTypes: ["boiler"], sectors: "all", urgency: "critical", icsDescription: "Annual commercial boiler service due. Gas Safe registered engineer required.", entireFMService: "/services/hard-fm" },
  { id: "cooling-tower-quarterly", title: "Cooling Tower Quarterly Inspection", category: "HVAC", frequency: "quarterly", statutory: true, description: "Quarterly inspection and microbiological monitoring of cooling tower systems — mandatory under L8 ACoP for Legionella control.", legislation: "L8 ACoP / HSG274", assetTypes: ["cooling-tower"], sectors: "all", urgency: "critical", icsDescription: "Cooling tower quarterly Legionella inspection due. L8 ACoP compliance.", entireFMService: "/services/hard-fm" },
  { id: "legionella-monitoring-monthly", title: "Legionella Water Temperature Monitoring", category: "Water Safety", frequency: "monthly", statutory: true, description: "Monthly temperature checks of hot and cold water systems. Hot water must reach 60°C, cold water must remain below 20°C. Log all readings.", legislation: "L8 ACoP / HSG274", assetTypes: ["water-system"], sectors: "all", urgency: "critical", icsDescription: "Monthly Legionella water temperature monitoring due. Log all readings. L8 ACoP compliance.", entireFMService: "/services/hard-fm" },
  { id: "legionella-risk-assessment-annual", title: "Legionella Risk Assessment Annual Review", category: "Water Safety", frequency: "annual", statutory: true, description: "Annual review of Legionella risk assessment by a competent person. Full assessment required every 2 years or when significant changes occur.", legislation: "L8 ACoP", assetTypes: ["water-system"], sectors: "all", urgency: "critical", icsDescription: "Annual Legionella risk assessment review due.", entireFMService: "/services/hard-fm" },
  { id: "water-tank-annual", title: "Water Storage Tank Annual Inspection", category: "Water Safety", frequency: "annual", statutory: true, description: "Annual inspection and clean of cold water storage tanks. Check for contamination, structural integrity, insulation, and correct cover. Log all findings.", legislation: "L8 ACoP / WRAS", assetTypes: ["water-system", "water-tank"], sectors: "all", urgency: "critical", icsDescription: "Water storage tank annual inspection and clean due.", entireFMService: "/services/hard-fm" },
  { id: "lift-sixmonthly", title: "Passenger Lift Six-Monthly Thorough Examination", category: "Lifts", frequency: "sixMonthly", statutory: true, description: "Six-monthly thorough examination of all passenger lifts by an accredited inspection body. Mandatory under LOLER 1998.", legislation: "LOLER 1998", assetTypes: ["lift"], sectors: "all", urgency: "critical", icsDescription: "Passenger lift six-monthly LOLER examination due. Accredited inspector required.", entireFMService: "/services/hard-fm" },
  { id: "gritting-winter", title: "Winter Gritting Contract Review", category: "Grounds", frequency: "annual", statutory: false, description: "Annual review and activation of winter gritting and snow clearance contract. Ensure coverage is in place before first frost — typically October onwards.", legislation: "Health & Safety at Work Act 1974", assetTypes: ["grounds"], sectors: "all", urgency: "important", icsDescription: "Winter gritting contract review due — ensure coverage in place before October.", entireFMService: "/services/soft-fm" },
  { id: "grounds-quarterly", title: "Grounds Maintenance Quarterly Review", category: "Grounds", frequency: "quarterly", statutory: false, description: "Quarterly review of grounds maintenance standards — grass cutting, landscaping, external lighting, and hardstanding condition.", legislation: "Health & Safety at Work Act 1974", assetTypes: ["grounds"], sectors: "all", urgency: "recommended", icsDescription: "Quarterly grounds maintenance review due.", entireFMService: "/services/soft-fm", months: [0, 3, 6, 9] },
].map(event => ({
  ...event,
  months: event.months || getEventMonths(event.frequency as ComplianceFrequency, 1).map(m => m - 1)
})) as ComplianceEvent[];

export function getEventsForBuilding(selectedCategories: string[]): ComplianceEvent[] {
  return complianceEvents.filter(e => selectedCategories.includes(e.category));
}

// Map asset IDs to event IDs
export const assetEventMap: Record<string, string[]> = {
  "fire-alarm": ["fire-alarm-test-monthly", "fire-alarm-service-quarterly"],
  "fire-extinguisher": ["fire-extinguisher-annual"],
  "emergency-lighting": ["emergency-lighting-monthly", "emergency-lighting-annual"],
  "dry-riser": ["dry-riser-annual", "dry-riser-sixmonthly"],
  "sprinkler": ["fire-extinguisher-annual"], // Sprinkler annual inspection
  "hvac": ["hvac-service-sixmonthly"],
  "boiler": ["boiler-annual"],
  "cooling-tower": ["cooling-tower-quarterly"],
  "lift": ["lift-sixmonthly"],
  "electrical": ["eicr-review", "pat-testing-annual"],
  "water-system": ["legionella-monitoring-monthly", "legionella-risk-assessment-annual", "water-tank-annual"],
  "water-tank": ["water-tank-annual"],
  "grounds": ["gritting-winter", "grounds-quarterly"],
};

// Get months (1-12) an event falls in for a given start month
export function getEventMonths(frequency: ComplianceFrequency, startMonth: number): number[] {
  const months: number[] = [];
  switch (frequency) {
    case "monthly":
      for (let i = 0; i < 12; i++) months.push(((startMonth - 1 + i) % 12) + 1);
      break;
    case "quarterly":
      for (let i = 0; i < 12; i += 3) months.push(((startMonth - 1 + i) % 12) + 1);
      break;
    case "sixMonthly":
      for (let i = 0; i < 12; i += 6) months.push(((startMonth - 1 + i) % 12) + 1);
      break;
    case "annual":
      months.push(startMonth);
      break;
    case "twoYearly":
      months.push(startMonth);
      break;
  }
  return months;
}

export const URGENCY_COLORS: Record<Urgency, { bg: string; text: string; dot: string }> = {
  critical: { bg: "bg-red-50 border-red-200", text: "text-red-700", dot: "bg-red-500" },
  important: { bg: "bg-amber-50 border-amber-200", text: "text-amber-700", dot: "bg-amber-500" },
  recommended: { bg: "bg-blue-50 border-blue-200", text: "text-blue-700", dot: "bg-blue-400" },
};

export const ASSET_OPTIONS = [
  { id: "fire-alarm", label: "Fire Alarm System", icon: "🔔" },
  { id: "fire-extinguisher", label: "Fire Extinguishers", icon: "🧯" },
  { id: "emergency-lighting", label: "Emergency Lighting", icon: "💡" },
  { id: "dry-riser", label: "Dry Riser System", icon: "🚒" },
  { id: "sprinkler", label: "Sprinkler System", icon: "💧" },
  { id: "hvac", label: "HVAC / Air Conditioning", icon: "🌀" },
  { id: "boiler", label: "Commercial Boiler(s)", icon: "🔥" },
  { id: "cooling-tower", label: "Cooling Tower(s)", icon: "🏭" },
  { id: "lift", label: "Passenger Lift(s)", icon: "🛗" },
  { id: "electrical", label: "Electrical Systems (EICR/PAT)", icon: "⚡" },
  { id: "water-system", label: "Water / Legionella Systems", icon: "🌡️" },
  { id: "water-tank", label: "Water Storage Tank(s)", icon: "🛢️" },
  { id: "grounds", label: "Grounds & External Areas", icon: "🌿" },
];
