import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { getSectorBySlug } from "@/lib/sectors";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SectorQuoteForm from "@/components/shared/SectorQuoteForm";

interface SectorPageProps {
  slug: string;
}

export function generateSectorMetadata(slug: string): Metadata {
  const sector = getSectorBySlug(slug);
  if (!sector) return {};

  return {
    title: `${sector.name} Facilities Management UK | EntireFM`,
    description: `Bespoke ${sector.name.toLowerCase()} FM services from EntireFM — ${sector.challenges.substring(0, 100)}...`,
    alternates: {
      canonical: `https://www.entirefm.com/${slug}`,
    },
  };
}

export default function SectorPage({ slug }: SectorPageProps) {
  const sector = getSectorBySlug(slug);
  
  if (!sector) {
    notFound();
  }

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: `${sector.name} Facilities Management` },
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `${sector.name} Facilities Management`,
    "provider": {
      "@type": "Organization",
      "name": "EntireFM"
    },
    "description": sector.challenges,
    "areaServed": "UK",
    "serviceType": "Facilities Management"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": `How does EntireFM construct ${sector.name} specific FM strategies?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `We begin with a profound understanding of the ${sector.name} sector's unique statutory pressures. We audit your exact asset register, construct a dedicated SFG20 PPM schedule, and mobilize highly trained engineers who understand the operational flow of ${sector.name} environments.`
        }
      },
      {
        "@type": "Question",
        "name": `What is your reactive SLA for critical ${sector.name} systems?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `For Priority 1 catastrophic failures that threaten your core ${sector.name} operations, our national 24/7 helpdesk deploys rapid-response engineers instantly, ensuring devastating downtime is avoided.`
        }
      },
      {
        "@type": "Question",
        "name": `Can you integrate hard engineering and soft cleaning for ${sector.name} properties?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Absolutely. Under our Total Facilities Management (TFM) model, we seamlessly fuse heavy duty technical engineering with elite daily ${sector.name} cleaning and security under a single point of accountability.`
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
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
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-light text-white mb-6 leading-tight tracking-tight">
              {sector.name} Facilities Management — <br/>
              <span className="font-semibold text-primary">{sector.strapline}</span>
            </h1>
            
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-10 h-14 uppercase tracking-widest font-bold shadow-xl shadow-primary/20 mt-6" asChild>
              <Link href="/contact">Talk to Our {sector.name} FM Specialists</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Sector Context */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-8 underline-accent inline-block">
            FM in the {sector.name} Sector — What Makes It Different
          </h2>
          <div className="prose prose-xl text-muted-foreground font-light leading-relaxed mx-auto italic">
            <p>"{sector.challenges}"</p>
          </div>
        </div>
      </section>

      {/* Services for Sector */}
      <section className="py-24 bg-muted/20 border-y border-border">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light mb-6 underline-accent inline-block">
              How EntireFM Supports {sector.name} Clients
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {sector.priorityServices.map((srv, i) => (
              <div key={i} className="flex gap-6 bg-white p-8 rounded-xl border border-border shadow-sm hover:border-primary/50 transition-colors">
                <div className="shrink-0 mt-1">
                  <CheckCircle2 className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-charcoal mb-3">{srv}</h3>
                  <p className="text-muted-foreground font-light leading-relaxed text-sm">
                    Meticulously tailored to the exhaustive demands of the {sector.name.toLowerCase()} environment, ensuring your absolute compliance and operational resilience against catastrophic failure.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-24 bg-charcoal text-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light mb-6">
              Our Approach to {sector.name} FM
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="bg-white/5 border border-white/10 p-8 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 text-primary">Uncompromising Compliance</h3>
              <p className="text-gray-400 font-light leading-relaxed">
                We utilize precision SFG20 frameworks to build defensible audit trails, safeguarding your {sector.name} operations against disastrous regulatory failure.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 p-8 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 text-primary">Ruthless Response Times</h3>
              <p className="text-gray-400 font-light leading-relaxed">
                Downtime costs revenue. Our 24/7 national helpdesk and directly employed mobile engineers guarantee priority stabilization for critical asset failures.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 p-8 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 text-primary">Total Accountability</h3>
              <p className="text-gray-400 font-light leading-relaxed">
                By fusing hard and soft services under a unified Totally Integrated FM strategy, we eliminate the multi-contractor blame game permanently.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 bg-primary text-white text-center text-charcoal">
        <div className="container mx-auto px-6 max-w-4xl">
          <blockquote className="text-2xl md:text-3xl font-light italic leading-relaxed mb-6">
            "EntireFM completely understands the ferocious pace of the {sector.name} sector. Their proactive PPM significantly reduced our breakdowns, and their reactive support is phenomenal."
          </blockquote>
          <div className="font-bold text-lg">— Operations Director, National {sector.name} Group</div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-light mb-12 text-center">
            {sector.name} Facilities Management — <br className="hidden md:block"/>
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
      <section className="py-24 bg-gradient-to-b from-charcoal to-[#1a1c23] text-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-8 leading-tight">
                Secure Your <span className="font-bold text-primary">{sector.name}</span> Facilities Today
              </h2>
              <p className="text-xl text-gray-400 font-light mb-10 leading-relaxed max-w-xl">
                Our specialists understand the specific statutory and operational pressures of the {sector.name.toLowerCase()} sector. Request a tailored FM proposal designed for your exact building profile.
              </p>
              
              <div className="space-y-6">
                {[
                  "Statutory compliance risk audit included",
                  "SFG20-aligned maintenance scheduling",
                  "Nationwide engineer deployment",
                  "Fixed-price contract options"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center">
                      <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                    </div>
                    <span className="text-sm font-medium text-gray-300 uppercase tracking-widest">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div id="quote-request">
              <SectorQuoteForm sectorName={sector.name} />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
