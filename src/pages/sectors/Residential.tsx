import SectorPageTemplate from "@/components/shared/SectorPageTemplate";
import { Home } from "lucide-react";

const Residential = () => {
  return (
    <SectorPageTemplate
      title="Residential Estate Facilities Management | BTR & PRS FM"
      metaDescription="Specialist facilities management for residential estates. High-density apartment buildings, BTR portfolios, and PRS developments with resident-focused service delivery."
      canonicalUrl="https://entirefm.com/sectors/residential"
      heroTitle="Residential & Estate FM"
      heroSubtitle="High-density residential buildings, apartment blocks and PRS/BTR asset management."
      heroImage="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80"
      heroIcon={Home}
      stats={[
        { value: "500+", label: "Apartments Managed" },
        { value: "DBS", label: "Checked Engineers" },
        { value: "24/7", label: "Helpdesk Support" },
        { value: "100%", label: "Compliance Rate" }
      ]}
      sectorSummary={{
        title: "Residential FM Requirements",
        paragraphs: [
          "Residential estate management demands a different approach to commercial FM. Building compliance must be maintained while minimizing disruption to residents. Service requests require rapid response, clear communication, and discretion.",
          "BTR and PRS operators require consistent service delivery across portfolios, with centralized reporting and resident satisfaction metrics. Our approach balances regulatory compliance with the operational realities of occupied residential buildings."
        ]
      }}
      complianceRisks={[
        {
          title: "Fire Safety in Residential Buildings",
          description: "Post-Grenfell regulations have intensified fire safety requirements. Fire alarm systems, emergency lighting, fire door integrity, and compartmentation surveys are now mandatory for high-rise residential.",
          link: "/services/fire-safety",
          linkText: "Fire Safety Services"
        },
        {
          title: "Electrical Safety Regulations",
          description: "Landlords must provide current EICRs for rental properties. Communal area electrical systems, emergency lighting, and safety systems require regular testing and certification.",
          link: "/services/electrical",
          linkText: "Electrical Services"
        },
        {
          title: "Gas Safety Compliance",
          description: "Annual gas safety inspections are legally required for all rental properties. Communal boiler systems and individual apartment gas appliances must be certified before occupation.",
          link: "/services/gas-safety",
          linkText: "Gas Safety Services"
        },
        {
          title: "Water Hygiene Management",
          description: "Residential buildings with communal water systems require legionella risk assessments and temperature monitoring. Hot water systems, storage tanks, and cooling towers present infection control risks.",
          link: "/services/water-hygiene",
          linkText: "Water Hygiene Services"
        }
      ]}
      keySystems={[
        {
          category: "Building Safety Systems",
          items: [
            "Fire alarm and detection systems",
            "Emergency lighting and signage",
            "Smoke ventilation (AOV) systems",
            "Fire door maintenance",
            "Dry riser testing",
            "Sprinkler systems"
          ]
        },
        {
          category: "Communal Infrastructure",
          items: [
            "Communal heating systems",
            "Lift and elevator maintenance",
            "Access control and door entry",
            "Amenity space HVAC",
            "Car park ventilation",
            "BMS and energy management"
          ]
        }
      ]}
      operationalChallenges={[
        {
          title: "Occupied Building Works",
          description: "Maintenance must occur while residents are in occupation. Access arrangements, noise restrictions, and resident communication require careful coordination."
        },
        {
          title: "Resident Service Expectations",
          description: "Residents expect rapid response to maintenance requests, clear communication, and minimal disruption. Poor service delivery generates complaints and impacts tenant retention."
        },
        {
          title: "Multi-Site Portfolio Consistency",
          description: "BTR and PRS operators managing multiple sites require standardized service levels, centralized reporting, and consistent compliance across all buildings."
        },
        {
          title: "Regulatory Scrutiny",
          description: "Residential landlords face increased enforcement action for compliance failures. Local authority inspections and fire safety audits require immediate remediation of identified issues."
        }
      ]}
      whyEntireFM={[
        "Resident-focused helpdesk with clear SLAs",
        "DBS-checked engineers for residential access",
        "Compliance management for landlord regulations",
        "Multi-site portfolio reporting and coordination",
        "Out-of-hours emergency response"
      ]}
      caseStudies={[
        {
          title: "Student Accommodation Estate",
          description: "Comprehensive hard FM services for a purpose-built student accommodation development with 500+ beds.",
          link: "/case-studies/residential-pbsa",
          linkText: "Read Case Study"
        }
      ]}
      relatedServices={[
        {
          title: "Fire Safety",
          description: "Residential fire compliance",
          href: "/services/fire-safety"
        },
        {
          title: "Electrical",
          description: "EICR and testing",
          href: "/services/electrical"
        },
        {
          title: "Gas Safety",
          description: "Annual certification",
          href: "/services/gas-safety"
        }
      ]}
      faqs={[
        {
          question: "What types of residential properties do you manage?",
          answer: "We work with high-density apartment buildings, Build to Rent (BTR) portfolios, Private Rented Sector (PRS) developments, student accommodation, and residential estates requiring professional FM services."
        },
        {
          question: "How do you handle resident complaints about maintenance?",
          answer: "Our helpdesk provides direct resident contact points with clear SLAs. All works are logged, tracked, and reported through digital platforms accessible to property managers and residents."
        },
        {
          question: "What compliance is required for residential buildings?",
          answer: "Residential properties require fire safety compliance including fire alarm testing, emergency lighting, fire door inspections, gas safety certificates, electrical EICRs, water hygiene management, and lift maintenance certificates."
        },
        {
          question: "Can you manage communal areas and amenity spaces?",
          answer: "Yes. We provide hard FM for communal heating systems, gyms, co-working spaces, and shared facilities. Soft services including cleaning and grounds maintenance can be coordinated as part of integrated service delivery."
        }
      ]}
    />
  );
};

export default Residential;
