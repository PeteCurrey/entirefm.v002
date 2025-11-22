import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { SidebarCTA } from "@/components/shared/SidebarCTA";
import { SchemaMarkup, LocalBusinessSchema } from "@/components/shared/SchemaMarkup";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { useConversionTracking } from "@/hooks/useConversionTracking";

const FireLincoln = () => {
  const { trackProposalRequest } = useConversionTracking();

  return (
    <>
      <Helmet>
        <title>Fire Alarm Compliance Lincoln | Heritage Buildings & Healthcare Fire Safety</title>
        <meta name="description" content="Fire compliance for Lincoln's heritage protected buildings and healthcare facilities. BS 5839 certification respecting conservation requirements." />
        <link rel="canonical" href="https://entirefm.com/fire/lincoln" />
      </Helmet>

      <SchemaMarkup schema={{ "@context": "https://schema.org", "@type": "Service", "name": "Fire Compliance - Lincoln", "provider": { "@type": "Organization", "name": "EntireFM" }, "areaServed": "Lincoln, UK" }} />
      <BreadcrumbSchema items={[{ label: "Fire Compliance", href: "/services/fire-alarms" }, { label: "Lincoln" }]} />
      <LocalBusinessSchema name="EntireFM Lincoln" address={{ street: "Lincoln Office", city: "Lincoln", postalCode: "LN1 1AA", country: "UK" }} />

      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-destructive/90 to-background/90 z-10" />
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1621905251918-48416bd8575a?q=80&w=2070&auto=format&fit=crop')` }} aria-label="Conservation-compliant fire alarm system in Lincoln healthcare facility" />
        
        <div className="relative z-20 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-light text-white mb-6">Fire Compliance – Lincoln</h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto font-light">Heritage protected buildings + healthcare focus. Conservation-sensitive fire compliance.</p>
          <Button size="lg" variant="secondary" onClick={() => trackProposalRequest('fire-lincoln')}>Request Audit</Button>
        </div>
      </section>

      <Breadcrumb items={[{ label: "Fire Compliance", href: "/services/fire-alarms" }, { label: "Lincoln" }]} />

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-4xl font-light mb-6 underline-accent inline-block">Heritage & Healthcare Fire Safety</h2>
            <p className="text-lg text-muted-foreground">Lincoln's heritage protected buildings and healthcare facilities require specialist fire compliance expertise. EntireFM delivers BS 5839-certified systems respecting conservation requirements while meeting modern safety standards across cathedral city environments.</p>
          </div>
          <div className="lg:col-span-1"><div className="sticky top-4"><SidebarCTA /></div></div>
        </div>
      </div>
    </>
  );
};

export default FireLincoln;