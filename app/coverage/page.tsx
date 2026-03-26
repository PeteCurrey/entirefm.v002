import { Metadata } from "next";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { MapPin, Clock, ShieldCheck, Phone, Mail } from "lucide-react";
import CoverageMapWrapper from "@/components/tools/CoverageMapWrapper";

export const metadata: Metadata = {
  title: "Nationwide FM Coverage Map | EntireFM",
  description: "Check EntireFM's service coverage and nearest regional office using our interactive map. View response times and local services available in your area.",
  alternates: { canonical: "https://www.entirefm.com/coverage" },
};

export default function CoveragePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-charcoal overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
        <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Coverage Map" }]} className="justify-center mb-8" />
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4 border border-primary/30 px-4 py-1.5 rounded-full">
            Nationwide Reach
          </span>
          <h1 className="text-5xl md:text-7xl font-light text-white mb-6">Our Coverage</h1>
          <p className="text-xl text-gray-300 font-light leading-relaxed max-w-2xl mx-auto mb-12">
            EntireFM operates across the mainland UK, with regional offices strategically located to provide rapid response and consistent service delivery.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-10">
            <div className="flex items-center gap-3 text-gray-400">
              <Clock className="w-5 h-5 text-primary" />
              <div className="text-left">
                <div className="text-sm font-bold text-white leading-none">4-Hour</div>
                <div className="text-[10px] uppercase tracking-widest mt-1">Emergency Response</div>
              </div>
            </div>
            <div className="flex items-center gap-3 text-gray-400">
              <ShieldCheck className="w-5 h-5 text-primary" />
              <div className="text-left">
                <div className="text-sm font-bold text-white leading-none">Nationwide</div>
                <div className="text-[10px] uppercase tracking-widest mt-1">Consistent Standards</div>
              </div>
            </div>
            <div className="flex items-center gap-3 text-gray-400">
              <MapPin className="w-5 h-5 text-primary" />
              <div className="text-left">
                <div className="text-sm font-bold text-white leading-none">Local Teams</div>
                <div className="text-[10px] uppercase tracking-widest mt-1">Regional Expertise</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <CoverageMapWrapper />
      </section>

      {/* Office Contact Strip */}
      <section className="bg-charcoal py-12 border-t border-white/5">
        <div className="container mx-auto px-6 max-w-7xl flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-white font-semibold mb-1">Central Operations Helpdesk</h3>
            <p className="text-gray-500 text-sm font-light uppercase tracking-widest">Available 24/7/365 for managed clients</p>
          </div>
          <div className="flex flex-wrap gap-8 justify-center">
            <a href="tel:0800000000" className="flex items-center gap-3 text-white hover:text-primary transition-colors">
              <Phone className="w-4 h-4 text-primary" />
              <span className="text-lg font-bold">0800 123 4567</span>
            </a>
            <a href="mailto:service@entirefm.com" className="flex items-center gap-3 text-white hover:text-primary transition-colors">
              <Mail className="w-4 h-4 text-primary" />
              <span className="text-lg font-bold">service@entirefm.com</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
