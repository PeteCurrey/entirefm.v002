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
      question: "Do you test sites outside operational hours?",
      answer: "Yes — we prioritise continuity and schedule around your needs. We offer evening, weekend and out-of-hours testing to minimize operational disruption."
    },
    {
      question: "What happens if we fail an EICR?",
      answer: "Urgent risks are fixed immediately; long-term improvements are planned with costs approved transparently. We don't leave you with a list of problems—we resolve them."
    },
    {
      question: "How do you provide evidence for insurers?",
      answer: "All certificates and reports are stored digitally and exportable at any time via our client portal, with full photographic evidence and compliance scoring."
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
        <title>Electrical Compliance in Birmingham | EICR Testing & BS 7671 | EntireFM</title>
        <meta name="description" content="EICR testing & remedials across logistics, manufacturing & corporate estates in the West Midlands. Protect Birmingham operations with BS 7671 compliant electrical compliance." />
        <link rel="canonical" href="https://entirefm.com/services/electrical-compliance" />
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
            EICR testing and remedials safeguarding business-critical operations across Birmingham's logistics, industrial and corporate estates.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg" asChild>
              <Link to="/contact">Request Electrical Compliance Audit</Link>
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
                Protect Operations & People in Birmingham
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Birmingham's high-volume logistics, retail and industrial operations rely on safe electrical systems every minute.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Consequences of missed compliance:
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Fire and dangerous shock hazards</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Operational shutdown damaging supply chains</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Insurance refusal to cover claims</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Criminal liability for the Responsible Person</span>
                  </li>
                </ul>
                <p className="text-lg text-muted-foreground leading-relaxed font-medium">
                  We protect uptime as aggressively as we protect safety.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">
                BS 7671 Inspection & EICR Certification
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  What we test:
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Fixed wiring installations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Distribution boards & protective devices</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Earthing and bonding compliance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Thermal imaging to catch early failure</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Load balancing & surge protection</span>
                  </li>
                </ul>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Scheduled to limit or eliminate operational downtime.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">
                Remedials Closed Fast — Zero Excuses
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  C1 + C2 urgent risks = resolved immediately, not "added to a list".
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  We remove hazards fast — keeping your estate safe and operational.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Immediate resolution of dangerous conditions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Transparent pricing with no hidden costs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Planned improvements with client approval</span>
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">
                Digital Certification & Audit Governance
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Included with every programme:
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Online certificate storage</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Fault evidence and rectification logs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Renewal alerts & compliance scoring</span>
                  </li>
                </ul>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Designed for HSE, insurers and auditors.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">
                Sectors We Support in Birmingham
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Card className="p-6">
                  <Building2 className="h-8 w-8 text-primary mb-3" />
                  <h3 className="text-lg font-medium mb-2">Industrial & Advanced Manufacturing</h3>
                  <p className="text-sm text-muted-foreground">Heavy industrial electrical systems</p>
                </Card>
                <Card className="p-6">
                  <Building2 className="h-8 w-8 text-primary mb-3" />
                  <h3 className="text-lg font-medium mb-2">Distribution Centres (M6/M42 Corridor)</h3>
                  <p className="text-sm text-muted-foreground">Logistics warehouse compliance</p>
                </Card>
                <Card className="p-6">
                  <Building2 className="h-8 w-8 text-primary mb-3" />
                  <h3 className="text-lg font-medium mb-2">Retail Environments & Public Venues</h3>
                  <p className="text-sm text-muted-foreground">High-footfall electrical safety</p>
                </Card>
                <Card className="p-6">
                  <Building2 className="h-8 w-8 text-primary mb-3" />
                  <h3 className="text-lg font-medium mb-2">Commercial Offices & Business Parks</h3>
                  <p className="text-sm text-muted-foreground">City centre business continuity</p>
                </Card>
              </div>
            </section>

            <section className="bg-muted/30 p-8 rounded-lg">
              <h2 className="text-3xl font-light mb-6">Proven Results — Electrical Safety Delivered at Scale</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  <strong>Case Study Coming Soon:</strong>
                </p>
                <p className="text-muted-foreground">
                  A Birmingham logistics operator with 100+ assets — zero disruption, full compliance restored.
                </p>
              </div>
            </section>

            <section className="bg-muted/30 p-8 rounded-lg">
              <h2 className="text-3xl font-light mb-6">Local Coverage</h2>
              <p className="text-lg text-muted-foreground mb-6">
                City Centre, Solihull, Sutton Coldfield, Digbeth, NEC corridor.
              </p>
              <Card className="p-6 bg-background">
                <p className="text-lg mb-4">
                  📩 <strong>Email:</strong> <a href="mailto:birmingham@entirefm.com" className="text-primary hover:underline">birmingham@entirefm.com</a>
                </p>
                <Button size="lg" asChild>
                  <Link to="/contact">Book EICR Survey</Link>
                </Button>
              </Card>
            </section>

            <FAQSection faqs={faqs} />

            <section className="bg-primary text-white p-12 rounded-lg text-center">
              <h2 className="text-3xl font-light mb-4">Keep Compliance Certain. Keep Operations Moving.</h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <Button size="lg" variant="secondary" asChild>
                  <Link to="/contact">Request Electrical Compliance Audit</Link>
                </Button>
              </div>
              <p className="mt-6 text-white/90">
                📩 <a href="mailto:birmingham@entirefm.com" className="underline">birmingham@entirefm.com</a>
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
