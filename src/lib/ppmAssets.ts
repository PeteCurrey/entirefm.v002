export interface PPMFrequencies {
  monthly?: string[];
  quarterly?: string[];
  sixMonthly?: string[];
  annual?: string[];
  twoYearly?: string[];
}

export interface PPMAsset {
  id: string;
  category: string;
  name: string;
  icon: string;
  frequencies: PPMFrequencies;
  standard: string;
  compliance: boolean;
  notes?: string;
}

export const ppmAssets: PPMAsset[] = [
  // ── HVAC & Climate Control ──
  {
    id: "ahu",
    category: "HVAC & Climate Control",
    name: "Air Handling Units (AHU)",
    icon: "🌀",
    frequencies: {
      quarterly: ["Filter inspection and replacement if required", "Belt tension and bearing check", "Condensate drain inspection and clean", "Motor and fan visual inspection"],
      sixMonthly: ["Full coil clean (heating and cooling)", "Damper actuator and linkage check", "Thermal expansion valve inspection", "Detailed electrical connections check"],
      annual: ["Full strip-down service", "Coil chemical clean", "Internal ductwork inspection", "Performance and efficiency assessment", "Vibration analysis"],
    },
    standard: "SFG20 / BESA AG2/2",
    compliance: false,
    notes: "Frequency increases in healthcare and food environments",
  },
  {
    id: "fcu",
    category: "HVAC & Climate Control",
    name: "Fan Coil Units (FCU)",
    icon: "💨",
    frequencies: {
      quarterly: ["Filter clean or replacement", "Condensate tray inspection and clean", "Fan motor check", "Thermostat calibration check"],
      annual: ["Full service including coil clean", "Electrical connections inspection", "Control valve operation check", "Performance test"],
    },
    standard: "SFG20",
    compliance: false,
  },
  {
    id: "split-ac",
    category: "HVAC & Climate Control",
    name: "Split Air Conditioning Units",
    icon: "❄️",
    frequencies: {
      quarterly: ["Filter clean", "Condensate drain clear", "Refrigerant level visual check", "Operational test"],
      annual: ["Full service", "F-Gas inspection (certified engineer)", "Electrical connections check", "Performance and efficiency test"],
    },
    standard: "SFG20 / F-Gas Regulation (EU) 517/2014",
    compliance: true,
    notes: "F-Gas inspections are legally required for systems over 5 tonnes CO2 equivalent",
  },
  {
    id: "chiller",
    category: "HVAC & Climate Control",
    name: "Chiller Units",
    icon: "🧊",
    frequencies: {
      quarterly: ["Visual inspection", "Water treatment check", "Oil level check", "Condenser fan inspection"],
      sixMonthly: ["Compressor inspection", "Refrigerant leak check", "Evaporator and condenser tube inspection"],
      annual: ["Full manufacturer-specified service", "F-Gas compliance inspection", "Vibration analysis", "Performance test and energy assessment"],
    },
    standard: "SFG20 / F-Gas Regulation",
    compliance: true,
  },
  {
    id: "cooling-tower",
    category: "HVAC & Climate Control",
    name: "Cooling Towers",
    icon: "🏭",
    frequencies: {
      monthly: ["Water sample and biological testing", "Biocide dosing check", "Drift eliminator inspection"],
      quarterly: ["Full clean and disinfection", "Water treatment system inspection", "Fill inspection"],
      annual: ["Full inspection and risk assessment", "Engineer risk assessment report", "Basin and structure inspection"],
    },
    standard: "L8 ACoP / HSG274 Part 1",
    compliance: true,
    notes: "Statutory requirement — Legionella risk. Monthly water testing and quarterly clean mandatory",
  },
  {
    id: "boiler",
    category: "HVAC & Climate Control",
    name: "Commercial Boilers",
    icon: "🔥",
    frequencies: {
      quarterly: ["Visual inspection and operational check", "Flue inspection", "Controls and safety device check"],
      annual: ["Full service by Gas Safe registered engineer", "Combustion analysis", "Safety valve test", "Heat exchanger inspection", "Controls calibration"],
    },
    standard: "Gas Safety (Installation and Use) Regulations 1998 / SFG20",
    compliance: true,
    notes: "Annual gas safety certificate legally required",
  },
  {
    id: "heating-system",
    category: "HVAC & Climate Control",
    name: "Heating Systems & Radiators",
    icon: "♨️",
    frequencies: {
      annual: ["System flush and inhibitor treatment", "Pump inspection and service", "Expansion vessel check", "Radiator bleed and balance", "Controls calibration", "Pressure test"],
    },
    standard: "SFG20",
    compliance: false,
  },

  // ── Fire Safety ──
  {
    id: "fire-alarm",
    category: "Fire Safety",
    name: "Fire Alarm Panel & Detectors",
    icon: "🔔",
    frequencies: {
      quarterly: ["Full system test", "Detector sensitivity test", "Battery test", "Control panel inspection", "Zone test"],
      annual: ["Full inspection and service", "Detector head cleaning", "Wiring integrity check", "Log book review and certification"],
    },
    standard: "BS 5839-1 / RRO 2005",
    compliance: true,
    notes: "Quarterly servicing is a statutory requirement under BS 5839",
  },
  {
    id: "suppression",
    category: "Fire Safety",
    name: "Automatic Fire Suppression Systems",
    icon: "💧",
    frequencies: {
      quarterly: ["Sprinkler head visual inspection", "Control valve inspection", "Alarm test"],
      annual: ["Full system inspection and test", "Flow test", "Pump test", "Certification"],
    },
    standard: "BS EN 12845 / LPC Rules",
    compliance: true,
  },
  {
    id: "extinguishers",
    category: "Fire Safety",
    name: "Fire Extinguishers",
    icon: "🧯",
    frequencies: {
      annual: ["Full inspection by competent person", "Weight check", "Pressure check", "Label and instruction check", "Tamper evidence check"],
      twoYearly: ["Extended service (CO2 and water extinguishers)", "Recharge or replacement as required"],
    },
    standard: "BS 5306-3 / RRO 2005",
    compliance: true,
  },
  {
    id: "emergency-lighting",
    category: "Fire Safety",
    name: "Emergency Lighting",
    icon: "💡",
    frequencies: {
      monthly: ["Functional test (1-hour discharge)", "Visual inspection of luminaires"],
      annual: ["Full 3-hour rated duration test", "Battery capacity test", "Certification", "Log book update"],
    },
    standard: "BS 5266-1 / RRO 2005",
    compliance: true,
    notes: "Monthly and annual tests are statutory requirements",
  },
  {
    id: "dry-riser",
    category: "Fire Safety",
    name: "Dry Riser Systems",
    icon: "🚒",
    frequencies: {
      annual: ["Annual inspection by BAFE-registered engineer", "Inlet and outlet cap inspection", "Pressure test to 10 bar", "Valve operation check", "Certification"],
      twoYearly: ["Hydraulic pressure test"],
    },
    standard: "BS 9990 / RRO 2005",
    compliance: true,
  },
  {
    id: "fire-doors",
    category: "Fire Safety",
    name: "Fire Doors",
    icon: "🚪",
    frequencies: {
      quarterly: ["Self-closing mechanism check", "Intumescent strip inspection", "Frame integrity check", "Signage check"],
      annual: ["Full inspection by competent person", "Gap measurement and assessment", "Hardware lubrication", "Certification"],
    },
    standard: "BS 8214 / RRO 2005",
    compliance: true,
  },

  // ── Electrical ──
  {
    id: "eicr",
    category: "Electrical",
    name: "Fixed Wire Testing (EICR)",
    icon: "⚡",
    frequencies: {
      annual: ["Periodic inspection — if on 1-year cycle (high-risk environments)"],
      twoYearly: ["Full EICR for HMOs and high-occupancy premises"],
    },
    standard: "BS 7671 / IET Wiring Regulations 18th Edition",
    compliance: true,
    notes: "Commercial premises: every 5 years. HMOs: every 3–5 years. Record must be retained",
  },
  {
    id: "pat",
    category: "Electrical",
    name: "PAT Testing",
    icon: "🔌",
    frequencies: {
      annual: ["Portable appliance test of all Class I and II equipment", "Pass/fail label application", "Register update"],
    },
    standard: "IET Code of Practice for In-Service Inspection",
    compliance: false,
    notes: "Frequency depends on environment and equipment type",
  },
  {
    id: "em-lighting-test",
    category: "Electrical",
    name: "Emergency Lighting Testing",
    icon: "🔦",
    frequencies: {
      monthly: ["Function test", "Visual check"],
      annual: ["Full duration test", "Battery test", "Certification"],
    },
    standard: "BS 5266-1",
    compliance: true,
  },
  {
    id: "lightning",
    category: "Electrical",
    name: "Lightning Protection",
    icon: "⛈️",
    frequencies: {
      annual: ["Full inspection and test", "Earth bond resistance test", "Visual check of all components", "Certification"],
    },
    standard: "BS EN 62305",
    compliance: false,
    notes: "Required for buildings over certain height or housing sensitive equipment",
  },

  // ── Water & Plumbing ──
  {
    id: "legionella-ra",
    category: "Water & Plumbing",
    name: "Legionella Risk Assessment",
    icon: "💧",
    frequencies: {
      twoYearly: ["Full Legionella risk assessment review by competent person"],
      annual: ["Review of control measures and monitoring data"],
    },
    standard: "L8 ACoP / HSG274",
    compliance: true,
    notes: "Risk assessment must be reviewed when there is reason to believe it is no longer valid or following significant changes",
  },
  {
    id: "water-temp",
    category: "Water & Plumbing",
    name: "Water Temperature Monitoring",
    icon: "🌡️",
    frequencies: {
      monthly: ["Hot water outlet temperature checks (≥50°C at outlets)", "Cold water temperature checks (≤20°C after 2 mins)", "Log record update"],
      annual: ["Full system temperature survey", "Schematic review"],
    },
    standard: "L8 ACoP / HSG274",
    compliance: true,
  },
  {
    id: "water-tank",
    category: "Water & Plumbing",
    name: "Water Storage Tank Inspection",
    icon: "🛢️",
    frequencies: {
      annual: ["Full tank inspection, clean and disinfection", "Lid and insulation inspection", "Screen and overflow check", "Water sample"],
    },
    standard: "L8 ACoP / HSG274",
    compliance: true,
  },
  {
    id: "tmv",
    category: "Water & Plumbing",
    name: "TMV (Thermostatic Mixing Valves)",
    icon: "🔧",
    frequencies: {
      annual: ["Check and clean", "Temperature verification", "Performance test"],
    },
    standard: "L8 ACoP / BS EN 1111",
    compliance: true,
  },
  {
    id: "backflow",
    category: "Water & Plumbing",
    name: "Backflow Prevention",
    icon: "🚰",
    frequencies: {
      annual: ["Type A backflow preventer inspection and test", "Certification"],
    },
    standard: "Water Industry Act 1991 / BS EN 1717",
    compliance: true,
  },

  // ── Vertical Transport ──
  {
    id: "passenger-lift",
    category: "Vertical Transport",
    name: "Passenger Lifts",
    icon: "🛗",
    frequencies: {
      quarterly: ["Thorough examination by competent person", "Safety device check", "Brake test"],
      sixMonthly: ["Full statutory inspection under LOLER"],
      annual: ["Full service and any identified remedial works"],
    },
    standard: "LOLER 1998 / BS EN 13015",
    compliance: true,
    notes: "6-monthly LOLER thorough examination is a statutory requirement",
  },
  {
    id: "goods-lift",
    category: "Vertical Transport",
    name: "Goods Lifts",
    icon: "📦",
    frequencies: {
      annual: ["LOLER thorough examination", "Full service"],
    },
    standard: "LOLER 1998",
    compliance: true,
  },
  {
    id: "escalator",
    category: "Vertical Transport",
    name: "Escalators",
    icon: "🏢",
    frequencies: {
      quarterly: ["Safety device inspection", "Step condition check"],
      annual: ["Full service", "LOLER inspection", "Step-chain inspection"],
    },
    standard: "LOLER 1998 / BS EN 115",
    compliance: true,
  },
  {
    id: "stairlift",
    category: "Vertical Transport",
    name: "Stairlifts",
    icon: "♿",
    frequencies: {
      annual: ["Full service", "Safety checks", "Battery test"],
    },
    standard: "LOLER 1998",
    compliance: true,
  },

  // ── Security & Access ──
  {
    id: "cctv",
    category: "Security & Access",
    name: "CCTV Systems",
    icon: "📷",
    frequencies: {
      quarterly: ["Camera alignment and focus check", "Recording system test", "Storage capacity check"],
      annual: ["Full system inspection", "Lens clean", "Head end inspection", "DVR/NVR test"],
    },
    standard: "BS EN 62676 / NSI/SSAIB",
    compliance: false,
  },
  {
    id: "access-control",
    category: "Security & Access",
    name: "Access Control Systems",
    icon: "🔐",
    frequencies: {
      quarterly: ["Reader and controller test", "Battery backup test"],
      annual: ["Full system inspection", "Software update", "Door strike and hardware check"],
    },
    standard: "LPS 1175",
    compliance: false,
  },
  {
    id: "intruder-alarm",
    category: "Security & Access",
    name: "Intruder Alarm Systems",
    icon: "🚨",
    frequencies: {
      annual: ["Full inspection and service by NSI/SSAIB accredited engineer", "Detector test", "Siren and communicator test", "Certification"],
    },
    standard: "BS 8243 / PD 6662",
    compliance: false,
    notes: "Most monitoring contracts require annual servicing",
  },
  {
    id: "door-entry",
    category: "Security & Access",
    name: "Door Entry Systems",
    icon: "🔔",
    frequencies: {
      annual: ["Full system inspection", "Intercom test", "Door release mechanism test", "Battery backup check"],
    },
    standard: "BS EN 60839",
    compliance: false,
  },

  // ── Building Fabric ──
  {
    id: "roof",
    category: "Building Fabric",
    name: "Roof Inspection",
    icon: "🏠",
    frequencies: {
      sixMonthly: ["Visual inspection of membrane, flashings, and upstands"],
      annual: ["Full condition survey", "Report with recommendations", "Drainage clearance"],
    },
    standard: "RICS Building Survey / BS 6229",
    compliance: false,
  },
  {
    id: "gutters",
    category: "Building Fabric",
    name: "Gutters & Drainage",
    icon: "🌧️",
    frequencies: {
      sixMonthly: ["Gutter clearance and flush through", "Downpipe inspection", "Drain survey if blocked"],
      annual: ["Full drainage inspection", "CCTV survey if required"],
    },
    standard: "BS EN 12056",
    compliance: false,
  },
  {
    id: "cladding",
    category: "Building Fabric",
    name: "External Cladding & Façade",
    icon: "🏗️",
    frequencies: {
      annual: ["Full visual inspection", "Fixings and joints inspection", "Remedial report"],
    },
    standard: "BRE Good Building Guides / BS 8200",
    compliance: false,
    notes: "Post-Grenfell — enhanced inspection requirements for ACM cladding",
  },
  {
    id: "windows",
    category: "Building Fabric",
    name: "Windows & Glazing",
    icon: "🪟",
    frequencies: {
      annual: ["Window operation and seal check", "Ironmongery inspection", "Safety glazing check"],
    },
    standard: "BS 8213",
    compliance: false,
  },
  {
    id: "structural",
    category: "Building Fabric",
    name: "Structural Inspection",
    icon: "🔩",
    frequencies: {
      twoYearly: ["Structural engineer inspection and report"],
      annual: ["Visual structural condition check"],
    },
    standard: "BS 5628 / RICS",
    compliance: false,
    notes: "Frequency depends on building age, type, and previous findings",
  },

  // ── Grounds & External ──
  {
    id: "landscaping",
    category: "Grounds & External",
    name: "Landscaping & Grass Maintenance",
    icon: "🌿",
    frequencies: {
      monthly: ["Grass cutting (summer months)", "Litter collection", "General tidying"],
      quarterly: ["Shrub and hedge trimming", "Bed maintenance", "Weed control"],
      annual: ["Tree inspection and survey", "Annual replanting and refresh", "Irrigation system check"],
    },
    standard: "BS 3998 (trees) / industry practice",
    compliance: false,
  },
  {
    id: "external-lighting",
    category: "Grounds & External",
    name: "External Lighting",
    icon: "💡",
    frequencies: {
      quarterly: ["Lamp replacement (failed units)", "Column condition check"],
      annual: ["Full inspection", "Electrical test", "Photometric test"],
    },
    standard: "BS 5489",
    compliance: false,
  },
  {
    id: "car-park",
    category: "Grounds & External",
    name: "Car Park & Hardstanding",
    icon: "🅿️",
    frequencies: {
      quarterly: ["Surface condition check", "Line marking inspection", "Drainage inspection"],
      annual: ["Structural condition survey", "Line marking refresh", "Pothole repair programme"],
    },
    standard: "CIRIA / BS 7533",
    compliance: false,
  },
  {
    id: "gritting",
    category: "Grounds & External",
    name: "Gritting & Winter Maintenance",
    icon: "❄️",
    frequencies: {
      monthly: ["Winter months: monitoring and treatment as required"],
      annual: ["Pre-season equipment check and salt stock audit", "Post-season equipment service"],
    },
    standard: "BS 8300 / HSE guidance",
    compliance: false,
    notes: "Reactive service during Oct–Apr. Duty of care under Occupiers Liability Act",
  },
];

export const assetCategories = [...new Set(ppmAssets.map((a) => a.category))];

export function getAssetsByCategory(category: string): PPMAsset[] {
  return ppmAssets.filter((a) => a.category === category);
}

export function getFrequencyLabel(asset: PPMAsset): string[] {
  const labels: string[] = [];
  if (asset.frequencies.monthly?.length) labels.push("Monthly");
  if (asset.frequencies.quarterly?.length) labels.push("Quarterly");
  if (asset.frequencies.sixMonthly?.length) labels.push("6-Monthly");
  if (asset.frequencies.annual?.length) labels.push("Annual");
  if (asset.frequencies.twoYearly?.length) labels.push("2-Yearly");
  return labels;
}

// Which months each frequency maps to (1-indexed)
export const frequencyMonths: Record<string, number[]> = {
  Monthly: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  Quarterly: [1, 4, 7, 10],
  "6-Monthly": [1, 7],
  Annual: [1],
  "2-Yearly": [1],
};
