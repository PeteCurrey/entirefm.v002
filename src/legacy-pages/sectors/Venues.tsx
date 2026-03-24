"use client";

import SectorPageTemplate from "@/components/shared/SectorPageTemplate";
import { Ticket } from "lucide-react";

const Venues = () => {
  return (
    <SectorPageTemplate
      title="Venue & Arena Facilities Management | Event Space FM"
      metaDescription="Specialist facilities management for venues, arenas, and stadiums. High-capacity public buildings with complex safety systems and event-focused service delivery."
      canonicalUrl="https://entirefm.com/sectors/venues"
      heroTitle="Venue, Arena & Stadium Facilities Management"
      heroSubtitle="High-capacity public buildings with complex safety and compliance systems."
      heroImage="https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&q=80"
      heroIcon={Ticket}
      stats={[
        { value: "50k+", label: "Capacity Venues" },
        { value: "24/7", label: "Event Support" },
        { value: "100%", label: "License Compliance" },
        { value: "Zero", label: "Event Cancellations" }
      ]}
      sectorSummary={{
        title: "Venue FM Requirements",
        paragraphs: [
          "Entertainment venues, sports arenas, and conference facilities operate under intense regulatory scrutiny. These high-occupancy buildings demand robust fire safety systems, enhanced emergency evacuation protocols, and meticulous compliance documentation.",
          "Maintenance must be scheduled around event calendars, with rapid response capabilities for issues that could impact shows or public safety. Our approach balances operational continuity with statutory compliance requirements."
        ]
      }}
      risks={[
        {
          title: "Fire Safety & Emergency Evacuation",
          description: "Large public assemblies require enhanced fire detection and suppression systems. Emergency lighting, fire alarm testing, and evacuation chair servicing are critical for license retention and public safety.",
          link: "/services/fire-safety",
          linkText: "Fire Safety Services"
        },
        {
          title: "Electrical Infrastructure for Events",
          description: "Staging, lighting rigs, and sound systems place heavy demands on electrical distribution. Regular EICRs and fixed wire testing prevent failures during high-profile events.",
          link: "/services/electrical",
          linkText: "Electrical Services"
        },
        {
          title: "HVAC for High-Occupancy Spaces",
          description: "Maintaining air quality and thermal comfort with thousands of occupants requires sophisticated HVAC systems. Regular servicing prevents discomfort and complaints during peak events.",
          link: "/services/hvac",
          linkText: "HVAC Services"
        },
        {
          title: "Public Washroom Water Hygiene",
          description: "High-use public washrooms and catering facilities present legionella risks. Water hygiene programmes and regular temperature monitoring are mandatory.",
          link: "/services/water-hygiene",
          linkText: "Water Hygiene Services"
        }
      ]}
      keySystems={[
        {
          category: "Public Safety Systems",
          items: [
            "Fire alarm and detection systems",
            "Emergency lighting and signage",
            "Smoke ventilation systems",
            "Sprinkler and suppression systems",
            "Disabled refuge communication",
            "Public address systems"
          ]
        },
        {
          category: "Building Infrastructure",
          items: [
            "High-capacity HVAC systems",
            "Electrical distribution networks",
            "Backup power generation",
            "BMS and building controls",
            "Access control and turnstiles",
            "Lift and escalator systems"
          ]
        }
      ]}
      operationalChallenges={[
        {
          title: "Event Calendar Coordination",
          description: "Planned maintenance must occur during dark days between events. Poor scheduling causes conflicts with show production and revenue loss."
        },
        {
          title: "Public Safety Licensing",
          description: "Venues operate under licenses that require current compliance certificates. Expired documentation can result in event cancellation and license suspension."
        },
        {
          title: "High-Footfall Wear",
          description: "Public areas experience accelerated wear from thousands of visitors. Reactive maintenance must be rapid to maintain appearance and safety standards."
        },
        {
          title: "Emergency Response During Events",
          description: "Critical failures during sold-out events require immediate engineer attendance with minimal disruption to the audience experience."
        }
      ]}
      whyEntireFM={[
        "Scheduling around event calendars and dark days",
        "24/7 emergency response for critical failures",
        "Enhanced compliance for high-occupancy licensing",
        "Discreet service delivery during live events",
        "Multi-venue portfolio management capability"
      ]}
      caseStudies={[
        {
          title: "Conference & Events Centre",
          description: "Comprehensive FM services for a multi-purpose venue hosting conferences, concerts, and sporting events.",
          link: "/case-studies/hospitality",
          linkText: "Read Case Study"
        }
      ]}
      relatedServices={[
        {
          title: "Fire Safety",
          description: "High-occupancy compliance",
          href: "/services/fire-safety"
        },
        {
          title: "Electrical",
          description: "Event infrastructure",
          href: "/services/electrical"
        },
        {
          title: "HVAC",
          description: "Crowd comfort control",
          href: "/services/hvac"
        }
      ]}
      faqs={[
        {
          question: "Can you work around event schedules?",
          answer: "Yes. We schedule maintenance during dark days and off-peak periods. Emergency works are coordinated with event management to minimize disruption to shows and performances."
        },
        {
          question: "What compliance applies to venues and arenas?",
          answer: "Venues require enhanced fire safety for high-occupancy spaces, event-specific risk assessments, emergency evacuation systems, electrical safety for staging and lighting, and accessibility compliance for public areas."
        },
        {
          question: "Do you support multi-venue portfolios?",
          answer: "We manage FM across multiple venue sites with standardized processes, centralized helpdesk support, and coordinated engineering teams. Ideal for operators managing regional or national portfolios."
        },
        {
          question: "How do you handle emergency call-outs during events?",
          answer: "Our 24/7 helpdesk provides rapid response for critical failures. Engineers are dispatched immediately for issues affecting public safety or event continuity, with discretion and minimal visible disruption."
        }
      ]}
    />
  );
};

export default Venues;
