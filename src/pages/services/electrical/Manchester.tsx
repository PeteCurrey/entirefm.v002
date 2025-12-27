import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Building2, CheckCircle } from "lucide-react";
import { SidebarCTA } from "@/components/shared/SidebarCTA";
import { FAQSection } from "@/components/shared/FAQSection";
import { SchemaMarkup, LocalBusinessSchema } from "@/components/shared/SchemaMarkup";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import ServiceHeroSection from "@/components/shared/ServiceHeroSection";

const ElectricalManchester = () => {
  const faqs = [
    { question: "How often should commercial buildings in Manchester undergo EICR testing?", answer: "Typically every 3–5 years depending on building use and insurer requirements. PBSA and HMO properties often require more frequent testing." },
    { question: "Can testing be done outside operating hours?", answer: "Yes — we schedule around your business to prevent disruption. We offer evening, weekend and out-of-hours testing." },
    { question: "Do you complete remedials as well?", answer: "Yes. All urgent risks are prioritised and resolved promptly. C1 issues are addressed immediately." }
  ];

  const heroStats = [
    { value: "BS 7671", label: "Certified" },
    { value: "C1/C2", label: "Rapid Remedials" },
    { value: "100", label: "Greater Manchester", suffix: "%" },
    { value: "24/7", label: "Emergency Support" }
  ];

  return (
    <>
      <Helmet>
        <title>Commercial Electrical Compliance Manchester | EICR Testing & PBSA Safety</title>
        <meta name="description" content="EICR testing for Manchester PBSA, Trafford Park industrial, and Salford Quays commercial estates. Protect student accommodation and business operations." />
        <link rel="canonical" href="https://entirefm.com/electrical/manchester" />
      </Helmet>

      <SchemaMarkup schema={{ "@context": "https://schema.org", "@type": "Service", "name": "Commercial Electrical Compliance Services - Manchester", "provider": { "@type": "Organization", "name": "EntireFM" }, "areaServed": "Manchester, UK" }} />
      <BreadcrumbSchema items={[{ label: "Electrical Services", href: "/services/electrical" }, { label: "Manchester" }]} />
      <LocalBusinessSchema name="EntireFM Manchester - Electrical Compliance" address={{ street: "Manchester Office", city: "Manchester", postalCode: "M1 1AA", country: "UK" }} />

      <ServiceHeroSection
        breadcrumbItems={[{ label: "Electrical Services", href: "/services/electrical" }, { label: "Manchester" }]}
        title="Commercial Electrical Compliance – Manchester"
        description="EICR testing, fault remediation and certification across Manchester's commercial, PBSA and hospitality estates — zero downtime, zero excuses."
        stats={heroStats}
        primaryCTA={{ label: "Request Electrical Compliance Audit", href: "/contact" }}
        secondaryCTA={{ label: "Download BS 7671 Checklist", href: "/resources" }}
        backgroundImage="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop"
      />

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-16">
            <section>
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">Protect People, Property & Operations</h2>
              <p className="text-lg text-muted-foreground mb-4">In a city with high student populations, large retail centres and older infrastructure — electrical compliance is mission-critical.</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-3"><AlertTriangle className="h-5 w-5 text-primary mt-1" /><span className="text-muted-foreground">Fire & operational shutdown</span></li>
                <li className="flex items-start gap-3"><AlertTriangle className="h-5 w-5 text-primary mt-1" /><span className="text-muted-foreground">Insurance rejection for claims</span></li>
                <li className="flex items-start gap-3"><AlertTriangle className="h-5 w-5 text-primary mt-1" /><span className="text-muted-foreground">Criminal liability under Electricity at Work Regulations</span></li>
              </ul>
            </section>

            <section>
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">BS 7671 Testing & EICR Certification</h2>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-primary mt-1" /><span className="text-muted-foreground">Full fixed-wire testing (EICR)</span></li>
                <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-primary mt-1" /><span className="text-muted-foreground">Thermal imaging for early fault detection</span></li>
                <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-primary mt-1" /><span className="text-muted-foreground">Surge protection and load balancing checks</span></li>
                <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-primary mt-1" /><span className="text-muted-foreground">Distribution board inspection & labelling</span></li>
              </ul>
            </section>

            <section>
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">Sectors We Protect in Manchester</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Card className="p-6"><Building2 className="h-8 w-8 text-primary mb-3" /><h3 className="text-lg font-medium mb-2">PBSA / University Estates</h3></Card>
                <Card className="p-6"><Building2 className="h-8 w-8 text-primary mb-3" /><h3 className="text-lg font-medium mb-2">Trafford Park Industrial & Logistics</h3></Card>
                <Card className="p-6"><Building2 className="h-8 w-8 text-primary mb-3" /><h3 className="text-lg font-medium mb-2">Hospitality & Entertainment</h3></Card>
                <Card className="p-6"><Building2 className="h-8 w-8 text-primary mb-3" /><h3 className="text-lg font-medium mb-2">Office & Corporate Estates</h3></Card>
              </div>
            </section>

            <section className="bg-muted/30 p-8 rounded-lg">
              <h2 className="text-3xl font-light mb-6">Local Coverage</h2>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                {['City Centre', 'Salford Quays', 'Trafford', 'Didsbury', 'Bury', 'Stockport'].map(area => (
                  <div key={area} className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary" /><span>{area}</span></div>
                ))}
              </div>
            </section>

            <FAQSection faqs={faqs} />

            <section className="bg-primary text-white p-12 rounded-lg text-center">
              <h2 className="text-3xl font-light mb-4">Protect Compliance. Protect Operations. Protect People.</h2>
              <Button size="lg" variant="secondary" asChild><Link to="/contact">Book Electrical Compliance Audit</Link></Button>
            </section>
          </div>
          <div className="lg:col-span-1"><div className="sticky top-4"><SidebarCTA /></div></div>
        </div>
      </div>
    </>
  );
};

export default ElectricalManchester;
