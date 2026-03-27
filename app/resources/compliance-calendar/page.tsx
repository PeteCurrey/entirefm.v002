import React from "react";
import { Metadata } from "next";
import { ResourceArticleLayout } from "@/components/resources/ResourceArticleLayout";
import { LegislationBox } from "@/components/resources/LegislationBox";
import { StatCallout } from "@/components/resources/StatCallout";
import { WarningBox } from "@/components/resources/WarningBox";
import { InfoCallout } from "@/components/resources/InfoCallout";
import { ComplianceTable } from "@/components/resources/ComplianceTable";
import { FreqBadge } from "@/components/resources/FreqBadge";
import { Button } from "@/components/ui/button";
import { CalendarDays, CalendarClock, ShieldCheck } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FM Compliance Calendar — Statutory Maintenance Guide | EntireFM",
  description: "The complete guide to statutory FM compliance requirements by frequency — monthly, quarterly, six-monthly, and annual checks for UK commercial buildings.",
  alternates: {
    canonical: "https://www.entirefm.com/resources/compliance-calendar",
  },
};

export default function ComplianceCalendarPage() {
  const quickFacts = [
    "Frequencies: Monthly to 2-yearly",
    "Statutory items: 12+ per building",
    "Key standard: SFG20 / BS series",
    "Records required: Yes — all items"
  ];

  const relatedTools = [
    {
      icon: <CalendarDays />,
      title: "Compliance Calendar Tool (interactive)",
      description: "Build your building's checklist",
      href: "/tools/compliance-calendar"
    },
    {
      icon: <CalendarClock />,
      title: "PPM Schedule Builder",
      description: "Plan your fixed wire testing",
      href: "/tools/ppm-schedule-builder"
    },
    {
      icon: <ShieldCheck />,
      title: "FM Compliance Checker",
      description: "Assess your statutory risks instantly",
      href: "/tools/compliance-checker"
    }
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "The FM Statutory Compliance Calendar — What to Check and When",
        "description": "The complete guide to statutory FM compliance requirements by frequency.",
        "author": { "@type": "Organization", "name": "EntireFM Editorial Team" },
        "url": "https://www.entirefm.com/resources/compliance-calendar"
      })}} />
      <ResourceArticleLayout
        title="The FM Statutory Compliance Calendar — What to Check and When"
        description="A complete guide mapping out the core statutory and recommended facilities maintenance activities that must be performed throughout the calendar year."
        category="Guides & Compliance"
        readTime="6 min read"
        publishedDate="March 2024"
        quickFacts={quickFacts}
        relatedTools={relatedTools}
        speakToTeamSubtext="Consolidate all compliance checks under one provider. Get a proposal for full assurance."
      >
        <p>
          Managing FM compliance across a commercial building involves tracking dozens of statutory and recommended maintenance activities — each with different legal frequencies, different responsible engineers, and different record-keeping requirements. This guide maps out the full compliance calendar year: what needs to happen monthly, quarterly, six-monthly, and annually — and what the consequences are if it doesn't.
        </p>

        <LegislationBox 
          legislation="SFG20 / BS Standards / UK Health & Safety Legislation"
          summary="SFG20 provides the benchmark maintenance frequencies for all building services assets. Many of these are also statutory requirements — legal obligations with enforcement consequences if missed."
        />

        <StatCallout 
          stats={[
            { value: "12+", label: "Statutory checks required per building annually" },
            { value: "Monthly", label: "Most frequent requirement — fire alarm & emergency lighting" },
            { value: "5 Years", label: "Maximum EICR interval for commercial premises" }
          ]}
        />

        <h2>Monthly Compliance Activities</h2>
        <p>
          The highest frequency statutory checks typically involve fire prevention routines and preliminary water hygiene surveillance.
        </p>

        <ComplianceTable 
          headers={["Activity", "Standard", "Statutory?", "Evidence Required"]}
          rows={[
            ["Fire alarm weekly test", "BS 5839-1", "Yes", "Logbook entry — date, tester, result"],
            ["Emergency lighting functional test", "BS 5266-1", "Yes", "Logbook entry — all units checked"],
            ["Legionella temperature monitoring (sentinel outlets)", "L8 ACoP", "Yes", "Temperature log sheet"],
            ["Flushing of infrequently used outlets", "HSG274", "Recommended", "Flushing record"],
            ["General building walkround inspection", "Health & Safety at Work Act 1974", "Recommended", "Inspection record"]
          ]}
        />

        <h2>Quarterly Compliance Activities</h2>
        <p>
          Quarterly activities tend to pivot around intensive specialist inspections testing deeper layers of safety.
        </p>

        <ComplianceTable 
          headers={["Activity", "Standard", "Statutory?", "Evidence Required"]}
          rows={[
            ["Fire alarm full system inspection", "BS 5839-1", "Yes", "Engineer certificate"],
            ["Legionella temperature monitoring (all outlets)", "L8 ACoP", "Yes", "Full temperature log"],
            ["Showerhead cleaning and descaling", "L8 ACoP", "Yes", "Service record"],
            ["Cooling tower microbiological monitoring", "HSG274", "Yes", "Lab test results"],
            ["HVAC filter check and clean", "SFG20", "Recommended", "PPM service record"]
          ]}
        />

        <h2>Six-Monthly Activities</h2>
        <p>
          Biannual inspections generally affect mechanical items with moving components running constantly such as lifts and ventilation fans.
        </p>

        <ComplianceTable 
          headers={["Activity", "Standard", "Statutory?", "Evidence Required"]}
          rows={[
            ["Passenger lift thorough examination", "LOLER 1998", "Yes", "LOLER examination report"],
            ["Dry riser visual inspection", "BS 9990", "Yes", "Inspection record"],
            ["Sprinkler system inspection", "BS EN 12845", "Yes", "Engineer certificate"],
            ["HVAC full service", "SFG20", "Recommended", "PPM service record"]
          ]}
        />

        <h2>Annual Activities</h2>
        <p>
          Annual obligations account for large-scale safety assessments that confirm long-term system integrity.
        </p>

        <ComplianceTable 
          headers={["Activity", "Standard", "Statutory?", "Evidence Required"]}
          rows={[
            ["Emergency lighting full duration test", "BS 5266-1", "Yes", "Engineer certificate"],
            ["Fire extinguisher service", "BS 5306-3", "Yes", "Service label + certificate"],
            ["Commercial boiler service", "Gas Safety Regs 1998", "Yes", "Gas Safe certificate"],
            ["Dry riser pressure test", "BS 9990", "Yes", "Test certificate"],
            ["Cold water storage tank inspection", "L8 ACoP", "Yes", "Inspection report"],
            ["Fire risk assessment review", "RRO 2005", "Yes", "Updated FRA document"],
            ["PAT testing review", "IET Code of Practice", "Recommended", "Test records"],
            ["Roof and gutter inspection", "Building maintenance best practice", "Recommended", "Inspection report"]
          ]}
        />

        <WarningBox 
          title="Records Are Not Optional"
          body="Every activity in this calendar requires documentary evidence. In the event of a Fire Authority inspection, HSE visit, or insurance claim, you must be able to produce all records on demand. 'We did it but didn't write it down' is not an acceptable defence."
        />

        <div className="my-12">
           <InfoCallout 
             heading="Use Our Free Compliance Calendar Tool"
             body="Build a personalised compliance calendar for your building in 60 seconds — select your assets and generate a 12-month schedule you can export to Google Calendar or Outlook."
           />
           <Button className="mt-4 bg-[#f5a623] hover:bg-amber-600 text-charcoal font-bold px-8 h-12 uppercase" asChild>
              <Link href="/tools/compliance-calendar">Build My Calendar →</Link>
           </Button>
        </div>

      </ResourceArticleLayout>
    </>
  );
}
