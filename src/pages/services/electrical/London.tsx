import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, FileCheck, AlertTriangle, Building2, Download, CheckCircle } from "lucide-react";
import { SidebarCTA } from "@/components/shared/SidebarCTA";
import { FAQSection } from "@/components/shared/FAQSection";
import { SchemaMarkup, LocalBusinessSchema } from "@/components/shared/SchemaMarkup";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import ServiceHeroSection from "@/components/shared/ServiceHeroSection";

const ElectricalLondon = () => {
  const faqs = [
    { question: "How often do commercial properties in London need an EICR?", answer: "Typically every 3–5 years depending on use, occupancy and insurer requirements." },
    { question: "What's the difference between C1, C2 and C3 codes?", answer: "C1 = immediate danger; C2 = urgent remedial need; C3 = recommended enhancement. We resolve all non-compliant categories." },
    { question: "Who is responsible for electrical safety in workplaces?", answer: "The Responsible Person or duty holder. We support full legal compliance on their behalf." }
  ];

  const heroStats = [
    { value: "BS 7671", label: "Certified" },
    { value: "C1/C2", label: "Same-Day Remedials" },
    { value: "100", label: "Greater London Coverage", suffix: "%" },
    { value: "24/7", label: "Emergency Support" }
  ];

  return (
    <>
      <Helmet>
        <title>Commercial Electrical Compliance London | EICR Testing & BS 7671 Certification</title>
        <meta name="description" content="EICR testing, fault remediation and certification that protects operations, assets and legal responsibility across London." />
        <link rel="canonical" href="https://entirefm.com/electrical/london" />
      </Helmet>

      <SchemaMarkup schema={{ "@context": "https://schema.org", "@type": "Service", "name": "Commercial Electrical Compliance Services - London", "provider": { "@type": "Organization", "name": "EntireFM" }, "areaServed": "London, UK" }} />
      <BreadcrumbSchema items={[{ label: "Electrical Services", href: "/services/electrical" }, { label: "London" }]} />
      <LocalBusinessSchema name="EntireFM London - Electrical Compliance" address={{ street: "London Office", city: "London", postalCode: "EC1A 1BB", country: "UK" }} />

      <ServiceHeroSection
        breadcrumbItems={[{ label: "Electrical Services", href: "/services/electrical" }, { label: "London" }]}
        title="Commercial Electrical Compliance – London"
        description="EICR testing, fault remediation and certification that protects operations, assets and legal responsibility across London."
        stats={heroStats}
        primaryCTA={{ label: "Request Electrical Compliance Survey", href: "/contact" }}
        secondaryCTA={{ label: "Download BS 7671 Checklist", href: "/resources" }}
        backgroundImage="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2070&auto=format&fit=crop"
      />

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-16">
            <section>
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">Protect People, Operations & Insurance Cover</h2>
              <p className="text-lg text-muted-foreground mb-4">In a city where high-rise density and ageing infrastructure create elevated electrical risk, compliance is business-critical.</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-3"><AlertTriangle className="h-5 w-5 text-primary mt-1" /><span className="text-muted-foreground">Fire and safety breaches</span></li>
                <li className="flex items-start gap-3"><AlertTriangle className="h-5 w-5 text-primary mt-1" /><span className="text-muted-foreground">Operational shutdown</span></li>
                <li className="flex items-start gap-3"><AlertTriangle className="h-5 w-5 text-primary mt-1" /><span className="text-muted-foreground">Insurance refusal</span></li>
                <li className="flex items-start gap-3"><AlertTriangle className="h-5 w-5 text-primary mt-1" /><span className="text-muted-foreground">Criminal liability for Responsible Persons</span></li>
              </ul>
            </section>

            <section>
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">BS 7671 Inspection & EICR Testing</h2>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-primary mt-1" /><span className="text-muted-foreground">Fixed-wire testing (EICR)</span></li>
                <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-primary mt-1" /><span className="text-muted-foreground">Thermal imaging & load assessment</span></li>
                <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-primary mt-1" /><span className="text-muted-foreground">Distribution board inspections</span></li>
                <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-primary mt-1" /><span className="text-muted-foreground">Earth bonding verification</span></li>
              </ul>
            </section>

            <section>
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">Compliance Documentation Without Paperwork Pain</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6"><FileCheck className="h-10 w-10 text-primary mb-4" /><h3 className="text-xl font-medium mb-2">Digital Archive</h3><p className="text-muted-foreground">Every certificate is digitally archived</p></Card>
                <Card className="p-6"><FileCheck className="h-10 w-10 text-primary mb-4" /><h3 className="text-xl font-medium mb-2">Photo Evidence</h3><p className="text-muted-foreground">Photos and notes support every test</p></Card>
                <Card className="p-6"><Clock className="h-10 w-10 text-primary mb-4" /><h3 className="text-xl font-medium mb-2">Live Scoring</h3><p className="text-muted-foreground">Live compliance scoring and renewal alerts</p></Card>
                <Card className="p-6"><Download className="h-10 w-10 text-primary mb-4" /><h3 className="text-xl font-medium mb-2">Instant Exports</h3><p className="text-muted-foreground">Instant audit exports for insurers and HSE</p></Card>
              </div>
            </section>

            <section>
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">Expertise in Complex Environments</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Card className="p-6"><Building2 className="h-8 w-8 text-primary mb-3" /><h3 className="text-lg font-medium mb-2">Corporate Offices</h3><p className="text-sm text-muted-foreground">High-rise compliance across London's financial district</p></Card>
                <Card className="p-6"><Building2 className="h-8 w-8 text-primary mb-3" /><h3 className="text-lg font-medium mb-2">Retail & Public Venues</h3><p className="text-sm text-muted-foreground">High-footfall electrical safety certification</p></Card>
                <Card className="p-6"><Building2 className="h-8 w-8 text-primary mb-3" /><h3 className="text-lg font-medium mb-2">PBSA & Universities</h3><p className="text-sm text-muted-foreground">Student accommodation electrical compliance</p></Card>
                <Card className="p-6"><Building2 className="h-8 w-8 text-primary mb-3" /><h3 className="text-lg font-medium mb-2">Logistics & Industrial</h3><p className="text-sm text-muted-foreground">Distribution centre electrical systems</p></Card>
              </div>
            </section>

            <section className="bg-muted/30 p-8 rounded-lg">
              <h2 className="text-3xl font-light mb-6">Fast Response Across Greater London</h2>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                {['City of London', 'Westminster', 'Canary Wharf', 'Croydon', 'Wembley', 'Stratford'].map(area => (
                  <div key={area} className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary" /><span>{area}</span></div>
                ))}
              </div>
            </section>

            <FAQSection faqs={faqs} />

            <section className="bg-primary text-white p-12 rounded-lg text-center">
              <h2 className="text-3xl font-light mb-4">Protect Your Business. Request an EICR Today.</h2>
              <Button size="lg" variant="secondary" asChild><Link to="/contact">Book Electrical Compliance Survey</Link></Button>
            </section>
          </div>
          <div className="lg:col-span-1"><div className="sticky top-4"><SidebarCTA /></div></div>
        </div>
      </div>
    </>
  );
};

export default ElectricalLondon;
