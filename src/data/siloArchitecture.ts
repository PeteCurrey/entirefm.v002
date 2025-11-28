/**
 * SEO Silo Architecture Configuration
 * Defines strict internal linking rules to prevent keyword cannibalization
 * and establish clear topical authority across FM disciplines
 */

export type SiloType = 
  | "compliance" 
  | "specialist-engineering" 
  | "sector" 
  | "fm-operations" 
  | "soft-services"
  | "critical-infrastructure"
  | "case-study"
  | "insights";

export interface SiloPage {
  title: string;
  url: string;
  silo: SiloType;
  primaryKeywords: string[];
  supportingKeywords: string[];
  allowedSiloLinks: SiloType[];
  relatedPages: string[];
  caseStudies?: string[];
}

// COMPLIANCE SILO - Life safety and statutory compliance services
export const complianceSilo: SiloPage[] = [
  {
    title: "Fire Safety & Life Protection",
    url: "/services/fire-safety",
    silo: "compliance",
    primaryKeywords: ["fire safety compliance", "fire alarm testing", "BS 5839 inspection"],
    supportingKeywords: [
      "weekly fire alarm tests",
      "fire alarm commissioning",
      "fire safety compliance for commercial buildings",
      "AOV systems",
      "fire dampers",
      "fire risk engineering",
      "emergency lighting systems"
    ],
    allowedSiloLinks: ["compliance", "fm-operations", "sector", "critical-infrastructure", "case-study"],
    relatedPages: [
      "/services/emergency-lighting",
      "/services/fire-alarms",
      "/services/sprinklers",
      "/services/critical/lightning-protection",
      "/services/critical/thermal-imaging",
      "/fm-operations/ppm-delivery"
    ],
    caseStudies: ["/case-studies/corporate-office-london", "/case-studies/retail-complex-birmingham"]
  },
  {
    title: "Electrical Compliance",
    url: "/services/electrical-compliance",
    silo: "compliance",
    primaryKeywords: ["EICR testing", "electrical compliance", "BS 7671 compliance"],
    supportingKeywords: [
      "electrical installation condition report",
      "commercial electrical inspection requirements",
      "18th Edition compliance",
      "PAT testing",
      "fixed wire testing",
      "electrical safety certificates"
    ],
    allowedSiloLinks: ["compliance", "fm-operations", "sector", "critical-infrastructure", "case-study"],
    relatedPages: [
      "/services/emergency-lighting",
      "/services/fire-safety",
      "/services/critical/arc-flash",
      "/services/critical/thermal-imaging",
      "/fm-operations/ppm-delivery"
    ]
  },
  {
    title: "Emergency Lighting",
    url: "/services/emergency-lighting",
    silo: "compliance",
    primaryKeywords: ["emergency lighting testing", "BS 5266 testing", "emergency lighting compliance"],
    supportingKeywords: [
      "3-hour emergency lighting test",
      "monthly emergency lighting inspection",
      "exit sign compliance",
      "backup lighting systems",
      "emergency lighting certification"
    ],
    allowedSiloLinks: ["compliance", "fm-operations", "sector", "case-study"],
    relatedPages: [
      "/services/fire-safety",
      "/services/electrical-compliance",
      "/fm-operations/ppm-delivery"
    ]
  },
  {
    title: "Water Hygiene & Legionella",
    url: "/services/water-hygiene",
    silo: "compliance",
    primaryKeywords: ["legionella testing", "ACOP L8 compliance", "water hygiene management"],
    supportingKeywords: [
      "legionella risk assessment",
      "water treatment compliance",
      "TMV testing",
      "cooling tower compliance",
      "hot and cold water testing",
      "legionella responsible person"
    ],
    allowedSiloLinks: ["compliance", "fm-operations", "sector", "case-study"],
    relatedPages: [
      "/services/ppm-compliance",
      "/fm-operations/ppm-delivery"
    ]
  },
  {
    title: "Gas Safety",
    url: "/services/gas-safety",
    silo: "compliance",
    primaryKeywords: ["gas safety certificates", "Gas Safe compliance", "commercial gas inspection"],
    supportingKeywords: [
      "landlord gas safety certificate",
      "CP12 certificate",
      "gas boiler servicing",
      "commercial gas maintenance",
      "gas appliance inspection"
    ],
    allowedSiloLinks: ["compliance", "fm-operations", "sector", "case-study"],
    relatedPages: [
      "/services/hvac-compliance",
      "/fm-operations/ppm-delivery"
    ]
  },
  {
    title: "HVAC & F-Gas Compliance",
    url: "/services/hvac-compliance",
    silo: "compliance",
    primaryKeywords: ["TM44 inspection", "F-Gas compliance", "air conditioning compliance"],
    supportingKeywords: [
      "TM44 energy assessment",
      "F-Gas leak detection",
      "refrigerant compliance",
      "AHU fire interlock testing",
      "ventilation system compliance",
      "AC system inspection"
    ],
    allowedSiloLinks: ["compliance", "fm-operations", "sector", "specialist-engineering", "critical-infrastructure"],
    relatedPages: [
      "/services/gas-safety",
      "/services/ahu-fire-interlock-testing",
      "/services/critical/thermal-imaging",
      "/services/critical/power-quality",
      "/fm-operations/ppm-delivery"
    ]
  },
  {
    title: "PPM & Planned Maintenance",
    url: "/services/ppm-compliance",
    silo: "compliance",
    primaryKeywords: ["planned preventative maintenance", "PPM compliance", "statutory maintenance"],
    supportingKeywords: [
      "PPM schedules",
      "compliance maintenance programs",
      "asset lifecycle maintenance",
      "preventative maintenance planning",
      "regulatory compliance maintenance"
    ],
    allowedSiloLinks: ["compliance", "fm-operations", "sector", "case-study"],
    relatedPages: [
      "/fm-operations/ppm-delivery",
      "/fm-operations/asset-lifecycle",
      "/services/fire-safety",
      "/services/electrical-compliance"
    ]
  }
];

// CRITICAL INFRASTRUCTURE SILO - Mission-critical power, data and infrastructure services
export const criticalInfrastructureSilo: SiloPage[] = [
  {
    title: "Lightning Protection",
    url: "/services/critical/lightning-protection",
    silo: "critical-infrastructure",
    primaryKeywords: ["lightning protection testing", "BS EN 62305 compliance", "earthing testing"],
    supportingKeywords: [
      "lightning conductor testing",
      "earth resistance testing",
      "lightning risk assessment",
      "surge protection",
      "BS 6651 compliance"
    ],
    allowedSiloLinks: ["critical-infrastructure", "compliance", "sector", "fm-operations"],
    relatedPages: [
      "/services/critical/thermal-imaging",
      "/services/electrical-compliance",
      "/services/critical/arc-flash"
    ]
  },
  {
    title: "UPS Maintenance",
    url: "/services/critical/ups-maintenance",
    silo: "critical-infrastructure",
    primaryKeywords: ["UPS maintenance", "uninterruptible power supply", "battery backup testing"],
    supportingKeywords: [
      "UPS battery replacement",
      "UPS load testing",
      "power continuity",
      "critical power systems",
      "UPS preventative maintenance"
    ],
    allowedSiloLinks: ["critical-infrastructure", "compliance", "sector", "fm-operations"],
    relatedPages: [
      "/services/critical/generator-maintenance",
      "/services/critical/power-redundancy",
      "/services/critical/power-quality"
    ]
  },
  {
    title: "Generator Maintenance",
    url: "/services/critical/generator-maintenance",
    silo: "critical-infrastructure",
    primaryKeywords: ["generator servicing", "emergency power maintenance", "standby generator testing"],
    supportingKeywords: [
      "load bank testing",
      "diesel generator maintenance",
      "backup power systems",
      "generator compliance testing",
      "power resilience"
    ],
    allowedSiloLinks: ["critical-infrastructure", "compliance", "sector", "fm-operations"],
    relatedPages: [
      "/services/critical/ups-maintenance",
      "/services/critical/power-redundancy",
      "/services/electrical-compliance"
    ]
  },
  {
    title: "Power Redundancy Testing",
    url: "/services/critical/power-redundancy",
    silo: "critical-infrastructure",
    primaryKeywords: ["load bank testing", "power redundancy", "N+1 validation"],
    supportingKeywords: [
      "failover testing",
      "power resilience testing",
      "critical power testing",
      "backup power validation",
      "power infrastructure testing"
    ],
    allowedSiloLinks: ["critical-infrastructure", "compliance", "sector", "fm-operations"],
    relatedPages: [
      "/services/critical/generator-maintenance",
      "/services/critical/ups-maintenance",
      "/services/critical/power-quality"
    ]
  },
  {
    title: "Power Quality Analysis",
    url: "/services/critical/power-quality",
    silo: "critical-infrastructure",
    primaryKeywords: ["power quality analysis", "harmonic testing", "voltage monitoring"],
    supportingKeywords: [
      "power factor correction",
      "electrical harmonics",
      "voltage stability",
      "power quality surveys",
      "electrical interference"
    ],
    allowedSiloLinks: ["critical-infrastructure", "compliance", "sector", "fm-operations"],
    relatedPages: [
      "/services/critical/ups-maintenance",
      "/services/critical/power-redundancy",
      "/services/electrical-compliance"
    ]
  },
  {
    title: "Thermal Imaging Surveys",
    url: "/services/critical/thermal-imaging",
    silo: "critical-infrastructure",
    primaryKeywords: ["thermal imaging surveys", "infrared thermography", "electrical hotspot detection"],
    supportingKeywords: [
      "predictive maintenance",
      "thermal scanning",
      "electrical fault detection",
      "building thermography",
      "energy loss detection"
    ],
    allowedSiloLinks: ["critical-infrastructure", "compliance", "sector", "fm-operations"],
    relatedPages: [
      "/services/electrical-compliance",
      "/services/critical/arc-flash",
      "/services/hvac-compliance"
    ]
  },
  {
    title: "Data Room Audits",
    url: "/services/critical/data-room-audits",
    silo: "critical-infrastructure",
    primaryKeywords: ["data room audits", "server room compliance", "critical environment monitoring"],
    supportingKeywords: [
      "data centre audits",
      "cooling system audits",
      "environmental monitoring",
      "server room maintenance",
      "critical infrastructure audits"
    ],
    allowedSiloLinks: ["critical-infrastructure", "compliance", "sector", "fm-operations"],
    relatedPages: [
      "/services/critical/ups-maintenance",
      "/services/critical/thermal-imaging",
      "/services/critical/power-quality"
    ]
  },
  {
    title: "Arc Flash Assessment",
    url: "/services/critical/arc-flash",
    silo: "critical-infrastructure",
    primaryKeywords: ["arc flash assessment", "electrical safety study", "arc flash labeling"],
    supportingKeywords: [
      "arc flash risk assessment",
      "electrical safety procedures",
      "PPE requirements",
      "incident energy analysis",
      "electrical hazard assessment"
    ],
    allowedSiloLinks: ["critical-infrastructure", "compliance", "sector", "fm-operations"],
    relatedPages: [
      "/services/electrical-compliance",
      "/services/critical/thermal-imaging",
      "/services/critical/hv-switching"
    ]
  },
  {
    title: "HV Switching Services",
    url: "/services/critical/hv-switching",
    silo: "critical-infrastructure",
    primaryKeywords: ["HV switching", "high voltage operations", "authorised person HV"],
    supportingKeywords: [
      "HV isolations",
      "switchgear operations",
      "electrical switching",
      "HV maintenance",
      "high voltage procedures"
    ],
    allowedSiloLinks: ["critical-infrastructure", "compliance", "sector", "fm-operations"],
    relatedPages: [
      "/services/electrical-compliance",
      "/services/critical/arc-flash",
      "/services/critical/power-redundancy"
    ]
  }
];

// SPECIALIST ENGINEERING SILO - Technical M&E and specialist systems
export const specialistEngineeringSilo: SiloPage[] = [
  {
    title: "BMU & Cradle Servicing",
    url: "/services/bmu-cradle-servicing",
    silo: "specialist-engineering",
    primaryKeywords: ["BMU servicing", "cradle maintenance", "building maintenance unit"],
    supportingKeywords: [
      "LOLER BMU inspection",
      "gondola maintenance",
      "facade access equipment",
      "BMU thorough examination",
      "building cradle certification"
    ],
    allowedSiloLinks: ["specialist-engineering", "compliance", "sector", "fm-operations"],
    relatedPages: [
      "/services/lifting-equipment",
      "/services/mansafe-testing",
      "/services/abseil-rail-certification"
    ]
  },
  {
    title: "Generator Maintenance",
    url: "/services/generator-maintenance",
    silo: "specialist-engineering",
    primaryKeywords: ["generator servicing", "emergency power maintenance", "standby generator"],
    supportingKeywords: [
      "load bank testing",
      "diesel generator maintenance",
      "backup power systems",
      "generator compliance testing",
      "power resilience"
    ],
    allowedSiloLinks: ["specialist-engineering", "compliance", "sector", "fm-operations"],
    relatedPages: [
      "/services/ups-maintenance",
      "/services/electrical-compliance",
      "/fm-operations/reactive-maintenance"
    ]
  },
  {
    title: "Lifting Equipment & LOLER",
    url: "/services/lifting-equipment",
    silo: "specialist-engineering",
    primaryKeywords: ["LOLER inspection", "lifting equipment testing", "thorough examination"],
    supportingKeywords: [
      "goods hoist inspection",
      "passenger lift compliance",
      "lifting equipment certification",
      "LOLER compliance",
      "lift thorough examination"
    ],
    allowedSiloLinks: ["specialist-engineering", "compliance", "sector", "fm-operations"],
    relatedPages: [
      "/services/bmu-cradle-servicing",
      "/services/ppm-compliance"
    ]
  }
];

// SECTOR SILO - Industry-specific FM solutions
export const sectorSilo: SiloPage[] = [
  {
    title: "Corporate Offices",
    url: "/sectors/offices",
    silo: "sector",
    primaryKeywords: ["office facilities management", "corporate FM services", "office building maintenance"],
    supportingKeywords: [
      "Grade A office maintenance",
      "multi-tenant office FM",
      "corporate headquarters facilities",
      "business park FM",
      "office compliance management"
    ],
    allowedSiloLinks: ["compliance", "specialist-engineering", "critical-infrastructure", "fm-operations", "case-study"],
    relatedPages: [
      "/services/fire-safety",
      "/services/electrical-compliance",
      "/services/hvac-compliance",
      "/services/critical/ups-maintenance",
      "/services/critical/lightning-protection",
      "/services/critical/thermal-imaging",
      "/services/critical/generator-maintenance",
      "/fm-operations/helpdesk",
      "/case-studies/corporate-office-london"
    ]
  },
  {
    title: "Industrial & Logistics",
    url: "/sectors/industrial-logistics",
    silo: "sector",
    primaryKeywords: ["warehouse facilities management", "industrial FM services", "logistics hub maintenance"],
    supportingKeywords: [
      "distribution centre FM",
      "warehouse compliance",
      "24/7 industrial maintenance",
      "manufacturing facility services",
      "cold storage maintenance"
    ],
    allowedSiloLinks: ["compliance", "specialist-engineering", "critical-infrastructure", "fm-operations", "case-study"],
    relatedPages: [
      "/services/fire-safety",
      "/services/dock-leveller-maintenance",
      "/services/compressor-maintenance",
      "/services/lifting-equipment",
      "/services/critical/hv-switching",
      "/services/critical/power-quality",
      "/services/critical/power-redundancy",
      "/services/critical/generator-maintenance",
      "/case-studies/industrial-warehouse-sheffield"
    ]
  },
  {
    title: "PBSA & Student Housing",
    url: "/sectors/pbsa",
    silo: "sector",
    primaryKeywords: ["PBSA facilities management", "student accommodation FM", "student housing maintenance"],
    supportingKeywords: [
      "purpose built student accommodation",
      "student residence compliance",
      "halls of residence FM",
      "PBSA compliance management",
      "student housing safety"
    ],
    allowedSiloLinks: ["compliance", "soft-services", "critical-infrastructure", "fm-operations", "case-study"],
    relatedPages: [
      "/services/fire-safety",
      "/services/water-hygiene",
      "/services/gas-safety",
      "/services/critical/ups-maintenance",
      "/services/critical/lightning-protection",
      "/services/critical/thermal-imaging",
      "/soft-services/concierge",
      "/case-studies/pbsa-estate-manchester"
    ]
  },
  {
    title: "Healthcare & Public Buildings",
    url: "/sectors/healthcare-public",
    silo: "sector",
    primaryKeywords: ["healthcare facilities management", "hospital FM services", "medical facility maintenance"],
    supportingKeywords: [
      "HTM compliance",
      "healthcare critical systems",
      "hospital maintenance services",
      "medical building FM",
      "NHS facilities management"
    ],
    allowedSiloLinks: ["compliance", "specialist-engineering", "critical-infrastructure", "fm-operations", "case-study"],
    relatedPages: [
      "/services/water-hygiene",
      "/services/fire-safety",
      "/services/hvac-compliance",
      "/services/critical/power-redundancy",
      "/services/critical/ups-maintenance",
      "/services/critical/thermal-imaging",
      "/fm-operations/business-continuity"
    ]
  },
  {
    title: "Retail & Hospitality",
    url: "/sectors/retail-hospitality",
    silo: "sector",
    primaryKeywords: ["retail facilities management", "hospitality FM services", "shop maintenance"],
    supportingKeywords: [
      "multi-site retail FM",
      "shopping centre maintenance",
      "retail compliance management",
      "hospitality venue FM",
      "customer-facing facility services"
    ],
    allowedSiloLinks: ["compliance", "specialist-engineering", "critical-infrastructure", "fm-operations", "case-study"],
    relatedPages: [
      "/services/fire-safety",
      "/services/electrical-compliance",
      "/services/hvac-compliance",
      "/services/critical/ups-maintenance",
      "/services/critical/generator-maintenance",
      "/services/critical/lightning-protection",
      "/case-studies/retail-complex-birmingham"
    ]
  }
];

// FM OPERATIONS SILO - Operational delivery and service management
export const fmOperationsSilo: SiloPage[] = [
  {
    title: "PPM Delivery",
    url: "/fm-operations/ppm-delivery",
    silo: "fm-operations",
    primaryKeywords: ["PPM delivery", "planned maintenance execution", "preventative maintenance programs"],
    supportingKeywords: [
      "maintenance scheduling",
      "PPM coordination",
      "compliance maintenance delivery",
      "asset maintenance programs",
      "structured maintenance delivery"
    ],
    allowedSiloLinks: ["compliance", "specialist-engineering", "critical-infrastructure", "sector", "case-study"],
    relatedPages: [
      "/services/ppm-compliance",
      "/services/fire-safety",
      "/services/electrical-compliance",
      "/services/critical/ups-maintenance",
      "/services/critical/generator-maintenance",
      "/services/critical/thermal-imaging",
      "/fm-operations/asset-lifecycle"
    ]
  },
  {
    title: "Helpdesk & Support",
    url: "/fm-operations/helpdesk",
    silo: "fm-operations",
    primaryKeywords: ["FM helpdesk", "24/7 facilities support", "CAFM system"],
    supportingKeywords: [
      "facilities helpdesk services",
      "maintenance request system",
      "FM ticketing portal",
      "24/7 FM support",
      "work order management"
    ],
    allowedSiloLinks: ["fm-operations", "sector", "case-study"],
    relatedPages: [
      "/fm-operations/reactive-maintenance",
      "/fm-operations/mobilisation"
    ]
  },
  {
    title: "Mobilisation & Onboarding",
    url: "/fm-operations/mobilisation",
    silo: "fm-operations",
    primaryKeywords: ["FM mobilisation", "facilities management onboarding", "contract takeover"],
    supportingKeywords: [
      "FM contract transition",
      "TUPE transfer management",
      "seamless FM handover",
      "mobilisation planning",
      "FM implementation"
    ],
    allowedSiloLinks: ["fm-operations", "sector", "case-study"],
    relatedPages: [
      "/fm-operations/helpdesk",
      "/fm-operations/ppm-delivery"
    ]
  },
  {
    title: "Reactive Maintenance",
    url: "/fm-operations/reactive-maintenance",
    silo: "fm-operations",
    primaryKeywords: ["reactive maintenance", "emergency repairs", "breakdown response"],
    supportingKeywords: [
      "24/7 emergency callout",
      "urgent repair services",
      "breakdown maintenance",
      "rapid response FM",
      "emergency maintenance services"
    ],
    allowedSiloLinks: ["compliance", "specialist-engineering", "critical-infrastructure", "fm-operations", "sector"],
    relatedPages: [
      "/fm-operations/helpdesk",
      "/fm-operations/business-continuity",
      "/services/critical/generator-maintenance",
      "/services/critical/ups-maintenance"
    ]
  }
];

// SOFT SERVICES SILO - Non-technical facility services
export const softServicesSilo: SiloPage[] = [
  {
    title: "Specialist Cleaning",
    url: "/soft-services/specialist-cleaning",
    silo: "soft-services",
    primaryKeywords: ["commercial cleaning", "specialist cleaning services", "deep cleaning"],
    supportingKeywords: [
      "office cleaning services",
      "sanitization services",
      "hygiene cleaning",
      "commercial janitorial",
      "facility cleaning"
    ],
    allowedSiloLinks: ["soft-services", "sector", "fm-operations"],
    relatedPages: [
      "/soft-services/waste-recycling",
      "/fm-operations/occupier-experience",
      "/sectors/offices"
    ]
  },
  {
    title: "Concierge Services",
    url: "/soft-services/concierge",
    silo: "soft-services",
    primaryKeywords: ["concierge services", "reception services", "front of house"],
    supportingKeywords: [
      "building concierge",
      "residential concierge",
      "customer service reception",
      "front desk services",
      "hospitality services"
    ],
    allowedSiloLinks: ["soft-services", "sector", "fm-operations"],
    relatedPages: [
      "/fm-operations/occupier-experience",
      "/sectors/pbsa",
      "/sectors/offices"
    ]
  }
];

/**
 * Get related pages for a specific URL based on silo rules
 */
export function getRelatedPages(currentUrl: string, maxResults: number = 3): SiloPage[] {
  const allPages = [
    ...complianceSilo,
    ...specialistEngineeringSilo,
    ...criticalInfrastructureSilo,
    ...sectorSilo,
    ...fmOperationsSilo,
    ...softServicesSilo
  ];

  const currentPage = allPages.find(page => page.url === currentUrl);
  if (!currentPage) return [];

  // Filter pages based on allowed silo links
  const related = allPages.filter(page => 
    page.url !== currentUrl &&
    currentPage.allowedSiloLinks.includes(page.silo) &&
    (currentPage.relatedPages.includes(page.url) || 
     page.relatedPages?.includes(currentUrl))
  );

  return related.slice(0, maxResults);
}

/**
 * Get case studies relevant to a specific service or sector
 */
export function getRelevantCaseStudies(currentUrl: string): string[] {
  const allPages = [
    ...complianceSilo,
    ...specialistEngineeringSilo,
    ...criticalInfrastructureSilo,
    ...sectorSilo,
    ...fmOperationsSilo
  ];

  const currentPage = allPages.find(page => page.url === currentUrl);
  return currentPage?.caseStudies || [];
}

/**
 * Check if a link from source to target is allowed by silo rules
 */
export function isLinkAllowed(sourceUrl: string, targetUrl: string): boolean {
  const allPages = [
    ...complianceSilo,
    ...specialistEngineeringSilo,
    ...sectorSilo,
    ...fmOperationsSilo,
    ...softServicesSilo
  ];

  const sourcePage = allPages.find(page => page.url === sourceUrl);
  const targetPage = allPages.find(page => page.url === targetUrl);

  if (!sourcePage || !targetPage) return true; // Allow if not in silo system

  return sourcePage.allowedSiloLinks.includes(targetPage.silo);
}
