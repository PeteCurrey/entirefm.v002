import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { 
  Sparkles, Shield, TreePine, DoorOpen, Users, 
  CheckCircle2, ArrowRight, Clock, MapPin, 
  Briefcase, Star 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "Soft FM Services UK | Cleaning, Security & Grounds Maintenance | EntireFM",
  description: "Complete soft FM services from EntireFM — commercial cleaning, SIA-trained security, grounds maintenance, concierge, and caretaking for residential, commercial, and retail clients across the UK.",
  alternates: {
    canonical: "https://www.entirefm.com/services/soft-fm",
  },
};

export default function SoftFMPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What soft FM services does EntireFM provide?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We provide commercial cleaning, SIA-licensed security, grounds maintenance, concierge services, and caretaking nationwide."
        }
      },
      {
        "@type": "Question",
        "name": "Are your security guards SIA licensed?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, all security personnel provided by EntireFM are fully SIA licensed and undergo rigorous background checks."
        }
      }
    ]
  };

  const softServices = [
    {
      title: "Commercial Cleaning",
      desc: "Daily office cleaning, clinical deep cleans, and high-performance floor care. We use eco-friendly products and structured audit systems to maintain the highest hygiene standards.",
      icon: <Sparkles className="w-10 h-10" />,
      tag: "Hygiene & Health",
      dark: true
    },
    {
      title: "SIA Security & Guarding",
      desc: "Professional manned guarding, concierge-security hybrids, and mobile patrols. Our SIA-licensed experts provide a visible deterrent and a welcoming first point of contact.",
      icon: <Shield className="w-10 h-10" />,
      tag: "Protection & Safety",
      dark: false
    },
    {
      title: "Grounds Maintenance",
      desc: "Landscaping, grass cutting, arboriculture, and winter gritting. We ensure your external environment reflects the same quality as your internal estate.",
      icon: <TreePine className="w-10 h-10" />,
      tag: "External Environment",
      dark: true
    },
    {
      title: "Concierge & Caretaking",
      desc: "Front-of-house hospitality blended with site hygiene. From managing deliveries to ensuring common areas are pristine, our caretakers are the heartbeat of the site.",
      icon: <DoorOpen className="w-10 h-10" />,
      tag: "Hospitality & Hygiene",
      dark: false
    }
  ];

  return (
    <div className="min-h-screen font-inter">
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Header */}
      <section className="bg-[#0a0a0b] pt-48 pb-32 text-white relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center brightness-50 contrast-125 saturate-[0.8]"
          style={{ backgroundImage: 'url(/images/hero-soft-fm.png)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0b] via-[#0a0a0b]/60 to-transparent" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <span className="text-primary text-xs font-black uppercase tracking-[0.4em] mb-8 block">PEOPLE-CENTRIC FM</span>
            <h1 className="text-5xl md:text-7xl font-black mb-10 leading-tight tracking-tight">
              Soft FM Services — <span className="text-primary text-white">Safe, Clean,</span> & Welcoming
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed mb-12 max-w-2xl">
              Elevate your workspace with nationwide commercial cleaning, 
              security, and grounds maintenance managed by one elite partner.
            </p>
            <div className="flex flex-wrap gap-8 text-[10px] font-black uppercase tracking-widest text-gray-500">
               <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-primary" /> 24/7 Response</div>
               <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-primary" /> Nationwide UK</div>
               <div className="flex items-center gap-2"><Briefcase className="w-4 h-4 text-primary" /> SIA Licensed</div>
            </div>
          </div>
        </div>
        {/* Subtle geometric pattern */}
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 pointer-events-none">
           <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
             <path d="M0 0 L100 100 M100 0 L0 100" stroke="white" strokeWidth="0.5" />
           </svg>
        </div>
      </section>

      {/* Split-Screen Service Rows */}
      {softServices.map((service, i) => (
        <section key={i} className={`py-40 ${service.dark ? 'bg-[#161618] text-white' : 'bg-white text-black'}`}>
          <div className="container mx-auto px-6">
            <div className={`flex flex-col ${i % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-20`}>
              <div className="lg:w-1/2">
                <span className="text-primary text-xs font-black uppercase tracking-[0.3em] mb-8 block">{service.tag}</span>
                <h2 className={`text-4xl md:text-5xl font-black mb-10 leading-tight tracking-tight ${service.dark ? 'text-white' : 'text-[#0a0a0b]'}`}>
                  {service.title}
                </h2>
                <p className={`text-xl font-light leading-relaxed mb-12 ${service.dark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {service.desc}
                </p>
                <div className="flex flex-wrap gap-6 mb-12">
                   <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-black uppercase tracking-widest opacity-60">Vetted Staff</span>
                   </div>
                   <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-black uppercase tracking-widest opacity-60">Full Auditing</span>
                   </div>
                </div>
                <Button asChild className="bg-primary hover:bg-primary/90 text-white font-black h-16 px-10 rounded-none uppercase tracking-widest text-xs">
                  <Link href="/contact">Enquire About {service.title}</Link>
                </Button>
              </div>
              <div className="lg:w-1/2 relative aspect-square bg-gray-100 border border-black/5 overflow-hidden group">
                 {/* Visual Representation Placeholder */}
                 <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-primary opacity-10 group-hover:opacity-40 transition-all duration-700 group-hover:scale-125">
                      {service.icon}
                    </div>
                 </div>
                 {/* Dark overlay for text clarity if needed */}
                 <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent" />
                 {/* Interactive corner accent */}
                 <div className="absolute bottom-0 right-0 w-24 h-24 border-r-4 border-b-4 border-primary transition-all duration-500 group-hover:w-full group-hover:h-full group-hover:border-primary/20" />
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Trust Quote Section */}
      <section className="bg-[#0a0a0b] py-32 text-white border-y border-white/5">
         <div className="container mx-auto px-6 text-center max-w-4xl">
            <Star className="w-12 h-12 text-primary mx-auto mb-10 opacity-40" />
            <h3 className="text-3xl md:text-5xl font-light italic mb-12 leading-tight">
              "EntireFM has transformed our site standards. Their soft FM team is 
              professional, proactive, and truly part of our community."
            </h3>
            <div className="flex items-center justify-center gap-6">
               <div className="h-px w-12 bg-primary" />
               <span className="text-primary text-xs font-black uppercase tracking-widest">Head of Facilities, UK Business Park</span>
            </div>
         </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 bg-white text-black">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-black mb-16 tracking-tight text-center uppercase">Soft FM <span className="text-primary">Questions</span></h2>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border-black/5 bg-gray-50 px-8">
              <AccordionTrigger className="text-left font-bold text-lg hover:text-primary hover:no-underline py-6">
                What makes EntireFM's soft services different?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 font-light text-base pb-6 leading-relaxed">
                We focus on self-delivery and rigorous auditing. Unlike providers who use transient agency staff, we focus on building stable, highly-trained teams who understand your specific building culture.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border-black/5 bg-gray-50 px-8">
              <AccordionTrigger className="text-left font-bold text-lg hover:text-primary hover:no-underline py-6">
                How do you ensure cleaning quality?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 font-light text-base pb-6 leading-relaxed">
                Every site is subject to monthly KPI audits performed by our area managers. These reports are instantly available to you via our digital client portal, ensuring total transparency.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border-black/5 bg-gray-50 px-8">
              <AccordionTrigger className="text-left font-bold text-lg hover:text-primary hover:no-underline py-6">
                Are your staff vetted and insured?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 font-light text-base pb-6 leading-relaxed">
                Yes. Every member of the EntireFM team undergoes DBS checking where required, right-to-work verification, and comprehensive training. We carry full public and employers' liability insurance across all sites.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-primary py-32 text-center text-white relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-4xl md:text-6xl font-black mb-12 tracking-tight">
            Ready for an Elite Soft FM Service?
          </h2>
          <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 px-12 h-16 rounded-none border-none uppercase tracking-widest font-black text-sm shadow-xl">
            <Link href="/contact">Get a Soft FM Quote Today</Link>
          </Button>
        </div>
        {/* Subtle dot pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dotPattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dotPattern)" />
          </svg>
        </div>
      </section>
    </div>
  );
}
