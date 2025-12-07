import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mountain, AlertTriangle, FileText, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { ServiceSchema, FAQSchema } from "@/components/shared/SchemaMarkup";
import { FAQSection } from "@/components/shared/FAQSection";
import { SidebarCTA } from "@/components/shared/SidebarCTA";

const AbseilRailCertification = () => {
  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Abseil Rail Certification" }
  ];

  const faqs = [
    {
      question: "What is an abseil rail system?",
      answer: "Abseil rails are fixed track systems installed on building façades allowing controlled descent for window cleaning, maintenance, and inspection. They provide anchor points for rope access work at height."
    },
    {
      question: "How often must abseil rails be certified?",
      answer: "Annual inspection minimum under HSE guidance for work at height equipment, with more frequent examination for high-use commercial systems. Load testing intervals follow manufacturer specifications or competent person recommendations."
    },
    {
      question: "What does abseil rail inspection involve?",
      answer: "Track integrity examination, anchor point load testing, fixing verification, corrosion assessment, alignment checks, operational functionality, and compliance certification against manufacturer specifications and BS EN standards."
    },
    {
      question: "What are the failure risks?",
      answer: "Track separation causing uncontrolled descent, anchor point pull-out, fixing failure under loading, catastrophic falls from height, HSE prosecution, and insurance invalidation without current certification."
    },
    {
      question: "Who can certify abseil rail systems?",
      answer: "Competent persons with appropriate qualifications in rope access systems and working at height equipment. IRATA or SPRAT certification plus manufacturer training typically required for assessment personnel."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Abseil Rail Certification | Façade Access System Inspection</title>
        <meta name="description" content="Inspection and certification of abseil tracks and anchors used for façade access. Expert rope access system compliance testing." />
      </Helmet>

      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema 
        name="Abseil Rail Certification"
        description="Inspection and certification of abseil tracks and anchors used for façade access."
        provider="EntireFM"
        areaServed="United Kingdom"
      />
      <FAQSchema faqs={faqs} />

      <div className="min-h-screen bg-background pt-20">
        <div className="relative h-[40vh] bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80')] bg-cover bg-center opacity-20" />
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Abseil Rail Certification</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Inspection and certification of abseil tracks and anchors used for façade access
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <Breadcrumb items={breadcrumbItems} />
          
          <div className="grid lg:grid-cols-3 gap-8 mt-8">
            <div className="lg:col-span-2 space-y-12">
              <section>
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                  <Mountain className="w-8 h-8 text-primary" />
                  Critical Façade Access Systems
                </h2>
                <div className="prose prose-lg max-w-none space-y-4">
                  <p>
                    Abseil rail systems provide permanent façade access for rope access technicians, window cleaners, and maintenance personnel. Fixed track installations with anchor points enable controlled descent on high-rise buildings while maintaining life-safety protection.
                  </p>
                  <p>
                    Rail failure, anchor degradation, or fixing defects cause fatal falls from height. Regular inspection, load testing, and certification ensure system integrity and demonstrate compliance with working at height regulations.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                  <Shield className="w-8 h-8 text-primary" />
                  System Components & Design
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-3">Track Systems</h3>
                    <p className="text-muted-foreground">
                      Fixed rails spanning vertical façades. Track integrity, alignment, and fixing security critical for safe controlled descent operations.
                    </p>
                  </div>
                  <div className="border rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-3">Anchor Points</h3>
                    <p className="text-muted-foreground">
                      Load-rated attachment points integrated into track systems. Load testing and fixing verification prevent catastrophic anchor failure.
                    </p>
                  </div>
                  <div className="border rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-3">Mounting Fixings</h3>
                    <p className="text-muted-foreground">
                      Structural attachment between rail and building façade. Corrosion, substrate failure, and fixing degradation compromise system safety.
                    </p>
                  </div>
                  <div className="border rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-3">Safety Devices</h3>
                    <p className="text-muted-foreground">
                      Trolley systems, fall arrest devices, and descent control equipment. Functional testing and manufacturer compliance essential.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                  <FileText className="w-8 h-8 text-primary" />
                  Inspection & Certification Requirements
                </h2>
                <div className="prose prose-lg max-w-none space-y-4">
                  <p>
                    Abseil rail certification follows manufacturer specifications, BS EN standards, and HSE working at height guidance:
                  </p>
                  <ul className="space-y-2">
                    <li>Annual inspection by rope access-qualified competent persons</li>
                    <li>Visual examination for corrosion, damage, and deterioration</li>
                    <li>Track alignment and fixing security verification</li>
                    <li>Anchor point load testing to manufacturer-specified forces</li>
                    <li>Operational functionality testing of trolleys and safety devices</li>
                    <li>Substrate integrity assessment and fixing torque checks</li>
                    <li>Compliance certification and defect reporting with photographic evidence</li>
                  </ul>
                  <p>
                    Competent persons should hold IRATA or SPRAT rope access qualifications plus manufacturer-specific training. Certification records subject to HSE inspection and insurance verification.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-6">Common Failure Modes</h2>
                <div className="space-y-4">
                  <div className="border-l-4 border-primary p-4">
                    <h3 className="font-semibold mb-2">Track Separation & Misalignment</h3>
                    <p className="text-muted-foreground">
                      Fixing failure causes track detachment from façade, creating uncontrolled descent scenarios and complete system collapse under loading.
                    </p>
                  </div>
                  <div className="border-l-4 border-primary p-4">
                    <h3 className="font-semibold mb-2">Anchor Point Degradation</h3>
                    <p className="text-muted-foreground">
                      Corrosion, mechanical wear, and substrate deterioration reduce anchor load capacity below safe working loads, causing pull-out during rope access operations.
                    </p>
                  </div>
                  <div className="border-l-4 border-primary p-4">
                    <h3 className="font-semibold mb-2">Fixing Corrosion</h3>
                    <p className="text-muted-foreground">
                      Chemical anchors, expansion bolts, and mounting brackets corrode in exposed conditions, eliminating fixing integrity and causing catastrophic system failure.
                    </p>
                  </div>
                  <div className="border-l-4 border-primary p-4">
                    <h3 className="font-semibold mb-2">Unauthorized Modification</h3>
                    <p className="text-muted-foreground">
                      Field alterations, component substitution, and repair attempts void manufacturer certification and introduce fatal failure modes without engineering assessment.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                  <AlertTriangle className="w-8 h-8 text-destructive" />
                  Consequences of Non-Compliance
                </h2>
                <div className="bg-destructive/10 border-l-4 border-destructive p-6 rounded-lg space-y-4">
                  <p className="font-semibold text-lg">
                    Uncertified abseil rail systems expose organizations to:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-1">→</span>
                      <span><strong>Fatal falls from height:</strong> Track separation, anchor failure, or fixing collapse causes catastrophic injuries and fatalities during rope access work</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-1">→</span>
                      <span><strong>HSE enforcement action:</strong> Prohibition notices, improvement notices, and prosecution for working at height regulation breaches</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-1">→</span>
                      <span><strong>Insurance invalidation:</strong> Policies void without current certification, competent person inspection records, and load testing documentation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-1">→</span>
                      <span><strong>Operational shutdown:</strong> Unable to access façades for window cleaning, maintenance, or inspection—impacting building presentation and compliance</span>
                    </li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-6">Related Height Safety Services</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <Link to="/services/bmu-cradle-servicing" className="border rounded-lg p-4 hover:border-primary transition-colors">
                    <h3 className="font-semibold mb-2">BMU Cradle Servicing</h3>
                    <p className="text-sm text-muted-foreground">Façade access equipment</p>
                  </Link>
                  <Link to="/services/mansafe-testing" className="border rounded-lg p-4 hover:border-primary transition-colors">
                    <h3 className="font-semibold mb-2">Mansafe Testing</h3>
                    <p className="text-sm text-muted-foreground">Fall arrest systems</p>
                  </Link>
                  <Link to="/services/roof-safety-inspections" className="border rounded-lg p-4 hover:border-primary transition-colors">
                    <h3 className="font-semibold mb-2">Roof Safety Inspections</h3>
                    <p className="text-sm text-muted-foreground">Roof access safety</p>
                  </Link>
                  <Link to="/services/health-safety" className="border rounded-lg p-4 hover:border-primary transition-colors">
                    <h3 className="font-semibold mb-2">Health & Safety</h3>
                    <p className="text-sm text-muted-foreground">Working at height compliance</p>
                  </Link>
                </div>
              </section>

              <section className="bg-primary/5 rounded-lg p-8">
                <h2 className="text-2xl font-bold mb-4">Request Abseil Rail Assessment</h2>
                <p className="text-muted-foreground mb-6">
                  Speak to our rope access-qualified team about abseil rail inspection and certification.
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

export default AbseilRailCertification;
