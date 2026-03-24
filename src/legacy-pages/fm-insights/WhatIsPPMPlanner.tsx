"use client";

import { ResourceArticleTemplate } from '@/components/resources/ResourceArticleTemplate';

export default function WhatIsPPMPlanner() {
  return (
    <ResourceArticleTemplate
      title="What Is a PPM Planner? | Planned Preventative Maintenance Planning"
      metaDescription="A PPM planner is a structured document that defines what maintenance needs to happen, when, and by whom. Learn how PPM planners underpin compliance and reduce lifecycle costs."
      keywords={[
        'ppm planner',
        'ppm planning',
        'maintenance planner',
        'planned preventative maintenance',
        'maintenance schedule',
        'asset maintenance planning',
        'facilities maintenance',
        'statutory maintenance'
      ]}
      category="FM Operations"
      heroTitle="What Is a PPM Planner?"
      heroDescription="A PPM planner is the structured backbone of building maintenance—defining which assets need servicing, at what intervals, by whom, and to what standard. It transforms reactive firefighting into proactive asset management."
      publishDate="2025-01-20"
      readTime="8 min"
      introduction={[
        "A PPM (Planned Preventative Maintenance) planner is a comprehensive document or system that maps every maintenance task required across an estate—statutory and non-statutory—into a logical, schedulable framework.",
        "Without a planner, maintenance becomes reactive, disjointed, and expensive. With one, you gain visibility, control, and the ability to budget, resource, and audit your building operations properly.",
        "For estates with multiple assets, complex compliance obligations, or regulatory scrutiny, a PPM planner isn't optional—it's the foundation of operational governance."
      ]}
      keyDefinition={{
        term: "PPM Planner",
        definition: "A structured maintenance planning document or system that catalogues all assets, defines required service tasks, assigns frequencies based on statutory and operational requirements, and enables scheduling, tracking, and compliance reporting."
      }}
      sections={[
        {
          title: "What a PPM Planner Includes",
          content: [
            "A robust PPM planner is more than a spreadsheet. It captures:",
            "**Asset List**: Every piece of equipment requiring maintenance—HVAC units, fire panels, lifts, electrical distribution boards, water systems, generators, doors, and more. Each asset is identified by location, type, and criticality.",
            "**Service Intervals**: How often each asset needs attention—daily, weekly, monthly, quarterly, six-monthly, or annually. Frequencies are driven by statutory requirements, manufacturer recommendations, and risk assessments.",
            "**Statutory vs Non-Statutory Tasks**: Clear distinction between legally mandated inspections (EICRs, fire alarm testing, LOLER examinations) and discretionary maintenance that protects asset performance.",
            "**Scheduling Logic**: The planner sequences tasks to avoid clashes, spread workload evenly, and align with site access constraints (tenant operating hours, shutdowns, permit requirements).",
            "**Engineer Skill Requirements**: Each task is mapped to the competencies required—18th Edition electricians for EICRs, Gas Safe engineers for boiler servicing, F-Gas technicians for refrigeration, IPAF-certified operatives for height work.",
            "**Risk Categories**: Assets are prioritised by criticality. Life-safety systems (fire, emergency lighting, lifts) sit at the top; cosmetic maintenance sits lower. This drives resource allocation and escalation protocols."
          ]
        },
        {
          title: "Why It Matters",
          content: [
            "A PPM planner delivers tangible operational and financial benefits:",
            "**Reduces Lifecycle Costs**: Proactive maintenance is cheaper than reactive repair. Catching a failing motor bearing in a quarterly check costs £200; replacing the motor after a burnout costs £3,000 plus downtime.",
            "**Cuts Reactive Work**: Well-planned PPM reduces unplanned callouts by 30–50%. Fewer emergencies mean lower costs, less disruption, and happier tenants.",
            "**Supports Capital Planning**: By tracking asset condition and service history, a planner informs replacement cycles. You can budget for boiler renewal in Year 7, not be surprised when it fails in Year 5.",
            "**Enables Procurement Decisions**: With clear visibility of task volumes, frequencies, and skill requirements, you can tender maintenance contracts accurately and compare provider proposals on a like-for-like basis.",
            "**Demonstrates Governance**: Auditors, insurers, and regulators expect to see structured maintenance evidence. A planner provides the framework; the completed tasks provide the proof."
          ]
        },
        {
          title: "Regulatory Links",
          content: [
            "PPM planners must account for all statutory obligations applicable to the estate. Key regulations include:",
            "**EICR (Electrical Installation Condition Report)**: Fixed electrical installations must be tested at intervals determined by installation type and use—typically every 5 years for commercial premises, more frequently for higher-risk environments.",
            "**Gas Safe**: All gas appliances must be installed and maintained by Gas Safe registered engineers. Annual servicing and safety checks are standard for commercial gas systems.",
            "**LOLER (Lifting Operations and Lifting Equipment Regulations 1998)**: Lifts, hoists, and lifting accessories require thorough examination at least every 6 or 12 months depending on equipment type.",
            "**Fire Damper Testing**: Fire dampers must be tested annually to ensure they close correctly and maintain compartmentation integrity under BS 9999 and the Regulatory Reform (Fire Safety) Order 2005.",
            "**AOV (Automatic Opening Vent) Servicing**: Smoke ventilation systems require weekly functional tests and annual servicing to ensure they operate correctly in a fire event.",
            "**L8 ACOP (Legionella Control)**: Water systems must be risk-assessed and monitored in accordance with HSG274 and ACOP L8. Monthly temperature checks, quarterly showerhead disinfection, and annual tank inspections are typical requirements.",
            "A compliant PPM planner captures every statutory task, assigns correct frequencies, and ensures no obligation is overlooked."
          ]
        },
        {
          title: "How EntireFM Builds PPM Planners",
          content: [
            "EntireFM doesn't use generic templates. We build PPM planners from the ground up, tailored to each estate:",
            "**Asset Survey**: We walk every site, catalogue every asset, and verify current condition. No assumptions, no inherited spreadsheets with missing data.",
            "**Regulatory Mapping**: We identify every statutory obligation applicable to your portfolio—by asset type, sector, and jurisdiction. Nothing is left to chance.",
            "**Risk Prioritisation**: We assign criticality ratings based on life-safety impact, operational dependency, and replacement cost. This shapes scheduling and escalation.",
            "**Resource Modelling**: We calculate engineer hours, skill requirements, and access constraints to build a realistic, deliverable schedule—not a theoretical wishlist.",
            "**Digital Integration**: All planners feed into our Field Operations Intelligence platform. Tasks are scheduled, dispatched to mobile engineers, completed with digital evidence, and reported in real time. Certificates are attached to assets. Compliance dashboards show status at a glance.",
            "The result: a living PPM planner that adapts as your estate changes, with full audit trails and zero ambiguity about what's been done and what's due."
          ]
        }
      ]}
      complianceFramework={{
        laws: [
          "Health and Safety at Work Act 1974",
          "Regulatory Reform (Fire Safety) Order 2005",
          "Electricity at Work Regulations 1989",
          "Gas Safety (Installation and Use) Regulations 1998",
          "LOLER (Lifting Operations and Lifting Equipment Regulations) 1998",
          "ACOP L8 (Approved Code of Practice for Legionella Control)"
        ],
        standards: [
          "BS 9999 (Fire Safety in Buildings)",
          "BS 5839 (Fire Detection and Alarm Systems)",
          "BS 5266 (Emergency Lighting)",
          "BS 7671 (IET Wiring Regulations)",
          "SFG20 (Standard Maintenance Specification)",
          "HSG274 (Legionella Control in Hot and Cold Water Systems)"
        ],
        responsiblePerson: "Building owner, landlord, managing agent, or appointed Duty Holder responsible for ensuring maintenance is planned, executed, and evidenced to meet statutory and contractual obligations.",
        frequency: "PPM planners should be reviewed annually and updated whenever assets are added, removed, or modified. Task frequencies follow statutory requirements and manufacturer guidance."
      }}
      operationalImpact={[
        "Transforms maintenance from reactive firefighting to proactive asset management",
        "Provides visibility of all upcoming tasks, resource requirements, and budget implications",
        "Reduces unplanned downtime and emergency callout costs",
        "Supports accurate tendering and provider performance measurement",
        "Enables capital planning based on actual asset condition data"
      ]}
      risksIfIgnored={[
        "Statutory maintenance missed, leading to prosecution or enforcement action",
        "Insurance claims rejected due to lack of maintenance evidence",
        "Premature asset failure and unbudgeted capital expenditure",
        "Increased reactive maintenance costs (typically 3–5x PPM costs)",
        "Tenant complaints, void periods, and reputational damage",
        "Life-safety incidents from undetected equipment faults"
      ]}
      howEntireFMHelps={{
        title: "Request a PPM Review",
        points: [
          "Bespoke PPM planners built from verified asset data, not inherited spreadsheets",
          "Full statutory mapping across fire, electrical, water, gas, lifts, and building fabric",
          "Risk-prioritised scheduling aligned to SFG20 and sector-specific guidance",
          "Digital delivery via our Field Ops Intelligence platform with live compliance dashboards",
          "Accredited engineers: 18th Edition, Gas Safe, F-Gas, IPAF, IOSH",
          "Single-point accountability—no fragmented subcontractor chains"
        ]
      }}
      relatedLinks={[
        { title: "PPM & Asset Lifecycle Governance", url: "/services/ppm", type: "service" },
        { title: "PPM Delivery & Scheduling", url: "/fm-operations/ppm-delivery", type: "operation" },
        { title: "What Is a PPM Schedule?", url: "/fm-insights/what-is-ppm", type: "operation" },
        { title: "What Is Statutory Maintenance?", url: "/fm-insights/what-is-statutory-maintenance", type: "operation" },
        { title: "Hard Services FM", url: "/services/hard-services-fm", type: "service" },
        { title: "Electrical Compliance", url: "/services/electrical-compliance", type: "service" },
        { title: "HVAC Compliance", url: "/services/hvac-compliance", type: "service" },
        { title: "Fire Safety Services", url: "/services/fire-safety", type: "service" },
        { title: "Compliance Calendar", url: "/resources/compliance-calendar", type: "operation" }
      ]}
      faqs={[
        {
          question: "What's the difference between a PPM planner and a PPM schedule?",
          answer: "A PPM planner is the master document that defines all assets, tasks, and frequencies. A PPM schedule is the time-bound execution plan derived from the planner—showing what's due this week, month, or quarter. The planner is strategic; the schedule is operational."
        },
        {
          question: "How often should a PPM planner be updated?",
          answer: "At minimum, annually. In practice, planners should be updated whenever assets are added, removed, or modified, when regulations change, or when operational requirements shift. Digital planners make this easier than static spreadsheets."
        },
        {
          question: "Can I use a generic PPM template?",
          answer: "Generic templates are a starting point, but they rarely capture estate-specific nuances—unusual assets, sector-specific regulations, access constraints, or inherited compliance gaps. A bespoke planner built from verified asset data is always more reliable."
        },
        {
          question: "What software is used for PPM planning?",
          answer: "Options range from spreadsheets (basic) to CAFM platforms (Computer Aided Facilities Management) and specialist compliance systems. EntireFM uses our Field Operations Intelligence platform, which integrates asset registers, scheduling, mobile dispatch, and compliance reporting in one system."
        },
        {
          question: "How do I know if my current PPM planner is adequate?",
          answer: "Ask: Does it include every asset? Are statutory tasks clearly identified? Are frequencies based on regulations and manufacturer guidance? Is it updated when assets change? Can you produce audit-ready evidence? If any answer is no, it needs improvement."
        }
      ]}
    />
  );
}
