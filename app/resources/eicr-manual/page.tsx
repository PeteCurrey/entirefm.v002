import React from "react";
import { Metadata } from "next";
import { ResourceArticleLayout } from "@/components/resources/ResourceArticleLayout";
import { LegislationBox } from "@/components/resources/LegislationBox";
import { StatCallout } from "@/components/resources/StatCallout";
import { ArticleImage } from "@/components/resources/ArticleImage";
import { WarningBox } from "@/components/resources/WarningBox";
import { SuccessBox } from "@/components/resources/SuccessBox";
import { ComplianceTable } from "@/components/resources/ComplianceTable";
import { InfoCallout } from "@/components/resources/InfoCallout";
import { Zap, ShieldCheck, CalendarClock, FileDown } from "lucide-react";

export const metadata: Metadata = {
  title: "EICR Manual: Fixed Wire Testing for Commercial Estates | EntireFM",
  description: "Understand the requirements, codes, and frequencies of an Electrical Installation Condition Report (EICR) for your commercial property.",
  alternates: {
    canonical: "https://www.entirefm.com/resources/eicr-manual",
  },
};

export default function EicrManualPage() {
  const quickFacts = [
    "Standard: BS 7671 / 18th Edition",
    "Commercial frequency: Every 5 years",
    "Industrial frequency: Every 3 years",
    "Approving body: NICEIC / NAPIT"
  ];

  const relatedTools = [
    {
      icon: <ShieldCheck />,
      title: "FM Compliance Checker",
      description: "Assess your statutory risks instantly",
      href: "/tools/compliance-checker"
    },
    {
      icon: <CalendarClock />,
      title: "PPM Schedule Builder",
      description: "Plan your fixed wire testing",
      href: "/tools/ppm-schedule-builder"
    },
    {
      icon: <FileDown />,
      title: "Document Vault — FM SLA Template",
      description: "Download a free template",
      href: "/resources/document-vault"
    }
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "EICR Manual: Fixed Wire Testing for Commercial Estates",
        "description": "Understand the requirements, codes, and frequencies of an Electrical Installation Condition Report (EICR)",
        "author": { "@type": "Organization", "name": "EntireFM Editorial Team" },
        "url": "https://www.entirefm.com/resources/eicr-manual"
      })}} />
      <ResourceArticleLayout
        title="EICR Manual: Fixed Wire Testing for Commercial Estates"
        description="Understand the requirements, codes, and frequencies of an Electrical Installation Condition Report (EICR) for your commercial property."
        category="Guides & Compliance"
        readTime="6 min read"
        publishedDate="March 2024"
        quickFacts={quickFacts}
        relatedTools={relatedTools}
        speakToTeamSubtext="EICR testing ensures building safety and insurance validity. Chat with a compliance expert today."
      >
        <p>
          An Electrical Installation Condition Report (EICR) is the ultimate test of your building's electrical safety. Regular fixed wire testing verifies that the entire electrical infrastructure—distribution boards, lighting circuits, sockets, and built-in equipment—remains safe for continued use by your staff and visitors.
        </p>

        <LegislationBox 
          legislation="Electricity at Work Regulations 1989"
          summary="All electrical systems must be maintained in a condition that prevents danger. For commercial premises, an EICR every 5 years is the accepted standard of demonstrating compliance."
        />

        <StatCallout 
          stats={[
            { value: "5 Years", label: "Standard EICR interval — commercial" },
            { value: "3 Years", label: "Recommended interval for industrial/high-risk" },
            { value: "C1", label: "Highest severity code — immediate action required" }
          ]}
        />

        <h2>What is Fixed Wire Testing?</h2>
        <p>
          Electrical systems degrade over time due to load, age, and environmental factors. Fixed wire testing involves a qualified electrician conducting a visual inspection and detailed diagnostic testing on the permanent wiring of a property. The result is the formal EICR document.
        </p>

        <ArticleImage 
          caption="Fixed wire testing inspects all permanent electrical installations — wiring, sockets, consumer units, and distribution boards."
          alt="EICR fixed wire testing illustration"
          icon={<Zap size={48} />}
        />

        <h2>Understanding EICR Observation Codes</h2>
        <p>
          During the inspection, the engineer will assign an observation code to any identified faults. Understanding these codes is critical, as they determine whether the installation is deemed "Satisfactory" or "Unsatisfactory".
        </p>

        <ComplianceTable 
          headers={["Code", "Severity", "Meaning", "EICR Outcome"]}
          rows={[
            ["C1", "DANGER PRESENT", "Risk of injury. Immediate action required. Circuit may need isolating on the day.", "UNSATISFACTORY"],
            ["C2", "POTENTIALLY DANGEROUS", "Urgent remedial action required. Installation will fail until works are completed.", "UNSATISFACTORY"],
            ["C3", "IMPROVEMENT RECOMMENDED", "Does not comply with current BS 7671 but not deemed unsafe. EICR will still pass.", "SATISFACTORY"],
            ["FI", "FURTHER INVESTIGATION", "Issue identified but could not be fully diagnosed during testing.", "UNSATISFACTORY"]
          ]}
        />

        <InfoCallout 
          heading="Important"
          body="If your report contains any C1, C2, or FI codes, the overall assessment will be Unsatisfactory. Your building is not legally compliant until all remedial works are completed and evidenced."
        />

        <h2>The Reality of EICR Contractors</h2>
        <p>
          Selecting a competent contractor for your EICR is essential. The market ranges from established, reliable engineering firms to dubious operators offering "drive-by" reports.
        </p>

        <WarningBox 
          title="Beware the 'Drive-By EICR'"
          body="Budget contractors achieve impossibly low rates per circuit by conducting minimal visual inspections instead of full physical testing — then issuing large volumes of C2 failures to generate lucrative remedial work. Always use a NICEIC-approved contractor and request a sample-testing methodology before committing."
        />

        <h2>EICR Testing with EntireFM</h2>
        <p>
          EntireFM approaches fixed wire testing with absolute precision, providing transparent testing methodologies focused on long-term safety, not generating immediate remedial upsells.
        </p>

        <SuccessBox 
          title="NICEIC-Approved Engineers"
          body="All EntireFM electrical engineers are NICEIC-approved — ensuring your EICR is legally defensible and produced to the correct standard."
        />

        <SuccessBox 
          title="Rolling 20% Annual Testing"
          body="We plan testing schedules that minimise operational downtime — completing 20% of circuits annually across a 5-year rolling programme, not disrupting your entire building at once."
        />

        <SuccessBox 
          title="Rapid Remedial Turnaround"
          body="If C1 or C2 faults are found, our engineering teams provide same-day transparent quotes and rapid response to restore your compliance."
        />

      </ResourceArticleLayout>
    </>
  );
}
