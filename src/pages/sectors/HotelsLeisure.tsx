import SectorPageTemplate from "@/components/shared/SectorPageTemplate";
import { Hotel } from "lucide-react";
import heroImage from "@/assets/sector-hotels-hero.jpg";

const HotelsLeisure = () => {
  return (
    <SectorPageTemplate
      title="Hotels & Leisure Facilities Management | Comfort, Safety & Uptime"
      metaDescription="Comfort, safety and uptime — guests never notice the work behind the luxury."
      canonicalUrl="https://entirefm.com/sectors/hotels-leisure"
      heroTitle="Facilities Management for Hotels & Leisure"
      heroSubtitle="Comfort, safety and uptime — guests never notice the work behind the luxury."
      heroImage={heroImage}
      heroIcon={Hotel}
      stats={[
        { value: "17%", label: "Fuel Savings" },
        { value: "Zero", label: "Guest Disruption" },
        { value: "14mo", label: "Payback Period" },
        { value: "24/7", label: "Support Coverage" }
      ]}
      sectorSummary={{
        title: "Hotels & Leisure FM",
        paragraphs: [
          "In hospitality, facilities failures directly impact guest satisfaction and revenue. A cold room, a broken lift, or a malfunctioning air conditioning system translates immediately into complaints, negative reviews, and lost bookings.",
          "Our approach delivers seamless FM that protects the guest experience. Maintenance is scheduled around occupancy patterns, engineers work discreetly, and all works are completed to the highest standards of presentation."
        ]
      }}
      complianceRisks={[
        {
          title: "HVAC & Hot Water Comfort",
          description: "Guest comfort depends on reliable temperature control and hot water availability. System failures during peak occupancy create immediate complaints and reputation damage.",
          link: "/services/hvac-compliance",
          linkText: "HVAC Services"
        },
        {
          title: "Kitchen Gas Safety (CP42)",
          description: "Commercial kitchens require annual gas safety certification. Non-compliance can result in immediate closure and significant revenue loss.",
          link: "/services/gas-safety",
          linkText: "Gas Safety Services"
        },
        {
          title: "Fire Safety Compliance",
          description: "Every guest relies on fire safety systems. Fire alarm testing, emergency lighting, and evacuation equipment require regular maintenance and testing.",
          link: "/services/fire-safety",
          linkText: "Fire Safety Services"
        },
        {
          title: "Brand Reputation Protection",
          description: "Maintenance quality directly impacts brand perception. Worn fixtures, broken equipment, and delayed repairs generate negative reviews and affect bookings."
        }
      ]}
      keySystems={[
        {
          category: "Guest Comfort Systems",
          items: [
            "Room HVAC and temperature control",
            "Domestic hot water systems",
            "Lighting and ambience",
            "Lifts and accessibility",
            "Pool and spa plant",
            "Laundry equipment"
          ]
        },
        {
          category: "Back of House",
          items: [
            "Kitchen extraction and gas",
            "Refrigeration systems",
            "Fire detection and suppression",
            "Emergency lighting",
            "BMS and energy management",
            "Backup power systems"
          ]
        }
      ]}
      operationalChallenges={[
        {
          title: "24/7 Guest Occupancy",
          description: "Hotels operate around the clock with varying occupancy. Maintenance must be scheduled to minimise guest awareness and disruption."
        },
        {
          title: "Brand Standards Compliance",
          description: "Major hotel groups require strict adherence to brand FM standards. Our teams understand brand-specific requirements and presentation expectations."
        },
        {
          title: "Revenue Protection",
          description: "Every out-of-service room represents lost revenue. Rapid response and efficient repairs minimise the commercial impact of maintenance issues."
        }
      ]}
      whyEntireFM={[
        "Ventilation IAQ performance assurance",
        "Pool water safety management",
        "Fire alarm and emergency lighting testing out of hours",
        "Proactive remedials preventing guest complaints",
        "Discreet service delivery during peak occupancy",
        "Multi-site portfolio capability"
      ]}
      caseStudies={[
        {
          title: "City Hotel",
          description: "Boiler upgrade delivered out of hours — 17% fuel saving, zero guest disruption, payback in 14 months.",
          link: "/case-studies",
          linkText: "View Case Studies"
        }
      ]}
      relatedServices={[
        {
          title: "Gas Safety",
          description: "CP42 kitchen compliance",
          href: "/services/gas-safety"
        },
        {
          title: "HVAC & Comfort",
          description: "IAQ performance",
          href: "/services/hvac-compliance"
        },
        {
          title: "Fire Safety",
          description: "Guest protection",
          href: "/services/fire-safety"
        }
      ]}
      faqs={[
        {
          question: "Can you work around hotel occupancy patterns?",
          answer: "Yes. We schedule planned maintenance during low-occupancy periods and complete intrusive works overnight. Our engineers understand the importance of discreet service delivery in guest-facing environments."
        },
        {
          question: "What gas safety compliance do hotels need?",
          answer: "Hotels with commercial kitchens require annual CP42 gas safety certification for all catering appliances, plus ongoing maintenance of gas detection and interlock systems."
        },
        {
          question: "How do you handle emergency call-outs?",
          answer: "Our 24/7 helpdesk provides immediate response for critical failures. Engineers are dispatched rapidly with priority given to issues affecting guest comfort or safety."
        },
        {
          question: "Do you support multi-property hotel groups?",
          answer: "Yes. We provide coordinated FM services across national hotel portfolios with standardised processes, centralised helpdesk, and unified compliance reporting."
        }
      ]}
    />
  );
};

export default HotelsLeisure;
