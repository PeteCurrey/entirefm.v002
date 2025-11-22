import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Download, CheckCircle, AlertTriangle } from "lucide-react";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { SidebarCTA } from "@/components/shared/SidebarCTA";
import { FAQSection } from "@/components/shared/FAQSection";
import { SchemaMarkup, LocalBusinessSchema } from "@/components/shared/SchemaMarkup";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { useConversionTracking } from "@/hooks/useConversionTracking";

const ElectricalLeeds = () => {
  const { trackDownload, trackProposalRequest } = useConversionTracking();

  const faqs = [
    {
      question: "What electrical compliance is required for Leeds financial district offices?",
      answer: "Leeds corporate offices require EICR testing every 5 years with enhanced documentation for financial sector compliance. Testing must cover UPS systems, server room power, emergency lighting circuits, and tenant fit-out installations. EntireFM conducts weekend inspections to minimize disruption to high-uptime financial operations."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Commercial Electrical Compliance Leeds | EICR Testing for Corporate Offices</title>
        <meta name="description" content="EICR testing for Leeds financial & corporate hubs. High uptime electrical compliance protecting major office FM portfolios across West Yorkshire." />
        <link rel="canonical" href="https://entirefm.com/electrical/leeds" />
      </Helmet>

      <SchemaMarkup schema={{ "@context": "https://schema.org", "@type": "Service", "name": "Electrical Compliance - Leeds", "provider": { "@type": "Organization", "name": "EntireFM" }, "areaServed": "Leeds, UK" }} />
      <BreadcrumbSchema items={[{ label: "Electrical Services", href: "/services/electrical" }, { label: "Leeds" }]} />
      <LocalBusinessSchema name="EntireFM Leeds - Electrical" address={{ street: "Leeds Office", city: "Leeds", postalCode: "LS1 1AA", country: "UK" }} />

      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-background/90 z-10" />
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=2070&auto=format&fit=crop')` }} aria-label="Corporate office electrical infrastructure inspection in Leeds financial district" />
        
        <div className="relative z-20 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-light text-white mb-6">Commercial Electrical Compliance – Leeds</h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto font-light">Financial & corporate hubs require high uptime. Major office FM portfolio opportunity.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" onClick={() => trackProposalRequest('electrical-leeds')}>Request Compliance Survey</Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" onClick={() => trackDownload('eicr-checklist')}><Download className="mr-2 h-5 w-5" />EICR Checklist</Button>
          </div>
        </div>
      </section>

      <Breadcrumb items={[{ label: "Electrical Services", href: "/services/electrical" }, { label: "Leeds" }]} />

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-16">
            <section>
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">High-Uptime Corporate Compliance</h2>
              <p className="text-lg text-muted-foreground">Leeds financial and corporate sectors demand electrical compliance that protects operational continuity. EntireFM delivers BS 7671-certified EICR testing across city centre office portfolios with weekend scheduling to eliminate business disruption for high-uptime environments.</p>
            </section>

            <section>
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">Audit-Ready Documentation</h2>
              <div className="bg-muted/50 border-l-4 border-primary p-6 rounded-r-lg">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium mb-2">Financial Sector Standards</h3>
                    <p className="text-muted-foreground">Leeds corporate clients receive enhanced EICR documentation including UPS system verification, server room power integrity testing, and tenant fit-out certification formatted for financial sector compliance audits.</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-muted/30 p-8 rounded-lg">
              <h2 className="text-3xl font-light mb-6">Leeds Coverage</h2>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                {['City Centre', 'Holbeck', 'Kirkstall', 'Headingley', 'Chapel Allerton', 'Hyde Park'].map(area => (
                  <div key={area} className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary" /><span>{area}</span></div>
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

export default ElectricalLeeds;
