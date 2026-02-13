import SectorPageTemplate from "@/components/shared/SectorPageTemplate";
import { Plane } from "lucide-react";
import heroImage from "@/assets/sector-airports-hero.jpg";

const AviationTravelHub = () => {
  return (
    <SectorPageTemplate
      title="Aviation & Travel Hub FM | Mission-Critical Maintenance"
      metaDescription="Mission-critical maintenance for environments where safety, security, and passenger flow are non-negotiable. Airside reliability meets landside excellence."
      canonicalUrl="https://entirefm.com/sectors/aviation-travel-hub"
      heroTitle="Aviation & Travel Hub FM"
      heroSubtitle="Mission-critical maintenance for environments where safety, security, and passenger flow are non-negotiable. Airside reliability meets landside excellence."
      heroImage={heroImage}
      heroIcon={Plane}
      stats={[
        { value: "24/7", label: "Operational Support" },
        { value: "100%", label: "Airside Clearance" },
        { value: "37%", label: "IAQ Improvement" },
        { value: "CAA", label: "Grade Compliant" },
      ]}
      sectorSummary={{
        title: "In Aviation, Downtime Isn't an Option — It's a Crisis",
        paragraphs: [
          "When assets fail at airports and travel hubs, the consequences cascade rapidly: passenger congestion multiplies, security risk escalates, airline schedules unravel, revenue evaporates, and brand damage spreads fast.",
          "We maintain continuous passenger movement — from kerb to gate. Our engineers are security cleared for restricted access environments and trained in aviation-specific operational protocols."
        ]
      }}
      complianceRisks={[
        {
          title: "Aviation Security Vetting",
          description: "All personnel require airside passes and security vetting. Our engineers maintain current clearances and understand restricted area protocols for seamless operations."
        },
        {
          title: "Life Safety Systems",
          description: "Fire systems, emergency lighting, and evacuation clearance require heightened attention in high-occupancy public spaces.",
          link: "/services/fire-safety",
          linkText: "Fire safety compliance"
        },
        {
          title: "Climate & IAQ Control",
          description: "Terminal HVAC and BMS optimisation ensure passenger comfort and air quality compliance across large footprint buildings.",
          link: "/services/hvac-compliance",
          linkText: "HVAC compliance"
        },
        {
          title: "Permit to Work Regimes",
          description: "Strict RAMS and incident reporting protocols ensure all works comply with aviation-specific safety standards and CAA expectations."
        }
      ]}
      keySystems={[
        {
          category: "Passenger Circulation",
          items: [
            "Escalators & travelators",
            "Passenger lifts",
            "Signage & wayfinding",
            "Emergency lighting",
            "Public address systems",
            "Automated doors & gates"
          ]
        },
        {
          category: "Critical Infrastructure",
          items: [
            "Terminal HVAC systems",
            "Standby generators & UPS",
            "Fire detection & suppression",
            "Security system infrastructure",
            "BMS & building controls",
            "High-bay lighting systems"
          ]
        }
      ]}
      operationalChallenges={[
        {
          title: "24/7 Operations",
          description: "Airports and travel hubs never close. Maintenance must occur during minimal disruption windows, requiring night shifts and rapid mobilization for emergency works."
        },
        {
          title: "Peak Hours Avoidance",
          description: "PPM is planned around flight schedules and passenger flow patterns. Night-works capability and rapid reactive models ensure zero disruption to airline efficiency."
        },
        {
          title: "Multi-Zone Coordination",
          description: "Works span airside and landside environments, retail zones, car parks, and secure operational spaces — all requiring different access protocols and safety measures."
        },
        {
          title: "Passenger Experience Impact",
          description: "FM directly affects satisfaction scores, queuing times, comfort perception, accessibility performance, and retail revenue opportunities."
        }
      ]}
      whyEntireFM={[
        "Security-cleared engineers with airside pass controls",
        "24/7 helpdesk with rapid emergency response",
        "CAA-grade compliance and documentation",
        "Night scheduling and micro-zone control strategies",
        "Seamless landside and airside operational support"
      ]}
      caseStudies={[
        {
          title: "Terminal Retail Mall Compliance",
          description: "Fire compliance uplift in terminal retail mall. Zero-failure evacuation routes verified airside.",
          link: "/case-studies",
          linkText: "View case studies"
        },
        {
          title: "Terminal Climate Optimization",
          description: "HVAC redesign improved IAQ scores by 37%. Brand-critical repairs completed under live terminal conditions.",
          link: "/case-studies",
          linkText: "View case studies"
        }
      ]}
      relatedServices={[
        { title: "Fire Safety", description: "Life safety systems", href: "/services/fire-safety" },
        { title: "Generator Maintenance", description: "Standby power", href: "/services/generator-maintenance" },
        { title: "HVAC Compliance", description: "Terminal climate", href: "/services/hvac-compliance" }
      ]}
      faqs={[
        {
          question: "Are you authorised to work airside?",
          answer: "Yes — our engineers and supervisors are security cleared and hold current airside passes, ensuring full compliance with aviation security standards."
        },
        {
          question: "Do you support both landside and airside operations?",
          answer: "Seamlessly — we operate across both environments using the same control systems, but with heightened safety protocols for airside work."
        },
        {
          question: "Do you comply with aviation safety governance?",
          answer: "Yes — we're fully compliant with airside safety requirements and CAA expectations, with strict adherence to Permit to Work and incident reporting procedures."
        },
        {
          question: "How do you avoid passenger disruption?",
          answer: "Through night scheduling, micro-zone control strategies, and rapid execution capabilities that minimize impact on passenger flow and operations."
        }
      ]}
    />
  );
};

export default AviationTravelHub;
