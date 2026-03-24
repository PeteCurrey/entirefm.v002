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

const GasSafetyLincoln = () => {
  const { trackDownload, trackProposalRequest } = useConversionTracking();

  const faqs = [
    {
      question: "Why is gas safety critical in healthcare environments?",
      answer: "Healthcare environments support vulnerable patients who cannot evacuate easily. Gas safety failures create life-threatening CO exposure and regulatory enforcement action. Zero tolerance for compliance failures is mandatory under CQC and HSE oversight.",
    },
    {
      question: "Can gas safety inspections be completed in occupied healthcare facilities?",
      answer: "Yes. We work with healthcare operators to schedule gas safety inspections, boiler servicing, and compliance certification during planned maintenance windows or in phases to maintain continuous patient care without disruption.",
    },
    {
      question: "How do energy savings benefit public sector plantrooms?",
      answer: "Public sector heating operates year-round with high fuel consumption. Boiler efficiency upgrades, heat recovery, and smart controls reduce fuel costs by 20-30%, delivering rapid payback and freeing budget for patient care.",
    },
  ];

  const LocalBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Entire FM - Gas Safety & Boiler Compliance Lincoln",
    "description": "Healthcare + heritage assets gas safety with sensitive inspection protocols in Lincoln.",
    "areaServed": "Lincoln",
    "serviceType": "Gas Safety Compliance",
    "email": "lincoln@entirefm.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Lincoln",
      "addressCountry": "GB"
    }
  };

  const heroStats = [
    { value: "Healthcare", label: "Specialist" },
    { value: "CQC", label: "Audit-Ready" },
    { value: "20-30", label: "Energy Savings", suffix: "%" },
    { value: "Zero", label: "Disruption" }
  ];

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Gas Safety", href: "/services/gas-safety" },
    { label: "Lincoln" }
  ];

  return (
    <>
      

      <SchemaMarkup schema={LocalBusinessSchema} />
      <BreadcrumbSchema items={breadcrumbItems} />

      <ServiceHeroSection
        breadcrumbItems={breadcrumbItems}
        title="Gas Safety Compliance – Lincoln"
        description="Healthcare + heritage assets require sensitive oversight. CQC-ready documentation and energy savings in public sector plantrooms."
        stats={heroStats}
        primaryCTA={{
          label: "Request Compliance Audit",
          href: "/contact",
          icon: ArrowRight
        }}
        secondaryCTA={{
          label: "Download Checklist",
          href: "#",
          icon: Download
        }}
        backgroundImage="https://images.unsplash.com/photo-1519494140681-8f17d830e0fa?q=80&w=2074"
      />

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-16">
            <section>
              <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                Lincoln's Healthcare Gas Requirements
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                Healthcare + heritage assets require sensitive gas inspection protocols with zero tolerance for compliance failure.
              </p>
              <p className="text-foreground font-medium">
                We deliver patient-safe gas compliance with CQC-ready documentation.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                Gas Safe Healthcare Services
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <h3 className="text-xl font-light mb-4">Sensitive Inspections</h3>
                  <ul className="space-y-2">
                    <li className="text-sm text-muted-foreground font-light flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      CP1/CP15 commercial gas certificates
                    </li>
                    <li className="text-sm text-muted-foreground font-light flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      Phased inspection scheduling
                    </li>
                    <li className="text-sm text-muted-foreground font-light flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      CO monitoring & ventilation validation
                    </li>
                    <li className="text-sm text-muted-foreground font-light flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      Emergency shut-off verification
                    </li>
                  </ul>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-light mb-4">Digital Audit Trail</h3>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed mb-4">
                    Fully documented ventilation checks, CO monitoring logs, and certification records stored digitally.
                  </p>
                  <p className="text-sm text-foreground font-medium">
                    CQC and HSE audit-ready.
                  </p>
                </Card>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                Energy Savings in Public Sector Plantrooms
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-6">
                Reduce operational costs and free budget for patient care:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <Card className="p-4">
                  <h4 className="font-medium mb-2">Efficiency Upgrades</h4>
                  <p className="text-sm text-muted-foreground font-light">High-efficiency condensing boilers with 92%+ efficiency</p>
                </Card>
                <Card className="p-4">
                  <h4 className="font-medium mb-2">Smart Controls</h4>
                  <p className="text-sm text-muted-foreground font-light">Ward-based demand management systems</p>
                </Card>
              </div>
            </section>

            <section className="bg-muted/30 p-8 rounded-lg">
              <h3 className="text-2xl font-light mb-4 underline-accent inline-block">Case Study</h3>
              <p className="text-muted-foreground font-light leading-relaxed">
                NHS compliance restored without shutdown — care home full gas safety compliance achieved with patient care continuity maintained.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                Local Coverage in Lincoln
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed">
                Our Gas Safe engineers serve: City Centre, Ermine, North Hykeham, Branston.
              </p>
            </section>

            <FAQSection faqs={faqs} />

            <section className="bg-charcoal text-white p-12 rounded-lg text-center">
              <h2 className="text-3xl font-light mb-4">Patient Safety First. Compliance Guaranteed.</h2>
              <p className="text-xl mb-8 text-gray-300 font-light">
                📩 lincoln@entirefm.com
              </p>
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">
                  Request Compliance Programme
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

export default GasSafetyLincoln;
