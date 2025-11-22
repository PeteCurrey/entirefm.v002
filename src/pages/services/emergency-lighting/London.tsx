import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { SidebarCTA } from "@/components/shared/SidebarCTA";
import { FAQSection } from "@/components/shared/FAQSection";
import { SchemaMarkup, LocalBusinessSchema } from "@/components/shared/SchemaMarkup";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { useConversionTracking } from "@/hooks/useConversionTracking";
import { Download } from "lucide-react";

const EmergencyLightingLondon = () => {
  const { trackDownload, trackProposalRequest } = useConversionTracking();

  const faqs = [
    {
      question: "How often should emergency lighting be tested in London?",
      answer: "BS 5266 requires monthly function tests and annual 3-hour duration tests for all emergency lighting systems. High-occupancy buildings in London's commercial districts must maintain detailed test logs for insurance and regulatory compliance."
    },
    {
      question: "What is the 3-hour duration test?",
      answer: "The annual 3-hour test simulates mains failure to verify batteries maintain illumination throughout the required evacuation period. This is critical for large venues like Canary Wharf offices where evacuation times are extended."
    },
    {
      question: "Who is responsible for emergency lighting compliance?",
      answer: "The responsible person (building owner, landlord, or FM provider) must ensure BS 5266 compliance. Non-compliance can result in enforcement action, invalidated insurance, and prosecution following incidents."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Emergency Lighting Testing London | BS 5266 Compliance & 3-Hour Testing</title>
        <meta name="description" content="Emergency lighting compliance for London's commercial buildings. BS 5266 testing, 3-hour discharge checks and rapid remedials protecting evacuation safety." />
        <link rel="canonical" href="https://entirefm.com/emergency-lighting/london" />
      </Helmet>

      <SchemaMarkup schema={{ "@context": "https://schema.org", "@type": "Service", "name": "Emergency Lighting Compliance - London", "provider": { "@type": "Organization", "name": "EntireFM" }, "areaServed": "London, UK" }} />
      <BreadcrumbSchema items={[{ label: "Emergency Lighting", href: "/services/emergency-lighting" }, { label: "London" }]} />
      <LocalBusinessSchema name="EntireFM London" address={{ street: "London Office", city: "London", postalCode: "EC1A 1AA", country: "UK" }} />

      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-background/90 z-10" />
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1621905251918-48416bd8575a?q=80&w=2069&auto=format&fit=crop')` }} aria-label="Emergency exit lighting and evacuation signage in modern London commercial building" />
        
        <div className="relative z-20 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-light text-white mb-6">Emergency Lighting Compliance – London</h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto font-light">Ensure safe evacuation & legal protection with BS 5266 testing, 3-hour discharge checks and rapid remedials.</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" onClick={() => trackProposalRequest('emergency-lighting-london')}>Request 3-Hour Compliance Test</Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" onClick={() => trackDownload('bs5266-checklist')}>
              <Download className="mr-2 h-5 w-5" />Download BS 5266 Checklist
            </Button>
          </div>
        </div>
      </section>

      <Breadcrumb items={[{ label: "Emergency Lighting", href: "/services/emergency-lighting" }, { label: "London" }]} />

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-16">
            <section>
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">BS 5266 Testing & Certification</h2>
              <p className="text-lg text-muted-foreground">Canary Wharf corporate risk and retail venue evacuation liabilities demand rigorous emergency lighting compliance. EntireFM delivers monthly function tests, annual 3-hour duration testing, and immediate fault remediation protecting London's business-critical environments with audit-ready digital certification.</p>
            </section>

            <section>
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">Fast Fault Remediation — No Site Downtime</h2>
              <p className="text-lg text-muted-foreground">Failed luminaires or battery degradation create legal exposure and evacuation risk. Our London-based engineers identify C1/C2 faults during testing and complete remedials immediately, protecting operational continuity across City, Westminster, and Greater London commercial estates.</p>
            </section>

            <section>
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">Local Engineer Response Across Greater London</h2>
              <p className="text-lg text-muted-foreground">Serving City of London, Canary Wharf, Westminster, Croydon, Stratford, Heathrow corridor, and Wembley with 24/7 emergency response for compliance-critical failures.</p>
            </section>

            <FAQSection faqs={faqs} />
          </div>
          <div className="lg:col-span-1"><div className="sticky top-4"><SidebarCTA /></div></div>
        </div>
      </div>
    </>
  );
};

export default EmergencyLightingLondon;
