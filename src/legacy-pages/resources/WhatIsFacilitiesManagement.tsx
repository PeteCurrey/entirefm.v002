"use client";

import { ResourceArticleTemplate } from '@/components/resources/ResourceArticleTemplate';

const WhatIsFacilitiesManagement = () => {
  return (
    <ResourceArticleTemplate
      title="What is Facilities Management?"
      metaDescription="Comprehensive guide to facilities management: definition, responsibilities, hard FM vs soft FM, compliance requirements, and how professional FM services improve building performance and reduce operational costs."
      keywords={[
        'facilities management',
        'what is FM',
        'hard FM',
        'soft FM',
        'building management',
        'property maintenance',
        'FM services',
        'facilities manager responsibilities'
      ]}
      category="Compliance Essentials"
      heroTitle="What is Facilities Management?"
      heroDescription="A comprehensive guide to understanding facilities management, its core disciplines, legal responsibilities, and how professional FM services drive operational excellence across commercial property portfolios."
      publishDate="2025"
      readTime="8 min"
      introduction={[
        "Facilities Management (FM) is the strategic coordination of people, places, processes, and technology to ensure the built environment supports the core objectives of the organisation. It encompasses everything from statutory compliance and planned maintenance to occupier experience and sustainability initiatives.",
        "In the UK, effective FM is essential for legal compliance, operational efficiency, and asset performance. Whether managing a single building or a multi-site portfolio, understanding the scope and structure of FM is critical for property owners, landlords, and facility managers."
      ]}
      keyDefinition={{
        term: "Facilities Management Definition",
        definition: "Facilities Management integrates multiple disciplines to ensure functionality of the built environment by integrating people, place, process and technology. It covers both hard FM (building infrastructure, mechanical & electrical systems, statutory compliance) and soft FM (cleaning, security, catering, waste management, grounds maintenance)."
      }}
      sections={[
        {
          title: "The Two Core Disciplines: Hard FM vs. Soft FM",
          content: [
            "FM is divided into two primary categories, each with distinct responsibilities and skill requirements:",
            "**Hard FM (Technical Services):** Covers the physical infrastructure and building systems. This includes electrical installations, HVAC systems, fire safety equipment, water hygiene, gas safety, lifts, generators, BMS controls, and all statutory compliance testing. Hard FM ensures life-safety systems operate correctly and buildings meet regulatory standards.",
            "**Soft FM (Non-Technical Services):** Focuses on the occupier experience and day-to-day operations. This includes cleaning, security, reception, catering, waste management, pest control, landscaping, and helpdesk services. Soft FM creates safe, comfortable, and productive environments for building users."
          ]
        },
        {
          title: "Core Responsibilities of a Facilities Manager",
          content: [
            "A Facilities Manager is responsible for ensuring the building remains safe, compliant, and operational. Key responsibilities include:",
            "• **Statutory Compliance:** Ensuring all legal obligations are met, including fire safety (RRO 2005), electrical safety (BS 7671), water hygiene (ACOP L8), gas safety (Gas Safety Regulations), and HVAC compliance (F-Gas, TM44).",
            "• **Planned Preventative Maintenance (PPM):** Scheduling regular inspections and servicing to prevent breakdowns, extend asset life, and maintain warranties.",
            "• **Reactive Maintenance:** Managing emergency callouts, breakdowns, and urgent repairs with guaranteed response times.",
            "• **Budget Management:** Controlling operational expenditure, forecasting capital expenditure, and demonstrating value for money.",
            "• **Risk Management:** Conducting regular risk assessments, managing health and safety obligations, and ensuring business continuity.",
            "• **Sustainability & Energy Management:** Reducing carbon emissions, improving energy efficiency, and supporting ESG targets."
          ]
        },
        {
          title: "Legal Framework & The 'Responsible Person'",
          content: [
            "Under UK law, the 'Responsible Person' is accountable for ensuring the safety of the building and its occupants. This role is typically held by the building owner, landlord, or facilities manager.",
            "The Responsible Person has legal duties under multiple pieces of legislation:",
            "• **Regulatory Reform (Fire Safety) Order 2005:** Requires fire risk assessments, fire alarm testing, emergency lighting checks, and evacuation procedures.",
            "• **Health and Safety at Work Act 1974:** Imposes a duty of care to protect employees, contractors, and visitors.",
            "• **Electricity at Work Regulations 1989:** Mandates safe electrical installations and regular testing (EICRs).",
            "• **Control of Substances Hazardous to Health (COSHH) Regulations 2002:** Governs the safe handling and storage of hazardous materials.",
            "• **ACOP L8 (Legionella Control):** Requires legionella risk assessments, water temperature monitoring, and regular system cleaning.",
            "Failure to meet these obligations can result in enforcement notices, fines, imprisonment, or corporate manslaughter charges in the event of a serious incident."
          ]
        },
        {
          title: "The Business Case for Professional FM",
          content: [
            "Outsourcing FM to a specialist provider delivers measurable benefits:",
            "• **Cost Certainty:** Fixed-price contracts eliminate budget volatility and provide predictable operational costs.",
            "• **Compliance Assurance:** Dedicated compliance teams ensure all statutory testing is completed on time with full audit trails.",
            "• **Improved Uptime:** Proactive maintenance reduces emergency callouts and unplanned downtime by up to 40%.",
            "• **Access to Expertise:** Specialist engineers with manufacturer training and certifications for complex building systems.",
            "• **Technology Integration:** Modern FM providers use CAFM systems, IoT sensors, and real-time dashboards for transparent performance tracking.",
            "• **Scalability:** Easily scale services up or down as portfolio size changes without hiring or redundancy costs."
          ]
        }
      ]}
      complianceFramework={{
        laws: [
          "Regulatory Reform (Fire Safety) Order 2005",
          "Health and Safety at Work Act 1974",
          "Electricity at Work Regulations 1989",
          "Gas Safety (Installation and Use) Regulations 1998"
        ],
        standards: [
          "BS 7671 (Electrical Installations)",
          "BS 5839 (Fire Detection & Alarm Systems)",
          "BS 5266 (Emergency Lighting)",
          "ACOP L8 (Legionella Control)"
        ],
        responsiblePerson: "The building owner, landlord, or designated Facilities Manager is the 'Responsible Person' under UK law and must ensure all statutory obligations are met.",
        frequency: "Varies by discipline: Daily (emergency lighting flick tests), Weekly (fire alarm tests), Monthly (legionella temperature checks), Annually (EICRs, fire risk assessments), Every 5 years (fixed wire testing)"
      }}
      operationalImpact={[
        "Reduced unplanned downtime through proactive maintenance",
        "Lower insurance premiums with robust compliance evidence",
        "Improved occupier satisfaction and staff retention",
        "Extended asset life through proper servicing",
        "Clear audit trails for regulatory inspections",
        "Better energy efficiency and sustainability performance"
      ]}
      risksIfIgnored={[
        "Prosecution and unlimited fines for non-compliance",
        "Voided insurance policies following incidents",
        "Increased risk of fires, electrical failures, or legionella outbreaks",
        "Reputational damage and loss of tenant confidence",
        "Emergency reactive costs up to 10x higher than planned maintenance",
        "Director liability and potential imprisonment for serious breaches"
      ]}
      howEntireFMHelps={{
        title: "How EntireFM Delivers Compliant FM Excellence",
        points: [
          "Fully managed hard and soft FM services with single accountability",
          "CAFM-tracked PPM schedules ensuring 100% statutory compliance",
          "24/7 emergency response with guaranteed attendance times",
          "Dedicated compliance managers and engineer audit trails",
          "Real-time performance dashboards and KPI reporting",
          "Seamless mobilisation with zero disruption to operations",
          "Multi-disciplinary engineering teams covering all trades",
          "Proactive asset lifecycle planning and capital expenditure forecasting"
        ]
      }}
      relatedLinks={[
        { title: "Hard FM Services", url: "/services/hard-services-fm", type: "service" },
        { title: "PPM Delivery", url: "/fm-operations/ppm-delivery", type: "operation" },
        { title: "Fire Safety Compliance", url: "/services/fire-safety", type: "service" },
        { title: "Electrical Compliance", url: "/services/electrical-compliance", type: "service" },
        { title: "Water Hygiene & Legionella", url: "/services/water-hygiene", type: "service" },
        { title: "Corporate Offices", url: "/sectors/offices", type: "sector" },
        { title: "PBSA & Student Housing", url: "/sectors/pbsa", type: "sector" },
        { title: "Corporate HQ Case Study", url: "/case-studies/corporate-office-london", type: "case-study" }
      ]}
      faqs={[
        {
          question: "What qualifications does a Facilities Manager need?",
          answer: "Professional FM qualifications include IWFM membership, NEBOSH certificates, IOSH Managing Safely, and discipline-specific certifications (e.g., City & Guilds for electrical, Gas Safe for gas work). Many FMs hold degrees in building services engineering or facilities management."
        },
        {
          question: "How much does facilities management cost?",
          answer: "FM costs typically range from £8-£25 per square metre annually, depending on building complexity, service scope, and location. Hard FM (compliance and M&E maintenance) usually accounts for 60-70% of total FM spend, with soft FM making up the remainder."
        },
        {
          question: "What is a CAFM system?",
          answer: "Computer-Aided Facilities Management (CAFM) software tracks assets, schedules maintenance, logs reactive jobs, manages compliance certificates, and provides real-time performance dashboards. Modern CAFM systems integrate with IoT sensors for predictive maintenance."
        },
        {
          question: "Can I manage facilities in-house instead of outsourcing?",
          answer: "In-house FM is possible but requires dedicated staff, specialist equipment, training budgets, out-of-hours cover, and liability insurance. Most organisations find outsourced FM more cost-effective due to economies of scale, specialist expertise, and risk transfer."
        },
        {
          question: "How long does FM mobilisation take?",
          answer: "Professional mobilisation typically takes 4-8 weeks depending on portfolio complexity. This includes asset surveys, TUPE consultations (if applicable), system handovers, engineer training, and compliance audits. EntireFM guarantees seamless transitions with zero service disruption."
        }
      ]}
    />
  );
};

export default WhatIsFacilitiesManagement;
