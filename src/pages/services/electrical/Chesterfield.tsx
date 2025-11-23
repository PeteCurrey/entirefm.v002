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
      question: "How disruptive is testing?",
      answer: "Minimal — we schedule testing smartly around operational periods. Weekend and night-time slots are available for 24/7 logistics operations to eliminate business disruption."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Electrical Compliance Chesterfield | Logistics EICR Testing M1 Corridor</title>
        <meta name="description" content="Rapid compliance testing for logistics-driven businesses along the M1 corridor. BS 7671 certified EICR testing with minimal disruption." />
        <link rel="canonical" href="https://entirefm.com/electrical/chesterfield" />
      </Helmet>

      <SchemaMarkup schema={{ "@context": "https://schema.org", "@type": "Service", "name": "Electrical Compliance - Chesterfield", "provider": { "@type": "Organization", "name": "EntireFM" }, "areaServed": "Chesterfield, UK" }} />
      <BreadcrumbSchema items={[{ label: "Electrical Services", href: "/services/electrical" }, { label: "Chesterfield" }]} />
      <LocalBusinessSchema name="EntireFM Chesterfield - Electrical" address={{ street: "Chesterfield Office", city: "Chesterfield", postalCode: "S40 1AA", country: "UK" }} />

      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-background/90 z-10" />
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=2070&auto=format&fit=crop')` }} aria-label="Distribution centre electrical infrastructure inspection in Chesterfield logistics facility" />
        
        <div className="relative z-20 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-light text-white mb-6">Electrical Compliance – Chesterfield</h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto font-light">Rapid compliance testing for logistics-driven businesses along the M1 corridor.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" onClick={() => trackProposalRequest('electrical-chesterfield')}>Book Survey</Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" onClick={() => trackDownload('bs7671-checklist')}><Download className="mr-2 h-5 w-5" />BS 7671 Checklist</Button>
          </div>
        </div>
      </section>

      <Breadcrumb items={[{ label: "Electrical Services", href: "/services/electrical" }, { label: "Chesterfield" }]} />

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-16">
            <section>
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">Logistics = High Exposure</h2>
              <p className="text-lg text-muted-foreground mb-4">Warehouse workforce safety depends on electrical reliability under load.</p>
              <p className="text-lg font-medium text-foreground">We reduce operational risk fast.</p>
            </section>

            <section>
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">BS 7671 Testing & Scoping</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-muted/30 p-6 rounded-lg">
                  <h3 className="font-medium mb-3">Industrial distribution boards</h3>
                  <p className="text-sm text-muted-foreground">High-load distribution system inspection and testing</p>
                </div>
                <div className="bg-muted/30 p-6 rounded-lg">
                  <h3 className="font-medium mb-3">Forklift charging infrastructure</h3>
                  <p className="text-sm text-muted-foreground">Material handling equipment power system verification</p>
                </div>
                <div className="bg-muted/30 p-6 rounded-lg">
                  <h3 className="font-medium mb-3">Protective device validation</h3>
                  <p className="text-sm text-muted-foreground">RCD, MCB and isolation system verification</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">Remedials Execution</h2>
              <div className="bg-muted/50 border-l-4 border-primary p-6 rounded-r-lg">
                <p className="text-lg text-muted-foreground">A clean asset base = fewer failures, fewer stoppages.</p>
                <div className="mt-4 space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground">C1 dangerous defects resolved immediately</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground">C2 urgent defects scheduled within days</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground">C3 improvements planned transparently</span>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">Digital Proof of Compliance</h2>
              <p className="text-lg text-muted-foreground mb-4">Certificates & asset records fully auditable:</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium mb-1">EICR certification</h3>
                    <p className="text-sm text-muted-foreground">Digitally stored and instantly accessible</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium mb-1">Remedial documentation</h3>
                    <p className="text-sm text-muted-foreground">Complete audit trail</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium mb-1">Compliance alerts</h3>
                    <p className="text-sm text-muted-foreground">Automated renewal reminders</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium mb-1">Asset tracking</h3>
                    <p className="text-sm text-muted-foreground">Complete equipment history</p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">Sectors</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-card border p-6 rounded-lg">
                  <h3 className="text-xl font-medium mb-2">Logistics</h3>
                  <p className="text-muted-foreground">Distribution centre electrical compliance</p>
                </div>
                <div className="bg-card border p-6 rounded-lg">
                  <h3 className="text-xl font-medium mb-2">Office estates</h3>
                  <p className="text-muted-foreground">Corporate building electrical safety</p>
                </div>
                <div className="bg-card border p-6 rounded-lg">
                  <h3 className="text-xl font-medium mb-2">Retail</h3>
                  <p className="text-muted-foreground">High-footfall retail electrical compliance</p>
                </div>
              </div>
            </section>

            <section className="bg-muted/20 p-8 rounded-lg">
              <h2 className="text-3xl font-light mb-4">Case Study</h2>
              <p className="text-muted-foreground italic">Multi-site DC compliance achieved on deadline — no downtime.</p>
            </section>

            <section className="bg-muted/30 p-8 rounded-lg">
              <h2 className="text-3xl font-light mb-6">Coverage</h2>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                {['Whittington Moor', 'Tapton', 'Clay Cross', 'Staveley'].map(area => (
                  <div key={area} className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary" /><span>{area}</span></div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-background rounded-lg">
                <p className="text-sm text-muted-foreground mb-2">📩 <a href="mailto:chesterfield@entirefm.com" className="text-primary hover:underline">chesterfield@entirefm.com</a></p>
              </div>
            </section>

            <FAQSection faqs={faqs} />

            <section className="bg-gradient-to-br from-primary/10 to-primary/5 p-12 rounded-lg text-center">
              <h2 className="text-3xl md:text-4xl font-light mb-6">Request Compliance Audit</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">Protect your M1 corridor logistics operations with rapid electrical compliance testing.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="default" onClick={() => trackProposalRequest('electrical-chesterfield-footer')}>Request Compliance Audit</Button>
              </div>
              <p className="text-sm text-muted-foreground mt-4">📩 chesterfield@entirefm.com</p>
            </section>
          </div>
          <div className="lg:col-span-1"><div className="sticky top-4"><SidebarCTA /></div></div>
        </div>
      </div>
    </>
  );
};

export default ElectricalChesterfield;
