import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { ArrowRight, Anchor, AlertTriangle, FileText, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { ServiceSchema, FAQSchema } from "@/components/shared/SchemaMarkup";
import { FAQSection } from "@/components/shared/FAQSection";
import { SidebarCTA } from "@/components/shared/SidebarCTA";

const MansafeTesting = () => {
  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Mansafe Testing" }
  ];

  const faqs = [
    {
      question: "What is a mansafe system?",
      answer: "Mansafe systems are permanent fall arrest and fall restraint systems installed on roofs and elevated structures. They include wire rope systems, fixed anchors, and safety posts allowing safe maintenance access at height."
    },
    {
      question: "How often must mansafe systems be tested?",
      answer: "Annual inspection minimum under HSE guidance, with full load testing at intervals specified by manufacturer or competent person. High-use or exposed systems may require more frequent testing regimes."
    },
    {
      question: "What does mansafe testing involve?",
      answer: "Visual inspection, anchor load testing, wire rope integrity checks, post stability tests, connector examination, and compliance verification against manufacturer specifications and BS EN 795 standards."
    },
    {
      question: "What are the risks of untested systems?",
      answer: "Fatal falls from height, anchor point failure under loading, wire rope deterioration causing system collapse, HSE prohibition, insurance invalidation, and corporate manslaughter liability for preventable fatalities."
    },
    {
      question: "Who can certify mansafe systems?",
      answer: "Only competent persons with appropriate training, qualifications, and experience in fall protection systems. ACREP (Association of Companies providing Rope Access and related Equipment Products) certification recommended for testing personnel."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Mansafe & Fall Arrest System Testing | Working at Height Compliance</title>
        <meta name="description" content="Compliance testing for wire systems, posts, anchors and fixed fall protection. Expert mansafe testing under ACREP and HSE standards." />
      </Helmet>

      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema 
        name="Mansafe & Fall Arrest System Testing"
        description="Compliance testing for wire systems, posts, anchors and fixed fall protection."
        provider="EntireFM"
        areaServed="United Kingdom"
      />
      <FAQSchema faqs={faqs} />

      <div className="min-h-screen bg-background">
        <div className="relative h-[40vh] bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80')] bg-cover bg-center opacity-20" />
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Mansafe & Fall Arrest System Testing</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Compliance testing for wire systems, posts, anchors and fixed fall protection
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <Breadcrumb items={breadcrumbItems} />
          
          <div className="grid lg:grid-cols-3 gap-8 mt-8">
            <div className="lg:col-span-2 space-y-12">
              <section>
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                  <Anchor className="w-8 h-8 text-primary" />
                  Life-Critical Fall Protection
                </h2>
                <div className="prose prose-lg max-w-none space-y-4">
                  <p>
                    Mansafe systems are permanent fall arrest and fall restraint installations protecting workers accessing elevated structures. Wire rope systems, safety posts, and fixed anchors provide life-saving protection when correctly installed, tested, and maintained.
                  </p>
                  <p>
                    System failure under loading causes fatal falls from height. Regular inspection, load testing, and compliance certification under BS EN 795 and HSE guidance prevent catastrophic anchor failure and demonstrate legal duty of care.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                  <Shield className="w-8 h-8 text-primary" />
                  Types of Mansafe Systems
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-3">Wire Rope Systems</h3>
                    <p className="text-muted-foreground">
                      Horizontal lifeline systems spanning roof areas. Require tensioning checks, end anchor load tests, and intermediate post stability verification.
                    </p>
                  </div>
                  <div className="border rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-3">Fixed Anchor Points</h3>
                    <p className="text-muted-foreground">
                      Individual anchor devices providing fall arrest attachment. Load testing to manufacturer-specified forces critical for compliance.
                    </p>
                  </div>
                  <div className="border rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-3">Safety Post Systems</h3>
                    <p className="text-muted-foreground">
                      Vertical posts with attachment rings. Foundation integrity, post corrosion, and load capacity testing prevent catastrophic failure.
                    </p>
                  </div>
                  <div className="border rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-3">Track Systems</h3>
                    <p className="text-muted-foreground">
                      Rail-mounted trolley systems providing continuous fall protection. Track condition, trolley function, and end-stop integrity essential.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                  <FileText className="w-8 h-8 text-primary" />
                  Testing & Inspection Requirements
                </h2>
                <div className="prose prose-lg max-w-none space-y-4">
                  <p>
                    Mansafe testing follows BS EN 795 (anchor devices) and manufacturer specifications, requiring:
                  </p>
                  <ul className="space-y-2">
                    <li>Annual inspection by competent person minimum</li>
                    <li>Visual examination for corrosion, damage, and deterioration</li>
                    <li>Load testing of anchor points to specified forces (typically 12kN minimum)</li>
                    <li>Wire rope integrity checks including strand condition and tensioning</li>
                    <li>Post stability and foundation integrity verification</li>
                    <li>Connector and attachment point examination</li>
                    <li>Compliance certification and defect reporting</li>
                  </ul>
                  <p>
                    Testing personnel should hold ACREP certification or equivalent competence in fall protection systems. Records subject to HSE inspection and insurance verification.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-6">Common System Failures</h2>
                <div className="space-y-4">
                  <div className="border-l-4 border-primary p-4">
                    <h3 className="font-semibold mb-2">Anchor Point Degradation</h3>
                    <p className="text-muted-foreground">
                      Corrosion, substrate failure, and fixing degradation reduce load capacity below safe working loads, causing anchor pull-out under loading.
                    </p>
                  </div>
                  <div className="border-l-4 border-primary p-4">
                    <h3 className="font-semibold mb-2">Wire Rope Deterioration</h3>
                    <p className="text-muted-foreground">
                      Strand damage, corrosion, and UV degradation compromise rope integrity, causing catastrophic failure during fall arrest loading.
                    </p>
                  </div>
                  <div className="border-l-4 border-primary p-4">
                    <h3 className="font-semibold mb-2">Post Foundation Failure</h3>
                    <p className="text-muted-foreground">
                      Concrete spalling, fixing corrosion, and structural movement cause post collapse under side-loading during fall arrest events.
                    </p>
                  </div>
                  <div className="border-l-4 border-primary p-4">
                    <h3 className="font-semibold mb-2">System Misuse & Modification</h3>
                    <p className="text-muted-foreground">
                      Unauthorized alterations, incorrect attachment methods, and component substitution eliminate manufacturer certification and introduce fatal failure modes.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                  <AlertTriangle className="w-8 h-8 text-destructive" />
                  Risks of Non-Compliance
                </h2>
                <div className="bg-destructive/10 border-l-4 border-destructive p-6 rounded-lg space-y-4">
                  <p className="font-semibold text-lg">
                    Untested mansafe systems expose organizations to:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-1">→</span>
                      <span><strong>Fatal falls from height:</strong> System failure under loading causes preventable fatalities—leading cause of workplace deaths in UK</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-1">→</span>
                      <span><strong>HSE prohibition and prosecution:</strong> Untested systems result in immediate work stoppage, enforcement action, and unlimited fines</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-1">→</span>
                      <span><strong>Insurance invalidation:</strong> Policies void without current inspection certificates and competent person testing records</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-1">→</span>
                      <span><strong>Corporate manslaughter liability:</strong> Directors personally liable for gross negligence causing preventable deaths at height</span>
                    </li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-6">Related Height Safety Services</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <Link to="/services/bmu-cradle-servicing" className="border rounded-lg p-4 hover:border-primary transition-colors">
                    <h3 className="font-semibold mb-2">BMU Cradle Servicing</h3>
                    <p className="text-sm text-muted-foreground">LOLER testing</p>
                  </Link>
                  <Link to="/services/abseil-rail-certification" className="border rounded-lg p-4 hover:border-primary transition-colors">
                    <h3 className="font-semibold mb-2">Abseil Rail Certification</h3>
                    <p className="text-sm text-muted-foreground">Façade access systems</p>
                  </Link>
                  <Link to="/services/roof-safety-inspections" className="border rounded-lg p-4 hover:border-primary transition-colors">
                    <h3 className="font-semibold mb-2">Roof Safety Inspections</h3>
                    <p className="text-sm text-muted-foreground">Guardrails & walkways</p>
                  </Link>
                  <Link to="/services/lightning-protection-testing" className="border rounded-lg p-4 hover:border-primary transition-colors">
                    <h3 className="font-semibold mb-2">Lightning Protection</h3>
                    <p className="text-sm text-muted-foreground">Roof access safety</p>
                  </Link>
                </div>
              </section>

              <section className="bg-primary/5 rounded-lg p-8">
                <h2 className="text-2xl font-bold mb-4">Request Mansafe System Assessment</h2>
                <p className="text-muted-foreground mb-6">
                  Speak to our ACREP-qualified team about fall protection testing and compliance certification.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button asChild size="lg">
                    <Link to="/request-proposal">
                      Request Proposal <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link to="/contact">Contact Support</Link>
                  </Button>
                </div>
              </section>

              <FAQSection faqs={faqs} />
            </div>

            <aside className="space-y-6">
              <SidebarCTA />
            </aside>
          </div>
        </div>
      </div>
    </>
  );
};

export default MansafeTesting;
