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

const FireLondon = () => {
  const { trackPhoneClick, trackDownload, trackProposalRequest } = useConversionTracking();

  const faqs = [
    {
      question: "How often must fire alarms be tested in London offices?",
      answer: "Under BS 5839-1, fire alarm systems in London offices require weekly call point testing, monthly alarm sounders verification, quarterly battery checks, and a full annual inspection by a competent third party. The Responsible Person must maintain detailed log books and ensure all tests are documented with corrective actions tracked to closure."
    },
    {
      question: "What are BS 5839 requirements for London landlords?",
      answer: "London landlords must ensure fire alarm systems meet BS 5839 standards, including category and grade appropriate to the building type. This includes commissioning certification, routine maintenance schedules, and immediate remedial action for any faults. Under the Fire Safety Order 2005, landlords face prosecution if systems are not maintained to statutory standards."
    },
    {
      question: "Who is legally responsible for fire alarm compliance in London?",
      answer: "The 'Responsible Person' under the Regulatory Reform (Fire Safety) Order 2005 is legally accountable - typically the building owner, employer, or facilities manager. This person must ensure risk assessments are current, systems are tested to BS 5839, and all records are audit-ready. Failure to comply can result in unlimited fines and imprisonment."
    }
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Fire Alarm Compliance Services - London",
    "description": "Professional fire alarm testing, certification and compliance management across Greater London. BS 5839 accredited engineers available 24/7 for statutory testing and urgent remedials.",
    "provider": {
      "@type": "Organization",
      "name": "EntireFM"
    },
    "areaServed": "London, UK",
    "serviceType": "Fire Safety Compliance"
  };

  return (
    <>
      <Helmet>
        <title>Fire Safety Compliance in London | Local Testing & Statutory Compliance | EntireFM</title>
        <meta name="description" content="Protect people, operations, and legal responsibility across Greater London. Statutory fire alarm testing, BS 5839 certification & urgent remedials — handled with zero excuses by local engineers." />
        <link rel="canonical" href="https://entirefm.com/services/fire-safety" />
      </Helmet>

      <SchemaMarkup schema={serviceSchema} />
      <BreadcrumbSchema items={[
        { label: "Fire Compliance", href: "/services/fire-alarms" },
        { label: "London" }
      ]} />
      <LocalBusinessSchema
        name="EntireFM London - Fire Compliance"
        address={{
          street: "London Office",
          city: "London",
          postalCode: "EC1A 1BB",
          country: "UK"
        }}
      />

      {/* Hero Section - Full Screen */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-destructive/90 via-destructive/80 to-background/90 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=2070&auto=format&fit=crop')`,
          }}
          aria-label="Modern fire alarm control panel installation in London commercial building"
        />
        
        <div className="relative z-20 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-light text-white mb-6 tracking-tight">
            Fire Alarm Compliance Services – London
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto font-light">
            Protect people, operations, and legal responsibility across Greater London.<br />
            Statutory testing, certification & urgent remedials — handled with zero excuses.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary" 
              className="text-lg"
              onClick={() => trackProposalRequest('fire-london-hero')}
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
        { label: "London" }
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
                  London's high-density commercial environment demands absolute compliance with fire safety legislation. 
                  From the financial district of Canary Wharf to the retail corridors of Oxford Street, EntireFM delivers 
                  BS 5839-compliant testing that protects both lives and your legal standing.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our local London engineers execute weekly call point tests, monthly sounder verifications, quarterly 
                  battery assessments, and comprehensive annual certifications. Every test generates traceable evidence 
                  that satisfies insurers, fire authorities, and HSE inspections without exception.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <Card className="p-6">
                  <Shield className="h-10 w-10 text-destructive mb-4" />
                  <h3 className="text-xl font-medium mb-2">BS 5839 Certified Testing</h3>
                  <p className="text-muted-foreground">
                    All engineers hold current BS 5839 competency with London-specific system knowledge across L1-L5 categories.
                  </p>
                </Card>
                <Card className="p-6">
                  <FileCheck className="h-10 w-10 text-destructive mb-4" />
                  <h3 className="text-xl font-medium mb-2">Responsible Person Support</h3>
                  <p className="text-muted-foreground">
                    Complete duty-holder assistance including risk assessments, log book management, and enforcement defence preparation.
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
                When faults are identified during testing, London sites cannot afford delays. Our engineers carry 
                diagnostic equipment and common replacement parts to resolve issues immediately. Root-cause analysis 
                prevents repeat failures, and all remedial work is certified to the same BS 5839 standard as your 
                statutory testing.
              </p>
              
              <div className="bg-muted/50 border-l-4 border-destructive p-6 rounded-r-lg">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="h-6 w-6 text-destructive flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium mb-2">No "Waiting for Quotes" Culture</h3>
                    <p className="text-muted-foreground">
                      We fix and certify on the spot. If specialist parts are required, we log temporary mitigations 
                      and fast-track procurement with priority London delivery. Your compliance window stays intact.
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
                EntireFM's cloud-based compliance dashboard provides London decision-makers with real-time visibility 
                across your entire portfolio. View test status, download certificates, track remedial progress, and 
                generate audit reports from any device.
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
                Local London engineers available around the clock for urgent fire alarm issues. System failure, 
                fault conditions, or authority notices — we respond within 2 hours across Greater London.
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
                Sectors We Protect in London
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Our London fire compliance specialists understand the unique regulatory pressures across different 
                commercial environments, from sleeping risk in PBSA to high-occupancy retail and mission-critical 
                data centres.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <Link to="/sectors/retail-service-stations" className="group">
                  <Card className="p-6 hover:shadow-lg transition-all">
                    <Building2 className="h-8 w-8 text-destructive mb-3" />
                    <h3 className="text-xl font-medium mb-2 group-hover:text-destructive transition-colors">
                      Retail & Forecourts
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Public-access environments with complex detector zoning and integrated suppression systems
                    </p>
                  </Card>
                </Link>

                <Link to="/sectors/industrial-logistics" className="group">
                  <Card className="p-6 hover:shadow-lg transition-all">
                    <Building2 className="h-8 w-8 text-destructive mb-3" />
                    <h3 className="text-xl font-medium mb-2 group-hover:text-destructive transition-colors">
                      Logistics & Industrial
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Large-scale warehousing with beam detection, smoke venting, and sprinkler integration
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
                      Sleeping risk compliance with L1 systems, weekly landlord checks, and rapid fault response
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
                      Multi-tenant buildings with phased evacuation, disabled refuge integration, and voice alarm systems
                    </p>
                  </Card>
                </Link>

                <Link to="/sectors/hospitality-leisure" className="group">
                  <Card className="p-6 hover:shadow-lg transition-all">
                    <Building2 className="h-8 w-8 text-destructive mb-3" />
                    <h3 className="text-xl font-medium mb-2 group-hover:text-destructive transition-colors">
                      Hospitality & Leisure
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Hotels, restaurants and entertainment venues with complex occupancy patterns and licensing requirements
                    </p>
                  </Card>
                </Link>

                <Link to="/sectors/aviation-travel-hub" className="group">
                  <Card className="p-6 hover:shadow-lg transition-all">
                    <Building2 className="h-8 w-8 text-destructive mb-3" />
                    <h3 className="text-xl font-medium mb-2 group-hover:text-destructive transition-colors">
                      Aviation & Transport
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Critical infrastructure with CAA compliance, continuous operation requirements, and security integration
                    </p>
                  </Card>
                </Link>
              </div>
            </section>

            {/* Local Coverage */}
            <section className="bg-muted/30 p-8 rounded-lg">
              <h2 className="text-3xl font-light mb-6">London Coverage</h2>
              <p className="text-lg text-muted-foreground mb-6">
                EntireFM provides fire compliance services across all Greater London boroughs with rapid response 
                capabilities to high-density commercial zones:
              </p>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-destructive" />
                  <span>City of London</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-destructive" />
                  <span>Westminster</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-destructive" />
                  <span>Canary Wharf</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-destructive" />
                  <span>Croydon</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-destructive" />
                  <span>Stratford</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-destructive" />
                  <span>Heathrow Corridor</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-destructive" />
                  <span>Wembley</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-destructive" />
                  <span>Kings Cross</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-destructive" />
                  <span>Shoreditch</span>
                </div>
              </div>
            </section>

            {/* FAQs */}
            <FAQSection faqs={faqs} />

            <LocationCaseStudies location="london" />

            <RelatedServices
              services={[
                { title: "Fire Alarm Systems", description: "Comprehensive BS 5839 fire detection and alarm compliance", link: "/services/fire-safety" },
                { title: "Emergency Lighting", description: "BS 5266 evacuation lighting testing", link: "/services/emergency-lighting" },
                { title: "PPM Delivery", description: "Structured fire system preventive maintenance", link: "/fm-operations/ppm-delivery" },
                { title: "Reactive Maintenance", description: "24/7 emergency fire system response", link: "/fm-operations/reactive-maintenance" }
              ]}
              title="Related Fire Safety Services"
            />

            <KnowledgeCentreCTA />

            {/* Final CTA */}
            <Card className="p-8 bg-gradient-to-br from-destructive/10 to-background border-destructive/20">
              <h2 className="text-3xl font-light mb-4">Book Your Fire Compliance Audit</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Speak with our London fire compliance specialists to schedule a site assessment and receive 
                a detailed compliance roadmap with no-obligation pricing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" onClick={() => trackProposalRequest('fire-london-footer')}>
                  Request Proposal
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => trackPhoneClick()}
                >
                  Call London Team
                </Button>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Email: <a href="mailto:london@entirefm.com" className="text-destructive hover:underline">london@entirefm.com</a>
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

export default FireLondon;