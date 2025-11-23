import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { SidebarCTA } from "@/components/shared/SidebarCTA";
import { FAQSection } from "@/components/shared/FAQSection";
import { SchemaMarkup, LocalBusinessSchema } from "@/components/shared/SchemaMarkup";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { useConversionTracking } from "@/hooks/useConversionTracking";

const EmergencyLightingLincoln = () => {
  const { trackDownload, trackProposalRequest } = useConversionTracking();

  const faqs = [
    {
      question: "Who signs off evacuation compliance?",
      answer: "Our qualified engineers complete all testing and sign off BS 5266 compliance certificates accepted by fire officers, insurers, and regulatory bodies."
    },
    {
      question: "Do you handle both testing & repair?",
      answer: "Yes - we provide complete end-to-end service including monthly tests, annual 3-hour tests, repairs, and certification with no need for multiple contractors."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Emergency Lighting Compliance Lincoln | BS 5266 Healthcare & Heritage Testing</title>
        <meta name="description" content="BS 5266 testing for healthcare & heritage estates where evacuation reliability is non-negotiable. Life-safety compliance." />
        <link rel="canonical" href="https://entirefm.com/emergency-lighting/lincoln" />
      </Helmet>

      <SchemaMarkup schema={{ "@context": "https://schema.org", "@type": "Service", "name": "Emergency Lighting Compliance - Lincoln", "provider": { "@type": "Organization", "name": "EntireFM" }, "areaServed": "Lincoln, UK" }} />
      <BreadcrumbSchema items={[{ label: "Emergency Lighting Services", href: "/services/emergency-lighting" }, { label: "Lincoln" }]} />
      <LocalBusinessSchema name="EntireFM Lincoln - Emergency Lighting" address={{ street: "Lincoln Office", city: "Lincoln", postalCode: "LN1 1AA", country: "UK" }} />

      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-background/90 z-10" />
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2070&auto=format&fit=crop')` }} aria-label="Emergency lighting testing in Lincoln" />
        
        <div className="relative z-20 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-light text-white mb-6">Emergency Lighting Compliance – Lincoln</h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto font-light">BS 5266 testing for healthcare & heritage estates where evacuation reliability is non-negotiable.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" onClick={() => trackProposalRequest('emergency-lighting-lincoln')}>Request Safety Survey</Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" onClick={() => trackDownload('bs5266-checklist')}><Download className="mr-2 h-5 w-5" />BS 5266 Checklist</Button>
          </div>
        </div>
      </section>

      <Breadcrumb items={[{ label: "Emergency Lighting Services", href: "/services/emergency-lighting" }, { label: "Lincoln" }]} />

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-16">
            <section>
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">High-Sensitivity Evacuation</h2>
              <p className="text-lg text-muted-foreground">In hospitals, care environments and historic buildings — emergency lighting failure is never tolerated. We guarantee life-safety compliance.</p>
            </section>

            <FAQSection faqs={faqs} />

            <section className="bg-gradient-to-br from-primary/10 to-primary/5 p-12 rounded-lg text-center">
              <h2 className="text-3xl md:text-4xl font-light mb-6">Secure Compliance Testing</h2>
              <Button size="lg" variant="default" onClick={() => trackProposalRequest('emergency-lighting-lincoln-footer')}>Secure Compliance Testing</Button>
              <p className="text-sm text-muted-foreground mt-4">📩 lincoln@entirefm.com</p>
            </section>
          </div>
          <div className="lg:col-span-1"><div className="sticky top-4"><SidebarCTA /></div></div>
        </div>
      </div>
    </>
  );
};

export default EmergencyLightingLincoln;
