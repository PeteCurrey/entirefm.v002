import { Metadata } from "next";
import PPMScheduleBuilderClient from "@/components/tools/PPMScheduleBuilderClient";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { ClipboardList, ShieldAlert, Download, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "PPM Schedule Builder — Free Tool | EntireFM",
  description: "Build a complete planned preventative maintenance schedule for your building in minutes. Select your assets, generate SFG20-aligned frequencies, and download your schedule free.",
  alternates: { canonical: "https://www.entirefm.com/tools/ppm-schedule-builder" },
};

const trustItems = [
  { icon: ClipboardList, label: "SFG20-aligned frequencies" },
  { icon: ShieldAlert, label: "Statutory assets clearly flagged" },
  { icon: Download, label: "Exportable as PDF" },
  { icon: Star, label: "Free to use" },
];

export default function PPMScheduleBuilderPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative pt-32 pb-16 bg-charcoal overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
        <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Tools", href: "/tools" }, { label: "PPM Schedule Builder" }]} className="justify-center mb-8" />
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4 border border-primary/30 px-4 py-1.5 rounded-full">
            Free Tool
          </span>
          <h1 className="text-4xl md:text-6xl font-light text-white mb-6 leading-tight">
            PPM Schedule Builder
          </h1>
          <p className="text-xl text-gray-300 font-light leading-relaxed max-w-2xl mx-auto mb-10">
            Select the assets in your building and generate a complete SFG20-aligned planned preventative maintenance schedule — with service frequencies, compliance notes, and downloadable format.
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
        <PPMScheduleBuilderClient />
      </section>
    </div>
  );
}
