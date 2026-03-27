import React from "react";
import { Metadata } from "next";
import { ResourceArticleLayout } from "@/components/resources/ResourceArticleLayout";
import { LegislationBox } from "@/components/resources/LegislationBox";
import { StatCallout } from "@/components/resources/StatCallout";
import { ArticleImage } from "@/components/resources/ArticleImage";
import { ProcessSteps } from "@/components/resources/ProcessSteps";
import { WarningBox } from "@/components/resources/WarningBox";
import { SuccessBox } from "@/components/resources/SuccessBox";
import { Flame, ShieldCheck, ClipboardCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "The Essential Guide to Fire Risk Assessments | EntireFM",
  description: "A comprehensive guide to understanding your legal duties under the Regulatory Reform (Fire Safety) Order 2005 for commercial buildings.",
  alternates: {
    canonical: "https://www.entirefm.com/resources/fire-risk-guide",
  },
};

export default function FireRiskGuidePage() {
  const quickFacts = [
    "Legislation: RRO 2005",
    "Review frequency: Annual minimum",
    "Who's responsible: The Responsible Person",
    "Penalty for failure: Unlimited fine"
  ];

  const relatedTools = [
    {
      icon: <ShieldCheck />,
      title: "FM Compliance Checker",
      description: "Assess your statutory risks instantly",
      href: "/tools/compliance-checker"
    },
    {
      icon: <ClipboardCheck />,
      title: "Building Walk — Retail Compliance",
      description: "Interactive compliance tour",
      href: "/building-walk/retail"
    },
    {
      icon: <Flame />,
      title: "Document Vault — Fire Safety Record Book",
      description: "Download a free template logbook",
      href: "/resources/document-vault"
    }
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "The Essential Guide to Fire Risk Assessments in Commercial Buildings",
        "description": "A comprehensive guide to understanding your legal duties under the Regulatory Reform (Fire Safety) Order 2005 for commercial buildings.",
        "author": { "@type": "Organization", "name": "EntireFM Editorial Team" },
        "url": "https://www.entirefm.com/resources/fire-risk-guide"
      })}} />
      <ResourceArticleLayout
        title="The Essential Guide to Fire Risk Assessments in Commercial Buildings"
        description="A comprehensive guide to understanding your legal duties under the Regulatory Reform (Fire Safety) Order 2005 for commercial buildings."
        category="Guides & Compliance"
        readTime="8 min read"
        publishedDate="March 2024"
        quickFacts={quickFacts}
        relatedTools={relatedTools}
        speakToTeamSubtext="Fire Risk Assessment compliance protects lives and limits your legal liability. Don't leave it to chance."
      >
        <p>
          Fire safety is arguably the most critical component of commercial facilities management. In the UK, fire safety in non-domestic premises is governed by strict legislation designed to ensure the safety of occupants in the event of an emergency. At the core of this legislation is the Fire Risk Assessment (FRA).
        </p>

        <LegislationBox 
          legislation="Regulatory Reform (Fire Safety) Order 2005"
          summary="If you are an employer, owner, landlord, or occupier of non-domestic premises, you are the Responsible Person. Conducting a suitable and sufficient Fire Risk Assessment is a legal duty — not a recommendation."
        />

        <StatCallout 
          stats={[
            { value: "£5,000+", label: "Minimum fine for non-compliance" },
            { value: "Annual", label: "Minimum FRA review frequency" },
            { value: "5 steps", label: "Required elements of a compliant FRA" }
          ]}
        />

        <h2>What is a Fire Risk Assessment?</h2>
        <p>
          A Fire Risk Assessment is a careful look at your premises and the people who use them, from a fire prevention perspective. It involves understanding the potential risks, identifying people at risk, and evaluating the measures in place to keep those people safe.
        </p>

        <ArticleImage 
          caption="A Fire Risk Assessment must be reviewed annually or whenever significant changes are made to the building."
          alt="Fire Risk Assessment compliance illustration"
          icon={<Flame size={48} />}
        />

        <h2>The 5 Steps of a Fire Risk Assessment</h2>
        <p>
          The UK Government outlines a specific 5-step process that must be followed to ensure an FRA is legally compliant:
        </p>

        <ProcessSteps 
          steps={[
            { title: "Identify Fire Hazards", body: "Sources of ignition, fuel, and oxygen throughout the building." },
            { title: "Identify People at Risk", body: "Especially vulnerable individuals — those with mobility issues, lone workers, or those unfamiliar with the building." },
            { title: "Evaluate, Remove or Reduce the Risk", body: "Assess the likelihood and consequence of each identified hazard." },
            { title: "Record Findings and Prepare Emergency Plan", body: "Written record required for premises with 5+ employees." },
            { title: "Review and Update Regularly", body: "Annual review minimum — or following any significant change." }
          ]}
        />

        <h2>Common Compliance Failures</h2>
        <p>
          Many organisations fall foul of fire safety regulations not because they haven't conducted an FRA, but because they have treated it as a tick-box exercise.
        </p>

        <WarningBox 
          title="The Static Document"
          body="An FRA completed 5 years ago and placed in a drawer is not compliant. FRAs must be dynamic — reviewed annually or whenever there is a significant change to the building layout or use."
        />

        <WarningBox 
          title="Ignored Action Plans"
          body="The assessor highlighted High Risk items — wedged-open fire doors, blocked escape routes — that were never rectified. An FRA with unresolved High Risk actions is worse than no FRA, as it demonstrates known non-compliance."
        />

        <WarningBox 
          title="No Evidence Trail"
          body="The FRA assumes systems are working, but there are no weekly fire alarm test logs or monthly emergency lighting records. Without evidence, compliance cannot be demonstrated."
        />

        <h2>How EntireFM Helps</h2>
        <p>
          Managing fire safety compliance across an estate requires expertise, consistency, and a robust evidence trail. EntireFM provides end-to-end fire safety management.
        </p>

        <SuccessBox 
          title="Independent Level 3 & 4 Certified Assessors"
          body="EntireFM deploys certified fire safety assessors who produce objective, defensible FRAs — not tick-box exercises."
        />

        <SuccessBox 
          title="Action Plan Resolution"
          body="Unlike standalone assessors, our Hard FM engineering teams act on identified faults immediately — fire door repairs, exit sign replacement, escape route clearance."
        />

        <SuccessBox 
          title="Digital Compliance Logbooks"
          body="All weekly alarm tests and statutory PPM certificates stored in your secure EntireFM portal — instant proof of compliance during any Fire Authority inspection."
        />

      </ResourceArticleLayout>
    </>
  );
}
