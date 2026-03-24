"use client";

import SectorPageTemplate from "@/components/shared/SectorPageTemplate";
import { Hospital } from "lucide-react";

const HealthcarePublic = () => {
  return (
    <SectorPageTemplate
      title="Healthcare & Public Sector Facilities Management | Zero Tolerance Compliance"
      metaDescription="Zero tolerance on compliance — risk removed, governance proven. Healthcare and public sector FM with CQC and HSE accountability."
      canonicalUrl="https://entirefm.com/sectors/healthcare-public"
      heroTitle="Healthcare & Public Sector Facilities Management"
      heroSubtitle="Zero tolerance on compliance — risk removed, governance proven."
      heroImage="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80"
      heroIcon={Hospital}
      stats={[
        { value: "100%", label: "CQC Compliance" },
        { value: "127", label: "Remedials Closed" },
        { value: "Zero", label: "Inspection Findings" },
        { value: "4", label: "Buildings Managed" }
      ]}
      sectorSummary={{
        title: "Healthcare FM Requirements",
        paragraphs: [
          "Healthcare and public sector buildings operate under intense regulatory scrutiny. Infection control, patient safety, and public access all demand facilities management that meets the highest standards of compliance and accountability.",
          "Our approach delivers zero-tolerance compliance with full audit trail documentation, ensuring CQC inspections, HSE visits, and regulatory reviews are passed with confidence."
        ]
      }}
      risks={[
        {
          title: "Infection Risk Control",
          description: "Water hygiene and ventilation systems present infection control risks. Legionella prevention and air quality management are critical in healthcare settings.",
          link: "/services/water-hygiene",
          linkText: "Water Hygiene Services"
        },
        {
          title: "CQC / HSE Inspection Accountability",
          description: "Regulatory inspections require current compliance documentation and evidence of proactive maintenance. Our digital reporting ensures audit-ready records."
        },
        {
          title: "Public Access Safety",
          description: "Healthcare and public buildings must maintain safe environments for vulnerable visitors. Fire safety, accessibility, and emergency systems require constant vigilance.",
          link: "/services/fire-safety",
          linkText: "Fire Safety Services"
        },
        {
          title: "Estate Complexity",
          description: "NHS and local government estates often span multiple buildings with varied ages and systems. Coordinated maintenance across complex portfolios requires specialist expertise."
        }
      ]}
      keySystems={[
        {
          category: "Critical Safety Systems",
          items: [
            "Medical gas systems",
            "Fire detection and suppression",
            "Emergency lighting and signage",
            "Water hygiene systems",
            "Ventilation and air handling",
            "Nurse call systems"
          ]
        },
        {
          category: "Building Infrastructure",
          items: [
            "HVAC and temperature control",
            "Backup power generation",
            "Lifts and patient transport",
            "BMS and energy management",
            "Access control systems",
            "Security and CCTV"
          ]
        }
      ]}
      operationalChallenges={[
        {
          title: "24/7 Clinical Operations",
          description: "Healthcare facilities operate around the clock. Maintenance must be scheduled to minimise disruption to clinical services and patient care."
        },
        {
          title: "Infection Control Protocols",
          description: "All maintenance activities must comply with infection control requirements. Our engineers follow strict protocols and use appropriate PPE."
        },
        {
          title: "Regulatory Documentation",
          description: "Healthcare regulators require comprehensive maintenance records and compliance evidence. Our digital systems provide instant access to audit-ready documentation."
        }
      ]}
      whyEntireFM={[
        "Legionella and critical ventilation expertise",
        "Fire safety assurance for public buildings",
        "Full asset logging for CQC and HSE audits",
        "CAFM transparency tools for governance",
        "DBS-checked engineers for healthcare access",
        "24/7 emergency response capability"
      ]}
      caseStudies={[
        {
          title: "Hospital Estate",
          description: "Asset governance restored across 4 buildings. 127 remedials closed. CQC inspection passed with zero findings.",
          link: "/case-studies",
          linkText: "View Case Studies"
        }
      ]}
      relatedServices={[
        {
          title: "Water Hygiene",
          description: "Legionella control",
          href: "/services/water-hygiene"
        },
        {
          title: "Fire Safety",
          description: "Public access assurance",
          href: "/services/fire-safety"
        },
        {
          title: "Ventilation",
          description: "Critical air quality",
          href: "/services/hvac-compliance"
        }
      ]}
      faqs={[
        {
          question: "How do you support CQC compliance?",
          answer: "We provide comprehensive documentation and audit-ready records for all maintenance activities. Our digital systems ensure instant access to compliance certificates, maintenance logs, and remedial tracking."
        },
        {
          question: "Can you work in clinical environments?",
          answer: "Yes. Our engineers are trained in healthcare-specific protocols including infection control, patient confidentiality, and working in sensitive clinical areas. All staff are DBS-checked."
        },
        {
          question: "What water hygiene services do you provide?",
          answer: "We deliver full ACOP L8 compliance including legionella risk assessments, temperature monitoring, water sampling, remedial works, and ongoing management of water hygiene schemes."
        },
        {
          question: "How do you handle emergency call-outs in healthcare?",
          answer: "Our 24/7 helpdesk provides immediate response for critical failures. Priority is given to life-safety systems and clinical service continuity with rapid engineer dispatch."
        }
      ]}
    />
  );
};

export default HealthcarePublic;
