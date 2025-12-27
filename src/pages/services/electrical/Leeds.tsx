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

const ElectricalLeeds = () => {
  const faqs = [
    { question: "How quickly can you start remedials?", answer: "C1 dangerous defects are resolved immediately. C2 urgent defects are scheduled within days with transparent costing." },
    { question: "Are night/overnight works available?", answer: "Yes - we schedule electrical testing and remedials outside operational hours to maintain business continuity." },
    { question: "What do insurers require from tenants?", answer: "Most insurers require valid EICR certification every 3-5 years. We provide digital certificates instantly accessible for audits." }
  ];

  const heroStats = [
    { value: "BS 7671", label: "Certified" },
    { value: "C1/C2", label: "Rapid Remedials" },
    { value: "100", label: "West Yorkshire Coverage", suffix: "%" },
    { value: "24/7", label: "Emergency Support" }
  ];

  return (
    <>
      <Helmet>
        <title>Commercial Electrical Compliance Leeds | EICR Testing & Remedials</title>
        <meta name="description" content="EICR testing and remedial resolution protecting Leeds corporate, retail and public estates from electrical risk and costly downtime." />
        <link rel="canonical" href="https://entirefm.com/electrical/leeds" />
      </Helmet>

      <SchemaMarkup schema={{ "@context": "https://schema.org", "@type": "Service", "name": "Electrical Compliance - Leeds", "provider": { "@type": "Organization", "name": "EntireFM" }, "areaServed": "Leeds, UK" }} />
      <BreadcrumbSchema items={[{ label: "Electrical Services", href: "/services/electrical" }, { label: "Leeds" }]} />
      <LocalBusinessSchema name="EntireFM Leeds - Electrical" address={{ street: "Leeds Office", city: "Leeds", postalCode: "LS1 1AA", country: "UK" }} />

      <ServiceHeroSection
        breadcrumbItems={[{ label: "Electrical Services", href: "/services/electrical" }, { label: "Leeds" }]}
        title="Commercial Electrical Compliance – Leeds"
        description="EICR testing and remedial resolution that protects corporate, retail and public estates across Leeds from avoidable risk and costly downtime."
        stats={heroStats}
        primaryCTA={{ label: "Request Electrical Compliance Audit", href: "/contact" }}
        secondaryCTA={{ label: "Download BS 7671 Checklist", href: "/resources" }}
        backgroundImage="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=2070&auto=format&fit=crop"
      />

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-16">
            <section>
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">Electrical Safety = Business Continuity</h2>
              <p className="text-lg text-muted-foreground mb-4">Leeds' commercial density demands proactive compliance. An electrical failure can trigger:</p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2"><AlertTriangle className="h-5 w-5 text-primary flex-shrink-0 mt-1" /><span>Service disruption across multi-tenant estates</span></li>
                <li className="flex items-start gap-2"><AlertTriangle className="h-5 w-5 text-primary flex-shrink-0 mt-1" /><span>Insurance refusal after incidents</span></li>
                <li className="flex items-start gap-2"><AlertTriangle className="h-5 w-5 text-primary flex-shrink-0 mt-1" /><span>Criminal enforcement for safety breaches</span></li>
              </ul>
            </section>

            <section>
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">BS 7671 Compliance Services</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-muted/30 p-6 rounded-lg"><h3 className="font-medium mb-3">Fixed-wire testing (EICR)</h3><p className="text-sm text-muted-foreground">Comprehensive electrical installation condition reporting.</p></div>
                <div className="bg-muted/30 p-6 rounded-lg"><h3 className="font-medium mb-3">Distribution board inspection</h3><p className="text-sm text-muted-foreground">Full assessment of protective devices and circuit integrity.</p></div>
                <div className="bg-muted/30 p-6 rounded-lg"><h3 className="font-medium mb-3">Earthing & bonding checks</h3><p className="text-sm text-muted-foreground">Verification of safety earthing systems.</p></div>
                <div className="bg-muted/30 p-6 rounded-lg"><h3 className="font-medium mb-3">Thermal imaging</h3><p className="text-sm text-muted-foreground">Early detection of overheating and potential failure points.</p></div>
              </div>
            </section>

            <section>
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">Sectors We Support in Leeds</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6"><h3 className="text-xl font-medium mb-2">Corporate headquarters</h3><p className="text-muted-foreground">High-uptime financial and professional services</p></Card>
                <Card className="p-6"><h3 className="text-xl font-medium mb-2">Retail & hospitality</h3><p className="text-muted-foreground">Customer-facing operations requiring continuous safety</p></Card>
                <Card className="p-6"><h3 className="text-xl font-medium mb-2">Universities & PBSA</h3><p className="text-muted-foreground">Student accommodation and educational facilities</p></Card>
                <Card className="p-6"><h3 className="text-xl font-medium mb-2">Public buildings</h3><p className="text-muted-foreground">Council and government estate compliance</p></Card>
              </div>
            </section>

            <section className="bg-muted/30 p-8 rounded-lg">
              <h2 className="text-3xl font-light mb-6">Local Coverage</h2>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                {['City Centre', 'Holbeck', 'Headingley', 'Seacroft', 'White Rose'].map(area => (
                  <div key={area} className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary" /><span>{area}</span></div>
                ))}
              </div>
            </section>

            <FAQSection faqs={faqs} />

            <section className="bg-primary text-white p-12 rounded-lg text-center">
              <h2 className="text-3xl font-light mb-4">Protect Your Business. Request an EICR Today.</h2>
              <Button size="lg" variant="secondary" asChild><Link to="/contact">Book Electrical Compliance Audit</Link></Button>
            </section>
          </div>
          <div className="lg:col-span-1"><div className="sticky top-4"><SidebarCTA /></div></div>
        </div>
      </div>
    </>
  );
};

export default ElectricalLeeds;
