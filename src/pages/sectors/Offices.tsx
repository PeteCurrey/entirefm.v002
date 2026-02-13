import SectorPageTemplate from "@/components/shared/SectorPageTemplate";
import { Building2 } from "lucide-react";
import heroImage from "@/assets/sector-offices-hero.jpg";

const Offices = () => {
  return (
    <SectorPageTemplate
      title="Corporate Office Facilities Management | Compliance & Productivity"
      metaDescription="Compliance-driven FM protecting productivity, reputation and operational continuity for corporate workplaces. Fire, electrical, HVAC, gas and water compliance."
      canonicalUrl="https://entirefm.com/sectors/offices"
      heroTitle="Facilities Management for Corporate Workplaces"
      heroSubtitle="Compliance-driven FM that protects productivity, reputation and operational continuity for the corporate environment."
      heroImage={heroImage}
      heroIcon={Building2}
      stats={[
        { value: "500+", label: "Office Buildings" },
        { value: "99.2%", label: "Uptime Achieved" },
        { value: "24/7", label: "Support Available" },
        { value: "34%", label: "Satisfaction Improvement" }
      ]}
      sectorSummary={{
        title: "Corporate Office FM",
        paragraphs: [
          "Corporate office environments demand seamless facilities management that protects both productivity and compliance. Building failures impact employee comfort, operational continuity, and ultimately business performance.",
          "Our approach combines rigorous statutory compliance with smart preventive maintenance, ensuring your workplace operates at peak efficiency while meeting all regulatory requirements."
        ]
      }}
      complianceRisks={[
        {
          title: "Occupant Comfort Complaints",
          description: "Temperature fluctuations, poor air quality, and lighting issues directly impact employee productivity and satisfaction. Proactive HVAC and BMS management prevents complaints.",
          link: "/services/hvac",
          linkText: "HVAC Services"
        },
        {
          title: "HVAC Failures Disrupting Productivity",
          description: "System breakdowns during working hours cause significant business disruption. Planned maintenance and rapid response minimise operational impact.",
          link: "/services/hvac-compliance",
          linkText: "HVAC Compliance"
        },
        {
          title: "Fire & Electrical Governance",
          description: "Corporate offices face increasing scrutiny from regulators and insurers. Current fire safety documentation and electrical certificates are mandatory.",
          link: "/services/fire-safety",
          linkText: "Fire Safety"
        },
        {
          title: "ESG & EPC Uplift Pressure",
          description: "Environmental targets and minimum EPC requirements drive energy efficiency improvements. Our services support sustainability goals while reducing operating costs."
        }
      ]}
      keySystems={[
        {
          category: "Building Services",
          items: [
            "Air handling and HVAC systems",
            "Building Management Systems (BMS)",
            "Lighting and emergency lighting",
            "Power distribution systems",
            "Water systems and plumbing",
            "Lifts and vertical transport"
          ]
        },
        {
          category: "Safety & Security",
          items: [
            "Fire detection and alarm systems",
            "Access control and security",
            "CCTV and surveillance",
            "Emergency evacuation systems",
            "Fire suppression systems",
            "Intruder alarms"
          ]
        }
      ]}
      operationalChallenges={[
        {
          title: "Business Hours Constraints",
          description: "Intrusive maintenance must occur outside core business hours. Careful scheduling and out-of-hours teams ensure minimal disruption to operations."
        },
        {
          title: "Multi-Tenant Coordination",
          description: "Office buildings with multiple tenants require coordinated maintenance access, clear communication, and fair service level distribution."
        },
        {
          title: "Stakeholder Visibility",
          description: "Property managers, landlords, and tenants all require visibility on compliance status and maintenance activities. Digital reporting delivers transparency."
        }
      ]}
      whyEntireFM={[
        "Statutory compliance across fire, electrical, HVAC, gas and water",
        "Asset lifecycle PPM programmes",
        "Optimised BMS control for comfort and efficiency",
        "Smart work order management with digital reporting",
        "Rapid remedials protecting uptime",
        "ESG and sustainability support"
      ]}
      caseStudies={[
        {
          title: "12-Building Corporate Estate",
          description: "Unified compliance delivery, digital governance platform, and 34% improvement in tenant satisfaction scores.",
          link: "/case-studies",
          linkText: "View Case Studies"
        }
      ]}
      relatedServices={[
        {
          title: "Fire Safety",
          description: "BS 5839 compliance & testing",
          href: "/services/fire-safety"
        },
        {
          title: "HVAC Compliance",
          description: "TM44 & F-Gas governance",
          href: "/services/hvac-compliance"
        },
        {
          title: "PPM Programmes",
          description: "Asset lifecycle management",
          href: "/services/ppm"
        }
      ]}
      faqs={[
        {
          question: "What compliance is required for corporate offices?",
          answer: "Corporate offices require fire safety compliance (fire alarms, emergency lighting, fire risk assessments), electrical EICRs, HVAC TM44 inspections, water hygiene management, and gas safety certification where applicable."
        },
        {
          question: "How do you minimise disruption to office workers?",
          answer: "We schedule intrusive maintenance outside core business hours and coordinate with building management for access. Emergency works are handled discreetly with clear communication."
        },
        {
          question: "Can you manage multi-tenant office buildings?",
          answer: "Yes. We provide coordinated FM services with clear responsibility splits between landlord and tenant systems, centralised helpdesk, and transparent reporting for all stakeholders."
        },
        {
          question: "How do you support ESG and sustainability goals?",
          answer: "Our services include energy audits, BMS optimisation, LED lighting upgrades, and carbon reduction strategies. We help clients meet EPC requirements and environmental targets."
        }
      ]}
    />
  );
};

export default Offices;
