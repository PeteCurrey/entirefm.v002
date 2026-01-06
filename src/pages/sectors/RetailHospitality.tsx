import SectorPageTemplate from "@/components/shared/SectorPageTemplate";
import { ShoppingBag } from "lucide-react";

const RetailHospitality = () => {
  return (
    <SectorPageTemplate
      title="Retail & Hospitality Facilities Management | Brand Protection"
      metaDescription="Protect brand experience, safety and trading uptime. 24/7 FM response for retail and hospitality with zero disruption to operations."
      canonicalUrl="https://entirefm.com/sectors/retail-hospitality"
      heroTitle="Facilities Management for Retail & Hospitality"
      heroSubtitle="Protect brand experience, safety and trading uptime — no disruption, no closed doors."
      heroImage="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80"
      heroIcon={ShoppingBag}
      stats={[
        { value: "24/7", label: "Response Coverage" },
        { value: "Zero", label: "Trading Days Lost" },
        { value: "100%", label: "CP42 Compliance" },
        { value: "<4hr", label: "Emergency Response" }
      ]}
      sectorSummary={{
        title: "Retail & Hospitality FM",
        paragraphs: [
          "In retail and hospitality, lost trading means lost revenue. Every hour with closed doors, uncomfortable temperatures, or failed equipment directly impacts the bottom line and customer experience.",
          "Our 24/7 responsive FM service keeps your business trading. We handle compliance, comfort, and emergencies so you can focus on customers."
        ]
      }}
      complianceRisks={[
        {
          title: "Lost Trading = Lost Revenue",
          description: "Every hour of downtime costs money. Equipment failures, compliance closures, and uncomfortable environments all reduce footfall and sales."
        },
        {
          title: "Compliance Surprise = Closure Risk",
          description: "Failed gas safety inspections, electrical faults, or fire safety issues can result in immediate trading suspension. Proactive compliance prevents surprises.",
          link: "/services/gas-safety",
          linkText: "Gas Safety Services"
        },
        {
          title: "Comfort Impacts Customer Spend",
          description: "Temperature, lighting, and ambience directly influence dwell time and purchase decisions. HVAC failures and poor presentation reduce customer spending.",
          link: "/services/hvac-compliance",
          linkText: "HVAC Services"
        },
        {
          title: "ESG & CO₂ Reporting",
          description: "Retailers face increasing pressure to report and reduce carbon emissions. Energy efficiency improvements support both sustainability and cost reduction goals."
        }
      ]}
      keySystems={[
        {
          category: "Trading Environment",
          items: [
            "Retail HVAC and climate control",
            "Commercial lighting systems",
            "Refrigeration and cold stores",
            "Escalators and lifts",
            "Point-of-sale power",
            "Customer washrooms"
          ]
        },
        {
          category: "Back of House",
          items: [
            "Kitchen gas and extraction",
            "Fire detection and suppression",
            "Emergency lighting",
            "Loading bay equipment",
            "Staff facilities",
            "Backup power systems"
          ]
        }
      ]}
      operationalChallenges={[
        {
          title: "Trading Hours Constraints",
          description: "Intrusive maintenance must occur outside trading hours. Night works, early morning callouts, and coordinated shutdowns minimise customer impact."
        },
        {
          title: "Brand Presentation Standards",
          description: "Retail environments demand high presentation standards. Our engineers understand the importance of appearance and complete works to brand specifications."
        },
        {
          title: "Multi-Site Portfolio Management",
          description: "National retail chains require consistent service delivery across all locations with centralised reporting and coordinated rollout programmes."
        }
      ]}
      whyEntireFM={[
        "24/7 emergency response keeping you trading",
        "Kitchen gas CP42 compliance for food service",
        "HVAC comfort stabilisation",
        "Fire safety governance",
        "Guest and customer safety standards",
        "National portfolio coordination"
      ]}
      caseStudies={[
        {
          title: "Shopping Centre",
          description: "Emergency HVAC response prevented closure during peak trading weekend.",
          link: "/case-studies",
          linkText: "View Case Study"
        },
        {
          title: "Hotel Estate",
          description: "CP42 kitchen compliance delivered across 8 properties with zero guest disruption.",
          link: "/case-studies",
          linkText: "View Case Study"
        }
      ]}
      relatedServices={[
        {
          title: "Gas Safety",
          description: "CP42 catering compliance",
          href: "/services/gas-safety"
        },
        {
          title: "HVAC Compliance",
          description: "Comfort stabilisation",
          href: "/services/hvac-compliance"
        },
        {
          title: "Fire Safety",
          description: "Customer safety assurance",
          href: "/services/fire-safety"
        }
      ]}
      faqs={[
        {
          question: "Can you provide 24/7 emergency response?",
          answer: "Yes. Our helpdesk operates around the clock with engineer dispatch for critical failures. We understand that retail and hospitality don't operate 9-5, and neither do we."
        },
        {
          question: "How do you handle multi-site retail portfolios?",
          answer: "We provide coordinated FM services across national retail estates with standardised processes, centralised helpdesk, and unified compliance reporting. Rollout programmes are managed centrally."
        },
        {
          question: "What kitchen compliance do you cover?",
          answer: "We deliver full CP42 gas safety compliance for commercial kitchens including annual certification, gas interlock testing, and ongoing maintenance of catering equipment."
        },
        {
          question: "How quickly can you respond to emergencies?",
          answer: "For critical failures affecting trading, we target engineer attendance within 4 hours. Priority is given to issues that impact customer safety or operational continuity."
        }
      ]}
    />
  );
};

export default RetailHospitality;
