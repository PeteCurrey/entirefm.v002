"use client";

;
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Building2, CheckCircle } from "lucide-react";
import { SidebarCTA } from "@/components/shared/SidebarCTA";
import { FAQSection } from "@/components/shared/FAQSection";
import { SchemaMarkup, LocalBusinessSchema } from "@/components/shared/SchemaMarkup";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import ServiceHeroSection from "@/components/shared/ServiceHeroSection";

const ElectricalBirmingham = () => {
  const faqs = [
    { question: "Do you test sites outside operational hours?", answer: "Yes — we prioritise continuity and schedule around your needs. We offer evening, weekend and out-of-hours testing." },
    { question: "What happens if we fail an EICR?", answer: "Urgent risks are fixed immediately; long-term improvements are planned with costs approved transparently." },
    { question: "How do you provide evidence for insurers?", answer: "All certificates and reports are stored digitally and exportable via our client portal." }
  ];

  const heroStats = [
    { value: "BS 7671", label: "Certified" },
    { value: "C1/C2", label: "Same-Day Remedials" },
    { value: "100", label: "West Midlands Coverage", suffix: "%" },
    { value: "24/7", label: "Emergency Support" }
  ];

  return (
    <>
      

      <SchemaMarkup schema={{ "@context": "https://schema.org", "@type": "Service", "name": "Commercial Electrical Compliance Services - Birmingham", "provider": { "@type": "Organization", "name": "EntireFM" }, "areaServed": "Birmingham, UK" }} />
      <BreadcrumbSchema items={[{ label: "Electrical Services", href: "/services/electrical" }, { label: "Birmingham" }]} />
      <LocalBusinessSchema name="EntireFM Birmingham - Electrical Compliance" address={{ street: "Birmingham Office", city: "Birmingham", postalCode: "B1 1AA", country: "UK" }} />

      <ServiceHeroSection
        breadcrumbItems={[{ label: "Electrical Services", href: "/services/electrical" }, { label: "Birmingham" }]}
        title="Commercial Electrical Compliance – Birmingham"
        description="EICR testing and remedials safeguarding business-critical operations across Birmingham's logistics, industrial and corporate estates."
        stats={heroStats}
        primaryCTA={{ label: "Request Electrical Compliance Audit", href: "/contact" }}
        secondaryCTA={{ label: "Download BS 7671 Checklist", href: "/resources" }}
        backgroundImage="https://images.unsplash.com/photo-1565043666747-69f6646db940?q=80&w=2070&auto=format&fit=crop"
      />

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-16">
            <section>
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">Protect Operations & People in Birmingham</h2>
              <p className="text-lg text-muted-foreground mb-4">Birmingham's high-volume logistics, retail and industrial operations rely on safe electrical systems every minute.</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-3"><AlertTriangle className="h-5 w-5 text-primary mt-1" /><span className="text-muted-foreground">Fire and dangerous shock hazards</span></li>
                <li className="flex items-start gap-3"><AlertTriangle className="h-5 w-5 text-primary mt-1" /><span className="text-muted-foreground">Operational shutdown damaging supply chains</span></li>
                <li className="flex items-start gap-3"><AlertTriangle className="h-5 w-5 text-primary mt-1" /><span className="text-muted-foreground">Insurance refusal to cover claims</span></li>
              </ul>
            </section>

            <section>
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">BS 7671 Inspection & EICR Certification</h2>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-primary mt-1" /><span className="text-muted-foreground">Fixed wiring installations</span></li>
                <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-primary mt-1" /><span className="text-muted-foreground">Distribution boards & protective devices</span></li>
                <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-primary mt-1" /><span className="text-muted-foreground">Earthing and bonding compliance</span></li>
                <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-primary mt-1" /><span className="text-muted-foreground">Thermal imaging to catch early failure</span></li>
              </ul>
            </section>

            <section>
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">Sectors We Support in Birmingham</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Card className="p-6"><Building2 className="h-8 w-8 text-primary mb-3" /><h3 className="text-lg font-medium mb-2">Industrial & Advanced Manufacturing</h3></Card>
                <Card className="p-6"><Building2 className="h-8 w-8 text-primary mb-3" /><h3 className="text-lg font-medium mb-2">Distribution Centres (M6/M42 Corridor)</h3></Card>
                <Card className="p-6"><Building2 className="h-8 w-8 text-primary mb-3" /><h3 className="text-lg font-medium mb-2">Retail Environments & Public Venues</h3></Card>
                <Card className="p-6"><Building2 className="h-8 w-8 text-primary mb-3" /><h3 className="text-lg font-medium mb-2">Commercial Offices & Business Parks</h3></Card>
              </div>
            </section>

            <section className="bg-muted/30 p-8 rounded-lg">
              <h2 className="text-3xl font-light mb-6">Local Coverage</h2>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                {['City Centre', 'Solihull', 'Sutton Coldfield', 'Digbeth', 'NEC corridor', 'Erdington'].map(area => (
                  <div key={area} className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary" /><span>{area}</span></div>
                ))}
              </div>
            </section>

            <FAQSection faqs={faqs} />

            <section className="bg-primary text-white p-12 rounded-lg text-center">
              <h2 className="text-3xl font-light mb-4">Keep Compliance Certain. Keep Operations Moving.</h2>
              <Button size="lg" variant="secondary" asChild><Link href="/contact">Request Electrical Compliance Audit</Link></Button>
            </section>
          </div>
          <div className="lg:col-span-1"><div className="sticky top-4"><SidebarCTA /></div></div>
        </div>
      </div>
    </>
  );
};

export default ElectricalBirmingham;
