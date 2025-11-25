import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { FAQSection } from "@/components/shared/FAQSection";
import { SidebarCTA } from "@/components/shared/SidebarCTA";
import { ServiceSchema, FAQSchema } from "@/components/shared/SchemaMarkup";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { useConversionTracking } from "@/hooks/useConversionTracking";
import { Download, Shield, AlertTriangle, FileCheck } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/industrial-facility.jpg";
import { RelatedServices } from "@/components/seo/RelatedServices";
import { ComplianceDetails } from "@/components/seo/ComplianceDetails";
import { KnowledgeCentreCTA } from "@/components/shared/KnowledgeCentreCTA";
import { DualCTA } from "@/components/shared/DualCTA";

const FireSafety = () => {
  const { trackProposalRequest, trackDownload } = useConversionTracking();

  const faqs = [
    {
      question: "Who is the Responsible Person under the Fire Safety Order?",
      answer: "Typically the building owner, employer, or managing agent — we support full execution of their duties under the Regulatory Reform (Fire Safety) Order 2005."
    },
    {
      question: "How often do fire alarms need testing?",
      answer: "Weekly user testing plus periodic servicing determined by BS 5839. We provide comprehensive testing schedules tailored to your system type (L1-L5)."
    },
    {
      question: "Can you provide multi-system compliance under one contract?",
      answer: "Yes — that is our default approach. We integrate fire alarms, emergency lighting, extinguishers, sprinklers, and passive systems under unified governance."
    },
    {
      question: "What happens if defects are found during inspection?",
      answer: "Every defect receives a risk code, costed proposal, and rapid resolution pathway. We reduce fire risk, not just record it."
    },
    {
      question: "Do you provide emergency callout services?",
      answer: "Yes. Our engineers provide 24/7 emergency attendance across the UK with rapid response times for critical fire safety failures."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Fire Safety Compliance & Testing | BS 5839, BS 5266 | EntireFM</title>
        <meta 
          name="description" 
          content="Expert fire alarm testing, emergency lighting, sprinklers & fire risk assessments. BS 5839, BS 5266 & BS 5306 compliant. Nationwide coverage with 24/7 emergency response." 
        />
        <meta name="keywords" content="fire safety compliance, fire alarm testing BS 5839, emergency lighting testing, fire risk assessment, AOV systems, fire dampers, fire safety engineering, commercial fire protection" />
        <link rel="canonical" href="https://entirefm.com/services/fire-safety" />
      </Helmet>

      <ServiceSchema 
        name="Fire Safety & Life Protection Services"
        description="Certified fire compliance across alarms, extinguishers, emergency lighting, passive systems and evacuation infrastructure — fully aligned with UK safety legislation."
        provider="EntireFM"
        areaServed="United Kingdom"
      />

      <FAQSchema faqs={faqs} />

      <BreadcrumbSchema 
        items={[
          { label: "Services", href: "/services" },
          { label: "Fire Safety & Life Protection" }
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
            Fire Safety Compliance & Life Protection Systems
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light max-w-3xl mx-auto">
            BS 5839 fire alarm testing, BS 5266 emergency lighting, BS 5306 extinguisher maintenance, sprinkler systems and fire risk assessments. Weekly testing, annual certification & 24/7 emergency response nationwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={() => trackProposalRequest('fire_safety_hero')}
              className="text-lg"
            >
              Request Fire Compliance Audit
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => trackDownload('fire_safety_hero')}
              className="text-lg bg-background/10 backdrop-blur-sm border-white/20 text-white hover:bg-background/20"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Fire Risk Assessment Guide
            </Button>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 py-12">
        <Breadcrumb 
          items={[
            { label: "Services", href: "/services" },
            { label: "Fire Safety & Life Protection" }
          ]}
        />

        <div className="grid lg:grid-cols-3 gap-12 mt-8">
          <div className="lg:col-span-2 space-y-12">
            {/* Fire Compliance Isn't Optional */}
            <section>
              <h2 className="text-3xl font-light mb-6">
                Fire Safety Compliance Under UK Law
              </h2>
              <div className="space-y-4 text-muted-foreground font-light leading-relaxed">
                <p>
                  The Regulatory Reform (Fire Safety) Order 2005 places legal accountability on building owners, employers and managing agents. Fire safety compliance isn't optional—regulators and insurers expect certified evidence through BS 5839 fire alarm testing, BS 5266 emergency lighting inspections, and documented fire risk assessments. Without accredited compliance:
                </p>
                <div className="grid sm:grid-cols-2 gap-4 my-6">
                  <div className="flex items-start gap-3 p-4 border border-destructive/20 rounded-lg bg-destructive/5">
                    <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-foreground">Directors face personal prosecution</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 border border-destructive/20 rounded-lg bg-destructive/5">
                    <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-foreground">Fire brigades can enforce closure</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 border border-destructive/20 rounded-lg bg-destructive/5">
                    <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-foreground">Insurers refuse claims</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 border border-destructive/20 rounded-lg bg-destructive/5">
                    <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-foreground">Lives are put at risk</p>
                    </div>
                  </div>
                </div>
                <p className="text-lg font-medium text-foreground">
                  We deliver full compliance certainty.
                </p>
              </div>
            </section>

            {/* Complete Fire Protection Services */}
            <section>
              <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                Complete Fire Protection Services
              </h2>
              <div className="space-y-4 text-muted-foreground font-light leading-relaxed">
                <p className="text-lg mb-4">Aligned with:</p>
                <ul className="list-disc list-inside space-y-2 mb-6">
                  <li>Regulatory Reform (Fire Safety) Order 2005</li>
                  <li>BS 5839, BS 5306, BS 5266, BS EN 12845</li>
                </ul>
                
                <p className="text-lg font-medium text-foreground mb-4">We deliver and certify:</p>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  <Link to="/services/fire-alarms" className="flex items-start gap-3 p-4 border border-border rounded-lg hover:border-primary/50 transition-colors group">
                    <Shield className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-foreground group-hover:text-primary transition-colors">Fire Alarms</p>
                      <p className="text-sm">BS 5839 testing & certification</p>
                    </div>
                  </Link>
                  
                  <Link to="/services/emergency-lighting" className="flex items-start gap-3 p-4 border border-border rounded-lg hover:border-primary/50 transition-colors group">
                    <Shield className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-foreground group-hover:text-primary transition-colors">Emergency Lighting</p>
                      <p className="text-sm">BS 5266 compliance</p>
                    </div>
                  </Link>
                  
                  <div className="flex items-start gap-3 p-4 border border-border rounded-lg">
                    <Shield className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-foreground">Fire Extinguishers</p>
                      <p className="text-sm">BS 5306 maintenance</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-4 border border-border rounded-lg">
                    <Shield className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-foreground">Fire Doors & Passive Systems</p>
                      <p className="text-sm">Compartmentation integrity</p>
                    </div>
                  </div>
                  
                  <Link to="/services/sprinklers" className="flex items-start gap-3 p-4 border border-border rounded-lg hover:border-primary/50 transition-colors group">
                    <Shield className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-foreground group-hover:text-primary transition-colors">Sprinklers & Suppression</p>
                      <p className="text-sm">BS EN 12845 systems</p>
                    </div>
                  </Link>
                  
                  <div className="flex items-start gap-3 p-4 border border-border rounded-lg">
                    <Shield className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-foreground">Dry & Wet Risers</p>
                      <p className="text-sm">Firefighting infrastructure</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-4 border border-border rounded-lg">
                    <Shield className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-foreground">Fire Risk Assessments</p>
                      <p className="text-sm">Regulatory compliance audits</p>
                    </div>
                  </div>
                </div>
                
                <p className="text-lg font-medium text-foreground mt-6">
                  Every system. One responsible supplier.
                </p>
              </div>
            </section>

            {/* Digital Compliance & Audit Governance */}
            <section>
              <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                Digital Compliance & Audit Governance
              </h2>
              <div className="space-y-4 text-muted-foreground font-light leading-relaxed">
                <p>Compliance visibility through our platform:</p>
                
                <div className="grid sm:grid-cols-2 gap-4 my-6">
                  <div className="flex items-start gap-3 p-4 border border-border rounded-lg">
                    <FileCheck className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-foreground">Live Asset Logs</p>
                      <p className="text-sm">Real-time tracking of all fire assets</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-4 border border-border rounded-lg">
                    <FileCheck className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-foreground">Photo Evidence</p>
                      <p className="text-sm">Visual defect documentation</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-4 border border-border rounded-lg">
                    <FileCheck className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-foreground">Instant Certifications</p>
                      <p className="text-sm">PDF certificates on demand</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-4 border border-border rounded-lg">
                    <FileCheck className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-foreground">Renewal Alerts</p>
                      <p className="text-sm">Automated compliance reminders</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-4 border border-border rounded-lg sm:col-span-2">
                    <FileCheck className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-foreground">Audit Pack Exports</p>
                      <p className="text-sm">Complete documentation for insurers & fire officers</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-primary/5 p-6 rounded-lg border border-primary/20">
                  <p className="text-lg font-medium text-foreground">
                    Nothing lost. Nothing forgotten. Nothing late.
                  </p>
                </div>
              </div>
            </section>

            {/* Remedials Resolved Fast */}
            <section>
              <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                Remedials Resolved Fast
              </h2>
              <div className="space-y-4 text-muted-foreground font-light leading-relaxed">
                <p>Every defect identified during <Link to="/fm-operations/ppm-delivery" className="text-primary hover:underline">PPM delivery</Link> gets:</p>
                <div className="space-y-3 my-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-medium">✓</span>
                    </div>
                    <p className="font-medium text-foreground">Risk code</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-medium">✓</span>
                    </div>
                    <p className="font-medium text-foreground">Costed proposal</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-medium">✓</span>
                    </div>
                    <p className="font-medium text-foreground">Rapid resolution</p>
                  </div>
                </div>
                <p className="text-lg font-medium text-foreground">
                  We reduce fire risk — not just record it.
                </p>
              </div>
            </section>

            {/* Nationwide Service */}
            <section>
              <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                Nationwide Service with Local Response Teams
              </h2>
              <div className="space-y-4 text-muted-foreground font-light leading-relaxed">
                <p>Engineers across the UK deliver:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Routine maintenance</li>
                  <li>Emergency attendance</li>
                  <li>Regulatory compliance support</li>
                </ul>
                <p className="text-lg font-medium text-foreground mt-4">
                  Local presence. National capability.
                </p>
              </div>
            </section>

            {/* Sector Experience */}
            <section>
              <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                Sector Experience That Matters
              </h2>
              <div className="space-y-4 text-muted-foreground font-light leading-relaxed">
                <p>We protect:</p>
                <div className="grid sm:grid-cols-2 gap-3 my-4">
                  <div className="p-3 border border-border rounded">Corporate offices</div>
                  <div className="p-3 border border-border rounded">Retail & public venues</div>
                  <div className="p-3 border border-border rounded">PBSA & universities</div>
                  <div className="p-3 border border-border rounded">Logistics & industrial</div>
                  <div className="p-3 border border-border rounded">Healthcare & care sector</div>
                  <div className="p-3 border border-border rounded">Hospitality & leisure</div>
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
                  <h3 className="text-xl font-medium mb-2">Case Study #1 – Retail Compliance Renewal</h3>
                  <p className="text-muted-foreground font-light">
                    Full asset upgrade. Zero downtime. Audit success.
                  </p>
                </div>
                <div className="p-6 border border-border rounded-lg">
                  <h3 className="text-xl font-medium mb-2">Case Study #2 – PBSA Risk Reduction</h3>
                  <p className="text-muted-foreground font-light">
                    Evacuation safety uplift delivered in 3 weeks.
                  </p>
                </div>
              </div>
            </section>

            {/* E-E-A-T Compliance Authority Blocks */}
            <ComplianceDetails 
              serviceName="Fire Safety"
              legalFramework={[
                "Regulatory Reform (Fire Safety) Order 2005",
                "BS 5839-1:2017 (Fire detection and alarm systems)",
                "BS 5266-1:2016 (Emergency lighting)",
                "BS 5306-3:2017 (Fire extinguisher maintenance)",
                "BS EN 12845:2015 (Sprinkler systems)",
                "Building Regulations Approved Document B"
              ]}
              responsiblePerson="The Responsible Person (typically the building owner, employer, or managing agent)"
              consequences={[
                "Unlimited fines and up to 2 years imprisonment for serious breaches",
                "Prohibition notices forcing immediate building closure",
                "Insurance claims rejected due to non-compliance",
                "Personal liability for directors and duty holders",
                "Corporate manslaughter charges in the event of fatalities",
                "HSE enforcement action and improvement notices",
                "Reputational damage and loss of business continuity"
              ]}
              testingFrequency="Fire alarms: Weekly user tests + quarterly/bi-annual servicing (BS 5839) | Emergency lighting: Monthly function tests + annual 3-hour duration tests (BS 5266) | Fire extinguishers: Annual servicing + 5-year extended service (BS 5306) | Sprinklers: Weekly/monthly checks + annual full system test"
              whatWeInspect={[
                "Fire alarm control panel functionality and fault diagnostics",
                "All smoke, heat and manual call point devices tested individually",
                "Emergency lighting battery capacity and illumination levels",
                "Fire extinguisher pressure, seals, signage and accessibility",
                "Sprinkler pump operation, valve positioning and water flow tests",
                "Fire door closer mechanisms, intumescent strips and signage",
                "AOV (automatic opening vent) smoke control systems",
                "Fire damper operation within ductwork and ventilation",
                "Dry/wet riser inlet connections and pressure testing",
                "Emergency evacuation signage and wayfinding compliance",
                "Fire risk assessment recommendations and remedial actions",
                "Digital compliance records with photographic evidence"
              ]}
            />

            {/* Silo-Aware Related Services */}
            <RelatedServices currentUrl="/services/fire-safety" />

            {/* FAQ Section */}
            <FAQSection faqs={faqs} />

            {/* Final CTA */}
            <section className="bg-primary/5 p-8 rounded-lg border border-primary/20">
              <h2 className="text-2xl font-light mb-4">
                Remedy risks before they become incidents.
              </h2>
              <p className="text-muted-foreground mb-6">
                📩 hello@entirefm.com
              </p>
              <Button 
                size="lg"
                onClick={() => trackProposalRequest('fire_safety_bottom')}
              >
                Request Fire Compliance Audit
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

export default FireSafety;