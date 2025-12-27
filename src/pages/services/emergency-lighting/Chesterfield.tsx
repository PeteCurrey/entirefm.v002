import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { SidebarCTA } from "@/components/shared/SidebarCTA";
import { FAQSection } from "@/components/shared/FAQSection";
import { SchemaMarkup, LocalBusinessSchema } from "@/components/shared/SchemaMarkup";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { useConversionTracking } from "@/hooks/useConversionTracking";

const EmergencyLightingChesterfield = () => {
  const { trackDownload, trackProposalRequest } = useConversionTracking();

  const faqs = [
    {
      question: "Will operations be interrupted?",
      answer: "No - emergency lighting testing is conducted during normal operations without power interruption. We coordinate with your schedules."
    },
    {
      question: "Are all areas tested including mezzanines?",
      answer: "Yes - comprehensive testing covers all escape routes including mezzanine levels, high-bay areas, and all evacuation paths."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Emergency Lighting Compliance in Chesterfield | Local Testing & Statutory Compliance | EntireFM</title>
        <meta name="description" content="Compliance testing for logistics & industrial estates along the M1. BS 5266 emergency lighting for warehouses." />
        <link rel="canonical" href="https://entirefm.com/services/emergency-lighting" />
      </Helmet>

      <SchemaMarkup schema={{ 
        "@context": "https://schema.org", 
        "@type": "Service", 
        "name": "Emergency Lighting Compliance - Chesterfield", 
        "serviceType": "Emergency Lighting Compliance",
        "provider": { 
          "@type": "Organization", 
          "name": "EntireFM",
          "url": "https://entirefm.com"
        }, 
        "areaServed": ["United Kingdom", "Chesterfield"],
        "url": "https://entirefm.com/emergency-lighting/chesterfield",
        "description": "Compliance testing for logistics & industrial estates along the M1. BS 5266 emergency lighting for warehouses.",
        "serviceOutput": "BS 5266 compliance certification, warehouse emergency lighting testing",
        "serviceAudience": ["Facilities Managers", "Property Managers", "Estate Teams"]
      }} />
      <BreadcrumbSchema items={[{ label: "Home", href: "/" }, { label: "Emergency Lighting Services", href: "/services/emergency-lighting" }, { label: "Chesterfield" }]} />
      <LocalBusinessSchema 
        name="EntireFM Chesterfield - Emergency Lighting" 
        address={{ 
          street: "Chesterfield Office", 
          city: "Chesterfield", 
          postalCode: "S40 1AA", 
          country: "UK" 
        }}
        email="chesterfield@entirefm.com"
        serviceType="Emergency Lighting Compliance"
      />

      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-background/90 z-10" />
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop')` }} aria-label="Emergency lighting in Chesterfield logistics warehouse with evacuation route signage" />
        
        <div className="relative z-20 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-light text-white mb-6">Emergency Lighting Compliance – Chesterfield</h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto font-light">Compliance testing for logistics & industrial estates along the M1 corridor.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" onClick={() => trackProposalRequest('emergency-lighting-chesterfield')}>Book Compliance Audit</Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" onClick={() => trackDownload('bs5266-checklist')}><Download className="mr-2 h-5 w-5" />BS 5266 Checklist</Button>
          </div>
        </div>
      </section>

      <Breadcrumb items={[{ label: "Emergency Lighting Services", href: "/services/emergency-lighting" }, { label: "Chesterfield" }]} />

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-16">
            <section>
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">Operational Safety in Logistics</h2>
              <p className="text-lg text-muted-foreground">Low-light evacuation during warehouse incidents creates high casualty risk. Compliance protects workforce safety and insurance resilience.</p>
            </section>

            <FAQSection faqs={faqs} />

            <section className="bg-gradient-to-br from-primary/10 to-primary/5 p-12 rounded-lg text-center">
              <h2 className="text-3xl md:text-4xl font-light mb-6">Request Compliance Audit</h2>
              <Button size="lg" variant="default" onClick={() => trackProposalRequest('emergency-lighting-chesterfield-footer')}>Request Compliance Audit</Button>
              <p className="text-sm text-muted-foreground mt-4">📩 chesterfield@entirefm.com</p>
            </section>
          </div>
          <div className="lg:col-span-1"><div className="sticky top-4"><SidebarCTA /></div></div>
        </div>
      </div>
    </>
  );
};

export default EmergencyLightingChesterfield;
