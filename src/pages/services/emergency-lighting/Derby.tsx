import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { SidebarCTA } from "@/components/shared/SidebarCTA";
import { SchemaMarkup, LocalBusinessSchema } from "@/components/shared/SchemaMarkup";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { useConversionTracking } from "@/hooks/useConversionTracking";
import { Download } from "lucide-react";

const EmergencyLightingDerby = () => {
  const { trackDownload, trackProposalRequest } = useConversionTracking();

  return (
    <>
      <Helmet>
        <title>Emergency Lighting Testing Derby | Transport Hub & Manufacturing BS 5266</title>
        <meta name="description" content="Emergency lighting compliance for Derby's transport hubs and manufacturing sites. BS 5266 testing protecting evacuation safety in rail and aerospace facilities." />
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
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto font-light">Transport hubs & manufacturing evacuation. BS 5266 compliance protecting critical infrastructure.</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" onClick={() => trackProposalRequest('emergency-lighting-derby')}>Request 3-Hour Compliance Test</Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" onClick={() => trackDownload('bs5266-checklist')}>
              <Download className="mr-2 h-5 w-5" />Download BS 5266 Checklist
            </Button>
          </div>
        </div>
      </section>

      <Breadcrumb items={[{ label: "Emergency Lighting", href: "/services/emergency-lighting" }, { label: "Derby" }]} />

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-4xl font-light mb-6 underline-accent inline-block">Transport & Manufacturing Safety</h2>
            <p className="text-lg text-muted-foreground">Derby's rail engineering and aerospace manufacturing facilities demand emergency lighting systems protecting complex evacuation routes in transport hubs and high-bay production environments. EntireFM delivers BS 5266 compliance with 3-hour testing, enhanced coverage for critical infrastructure, and immediate remedial response across the East Midlands transport and manufacturing corridor.</p>
          </div>
          <div className="lg:col-span-1"><div className="sticky top-4"><SidebarCTA /></div></div>
        </div>
      </div>
    </>
  );
};

export default EmergencyLightingDerby;
