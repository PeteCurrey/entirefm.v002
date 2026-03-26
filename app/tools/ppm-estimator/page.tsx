import { Metadata } from "next";
import PPMEstimatorClient from "@/components/tools/PPMEstimatorClient";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { Calculator, TrendingDown, GitBranch, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "PPM Cost Estimator — Free Tool | EntireFM",
  description: "Get a free ballpark planned preventative maintenance cost estimate in under 2 minutes. Enter your site profile and see a realistic PPM programme cost range with potential savings calculation.",
  alternates: { canonical: "https://www.entirefm.com/tools/ppm-estimator" },
};

const trustItems = [
  { icon: Calculator, label: "Based on real UK FM pricing" },
  { icon: GitBranch, label: "Multi-site discounts calculated" },
  { icon: TrendingDown, label: "Includes potential savings estimate" },
  { icon: Clock, label: "Free — takes 90 seconds" },
];

export default function PPMEstimatorPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative pt-32 pb-16 bg-charcoal overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
        <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Tools", href: "/tools" }, { label: "PPM Cost Estimator" }]} className="justify-center mb-8" />
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4 border border-primary/30 px-4 py-1.5 rounded-full">
            Free Estimator
          </span>
          <h1 className="text-4xl md:text-6xl font-light text-white mb-6 leading-tight">
            PPM Cost Estimator
          </h1>
          <p className="text-xl text-gray-300 font-light leading-relaxed max-w-2xl mx-auto mb-10">
            Get a ballpark PPM programme cost in under 2 minutes. Tell us about your site and we'll give you a realistic cost range — no salesperson, no obligation.
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
        <PPMEstimatorClient />
      </section>
    </div>
  );
}
