"use client";

;
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, AlertTriangle, FileText, Shield } from "lucide-react";
import Link from "next/link";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { ServiceSchema, FAQSchema } from "@/components/shared/SchemaMarkup";
import { FAQSection } from "@/components/shared/FAQSection";
import { SidebarCTA } from "@/components/shared/SidebarCTA";

const BMUCradleServicing = () => {
  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "BMU Cradle Servicing" }
  ];

  const faqs = [
    {
      question: "What is a BMU and why does it need servicing?",
      answer: "Building Maintenance Units (BMUs) are permanent façade access systems used for cleaning and maintenance. LOLER requires thorough examination every 6 months and full statutory testing annually to prevent catastrophic equipment failure."
    },
    {
      question: "What does BMU testing involve?",
      answer: "Load testing, safety interlock verification, emergency descent systems, rope/cable integrity, electrical safety checks, control system functionality, and manufacturer-specific maintenance schedules under LOLER and PUWER."
    },
    {
      question: "What are the risks of inadequate BMU maintenance?",
      answer: "Catastrophic equipment failure, fatal falls from height, HSE prohibition notices, insurance invalidation, and corporate manslaughter liability. BMUs operate at extreme heights with severe consequences for failure."
    },
    {
      question: "How often must BMUs be inspected?",
      answer: "6-monthly thorough examination under LOLER, annual statutory testing including load tests, plus manufacturer-scheduled maintenance. High-use systems may require more frequent inspection regimes."
    },
    {
      question: "What documentation is required for BMU compliance?",
      answer: "LOLER examination certificates, load test reports, maintenance logs, competent person records, emergency rescue plans, and manufacturer servicing documentation—all subject to HSE inspection."
    }
  ];

  return (
    <>
      

      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema 
        name="BMU Cradle Servicing & Testing"
        description="LOLER, PUWER and manufacturer-recommended servicing for façade access systems."
        provider="EntireFM"
        areaServed="United Kingdom"
      />
      <FAQSchema faqs={faqs} />

      <div className="min-h-screen bg-background pt-20">
        <div className="relative h-[40vh] bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80')] bg-cover bg-center opacity-20" />
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">BMU Cradle Servicing & Testing</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              LOLER, PUWER and manufacturer-recommended servicing for façade access systems
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <Breadcrumb items={breadcrumbItems} />
          
          <div className="grid lg:grid-cols-3 gap-8 mt-8">
            <div className="lg:col-span-2 space-y-12">
              <section>
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                  <Building2 className="w-8 h-8 text-primary" />
                  Critical Height Safety Equipment
                </h2>
                <div className="prose prose-lg max-w-none space-y-4">
                  <p>
                    Building Maintenance Units (BMUs) are permanent façade access systems operating at extreme heights on high-rise buildings. They represent critical safety equipment requiring strict statutory compliance under LOLER (Lifting Operations and Lifting Equipment Regulations) and PUWER.
                  </p>
                  <p>
                    BMU failure at height causes fatal consequences. Thorough examination, load testing, and manufacturer-scheduled maintenance prevent catastrophic equipment failure, ensure operational safety, and demonstrate legal compliance.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                  <Shield className="w-8 h-8 text-primary" />
                  Types of BMU Systems
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-3">Roof-Mounted Davits</h3>
                    <p className="text-muted-foreground">
                      Rotating davit arms supporting cradles or platforms. Require load testing, slew mechanism checks, and safety interlock verification.
                    </p>
                  </div>
                  <div className="border rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-3">Track-Mounted Rigs</h3>
                    <p className="text-muted-foreground">
                      Rail-guided systems with motorized carriages. Track integrity, limit switch testing, and emergency descent systems critical.
                    </p>
                  </div>
                  <div className="border rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-3">Monorail BMUs</h3>
                    <p className="text-muted-foreground">
                      Single-track systems requiring rope integrity checks, brake function tests, and control system validation.
                    </p>
                  </div>
                  <div className="border rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-3">Jib Systems</h3>
                    <p className="text-muted-foreground">
                      Articulated jib arms with suspended platforms. Load testing, hydraulic system checks, and safety overrides essential.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                  <FileText className="w-8 h-8 text-primary" />
                  LOLER & PUWER Compliance Framework
                </h2>
                <div className="prose prose-lg max-w-none space-y-4">
                  <p>
                    BMU servicing and testing is governed by LOLER 1998 and PUWER 1998, requiring:
                  </p>
                  <ul className="space-y-2">
                    <li>6-monthly thorough examination by competent persons</li>
                    <li>Annual statutory testing including load tests to 125% SWL</li>
                    <li>Manufacturer-scheduled maintenance and component replacement</li>
                    <li>Safety interlock and emergency descent system testing</li>
                    <li>Wire rope/cable non-destructive testing (NDT)</li>
                    <li>Electrical safety and control system validation</li>
                    <li>Comprehensive documentation and defect reporting</li>
                  </ul>
                  <p>
                    Competent persons must hold appropriate qualifications, training, and experience in BMU systems—failures result in prohibition notices and prosecution.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-6">Common BMU Defects & Failure Modes</h2>
                <div className="space-y-4">
                  <div className="border-l-4 border-primary p-4">
                    <h3 className="font-semibold mb-2">Rope & Cable Deterioration</h3>
                    <p className="text-muted-foreground">
                      Wire rope fatigue, corrosion, and strand damage cause sudden catastrophic failure. NDT inspection and scheduled replacement critical.
                    </p>
                  </div>
                  <div className="border-l-4 border-primary p-4">
                    <h3 className="font-semibold mb-2">Safety Interlock Failures</h3>
                    <p className="text-muted-foreground">
                      Bypass of safety systems, limit switch failures, and emergency descent malfunctions eliminate critical safety barriers.
                    </p>
                  </div>
                  <div className="border-l-4 border-primary p-4">
                    <h3 className="font-semibold mb-2">Hydraulic & Mechanical Wear</h3>
                    <p className="text-muted-foreground">
                      Brake failures, hydraulic leaks, and structural fatigue compromise load-bearing capacity and operational safety.
                    </p>
                  </div>
                  <div className="border-l-4 border-primary p-4">
                    <h3 className="font-semibold mb-3">Control System Degradation</h3>
                    <p className="text-muted-foreground">
                      Electrical failures, relay degradation, and control logic errors create uncontrolled movement and emergency response failures.
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
                    Inadequate BMU servicing and testing exposes organizations to:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-1">→</span>
                      <span><strong>Fatal falls from height:</strong> Equipment failure at extreme elevation causes catastrophic injuries and fatalities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-1">→</span>
                      <span><strong>HSE prohibition notices:</strong> Immediate equipment shutdown, enforcement action, and unlimited fines for LOLER breaches</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-1">→</span>
                      <span><strong>Insurance invalidation:</strong> Policies void without valid LOLER certification and competent person examination records</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-1">→</span>
                      <span><strong>Corporate manslaughter liability:</strong> Director accountability and custodial sentences for gross safety failures at height</span>
                    </li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-6">Related Height Safety Services</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <Link href="/services/mansafe-testing" className="border rounded-lg p-4 hover:border-primary transition-colors">
                    <h3 className="font-semibold mb-2">Mansafe System Testing</h3>
                    <p className="text-sm text-muted-foreground">Fall arrest systems</p>
                  </Link>
                  <Link href="/services/abseil-rail-certification" className="border rounded-lg p-4 hover:border-primary transition-colors">
                    <h3 className="font-semibold mb-2">Abseil Rail Certification</h3>
                    <p className="text-sm text-muted-foreground">Façade access anchors</p>
                  </Link>
                  <Link href="/services/roof-safety-inspections" className="border rounded-lg p-4 hover:border-primary transition-colors">
                    <h3 className="font-semibold mb-2">Roof Safety Inspections</h3>
                    <p className="text-sm text-muted-foreground">Guardrails & walkways</p>
                  </Link>
                  <Link href="/services/health-safety" className="border rounded-lg p-4 hover:border-primary transition-colors">
                    <h3 className="font-semibold mb-2">Health & Safety</h3>
                    <p className="text-sm text-muted-foreground">Working at height compliance</p>
                  </Link>
                </div>
              </section>

              <section className="bg-primary/5 rounded-lg p-8">
                <h2 className="text-2xl font-bold mb-4">Request BMU Compliance Assessment</h2>
                <p className="text-muted-foreground mb-6">
                  Speak to our LOLER-qualified team about BMU servicing, testing and statutory compliance.
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

export default BMUCradleServicing;
