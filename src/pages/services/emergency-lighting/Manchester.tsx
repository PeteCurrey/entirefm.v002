import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { SidebarCTA } from "@/components/shared/SidebarCTA";
import { SchemaMarkup, LocalBusinessSchema } from "@/components/shared/SchemaMarkup";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { useConversionTracking } from "@/hooks/useConversionTracking";
import { Download } from "lucide-react";

const EmergencyLightingManchester = () => {
  const { trackDownload, trackProposalRequest } = useConversionTracking();

  return (
    <>
      <Helmet>
        <title>Emergency Lighting Testing Manchester | Student Accommodation & Retail BS 5266</title>
        <meta name="description" content="Emergency lighting compliance for Manchester's PBSA and retail environments. BS 5266 testing protecting student accommodation and high-footfall commercial sites." />
        <link rel="canonical" href="https://entirefm.com/emergency-lighting/manchester" />
      </Helmet>

      <SchemaMarkup schema={{ "@context": "https://schema.org", "@type": "Service", "name": "Emergency Lighting Compliance - Manchester", "provider": { "@type": "Organization", "name": "EntireFM" }, "areaServed": "Manchester, UK" }} />
      <BreadcrumbSchema items={[{ label: "Emergency Lighting", href: "/services/emergency-lighting" }, { label: "Manchester" }]} />
      <LocalBusinessSchema name="EntireFM Manchester" address={{ street: "Manchester Office", city: "Manchester", postalCode: "M1 1AA", country: "UK" }} />

      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-background/90 z-10" />
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop')` }} aria-label="Emergency lighting testing equipment in Manchester student accommodation building" />
        
        <div className="relative z-20 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-light text-white mb-6">Emergency Lighting Compliance – Manchester</h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto font-light">Student accommodation safety obligations. BS 5266 testing protecting PBSA estates and retail across Greater Manchester.</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" onClick={() => trackProposalRequest('emergency-lighting-manchester')}>Request 3-Hour Compliance Test</Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" onClick={() => trackDownload('bs5266-checklist')}>
              <Download className="mr-2 h-5 w-5" />Download BS 5266 Checklist
            </Button>
          </div>
        </div>
      </section>

      <Breadcrumb items={[{ label: "Emergency Lighting", href: "/services/emergency-lighting" }, { label: "Manchester" }]} />

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-4xl font-light mb-6 underline-accent inline-block">PBSA & Retail Evacuation Compliance</h2>
            <p className="text-lg text-muted-foreground">Manchester's student accommodation surge and retail density at Trafford Centre, Deansgate, and Salford Quays demand rigorous emergency lighting testing. EntireFM protects landlords and operators with BS 5266 compliance, monthly function testing, and immediate battery replacement preventing regulatory enforcement and resident safety failures.</p>
          </div>
          <div className="lg:col-span-1"><div className="sticky top-4"><SidebarCTA /></div></div>
        </div>
      </div>
    </>
  );
};

export default EmergencyLightingManchester;
