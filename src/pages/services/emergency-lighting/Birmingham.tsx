import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { SidebarCTA } from "@/components/shared/SidebarCTA";
import { SchemaMarkup, LocalBusinessSchema } from "@/components/shared/SchemaMarkup";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { useConversionTracking } from "@/hooks/useConversionTracking";
import { Download } from "lucide-react";

const EmergencyLightingBirmingham = () => {
  const { trackDownload, trackProposalRequest } = useConversionTracking();

  return (
    <>
      <Helmet>
        <title>Emergency Lighting Testing Birmingham | BS 5266 Compliance & Public Venue Safety</title>
        <meta name="description" content="Emergency lighting compliance for Birmingham's high-footfall venues. BS 5266 testing protecting Bullring, NEC and major commercial sites across the West Midlands." />
        <link rel="canonical" href="https://entirefm.com/emergency-lighting/birmingham" />
      </Helmet>

      <SchemaMarkup schema={{ "@context": "https://schema.org", "@type": "Service", "name": "Emergency Lighting Compliance - Birmingham", "provider": { "@type": "Organization", "name": "EntireFM" }, "areaServed": "Birmingham, UK" }} />
      <BreadcrumbSchema items={[{ label: "Emergency Lighting", href: "/services/emergency-lighting" }, { label: "Birmingham" }]} />
      <LocalBusinessSchema name="EntireFM Birmingham" address={{ street: "Birmingham Office", city: "Birmingham", postalCode: "B1 1AA", country: "UK" }} />

      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-background/90 z-10" />
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2074&auto=format&fit=crop')` }} aria-label="Emergency lighting system in Birmingham public venue showing evacuation route signage" />
        
        <div className="relative z-20 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-light text-white mb-6">Emergency Lighting Compliance – Birmingham</h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto font-light">High-footfall venue protection. BS 5266 compliance safeguarding public evacuation across the West Midlands.</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" onClick={() => trackProposalRequest('emergency-lighting-birmingham')}>Request 3-Hour Compliance Test</Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" onClick={() => trackDownload('bs5266-checklist')}>
              <Download className="mr-2 h-5 w-5" />Download BS 5266 Checklist
            </Button>
          </div>
        </div>
      </section>

      <Breadcrumb items={[{ label: "Emergency Lighting", href: "/services/emergency-lighting" }, { label: "Birmingham" }]} />

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-4xl font-light mb-6 underline-accent inline-block">Public Venue Evacuation Safety</h2>
            <p className="text-lg text-muted-foreground">Birmingham's Bullring, NEC venue complex, and major commercial sites face heightened fire safety enforcement in the West Midlands. EntireFM delivers BS 5266-certified testing with 3-hour duration verification protecting high-occupancy environments where evacuation performance determines legal and reputational outcomes.</p>
          </div>
          <div className="lg:col-span-1"><div className="sticky top-4"><SidebarCTA /></div></div>
        </div>
      </div>
    </>
  );
};

export default EmergencyLightingBirmingham;
