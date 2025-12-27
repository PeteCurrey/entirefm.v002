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

const ElectricalLincoln = () => {
  const faqs = [
    { question: "How do you ensure minimal disruption?", answer: "We schedule testing during planned maintenance windows, use phased approaches for large estates, and offer out-of-hours testing for critical operations." },
    { question: "Are compliance reminders automated?", answer: "Yes - our digital governance platform sends automated renewal alerts 90 days before certification expires." }
  ];

  const heroStats = [
    { value: "BS 7671", label: "Certified" },
    { value: "Heritage", label: "Expertise" },
    { value: "HTM", label: "Healthcare Compliant" },
    { value: "24/7", label: "Emergency Support" }
  ];

  return (
    <>
      <Helmet>
        <title>Commercial Electrical Compliance Lincoln | Heritage & Healthcare EICR Testing</title>
        <meta name="description" content="Audit-ready electrical governance for Lincoln's healthcare & heritage environments. Conservation-sensitive BS 7671 compliance testing." />
        <link rel="canonical" href="https://entirefm.com/electrical/lincoln" />
      </Helmet>

      <SchemaMarkup schema={{ "@context": "https://schema.org", "@type": "Service", "name": "Electrical Compliance - Lincoln", "provider": { "@type": "Organization", "name": "EntireFM" }, "areaServed": "Lincoln, UK" }} />
      <BreadcrumbSchema items={[{ label: "Electrical Services", href: "/services/electrical" }, { label: "Lincoln" }]} />
      <LocalBusinessSchema name="EntireFM Lincoln - Electrical" address={{ street: "Lincoln Office", city: "Lincoln", postalCode: "LN1 1AA", country: "UK" }} />

      <ServiceHeroSection
        breadcrumbItems={[{ label: "Electrical Services", href: "/services/electrical" }, { label: "Lincoln" }]}
        title="Commercial Electrical Compliance – Lincoln"
        description="Audit-ready electrical governance for Lincoln's healthcare & heritage environments."
        stats={heroStats}
        primaryCTA={{ label: "Request Electrical Compliance Audit", href: "/contact" }}
        secondaryCTA={{ label: "Download BS 7671 Checklist", href: "/resources" }}
        backgroundImage="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=2070&auto=format&fit=crop"
      />

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-16">
            <section>
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">Zero-Tolerance Compliance</h2>
              <p className="text-lg text-muted-foreground mb-4">High sensitivity environments demand absolute reliability. We protect:</p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" /><span>Patient & visitor safety</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" /><span>Historic building infrastructure</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" /><span>Operational continuity</span></li>
              </ul>
            </section>

            <section>
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">BS 7671 Compliance Delivery</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-muted/30 p-6 rounded-lg"><h3 className="font-medium mb-3">Fixed wiring inspection</h3><p className="text-sm text-muted-foreground">Comprehensive EICR testing to BS 7671 standards</p></div>
                <div className="bg-muted/30 p-6 rounded-lg"><h3 className="font-medium mb-3">Panel integrity testing</h3><p className="text-sm text-muted-foreground">Distribution board and protective device verification</p></div>
                <div className="bg-muted/30 p-6 rounded-lg"><h3 className="font-medium mb-3">Thermal fault detection</h3><p className="text-sm text-muted-foreground">Advanced thermal imaging for early failure detection</p></div>
                <div className="bg-muted/30 p-6 rounded-lg"><h3 className="font-medium mb-3">Conservation-sensitive methods</h3><p className="text-sm text-muted-foreground">Heritage property electrical inspection expertise</p></div>
              </div>
            </section>

            <section>
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">Remedial Firewalls</h2>
              <div className="bg-muted/50 border-l-4 border-primary p-6 rounded-r-lg">
                <div className="space-y-3">
                  <div className="flex items-start gap-3"><AlertTriangle className="h-5 w-5 text-primary flex-shrink-0 mt-1" /><div><h3 className="font-medium mb-1">Every urgent defect → fixed rapidly</h3></div></div>
                  <div className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" /><div><h3 className="font-medium mb-1">No loose ends. No hidden risk.</h3></div></div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">Sectors</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6"><h3 className="text-xl font-medium mb-2">Healthcare</h3><p className="text-muted-foreground">HTM-compliant healthcare electrical safety</p></Card>
                <Card className="p-6"><h3 className="text-xl font-medium mb-2">Public sector</h3><p className="text-muted-foreground">Council and government building compliance</p></Card>
                <Card className="p-6"><h3 className="text-xl font-medium mb-2">Hospitality</h3><p className="text-muted-foreground">Hotel and leisure facility electrical safety</p></Card>
                <Card className="p-6"><h3 className="text-xl font-medium mb-2">Heritage buildings</h3><p className="text-muted-foreground">Conservation-sensitive electrical compliance</p></Card>
              </div>
            </section>

            <section className="bg-muted/30 p-8 rounded-lg">
              <h2 className="text-3xl font-light mb-6">Coverage</h2>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                {['City Centre', 'Ermine', 'North Hykeham', 'Branston'].map(area => (
                  <div key={area} className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary" /><span>{area}</span></div>
                ))}
              </div>
            </section>

            <FAQSection faqs={faqs} />

            <section className="bg-primary text-white p-12 rounded-lg text-center">
              <h2 className="text-3xl font-light mb-4">Book Electrical Compliance Audit</h2>
              <Button size="lg" variant="secondary" asChild><Link to="/contact">Book Electrical Compliance Audit</Link></Button>
            </section>
          </div>
          <div className="lg:col-span-1"><div className="sticky top-4"><SidebarCTA /></div></div>
        </div>
      </div>
    </>
  );
};

export default ElectricalLincoln;
