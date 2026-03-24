"use client";

import SectorPageTemplate from "@/components/shared/SectorPageTemplate";
import { Store } from "lucide-react";

const RetailServiceStations = () => {
  return (
    <SectorPageTemplate
      title="Retail & Forecourt FM UK | Service Station Facilities Management"
      metaDescription="Brand protection, safety & rapid responsive support for retail. FM that keeps retail and service stations fully operational, clean, compliant, and customer-ready."
      canonicalUrl="https://entirefm.com/sectors/retail-service-stations"
      heroTitle="Retail & Service Stations FM"
      heroSubtitle="If the customer experience fails, revenue fails. FM that keeps retail and service stations fully operational, clean, compliant, and customer-ready — every minute of the day."
      heroImage="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80"
      heroIcon={Store}
      stats={[
        { value: "Fast", label: "SLA Response" },
        { value: "24/7", label: "Trading Support" },
        { value: "National", label: "Coverage" },
        { value: "Zero", label: "Sales Blockers" },
      ]}
      sectorSummary={{
        title: "Retail is High-Speed. High-Visibility. High-Stakes.",
        paragraphs: [
          "Every defect is a sales blocker: toilets out of order, lighting failures, HVAC comfort complaints, slips, leaks, hazards, fuel system non-compliance, visual damage harming brand trust. We don't let the environment undermine the customer buying decision.",
          "Service stations have dual exposure — customer experience plus fuel infrastructure compliance, long trading hours plus safety-critical assets, multiple revenue streams under one roof. Everything must work — 24/7."
        ]
      }}
      risks={[
        {
          title: "HVAC & Refrigeration",
          description: "Safe food storage, customer comfort, and energy efficiency are critical in retail environments with food service operations.",
          link: "/services/hvac-compliance",
          linkText: "HVAC compliance"
        },
        {
          title: "Fire & Life Safety",
          description: "Zero tolerance for downtime and compliance gaps in high-footfall public spaces with extended trading hours."
        },
        {
          title: "Fuel Infrastructure (Forecourts)",
          description: "Wet stock and fuel equipment require specialist operational and environmental safety compliance for service stations."
        },
        {
          title: "Building Fabric & Brand Image",
          description: "Visual damage harms brand trust. Proactive maintenance protects customer perception and hazard prevention."
        }
      ]}
      keySystems={[
        {
          category: "Customer-Facing Systems",
          items: [
            "HVAC & refrigeration",
            "Electrical & lighting",
            "Fire & life safety",
            "Water hygiene (washrooms)",
            "Building fabric",
            "Waste & pest control"
          ]
        },
        {
          category: "Forecourt Infrastructure",
          items: [
            "Fuel dispensing equipment",
            "Tank monitoring systems",
            "Emergency shutdown systems",
            "Car wash equipment",
            "Air & water services",
            "Canopy lighting & signage"
          ]
        }
      ]}
      operationalChallenges={[
        {
          title: "Trading Hours Protection",
          description: "Peak trading time is sacred. Out-of-hours delivery and high-frequency PPM scheduled during quieter windows ensure zero impact on revenue."
        },
        {
          title: "National Rollout Capability",
          description: "Scalable FM models with local resource coverage support brand refresh, LED upgrades, fire door replacements, and compliance catch-ups at scale."
        },
        {
          title: "Rapid SLA-Driven Response",
          description: "Fast response when issues arise, with live job tracking and ETA updates for store managers. Asset criticality determines priority."
        },
        {
          title: "Mystery Shopper Protection",
          description: "We monitor response time, first-time fix rates, customer complaint prevention, and asset reliability to protect your brand experience scores."
        }
      ]}
      whyEntireFM={[
        "Out-of-hours maintenance around trading schedules",
        "National coverage with local rapid response",
        "Live job tracking and ETA visibility",
        "KPI-driven performance culture",
        "Fuel infrastructure and forecourt compliance expertise"
      ]}
      caseStudies={[
        {
          title: "National Retail Portfolio",
          description: "LED lighting rollout across 200+ sites. Zero disruption to trading hours. 22% energy cost reduction achieved.",
          link: "/case-studies",
          linkText: "View case studies"
        },
        {
          title: "Forecourt Network — UK-Wide",
          description: "Full fire door compliance programme. Fuel system safety upgrades completed. 98% SLA achievement maintained.",
          link: "/case-studies",
          linkText: "View case studies"
        }
      ]}
      relatedServices={[
        { title: "HVAC Maintenance", description: "Refrigeration & climate", href: "/services/hvac" },
        { title: "Electrical Services", description: "Lighting & power", href: "/services/electrical" },
        { title: "Fire Safety", description: "Life safety systems", href: "/services/fire-safety" }
      ]}
      faqs={[
        {
          question: "Do you work around trading hours?",
          answer: "Always — peak trading time is sacred. We schedule maintenance out-of-hours and during quieter windows to ensure zero impact on sales."
        },
        {
          question: "Can you support national or regional retail estates?",
          answer: "Yes — scalable FM models with local resource coverage. We support everything from single sites to national multi-site portfolios."
        },
        {
          question: "Do you manage fuel infrastructure compliance?",
          answer: "Yes — safety, monitoring, and rapid incident response for forecourt operations including wet stock and fuel equipment."
        },
        {
          question: "What kind of SLAs do you commit to?",
          answer: "Fast — agreed based on asset criticality and footfall. Live job tracking and ETA updates keep store managers informed."
        }
      ]}
    />
  );
};

export default RetailServiceStations;
