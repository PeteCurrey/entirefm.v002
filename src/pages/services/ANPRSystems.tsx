import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { ArrowRight, Car, Shield, FileText, AlertTriangle, Camera } from "lucide-react";
import { Link } from "react-router-dom";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { ServiceSchema, FAQSchema } from "@/components/shared/SchemaMarkup";
import { FAQSection } from "@/components/shared/FAQSection";
import { SidebarCTA } from "@/components/shared/SidebarCTA";

const ANPRSystems = () => {
  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "ANPR Systems" }
  ];

  const faqs = [
    {
      question: "How does ANPR improve car park management?",
      answer: "ANPR automates entry/exit control, eliminates manual ticketing, reduces congestion, provides occupancy data, and enables enforcement of permit/payment rules without physical barriers or staff intervention."
    },
    {
      question: "What happens if ANPR cameras fail?",
      answer: "System failures can cause vehicle queuing, unauthorized access, lost revenue, and operational disruption. Fail-safe configurations determine whether barriers open or remain closed during outages."
    },
    {
      question: "Is ANPR data subject to GDPR?",
      answer: "Yes—vehicle registration marks are personal data. Systems must have clear signage, justified retention periods, controlled access, and documented policies for data handling and deletion."
    },
    {
      question: "Can ANPR integrate with access control systems?",
      answer: "Yes—ANPR can trigger door/barrier release for authorized vehicles, log entry/exit events, and integrate with security management platforms for unified estate access control."
    },
    {
      question: "What accuracy should I expect from ANPR systems?",
      answer: "Quality systems achieve 95-98% read accuracy in good conditions. Accuracy depends on camera positioning, lighting, plate condition, weather, and vehicle speed. Regular maintenance and calibration are critical."
    }
  ];

  return (
    <>
      <Helmet>
        <title>ANPR System Installation & Maintenance | Automated Number Plate Recognition</title>
        <meta name="description" content="Automated number plate recognition for controlled access, vehicle flow management and estate security. Expert ANPR installation and maintenance." />
      </Helmet>

      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema 
        name="ANPR System Installation & Maintenance"
        description="Automated number plate recognition for controlled access, vehicle flow management and estate security."
        provider="EntireFM"
        areaServed="United Kingdom"
      />
      <FAQSchema faqs={faqs} />

      <div className="min-h-screen bg-background pt-20">
        <div className="relative h-[40vh] bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506521781263-d8422e82f27a?q=80')] bg-cover bg-center opacity-20" />
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">ANPR System Installation & Maintenance</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Automated number plate recognition for controlled access, vehicle flow management and estate security
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <Breadcrumb items={breadcrumbItems} />
          
          <div className="grid lg:grid-cols-3 gap-8 mt-8">
            <div className="lg:col-span-2 space-y-12">
              <section>
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                  <Car className="w-8 h-8 text-primary" />
                  Automated Vehicle Access Control
                </h2>
                <div className="prose prose-lg max-w-none space-y-4">
                  <p>
                    ANPR (Automatic Number Plate Recognition) systems automate vehicle access control across commercial estates, car parks, logistics hubs and residential developments—eliminating manual ticketing, reducing congestion, and providing real-time occupancy data.
                  </p>
                  <p>
                    Modern ANPR technology integrates with barrier controls, payment platforms, and security systems to create frictionless vehicle flow while maintaining strict access control and audit trails.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                  <Shield className="w-8 h-8 text-primary" />
                  System Components & Integration
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-3">Car Park Automation</h3>
                    <p className="text-muted-foreground">
                      Touchless entry/exit, permit validation, payment enforcement, and real-time occupancy monitoring eliminate queuing and manual processing.
                    </p>
                  </div>
                  <div className="border rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-3">Barrier Integration</h3>
                    <p className="text-muted-foreground">
                      ANPR triggers barrier operation for authorized vehicles, logs entry/exit events, and maintains audit trails for security and billing purposes.
                    </p>
                  </div>
                  <div className="border rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-3">Data Compliance</h3>
                    <p className="text-muted-foreground">
                      Vehicle registration marks are personal data under GDPR. Systems must implement clear signage, justified retention, and controlled access policies.
                    </p>
                  </div>
                  <div className="border rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-3">Operational Reliability</h3>
                    <p className="text-muted-foreground">
                      Camera positioning, lighting conditions, weather resilience, and maintenance schedules directly impact read accuracy and system uptime.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                  <FileText className="w-8 h-8 text-primary" />
                  Fail-Open vs Fail-Safe Configuration
                </h2>
                <div className="prose prose-lg max-w-none space-y-4">
                  <p>
                    ANPR system failures require predetermined responses. <strong>Fail-open</strong> configurations allow barriers to open during outages, prioritizing access continuity but risking unauthorized entry. <strong>Fail-safe</strong> configurations keep barriers closed, maintaining security but potentially causing congestion.
                  </p>
                  <p>
                    The correct configuration depends on site risk profile, fire safety requirements, and operational priorities. Both approaches require clear signage and emergency override procedures.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                  <AlertTriangle className="w-8 h-8 text-destructive" />
                  Risks of System Failure
                </h2>
                <div className="bg-destructive/10 border-l-4 border-destructive p-6 rounded-lg space-y-4">
                  <p className="font-semibold text-lg">
                    Inadequately maintained ANPR systems expose estates to:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-1">→</span>
                      <span><strong>Vehicle queuing:</strong> Failed cameras or processing delays create congestion at entry/exit points</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-1">→</span>
                      <span><strong>Unauthorized access:</strong> Misreads or system outages allow unpermitted vehicles to enter controlled zones</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-1">→</span>
                      <span><strong>Revenue loss:</strong> Failed enforcement of payment rules in commercial car parks</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-1">→</span>
                      <span><strong>GDPR breaches:</strong> Unlawful retention, inadequate security, or failure to comply with data subject rights</span>
                    </li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                  <Camera className="w-8 h-8 text-primary" />
                  Related Security Services
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <Link to="/services/cctv-maintenance" className="border rounded-lg p-4 hover:border-primary transition-colors">
                    <h3 className="font-semibold mb-2">CCTV Maintenance</h3>
                    <p className="text-sm text-muted-foreground">Surveillance system compliance</p>
                  </Link>
                  <Link to="/services/access-control" className="border rounded-lg p-4 hover:border-primary transition-colors">
                    <h3 className="font-semibold mb-2">Access Control Systems</h3>
                    <p className="text-sm text-muted-foreground">Card and biometric access</p>
                  </Link>
                  <Link to="/services/security-systems-healthcheck" className="border rounded-lg p-4 hover:border-primary transition-colors">
                    <h3 className="font-semibold mb-2">Security Health Check</h3>
                    <p className="text-sm text-muted-foreground">Whole-site security assessments</p>
                  </Link>
                  <Link to="/services/loading-bay-safety-systems" className="border rounded-lg p-4 hover:border-primary transition-colors">
                    <h3 className="font-semibold mb-2">Loading Bay Safety</h3>
                    <p className="text-sm text-muted-foreground">Industrial traffic management</p>
                  </Link>
                </div>
              </section>

              <section className="bg-primary/5 rounded-lg p-8">
                <h2 className="text-2xl font-bold mb-4">Request an ANPR System Consultation</h2>
                <p className="text-muted-foreground mb-6">
                  Speak to our team about automated vehicle access control solutions for your estate.
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

export default ANPRSystems;
