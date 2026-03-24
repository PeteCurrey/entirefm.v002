"use client";

import { ResourceArticleTemplate } from '@/components/resources/ResourceArticleTemplate';

export default function WhatIsATM44() {
  return (
    <ResourceArticleTemplate
      title="What is a TM44 Inspection? | Air Conditioning Energy Efficiency Guide"
      metaDescription="TM44 is a mandatory energy efficiency inspection for air conditioning systems over 12kW. Learn who needs one, how often, penalties for non-compliance, and what's inspected."
      keywords={[
        'tm44',
        'tm44 inspection',
        'air conditioning inspection',
        'energy efficiency',
        'hvac compliance',
        'building regulations part l',
        'air conditioning energy assessment',
        'f-gas regulations'
      ]}
      category="Compliance Essentials"
      heroTitle="What is a TM44 Inspection?"
      heroDescription="TM44 is a mandatory energy efficiency inspection for air conditioning systems over 12kW effective rated output, required every 5 years under Building Regulations Part L to improve energy performance and reduce carbon emissions."
      publishDate="2025-01-15"
      readTime="7 min"
      introduction={[
        "TM44 is shorthand for the CIBSE Technical Memorandum 44—a standard for inspecting air conditioning systems to assess energy efficiency and compliance with Building Regulations Part L.",
        "If your building has air conditioning with a combined effective rated output exceeding 12kW (roughly equivalent to five domestic air conditioning units), you are legally required to have a TM44 inspection every five years.",
        "The inspection identifies inefficiencies, maintenance issues, and opportunities to reduce energy consumption and carbon emissions. Non-compliance can result in fines up to £300 for small systems and £1,000+ for larger installations."
      ]}
      keyDefinition={{
        term: "TM44 Inspection",
        definition: "A mandatory energy efficiency assessment of air conditioning systems over 12kW effective rated output, required every 5 years under the Energy Performance of Buildings Regulations 2012 (Building Regulations Part L)."
      }}
      sections={[
        {
          title: "What Does a TM44 Inspection Cover?",
          content: [
            "A TM44 inspection assesses the energy efficiency, condition, and sizing of your air conditioning system. Key elements include:",
            "**System Overview**: Recording system type (split, VRF, chilled water), age, capacity, and refrigerant type.",
            "**Energy Efficiency Assessment**: Comparing actual energy consumption against expected performance. Identifying inefficiencies like poor controls, oversized systems, or lack of zoning.",
            "**Maintenance & Condition**: Checking filter cleanliness, refrigerant charge, condenser coils, fan operation, and overall system health.",
            "**Controls & Zoning**: Assessing whether temperature controls, timers, and zoning are optimised for energy efficiency.",
            "**Recommendations**: Providing actionable advice on improvements—filter changes, system upgrades, better controls, or replacement if the system is obsolete.",
            "The inspection is non-invasive and typically takes 1–3 hours depending on system complexity. The inspector will produce a written report with recommendations and an energy efficiency rating."
          ]
        },
        {
          title: "Who Needs a TM44 Inspection?",
          content: [
            "TM44 inspections are required for:",
            "**Any building with air conditioning systems over 12kW effective rated output**. This includes:",
            "• Office buildings",
            "• Retail units and shopping centres",
            "• Hotels and leisure facilities",
            "• Industrial and warehouse facilities",
            "• Healthcare premises",
            "• Educational establishments",
            "**Effective rated output** is the combined cooling capacity of all air conditioning units in the building. A single large VRF system or multiple smaller split units can trigger the requirement.",
            "The inspection must be carried out by an accredited energy assessor with TM44 qualifications (typically holding CIBSE Low Carbon Energy Assessor or equivalent)."
          ]
        },
        {
          title: "How Often Are TM44 Inspections Required?",
          content: [
            "**First inspection**: Within the first 12 months of installation or operation for new systems over 12kW.",
            "**Subsequent inspections**: Every 5 years thereafter.",
            "**After major works**: If the system is upgraded, extended, or significantly modified, a new inspection may be required.",
            "The inspection frequency is set by the Energy Performance of Buildings Regulations 2012. Unlike EICRs or fire alarm tests, there's no grace period—inspections must be completed on time to avoid penalties."
          ]
        },
        {
          title: "What Are the Penalties for Non-Compliance?",
          content: [
            "Failure to arrange a TM44 inspection is a breach of the Energy Performance of Buildings Regulations 2012. Penalties are enforced by local authority trading standards and include:",
            "**Small systems (12–70kW)**: Fixed penalty notice of £300.",
            "**Larger systems (70kW+)**: Fixed penalty notice starting at £1,000, increasing with system size.",
            "**Repeat offences**: Higher fines and potential enforcement action.",
            "Beyond fines, non-compliance can:",
            "• Affect building valuations and Energy Performance Certificate (EPC) ratings",
            "• Trigger insurance questions about maintenance adequacy",
            "• Create reputational risks during ESG audits or tenant due diligence",
            "Many commercial leases now include TM44 obligations. Tenants or landlords (depending on lease terms) are responsible for arranging inspections."
          ]
        },
        {
          title: "TM44 vs F-Gas Inspections",
          content: [
            "TM44 and F-Gas inspections are often confused, but they are different:",
            "**TM44**: Energy efficiency assessment. Required every 5 years. Focuses on system performance, controls, and energy use.",
            "**F-Gas Inspections**: Leak detection checks required under the F-Gas Regulations 2015. Frequency depends on refrigerant charge size (annually or more frequently for large systems).",
            "Both are legal requirements, but they serve different purposes. Many facilities managers schedule them together for efficiency."
          ]
        }
      ]}
      complianceFramework={{
        laws: [
          "Energy Performance of Buildings Regulations 2012",
          "Building Regulations Part L (Conservation of Fuel and Power)",
          "F-Gas Regulations 2015 (separate but related—leak detection)"
        ],
        standards: [
          "CIBSE TM44 (Inspection of Air Conditioning Systems)",
          "BS EN 14511 (Air Conditioners and Heat Pumps)",
          "BSRIA BG 50 (HVAC Commissioning Code)"
        ],
        responsiblePerson: "Building owner, landlord, or tenant (depending on lease terms). The person with day-to-day control over the air conditioning system is responsible for arranging TM44 inspections.",
        frequency: "First inspection within 12 months of installation. Subsequent inspections every 5 years."
      }}
      operationalImpact={[
        "Identifies energy inefficiencies and reduces running costs",
        "Extends air conditioning system lifespan through better maintenance",
        "Supports carbon reduction targets and ESG reporting",
        "Improves indoor air quality and occupant comfort",
        "Maintains compliance with Building Regulations Part L"
      ]}
      risksIfIgnored={[
        "Fixed penalty notices: £300 for small systems, £1,000+ for larger systems",
        "Increased energy costs from inefficient, poorly maintained systems",
        "Premature system failures from lack of maintenance",
        "Poor EPC ratings affecting property valuations",
        "Non-compliance with lease obligations or ESG commitments"
      ]}
      howEntireFMHelps={{
        title: "How EntireFM Delivers TM44 Compliance",
        points: [
          "Accredited TM44 energy assessors with CIBSE Low Carbon Energy Assessor qualifications",
          "Combined TM44 and F-Gas inspections for efficiency and cost savings",
          "Plain-English reports with actionable energy-saving recommendations",
          "Digital compliance platform: automated TM44 reminders, certificate storage, audit trails",
          "In-house HVAC engineers: we can implement TM44 recommendations immediately—no subcontractor delays",
          "Priority scheduling to meet 5-year deadlines and avoid penalties"
        ]
      }}
      relatedLinks={[
        { title: "HVAC Compliance", url: "/services/hvac-compliance", type: "service" },
        { title: "HVAC Services", url: "/services/hvac", type: "service" },
        { title: "Energy Optimisation", url: "/services/energy-optimisation", type: "service" },
        { title: "BMSOptimisation", url: "/services/bms-optimisation", type: "service" },
        { title: "What is F-Gas Compliance?", url: "/resources/what-is-fgas-compliance", type: "operation" },
        { title: "Office Facilities Management", url: "/sectors/offices", type: "sector" },
        { title: "Industrial & Logistics FM", url: "/sectors/industrial-logistics", type: "sector" }
      ]}
      faqs={[
        {
          question: "How do I know if my system is over 12kW?",
          answer: "Check the manufacturer's data plates on the air conditioning units. Add up the effective rated output (cooling capacity) of all units. If the total exceeds 12kW, you need a TM44 inspection. Your HVAC contractor can confirm if you're unsure."
        },
        {
          question: "Can I do a TM44 inspection in-house?",
          answer: "No. TM44 inspections must be carried out by an accredited energy assessor with CIBSE Low Carbon Energy Assessor qualifications (or equivalent). DIY inspections have no legal standing."
        },
        {
          question: "What's the difference between TM44 and F-Gas inspections?",
          answer: "TM44 is an energy efficiency assessment required every 5 years. F-Gas inspections are leak detection checks required annually (or more frequently depending on refrigerant charge). Both are legal requirements but serve different purposes."
        },
        {
          question: "What happens if my TM44 report highlights problems?",
          answer: "The report will include recommendations for improvements (e.g., filter changes, control upgrades, system replacement). You're not legally required to implement them immediately, but ignoring them will increase energy costs and risk premature system failure."
        },
        {
          question: "How much does a TM44 inspection cost?",
          answer: "Typically £200–£500 for a standard office system. Larger, more complex installations (e.g., VRF systems in multi-storey buildings) may cost £1,000+. Costs are often bundled with F-Gas inspections for efficiency."
        }
      ]}
    />
  );
}
