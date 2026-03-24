"use client";

;
import { Button } from "@/components/ui/button";
import { ArrowRight, Fingerprint, Shield, FileText, AlertTriangle, DoorOpen } from "lucide-react";
import Link from "next/link";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { ServiceSchema, FAQSchema } from "@/components/shared/SchemaMarkup";
import { FAQSection } from "@/components/shared/FAQSection";
import { SidebarCTA } from "@/components/shared/SidebarCTA";

const AccessControlAdvanced = () => {
  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Advanced Access Control" }
  ];

  const faqs = [
    {
      question: "What access control technologies are available?",
      answer: "Modern systems support proximity cards, fobs, mobile credentials, PIN codes, and biometric readers (fingerprint, facial recognition). Multi-factor authentication combines methods for higher security zones."
    },
    {
      question: "How does access control integrate with fire systems?",
      answer: "Fire alarm activations must trigger automatic door release on fire exit routes, ensuring compliance with means of escape requirements while maintaining security during normal operation."
    },
    {
      question: "What is the difference between fail-safe and fail-secure locks?",
      answer: "Fail-safe locks open when power is lost (required for fire exits), while fail-secure locks remain locked during power failure (used for high-security areas). Configuration must match fire safety and security requirements."
    },
    {
      question: "Can access control integrate with BMS?",
      answer: "Yes—access systems can trigger HVAC activation, lighting control, and CCTV recording based on occupancy patterns, improving energy efficiency and security event management."
    },
    {
      question: "How often should access control systems be tested?",
      answer: "Door controllers, readers, and lock mechanisms should be tested quarterly. Fire interface functionality must be verified during annual fire alarm testing to ensure means of escape integrity."
    }
  ];

  return (
    <>
      

      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema 
        name="Advanced Access Control Systems"
        description="Card, fob, biometric and integrated building access solutions for controlled environments."
        provider="EntireFM"
        areaServed="United Kingdom"
      />
      <FAQSchema faqs={faqs} />

      <div className="min-h-screen bg-background pt-20">
        <div className="relative h-[40vh] bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80')] bg-cover bg-center opacity-20" />
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Advanced Access Control Systems</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Card, fob, biometric and integrated building access solutions for controlled environments
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <Breadcrumb items={breadcrumbItems} />
          
          <div className="grid lg:grid-cols-3 gap-8 mt-8">
            <div className="lg:col-span-2 space-y-12">
              <section>
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                  <Fingerprint className="w-8 h-8 text-primary" />
                  Securing Controlled Environments
                </h2>
                <div className="prose prose-lg max-w-none space-y-4">
                  <p>
                    Advanced access control systems protect people, assets and data by restricting entry to authorized individuals while maintaining compliance with fire safety, data protection, and operational continuity requirements.
                  </p>
                  <p>
                    Modern systems integrate card readers, biometric authentication, mobile credentials, and time-based access rules to create flexible, auditable security infrastructure that adapts to changing operational needs.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                  <Shield className="w-8 h-8 text-primary" />
                  System Components & Testing
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-3">Door Controller Testing</h3>
                    <p className="text-muted-foreground">
                      Verify controller functionality, credential validation, access logging, and network connectivity to ensure reliable operation across distributed estates.
                    </p>
                  </div>
                  <div className="border rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-3">Fire Interface Checks</h3>
                    <p className="text-muted-foreground">
                      Confirm fire alarm activations trigger automatic door release on escape routes, maintaining means of escape integrity while securing the building during normal operation.
                    </p>
                  </div>
                  <div className="border rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-3">Door Release Compliance</h3>
                    <p className="text-muted-foreground">
                      Test fail-safe/fail-secure lock behavior, emergency override buttons, and power failure responses to meet fire safety and security requirements.
                    </p>
                  </div>
                  <div className="border rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-3">BMS Integration</h3>
                    <p className="text-muted-foreground">
                      Validate access events trigger HVAC activation, lighting control, and CCTV recording for energy efficiency and unified security event management.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                  <FileText className="w-8 h-8 text-primary" />
                  Fire Safety & Means of Escape
                </h2>
                <div className="prose prose-lg max-w-none space-y-4">
                  <p>
                    Access control systems on fire exit routes must be configured as <strong>fail-safe</strong> (unlock on power loss or fire alarm) to comply with Approved Document B and fire safety legislation. Fire doors with electronic locks require regular testing to ensure they release correctly during emergency scenarios.
                  </p>
                  <p>
                    High-security areas may use <strong>fail-secure</strong> locks that remain locked during power failure, but these must not be installed on designated means of escape routes.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                  <AlertTriangle className="w-8 h-8 text-destructive" />
                  Risks of Non-Compliant Systems
                </h2>
                <div className="bg-destructive/10 border-l-4 border-destructive p-6 rounded-lg space-y-4">
                  <p className="font-semibold text-lg">
                    Inadequately maintained access control systems expose estates to:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-1">→</span>
                      <span><strong>Fire safety breaches:</strong> Doors failing to release during emergencies trap occupants and breach means of escape requirements</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-1">→</span>
                      <span><strong>Unauthorized access:</strong> Failed controllers or credential cloning allow entry to restricted zones</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-1">→</span>
                      <span><strong>Audit trail gaps:</strong> System failures prevent investigation of security incidents or compliance breaches</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-1">→</span>
                      <span><strong>Operational lockouts:</strong> Controller faults or credential database errors prevent authorized staff from accessing critical areas</span>
                    </li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                  <DoorOpen className="w-8 h-8 text-primary" />
                  Related Security Services
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <Link href="/services/cctv-maintenance" className="border rounded-lg p-4 hover:border-primary transition-colors">
                    <h3 className="font-semibold mb-2">CCTV Maintenance</h3>
                    <p className="text-sm text-muted-foreground">Surveillance system compliance</p>
                  </Link>
                  <Link href="/services/anpr-systems" className="border rounded-lg p-4 hover:border-primary transition-colors">
                    <h3 className="font-semibold mb-2">ANPR Systems</h3>
                    <p className="text-sm text-muted-foreground">Vehicle access automation</p>
                  </Link>
                  <Link href="/services/fire-alarms" className="border rounded-lg p-4 hover:border-primary transition-colors">
                    <h3 className="font-semibold mb-2">Fire Alarm Systems</h3>
                    <p className="text-sm text-muted-foreground">Fire safety integration</p>
                  </Link>
                  <Link href="/services/bms-integration-testing" className="border rounded-lg p-4 hover:border-primary transition-colors">
                    <h3 className="font-semibold mb-2">BMS Integration</h3>
                    <p className="text-sm text-muted-foreground">Building systems coordination</p>
                  </Link>
                </div>
              </section>

              <section className="bg-primary/5 rounded-lg p-8">
                <h2 className="text-2xl font-bold mb-4">Request an Access Control Assessment</h2>
                <p className="text-muted-foreground mb-6">
                  Speak to our team about securing your estate with compliant, integrated access control infrastructure.
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

export default AccessControlAdvanced;
