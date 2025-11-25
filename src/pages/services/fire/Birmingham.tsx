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
import { SchemaMarkup, ServiceSchema, LocalBusinessSchema } from "@/components/shared/SchemaMarkup";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { useConversionTracking } from "@/hooks/useConversionTracking";
import { LocationCaseStudies } from "@/components/shared/LocationCaseStudies";
import { KnowledgeCentreCTA } from "@/components/shared/KnowledgeCentreCTA";
import { RelatedServices } from "@/components/shared/RelatedServices";

const FireBirmingham = () => {
  const { trackPhoneClick, trackDownload, trackProposalRequest } = useConversionTracking();

  const faqs = [
    {
      question: "What fire alarm systems are required for Birmingham warehouses?",
      answer: "Birmingham logistics and warehouse facilities typically require BS 5839 Category L2 or L3 systems depending on sleeping risk and building height. Large open-plan areas often need beam detection, and integration with sprinkler systems is mandatory for certain storage classifications. All systems must have annual third-party certification and quarterly maintenance schedules."
    },
    {
      question: "How do recent West Midlands enforcement actions affect Birmingham businesses?",
      answer: "Recent enforcement activity by West Midlands Fire Service has highlighted increased scrutiny on manufacturing and logistics sites, particularly around inadequate testing records and delayed remedials. Birmingham businesses must demonstrate proactive compliance with complete log books, evidence of competent person oversight, and immediate fault resolution to avoid prohibition notices."
    },
    {
      question: "Who certifies fire alarm compliance for Birmingham commercial premises?",
      answer: "Only engineers holding current BS 5839 competency can certify fire alarm systems in Birmingham. EntireFM's West Midlands team are all third-party accredited and familiar with local authority expectations, ensuring your certification withstands Fire Service inspections and insurer audits without challenge."
    }
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Fire Alarm Compliance Services - Birmingham",
    "description": "Professional fire alarm testing, certification and compliance management across Birmingham and West Midlands. BS 5839 accredited engineers available 24/7 for statutory testing and urgent remedials.",
    "provider": {
      "@type": "Organization",
      "name": "EntireFM"
    },
    "areaServed": "Birmingham, UK",
    "serviceType": "Fire Safety Compliance"
  };

  return (
    <>
      <Helmet>
        <title>Fire Safety Compliance in Birmingham | Local Testing & Statutory Compliance | EntireFM</title>
        <meta name="description" content="Protect people, operations, and legal responsibility across Birmingham and the West Midlands. Statutory fire alarm testing, BS 5839 certification & urgent remedials — handled with zero excuses." />
        <link rel="canonical" href="https://entirefm.com/services/fire-safety" />
      </Helmet>

      <SchemaMarkup schema={serviceSchema} />
      <BreadcrumbSchema items={[
        { label: "Fire Compliance", href: "/services/fire-alarms" },
        { label: "Birmingham" }
      ]} />
      <LocalBusinessSchema
        name="EntireFM Birmingham - Fire Compliance"
        address={{
          street: "Birmingham Office",
          city: "Birmingham",
          postalCode: "B1 1AA",
          country: "UK"
        }}
      />

      {/* Hero Section - Full Screen */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-destructive/90 via-destructive/80 to-background/90 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1582139329536-e7284fece509?q=80&w=2070&auto=format&fit=crop')`,
          }}
          aria-label="Fire safety detection system in Birmingham industrial facility"
        />
        
        <div className="relative z-20 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-light text-white mb-6 tracking-tight">
            Fire Alarm Compliance Services – Birmingham
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto font-light">
            Protect people, operations, and legal responsibility across the West Midlands.<br />
            Statutory testing, certification & urgent remedials — handled with zero excuses.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary" 
              className="text-lg"
              onClick={() => trackProposalRequest('fire-birmingham-hero')}
            >
              Request a Fire Compliance Audit
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg border-white text-white hover:bg-white hover:text-destructive"
              onClick={() => trackDownload('fire-safety-checklist')}
            >
              <Download className="mr-2 h-5 w-5" />
              Download Fire Safety Checklist
            </Button>
          </div>
        </div>
      </section>

      <Breadcrumb items={[
        { label: "Fire Compliance", href: "/services/fire-alarms" },
        { label: "Birmingham" }
      ]} />

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-16">
            
            {/* Life-Safety Compliance Section */}
            <section>
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">
                Life-Safety Compliance with Audit-Ready Evidence
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Recent enforcement actions in the West Midlands highlight the critical importance of proactive fire 
                  compliance. Birmingham's diverse commercial landscape — from advanced manufacturing in the automotive 
                  supply chain to large-scale logistics operations serving the NEC corridor — demands rigorous adherence 
                  to BS 5839 standards.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  EntireFM's Birmingham team delivers statutory testing that protects both your workforce and your 
                  operational license. We execute weekly call point tests, monthly system verifications, quarterly 
                  battery assessments, and comprehensive annual certifications with documentation that satisfies the 
                  most demanding Fire Service inspections.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <Card className="p-6">
                  <Shield className="h-10 w-10 text-destructive mb-4" />
                  <h3 className="text-xl font-medium mb-2">BS 5839 Certified Testing</h3>
                  <p className="text-muted-foreground">
                    West Midlands engineers with current third-party accreditation and deep knowledge of local enforcement patterns.
                  </p>
                </Card>
                <Card className="p-6">
                  <FileCheck className="h-10 w-10 text-destructive mb-4" />
                  <h3 className="text-xl font-medium mb-2">Enforcement Defence Preparation</h3>
                  <p className="text-muted-foreground">
                    Complete documentation packages that demonstrate responsible person competency and proactive risk management.
                  </p>
                </Card>
              </div>
            </section>

            {/* Remedials Section */}
            <section>
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">
                Remedials Closed Fast
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Birmingham's manufacturing and logistics sectors cannot tolerate extended downtime for fire system 
                faults. Our engineers diagnose root causes immediately and carry replacement components to resolve 
                common issues on the first visit. Where specialist parts are required, we implement temporary 
                mitigations and fast-track procurement with same-day West Midlands delivery.
              </p>
              
              <div className="bg-muted/50 border-l-4 border-destructive p-6 rounded-r-lg">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="h-6 w-6 text-destructive flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium mb-2">No "Waiting for Quotes" Culture</h3>
                    <p className="text-muted-foreground">
                      We fix and certify on the spot. Root-cause identification prevents repeat failures, and all 
                      remedial work is certified to the same BS 5839 standard as your statutory testing — protecting 
                      both safety and cost efficiency.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Single Source of Truth */}
            <section>
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">
                Single Source of Truth
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Multi-site Birmingham portfolios need unified visibility. EntireFM's cloud-based compliance dashboard 
                provides real-time status across your entire West Midlands estate. View test schedules, download 
                certificates, track remedial progress, and generate audit reports from any device.
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6 text-center">
                  <Clock className="h-8 w-8 text-destructive mx-auto mb-3" />
                  <h3 className="font-medium mb-2">Live Compliance Status</h3>
                  <p className="text-sm text-muted-foreground">
                    Instant dashboard showing upcoming tests and overdue actions
                  </p>
                </Card>
                <Card className="p-6 text-center">
                  <FileCheck className="h-8 w-8 text-destructive mx-auto mb-3" />
                  <h3 className="font-medium mb-2">Photo Evidence</h3>
                  <p className="text-sm text-muted-foreground">
                    Timestamped images of all tests and equipment conditions
                  </p>
                </Card>
                <Card className="p-6 text-center">
                  <CheckCircle className="h-8 w-8 text-destructive mx-auto mb-3" />
                  <h3 className="font-medium mb-2">Closed-Loop Reporting</h3>
                  <p className="text-sm text-muted-foreground">
                    Traceable records from test to remedial to certification
                  </p>
                </Card>
              </div>
            </section>

            {/* 24/7 Callout Box */}
            <Card className="bg-destructive text-white p-8 border-none">
              <div className="flex items-center gap-4 mb-4">
                <Phone className="h-10 w-10" />
                <h3 className="text-2xl font-medium">24/7 Emergency Response</h3>
              </div>
              <p className="text-lg mb-4 text-white/90">
                Local Birmingham engineers available around the clock for urgent fire alarm issues. System failure, 
                fault conditions, or authority notices — we respond within 2 hours across the West Midlands.
              </p>
              <Button 
                variant="secondary" 
                size="lg"
                onClick={() => trackPhoneClick()}
              >
                Call Emergency Helpdesk
              </Button>
            </Card>

            {/* Sectors Section */}
            <section>
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">
                Sectors We Protect in Birmingham
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Birmingham's industrial strength demands sector-specific fire compliance expertise. From automotive 
                supply chain manufacturing to large-scale retail distribution and advanced logistics operations, 
                we understand the regulatory pressures unique to the West Midlands economy.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <Link to="/sectors/industrial-logistics" className="group">
                  <Card className="p-6 hover:shadow-lg transition-all">
                    <Building2 className="h-8 w-8 text-destructive mb-3" />
                    <h3 className="text-xl font-medium mb-2 group-hover:text-destructive transition-colors">
                      Logistics & Manufacturing
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Large-scale warehousing, automotive supply chain, and advanced manufacturing with specialist detection systems
                    </p>
                  </Card>
                </Link>

                <Link to="/sectors/retail-service-stations" className="group">
                  <Card className="p-6 hover:shadow-lg transition-all">
                    <Building2 className="h-8 w-8 text-destructive mb-3" />
                    <h3 className="text-xl font-medium mb-2 group-hover:text-destructive transition-colors">
                      Retail & Distribution
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      High-street retail, shopping centres, and regional distribution hubs with integrated suppression systems
                    </p>
                  </Card>
                </Link>

                <Link to="/sectors/offices-corporate" className="group">
                  <Card className="p-6 hover:shadow-lg transition-all">
                    <Building2 className="h-8 w-8 text-destructive mb-3" />
                    <h3 className="text-xl font-medium mb-2 group-hover:text-destructive transition-colors">
                      Corporate Offices
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      City centre commercial buildings with multi-tenant voice alarm systems and phased evacuation protocols
                    </p>
                  </Card>
                </Link>

                <Link to="/sectors/residential-pbsa" className="group">
                  <Card className="p-6 hover:shadow-lg transition-all">
                    <Building2 className="h-8 w-8 text-destructive mb-3" />
                    <h3 className="text-xl font-medium mb-2 group-hover:text-destructive transition-colors">
                      Residential & PBSA
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Student accommodation and multi-occupancy housing with L1 system requirements and enhanced landlord duties
                    </p>
                  </Card>
                </Link>
              </div>
            </section>

            {/* Local Coverage */}
            <section className="bg-muted/30 p-8 rounded-lg">
              <h2 className="text-3xl font-light mb-6">Birmingham & West Midlands Coverage</h2>
              <p className="text-lg text-muted-foreground mb-6">
                EntireFM provides fire compliance services across Birmingham and the wider West Midlands with rapid 
                response capabilities to major commercial and industrial zones:
              </p>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-destructive" />
                  <span>Birmingham City Centre</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-destructive" />
                  <span>Solihull</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-destructive" />
                  <span>Sutton Coldfield</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-destructive" />
                  <span>Digbeth</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-destructive" />
                  <span>NEC Corridor</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-destructive" />
                  <span>Erdington</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-destructive" />
                  <span>Castle Bromwich</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-destructive" />
                  <span>Longbridge</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-destructive" />
                  <span>Wolverhampton</span>
                </div>
              </div>
            </section>

            {/* FAQs */}
            <FAQSection faqs={faqs} />

            {/* Final CTA */}
            <Card className="p-8 bg-gradient-to-br from-destructive/10 to-background border-destructive/20">
              <h2 className="text-3xl font-light mb-4">Book Your Fire Compliance Audit</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Speak with our Birmingham fire compliance specialists to schedule a site assessment and receive 
                a detailed compliance roadmap with no-obligation pricing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" onClick={() => trackProposalRequest('fire-birmingham-footer')}>
                  Request Proposal
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => trackPhoneClick()}
                >
                  Call Birmingham Team
                </Button>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Email: <a href="mailto:birmingham@entirefm.com" className="text-destructive hover:underline">birmingham@entirefm.com</a>
              </p>
            </Card>
          </div>

          {/* Sidebar */}
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

export default FireBirmingham;