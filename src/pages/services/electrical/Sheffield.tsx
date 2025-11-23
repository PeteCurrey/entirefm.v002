import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Download, CheckCircle, AlertTriangle } from "lucide-react";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { SidebarCTA } from "@/components/shared/SidebarCTA";
import { FAQSection } from "@/components/shared/FAQSection";
import { SchemaMarkup, LocalBusinessSchema } from "@/components/shared/SchemaMarkup";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { useConversionTracking } from "@/hooks/useConversionTracking";

const ElectricalSheffield = () => {
  const { trackDownload, trackProposalRequest } = useConversionTracking();

  const faqs = [
    {
      question: "Do you support shift-based operations?",
      answer: "Yes - we schedule testing around your operational requirements including night shifts, weekends, and maintenance windows to ensure zero disruption to manufacturing and production schedules."
    },
    {
      question: "Is thermal imaging included?",
      answer: "Yes - thermal imaging is included as standard in all EICR inspections to detect early signs of overheating, loose connections, and potential failure points before they cause downtime or safety incidents."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Commercial Electrical Compliance Sheffield | Industrial EICR Testing</title>
        <meta name="description" content="Compliance-driven electrical testing & remedials built for Sheffield's industrial and retail infrastructure. BS 7671 certified EICR testing with zero delay remedials." />
        <link rel="canonical" href="https://entirefm.com/electrical/sheffield" />
      </Helmet>

      <SchemaMarkup schema={{ "@context": "https://schema.org", "@type": "Service", "name": "Electrical Compliance - Sheffield", "provider": { "@type": "Organization", "name": "EntireFM" }, "areaServed": "Sheffield, UK" }} />
      <BreadcrumbSchema items={[{ label: "Electrical Services", href: "/services/electrical" }, { label: "Sheffield" }]} />
      <LocalBusinessSchema name="EntireFM Sheffield - Electrical" address={{ street: "Sheffield Office", city: "Sheffield", postalCode: "S1 1AA", country: "UK" }} />

      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-background/90 z-10" />
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=2070&auto=format&fit=crop')` }} aria-label="Heavy industrial electrical power systems in Sheffield manufacturing facility" />
        
        <div className="relative z-20 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-light text-white mb-6">Commercial Electrical Compliance – Sheffield</h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto font-light">Compliance-driven electrical testing & remedials built for Sheffield's industrial and retail infrastructure.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" onClick={() => trackProposalRequest('electrical-sheffield')}>Request EICR Audit</Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" onClick={() => trackDownload('bs7671-checklist')}><Download className="mr-2 h-5 w-5" />BS 7671 Checklist</Button>
          </div>
        </div>
      </section>

      <Breadcrumb items={[{ label: "Electrical Services", href: "/services/electrical" }, { label: "Sheffield" }]} />

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-16">
            <section>
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">Industrial Demand = Elevated Safety Risk</h2>
              <p className="text-lg text-muted-foreground mb-4">Sheffield's manufacturing and logistics backbone requires uncompromising electrical governance.</p>
              <p className="text-lg text-muted-foreground mb-4">We protect:</p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" /><span>Worker safety</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" /><span>Business uptime</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" /><span>Asset integrity</span></li>
              </ul>
            </section>

            <section>
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">BS 7671 Testing & Engineering</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-muted/30 p-6 rounded-lg">
                  <h3 className="font-medium mb-3">Fixed-wire testing</h3>
                  <p className="text-sm text-muted-foreground">Comprehensive electrical installation condition reporting to BS 7671 standards.</p>
                </div>
                <div className="bg-muted/30 p-6 rounded-lg">
                  <h3 className="font-medium mb-3">Labeling & circuit identification upgrades</h3>
                  <p className="text-sm text-muted-foreground">Clear asset identification for emergency response and maintenance.</p>
                </div>
                <div className="bg-muted/30 p-6 rounded-lg">
                  <h3 className="font-medium mb-3">Protective device validation</h3>
                  <p className="text-sm text-muted-foreground">Verification of RCDs, MCBs and isolation systems.</p>
                </div>
                <div className="bg-muted/30 p-6 rounded-lg">
                  <h3 className="font-medium mb-3">Thermal inspections for high-load facilities</h3>
                  <p className="text-sm text-muted-foreground">Advanced thermal imaging to detect early failure indicators.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">Remedials With Zero Delay</h2>
              <div className="bg-muted/50 border-l-4 border-primary p-6 rounded-r-lg">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-medium mb-1">C1 shock/fire risk → IMMEDIATE resolution</h3>
                      <p className="text-sm text-muted-foreground">Dangerous defects are resolved on-site immediately</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-medium mb-1">C2 urgent risk → scheduled fast with zero excuses</h3>
                      <p className="text-sm text-muted-foreground">Potentially dangerous defects scheduled within days</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">Governance & Traceability</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium mb-1">Digital certificates</h3>
                    <p className="text-sm text-muted-foreground">Instantly accessible compliance records</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium mb-1">Before/after evidence</h3>
                    <p className="text-sm text-muted-foreground">Complete remedial documentation</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium mb-1">Lifecycle compliance tracking</h3>
                    <p className="text-sm text-muted-foreground">Automated renewal reminders</p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">Sectors</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-card border p-6 rounded-lg">
                  <h3 className="text-xl font-medium mb-2">Advanced manufacturing</h3>
                  <p className="text-muted-foreground">Precision electrical compliance for high-tech production</p>
                </div>
                <div className="bg-card border p-6 rounded-lg">
                  <h3 className="text-xl font-medium mb-2">Retail complexes</h3>
                  <p className="text-muted-foreground">High-footfall safety and continuous operations</p>
                </div>
                <div className="bg-card border p-6 rounded-lg">
                  <h3 className="text-xl font-medium mb-2">Warehouses</h3>
                  <p className="text-muted-foreground">Logistics infrastructure electrical safety</p>
                </div>
              </div>
            </section>

            <section className="bg-muted/20 p-8 rounded-lg">
              <h2 className="text-3xl font-light mb-4">Case Study</h2>
              <p className="text-muted-foreground italic">Full electrical retesting of a logistics hub — downtime avoided.</p>
            </section>

            <section className="bg-muted/30 p-8 rounded-lg">
              <h2 className="text-3xl font-light mb-6">Coverage</h2>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                {['City Centre', 'Lower Don Valley', 'Meadowhall', 'Attercliffe', 'Hillsborough'].map(area => (
                  <div key={area} className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary" /><span>{area}</span></div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-background rounded-lg">
                <p className="text-sm text-muted-foreground mb-2">📩 <a href="mailto:sheffield@entirefm.com" className="text-primary hover:underline">sheffield@entirefm.com</a></p>
              </div>
            </section>

            <FAQSection faqs={faqs} />

            <section className="bg-gradient-to-br from-primary/10 to-primary/5 p-12 rounded-lg text-center">
              <h2 className="text-3xl md:text-4xl font-light mb-6">Book Electrical Compliance Audit</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">Protect your industrial operations with comprehensive electrical compliance testing and rapid remediation.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="default" onClick={() => trackProposalRequest('electrical-sheffield-footer')}>Book Electrical Compliance Audit</Button>
              </div>
              <p className="text-sm text-muted-foreground mt-4">📩 sheffield@entirefm.com</p>
            </section>
          </div>
          <div className="lg:col-span-1"><div className="sticky top-4"><SidebarCTA /></div></div>
        </div>
      </div>
    </>
  );
};

export default ElectricalSheffield;
