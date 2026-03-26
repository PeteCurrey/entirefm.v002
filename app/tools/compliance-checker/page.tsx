import { Metadata } from "next";
import { complianceQuestions } from "@/lib/complianceQuestions";
import ComplianceCheckerClient from "@/components/tools/ComplianceCheckerClient";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { ShieldCheck, Clock, BookOpen, UserCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "FM Compliance Checker — Free Tool | EntireFM",
  description:
    "Check your building's compliance position in under 2 minutes. Answer 8 questions and receive a free personalised FM compliance report covering fire safety, PPM, electrical, water safety, and more.",
  alternates: { canonical: "https://www.entirefm.com/tools/compliance-checker" },
};

const trustItems = [
  { icon: ShieldCheck, label: "Covers 10+ compliance areas" },
  { icon: BookOpen, label: "Based on UK legislation" },
  { icon: UserCheck, label: "Free — no signup needed" },
  { icon: Clock, label: "Results in under 30 seconds" },
];

export default function ComplianceCheckerPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Tools", href: "/tools" },
    { label: "FM Compliance Checker" },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "FM Compliance Checker",
    url: "https://www.entirefm.com/tools/compliance-checker",
    applicationCategory: "BusinessApplication",
    description:
      "Free UK FM compliance checker — answer 8 questions to get a personalised compliance report.",
    offers: { "@type": "Offer", price: "0", priceCurrency: "GBP" },
    provider: { "@type": "Organization", name: "EntireFM" },
  };

  return (
    <div className="min-h-screen bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-charcoal overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
        <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
          <Breadcrumb items={breadcrumbItems} className="justify-center mb-8" />
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4 border border-primary/30 px-4 py-1.5 rounded-full">
            Free Tool
          </span>
          <h1 className="text-4xl md:text-6xl font-light text-white mb-6 leading-tight">
            FM Compliance Checker
          </h1>
          <p className="text-xl text-gray-300 font-light leading-relaxed max-w-2xl mx-auto mb-10">
            Answer 8 questions about your building and receive a personalised compliance report — covering your statutory obligations, risk areas, and recommended next steps.
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

      {/* Tool */}
      <section className="bg-white">
        <ComplianceCheckerClient questions={complianceQuestions} />
      </section>
    </div>
  );
}
