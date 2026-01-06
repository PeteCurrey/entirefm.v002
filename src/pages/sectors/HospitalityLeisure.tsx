import SectorPageTemplate from "@/components/shared/SectorPageTemplate";
import { UtensilsCrossed } from "lucide-react";

const HospitalityLeisure = () => {
  return (
    <SectorPageTemplate
      title="Hospitality Facilities Management UK"
      metaDescription="Protect guest satisfaction & brand reviews with flawless FM. Seamless FM that protects service continuity, brand perception, hygiene standards, and guest satisfaction."
      canonicalUrl="https://entirefm.com/sectors/hospitality-leisure"
      heroTitle="When the Experience Fails, the Guest Doesn't Return"
      heroSubtitle="Seamless FM that protects service continuity, brand perception, hygiene standards, and guest satisfaction."
      heroImage="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80"
      heroIcon={UtensilsCrossed}
      stats={[
        { value: "28", label: "Rooms Returned to Revenue" },
        { value: "21%", label: "Complaint Reduction" },
        { value: "Zero", label: "Guest Disruption" },
        { value: "24/7", label: "Reactive Cover" }
      ]}
      sectorSummary={{
        title: "Hospitality Has Zero Tolerance for Downtime",
        paragraphs: [
          "In hotels and leisure environments, facility failures translate directly into guest dissatisfaction and lost revenue. Comfort complaints, food safety issues, out-of-order rooms, water hygiene risks, aesthetic deterioration, and air quality failures all become TripAdvisor ammunition and lost bookings.",
          "Guests shouldn't notice good FM. They should only notice everything working flawlessly. Our job is to keep every room and venue revenue-ready."
        ]
      }}
      complianceRisks={[
        {
          title: "Guest Comfort Complaints",
          description: "Temperature and ambience issues directly impact guest satisfaction and reviews. HVAC reliability is critical for positive experiences.",
          link: "/services/hvac-compliance",
          linkText: "HVAC Services"
        },
        {
          title: "Food Safety & Kitchen Compliance",
          description: "Kitchen equipment and refrigeration failures create food safety risks. Gas certification, extraction, and cold storage require constant attention.",
          link: "/services/gas-safety",
          linkText: "Gas Safety Services"
        },
        {
          title: "Water Hygiene Risks",
          description: "ACOP L8 compliance for water systems protects guest health. Legionella prevention in pools, spas, and domestic water systems is mandatory.",
          link: "/services/water-hygiene",
          linkText: "Water Hygiene Services"
        },
        {
          title: "Fire & Life Safety",
          description: "Guest safety depends on robust fire detection, emergency lighting, and evacuation systems. Regular testing protects both guests and operating licenses.",
          link: "/services/fire-safety",
          linkText: "Fire Safety Services"
        }
      ]}
      keySystems={[
        {
          category: "Guest-Facing Areas",
          items: [
            "Room HVAC and temperature control",
            "Lighting and ambience systems",
            "Reception and lobby presentation",
            "Pool and spa plant",
            "Public washrooms",
            "Lifts and accessibility"
          ]
        },
        {
          category: "Back of House",
          items: [
            "Kitchen extraction and gas",
            "Refrigeration and cold storage",
            "Laundry and housekeeping equipment",
            "Staff facilities",
            "Loading and logistics",
            "Backup power systems"
          ]
        }
      ]}
      operationalChallenges={[
        {
          title: "Live Trading Environment",
          description: "Hospitality operates 24/7 with guests present. Maintenance must be silent, discreet, and scheduled around peak occupancy periods."
        },
        {
          title: "Brand Standards Compliance",
          description: "Major hospitality groups require strict adherence to brand FM standards. Our teams understand brand-specific requirements and presentation expectations."
        },
        {
          title: "Revenue Impact Awareness",
          description: "Rooms offline mean money lost. Our PPM approach ensures maximum revenue availability through low occupancy scheduling and rapid turnarounds."
        },
        {
          title: "Multi-Property Portfolios",
          description: "National hospitality groups need scalable FM models with unified reporting across multiple locations."
        }
      ]}
      whyEntireFM={[
        "24/7 reactive cover — hospitality doesn't have office hours, and neither do we",
        "Manage both front-of-house and back-of-house assets comprehensively",
        "Silent and discreet execution during busy periods",
        "Scalable FM models with unified reporting for national portfolios",
        "Energy efficiency upgrades that drive margin gains",
        "Smart controls for temperature and access visibility"
      ]}
      caseStudies={[
        {
          title: "Major Hotel Group — North",
          description: "Returned 28 rooms to revenue status within 2 weeks. 21% reduction in comfort-related complaints. Washroom refurb rollout with zero guest disruption.",
          link: "/case-studies/hospitality",
          linkText: "Read Case Study"
        },
        {
          title: "Leisure Facility — UK",
          description: "Pool plant overhaul delivering stable water quality. Improved IAQ reducing staff sickness reports. Immediate first-time fixes during peak trading hours.",
          link: "/case-studies/hospitality",
          linkText: "Read Case Study"
        }
      ]}
      relatedServices={[
        {
          title: "Water Hygiene",
          description: "Pool & spa compliance",
          href: "/services/water-hygiene"
        },
        {
          title: "Kitchen Gas",
          description: "CP42 certification",
          href: "/services/gas-safety"
        },
        {
          title: "HVAC Comfort",
          description: "Guest room climate",
          href: "/services/hvac-compliance"
        }
      ]}
      faqs={[
        {
          question: "Do you provide 24/7 reactive cover?",
          answer: "Yes — hospitality doesn't have office hours, and neither do we. Our team is available around the clock to handle urgent maintenance issues and ensure your operations continue smoothly."
        },
        {
          question: "Do you manage both front-of-house and back-of-house assets?",
          answer: "Comprehensively — we maintain both brand-critical front-of-house areas and essential back-of-house operational systems to ensure complete facility performance."
        },
        {
          question: "Can you work during live trading and high occupancy?",
          answer: "Absolutely — we excel at silent and discreet execution during busy periods, minimizing any disruption to guests while maintaining the highest standards."
        },
        {
          question: "Do you support national hotel portfolios?",
          answer: "Yes — we offer scalable FM models with unified reporting across multiple locations, ensuring consistent service delivery for national hospitality groups."
        }
      ]}
    />
  );
};

export default HospitalityLeisure;
