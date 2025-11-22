import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { SidebarCTA } from "@/components/shared/SidebarCTA";
import { SchemaMarkup, LocalBusinessSchema } from "@/components/shared/SchemaMarkup";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { useConversionTracking } from "@/hooks/useConversionTracking";
import { Download } from "lucide-react";

const EmergencyLightingNottingham = () => {
  const { trackDownload, trackProposalRequest } = useConversionTracking();

  return (
    <>
      <Helmet>
        <title>Emergency Lighting Testing Nottingham | PBSA & Retail BS 5266 Compliance</title>
        <meta name="description" content="Emergency lighting compliance for Nottingham's student accommodation and retail estates. BS 5266 testing protecting PBSA legal oversight and resident safety." />
        <link rel="canonical" href="https://entirefm.com/emergency-lighting/nottingham" />
      </Helmet>

      <SchemaMarkup schema={{ "@context": "https://schema.org", "@type": "Service", "name": "Emergency Lighting Compliance - Nottingham", "provider": { "@type": "Organization", "name": "EntireFM" }, "areaServed": "Nottingham, UK" }} />
      <BreadcrumbSchema items={[{ label: "Emergency Lighting", href: "/services/emergency-lighting" }, { label: "Nottingham" }]} />
      <LocalBusinessSchema name="EntireFM Nottingham" address={{ street: "Nottingham Office", city: "Nottingham", postalCode: "NG1 1AA", country: "UK" }} />

      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-background/90 z-10" />
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1542744095-291d1f67b221?q=80&w=2070&auto=format&fit=crop')` }} aria-label="Emergency lighting in Nottingham PBSA accommodation building showing safety compliance" />
        
        <div className="relative z-20 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-light text-white mb-6">Emergency Lighting Compliance – Nottingham</h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto font-light">PBSA estates & retail centres. Legal oversight and resident safety protection through BS 5266 compliance.</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" onClick={() => trackProposalRequest('emergency-lighting-nottingham')}>Request 3-Hour Compliance Test</Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" onClick={() => trackDownload('bs5266-checklist')}>
              <Download className="mr-2 h-5 w-5" />Download BS 5266 Checklist
            </Button>
          </div>
        </div>
      </section>

      <Breadcrumb items={[{ label: "Emergency Lighting", href: "/services/emergency-lighting" }, { label: "Nottingham" }]} />

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-4xl font-light mb-6 underline-accent inline-block">PBSA & Retail Compliance Protection</h2>
            <p className="text-lg text-muted-foreground">Nottingham's dense student accommodation market and retail centre obligations create heightened emergency lighting compliance requirements. EntireFM protects PBSA landlords and retail operators with BS 5266-certified testing, monthly inspections, and 3-hour battery verification preventing regulatory enforcement and resident safety failures across commercial and residential estates.</p>
          </div>
          <div className="lg:col-span-1"><div className="sticky top-4"><SidebarCTA /></div></div>
        </div>
      </div>
    </>
  );
};

export default EmergencyLightingNottingham;
