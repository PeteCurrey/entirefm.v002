"use client";

import SectorPageTemplate from "@/components/shared/SectorPageTemplate";
import { Home } from "lucide-react";

const ResidentialPBSA = () => {
  return (
    <SectorPageTemplate
      title="Residential Block FM UK | PBSA Facilities Management"
      metaDescription="Life-safety compliance & resident satisfaction delivered. FM that protects living standards, life safety, asset value — and the reputation of those responsible."
      canonicalUrl="https://entirefm.com/sectors/residential-pbsa"
      heroTitle="Residential Blocks & PBSA FM"
      heroSubtitle="Happy residents. Zero complaints. Full compliance. FM that protects living standards, life safety, asset value — and the reputation of those responsible."
      heroImage="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80"
      heroIcon={Home}
      stats={[
        { value: "100%", label: "FRA Resolution" },
        { value: "35%", label: "Reactive Reduction" },
        { value: "8 weeks", label: "Compliance Turnaround" },
        { value: "24/7", label: "Resident Support" },
      ]}
      sectorSummary={{
        title: "The Reality: Residents Complain Immediately",
        paragraphs: [
          "In housing environments, a single failure can trigger reputation damage for landlords and managing agents, escalated complaints to councils and ombudsman, safety issues for occupants, tenant compensation claims, void losses and churn.",
          "We take FM issues out of the spotlight — before residents take them public. Our approach covers life safety compliance, building services, water hygiene, fabric maintenance, security systems, and resident experience."
        ]
      }}
      risks={[
        {
          title: "Life Safety Compliance",
          description: "Fire alarms, emergency lighting, compartmentation, and FRA action tracking are critical in residential settings where occupants may be sleeping during emergencies.",
          link: "/services/fire-safety",
          linkText: "Fire safety services"
        },
        {
          title: "Water Hygiene",
          description: "ACOP L8 compliance for shared water systems protects residents from legionella and other waterborne hazards.",
          link: "/services/water-hygiene",
          linkText: "Water hygiene management"
        },
        {
          title: "Fire Door Integrity",
          description: "Fire door inspection and upgrades ensure compartmentation is maintained and evacuation routes remain safe."
        },
        {
          title: "Regulatory Scrutiny",
          description: "Post-Grenfell regulations require meticulous documentation of all safety systems, inspections, and remediation works."
        }
      ]}
      keySystems={[
        {
          category: "Life Safety Systems",
          items: [
            "Fire alarms & detection",
            "Emergency lighting",
            "Fire door maintenance",
            "Smoke ventilation",
            "Dry risers",
            "Evacuation systems"
          ]
        },
        {
          category: "Building Services",
          items: [
            "Communal HVAC",
            "Lifts & access",
            "Water treatment",
            "Electrical distribution",
            "Entry systems",
            "Common area lighting"
          ]
        }
      ]}
      operationalChallenges={[
        {
          title: "Resident Communications",
          description: "We manage the communications flow to protect reputation — dedicated helpdesk, real-time reporting, photo proof of every job, and resident-friendly communication options."
        },
        {
          title: "Multi-Stakeholder Management",
          description: "Works require coordination with freeholders, managing agents, PBSA operators, and institutional owners while maintaining resident satisfaction."
        },
        {
          title: "24/7 Emergency Response",
          description: "Residential risk never sleeps. Our 24/7 helpdesk ensures immediate response to critical issues affecting resident safety and comfort."
        },
        {
          title: "Distressed Compliance Cases",
          description: "We specialise in fast turnaround on fire risk and hygiene deficiencies, bringing non-compliant properties up to standard quickly."
        }
      ]}
      whyEntireFM={[
        "Full FRA action tracking and remediation",
        "Rapid compliance turnaround for distressed portfolios",
        "24/7 helpdesk with resident-friendly communications",
        "Photo-documented proof for every job completed",
        "Asset lifecycle governance for investment-grade visibility"
      ]}
      caseStudies={[
        {
          title: "Student Residence — Midlands",
          description: "Resolved 100% historical FRAs within 8 weeks. Stopped major water hygiene failure risk. Reactive calls reduced by 35%.",
          link: "/case-studies",
          linkText: "View case studies"
        },
        {
          title: "High-Rise Block — UK City",
          description: "Fire doors and dampers compliance overhaul. Refurb of communal areas improved resident ratings. Introduced tech for real-time job visibility.",
          link: "/case-studies",
          linkText: "View case studies"
        }
      ]}
      relatedServices={[
        { title: "Fire Safety", description: "Life safety compliance", href: "/services/fire-safety" },
        { title: "Water Hygiene", description: "ACOP L8 compliance", href: "/services/water-hygiene" },
        { title: "Emergency Lighting", description: "Evacuation safety", href: "/services/emergency-lighting" }
      ]}
      faqs={[
        {
          question: "Do you support both housing associations and private managing agents?",
          answer: "Yes — we provide scalable support models for any portfolio size, from single blocks to large residential estates and PBSA operators."
        },
        {
          question: "Do you take on distressed compliance cases?",
          answer: "Regularly — we specialise in fast turnaround on fire risk and hygiene deficiencies, bringing non-compliant properties up to standard quickly."
        },
        {
          question: "Do residents contact you directly for issues?",
          answer: "Yes — with communications handled professionally to reduce agent workload and improve resident satisfaction through faster response times."
        },
        {
          question: "Do you provide emergency call-outs 24/7?",
          answer: "Always — residential risk never sleeps. Our 24/7 helpdesk ensures immediate response to critical issues affecting resident safety and comfort."
        }
      ]}
    />
  );
};

export default ResidentialPBSA;
