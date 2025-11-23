import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Download, CheckCircle, AlertTriangle } from "lucide-react";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { SidebarCTA } from "@/components/shared/SidebarCTA";
import { FAQSection } from "@/components/shared/FAQSection";
import { SchemaMarkup, LocalBusinessSchema } from "@/components/shared/SchemaMarkup";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { useConversionTracking } from "@/hooks/useConversionTracking";

const ElectricalLincoln = () => {
  const { trackDownload, trackProposalRequest } = useConversionTracking();

  const faqs = [
    {
      question: "How do you ensure minimal disruption?",
      answer: "We schedule testing during planned maintenance windows, use phased approaches for large estates, and offer out-of-hours testing for critical operations. Heritage sites receive conservation-sensitive inspection methods."
    },
    {
      question: "Are compliance reminders automated?",
      answer: "Yes - our digital governance platform sends automated renewal alerts 90 days before certification expires, ensuring continuous compliance without manual tracking."
    }
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

      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-background/90 z-10" />
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=2070&auto=format&fit=crop')` }} aria-label="Heritage building electrical safety inspection in Lincoln cathedral conservation area" />
        
        <div className="relative z-20 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-light text-white mb-6">Commercial Electrical Compliance – Lincoln</h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto font-light">Audit-ready electrical governance for Lincoln's healthcare & heritage environments.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" onClick={() => trackProposalRequest('electrical-lincoln')}>Request Electrical Compliance Audit</Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" onClick={() => trackDownload('bs7671-checklist')}><Download className="mr-2 h-5 w-5" />BS 7671 Checklist</Button>
          </div>
        </div>
      </section>

      <Breadcrumb items={[{ label: "Electrical Services", href: "/services/electrical" }, { label: "Lincoln" }]} />

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-16">
            <section>
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">Zero-Tolerance Compliance</h2>
              <p className="text-lg text-muted-foreground mb-4">High sensitivity environments demand absolute reliability.</p>
              <p className="text-lg text-muted-foreground mb-4">We protect:</p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" /><span>Patient & visitor safety</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" /><span>Historic building infrastructure</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" /><span>Operational continuity</span></li>
              </ul>
            </section>

            <section>
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">BS 7671 Compliance Delivery</h2>
              <p className="text-lg text-muted-foreground mb-4">Fixed wiring, panel integrity + thermal fault detection. All evidencing stored digitally.</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-muted/30 p-6 rounded-lg">
                  <h3 className="font-medium mb-3">Fixed wiring inspection</h3>
                  <p className="text-sm text-muted-foreground">Comprehensive EICR testing to BS 7671 standards</p>
                </div>
                <div className="bg-muted/30 p-6 rounded-lg">
                  <h3 className="font-medium mb-3">Panel integrity testing</h3>
                  <p className="text-sm text-muted-foreground">Distribution board and protective device verification</p>
                </div>
                <div className="bg-muted/30 p-6 rounded-lg">
                  <h3 className="font-medium mb-3">Thermal fault detection</h3>
                  <p className="text-sm text-muted-foreground">Advanced thermal imaging for early failure detection</p>
                </div>
                <div className="bg-muted/30 p-6 rounded-lg">
                  <h3 className="font-medium mb-3">Conservation-sensitive methods</h3>
                  <p className="text-sm text-muted-foreground">Heritage property electrical inspection expertise</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">Remedial Firewalls</h2>
              <div className="bg-muted/50 border-l-4 border-primary p-6 rounded-r-lg">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-medium mb-1">Every urgent defect → fixed rapidly</h3>
                      <p className="text-sm text-muted-foreground">C1 and C2 defects are prioritized and resolved without delay</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-medium mb-1">No loose ends. No hidden risk.</h3>
                      <p className="text-sm text-muted-foreground">Complete remedial closure with full documentation</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">Sectors</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card border p-6 rounded-lg">
                  <h3 className="text-xl font-medium mb-2">Healthcare</h3>
                  <p className="text-muted-foreground">HTM-compliant healthcare electrical safety</p>
                </div>
                <div className="bg-card border p-6 rounded-lg">
                  <h3 className="text-xl font-medium mb-2">Public sector</h3>
                  <p className="text-muted-foreground">Council and government building compliance</p>
                </div>
                <div className="bg-card border p-6 rounded-lg">
                  <h3 className="text-xl font-medium mb-2">Hospitality</h3>
                  <p className="text-muted-foreground">Hotel and leisure facility electrical safety</p>
                </div>
                <div className="bg-card border p-6 rounded-lg">
                  <h3 className="text-xl font-medium mb-2">Heritage buildings</h3>
                  <p className="text-muted-foreground">Conservation-sensitive electrical compliance</p>
                </div>
              </div>
            </section>

            <section className="bg-muted/20 p-8 rounded-lg">
              <h2 className="text-3xl font-light mb-4">Case Study</h2>
              <p className="text-muted-foreground italic">Critical safety upgrades — completed without closure.</p>
            </section>

            <section className="bg-muted/30 p-8 rounded-lg">
              <h2 className="text-3xl font-light mb-6">Coverage</h2>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                {['City Centre', 'Ermine', 'North Hykeham', 'Branston'].map(area => (
                  <div key={area} className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary" /><span>{area}</span></div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-background rounded-lg">
                <p className="text-sm text-muted-foreground mb-2">📩 <a href="mailto:lincoln@entirefm.com" className="text-primary hover:underline">lincoln@entirefm.com</a></p>
              </div>
            </section>

            <FAQSection faqs={faqs} />

            <section className="bg-gradient-to-br from-primary/10 to-primary/5 p-12 rounded-lg text-center">
              <h2 className="text-3xl md:text-4xl font-light mb-6">Book Electrical Compliance Audit</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">Protect your healthcare and heritage estates with audit-ready electrical governance.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="default" onClick={() => trackProposalRequest('electrical-lincoln-footer')}>Book Electrical Compliance Audit</Button>
              </div>
              <p className="text-sm text-muted-foreground mt-4">📩 lincoln@entirefm.com</p>
            </section>
          </div>
          <div className="lg:col-span-1"><div className="sticky top-4"><SidebarCTA /></div></div>
        </div>
      </div>
    </>
  );
};

export default ElectricalLincoln;
