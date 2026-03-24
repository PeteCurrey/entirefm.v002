"use client";

import ServicePageTemplate from "@/components/shared/ServicePageTemplate";
import { AlertTriangle } from "lucide-react";

const ElectricalDefects = () => {
  return (
    <ServicePageTemplate
      title="Electrical Fault Finding & Remedial Works | EntireFM"
      metaDescription="Professional electrical fault finding, remedial works, and defect resolution for commercial properties. Restoring safety and compliance to your electrical systems."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Electrical Defects" }
      ]}
      heroTitle="Electrical Fault Finding & Remedial Works"
      heroSubtitle="Expert technical response and remedial solutions for electrical system defects and safety failures."
      heroImage="https://images.unsplash.com/photo-1558210857-0b1338d35055?auto=format&fit=crop&q=80"
      heroIcon={AlertTriangle}
      stats={[
        { value: "2h", label: "Avg Response" },
        { value: "95%", label: "First-Time Fix" },
        { value: "NICEIC", label: "Approved" },
        { value: "24/7", label: "Emergency Cover" }
      ]}
      overview={{
        title: "Electrical Remedial Solutions",
        paragraphs: [
          "Identification and resolution of electrical defects are critical for maintaining building safety and statutory compliance. Following an EICR or equipment failure, our engineers provide rapid fault finding and certified remedial works.",
          "We specialise in restoring electrical systems to BS 7671 standards, ensuring your property remains safe, operational, and fully compliant with all legal requirements."
        ]
      }}
      risks={[
        {
          title: "Fire & Safety Hazards",
          description: "Unresolved electrical defects are a primary cause of commercial fires and personnel injury. Immediate remedial action protects your assets and people."
        },
        {
          title: "Regulatory Non-Compliance",
          description: "C1 and C2 defects on an EICR render a building non-compliant. We provide the necessary repairs and certification to restore compliance status."
        }
      ]}
      components={[
        {
          title: "Fault Finding",
          description: "Circuit board troubleshooting, power loss investigation, nuisance tripping resolution, and thermal imaging hotspots."
        },
        {
          title: "Remedial Works",
          description: "Distribution board upgrades, wiring repairs, component replacement, and earthing/bonding restoration."
        }
      ]}
      benefits={[
        "NICEIC approved contractors",
        "Expert fault diagnosis and resolution",
        "Rapid response for safety-critical defects",
        "Transparent pricing and detailed quotations",
        "Full certification upon completion of works",
        "Proactive safety advice and reporting"
      ]}
      faqs={[
        {
          question: "How quickly can you respond to an electrical fault?",
          answer: "We offer emergency response times within 2-4 hours for critical electrical failures and safety issues."
        },
        {
          question: "Do you provide certification for remedial works?",
          answer: "Yes, all remedial works are accompanied by the relevant NICEIC certification (Minor Works or Electrical Installation Certificate)."
        }
      ]}
    />
  );
};

export default ElectricalDefects;
