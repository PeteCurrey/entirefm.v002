import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { ArrowRight, Video, Shield, FileText, AlertTriangle, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { ServiceSchema, FAQSchema } from "@/components/shared/SchemaMarkup";
import { FAQSection } from "@/components/shared/FAQSection";
import { SidebarCTA } from "@/components/shared/SidebarCTA";

const CCTVMaintenance = () => {
  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "CCTV Maintenance" }
  ];

  const faqs = [
    {
      question: "How often should CCTV systems be serviced?",
      answer: "Quarterly health checks are recommended for business-critical systems, with annual deep inspections covering recording integrity, lens calibration, storage capacity and network connectivity."
    },
    {
      question: "What are the GDPR obligations for CCTV systems?",
      answer: "GDPR requires clear signage, limited retention periods (typically 30 days unless justified), controlled access to footage, and documented policies for data handling, storage and deletion."
    },
    {
      question: "What happens if CCTV footage is unavailable during an incident?",
      answer: "Insurance claims may be invalidated, liability disputes become harder to defend, and regulatory authorities may question duty of care compliance, particularly in sectors like retail, healthcare and PBSA."
    },
    {
      question: "Can CCTV systems integrate with access control?",
      answer: "Yes—modern systems can trigger camera recording on door events, link video verification to access attempts, and provide unified monitoring across security infrastructure."
    },
    {
      question: "What causes most CCTV system failures?",
      answer: "Common issues include hard drive failures, network connectivity drops, power supply problems, lens obstruction, and outdated firmware creating security vulnerabilities."
    }
  ];

  return (
    <>
      <Helmet>
        <title>CCTV System Maintenance & Compliance | Estate Surveillance Services</title>
        <meta name="description" content="Protecting estates with compliant surveillance systems that meet SIA, GDPR and operational continuity standards. Expert CCTV maintenance and compliance." />
      </Helmet>

      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema 
        name="CCTV System Maintenance & Compliance"
        description="Protecting estates with compliant surveillance systems that meet SIA, GDPR and operational continuity standards."
        provider="EntireFM"
        areaServed="United Kingdom"
      />
      <FAQSchema faqs={faqs} />

      <div className="min-h-screen bg-background pt-20">
        <div className="relative h-[40vh] bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80')] bg-cover bg-center opacity-20" />
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">CCTV System Maintenance & Compliance</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Protecting estates with compliant surveillance systems that meet SIA, GDPR and operational continuity standards
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <Breadcrumb items={breadcrumbItems} />
          
          <div className="grid lg:grid-cols-3 gap-8 mt-8">
            <div className="lg:col-span-2 space-y-12">
              <section>
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                  <Video className="w-8 h-8 text-primary" />
                  The Role of Surveillance in Estate Protection
                </h2>
                <div className="prose prose-lg max-w-none space-y-4">
                  <p>
                    CCTV systems are critical infrastructure for protecting people, property and reputation across commercial estates. But surveillance technology is only effective when it operates reliably, stores footage securely, and meets evolving regulatory obligations.
                  </p>
                  <p>
                    Failure to maintain systems can result in evidential gaps during incidents, GDPR breaches, insurance invalidation, and operational blind spots that expose estates to risk.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                  <Shield className="w-8 h-8 text-primary" />
                  System Health Checks & Preventative Maintenance
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-3">Recording Integrity</h3>
                    <p className="text-muted-foreground">
                      Verify footage is being captured continuously, storage capacity is adequate, and retention periods comply with GDPR and sector-specific requirements.
                    </p>
                  </div>
                  <div className="border rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-3">Network Connectivity</h3>
                    <p className="text-muted-foreground">
                      Test remote access, bandwidth performance, and failover redundancy to ensure uninterrupted monitoring capability across distributed estates.
                    </p>
                  </div>
                  <div className="border rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-3">Camera Function Testing</h3>
                    <p className="text-muted-foreground">
                      Inspect lens clarity, PTZ operation, night vision performance, and positioning to maintain evidential-quality footage across all zones.
                    </p>
                  </div>
                  <div className="border rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-3">Integration with Access Control</h3>
                    <p className="text-muted-foreground">
                      Verify CCTV triggers correctly on door events, alarm activations, and access attempts to provide unified security event management.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                  <FileText className="w-8 h-8 text-primary" />
                  GDPR & Data Protection Compliance
                </h2>
                <div className="prose prose-lg max-w-none space-y-4">
                  <p>
                    CCTV systems must comply with GDPR requirements including clear signage, justified retention periods (typically 30 days unless legally required otherwise), restricted access to footage, and documented policies for handling subject access requests.
                  </p>
                  <p>
                    Non-compliance can result in ICO enforcement action, fines up to £17.5m or 4% of turnover, and reputational damage that undermines stakeholder confidence in estate management.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                  <AlertTriangle className="w-8 h-8 text-destructive" />
                  Risks of Surveillance System Failure
                </h2>
                <div className="bg-destructive/10 border-l-4 border-destructive p-6 rounded-lg space-y-4">
                  <p className="font-semibold text-lg">
                    Inadequately maintained CCTV systems expose estates to:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-1">→</span>
                      <span><strong>Evidential gaps:</strong> Missing footage during incidents undermines insurance claims, legal defenses, and incident investigation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-1">→</span>
                      <span><strong>GDPR breaches:</strong> Unlawful retention, inadequate security or failure to comply with subject access requests</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-1">→</span>
                      <span><strong>Insurance invalidation:</strong> Policies often require functional surveillance as a condition of cover</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-1">→</span>
                      <span><strong>Operational blind spots:</strong> Undetected camera failures create vulnerabilities in estate security posture</span>
                    </li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                  <Eye className="w-8 h-8 text-primary" />
                  Related Security Services
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <Link to="/services/access-control" className="border rounded-lg p-4 hover:border-primary transition-colors">
                    <h3 className="font-semibold mb-2">Access Control Systems</h3>
                    <p className="text-sm text-muted-foreground">Card, fob and biometric access solutions</p>
                  </Link>
                  <Link to="/services/anpr-systems" className="border rounded-lg p-4 hover:border-primary transition-colors">
                    <h3 className="font-semibold mb-2">ANPR Systems</h3>
                    <p className="text-sm text-muted-foreground">Automated number plate recognition</p>
                  </Link>
                  <Link to="/services/security-systems-healthcheck" className="border rounded-lg p-4 hover:border-primary transition-colors">
                    <h3 className="font-semibold mb-2">Security Systems Health Check</h3>
                    <p className="text-sm text-muted-foreground">Whole-site security assessments</p>
                  </Link>
                  <Link to="/services/fire-alarms" className="border rounded-lg p-4 hover:border-primary transition-colors">
                    <h3 className="font-semibold mb-2">Fire Alarm Systems</h3>
                    <p className="text-sm text-muted-foreground">Life safety and security integration</p>
                  </Link>
                </div>
              </section>

              <section className="bg-primary/5 rounded-lg p-8">
                <h2 className="text-2xl font-bold mb-4">Request a Surveillance Compliance Review</h2>
                <p className="text-muted-foreground mb-6">
                  Speak to our security systems team about maintaining compliant, reliable CCTV infrastructure across your estate.
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

export default CCTVMaintenance;
