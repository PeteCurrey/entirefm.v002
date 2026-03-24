"use client";

import { ResourceArticleTemplate } from '@/components/resources/ResourceArticleTemplate';

export default function WhatIsAnEICR() {
  return (
    <ResourceArticleTemplate
      title="What is an EICR? | Electrical Installation Condition Report Explained"
      metaDescription="An EICR is a comprehensive electrical safety inspection required by law for commercial and rental properties. Learn what's tested, who needs one, and how often they're required."
      keywords={[
        'eicr',
        'electrical installation condition report',
        'fixed wire testing',
        'electrical safety certificate',
        'electrical compliance',
        'periodic electrical inspection',
        'bs 7671',
        '18th edition'
      ]}
      category="Compliance Essentials"
      heroTitle="What is an EICR?"
      heroDescription="An Electrical Installation Condition Report (EICR) is a comprehensive safety inspection of a building's fixed electrical systems, required by law to identify faults, deterioration, and non-compliance with BS 7671 wiring regulations."
      publishDate="2025-01-15"
      readTime="8 min"
      introduction={[
        "An EICR (Electrical Installation Condition Report) is the formal name for what many call 'fixed wire testing' or 'periodic electrical inspection'.",
        "It's a detailed inspection and testing of a building's electrical installation—everything from the incoming mains supply to distribution boards, circuits, sockets, lighting, and earthing systems.",
        "EICRs are a legal requirement under the Electricity at Work Regulations 1989 and are mandatory for landlords, employers, and building owners to ensure electrical safety and compliance with BS 7671 (the IET Wiring Regulations)."
      ]}
      keyDefinition={{
        term: "EICR (Electrical Installation Condition Report)",
        definition: "A detailed inspection and testing report of a building's fixed electrical installation, carried out by a qualified electrician to identify defects, deterioration, and non-compliance with BS 7671 wiring regulations."
      }}
      sections={[
        {
          title: "What Does an EICR Test?",
          content: [
            "An EICR inspects and tests the entire fixed electrical installation. This includes:",
            "**Consumer Units & Distribution Boards**: Checking for correct sizing, labelling, RCD protection, and compliance with 18th Edition amendments.",
            "**Earthing & Bonding**: Verifying earth continuity, equipotential bonding, and earth loop impedance values.",
            "**Wiring & Circuits**: Inspecting cable condition, insulation resistance, polarity, and circuit integrity.",
            "**Sockets & Switches**: Testing for correct wiring, earth continuity, and safe operation.",
            "**Fixed Appliances**: Inspecting hard-wired equipment like boilers, immersion heaters, and emergency lighting.",
            "**Safety Devices**: Testing RCDs (Residual Current Devices) and MCBs (Miniature Circuit Breakers) for correct operation and trip times.",
            "**Protective Measures**: Checking fault protection, overcurrent protection, and compliance with BS 7671 requirements.",
            "The inspection is both visual (spotting damage, corrosion, overheating) and test-based (using calibrated instruments to measure resistance, voltage, and continuity)."
          ]
        },
        {
          title: "Who Needs an EICR?",
          content: [
            "EICRs are required by:",
            "**Landlords**: Mandatory for all private rental properties in England (every 5 years), Scotland, and Wales. Commercial landlords must also provide EICRs to tenants.",
            "**Employers**: Under the Electricity at Work Regulations 1989, employers must ensure electrical systems are safe—regular EICRs demonstrate compliance.",
            "**Building Owners**: Anyone responsible for non-domestic premises (offices, factories, shops, schools, hospitals) must arrange periodic electrical inspections.",
            "**Property Transactions**: Some mortgage lenders and insurers require EICRs before lending or providing cover.",
            "Failure to provide an EICR when required is a criminal offence under the Electrical Safety Standards in the Private Rented Sector (England) Regulations 2020."
          ]
        },
        {
          title: "How Often Are EICRs Required?",
          content: [
            "EICR frequencies depend on the property type and use:",
            "**Domestic Rental Properties**: Every 5 years (England, Scotland, Wales).",
            "**Commercial Offices**: Every 5 years.",
            "**Industrial Premises**: Every 3 years.",
            "**Educational Establishments**: Every 5 years.",
            "**Healthcare & Care Homes**: Annually.",
            "**Leisure & Entertainment Venues**: Every 3 years.",
            "**Construction & Demolition Sites**: Every 3 months.",
            "These are standard industry frequencies based on IET Guidance Note 3. Higher-risk environments or older installations may require more frequent inspections."
          ]
        },
        {
          title: "What Do EICR Codes Mean?",
          content: [
            "Every EICR uses a coding system to classify faults and observations:",
            "**C1 – Danger Present**: Immediate risk of injury or fire. The installation is unsafe and must be isolated until fixed. Examples: exposed live parts, missing RCD protection.",
            "**C2 – Potentially Dangerous**: Urgent remedial action required. Non-compliance that could become dangerous. Examples: lack of bonding, incorrect cable sizing, inadequate earthing.",
            "**C3 – Improvement Recommended**: Non-urgent recommendations for improved safety or compliance. Examples: missing circuit labelling, older accessories.",
            "**FI – Further Investigation**: An issue requiring specialist assessment. Examples: suspected cable damage hidden in walls.",
            "**Satisfactory**: The installation meets BS 7671 requirements and is safe for continued use.",
            "A 'satisfactory' EICR means no C1 or C2 faults. Any C1 or C2 codes result in an 'unsatisfactory' report, requiring immediate or urgent remedial works."
          ]
        },
        {
          title: "Who Can Carry Out an EICR?",
          content: [
            "Only a qualified, competent electrician can carry out an EICR. They must:",
            "• Hold 18th Edition (BS 7671) qualifications",
            "• Be trained in inspection and testing (e.g., City & Guilds 2391 or equivalent)",
            "• Have appropriate public liability and professional indemnity insurance",
            "• Use calibrated test equipment (megger, earth loop impedance tester, RCD tester)",
            "Electrical contractors should be registered with a competent person scheme (e.g., NICEIC, NAPIT, ELECSA). Never use unqualified contractors—invalid EICRs have no legal standing and leave you exposed to prosecution."
          ]
        }
      ]}
      complianceFramework={{
        laws: [
          "Electricity at Work Regulations 1989",
          "Electrical Safety Standards in the Private Rented Sector (England) Regulations 2020",
          "Health and Safety at Work Act 1974",
          "Housing Act 2004 (HHSRS – Hazards including electrical safety)"
        ],
        standards: [
          "BS 7671:2018+A2:2022 (18th Edition IET Wiring Regulations)",
          "IET Guidance Note 3: Inspection & Testing",
          "IET Code of Practice for In-Service Inspection and Testing"
        ],
        responsiblePerson: "Building owner, landlord, employer, or managing agent—anyone with legal control over the electrical installation.",
        frequency: "Every 5 years for domestic rental and commercial offices. Every 3 years for industrial sites. Annually for healthcare premises. Every 3 months for construction sites."
      }}
      operationalImpact={[
        "Identifies electrical hazards before they cause fires or injuries",
        "Demonstrates compliance with Electricity at Work Regulations 1989",
        "Maintains building insurance validity (many insurers require EICRs)",
        "Supports property valuations and tenant confidence",
        "Prevents prosecution and enforcement action by HSE or local authorities"
      ]}
      risksIfIgnored={[
        "Prosecution under Electricity at Work Regulations or Electrical Safety Standards",
        "Unlimited fines and imprisonment for serious breaches",
        "Electrical fires causing property damage, injury, or death",
        "Voided insurance policies if no EICR is in place",
        "Tenant compensation claims and rent repayment orders (landlords)",
        "Prohibition notices forcing business closure until remedial works completed"
      ]}
      howEntireFMHelps={{
        title: "How EntireFM Delivers EICR Compliance",
        points: [
          "Fully qualified 18th Edition electricians with City & Guilds 2391 inspection and testing qualifications",
          "Comprehensive EICRs with clear, plain-English reports and photographic evidence",
          "Digital compliance platform: automated EICR reminders, certificate storage, and audit trails",
          "Remedial works quoted and completed in-house—no subcontractor delays",
          "Priority scheduling for urgent C1 and C2 faults",
          "Out-of-hours testing available to minimise business disruption"
        ]
      }}
      relatedLinks={[
        { title: "Electrical Compliance", url: "/services/electrical-compliance", type: "service" },
        { title: "Electrical Services", url: "/services/electrical", type: "service" },
        { title: "Emergency Lighting", url: "/services/emergency-lighting", type: "service" },
        { title: "Planned Preventative Maintenance (PPM)", url: "/services/ppm", type: "service" },
        { title: "What is Statutory Maintenance?", url: "/resources/what-is-statutory-maintenance", type: "operation" },
        { title: "How to Read an EICR Report", url: "/resources/how-to-read-an-eicr", type: "operation" },
        { title: "Office Facilities Management", url: "/sectors/offices", type: "sector" },
        { title: "Industrial & Logistics FM", url: "/sectors/industrial-logistics", type: "sector" }
      ]}
      faqs={[
        {
          question: "How long does an EICR take?",
          answer: "It depends on the size and complexity of the installation. A small office might take 2–4 hours. A large industrial site could take 2–3 days. Testing is usually scheduled out-of-hours to avoid disruption."
        },
        {
          question: "What happens if my EICR fails?",
          answer: "Any C1 (danger present) or C2 (potentially dangerous) faults result in an 'unsatisfactory' report. You must arrange remedial works immediately (C1) or urgently (C2). Once fixed, a retest is carried out to issue a satisfactory certificate."
        },
        {
          question: "Is an EICR the same as PAT testing?",
          answer: "No. An EICR tests the fixed electrical installation (wiring, sockets, distribution boards). PAT testing checks portable appliances (kettles, computers, extension leads). Both are important, but they're different."
        },
        {
          question: "Do I need an EICR if the building is new?",
          answer: "New buildings should have an Electrical Installation Certificate (EIC) issued at completion. However, even new installations should be periodically inspected—5 years is the standard first EICR interval."
        },
        {
          question: "Can I rent out a property without an EICR?",
          answer: "No. Since June 2020, all private rental properties in England must have a valid EICR before a new tenancy starts. Existing tenancies must have an EICR by April 2021. Failure is a criminal offence with fines up to £30,000."
        }
      ]}
    />
  );
}
