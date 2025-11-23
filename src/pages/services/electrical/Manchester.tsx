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
      question: "How often should commercial buildings in Manchester undergo EICR testing?",
      answer: "Typically every 3–5 years depending on building use and insurer requirements. PBSA and HMO properties often require more frequent testing to maintain licensing compliance."
    },
    {
      question: "Can testing be done outside operating hours?",
      answer: "Yes — we schedule around your business to prevent disruption. We offer evening, weekend and out-of-hours testing for operational facilities."
    },
    {
      question: "Do you complete remedials as well?",
      answer: "Yes. All urgent risks are prioritised and resolved promptly. C1 issues are addressed immediately, C2 issues scheduled rapidly with transparent costs."
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
            EICR testing, fault remediation and certification across Manchester's commercial, PBSA and hospitality estates — zero downtime, zero excuses.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg" asChild>
              <Link to="/contact">Request an Electrical Compliance Audit</Link>
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
                Protect People, Property & Operations in Manchester
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  In a city with high student populations, large retail centres and older infrastructure in heavy daily use — electrical compliance is mission-critical.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Non-compliance risks:
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Fire & operational shutdown</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Insurance rejection for claims</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Criminal liability under Electricity at Work Regulations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Severe disruption to residents, guests & customers</span>
                  </li>
                </ul>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We ensure risk is controlled — and proven.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">
                BS 7671 Testing & EICR Certification
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  We deliver:
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Full fixed-wire testing (EICR)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Thermal imaging for early fault detection</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Surge protection and load balancing checks</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Distribution board inspection & labelling</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Earth bonding and protective device validation</span>
                  </li>
                </ul>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Testing scheduled around live operations — minimal disruption.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">
                Remedials Resolved Fast
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  We don't just hand you a list of problems — we fix them.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">C1 issues resolved immediately</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">C2 issues scheduled rapidly with transparent costs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">C3 recommendations included to future-proof estate</span>
                  </li>
                </ul>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Downtime reduced. Risk eliminated.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">
                Compliance Documentation Without Stress
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  We maintain:
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Digital EICR certification storage</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Asset-by-asset evidence trail</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Compliance score tracking</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Alerts for renewal cycles</span>
                  </li>
                </ul>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Audit-ready governance — without paperwork pain.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">
                Sectors We Protect in Manchester
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Card className="p-6">
                  <Building2 className="h-8 w-8 text-primary mb-3" />
                  <h3 className="text-lg font-medium mb-2">PBSA / University Estates</h3>
                  <p className="text-sm text-muted-foreground">Student accommodation and campus facilities</p>
                </Card>
                <Card className="p-6">
                  <Building2 className="h-8 w-8 text-primary mb-3" />
                  <h3 className="text-lg font-medium mb-2">Trafford Park Industrial & Logistics</h3>
                  <p className="text-sm text-muted-foreground">Large-scale distribution and manufacturing</p>
                </Card>
                <Card className="p-6">
                  <Building2 className="h-8 w-8 text-primary mb-3" />
                  <h3 className="text-lg font-medium mb-2">Hospitality & Entertainment</h3>
                  <p className="text-sm text-muted-foreground">Hotels, venues and leisure facilities</p>
                </Card>
                <Card className="p-6">
                  <Building2 className="h-8 w-8 text-primary mb-3" />
                  <h3 className="text-lg font-medium mb-2">Office & Corporate Estates</h3>
                  <p className="text-sm text-muted-foreground">Business parks and commercial offices</p>
                </Card>
                <Card className="p-6">
                  <Building2 className="h-8 w-8 text-primary mb-3" />
                  <h3 className="text-lg font-medium mb-2">Retail Clusters</h3>
                  <p className="text-sm text-muted-foreground">Including The Trafford Centre</p>
                </Card>
              </div>
            </section>

            <section className="bg-muted/30 p-8 rounded-lg">
              <h2 className="text-3xl font-light mb-6">Local Coverage</h2>
              <p className="text-lg text-muted-foreground mb-6">
                City Centre, Salford Quays, Trafford, Didsbury, Bury, Stockport, Airport City.
              </p>
              <Card className="p-6 bg-background">
                <p className="text-lg mb-4">
                  <strong>Email:</strong> <a href="mailto:manchester@entirefm.com" className="text-primary hover:underline">manchester@entirefm.com</a>
                </p>
                <Button size="lg" asChild>
                  <Link to="/contact">Request EICR Survey</Link>
                </Button>
              </Card>
            </section>

            <FAQSection faqs={faqs} />

            <section className="bg-primary text-white p-12 rounded-lg text-center">
              <h2 className="text-3xl font-light mb-4">Protect Compliance. Protect Operations. Protect People.</h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <Button size="lg" variant="secondary" asChild>
                  <Link to="/contact">Book Electrical Compliance Audit</Link>
                </Button>
              </div>
              <p className="mt-6 text-white/90">
                📩 <a href="mailto:manchester@entirefm.com" className="underline">manchester@entirefm.com</a>
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
