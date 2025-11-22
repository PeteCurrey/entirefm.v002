import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { SidebarCTA } from "@/components/shared/SidebarCTA";
import { SchemaMarkup, LocalBusinessSchema } from "@/components/shared/SchemaMarkup";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { useConversionTracking } from "@/hooks/useConversionTracking";
import { Download } from "lucide-react";

const EmergencyLightingLincoln = () => {
  const { trackDownload, trackProposalRequest } = useConversionTracking();

  return (
    <>
      <Helmet>
        <title>Emergency Lighting Testing Lincoln | Healthcare & Heritage BS 5266 Compliance</title>
        <meta name="description" content="Emergency lighting compliance for Lincoln healthcare and heritage properties. BS 5266 testing protecting escape safety in conservation-sensitive environments." />
        <link rel="canonical" href="https://entirefm.com/emergency-lighting/lincoln" />
      </Helmet>

      <SchemaMarkup schema={{ "@context": "https://schema.org", "@type": "Service", "name": "Emergency Lighting Compliance - Lincoln", "provider": { "@type": "Organization", "name": "EntireFM" }, "areaServed": "Lincoln, UK" }} />
      <BreadcrumbSchema items={[{ label: "Emergency Lighting", href: "/services/emergency-lighting" }, { label: "Lincoln" }]} />
      <LocalBusinessSchema name="EntireFM Lincoln" address={{ street: "Lincoln Office", city: "Lincoln", postalCode: "LN1 1AA", country: "UK" }} />

      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-background/90 z-10" />
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070&auto=format&fit=crop')` }} aria-label="Conservation-sensitive emergency lighting installation in Lincoln heritage building" />
        
        <div className="relative z-20 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-light text-white mb-6">Emergency Lighting Compliance – Lincoln</h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto font-light">Healthcare + heritage building escape safety. Conservation-sensitive BS 5266 compliance solutions.</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" onClick={() => trackProposalRequest('emergency-lighting-lincoln')}>Request 3-Hour Compliance Test</Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" onClick={() => trackDownload('bs5266-checklist')}>
              <Download className="mr-2 h-5 w-5" />Download BS 5266 Checklist
            </Button>
          </div>
        </div>
      </section>

      <Breadcrumb items={[{ label: "Emergency Lighting", href: "/services/emergency-lighting" }, { label: "Lincoln" }]} />

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-4xl font-light mb-6 underline-accent inline-block">Heritage & Healthcare Protection</h2>
            <p className="text-lg text-muted-foreground">Lincoln's historic buildings and healthcare facilities require emergency lighting systems balancing BS 5266 compliance with conservation requirements and vulnerable occupant protection. EntireFM delivers discreet luminaire installations, 3-hour battery testing, and immediate remedial response protecting heritage properties and care environments where evacuation safety demands specialist knowledge.</p>
          </div>
          <div className="lg:col-span-1"><div className="sticky top-4"><SidebarCTA /></div></div>
        </div>
      </div>
    </>
  );
};

export default EmergencyLightingLincoln;
