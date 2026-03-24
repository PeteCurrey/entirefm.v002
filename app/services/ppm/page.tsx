import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { 
  BarChart3, ShieldCheck, Zap, Smartphone, 
  Settings, Flame, Lightbulb, Droplets, 
  Wind, Hammer, Trash2, ArrowRight, CheckCircle2, XCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "Planned Preventative Maintenance (PPM) | SFG20-Aligned UK FM | EntireFM",
  description: "EntireFM delivers proactive, SFG20-aligned planned preventative maintenance (PPM) across the UK. Reduce reactive costs, ensure compliance, and extend asset lifecycles with our expert M&E services.",
  alternates: {
    canonical: "https://www.entirefm.com/services/ppm",
  },
};

export default function PPMPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is PPM in facilities management?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "PPM, or Planned Preventative Maintenance, is a proactive approach to building maintenance where tasks are performed at regular intervals to prevent equipment failure."
        }
      },
      {
        "@type": "Question",
        "name": "How much can PPM reduce maintenance costs?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Correctly implemented PPM can reduce reactive maintenance call-out costs by up to 34% through early identification of minor issues."
        }
      }
    ]
  };

  const assets = [
    { name: "HVAC Systems", icon: <Wind className="w-6 h-6" /> },
    { name: "Boilers & Chillers", icon: <Settings className="w-6 h-6" /> },
    { name: "Fire Alarms", icon: <Flame className="w-6 h-6" /> },
    { name: "Emergency Lighting", icon: <Lightbulb className="w-6 h-6" /> },
    { name: "Electrical Systems", icon: <Zap className="w-6 h-6" /> },
    { name: "Dry Risers", icon: <Droplets className="w-6 h-6" /> },
    { name: "Entry Systems", icon: <Smartphone className="w-6 h-6" /> },
    { name: "Water Safety", icon: <Droplets className="w-6 h-6" /> },
    { name: "Generators", icon: <Zap className="w-6 h-6" /> },
    { name: "Extraction", icon: <Wind className="w-6 h-6" /> },
    { name: "Building Fabric", icon: <Hammer className="w-6 h-6" /> },
    { name: "Drainage", icon: <Droplets className="w-6 h-6" /> },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0b] text-white font-inter">
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <section className="relative pt-48 pb-24 overflow-hidden border-b border-white/5">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <span className="text-primary text-xs font-black uppercase tracking-[0.4em] mb-8 block">OPERATIONAL GOVERNANCE</span>
            <h1 className="text-5xl md:text-7xl font-black mb-10 leading-tight tracking-tight">
              Planned Preventative <span className="text-primary">Maintenance (PPM)</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed mb-12 max-w-2xl">
              Proactive. Compliant. Cost-Effective. Move away from expensive 
              reactive repairs with an SFG20-aligned maintenance strategy.
            </p>
            
            {/* Hero Stat Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-10 border-t border-white/10">
               <div>
                  <div className="text-primary text-3xl font-black mb-1">Up to 34%</div>
                  <div className="text-gray-500 text-[10px] font-black uppercase tracking-widest leading-relaxed">Reactive Cost Reduction</div>
               </div>
               <div>
                  <div className="text-primary text-3xl font-black mb-1">SFG20</div>
                  <div className="text-gray-500 text-[10px] font-black uppercase tracking-widest leading-relaxed">Aligned Schedules</div>
               </div>
               <div>
                  <div className="text-primary text-3xl font-black mb-1">2,000+</div>
                  <div className="text-gray-500 text-[10px] font-black uppercase tracking-widest leading-relaxed">Asset Types Covered</div>
               </div>
               <div>
                  <div className="text-primary text-3xl font-black mb-1">24/7</div>
                  <div className="text-gray-500 text-[10px] font-black uppercase tracking-widest leading-relaxed">Emergency Helpdesk</div>
               </div>
            </div>
            
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white px-10 h-16 rounded-none border-none uppercase tracking-[0.2em] font-black text-sm shadow-2xl mt-8">
              <Link href="/contact">Build Your PPM Programme</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* The PPM Lifecycle - Custom SVG Diagram */}
      <section className="py-32 bg-[#0d0d0f]">
        <div className="container mx-auto px-6">
          <h2 className="text-xs uppercase tracking-[0.4em] font-black text-primary mb-16 text-center">The PPM Lifecycle</h2>
          <div className="relative w-full max-w-5xl mx-auto py-20 px-10 overflow-x-auto lg:overflow-visible">
            {/* Inline SVG Diagram */}
            <svg viewBox="0 0 1000 200" className="w-full min-w-[800px] h-auto overflow-visible">
              <defs>
                <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill="currentColor" className="text-primary" />
                </marker>
              </defs>
              {/* Connector Line */}
              <line x1="50" y1="100" x2="950" y2="100" stroke="currentColor" strokeWidth="2" strokeDasharray="10 10" className="text-primary/30" />
              
              {/* Step 1 */}
              <g className="group">
                <circle cx="50" cy="100" r="12" fill="currentColor" className="text-primary" />
                <text x="50" y="50" textAnchor="middle" fill="white" className="text-[10px] font-black uppercase tracking-widest">Asset Register</text>
                <text x="50" y="150" textAnchor="middle" fill="#6B7280" className="text-[10px] font-medium max-w-[80px]">Audit of all on-site equipment</text>
              </g>

              {/* Step 2 */}
              <g className="group">
                <circle cx="275" cy="100" r="12" fill="currentColor" className="text-primary" />
                <text x="275" y="50" textAnchor="middle" fill="white" className="text-[10px] font-black uppercase tracking-widest">PPM Schedule</text>
                <text x="275" y="150" textAnchor="middle" fill="#6B7280" className="text-[10px] font-medium">Mapped to SFG20 standards</text>
              </g>

              {/* Step 3 */}
              <g className="group">
                <circle cx="500" cy="100" r="12" fill="currentColor" className="text-primary" />
                <text x="500" y="50" textAnchor="middle" fill="white" className="text-[10px] font-black uppercase tracking-widest">Scheduled Visit</text>
                <text x="500" y="150" textAnchor="middle" fill="#6B7280" className="text-[10px] font-medium">Engineers attend on date</text>
              </g>

              {/* Step 4 */}
              <g className="group">
                <circle cx="725" cy="100" r="12" fill="currentColor" className="text-primary" />
                <text x="725" y="50" textAnchor="middle" fill="white" className="text-[10px] font-black uppercase tracking-widest">Digital Report</text>
                <text x="725" y="150" textAnchor="middle" fill="#6B7280" className="text-[10px] font-medium">Instant compliance certificates</text>
              </g>

              {/* Step 5 */}
              <g className="group">
                <circle cx="950" cy="100" r="12" fill="currentColor" className="text-primary" />
                <text x="950" y="50" textAnchor="middle" fill="white" className="text-[10px] font-black uppercase tracking-widest">Review & Repeat</text>
                <text x="950" y="150" textAnchor="middle" fill="#6B7280" className="text-[10px] font-medium">Continuous estate health</text>
              </g>
            </svg>
          </div>
        </div>
      </section>

      {/* Asset Grid */}
      <section className="py-32 border-y border-white/5">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-black mb-16 tracking-tight">2,000+ Asset Types <span className="text-primary">Covered</span></h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {assets.map((asset, i) => (
              <div key={i} className="bg-[#161618] p-8 border border-white/5 flex flex-col items-center group hover:border-primary transition-all">
                <div className="text-primary mb-4 group-hover:scale-110 transition-transform">{asset.icon}</div>
                <span className="text-[10px] font-black uppercase tracking-widest opacity-60 group-hover:opacity-100">{asset.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reactive vs Preventative Table */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-black mb-16 tracking-tight text-center">Reactive vs <span className="text-primary">Preventative</span></h2>
          <div className="max-w-4xl mx-auto overflow-hidden border border-white/10">
            <div className="grid grid-cols-2 bg-white/5 font-black uppercase tracking-widest text-xs border-b border-white/10">
               <div className="p-8 text-center text-gray-500">Reactive Maintenance</div>
               <div className="p-8 text-center text-primary bg-primary/5">PPM (EntireFM)</div>
            </div>
            <div className="grid grid-cols-2 border-b border-white/5">
               <div className="p-8 flex items-center gap-4 text-gray-400 font-light">
                 <XCircle className="w-5 h-5 text-red-500 shrink-0" />
                 High emergency call-out costs
               </div>
               <div className="p-8 flex items-center gap-4 text-white font-light bg-primary/5 border-l border-white/5">
                 <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                 Pre-agreed, lower maintenance rates
               </div>
            </div>
            <div className="grid grid-cols-2 border-b border-white/5">
               <div className="p-8 flex items-center gap-4 text-gray-400 font-light">
                 <XCircle className="w-5 h-5 text-red-500 shrink-0" />
                 Unpredictable operational downtime
               </div>
               <div className="p-8 flex items-center gap-4 text-white font-light bg-primary/5 border-l border-white/5">
                 <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                 Scheduled visits to avoid disruption
               </div>
            </div>
            <div className="grid grid-cols-2 border-b border-white/5">
               <div className="p-8 flex items-center gap-4 text-gray-400 font-light">
                 <XCircle className="w-5 h-5 text-red-500 shrink-0" />
                 Statutory compliance risk & fines
               </div>
               <div className="p-8 flex items-center gap-4 text-white font-light bg-primary/5 border-l border-white/5">
                 <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                 SFG20-aligned for total compliance
               </div>
            </div>
            <div className="grid grid-cols-2">
               <div className="p-8 flex items-center gap-4 text-gray-400 font-light">
                 <XCircle className="w-5 h-5 text-red-500 shrink-0" />
                 Shortened asset lifecycle
               </div>
               <div className="p-8 flex items-center gap-4 text-white font-light bg-primary/5 border-l border-white/5">
                 <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                 Extended asset lifespan (ROI)
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 bg-[#0d0d0f]">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-black mb-16 tracking-tight text-center uppercase">PPM <span className="text-primary">Questions</span></h2>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border-white/10 bg-[#161618] px-8">
              <AccordionTrigger className="text-left font-bold text-lg hover:text-primary hover:no-underline py-6">
                How does EntireFM determine maintenance frequency?
              </AccordionTrigger>
              <AccordionContent className="text-gray-400 font-light text-base pb-6 leading-relaxed">
                We use the SFG20 standard—the UK's benchmark for maintenance scheduling—coupled with manufacturer recommendations and statutory requirements to create the optimal schedule for your specific assets.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border-white/10 bg-[#161618] px-8">
              <AccordionTrigger className="text-left font-bold text-lg hover:text-primary hover:no-underline py-6">
                What is SFG20 and why does it matter?
              </AccordionTrigger>
              <AccordionContent className="text-gray-400 font-light text-base pb-6 leading-relaxed">
                SFG20 is the industry standard for building maintenance. It defines which tasks are statutory (legally required) vs. preventative. Using SFG20 ensures your estate is legally compliant and not over-maintained.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border-white/10 bg-[#161618] px-8">
              <AccordionTrigger className="text-left font-bold text-lg hover:text-primary hover:no-underline py-6">
                Can I see my compliance records online?
              </AccordionTrigger>
              <AccordionContent className="text-gray-400 font-light text-base pb-6 leading-relaxed">
                Yes. Every EntireFM client has access to a digital reporting portal where certificates, job logs, and compliance dashboards are updated in real-time as jobs are completed.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-white py-32 text-center text-[#0a0a0b]">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black mb-12 tracking-tight">
            Stop Reacting. Start Planning.
          </h2>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white px-12 h-16 rounded-none border-none uppercase tracking-widest font-black text-sm shadow-2xl">
            <Link href="/contact">Build Your PPM Programme Today</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
