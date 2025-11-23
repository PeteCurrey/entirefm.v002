import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Download, CheckCircle, AlertTriangle } from "lucide-react";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { SidebarCTA } from "@/components/shared/SidebarCTA";
import { FAQSection } from "@/components/shared/FAQSection";
import { SchemaMarkup, LocalBusinessSchema } from "@/components/shared/SchemaMarkup";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { useConversionTracking } from "@/hooks/useConversionTracking";

const EmergencyLightingLondon = () => {
  const { trackDownload, trackProposalRequest } = useConversionTracking();

  const faqs = [
    {
      question: "What is a 3-hour test?",
      answer: "A 3-hour duration test simulates a complete power failure to verify emergency lighting batteries can maintain illumination for the full statutory duration. This annual test is mandatory under BS 5266 to ensure safe evacuation capability."
    },
    {
      question: "Who is responsible for emergency lighting?",
      answer: "The Responsible Person (typically the building owner, employer, or facilities manager) is legally accountable for maintaining emergency lighting compliance under the Regulatory Reform (Fire Safety) Order 2005."
    },
    {
      question: "Does compliance affect insurance?",
      answer: "Yes - insurers commonly require valid emergency lighting certification as a condition of cover. Non-compliance can invalidate insurance claims and result in policy cancellation."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Emergency Lighting Compliance London | BS 5266 Testing & 3-Hour Tests</title>
        <meta name="description" content="BS 5266 testing & 3-hour duration verification to protect life safety and legal compliance across London's commercial estate." />
        <link rel="canonical" href="https://entirefm.com/emergency-lighting/london" />
      </Helmet>

      <SchemaMarkup schema={{ "@context": "https://schema.org", "@type": "Service", "name": "Emergency Lighting Compliance - London", "provider": { "@type": "Organization", "name": "EntireFM" }, "areaServed": "London, UK" }} />
      <BreadcrumbSchema items={[{ label: "Emergency Lighting Services", href: "/services/emergency-lighting" }, { label: "London" }]} />
      <LocalBusinessSchema name="EntireFM London - Emergency Lighting" address={{ street: "London Office", city: "London", postalCode: "SW1A 1AA", country: "UK" }} />

      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-background/90 z-10" />
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2070&auto=format&fit=crop')` }} aria-label="Emergency lighting testing in London commercial building" />
        
        <div className="relative z-20 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-light text-white mb-6">Emergency Lighting Compliance – London</h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto font-light">BS 5266 testing & 3-hour duration verification to protect life safety across London's commercial estate.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" onClick={() => trackProposalRequest('emergency-lighting-london')}>Request 3-Hour Test</Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" onClick={() => trackDownload('bs5266-checklist')}><Download className="mr-2 h-5 w-5" />BS 5266 Checklist</Button>
          </div>
        </div>
      </section>

      <Breadcrumb items={[{ label: "Emergency Lighting Services", href: "/services/emergency-lighting" }, { label: "London" }]} />

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-16">
            <section>
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">Protect Safe Evacuation in London</h2>
              <p className="text-lg text-muted-foreground">High-rise, high-footfall buildings demand absolute evacuation safety compliance to protect life and avoid legal prosecution, insurance invalidation, and operational shutdown.</p>
            </section>

            <FAQSection faqs={faqs} />

            <section className="bg-gradient-to-br from-primary/10 to-primary/5 p-12 rounded-lg text-center">
              <h2 className="text-3xl md:text-4xl font-light mb-6">Keep People Safe. Keep Compliance Certain.</h2>
              <Button size="lg" variant="default" onClick={() => trackProposalRequest('emergency-lighting-london-footer')}>Request 3-Hour Test</Button>
              <p className="text-sm text-muted-foreground mt-4">📩 london@entirefm.com</p>
            </section>
          </div>
          <div className="lg:col-span-1"><div className="sticky top-4"><SidebarCTA /></div></div>
        </div>
      </div>
    </>
  );
};

export default EmergencyLightingLondon;
