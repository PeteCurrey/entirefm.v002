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
      question: "How often should EICRs be done in London commercial properties?",
      answer: "London commercial properties require EICR (Electrical Installation Condition Report) testing every 5 years as a minimum under BS 7671. However, high-risk environments including retail, hospitality, and industrial sites often need more frequent inspections. Landlords of rented commercial premises must provide valid EICRs to tenants, and insurers typically require current certification."
    },
    {
      question: "What is the difference between C1, C2 and C3 electrical codes?",
      answer: "C1 codes indicate 'Danger Present' requiring immediate remedial action before continued use. C2 codes are 'Potentially Dangerous' requiring urgent attention to prevent danger. C3 codes are 'Improvement Recommended' for enhanced safety but not immediately dangerous. EntireFM prioritizes C1/C2 remedials with same-day response across London to maintain continuous compliance."
    },
    {
      question: "What electrical systems does BS 7671 testing cover in London?",
      answer: "BS 7671 inspections cover all fixed electrical installations including distribution boards, wiring systems, earthing arrangements, RCD/RCBO protection, emergency lighting circuits, fire alarm power supplies, and electrical equipment connections. Testing includes visual inspection, continuity checks, insulation resistance, polarity verification, and earth fault loop impedance measurements."
    }
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Commercial Electrical Compliance Services - London",
    "description": "Professional EICR testing, fault resolution and safety certification for business-critical estates across London. BS 7671 compliant electrical inspections with immediate remedial response.",
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
        <meta name="description" content="EICR testing, fault resolution & safety certification for business-critical estates across London. BS 7671 compliant electrical inspections with immediate remedial response." />
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
            EICR testing, fault resolution & safety certification for business-critical estates across London.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary" 
              className="text-lg"
              onClick={() => trackProposalRequest('electrical-london-hero')}
            >
              Request an Electrical Compliance Survey
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg border-white text-white hover:bg-white hover:text-primary"
              onClick={() => trackDownload('eicr-requirements-checklist')}
            >
              <Download className="mr-2 h-5 w-5" />
              Download EICR Requirements Checklist
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
            
            {/* Statutory Testing Section */}
            <section>
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">
                Statutory Electrical Testing & Safety (BS 7671)
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  London's business-critical estates demand absolute electrical safety compliance. From the financial 
                  district of Canary Wharf to high-density retail corridors and data centre infrastructure, EntireFM 
                  delivers BS 7671-compliant EICR testing that protects operations, people, and insurance coverage.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our London-based engineers conduct comprehensive electrical inspections including distribution board 
                  assessment, circuit testing, earth fault loop impedance measurement, RCD verification, and thermal 
                  imaging surveys. Every inspection generates C1/C2/C3 coded reports with clear remedial priorities 
                  and compliance certification accepted by insurers and regulatory authorities.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <Card className="p-6">
                  <Shield className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-medium mb-2">BS 7671 Certified Inspections</h3>
                  <p className="text-muted-foreground">
                    All London engineers hold current 18th Edition qualifications with ARC fault protection expertise.
                  </p>
                </Card>
                <Card className="p-6">
                  <FileCheck className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-medium mb-2">Shutdown Minimisation</h3>
                  <p className="text-muted-foreground">
                    Out-of-hours testing schedules protect operational uptime for business-critical London sites.
                  </p>
                </Card>
              </div>
            </section>

            {/* Audit-Ready Documentation */}
            <section>
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">
                Audit-Ready Documentation
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                London portfolios require unified electrical compliance visibility. EntireFM's digital certification 
                platform provides instant access to EICR reports, thermal imaging results, and remedial tracking. 
                Export compliance packages formatted for insurer audits, HSE inspections, and tenant obligations.
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6 text-center">
                  <Clock className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="font-medium mb-2">Digital Certificates</h3>
                  <p className="text-sm text-muted-foreground">
                    Instant EICR downloads with QR verification codes
                  </p>
                </Card>
                <Card className="p-6 text-center">
                  <FileCheck className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="font-medium mb-2">Evidence Trail</h3>
                  <p className="text-sm text-muted-foreground">
                    Photo documentation of all defects and remedials
                  </p>
                </Card>
                <Card className="p-6 text-center">
                  <CheckCircle className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="font-medium mb-2">Client Portal</h3>
                  <p className="text-sm text-muted-foreground">
                    Real-time compliance status across entire estate
                  </p>
                </Card>
              </div>
            </section>

            {/* Remedials Section */}
            <section>
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">
                Remedials Without Delay
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                C1 and C2 defects identified during London EICR inspections receive immediate attention. Our engineers 
                carry diagnostic equipment and replacement components to resolve dangerous conditions on first visit. 
                Where specialist parts are required, we implement temporary safety mitigations and fast-track permanent 
                repairs with priority London delivery.
              </p>
              
              <div className="bg-muted/50 border-l-4 border-primary p-6 rounded-r-lg">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium mb-2">Clear Scoring: C1/C2 Urgent Repairs + Improvement Actions</h3>
                    <p className="text-muted-foreground">
                      Every defect is categorized with clear risk classification. C1 dangers are isolated immediately, 
                      C2 faults are scheduled within 48 hours, and C3 improvements are planned during next maintenance 
                      window. No ambiguity, no compliance gaps.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 24/7 Response Box */}
            <Card className="bg-primary text-white p-8 border-none">
              <div className="flex items-center gap-4 mb-4">
                <Phone className="h-10 w-10" />
                <h3 className="text-2xl font-medium">24/7 Electrical Emergency Response</h3>
              </div>
              <p className="text-lg mb-4 text-white/90">
                Local London electrical engineers available around the clock for critical faults, power failures, 
                and emergency isolations. 2-hour response across Greater London for business-critical sites.
              </p>
              <Button 
                variant="secondary" 
                size="lg"
                onClick={() => trackPhoneClick()}
              >
                Call Emergency Helpdesk
              </Button>
            </Card>

            {/* Local Response Network */}
            <section className="bg-muted/30 p-8 rounded-lg">
              <h2 className="text-3xl font-light mb-6">Local Response Network</h2>
              <p className="text-lg text-muted-foreground mb-6">
                EntireFM provides electrical compliance services across all Greater London boroughs with specialist 
                focus on high-density commercial zones requiring minimal operational disruption:
              </p>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                {['City of London', 'Canary Wharf', 'Westminster', 'Croydon', 'Wembley', 'Heathrow Corridor', 'Stratford', 'Kings Cross', 'Shoreditch'].map(area => (
                  <div key={area} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>{area}</span>
                  </div>
                ))}
              </div>
            </section>

            <FAQSection faqs={faqs} />
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
