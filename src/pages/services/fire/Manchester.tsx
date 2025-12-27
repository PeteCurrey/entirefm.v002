import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Clock, FileCheck, AlertTriangle, Building2, Phone, CheckCircle } from "lucide-react";
import { SidebarCTA } from "@/components/shared/SidebarCTA";
import { FAQSection } from "@/components/shared/FAQSection";
import { SchemaMarkup, LocalBusinessSchema } from "@/components/shared/SchemaMarkup";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { useConversionTracking } from "@/hooks/useConversionTracking";
import ServiceHeroSection from "@/components/shared/ServiceHeroSection";

const FireManchester = () => {
  const { trackPhoneClick } = useConversionTracking();

  const faqs = [
    { question: "What fire alarm testing is required for Manchester PBSA developments?", answer: "Manchester's student accommodation requires BS 5839 Category L1 systems with weekly call point testing, monthly full-system verification, and quarterly battery checks." },
    { question: "How does Manchester's older building stock affect fire compliance?", answer: "Many Victorian and Edwardian commercial buildings require retrospective fire alarm installations. Our Manchester engineers are experienced in integrating modern BS 5839 systems into historic structures." },
    { question: "What documentation is required for fire alarm compliance in Manchester hotels?", answer: "Manchester hospitality venues must demonstrate comprehensive fire safety management including current fire risk assessments, BS 5839 certification, and complete test log books." }
  ];

  const heroStats = [
    { value: "24/7", label: "Emergency Response" },
    { value: "4hr", label: "PBSA Response Time" },
    { value: "BS 5839", label: "Certified" },
    { value: "100", label: "Greater Manchester", suffix: "%" }
  ];

  return (
    <>
      <Helmet>
        <title>Fire Safety Compliance in Manchester | Local Testing & Statutory Compliance | EntireFM</title>
        <meta name="description" content="Protect people, operations, and legal responsibility across Greater Manchester. Statutory fire alarm testing, BS 5839 certification for PBSA, hospitality and commercial sites." />
        <link rel="canonical" href="https://entirefm.com/services/fire-safety" />
      </Helmet>

      <SchemaMarkup schema={{ "@context": "https://schema.org", "@type": "Service", "name": "Fire Alarm Compliance Services - Manchester", "provider": { "@type": "Organization", "name": "EntireFM" }, "areaServed": "Manchester, UK" }} />
      <BreadcrumbSchema items={[{ label: "Fire Compliance", href: "/services/fire-alarms" }, { label: "Manchester" }]} />
      <LocalBusinessSchema name="EntireFM Manchester - Fire Compliance" address={{ street: "Manchester Office", city: "Manchester", postalCode: "M1 1AA", country: "UK" }} />

      <ServiceHeroSection
        breadcrumbItems={[{ label: "Fire Compliance", href: "/services/fire-alarms" }, { label: "Manchester" }]}
        title="Fire Alarm Compliance Services – Manchester"
        description="Protect people, operations, and legal responsibility across Greater Manchester. Statutory testing, certification & urgent remedials — handled with zero excuses."
        stats={heroStats}
        primaryCTA={{ label: "Request Fire Compliance Audit", href: "/contact" }}
        secondaryCTA={{ label: "Download Fire Safety Checklist", href: "/resources" }}
        backgroundImage="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2070&auto=format&fit=crop"
      />

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-16">
            <section>
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">Life-Safety Compliance with Audit-Ready Evidence</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">Commercial density and older building stock across Greater Manchester increase the priority for proactive fire compliance. EntireFM delivers BS 5839-compliant testing that protects both lives and your licensing status.</p>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <Shield className="h-10 w-10 text-destructive mb-4" />
                  <h3 className="text-xl font-medium mb-2">BS 5839 Certified Testing</h3>
                  <p className="text-muted-foreground">All Manchester engineers hold current third-party accreditation with specialist PBSA and hospitality knowledge.</p>
                </Card>
                <Card className="p-6">
                  <FileCheck className="h-10 w-10 text-destructive mb-4" />
                  <h3 className="text-xl font-medium mb-2">Licensing Support</h3>
                  <p className="text-muted-foreground">Complete documentation packages that satisfy council licensing requirements.</p>
                </Card>
              </div>
            </section>

            <section>
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">Remedials Closed Fast</h2>
              <div className="bg-muted/50 border-l-4 border-destructive p-6 rounded-r-lg">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="h-6 w-6 text-destructive flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium mb-2">Priority Response for Sleeping Risk</h3>
                    <p className="text-muted-foreground">PBSA and hotel faults are prioritized with 4-hour response across Greater Manchester.</p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">Single Source of Truth</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6 text-center">
                  <Clock className="h-8 w-8 text-destructive mx-auto mb-3" />
                  <h3 className="font-medium mb-2">Live Compliance Status</h3>
                  <p className="text-sm text-muted-foreground">Instant dashboard showing upcoming tests</p>
                </Card>
                <Card className="p-6 text-center">
                  <FileCheck className="h-8 w-8 text-destructive mx-auto mb-3" />
                  <h3 className="font-medium mb-2">Photo Evidence</h3>
                  <p className="text-sm text-muted-foreground">Timestamped images of all tests</p>
                </Card>
                <Card className="p-6 text-center">
                  <CheckCircle className="h-8 w-8 text-destructive mx-auto mb-3" />
                  <h3 className="font-medium mb-2">Licensing Documentation</h3>
                  <p className="text-sm text-muted-foreground">Export compliance reports for council submissions</p>
                </Card>
              </div>
            </section>

            <Card className="bg-destructive text-white p-8 border-none">
              <div className="flex items-center gap-4 mb-4">
                <Phone className="h-10 w-10" />
                <h3 className="text-2xl font-medium">24/7 Emergency Response</h3>
              </div>
              <p className="text-lg mb-4 text-white/90">Sleeping risk faults prioritized with 4-hour response across Greater Manchester.</p>
              <Button variant="secondary" size="lg" onClick={() => trackPhoneClick()}>Call Emergency Helpdesk</Button>
            </Card>

            <section>
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">Sectors We Protect in Manchester</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Link to="/sectors/residential-pbsa" className="group">
                  <Card className="p-6 hover:shadow-lg transition-all">
                    <Building2 className="h-8 w-8 text-destructive mb-3" />
                    <h3 className="text-xl font-medium mb-2 group-hover:text-destructive transition-colors">PBSA & Student Housing</h3>
                    <p className="text-muted-foreground text-sm">L1 system requirements with priority fault response</p>
                  </Card>
                </Link>
                <Link to="/sectors/hospitality-leisure" className="group">
                  <Card className="p-6 hover:shadow-lg transition-all">
                    <Building2 className="h-8 w-8 text-destructive mb-3" />
                    <h3 className="text-xl font-medium mb-2 group-hover:text-destructive transition-colors">Hospitality & Leisure</h3>
                    <p className="text-muted-foreground text-sm">Hotels, restaurants with complex licensing requirements</p>
                  </Card>
                </Link>
              </div>
            </section>

            <section className="bg-muted/30 p-8 rounded-lg">
              <h2 className="text-3xl font-light mb-6">Greater Manchester Coverage</h2>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                {['Trafford Park', 'Salford Quays', 'Airport City', 'Northern Quarter', 'Oxford Road Corridor', 'Spinningfields'].map(area => (
                  <div key={area} className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-destructive" /><span>{area}</span></div>
                ))}
              </div>
            </section>

            <FAQSection faqs={faqs} />
          </div>
          <div className="lg:col-span-1"><div className="sticky top-4"><SidebarCTA /></div></div>
        </div>
      </div>
    </>
  );
};

export default FireManchester;
