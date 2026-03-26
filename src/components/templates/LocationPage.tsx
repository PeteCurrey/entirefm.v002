import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { getLocationBySlug } from "@/lib/locations";
import { notFound } from "next/navigation";
import { 
  Building2, Users, FileCheck, PhoneCall, Hammer, ArrowRight, Zap, Target, ShieldCheck, MapPin
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface LocationPageProps {
  slug: string;
}

export function generateLocationMetadata(slug: string): Metadata {
  const location = getLocationBySlug(slug);
  if (!location) return {};

  return {
    title: `Facilities Management ${location.city} | FM Services ${location.region} | EntireFM`,
    description: `EntireFM delivers bespoke facilities management in ${location.city} — hard FM, PPM, commercial cleaning, and 24/7 reactive support for ${location.city} and ${location.region} clients.`,
    alternates: {
      canonical: `https://www.entirefm.com/${slug}`,
    },
  };
}

export default function LocationPage({ slug }: LocationPageProps) {
  const location = getLocationBySlug(slug);
  
  if (!location) {
    notFound();
  }

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: `Facilities Management ${location.city}` },
  ];

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `EntireFM ${location.city}`,
    "description": `Facilities management services in ${location.city}, ${location.region}.`,
    "url": `https://www.entirefm.com/${slug}`,
    "telephone": "01246 642055",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": location.city,
      "addressRegion": location.region,
      "addressCountry": "UK"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": `Does EntireFM cover ${location.region} and surrounding areas?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Yes, from our regional hubs we provide complete facilities management services not just within ${location.city} city centre, but across the entirety of ${location.region} and beyond.`
        }
      },
      {
        "@type": "Question",
        "name": `What's your emergency response time in ${location.city}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `For Priority 1 (P1) catastrophic emergencies, our locally deployed ${location.city} engineering teams operate on rapid response SLAs, coordinated by our 24/7 national helpdesk to ensure critical business continuity.`
        }
      },
      {
        "@type": "Question",
        "name": `Do you offer PPM contracts for ${location.city} commercial estates?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Absolutely. We design and deliver meticulous, SFG20-aligned Planned Preventative Maintenance (PPM) schedules tailored to the specific asset registers of commercial properties across ${location.city}.`
        }
      },
      {
        "@type": "Question",
        "name": `Can EntireFM manage a multi-site FM contract across ${location.region}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Yes. Multi-site consolidation is our specialty. We provide a single point of accountability, uniform service standards, and centralized compliance reporting for complex portfolios distributed throughout ${location.region}.`
        }
      },
      {
        "@type": "Question",
        "name": `Do you provide commercial cleaning alongside FM in ${location.city}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Yes. Under our Total Facilities Management (TFM) model, we supply elite commercial cleaning and soft FM services seamlessly integrated with our hard FM engineering support across all ${location.city} sites.`
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <Script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero Section */}
      <section className="relative h-[65vh] min-h-[500px] flex items-end overflow-hidden pb-16">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/hero-building-engineering.jpg)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/80 to-charcoal/40" />
        
        <div className="container mx-auto px-6 relative z-10 w-full">
          <Breadcrumb items={breadcrumbItems} />
          <div className="max-w-4xl mt-6">
            <span className="text-primary font-bold tracking-widest uppercase mb-4 block text-sm">
              {location.city} Facilities Management
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-light text-white mb-6 leading-tight tracking-tight">
              Facilities Management in {location.city} — <br/>
              <span className="font-semibold text-primary">Bespoke FM Services Across {location.region}</span>
            </h1>
            <p className="text-xl text-gray-300 font-light leading-relaxed mb-8 max-w-3xl">
              {location.subheading}
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <span className="bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium border border-white/20">24/7 Helpdesk</span>
              <span className="bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium border border-white/20">SFG20 Compliant</span>
              <span className="bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium border border-white/20">Since 2009</span>
              <span className="bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium border border-white/20">Nationwide Coverage</span>
            </div>

            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-10 h-14 uppercase tracking-widest font-bold shadow-xl shadow-primary/20" asChild>
              <Link href="/contact">Get a Quote for {location.city}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Intro Context */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-8 underline-accent inline-block">
            EntireFM in {location.city}
          </h2>
          <div className="prose prose-lg text-muted-foreground font-light leading-relaxed mx-auto">
            <p>{location.intro}</p>
          </div>
        </div>
      </section>

      {/* Services Delivered */}
      <section className="py-24 bg-muted/20 border-y border-border">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light mb-6 underline-accent inline-block">
              FM Services We Deliver in {location.city}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Zap, title: "Hard FM", desc: "Rigorous mechanical and electrical compliance." },
              { icon: Users, title: "Soft FM", desc: "Premium front-of-house and support services." },
              { icon: FileCheck, title: "PPM", desc: "SFG20-aligned proactive maintenance schedules." },
              { icon: Hammer, title: "Industrial Cleaning", desc: "Heavy-duty degreasing and factory sanitation." },
              { icon: ShieldCheck, title: "Security", desc: "SIA-licensed manned guarding and patrols." },
              { icon: Target, title: "Grounds Maintenance", desc: "Year-round external landscaping and gritting." },
              { icon: MapPin, title: "Drone Inspection", desc: "Aerial thermal surveying of massive estates." },
              { icon: PhoneCall, title: "24/7 Helpdesk", desc: "Immediate reactive breakdown response." }
            ].map((srv, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border border-border hover:border-primary/50 transition-colors">
                <srv.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-semibold text-lg mb-2">{srv.title}</h3>
                <p className="text-sm text-muted-foreground font-light">{srv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose EntireFM here */}
      <section className="py-24 bg-charcoal text-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light mb-6">
              Why {location.city} Businesses Choose EntireFM
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="w-12 h-12 rounded-full border border-primary text-primary flex items-center justify-center mb-6 text-xl font-bold">1</div>
              <h3 className="text-xl font-semibold mb-4">Local Presence, National Backing</h3>
              <p className="text-gray-400 font-light leading-relaxed">
                Operating directly in {location.city} means our engineers understand the local topography, but they are supported by the vast purchasing power and cutting-edge CAFM systems of a national operator.
              </p>
            </div>
            <div>
              <div className="w-12 h-12 rounded-full border border-primary text-primary flex items-center justify-center mb-6 text-xl font-bold">2</div>
              <h3 className="text-xl font-semibold mb-4">Faster Response Times</h3>
              <p className="text-gray-400 font-light leading-relaxed">
                When a catastrophic failure occurs, our local rapid-reaction teams bypass the typical multi-region travel delays, ensuring your {location.city} business is back operational in hours, not days.
              </p>
            </div>
            <div>
              <div className="w-12 h-12 rounded-full border border-primary text-primary flex items-center justify-center mb-6 text-xl font-bold">3</div>
              <h3 className="text-xl font-semibold mb-4">Single-Point Accountability</h3>
              <p className="text-gray-400 font-light leading-relaxed">
                We eliminate the contractor blame game. By delivering Total Facilities Management across {location.region}, we take absolute ownership of your entire building's health.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sectors We Serve */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light mb-6 underline-accent inline-block">
              Sectors We Serve in {location.city}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {["Retail", "Commercial Offices", "Residential Blocks", "Industrial & Logistics", "Hotel & Hospitality", "Healthcare"].map((sector, i) => (
              <div key={i} className="bg-muted/30 p-8 rounded-xl border border-border text-center hover:bg-primary/5 transition-colors">
                <Building2 className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-charcoal">{sector}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 bg-primary text-white text-center">
        <div className="container mx-auto px-6 max-w-4xl text-charcoal">
          <blockquote className="text-2xl md:text-3xl font-light italic leading-relaxed mb-6">
            "EntireFM completely transformed our {location.city} property portfolio. Their local engineers are on-site instantly, and for the first time in years, our compliance is utterly flawless."
          </blockquote>
          <div className="font-bold text-lg">— Regional Operations Director, {location.city}</div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-light mb-12 text-center">
            Facilities Management in {location.city} — <br className="hidden md:block"/>
            <span className="font-semibold text-charcoal">Frequently Asked Questions</span>
          </h2>
          
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqSchema.mainEntity.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-muted/20 border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-lg hover:text-primary py-6 underline-offset-4">
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
      <section className="py-24 bg-charcoal text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-6">
            Looking for expert FM support in {location.city}?
          </h2>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white shadow-xl mt-6 uppercase tracking-widest font-bold" asChild>
            <Link href="/contact" className="gap-2">
              Get a Quote for FM Services in {location.city} <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>

    </div>
  );
}
