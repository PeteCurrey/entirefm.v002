import SectorPageTemplate from "@/components/shared/SectorPageTemplate";
import { Factory } from "lucide-react";
import heroImage from "@/assets/sector-industrial-hero.jpg";

const IndustrialLogisticsHub = () => {
  return (
    <SectorPageTemplate
      title="Industrial & Logistics Estates FM | Safety Engineered"
      metaDescription="Downtime eliminated — safety engineered into every process-critical asset."
      canonicalUrl="https://entirefm.com/sectors/industrial-logistics-hub"
      heroTitle="Facilities Management for Industrial & Logistics Estates"
      heroSubtitle="Downtime eliminated — safety engineered into every process-critical asset."
      heroImage={heroImage}
      heroIcon={Factory}
      stats={[
        { value: "47", label: "Remedials Closed" },
        { value: "Zero", label: "HSE Enforcement" },
        { value: "100%", label: "Insurance Renewal" },
        { value: "24/7", label: "Operations Support" }
      ]}
      sectorSummary={{
        title: "Industrial & Logistics FM",
        paragraphs: [
          "Industrial and logistics facilities cannot afford downtime. Failed equipment, electrical outages, or compliance failures directly impact production schedules, delivery commitments, and commercial performance.",
          "Our approach delivers proactive maintenance that prevents failures before they occur, combined with rapid response capabilities for critical issues. Safety is engineered into every process-critical asset."
        ]
      }}
      complianceRisks={[
        {
          title: "HVAC & Electrical Reliability",
          description: "Production depends on reliable power and environmental control. Electrical failures and HVAC breakdowns halt operations and impact product quality.",
          link: "/services/electrical-compliance",
          linkText: "Electrical Services"
        },
        {
          title: "Emergency Lighting for High-Risk Areas",
          description: "Industrial environments with machinery, forklifts, and hazardous processes require comprehensive emergency lighting coverage and regular testing.",
          link: "/services/emergency-lighting",
          linkText: "Emergency Lighting"
        },
        {
          title: "Water Hygiene in Warm Environments",
          description: "Industrial processes often generate warm water conditions that accelerate legionella growth. Comprehensive water hygiene management is essential.",
          link: "/services/water-hygiene",
          linkText: "Water Hygiene"
        },
        {
          title: "Dangerous Goods Compliance",
          description: "Facilities storing or handling dangerous goods require specialist safety systems and compliance management for regulatory approval."
        }
      ]}
      keySystems={[
        {
          category: "Production Infrastructure",
          items: [
            "Industrial HVAC and ventilation",
            "High-voltage electrical systems",
            "Compressed air systems",
            "Process cooling equipment",
            "Material handling systems",
            "Industrial lighting"
          ]
        },
        {
          category: "Safety & Compliance",
          items: [
            "Fire detection and suppression",
            "Emergency lighting systems",
            "Gas detection and alarms",
            "Dust extraction and LEV",
            "Safety interlocks",
            "Backup power generation"
          ]
        }
      ]}
      operationalChallenges={[
        {
          title: "Production Continuity",
          description: "Maintenance must be scheduled around production cycles to minimise downtime. Planned shutdowns require coordinated multi-trade delivery."
        },
        {
          title: "High-Risk Environments",
          description: "Industrial sites present unique hazards including confined spaces, working at height, and hazardous substances. Our engineers hold appropriate certifications."
        },
        {
          title: "Regulatory Compliance",
          description: "Industrial facilities face HSE scrutiny and insurance requirements. Comprehensive maintenance records and compliance documentation are essential."
        }
      ]}
      whyEntireFM={[
        "Ventilation and AHU performance assurance",
        "Fixed wire safety governance",
        "Asset lifecycle optimisation",
        "Fire systems reliability testing",
        "Industrial-rated engineers with site permits",
        "24/7 emergency response for critical failures"
      ]}
      caseStudies={[
        {
          title: "Distribution Facility",
          description: "Compliance uplift programme eliminated 47 outstanding remedials, avoided HSE enforcement, and secured insurance renewal.",
          link: "/case-studies",
          linkText: "View Case Studies"
        }
      ]}
      relatedServices={[
        {
          title: "HVAC & Ventilation",
          description: "AHU performance assurance",
          href: "/services/hvac-compliance"
        },
        {
          title: "Electrical Safety",
          description: "Fixed wire governance",
          href: "/services/electrical-compliance"
        },
        {
          title: "Fire Systems",
          description: "High-risk protection",
          href: "/services/fire-safety"
        }
      ]}
      faqs={[
        {
          question: "Can you work around production schedules?",
          answer: "Yes. We schedule planned maintenance during production breaks, shift changes, or planned shutdowns. Our teams coordinate closely with operations to minimise production impact."
        },
        {
          question: "What industrial safety certifications do your engineers hold?",
          answer: "Our engineers hold appropriate certifications including IOSH, NEBOSH, confined space, working at height, and site-specific permits as required by each facility."
        },
        {
          question: "How do you support HSE compliance?",
          answer: "We provide comprehensive maintenance records, compliance certificates, and risk assessment documentation. Our systems generate audit-ready reports for regulatory inspections."
        },
        {
          question: "What emergency response times can you achieve?",
          answer: "Our 24/7 helpdesk provides immediate response for critical failures. For process-critical equipment, we target engineer attendance within 4 hours for priority call-outs."
        }
      ]}
    />
  );
};

export default IndustrialLogisticsHub;
