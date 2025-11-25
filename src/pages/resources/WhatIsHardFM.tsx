import { ResourceArticleTemplate } from '@/components/resources/ResourceArticleTemplate';

export default function WhatIsHardFM() {
  return (
    <ResourceArticleTemplate
      title="What is Hard FM? | Complete Guide to Hard Facilities Management"
      metaDescription="Hard FM covers mechanical, electrical, and structural building systems. Learn what Hard Facilities Management includes, statutory requirements, and why it's critical for building compliance and safety."
      keywords={[
        'hard fm',
        'hard facilities management',
        'mechanical electrical services',
        'building maintenance',
        'statutory compliance',
        'MEP services',
        'building systems maintenance',
        'facilities management uk'
      ]}
      category="Compliance Essentials"
      heroTitle="What is Hard FM?"
      heroDescription="Hard Facilities Management covers the mechanical, electrical, and structural elements that keep buildings safe, compliant, and operational. From HVAC to fire systems, discover what Hard FM includes and why it matters."
      publishDate="2025-01-15"
      readTime="7 min"
      introduction={[
        "Hard Facilities Management (Hard FM) refers to the physical, structural, and mechanical systems within a building—the infrastructure that keeps it functioning, safe, and compliant.",
        "Unlike Soft FM (which covers services like cleaning and catering), Hard FM involves capital-intensive, technically regulated assets: electrical installations, HVAC systems, fire protection, plumbing, lifts, generators, and building fabric.",
        "Hard FM is governed by strict legislation. Failure to maintain these systems can lead to prosecution, insurance invalidation, operational downtime, and life-safety risks."
      ]}
      keyDefinition={{
        term: "Hard Facilities Management",
        definition: "The management, maintenance, and compliance of a building's fixed mechanical, electrical, and structural systems—covering everything from power distribution and heating to fire safety and lift maintenance."
      }}
      sections={[
        {
          title: "What Does Hard FM Include?",
          content: [
            "Hard FM encompasses all building systems that require technical expertise, statutory testing, and planned preventative maintenance (PPM). Core disciplines include:",
            "**Electrical Systems**: Distribution boards, lighting, emergency power, EICRs, PAT testing, power quality monitoring.",
            "**HVAC (Heating, Ventilation, Air Conditioning)**: Air handling units, chillers, boilers, ventilation compliance, TM44 energy inspections, temperature control.",
            "**Fire Safety Systems**: Fire alarms (BS 5839), emergency lighting (BS 5266), sprinklers, smoke vents, fire dampers, dry risers.",
            "**Water & Plumbing**: Hot and cold water systems, Legionella control (ACOP L8), TMVs, drainage, backflow prevention.",
            "**Building Fabric & Structure**: Roofs, walls, windows, doors, waterproofing, structural surveys, façade inspections.",
            "**Vertical Transportation**: Lifts, escalators, hoists—LOLER compliance, six-monthly thorough examinations.",
            "**Emergency & Backup Systems**: Generators, UPS, AOVs, pressurisation fans, battery backups.",
            "All of these systems are subject to legal duties under the Health and Safety at Work Act 1974, Building Regulations, and sector-specific standards."
          ]
        },
        {
          title: "Who Is Responsible for Hard FM?",
          content: [
            "The legal responsibility for Hard FM falls on the 'Responsible Person' or 'Duty Holder'—typically the building owner, landlord, or facilities manager.",
            "Under the Regulatory Reform (Fire Safety) Order 2005, Electricity at Work Regulations 1989, and Health and Safety at Work Act 1974, the Responsible Person must ensure:",
            "• All building systems are maintained in safe working order",
            "• Statutory inspections are completed on time",
            "• Competent contractors are appointed",
            "• Records are kept for audit and insurance purposes",
            "In managed estates, Hard FM is often outsourced to specialist providers who deliver PPM schedules, reactive repairs, and compliance reporting."
          ]
        },
        {
          title: "Why Hard FM Matters",
          content: [
            "Hard FM is not discretionary—it's a legal requirement. Buildings are complex environments where mechanical and electrical failures can cause:",
            "• Life-safety incidents (fires, electrical shocks, Legionella outbreaks)",
            "• Regulatory prosecution and unlimited fines",
            "• Insurance claims rejection",
            "• Business interruption and reputational damage",
            "Post-Grenfell and post-pandemic, scrutiny on building safety has intensified. Landlords, managing agents, and facilities teams face greater accountability for system performance, energy efficiency, and occupant wellbeing."
          ]
        },
        {
          title: "Hard FM vs Soft FM",
          content: [
            "**Hard FM**: Mechanical, electrical, structural. Fixed assets. Statutory. Capital-intensive. Examples: HVAC, fire alarms, lifts, plumbing.",
            "**Soft FM**: People-focused services. Non-technical. Examples: cleaning, catering, security, waste, landscaping.",
            "Many organisations now procure Total FM contracts that bundle both Hard and Soft FM under a single provider for efficiency and accountability."
          ]
        }
      ]}
      complianceFramework={{
        laws: [
          "Health and Safety at Work Act 1974",
          "Electricity at Work Regulations 1989",
          "Regulatory Reform (Fire Safety) Order 2005",
          "Building Regulations Approved Documents (B, F, L)",
          "Gas Safety (Installation and Use) Regulations 1998"
        ],
        standards: [
          "BS 7671 (18th Edition Wiring Regulations)",
          "BS 5839 (Fire Detection and Alarm Systems)",
          "BS 5266 (Emergency Lighting)",
          "ACOP L8 (Legionella Control)",
          "HTM 04-01 (Water Safety in Healthcare)"
        ],
        responsiblePerson: "Building owner, landlord, facilities manager, or appointed Duty Holder under relevant health and safety regulations.",
        frequency: "Varies by system: monthly fire alarm tests, annual EICRs, six-monthly lift inspections, quarterly Legionella risk assessments."
      }}
      operationalImpact={[
        "Prevents unplanned downtime from system failures",
        "Ensures continuous heating, cooling, lighting, and power",
        "Maintains building insurance validity",
        "Protects asset value and extends equipment lifespan",
        "Supports ESG reporting and energy efficiency targets"
      ]}
      risksIfIgnored={[
        "Prosecution under health and safety or fire safety legislation",
        "Life-safety incidents (fires, electrical faults, Legionella)",
        "Voided insurance policies due to poor maintenance records",
        "Operational shutdowns from emergency breakdowns",
        "Reputational damage and tenant dissatisfaction"
      ]}
      howEntireFMHelps={{
        title: "How EntireFM Delivers Hard FM Excellence",
        points: [
          "Fully accredited in-house engineers covering electrical, HVAC, plumbing, fire, and mechanical disciplines",
          "Bespoke PPM schedules aligned to statutory frequencies and manufacturer guidelines",
          "24/7 reactive support with <4-hour emergency response across the Midlands and North",
          "Digital compliance dashboards: live asset registers, test certificates, audit trails",
          "Single accountability across all Hard FM trades—no subcontractor fragmentation",
          "Post-inspection reporting with risk ratings, remedial actions, and budget forecasts"
        ]
      }}
      relatedLinks={[
        { title: "Hard Services FM", url: "/services/hard-services-fm", type: "service" },
        { title: "Mechanical & Electrical Services", url: "/services/me-services", type: "service" },
        { title: "Electrical Compliance", url: "/services/electrical-compliance", type: "service" },
        { title: "HVAC Compliance", url: "/services/hvac-compliance", type: "service" },
        { title: "Fire Safety Services", url: "/services/fire-safety", type: "service" },
        { title: "Water Hygiene (Legionella Control)", url: "/services/water-hygiene", type: "service" },
        { title: "What is Soft FM?", url: "/resources/what-is-soft-fm", type: "operation" },
        { title: "What is a PPM Schedule?", url: "/resources/what-is-ppm-schedule", type: "operation" },
        { title: "Office Facilities Management", url: "/sectors/offices", type: "sector" },
        { title: "Industrial & Logistics FM", url: "/sectors/industrial-logistics", type: "sector" }
      ]}
      faqs={[
        {
          question: "What's the difference between Hard FM and Soft FM?",
          answer: "Hard FM covers technical building systems (electrical, HVAC, fire, plumbing) that require statutory maintenance. Soft FM covers non-technical services like cleaning, catering, and security."
        },
        {
          question: "Is Hard FM a legal requirement?",
          answer: "Yes. The Responsible Person must maintain building systems in safe working order under the Health and Safety at Work Act 1974, Electricity at Work Regulations 1989, and Fire Safety Order 2005."
        },
        {
          question: "How often should Hard FM systems be inspected?",
          answer: "Frequencies vary: fire alarms monthly, emergency lighting monthly, EICRs every 5 years (or annually in some sectors), lifts every 6 months, Legionella risk assessments quarterly."
        },
        {
          question: "Can I do Hard FM in-house?",
          answer: "Only if you employ suitably qualified engineers with relevant accreditations (e.g., 18th Edition electricians, Gas Safe engineers, F-Gas certified HVAC technicians). Most organisations outsource to specialist providers."
        },
        {
          question: "What happens if I don't maintain Hard FM systems?",
          answer: "You risk prosecution, voided insurance, life-safety incidents, and operational downtime. The HSE can issue Improvement or Prohibition Notices, and fines are unlimited for serious breaches."
        }
      ]}
    />
  );
}
