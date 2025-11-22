import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { SidebarCTA } from "@/components/shared/SidebarCTA";
import { SchemaMarkup, LocalBusinessSchema } from "@/components/shared/SchemaMarkup";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { useConversionTracking } from "@/hooks/useConversionTracking";
import { Download } from "lucide-react";

const EmergencyLightingChesterfield = () => {
  const { trackDownload, trackProposalRequest } = useConversionTracking();

  return (
    <>
      <Helmet>
        <title>Emergency Lighting Testing Chesterfield | Logistics & Warehouse BS 5266</title>
        <meta name="description" content="Emergency lighting compliance for Chesterfield distribution centres and logistics estates. BS 5266 testing protecting workplace accountability and operational uptime." />
        <link rel="canonical" href="https://entirefm.com/emergency-lighting/chesterfield" />
      </Helmet>

      <SchemaMarkup schema={{ "@context": "https://schema.org", "@type": "Service", "name": "Emergency Lighting Compliance - Chesterfield", "provider": { "@type": "Organization", "name": "EntireFM" }, "areaServed": "Chesterfield, UK" }} />
      <BreadcrumbSchema items={[{ label: "Emergency Lighting", href: "/services/emergency-lighting" }, { label: "Chesterfield" }]} />
      <LocalBusinessSchema name="EntireFM Chesterfield" address={{ street: "Chesterfield Office", city: "Chesterfield", postalCode: "S40 1AA", country: "UK" }} />

      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-background/90 z-10" />
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop')` }} aria-label="Emergency lighting in Chesterfield logistics warehouse and distribution centre" />
        
        <div className="relative z-20 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-light text-white mb-6">Emergency Lighting Compliance – Chesterfield</h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto font-light">Distribution centres & logistics workplace. BS 5266 protecting accountability and uptime along M1 corridor.</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" onClick={() => trackProposalRequest('emergency-lighting-chesterfield')}>Request 3-Hour Compliance Test</Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" onClick={() => trackDownload('bs5266-checklist')}>
              <Download className="mr-2 h-5 w-5" />Download BS 5266 Checklist
            </Button>
          </div>
        </div>
      </section>

      <Breadcrumb items={[{ label: "Emergency Lighting", href: "/services/emergency-lighting" }, { label: "Chesterfield" }]} />

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-4xl font-light mb-6 underline-accent inline-block">Logistics Workplace Safety</h2>
            <p className="text-lg text-muted-foreground">Chesterfield's M1 corridor logistics estates and industrial facilities operate 24/7 shifts where emergency lighting failures create serious workplace risks and operational disruption. EntireFM protects distribution centre operators with BS 5266 compliance, monthly function testing, and immediate battery replacement preventing downtime costs and regulatory enforcement across warehouse and industrial environments.</p>
          </div>
          <div className="lg:col-span-1"><div className="sticky top-4"><SidebarCTA /></div></div>
        </div>
      </div>
    </>
  );
};

export default EmergencyLightingChesterfield;
