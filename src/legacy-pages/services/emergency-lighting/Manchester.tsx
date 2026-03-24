"use client";

;
import { Button } from "@/components/ui/button";
import { Download, CheckCircle, AlertTriangle } from "lucide-react";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { SidebarCTA } from "@/components/shared/SidebarCTA";
import { FAQSection } from "@/components/shared/FAQSection";
import { SchemaMarkup, LocalBusinessSchema } from "@/components/shared/SchemaMarkup";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { useConversionTracking } from "@/hooks/useConversionTracking";

const EmergencyLightingManchester = () => {
  const { trackDownload, trackProposalRequest } = useConversionTracking();

  const faqs = [
    {
      question: "What constitutes a failure?",
      answer: "A failure occurs when emergency lighting units don't illuminate correctly during functional tests, or when batteries can't maintain illumination for the full 3-hour statutory duration during annual discharge tests."
    },
    {
      question: "Who receives certification copies?",
      answer: "Digital certificates are provided to the Responsible Person and can be shared with insurers, fire officers, and auditors through our compliance platform with instant access."
    }
  ];

  return (
    <>
      

      <SchemaMarkup schema={{ "@context": "https://schema.org", "@type": "Service", "name": "Emergency Lighting Compliance - Manchester", "provider": { "@type": "Organization", "name": "EntireFM" }, "areaServed": "Manchester, UK" }} />
      <BreadcrumbSchema items={[{ label: "Emergency Lighting Services", href: "/services/emergency-lighting" }, { label: "Manchester" }]} />
      <LocalBusinessSchema name="EntireFM Manchester - Emergency Lighting" address={{ street: "Manchester Office", city: "Manchester", postalCode: "M1 1AA", country: "UK" }} />

      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-background/90 z-10" />
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1515263487990-61b07816b324?q=80&w=2070&auto=format&fit=crop')` }} aria-label="Emergency lighting in Manchester student accommodation corridor with evacuation route signage" />
        
        <div className="relative z-20 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-light text-white mb-6">Emergency Lighting Compliance – Manchester</h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto font-light">Protect residents, guests & visitors with BS 5266 testing.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" onClick={() => trackProposalRequest('emergency-lighting-manchester')}>Book Audit</Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" onClick={() => trackDownload('bs5266-checklist')}><Download className="mr-2 h-5 w-5" />BS 5266 Checklist</Button>
          </div>
        </div>
      </section>

      <Breadcrumb items={[{ label: "Emergency Lighting Services", href: "/services/emergency-lighting" }, { label: "Manchester" }]} />

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-16">
            <section>
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">Evacuation Risk in Manchester</h2>
              <p className="text-lg text-muted-foreground mb-4">Student housing + nightlife venues = high safety accountability.</p>
              <p className="text-lg font-medium text-foreground">We ensure evacuation routes remain illuminated when power fails.</p>
            </section>

            <section>
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">Testing & Certification</h2>
              <p className="text-lg text-muted-foreground mb-4">Full coverage checks + remedial execution:</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-muted/30 p-6 rounded-lg">
                  <h3 className="font-medium mb-3">Monthly functional tests</h3>
                  <p className="text-sm text-muted-foreground">Brief checks to verify all units activate</p>
                </div>
                <div className="bg-muted/30 p-6 rounded-lg">
                  <h3 className="font-medium mb-3">Annual 3-hour duration tests</h3>
                  <p className="text-sm text-muted-foreground">Full battery discharge verification</p>
                </div>
                <div className="bg-muted/30 p-6 rounded-lg">
                  <h3 className="font-medium mb-3">Immediate remedials</h3>
                  <p className="text-sm text-muted-foreground">Failed units replaced on-site</p>
                </div>
                <div className="bg-muted/30 p-6 rounded-lg">
                  <h3 className="font-medium mb-3">Compliance documentation</h3>
                  <p className="text-sm text-muted-foreground">Complete audit trail for inspections</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">Governance</h2>
              <p className="text-lg text-muted-foreground mb-4">Digital traceability for all responsible persons:</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium mb-1">Test records</h3>
                    <p className="text-sm text-muted-foreground">Complete compliance history</p>
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
                    <h3 className="font-medium mb-1">Certificate storage</h3>
                    <p className="text-sm text-muted-foreground">Instant access for audits</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium mb-1">Renewal alerts</h3>
                    <p className="text-sm text-muted-foreground">Automated compliance reminders</p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">Sectors</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card border p-6 rounded-lg">
                  <h3 className="text-xl font-medium mb-2">PBSA</h3>
                  <p className="text-muted-foreground">Student accommodation life safety compliance</p>
                </div>
                <div className="bg-card border p-6 rounded-lg">
                  <h3 className="text-xl font-medium mb-2">Retail</h3>
                  <p className="text-muted-foreground">Shopping centre evacuation protection</p>
                </div>
                <div className="bg-card border p-6 rounded-lg">
                  <h3 className="text-xl font-medium mb-2">Hospitality</h3>
                  <p className="text-muted-foreground">Hotel and entertainment venue safety</p>
                </div>
                <div className="bg-card border p-6 rounded-lg">
                  <h3 className="text-xl font-medium mb-2">Office estates</h3>
                  <p className="text-muted-foreground">Corporate building evacuation compliance</p>
                </div>
              </div>
            </section>

            <section className="bg-muted/20 p-8 rounded-lg">
              <h2 className="text-3xl font-light mb-4">Case Study</h2>
              <p className="text-muted-foreground italic">Full coverage upgrade across city-centre residential block.</p>
            </section>

            <section className="bg-muted/30 p-8 rounded-lg">
              <h2 className="text-3xl font-light mb-6">Coverage</h2>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                {['Salford Quays', 'Trafford', 'Airport City', 'Didsbury'].map(area => (
                  <div key={area} className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary" /><span>{area}</span></div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-background rounded-lg">
                <p className="text-sm text-muted-foreground mb-2">📩 <a href="mailto:manchester@entirefm.com" className="text-primary hover:underline">manchester@entirefm.com</a></p>
              </div>
            </section>

            <FAQSection faqs={faqs} />

            <section className="bg-gradient-to-br from-primary/10 to-primary/5 p-12 rounded-lg text-center">
              <h2 className="text-3xl md:text-4xl font-light mb-6">Request Compliance Visit</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">Protect your Manchester PBSA and commercial estates with comprehensive emergency lighting testing.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="default" onClick={() => trackProposalRequest('emergency-lighting-manchester-footer')}>Request Compliance Visit</Button>
              </div>
              <p className="text-sm text-muted-foreground mt-4">📩 manchester@entirefm.com</p>
            </section>
          </div>
          <div className="lg:col-span-1"><div className="sticky top-4"><SidebarCTA /></div></div>
        </div>
      </div>
    </>
  );
};

export default EmergencyLightingManchester;
