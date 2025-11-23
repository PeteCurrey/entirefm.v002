import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { SidebarCTA } from "@/components/shared/SidebarCTA";
import { SchemaMarkup, LocalBusinessSchema } from "@/components/shared/SchemaMarkup";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { FAQSection } from "@/components/shared/FAQSection";
import { useConversionTracking } from "@/hooks/useConversionTracking";
import { Download } from "lucide-react";

const EmergencyLightingChesterfield = () => {
  const { trackDownload, trackProposalRequest } = useConversionTracking();

  const faqs = [
    {
      question: "Why is emergency lighting critical in logistics facilities?",
      answer: "High-bay warehouses with complex layouts require reliable evacuation lighting to protect employee safety and maintain operational continuity during emergencies."
    },
    {
      question: "How often are BS 5266 tests required?",
      answer: "Monthly functional tests and annual 3-hour duration tests, with enhanced coverage for large-scale logistics environments."
    },
    {
      question: "What remedial response times do you offer?",
      answer: "Priority callouts for safety-critical defects with same-day battery replacements where supply allows, minimizing operational disruption."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Emergency Lighting Compliance Chesterfield | BS 5266 Logistics & Distribution Testing</title>
        <meta name="description" content="Distribution centres & logistics corridors — risk is high. BS 5266 testing for Chesterfield's M1 corridor warehouses." />
        <link rel="canonical" href="https://entirefm.com/emergency-lighting/chesterfield" />
      </Helmet>

      <SchemaMarkup schema={{ "@context": "https://schema.org", "@type": "Service", "name": "Emergency Lighting Compliance - Chesterfield", "provider": { "@type": "Organization", "name": "EntireFM" }, "areaServed": "Chesterfield, UK" }} />
      <BreadcrumbSchema items={[{ label: "Emergency Lighting", href: "/services/emergency-lighting" }, { label: "Chesterfield" }]} />
      <LocalBusinessSchema name="EntireFM Chesterfield" address={{ street: "Chesterfield Office", city: "Chesterfield", postalCode: "S40 1AA", country: "UK" }} />

      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-background/90 z-10" />
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop')` }} aria-label="Emergency lighting in Chesterfield logistics warehouse facility" />
        
        <div className="relative z-20 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-light text-white mb-6">Emergency Lighting Compliance – Chesterfield</h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto font-light">Distribution centres & logistics corridors — risk is high.</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" onClick={() => trackProposalRequest('emergency-lighting-chesterfield')}>Book Duration Test</Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" onClick={() => trackDownload('bs5266-checklist')}>
              <Download className="mr-2 h-5 w-5" />Download BS 5266 Checklist
            </Button>
          </div>
        </div>
      </section>

      <Breadcrumb items={[{ label: "Emergency Lighting", href: "/services/emergency-lighting" }, { label: "Chesterfield" }]} />

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">Why Chesterfield Requires Absolute Compliance</h2>
              <p className="text-lg text-muted-foreground mb-4">M1 corridor logistics and distribution centres create massive operational risk from electrical downtime or safety failures.</p>
              <p className="text-lg text-muted-foreground mb-4">Failures lead to:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
                <li>Legal liability for the Responsible Person</li>
                <li>Insurance rejection and operational shutdown</li>
                <li>Supply chain disruption penalties</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">Core Compliance Services (BS 5266)</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Monthly functional tests with rapid site access</li>
                <li>Annual 3-hour duration discharge verification</li>
                <li>Enhanced coverage for large-scale logistics environments</li>
                <li>Digital logbooks and audit-ready certificates</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">Remedials Resolved Fast</h2>
              <p className="text-lg text-muted-foreground">Priority callouts for safety-critical defects with same-day battery replacements where supply allows, minimizing operational disruption.</p>
            </section>

            <section>
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">Audit-Ready Documentation</h2>
              <p className="text-lg text-muted-foreground">Complete evidence and traceability for insurers, fire officers, and internal auditors—always accessible, always current.</p>
            </section>

            <section>
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">Sectors Protected</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Industrial and manufacturing facilities</li>
                <li>Distribution centres and logistics hubs</li>
                <li>Retail and commercial spaces</li>
                <li>Office stock and business parks</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">Local Coverage</h2>
              <p className="text-lg text-muted-foreground">Town Centre, Whittington Moor, Tapton, Clay Cross</p>
            </section>

            <FAQSection faqs={faqs} />

            <section className="bg-muted/50 p-8 rounded-lg">
              <h2 className="text-3xl font-light mb-4">Protect Your Business. Book Duration Test Today.</h2>
              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <Button size="lg" variant="secondary" onClick={() => trackProposalRequest('emergency-lighting-chesterfield-footer')}>Book Duration Test</Button>
                <div className="text-muted-foreground">
                  <p className="font-medium">📩 chesterfield@entirefm.com</p>
                </div>
              </div>
            </section>
          </div>
          <div className="lg:col-span-1"><div className="sticky top-4"><SidebarCTA /></div></div>
        </div>
      </div>
    </>
  );
};

export default EmergencyLightingChesterfield;
