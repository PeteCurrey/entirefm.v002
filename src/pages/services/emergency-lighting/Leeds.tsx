import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Download, CheckCircle, AlertTriangle } from "lucide-react";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { SidebarCTA } from "@/components/shared/SidebarCTA";
import { FAQSection } from "@/components/shared/FAQSection";
import { SchemaMarkup, LocalBusinessSchema } from "@/components/shared/SchemaMarkup";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { useConversionTracking } from "@/hooks/useConversionTracking";

const EmergencyLightingLeeds = () => {
  const { trackDownload, trackProposalRequest } = useConversionTracking();

  const faqs = [
    {
      question: "How quickly can failures be corrected?",
      answer: "Failed batteries and defective units are replaced immediately using emergency stock. Critical failures are resolved during the initial test visit to eliminate evacuation risk."
    },
    {
      question: "Do you test out-of-hours to avoid disruption?",
      answer: "Yes - we schedule testing outside operational hours for hospitality, entertainment and retail venues. Weekend and night-time slots are available to maintain business continuity."
    },
    {
      question: "What is included in a BS 5266 certificate?",
      answer: "Certificates include complete test results, unit locations, duration performance data, remedial actions taken, and engineer sign-off. All documentation is digitally stored for instant auditor access."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Emergency Lighting Compliance in Leeds | Local Testing & Statutory Compliance | EntireFM</title>
        <meta name="description" content="BS 5266 testing and certification protecting safe evacuation for Leeds' corporate and hospitality estates. Monthly and annual 3-hour duration tests." />
        <link rel="canonical" href="https://entirefm.com/services/emergency-lighting" />
      </Helmet>

      <SchemaMarkup schema={{ 
        "@context": "https://schema.org", 
        "@type": "Service", 
        "name": "Emergency Lighting Compliance - Leeds", 
        "serviceType": "Emergency Lighting Compliance",
        "provider": { 
          "@type": "Organization", 
          "name": "EntireFM",
          "url": "https://entirefm.com"
        }, 
        "areaServed": ["United Kingdom", "Leeds"],
        "url": "https://entirefm.com/emergency-lighting/leeds",
        "description": "BS 5266 testing and certification protecting safe evacuation for Leeds' corporate and hospitality estates. Monthly and annual 3-hour duration tests.",
        "serviceOutput": "BS 5266 compliance certification, 3-hour duration testing, monthly testing",
        "serviceAudience": ["Facilities Managers", "Property Managers", "Estate Teams"]
      }} />
      <BreadcrumbSchema items={[{ label: "Home", href: "/" }, { label: "Emergency Lighting Services", href: "/services/emergency-lighting" }, { label: "Leeds" }]} />
      <LocalBusinessSchema 
        name="EntireFM Leeds - Emergency Lighting" 
        address={{ 
          street: "Leeds Office", 
          city: "Leeds", 
          postalCode: "LS1 1AA", 
          country: "UK" 
        }}
        email="leeds@entirefm.com"
        serviceType="Emergency Lighting Compliance"
      />

      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-background/90 z-10" />
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2070&auto=format&fit=crop')` }} aria-label="Modern emergency lighting system in Leeds corporate office building" />
        
        <div className="relative z-20 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-light text-white mb-6">Emergency Lighting Compliance – Leeds</h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto font-light">BS 5266 testing and certification protecting safe evacuation for Leeds' corporate and hospitality estates.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" onClick={() => trackProposalRequest('emergency-lighting-leeds')}>Request 3-Hour Duration Test</Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" onClick={() => trackDownload('bs5266-checklist')}><Download className="mr-2 h-5 w-5" />BS 5266 Checklist</Button>
          </div>
        </div>
      </section>

      <Breadcrumb items={[{ label: "Emergency Lighting Services", href: "/services/emergency-lighting" }, { label: "Leeds" }]} />

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-16">
            <section>
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">Evacuation Safety in Leeds Cannot Fail</h2>
              <p className="text-lg text-muted-foreground">Leeds' commercial centre, nightlife and entertainment venues demand absolute safety in low-visibility incidents. We prevent risk — and prove compliance.</p>
            </section>

            <FAQSection faqs={faqs} />

            <section className="bg-gradient-to-br from-primary/10 to-primary/5 p-12 rounded-lg text-center">
              <h2 className="text-3xl md:text-4xl font-light mb-6">Safety, compliance, evacuation certainty.</h2>
              <Button size="lg" variant="default" onClick={() => trackProposalRequest('emergency-lighting-leeds-footer')}>Request Duration Test</Button>
              <p className="text-sm text-muted-foreground mt-4">📩 leeds@entirefm.com</p>
            </section>
          </div>
          <div className="lg:col-span-1"><div className="sticky top-4"><SidebarCTA /></div></div>
        </div>
      </div>
    </>
  );
};

export default EmergencyLightingLeeds;
