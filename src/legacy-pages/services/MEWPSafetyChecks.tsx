"use client";

;
import { Button } from "@/components/ui/button";
import { ArrowRight, Loader, AlertTriangle, FileText, Shield } from "lucide-react";
import Link from "next/link";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { ServiceSchema, FAQSchema } from "@/components/shared/SchemaMarkup";
import { FAQSection } from "@/components/shared/FAQSection";
import { SidebarCTA } from "@/components/shared/SidebarCTA";

const MEWPSafetyChecks = () => {
  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "MEWP Safety Checks" }
  ];

  const faqs = [
    {
      question: "What is a MEWP?",
      answer: "Mobile Elevated Work Platform—powered access equipment including scissor lifts, boom lifts, cherry pickers, and spider lifts used for working at height across construction, maintenance, and facilities management."
    },
    {
      question: "How often must MEWPs be inspected?",
      answer: "LOLER requires thorough examination every 6 or 12 months depending on equipment type and risk. PUWER requires pre-use checks before each deployment. Records must demonstrate compliance."
    },
    {
      question: "Who can conduct MEWP inspections?",
      answer: "Competent persons with appropriate training and experience. LOLER examinations require specific qualifications. Operators must hold IPAF or equivalent certification for equipment use."
    },
    {
      question: "What are the consequences of non-compliant MEWPs?",
      answer: "HSE enforcement, prohibition notices, prosecution, unlimited fines, operator injuries, falls from height, equipment failure causing fatalities, and insurance invalidation for inadequate safety controls."
    },
    {
      question: "What documentation is required?",
      answer: "LOLER test certificates, pre-use inspection logs, operator training records, maintenance history, and defect reports demonstrating compliance with work at height regulations."
    }
  ];

  return (
    <>
      

      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema 
        name="MEWP & High-Level Access Safety Checks"
        description="PUWER/LOLER compliance for powered access equipment."
        provider="EntireFM"
        areaServed="United Kingdom"
      />
      <FAQSchema faqs={faqs} />

      <div className="min-h-screen bg-background pt-20">
        <div className="relative h-[40vh] bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80')] bg-cover bg-center opacity-20" />
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">MEWP & High-Level Access Safety Checks</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              PUWER/LOLER compliance for powered access equipment
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <Breadcrumb items={breadcrumbItems} />
          
          <div className="grid lg:grid-cols-3 gap-8 mt-8">
            <div className="lg:col-span-2 space-y-12">
              <section>
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                  <Loader className="w-8 h-8 text-primary" />
                  Work at Height Safety Compliance
                </h2>
                <div className="prose prose-lg max-w-none space-y-4">
                  <p>
                    Mobile Elevated Work Platforms (MEWPs) provide safe access for maintenance, installation, and inspection work at height—but only when properly maintained, inspected, and operated according to PUWER and LOLER regulations.
                  </p>
                  <p>
                    Equipment failures cause catastrophic falls from height, operator fatalities, HSE enforcement action, and prosecution. Regular safety checks demonstrate duty of care and prevent life-threatening incidents.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                  <FileText className="w-8 h-8 text-primary" />
                  PUWER & LOLER Requirements
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-3">LOLER Examinations</h3>
                    <p className="text-muted-foreground">
                      Thorough examination every 6 or 12 months by competent persons, covering structural integrity, safety devices, controls, and load-bearing components.
                    </p>
                  </div>
                  <div className="border rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-3">PUWER Pre-Use Checks</h3>
                    <p className="text-muted-foreground">
                      Daily operator inspections before each use, covering controls, safety interlocks, platform condition, hydraulics, and emergency descent systems.
                    </p>
                  </div>
                  <div className="border rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-3">Operator Certification</h3>
                    <p className="text-muted-foreground">
                      IPAF or equivalent training required for MEWP operation. Records must demonstrate operator competence and machine-specific familiarization.
                    </p>
                  </div>
                  <div className="border rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-3">Safety Device Testing</h3>
                    <p className="text-muted-foreground">
                      Verify emergency stop, emergency descent, tilt alarms, overload protection, and guardrail integrity during thorough examinations.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                  <Shield className="w-8 h-8 text-primary" />
                  Equipment Types & Applications
                </h2>
                <div className="prose prose-lg max-w-none space-y-4">
                  <p>
                    MEWP safety requirements apply to:
                  </p>
                  <ul className="space-y-2">
                    <li><strong>Scissor lifts:</strong> Vertical access for maintenance, installation, and warehouse operations</li>
                    <li><strong>Boom lifts:</strong> Articulating and telescopic platforms for complex access requirements</li>
                    <li><strong>Cherry pickers:</strong> Vehicle-mounted platforms for street lighting, utilities, and tree work</li>
                    <li><strong>Spider lifts:</strong> Compact tracked platforms for indoor and restricted access environments</li>
                    <li><strong>Push-around towers:</strong> Manual vertical access for low-level tasks</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                  <AlertTriangle className="w-8 h-8 text-destructive" />
                  Risks of Non-Compliant Equipment
                </h2>
                <div className="bg-destructive/10 border-l-4 border-destructive p-6 rounded-lg space-y-4">
                  <p className="font-semibold text-lg">
                    Inadequately maintained MEWPs expose organizations to:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-1">→</span>
                      <span><strong>Falls from height:</strong> Platform collapse, tipping, or safety system failure causing serious injury or fatality</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-1">→</span>
                      <span><strong>HSE prosecution:</strong> Corporate manslaughter charges, unlimited fines, and director liability for work at height failures</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-1">→</span>
                      <span><strong>Prohibition notices:</strong> HSE can immediately prohibit equipment use, halting operations until compliance is restored</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-1">→</span>
                      <span><strong>Insurance invalidation:</strong> Policies require LOLER compliance as a condition of cover for work at height equipment</span>
                    </li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-6">Related Safety Services</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <Link href="/services/lifting-equipment" className="border rounded-lg p-4 hover:border-primary transition-colors">
                    <h3 className="font-semibold mb-2">Lifting Equipment</h3>
                    <p className="text-sm text-muted-foreground">LOLER compliance</p>
                  </Link>
                  <Link href="/services/height-safety" className="border rounded-lg p-4 hover:border-primary transition-colors">
                    <h3 className="font-semibold mb-2">Height Safety Systems</h3>
                    <p className="text-sm text-muted-foreground">Fall protection</p>
                  </Link>
                  <Link href="/services/loading-bay-safety-systems" className="border rounded-lg p-4 hover:border-primary transition-colors">
                    <h3 className="font-semibold mb-2">Loading Bay Safety</h3>
                    <p className="text-sm text-muted-foreground">Industrial traffic management</p>
                  </Link>
                  <Link href="/services/health-safety" className="border rounded-lg p-4 hover:border-primary transition-colors">
                    <h3 className="font-semibold mb-2">Health & Safety</h3>
                    <p className="text-sm text-muted-foreground">Workplace compliance</p>
                  </Link>
                </div>
              </section>

              <section className="bg-primary/5 rounded-lg p-8">
                <h2 className="text-2xl font-bold mb-4">Request MEWP Safety Assessment</h2>
                <p className="text-muted-foreground mb-6">
                  Speak to our team about PUWER/LOLER compliant MEWP inspections and operator training.
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

export default MEWPSafetyChecks;
