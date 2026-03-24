"use client";

;
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { SidebarCTA } from "@/components/shared/SidebarCTA";
import { FAQSection } from "@/components/shared/FAQSection";
import { SchemaMarkup, LocalBusinessSchema } from "@/components/shared/SchemaMarkup";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import ServiceHeroSection from "@/components/shared/ServiceHeroSection";

const ElectricalChesterfield = () => {
  const faqs = [
    { question: "How disruptive is testing?", answer: "Minimal — we schedule testing smartly around operational periods. Weekend and night-time slots are available for 24/7 logistics operations." }
  ];

  const heroStats = [
    { value: "BS 7671", label: "Certified" },
    { value: "M1", label: "Corridor Coverage" },
    { value: "C1/C2", label: "Immediate Remedials" },
    { value: "24/7", label: "Emergency Support" }
  ];

  return (
    <>
      

      <SchemaMarkup schema={{ "@context": "https://schema.org", "@type": "Service", "name": "Electrical Compliance - Chesterfield", "provider": { "@type": "Organization", "name": "EntireFM" }, "areaServed": "Chesterfield, UK" }} />
      <BreadcrumbSchema items={[{ label: "Electrical Services", href: "/services/electrical" }, { label: "Chesterfield" }]} />
      <LocalBusinessSchema name="EntireFM Chesterfield - Electrical" address={{ street: "Chesterfield Office", city: "Chesterfield", postalCode: "S40 1AA", country: "UK" }} />

      <ServiceHeroSection
        breadcrumbItems={[{ label: "Electrical Services", href: "/services/electrical" }, { label: "Chesterfield" }]}
        title="Electrical Compliance – Chesterfield"
        description="Rapid compliance testing for logistics-driven businesses along the M1 corridor."
        stats={heroStats}
        primaryCTA={{ label: "Book Survey", href: "/contact" }}
        secondaryCTA={{ label: "Download BS 7671 Checklist", href: "/resources" }}
        backgroundImage="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=2070&auto=format&fit=crop"
      />

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-16">
            <section>
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">Logistics = High Exposure</h2>
              <p className="text-lg text-muted-foreground mb-4">Warehouse workforce safety depends on electrical reliability under load.</p>
              <p className="text-lg font-medium text-foreground">We reduce operational risk fast.</p>
            </section>

            <section>
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">BS 7671 Testing & Scoping</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-muted/30 p-6 rounded-lg"><h3 className="font-medium mb-3">Industrial distribution boards</h3><p className="text-sm text-muted-foreground">High-load distribution system inspection and testing</p></div>
                <div className="bg-muted/30 p-6 rounded-lg"><h3 className="font-medium mb-3">Forklift charging infrastructure</h3><p className="text-sm text-muted-foreground">Material handling equipment power system verification</p></div>
                <div className="bg-muted/30 p-6 rounded-lg"><h3 className="font-medium mb-3">Protective device validation</h3><p className="text-sm text-muted-foreground">RCD, MCB and isolation system verification</p></div>
              </div>
            </section>

            <section>
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">Remedials Execution</h2>
              <div className="bg-muted/50 border-l-4 border-primary p-6 rounded-r-lg">
                <p className="text-lg text-muted-foreground">A clean asset base = fewer failures, fewer stoppages.</p>
                <div className="mt-4 space-y-2">
                  <div className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" /><span className="text-muted-foreground">C1 dangerous defects resolved immediately</span></div>
                  <div className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" /><span className="text-muted-foreground">C2 urgent defects scheduled within days</span></div>
                  <div className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" /><span className="text-muted-foreground">C3 improvements planned transparently</span></div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">Sectors</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6"><h3 className="text-xl font-medium mb-2">Logistics</h3><p className="text-muted-foreground">Distribution centre electrical compliance</p></Card>
                <Card className="p-6"><h3 className="text-xl font-medium mb-2">Office estates</h3><p className="text-muted-foreground">Corporate building electrical safety</p></Card>
                <Card className="p-6"><h3 className="text-xl font-medium mb-2">Retail</h3><p className="text-muted-foreground">High-footfall retail compliance</p></Card>
              </div>
            </section>

            <section className="bg-muted/30 p-8 rounded-lg">
              <h2 className="text-3xl font-light mb-6">Coverage</h2>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                {['Whittington Moor', 'Tapton', 'Clay Cross', 'Staveley'].map(area => (
                  <div key={area} className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary" /><span>{area}</span></div>
                ))}
              </div>
            </section>

            <FAQSection faqs={faqs} />

            <section className="bg-primary text-white p-12 rounded-lg text-center">
              <h2 className="text-3xl font-light mb-4">Request Compliance Audit</h2>
              <Button size="lg" variant="secondary" asChild><Link href="/contact">Request Compliance Audit</Link></Button>
            </section>
          </div>
          <div className="lg:col-span-1"><div className="sticky top-4"><SidebarCTA /></div></div>
        </div>
      </div>
    </>
  );
};

export default ElectricalChesterfield;
