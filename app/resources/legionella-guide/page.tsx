import React from "react";
import { Metadata } from "next";
import { ResourceArticleLayout } from "@/components/resources/ResourceArticleLayout";
import { LegislationBox } from "@/components/resources/LegislationBox";
import { StatCallout } from "@/components/resources/StatCallout";
import { ArticleImage } from "@/components/resources/ArticleImage";
import { InfoCallout } from "@/components/resources/InfoCallout";
import { ProcessSteps } from "@/components/resources/ProcessSteps";
import { ComplianceTable } from "@/components/resources/ComplianceTable";
import { FreqBadge } from "@/components/resources/FreqBadge";
import { Droplet, ShieldCheck, CalendarClock, CalendarDays } from "lucide-react";

export const metadata: Metadata = {
  title: "Legionella Control in Commercial Properties | EntireFM",
  description: "The L8 ACoP Guide. Understanding Legionella bacteria in water systems and the statutory maintenance required to demonstrate control.",
  alternates: {
    canonical: "https://www.entirefm.com/resources/legionella-guide",
  },
};

export default function LegionellaGuidePage() {
  const quickFacts = [
    "Legislation: L8 ACoP / HSG274",
    "Risk assessment: Every 2 years",
    "Hot water store: Above 60°C",
    "Cold water: Below 20°C"
  ];

  const relatedTools = [
    {
      icon: <ShieldCheck />,
      title: "FM Compliance Checker",
      description: "Assess your statutory risks instantly",
      href: "/tools/compliance-checker"
    },
    {
      icon: <CalendarDays />,
      title: "Compliance Calendar",
      description: "Understand statutory requirements",
      href: "/resources/compliance-calendar"
    },
    {
      icon: <CalendarClock />,
      title: "PPM Schedule Builder",
      description: "Plan your water system checks",
      href: "/tools/ppm-schedule-builder"
    }
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Legionella Control in Commercial Properties: The L8 ACoP Guide",
        "description": "Understanding Legionella bacteria in water systems and the statutory maintenance required to demonstrate control.",
        "author": { "@type": "Organization", "name": "EntireFM Editorial Team" },
        "url": "https://www.entirefm.com/resources/legionella-guide"
      })}} />
      <ResourceArticleLayout
        title="Legionella Control in Commercial Properties: The L8 ACoP Guide"
        description="The definitive guide to L8 ACoP compliance, Legionella risk assessments, and the statutory maintenance required to protect public health in your building."
        category="Guides & Compliance"
        readTime="7 min read"
        publishedDate="March 2024"
        quickFacts={quickFacts}
        relatedTools={relatedTools}
        speakToTeamSubtext="Water hygiene control protects against fatal illness. Rely on our audited compliance system."
      >
        <p>
          Legionnaires' disease is a potentially fatal form of pneumonia caused by the inhalation of small droplets of contaminated water containing Legionella. Due to the severe nature of the disease, controlling the bacteria in building water systems is heavily regulated by law.
        </p>

        <LegislationBox 
          legislation="L8 Approved Code of Practice (ACoP) — HSE"
          summary="The L8 ACoP sets out legal duties for managing water systems in all premises where water is stored or distributed. Non-compliance with L8 is a criminal offence under health and safety law."
        />

        <StatCallout 
          stats={[
            { value: "20–45°C", label: "Temperature range where Legionella thrives" },
            { value: "60°C+", label: "Minimum hot water storage temperature" },
            { value: "2 Years", label: "Maximum interval between Legionella risk assessments" }
          ]}
        />

        <h2>How Legionella Multiplies</h2>
        <p>
          Legionella bacteria are naturally occurring and harmless in low numbers. The danger arises when bacteria spread to purpose-built water systems—cooling towers, evaporative condensers, hot and cold water systems, and spa pools—where the conditions are perfect for growth.
        </p>

        <ArticleImage 
          caption="Legionella bacteria multiply in water systems between 20°C and 45°C — precise temperature control is the primary control measure."
          alt="Legionella water safety temperature control illustration"
          icon={<Droplet size={48} />}
        />

        <h2>Primary Causes of Legionella Growth</h2>
        <p>
          Controlling Legionella revolves entirely around understanding what makes it grow. There are three key risk factors:
        </p>

        <InfoCallout 
          heading="Temperature Risk Zone"
          body="Legionella bacteria thrive between 20°C and 45°C. Water stored or distributed in this range without movement or treatment is at significant risk."
        />

        <InfoCallout 
          heading="Stagnation Risk"
          body="Unused pipework — known as 'dead legs' — allows water to sit undisturbed and reach dangerous temperatures. Weekly flushing of all outlets is a core control measure."
        />

        <InfoCallout 
          heading="Contamination Risk"
          body="Sludge, rust, scale, and organic matter in tanks and pipework provide nutrients for Legionella growth. Regular tank inspection and cleaning is a statutory requirement."
        />

        <h2>Your 4 Statutory Legal Duties</h2>
        <p>
          Under the Health and Safety at Work etc Act 1974, COSHH, and the HSE L8 ACoP, the Responsible Person must manage water hygiene systematically.
        </p>

        <ProcessSteps 
          steps={[
            { title: "Identify and Assess Sources of Risk", body: "Legionella Risk Assessment (LRA) required. Must be reviewed every 2 years or when water systems change." },
            { title: "Prepare a Written Scheme of Control", body: "A documented plan showing how identified risks will be managed — kept on site and available for HSE inspection." },
            { title: "Implement and Manage Precautions", body: "Ongoing PPM programme: temperature monitoring, flushing regimes, descaling, tank inspections." },
            { title: "Keep and Maintain Records", body: "All monitoring results, inspection reports, and remedial actions must be documented. No records = no compliance." }
          ]}
        />

        <h2>Statutory PPM Schedule for Water Systems</h2>
        <p>
          Temperature control is the traditional approach to Legionella risk management. Hot water must be kept hot, cold water must be kept cold, and it must keep moving. This requires dedicated maintenance checks throughout the calendar year:
        </p>

        <ComplianceTable 
          headers={["Activity", "Frequency", "Requirement Type", "Standard"]}
          rows={[
            ["Water temperature checks (all sentinel outlets)", <FreqBadge key="1" frequency="Monthly" />, "Statutory", "L8 ACoP"],
            ["Water temperature checks (sample outlets)", <FreqBadge key="2" frequency="Quarterly" />, "Statutory", "L8 ACoP"],
            ["Flushing of infrequently used outlets", <FreqBadge key="3" frequency="Weekly" />, "Recommended", "HSG274"],
            ["Showerhead cleaning and descaling", <FreqBadge key="4" frequency="Quarterly" />, "Statutory", "L8 ACoP"],
            ["Cold water storage tank inspection", <FreqBadge key="5" frequency="Annual" />, "Statutory", "L8 ACoP"],
            ["Legionella risk assessment review", <FreqBadge key="6" frequency="Every 2 years" />, "Statutory", "L8 ACoP"]
          ]}
        />

      </ResourceArticleLayout>
    </>
  );
}
