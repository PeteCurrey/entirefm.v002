"use client";

import SectorPageTemplate from "@/components/shared/SectorPageTemplate";
import { Building2 } from "lucide-react";

const OfficesCorporate = () => {
  return (
    <SectorPageTemplate
      title="Office Facilities Management UK | Corporate Workplace FM"
      metaDescription="Workplace performance through comfort, compliance & uptime. Smart, compliant, and reliable environments that protect productivity, wellbeing, and brand reputation."
      canonicalUrl="https://entirefm.com/sectors/offices-corporate"
      heroTitle="Offices & Corporate FM"
      heroSubtitle="Smart, compliant, and reliable environments that protect productivity, wellbeing, and brand reputation. A workplace that performs — so your people can too."
      heroImage="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
      heroIcon={Building2}
      stats={[
        { value: "40%", label: "Comfort Improvement" },
        { value: "100%", label: "Compliance Achieved" },
        { value: "90-day", label: "Turnaround" },
        { value: "Hybrid", label: "Ready" },
      ]}
      sectorSummary={{
        title: "A Broken Workplace Breaks Performance",
        paragraphs: [
          "When facilities fail, so does productivity. Too hot, too cold, faulty lighting, leaks and hazards, lift downtime, poor air quality, dirty environments — every issue becomes a culture and retention problem.",
          "We keep the workplace friction-free. Your office should support top talent — not frustrate it. Our approach delivers employee wellbeing, ESG objectives, brand experience, and audit-ready compliance."
        ]
      }}
      risks={[
        {
          title: "Employee Wellbeing & Comfort",
          description: "HVAC optimisation, indoor air quality monitoring, and clean environments directly impact productivity, satisfaction, and talent retention.",
          link: "/services/hvac-compliance",
          linkText: "HVAC compliance"
        },
        {
          title: "ESG Objectives",
          description: "Energy efficiency upgrades and sustainability initiatives help meet corporate environmental targets and reduce operational costs."
        },
        {
          title: "Brand Experience",
          description: "Sleek, well-maintained public spaces and reception areas protect your corporate image for VIP and stakeholder visits."
        },
        {
          title: "Security & Contractor Governance",
          description: "Access control and strict compliance protocols ensure secure contractor management and visitor safety across your estate."
        }
      ]}
      keySystems={[
        {
          category: "Core Building Services",
          items: [
            "HVAC & BMS optimisation",
            "Electrical & lighting upgrades",
            "Fire & life safety compliance",
            "Water hygiene (ACOP L8)",
            "Lift maintenance",
            "Building fabric & repairs"
          ]
        },
        {
          category: "Workplace Experience",
          items: [
            "Reception & front-of-house",
            "Meeting room systems",
            "Washroom & hygiene services",
            "Concierge integration",
            "Cleaning coordination",
            "Joinery & fabric repairs"
          ]
        }
      ]}
      operationalChallenges={[
        {
          title: "Live Office Environments",
          description: "Low-disruption maintenance is standard. We schedule works around business hours and coordinate with occupants to minimize productivity impact."
        },
        {
          title: "Hybrid Workplace Support",
          description: "PPM schedules are built around occupancy analytics, ensuring maintenance aligns with actual building usage patterns."
        },
        {
          title: "Multi-Tenant Coordination",
          description: "Works require careful coordination with multiple tenants, landlords, and building management to maintain positive relationships."
        },
        {
          title: "Responsible Person Compliance",
          description: "We take full ownership of compliance management with auditable records, protecting the Responsible Person's statutory obligations."
        }
      ]}
      whyEntireFM={[
        "Full-scope workplace maintenance under one partner",
        "CAFM dashboard for real-time compliance visibility",
        "PPM built around hybrid working patterns",
        "Reception and front-of-house excellence",
        "Smart building and workplace technology integration"
      ]}
      caseStudies={[
        {
          title: "HQ Refresh — National Financial Business",
          description: "40% reduction in comfort complaints. Lighting redesign improved employee feedback scores. Full compliance turnaround within 90 days.",
          link: "/case-studies",
          linkText: "View case studies"
        },
        {
          title: "Professional Services Workplace — City Centre",
          description: "Improved IAQ metrics for wellness program uplift. Reception and front-of-house brand uplift. Contractor control overhaul with zero incidents.",
          link: "/case-studies",
          linkText: "View case studies"
        }
      ]}
      relatedServices={[
        { title: "HVAC Maintenance", description: "Climate control", href: "/services/hvac" },
        { title: "Electrical Services", description: "Power & lighting", href: "/services/electrical" },
        { title: "Fire Systems", description: "Life safety", href: "/services/fire-alarms" }
      ]}
      faqs={[
        {
          question: "Do you work in live office environments?",
          answer: "Yes — low-disruption maintenance is standard. We schedule works around business operations and coordinate with occupants to minimize impact."
        },
        {
          question: "Can you integrate soft services?",
          answer: "Absolutely — concierge, reception, cleaning, waste, and other soft services can be integrated into a comprehensive workplace FM solution."
        },
        {
          question: "Can you support hybrid workplaces?",
          answer: "Yes — PPM schedules are built around occupancy analytics to ensure maintenance aligns with actual building usage patterns."
        },
        {
          question: "Do you manage compliance on behalf of the Responsible Person?",
          answer: "We take full ownership — with auditable records. Our CAFM dashboard provides real-time visibility of compliance status across your entire portfolio."
        }
      ]}
    />
  );
};

export default OfficesCorporate;
