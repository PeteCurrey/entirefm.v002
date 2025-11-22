import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Download, CheckCircle, AlertTriangle } from "lucide-react";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { SidebarCTA } from "@/components/shared/SidebarCTA";
import { FAQSection } from "@/components/shared/FAQSection";
import { SchemaMarkup, LocalBusinessSchema } from "@/components/shared/SchemaMarkup";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { useConversionTracking } from "@/hooks/useConversionTracking";

const ElectricalChesterfield = () => {
  const { trackDownload, trackProposalRequest } = useConversionTracking();

  const faqs = [
    {
      question: "What electrical testing is required for Chesterfield distribution centres?",
      answer: "Chesterfield logistics and distribution facilities require comprehensive EICR testing covering warehouse lighting circuits, forklift charging systems, conveyor power supplies, and three-phase distribution. Testing must minimize operational downtime through out-of-hours scheduling. Distribution centre downtime costs create significant leverage for proactive electrical compliance."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Logistics Electrical Compliance Chesterfield | EICR Testing Distribution Centres</title>
        <meta name="description" content="EICR testing for Chesterfield logistics and industrial estates along the M1. Distribution centre downtime protection with BS 7671 compliant electrical inspections." />
        <link rel="canonical" href="https://entirefm.com/electrical/chesterfield" />
      </Helmet>

      <SchemaMarkup schema={{ "@context": "https://schema.org", "@type": "Service", "name": "Electrical Compliance - Chesterfield", "provider": { "@type": "Organization", "name": "EntireFM" }, "areaServed": "Chesterfield, UK" }} />
      <BreadcrumbSchema items={[{ label: "Electrical Services", href: "/services/electrical" }, { label: "Chesterfield" }]} />
      <LocalBusinessSchema name="EntireFM Chesterfield - Electrical" address={{ street: "Chesterfield Office", city: "Chesterfield", postalCode: "S40 1AA", country: "UK" }} />

      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-background/90 z-10" />
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=2070&auto=format&fit=crop')` }} aria-label="Distribution centre electrical infrastructure inspection in Chesterfield logistics facility" />
        
        <div className="relative z-20 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-light text-white mb-6">Logistics Electrical Compliance – Chesterfield</h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto font-light">Logistics + industrial estates along the M1. Distribution centre downtime costs drive compliance.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" onClick={() => trackProposalRequest('electrical-chesterfield')}>Request Compliance Survey</Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" onClick={() => trackDownload('eicr-checklist')}><Download className="mr-2 h-5 w-5" />EICR Checklist</Button>
          </div>
        </div>
      </section>

      <Breadcrumb items={[{ label: "Electrical Services", href: "/services/electrical" }, { label: "Chesterfield" }]} />

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-16">
            <section>
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">Distribution Centre Electrical Compliance</h2>
              <p className="text-lg text-muted-foreground">Chesterfield's strategic M1 corridor position makes it a critical logistics hub where electrical downtime costs are substantial. EntireFM delivers BS 7671-certified EICR testing across distribution centres and industrial estates with out-of-hours scheduling to protect operational uptime and minimize revenue impact.</p>
            </section>

            <section>
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">Downtime Cost Protection</h2>
              <div className="bg-muted/50 border-l-4 border-primary p-6 rounded-r-lg">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium mb-2">Zero-Disruption Testing</h3>
                    <p className="text-muted-foreground">Chesterfield logistics operations receive weekend and night-time EICR testing schedules protecting 24/7 distribution operations. Immediate C1/C2 remedials prevent forced shutdowns, and all testing is planned around peak operational periods to eliminate revenue impact.</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-muted/30 p-8 rounded-lg">
              <h2 className="text-3xl font-light mb-6">Chesterfield Coverage</h2>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                {['Town Centre', 'Markham Vale', 'Dunston', 'Staveley', 'Brimington', 'Hasland'].map(area => (
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

export default ElectricalChesterfield;
