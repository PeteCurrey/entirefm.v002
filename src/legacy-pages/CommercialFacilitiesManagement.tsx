"use client";

import SectorPageTemplate from "@/components/shared/SectorPageTemplate";
import { Building2 } from "lucide-react";

const CommercialFacilitiesManagement = () => {
  return (
    <SectorPageTemplate
      title="Commercial Facilities Management | Office & Estate FM Services UK"
      metaDescription="Comprehensive commercial facilities management for offices, business parks, and corporate estates. Strategic maintenance and compliance delivery."
      canonicalUrl="https://entirefm.com/commercial-facilities-management"
      heroTitle="Commercial Facilities Management"
      heroSubtitle="Strategic FM solutions and technical building services for commercial property and corporate estates."
      heroImage="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
      heroIcon={Building2}
      stats={[
        { value: "500+", label: "Commercial Sites" },
        { value: "24/7", label: "Helpdesk Support" },
        { value: "99%", label: "SLA Compliance" },
        { value: "15+", label: "Years Experience" }
      ]}
      sectorSummary={{
        title: "Integrated Commercial FM",
        paragraphs: [
          "Commercial property management requires a sophisticated approach to facilities management that balances operational efficiency with occupant comfort and statutory compliance.",
          "Entire FM provides comprehensive maintenance and support services for commercial offices, business parks, and retail developments, ensuring your assets are protected and your tenants are satisfied."
        ]
      }}
      risks={[
        {
          title: "Statutory Compliance",
          description: "Ensuring all electrical, gas, fire, and water systems meet UK regulatory requirements. We manage your compliance calendar and documentation.",
          link: "/services/electrical-compliance",
          linkText: "Compliance Services"
        },
        {
          title: "Operational Resilience",
          description: "Preventing business disruption through robust planned maintenance and 24/7 reactive support. We protect your critical building systems.",
          link: "/services/ppm",
          linkText: "PPM Programs"
        },
        {
          title: "Energy Efficiency",
          description: "Optimising building performance to reduce operating costs and support ESG goals. Our engineers focus on efficient system operation and monitoring.",
          link: "/services/energy-audits",
          linkText: "Energy Services"
        }
      ]}
      keySystems={[
        {
          category: "Hard Services",
          items: [
            "Mechanical & Electrical (M&E)",
            "HVAC & Air Conditioning",
            "Fire Safety & Life Safety",
            "Water Hygiene (L8)",
            "Building Fabric Maintenance",
            "Lift & Escalator Care"
          ]
        },
        {
          category: "Soft Services",
          items: [
            "Commercial Cleaning",
            "CCTV & Security Systems",
            "Grounds Maintenance",
            "Waste Management",
            "Front of House & Reception",
            "Pest Control"
          ]
        }
      ]}
      operationalChallenges={[
        {
          title: "Stakeholder Management",
          description: "Balancing the needs of landlords, property managers, and tenants with clear communication and consistent service levels."
        },
        {
          title: "Business Continuity",
          description: "Maintaining critical services during business hours while scheduling intrusive works for out-of-hours delivery."
        },
        {
          title: "Cost Control",
          description: "Optimising service charge expenditure through efficient procurement and preventive maintenance strategies."
        }
      ]}
      whyEntireFM={[
        "Single point of contact for all FM requirements",
        "Digital compliance tracking and real-time reporting",
        "Qualified team of mobile and site-based engineers",
        "Bespoke service level agreements tailored to your site",
        "Commitment to sustainability and energy reduction",
        "Transparent pricing and cost-effective delivery"
      ]}
      caseStudies={[
        {
          title: "Central London Office Complex",
          description: "Complete FM transition for a 150,000 sq ft multi-tenanted office building, achieving 20% energy savings in the first year.",
          link: "/case-studies",
          linkText: "View Case Study"
        }
      ]}
      relatedServices={[
        {
          title: "Hard FM",
          description: "Technical building maintenance",
          href: "/services/hard-services"
        },
        {
          title: "PPM",
          description: "Planned maintenance delivery",
          href: "/services/ppm"
        },
        {
          title: "Compliance",
          description: "Statutory governance & testing",
          href: "/services/compliance"
        }
      ]}
      faqs={[
        {
          question: "What types of commercial property do you manage?",
          answer: "We manage a wide range of commercial assets including corporate offices, managed business centres, retail parks, and mixed-use developments across the UK."
        },
        {
          question: "How do you handle emergency repairs?",
          answer: "We operate a 24/7 helpdesk and have a national network of engineers available to respond to emergencies with guaranteed response times."
        },
        {
          question: "Do you provide digital reporting?",
          answer: "Yes, all our maintenance activities and compliance documentation are managed through our digital platform, providing you with real-time visibility."
        }
      ]}
    />
  );
};

export default CommercialFacilitiesManagement;
