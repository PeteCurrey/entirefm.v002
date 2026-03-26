import { Metadata } from "next";
import FMHealthCheckClient from "@/components/tools/FMHealthCheckClient";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { ShieldCheck, Clock, Users, BarChart2 } from "lucide-react";

export const metadata: Metadata = {
  title: "FM Building Health Check — Free Quiz | EntireFM",
  description: "How compliant is your building? Answer 12 questions in 2 minutes and get a personalised FM compliance score — with a breakdown of your gaps and recommended next steps.",
  alternates: { canonical: "https://www.entirefm.com/tools/fm-health-check" },
};

const trustItems = [
  { icon: ShieldCheck, label: "12 compliance areas covered" },
  { icon: Clock, label: "Takes under 2 minutes" },
  { icon: Users, label: "Free — no signup to start" },
  { icon: BarChart2, label: "Used by FM professionals across the UK" },
];

export default function FMHealthCheckPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative pt-32 pb-16 bg-charcoal overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
        <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Tools", href: "/tools" }, { label: "FM Building Health Check" }]} className="justify-center mb-8" />
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4 border border-primary/30 px-4 py-1.5 rounded-full">
            Free Quiz
          </span>
          <h1 className="text-4xl md:text-6xl font-light text-white mb-6 leading-tight">
            How Compliant Is Your Building?
          </h1>
          <p className="text-xl text-gray-300 font-light leading-relaxed max-w-2xl mx-auto mb-10">
            12 questions. 2 minutes. A clear picture of your FM compliance position — and exactly where the gaps are.
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
        <FMHealthCheckClient />
      </section>
    </div>
  );
}
