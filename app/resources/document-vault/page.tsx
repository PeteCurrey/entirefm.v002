import { Metadata } from "next";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import DocumentVaultClient from "@/components/tools/DocumentVaultClient";
import { ShieldCheck, Download, FileText, Lock } from "lucide-react";

export const metadata: Metadata = {
  title: "FM Document Vault — Free Templates & Resources | EntireFM",
  description: "A gated library of free, downloadable FM document templates — PPM schedules, fire safety logs, tender briefs, and site audit checklists. Professional, EntireFM-branded resources.",
  alternates: { canonical: "https://www.entirefm.com/resources/document-vault" },
};

const stats = [
  { icon: Download, label: "12,400+", sub: "Total Downloads" },
  { icon: FileText, label: "14", sub: "Free Templates" },
  { icon: ShieldCheck, label: "Industry", sub: "Approved" },
];

export default function DocumentVaultPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-charcoal overflow-hidden text-center">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
        <div className="container mx-auto px-6 max-w-4xl relative z-10">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Document Vault" }]} className="justify-center mb-8" />
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4 border border-primary/30 px-4 py-1.5 rounded-full">
            Free Resource Library
          </span>
          <h1 className="text-5xl md:text-7xl font-light text-white mb-6">FM Document Vault</h1>
          <p className="text-xl text-gray-300 font-light leading-relaxed max-w-2xl mx-auto mb-12">
            Professional, EntireFM-branded document templates to help you manage your building more effectively. Download for free and use immediately.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-12">
            {stats.map(({ icon: Icon, label, sub }) => (
              <div key={label} className="text-center">
                <div className="flex items-center justify-center gap-2 text-white font-bold text-2xl mb-1">
                  <Icon className="w-5 h-5 text-primary" /> {label}
                </div>
                <div className="text-[10px] text-gray-500 uppercase tracking-widest">{sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <DocumentVaultClient />
      </section>

      {/* Trust Quote */}
      <section className="bg-muted py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
            <Lock className="w-6 h-6 text-primary" />
          </div>
          <p className="text-2xl text-charcoal font-light italic leading-relaxed mb-6">
            "These templates have saved our estates team hundreds of hours in documentation prep. The PPM schedule template alone is the best free resource we've found."
          </p>
          <div className="text-sm font-bold uppercase tracking-widest text-muted-foreground">
            Head of Operations — Nationwide Logistics Estate
          </div>
        </div>
      </section>
    </div>
  );
}
