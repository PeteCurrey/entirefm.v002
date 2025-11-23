import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { SidebarCTA } from "@/components/shared/SidebarCTA";
import { SchemaMarkup, LocalBusinessSchema } from "@/components/shared/SchemaMarkup";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { FAQSection } from "@/components/shared/FAQSection";
import { useConversionTracking } from "@/hooks/useConversionTracking";
import { Download } from "lucide-react";

const EmergencyLightingLeeds = () => {
  const { trackDownload, trackProposalRequest } = useConversionTracking();

  const faqs = [
    {
      question: "How often do hospitality venues need emergency lighting tests?",
      answer: "Monthly functional tests and annual 3-hour duration tests under BS 5266. High-footfall venues often require more frequent verification and immediate remedial response."
    },
    {
      question: "What documentation is provided after testing?",
      answer: "Full BS 5266 certificates, digital logbooks, photographic evidence, and remedial action plans—all audit-ready for insurers and fire officers."
    },
    {
      question: "Can tests be scheduled outside operating hours?",
      answer: "Yes. We coordinate testing to minimize disruption, with out-of-hours availability for hospitality and corporate environments."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Emergency Lighting Compliance Leeds | BS 5266 Hospitality & Corporate Testing</title>
        <meta name="description" content="Emergency lighting compliance for Leeds hospitality and corporate hubs. BS 5266 testing with zero tolerance for outage risk." />
        <link rel="canonical" href="https://entirefm.com/emergency-lighting/leeds" />
      </Helmet>

      <SchemaMarkup schema={{ "@context": "https://schema.org", "@type": "Service", "name": "Emergency Lighting Compliance - Leeds", "provider": { "@type": "Organization", "name": "EntireFM" }, "areaServed": "Leeds, UK" }} />
      <BreadcrumbSchema items={[{ label: "Emergency Lighting", href: "/services/emergency-lighting" }, { label: "Leeds" }]} />
      <LocalBusinessSchema name="EntireFM Leeds" address={{ street: "Leeds Office", city: "Leeds", postalCode: "LS1 1AA", country: "UK" }} />

      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-background/90 z-10" />
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop')` }} aria-label="Emergency exit lighting in Leeds university and hospitality venue" />
        
        <div className="relative z-20 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-light text-white mb-6">Emergency Lighting Compliance – Leeds</h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto font-light">Hospitality & corporate hubs — no tolerance for outage risk.</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" onClick={() => trackProposalRequest('emergency-lighting-leeds')}>Request 3-Hour Test</Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" onClick={() => trackDownload('bs5266-checklist')}>
              <Download className="mr-2 h-5 w-5" />Download BS 5266 Checklist
            </Button>
          </div>
        </div>
      </section>

      <Breadcrumb items={[{ label: "Emergency Lighting", href: "/services/emergency-lighting" }, { label: "Leeds" }]} />

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">Critical Compliance for Hospitality & Corporate</h2>
              <p className="text-lg text-muted-foreground">No tolerance for outage risk in Leeds's high-footfall venues and corporate environments.</p>
            </section>

            <section>
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">Local Coverage</h2>
              <p className="text-lg text-muted-foreground">City, Holbeck, Headingley, White Rose, Seacroft</p>
            </section>

            <FAQSection faqs={faqs} />

            <section className="bg-muted/50 p-8 rounded-lg">
              <h2 className="text-3xl font-light mb-4">Request 3-Hour Test</h2>
              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <Button size="lg" variant="secondary" onClick={() => trackProposalRequest('emergency-lighting-leeds-footer')}>Request 3-Hour Test</Button>
                <div className="text-muted-foreground">
                  <p className="font-medium">📩 leeds@entirefm.com</p>
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

export default EmergencyLightingLeeds;
