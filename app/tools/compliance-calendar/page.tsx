import { Metadata } from "next";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { Calendar, Bell, RefreshCw, Shield } from "lucide-react";
import ComplianceCalendarClient from "@/components/tools/ComplianceCalendarClient";

export const metadata: Metadata = {
  title: "FM Compliance Calendar — Free Tool | EntireFM",
  description: "Generate a personalised FM compliance calendar for your building — covering all statutory and recommended maintenance requirements month by month. Export to Google Calendar or Outlook. Free.",
  alternates: { canonical: "https://www.entirefm.com/tools/compliance-calendar" },
};

const trustItems = [
  { icon: Shield, label: "Covers 15+ compliance areas" },
  { icon: Calendar, label: "Statutory events clearly flagged" },
  { icon: RefreshCw, label: "Export to any calendar app" },
  { icon: Bell, label: "7-day reminders included" },
];

export default function ComplianceCalendarPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative pt-32 pb-16 bg-charcoal overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
        <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Tools", href: "/tools" }, { label: "FM Compliance Calendar" }]} className="justify-center mb-8" />
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4 border border-primary/30 px-4 py-1.5 rounded-full">
            Free Tool
          </span>
          <h1 className="text-4xl md:text-6xl font-light text-white mb-6 leading-tight">
            FM Compliance Calendar
          </h1>
          <p className="text-xl text-gray-300 font-light leading-relaxed max-w-2xl mx-auto mb-10">
            Set up your building profile and generate a personalised compliance calendar — showing every statutory and recommended maintenance requirement, month by month. Export to Google Calendar or Outlook with one click.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {trustItems.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-sm text-gray-400">
                <Icon className="w-4 h-4 text-primary" />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white">
        <ComplianceCalendarClient />
      </section>
    </div>
  );
}
