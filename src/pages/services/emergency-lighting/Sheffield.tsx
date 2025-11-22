import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { SidebarCTA } from "@/components/shared/SidebarCTA";
import { SchemaMarkup, LocalBusinessSchema } from "@/components/shared/SchemaMarkup";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { useConversionTracking } from "@/hooks/useConversionTracking";
import { Download } from "lucide-react";

const EmergencyLightingSheffield = () => {
  const { trackDownload, trackProposalRequest } = useConversionTracking();

  return (
    <>
      <Helmet>
        <title>Emergency Lighting Testing Sheffield | Industrial & Event Venue BS 5266</title>
        <meta name="description" content="Emergency lighting compliance for Sheffield's industrial complexes and event venues. BS 5266 testing protecting high-risk evacuation environments across South Yorkshire." />
        <link rel="canonical" href="https://entirefm.com/emergency-lighting/sheffield" />
      </Helmet>

      <SchemaMarkup schema={{ "@context": "https://schema.org", "@type": "Service", "name": "Emergency Lighting Compliance - Sheffield", "provider": { "@type": "Organization", "name": "EntireFM" }, "areaServed": "Sheffield, UK" }} />
      <BreadcrumbSchema items={[{ label: "Emergency Lighting", href: "/services/emergency-lighting" }, { label: "Sheffield" }]} />
      <LocalBusinessSchema name="EntireFM Sheffield" address={{ street: "Sheffield Office", city: "Sheffield", postalCode: "S1 1AA", country: "UK" }} />

      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-background/90 z-10" />
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1582053433896-25c962143f5c?q=80&w=2070&auto=format&fit=crop')` }} aria-label="Industrial emergency lighting system in Sheffield manufacturing facility" />
        
        <div className="relative z-20 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-light text-white mb-6">Emergency Lighting Compliance – Sheffield</h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto font-light">Industrial complex + event venues. BS 5266 compliance protecting high-risk evacuation environments.</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" onClick={() => trackProposalRequest('emergency-lighting-sheffield')}>Request 3-Hour Compliance Test</Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" onClick={() => trackDownload('bs5266-checklist')}>
              <Download className="mr-2 h-5 w-5" />Download BS 5266 Checklist
            </Button>
          </div>
        </div>
      </section>

      <Breadcrumb items={[{ label: "Emergency Lighting", href: "/services/emergency-lighting" }, { label: "Sheffield" }]} />

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-4xl font-light mb-6 underline-accent inline-block">Industrial & Event Venue Compliance</h2>
            <p className="text-lg text-muted-foreground">Sheffield's manufacturing heritage and event venue concentration create complex emergency lighting requirements where evacuation failures result in serious incidents. EntireFM delivers BS 5266-certified testing for industrial facilities and public venues, protecting operations with 3-hour battery verification, enhanced luminaire coverage in high-bay environments, and immediate fault remediation across South Yorkshire.</p>
          </div>
          <div className="lg:col-span-1"><div className="sticky top-4"><SidebarCTA /></div></div>
        </div>
      </div>
    </>
  );
};

export default EmergencyLightingSheffield;
