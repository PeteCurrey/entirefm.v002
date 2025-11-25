import { ResourceArticleTemplate } from '@/components/resources/ResourceArticleTemplate';

export default function WhatIsStatutoryMaintenance() {
  return (
    <ResourceArticleTemplate
      title="What is Statutory Maintenance? | Legal Requirements for Building Safety"
      metaDescription="Statutory maintenance is legally required inspections and testing of building systems to ensure safety and compliance. Learn what's mandatory, who's responsible, and the consequences of non-compliance."
      keywords={[
        'statutory maintenance',
        'building compliance',
        'legal requirements',
        'fire safety testing',
        'electrical testing',
        'responsible person',
        'building regulations',
        'facilities management compliance'
      ]}
      category="Compliance Essentials"
      heroTitle="What is Statutory Maintenance?"
      heroDescription="Statutory maintenance refers to legally mandated inspections, testing, and servicing of building systems to protect life safety and ensure regulatory compliance."
      publishDate="2025-01-15"
      readTime="8 min"
      introduction={[
        "Statutory maintenance is not optional—it's a legal requirement. Building owners, landlords, and facilities managers must ensure that critical systems are inspected, tested, and serviced in accordance with UK law.",
        "These requirements are enshrined in legislation including the Health and Safety at Work Act 1974, Regulatory Reform (Fire Safety) Order 2005, Electricity at Work Regulations 1989, and sector-specific standards.",
        "Failure to complete statutory maintenance can result in prosecution, unlimited fines, prison sentences, voided insurance, and in the worst cases, loss of life."
      ]}
      keyDefinition={{
        term: "Statutory Maintenance",
        definition: "Legally required inspections, testing, and servicing of building systems (fire, electrical, gas, water, lifts, etc.) carried out at prescribed intervals to ensure safety, compliance, and the protection of life."
      }}
      sections={[
        {
          title: "What Systems Require Statutory Maintenance?",
          content: [
            "Statutory maintenance covers all life-safety and critical building systems. The most common requirements include:",
            "**Fire Safety Systems**: Fire alarm testing (monthly), emergency lighting testing (monthly and annually), fire extinguisher servicing (annually), sprinkler testing (quarterly/annually), smoke vent and AOV testing.",
            "**Electrical Systems**: Fixed wire testing (EICRs every 5 years, or annually in some sectors), PAT testing, emergency generator testing, lightning protection testing.",
            "**Gas Safety**: Annual gas safety checks (landlord duty), commercial gas appliance inspections, ventilation checks.",
            "**Water Hygiene**: Legionella risk assessments (every 2 years or after significant changes), temperature monitoring (monthly), water tank inspections (annually), TMV testing.",
            "**Lifting Equipment**: Lift inspections (every 6 months under LOLER), thorough examinations by competent persons, hoist and platform lift testing.",
            "**HVAC Systems**: TM44 air conditioning inspections (every 5 years for systems >12kW), F-Gas leak checks (annually or more frequently depending on charge size), AHU filter changes.",
            "**Pressure Systems**: Pressure vessel inspections, boiler safety checks, written schemes of examination.",
            "Each system has specific testing frequencies and record-keeping requirements. Non-compliance is a criminal offence."
          ]
        },
        {
          title: "Who Is Responsible for Statutory Maintenance?",
          content: [
            "The legal responsibility falls on the 'Responsible Person' or 'Duty Holder'—typically the building owner, landlord, managing agent, or employer.",
            "Under the Regulatory Reform (Fire Safety) Order 2005, the Responsible Person must:",
            "• Carry out and regularly review a fire risk assessment",
            "• Implement and maintain appropriate fire safety measures",
            "• Ensure fire safety equipment is maintained and tested",
            "• Keep records of all inspections and tests",
            "For electrical safety, the Electricity at Work Regulations 1989 place a duty on employers and building owners to maintain electrical systems in a safe condition.",
            "For water safety, the Health and Safety at Work Act 1974 and ACOP L8 require employers and landlords to assess and control Legionella risks.",
            "In short: if you control a building or employ people within it, you are likely the Responsible Person."
          ]
        },
        {
          title: "What Are the Legal Consequences of Non-Compliance?",
          content: [
            "The consequences of failing to complete statutory maintenance are severe:",
            "**Prosecution**: The HSE, Fire and Rescue Services, and Local Authorities can prosecute under the Health and Safety at Work Act, Fire Safety Order, or Electricity at Work Regulations. Fines are unlimited, and custodial sentences can be imposed for serious breaches.",
            "**Prohibition Notices**: Authorities can issue notices forcing you to cease operations until compliance is achieved.",
            "**Insurance Invalidation**: Insurers can refuse claims if you cannot demonstrate adequate maintenance records.",
            "**Civil Liability**: If someone is injured or killed due to poor maintenance, you face civil claims and potential corporate manslaughter charges.",
            "**Reputational Damage**: Public prosecutions, media coverage, and safety incidents cause long-term brand harm and loss of tenant confidence.",
            "High-profile cases (Grenfell Tower, Glasgow School of Art) have led to increased scrutiny and harsher penalties for non-compliance."
          ]
        },
        {
          title: "How Do I Prove Compliance?",
          content: [
            "Compliance is proven through documented evidence. You must retain:",
            "• Test certificates and inspection reports",
            "• Maintenance logs and service records",
            "• Risk assessments and method statements",
            "• Evidence of competent contractor appointments",
            "• Training records for in-house staff",
            "These records must be available for inspection by regulators, insurers, auditors, and solicitors. Digital compliance platforms (like those offered by EntireFM) provide centralised, auditable records with automated reminders for upcoming tests."
          ]
        }
      ]}
      complianceFramework={{
        laws: [
          "Health and Safety at Work Act 1974",
          "Regulatory Reform (Fire Safety) Order 2005",
          "Electricity at Work Regulations 1989",
          "Gas Safety (Installation and Use) Regulations 1998",
          "Lifting Operations and Lifting Equipment Regulations 1998 (LOLER)",
          "Pressure Systems Safety Regulations 2000"
        ],
        standards: [
          "BS 5839 (Fire Detection and Alarm Systems)",
          "BS 5266 (Emergency Lighting)",
          "BS 7671 (Electrical Wiring Regulations)",
          "ACOP L8 (Legionella Control)",
          "TM44 (Air Conditioning Inspections)"
        ],
        responsiblePerson: "Building owner, landlord, employer, managing agent, or facilities manager—anyone with control over the premises or workforce.",
        frequency: "Varies by system: monthly fire alarm tests, annual EICRs, six-monthly lift inspections, quarterly Legionella monitoring, five-yearly TM44 inspections."
      }}
      operationalImpact={[
        "Protects life safety and prevents accidents",
        "Maintains building insurance validity",
        "Avoids prosecution and regulatory enforcement action",
        "Supports asset longevity and reduces emergency breakdowns",
        "Demonstrates due diligence to tenants, investors, and auditors"
      ]}
      risksIfIgnored={[
        "Prosecution under health and safety or fire safety legislation",
        "Unlimited fines and potential imprisonment for serious breaches",
        "Voided insurance policies and rejected claims",
        "Life-safety incidents (fires, electrical faults, Legionella outbreaks)",
        "Prohibition notices forcing business closure",
        "Reputational damage and loss of tenant confidence"
      ]}
      howEntireFMHelps={{
        title: "How EntireFM Manages Statutory Maintenance",
        points: [
          "Bespoke PPM schedules aligned to statutory frequencies and sector-specific regulations",
          "Fully accredited engineers with up-to-date competency records (18th Edition, Gas Safe, F-Gas, IOSH)",
          "Digital compliance platform: automated reminders, live asset registers, test certificates, audit trails",
          "Post-inspection risk reports with remedial action plans and budget forecasts",
          "Single-point accountability across all statutory disciplines—no subcontractor fragmentation",
          "Regulatory liaison: we communicate directly with HSE, Fire Services, and insurers on your behalf"
        ]
      }}
      relatedLinks={[
        { title: "Planned Preventative Maintenance (PPM)", url: "/services/ppm", type: "service" },
        { title: "Fire Safety Services", url: "/services/fire-safety", type: "service" },
        { title: "Electrical Compliance", url: "/services/electrical-compliance", type: "service" },
        { title: "Water Hygiene (Legionella Control)", url: "/services/water-hygiene", type: "service" },
        { title: "HVAC Compliance", url: "/services/hvac-compliance", type: "service" },
        { title: "What is a PPM Schedule?", url: "/resources/what-is-ppm-schedule", type: "operation" },
        { title: "How to Prepare for a Compliance Audit", url: "/resources/preparing-for-compliance-audit", type: "operation" },
        { title: "Office Facilities Management", url: "/sectors/offices", type: "sector" },
        { title: "Industrial & Logistics FM", url: "/sectors/industrial-logistics", type: "sector" }
      ]}
      faqs={[
        {
          question: "What is the most common statutory maintenance requirement?",
          answer: "Fire alarm testing (monthly) and emergency lighting testing (monthly) are the most frequently required statutory checks. Annual EICRs, gas safety checks, and six-monthly lift inspections are also critical."
        },
        {
          question: "Who can carry out statutory maintenance?",
          answer: "Only competent, qualified contractors. For example: 18th Edition electricians for EICRs, Gas Safe engineers for gas work, LOLER-accredited inspectors for lifts, and accredited fire alarm engineers."
        },
        {
          question: "What happens if I miss a statutory test?",
          answer: "You are in breach of the law and risk prosecution. If an incident occurs (e.g., fire, electrical fault), insurers may refuse claims, and you could face criminal charges and unlimited fines."
        },
        {
          question: "How long must I keep statutory maintenance records?",
          answer: "Indefinitely for life-safety systems. Best practice is to retain records for the life of the building or asset. Digital compliance platforms provide permanent, auditable archives."
        },
        {
          question: "Can I do statutory maintenance in-house?",
          answer: "Only if you employ suitably qualified, competent staff with up-to-date certifications and insurance. Most organisations outsource to specialist FM providers to ensure compliance and limit liability."
        }
      ]}
    />
  );
}
