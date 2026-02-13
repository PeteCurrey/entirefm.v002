import SectorPageTemplate from "@/components/shared/SectorPageTemplate";
import { Plane } from "lucide-react";
import heroImage from "@/assets/sector-airports-hero.jpg";

const Airports = () => {
  return (
    <SectorPageTemplate
      title="Airport Facilities Management | Terminal & Airside FM"
      metaDescription="FM for terminals, airside/landside assets, critical systems and high-footfall infrastructure with 24/7 operational support."
      canonicalUrl="https://entirefm.com/sectors/airports"
      heroTitle="Airport Facilities Management"
      heroSubtitle="FM for terminals, airside/landside assets, critical systems and high-footfall infrastructure with 24/7 operational support."
      heroImage={heroImage}
      heroIcon={Plane}
      stats={[
        { value: "24/7", label: "Operational Support" },
        { value: "100%", label: "Airside Clearance" },
        { value: "<2hr", label: "Emergency Response" },
        { value: "CAA", label: "Compliant" },
      ]}
      sectorSummary={{
        title: "Airport FM Requirements",
        paragraphs: [
          "Airport facilities management operates under heightened regulatory scrutiny and operational pressure. Terminal buildings, airside infrastructure, and passenger-facing systems must maintain continuous availability while meeting aviation-specific compliance standards.",
          "Our approach recognizes that airport downtime is not an option. We deliver planned maintenance during off-peak hours, provide rapid emergency response, and maintain documentation to CAA standards."
        ]
      }}
      complianceRisks={[
        {
          title: "Fire Safety in High-Occupancy Spaces",
          description: "Terminals require enhanced fire detection, suppression, and evacuation systems. Regular testing of fire alarms, emergency lighting, and smoke control systems is critical. Non-compliance risks passenger safety and operational licensing."
        },
        {
          title: "Electrical System Integrity",
          description: "Baggage handling, security systems, and operational lighting depend on uninterrupted power.",
          link: "/services/electrical-compliance",
          linkText: "Electrical compliance testing"
        },
        {
          title: "HVAC & Air Quality",
          description: "Large terminal buildings require sophisticated HVAC systems to maintain air quality and passenger comfort. F-Gas compliance and regular servicing prevent system failures during peak periods.",
          link: "/services/hvac-compliance",
          linkText: "HVAC compliance"
        },
        {
          title: "Water Hygiene in Public Facilities",
          description: "Washrooms, catering facilities, and cooling towers present legionella risks.",
          link: "/services/water-hygiene",
          linkText: "Water hygiene programmes"
        }
      ]}
      keySystems={[
        {
          category: "Terminal Infrastructure",
          items: [
            "Passenger information displays",
            "Baggage handling systems",
            "Security screening equipment",
            "Automated doors and gates",
            "Lifts and escalators",
            "Public address systems"
          ]
        },
        {
          category: "Critical Building Systems",
          items: [
            "Standby power generation",
            "Fire suppression systems",
            "Emergency evacuation systems",
            "BMS and building controls",
            "Airside lighting systems",
            "Backup cooling systems"
          ]
        }
      ]}
      operationalChallenges={[
        {
          title: "24/7 Operations",
          description: "Airports never close. Maintenance must occur during minimal disruption windows, requiring night shifts and rapid mobilization for emergency works."
        },
        {
          title: "Security Clearances",
          description: "All personnel require airside passes and security vetting. Our engineers maintain current clearances and understand restricted area protocols."
        },
        {
          title: "Coordination Complexity",
          description: "Works must be coordinated with airport operations, airlines, retail tenants, and ground handling agents. Poor planning causes passenger disruption and operational delays."
        },
        {
          title: "Regulatory Oversight",
          description: "CAA compliance, health and safety audits, and local authority inspections require meticulous documentation and immediate response to findings."
        }
      ]}
      whyEntireFM={[
        "Security-cleared engineers with airside access",
        "24/7 emergency response and helpdesk support",
        "Off-peak scheduling to minimize passenger impact",
        "CAA-compliant documentation and audit trails",
        "Rapid mobilization for critical system failures"
      ]}
      caseStudies={[
        {
          title: "Regional Airport Terminal",
          description: "Comprehensive hard FM services for a regional airport terminal including airside and landside maintenance.",
          link: "/case-studies/aviation",
          linkText: "Read case study"
        },
        {
          title: "Aviation Travel Hub",
          description: "Multi-year FM contract supporting passenger terminals and associated infrastructure.",
          link: "/sectors/aviation-travel-hub",
          linkText: "View sector overview"
        }
      ]}
      relatedServices={[
        { title: "Fire Safety", description: "Life safety systems", href: "/services/fire-safety" },
        { title: "Electrical Compliance", description: "Power infrastructure", href: "/services/electrical-compliance" },
        { title: "Generator Maintenance", description: "Standby power", href: "/services/generator-maintenance" }
      ]}
      faqs={[
        {
          question: "What makes airport FM different from standard commercial FM?",
          answer: "Airport environments require airside-specific compliance, 24/7 operational continuity, rapid response protocols, and coordination with aviation authorities. Critical systems cannot fail during operational hours."
        },
        {
          question: "Can you work airside?",
          answer: "Our engineers hold airside security clearances and are trained in airport operational protocols. All works comply with CAA regulations and airport-specific requirements."
        },
        {
          question: "How do you manage works during peak passenger flow?",
          answer: "We schedule maintenance during off-peak hours and use phased approaches for critical areas. Emergency works are executed with minimal disruption to passenger experience and flight operations."
        },
        {
          question: "What compliance standards apply to airport buildings?",
          answer: "Airports require standard building compliance plus aviation-specific regulations including CAA guidance, BCAR standards, emergency evacuation systems, and enhanced fire safety measures for high-occupancy public spaces."
        }
      ]}
    />
  );
};

export default Airports;
