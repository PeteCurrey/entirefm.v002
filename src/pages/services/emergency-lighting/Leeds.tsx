import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { SidebarCTA } from "@/components/shared/SidebarCTA";
import { FAQSection } from "@/components/shared/FAQSection";
import { SchemaMarkup, LocalBusinessSchema } from "@/components/shared/SchemaMarkup";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { useConversionTracking } from "@/hooks/useConversionTracking";
import { Download } from "lucide-react";

const EmergencyLightingLeeds = () => {
  const { trackDownload, trackProposalRequest } = useConversionTracking();

  const faqs = [
    {
      question: "What emergency lighting testing is required for Leeds universities?",
      answer: "University buildings and student accommodation require monthly function tests and annual 3-hour duration tests under BS 5266. High-occupancy lecture halls and residential blocks face enhanced regulatory scrutiny due to evacuation complexity."
    },
    {
      question: "How does emergency lighting compliance affect hospitality venues?",
      answer: "Leeds hospitality venues must demonstrate BS 5266 compliance for licensing and insurance. Failed emergency lighting can result in closure orders, especially for premises with late-night operations where evacuation performance is critical to brand protection."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Emergency Lighting Testing Leeds | University & Hospitality BS 5266 Compliance</title>
        <meta name="description" content="Emergency lighting compliance for Leeds universities and hospitality. BS 5266 testing protecting evacuation safety with brand perception impact across West Yorkshire." />
        <link rel="canonical" href="https://entirefm.com/emergency-lighting/leeds" />
      </Helmet>

      <SchemaMarkup schema={{ "@context": "https://schema.org", "@type": "Service", "name": "Emergency Lighting Compliance - Leeds", "provider": { "@type": "Organization", "name": "EntireFM" }, "areaServed": "Leeds, UK" }} />
      <BreadcrumbSchema items={[{ label: "Emergency Lighting", href: "/services/emergency-lighting" }, { label: "Leeds" }]} />
      <LocalBusinessSchema name="EntireFM Leeds" address={{ street: "Leeds Office", city: "Leeds", postalCode: "LS1 1AA", country: "UK" }} />

      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-background/90 z-10" />
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2070&auto=format&fit=crop')` }} aria-label="Emergency exit signage and lighting in Leeds hospitality venue corridor" />
        
        <div className="relative z-20 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-light text-white mb-6">Emergency Lighting Compliance – Leeds</h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto font-light">Universities & hospitality-heavy city. Evacuation performance tied to brand perception and regulatory compliance.</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" onClick={() => trackProposalRequest('emergency-lighting-leeds')}>Request 3-Hour Compliance Test</Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" onClick={() => trackDownload('bs5266-checklist')}>
              <Download className="mr-2 h-5 w-5" />Download BS 5266 Checklist
            </Button>
          </div>
        </div>
      </section>

      <Breadcrumb items={[{ label: "Emergency Lighting", href: "/services/emergency-lighting" }, { label: "Leeds" }]} />

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-16">
            <section>
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">Brand-Critical Evacuation Safety</h2>
              <p className="text-lg text-muted-foreground">Leeds universities and hospitality venues face unique emergency lighting challenges where evacuation failures damage institutional reputation and licensing status. EntireFM delivers BS 5266 compliance protecting high-occupancy environments with monthly testing, 3-hour battery verification, and immediate luminaire replacement across West Yorkshire's education and leisure sectors.</p>
            </section>

            <FAQSection faqs={faqs} />
          </div>
          <div className="lg:col-span-1"><div className="sticky top-4"><SidebarCTA /></div></div>
        </div>
      </div>
    </>
  );
};

export default EmergencyLightingLeeds;
