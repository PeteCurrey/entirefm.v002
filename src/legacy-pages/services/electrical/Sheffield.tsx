"use client";

;
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle, AlertTriangle } from "lucide-react";
import { SidebarCTA } from "@/components/shared/SidebarCTA";
import { FAQSection } from "@/components/shared/FAQSection";
import { SchemaMarkup, LocalBusinessSchema } from "@/components/shared/SchemaMarkup";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import ServiceHeroSection from "@/components/shared/ServiceHeroSection";

const ElectricalSheffield = () => {
  const faqs = [
    { question: "Do you support shift-based operations?", answer: "Yes - we schedule testing around your operational requirements including night shifts, weekends, and maintenance windows." },
    { question: "Is thermal imaging included?", answer: "Yes - thermal imaging is included as standard in all EICR inspections to detect early signs of overheating." }
  ];

  const heroStats = [
    { value: "BS 7671", label: "Certified" },
    { value: "C1/C2", label: "Immediate Remedials" },
    { value: "100", label: "South Yorkshire", suffix: "%" },
    { value: "24/7", label: "Emergency Support" }
  ];

  return (
    <>
      

      <SchemaMarkup schema={{ "@context": "https://schema.org", "@type": "Service", "name": "Electrical Compliance - Sheffield", "provider": { "@type": "Organization", "name": "EntireFM" }, "areaServed": "Sheffield, UK" }} />
      <BreadcrumbSchema items={[{ label: "Electrical Services", href: "/services/electrical" }, { label: "Sheffield" }]} />
      <LocalBusinessSchema name="EntireFM Sheffield - Electrical" address={{ street: "Sheffield Office", city: "Sheffield", postalCode: "S1 1AA", country: "UK" }} />

      <ServiceHeroSection
        breadcrumbItems={[{ label: "Electrical Services", href: "/services/electrical" }, { label: "Sheffield" }]}
        title="Commercial Electrical Compliance – Sheffield"
        description="Compliance-driven electrical testing & remedials built for Sheffield's industrial and retail infrastructure."
        stats={heroStats}
        primaryCTA={{ label: "Request EICR Audit", href: "/contact" }}
        secondaryCTA={{ label: "Download BS 7671 Checklist", href: "/resources" }}
        backgroundImage="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=2070&auto=format&fit=crop"
      />

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-16">
            <section>
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">Industrial Demand = Elevated Safety Risk</h2>
              <p className="text-lg text-muted-foreground mb-4">Sheffield's manufacturing and logistics backbone requires uncompromising electrical governance. We protect:</p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" /><span>Worker safety</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" /><span>Business uptime</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" /><span>Asset integrity</span></li>
              </ul>
            </section>

            <section>
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">BS 7671 Testing & Engineering</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-muted/30 p-6 rounded-lg"><h3 className="font-medium mb-3">Fixed-wire testing</h3><p className="text-sm text-muted-foreground">Comprehensive electrical installation testing.</p></div>
                <div className="bg-muted/30 p-6 rounded-lg"><h3 className="font-medium mb-3">Labeling & circuit identification</h3><p className="text-sm text-muted-foreground">Clear asset identification for emergency response.</p></div>
                <div className="bg-muted/30 p-6 rounded-lg"><h3 className="font-medium mb-3">Protective device validation</h3><p className="text-sm text-muted-foreground">Verification of RCDs, MCBs and isolation systems.</p></div>
                <div className="bg-muted/30 p-6 rounded-lg"><h3 className="font-medium mb-3">Thermal inspections</h3><p className="text-sm text-muted-foreground">Advanced thermal imaging to detect early failure indicators.</p></div>
              </div>
            </section>

            <section>
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">Remedials With Zero Delay</h2>
              <div className="bg-muted/50 border-l-4 border-primary p-6 rounded-r-lg">
                <div className="space-y-3">
                  <div className="flex items-start gap-3"><AlertTriangle className="h-5 w-5 text-primary flex-shrink-0 mt-1" /><div><h3 className="font-medium mb-1">C1 shock/fire risk → IMMEDIATE resolution</h3></div></div>
                  <div className="flex items-start gap-3"><AlertTriangle className="h-5 w-5 text-primary flex-shrink-0 mt-1" /><div><h3 className="font-medium mb-1">C2 urgent risk → scheduled fast with zero excuses</h3></div></div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">Sectors</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6"><h3 className="text-xl font-medium mb-2">Advanced manufacturing</h3><p className="text-muted-foreground">Precision electrical compliance</p></Card>
                <Card className="p-6"><h3 className="text-xl font-medium mb-2">Retail complexes</h3><p className="text-muted-foreground">High-footfall safety</p></Card>
                <Card className="p-6"><h3 className="text-xl font-medium mb-2">Warehouses</h3><p className="text-muted-foreground">Logistics infrastructure safety</p></Card>
              </div>
            </section>

            <section className="bg-muted/30 p-8 rounded-lg">
              <h2 className="text-3xl font-light mb-6">Coverage</h2>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                {['City Centre', 'Lower Don Valley', 'Meadowhall', 'Attercliffe', 'Hillsborough'].map(area => (
                  <div key={area} className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary" /><span>{area}</span></div>
                ))}
              </div>
            </section>

            <FAQSection faqs={faqs} />

            <section className="bg-primary text-white p-12 rounded-lg text-center">
              <h2 className="text-3xl font-light mb-4">Book Electrical Compliance Audit</h2>
              <Button size="lg" variant="secondary" asChild><Link href="/contact">Book Electrical Compliance Audit</Link></Button>
            </section>
          </div>
          <div className="lg:col-span-1"><div className="sticky top-4"><SidebarCTA /></div></div>
        </div>
      </div>
    </>
  );
};

export default ElectricalSheffield;
