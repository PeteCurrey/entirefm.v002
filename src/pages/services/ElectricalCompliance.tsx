import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { FAQSection } from "@/components/shared/FAQSection";
import { SidebarCTA } from "@/components/shared/SidebarCTA";
import { ServiceSchema, FAQSchema } from "@/components/shared/SchemaMarkup";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { useConversionTracking } from "@/hooks/useConversionTracking";
import { Download, Zap, AlertTriangle, FileCheck, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/tech-dashboard.jpg";
import { RegionalServiceIndex } from "@/components/shared/RegionalServiceIndex";

const ElectricalCompliance = () => {
  const { trackProposalRequest, trackDownload } = useConversionTracking();

  const faqs = [
    {
      question: "How often is an EICR required?",
      answer: "Typically every 3–5 years depending on building use and insurer requirements. High-risk environments like hospitals or industrial facilities may require more frequent testing."
    },
    {
      question: "Can you test overnight or weekends?",
      answer: "Yes — we schedule testing around your business operations to minimise disruption. Many of our clients prefer out-of-hours testing for critical facilities."
    },
    {
      question: "Do you handle remedials as well as testing?",
      answer: "Yes. We fix issues identified during testing — not just list them. Our engineers resolve C1, C2, and C3 defects with rapid deployment and transparent pricing."
    },
    {
      question: "What is the difference between C1, C2, and C3 codes?",
      answer: "C1 indicates immediate danger requiring urgent action. C2 means potentially dangerous and requires urgent remedial work. C3 is an improvement recommendation that should be addressed during future work."
    },
    {
      question: "Is thermal imaging included in EICR testing?",
      answer: "Thermal imaging is available as an additional service to identify hot spots, overloaded circuits, and potential failure points before they cause problems."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Electrical Compliance & EICR Testing Services | EntireFM</title>
        <meta 
          name="description" 
          content="BS 7671 certified EICR testing, thermal imaging and electrical remedials. Protect people, uptime, and legal accountability across commercial estates." 
        />
        <link rel="canonical" href="https://entirefm.com/services/electrical-compliance" />
      </Helmet>

      <ServiceSchema 
        name="Electrical Compliance & EICR Testing Services"
        description="BS 7671 certified testing, thermal imaging and remedials that protect people, uptime, and legal accountability across commercial estates."
        provider="EntireFM"
        areaServed="United Kingdom"
      />

      <FAQSchema faqs={faqs} />

      <BreadcrumbSchema 
        items={[
          { label: "Services", href: "/services" },
          { label: "Electrical Compliance & EICR Testing" }
        ]}
      />

      {/* Hero Section */}
      <section 
        className="relative h-[60vh] min-h-[500px] flex items-center justify-center text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-light mb-6">
            Electrical Compliance & EICR Testing Services
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light max-w-3xl mx-auto">
            BS 7671 certified testing, thermal imaging and remedials that protect people, uptime, and legal accountability across commercial estates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={() => trackProposalRequest('electrical_compliance_hero')}
              className="text-lg"
            >
              Request EICR Survey
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => trackDownload('electrical_compliance_hero')}
              className="text-lg bg-background/10 backdrop-blur-sm border-white/20 text-white hover:bg-background/20"
            >
              <Download className="mr-2 h-5 w-5" />
              Download BS 7671 Testing Guide
            </Button>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 py-12">
        <Breadcrumb 
          items={[
            { label: "Services", href: "/services" },
            { label: "Electrical Compliance & EICR Testing" }
          ]}
        />

        <div className="grid lg:grid-cols-3 gap-12 mt-8">
          <div className="lg:col-span-2 space-y-12">
            {/* Electrical Safety Foundation */}
            <section>
              <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                Electrical Safety — The Foundation of Every Safe Building
              </h2>
              <div className="space-y-4 text-muted-foreground font-light leading-relaxed">
                <p>
                  Electrical systems silently run everything. When they fail — the consequences are explosive:
                </p>
                <div className="grid sm:grid-cols-2 gap-4 my-6">
                  <div className="flex items-start gap-3 p-4 border border-destructive/20 rounded-lg bg-destructive/5">
                    <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-foreground">Fire risk</p>
                      <p className="text-sm mt-1">Faulty wiring causes thousands of fires annually</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 border border-destructive/20 rounded-lg bg-destructive/5">
                    <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-foreground">Fatal electric shock</p>
                      <p className="text-sm mt-1">Direct threat to life from poor maintenance</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 border border-destructive/20 rounded-lg bg-destructive/5">
                    <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-foreground">Operational shutdown</p>
                      <p className="text-sm mt-1">Business continuity destroyed by failures</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 border border-destructive/20 rounded-lg bg-destructive/5">
                    <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-foreground">Criminal liability</p>
                      <p className="text-sm mt-1">Under Electricity at Work Regulations</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 border border-destructive/20 rounded-lg bg-destructive/5">
                    <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-foreground">Insurance refusal</p>
                      <p className="text-sm mt-1">Claims denied without valid EICR certification</p>
                    </div>
                  </div>
                </div>
                <div className="bg-primary/5 p-6 rounded-lg border border-primary/20">
                  <p className="text-lg font-medium text-foreground">
                    Our role? Prevent. Prove. Protect.
                  </p>
                  <p className="text-foreground mt-2">
                    Every asset. Every test. Every certificate.
                  </p>
                </div>
              </div>
            </section>

            {/* Complete Electrical Compliance Services */}
            <section>
              <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                Complete Electrical Compliance Services
              </h2>
              <div className="space-y-4 text-muted-foreground font-light leading-relaxed">
                <p className="text-lg mb-4">Aligned to BS 7671 and the Electricity at Work Regulations 1989</p>
                
                <p className="text-lg font-medium text-foreground mb-4">We deliver:</p>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3 p-4 border border-border rounded-lg hover:border-primary/50 transition-colors">
                    <Zap className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-foreground">EICR (Fixed Wire Testing)</p>
                      <p className="text-sm">Comprehensive electrical installation condition reports</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-4 border border-border rounded-lg hover:border-primary/50 transition-colors">
                    <Zap className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-foreground">Thermal Imaging & Load Analysis</p>
                      <p className="text-sm">Predict failures before they occur</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-4 border border-border rounded-lg hover:border-primary/50 transition-colors">
                    <Zap className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-foreground">Distribution Board Integrity</p>
                      <p className="text-sm">Panel safety and capacity verification</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-4 border border-border rounded-lg hover:border-primary/50 transition-colors">
                    <Zap className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-foreground">Protective Device Performance</p>
                      <p className="text-sm">RCD, MCB, and RCBO testing</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-4 border border-border rounded-lg hover:border-primary/50 transition-colors">
                    <Zap className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-foreground">Earthing & Bonding Verification</p>
                      <p className="text-sm">Critical safety system checks</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-4 border border-border rounded-lg hover:border-primary/50 transition-colors">
                    <Zap className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-foreground">Surge Protection Compliance</p>
                      <p className="text-sm">BS 7671:2018 Amendment 2 requirements</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-4 border border-border rounded-lg hover:border-primary/50 transition-colors sm:col-span-2">
                    <Zap className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-foreground">Electrical Design & Upgrade Services</p>
                      <p className="text-sm">Future-proofing and capacity enhancements</p>
                    </div>
                  </div>
                </div>
                
                <p className="text-lg font-medium text-foreground mt-6">
                  Testing scheduled around your business — zero disruption.
                </p>
              </div>
            </section>

            {/* Remedials: Risk Eliminated Fast */}
            <section>
              <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                Remedials: Risk Eliminated Fast
              </h2>
              <div className="space-y-4 text-muted-foreground font-light leading-relaxed">
                <p className="text-lg mb-6">
                  We don't hand over problems — we resolve them.
                </p>
                
                <div className="space-y-4">
                  <div className="p-6 border-l-4 border-destructive bg-destructive/5 rounded-r-lg">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-destructive flex items-center justify-center flex-shrink-0">
                        <span className="text-destructive-foreground font-bold">C1</span>
                      </div>
                      <div>
                        <p className="font-medium text-foreground text-lg mb-2">Immediate Danger</p>
                        <p>Fixed immediately — no delays. Life safety cannot wait.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6 border-l-4 border-orange-500 bg-orange-500/5 rounded-r-lg">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold">C2</span>
                      </div>
                      <div>
                        <p className="font-medium text-foreground text-lg mb-2">Urgent Remedial Need</p>
                        <p>Rapid deployment — typically within 24-48 hours. Potentially dangerous conditions addressed immediately.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6 border-l-4 border-yellow-500 bg-yellow-500/5 rounded-r-lg">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-yellow-500 flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold">C3</span>
                      </div>
                      <div>
                        <p className="font-medium text-foreground text-lg mb-2">Recommendations</p>
                        <p>Budgeted and planned — improvement opportunities for future work cycles.</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <p className="text-lg font-medium text-foreground mt-6">
                  Every defect is actioned — not ignored.
                </p>
              </div>
            </section>

            {/* Digital Compliance Governance */}
            <section>
              <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                Digital Compliance Governance
              </h2>
              <div className="space-y-4 text-muted-foreground font-light leading-relaxed">
                <p>Our platform maintains:</p>
                
                <div className="grid sm:grid-cols-2 gap-4 my-6">
                  <div className="flex items-start gap-3 p-4 border border-border rounded-lg">
                    <FileCheck className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-foreground">Digital Certificates</p>
                      <p className="text-sm">EICR reports accessible 24/7</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-4 border border-border rounded-lg">
                    <FileCheck className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-foreground">Photo-Based Evidence</p>
                      <p className="text-sm">Visual documentation of all defects</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-4 border border-border rounded-lg">
                    <FileCheck className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-foreground">Remedial Logs</p>
                      <p className="text-sm">Lifecycle tracking from discovery to resolution</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-4 border border-border rounded-lg">
                    <FileCheck className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-foreground">KPI Compliance Dashboard</p>
                      <p className="text-sm">Real-time compliance status visibility</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-4 border border-border rounded-lg sm:col-span-2">
                    <FileCheck className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-foreground">Renewal Alerts</p>
                      <p className="text-sm">Automated notifications before certificates expire</p>
                    </div>
                  </div>
                </div>
                
                <p className="text-lg font-medium text-foreground">
                  Governance you can show to insurers, auditors and HSE — anytime.
                </p>
              </div>
            </section>

            {/* Sectors We Support */}
            <section>
              <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                Sectors We Support
              </h2>
              <div className="space-y-4 text-muted-foreground font-light leading-relaxed">
                <p className="mb-4">Built for high-demand environments:</p>
                <div className="grid sm:grid-cols-2 gap-3">
                  <div className="p-4 border border-border rounded-lg flex items-center gap-3">
                    <Shield className="w-5 h-5 text-primary flex-shrink-0" />
                    <p className="font-medium text-foreground">Corporate workplaces</p>
                  </div>
                  <div className="p-4 border border-border rounded-lg flex items-center gap-3">
                    <Shield className="w-5 h-5 text-primary flex-shrink-0" />
                    <p className="font-medium text-foreground">Retail & hospitality</p>
                  </div>
                  <div className="p-4 border border-border rounded-lg flex items-center gap-3">
                    <Shield className="w-5 h-5 text-primary flex-shrink-0" />
                    <p className="font-medium text-foreground">PBSA & residential operators</p>
                  </div>
                  <div className="p-4 border border-border rounded-lg flex items-center gap-3">
                    <Shield className="w-5 h-5 text-primary flex-shrink-0" />
                    <p className="font-medium text-foreground">Logistics & industrial</p>
                  </div>
                  <div className="p-4 border border-border rounded-lg flex items-center gap-3 sm:col-span-2">
                    <Shield className="w-5 h-5 text-primary flex-shrink-0" />
                    <p className="font-medium text-foreground">Healthcare & public sector</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Case Study Highlights */}
            <section>
              <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                Case Study Highlights
              </h2>
              <div className="space-y-4">
                <div className="p-6 border border-border rounded-lg">
                  <h3 className="text-xl font-medium mb-2">Industrial Operations</h3>
                  <p className="text-muted-foreground font-light">
                    120-circuit EICR delivered with zero production interruption.
                  </p>
                </div>
                <div className="p-6 border border-border rounded-lg">
                  <h3 className="text-xl font-medium mb-2">PBSA Estate</h3>
                  <p className="text-muted-foreground font-light">
                    30+ buildings — 100% compliance restored in 3 weeks.
                  </p>
                </div>
                <div className="p-6 border border-border rounded-lg">
                  <h3 className="text-xl font-medium mb-2">Retail District</h3>
                  <p className="text-muted-foreground font-light">
                    Thermal imaging prevented a major panel failure pre-Christmas rush.
                  </p>
                </div>
              </div>
            </section>

            {/* FAQ Section */}
            {/* Regional Service Index */}
            <RegionalServiceIndex 
              serviceName="Electrical Compliance"
              serviceSlug="electrical"
            />

            <FAQSection faqs={faqs} />

            {/* Final CTA */}
            <section className="bg-primary/5 p-8 rounded-lg border border-primary/20">
              <h2 className="text-2xl font-light mb-4">
                Your business relies on electricity every second. Make sure it's safe, compliant, and future-proof.
              </h2>
              <p className="text-muted-foreground mb-6">
                📩 hello@entirefm.com
              </p>
              <Button 
                size="lg"
                onClick={() => trackProposalRequest('electrical_compliance_bottom')}
              >
                Request EICR Survey
              </Button>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-8">
              <SidebarCTA />
            </div>
          </aside>
        </div>
      </div>
    </>
  );
};

export default ElectricalCompliance;