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
  Phone,
  Download,
  CheckCircle
} from "lucide-react";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { SidebarCTA } from "@/components/shared/SidebarCTA";
import { FAQSection } from "@/components/shared/FAQSection";
import { SchemaMarkup, LocalBusinessSchema } from "@/components/shared/SchemaMarkup";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { useConversionTracking } from "@/hooks/useConversionTracking";

const ElectricalLondon = () => {
  const { trackPhoneClick, trackDownload, trackProposalRequest } = useConversionTracking();

  const faqs = [
    {
      question: "How often do commercial properties in London need an EICR?",
      answer: "Typically every 3–5 years depending on use, occupancy and insurer requirements."
    },
    {
      question: "What's the difference between C1, C2 and C3 codes?",
      answer: "C1 = immediate danger; C2 = urgent remedial need; C3 = recommended enhancement. We resolve all non-compliant categories."
    },
    {
      question: "Who is responsible for electrical safety in workplaces?",
      answer: "The Responsible Person or duty holder. We support full legal compliance on their behalf."
    }
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Commercial Electrical Compliance Services - London",
    "description": "EICR testing, fault remediation and certification that protects operations, assets and legal responsibility across London.",
    "provider": {
      "@type": "Organization",
      "name": "EntireFM"
    },
    "areaServed": "London, UK",
    "serviceType": "Electrical Safety Compliance"
  };

  return (
    <>
      <Helmet>
        <title>Commercial Electrical Compliance London | EICR Testing & BS 7671 Certification</title>
        <meta name="description" content="EICR testing, fault remediation and certification that protects operations, assets and legal responsibility across London. BS 7671 compliant electrical inspections." />
        <link rel="canonical" href="https://entirefm.com/electrical/london" />
      </Helmet>

      <SchemaMarkup schema={serviceSchema} />
      <BreadcrumbSchema items={[
        { label: "Electrical Services", href: "/services/electrical" },
        { label: "London" }
      ]} />
      <LocalBusinessSchema
        name="EntireFM London - Electrical Compliance"
        address={{
          street: "London Office",
          city: "London",
          postalCode: "EC1A 1BB",
          country: "UK"
        }}
      />

      {/* Hero Section - Full Screen */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-background/90 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2070&auto=format&fit=crop')`,
          }}
          aria-label="Commercial electrical distribution board inspection in London office building"
        />
        
        <div className="relative z-20 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-light text-white mb-6 tracking-tight">
            Commercial Electrical Compliance – London
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto font-light">
            EICR testing, fault remediation and certification that protects operations, assets and legal responsibility across London.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary" 
              className="text-lg"
              asChild
            >
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
        { label: "London" }
      ]} />

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-16">
            
            {/* Why Electrical Compliance Matters */}
            <section>
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">
                Protect People, Operations & Insurance Cover
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  In a city where high-rise density, ageing infrastructure and 24/7 operations create elevated electrical risk, compliance isn't optional — it's business-critical.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Electrical failures lead directly to:
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
                    <span className="text-muted-foreground">Criminal liability for Responsible Persons</span>
                  </li>
                </ul>
                <p className="text-lg text-muted-foreground leading-relaxed font-medium">
                  We ensure none of that ever lands on your desk.
                </p>
              </div>
            </section>

            {/* Statutory Testing Section */}
            <section>
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">
                BS 7671 Inspection & EICR Testing
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Our electrical engineers complete:
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Fixed-wire testing (EICR)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Thermal imaging & load assessment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Distribution board inspections</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Earth bonding verification</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Remedial actions & certification</span>
                  </li>
                </ul>
                <p className="text-muted-foreground mb-6">
                  Frequency guided by BS 7671, building use and asset risk profile.
                </p>
                <p className="text-lg font-medium text-foreground">
                  We don't just test — we resolve compliance risk.
                </p>
              </div>
            </section>

            {/* Remedials Section */}
            <section>
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">
                Zero Delays. Zero Excuses.
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Every observation receives:
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
                <p className="text-muted-foreground mb-4">
                  No chasing. No downtime. No uncertainty.
                </p>
                <p className="text-lg font-medium text-foreground">
                  Operational uptime protected — always.
                </p>
              </div>
            </section>

            {/* Digital Evidence */}
            <section>
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">
                Compliance Documentation Without Paperwork Pain
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Through our secure client platform:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="p-6">
                    <FileCheck className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-medium mb-2">Digital Archive</h3>
                    <p className="text-muted-foreground">
                      Every certificate is digitally archived
                    </p>
                  </Card>
                  <Card className="p-6">
                    <FileCheck className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-medium mb-2">Photo Evidence</h3>
                    <p className="text-muted-foreground">
                      Photos and notes support every test
                    </p>
                  </Card>
                  <Card className="p-6">
                    <Clock className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-medium mb-2">Live Scoring</h3>
                    <p className="text-muted-foreground">
                      Live compliance scoring and renewal alerts
                    </p>
                  </Card>
                  <Card className="p-6">
                    <Download className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-medium mb-2">Instant Exports</h3>
                    <p className="text-muted-foreground">
                      Instant audit exports for insurers and HSE
                    </p>
                  </Card>
                </div>
                <p className="text-lg font-medium text-foreground mt-6">
                  Governance with total visibility.
                </p>
              </div>
            </section>

            {/* Sectors */}
            <section>
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">
                Expertise in Complex Environments
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Card className="p-6">
                  <Building2 className="h-8 w-8 text-primary mb-3" />
                  <h3 className="text-lg font-medium mb-2">Corporate Offices</h3>
                  <p className="text-sm text-muted-foreground">
                    High-rise compliance across London's financial district
                  </p>
                </Card>
                <Card className="p-6">
                  <Building2 className="h-8 w-8 text-primary mb-3" />
                  <h3 className="text-lg font-medium mb-2">Retail & Public Venues</h3>
                  <p className="text-sm text-muted-foreground">
                    High-footfall electrical safety certification
                  </p>
                </Card>
                <Card className="p-6">
                  <Building2 className="h-8 w-8 text-primary mb-3" />
                  <h3 className="text-lg font-medium mb-2">PBSA & Universities</h3>
                  <p className="text-sm text-muted-foreground">
                    Student accommodation electrical compliance
                  </p>
                </Card>
                <Card className="p-6">
                  <Building2 className="h-8 w-8 text-primary mb-3" />
                  <h3 className="text-lg font-medium mb-2">Logistics & Industrial</h3>
                  <p className="text-sm text-muted-foreground">
                    Distribution centre electrical systems
                  </p>
                </Card>
                <Card className="p-6">
                  <Building2 className="h-8 w-8 text-primary mb-3" />
                  <h3 className="text-lg font-medium mb-2">Hospitality & Event Venues</h3>
                  <p className="text-sm text-muted-foreground">
                    24/7 operational electrical safety
                  </p>
                </Card>
              </div>
            </section>

            {/* Local Coverage */}
            <section className="bg-muted/30 p-8 rounded-lg">
              <h2 className="text-3xl font-light mb-6">Fast Response Across Greater London</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Serving: City of London, Westminster, Canary Wharf, Croydon, Wembley, Stratford, Heathrow corridor.
              </p>
              <p className="text-muted-foreground mb-6">
                Local compliance support with national backing.
              </p>
              <Card className="p-6 bg-background">
                <p className="text-lg mb-4">
                  <strong>Email:</strong> <a href="mailto:london@entirefm.com" className="text-primary hover:underline">london@entirefm.com</a>
                </p>
                <Button size="lg" asChild>
                  <Link to="/contact">Request an EICR Survey</Link>
                </Button>
              </Card>
            </section>

            <FAQSection faqs={faqs} />

            {/* Footer CTA */}
            <section className="bg-primary text-white p-12 rounded-lg text-center">
              <h2 className="text-3xl font-light mb-4">Protect Your Business. Request an EICR Today.</h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <Button size="lg" variant="secondary" asChild>
                  <Link to="/contact">Book Electrical Compliance Survey</Link>
                </Button>
              </div>
              <p className="mt-6 text-white/90">
                Email: <a href="mailto:london@entirefm.com" className="underline">london@entirefm.com</a>
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

export default ElectricalLondon;
