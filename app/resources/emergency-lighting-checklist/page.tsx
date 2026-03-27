import React from "react";
import { Metadata } from "next";
import { ResourceArticleLayout } from "@/components/resources/ResourceArticleLayout";
import { LegislationBox } from "@/components/resources/LegislationBox";
import { StatCallout } from "@/components/resources/StatCallout";
import { ArticleImage } from "@/components/resources/ArticleImage";
import { ChecklistItem } from "@/components/resources/ChecklistItem";
import { WarningBox } from "@/components/resources/WarningBox";
import { CalendarClock, CalendarDays, FileDown, Lightbulb } from "lucide-react";

export const metadata: Metadata = {
  title: "The Emergency Lighting Testing Checklist | EntireFM",
  description: "Step-by-step interactive monthly and annual checks required to maintain BS 5266 emergency lighting compliance.",
  alternates: {
    canonical: "https://www.entirefm.com/resources/emergency-lighting-checklist",
  },
};

export default function EmergencyLightingChecklistPage() {
  const quickFacts = [
    "Standard: BS 5266-1",
    "Monthly test: Functional (short duration)",
    "Annual test: Full rated duration (3 hours)",
    "Evidence: BS 5266 certificate"
  ];

  const relatedTools = [
    {
      icon: <CalendarClock />,
      title: "PPM Schedule Builder",
      description: "Schedule your lighting tests",
      href: "/tools/ppm-schedule-builder"
    },
    {
      icon: <CalendarDays />,
      title: "Compliance Calendar",
      description: "Track all statutory dates",
      href: "/resources/compliance-calendar"
    },
    {
      icon: <FileDown />,
      title: "Document Vault — Fire Safety Record Book",
      description: "Download tracking sheets",
      href: "/resources/document-vault"
    }
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "The Emergency Lighting Testing Checklist",
        "description": "Step-by-step interactive monthly and annual checks required to maintain BS 5266 emergency lighting compliance.",
        "author": { "@type": "Organization", "name": "EntireFM Editorial Team" },
        "url": "https://www.entirefm.com/resources/emergency-lighting-checklist"
      })}} />
      <ResourceArticleLayout
        title="The Emergency Lighting Testing Checklist"
        description="A practical, step-by-step checklist framework designed to guide building managers through both the monthly functional flick-tests and the annual full-duration drain events necessary for compliance."
        category="Checklists"
        readTime="4 min read"
        publishedDate="March 2024"
        quickFacts={quickFacts}
        relatedTools={relatedTools}
        speakToTeamSubtext="Emergency lighting provides critical illumination when power fails. Speak to our team to outsource testing."
      >
        <p>
          Emergency lighting forms the cornerstone of commercial fire and structural safety, lighting escape routes and critical points to ensure zero loss of life or orientation during rapid blackouts.
        </p>

        <LegislationBox 
          legislation="BS 5266-1 / Fire Regulatory Reform Order 2005"
          summary="Maintaining emergency lighting to BS 5266 standard is a strict legal requirement under the Fire Regulatory Reform Order 2005. Failure to test and record results constitutes a breach that can invalidate insurance and lead to enforcement action."
        />

        <StatCallout 
          stats={[
            { value: "Monthly", label: "Functional test — visual check all units" },
            { value: "3 Hours", label: "Annual full duration test — battery endurance" },
            { value: "Immediate", label: "Required response to any failed unit" }
          ]}
        />

        <h2>Primary Directive</h2>
        <p>
          Testing schedules must distinguish heavily between routine 'flick-tests' to verify basic circuitry and deep tests confirming chemical battery health under full strain.
        </p>

        <ArticleImage 
          caption="Emergency lighting must guide occupants safely to all exits in the event of total power failure — only regular testing proves it will do so."
          alt="Emergency lighting compliance testing illustration"
          icon={<Lightbulb size={48} />}
        />

        <h2>Monthly Testing Routine</h2>
        <p>
          A physical visual check required by standard. This is usually conducted in-hours.
        </p>

        <ChecklistItem 
          id="monthly-test"
          title="Monthly Functional Test Checklist"
          items={[
            { text: "Locate the emergency lighting test switch and confirm you have the correct key", note: "Test switch is usually in the main electrical cupboard or beside the main distribution board" },
            { text: "Isolate the mains power to the lighting circuit using the test switch" },
            { text: "Walk all floors and visually verify every emergency luminaire and exit sign is illuminated", note: "Include stairwells, corridors, plant rooms, and all final exit doors" },
            { text: "Confirm all luminaires are clean, undamaged, and unobstructed" },
            { text: "Restore mains power and verify the charge indicator LED on every unit has returned to charging state" },
            { text: "Record the date, tester name, and result in the Fire Safety Logbook", note: "Digital or physical — both are acceptable. Without a record, the test legally did not happen." },
            { text: "Report any failed units to your FM provider for immediate replacement", note: "A failed emergency light is a safety breach — do not defer remediation" }
          ]}
        />

        <h2>Annual Capacity Test</h2>
        <p>
          A heavy duty out-of-hours test specifically intended to drain battery capacity continuously measuring chemical longevity.
        </p>

        <ChecklistItem 
          id="annual-test"
          title="Annual Full Duration Test Checklist"
          items={[
            { text: "Schedule the test outside of building operating hours", note: "A 3-hour duration test drains batteries — the building should not be occupied and a real power failure immediately after would leave the building unprotected" },
            { text: "Sequence the test so adjacent luminaires are not drained simultaneously", note: "Stagger testing by zone to maintain some coverage at all times during the testing period" },
            { text: "Isolate mains power to all lighting circuits" },
            { text: "Leave power isolated for the full rated duration — typically 3 hours for Category B/C systems" },
            { text: "Check all luminaires remain illuminated at satisfactory level throughout the full period" },
            { text: "Replace any unit that fails or dims significantly before duration completes" },
            { text: "Restore power and confirm all units return to charging state" },
            { text: "Obtain a formal BS 5266 compliance certificate from the qualified engineer conducting the test" },
            { text: "File certificate in Fire Safety Logbook and compliance portal" }
          ]}
        />

        <h2>Common Emergency Lighting Pitfalls</h2>
        <p>
          Failure often happens via inadequate process documentation or incorrect scheduling logic, not always electrical breakages.
        </p>

        <WarningBox 
          title="Untested = Non-Compliant"
          body="Monthly tests that are not recorded in a logbook do not legally exist. The Fire Authority expects a continuous log — not a verbal assurance."
        />

        <WarningBox 
          title="Failed Units Cannot Wait"
          body="A failed emergency luminaire is an immediate safety breach. It must be logged as a fault and remediated without delay — not added to a 'maintenance jobs' list for next month."
        />

        <WarningBox 
          title="Timing the Annual Test"
          body="Conducting the full 3-hour test drains all battery packs. If a real power failure occurs within hours of an annual test, the building has no emergency lighting. Always test out of hours and in zones."
        />

      </ResourceArticleLayout>
    </>
  );
}
