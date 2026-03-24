"use client";

import { ResourceArticleTemplate } from '@/components/resources/ResourceArticleTemplate';

export default function WhatIsFGasCompliance() {
  return (
    <ResourceArticleTemplate
      title="What is F-Gas Compliance? | Refrigerant Regulations Explained"
      metaDescription="F-Gas compliance covers legal requirements for refrigerant leak detection, engineer certification, and record-keeping for air conditioning and refrigeration systems. Learn who's responsible and how to stay compliant."
      keywords={[
        'f-gas compliance',
        'f-gas regulations',
        'refrigerant leak detection',
        'hvac compliance',
        'air conditioning regulations',
        'refrigeration compliance',
        'f-gas certificate',
        'refrigerant management'
      ]}
      category="Compliance Essentials"
      heroTitle="What is F-Gas Compliance?"
      heroDescription="F-Gas compliance ensures air conditioning and refrigeration systems are maintained to prevent refrigerant leaks, reduce environmental impact, and meet legal requirements under the F-Gas Regulations 2015."
      publishDate="2025-01-15"
      readTime="8 min"
      introduction={[
        "F-Gas (Fluorinated Gas) compliance refers to the legal obligations around the installation, maintenance, and servicing of air conditioning, refrigeration, and heat pump systems containing fluorinated greenhouse gases (HFCs, HCFCs, CFCs).",
        "These regulations exist because refrigerants have extremely high Global Warming Potential (GWP)—some are thousands of times more potent than CO2. Leaks contribute significantly to climate change, and uncontrolled refrigerant emissions violate environmental law.",
        "Under the F-Gas Regulations 2015 (as amended), operators of equipment containing F-gases must arrange regular leak checks, use certified engineers, keep detailed records, and report installations and disposals."
      ]}
      keyDefinition={{
        term: "F-Gas Compliance",
        definition: "Legal requirements for preventing, detecting, and managing refrigerant leaks from air conditioning, refrigeration, and heat pump systems under the F-Gas Regulations 2015 and EU Regulation 517/2014."
      }}
      sections={[
        {
          title: "What Are F-Gases?",
          content: [
            "Fluorinated gases (F-gases) are man-made refrigerants used in air conditioning, refrigeration, and heat pump systems. Common F-gases include:",
            "**HFCs (Hydrofluorocarbons)**: R410A, R134a, R407C—widely used in modern air conditioning.",
            "**HCFCs (Hydrochlorofluorocarbons)**: R22—being phased out due to ozone depletion.",
            "**CFCs (Chlorofluorocarbons)**: R12—banned since 2010.",
            "F-gases are extremely effective refrigerants but have high Global Warming Potential (GWP). For example:",
            "• R410A has a GWP of 2,088 (meaning 1kg has the same climate impact as 2,088kg of CO2)",
            "• R134a has a GWP of 1,430",
            "Because of this, strict regulations govern their use, handling, and disposal."
          ]
        },
        {
          title: "Who Needs to Comply with F-Gas Regulations?",
          content: [
            "Anyone who owns, operates, or maintains equipment containing F-gases must comply. This includes:",
            "**Building Owners & Landlords**: Responsible for air conditioning and refrigeration systems in their properties.",
            "**Facilities Managers**: Responsible for ensuring systems are maintained and leak-checked on schedule.",
            "**HVAC Contractors**: Must be F-Gas certified to install, service, or decommission equipment containing refrigerants.",
            "**Supermarkets & Cold Storage**: Responsible for large commercial refrigeration systems.",
            "**Data Centres**: Responsible for precision cooling systems.",
            "If your building has air conditioning, refrigeration, or a heat pump, F-Gas compliance applies to you."
          ]
        },
        {
          title: "What Are the Key F-Gas Requirements?",
          content: [
            "**1. Leak Detection Checks**: Systems must be inspected for leaks at regular intervals depending on refrigerant charge size:",
            "• **Less than 5 tonnes CO2 equivalent**: No mandatory leak checks (but recommended annually).",
            "• **5–50 tonnes CO2e**: Annual leak checks.",
            "• **50–500 tonnes CO2e**: Six-monthly leak checks.",
            "• **500+ tonnes CO2e**: Quarterly leak checks.",
            "• **Systems with automatic leak detection**: Inspection frequency can be halved.",
            "**2. F-Gas Certified Engineers**: Only engineers holding valid F-Gas certification can install, service, commission, or decommission equipment containing refrigerants.",
            "**3. Record Keeping**: Operators must maintain detailed records including:",
            "• Quantity and type of refrigerant installed",
            "• Leak checks and repairs",
            "• Refrigerant top-ups and recoveries",
            "• Engineer certification numbers",
            "• Equipment decommissioning and refrigerant disposal",
            "Records must be kept for at least 5 years.",
            "**4. Registration**: Systems containing 3kg+ of F-gas (or 5 tonnes CO2e+) must be registered on a certified database.",
            "**5. Leak Repairs**: If a leak is detected, it must be repaired within 14 days, and the system must be rechecked within one month."
          ]
        },
        {
          title: "What Are the Penalties for Non-Compliance?",
          content: [
            "F-Gas non-compliance is a criminal offence under the F-Gas Regulations 2015. Penalties include:",
            "**Unlimited fines** for serious breaches (e.g., venting refrigerant, using uncertified engineers).",
            "**Fixed penalty notices** of £200–£10,000 for record-keeping failures or missed leak checks.",
            "**Prosecution** by the Environment Agency or local authorities.",
            "**Voided insurance** if systems are not properly maintained.",
            "High-profile prosecutions have resulted in fines exceeding £50,000 for companies that repeatedly failed to comply with F-Gas regulations."
          ]
        },
        {
          title: "F-Gas Compliance vs TM44 Inspections",
          content: [
            "F-Gas and TM44 are separate but related requirements:",
            "**F-Gas Compliance**: Leak detection and refrigerant management. Required annually (or more frequently depending on system size).",
            "**TM44 Inspections**: Energy efficiency assessments of air conditioning systems over 12kW. Required every 5 years.",
            "Both are legal obligations, but F-Gas focuses on environmental protection, while TM44 focuses on energy performance."
          ]
        }
      ]}
      complianceFramework={{
        laws: [
          "F-Gas Regulations 2015 (as amended)",
          "EU Regulation 517/2014 on Fluorinated Greenhouse Gases",
          "Ozone-Depleting Substances Regulations 2015",
          "Environmental Protection Act 1990"
        ],
        standards: [
          "EN 378 (Refrigerating Systems and Heat Pumps—Safety and Environmental Requirements)",
          "BS EN 14511 (Air Conditioners, Liquid Chilling Packages, and Heat Pumps)",
          "F-Gas Toolbox (Environment Agency guidance)"
        ],
        responsiblePerson: "Building owner, landlord, facilities manager, or equipment operator—anyone with day-to-day control over air conditioning or refrigeration systems.",
        frequency: "Annual leak checks for systems 5–50 tonnes CO2e. Six-monthly for 50–500 tonnes CO2e. Quarterly for 500+ tonnes CO2e. More frequent checks if no automatic leak detection."
      }}
      operationalImpact={[
        "Prevents refrigerant leaks and environmental damage",
        "Maintains system efficiency (leaks reduce cooling performance)",
        "Ensures legal compliance and avoids prosecution",
        "Protects insurance validity",
        "Supports ESG reporting and carbon reduction targets"
      ]}
      risksIfIgnored={[
        "Unlimited fines and prosecution by the Environment Agency",
        "Fixed penalty notices for record-keeping failures",
        "Voided insurance policies due to poor maintenance",
        "Increased energy costs from inefficient, leaking systems",
        "Reputational damage from environmental non-compliance",
        "Premature system failures from undetected leaks"
      ]}
      howEntireFMHelps={{
        title: "How EntireFM Delivers F-Gas Compliance",
        points: [
          "Fully F-Gas certified engineers (Category 1 certified for all system types)",
          "Automated leak check scheduling based on your system's refrigerant charge",
          "Digital F-Gas logbooks: refrigerant quantities, leak records, top-ups, engineer certifications",
          "Combined F-Gas and TM44 inspections for efficiency and cost savings",
          "Leak repairs quoted and completed in-house—no subcontractor delays",
          "Environment Agency compliant record-keeping for audit and regulatory inspections"
        ]
      }}
      relatedLinks={[
        { title: "HVAC Compliance", url: "/services/hvac-compliance", type: "service" },
        { title: "HVAC Services", url: "/services/hvac", type: "service" },
        { title: "BMSOptimisation", url: "/services/bms-optimisation", type: "service" },
        { title: "What is a TM44 Inspection?", url: "/resources/what-is-a-tm44", type: "operation" },
        { title: "Office Facilities Management", url: "/sectors/offices", type: "sector" },
        { title: "Industrial & Logistics FM", url: "/sectors/industrial-logistics", type: "sector" }
      ]}
      faqs={[
        {
          question: "How do I know if my system needs F-Gas leak checks?",
          answer: "Check the refrigerant charge size on the system data plate or commissioning records. If the charge exceeds 5 tonnes CO2 equivalent, annual leak checks are required. Your HVAC contractor can calculate this for you."
        },
        {
          question: "Can I top up refrigerant without an F-Gas certificate?",
          answer: "No. Only F-Gas certified engineers can handle, install, or recover refrigerants. Using uncertified engineers is a criminal offence with unlimited fines."
        },
        {
          question: "What happens if a leak is found?",
          answer: "The leak must be repaired within 14 days, and the system must be rechecked within one month. If the leak cannot be repaired (e.g., obsolete system), the equipment may need replacing."
        },
        {
          question: "Do I need F-Gas compliance for my home air conditioning?",
          answer: "Domestic systems are subject to F-Gas regulations, but leak checks are only mandatory for larger systems (5+ tonnes CO2e). Most domestic units fall below this threshold. However, only F-Gas certified engineers should service any refrigerant-containing equipment."
        },
        {
          question: "How long must I keep F-Gas records?",
          answer: "At least 5 years. Records must include refrigerant quantities, leak checks, top-ups, repairs, engineer certifications, and disposal details. Digital F-Gas logbooks simplify compliance."
        }
      ]}
    />
  );
}
