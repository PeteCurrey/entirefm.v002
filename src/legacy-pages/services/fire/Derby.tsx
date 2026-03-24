"use client";

;
import { Button } from "@/components/ui/button";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { SidebarCTA } from "@/components/shared/SidebarCTA";
import { SchemaMarkup, LocalBusinessSchema } from "@/components/shared/SchemaMarkup";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { useConversionTracking } from "@/hooks/useConversionTracking";

const FireDerby = () => {
  const { trackProposalRequest } = useConversionTracking();

  return (
    <>
      

      <SchemaMarkup schema={{ "@context": "https://schema.org", "@type": "Service", "name": "Fire Compliance - Derby", "provider": { "@type": "Organization", "name": "EntireFM" }, "areaServed": "Derby, UK" }} />
      <BreadcrumbSchema items={[{ label: "Fire Compliance", href: "/services/fire-alarms" }, { label: "Derby" }]} />
      <LocalBusinessSchema name="EntireFM Derby" address={{ street: "Derby Office", city: "Derby", postalCode: "DE1 1AA", country: "UK" }} />

      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-destructive/90 to-background/90 z-10" />
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1581092583537-20d51876f086?q=80&w=2070&auto=format&fit=crop')` }} aria-label="Fire safety systems in Derby aerospace manufacturing facility showing rail and precision engineering environment" />
        
        <div className="relative z-20 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-light text-white mb-6">Fire Compliance – Derby</h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto font-light">Rail + aerospace corridor. Critical asset safety with BS 5839 certification.</p>
          <Button size="lg" variant="secondary" onClick={() => trackProposalRequest('fire-derby')}>Request Audit</Button>
        </div>
      </section>

      <Breadcrumb items={[{ label: "Fire Compliance", href: "/services/fire-alarms" }, { label: "Derby" }]} />

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-4xl font-light mb-6 underline-accent inline-block">Advanced Manufacturing Protection</h2>
            <p className="text-lg text-muted-foreground">Derby's rail and aerospace manufacturing demands critical asset fire protection. EntireFM delivers BS 5839-certified testing protecting high-value operations across the East Midlands aerospace corridor.</p>
          </div>
          <div className="lg:col-span-1"><div className="sticky top-4"><SidebarCTA /></div></div>
        </div>
      </div>
    </>
  );
};

export default FireDerby;