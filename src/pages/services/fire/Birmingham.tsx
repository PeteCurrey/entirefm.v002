import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, FileCheck, AlertTriangle, Building2, Phone, CheckCircle, Clock } from "lucide-react";
import { SidebarCTA } from "@/components/shared/SidebarCTA";
import { FAQSection } from "@/components/shared/FAQSection";
import { SchemaMarkup, LocalBusinessSchema } from "@/components/shared/SchemaMarkup";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { useConversionTracking } from "@/hooks/useConversionTracking";
import ServiceHeroSection from "@/components/shared/ServiceHeroSection";

const FireBirmingham = () => {
  const { trackPhoneClick } = useConversionTracking();

  const faqs = [
    { question: "What fire alarm systems are required for Birmingham warehouses?", answer: "Birmingham logistics and warehouse facilities typically require BS 5839 Category L2 or L3 systems depending on sleeping risk and building height. Large open-plan areas often need beam detection, and integration with sprinkler systems is mandatory for certain storage classifications." },
    { question: "How do recent West Midlands enforcement actions affect Birmingham businesses?", answer: "Recent enforcement activity by West Midlands Fire Service has highlighted increased scrutiny on manufacturing and logistics sites. Birmingham businesses must demonstrate proactive compliance with complete log books and immediate fault resolution." },
    { question: "Who certifies fire alarm compliance for Birmingham commercial premises?", answer: "Only engineers holding current BS 5839 competency can certify fire alarm systems in Birmingham. EntireFM's West Midlands team are all third-party accredited." }
  ];

  const heroStats = [
    { value: "24/7", label: "Emergency Response" },
    { value: "2hr", label: "Response Time", suffix: "" },
    { value: "BS 5839", label: "Certified" },
    { value: "100", label: "West Midlands Coverage", suffix: "%" }
  ];

  return (
    <>
      <Helmet>
        <title>Fire Safety Compliance in Birmingham | Local Testing & Statutory Compliance | EntireFM</title>
        <meta name="description" content="Protect people, operations, and legal responsibility across Birmingham and the West Midlands. Statutory fire alarm testing, BS 5839 certification & urgent remedials." />
        <link rel="canonical" href="https://entirefm.com/services/fire-safety" />
      </Helmet>

      <SchemaMarkup schema={{ "@context": "https://schema.org", "@type": "Service", "name": "Fire Alarm Compliance Services - Birmingham", "provider": { "@type": "Organization", "name": "EntireFM" }, "areaServed": "Birmingham, UK" }} />
      <BreadcrumbSchema items={[{ label: "Fire Compliance", href: "/services/fire-alarms" }, { label: "Birmingham" }]} />
      <LocalBusinessSchema name="EntireFM Birmingham - Fire Compliance" address={{ street: "Birmingham Office", city: "Birmingham", postalCode: "B1 1AA", country: "UK" }} />

      <ServiceHeroSection
        breadcrumbItems={[{ label: "Fire Compliance", href: "/services/fire-alarms" }, { label: "Birmingham" }]}
        title="Fire Alarm Compliance Services – Birmingham"
        description="Protect people, operations, and legal responsibility across the West Midlands. Statutory testing, certification & urgent remedials — handled with zero excuses."
        stats={heroStats}
        primaryCTA={{ label: "Request Fire Compliance Audit", href: "/contact" }}
        secondaryCTA={{ label: "Download Fire Safety Checklist", href: "/resources" }}
        backgroundImage="https://images.unsplash.com/photo-1582139329536-e7284fece509?q=80&w=2070&auto=format&fit=crop"
      />

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-16">
            <section>
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">Life-Safety Compliance with Audit-Ready Evidence</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">Recent enforcement actions in the West Midlands highlight the critical importance of proactive fire compliance. Birmingham's diverse commercial landscape demands rigorous adherence to BS 5839 standards.</p>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <Shield className="h-10 w-10 text-destructive mb-4" />
                  <h3 className="text-xl font-medium mb-2">BS 5839 Certified Testing</h3>
                  <p className="text-muted-foreground">West Midlands engineers with current third-party accreditation and deep knowledge of local enforcement patterns.</p>
                </Card>
                <Card className="p-6">
                  <FileCheck className="h-10 w-10 text-destructive mb-4" />
                  <h3 className="text-xl font-medium mb-2">Enforcement Defence Preparation</h3>
                  <p className="text-muted-foreground">Complete documentation packages that demonstrate responsible person competency.</p>
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
                    <p className="text-muted-foreground">We fix and certify on the spot. Root-cause identification prevents repeat failures.</p>
                  </div>
                </div>
              </div>
            </section>

            <Card className="bg-destructive text-white p-8 border-none">
              <div className="flex items-center gap-4 mb-4">
                <Phone className="h-10 w-10" />
                <h3 className="text-2xl font-medium">24/7 Emergency Response</h3>
              </div>
              <p className="text-lg mb-4 text-white/90">Local Birmingham engineers available around the clock. We respond within 2 hours across the West Midlands.</p>
              <Button variant="secondary" size="lg" onClick={() => trackPhoneClick()}>Call Emergency Helpdesk</Button>
            </Card>

            <section>
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">Sectors We Protect in Birmingham</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Link to="/sectors/industrial-logistics" className="group">
                  <Card className="p-6 hover:shadow-lg transition-all">
                    <Building2 className="h-8 w-8 text-destructive mb-3" />
                    <h3 className="text-xl font-medium mb-2 group-hover:text-destructive transition-colors">Logistics & Manufacturing</h3>
                    <p className="text-muted-foreground text-sm">Large-scale warehousing and automotive supply chain</p>
                  </Card>
                </Link>
                <Link to="/sectors/retail-service-stations" className="group">
                  <Card className="p-6 hover:shadow-lg transition-all">
                    <Building2 className="h-8 w-8 text-destructive mb-3" />
                    <h3 className="text-xl font-medium mb-2 group-hover:text-destructive transition-colors">Retail & Distribution</h3>
                    <p className="text-muted-foreground text-sm">High-street retail and regional distribution hubs</p>
                  </Card>
                </Link>
              </div>
            </section>

            <section className="bg-muted/30 p-8 rounded-lg">
              <h2 className="text-3xl font-light mb-6">Birmingham & West Midlands Coverage</h2>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                {['Birmingham City Centre', 'Solihull', 'Sutton Coldfield', 'Digbeth', 'NEC Corridor', 'Erdington'].map(area => (
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

export default FireBirmingham;
