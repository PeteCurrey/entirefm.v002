"use client";

import { ResourceArticleTemplate } from '@/components/resources/ResourceArticleTemplate';

export default function WhatIsComplianceCalendar() {
  return (
    <ResourceArticleTemplate
      title="What Is a Compliance Calendar? | FM Statutory Maintenance Scheduling"
      metaDescription="A compliance calendar tracks statutory maintenance deadlines across your estate—ensuring fire, electrical, water, and gas inspections never slip. Learn how to build one."
      keywords={[
        'compliance calendar',
        'statutory maintenance calendar',
        'maintenance schedule',
        'FM compliance',
        'building compliance',
        'inspection deadlines',
        'facilities management',
        'regulatory compliance'
      ]}
      category="FM Operations"
      heroTitle="What Is a Compliance Calendar?"
      heroDescription="A compliance calendar is a scheduling tool that maps every statutory inspection, test, and certification deadline across your estate—ensuring legal obligations are met, evidence is captured, and nothing falls through the cracks."
      publishDate="2025-01-22"
      readTime="7 min"
      introduction={[
        "A compliance calendar is the operational backbone of statutory maintenance management. It tracks when every mandatory inspection, test, and certification is due—fire alarms, emergency lighting, EICRs, gas safety checks, legionella monitoring, lift examinations, and more.",
        "Without a compliance calendar, deadlines get missed, certificates expire, and the Responsible Person faces enforcement action. With one, you have visibility, control, and audit-ready evidence of your legal obligations.",
        "For estates with multiple sites, asset types, or regulatory frameworks, a compliance calendar isn't a nice-to-have—it's essential governance infrastructure."
      ]}
      keyDefinition={{
        term: "Compliance Calendar",
        definition: "A centralised scheduling tool that tracks all statutory maintenance deadlines, inspection intervals, and certification expiry dates across an estate—enabling proactive planning, resource allocation, and audit-ready compliance evidence."
      }}
      sections={[
        {
          title: "What a Compliance Calendar Tracks",
          content: [
            "A comprehensive compliance calendar captures every legally mandated maintenance activity:",
            "**Fire Safety**: Weekly fire alarm tests, monthly emergency lighting checks, annual fire extinguisher servicing, fire door inspections, fire damper testing, dry riser flow tests, sprinkler inspections.",
            "**Electrical**: EICR testing intervals (typically 5 years for commercial, more frequent for high-risk), PAT testing, emergency lighting 3-hour duration tests, RCD testing.",
            "**Water Hygiene**: Monthly Legionella temperature checks, quarterly showerhead disinfection, annual tank inspections and risk assessment reviews, TMV testing.",
            "**Gas Safety**: Annual gas safety inspections, CP1/CP15 compliance checks, catering equipment servicing under CP42.",
            "**Lifts & Access Equipment**: LOLER thorough examinations (6 or 12-monthly), lift maintenance visits, escalator inspections.",
            "**HVAC**: TM44 air conditioning inspections (for systems over 12kW), F-Gas leak checks, pressure vessel inspections.",
            "**Building Fabric**: Asbestos re-inspections, façade inspections, roof surveys, height safety equipment checks.",
            "Each entry includes the asset, task, frequency, due date, responsible party, and evidence requirements."
          ]
        },
        {
          title: "Why It Matters",
          content: [
            "A compliance calendar delivers measurable operational and legal benefits:",
            "**Prevents Enforcement Action**: Missing statutory deadlines exposes the Responsible Person to prosecution, prohibition notices, and personal liability. A calendar ensures nothing slips.",
            "**Protects Insurance Coverage**: Insurers require evidence of adequate maintenance. Expired certificates or missed inspections can void policies and leave you exposed.",
            "**Enables Resource Planning**: Knowing what's due when allows you to plan engineer availability, budget expenditure, and coordinate access with tenants.",
            "**Supports Audit Readiness**: When fire officers, HSE inspectors, or insurers ask for compliance evidence, a calendar provides instant answers instead of frantic searches.",
            "**Reduces Reactive Costs**: Proactive compliance prevents the failures, fines, and emergency remedials that come from neglected maintenance.",
            "**Demonstrates Governance**: For directors, trustees, and asset managers, a compliance calendar shows due diligence and protects against allegations of negligence."
          ]
        },
        {
          title: "Statutory Frequencies",
          content: [
            "Key statutory maintenance frequencies include:",
            "**Weekly**: Fire alarm call point testing (different zone each week to cover all annually).",
            "**Monthly**: Emergency lighting functional tests, Legionella temperature monitoring, AOV functional tests.",
            "**Quarterly**: Fire extinguisher visual inspections, Legionella showerhead disinfection, HVAC filter checks.",
            "**Six-Monthly**: LOLER thorough examinations (for lifts carrying persons), lift maintenance visits.",
            "**Annually**: Fire extinguisher servicing, gas safety inspections, fire damper testing, emergency lighting 3-hour duration tests, dry riser flow tests, TMV servicing.",
            "**Every 5 Years**: EICR (Electrical Installation Condition Report) for commercial premises, portable fire extinguisher extended servicing.",
            "**As Required**: Fire risk assessment reviews (when changes occur), Legionella risk assessment reviews, asbestos re-inspections.",
            "Frequencies vary by asset type, building use, and risk profile. Your compliance calendar must reflect the specific requirements of your estate."
          ]
        },
        {
          title: "Building a Compliance Calendar",
          content: [
            "Creating an effective compliance calendar requires:",
            "**Asset Inventory**: Start with a complete register of all assets requiring statutory maintenance—fire systems, electrical installations, water systems, gas appliances, lifts, and safety equipment.",
            "**Regulatory Mapping**: Identify every statutory obligation applicable to each asset type. Cross-reference regulations, ACoPs, and British Standards.",
            "**Frequency Assignment**: Set inspection and testing intervals based on statutory requirements, manufacturer guidance, and risk assessments.",
            "**Deadline Calculation**: Work backwards from certification expiry dates to schedule tasks with adequate lead time for remedials if issues arise.",
            "**Responsibility Assignment**: Assign each task to a named party—internal team, managing agent, or specialist contractor.",
            "**Reminder System**: Build in automated alerts for approaching deadlines—typically 30, 14, and 7 days before due dates.",
            "**Evidence Capture**: Define what evidence is required for each task (certificates, photos, engineer reports) and how it will be stored.",
            "Digital compliance platforms automate much of this, replacing error-prone spreadsheets with integrated scheduling and document management."
          ]
        },
        {
          title: "How EntireFM Manages Compliance Calendars",
          content: [
            "EntireFM builds and manages compliance calendars as standard for all contracted estates:",
            "**Full Regulatory Mapping**: We identify every statutory obligation across fire, electrical, water, gas, lifts, and building fabric—nothing is assumed or inherited unchecked.",
            "**Integrated Scheduling**: Tasks feed directly into our Field Operations Intelligence platform. Engineers receive mobile dispatch, complete work with digital evidence, and certificates are attached to assets automatically.",
            "**Automated Alerts**: Approaching deadlines trigger notifications to account managers and clients. Overdue items escalate automatically.",
            "**Real-Time Dashboards**: Clients see compliance status at a glance—by site, system, or portfolio. Green means compliant; amber means due soon; red means overdue.",
            "**Audit-Ready Reporting**: One-click export of compliance status, certificate libraries, and task histories for regulators, insurers, or auditors.",
            "No spreadsheets. No manual tracking. No missed deadlines."
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
          "Control of Substances Hazardous to Health Regulations 2002"
        ],
        standards: [
          "BS 5839 (Fire Detection and Alarm Systems)",
          "BS 5266 (Emergency Lighting)",
          "BS 7671 (IET Wiring Regulations)",
          "ACOP L8 (Legionella Control)",
          "HSG274 (Legionella Technical Guidance)",
          "BS 9999 (Fire Safety in Buildings)"
        ],
        responsiblePerson: "Building owner, landlord, managing agent, or appointed Duty Holder responsible for ensuring statutory maintenance is scheduled, completed, and evidenced.",
        frequency: "Compliance calendars should be reviewed monthly for upcoming tasks and updated whenever assets are added, removed, or regulatory requirements change."
      }}
      operationalImpact={[
        "Ensures no statutory deadline is missed",
        "Provides instant visibility of compliance status across the estate",
        "Enables proactive resource and budget planning",
        "Reduces emergency remedial costs from neglected maintenance",
        "Protects insurance validity and supports claim defence"
      ]}
      risksIfIgnored={[
        "Prosecution of the Responsible Person for statutory breaches",
        "Prohibition notices closing buildings until compliance is restored",
        "Insurance claims rejected due to expired certificates",
        "Higher premiums or coverage withdrawal",
        "Life-safety incidents from unmaintained systems",
        "Reputational damage and tenant complaints"
      ]}
      howEntireFMHelps={{
        title: "Get Your Compliance Calendar",
        points: [
          "Full statutory audit identifying every compliance obligation across your estate",
          "Digital compliance calendar with automated reminders and escalation",
          "Real-time dashboards showing portfolio-wide compliance status",
          "Integrated delivery—scheduling, dispatch, completion, and evidence capture in one system",
          "Audit-ready reporting for regulators, insurers, and stakeholders",
          "Single-point accountability—no chasing multiple contractors for certificates"
        ]
      }}
      relatedLinks={[
        { title: "Compliance Calendar Download", url: "/resources/compliance-calendar", type: "operation" },
        { title: "What Is a PPM Planner?", url: "/fm-insights/what-is-a-ppm-planner", type: "operation" },
        { title: "What Is Statutory Maintenance?", url: "/fm-insights/what-is-statutory-maintenance", type: "operation" },
        { title: "PPM & Asset Lifecycle Governance", url: "/services/ppm", type: "service" },
        { title: "Fire Safety Services", url: "/services/fire-safety", type: "service" },
        { title: "Electrical Compliance", url: "/services/electrical-compliance", type: "service" },
        { title: "Water Hygiene Services", url: "/services/water-hygiene", type: "service" },
        { title: "What Is an Asset Register?", url: "/fm-insights/what-is-an-asset-register", type: "operation" }
      ]}
      faqs={[
        {
          question: "What's the difference between a compliance calendar and a PPM planner?",
          answer: "A compliance calendar focuses specifically on statutory deadlines—legal requirements that must be met. A PPM planner covers broader maintenance including non-statutory tasks like filter changes or cosmetic repairs. The compliance calendar is a subset of the PPM planner, but with non-negotiable legal significance."
        },
        {
          question: "How far ahead should I plan compliance tasks?",
          answer: "Best practice is a rolling 12-month view with detailed scheduling for the next quarter. This allows time to coordinate access, allocate budget, and address any remedials before certificates expire."
        },
        {
          question: "What happens if I miss a statutory deadline?",
          answer: "Consequences vary by obligation. Fire safety breaches can result in enforcement notices, prosecution, or building closure. Electrical and gas failures risk prosecution under health and safety law. Insurance coverage may be voided. In all cases, the Responsible Person carries personal liability."
        },
        {
          question: "Can a spreadsheet work as a compliance calendar?",
          answer: "For a single small site, possibly. For multi-site portfolios or complex estates, spreadsheets create risk—they don't send reminders, they're error-prone, and they don't integrate with evidence capture. Digital compliance platforms are more reliable and scalable."
        },
        {
          question: "Who is responsible for maintaining the compliance calendar?",
          answer: "The Responsible Person (building owner, landlord, or their appointed agent) is legally accountable. Day-to-day management may be delegated to an FM provider, but ultimate responsibility cannot be transferred."
        }
      ]}
    />
  );
}
