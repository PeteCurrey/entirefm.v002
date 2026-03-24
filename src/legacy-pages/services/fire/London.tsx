"use client";

;
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Clock, FileCheck, AlertTriangle, Building2, Phone, CheckCircle } from "lucide-react";
import { SidebarCTA } from "@/components/shared/SidebarCTA";
import { FAQSection } from "@/components/shared/FAQSection";
import { SchemaMarkup, LocalBusinessSchema } from "@/components/shared/SchemaMarkup";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { useConversionTracking } from "@/hooks/useConversionTracking";
import ServiceHeroSection from "@/components/shared/ServiceHeroSection";

const FireLondon = () => {
  const { trackPhoneClick } = useConversionTracking();

  const faqs = [
    { question: "How often must fire alarms be tested in London offices?", answer: "Under BS 5839-1, fire alarm systems in London offices require weekly call point testing, monthly alarm sounders verification, quarterly battery checks, and a full annual inspection by a competent third party." },
    { question: "What are BS 5839 requirements for London landlords?", answer: "London landlords must ensure fire alarm systems meet BS 5839 standards, including category and grade appropriate to the building type." },
    { question: "Who is legally responsible for fire alarm compliance in London?", answer: "The 'Responsible Person' under the Regulatory Reform (Fire Safety) Order 2005 is legally accountable - typically the building owner, employer, or facilities manager." }
  ];

  const heroStats = [
    { value: "24/7", label: "Emergency Response" },
    { value: "2hr", label: "Response Time" },
    { value: "BS 5839", label: "Certified" },
    { value: "100", label: "Greater London Coverage", suffix: "%" }
  ];

  return (
    <>
      

      <SchemaMarkup schema={{ "@context": "https://schema.org", "@type": "Service", "name": "Fire Alarm Compliance Services - London", "provider": { "@type": "Organization", "name": "EntireFM" }, "areaServed": "London, UK" }} />
      <BreadcrumbSchema items={[{ label: "Fire Compliance", href: "/services/fire-alarms" }, { label: "London" }]} />
      <LocalBusinessSchema name="EntireFM London - Fire Compliance" address={{ street: "London Office", city: "London", postalCode: "EC1A 1BB", country: "UK" }} />

      <ServiceHeroSection
        breadcrumbItems={[{ label: "Fire Compliance", href: "/services/fire-alarms" }, { label: "London" }]}
        title="Fire Alarm Compliance Services – London"
        description="Protect people, operations, and legal responsibility across Greater London. Statutory testing, certification & urgent remedials — handled with zero excuses."
        stats={heroStats}
        primaryCTA={{ label: "Request Fire Compliance Audit", href: "/contact" }}
        secondaryCTA={{ label: "Download Fire Safety Checklist", href: "/resources" }}
        backgroundImage="https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=2070&auto=format&fit=crop"
      />

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-16">
            <section>
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">Life-Safety Compliance with Audit-Ready Evidence</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">London's high-density commercial environment demands absolute compliance with fire safety legislation. EntireFM delivers BS 5839-compliant testing that protects both lives and your legal standing.</p>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <Shield className="h-10 w-10 text-destructive mb-4" />
                  <h3 className="text-xl font-medium mb-2">BS 5839 Certified Testing</h3>
                  <p className="text-muted-foreground">All engineers hold current BS 5839 competency with London-specific system knowledge.</p>
                </Card>
                <Card className="p-6">
                  <FileCheck className="h-10 w-10 text-destructive mb-4" />
                  <h3 className="text-xl font-medium mb-2">Responsible Person Support</h3>
                  <p className="text-muted-foreground">Complete duty-holder assistance including risk assessments and enforcement defence.</p>
                </Card>
              </div>
            </section>

            <section>
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">Remedials Closed Fast</h2>
              <div className="bg-muted/50 border-l-4 border-destructive p-6 rounded-r-lg">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="h-6 w-6 text-destructive flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium mb-2">No "Waiting for Quotes" Culture</h3>
                    <p className="text-muted-foreground">We fix and certify on the spot. Your compliance window stays intact.</p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">Single Source of Truth</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6 text-center">
                  <Clock className="h-8 w-8 text-destructive mx-auto mb-3" />
                  <h3 className="font-medium mb-2">Live Compliance Status</h3>
                  <p className="text-sm text-muted-foreground">Instant dashboard showing upcoming tests</p>
                </Card>
                <Card className="p-6 text-center">
                  <FileCheck className="h-8 w-8 text-destructive mx-auto mb-3" />
                  <h3 className="font-medium mb-2">Photo Evidence</h3>
                  <p className="text-sm text-muted-foreground">Timestamped images of all tests</p>
                </Card>
                <Card className="p-6 text-center">
                  <CheckCircle className="h-8 w-8 text-destructive mx-auto mb-3" />
                  <h3 className="font-medium mb-2">Closed-Loop Reporting</h3>
                  <p className="text-sm text-muted-foreground">Traceable records from test to certification</p>
                </Card>
              </div>
            </section>

            <Card className="bg-destructive text-white p-8 border-none">
              <div className="flex items-center gap-4 mb-4">
                <Phone className="h-10 w-10" />
                <h3 className="text-2xl font-medium">24/7 Emergency Response</h3>
              </div>
              <p className="text-lg mb-4 text-white/90">Local London engineers available around the clock. We respond within 2 hours across Greater London.</p>
              <Button variant="secondary" size="lg" onClick={() => trackPhoneClick()}>Call Emergency Helpdesk</Button>
            </Card>

            <section>
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">Sectors We Protect in London</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Link href="/sectors/retail-service-stations" className="group">
                  <Card className="p-6 hover:shadow-lg transition-all">
                    <Building2 className="h-8 w-8 text-destructive mb-3" />
                    <h3 className="text-xl font-medium mb-2 group-hover:text-destructive transition-colors">Retail & Forecourts</h3>
                    <p className="text-muted-foreground text-sm">Public-access environments with complex detector zoning</p>
                  </Card>
                </Link>
                <Link href="/sectors/industrial-logistics" className="group">
                  <Card className="p-6 hover:shadow-lg transition-all">
                    <Building2 className="h-8 w-8 text-destructive mb-3" />
                    <h3 className="text-xl font-medium mb-2 group-hover:text-destructive transition-colors">Logistics & Industrial</h3>
                    <p className="text-muted-foreground text-sm">Large-scale warehousing with beam detection</p>
                  </Card>
                </Link>
              </div>
            </section>

            <section className="bg-muted/30 p-8 rounded-lg">
              <h2 className="text-3xl font-light mb-6">London Coverage</h2>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                {['City of London', 'Westminster', 'Canary Wharf', 'Croydon', 'Wembley', 'Stratford'].map(area => (
                  <div key={area} className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-destructive" /><span>{area}</span></div>
                ))}
              </div>
            </section>

            <FAQSection faqs={faqs} />
          </div>
          <div className="lg:col-span-1"><div className="sticky top-4"><SidebarCTA /></div></div>
        </div>
      </div>
    </>
  );
};

export default FireLondon;
