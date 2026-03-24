import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { 
  Settings, Zap, Flame, Lightbulb, HardHat, Building2, 
  CheckCircle2, Plus, ArrowRight, ShieldCheck, Clock, 
  Users, FileText, Smartphone 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "Hard FM Services UK | M&E, HVAC & Statutory Compliance | EntireFM",
  description: "EntireFM delivers expert hard facilities management services across the UK — mechanical and electrical maintenance, HVAC, fire safety, electrical compliance, and building fabric. SFG20-aligned and 24/7 helpdesk supported.",
  alternates: {
    canonical: "https://www.entirefm.com/services/hard-fm",
  },
};

export default function HardFMPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is included in Hard FM services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Hard FM refers to the physical fabric and systems of a building that cannot be removed, such as M&E, HVAC, fire safety systems, plumbing, and electrical compliance."
        }
      },
      {
        "@type": "Question",
        "name": "Are EntireFM's maintenance schedules SFG20-aligned?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, all of our hard FM maintenance programmes are built using the SFG20 standard to ensure absolute statutory compliance."
        }
      }
    ]
  };

  const services = [
    { title: "M&E Services", icon: <Settings className="w-8 h-8" /> },
    { title: "HVAC Maintenance", icon: <Zap className="w-8 h-8" /> },
    { title: "Fire Safety", icon: <Flame className="w-8 h-8" /> },
    { title: "Emergency Lighting", icon: <Lightbulb className="w-8 h-8" /> },
    { title: "Electrical Compliance", icon: <ShieldCheck className="w-8 h-8" /> },
    { title: "Building Fabric", icon: <Building2 className="w-8 h-8" /> },
  ];

  const benefits = [
    {
      title: "SFG20-Compliant Programmes",
      desc: "Maintenance built to the UK's legal gold standard for total peace of mind.",
      icon: <FileText className="w-6 h-6" />
    },
    {
      title: "24/7 Reactive Helpdesk",
      desc: "Emergency response whenever you need it, managed by our UK-based team.",
      icon: <Smartphone className="w-6 h-6" />
    },
    {
      title: "Dedicated Account Management",
      desc: "One single point of contact for every hard FM service line.",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Full Compliance Documentation",
      desc: "Real-time access to every certificate and service record via our portal.",
      icon: <CheckCircle2 className="w-6 h-6" />
    }
  ];

  const sectors = ["Retail", "Residential", "Hotel", "Industrial", "Commercial", "Aviation", "Arenas", "Healthcare", "Education"];

  return (
    <div className="min-h-screen bg-[#0a0a0b] text-white font-inter">
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <section className="relative pt-48 pb-24 overflow-hidden">
        {/* Isometric Grid Overlay */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="isoGrid" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M100 0L0 50L100 100L200 50Z" fill="none" stroke="currentColor" strokeWidth="1" className="text-primary" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#isoGrid)" />
          </svg>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <span className="text-primary text-xs font-black uppercase tracking-[0.4em] mb-8 block">TECHNICAL FM EXPERTISE</span>
            <h1 className="text-5xl md:text-7xl font-black mb-10 leading-tight tracking-tight">
              Hard FM Services — Critical Systems <span className="text-primary">Safe & Compliant</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed mb-12 max-w-2xl">
              From nationwide M&E maintenance to statutory fire safety audits, 
              we keep your building's vital infrastructure performing at its peak.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white px-10 h-16 rounded-none border-none uppercase tracking-[0.2em] font-black text-sm shadow-2xl">
              <Link href="/contact">Get a Hard FM Quote</Link>
            </Button>
          </div>
        </div>

        {/* Stat Strip */}
        <div className="mt-24 border-y border-white/10 bg-white/5 backdrop-blur-sm">
          <div className="container mx-auto px-6 py-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-primary text-3xl font-black mb-2">24/7</div>
                <div className="text-gray-500 text-[10px] font-black uppercase tracking-widest">Helpdesk Support</div>
              </div>
              <div className="text-center">
                <div className="text-primary text-3xl font-black mb-2">SFG20</div>
                <div className="text-gray-500 text-[10px] font-black uppercase tracking-widest">Aligned Schedules</div>
              </div>
              <div className="text-center">
                <div className="text-primary text-3xl font-black mb-2">Nationwide</div>
                <div className="text-gray-500 text-[10px] font-black uppercase tracking-widest">UK Coverage</div>
              </div>
              <div className="text-center">
                <div className="text-primary text-3xl font-black mb-2">2009</div>
                <div className="text-gray-500 text-[10px] font-black uppercase tracking-widest">Established</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Hard FM Section */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="text-xs uppercase tracking-[0.4em] font-black text-primary mb-8">What is Hard FM?</h2>
              <p className="text-3xl font-light text-white mb-10 leading-snug">
                Hard Facilities Management relates to the physical structure and 
                critical technical systems that keep your building habitable.
              </p>
              <p className="text-lg text-gray-400 font-light leading-relaxed mb-12">
                Unlike soft services, Hard FM is often statutory. Failure to maintain these 
                systems doesn't just impact comfort—it creates significant legal and 
                safety liabilities. EntireFM provides a single point of accountability 
                for every technical asset in your estate.
              </p>
              <div className="flex gap-4">
                <div className="w-12 h-1 bg-primary" />
                <span className="text-xs font-black uppercase tracking-widest text-gray-500">Documented Operational Governance</span>
              </div>
            </div>
            {/* Icon Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {services.map((service, i) => (
                <div key={i} className="bg-[#161618] p-8 border border-white/5 hover:border-primary/30 transition-all group text-center">
                  <div className="text-primary mb-6 flex justify-center group-hover:scale-110 transition-transform">{service.icon}</div>
                  <div className="text-xs font-black uppercase tracking-widest group-hover:text-primary transition-colors">{service.title}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Breakdown - Alternating Rows */}
      <section className="py-32 bg-[#0d0d0f]">
        <div className="container mx-auto px-6 space-y-40">
          
          {/* Service 1 */}
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative aspect-video bg-[#161618] border border-white/10 group overflow-hidden">
               {/* Illustration Placeholder */}
               <div className="absolute inset-0 flex items-center justify-center opacity-20">
                  <Settings className="w-40 h-40 text-primary animate-spin-slow" />
               </div>
               <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent" />
            </div>
            <div>
              <h3 className="text-2xl font-black mb-6 uppercase tracking-tight">Mechanical & Electrical <span className="text-primary">(M&E)</span></h3>
              <p className="text-lg text-gray-400 font-light leading-relaxed mb-8">
                The nervous system of your building. Our nationwide M&E team handles 
                everything from distribution board maintenance to plant room services. 
                We focus on energy efficiency and preventative Care to avoid critical 
                power failures that disrupt your business.
              </p>
              <CheckCircle2 className="text-primary w-6 h-6 mb-4" />
              <p className="text-xs font-black uppercase tracking-widest text-gray-500">Reduced Power Failure Risk</p>
            </div>
          </div>

          {/* Service 2 */}
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="order-last lg:order-first">
              <h3 className="text-2xl font-black mb-6 uppercase tracking-tight">HVAC Maintenance & <span className="text-primary">F-Gas</span></h3>
              <p className="text-lg text-gray-400 font-light leading-relaxed mb-8">
                Heating, ventilation, and cooling systems are your building's lungs. 
                EntireFM provides expert HVAC servicing, filter hygiene, and 
                statutory F-Gas leak testing to ensure temperature control and 
                indoor air quality meet modern compliance standards.
              </p>
              <CheckCircle2 className="text-primary w-6 h-6 mb-4" />
              <p className="text-xs font-black uppercase tracking-widest text-gray-500">Optimal Air Quality & Efficiency</p>
            </div>
            <div className="relative aspect-video bg-[#161618] border border-white/10 group overflow-hidden">
               <div className="absolute inset-0 flex items-center justify-center opacity-20">
                  <Zap className="w-40 h-40 text-primary" />
               </div>
               <div className="absolute inset-0 bg-gradient-to-tl from-primary/10 to-transparent" />
            </div>
          </div>

          {/* Service 3 */}
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative aspect-video bg-[#161618] border border-white/10 group overflow-hidden">
               <div className="absolute inset-0 flex items-center justify-center opacity-20">
                  <Flame className="w-40 h-40 text-primary" />
               </div>
               <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
            </div>
            <div>
              <h3 className="text-2xl font-black mb-6 uppercase tracking-tight">Fire Safety <span className="text-primary">Systems</span></h3>
              <p className="text-lg text-gray-400 font-light leading-relaxed mb-8">
                The most critical aspect of building life safety. We manage fire 
                alarm testing, smoke detection, emergency lighting, and dry riser 
                maintenance. All service records are digitally logged for instant 
                proof during local authority audits.
              </p>
              <CheckCircle2 className="text-primary w-6 h-6 mb-4" />
              <p className="text-xs font-black uppercase tracking-widest text-gray-500">Statutory Compliance Guaranteed</p>
            </div>
          </div>

        </div>
      </section>

      {/* Why EntireFM Section */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-black mb-16 tracking-tight text-center">Why EntireFM for <span className="text-primary">Hard FM?</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, i) => (
              <div key={i} className="bg-[#161618] p-10 border border-white/5 relative group">
                <div className="absolute top-6 right-6 text-primary opacity-20 group-hover:opacity-100 transition-opacity">
                  {benefit.icon}
                </div>
                <h4 className="text-lg font-bold mb-6 text-white uppercase tracking-tight">{benefit.title}</h4>
                <p className="text-sm text-gray-400 font-light leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sector Strip */}
      <section className="py-16 border-y border-white/5 overflow-hidden bg-[#0a0a0b]">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-12 animate-scroll whitespace-nowrap">
            <span className="text-[10px] font-black tracking-[0.3em] text-gray-500 uppercase">Sectors We Serve:</span>
            {sectors.map((sector) => (
              <div key={sector} className="text-white font-bold text-xs uppercase tracking-widest flex items-center">
                <div className="w-1.5 h-1.5 bg-primary rounded-full mr-4" />
                {sector}
              </div>
            ))}
            {/* Repeated for scroll effect */}
            {sectors.map((sector) => (
              <div key={`${sector}-2`} className="text-white font-bold text-xs uppercase tracking-widest flex items-center">
                <div className="w-1.5 h-1.5 bg-primary rounded-full mr-4" />
                {sector}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-black mb-16 tracking-tight text-center">Hard FM <span className="text-primary">Questions</span></h2>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border-white/10 bg-[#161618] px-8">
              <AccordionTrigger className="text-left font-bold text-lg hover:text-primary hover:no-underline py-6">
                What is the difference between Hard FM and Soft FM?
              </AccordionTrigger>
              <AccordionContent className="text-gray-400 font-light text-base pb-6">
                Hard FM refers to the physical systems of a building (M&E, HVAC, Fire Safety) which are often statutory. Soft FM refers to services like cleaning and security that make the building more comfortable and safe.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border-white/10 bg-[#161618] px-8">
              <AccordionTrigger className="text-left font-bold text-lg hover:text-primary hover:no-underline py-6">
                Is Hard FM a legal requirement in the UK?
              </AccordionTrigger>
              <AccordionContent className="text-gray-400 font-light text-base pb-6">
                Yes, many elements of Hard FM are statutory. This includes gas safety, fire alarm maintenance, fixed wire testing (EICR), and water hygiene (Legionella). Failure to maintain these can lead to criminal liability.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border-white/10 bg-[#161618] px-8">
              <AccordionTrigger className="text-left font-bold text-lg hover:text-primary hover:no-underline py-6">
                How often should my Hard FM assets be serviced?
              </AccordionTrigger>
              <AccordionContent className="text-gray-400 font-light text-base pb-6">
                Service intervals are determined by SFG20 standards and manufacturer guidelines. For example, some fire safety checks are weekly, while HVAC major servicing is typically annual or bi-annual.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-white py-32 text-center text-[#0a0a0b]">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black mb-12 tracking-tight">
            Ready for a Safer, More Compliant Estate?
          </h2>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white px-12 h-16 rounded-none border-none uppercase tracking-widest font-black text-sm shadow-2xl">
            <Link href="/contact">Get a Hard FM Quote Today</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
