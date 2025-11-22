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

const ElectricalDerby = () => {
  const { trackDownload } = useConversionTracking();

  const faqs = [
    {
      question: "What aerospace sector compliance is required?",
      answer: "Aerospace facilities require enhanced EICR testing covering critical production equipment, control systems, and power integrity. We provide sector-specific compliance documentation meeting aerospace industry standards."
    },
    {
      question: "How do you minimize production downtime?",
      answer: "We use phased testing approaches, out-of-hours scheduling, and coordinate with production calendars to ensure testing occurs during planned maintenance windows or off-peak periods."
    }
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Industrial Electrical Compliance Services - Derby",
    "description": "Rail & aerospace facilities operate with zero downtime tolerance. Secure electrical control systems compliance for Derby industrial corridor.",
    "provider": {
      "@type": "Organization",
      "name": "EntireFM"
    },
    "areaServed": "Derby, UK",
    "serviceType": "Electrical Safety Compliance"
  };

  return (
    <>
      <Helmet>
        <title>Industrial Electrical Compliance Derby | EICR Testing Rail & Aerospace</title>
        <meta name="description" content="EICR testing for Derby rail and aerospace corridor. Industrial clients rely on secure electrical control systems with critical asset safety compliance." />
        <link rel="canonical" href="https://entirefm.com/electrical/derby" />
      </Helmet>

      <SchemaMarkup schema={serviceSchema} />
      <BreadcrumbSchema items={[
        { label: "Electrical Services", href: "/services/electrical" },
        { label: "Derby" }
      ]} />
      <LocalBusinessSchema
        name="EntireFM Derby - Electrical Compliance"
        address={{
          street: "Derby Office",
          city: "Derby",
          postalCode: "DE1 1AA",
          country: "UK"
        }}
      />

      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-background/90 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1581092583537-20d51876f086?q=80&w=2070&auto=format&fit=crop')`,
          }}
          aria-label="Aerospace manufacturing electrical control systems in Derby industrial facility"
        />
        
        <div className="relative z-20 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-light text-white mb-6 tracking-tight">
            Commercial Electrical Compliance – Derby
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto font-light">
            Rail & aerospace facilities operate with zero downtime tolerance. We ensure electrical systems meet the highest compliance standard.
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
        { label: "Derby" }
      ]} />

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-16">
            
            <section>
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">
                Risk Narrative
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Rail & aerospace facilities operate with zero downtime tolerance.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  We ensure electrical systems meet the highest compliance standard.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Production line shutdowns</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Critical asset damage</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Regulatory enforcement actions</span>
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">
                Scope
              </h2>
              <div className="prose prose-lg max-w-none">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Industrial control systems</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Thermal imaging for fault prevention</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">BS 7671 certificates</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Secure electrical control system testing</span>
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">
                Remedials
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Urgent faults fixed immediately to maintain critical operations.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Production-aligned scheduling</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Emergency parts availability</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Minimal disruption protocols</span>
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">
                Sectors
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Card className="p-6">
                  <Building2 className="h-8 w-8 text-primary mb-3" />
                  <h3 className="text-lg font-medium mb-2">Industrial</h3>
                  <p className="text-sm text-muted-foreground">Aerospace and advanced manufacturing</p>
                </Card>
                <Card className="p-6">
                  <Building2 className="h-8 w-8 text-primary mb-3" />
                  <h3 className="text-lg font-medium mb-2">Transport Hubs</h3>
                  <p className="text-sm text-muted-foreground">Rail and logistics infrastructure</p>
                </Card>
                <Card className="p-6">
                  <Building2 className="h-8 w-8 text-primary mb-3" />
                  <h3 className="text-lg font-medium mb-2">Corporate Estates</h3>
                  <p className="text-sm text-muted-foreground">Commercial office portfolios</p>
                </Card>
              </div>
            </section>

            <section className="bg-muted/30 p-8 rounded-lg">
              <h2 className="text-3xl font-light mb-6">Coverage</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Serving: City Centre, Pride Park, Sinfin, Littleover.
              </p>
              <Card className="p-6 bg-background">
                <p className="text-lg mb-4">
                  <strong>Email:</strong> <a href="mailto:derby@entirefm.com" className="text-primary hover:underline">derby@entirefm.com</a>
                </p>
                <Button size="lg" asChild>
                  <Link to="/contact">Secure Your EICR</Link>
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
                Email: <a href="mailto:derby@entirefm.com" className="underline">derby@entirefm.com</a>
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

export default ElectricalDerby;
