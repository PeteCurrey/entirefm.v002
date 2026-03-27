import React from "react";
import { Metadata } from "next";
import { ResourceArticleLayout } from "@/components/resources/ResourceArticleLayout";
import { StatCallout } from "@/components/resources/StatCallout";
import { ArticleImage } from "@/components/resources/ArticleImage";
import { ProcessSteps } from "@/components/resources/ProcessSteps";
import { InfoCallout } from "@/components/resources/InfoCallout";
import { SuccessBox } from "@/components/resources/SuccessBox";
import { ClipboardCheck, Activity, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "The EntireFM Statutory Audit Framework | EntireFM",
  description: "Learn how the EntireFM 4-stage Statutory Audit Framework brings absolute compliance control to your commercial property estate.",
  alternates: {
    canonical: "https://www.entirefm.com/resources/audit-framework",
  },
};

export default function AuditFrameworkPage() {
  const quickFacts = [
    "Framework stages: 4",
    "Delivery: Physical + digital sweep",
    "Output: RAG compliance report",
    "Ongoing: Automated PPM governance"
  ];

  const relatedTools = [
    {
      icon: <ShieldCheck />,
      title: "FM Compliance Checker",
      description: "Assess your statutory risks instantly",
      href: "/tools/compliance-checker"
    },
    {
      icon: <Activity />,
      title: "ROI Calculator",
      description: "Measure potential compliance savings",
      href: "/tools/fm-roi-calculator"
    },
    {
      icon: <ClipboardCheck />,
      title: "FM Health Check Quiz",
      description: "Score your current FM operation",
      href: "/tools/fm-health-check"
    }
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "The EntireFM Statutory Audit Framework",
        "description": "Learn how the EntireFM 4-stage Statutory Audit Framework brings absolute compliance control to your commercial property estate.",
        "author": { "@type": "Organization", "name": "EntireFM Editorial Team" },
        "url": "https://www.entirefm.com/resources/audit-framework"
      })}} />
      <ResourceArticleLayout
        title="The EntireFM Statutory Audit Framework"
        description="A definitive roadmap through our 4-stage physical and digital analysis methodology that transforms disjointed legacy maintenance into airtight legal compliance."
        category="Guides & Compliance"
        readTime="5 min read"
        publishedDate="March 2024"
        quickFacts={quickFacts}
        relatedTools={relatedTools}
        speakToTeamSubtext="Regain absolute control over your estate compliance. Speak directly with a compliance auditor."
      >
        <p>
          Managing an extensive portfolio of commercial properties often leads to a decentralised web of compliance paperwork. With multiple contractors visiting a site generating disparate reports spanning fire risk, fixed wire testing, water hygiene, and lifting equipment—it can become nearly impossible to guarantee that a site is entirely legally compliant.
        </p>

        <InfoCallout 
          heading="Compliance Chaos Is More Common Than You Think"
          body="When EntireFM onboard a new client, we regularly find certificates scattered across emails, missing logbooks, and no clarity on whether statutory inspections are current. The Statutory Audit Framework exists to resolve this — permanently."
        />

        <StatCallout 
          stats={[
            { value: "4 Stages", label: "From discovery sweep to continuous governance" },
            { value: "RAG", label: "Red/Amber/Green report for instant clarity" },
            { value: "100%", label: "Compliance baseline before ongoing management" }
          ]}
        />

        <h2>The Problem Handled Systematically</h2>
        <p>
          We resolve the operational noise by stripping compliance processes back to universal first principles using our 4-stage standard Statutory Audit Framework.
        </p>

        <ArticleImage 
          caption="The Discovery Sweep builds a complete master asset register and compliance certificate inventory across your entire estate."
          alt="FM compliance audit framework illustration"
          icon={<ClipboardCheck size={48} />}
        />

        <h2>Framework Stages</h2>
        <p>
          The framework is deployed in progressive phases to diagnose, plan, and rectify systemic facility issues.
        </p>

        <ProcessSteps 
          steps={[
            { title: "The Discovery Sweep", body: "A physical and digital sweep of the entire estate — compiling a master asset register of all M&E equipment, recovering all historical compliance certificates, and identifying immediate Red Status legal risks such as expired gas safety certificates or overdue fire risk assessments." },
            { title: "The Gap Analysis", body: "Current state compared against SFG20 standards and current UK legislation. Every compliance gap mapped precisely. The client receives a definitive visual RAG report — the first time many clients have true clarity on their statutory liability." },
            { title: "The Remedial Action Plan", body: "EntireFM does not hand over a report and leave. Our certified Hard FM teams are immediately deployed to close every gap — overdue inspections booked, broken emergency lighting replaced, expired certificates renewed." },
            { title: "Continuous Digital Governance", body: "Once 100% compliance is achieved, all assets are loaded into our automated PPM scheduling system. New certificates automatically overwrite expired records. Management receives automated monthly KPI reports confirming 100% statutory adherence." }
          ]}
        />

        <h2>Conclusion</h2>
        <p>
          Gaining back control requires a deliberate intervention and audit sweep rather than relying on disparate maintenance schedules inherited from the previous provider.
        </p>

        <SuccessBox 
          title="The Outcome: Bulletproof Peace of Mind"
          body="After completing the EntireFM Statutory Audit Framework, Directors and Estate Managers have complete confidence in their compliance position — backed by documentary evidence and automated ongoing governance."
        />

      </ResourceArticleLayout>
    </>
  );
}
