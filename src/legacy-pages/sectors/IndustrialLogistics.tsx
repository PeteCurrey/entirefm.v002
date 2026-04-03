"use client";

import SectorPageTemplate from "@/components/shared/SectorPageTemplate";
import { Warehouse } from "lucide-react";

const IndustrialLogistics = () => {
  return (
    <SectorPageTemplate
      title="FM for Logistics & Industrial Sites UK | Warehouse Facilities Management"
      metaDescription="Uptime-critical FM for warehouses & logistics. SLA excellence. FM for logistics environments where downtime costs thousands per minute."
      canonicalUrl="https://entirefm.com/sectors/logistics-industrial"
      heroTitle="Industrial & Logistics FM"
      heroSubtitle="Operational continuity, delivered. FM for logistics environments where downtime costs thousands per minute — and excuses aren't tolerated."
      heroImage="/images/hero-industrial.png"
      heroIcon={Warehouse}
      stats={[
        { value: "32%", label: "Reactive Reduction" },
        { value: "18%", label: "Energy Savings" },
        { value: "24/7", label: "Operations Support" },
        { value: "Zero", label: "Peak Downtime" },
      ]}
      sectorSummary={{
        title: "Logistics Never Stops — And Neither Do We",
        paragraphs: [
          "Industrial and distribution centres run 24/7 operations with tight SLAs, intense usage on assets, and critical safety obligations. Failure means missed dispatch windows, stock write-offs, damaged reputation, and lost revenue.",
          "EntireFM firefights the risks before they become failures. We support general warehouses, temperature-controlled facilities, and automation-heavy operations with rapid response and proactive maintenance."
        ]
      }}
      risks={[
        {
          title: "High Reactive Call-Outs",
          description: "Logistics environments experience intense asset usage. Our rapid response and fault eradication strategy minimizes downtime and prevents recurring issues."
        },
        {
          title: "Industrial Health & Safety",
          description: "Strict adherence to PUWER, COSHH, Permit to Work policies, and risk & method statements protects your workforce and operations.",
          link: "/services/compliance",
          linkText: "Compliance services"
        },
        {
          title: "Boundary Asset Exposure",
          description: "External infrastructure faces heavy weather exposure. Preventative exterior fabric protection maintains asset integrity and safety."
        },
        {
          title: "Downtime Sensitivity",
          description: "Night and shift-based work schedules with real visibility ensure maintenance happens without impacting operational throughput."
        }
      ]}
      keySystems={[
        {
          category: "Building Services",
          items: [
            "HVAC for high-volume air changes",
            "Roller shutters & dock levellers",
            "Electrical & high-bay lighting",
            "Fire alarms & emergency lighting",
            "Sprinkler systems & smoke vents",
            "Security systems & access control"
          ]
        },
        {
          category: "Industrial Compliance",
          items: [
            "Water hygiene compliance",
            "Generator & standby power",
            "Racking inspections",
            "Forklift charging infrastructure",
            "Temperature monitoring",
            "Hazardous area maintenance"
          ]
        }
      ]}
      operationalChallenges={[
        {
          title: "24/7 Operations Support",
          description: "Logistics requires zero downtime. We match that energy with round-the-clock availability and rapid response protocols."
        },
        {
          title: "Warehouse Automation Integration",
          description: "We work around conveyors, robotics, and AGVs without disruption, understanding the critical nature of automated systems."
        },
        {
          title: "Neglected Maintenance Portfolios",
          description: "We regularly take on distressed assets with a rapid initial stabilisation programme to restore compliance and reliability."
        },
        {
          title: "Response Time Excellence",
          description: "Minutes, not hours — backed by live ETA visibility via our portal. Asset criticality determines SLA acceleration."
        }
      ]}
      whyEntireFM={[
        "24/7 reactive support with live ETA tracking",
        "Rapid stabilisation for neglected portfolios",
        "Night and shift-based maintenance scheduling",
        "PUWER, COSHH, and Permit to Work compliance",
        "Crystal-clear SLAs with full reporting transparency"
      ]}
      caseStudies={[
        {
          title: "Logistics Hub — Midlands",
          description: "32% reduction in reactive call-outs in first 6 months. Lighting upgrade delivered 18% energy savings. Full compliance regained after long-term vendor failure.",
          link: "/case-studies",
          linkText: "View case studies"
        },
        {
          title: "Temp-Controlled Site — UK-Wide",
          description: "Full sprinkler remediation. Fire door integrity restored across 800k sq ft site. Zero downtime during peak season.",
          link: "/case-studies",
          linkText: "View case studies"
        }
      ]}
      relatedServices={[
        { title: "HV Switching", description: "Industrial estates", href: "/services/critical/hv-switching" },
        { title: "Generator Maintenance", description: "Backup power", href: "/services/critical/generator-maintenance" },
        { title: "Fire Safety", description: "Sprinklers & alarms", href: "/services/fire-safety" }
      ]}
      faqs={[
        {
          question: "Do you support 24/7 operations?",
          answer: "Yes — logistics requires zero downtime, and we match that energy with round-the-clock availability and rapid response protocols."
        },
        {
          question: "Can you integrate with warehouse automation?",
          answer: "We work around conveyors, robotics, and AGVs without disruption, understanding the critical nature of automated systems."
        },
        {
          question: "Do you take on neglected maintenance portfolios?",
          answer: "Regularly — with a rapid initial stabilisation programme to restore compliance and reliability quickly."
        },
        {
          question: "What response times can you achieve?",
          answer: "Minutes, not hours — backed by live ETA visibility via our portal. Asset criticality determines SLA acceleration."
        }
      ]}
    />
  );
};

export default IndustrialLogistics;
