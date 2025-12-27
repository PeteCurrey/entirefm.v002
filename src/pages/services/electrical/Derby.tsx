import { Helmet } from "react-helmet";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle, AlertTriangle } from "lucide-react";
import { SidebarCTA } from "@/components/shared/SidebarCTA";
import { FAQSection } from "@/components/shared/FAQSection";
import { SchemaMarkup, LocalBusinessSchema } from "@/components/shared/SchemaMarkup";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import ServiceHeroSection from "@/components/shared/ServiceHeroSection";

const ElectricalDerby = () => {
  const faqs = [
    { question: "Can testing be done live?", answer: "Some testing can be conducted on live systems, but most comprehensive EICR testing requires isolation. We plan testing windows that minimize operational impact." },
    { question: "Will operations remain uninterrupted?", answer: "We use phased testing approaches and coordinate with production schedules to ensure testing occurs during planned maintenance windows." }
  ];

  const heroStats = [
    { value: "BS 7671", label: "Certified" },
    { value: "Rail", label: "& Aerospace" },
    { value: "C1/C2", label: "Immediate Remedials" },
    { value: "24/7", label: "Emergency Support" }
  ];

  return (
    <>
      <Helmet>
        <title>Electrical Compliance Derby | Rail & Aerospace EICR Testing</title>
        <meta name="description" content="Compliance-led testing for Derby's rail, aerospace and industrial estates. Uptime protection with BS 7671 certified electrical inspections." />
        <link rel="canonical" href="https://entirefm.com/electrical/derby" />
      </Helmet>

      <SchemaMarkup schema={{ "@context": "https://schema.org", "@type": "Service", "name": "Electrical Compliance - Derby", "provider": { "@type": "Organization", "name": "EntireFM" }, "areaServed": "Derby, UK" }} />
      <BreadcrumbSchema items={[{ label: "Electrical Services", href: "/services/electrical" }, { label: "Derby" }]} />
      <LocalBusinessSchema name="EntireFM Derby - Electrical" address={{ street: "Derby Office", city: "Derby", postalCode: "DE1 1AA", country: "UK" }} />

      <ServiceHeroSection
        breadcrumbItems={[{ label: "Electrical Services", href: "/services/electrical" }, { label: "Derby" }]}
        title="Electrical Compliance – Derby"
        description="Compliance-led testing for Derby's rail, aerospace and industrial estates. Uptime protection with BS 7671 certified electrical inspections."
        stats={heroStats}
        primaryCTA={{ label: "Request EICR Audit", href: "/contact" }}
        secondaryCTA={{ label: "Download BS 7671 Checklist", href: "/resources" }}
        backgroundImage="https://images.unsplash.com/photo-1581092583537-20d51876f086?q=80&w=2070&auto=format&fit=crop"
      />

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-16">
            <section>
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">Uptime = Profit in Derby</h2>
              <p className="text-lg text-muted-foreground mb-4">Downtime in Derby's high-spec engineering environments is not an option. We protect:</p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" /><span>Revenue</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" /><span>Safety</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" /><span>Operational continuity</span></li>
              </ul>
            </section>

            <section>
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">BS 7671 Testing</h2>
              <p className="text-lg text-muted-foreground mb-4">Industrial-grade electrical validation including:</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-muted/30 p-6 rounded-lg"><h3 className="font-medium mb-3">Fixed wiring</h3><p className="text-sm text-muted-foreground">Comprehensive electrical installation testing</p></div>
                <div className="bg-muted/30 p-6 rounded-lg"><h3 className="font-medium mb-3">Thermal imaging</h3><p className="text-sm text-muted-foreground">Advanced fault detection and prevention</p></div>
                <div className="bg-muted/30 p-6 rounded-lg"><h3 className="font-medium mb-3">Safety device performance</h3><p className="text-sm text-muted-foreground">RCD, MCB and isolation verification</p></div>
              </div>
            </section>

            <section>
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">Remedials → Immediate</h2>
              <div className="bg-muted/50 border-l-4 border-primary p-6 rounded-r-lg">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium mb-2">Critical faults → fixed NOW.</h3>
                    <p className="text-muted-foreground">We don't wait for paperwork while risk grows. Dangerous defects are resolved on-site immediately.</p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">Sectors</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6"><h3 className="text-xl font-medium mb-2">Rail</h3><p className="text-muted-foreground">Critical rail infrastructure electrical safety</p></Card>
                <Card className="p-6"><h3 className="text-xl font-medium mb-2">Aerospace</h3><p className="text-muted-foreground">High-precision manufacturing compliance</p></Card>
                <Card className="p-6"><h3 className="text-xl font-medium mb-2">Industrial parks</h3><p className="text-muted-foreground">Multi-tenant industrial estate compliance</p></Card>
              </div>
            </section>

            <section className="bg-muted/30 p-8 rounded-lg">
              <h2 className="text-3xl font-light mb-6">Coverage</h2>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                {['City Centre', 'Pride Park', 'Sinfin', 'Allestree'].map(area => (
                  <div key={area} className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary" /><span>{area}</span></div>
                ))}
              </div>
            </section>

            <FAQSection faqs={faqs} />

            <section className="bg-primary text-white p-12 rounded-lg text-center">
              <h2 className="text-3xl font-light mb-4">Book Compliance Audit</h2>
              <Button size="lg" variant="secondary" asChild><Link to="/contact">Book Compliance Audit</Link></Button>
            </section>
          </div>
          <div className="lg:col-span-1"><div className="sticky top-4"><SidebarCTA /></div></div>
        </div>
      </div>
    </>
  );
};

export default ElectricalDerby;
