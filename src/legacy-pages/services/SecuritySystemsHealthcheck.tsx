"use client";

;
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, CheckCircle, AlertTriangle, FileText } from "lucide-react";
import Link from "next/link";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { ServiceSchema, FAQSchema } from "@/components/shared/SchemaMarkup";
import { FAQSection } from "@/components/shared/FAQSection";
import { SidebarCTA } from "@/components/shared/SidebarCTA";

const SecuritySystemsHealthcheck = () => {
  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Security Systems Health Check" }
  ];

  const faqs = [
    {
      question: "What does a security health check cover?",
      answer: "Comprehensive assessment of CCTV functionality, access control integrity, intruder alarm operation, ANPR system performance, barrier operation, and integration between security platforms."
    },
    {
      question: "How often should security systems be audited?",
      answer: "Annual health checks are recommended for all estates, with quarterly reviews for high-security environments or sites with complex integrated systems."
    },
    {
      question: "What are the most common security system failures?",
      answer: "Camera blind spots, recorder storage failures, credential database corruption, fire interface malfunctions, and failed integration between access control and CCTV systems."
    },
    {
      question: "Can health checks identify GDPR compliance issues?",
      answer: "Yes—audits review retention policies, signage, access controls, data handling procedures, and documentation to identify gaps in GDPR compliance for surveillance systems."
    },
    {
      question: "What deliverables are provided after a health check?",
      answer: "Detailed report covering system functionality, compliance gaps, risk assessment, remedial action plan, and prioritized recommendations for system improvement or replacement."
    }
  ];

  return (
    <>
      

      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema 
        name="Estate Security System Health Check"
        description="Whole-site assessments covering CCTV, access, alarms, barriers and ANPR."
        provider="EntireFM"
        areaServed="United Kingdom"
      />
      <FAQSchema faqs={faqs} />

      <div className="min-h-screen bg-background pt-20">
        <div className="relative h-[40vh] bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1563906267088-b029e7101114?q=80')] bg-cover bg-center opacity-20" />
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Estate Security System Health Check</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Whole-site assessments covering CCTV, access control, alarms, barriers and ANPR
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <Breadcrumb items={breadcrumbItems} />
          
          <div className="grid lg:grid-cols-3 gap-8 mt-8">
            <div className="lg:col-span-2 space-y-12">
              <section>
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                  <Shield className="w-8 h-8 text-primary" />
                  Comprehensive Security Infrastructure Assessment
                </h2>
                <div className="prose prose-lg max-w-none space-y-4">
                  <p>
                    Security systems are interconnected—CCTV, access control, intruder alarms, ANPR, and physical barriers must operate cohesively to protect estates effectively. Individual component failures can create vulnerabilities that compromise overall security posture.
                  </p>
                  <p>
                    Security health checks provide unified assessment of all systems, identifying integration failures, compliance gaps, and operational blind spots before they result in incidents, insurance issues, or regulatory enforcement.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                  <CheckCircle className="w-8 h-8 text-primary" />
                  Assessment Scope
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-3">CCTV Systems</h3>
                    <p className="text-muted-foreground">
                      Camera functionality, recording integrity, coverage analysis, retention compliance, remote access, and GDPR documentation review.
                    </p>
                  </div>
                  <div className="border rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-3">Access Control</h3>
                    <p className="text-muted-foreground">
                      Controller operation, credential management, fire interface testing, audit trail integrity, and fail-safe/fail-secure configuration validation.
                    </p>
                  </div>
                  <div className="border rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-3">Intruder Alarms</h3>
                    <p className="text-muted-foreground">
                      Detection zone testing, signaling path verification, false alarm analysis, and monitoring station connectivity checks.
                    </p>
                  </div>
                  <div className="border rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-3">ANPR & Barriers</h3>
                    <p className="text-muted-foreground">
                      Camera accuracy, barrier operation, fail-safe configuration, integration with access control, and vehicle flow analysis.
                    </p>
                  </div>
                  <div className="border rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-3">System Integration</h3>
                    <p className="text-muted-foreground">
                      Cross-platform event triggering, CCTV activation on access events, unified monitoring, and BMS coordination functionality.
                    </p>
                  </div>
                  <div className="border rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-3">Compliance Documentation</h3>
                    <p className="text-muted-foreground">
                      GDPR policies, signage, retention schedules, maintenance logs, fire interface test records, and operator training evidence.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                  <FileText className="w-8 h-8 text-primary" />
                  Deliverables & Reporting
                </h2>
                <div className="prose prose-lg max-w-none space-y-4">
                  <p>
                    Health checks produce comprehensive reports detailing system functionality, compliance status, identified vulnerabilities, and prioritized remedial action plans. Reports include:
                  </p>
                  <ul className="space-y-2">
                    <li>System functionality assessment for each security component</li>
                    <li>GDPR compliance review and gap analysis</li>
                    <li>Integration testing results and failure points</li>
                    <li>Risk assessment and operational impact analysis</li>
                    <li>Prioritized recommendations with cost and timeline estimates</li>
                    <li>Maintenance schedule optimization and lifecycle planning</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                  <AlertTriangle className="w-8 h-8 text-destructive" />
                  Risks of Neglected Security Infrastructure
                </h2>
                <div className="bg-destructive/10 border-l-4 border-destructive p-6 rounded-lg space-y-4">
                  <p className="font-semibold text-lg">
                    Inadequately maintained security systems expose estates to:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-1">→</span>
                      <span><strong>Operational blind spots:</strong> Undetected camera failures, recorder issues, or access control faults create security vulnerabilities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-1">→</span>
                      <span><strong>Insurance invalidation:</strong> Policies often require functional surveillance and access control as a condition of cover</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-1">→</span>
                      <span><strong>GDPR breaches:</strong> Non-compliant retention, inadequate signage, or poor data security practices</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-1">→</span>
                      <span><strong>Integration failures:</strong> Systems failing to trigger each other during incidents compromise event response and investigation</span>
                    </li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-6">Related Security Services</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <Link href="/services/cctv-maintenance" className="border rounded-lg p-4 hover:border-primary transition-colors">
                    <h3 className="font-semibold mb-2">CCTV Maintenance</h3>
                    <p className="text-sm text-muted-foreground">Surveillance system compliance</p>
                  </Link>
                  <Link href="/services/access-control-advanced" className="border rounded-lg p-4 hover:border-primary transition-colors">
                    <h3 className="font-semibold mb-2">Access Control Systems</h3>
                    <p className="text-sm text-muted-foreground">Card and biometric access</p>
                  </Link>
                  <Link href="/services/anpr-systems" className="border rounded-lg p-4 hover:border-primary transition-colors">
                    <h3 className="font-semibold mb-2">ANPR Systems</h3>
                    <p className="text-sm text-muted-foreground">Vehicle access automation</p>
                  </Link>
                  <Link href="/services/fire-alarms" className="border rounded-lg p-4 hover:border-primary transition-colors">
                    <h3 className="font-semibold mb-2">Fire Alarm Systems</h3>
                    <p className="text-sm text-muted-foreground">Life safety integration</p>
                  </Link>
                </div>
              </section>

              <section className="bg-primary/5 rounded-lg p-8">
                <h2 className="text-2xl font-bold mb-4">Request a Security Health Check</h2>
                <p className="text-muted-foreground mb-6">
                  Speak to our team about comprehensive security infrastructure assessment for your estate.
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

export default SecuritySystemsHealthcheck;
