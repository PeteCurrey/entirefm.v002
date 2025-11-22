import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Shield, 
  Clock, 
  FileCheck, 
  AlertTriangle,
  Building2,
  Download,
  CheckCircle
} from "lucide-react";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { SidebarCTA } from "@/components/shared/SidebarCTA";
import { FAQSection } from "@/components/shared/FAQSection";
import { SchemaMarkup, LocalBusinessSchema } from "@/components/shared/SchemaMarkup";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { useConversionTracking } from "@/hooks/useConversionTracking";

const ElectricalBirmingham = () => {
  const { trackDownload } = useConversionTracking();

  const faqs = [
    {
      question: "How long does an EICR take?",
      answer: "Typical EICR inspections take 2-4 hours for standard commercial premises, with larger facilities requiring up-to-full-day inspections. We schedule around operational requirements to minimize disruption."
    },
    {
      question: "Are operational sites tested live?",
      answer: "Where possible, yes. We use out-of-hours testing and phased approaches to maintain operational continuity during inspections."
    },
    {
      question: "What documentation will I receive?",
      answer: "Complete EICR certificates with detailed observations, photos, remedial recommendations, and digital certification via our client portal."
    }
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Commercial Electrical Compliance Services - Birmingham",
    "description": "EICR testing & remedials across logistics, manufacturing & corporate estates in the West Midlands.",
    "provider": {
      "@type": "Organization",
      "name": "EntireFM"
    },
    "areaServed": "Birmingham, UK",
    "serviceType": "Electrical Safety Compliance"
  };

  return (
    <>
      <Helmet>
        <title>Commercial Electrical Compliance Birmingham | EICR Testing West Midlands</title>
        <meta name="description" content="EICR testing & remedials across logistics, manufacturing & corporate estates in the West Midlands. Protect Birmingham operations with BS 7671 compliant electrical compliance." />
        <link rel="canonical" href="https://entirefm.com/electrical/birmingham" />
      </Helmet>

      <SchemaMarkup schema={serviceSchema} />
      <BreadcrumbSchema items={[
        { label: "Electrical Services", href: "/services/electrical" },
        { label: "Birmingham" }
      ]} />
      <LocalBusinessSchema
        name="EntireFM Birmingham - Electrical Compliance"
        address={{
          street: "Birmingham Office",
          city: "Birmingham",
          postalCode: "B1 1AA",
          country: "UK"
        }}
      />

      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-background/90 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1565043666747-69f6646db940?q=80&w=2070&auto=format&fit=crop')`,
          }}
          aria-label="Commercial electrical testing in Birmingham warehouse facility"
        />
        
        <div className="relative z-20 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-light text-white mb-6 tracking-tight">
            Commercial Electrical Compliance – Birmingham
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto font-light">
            EICR testing & remedials across logistics, manufacturing & corporate estates in the West Midlands.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg" asChild>
              <Link to="/contact">Request an Electrical Compliance Survey</Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg border-white text-white hover:bg-white hover:text-primary"
              onClick={() => trackDownload('bs-7671-compliance-checklist')}
            >
              <Download className="mr-2 h-5 w-5" />
              Download BS 7671 Compliance Checklist
            </Button>
          </div>
        </div>
      </section>

      <Breadcrumb items={[
        { label: "Electrical Services", href: "/services/electrical" },
        { label: "Birmingham" }
      ]} />

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-16">
            
            <section>
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">
                Protect People, Operations & Insurance Cover
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Thousands of workplaces across Birmingham rely on electrical systems operating under extreme load — from logistics warehouses to major city venues.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Non-compliance here risks:
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Fire & operational shutdown</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Enforcement action by West Midlands Fire Service</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Supply chain downtime penalties</span>
                  </li>
                </ul>
                <p className="text-lg text-muted-foreground leading-relaxed font-medium">
                  We ensure none of that ever lands on your desk.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">
                BS 7671 Testing & Certification
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Our electrical engineers complete:
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Fixed-wire inspection & testing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Panel & distribution board surveys</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Industrial control system safety</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Thermal imaging to prevent faults</span>
                  </li>
                </ul>
                <p className="text-lg font-medium text-foreground">
                  We don't just test — we resolve compliance risk.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">
                Remedials Delivered Fast
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  C1/C2 issues fixed before they cause disruption.
                </p>
                <p className="text-muted-foreground mb-4">
                  No delays. No risk left unresolved.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Clear categorisation (C1/C2/C3/FI)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Transparent pricing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Immediate resolution where non-compliances pose risk</span>
                  </li>
                </ul>
                <p className="text-lg font-medium text-foreground">
                  Operational uptime protected — always.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">
                Digital Compliance Evidence
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Complete traceability for insurers, HSE & internal audits.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="p-6">
                    <FileCheck className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-medium mb-2">Digital Archive</h3>
                    <p className="text-muted-foreground">Every certificate is digitally archived</p>
                  </Card>
                  <Card className="p-6">
                    <FileCheck className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-medium mb-2">Photo Evidence</h3>
                    <p className="text-muted-foreground">Photos and notes support every test</p>
                  </Card>
                  <Card className="p-6">
                    <Clock className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-medium mb-2">Live Scoring</h3>
                    <p className="text-muted-foreground">Live compliance scoring and renewal alerts</p>
                  </Card>
                  <Card className="p-6">
                    <Download className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-medium mb-2">Instant Exports</h3>
                    <p className="text-muted-foreground">Instant audit exports for insurers and HSE</p>
                  </Card>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">
                Sectors We Support
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Card className="p-6">
                  <Building2 className="h-8 w-8 text-primary mb-3" />
                  <h3 className="text-lg font-medium mb-2">Manufacturing & Industrial</h3>
                  <p className="text-sm text-muted-foreground">Heavy industrial electrical systems</p>
                </Card>
                <Card className="p-6">
                  <Building2 className="h-8 w-8 text-primary mb-3" />
                  <h3 className="text-lg font-medium mb-2">Retail & Public Venues</h3>
                  <p className="text-sm text-muted-foreground">High-footfall electrical safety</p>
                </Card>
                <Card className="p-6">
                  <Building2 className="h-8 w-8 text-primary mb-3" />
                  <h3 className="text-lg font-medium mb-2">Distribution Centres (M6/M42 Corridor)</h3>
                  <p className="text-sm text-muted-foreground">Logistics warehouse compliance</p>
                </Card>
                <Card className="p-6">
                  <Building2 className="h-8 w-8 text-primary mb-3" />
                  <h3 className="text-lg font-medium mb-2">Corporate Offices & Financial Hubs</h3>
                  <p className="text-sm text-muted-foreground">City centre business continuity</p>
                </Card>
              </div>
            </section>

            <section className="bg-muted/30 p-8 rounded-lg">
              <h2 className="text-3xl font-light mb-6">Local Coverage</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Serving: Birmingham City Centre, Solihull, Sutton Coldfield, Digbeth, NEC, Tyseley.
              </p>
              <Card className="p-6 bg-background">
                <p className="text-lg mb-4">
                  <strong>Email:</strong> <a href="mailto:birmingham@entirefm.com" className="text-primary hover:underline">birmingham@entirefm.com</a>
                </p>
                <Button size="lg" asChild>
                  <Link to="/contact">Request EICR Survey</Link>
                </Button>
              </Card>
            </section>

            <FAQSection faqs={faqs} />

            <section className="bg-primary text-white p-12 rounded-lg text-center">
              <h2 className="text-3xl font-light mb-4">Protect Your Business. Request an EICR Today.</h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <Button size="lg" variant="secondary" asChild>
                  <Link to="/contact">Book Electrical Compliance Survey</Link>
                </Button>
              </div>
              <p className="mt-6 text-white/90">
                Email: <a href="mailto:birmingham@entirefm.com" className="underline">birmingham@entirefm.com</a>
              </p>
            </section>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-4">
              <SidebarCTA />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ElectricalBirmingham;
