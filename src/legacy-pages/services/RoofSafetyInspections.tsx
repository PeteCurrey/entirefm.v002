"use client";

;
import { Button } from "@/components/ui/button";
import { ArrowRight, Home, AlertTriangle, FileText, Shield } from "lucide-react";
import Link from "next/link";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { ServiceSchema, FAQSchema } from "@/components/shared/SchemaMarkup";
import { FAQSection } from "@/components/shared/FAQSection";
import { SidebarCTA } from "@/components/shared/SidebarCTA";

const RoofSafetyInspections = () => {
  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Roof Safety Inspections" }
  ];

  const faqs = [
    {
      question: "What assets are included in roof safety inspections?",
      answer: "Guardrails, edge protection, walkways, fixed ladders, roof hatches, fall arrest anchors, safety mesh, fragile roof warnings, and access equipment—all components enabling safe roof maintenance access."
    },
    {
      question: "How often should roof safety systems be inspected?",
      answer: "Annual inspection minimum under HSE working at height guidance, with quarterly checks recommended for high-traffic roofs. Post-storm inspections critical for exposed roof safety infrastructure."
    },
    {
      question: "What are the main risks on roofs?",
      answer: "Falls from unprotected edges, fragile roof material collapse, access ladder failures, inadequate edge protection, unmarked hazards, and maintenance-induced safety system damage—all preventable with proper inspection regimes."
    },
    {
      question: "What regulations govern roof safety?",
      answer: "Work at Height Regulations 2005, HSE guidance HSG33 (Health & Safety in Roof Work), CDM Regulations for design and maintenance obligations, plus building-specific risk assessments and safe systems of work."
    },
    {
      question: "What documentation is required?",
      answer: "Annual inspection reports, defect registers, repair records, risk assessments, roof access procedures, fragile material locations, and competent person certification—all subject to HSE inspection and insurance verification."
    }
  ];

  return (
    <>
      

      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema 
        name="Roof Safety System Inspections"
        description="Guardrails, walkways, fixed ladders, harness points and safe-access assets."
        provider="EntireFM"
        areaServed="United Kingdom"
      />
      <FAQSchema faqs={faqs} />

      <div className="min-h-screen bg-background pt-20">
        <div className="relative h-[40vh] bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80')] bg-cover bg-center opacity-20" />
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Roof Safety System Inspections</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Guardrails, walkways, fixed ladders, harness points and safe-access assets
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <Breadcrumb items={breadcrumbItems} />
          
          <div className="grid lg:grid-cols-3 gap-8 mt-8">
            <div className="lg:col-span-2 space-y-12">
              <section>
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                  <Home className="w-8 h-8 text-primary" />
                  High-Risk Access Environment
                </h2>
                <div className="prose prose-lg max-w-none space-y-4">
                  <p>
                    Roofs represent high-risk working at height environments where falls from unprotected edges, fragile material collapse, and access equipment failure cause fatal injuries. Properly maintained safety infrastructure—guardrails, walkways, anchors, and access systems—prevents catastrophic incidents.
                  </p>
                  <p>
                    Work at Height Regulations 2005 and HSE guidance HSG33 require adequate edge protection, safe access routes, and competent inspection of roof safety systems. Deterioration, storm damage, and maintenance-induced failures eliminate critical safety barriers.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                  <Shield className="w-8 h-8 text-primary" />
                  Roof Safety Assets
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-3">Guardrails & Edge Protection</h3>
                    <p className="text-muted-foreground">
                      Permanent or temporary edge protection preventing falls. Post stability, corrosion, and structural integrity critical for compliance and life safety.
                    </p>
                  </div>
                  <div className="border rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-3">Walkways & Safe Access Routes</h3>
                    <p className="text-muted-foreground">
                      Designated pathways across fragile roofs. Anti-slip surface condition, fixing security, and route marking prevent inadvertent entry onto fragile materials.
                    </p>
                  </div>
                  <div className="border rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-3">Fixed Ladders & Access Points</h3>
                    <p className="text-muted-foreground">
                      Permanent roof access ladders and hatches. Structural condition, fixing integrity, and fall-through protection essential for safe maintenance access.
                    </p>
                  </div>
                  <div className="border rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-3">Fall Arrest Anchors</h3>
                    <p className="text-muted-foreground">
                      Fixed harness attachment points for fall protection. Load testing, corrosion assessment, and certification prevent anchor failure during fall arrest events.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                  <FileText className="w-8 h-8 text-primary" />
                  Inspection Requirements
                </h2>
                <div className="prose prose-lg max-w-none space-y-4">
                  <p>
                    Roof safety inspections follow Work at Height Regulations, HSG33 guidance, and manufacturer specifications:
                  </p>
                  <ul className="space-y-2">
                    <li>Annual inspection by competent person minimum</li>
                    <li>Quarterly checks for high-traffic commercial roofs</li>
                    <li>Post-storm and post-maintenance damage assessments</li>
                    <li>Guardrail stability, corrosion, and structural integrity checks</li>
                    <li>Walkway surface condition and fixing security verification</li>
                    <li>Ladder and access point structural assessment</li>
                    <li>Fall arrest anchor load testing and certification</li>
                    <li>Fragile roof material identification and warning signage verification</li>
                    <li>Defect reporting with photographic evidence and remedial recommendations</li>
                  </ul>
                  <p>
                    Competent persons require appropriate training in roof safety systems and working at height principles. Records subject to HSE inspection and CDM file maintenance.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-6">Common Safety Defects</h2>
                <div className="space-y-4">
                  <div className="border-l-4 border-primary p-4">
                    <h3 className="font-semibold mb-2">Guardrail Degradation</h3>
                    <p className="text-muted-foreground">
                      Corrosion, post instability, and fixing failures reduce edge protection effectiveness, creating unprotected fall hazards at roof perimeters.
                    </p>
                  </div>
                  <div className="border-l-4 border-primary p-4">
                    <h3 className="font-semibold mb-2">Fragile Roof Material Failure</h3>
                    <p className="text-muted-foreground">
                      Degraded roof lights, fibre cement sheets, and composite panels lose load-bearing capacity, causing fall-through incidents without adequate protection.
                    </p>
                  </div>
                  <div className="border-l-4 border-primary p-4">
                    <h3 className="font-semibold mb-2">Access Ladder Deterioration</h3>
                    <p className="text-muted-foreground">
                      Fixing corrosion, rung damage, and structural failures create catastrophic access incidents during routine roof maintenance operations.
                    </p>
                  </div>
                  <div className="border-l-4 border-primary p-4">
                    <h3 className="font-semibold mb-2">Maintenance-Induced Damage</h3>
                    <p className="text-muted-foreground">
                      Contractors removing guardrails, damaging walkways, or compromising safety systems without reinstatement create undocumented hazards for subsequent users.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                  <AlertTriangle className="w-8 h-8 text-destructive" />
                  Risks of Inadequate Roof Safety
                </h2>
                <div className="bg-destructive/10 border-l-4 border-destructive p-6 rounded-lg space-y-4">
                  <p className="font-semibold text-lg">
                    Uninspected roof safety systems expose organizations to:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-1">→</span>
                      <span><strong>Fatal falls from height:</strong> Unprotected edges and deteriorated safety systems cause preventable deaths—leading cause of workplace fatalities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-1">→</span>
                      <span><strong>Fragile roof collapse:</strong> Fall-through incidents on degraded roof materials cause catastrophic injuries without adequate protection measures</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-1">→</span>
                      <span><strong>HSE prosecution:</strong> Work at Height Regulation breaches result in prohibition notices, improvement notices, and unlimited fines</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-1">→</span>
                      <span><strong>Insurance invalidation:</strong> Policies void without current inspection records, competent person assessments, and defect remediation evidence</span>
                    </li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-6">Related Height Safety Services</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <Link href="/services/mansafe-testing" className="border rounded-lg p-4 hover:border-primary transition-colors">
                    <h3 className="font-semibold mb-2">Mansafe Testing</h3>
                    <p className="text-sm text-muted-foreground">Fall arrest systems</p>
                  </Link>
                  <Link href="/services/abseil-rail-certification" className="border rounded-lg p-4 hover:border-primary transition-colors">
                    <h3 className="font-semibold mb-2">Abseil Rail Certification</h3>
                    <p className="text-sm text-muted-foreground">Façade access</p>
                  </Link>
                  <Link href="/services/lightning-protection-testing" className="border rounded-lg p-4 hover:border-primary transition-colors">
                    <h3 className="font-semibold mb-2">Lightning Protection</h3>
                    <p className="text-sm text-muted-foreground">Roof conductor testing</p>
                  </Link>
                  <Link href="/services/health-safety" className="border rounded-lg p-4 hover:border-primary transition-colors">
                    <h3 className="font-semibold mb-2">Health & Safety</h3>
                    <p className="text-sm text-muted-foreground">Working at height compliance</p>
                  </Link>
                </div>
              </section>

              <section className="bg-primary/5 rounded-lg p-8">
                <h2 className="text-2xl font-bold mb-4">Request Roof Safety Assessment</h2>
                <p className="text-muted-foreground mb-6">
                  Speak to our team about comprehensive roof safety system inspections and compliance.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button asChild size="lg">
                    <Link href="/request-proposal">
                      Request Proposal <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="/contact">Contact Support</Link>
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

export default RoofSafetyInspections;
