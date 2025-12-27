import { Helmet } from "react-helmet";
import { Card } from "@/components/ui/card";
import { Shield, CheckCircle } from "lucide-react";
import { SidebarCTA } from "@/components/shared/SidebarCTA";
import { SchemaMarkup, LocalBusinessSchema } from "@/components/shared/SchemaMarkup";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import ServiceHeroSection from "@/components/shared/ServiceHeroSection";

const FireLincoln = () => {
  const heroStats = [
    { value: "24/7", label: "Emergency Response" },
    { value: "Heritage", label: "Expertise" },
    { value: "BS 5839", label: "Certified" },
    { value: "<4hr", label: "Response Time" }
  ];

  return (
    <>
      <Helmet>
        <title>Fire Safety Compliance in Lincoln | Local Testing & Statutory Compliance | EntireFM</title>
        <meta name="description" content="Fire compliance for Lincoln's heritage protected buildings and healthcare facilities. BS 5839 certification respecting conservation requirements." />
        <link rel="canonical" href="https://entirefm.com/services/fire-safety" />
      </Helmet>

      <SchemaMarkup schema={{ "@context": "https://schema.org", "@type": "Service", "name": "Fire Compliance - Lincoln", "provider": { "@type": "Organization", "name": "EntireFM" }, "areaServed": "Lincoln, UK" }} />
      <BreadcrumbSchema items={[{ label: "Fire Compliance", href: "/services/fire-alarms" }, { label: "Lincoln" }]} />
      <LocalBusinessSchema name="EntireFM Lincoln" address={{ street: "Lincoln Office", city: "Lincoln", postalCode: "LN1 1AA", country: "UK" }} />

      <ServiceHeroSection
        breadcrumbItems={[{ label: "Fire Compliance", href: "/services/fire-alarms" }, { label: "Lincoln" }]}
        title="Fire Compliance – Lincoln"
        description="Heritage protected buildings + healthcare focus. Conservation-sensitive fire compliance with BS 5839 certification."
        stats={heroStats}
        primaryCTA={{ label: "Request Fire Audit", href: "/contact" }}
        secondaryCTA={{ label: "Download Checklist", href: "/resources" }}
        backgroundImage="https://images.unsplash.com/photo-1621905251918-48416bd8575a?q=80&w=2070&auto=format&fit=crop"
      />

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-16">
            <section>
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">Heritage & Healthcare Fire Safety</h2>
              <p className="text-lg text-muted-foreground">Lincoln's heritage protected buildings and healthcare facilities require specialist fire compliance expertise. EntireFM delivers BS 5839-certified systems respecting conservation requirements.</p>

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <Card className="p-6">
                  <Shield className="h-10 w-10 text-destructive mb-4" />
                  <h3 className="text-xl font-medium mb-2">Heritage Expertise</h3>
                  <p className="text-muted-foreground">Conservation-sensitive fire detection installation and testing.</p>
                </Card>
                <Card className="p-6">
                  <Shield className="h-10 w-10 text-destructive mb-4" />
                  <h3 className="text-xl font-medium mb-2">Healthcare Compliance</h3>
                  <p className="text-muted-foreground">HTM-compliant fire safety for healthcare environments.</p>
                </Card>
              </div>
            </section>

            <section className="bg-muted/30 p-8 rounded-lg">
              <h2 className="text-3xl font-light mb-6">Lincoln Coverage</h2>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                {['City Centre', 'Ermine', 'North Hykeham', 'Branston', 'Washingborough', 'Nettleham'].map(area => (
                  <div key={area} className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-destructive" /><span>{area}</span></div>
                ))}
              </div>
            </section>
          </div>
          <div className="lg:col-span-1"><div className="sticky top-4"><SidebarCTA /></div></div>
        </div>
      </div>
    </>
  );
};

export default FireLincoln;
