import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Shield, FileCheck, AlertTriangle, Phone, Download, CheckCircle } from "lucide-react";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { SidebarCTA } from "@/components/shared/SidebarCTA";
import { FAQSection } from "@/components/shared/FAQSection";
import { SchemaMarkup, LocalBusinessSchema } from "@/components/shared/SchemaMarkup";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { useConversionTracking } from "@/hooks/useConversionTracking";

const ElectricalBirmingham = () => {
  const { trackPhoneClick, trackDownload, trackProposalRequest } = useConversionTracking();

  const faqs = [
    {
      question: "What electrical testing is required for Birmingham warehouses?",
      answer: "Birmingham logistics and warehouse facilities require comprehensive EICR testing every 5 years minimum, with more frequent inspections for high-load environments. Testing must cover distribution boards, three-phase supplies, lighting circuits, emergency systems, and specialist equipment connections. EntireFM conducts out-of-hours inspections to minimize operational downtime for uptime-critical facilities."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Commercial Electrical Compliance Birmingham | EICR Testing West Midlands</title>
        <meta name="description" content="EICR testing, fault resolution & safety certification for Birmingham and West Midlands. Minimize operational downtime & protect uptime-critical facilities with BS 7671 compliant electrical inspections." />
        <link rel="canonical" href="https://entirefm.com/electrical/birmingham" />
      </Helmet>

      <SchemaMarkup schema={{ "@context": "https://schema.org", "@type": "Service", "name": "Electrical Compliance - Birmingham", "provider": { "@type": "Organization", "name": "EntireFM" }, "areaServed": "Birmingham, UK" }} />
      <BreadcrumbSchema items={[{ label: "Electrical Services", href: "/services/electrical" }, { label: "Birmingham" }]} />
      <LocalBusinessSchema name="EntireFM Birmingham - Electrical" address={{ street: "Birmingham Office", city: "Birmingham", postalCode: "B1 1AA", country: "UK" }} />

      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-background/90 z-10" />
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop')` }} aria-label="Electrical testing equipment in Birmingham warehouse facility" />
        
        <div className="relative z-20 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-light text-white mb-6">Commercial Electrical Compliance – Birmingham</h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto font-light">Minimize operational downtime & protect uptime-critical facilities across the West Midlands.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" onClick={() => trackProposalRequest('electrical-birmingham')}>Request Compliance Survey</Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" onClick={() => trackDownload('eicr-checklist')}><Download className="mr-2 h-5 w-5" />EICR Checklist</Button>
          </div>
        </div>
      </section>

      <Breadcrumb items={[{ label: "Electrical Services", href: "/services/electrical" }, { label: "Birmingham" }]} />

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-16">
            <section>
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">Uptime-Critical Electrical Compliance</h2>
              <p className="text-lg text-muted-foreground">Birmingham's automotive supply chain and large-scale logistics operations demand electrical compliance that protects operational continuity. EntireFM delivers BS 7671-certified EICR testing across NEC corridor facilities, JLR supply chain sites, and regional distribution hubs with out-of-hours scheduling to minimize business disruption.</p>
            </section>

            <section>
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">Remedials Without Delay</h2>
              <div className="bg-muted/50 border-l-4 border-primary p-6 rounded-r-lg">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium mb-2">Immediate C1/C2 Response</h3>
                    <p className="text-muted-foreground">Dangerous and potentially dangerous defects receive same-day attention across Birmingham. We carry replacement components and implement temporary mitigations to maintain operational uptime while permanent repairs are completed.</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-muted/30 p-8 rounded-lg">
              <h2 className="text-3xl font-light mb-6">West Midlands Coverage</h2>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                {['Birmingham City Centre', 'Solihull', 'NEC Corridor', 'Castle Bromwich', 'Longbridge', 'Digbeth'].map(area => (
                  <div key={area} className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary" /><span>{area}</span></div>
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

export default ElectricalBirmingham;
