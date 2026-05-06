import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { getServiceBySlug } from "@/lib/services";
import { notFound } from "next/navigation";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface ServicePageProps {
  slug: string;
}

export function generateServiceMetadata(slug: string): Metadata {
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return {
    title: `${service.name} | Professional FM Services UK | EntireFM`,
    description: service.description,
    alternates: {
      canonical: `https://www.entirefm.com/${slug}`,
    },
  };
}

export default function ServicePage({ slug }: ServicePageProps) {
  const service = getServiceBySlug(slug);
  
  if (!service) {
    notFound();
  }

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: service.name },
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.name,
    "provider": {
      "@type": "Organization",
      "name": "EntireFM"
    },
    "description": service.description,
    "areaServed": "UK",
    "serviceType": "Facilities Management"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": service.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
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
              {service.name} — <br/>
              <span className="font-semibold text-primary">{service.strapline}</span>
            </h1>
            
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-10 h-14 uppercase tracking-widest font-bold shadow-xl shadow-primary/20 mt-6" asChild>
              <Link href="/contact">Enquire About {service.name}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Service Intro */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="prose prose-xl text-muted-foreground font-light leading-relaxed text-center">
            <p>{service.description}</p>
          </div>
        </div>
      </section>

      {/* Features & Deliverables */}
      <section className="py-24 bg-muted/20 border-y border-border">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light mb-6 underline-accent inline-block">
              Practical FM Delivery for {service.name}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {service.features.map((feature, i) => (
              <div key={i} className="flex gap-6 bg-white p-8 rounded-xl border border-border shadow-sm hover:border-primary/50 transition-colors">
                <div className="shrink-0 mt-1">
                  <CheckCircle2 className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-charcoal mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-charcoal text-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light mb-6">
              Why Partner with EntireFM for {service.name}?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.benefits.map((benefit, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-xl text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-6">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <p className="text-sm font-medium text-gray-300 leading-relaxed uppercase tracking-wider">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-light mb-12 text-center">
            {service.name} — <br className="hidden md:block"/>
            <span className="font-semibold text-charcoal">Frequently Asked Questions</span>
          </h2>
          
          <Accordion type="single" collapsible className="w-full space-y-4">
            {service.faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-muted/20 border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-lg hover:text-primary py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-light text-base pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-primary text-white text-center text-charcoal">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-4xl font-light mb-8">
            Expert {service.name} Support Starts Here.
          </h2>
          <Button size="lg" className="bg-charcoal text-white hover:bg-charcoal/90 shadow-xl px-12 h-14 uppercase tracking-widest font-bold" asChild>
            <Link href="/contact" className="gap-2">
              Request a Proposal <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>

    </div>
  );
}
