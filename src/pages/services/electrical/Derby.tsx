import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Download, CheckCircle, AlertTriangle } from "lucide-react";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { SidebarCTA } from "@/components/shared/SidebarCTA";
import { FAQSection } from "@/components/shared/FAQSection";
import { SchemaMarkup, LocalBusinessSchema } from "@/components/shared/SchemaMarkup";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { useConversionTracking } from "@/hooks/useConversionTracking";

const ElectricalDerby = () => {
  const { trackDownload, trackProposalRequest } = useConversionTracking();

  const faqs = [
    {
      question: "Can testing be done live?",
      answer: "Some testing can be conducted on live systems, but most comprehensive EICR testing requires isolation. We work with you to plan testing windows that minimize operational impact."
    },
    {
      question: "Will operations remain uninterrupted?",
      answer: "We use phased testing approaches and coordinate with production schedules to ensure testing occurs during planned maintenance windows, minimizing disruption to critical operations."
    }
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

      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-background/90 z-10" />
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1581092583537-20d51876f086?q=80&w=2070&auto=format&fit=crop')` }} aria-label="Aerospace manufacturing electrical control systems in Derby industrial facility" />
        
        <div className="relative z-20 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-light text-white mb-6">Electrical Compliance – Derby</h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto font-light">Compliance-led testing for Derby's rail, aerospace and industrial estates.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" onClick={() => trackProposalRequest('electrical-derby')}>Request EICR Audit</Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" onClick={() => trackDownload('bs7671-checklist')}><Download className="mr-2 h-5 w-5" />BS 7671 Checklist</Button>
          </div>
        </div>
      </section>

      <Breadcrumb items={[{ label: "Electrical Services", href: "/services/electrical" }, { label: "Derby" }]} />

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-16">
            <section>
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">Uptime = Profit in Derby</h2>
              <p className="text-lg text-muted-foreground mb-4">Downtime in Derby's high-spec engineering environments is not an option.</p>
              <p className="text-lg text-muted-foreground mb-4">We protect:</p>
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
                <div className="bg-muted/30 p-6 rounded-lg">
                  <h3 className="font-medium mb-3">Fixed wiring</h3>
                  <p className="text-sm text-muted-foreground">Comprehensive electrical installation testing</p>
                </div>
                <div className="bg-muted/30 p-6 rounded-lg">
                  <h3 className="font-medium mb-3">Thermal imaging</h3>
                  <p className="text-sm text-muted-foreground">Advanced fault detection and prevention</p>
                </div>
                <div className="bg-muted/30 p-6 rounded-lg">
                  <h3 className="font-medium mb-3">Safety device performance</h3>
                  <p className="text-sm text-muted-foreground">RCD, MCB and isolation verification</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">Remedials → Immediate</h2>
              <div className="bg-muted/50 border-l-4 border-primary p-6 rounded-r-lg">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium mb-2">Critical faults → fixed NOW.</h3>
                    <p className="text-muted-foreground">We don't wait for paperwork while risk grows. Dangerous defects are resolved on-site immediately with transparent documentation and costing.</p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">Certification & Governance</h2>
              <p className="text-lg text-muted-foreground mb-4">Evidence stored securely — fully traceable:</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium mb-1">Digital EICR certificates</h3>
                    <p className="text-sm text-muted-foreground">Instantly accessible compliance records</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium mb-1">Remedial audit trail</h3>
                    <p className="text-sm text-muted-foreground">Complete documentation of all corrective works</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium mb-1">Compliance dashboard</h3>
                    <p className="text-sm text-muted-foreground">Real-time portfolio status</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium mb-1">Renewal alerts</h3>
                    <p className="text-sm text-muted-foreground">Automated compliance reminders</p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">Sectors</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-card border p-6 rounded-lg">
                  <h3 className="text-xl font-medium mb-2">Rail</h3>
                  <p className="text-muted-foreground">Critical rail infrastructure electrical safety</p>
                </div>
                <div className="bg-card border p-6 rounded-lg">
                  <h3 className="text-xl font-medium mb-2">Aerospace</h3>
                  <p className="text-muted-foreground">High-precision manufacturing electrical compliance</p>
                </div>
                <div className="bg-card border p-6 rounded-lg">
                  <h3 className="text-xl font-medium mb-2">Industrial parks</h3>
                  <p className="text-muted-foreground">Multi-tenant industrial estate compliance</p>
                </div>
              </div>
            </section>

            <section className="bg-muted/20 p-8 rounded-lg">
              <h2 className="text-3xl font-light mb-4">Case Study</h2>
              <p className="text-muted-foreground italic">Compliance lifespan extension for critical industrial systems.</p>
            </section>

            <section className="bg-muted/30 p-8 rounded-lg">
              <h2 className="text-3xl font-light mb-6">Coverage</h2>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                {['City Centre', 'Pride Park', 'Sinfin', 'Allestree'].map(area => (
                  <div key={area} className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary" /><span>{area}</span></div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-background rounded-lg">
                <p className="text-sm text-muted-foreground mb-2">📩 <a href="mailto:derby@entirefm.com" className="text-primary hover:underline">derby@entirefm.com</a></p>
              </div>
            </section>

            <FAQSection faqs={faqs} />

            <section className="bg-gradient-to-br from-primary/10 to-primary/5 p-12 rounded-lg text-center">
              <h2 className="text-3xl md:text-4xl font-light mb-6">Book Compliance Audit</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">Protect your rail, aerospace and industrial operations with comprehensive electrical compliance.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="default" onClick={() => trackProposalRequest('electrical-derby-footer')}>Book Compliance Audit</Button>
              </div>
              <p className="text-sm text-muted-foreground mt-4">📩 derby@entirefm.com</p>
            </section>
          </div>
          <div className="lg:col-span-1"><div className="sticky top-4"><SidebarCTA /></div></div>
        </div>
      </div>
    </>
  );
};

export default ElectricalDerby;
