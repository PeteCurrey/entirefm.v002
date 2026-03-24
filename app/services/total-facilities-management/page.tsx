import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { 
  Combine, ShieldCheck, TrendingDown, Layers, 
  Settings, Sparkles, Search, Rocket, 
  Play, RefreshCcw, ArrowRight, CheckCircle2 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "Total Facilities Management UK | TFM Services | EntireFM",
  description: "EntireFM delivers integrated total facilities management (TFM) across the UK — one contract covering all hard and soft FM services for commercial, retail, residential, and industrial clients.",
  alternates: {
    canonical: "https://www.entirefm.com/services/total-facilities-management",
  },
};

export default function TFMPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is Total Facilities Management (TFM)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "TFM is a service model where a single provider manages all of a building's facilities management requirements, including both hard and soft services, under one contract."
        }
      },
      {
        "@type": "Question",
        "name": "What are the benefits of a TFM contract?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The primary benefits are reduced management overhead, improved accountability, economies of scale, and consistent service quality across all FM lines."
        }
      }
    ]
  };

  const advantages = [
    {
      title: "Single Accountability",
      desc: "No more 'blame games' between contractors. One partner, one helpdesk, one result.",
      icon: <ShieldCheck className="w-6 h-6" />
    },
    {
      title: "Cost Consolidation",
      desc: "Reduce your management fees and leverage economies of scale across all service lines.",
      icon: <TrendingDown className="w-6 h-6" />
    },
    {
      title: "Consistent Compliance",
      desc: "A uniform standard of operational governance across your entire UK estate.",
      icon: <Layers className="w-6 h-6" />
    },
    {
      title: "Strategic Efficiency",
      desc: "Free your internal teams from vendor management to focus on your core business goals.",
      icon: <Combine className="w-6 h-6" />
    }
  ];

  const onboardingSteps = [
    { title: "Discovery", desc: "Full asset audit and compliance review of your existing estate.", icon: <Search className="w-8 h-8" /> },
    { title: "Mobilisation", desc: "Onboarding site teams and configuring helpdesk protocols.", icon: <Rocket className="w-8 h-8" /> },
    { title: "Delivery", desc: "Phased implementation of Hard and Soft service schedules.", icon: <Play className="w-8 h-8" /> },
    { title: "Review", desc: "Ongoing KPI reporting and strategic service refinement.", icon: <RefreshCcw className="w-8 h-8" /> },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0b] text-white font-inter">
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <section className="relative pt-48 pb-32 overflow-hidden border-b border-white/5">
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <span className="text-primary text-xs font-black uppercase tracking-[0.4em] mb-8 block">INTEGRATED FM SOLUTIONS</span>
            <h1 className="text-5xl md:text-7xl font-black mb-10 leading-tight tracking-tight">
              Total Facilities <span className="text-primary">Management</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed mb-12">
              One Partner. Every Service. Complete Peace of Mind. 
              The preferred TFM partner for high-performing estates.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white px-10 h-16 rounded-none border-none uppercase tracking-[0.2em] font-black text-sm shadow-2xl">
                <Link href="/contact">Get a TFM Proposal</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-white border-white/10 hover:bg-white/5 px-10 h-16 rounded-none uppercase tracking-[0.2em] font-black text-sm">
                <Link href="/case-studies">View TFM Case Studies</Link>
              </Button>
            </div>
          </div>
        </div>
        {/* Animated Background Element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      </section>

      {/* What is TFM Section */}
      <section className="py-32 bg-[#0d0d0f]">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="text-xs uppercase tracking-[0.4em] font-black text-primary mb-8">What is TFM?</h2>
              <p className="text-3xl font-light text-white mb-10 leading-snug">
                Total Facilities Management (TFM) is the consolidation of 
                every maintenance and support service into one seamless contract.
              </p>
              <p className="text-lg text-gray-400 font-light leading-relaxed mb-12">
                At EntireFM, we specialise in delivering TFM for mid-market clients 
                who want the depth of a national player with the responsiveness 
                of an independent specialist. No longer lost in a corporate hierarchy, 
                you receive personal, expert-led service across every site.
              </p>
              <div className="flex items-center gap-4 text-primary text-xs font-black uppercase tracking-widest cursor-pointer hover:gap-6 transition-all">
                The Single-Supplier Advantage <ArrowRight className="w-5 h-5" />
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {advantages.map((adv, i) => (
                <div key={i} className="bg-[#161618] p-10 border border-white/5 group hover:border-primary transition-all">
                   <div className="text-primary mb-6 group-hover:scale-110 transition-transform">{adv.icon}</div>
                   <h4 className="text-lg font-bold mb-4 uppercase tracking-tight">{adv.title}</h4>
                   <p className="text-sm text-gray-500 font-light">{adv.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TFM Service Grid (Hard | Soft Split) */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-black mb-16 tracking-tight text-center">Complete <span className="text-primary">Operational Coverage</span></h2>
          <div className="grid lg:grid-cols-2 gap-px bg-white/10 border border-white/10">
            {/* Hard FM Column */}
            <div className="bg-[#0a0a0b] p-12 lg:p-20">
              <div className="flex items-center gap-4 mb-12">
                 <Settings className="w-8 h-8 text-primary" />
                 <h3 className="text-2xl font-black uppercase tracking-tight text-white">Hard FM Services</h3>
              </div>
              <ul className="space-y-6">
                {["M&E Maintenance", "HVAC & Temperature Control", "Fire Safety & Detection", "Electrical Compliance (EICR)", "Building Fabric Maintenance", "Asset Lifecycle Planning"].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-gray-400 font-light">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            {/* Soft FM Column */}
            <div className="bg-[#0a0a0b] p-12 lg:p-20 border-t lg:border-t-0 lg:border-l border-white/10">
              <div className="flex items-center gap-4 mb-12">
                 <Sparkles className="w-8 h-8 text-primary" />
                 <h3 className="text-2xl font-black uppercase tracking-tight text-white">Soft FM Services</h3>
              </div>
              <ul className="space-y-6">
                {["Commercial Cleaning", "SIA Licensed Security", "Grounds Maintenance", "Concierge & Front of House", "Window Cleaning", "Waste & Recycling Management"].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-gray-400 font-light">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* The TFM Onboarding Process */}
      <section className="py-32 bg-[#0d0d0f]">
        <div className="container mx-auto px-6">
          <h2 className="text-center text-xs uppercase tracking-[0.4em] font-black text-primary mb-16">The TFM Mobilisation Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {onboardingSteps.map((step, i) => (
              <div key={i} className="relative group p-10 bg-[#161618] border border-white/5">
                <div className="text-primary text-6xl font-black opacity-5 absolute top-4 right-4 group-hover:opacity-20 transition-opacity">0{i+1}</div>
                <div className="text-primary mb-8">{step.icon}</div>
                <h4 className="text-xl font-bold mb-4 uppercase tracking-tight">{step.title}</h4>
                <p className="text-sm text-gray-500 font-light leading-relaxed">{step.desc}</p>
                {i < 3 && <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-20"><ArrowRight className="w-8 h-8 text-primary/20" /></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Highlight Strip */}
      <section className="py-24 border-y border-white/5">
        <div className="container mx-auto px-6">
           <div className="bg-primary/5 p-12 lg:p-20 border border-primary/20 flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-2/3">
                 <span className="text-primary text-xs font-black uppercase tracking-widest mb-6 block">TFM IN ACTION</span>
                 <h3 className="text-3xl font-black mb-8 leading-tight">Total Facilities Management for Nationwide Motorway Service Network</h3>
                 <p className="text-gray-400 font-light mb-0 text-lg">
                   Discover how EntireFM delivers integrated Hard and Soft FM for 
                   high-footfall transport hubs across the UK.
                 </p>
              </div>
              <div className="lg:w-1/3 flex justify-center lg:justify-end">
                 <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white px-10 h-16 rounded-none uppercase tracking-widest font-black text-sm transition-all duration-300">
                    <Link href="/case-studies/motorway-services-fm">Read Case Study</Link>
                 </Button>
              </div>
           </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-black mb-16 tracking-tight text-center uppercase text-primary">TFM Insights</h2>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-[#161618] border-white/10 px-8">
              <AccordionTrigger className="text-left font-bold text-lg hover:text-primary hover:no-underline py-6">
                Why should I choose TFM over managing multiple specialists?
              </AccordionTrigger>
              <AccordionContent className="text-gray-500 font-light text-base pb-6 leading-relaxed">
                Managing multiple specialists creates management overhead and often leads to gaps in accountability. TFM provides a single point of responsibility, consolidated invoicing, and integrated reporting, allowing you to focus on your core business.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="bg-[#161618] border-white/10 px-8">
              <AccordionTrigger className="text-left font-bold text-lg hover:text-primary hover:no-underline py-6">
                Is TFM only for very large businesses?
              </AccordionTrigger>
              <AccordionContent className="text-gray-500 font-light text-base pb-6 leading-relaxed">
                Not at all. EntireFM specialises in TFM for the mid-market. We manage contracts of all sizes, ensuring that smaller portfolios receive the same level of technical sophistication as global enterprises.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="bg-[#161618] border-white/10 px-8">
              <AccordionTrigger className="text-left font-bold text-lg hover:text-primary hover:no-underline py-6">
                How long does it take to transition to a TFM model?
              </AccordionTrigger>
              <AccordionContent className="text-gray-500 font-light text-base pb-6 leading-relaxed">
                A typical TFM mobilisation takes between 30 and 90 days. We manage the entire transition process, including asset audits, staff TUPE (where applicable), and helpdesk integration to ensure zero operational disruption.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-white py-32 text-center text-[#0a0a0b]">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black mb-12 tracking-tight">
            Ready to Consolidate Your FM Estate?
          </h2>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white px-12 h-16 rounded-none border-none uppercase tracking-widest font-black text-sm shadow-2xl">
            <Link href="/contact">Get a TFM Proposal Today</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
