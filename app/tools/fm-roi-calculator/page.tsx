import { Metadata } from "next";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { TrendingDown, Clock, FileText, BarChart3 } from "lucide-react";
import ROICalculatorClient from "@/components/tools/ROICalculatorClient";

export const metadata: Metadata = {
  title: "FM ROI Calculator — True Cost of FM | EntireFM",
  description: "Calculate the true cost of your current FM model — including hidden costs — and see your 5-year saving potential with EntireFM. Free, instant, downloadable report.",
  alternates: { canonical: "https://www.entirefm.com/tools/fm-roi-calculator" },
};

const trustItems = [
  { icon: TrendingDown, label: "Includes hidden cost analysis" },
  { icon: BarChart3, label: "5-year cost projection" },
  { icon: FileText, label: "AI-generated executive summary" },
  { icon: Clock, label: "Results in under 2 minutes" },
];

export default function ROICalculatorPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative pt-32 pb-16 bg-charcoal overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
        <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Tools", href: "/tools" }, { label: "FM ROI Calculator" }]} className="justify-center mb-8" />
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-amber-400 mb-4 border border-amber-400/30 px-4 py-1.5 rounded-full">
            Free Calculator
          </span>
          <h1 className="text-4xl md:text-6xl font-light text-white mb-6 leading-tight">
            FM Total Cost of Ownership Calculator
          </h1>
          <p className="text-xl text-gray-300 font-light leading-relaxed max-w-2xl mx-auto mb-10">
            Most organisations are paying far more for FM than they realise. This calculator reveals the true cost of your current FM model — including the hidden costs — and shows you exactly what switching to EntireFM could save over 5 years.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {trustItems.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-sm text-gray-400">
                <Icon className="w-4 h-4 text-amber-400" /><span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white">
        <ROICalculatorClient />
      </section>
    </div>
  );
}
