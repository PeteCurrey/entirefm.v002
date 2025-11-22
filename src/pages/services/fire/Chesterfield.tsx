import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { SidebarCTA } from "@/components/shared/SidebarCTA";
import { SchemaMarkup, LocalBusinessSchema } from "@/components/shared/SchemaMarkup";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { useConversionTracking } from "@/hooks/useConversionTracking";

const FireChesterfield = () => {
  const { trackProposalRequest } = useConversionTracking();

  return (
    <>
      <Helmet>
        <title>Fire Alarm Compliance Chesterfield | Regional Logistics Hub Fire Safety</title>
        <meta name="description" content="Fire compliance for Chesterfield's regional logistics hub. Uptime-focused BS 5839 testing protecting distribution operations." />
        <link rel="canonical" href="https://entirefm.com/fire/chesterfield" />
      </Helmet>

      <SchemaMarkup schema={{ "@context": "https://schema.org", "@type": "Service", "name": "Fire Compliance - Chesterfield", "provider": { "@type": "Organization", "name": "EntireFM" }, "areaServed": "Chesterfield, UK" }} />
      <BreadcrumbSchema items={[{ label: "Fire Compliance", href: "/services/fire-alarms" }, { label: "Chesterfield" }]} />
      <LocalBusinessSchema name="EntireFM Chesterfield" address={{ street: "Chesterfield Office", city: "Chesterfield", postalCode: "S40 1AA", country: "UK" }} />

      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-destructive/90 to-background/90 z-10" />
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop')` }} />
        
        <div className="relative z-20 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-light text-white mb-6">Fire Compliance – Chesterfield</h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto font-light">Regional logistics hub. Uptime focus protecting distribution operations.</p>
          <Button size="lg" variant="secondary" onClick={() => trackProposalRequest('fire-chesterfield')}>Request Audit</Button>
        </div>
      </section>

      <Breadcrumb items={[{ label: "Fire Compliance", href: "/services/fire-alarms" }, { label: "Chesterfield" }]} />

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-4xl font-light mb-6 underline-accent inline-block">Logistics Fire Compliance</h2>
            <p className="text-lg text-muted-foreground">Chesterfield's strategic position as a regional logistics hub demands fire compliance that protects operational uptime. EntireFM delivers BS 5839-certified testing with immediate remedial response across distribution facilities.</p>
          </div>
          <div className="lg:col-span-1"><div className="sticky top-4"><SidebarCTA /></div></div>
        </div>
      </div>
    </>
  );
};

export default FireChesterfield;