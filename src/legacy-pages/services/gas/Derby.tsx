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

const GasSafetyDerby = () => {
  const { trackDownload, trackProposalRequest } = useConversionTracking();

  const faqs = [
    {
      question: "Why is uptime critical in aerospace and industrial facilities?",
      answer: "Aerospace and industrial operations cannot tolerate heating system failures that disrupt production schedules or environmental controls. Gas safety compliance must be maintained without operational shutdown through planned maintenance windows.",
    },
    {
      question: "What is GS(I&U) Regs zero fail tolerance?",
      answer: "Gas Safety (Installation & Use) Regulations 1998 require all commercial gas installations to maintain continuous compliance. Any failure triggers immediate enforcement action, making proactive maintenance and certification essential.",
    },
    {
      question: "How do boiler upgrades enhance estate resilience?",
      answer: "High-efficiency boiler replacements, redundancy systems, and smart controls reduce breakdown risk, improve energy efficiency by 20-30%, and ensure operational continuity in mission-critical environments.",
    },
  ];

  const LocalBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Entire FM - Gas Safety & Boiler Compliance Derby",
    "description": "Aerospace/industrial heating compliance with uptime protection in Derby.",
    "areaServed": "Derby",
    "serviceType": "Gas Safety Compliance",
    "email": "derby@entirefm.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Derby",
      "addressCountry": "GB"
    }
  };

  const heroStats = [
    { value: "Aerospace", label: "Specialist" },
    { value: "CP15", label: "Certified" },
    { value: "20-30", label: "Efficiency Gain", suffix: "%" },
    { value: "Zero", label: "Downtime" }
  ];

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Gas Safety", href: "/services/gas-safety" },
    { label: "Derby" }
  ];

  return (
    <>
      

      <SchemaMarkup schema={LocalBusinessSchema} />
      <BreadcrumbSchema items={breadcrumbItems} />

      <ServiceHeroSection
        breadcrumbItems={breadcrumbItems}
        title="Gas Safety Compliance – Derby"
        description="Aerospace/industrial heating — uptime critical. GS(I&U) Regs enforcement with zero fail tolerance."
        stats={heroStats}
        primaryCTA={{
          label: "Gas Safety Certification",
          href: "/contact",
          icon: ArrowRight
        }}
        secondaryCTA={{
          label: "Download Checklist",
          href: "#",
          icon: Download
        }}
        backgroundImage="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070"
      />

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-16">
            <section>
              <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                Derby's Industrial Gas Environment
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                Aerospace/industrial heating — uptime critical. GS(I&U) Regs enforcement = zero fail tolerance.
              </p>
              <p className="text-foreground font-medium">
                We guarantee operational continuity through proactive compliance.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                Gas Safe Industrial Services
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <h3 className="text-xl font-light mb-4">Compliance Certification</h3>
                  <ul className="space-y-2">
                    <li className="text-sm text-muted-foreground font-light flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      CP15 commercial boiler certificates
                    </li>
                    <li className="text-sm text-muted-foreground font-light flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      Pressure system & PRV testing
                    </li>
                    <li className="text-sm text-muted-foreground font-light flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      Combustion analysis & CO monitoring
                    </li>
                    <li className="text-sm text-muted-foreground font-light flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      Flue integrity verification
                    </li>
                  </ul>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-light mb-4">Planned Maintenance</h3>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed">
                    All gas safety inspections scheduled during planned shutdowns to maintain operational continuity and avoid production disruption.
                  </p>
                </Card>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                High-Efficiency Boiler Upgrades
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-6">
                High-efficiency boiler upgrades enhance estate resilience:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <Card className="p-4">
                  <h4 className="font-medium mb-2">Efficiency Gains</h4>
                  <p className="text-sm text-muted-foreground font-light">Reduce fuel consumption by 20-30%</p>
                </Card>
                <Card className="p-4">
                  <h4 className="font-medium mb-2">Resilience</h4>
                  <p className="text-sm text-muted-foreground font-light">Redundancy systems ensure continuous operation</p>
                </Card>
              </div>
            </section>

            <section className="bg-muted/30 p-8 rounded-lg">
              <h3 className="text-2xl font-light mb-4 underline-accent inline-block">Case Study</h3>
              <p className="text-muted-foreground font-light leading-relaxed">
                Operational continuity guaranteed — aerospace facility full gas compliance achieved without production disruption.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                Local Coverage in Derby
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed">
                Our Gas Safe engineers serve: City Centre, Pride Park, Sinfin, Allestree.
              </p>
            </section>

            <FAQSection faqs={faqs} />

            <section className="bg-charcoal text-white p-12 rounded-lg text-center">
              <h2 className="text-3xl font-light mb-4">Uptime Protected. Compliance Guaranteed.</h2>
              <p className="text-xl mb-8 text-gray-300 font-light">
                📩 derby@entirefm.com
              </p>
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">
                  Gas Safety Certification
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

export default GasSafetyDerby;
