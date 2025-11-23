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
      question: "How quickly can you start remedials?",
      answer: "C1 dangerous defects are resolved immediately. C2 urgent defects are scheduled within days with transparent costing and minimal operational disruption."
    },
    {
      question: "Are night/overnight works available?",
      answer: "Yes - we schedule electrical testing and remedials outside operational hours to maintain business continuity for high-uptime environments."
    },
    {
      question: "What do insurers require from tenants?",
      answer: "Most insurers require valid EICR certification every 3-5 years. We provide digital certificates and compliance evidence instantly accessible for insurance renewals and audits."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Commercial Electrical Compliance Leeds | EICR Testing & Remedials</title>
        <meta name="description" content="EICR testing and remedial resolution protecting Leeds corporate, retail and public estates from electrical risk and costly downtime. BS 7671 certified compliance." />
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
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto font-light">EICR testing and remedial resolution that protects corporate, retail and public estates across Leeds from avoidable risk and costly downtime.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" onClick={() => trackProposalRequest('electrical-leeds')}>Request Electrical Compliance Audit</Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" onClick={() => trackDownload('bs7671-checklist')}><Download className="mr-2 h-5 w-5" />BS 7671 Checklist</Button>
          </div>
        </div>
      </section>

      <Breadcrumb items={[{ label: "Electrical Services", href: "/services/electrical" }, { label: "Leeds" }]} />

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-16">
            <section>
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">Electrical Safety = Business Continuity in Leeds</h2>
              <p className="text-lg text-muted-foreground mb-4">Leeds' commercial density demands proactive compliance. An electrical failure here can trigger:</p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2"><AlertTriangle className="h-5 w-5 text-primary flex-shrink-0 mt-1" /><span>Service disruption across multi-tenant estates</span></li>
                <li className="flex items-start gap-2"><AlertTriangle className="h-5 w-5 text-primary flex-shrink-0 mt-1" /><span>Insurance refusal after incidents</span></li>
                <li className="flex items-start gap-2"><AlertTriangle className="h-5 w-5 text-primary flex-shrink-0 mt-1" /><span>Criminal enforcement for safety breaches</span></li>
              </ul>
              <p className="text-lg text-muted-foreground mt-4">We ensure your infrastructure is safe and compliant, always.</p>
            </section>

            <section>
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">BS 7671 Compliance Services</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-muted/30 p-6 rounded-lg">
                  <h3 className="font-medium mb-3">Fixed-wire testing (EICR)</h3>
                  <p className="text-sm text-muted-foreground">Comprehensive electrical installation condition reporting to BS 7671 standards.</p>
                </div>
                <div className="bg-muted/30 p-6 rounded-lg">
                  <h3 className="font-medium mb-3">Distribution board inspection</h3>
                  <p className="text-sm text-muted-foreground">Full assessment of protective devices and circuit integrity.</p>
                </div>
                <div className="bg-muted/30 p-6 rounded-lg">
                  <h3 className="font-medium mb-3">Earthing & bonding checks</h3>
                  <p className="text-sm text-muted-foreground">Verification of safety earthing systems across installations.</p>
                </div>
                <div className="bg-muted/30 p-6 rounded-lg">
                  <h3 className="font-medium mb-3">Thermal imaging of high-load circuits</h3>
                  <p className="text-sm text-muted-foreground">Early detection of overheating and potential failure points.</p>
                </div>
                <div className="bg-muted/30 p-6 rounded-lg">
                  <h3 className="font-medium mb-3">Load balancing & surge protection</h3>
                  <p className="text-sm text-muted-foreground">Optimization and protection improvements for modern electrical demands.</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-6 italic">Minimal disruption to operations with pre-planned work windows.</p>
            </section>

            <section>
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">Remedials Resolved Without Delay</h2>
              <div className="bg-muted/50 border-l-4 border-primary p-6 rounded-r-lg">
                <p className="text-lg text-muted-foreground mb-4">Dangerous C1 and C2 defects are:</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-primary" /><span>Scoped</span></div>
                  <div className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-primary" /><span>Costed</span></div>
                  <div className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-primary" /><span>Fixed immediately</span></div>
                </div>
                <p className="text-lg font-medium mt-4">We don't leave risk behind.</p>
              </div>
            </section>

            <section>
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">Digital Certification & Governance</h2>
              <p className="text-lg text-muted-foreground mb-4">Live access to:</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium mb-1">EICR certificates</h3>
                    <p className="text-sm text-muted-foreground">Digitally stored and instantly accessible</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium mb-1">Remedial logs</h3>
                    <p className="text-sm text-muted-foreground">Complete audit trail of all works</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium mb-1">Renewal alerts</h3>
                    <p className="text-sm text-muted-foreground">Automated compliance reminders</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium mb-1">Compliance dashboard</h3>
                    <p className="text-sm text-muted-foreground">Real-time portfolio status</p>
                  </div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-6 italic">Instant evidence for auditors & insurers.</p>
            </section>

            <section>
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">Sectors We Support in Leeds</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card border p-6 rounded-lg">
                  <h3 className="text-xl font-medium mb-2">Corporate headquarters</h3>
                  <p className="text-muted-foreground">High-uptime financial and professional services environments</p>
                </div>
                <div className="bg-card border p-6 rounded-lg">
                  <h3 className="text-xl font-medium mb-2">Retail & hospitality</h3>
                  <p className="text-muted-foreground">Customer-facing operations requiring continuous safety</p>
                </div>
                <div className="bg-card border p-6 rounded-lg">
                  <h3 className="text-xl font-medium mb-2">Universities & PBSA</h3>
                  <p className="text-muted-foreground">Student accommodation and educational facilities</p>
                </div>
                <div className="bg-card border p-6 rounded-lg">
                  <h3 className="text-xl font-medium mb-2">Public buildings</h3>
                  <p className="text-muted-foreground">Council and government estate compliance</p>
                </div>
              </div>
            </section>

            <section className="bg-muted/20 p-8 rounded-lg">
              <h2 className="text-3xl font-light mb-4">Electrical Governance for Corporate Estates in Leeds</h2>
              <p className="text-muted-foreground italic">Coming soon — large office portfolio upgraded to full compliance in 3 weeks.</p>
            </section>

            <section className="bg-muted/30 p-8 rounded-lg">
              <h2 className="text-3xl font-light mb-6">Local Coverage</h2>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                {['City Centre', 'Holbeck', 'Headingley', 'Seacroft', 'White Rose'].map(area => (
                  <div key={area} className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary" /><span>{area}</span></div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-background rounded-lg">
                <p className="text-sm text-muted-foreground mb-2">📩 <a href="mailto:leeds@entirefm.com" className="text-primary hover:underline">leeds@entirefm.com</a></p>
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
