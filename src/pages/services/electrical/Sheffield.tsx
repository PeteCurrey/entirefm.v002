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

const ElectricalSheffield = () => {
  const { trackDownload } = useConversionTracking();

  const faqs = [
    {
      question: "Do you test while operations continue?",
      answer: "Yes. We use phased testing approaches and out-of-hours scheduling to minimize disruption to industrial operations while maintaining comprehensive electrical safety inspections."
    },
    {
      question: "Do you offer thermal imaging?",
      answer: "Yes. Thermal imaging is included in all EICR inspections to identify overheating circuits, loose connections, and potential fault conditions before they cause failures."
    }
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Industrial Electrical Compliance Services - Sheffield",
    "description": "Industrial infrastructure + ageing commercial systems = high demand on electrical supply and increased thermal risk. Heavy industrial EICR testing for Sheffield manufacturing.",
    "provider": {
      "@type": "Organization",
      "name": "EntireFM"
    },
    "areaServed": "Sheffield, UK",
    "serviceType": "Electrical Safety Compliance"
  };

  return (
    <>
      <Helmet>
        <title>Industrial Electrical Compliance Sheffield | EICR Testing Manufacturing</title>
        <meta name="description" content="EICR testing for Sheffield heavy industrial sites and manufacturing facilities. Protect older infrastructure with advanced manufacturing electrical compliance." />
        <link rel="canonical" href="https://entirefm.com/electrical/sheffield" />
      </Helmet>

      <SchemaMarkup schema={serviceSchema} />
      <BreadcrumbSchema items={[
        { label: "Electrical Services", href: "/services/electrical" },
        { label: "Sheffield" }
      ]} />
      <LocalBusinessSchema
        name="EntireFM Sheffield - Electrical Compliance"
        address={{
          street: "Sheffield Office",
          city: "Sheffield",
          postalCode: "S1 1AA",
          country: "UK"
        }}
      />

      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-background/90 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=2070&auto=format&fit=crop')`,
          }}
          aria-label="Heavy industrial electrical power systems in Sheffield manufacturing facility"
        />
        
        <div className="relative z-20 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-light text-white mb-6 tracking-tight">
            Commercial Electrical Compliance – Sheffield
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto font-light">
            Industrial infrastructure + ageing commercial systems = high demand on electrical supply and increased thermal risk.
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
        { label: "Sheffield" }
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
                  Industrial infrastructure + ageing commercial systems = high demand on electrical supply and increased thermal risk.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Non-compliance risks:
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Production downtime</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Machinery damage from electrical faults</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Worker safety incidents</span>
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">
                Testing Scope
              </h2>
              <div className="prose prose-lg max-w-none">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Industrial panel checks</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Fixed wiring inspection</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Arc fault detection</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Distribution board testing</span>
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">
                Remedial Response
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Urgent faults fixed immediately to maintain machinery uptime.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Same-day C1/C2 response</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Production-aligned scheduling</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Emergency parts availability</span>
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
                  <h3 className="text-lg font-medium mb-2">Advanced Manufacturing</h3>
                  <p className="text-sm text-muted-foreground">Precision electrical systems</p>
                </Card>
                <Card className="p-6">
                  <Building2 className="h-8 w-8 text-primary mb-3" />
                  <h3 className="text-lg font-medium mb-2">Logistics</h3>
                  <p className="text-sm text-muted-foreground">Distribution centre compliance</p>
                </Card>
                <Card className="p-6">
                  <Building2 className="h-8 w-8 text-primary mb-3" />
                  <h3 className="text-lg font-medium mb-2">City-Centre Retail & Hospitality</h3>
                  <p className="text-sm text-muted-foreground">High-footfall venues</p>
                </Card>
              </div>
            </section>

            <section className="bg-muted/30 p-8 rounded-lg">
              <h2 className="text-3xl font-light mb-6">Coverage</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Serving: City Centre, Attercliffe, Meadowhall, Hillsborough, Lower Don Valley.
              </p>
              <Card className="p-6 bg-background">
                <p className="text-lg mb-4">
                  <strong>Email:</strong> <a href="mailto:sheffield@entirefm.com" className="text-primary hover:underline">sheffield@entirefm.com</a>
                </p>
                <Button size="lg" asChild>
                  <Link to="/contact">Book Electrical Compliance Audit</Link>
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
                Email: <a href="mailto:sheffield@entirefm.com" className="underline">sheffield@entirefm.com</a>
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

export default ElectricalSheffield;
