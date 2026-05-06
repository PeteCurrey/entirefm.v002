export interface Service {
  slug: string;
  name: string;
  strapline: string;
  description: string;
  benefits: string[];
  features: { title: string; desc: string }[];
  faqs: { question: string; answer: string }[];
}

export const services: Service[] = [
  {
    slug: "ppm",
    name: "Planned Preventative Maintenance (PPM)",
    strapline: "SFG20-Aligned Scheduled Maintenance That Eliminates Operational Downtime",
    description: "Proactive maintenance is the cornerstone of building resilience. EntireFM delivers meticulously scheduled PPM programmes that align with SFG20 standards, ensuring your critical assets—from HVAC to fire safety—are serviced, calibrated, and inspected before they fail.",
    benefits: [
      "Significant reduction in emergency reactive call-out spend",
      "Statutory compliance for fire, water, and electrical safety",
      "Extended lifespan for expensive mechanical and electrical assets",
      "Full audit trails and digital compliance documentation"
    ],
    features: [
      { title: "HVAC & Cooling", desc: "Regular servicing of air conditioning, chillers, and ventilation systems." },
      { title: "Electrical Compliance", desc: "Fixed wire testing (EICR), PAT testing, and emergency lighting checks." },
      { title: "Heating & Gas", desc: "Commercial boiler servicing and Gas Safe inspections." },
      { title: "Fire Safety", desc: "Fire alarm testing, sprinkler maintenance, and dry riser pressure tests." }
    ],
    faqs: [
      {
        question: "How does PPM reduce my facilities management costs?",
        answer: "By identifying and fixing minor issues during scheduled visits, we prevent catastrophic failures that result in expensive out-of-hours call-outs and business disruption. Proactive maintenance typically reduces reactive spend by 12-18% annually."
      },
      {
        question: "Is your PPM delivery SFG20 compliant?",
        answer: "Yes. All our maintenance schedules are built using the SFG20 framework, the UK industry standard for building services maintenance. This ensures your site meets all statutory obligations and insurance requirements."
      }
    ]
  },
  {
    slug: "mechanical-electrical",
    name: "Mechanical & Electrical (M&E) Services",
    strapline: "Technical Hard FM for Complex Commercial and Industrial Infrastructure",
    description: "Your building's mechanical and electrical systems are its lifeblood. EntireFM provides specialist M&E support, covering everything from power distribution and lighting to heating, ventilation, and plumbing systems.",
    benefits: [
      "Directly employed, accredited engineering teams",
      "24/7 reactive support for critical asset failures",
      "Bespoke installation and remedial project work",
      "Energy optimisation and building control management"
    ],
    features: [
      { title: "Power Distribution", desc: "HV/LV switching, UPS maintenance, and generator testing." },
      { title: "Commercial Plumbing", desc: "Sanitary systems, booster pumps, and hot/cold water distribution." },
      { title: "HVAC Systems", desc: "Complex heating and cooling infrastructure management." },
      { title: "Lighting Controls", desc: "Smart lighting, LED upgrades, and emergency lighting systems." }
    ],
    faqs: [
      {
        question: "Do you provide 24/7 emergency M&E support?",
        answer: "Yes. Our national helpdesk is operational 24/7, 365 days a year. We deploy rapid-response engineers for Priority 1 failures to ensure your business continuity is protected."
      }
    ]
  },
  {
    slug: "hard-services",
    name: "Hard FM Services",
    strapline: "Engineering-Led Building Maintenance and Statutory Compliance",
    description: "Hard FM covers the physical fabric and systems of your property. EntireFM delivers a comprehensive hard services model, focusing on engineering excellence, statutory compliance, and asset performance.",
    benefits: [
      "Total accountability for building fabric and technical systems",
      "Seamless integration with soft FM cleaning and security",
      "Asset lifecycle management and replacement planning",
      "Consolidated compliance reporting for multi-site portfolios"
    ],
    features: [
      { title: "Building Fabric", desc: "Roofing, glazing, flooring, and general building repairs." },
      { title: "Mechanical Plant", desc: "Boilers, AHUs, pumps, and water treatment systems." },
      { title: "Electrical Systems", desc: "Power, lighting, data, and security systems maintenance." },
      { title: "Compliance Auditing", desc: "Regular reviews to ensure 100% statutory adherence." }
    ],
    faqs: [
      {
        question: "What is included in a typical Hard FM contract?",
        answer: "A standard contract includes planned preventative maintenance (PPM) for all mechanical and electrical assets, reactive maintenance for unexpected repairs, and statutory compliance management for fire, water, and gas safety."
      }
    ]
  },
  {
    slug: "industrial-cleaning",
    name: "Industrial Cleaning Services",
    strapline: "Heavy-Duty Sanitation for Manufacturing and Logistics Environments",
    description: "Industrial cleaning requires more than just standard janitorial support. EntireFM delivers specialist cleaning for factories, warehouses, and production lines, utilizing high-pressure systems and industrial-grade degreasers.",
    benefits: [
      "Safe sanitation of high-risk manufacturing areas",
      "Removal of industrial grease, oils, and chemical residues",
      "Minimal disruption to production schedules",
      "Certified disposal of industrial waste streams"
    ],
    features: [
      { title: "Factory Degreasing", desc: "High-pressure hot water cleaning for production floors." },
      { title: "Warehouse Cleaning", desc: "High-level dusting, floor scrubbing, and racking cleaning." },
      { title: "Specialist Plant Cleaning", desc: "Internal and external cleaning of industrial machinery." },
      { title: "Spill Response", desc: "Emergency cleaning for hazardous and non-hazardous spills." }
    ],
    faqs: [
      {
        question: "Can you carry out industrial cleaning out-of-hours?",
        answer: "Yes. We coordinate our cleaning schedules with your production windows, working evenings, nights, or weekends to ensure zero downtime for your operations."
      }
    ]
  },
  {
    slug: "airport-facilities-management",
    name: "Airport Facilities Management",
    strapline: "Critical Infrastructure FM for High-Security Aviation Hubs",
    description: "Aviation environments operate under ferocious pressure. EntireFM delivers facilities management for airports and travel hubs, focusing on 24/7 system uptime, security clearance compliance, and audience area maintenance.",
    benefits: [
      "Security-cleared engineer network for airside/landside works",
      "Zero-tolerance approach to critical system downtime",
      "Experience in highly regulated aviation environments",
      "Integrated hard and soft FM for large-scale passenger hubs"
    ],
    features: [
      { title: "Critical Power", desc: "UPS and generator maintenance for navigation and security systems." },
      { title: "Passenger Comfort", desc: "HVAC and plumbing maintenance for terminals and lounges." },
      { title: "High-Volume Cleaning", desc: "Intensive sanitation for high-footfall passenger areas." },
      { title: "External Maintenance", desc: "Ramp, apron, and car park maintenance including drainage." }
    ],
    faqs: [
      {
        question: "Are your engineers security cleared for airport work?",
        answer: "Yes. Our aviation teams are vetted and hold the necessary clearances to work in restricted airside environments, ensuring we can respond instantly to critical failures."
      }
    ]
  },
  {
    slug: "hvac-contractor",
    name: "HVAC & Air Conditioning",
    strapline: "Precision Climate Control and F-Gas Compliance",
    description: "HVAC systems are often the largest energy consumer in a commercial building. EntireFM provides expert HVAC maintenance and installation, ensuring your heating, cooling, and ventilation systems operate at peak efficiency and meet all F-Gas regulations.",
    benefits: [
      "F-Gas certified engineering teams",
      "Significant energy spend reduction through optimization",
      "Minimal downtime for critical server room cooling",
      "Full compliance documentation for environmental audits"
    ],
    features: [
      { title: "Air Conditioning", desc: "Split systems, VRV/VRF, and multi-unit maintenance." },
      { title: "Chiller Maintenance", desc: "Specialist servicing for large-scale industrial cooling." },
      { title: "Ventilation & AHUs", desc: "Air handling unit filter changes and belt inspections." },
      { title: "Refrigeration", desc: "Commercial cold storage and display cabinet support." }
    ],
    faqs: [
      {
        question: "How often should commercial air conditioning be serviced?",
        answer: "Typically, systems require bi-annual servicing to maintain efficiency and comply with manufacturer warranties. High-use environments like server rooms may require quarterly inspections."
      }
    ]
  },
  {
    slug: "plumbing-gas",
    name: "Commercial Plumbing & Gas",
    strapline: "Gas Safe Registered Engineers for Large-Scale Property Portfolios",
    description: "From commercial boiler rooms to sanitary distribution, EntireFM manages the full water and gas lifecycle of your property. Our Gas Safe engineers ensure your heating and hot water systems are safe, efficient, and fully compliant.",
    benefits: [
      "Gas Safe and SafeContractor accredited delivery",
      "24/7 reactive support for leaks and heating failures",
      "Water hygiene (Legionella) risk management included",
      "Efficiency audits for aging boiler plant"
    ],
    features: [
      { title: "Commercial Boilers", desc: "Annual servicing and Gas Safe safety certification." },
      { title: "Water Distribution", desc: "Booster pump maintenance and leak detection." },
      { title: "Sanitary Systems", desc: "Blocked drains, toilet repairs, and pipework maintenance." },
      { title: "Gas Safety Audits", desc: "Full site reviews for gas infrastructure compliance." }
    ],
    faqs: [
      {
        question: "Do you provide emergency plumbing support?",
        answer: "Yes. We understand that water leaks can cause catastrophic damage. Our national helpdesk deploys local engineers 24/7 to stabilize and repair plumbing failures."
      }
    ]
  },
  {
    slug: "aerial-drone-building-inspection",
    name: "Aerial Drone Inspections",
    strapline: "High-Level Building Fabric Audits Without the Cost of Scaffolding",
    description: "Inspecting high-level assets like roofs, gutters, and chimneys is traditionally expensive and high-risk. EntireFM's drone inspection service provides high-resolution visual audits, identifying defects safely and cost-effectively.",
    benefits: [
      "Major cost savings over scaffolding or MEWP hire",
      "Zero-risk approach to high-level inspections",
      "High-resolution 4K imagery and thermal reporting",
      "Rapid deployment for emergency storm damage audits"
    ],
    features: [
      { title: "Roof Audits", desc: "Detailed inspection of tiles, slates, and flat roof membranes." },
      { title: "Gutter Inspections", desc: "Visual checks for blockages and structural integrity." },
      { title: "Thermal Imaging", desc: "Identifying heat loss and moisture ingress from the air." },
      { title: "Chimney & Spire Audits", desc: "Accessing difficult-to-reach heritage structures safely." }
    ],
    faqs: [
      {
        question: "Is drone inspection safer than traditional methods?",
        answer: "Yes. By keeping personnel on the ground, we eliminate the 'Work at Height' risks associated with ladders, scaffolding, and cherry pickers while delivering more detailed visual data."
      }
    ]
  },
  {
    slug: "safety-critical-emergency-systems",
    name: "Safety Critical & Emergency Systems",
    strapline: "Zero-Tolerance Compliance for Life Safety Infrastructure",
    description: "When systems fail, lives are at risk. EntireFM manages the critical maintenance of fire alarms, emergency lighting, and evacuation systems, ensuring 100% statutory compliance and operational readiness.",
    benefits: [
      "100% statutory compliance for life safety systems",
      "SFG20-aligned testing and inspection schedules",
      "Defensible audit trails for fire officers and insurers",
      "24/7 monitoring and rapid remedial response"
    ],
    features: [
      { title: "Fire Alarms", desc: "Weekly testing and periodic maintenance to BS 5839." },
      { title: "Emergency Lighting", desc: "Monthly flick tests and annual 3-hour discharge tests." },
      { title: "Sprinkler Systems", desc: "Pump room maintenance and flow switch testing." },
      { title: "Evacuation Chairs", desc: "Annual servicing and staff training audits." }
    ],
    faqs: [
      {
        question: "What happens if a safety critical system fails an inspection?",
        answer: "Our engineers provide instant notification of 'major non-compliance' and our helpdesk prepares an immediate remedial quote to restore safety and compliance as a priority."
      }
    ]
  },
  {
    slug: "commercial-facilities-management",
    name: "Commercial Facilities Management",
    strapline: "Professional Property Support for Offices, Retail and Multi-Site Portfolios",
    description: "Commercial property management requires a balanced approach to planned maintenance, reactive repairs, and statutory compliance. EntireFM builds maintenance programmes around your building's occupancy, asset condition, and operating hours, ensuring a safe and professional environment for tenants and staff alike.",
    benefits: [
      "Dedicated support for landlords and managing agents",
      "Seamless coordination of hard and soft FM services",
      "Comprehensive compliance auditing and documentation",
      "24/7 reactive helpdesk for tenant issues"
    ],
    features: [
      { title: "Office Maintenance", desc: "Lighting, HVAC, plumbing, and building fabric support." },
      { title: "Statutory Compliance", desc: "Fire safety, water hygiene, and electrical testing management." },
      { title: "Tenant Support", desc: "Rapid response to reactive issues and helpdesk coordination." },
      { title: "Asset Management", desc: "Long-term planning and lifecycle auditing for building systems." }
    ],
    faqs: [
      {
        question: "How do you coordinate with tenants in commercial buildings?",
        answer: "We work closely with building managers and tenants to schedule maintenance during low-impact hours, ensuring minimal disruption to business operations while maintaining 100% compliance."
      }
    ]
  }
];

export function getServiceBySlug(slug: string) {
  return services.find(s => s.slug === slug);
}
