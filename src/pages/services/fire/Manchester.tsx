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

const FireManchester = () => {
  const { trackPhoneClick, trackDownload, trackProposalRequest } = useConversionTracking();

  const faqs = [
    {
      question: "What fire alarm testing is required for Manchester PBSA developments?",
      answer: "Manchester's high concentration of student accommodation requires BS 5839 Category L1 systems with weekly call point testing, monthly full-system verification, and quarterly battery checks. Landlords must maintain detailed log books, and all faults must be rectified within 24 hours due to sleeping risk. EntireFM provides dedicated PBSA compliance packages with priority response across Greater Manchester."
    },
    {
      question: "How does Manchester's older building stock affect fire compliance?",
      answer: "Commercial density and older building stock in Manchester city centre increase compliance priority. Many Victorian and Edwardian commercial buildings require retrospective fire alarm installations and upgraded detection technology. Our Manchester engineers are experienced in integrating modern BS 5839 systems into historic structures while meeting current regulatory standards and conservation requirements."
    },
    {
      question: "What documentation is required for fire alarm compliance in Manchester hotels?",
      answer: "Manchester hospitality venues must demonstrate comprehensive fire safety management including current fire risk assessments, BS 5839 certification, complete test log books, staff training records, and evacuation procedures. All systems require weekly testing, monthly maintenance, and annual third-party certification. EntireFM provides turnkey compliance packages specifically designed for Manchester's hospitality sector."
    }
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Fire Alarm Compliance Services - Manchester",
    "description": "Professional fire alarm testing, certification and compliance management across Greater Manchester. BS 5839 accredited engineers available 24/7 for statutory testing and urgent remedials.",
    "provider": {
      "@type": "Organization",
      "name": "EntireFM"
    },
    "areaServed": "Manchester, UK",
    "serviceType": "Fire Safety Compliance"
  };

  return (
    <>
      <Helmet>
        <title>Fire Safety Compliance in Manchester | Local Testing & Statutory Compliance | EntireFM</title>
        <meta name="description" content="Protect people, operations, and legal responsibility across Greater Manchester. Statutory fire alarm testing, BS 5839 certification & urgent remedials for PBSA, hospitality and commercial sites." />
        <link rel="canonical" href="https://entirefm.com/services/fire-safety" />
      </Helmet>

      <SchemaMarkup schema={serviceSchema} />
      <BreadcrumbSchema items={[
        { label: "Fire Compliance", href: "/services/fire-alarms" },
        { label: "Manchester" }
      ]} />
      <LocalBusinessSchema
        name="EntireFM Manchester - Fire Compliance"
        address={{
          street: "Manchester Office",
          city: "Manchester",
          postalCode: "M1 1AA",
          country: "UK"
        }}
      />

      {/* Hero Section - Full Screen */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-destructive/90 via-destructive/80 to-background/90 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2070&auto=format&fit=crop')`,
          }}
          aria-label="Advanced fire alarm panel maintenance in Manchester commercial property"
        />
        
        <div className="relative z-20 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-light text-white mb-6 tracking-tight">
            Fire Alarm Compliance Services – Manchester
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto font-light">
            Protect people, operations, and legal responsibility across Greater Manchester.<br />
            Statutory testing, certification & urgent remedials — handled with zero excuses.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary" 
              className="text-lg"
              onClick={() => trackProposalRequest('fire-manchester-hero')}
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
        { label: "Manchester" }
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
                  Commercial density and older building stock across Greater Manchester increase the priority for 
                  proactive fire compliance. From high-occupancy PBSA developments in the Oxford Road corridor to 
                  historic hospitality venues in the Northern Quarter, EntireFM delivers BS 5839-compliant testing 
                  that protects both lives and your licensing status.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our Manchester-based engineers execute weekly call point tests, monthly sounder verifications, 
                  quarterly battery assessments, and comprehensive annual certifications. Every test generates 
                  traceable evidence that satisfies licensing authorities, insurers, and Greater Manchester Fire 
                  and Rescue Service inspections.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <Card className="p-6">
                  <Shield className="h-10 w-10 text-destructive mb-4" />
                  <h3 className="text-xl font-medium mb-2">BS 5839 Certified Testing</h3>
                  <p className="text-muted-foreground">
                    All Manchester engineers hold current third-party accreditation with specialist knowledge of PBSA and hospitality requirements.
                  </p>
                </Card>
                <Card className="p-6">
                  <FileCheck className="h-10 w-10 text-destructive mb-4" />
                  <h3 className="text-xl font-medium mb-2">Licensing Support</h3>
                  <p className="text-muted-foreground">
                    Complete documentation packages that satisfy council licensing requirements and demonstrate responsible person competency.
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
                Manchester's hospitality and PBSA sectors demand immediate fault resolution due to sleeping risk 
                and licensing conditions. Our engineers carry diagnostic equipment and replacement components to 
                resolve common issues on the first visit. Root-cause analysis prevents repeat failures, and all 
                remedial work is certified to BS 5839 standards.
              </p>
              
              <div className="bg-muted/50 border-l-4 border-destructive p-6 rounded-r-lg">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="h-6 w-6 text-destructive flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium mb-2">Priority Response for Sleeping Risk</h3>
                    <p className="text-muted-foreground">
                      PBSA and hotel faults are prioritized with 4-hour response across Greater Manchester. We implement 
                      temporary mitigations immediately and fast-track permanent repairs to maintain continuous compliance.
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
                Multi-site Manchester portfolios need unified visibility. EntireFM's cloud-based compliance dashboard 
                provides real-time status across your entire Greater Manchester estate. View test schedules, download 
                certificates, track remedial progress, and generate licensing reports from any device.
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
                  <h3 className="font-medium mb-2">Licensing Documentation</h3>
                  <p className="text-sm text-muted-foreground">
                    Export compliance reports formatted for council submissions
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
                Local Manchester engineers available around the clock for urgent fire alarm issues. Sleeping risk 
                faults prioritized with 4-hour response across Greater Manchester.
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
                Sectors We Protect in Manchester
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Manchester's diverse commercial landscape requires sector-specific fire compliance expertise. From 
                high-density PBSA to heritage hospitality venues and modern logistics operations, we understand the 
                regulatory pressures unique to Greater Manchester.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <Link to="/sectors/residential-pbsa" className="group">
                  <Card className="p-6 hover:shadow-lg transition-all">
                    <Building2 className="h-8 w-8 text-destructive mb-3" />
                    <h3 className="text-xl font-medium mb-2 group-hover:text-destructive transition-colors">
                      PBSA & Student Housing
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      L1 system requirements, enhanced landlord duties, and priority fault response for sleeping risk environments
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
                      Hotels, restaurants and entertainment venues with complex licensing requirements and voice alarm systems
                    </p>
                  </Card>
                </Link>

                <Link to="/sectors/retail-service-stations" className="group">
                  <Card className="p-6 hover:shadow-lg transition-all">
                    <Building2 className="h-8 w-8 text-destructive mb-3" />
                    <h3 className="text-xl font-medium mb-2 group-hover:text-destructive transition-colors">
                      Retail & Commercial
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      High street retail and shopping centres with public access and integrated suppression systems
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
                      Multi-tenant buildings with phased evacuation protocols and disabled refuge integration
                    </p>
                  </Card>
                </Link>
              </div>
            </section>

            {/* Local Coverage */}
            <section className="bg-muted/30 p-8 rounded-lg">
              <h2 className="text-3xl font-light mb-6">Greater Manchester Coverage</h2>
              <p className="text-lg text-muted-foreground mb-6">
                EntireFM provides fire compliance services across Greater Manchester with rapid response capabilities 
                to major commercial, hospitality, and PBSA zones:
              </p>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-destructive" />
                  <span>Trafford Park</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-destructive" />
                  <span>Salford Quays</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-destructive" />
                  <span>Airport City</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-destructive" />
                  <span>Northern Quarter</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-destructive" />
                  <span>Oxford Road Corridor</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-destructive" />
                  <span>Spinningfields</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-destructive" />
                  <span>MediaCityUK</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-destructive" />
                  <span>Ancoats</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-destructive" />
                  <span>Stockport</span>
                </div>
              </div>
            </section>

            {/* FAQs */}
            <FAQSection faqs={faqs} />

            <LocationCaseStudies location="manchester" />

            <RelatedServices
              services={[
                { title: "Fire Alarm Systems", description: "Comprehensive BS 5839 fire detection and alarm compliance", link: "/services/fire-safety" },
                { title: "Emergency Lighting", description: "BS 5266 evacuation lighting testing", link: "/services/emergency-lighting" },
                { title: "PPM Delivery", description: "Structured fire system preventive maintenance", link: "/fm-operations/ppm-delivery" }
              ]}
              title="Related Fire Safety Services"
            />

            <KnowledgeCentreCTA />

            {/* Final CTA */}
            <Card className="p-8 bg-gradient-to-br from-destructive/10 to-background border-destructive/20">
              <h2 className="text-3xl font-light mb-4">Book Your Fire Compliance Audit</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Speak with our Manchester fire compliance specialists to schedule a site assessment and receive 
                a detailed compliance roadmap with no-obligation pricing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" onClick={() => trackProposalRequest('fire-manchester-footer')}>
                  Request Proposal
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => trackPhoneClick()}
                >
                  Call Manchester Team
                </Button>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Email: <a href="mailto:manchester@entirefm.com" className="text-destructive hover:underline">manchester@entirefm.com</a>
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

export default FireManchester;