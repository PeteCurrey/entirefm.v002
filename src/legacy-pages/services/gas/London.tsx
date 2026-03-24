"use client";

;
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { Download, ArrowRight } from "lucide-react";
import { FAQSection } from "@/components/shared/FAQSection";
import { SidebarCTA } from "@/components/shared/SidebarCTA";
import { SchemaMarkup } from "@/components/shared/SchemaMarkup";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { useConversionTracking } from "@/hooks/useConversionTracking";
import ServiceHeroSection from "@/components/shared/ServiceHeroSection";

const GasSafetyLondon = () => {
  const { trackDownload, trackProposalRequest } = useConversionTracking();

  const faqs = [
    {
      question: "What certificates are legally required for commercial gas?",
      answer: "Commercial gas installations require CP1 (general gas installation) or CP15 (commercial boiler) certificates. Catering equipment requires CP42 certification. All work must be completed by Gas Safe registered engineers with valid commercial qualifications.",
    },
    {
      question: "Do kitchens need CP42 certification?",
      answer: "Yes. All commercial catering equipment using gas - including restaurants, hotels, dark kitchens, and staff canteens - must have valid CP42 certificates. This ensures combustion safety, ventilation adequacy, and CO risk elimination.",
    },
    {
      question: "Can servicing be done overnight?",
      answer: "Yes. We schedule gas safety inspections, boiler servicing, and compliance testing outside operational hours to avoid disruption. Our engineers are available 24/7 for emergency work and planned maintenance windows.",
    },
  ];

  const LocalBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Entire FM - Gas Safety & Boiler Compliance London",
    "description": "Gas Safe inspections, CP42 catering certification and commercial boiler compliance for London estates.",
    "areaServed": "London",
    "serviceType": "Gas Safety Compliance",
    "email": "london@entirefm.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "London",
      "addressCountry": "GB"
    }
  };

  const heroStats = [
    { value: "CP42", label: "Catering Certified" },
    { value: "24/7", label: "Emergency Response" },
    { value: "92", label: "Boiler Efficiency", suffix: "%+" },
    { value: "500", label: "Sites Managed", suffix: "+" }
  ];

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Gas Safety", href: "/services/gas-safety" },
    { label: "London" }
  ];

  return (
    <>
      

      <SchemaMarkup schema={LocalBusinessSchema} />
      <BreadcrumbSchema items={breadcrumbItems} />

      <ServiceHeroSection
        breadcrumbItems={breadcrumbItems}
        title="Commercial Gas Safety & Boiler Compliance – London"
        description="Gas Safe inspections, catering CP42 certification and full legal compliance for high-occupancy estates across London."
        stats={heroStats}
        primaryCTA={{
          label: "Request Gas Safety Audit",
          href: "/contact",
          icon: ArrowRight
        }}
        secondaryCTA={{
          label: "Download Checklist",
          href: "#",
          icon: Download
        }}
        backgroundImage="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2070"
      />

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-16">
            <section>
              <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                Gas Hazards in London: Zero Room for Error
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground font-light leading-relaxed mb-4">
                  London buildings carry high public exposure, older pipework, and complex shared plantrooms. Gas safety failings trigger:
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="text-muted-foreground font-light flex items-start">
                    <span className="text-primary mr-3 font-bold">×</span>
                    CO poisoning incidents
                  </li>
                  <li className="text-muted-foreground font-light flex items-start">
                    <span className="text-primary mr-3 font-bold">×</span>
                    HSE prosecution under Gas Safety (Installation & Use) Regulations 1998
                  </li>
                  <li className="text-muted-foreground font-light flex items-start">
                    <span className="text-primary mr-3 font-bold">×</span>
                    Insurance invalidation
                  </li>
                  <li className="text-muted-foreground font-light flex items-start">
                    <span className="text-primary mr-3 font-bold">×</span>
                    Building closure + media fallout
                  </li>
                </ul>
                <p className="text-foreground font-medium">
                  We keep people safe — and reputations protected.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                Gas Safe Certified Services
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <h3 className="text-xl font-light mb-4">Commercial Certification</h3>
                  <ul className="space-y-2">
                    <li className="text-sm text-muted-foreground font-light flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      CP1 / CP15 Commercial Gas Certificates
                    </li>
                    <li className="text-sm text-muted-foreground font-light flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      CP42 Gas Catering Safety
                    </li>
                    <li className="text-sm text-muted-foreground font-light flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      Boiler servicing + combustion analysis
                    </li>
                  </ul>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-light mb-4">Safety Systems</h3>
                  <ul className="space-y-2">
                    <li className="text-sm text-muted-foreground font-light flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      PRV testing & pressure system safety
                    </li>
                    <li className="text-sm text-muted-foreground font-light flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      Flue integrity & ventilation compliance
                    </li>
                    <li className="text-sm text-muted-foreground font-light flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      Emergency shut-off device validation
                    </li>
                  </ul>
                </Card>
              </div>
              <p className="mt-6 text-muted-foreground font-light">
                All delivered by Gas Safe-qualified engineers.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                Carbon Monoxide Risk Elimination
              </h2>
              <Card className="p-6">
                <p className="text-muted-foreground font-light leading-relaxed mb-4">
                  We install & verify:
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="text-muted-foreground font-light flex items-start">
                    <span className="text-primary mr-3">•</span>
                    CO detectors
                  </li>
                  <li className="text-muted-foreground font-light flex items-start">
                    <span className="text-primary mr-3">•</span>
                    Ventilation sufficiency
                  </li>
                  <li className="text-muted-foreground font-light flex items-start">
                    <span className="text-primary mr-3">•</span>
                    Combustion performance
                  </li>
                </ul>
                <p className="text-foreground font-medium">
                  Any reading outside tolerance = stop & fix. CO risk is not negotiable.
                </p>
              </Card>
            </section>

            <section>
              <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                Energy Efficiency & Cost Reduction
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-6">
                Commercial heating upgrades that pay back in months:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start space-x-3">
                  <span className="text-primary text-xl">→</span>
                  <div>
                    <h4 className="font-medium mb-1">High-efficiency boiler replacements</h4>
                    <p className="text-sm text-muted-foreground font-light">Modern condensing systems with 92%+ efficiency</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-primary text-xl">→</span>
                  <div>
                    <h4 className="font-medium mb-1">Burner optimisation</h4>
                    <p className="text-sm text-muted-foreground font-light">Reduce fuel consumption without replacement</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-primary text-xl">→</span>
                  <div>
                    <h4 className="font-medium mb-1">Heat recovery</h4>
                    <p className="text-sm text-muted-foreground font-light">Capture waste heat for DHW systems</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-primary text-xl">→</span>
                  <div>
                    <h4 className="font-medium mb-1">Smart BMS control upgrades</h4>
                    <p className="text-sm text-muted-foreground font-light">Zone-based intelligent heating management</p>
                  </div>
                </div>
              </div>
              <p className="mt-6 text-foreground font-medium">
                Lower energy spend. Higher compliance confidence.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                Digital Audit Trail
              </h2>
              <Card className="p-6 bg-muted/50">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-3">Compliance Records</h4>
                    <ul className="space-y-2">
                      <li className="text-sm text-muted-foreground font-light flex items-start">
                        <span className="text-primary mr-2">✓</span>
                        Certificates & evidence stored digitally
                      </li>
                      <li className="text-sm text-muted-foreground font-light flex items-start">
                        <span className="text-primary mr-2">✓</span>
                        Renewal scheduling
                      </li>
                      <li className="text-sm text-muted-foreground font-light flex items-start">
                        <span className="text-primary mr-2">✓</span>
                        Engineer logs
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-3">Asset Management</h4>
                    <ul className="space-y-2">
                      <li className="text-sm text-muted-foreground font-light flex items-start">
                        <span className="text-primary mr-2">✓</span>
                        Asset life-cycle reporting
                      </li>
                      <li className="text-sm text-muted-foreground font-light flex items-start">
                        <span className="text-primary mr-2">✓</span>
                        Audit-ready governance in one secure portal
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>
            </section>

            <section>
              <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                Sectors We Support
              </h2>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-light">Hospitality</span>
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-light">Offices</span>
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-light">PBSA</span>
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-light">Retail</span>
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-light">High-rise residential operators</span>
              </div>
            </section>

            <section className="bg-muted/30 p-8 rounded-lg">
              <h3 className="text-2xl font-light mb-4 underline-accent inline-block">Case Study</h3>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                Major hotel plantroom: full CP42 + boiler optimisation delivered with zero guest disruption.
              </p>
              <p className="text-sm text-muted-foreground font-light italic">
                Full case study available on request.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                Local Coverage in London
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                Our Gas Safe engineers serve: City, Canary Wharf, Westminster, Docklands, Heathrow corridor, Stratford.
              </p>
              <p className="text-sm text-muted-foreground font-light">
                Emergency gas safety response available 24/7 across all London areas.
              </p>
            </section>

            <FAQSection faqs={faqs} />

            <section className="bg-charcoal text-white p-12 rounded-lg text-center">
              <h2 className="text-3xl font-light mb-4">Safety, Compliance, Peace of Mind</h2>
              <p className="text-xl mb-8 text-gray-300 font-light">
                📩 london@entirefm.com
              </p>
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">
                  Request Gas Compliance Audit
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </section>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <SidebarCTA />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GasSafetyLondon;
