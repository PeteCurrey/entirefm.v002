"use client";

import { ResourceArticleTemplate } from '@/components/resources/ResourceArticleTemplate';

export default function WhatIsPPM() {
  return (
    <ResourceArticleTemplate
      title="What is a PPM Schedule? | Planned Preventative Maintenance Explained"
      metaDescription="A PPM schedule is a structured maintenance plan that prevents breakdowns, ensures compliance, and extends asset life. Learn how Planned Preventative Maintenance works and why it's critical for building operations."
      keywords={[
        'ppm schedule',
        'planned preventative maintenance',
        'preventive maintenance',
        'maintenance planning',
        'building maintenance',
        'asset management',
        'facilities maintenance',
        'statutory maintenance'
      ]}
      category="Compliance Essentials"
      heroTitle="What is a PPM Schedule?"
      heroDescription="A Planned Preventative Maintenance (PPM) schedule is a proactive maintenance strategy that prevents equipment failures, ensures statutory compliance, and optimises asset performance through scheduled inspections and servicing."
      publishDate="2025-01-15"
      readTime="7 min"
      introduction={[
        "A PPM (Planned Preventative Maintenance) schedule is a structured plan of regular inspections, servicing, and testing of building systems and equipment to prevent breakdowns before they happen.",
        "Unlike reactive maintenance (fixing things when they break), PPM is proactive—catching problems early, extending asset lifespan, ensuring statutory compliance, and reducing long-term costs.",
        "For building owners and facilities managers, PPM is not optional: it's a legal requirement for life-safety systems and a commercial necessity for operational efficiency."
      ]}
      keyDefinition={{
        term: "Planned Preventative Maintenance (PPM)",
        definition: "A systematic, scheduled approach to maintaining building systems and equipment through regular inspections, testing, cleaning, and servicing—designed to prevent failures, ensure compliance, and maximise asset life."
      }}
      sections={[
        {
          title: "What Does a PPM Schedule Include?",
          content: [
            "A comprehensive PPM schedule covers all critical building systems, with tasks scheduled at frequencies determined by:",
            "• Statutory requirements (e.g., monthly fire alarm tests, annual EICRs)",
            "• Manufacturer recommendations (e.g., quarterly AHU filter changes)",
            "• Risk assessments (e.g., high-priority systems get more frequent checks)",
            "• Asset criticality (e.g., backup generators may be tested weekly)",
            "**Typical PPM activities include:**",
            "**Fire Safety**: Monthly fire alarm tests, emergency lighting tests, annual fire extinguisher servicing, quarterly sprinkler inspections.",
            "**Electrical**: Visual inspections, thermal imaging, fixed wire testing (EICRs), distribution board checks, emergency lighting battery tests.",
            "**HVAC**: Filter changes, belt inspections, refrigerant leak checks (F-Gas), temperature calibrations, TM44 energy inspections.",
            "**Water & Plumbing**: Temperature monitoring (Legionella control), TMV testing, tank inspections, water treatment dosing.",
            "**Lifts & Access Equipment**: Six-monthly LOLER inspections, monthly safety checks, lubrication, door sensor testing.",
            "**Building Fabric**: Roof inspections, gutter cleaning, façade checks, window maintenance, door hardware testing.",
            "Each task is logged, reported, and tracked to demonstrate compliance and asset condition."
          ]
        },
        {
          title: "PPM vs Reactive Maintenance",
          content: [
            "**Planned Preventative Maintenance (PPM)**: Scheduled, proactive, prevents failures before they occur. Costs are predictable and budgetable.",
            "**Reactive Maintenance**: Unplanned, emergency repairs after something breaks. Costs are unpredictable, often 3–5x higher than PPM.",
            "Most facilities operate on a split: 70–80% PPM, 20–30% reactive. The goal is to maximise PPM to minimise reactive callouts, downtime, and life-safety risks."
          ]
        },
        {
          title: "Why PPM Matters",
          content: [
            "PPM is the foundation of effective facilities management. It delivers:",
            "**Statutory Compliance**: Many PPM tasks are legal requirements (fire alarm tests, EICRs, lift inspections). Without them, you risk prosecution.",
            "**Cost Savings**: Preventative maintenance is cheaper than emergency repairs. A £100 PPM visit can prevent a £5,000 breakdown.",
            "**Asset Longevity**: Regular servicing extends equipment lifespan. A well-maintained boiler lasts 15–20 years; a neglected one fails in 7–10.",
            "**Operational Continuity**: Scheduled maintenance happens at convenient times. Breakdowns don't. PPM reduces unplanned downtime.",
            "**Insurance Validity**: Insurers require evidence of adequate maintenance. Poor PPM records can void claims.",
            "**Energy Efficiency**: Clean filters, calibrated controls, and optimised systems reduce energy waste and support ESG targets.",
            "For landlords, PPM protects asset value. For occupiers, it ensures a safe, productive environment. For facilities managers, it provides audit trails and peace of mind."
          ]
        },
        {
          title: "How Do I Build a PPM Schedule?",
          content: [
            "Creating an effective PPM schedule requires:",
            "**1. Asset Register**: List all building systems, equipment, and life-safety assets with locations, serial numbers, and installation dates.",
            "**2. Statutory Requirements**: Identify all legally mandated inspections (fire, electrical, gas, water, lifts) and their frequencies.",
            "**3. Manufacturer Guidance**: Consult equipment manuals for recommended service intervals and maintenance tasks.",
            "**4. Risk Assessment**: Prioritise critical systems (e.g., emergency power, fire alarms) for more frequent checks.",
            "**5. Resource Planning**: Assign tasks to qualified engineers with appropriate accreditations (e.g., 18th Edition, Gas Safe, F-Gas).",
            "**6. Digital Tracking**: Use CAFM software or compliance platforms to schedule tasks, send reminders, and store certificates.",
            "EntireFM builds bespoke PPM schedules for every client, aligned to their asset base, operational needs, and compliance obligations."
          ]
        }
      ]}
      complianceFramework={{
        laws: [
          "Health and Safety at Work Act 1974",
          "Regulatory Reform (Fire Safety) Order 2005",
          "Electricity at Work Regulations 1989",
          "Gas Safety (Installation and Use) Regulations 1998",
          "LOLER (Lifting Operations and Lifting Equipment Regulations) 1998"
        ],
        standards: [
          "BS 5839 (Fire Detection and Alarm Systems)",
          "BS 5266 (Emergency Lighting)",
          "BS 7671 (Electrical Wiring Regulations)",
          "ACOP L8 (Legionella Control)",
          "TM44 (Air Conditioning Inspections)"
        ],
        responsiblePerson: "Building owner, landlord, facilities manager, or appointed Duty Holder responsible for maintaining safe, compliant building systems.",
        frequency: "Varies by system: monthly fire alarm tests, quarterly HVAC checks, annual EICRs, six-monthly lift inspections. Statutory tasks are non-negotiable."
      }}
      operationalImpact={[
        "Prevents unplanned breakdowns and emergency callouts",
        "Ensures continuous operation of heating, cooling, lighting, and power",
        "Reduces reactive maintenance costs by 30–50%",
        "Extends asset lifespan and protects capital investment",
        "Maintains building insurance validity and audit-ready compliance records"
      ]}
      risksIfIgnored={[
        "Increased breakdowns and emergency repair costs",
        "Prosecution for failing to meet statutory maintenance requirements",
        "Voided insurance policies due to poor maintenance records",
        "Life-safety incidents from undetected faults",
        "Reduced asset lifespan and premature replacement costs",
        "Operational downtime affecting tenants and occupiers"
      ]}
      howEntireFMHelps={{
        title: "How EntireFM Delivers PPM Excellence",
        points: [
          "Bespoke PPM schedules tailored to your asset base, statutory obligations, and operational needs",
          "Fully accredited engineers: 18th Edition electricians, Gas Safe, F-Gas certified, IOSH trained",
          "Digital compliance platform: automated scheduling, live asset registers, test certificates, audit trails",
          "Proactive risk reporting: we flag emerging issues before they become breakdowns",
          "24/7 reactive support: if something does fail, we're there within 4 hours (emergency)",
          "Single-point accountability: no subcontractor fragmentation, no excuses"
        ]
      }}
      relatedLinks={[
        { title: "Planned Preventative Maintenance (PPM)", url: "/services/ppm", type: "service" },
        { title: "Hard Services FM", url: "/services/hard-services-fm", type: "service" },
        { title: "Electrical Compliance", url: "/services/electrical-compliance", type: "service" },
        { title: "HVAC Compliance", url: "/services/hvac-compliance", type: "service" },
        { title: "Fire Safety Services", url: "/services/fire-safety", type: "service" },
        { title: "What is Statutory Maintenance?", url: "/resources/what-is-statutory-maintenance", type: "operation" },
        { title: "PPM Delivery", url: "/fm-operations/ppm-delivery", type: "operation" },
        { title: "Reactive Maintenance", url: "/fm-operations/reactive-maintenance", type: "operation" },
        { title: "Office Facilities Management", url: "/sectors/offices", type: "sector" }
      ]}
      faqs={[
        {
          question: "How often should PPM be carried out?",
          answer: "It depends on the system. Fire alarms: monthly. Emergency lighting: monthly. EICRs: every 5 years (or annually in some sectors). HVAC filters: quarterly. Lifts: every 6 months. Your PPM schedule must align with statutory requirements and manufacturer guidance."
        },
        {
          question: "Can I reduce PPM frequency to save money?",
          answer: "Not for statutory tasks—those are legal requirements. For non-statutory tasks, you can adjust frequencies based on risk, but cutting PPM usually increases reactive costs and shortens asset life. False economy."
        },
        {
          question: "What's the difference between PPM and reactive maintenance?",
          answer: "PPM is scheduled, proactive, and prevents failures. Reactive maintenance is unplanned, emergency repairs after something breaks. PPM is cheaper, safer, and keeps operations running."
        },
        {
          question: "How do I prove PPM compliance?",
          answer: "Through documented records: test certificates, service logs, inspection reports, risk assessments, and competency evidence. Digital platforms provide centralised, audit-ready records with automated reminders."
        },
        {
          question: "Can I do PPM in-house?",
          answer: "Only if you employ suitably qualified engineers with up-to-date accreditations (18th Edition, Gas Safe, F-Gas, IOSH). Most organisations outsource PPM to specialist providers for compliance assurance and resource efficiency."
        }
      ]}
    />
  );
}
