import { Metadata } from "next";
import TenderBriefClient from "@/components/tools/TenderBriefClient";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { FileText, BookOpen, Download, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "FM Tender Brief Generator — Free Tool | EntireFM",
  description: "Generate a professional facilities management service specification in minutes. Describe your FM requirements and download a complete tender brief — free, no expertise needed.",
  alternates: { canonical: "https://www.entirefm.com/tools/tender-brief" },
};

const trustItems = [
  { icon: FileText, label: "Professional specification format" },
  { icon: BookOpen, label: "SFG20 & UK standards referenced" },
  { icon: Download, label: "Downloadable as PDF" },
  { icon: Users, label: "Free — no FM expertise required" },
];

export default function TenderBriefPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative pt-32 pb-16 bg-charcoal overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
        <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Tools", href: "/tools" }, { label: "FM Tender Brief Generator" }]} className="justify-center mb-8" />
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4 border border-primary/30 px-4 py-1.5 rounded-full">
            Free Tool
          </span>
          <h1 className="text-4xl md:text-6xl font-light text-white mb-6 leading-tight">
            FM Tender Brief Generator
          </h1>
          <p className="text-xl text-gray-300 font-light leading-relaxed max-w-2xl mx-auto mb-10">
            Describe your FM requirements and we'll generate a professional service specification document — ready to share with potential FM providers or use as the basis for a tender.
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
        <TenderBriefClient />
      </section>
    </div>
  );
}
