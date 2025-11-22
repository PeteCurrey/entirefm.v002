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

const ElectricalManchester = () => {
  const { trackDownload } = useConversionTracking();

  const faqs = [
    {
      question: "How often does a PBSA need EICR?",
      answer: "Student accommodation requires EICR testing every 5 years minimum, with enhanced requirements for HMOs and PBSA developments. Many operators schedule more frequent inspections to maintain continuous licensing compliance."
    },
    {
      question: "Do you handle remedials too?",
      answer: "Yes — priority. All C1/C2 defects receive immediate attention with same-day or next-day resolution to maintain student safety and licensing compliance."
    }
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Commercial Electrical Compliance Services - Manchester",
    "description": "Student accommodations, major commercial estates and fast-growth infrastructure. BS 7671 EICR testing for Manchester PBSA and industrial estates.",
    "provider": {
      "@type": "Organization",
      "name": "EntireFM"
    },
    "areaServed": "Manchester, UK",
    "serviceType": "Electrical Safety Compliance"
  };

  return (
    <>
      <Helmet>
        <title>Commercial Electrical Compliance Manchester | EICR Testing & PBSA Safety</title>
        <meta name="description" content="EICR testing for Manchester PBSA, Trafford Park industrial, and Salford Quays commercial estates. Protect student accommodation fire safety and business operations." />
        <link rel="canonical" href="https://entirefm.com/electrical/manchester" />
      </Helmet>

      <SchemaMarkup schema={serviceSchema} />
      <BreadcrumbSchema items={[
        { label: "Electrical Services", href: "/services/electrical" },
        { label: "Manchester" }
      ]} />
      <LocalBusinessSchema
        name="EntireFM Manchester - Electrical Compliance"
        address={{
          street: "Manchester Office",
          city: "Manchester",
          postalCode: "M1 1AA",
          country: "UK"
        }}
      />

      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-background/90 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop')`,
          }}
          aria-label="Commercial electrical testing in Manchester PBSA facility"
        />
        
        <div className="relative z-20 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-light text-white mb-6 tracking-tight">
            Commercial Electrical Compliance – Manchester
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto font-light">
            Student accommodations, major commercial estates and fast-growth infrastructure require robust electrical compliance.
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
        { label: "Manchester" }
      ]} />

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-16">
            
            <section>
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">
                Why Manchester Risk Is Higher
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Student accommodations, major commercial estates and fast-growth infrastructure = complex and ageing networks under strain.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Non-compliance here risks:
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Fire and safety breaches</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Operational shutdown</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Insurance refusal</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Student accommodation licensing failures</span>
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">
                What We Deliver
              </h2>
              <div className="prose prose-lg max-w-none">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Full BS 7671 EICR</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Fault elimination + load balancing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Evidence & traceability for insurers</span>
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">
                Remedials Without Delay
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Same-day urgent repairs where risk is present.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Clear categorisation (C1/C2/C3/FI)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Immediate resolution for dangerous conditions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Operational uptime protected</span>
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">
                Digital Audit-Ready Data
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Every asset logged. Every fault resolved. Zero paper chase.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="p-6">
                    <FileCheck className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-medium mb-2">Digital Archive</h3>
                    <p className="text-muted-foreground">Every certificate digitally archived</p>
                  </Card>
                  <Card className="p-6">
                    <Clock className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-medium mb-2">Instant Access</h3>
                    <p className="text-muted-foreground">Client portal with 24/7 documentation access</p>
                  </Card>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">
                Sectors Covered
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Card className="p-6">
                  <Building2 className="h-8 w-8 text-primary mb-3" />
                  <h3 className="text-lg font-medium mb-2">PBSA</h3>
                  <p className="text-sm text-muted-foreground">Student accommodation safety</p>
                </Card>
                <Card className="p-6">
                  <Building2 className="h-8 w-8 text-primary mb-3" />
                  <h3 className="text-lg font-medium mb-2">Trafford Park Industrial</h3>
                  <p className="text-sm text-muted-foreground">Large-scale logistics compliance</p>
                </Card>
                <Card className="p-6">
                  <Building2 className="h-8 w-8 text-primary mb-3" />
                  <h3 className="text-lg font-medium mb-2">Salford Quays Commercial</h3>
                  <p className="text-sm text-muted-foreground">Corporate office electrical safety</p>
                </Card>
                <Card className="p-6">
                  <Building2 className="h-8 w-8 text-primary mb-3" />
                  <h3 className="text-lg font-medium mb-2">Hospitality</h3>
                  <p className="text-sm text-muted-foreground">Hotels and leisure venues</p>
                </Card>
              </div>
            </section>

            <section className="bg-muted/30 p-8 rounded-lg">
              <h2 className="text-3xl font-light mb-6">Coverage</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Serving: City Centre, Trafford, Didsbury, Bury, Stockport, Airport City.
              </p>
              <Card className="p-6 bg-background">
                <p className="text-lg mb-4">
                  <strong>Email:</strong> <a href="mailto:manchester@entirefm.com" className="text-primary hover:underline">manchester@entirefm.com</a>
                </p>
                <Button size="lg" asChild>
                  <Link to="/contact">Book Commercial EICR</Link>
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
                Email: <a href="mailto:manchester@entirefm.com" className="underline">manchester@entirefm.com</a>
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

export default ElectricalManchester;
