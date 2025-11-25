import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Download, CheckCircle, AlertTriangle } from "lucide-react";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { SidebarCTA } from "@/components/shared/SidebarCTA";
import { FAQSection } from "@/components/shared/FAQSection";
import { SchemaMarkup, LocalBusinessSchema } from "@/components/shared/SchemaMarkup";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { useConversionTracking } from "@/hooks/useConversionTracking";

const EmergencyLightingBirmingham = () => {
  const { trackDownload, trackProposalRequest } = useConversionTracking();

  const faqs = [
    {
      question: "How fast can faults be repaired?",
      answer: "Failed batteries and defective luminaires are replaced immediately using emergency stock carried by engineers. Critical failures are resolved on-site during the initial test to prevent any compliance gaps."
    },
    {
      question: "Are out-of-hours tests available?",
      answer: "Yes - we schedule testing outside operational hours to minimize disruption. Weekend and night-time slots are available for 24/7 operations including logistics and manufacturing facilities."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Emergency Lighting in Birmingham | BS 5266 Testing & Compliance | EntireFM</title>
        <meta name="description" content="Life-safety illumination testing across Birmingham's logistics, retail and corporate spaces. BS 5266 compliance with rapid remedials." />
        <link rel="canonical" href="https://entirefm.com/services/emergency-lighting" />
      </Helmet>

      <SchemaMarkup schema={{ "@context": "https://schema.org", "@type": "Service", "name": "Emergency Lighting Compliance - Birmingham", "provider": { "@type": "Organization", "name": "EntireFM" }, "areaServed": "Birmingham, UK" }} />
      <BreadcrumbSchema items={[{ label: "Emergency Lighting Services", href: "/services/emergency-lighting" }, { label: "Birmingham" }]} />
      <LocalBusinessSchema name="EntireFM Birmingham - Emergency Lighting" address={{ street: "Birmingham Office", city: "Birmingham", postalCode: "B1 1AA", country: "UK" }} />

      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-background/90 z-10" />
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2070&auto=format&fit=crop')` }} aria-label="Emergency lighting compliance testing in Birmingham logistics facility" />
        
        <div className="relative z-20 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-light text-white mb-6">Emergency Lighting Compliance – Birmingham</h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto font-light">Life-safety illumination testing across Birmingham's logistics, retail and corporate spaces.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" onClick={() => trackProposalRequest('emergency-lighting-birmingham')}>Request Audit</Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" onClick={() => trackDownload('bs5266-checklist')}><Download className="mr-2 h-5 w-5" />BS 5266 Checklist</Button>
          </div>
        </div>
      </section>

      <Breadcrumb items={[{ label: "Emergency Lighting Services", href: "/services/emergency-lighting" }, { label: "Birmingham" }]} />

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-16">
            <section>
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">Evacuation Safety in Birmingham</h2>
              <p className="text-lg text-muted-foreground mb-4">Failure = shutdown + liability + reputational harm.</p>
              <p className="text-lg text-muted-foreground mb-4">We protect exits, escape routes & safety-critical visibility.</p>
            </section>

            <section>
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">BS 5266 Compliance</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-muted/30 p-6 rounded-lg">
                  <h3 className="font-medium mb-3">Function tests monthly</h3>
                  <p className="text-sm text-muted-foreground">Brief activation checks to verify all units operate</p>
                </div>
                <div className="bg-muted/30 p-6 rounded-lg">
                  <h3 className="font-medium mb-3">Duration tests annually</h3>
                  <p className="text-sm text-muted-foreground">Full 3-hour discharge verification</p>
                </div>
                <div className="bg-muted/30 p-6 rounded-lg">
                  <h3 className="font-medium mb-3">Full documentation</h3>
                  <p className="text-sm text-muted-foreground">Complete audit trail for inspections</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">Rapid Remedials</h2>
              <div className="bg-muted/50 border-l-4 border-primary p-6 rounded-r-lg">
                <p className="text-lg text-muted-foreground">We restore compliance before safety is compromised. Failed batteries and defective luminaires are replaced immediately with emergency stock.</p>
              </div>
            </section>

            <section>
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">Governance Platform</h2>
              <p className="text-lg text-muted-foreground mb-4">Evidence stored, accessible & audit-ready:</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium mb-1">Digital test records</h3>
                    <p className="text-sm text-muted-foreground">Instant access to compliance history</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium mb-1">Photographic evidence</h3>
                    <p className="text-sm text-muted-foreground">Visual proof of every test</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium mb-1">Compliance dashboard</h3>
                    <p className="text-sm text-muted-foreground">Real-time portfolio status</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium mb-1">Renewal alerts</h3>
                    <p className="text-sm text-muted-foreground">Automated test reminders</p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">Sectors</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card border p-6 rounded-lg">
                  <h3 className="text-xl font-medium mb-2">Industrial</h3>
                  <p className="text-muted-foreground">Manufacturing and warehouse evacuation safety</p>
                </div>
                <div className="bg-card border p-6 rounded-lg">
                  <h3 className="text-xl font-medium mb-2">Retail</h3>
                  <p className="text-muted-foreground">High-footfall shopping centre compliance</p>
                </div>
                <div className="bg-card border p-6 rounded-lg">
                  <h3 className="text-xl font-medium mb-2">Hospitality</h3>
                  <p className="text-muted-foreground">Hotel and leisure facility life safety</p>
                </div>
                <div className="bg-card border p-6 rounded-lg">
                  <h3 className="text-xl font-medium mb-2">Business parks</h3>
                  <p className="text-muted-foreground">Corporate estate evacuation protection</p>
                </div>
              </div>
            </section>

            <section className="bg-muted/20 p-8 rounded-lg">
              <h2 className="text-3xl font-light mb-4">Case Study</h2>
              <p className="text-muted-foreground italic">Lighting reliability restored for NEC-linked logistics firm.</p>
            </section>

            <section className="bg-muted/30 p-8 rounded-lg">
              <h2 className="text-3xl font-light mb-6">Coverage</h2>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                {['City Centre', 'Digbeth', 'Solihull', 'NEC corridor'].map(area => (
                  <div key={area} className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary" /><span>{area}</span></div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-background rounded-lg">
                <p className="text-sm text-muted-foreground mb-2">📩 <a href="mailto:birmingham@entirefm.com" className="text-primary hover:underline">birmingham@entirefm.com</a></p>
              </div>
            </section>

            <FAQSection faqs={faqs} />

            <section className="bg-gradient-to-br from-primary/10 to-primary/5 p-12 rounded-lg text-center">
              <h2 className="text-3xl md:text-4xl font-light mb-6">Request 3-Hour Test</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">Protect your Birmingham logistics and commercial estates with comprehensive emergency lighting compliance.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="default" onClick={() => trackProposalRequest('emergency-lighting-birmingham-footer')}>Request 3-Hour Test</Button>
              </div>
              <p className="text-sm text-muted-foreground mt-4">📩 birmingham@entirefm.com</p>
            </section>
          </div>
          <div className="lg:col-span-1"><div className="sticky top-4"><SidebarCTA /></div></div>
        </div>
      </div>
    </>
  );
};

export default EmergencyLightingBirmingham;
