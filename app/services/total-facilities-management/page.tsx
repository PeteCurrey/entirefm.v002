import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { 
  Building2, Users, FileCheck, PhoneCall, Hammer, ArrowRight,
  Zap, Wrench, Shield, Truck, Droplets, Camera, Trash2, Sprout,
  Wind, Flame
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "Total Facilities Management UK | Integrated TFM | EntireFM",
  description: "EntireFM delivers total facilities management (TFM) across the UK — one contract, one provider, covering all hard and soft FM services for commercial, residential, and industrial clients.",
  alternates: {
    canonical: "https://www.entirefm.com/services/total-facilities-management",
  },
};

export default function TotalFacilitiesManagementPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the difference between TFM and managed FM?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Total Facilities Management (TFM) involves a single provider (like EntireFM) directly managing and delivering the complete suite of both hard and soft FM services under one unified contract. Managed FM typically involves a managing agent who acts as a middleman, subcontracting individual services to disparate providers, which often leads to diluted accountability and higher costs."
        }
      },
      {
        "@type": "Question",
        "name": "Can EntireFM take over an existing multi-supplier FM setup?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. Transitioning clients away from fragmented, multi-supplier models into a streamlined TFM approach is our specialty. We conduct a full discovery audit, map all existing contracts and statutory compliance gaps, and execute a phased mobilization plan to absorb all services without disrupting your ongoing operations."
        }
      },
      {
        "@type": "Question",
        "name": "Is TFM suitable for a single-site business?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. While TFM holds immense value in unifying multi-site national portfolios, complex single-site operations (like large manufacturing plants, corporate HQs, or vast residential estates) benefit heavily from the single point of accountability. TFM reduces internal HR and operational overhead, allowing site managers to focus on their core business rather than orchestrating contractors."
        }
      },
      {
        "@type": "Question",
        "name": "How is pricing structured for a TFM contract?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "TFM contracts are highly bespoke. Pricing is constructed following a comprehensive site audit and asset register compilation. It includes fixed costs for planned preventative maintenance (PPM) and soft services (like cleaning and security schedules), alongside agreed schedule of rates (SoR) for any reactive or project works. This consolidation often yields significant volume-based savings compared to managing separate contracts."
        }
      },
      {
        "@type": "Question",
        "name": "What happens to existing on-site staff when moving to an EntireFM TFM contract?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Where appropriate, existing incumbent staff (such as cleaners, concierges, or dedicated engineers) are transferred to EntireFM under strict TUPE (Transfer of Undertakings (Protection of Employment)) regulations. We have extensive experience managing complex TUPE transitions smoothly, ensuring staff are integrated into the EntireFM culture, undergo any necessary upskilling, and continue working without disruption."
        }
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Total Facilities Management (TFM)",
    "provider": {
      "@type": "Organization",
      "name": "EntireFM"
    },
    "description": "Integrated Total Facilities Management across the UK. Single-supplier FM contract covering both hard and soft services.",
    "areaServed": "UK",
    "serviceType": "Total Facilities Management"
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.entirefm.com" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.entirefm.com/services" },
      { "@type": "ListItem", "position": 3, "name": "Total Facilities Management", "item": "https://www.entirefm.com/services/total-facilities-management" }
    ]
  };

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Total Facilities Management" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero Section */}
      <section className="relative h-[65vh] min-h-[500px] flex items-end overflow-hidden pb-16">
        <div 
          className="absolute inset-0 bg-cover bg-center brightness-90 contrast-110"
          style={{ backgroundImage: 'url(/images/hero-tfm.png)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40" />
        
        <div className="container mx-auto px-6 relative z-10 w-full">
          <Breadcrumb items={breadcrumbItems} />
          <div className="max-w-4xl mt-6">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-light text-white mb-6 leading-tight tracking-tight">
              Total Facilities Management — <br/>
              <span className="font-semibold text-primary">One Partner. Every Service. Complete Accountability.</span>
            </h1>
            <p className="text-xl text-gray-300 font-light leading-relaxed mb-8 max-w-3xl">
              EntireFM's TFM contracts bring all your facilities management needs under a single provider — hard FM, soft FM, compliance, cleaning, security, grounds, and 24/7 reactive support. One invoice. One account manager. Zero gaps.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-10 h-14 uppercase tracking-widest font-bold shadow-xl">
              <Link href="/contact">Get a TFM Proposal</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* What Is TFM */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-8 underline-accent inline-block">
            What Is Total Facilities Management?
          </h2>
          <div className="prose prose-lg text-muted-foreground font-light leading-relaxed mx-auto">
            <p>
              Total Facilities Management (TFM) is a powerful operational model where a single, integrated provider assumes comprehensive responsibility for your entire building's hard and soft service requirements under one consolidated contract.
            </p>
            <p>
              Historically, estates relied on a multi-supplier approach: juggling separate contractors for fire alarms, HVAC maintenance, daily commercial cleaning, manned guarding, and grounds keeping. This fragmented model inherently generates severe inefficiencies—inflating procurement costs, causing immense communication overhead for internal teams, producing disjointed compliance records, and sparking "blame games" when systems intersect and fail.
            </p>
            <p>
              TFM eliminates this friction. By outsourcing to EntireFM, you consolidate vendor management into a single partnership. We deliver unified standards, immediate cross-discipline communication, an airtight compliance portal, and volume-based cost reductions. For mid-market organizations and rapidly scaling portfolios, TFM is undeniably the smartest strategic alignment.
            </p>
          </div>
        </div>
      </section>

      {/* The Single Supplier Advantage */}
      <section className="py-24 bg-muted/20 border-y border-border">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light mb-6 underline-accent inline-block">
              Why Single-Supplier TFM Outperforms Multi-Contractor Models
            </h2>
          </div>

          <div className="space-y-12 max-w-4xl mx-auto">
            <div className="flex gap-6">
              <div className="shrink-0 mt-1">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary border border-primary/20 shadow-sm">
                  1
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-charcoal mb-2">One Point of Accountability</h3>
                <p className="text-lg text-muted-foreground font-light leading-relaxed">
                  When a leak triggers a fire alarm default and damages flooring, a multi-supplier model devolves into contractors blaming each other. Under EntireFM's TFM wrap, the entire rectification—from plumbing repair to alarm reset to floor drying—is entirely our responsibility to rapidly resolve.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="shrink-0 mt-1">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary border border-primary/20 shadow-sm">
                  2
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-charcoal mb-2">Consolidated Costs</h3>
                <p className="text-lg text-muted-foreground font-light leading-relaxed">
                  Managing a dozen separate contracts inflates your procurement overhead significantly. A single TFM contract consolidates margin, eradicates redundant account management fees, and generates powerful volume-metric savings passed directly back to your budget.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="shrink-0 mt-1">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary border border-primary/20 shadow-sm">
                  3
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-charcoal mb-2">Consistent Standards</h3>
                <p className="text-lg text-muted-foreground font-light leading-relaxed">
                  One strategic provider embeds one distinct corporate culture and one unyielding quality bar across your entire estate. The standard of excellence applied to your high-voltage maintenance is identical to the meticulous care applied to your daily workplace cleaning.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="shrink-0 mt-1">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary border border-primary/20 shadow-sm">
                  4
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-charcoal mb-2">Faster Response</h3>
                <p className="text-lg text-muted-foreground font-light leading-relaxed">
                  Integrated service teams communicate fluidly. If a soft-services cleaner uncovers a developing structural hazard, they instantly log it internally to our 24/7 helpdesk, immediately dispatching a hard services engineer without requiring any intervention from your internal team.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="shrink-0 mt-1">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary border border-primary/20 shadow-sm">
                  5
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-charcoal mb-2">Simpler Compliance</h3>
                <p className="text-lg text-muted-foreground font-light leading-relaxed">
                  Stop hunting across five different portals for your electrical certs, risk assessments, and water hygiene records. TFM secures your data under an unbroken, unified audit trail. One portal. One master compliance document. Complete legal defensibility.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-24 bg-charcoal text-white relative">
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light mb-6">
              What's Included in an EntireFM TFM Contract
            </h2>
            <p className="text-lg text-gray-400 font-light max-w-2xl mx-auto">
              A comprehensive amalgamation of our finest hard and soft service specialties.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            
            {/* Hard FM Column */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-primary/50 transition-colors">
              <div className="flex items-center gap-4 mb-8 pb-6 border-b border-white/10">
                <Wrench className="w-10 h-10 text-primary" />
                <h3 className="text-2xl font-semibold">Hard FM Services</h3>
              </div>
              <ul className="space-y-6">
                <li className="flex items-center gap-4 text-gray-300"><Zap className="w-5 h-5 text-primary shrink-0" /> M&E Planned Maintenance</li>
                <li className="flex items-center gap-4 text-gray-300"><Wind className="w-5 h-5 text-primary shrink-0" /> HVAC Servicing & Compliance</li>
                <li className="flex items-center gap-4 text-gray-300"><FileCheck className="w-5 h-5 text-primary shrink-0" /> SFG20-Aligned PPM</li>
                <li className="flex items-center gap-4 text-gray-300"><Flame className="w-5 h-5 text-primary shrink-0" /> Fire Safety Systems</li>
                <li className="flex items-center gap-4 text-gray-300"><Zap className="w-5 h-5 text-primary shrink-0" /> Electrical Compliance (EICR)</li>
                <li className="flex items-center gap-4 text-gray-300"><Hammer className="w-5 h-5 text-primary shrink-0" /> Building Fabric Works</li>
                <li className="flex items-center gap-4 text-gray-300"><Camera className="w-5 h-5 text-primary shrink-0" /> Drone Asset Inspection</li>
                <li className="flex items-center gap-4 text-gray-300"><PhoneCall className="w-5 h-5 text-primary shrink-0" /> 24/7 Reactive Helpdesk</li>
              </ul>
            </div>

            {/* Soft FM Column */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-primary/50 transition-colors">
              <div className="flex items-center gap-4 mb-8 pb-6 border-b border-white/10">
                <Users className="w-10 h-10 text-primary" />
                <h3 className="text-2xl font-semibold">Soft FM Services</h3>
              </div>
              <ul className="space-y-6">
                <li className="flex items-center gap-4 text-gray-300"><Droplets className="w-5 h-5 text-primary shrink-0" /> Commercial Daily Cleaning</li>
                <li className="flex items-center gap-4 text-gray-300"><Shield className="w-5 h-5 text-primary shrink-0" /> Manned Security & Patrols</li>
                <li className="flex items-center gap-4 text-gray-300"><Users className="w-5 h-5 text-primary shrink-0" /> Front-of-House Concierge</li>
                <li className="flex items-center gap-4 text-gray-300"><Sprout className="w-5 h-5 text-primary shrink-0" /> Grounds Maintenance</li>
                <li className="flex items-center gap-4 text-gray-300"><Building2 className="w-5 h-5 text-primary shrink-0" /> Caretaking & Porterage</li>
                <li className="flex items-center gap-4 text-gray-300"><Droplets className="w-5 h-5 text-primary shrink-0" /> Deep & Industrial Cleaning</li>
                <li className="flex items-center gap-4 text-gray-300"><Trash2 className="w-5 h-5 text-primary shrink-0" /> Waste Management</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Case Study Callout */}
      <section className="py-16 bg-primary text-white text-center">
        <div className="container mx-auto px-6 max-w-4xl">
          <blockquote className="text-2xl md:text-3xl font-light italic leading-relaxed mb-6">
            "EntireFM consolidated our FM across 40 sites in 8 weeks. Reactive spend dropped 34%. We haven't had a compliance failure since."
          </blockquote>
          <div className="font-semibold text-lg mb-8">— Head of Estates, National Retail Group</div>
          <Button variant="secondary" className="bg-white text-primary hover:bg-gray-100 rounded-full font-bold uppercase tracking-wide" asChild>
            <Link href="/case-studies">Read the full case study <ArrowRight className="w-4 h-4 ml-2" /></Link>
          </Button>
        </div>
      </section>

      {/* TFM Onboarding Process */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light mb-6 underline-accent inline-block">
              How We Mobilise Your TFM Contract
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-[2.5rem] left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20 z-0"></div>
            
            {[
              { num: "Step 1", title: "Discovery", desc: "Site survey, stakeholder meetings, current contract review, gap analysis." },
              { num: "Step 2", title: "Programme Design", desc: "PPM schedule, service specification, SLA agreement, team allocation." },
              { num: "Step 3", title: "Mobilisation", desc: "Engineer deployment, TUPE (if applicable), systems setup, client portal access." },
              { num: "Step 4", title: "Delivery & Review", desc: "Live operations, monthly reporting, quarterly performance reviews, continuous improvement plan." }
            ].map((step, i) => (
              <div key={i} className="relative z-10 flex flex-col pt-4 bg-white px-2">
                <span className="text-primary text-sm font-bold tracking-widest uppercase mb-4">{step.num}</span>
                <div className="w-4 h-4 rounded-full bg-primary mb-6 shadow-lg shadow-primary/50 mx-0"></div>
                <h3 className="text-xl font-semibold mb-3 text-charcoal">{step.title}</h3>
                <p className="text-muted-foreground font-light text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Benefits from TFM */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light mb-6 underline-accent inline-block">
              Who Is TFM Right For?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Retail Estates", desc: "Consolidated high-footfall cleaning, HVAC, and compliance across national locations." },
              { title: "Residential Property Management", desc: "Block management integrating cleaners, concierges, and critical fire safety under one umbrella." },
              { title: "Commercial Offices", desc: "Corporate workspaces needing identical, premium Front-of-House and M&E support standards." },
              { title: "Industrial & Logistics", desc: "Robust hard FM preventing downtime, coupled with heavy-duty industrial cleaning." },
              { title: "Hotel & Hospitality", desc: "Discreet overnight PPM servicing combined with 5-star public realm caretaking." },
              { title: "Motorway Services", desc: "Immediate 24/7 reactive response handling huge operational volumes effortlessly." },
            ].map((card, i) => (
              <div key={i} className="bg-white p-8 rounded-xl border border-border shadow-sm hover:border-primary/50 hover:shadow-lg transition-all">
                <h3 className="text-xl font-semibold mb-3 text-charcoal">{card.title}</h3>
                <p className="text-muted-foreground font-light">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-light mb-12 text-center">
            Total Facilities Management — <br className="hidden md:block"/>
            <span className="font-semibold text-charcoal">Frequently Asked Questions</span>
          </h2>
          
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqSchema.mainEntity.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-muted/20 border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-lg hover:text-primary py-6">
                  {faq.name}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-light text-base pb-6 leading-relaxed">
                  {faq.acceptedAnswer.text}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-24 bg-gradient-to-br from-charcoal to-[#1a1c23] text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-6">
            Ready to Consolidate Your FM Under One Roof?
          </h2>
          <p className="text-xl text-gray-300 font-light max-w-2xl mx-auto mb-10">
            Talk to EntireFM about a total FM proposal tailored to your estate.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white shadow-xl hover:-translate-y-1 transition-transform" asChild>
              <Link href="/contact" className="gap-2">
                Get a TFM Proposal <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
