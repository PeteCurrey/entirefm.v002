import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { 
  Wrench, Wind, Flame, Zap, Hammer, Camera, 
  ArrowRight, ShieldCheck, Clock, UserCheck, FileCheck
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "Hard FM Services UK | M&E, HVAC & Building Compliance | EntireFM",
  description: "EntireFM delivers expert hard facilities management services across the UK — mechanical and electrical maintenance, HVAC, fire safety, electrical compliance, and building fabric. SFG20-aligned with 24/7 helpdesk support.",
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
        "name": "What does hard FM include?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Hard FM revolves around the physical, structural, and critical systems of a building. It includes mechanical and electrical (M&E) systems, HVAC, fire safety systems, plumbing, electrical compliance testing (like EICR and PAT testing), and general building fabric maintenance. Essentially, if it involves the physical infrastructure of the building, it falls under hard FM."
        }
      },
      {
        "@type": "Question",
        "name": "What is the difference between hard FM and soft FM?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Hard FM deals with the physical infrastructure and statutory compliance of a building (e.g., HVAC, electrical, fire safety, plumbing). It requires certified engineers. Soft FM deals with the environment and services that make the building pleasant for its occupants, such as commercial cleaning, security, grounds maintenance, and front-of-house services."
        }
      },
      {
        "@type": "Question",
        "name": "How does EntireFM ensure compliance on hard FM contracts?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "EntireFM uses SFG20, the industry standard for building maintenance, as the foundation for all hard FM programmes. We track all statutory deadlines via our digital compliance calendar. Following every engineer visit, a comprehensive digital compliance report is generated, ensuring an unbroken audit trail for your entire estate."
        }
      },
      {
        "@type": "Question",
        "name": "Do you service multi-site hard FM estates?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. EntireFM operates a national network of accredited engineers. We excel at consolidating multi-site portfolios under a single Total Facilities Management (TFM) or Hard FM contract, providing centralized reporting, a single helpdesk escalation point, and standardized SLA compliance across the UK."
        }
      },
      {
        "@type": "Question",
        "name": "What qualifications do EntireFM's engineers hold?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our hard FM teams are highly accredited. Electrical engineers hold valid NICEIC/City & Guilds 2391 qualifications, gas engineers are Gas Safe Registered, fire safety technicians are BAFE certified, and HVAC specialists hold F-Gas certifications. We maintain a stringent vendor and employee vetting process to guarantee competence."
        }
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Hard FM Services",
    "provider": {
      "@type": "Organization",
      "name": "EntireFM"
    },
    "description": "Mechanical and electrical maintenance, HVAC, fire safety, electrical compliance, and building fabric services across the UK.",
    "areaServed": "UK",
    "serviceType": "Hard Facilities Management"
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.entirefm.com" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.entirefm.com/services" },
      { "@type": "ListItem", "position": 3, "name": "Hard FM", "item": "https://www.entirefm.com/services/hard-fm" }
    ]
  };

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Hard FM" },
  ];

  const sectors = [
    "Retail", "Residential", "Commercial", "Industrial", "Hotel & Hospitality", 
    "Healthcare", "Education", "Motorway Services", "Aviation", "Arenas"
  ];

  const servicesList = [
    {
      title: "Mechanical & Electrical (M&E) Services",
      icon: <Wrench className="w-16 h-16 text-primary" />,
      desc: "Comprehensive proactive maintenance for all critical M&E infrastructure. Mechanical systems dictate a building's operability. A failure in water pumps, heating plants, or primary distribution boards doesn't just disrupt work—it halts it entirely. We design SFG20-aligned maintenance schedules to ensure your essential mechanical and electrical infrastructure delivers maximum uptime, extending asset life and minimizing catastrophic failures."
    },
    {
      title: "HVAC Maintenance & Servicing",
      icon: <Wind className="w-16 h-16 text-primary" />,
      desc: "Maintain precise air quality and temperature control while ensuring F-Gas compliance. HVAC systems account for the largest proportion of an estate's energy consumption. Our certified engineers deliver comprehensive servicing for chillers, AHUs, VRF/VRV systems, and ductwork, drastically improving energy efficiency while ensuring occupants enjoy a comfortable, perfectly regulated environment."
    },
    {
      title: "Fire Safety Systems",
      icon: <Flame className="w-16 h-16 text-primary" />,
      desc: "Alarms, detection, emergency lighting, and dry risers. Life safety is non-negotiable. Our BAFE-accredited teams handle weekly tests, quarterly inspections, and complex rectifications for comprehensive fire suppression and detection networks. We ensure you're fully covered under the Regulatory Reform (Fire Safety) Order, preventing enforcement action and protecting lives."
    },
    {
      title: "Electrical Compliance",
      icon: <Zap className="w-16 h-16 text-primary" />,
      desc: "Fixed wire testing (EICR), portable appliance testing (PAT), and load bank testing. Electrical failures form the primary risk for commercial fires. Our NICEIC-registered engineers deliver meticulous electrical safety inspections. From entire 5-year fixed wire condition reports to routine thermal imaging of distribution panels, we guarantee your electrical network is legally defensible and fully safe."
    },
    {
      title: "Building Fabric Maintenance",
      icon: <Hammer className="w-16 h-16 text-primary" />,
      desc: "Structural integrity and weatherproofing. From roof void inspections and gutter clearances to door mechanisms, roller shutters, and aesthetic internal repairs. Building fabric is the first line of defense against the elements. Our preventative approach halts minor ingress issues from evolving into massive, disruptive capital repair projects."
    },
    {
      title: "Drone-Assisted Building Inspection",
      icon: <Camera className="w-16 h-16 text-primary" />,
      desc: "Safe, rapid, and high-definition aerial surveys of inaccessible assets. Avoid the severe costs and risks of scaffolding just for an inspection. We deploy licensed drone operators to survey expansive roofs, complex facades, and industrial stacks. The resulting 4K imagery perfectly catalogues structural defects, empowering data-driven fabric repair decisions."
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero Section */}
      <section className="relative h-[65vh] min-h-[500px] flex items-end overflow-hidden pb-16">
        <div 
          className="absolute inset-0 bg-cover bg-center brightness-75 contrast-110"
          style={{ backgroundImage: 'url(/images/hero-hvac.png)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40" />
        
        <div className="container mx-auto px-6 relative z-10 w-full">
          <Breadcrumb items={breadcrumbItems} />
          <div className="max-w-4xl mt-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 leading-tight tracking-tight">
              Hard FM Services — <br/>
              Expert Mechanical, Electrical and Compliance Services Across the UK
            </h1>
            <p className="text-xl text-gray-300 font-light leading-relaxed mb-8 max-w-3xl">
              From HVAC servicing and fire safety systems to electrical compliance and building fabric maintenance — EntireFM delivers complete hard FM services to keep your building safe, operational, and fully compliant.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-10 h-14 uppercase tracking-widest font-bold shadow-xl">
              <Link href="/contact">Get a Hard FM Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* What Is Hard FM */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-8 underline-accent inline-block">
            What Is Hard FM?
          </h2>
          <div className="prose prose-lg text-muted-foreground font-light leading-relaxed mx-auto">
            <p>
              Hard Facilities Management (Hard FM) relates directly to the physical structure and the critical mechanical and electrical (M&E) systems that keep a building alive. In contrast to soft FM (which focuses on improving the working environment through services like cleaning and security), hard FM is anchored in statutory compliance, safety, and operational continuity.
            </p>
            <p>
              It encompasses critical disciplines: fire safety suppression, HVAC temperature control, water hygiene, and extensive electrical compliance. Because of the direct life-safety risks and legal obligations involved, hard FM requires highly technical, certified specialist engineers. Outsourcing your hard FM to a qualified, experienced provider like EntireFM transfers this immense compliance risk, ensuring your assets are maintained to exacting legal directives without overwhelming your internal resources.
            </p>
          </div>
        </div>
      </section>

      {/* Services (Alternating) */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light mb-6 underline-accent inline-block">
              Our Hard FM Services
            </h2>
            <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto mb-16">
              A comprehensive suite of technical engineering services designed specifically to safeguard your estate.
            </p>
          </div>

          <div className="space-y-16">
            {servicesList.map((service, i) => (
              <div key={i} className={`flex flex-col md:flex-row items-center gap-12 lg:gap-24 ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="w-full md:w-1/2 flex justify-center">
                  <div className="bg-white w-64 h-64 rounded-[2rem] shadow-xl flex items-center justify-center border border-border rotate-3 hover:rotate-0 transition-all duration-500">
                    <div className="p-8 bg-primary/5 rounded-full">
                      {service.icon}
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <h3 className="text-2xl font-medium text-charcoal mb-4">{service.title}</h3>
                  <div className="h-1 w-12 bg-primary rounded-full mb-6"></div>
                  <p className="text-lg text-muted-foreground font-light leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why EntireFM Section */}
      <section className="py-24 bg-charcoal text-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light mb-6 text-white">
              Why Choose EntireFM for Hard FM?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="relative bg-white/5 border border-white/10 p-8 hover:border-primary/50 transition-all duration-500 group overflow-hidden cursor-pointer h-full flex flex-col">
              {/* Image Reveal */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-all duration-700 opacity-0 group-hover:opacity-100 group-hover:scale-110"
                style={{ backgroundImage: 'url(/images/fm-insights-hero.jpg)' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/90 to-charcoal/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              {/* Hover beam */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              {/* Content */}
              <div className="relative z-10">
                <ShieldCheck className="w-12 h-12 text-primary mb-6" />
                <h3 className="text-xl font-semibold mb-3">SFG20-Compliant</h3>
                <p className="text-gray-400 font-light text-sm leading-relaxed group-hover:text-gray-200 transition-colors">
                  All programmes are built to SFG20 specifications, ensuring completely defensible compliance and preventing over-maintenance.
                </p>
              </div>
            </div>
            
            <div className="relative bg-white/5 border border-white/10 p-8 hover:border-primary/50 transition-all duration-500 group overflow-hidden cursor-pointer h-full flex flex-col">
              {/* Image Reveal */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-all duration-700 opacity-0 group-hover:opacity-100 group-hover:scale-110"
                style={{ backgroundImage: 'url(/images/fm-insights-hero.jpg)' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/90 to-charcoal/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              {/* Hover beam */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              {/* Content */}
              <div className="relative z-10">
                <Clock className="w-12 h-12 text-primary mb-6" />
                <h3 className="text-xl font-semibold mb-3">24/7 Reactive Helpdesk</h3>
                <p className="text-gray-400 font-light text-sm leading-relaxed group-hover:text-gray-200 transition-colors">
                  Round-the-clock emergency support. When critical hard FM systems fail at 3 AM, our national engineers are immediately dispatched.
                </p>
              </div>
            </div>

            <div className="relative bg-white/5 border border-white/10 p-8 hover:border-primary/50 transition-all duration-500 group overflow-hidden cursor-pointer h-full flex flex-col">
              {/* Image Reveal */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-all duration-700 opacity-0 group-hover:opacity-100 group-hover:scale-110"
                style={{ backgroundImage: 'url(/images/fm-insights-hero.jpg)' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/90 to-charcoal/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              {/* Hover beam */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              {/* Content */}
              <div className="relative z-10">
                <UserCheck className="w-12 h-12 text-primary mb-6" />
                <h3 className="text-xl font-semibold mb-3">Dedicated Account Management</h3>
                <p className="text-gray-400 font-light text-sm leading-relaxed group-hover:text-gray-200 transition-colors">
                  A single, expert point of contact who intrinsically knows the nuances, layout, and operational quirks of your properties.
                </p>
              </div>
            </div>

            <div className="relative bg-white/5 border border-white/10 p-8 hover:border-primary/50 transition-all duration-500 group overflow-hidden cursor-pointer h-full flex flex-col">
              {/* Image Reveal */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-all duration-700 opacity-0 group-hover:opacity-100 group-hover:scale-110"
                style={{ backgroundImage: 'url(/images/fm-insights-hero.jpg)' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/90 to-charcoal/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              {/* Hover beam */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              {/* Content */}
              <div className="relative z-10">
                <FileCheck className="w-12 h-12 text-primary mb-6" />
                <h3 className="text-xl font-semibold mb-3">Full Audit Trail</h3>
                <p className="text-gray-400 font-light text-sm leading-relaxed group-hover:text-gray-200 transition-colors">
                  Complete compliance documentation uploaded instantly after every engineer visit, keeping your estate fully audit-ready.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sectors Pills */}
      <section className="py-16 bg-white border-b border-border">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-light mb-8 text-charcoal">
            Hard FM Services Across Every Sector
          </h2>
          <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
            {sectors.map((sector, i) => (
              <div key={i} className="px-5 py-2.5 rounded-full bg-muted/30 border border-border text-sm font-medium text-charcoal shadow-sm hover:border-primary hover:text-primary transition-colors cursor-default">
                {sector}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-light mb-12 text-center">
            Hard FM Services — <br className="hidden md:block"/>
            <span className="font-semibold text-charcoal">Frequently Asked Questions</span>
          </h2>
          
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqSchema.mainEntity.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white border border-border rounded-lg px-6 shadow-sm">
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
      <section className="py-24 bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern-bg.png')] opacity-10 mix-blend-overlay"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-light mb-6">
            Secure Your Property with Expert Hard FM
          </h2>
          <p className="text-xl text-white/90 font-light max-w-2xl mx-auto mb-10">
            Ensure total statutory compliance, eliminate reactive costs, and extend the lifespan of your critical building systems today.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100 shadow-2xl hover:-translate-y-1 transition-transform h-14 px-8 text-lg font-bold uppercase tracking-wider" asChild>
              <Link href="/contact" className="gap-2">
                Get a Hard FM Quote <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
