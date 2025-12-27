import { Helmet } from "react-helmet";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Phone, CheckCircle } from "lucide-react";
import { SidebarCTA } from "@/components/shared/SidebarCTA";
import { FAQSection } from "@/components/shared/FAQSection";
import { SchemaMarkup, LocalBusinessSchema } from "@/components/shared/SchemaMarkup";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { useConversionTracking } from "@/hooks/useConversionTracking";
import ServiceHeroSection from "@/components/shared/ServiceHeroSection";

const FireLeeds = () => {
  const { trackPhoneClick } = useConversionTracking();

  const faqs = [
    { question: "What fire alarm testing is required for Leeds PBSA?", answer: "Leeds student accommodation requires BS 5839 L1 systems with weekly call point testing, monthly system verification, and immediate fault response due to sleeping risk." },
    { question: "How often should retail campus fire alarms be tested in Leeds?", answer: "Leeds retail campuses require weekly call point tests, monthly sounder verification, quarterly battery checks, and annual third-party certification." }
  ];

  const heroStats = [
    { value: "24/7", label: "Emergency Response" },
    { value: "L1", label: "PBSA Systems" },
    { value: "BS 5839", label: "Certified" },
    { value: "<4hr", label: "Response Time" }
  ];

  return (
    <>
      <Helmet>
        <title>Fire Safety Compliance in Leeds | Local Testing & Statutory Compliance | EntireFM</title>
        <meta name="description" content="Professional fire alarm testing across Leeds and West Yorkshire. PBSA, retail campus and commercial compliance with BS 5839 certification." />
        <link rel="canonical" href="https://entirefm.com/services/fire-safety" />
      </Helmet>

      <SchemaMarkup schema={{ "@context": "https://schema.org", "@type": "Service", "name": "Fire Alarm Compliance Services - Leeds", "provider": { "@type": "Organization", "name": "EntireFM" }, "areaServed": "Leeds, UK" }} />
      <BreadcrumbSchema items={[{ label: "Fire Compliance", href: "/services/fire-alarms" }, { label: "Leeds" }]} />
      <LocalBusinessSchema name="EntireFM Leeds - Fire Compliance" address={{ street: "Leeds Office", city: "Leeds", postalCode: "LS1 1AA", country: "UK" }} />

      <ServiceHeroSection
        breadcrumbItems={[{ label: "Fire Compliance", href: "/services/fire-alarms" }, { label: "Leeds" }]}
        title="Fire Alarm Compliance – Leeds"
        description="Protect White Rose PBSA estates and retail campuses with statutory testing across West Yorkshire."
        stats={heroStats}
        primaryCTA={{ label: "Request Fire Audit", href: "/contact" }}
        secondaryCTA={{ label: "Download Checklist", href: "/resources" }}
        backgroundImage="https://images.unsplash.com/photo-1625225233840-695456021cde?q=80&w=2070&auto=format&fit=crop"
      />

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-16">
            <section>
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">PBSA & Retail Campus Expertise</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">Leeds' concentration of university estates and retail campus developments demands specialist fire compliance knowledge. EntireFM delivers BS 5839-compliant testing protecting both student welfare and operational licensing.</p>
            </section>

            <Card className="bg-destructive text-white p-8 border-none">
              <Phone className="h-10 w-10 mb-4" />
              <h3 className="text-2xl font-medium mb-2">24/7 Leeds Response</h3>
              <Button variant="secondary" size="lg" onClick={() => trackPhoneClick()}>Call Emergency Helpdesk</Button>
            </Card>

            <section className="bg-muted/30 p-8 rounded-lg">
              <h2 className="text-3xl font-light mb-6">Leeds Coverage</h2>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                {['City Centre', 'Headingley', 'Hyde Park', 'Kirkstall', 'Holbeck', 'Chapel Allerton'].map(area => (
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

export default FireLeeds;
