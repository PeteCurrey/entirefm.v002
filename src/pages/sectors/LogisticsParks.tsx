import SectorPageTemplate from "@/components/shared/SectorPageTemplate";
import { Truck } from "lucide-react";

const LogisticsParks = () => {
  return (
    <SectorPageTemplate
      title="Logistics Parks Facilities Management | Distribution Centre FM"
      metaDescription="Specialist facilities management for logistics parks and distribution centres. High-volume industrial estates with 24/7 operations and specialist handling systems."
      canonicalUrl="https://entirefm.com/sectors/logistics-parks"
      heroTitle="Logistics Parks & Distribution Centres"
      heroSubtitle="Compliance and maintenance for high-volume industrial estates."
      heroImage="https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80"
      heroIcon={Truck}
      stats={[
        { value: "500k", label: "Sq Ft Managed" },
        { value: "24/7", label: "Operations Support" },
        { value: "4hr", label: "Emergency Response" },
        { value: "LOLER", label: "Compliant" }
      ]}
      sectorSummary={{
        title: "Logistics Park FM Requirements",
        paragraphs: [
          "Logistics and distribution facilities operate under constant pressure. Failed loading bay equipment, broken roller shutters, or non-functional dock levellers directly impact operational throughput and cost tens of thousands in lost productivity.",
          "Multi-tenant logistics estates require coordinated FM services that minimize disruption to 24/7 operations while maintaining statutory compliance across all buildings. Our approach delivers responsive maintenance with clear accountability for operational and landlord systems."
        ]
      }}
      complianceRisks={[
        {
          title: "Loading Bay & Material Handling Equipment",
          description: "Dock levellers, roller shutters, and loading bay doors require regular inspection under LOLER and PUWER regulations. Equipment failure causes operational delays and safety risks.",
          link: "/services/dock-leveller-maintenance",
          linkText: "Dock Leveller Maintenance"
        },
        {
          title: "High-Bay Warehouse Lighting",
          description: "High-bay industrial lighting and emergency lighting systems ensure safe goods handling. Regular testing prevents accidents in pick-and-pack operations and maintains HSE compliance.",
          link: "/services/emergency-lighting",
          linkText: "Emergency Lighting"
        },
        {
          title: "Fire Safety in Warehousing",
          description: "Large storage facilities require sophisticated fire detection and suppression systems. Sprinkler maintenance, smoke ventilation, and compartmentation surveys are critical for insurance compliance.",
          link: "/services/fire-alarms",
          linkText: "Fire Alarm Services"
        },
        {
          title: "Environmental Control Systems",
          description: "Temperature-controlled storage requires reliable HVAC systems. Cold storage maintenance, refrigeration plant servicing, and temperature monitoring prevent stock loss and maintain food safety compliance.",
          link: "/services/hvac",
          linkText: "HVAC Services"
        }
      ]}
      keySystems={[
        {
          category: "Operational Equipment",
          items: [
            "Dock levellers and loading bays",
            "Roller shutters and sectional doors",
            "Goods lifts and mezzanine hoists",
            "Material handling conveyors",
            "Electric vehicle charging points",
            "Weighbridges and vehicle barriers"
          ]
        },
        {
          category: "Building Infrastructure",
          items: [
            "High-bay lighting systems",
            "Fire suppression and sprinklers",
            "HVAC and temperature control",
            "Backup power generation",
            "BMS and energy management",
            "Car park CO monitoring"
          ]
        }
      ]}
      operationalChallenges={[
        {
          title: "24/7 Operational Continuity",
          description: "Distribution centres operate around the clock. Maintenance must occur with minimal disruption to goods flow, requiring out-of-hours works and rapid emergency response."
        },
        {
          title: "Multi-Tenant Coordination",
          description: "Logistics parks with multiple occupiers require clear responsibility splits between landlord and tenant systems, coordinated access for communal areas, and fair cost allocation."
        },
        {
          title: "Operational Equipment Criticality",
          description: "Failed loading bays, broken roller shutters, or non-functional dock levellers halt operations immediately. Reactive response times directly impact business continuity."
        },
        {
          title: "Health & Safety Compliance",
          description: "Warehouse environments present forklift traffic, loading bay hazards, and height safety risks. Equipment maintenance prevents accidents and maintains HSE compliance."
        }
      ]}
      whyEntireFM={[
        "24/7 helpdesk and emergency call-out capability",
        "Specialist maintenance for loading bay equipment",
        "Multi-tenant coordination and cost allocation",
        "LOLER and PUWER compliance for lifting equipment",
        "Rapid response for operational equipment failures"
      ]}
      caseStudies={[
        {
          title: "Regional Distribution Hub",
          description: "Comprehensive hard FM services for a 500,000 sq ft distribution centre with 24/7 operations.",
          link: "/case-studies/logistics",
          linkText: "Read Case Study"
        }
      ]}
      relatedServices={[
        {
          title: "Dock Levellers",
          description: "LOLER compliance testing",
          href: "/services/dock-leveller-maintenance"
        },
        {
          title: "Roller Shutters",
          description: "Loading bay access",
          href: "/services/roller-shutter-maintenance"
        },
        {
          title: "Fire Safety",
          description: "Warehouse protection",
          href: "/services/fire-safety"
        }
      ]}
      faqs={[
        {
          question: "What makes logistics park FM different from standard industrial FM?",
          answer: "Logistics parks require 24/7 operational support, rapid response for loading bay equipment, specialist maintenance for material handling systems, and coordination across multiple tenant units with minimal disruption to goods flow."
        },
        {
          question: "Can you manage multi-tenant logistics estates?",
          answer: "Yes. We provide centralized FM services for landlords and tenants, with clear responsibility splits, coordinated maintenance scheduling, and transparent cost allocation across multiple occupiers."
        },
        {
          question: "What compliance applies to distribution centres?",
          answer: "Logistics facilities require standard building compliance plus specialist systems including loading bay equipment certification, dock leveller testing, roller shutter maintenance, goods lift inspections, and high-bay lighting compliance."
        },
        {
          question: "How do you handle emergency call-outs for operational equipment?",
          answer: "Our 24/7 helpdesk provides immediate response for critical failures affecting goods handling. Engineers are dispatched rapidly for loading bay equipment, roller shutters, and access systems that impact operational continuity."
        }
      ]}
    />
  );
};

export default LogisticsParks;
