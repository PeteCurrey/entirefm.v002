"use client";

import SectorPageTemplate from "@/components/shared/SectorPageTemplate";
import { GraduationCap } from "lucide-react";

const PBSAHub = () => {
  return (
    <SectorPageTemplate
      title="PBSA Facilities Management | Student Accommodation Compliance"
      metaDescription="High-density estates demand strict governance — we keep them compliant and incident-free. PBSA facilities management with rapid response."
      canonicalUrl="https://entirefm.com/sectors/pbsa"
      heroTitle="PBSA Facilities Management"
      heroSubtitle="High-density estates demand strict governance — we keep them compliant and incident-free."
      heroImage="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&q=80"
      heroIcon={GraduationCap}
      stats={[
        { value: "30+", label: "PBSA Buildings" },
        { value: "24/7", label: "Response Coverage" },
        { value: "100%", label: "Compliance Rate" },
        { value: "<4hr", label: "Emergency Response" }
      ]}
      sectorSummary={{
        title: "Student Accommodation FM",
        paragraphs: [
          "Purpose-built student accommodation presents unique facilities management challenges. High occupant turnover, varied usage patterns, and stringent safety requirements demand specialist expertise and rapid response capabilities.",
          "Our PBSA FM services combine comprehensive compliance management with resident-focused service delivery, ensuring safe, comfortable, and well-maintained student living environments across multi-building estates."
        ]
      }}
      risks={[
        {
          title: "High Occupant Turnover",
          description: "Annual turnovers create intensive maintenance windows. Quick turnaround cleaning, repairs, and safety checks are essential to meet move-in deadlines."
        },
        {
          title: "Fire Evacuation Safety",
          description: "Large numbers of young residents require robust fire safety systems. Regular testing, emergency lighting, and clear evacuation routes are critical.",
          link: "/services/fire-safety",
          linkText: "Fire Safety Services"
        },
        {
          title: "Legionella Temperature Control",
          description: "Multiple water systems across high-density buildings require comprehensive water hygiene programmes and regular temperature monitoring.",
          link: "/services/water-hygiene",
          linkText: "Water Hygiene Services"
        },
        {
          title: "Comfort Expectations & Complaints",
          description: "Student expectations for comfort are high. HVAC failures, noise issues, and maintenance delays quickly escalate to complaints and reputation damage."
        }
      ]}
      keySystems={[
        {
          category: "Safety Systems",
          items: [
            "Fire alarm and detection systems",
            "Emergency lighting networks",
            "Smoke ventilation (AOV)",
            "Door entry and access control",
            "CCTV and security systems",
            "Fire door maintenance"
          ]
        },
        {
          category: "Building Services",
          items: [
            "Communal heating systems",
            "Domestic hot water",
            "Ventilation and extraction",
            "Lifts and accessibility",
            "Laundry equipment",
            "BMS and energy management"
          ]
        }
      ]}
      operationalChallenges={[
        {
          title: "Term-Time Pressures",
          description: "Maintenance must be scheduled around academic calendars, with intensive works during vacation periods and minimal disruption during term time."
        },
        {
          title: "Multi-Building Coordination",
          description: "Large PBSA estates require coordinated maintenance across multiple buildings with consistent service standards and centralized reporting."
        },
        {
          title: "Resident Communication",
          description: "Young residents expect digital communication and rapid response. Poor service delivery generates complaints and impacts operator reputation."
        }
      ]}
      whyEntireFM={[
        "Compliance-focused PPM programmes tailored to PBSA requirements",
        "Rapid remedials with safety prioritisation",
        "IAQ monitoring and ventilation assurance",
        "Digital reporting for operator visibility",
        "Multi-site coordination and consistent standards",
        "24/7 emergency response capability"
      ]}
      caseStudies={[
        {
          title: "30+ Building PBSA Estate",
          description: "Compliance restored in 3 weeks. Fire risk eliminated. Water hygiene regime implemented. Zero student disruption.",
          link: "/case-studies",
          linkText: "View Case Studies"
        }
      ]}
      relatedServices={[
        {
          title: "Fire Safety",
          description: "Evacuation assurance",
          href: "/services/fire-safety"
        },
        {
          title: "Water Hygiene",
          description: "Temperature control",
          href: "/services/water-hygiene"
        },
        {
          title: "Ventilation",
          description: "IAQ monitoring",
          href: "/services/hvac-compliance"
        }
      ]}
      faqs={[
        {
          question: "How do you handle high-turnover periods in PBSA?",
          answer: "We schedule intensive maintenance during vacation periods, with rapid turnaround teams for move-in readiness. Our digital tracking ensures all units are signed off before new residents arrive."
        },
        {
          question: "What compliance is required for student accommodation?",
          answer: "PBSA requires fire safety compliance (fire alarms, emergency lighting, fire doors), water hygiene management, electrical EICRs, gas safety certificates, and lift maintenance certification."
        },
        {
          question: "Can you manage multiple PBSA buildings?",
          answer: "Yes. We provide coordinated FM services across multi-building estates with centralized helpdesk, consistent service standards, and unified compliance reporting."
        },
        {
          question: "How do you minimise disruption to students?",
          answer: "We schedule routine maintenance during low-occupancy periods and use discreet service delivery during term time. Emergency works are handled rapidly with clear resident communication."
        }
      ]}
    />
  );
};

export default PBSAHub;
