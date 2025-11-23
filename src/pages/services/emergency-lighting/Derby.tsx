import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { SidebarCTA } from "@/components/shared/SidebarCTA";
import { SchemaMarkup, LocalBusinessSchema } from "@/components/shared/SchemaMarkup";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { FAQSection } from "@/components/shared/FAQSection";
import { useConversionTracking } from "@/hooks/useConversionTracking";
import { Download } from "lucide-react";

const EmergencyLightingDerby = () => {
  const { trackDownload, trackProposalRequest } = useConversionTracking();

  const faqs = [
    {
      question: "Why is emergency lighting critical in transport and manufacturing?",
      answer: "Complex evacuation routes, operational continuity, and public safety in transport hubs require reliable BS 5266-compliant emergency lighting systems."
    },
    {
      question: "How often do industrial sites need testing?",
      answer: "Monthly functional tests and annual 3-hour duration tests, with enhanced coverage for hazardous areas and critical infrastructure."
    },
    {
      question: "What remedial support is provided?",
      answer: "Priority callouts for safety-critical defects, transparent pricing, and same-day battery replacements where supply allows."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Emergency Lighting Compliance Derby | BS 5266 Industrial & Transport Testing</title>
        <meta name="description" content="Industrial & transport operations compliance core to continuity. BS 5266 testing for Derby's rail and aerospace facilities." />
        <link rel="canonical" href="https://entirefm.com/emergency-lighting/derby" />
      </Helmet>

      <SchemaMarkup schema={{ "@context": "https://schema.org", "@type": "Service", "name": "Emergency Lighting Compliance - Derby", "provider": { "@type": "Organization", "name": "EntireFM" }, "areaServed": "Derby, UK" }} />
      <BreadcrumbSchema items={[{ label: "Emergency Lighting", href: "/services/emergency-lighting" }, { label: "Derby" }]} />
      <LocalBusinessSchema name="EntireFM Derby" address={{ street: "Derby Office", city: "Derby", postalCode: "DE1 1AA", country: "UK" }} />

      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-background/90 z-10" />
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2069&auto=format&fit=crop')` }} aria-label="Emergency exit lighting in Derby transport hub and manufacturing facility" />
        
        <div className="relative z-20 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-light text-white mb-6">Emergency Lighting Compliance – Derby</h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto font-light">Industrial & transport operations — compliance core to continuity.</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" onClick={() => trackProposalRequest('emergency-lighting-derby')}>Secure Testing Schedule</Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" onClick={() => trackDownload('bs5266-checklist')}>
              <Download className="mr-2 h-5 w-5" />Download BS 5266 Checklist
            </Button>
          </div>
        </div>
      </section>

      <Breadcrumb items={[{ label: "Emergency Lighting", href: "/services/emergency-lighting" }, { label: "Derby" }]} />

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">Transport & Manufacturing Safety</h2>
              <p className="text-lg text-muted-foreground">Compliance is core to operational continuity in Derby's rail and aerospace facilities.</p>
            </section>

            <section>
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">Local Coverage</h2>
              <p className="text-lg text-muted-foreground">City Centre, Pride Park, Sinfin, Allestree</p>
            </section>

            <FAQSection faqs={faqs} />

            <section className="bg-muted/50 p-8 rounded-lg">
              <h2 className="text-3xl font-light mb-4">Secure Testing Schedule</h2>
              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <Button size="lg" variant="secondary" onClick={() => trackProposalRequest('emergency-lighting-derby-footer')}>Secure Testing Schedule</Button>
                <div className="text-muted-foreground">
                  <p className="font-medium">📩 derby@entirefm.com</p>
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

export default EmergencyLightingDerby;
