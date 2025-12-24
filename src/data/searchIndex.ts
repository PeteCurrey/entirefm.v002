export interface SearchItem {
  title: string;
  url: string;
  category: "Services" | "Sectors" | "FM Operations" | "Soft Services" | "Insights / Resources" | "Case Studies";
  description: string;
  keywords: string[];
  aliases?: string[];
}

export const searchIndex: SearchItem[] = [
  // Core Services
  {
    title: "Fire Safety & Life Protection",
    url: "/services/fire-safety",
    category: "Services",
    description: "Fire alarms, emergency lighting, sprinklers, AOV systems, fire dampers and comprehensive fire safety compliance",
    keywords: ["fire", "alarm", "emergency", "sprinkler", "aov", "smoke", "vent", "damper", "life", "safety", "protection"]
  },
  {
    title: "Fire Alarms",
    url: "/services/fire-alarms",
    category: "Services",
    description: "BS 5839 compliant fire alarm testing, installation and maintenance services",
    keywords: ["fire", "alarm", "bs5839", "5839", "testing", "smoke", "detector", "panel"]
  },
  {
    title: "Emergency Lighting",
    url: "/services/emergency-lighting",
    category: "Services",
    description: "BS 5266 emergency lighting testing, installation and certification",
    keywords: ["emergency", "lighting", "bs5266", "5266", "exit", "sign", "backup", "battery", "test"],
    aliases: ["emergency lights", "exit lighting", "backup lighting"]
  },
  {
    title: "Sprinklers",
    url: "/services/sprinklers",
    category: "Services",
    description: "Sprinkler system maintenance, testing and BS 5306 compliance",
    keywords: ["sprinkler", "bs5306", "water", "fire", "suppression", "wet", "dry", "deluge"]
  },
  {
    title: "Electrical Compliance",
    url: "/services/electrical-compliance",
    category: "Services",
    description: "EICR testing, BS 7671 18th Edition compliance, electrical installation condition reports",
    keywords: ["electrical", "eicr", "bs7671", "7671", "18th", "edition", "inspection", "testing", "pat", "compliance"],
    aliases: ["electical", "electric", "power"]
  },
  {
    title: "HVAC & F-Gas Compliance",
    url: "/services/hvac-compliance",
    category: "Services",
    description: "TM44 air conditioning inspections, F-Gas compliance, HVAC maintenance and energy efficiency",
    keywords: ["hvac", "tm44", "fgas", "f-gas", "air", "conditioning", "ac", "refrigeration", "cooling", "ventilation", "ahu"],
    aliases: ["air con", "aircon", "ventialtion", "ventilation"]
  },
  {
    title: "Water Hygiene & Legionella",
    url: "/services/water-hygiene",
    category: "Services",
    description: "ACOP L8 compliance, legionella risk assessments, water treatment and testing",
    keywords: ["water", "legionella", "acopl8", "l8", "hygiene", "testing", "tmv", "cooling", "tower", "hot", "cold"],
    aliases: ["legionella", "water safety"]
  },
  {
    title: "Gas Safety",
    url: "/services/gas-safety",
    category: "Services",
    description: "Gas Safe registered engineers, landlord gas safety certificates, commercial gas maintenance",
    keywords: ["gas", "safety", "gassafe", "gas-safe", "boiler", "certificate", "landlord", "cp12", "commercial"],
    aliases: ["gas safe"]
  },
  {
    title: "PPM & Asset Lifecycle",
    url: "/services/ppm",
    category: "Services",
    description: "Planned preventative maintenance, asset lifecycle management, compliance scheduling",
    keywords: ["ppm", "planned", "preventative", "maintenance", "asset", "lifecycle", "schedule", "compliance", "reactive"],
    aliases: ["planned maintenance", "preventive maintenance"]
  },
  {
    title: "Building Fabric & Inspections",
    url: "/services/building-inspections",
    category: "Services",
    description: "Building fabric inspections, dilapidation surveys, condition assessments",
    keywords: ["building", "fabric", "inspection", "dilapidation", "survey", "condition", "assessment", "structural"]
  },
  {
    title: "BMU & Cradle Servicing",
    url: "/services/bmu-cradle-servicing",
    category: "Services",
    description: "Building maintenance unit servicing, cradle inspections, LOLER compliance",
    keywords: ["bmu", "cradle", "building", "maintenance", "unit", "gondola", "loler", "facade", "access", "height"],
    aliases: ["cradle", "gondola", "facade access"]
  },
  {
    title: "Mansafe Testing",
    url: "/services/mansafe-testing",
    category: "Services",
    description: "Mansafe system testing, anchor point testing, height safety equipment inspection",
    keywords: ["mansafe", "anchor", "point", "height", "safety", "harness", "fall", "arrest", "loler"]
  },
  {
    title: "Abseil Rail Certification",
    url: "/services/abseil-rail-certification",
    category: "Services",
    description: "Abseil rail testing and certification for safe roof access",
    keywords: ["abseil", "rail", "roof", "access", "height", "safety", "certification", "anchor"]
  },
  {
    title: "Roof Safety Inspections",
    url: "/services/roof-safety-inspections",
    category: "Services",
    description: "Roof safety inspections, edge protection, skylight guards, safe access",
    keywords: ["roof", "safety", "inspection", "edge", "protection", "skylight", "guard", "access", "height"]
  },
  {
    title: "Lifting Equipment & LOLER",
    url: "/services/lifting-equipment",
    category: "Services",
    description: "LOLER inspections for lifting equipment, hoists, lifts and goods hoists",
    keywords: ["lifting", "loler", "lift", "hoist", "goods", "passenger", "thorough", "examination", "inspection"]
  },
  {
    title: "Dock Leveller Maintenance",
    url: "/services/dock-leveller-maintenance",
    category: "Services",
    description: "Dock leveller servicing, loading bay equipment maintenance and safety inspections",
    keywords: ["dock", "leveller", "loading", "bay", "warehouse", "logistics", "industrial", "ramp"]
  },
  {
    title: "Compressor Maintenance",
    url: "/services/compressor-maintenance",
    category: "Services",
    description: "Industrial compressor servicing, air compressor maintenance and testing",
    keywords: ["compressor", "air", "industrial", "maintenance", "pressure", "vessel", "plant"]
  },
  {
    title: "Pump Station Servicing",
    url: "/services/pump-station-servicing",
    category: "Services",
    description: "Pump station maintenance, sewage pumps, water pumps and controls",
    keywords: ["pump", "station", "sewage", "water", "drainage", "effluent", "control", "maintenance"]
  },
  {
    title: "LEV Testing",
    url: "/services/fume-extraction-lev",
    category: "Services",
    description: "Local exhaust ventilation testing, fume extraction and COSHH compliance",
    keywords: ["lev", "local", "exhaust", "ventilation", "fume", "extraction", "coshh", "testing", "industrial"]
  },
  {
    title: "Generator Maintenance",
    url: "/services/generator-maintenance",
    category: "Services",
    description: "Emergency generator servicing, load bank testing and power resilience",
    keywords: ["generator", "emergency", "power", "backup", "load", "bank", "diesel", "standby"]
  },
  {
    title: "UPS Maintenance",
    url: "/services/ups-maintenance",
    category: "Services",
    description: "Uninterruptible power supply servicing, battery testing and UPS inspections",
    keywords: ["ups", "uninterruptible", "power", "supply", "battery", "backup", "data", "centre"]
  },
  {
    title: "AHU Fire Interlock Testing",
    url: "/services/ahu-fire-interlock-testing",
    category: "Services",
    description: "Air handling unit fire interlock testing and compliance",
    keywords: ["ahu", "air", "handling", "unit", "fire", "interlock", "ventilation", "hvac"]
  },
  {
    title: "Dry Riser Testing",
    url: "/services/dry-riser-testing",
    category: "Services",
    description: "BS 9990 dry riser testing, wet riser testing and certification",
    keywords: ["dry", "riser", "wet", "bs9990", "9990", "fire", "fighting", "hydrant", "standpipe"]
  },
  {
    title: "Access Control Systems",
    url: "/services/access-control",
    category: "Services",
    description: "Electronic access control, door entry systems and security integration",
    keywords: ["access", "control", "door", "entry", "security", "fob", "card", "biometric", "keypad"]
  },
  {
    title: "CCTV Maintenance",
    url: "/services/cctv-maintenance",
    category: "Services",
    description: "CCTV system maintenance, IP cameras and security monitoring",
    keywords: ["cctv", "camera", "surveillance", "security", "monitoring", "ip", "ptz", "nvr"]
  },
  {
    title: "BMS Optimisation",
    url: "/services/bms-optimisation",
    category: "Services",
    description: "Building management system optimization, controls and energy efficiency",
    keywords: ["bms", "building", "management", "system", "controls", "automation", "scada", "optimization"]
  },
  {
    title: "Energy Optimization",
    url: "/services/energy-optimization",
    category: "Services",
    description: "Energy audits, consumption reduction and net zero roadmaps",
    keywords: ["energy", "optimization", "efficiency", "audit", "consumption", "net", "zero", "carbon", "sustainability"]
  },
  {
    title: "Drainage & CCTV Surveys",
    url: "/services/drainage-cctv-surveys",
    category: "Services",
    description: "Drainage surveys, CCTV drain inspections and blockage clearance",
    keywords: ["drainage", "drain", "cctv", "survey", "blockage", "sewer", "inspection", "underground"]
  },
  {
    title: "Lightning Protection Testing",
    url: "/services/lightning-protection-testing",
    category: "Services",
    description: "BS 62305 lightning protection testing and earthing inspections",
    keywords: ["lightning", "protection", "earthing", "bs62305", "62305", "surge", "earth", "rod"]
  },
  {
    title: "Thermal Imaging Surveys",
    url: "/services/thermal-imaging-surveys",
    category: "Services",
    description: "Thermographic surveys for electrical, mechanical and building defects",
    keywords: ["thermal", "imaging", "thermographic", "survey", "infrared", "electrical", "defect", "heat"]
  },
  {
    title: "Drone Inspections",
    url: "/services/drone-inspections",
    category: "Services",
    description: "UAV aerial inspections for roofs, facades and hard to reach areas",
    keywords: ["drone", "uav", "aerial", "inspection", "roof", "facade", "survey", "remote"]
  },

  // Regional Service Pages - Fire Safety
  {
    title: "Fire Safety London",
    url: "/services/fire/london",
    category: "Services",
    description: "Fire alarm and emergency lighting services in London",
    keywords: ["fire", "london", "alarm", "emergency", "lighting", "capital"]
  },
  {
    title: "Fire Safety Birmingham",
    url: "/services/fire/birmingham",
    category: "Services",
    description: "Fire safety services in Birmingham and West Midlands",
    keywords: ["fire", "birmingham", "midlands", "alarm", "emergency"]
  },
  {
    title: "Fire Safety Manchester",
    url: "/services/fire/manchester",
    category: "Services",
    description: "Fire alarm testing and maintenance in Manchester",
    keywords: ["fire", "manchester", "north", "west", "alarm"]
  },
  {
    title: "Fire Safety Leeds",
    url: "/services/fire/leeds",
    category: "Services",
    description: "Fire safety compliance in Leeds and Yorkshire",
    keywords: ["fire", "leeds", "yorkshire", "alarm", "compliance"]
  },
  {
    title: "Fire Safety Sheffield",
    url: "/services/fire/sheffield",
    category: "Services",
    description: "Fire safety services in Sheffield",
    keywords: ["fire", "sheffield", "south", "yorkshire"]
  },

  // Regional Service Pages - Electrical
  {
    title: "Electrical Compliance London",
    url: "/services/electrical/london",
    category: "Services",
    description: "EICR testing and electrical compliance in London",
    keywords: ["electrical", "london", "eicr", "testing", "compliance"]
  },
  {
    title: "Electrical Compliance Birmingham",
    url: "/services/electrical/birmingham",
    category: "Services",
    description: "Electrical testing services in Birmingham",
    keywords: ["electrical", "birmingham", "eicr", "testing"]
  },
  {
    title: "Electrical Compliance Manchester",
    url: "/services/electrical/manchester",
    category: "Services",
    description: "Electrical compliance in Manchester",
    keywords: ["electrical", "manchester", "eicr", "compliance"]
  },

  // Regional Service Pages - Emergency Lighting
  {
    title: "Emergency Lighting London",
    url: "/services/emergency-lighting/london",
    category: "Services",
    description: "BS 5266 emergency lighting testing in London",
    keywords: ["emergency", "lighting", "london", "bs5266", "testing"]
  },
  {
    title: "Emergency Lighting Birmingham",
    url: "/services/emergency-lighting/birmingham",
    category: "Services",
    description: "Emergency lighting services in Birmingham",
    keywords: ["emergency", "lighting", "birmingham", "testing"]
  },
  {
    title: "Emergency Lighting Manchester",
    url: "/services/emergency-lighting/manchester",
    category: "Services",
    description: "Emergency lighting testing in Manchester",
    keywords: ["emergency", "lighting", "manchester", "testing"]
  },

  // Regional Service Pages - HVAC
  {
    title: "HVAC Services London",
    url: "/services/hvac/london",
    category: "Services",
    description: "TM44 and F-Gas compliance in London",
    keywords: ["hvac", "london", "tm44", "fgas", "aircon"]
  },
  {
    title: "HVAC Services Birmingham",
    url: "/services/hvac/birmingham",
    category: "Services",
    description: "HVAC maintenance in Birmingham",
    keywords: ["hvac", "birmingham", "tm44", "aircon"]
  },

  // Regional Service Pages - Water Hygiene
  {
    title: "Water Hygiene London",
    url: "/services/water/london",
    category: "Services",
    description: "Legionella testing and L8 compliance in London",
    keywords: ["water", "hygiene", "london", "legionella", "l8"]
  },
  {
    title: "Water Hygiene Birmingham",
    url: "/services/water/birmingham",
    category: "Services",
    description: "Water hygiene services in Birmingham",
    keywords: ["water", "hygiene", "birmingham", "legionella"]
  },

  // Regional Service Pages - Gas Safety
  {
    title: "Gas Safety London",
    url: "/services/gas/london",
    category: "Services",
    description: "Gas Safe engineers in London",
    keywords: ["gas", "safety", "london", "gassafe", "boiler"]
  },
  {
    title: "Gas Safety Birmingham",
    url: "/services/gas/birmingham",
    category: "Services",
    description: "Gas safety certificates in Birmingham",
    keywords: ["gas", "safety", "birmingham", "certificate"]
  },

  // Regional Service Pages - PPM
  {
    title: "PPM Services London",
    url: "/services/ppm/london",
    category: "Services",
    description: "Planned maintenance in London",
    keywords: ["ppm", "london", "planned", "maintenance"]
  },
  {
    title: "PPM Services Birmingham",
    url: "/services/ppm/birmingham",
    category: "Services",
    description: "PPM compliance in Birmingham",
    keywords: ["ppm", "birmingham", "planned", "maintenance"]
  },

  // Sectors
  {
    title: "Corporate Offices",
    url: "/sectors/offices",
    category: "Sectors",
    description: "FM solutions for office buildings and corporate headquarters",
    keywords: ["office", "corporate", "hq", "headquarters", "commercial", "workplace", "business"]
  },
  {
    title: "Retail & Service Stations",
    url: "/sectors/retail-service-stations",
    category: "Sectors",
    description: "Facilities management for retail stores, service stations, and hospitality venues",
    keywords: ["retail", "shop", "store", "hospitality", "restaurant", "pub", "bar", "venue", "service", "stations", "fuel"]
  },
  {
    title: "Hospitality & Leisure",
    url: "/sectors/hospitality-leisure",
    category: "Sectors",
    description: "Hotel maintenance and leisure facility management",
    keywords: ["hotel", "leisure", "gym", "spa", "resort", "accommodation", "hospitality"]
  },
  {
    title: "Industrial & Logistics",
    url: "/sectors/industrial-logistics",
    category: "Sectors",
    description: "Warehouse and industrial facility maintenance",
    keywords: ["industrial", "logistics", "warehouse", "distribution", "manufacturing", "factory", "plant"]
  },
  {
    title: "Healthcare & Public",
    url: "/sectors/healthcare-public",
    category: "Sectors",
    description: "Healthcare facility and public building compliance",
    keywords: ["healthcare", "hospital", "clinic", "medical", "nhs", "public", "government"]
  },
  {
    title: "PBSA & Student Housing",
    url: "/sectors/pbsa",
    category: "Sectors",
    description: "Purpose-built student accommodation management",
    keywords: ["pbsa", "student", "accommodation", "housing", "university", "halls", "residence"]
  },
  {
    title: "Universities & Education",
    url: "/sectors/education",
    category: "Sectors",
    description: "Educational facility maintenance and compliance",
    keywords: ["education", "university", "school", "college", "academy", "campus", "educational"]
  },
  {
    title: "Airports & Aviation",
    url: "/sectors/airports",
    category: "Sectors",
    description: "Airport facilities management and aviation compliance",
    keywords: ["airport", "aviation", "terminal", "airside", "flight", "travel"]
  },

  // FM Operations
  {
    title: "FM Strategy & Consultancy",
    url: "/fm-operations/fm-strategy",
    category: "FM Operations",
    description: "Strategic facilities management planning and consultancy",
    keywords: ["strategy", "consultancy", "planning", "fm", "facilities", "management"]
  },
  {
    title: "Helpdesk & CAFM",
    url: "/fm-operations/helpdesk",
    category: "FM Operations",
    description: "24/7 helpdesk support and CAFM software integration",
    keywords: ["helpdesk", "cafm", "support", "portal", "ticketing", "24/7", "software"]
  },
  {
    title: "Mobilisation & Onboarding",
    url: "/fm-operations/mobilisation",
    category: "FM Operations",
    description: "Seamless FM contract mobilisation and transition",
    keywords: ["mobilisation", "onboarding", "transition", "takeover", "handover", "implementation"]
  },
  {
    title: "Asset Lifecycle Management",
    url: "/fm-operations/asset-lifecycle",
    category: "FM Operations",
    description: "Complete asset lifecycle planning and management",
    keywords: ["asset", "lifecycle", "capex", "replacement", "maintenance", "planning"]
  },
  {
    title: "PPM Delivery",
    url: "/fm-operations/ppm-delivery",
    category: "FM Operations",
    description: "Structured planned preventative maintenance delivery",
    keywords: ["ppm", "delivery", "planned", "maintenance", "scheduling", "compliance"]
  },
  {
    title: "Reactive Maintenance",
    url: "/fm-operations/reactive-maintenance",
    category: "FM Operations",
    description: "Fast response reactive maintenance and emergency callouts",
    keywords: ["reactive", "emergency", "repair", "breakdown", "callout", "response"]
  },
  {
    title: "Occupier Experience",
    url: "/fm-operations/occupier-experience",
    category: "FM Operations",
    description: "Enhanced occupier experience and workplace services",
    keywords: ["occupier", "experience", "workplace", "tenant", "user", "satisfaction"]
  },
  {
    title: "Business Continuity",
    url: "/fm-operations/business-continuity",
    category: "FM Operations",
    description: "Business continuity planning and disaster recovery",
    keywords: ["business", "continuity", "disaster", "recovery", "resilience", "emergency"]
  },
  {
    title: "Tender Support",
    url: "/fm-operations/tender-support",
    category: "FM Operations",
    description: "FM procurement and tender management support",
    keywords: ["tender", "procurement", "rfp", "bid", "proposal", "specification"]
  },

  // Soft Services
  {
    title: "Specialist Cleaning",
    url: "/soft-services/specialist-cleaning",
    category: "Soft Services",
    description: "Deep cleaning, sanitization and specialist cleaning services",
    keywords: ["cleaning", "deep", "specialist", "sanitization", "hygiene", "janitorial"]
  },
  {
    title: "Grounds Maintenance",
    url: "/soft-services/grounds-maintenance",
    category: "Soft Services",
    description: "Landscaping, grounds care and external maintenance",
    keywords: ["grounds", "landscape", "gardening", "external", "maintenance", "outdoor"]
  },
  {
    title: "Concierge Services",
    url: "/soft-services/concierge",
    category: "Soft Services",
    description: "Reception, concierge and front of house services",
    keywords: ["concierge", "reception", "front", "house", "hospitality", "customer", "service"]
  },
  {
    title: "Waste & Recycling",
    url: "/soft-services/waste-recycling",
    category: "Soft Services",
    description: "Waste management, recycling and environmental compliance",
    keywords: ["waste", "recycling", "environmental", "refuse", "disposal", "sustainability"]
  },

  // Case Studies
  {
    title: "Corporate Office London",
    url: "/case-studies/corporate-office-london",
    category: "Case Studies",
    description: "Full FM delivery for 50,000 sq ft London headquarters",
    keywords: ["office", "london", "corporate", "headquarters", "case", "study"]
  },
  {
    title: "Retail Complex Birmingham",
    url: "/case-studies/retail-complex-birmingham",
    category: "Case Studies",
    description: "Multi-site retail compliance management",
    keywords: ["retail", "birmingham", "shopping", "centre", "case", "study"]
  },
  {
    title: "Industrial Warehouse Sheffield",
    url: "/case-studies/industrial-warehouse-sheffield",
    category: "Case Studies",
    description: "650,000 sq ft logistics hub maintenance",
    keywords: ["industrial", "warehouse", "sheffield", "logistics", "case", "study"]
  },
  {
    title: "PBSA Estate Manchester",
    url: "/case-studies/pbsa-estate-manchester",
    category: "Case Studies",
    description: "1,200 bed student accommodation compliance",
    keywords: ["pbsa", "student", "manchester", "accommodation", "case", "study"]
  },
  {
    title: "Healthcare Facility",
    url: "/case-studies/healthcare",
    category: "Case Studies",
    description: "Critical environment healthcare facility management",
    keywords: ["healthcare", "hospital", "medical", "case", "study"]
  },
  {
    title: "Aviation Hub",
    url: "/case-studies/aviation",
    category: "Case Studies",
    description: "Airport terminal facilities management",
    keywords: ["aviation", "airport", "terminal", "case", "study"]
  },
  {
    title: "Hospitality Venue",
    url: "/case-studies/hospitality",
    category: "Case Studies",
    description: "Hotel and leisure facility maintenance",
    keywords: ["hospitality", "hotel", "leisure", "case", "study"]
  },
  {
    title: "Logistics Distribution Hub",
    url: "/case-studies/logistics-distribution-hub",
    category: "Case Studies",
    description: "Large-scale distribution centre FM",
    keywords: ["logistics", "distribution", "warehouse", "case", "study"]
  },

  // Insights & Resources
  {
    title: "Fire Risk Assessment Guide",
    url: "/resources/fire-risk-guide",
    category: "Insights / Resources",
    description: "Comprehensive guide to fire risk assessments and compliance",
    keywords: ["fire", "risk", "assessment", "guide", "compliance", "rrfso"]
  },
  {
    title: "EICR Survival Manual",
    url: "/resources/eicr-manual",
    category: "Insights / Resources",
    description: "Complete guide to electrical installation condition reports",
    keywords: ["eicr", "electrical", "guide", "manual", "testing", "compliance"]
  },
  {
    title: "Emergency Lighting Checklist",
    url: "/resources/emergency-lighting-checklist",
    category: "Insights / Resources",
    description: "BS 5266 emergency lighting testing checklist",
    keywords: ["emergency", "lighting", "checklist", "bs5266", "testing"]
  },
  {
    title: "Legionella Governance Guide",
    url: "/resources/legionella-guide",
    category: "Insights / Resources",
    description: "ACOP L8 compliance and legionella control",
    keywords: ["legionella", "l8", "guide", "water", "hygiene", "compliance"]
  },
  {
    title: "Compliance Calendar 2025",
    url: "/resources/compliance-calendar",
    category: "Insights / Resources",
    description: "Annual FM compliance schedule and deadlines",
    keywords: ["compliance", "calendar", "schedule", "deadlines", "fm"]
  },
  {
    title: "F-Gas Leak Tracker",
    url: "/resources/fgas-tracker",
    category: "Insights / Resources",
    description: "Track F-Gas compliance and refrigerant leaks",
    keywords: ["fgas", "tracker", "refrigerant", "leak", "compliance"]
  },
  {
    title: "Audit Framework",
    url: "/resources/audit-framework",
    category: "Insights / Resources",
    description: "FM audit methodology and best practices",
    keywords: ["audit", "framework", "methodology", "inspection", "compliance"]
  },
  {
    title: "Switching FM Provider Guide",
    url: "/resources/switching-provider",
    category: "Insights / Resources",
    description: "How to change facilities management provider",
    keywords: ["switching", "provider", "change", "guide", "fm", "transition"]
  },
  {
    title: "What is Facilities Management?",
    url: "/fm-insights/what-is-facilities-management",
    category: "Insights / Resources",
    description: "Introduction to facilities management and FM services",
    keywords: ["facilities", "management", "fm", "what", "is", "introduction"]
  },
  {
    title: "What is Hard FM?",
    url: "/fm-insights/what-is-hard-fm",
    category: "Insights / Resources",
    description: "Explanation of hard facilities management services",
    keywords: ["hard", "fm", "mechanical", "electrical", "technical"]
  },
  {
    title: "What is Soft FM?",
    url: "/fm-insights/what-is-soft-fm",
    category: "Insights / Resources",
    description: "Understanding soft facilities management services",
    keywords: ["soft", "fm", "cleaning", "catering", "security", "services"]
  },
  {
    title: "What is PPM?",
    url: "/fm-insights/what-is-ppm",
    category: "Insights / Resources",
    description: "Planned preventative maintenance explained",
    keywords: ["ppm", "planned", "preventative", "maintenance", "what", "is"]
  },
  {
    title: "What is Statutory Maintenance?",
    url: "/fm-insights/what-is-statutory-maintenance",
    category: "Insights / Resources",
    description: "Legal compliance and statutory maintenance requirements",
    keywords: ["statutory", "maintenance", "legal", "compliance", "what", "is"]
  },
  {
    title: "What is an EICR?",
    url: "/fm-insights/what-is-an-eicr",
    category: "Insights / Resources",
    description: "Electrical Installation Condition Report explained",
    keywords: ["eicr", "electrical", "testing", "what", "is", "inspection"]
  },
  {
    title: "What is ACOP L8?",
    url: "/fm-insights/what-is-acopl8",
    category: "Insights / Resources",
    description: "Approved Code of Practice L8 for legionella control",
    keywords: ["acopl8", "l8", "legionella", "what", "is", "water"]
  },
  {
    title: "What is TM44?",
    url: "/fm-insights/what-is-atm44",
    category: "Insights / Resources",
    description: "TM44 air conditioning inspection requirements",
    keywords: ["tm44", "air", "conditioning", "what", "is", "inspection"]
  },
  {
    title: "What is F-Gas Compliance?",
    url: "/fm-insights/what-is-fgas-compliance",
    category: "Insights / Resources",
    description: "F-Gas regulations and refrigerant compliance",
    keywords: ["fgas", "f-gas", "compliance", "what", "is", "refrigerant"]
  },
  {
    title: "How Often Should Emergency Lighting Be Tested?",
    url: "/fm-insights/how-often-emergency-lighting-tested",
    category: "Insights / Resources",
    description: "BS 5266 emergency lighting testing frequency",
    keywords: ["emergency", "lighting", "testing", "frequency", "bs5266"]
  },
  {
    title: "How Often Should Fire Alarms Be Tested?",
    url: "/fm-insights/how-often-fire-alarms-tested",
    category: "Insights / Resources",
    description: "BS 5839 fire alarm testing schedule",
    keywords: ["fire", "alarm", "testing", "frequency", "bs5839"]
  },
  {
    title: "Who is the Responsible Person?",
    url: "/fm-insights/who-is-the-responsible-person",
    category: "Insights / Resources",
    description: "Fire safety responsible person duties explained",
    keywords: ["responsible", "person", "fire", "safety", "rrfso", "duty"]
  },
  {
    title: "Top FM Providers UK",
    url: "/resources/top-fm-providers",
    category: "Insights / Resources",
    description: "Leading facilities management companies in the UK",
    keywords: ["top", "fm", "providers", "companies", "uk", "best"]
  },
  {
    title: "Energy & ESG Guide",
    url: "/resources/energy-esg",
    category: "Insights / Resources",
    description: "Energy efficiency and ESG compliance for FM",
    keywords: ["energy", "esg", "sustainability", "carbon", "net", "zero"]
  },
  {
    title: "Fire Alarm Testing Guide",
    url: "/resources/fire-alarm-testing",
    category: "Insights / Resources",
    description: "Fire alarm testing procedures and compliance",
    keywords: ["fire", "alarm", "testing", "guide", "bs5839"]
  },
  {
    title: "Engineer Standards Guide",
    url: "/resources/engineer-standards",
    category: "Insights / Resources",
    description: "Engineering standards and qualifications",
    keywords: ["engineer", "standards", "qualifications", "competence"]
  },
  {
    title: "Tender Support Guide",
    url: "/resources/tender-support",
    category: "Insights / Resources",
    description: "FM procurement and tendering guidance",
    keywords: ["tender", "procurement", "guide", "rfp", "bid"]
  },

  // Tools & Calculators
  {
    title: "PPM Cost Calculator",
    url: "/tools/ppm-calculator",
    category: "Insights / Resources",
    description: "Calculate planned maintenance costs for your facility",
    keywords: ["ppm", "calculator", "cost", "estimate", "tool"]
  },
  {
    title: "Water Risk Grader",
    url: "/tools/water-risk-grader",
    category: "Insights / Resources",
    description: "Assess legionella risk level for your building",
    keywords: ["water", "risk", "grader", "legionella", "assessment", "tool"]
  },
  {
    title: "TM44 Checker",
    url: "/tools/tm44-checker",
    category: "Insights / Resources",
    description: "Check if your AC system needs TM44 inspection",
    keywords: ["tm44", "checker", "tool", "air", "conditioning"]
  },
  {
    title: "Cost Savings Calculator",
    url: "/tools/cost-savings-calculator",
    category: "Insights / Resources",
    description: "Calculate potential FM cost savings",
    keywords: ["cost", "savings", "calculator", "roi", "tool"]
  },
  {
    title: "SLA Benchmark Tool",
    url: "/tools/sla-benchmark",
    category: "Insights / Resources",
    description: "Compare your FM SLAs against industry standards",
    keywords: ["sla", "benchmark", "tool", "kpi", "performance"]
  },
];
