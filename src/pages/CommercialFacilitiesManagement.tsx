import SectorPageTemplate from "@/components/shared/SectorPageTemplate";
import { Building2 } from "lucide-react";
import heroImage from "@/assets/sector-offices-hero.jpg";

const CommercialFacilitiesManagement = () => {
  return (
    <SectorPageTemplate
      title="Commercial Facilities Management | Office FM Services UK"
      metaDescription="Commercial facilities management for offices, business parks & corporate estates. Fire, electrical, HVAC, water hygiene & planned maintenance — fully compliant, audit-ready."
      canonicalUrl="https://entirefm.com/commercial-facilities-management"
      heroTitle="Commercial Facilities Management"
      heroSubtitle="Compliance-driven facilities management for commercial offices, business parks and corporate estates — protecting productivity, reputation and regulatory compliance."
      heroImage={heroImage}
      heroIcon={Building2}
      stats={[
        { value: "500+", label: "Commercial Buildings" },
        { value: "99.2%", label: "Uptime Achieved" },
        { value: "24/7", label: "Reactive Support" },
        { value: "100%", label: "Compliance Rate" }
      ]}
      sectorSummary={{
        title: "Why Commercial FM Matters",
        paragraphs: [
          "Commercial buildings are high-value, high-occupancy environments where compliance failures carry real consequences — enforcement notices, business disruption, reputational damage and liability exposure. Every system must perform, every certificate must be current, and every risk must be managed.",
          "EntireFM delivers fully integrated facilities management for commercial properties across the UK. From statutory compliance and planned preventive maintenance to reactive repairs and building performance optimisation — we keep your estate safe, efficient and audit-ready."
        ]
      }}
      complianceRisks={[
        {
          title: "Fire Safety Compliance",
          description: "Fire risk assessments, alarm testing, emergency lighting, dry risers and suppression systems — all managed under BS 5839 and the Regulatory Reform (Fire Safety) Order 2005.",
          link: "/services/fire-safety",
          linkText: "Fire Safety Services"
        },
        {
          title: "Electrical Compliance & EICRs",
          description: "Fixed wiring inspections (EICRs), PAT testing, distribution board upgrades and emergency power systems — maintaining BS 7671 compliance across your portfolio.",
          link: "/services/electrical-compliance",
          linkText: "Electrical Compliance"
        },
        {
          title: "HVAC & Indoor Air Quality",
          description: "TM44 air conditioning inspections, F-Gas compliance, BMS optimisation and ventilation hygiene — protecting occupant comfort and regulatory standing.",
          link: "/services/hvac-compliance",
          linkText: "HVAC Compliance"
        },
        {
          title: "Water Hygiene & Legionella",
          description: "ACOP L8 risk assessments, temperature monitoring, tank inspections and remedial works — preventing Legionella risk in commercial water systems.",
          link: "/services/water-hygiene",
          linkText: "Water Hygiene"
        }
      ]}
      keySystems={[
        {
          category: "Building Services",
          items: [
            "Air handling units & HVAC systems",
            "Building Management Systems (BMS)",
            "Lighting & emergency lighting",
            "Power distribution & UPS",
            "Domestic water systems & plumbing",
            "Lifts & vertical transport"
          ]
        },
        {
          category: "Safety & Compliance",
          items: [
            "Fire detection & alarm systems",
            "Dry & wet riser systems",
            "Access control & security systems",
            "Emergency evacuation systems",
            "Lightning protection",
            "Gas safety systems"
          ]
        }
      ]}
      operationalChallenges={[
        {
          title: "Business Hours Constraints",
          description: "Intrusive maintenance must be scheduled outside core working hours. Our out-of-hours teams and careful planning ensure zero disruption to daily operations."
        },
        {
          title: "Multi-Tenant Coordination",
          description: "Commercial buildings with multiple tenants require coordinated access, clear communication and fair service level distribution between landlord and occupier systems."
        },
        {
          title: "Stakeholder Reporting",
          description: "Property managers, landlords and tenants all require real-time visibility on compliance status. Our CAFM dashboard delivers transparent, auditable reporting."
        },
        {
          title: "ESG & Energy Performance",
          description: "Minimum EPC ratings, carbon reduction targets and sustainability reporting are driving energy efficiency upgrades across commercial estates. We support the full journey."
        }
      ]}
      whyEntireFM={[
        "Statutory compliance across fire, electrical, HVAC, gas and water",
        "Planned preventive maintenance programmes with full lifecycle planning",
        "BMS optimisation for comfort, efficiency and cost reduction",
        "Digital work order management with real-time CAFM reporting",
        "Rapid reactive response protecting uptime and occupant satisfaction",
        "ESG support including energy audits and EPC improvement strategies",
        "Single-partner delivery across hard FM, compliance and critical systems"
      ]}
      caseStudies={[
        {
          title: "12-Building Corporate Estate",
          description: "Unified compliance delivery across a multi-site corporate portfolio. Digital governance platform deployed with 34% improvement in tenant satisfaction scores.",
          link: "/case-studies",
          linkText: "View Case Studies"
        },
        {
          title: "City Centre Office Complex — London",
          description: "Full statutory compliance turnaround within 90 days. HVAC optimisation reduced energy spend by 22% and eliminated comfort complaints across 6 floors.",
          link: "/case-studies/corporate-office-london",
          linkText: "View Case Study"
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
          question: "What does commercial facilities management include?",
          answer: "Commercial FM covers all hard services required to keep a commercial building safe, compliant and operational — including fire safety, electrical testing, HVAC maintenance, water hygiene, gas safety, lift maintenance and planned preventive maintenance programmes."
        },
        {
          question: "How do you handle multi-tenant commercial buildings?",
          answer: "We coordinate between landlord and tenant systems with clear responsibility matrices, centralised helpdesk management, and transparent reporting for all stakeholders including managing agents and property managers."
        },
        {
          question: "What compliance certifications do commercial offices need?",
          answer: "Commercial offices require fire risk assessments, fire alarm testing, emergency lighting testing, EICRs (electrical inspection condition reports), TM44 air conditioning inspections, ACOP L8 water hygiene assessments, gas safety certificates and asbestos management plans where applicable."
        },
        {
          question: "Can you support ESG and sustainability targets?",
          answer: "Yes — we provide energy audits, BMS optimisation, LED lighting upgrades, F-Gas phase-down support and carbon reduction strategies to help commercial landlords and tenants meet environmental targets and minimum EPC requirements."
        },
        {
          question: "Do you provide out-of-hours maintenance?",
          answer: "Yes. Our 24/7 reactive support ensures critical system failures are addressed immediately, while planned intrusive works are scheduled outside business hours to avoid disruption to tenants."
        }
      ]}
    />
  );
};

export default CommercialFacilitiesManagement;
