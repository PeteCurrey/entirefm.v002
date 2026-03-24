"use client";

import ServicePageTemplate from "@/components/shared/ServicePageTemplate";
import { Droplet } from "lucide-react";

const LeakDetectionRepair = () => {
  return (
    <ServicePageTemplate
      title="Commercial Leak Detection & Water Damage Repair | EntireFM"
      metaDescription="Specialist commercial leak detection and water system repairs. Advanced technology for non-destructive leak identification and rapid resolution."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Leak Detection" }
      ]}
      heroTitle="Leak Detection & Water System Repair"
      heroSubtitle="Non-destructive leak detection and rapid response repair protecting your building from water damage."
      heroImage="https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&q=80"
      heroIcon={Droplet}
      stats={[
        { value: "98%", label: "Detection Rate" },
        { value: "24/7", label: "Response" },
        { value: "Non-Inv", label: "Specialist" },
        { value: "Expert", label: "Diagnosis" }
      ]}
      overview={{
        title: "Specialist Water Governance",
        paragraphs: [
          "Undetected leaks cause significant structural damage, mould growth, and operational downtime. Our specialist team uses advanced technology to identify leaks within pipework, heating systems, and flat roofs without unnecessary disruption.",
          "Once identified, we provide immediate repair solutions and remediation to protect your facility and restore system integrity."
        ]
      }}
      risks={[
        {
          title: "Structural Compromise",
          description: "Escaping water quickly damages building fabric, electrical systems, and structural elements. Early detection is vital to prevent catastrophic loss."
        },
        {
          title: "Mould & Air Quality",
          description: "Damp conditions lead to mould spores which impact occupant health and indoor air quality. Resolving leaks is the first step in mould prevention."
        }
      ]}
      components={[
        {
          title: "Detection Tech",
          description: "Thermal imaging, acoustic sensors, tracer gas technology, and moisture mapping."
        },
        {
          title: "System Repairs",
          description: "Domestic water pipework, heating systems, underfloor heating, and flat roof sealing."
        }
      ]}
      benefits={[
        "Specialist non-destructive detection tools",
        "Rapid response to minimise water damage",
        "Expert engineers for permanent repairs",
        "Full remediation and drying services",
        "Detailed reporting for insurance claims",
        "Proactive system health monitoring"
      ]}
      faqs={[
        {
          question: "How do you find a leak without digging up the floor?",
          answer: "We use non-destructive methods like thermal imaging, acoustic sensors, and tracer gas to pinpoint leaks through floor and wall finishes."
        },
        {
          question: "Can you help with insurance claims documentation?",
          answer: "Yes, we provide detailed reports with photography and technical findings to support 'trace and access' insurance claims."
        }
      ]}
    />
  );
};

export default LeakDetectionRepair;
