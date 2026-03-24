"use client";

import ServicePageTemplate from "@/components/shared/ServicePageTemplate";
import { Wrench } from "lucide-react";

const GeneralMaintenance = () => {
  return (
    <ServicePageTemplate
      title="General Building Maintenance | Reactive & Planned Support | EntireFM"
      metaDescription="Comprehensive general building maintenance for commercial properties. Handyman services, minor repairs, and architectural maintenance across the UK."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "General Maintenance" }
      ]}
      heroTitle="General Building Maintenance"
      heroSubtitle="Versatily maintenance support protecting the fabric and functionality of your commercial assets."
      heroImage="https://images.unsplash.com/photo-1581092921461-7d159a686997?auto=format&fit=crop&q=80"
      heroIcon={Wrench}
      stats={[
        { value: "National", label: "UK Coverage" },
        { value: "24/7", label: "Helpdesk" },
        { value: "Multi-Trade", label: "Support" },
        { value: "SLA", label: "Driven" }
      ]}
      overview={{
        title: "Professional Fabric Support",
        paragraphs: [
          "Our general maintenance services provide the flexible support needed to keep commercial buildings in peak condition. From minor fabric repairs to planned infrastructure upgrades, we cover all aspects of building maintenance.",
          "We provide both resident and mobile maintenance solutions tailored to the specific needs of your facility, ensuring small issues are resolved before they become major liabilities."
        ]
      }}
      risks={[
        {
          title: "Fabric Degradation",
          description: "Neglected building fabric leads to water ingress, structural issues, and decreased property value. Regular maintenance protects the building envelope."
        },
        {
          title: "Safety & Trip Hazards",
          description: "Minor floor damage, loose fixtures, and broken furniture create significant safety risks. Proactive repairs ensure a safe environment for all occupants."
        }
      ]}
      components={[
        {
          title: "Handyman Services",
          description: "Minor plumbing & electrical, furniture assembly, fixture installation, and door/window hardware repairs."
        },
        {
          title: "Building Fabric",
          description: "Painting and decorating, plastering, tiling, masonry repairs, and gutter maintenance."
        }
      ]}
      benefits={[
        "Experienced multi-trade maintenance teams",
        "Flexible reactive and planned delivery",
        "Consistent quality and professional standards",
        "Digital tracking and reporting on every job",
        "Health and safety focused approach",
        "Cost-effective maintenance solutions"
      ]}
      faqs={[
        {
          question: "Do you offer reactive maintenance?",
          answer: "Yes, we providing 24/7 reactive support for both emergency and non-emergency maintenance issues."
        },
        {
          question: "Can you provide a regular on-site handyman?",
          answer: "Absolutely. We offer scheduled maintenance visits where a multi-trade technician can handle a list of ongoing tasks."
        }
      ]}
    />
  );
};

export default GeneralMaintenance;
