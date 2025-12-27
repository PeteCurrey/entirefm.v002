import { Helmet } from "react-helmet";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Phone, CheckCircle } from "lucide-react";
import { SidebarCTA } from "@/components/shared/SidebarCTA";
import { FAQSection } from "@/components/shared/FAQSection";
import { SchemaMarkup, LocalBusinessSchema } from "@/components/shared/SchemaMarkup";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { useConversionTracking } from "@/hooks/useConversionTracking";
import ServiceHeroSection from "@/components/shared/ServiceHeroSection";

const FireSheffield = () => {
  const { trackPhoneClick } = useConversionTracking();

  const faqs = [
    { question: "What fire compliance is required for Sheffield industrial sites?", answer: "Sheffield manufacturing and logistics facilities require BS 5839 systems appropriate to the fire risk classification. Heavy industrial sites typically need Category L2 systems with beam detection and sprinkler integration." }
  ];

  const heroStats = [
    { value: "24/7", label: "Emergency Response" },
    { value: "L2", label: "Industrial Systems" },
    { value: "BS 5839", label: "Certified" },
    { value: "<4hr", label: "Response Time" }
  ];

  return (
    <>
      <Helmet>
        <title>Fire Safety Compliance in Sheffield | Local Testing & Statutory Compliance | EntireFM</title>
        <meta name="description" content="Fire compliance for Sheffield's heavy industrial, logistics and residential tower sites. Expert BS 5839 testing with manufacturing heritage knowledge." />
        <link rel="canonical" href="https://entirefm.com/services/fire-safety" />
      </Helmet>

      <SchemaMarkup schema={{ "@context": "https://schema.org", "@type": "Service", "name": "Fire Alarm Compliance Services - Sheffield", "provider": { "@type": "Organization", "name": "EntireFM" }, "areaServed": "Sheffield, UK" }} />
      <BreadcrumbSchema items={[{ label: "Fire Compliance", href: "/services/fire-alarms" }, { label: "Sheffield" }]} />
      <LocalBusinessSchema name="EntireFM Sheffield - Fire Compliance" address={{ street: "Sheffield Office", city: "Sheffield", postalCode: "S1 1AA", country: "UK" }} />

      <ServiceHeroSection
        breadcrumbItems={[{ label: "Fire Compliance", href: "/services/fire-alarms" }, { label: "Sheffield" }]}
        title="Fire Compliance – Sheffield"
        description="Heavy industrial + logistics + residential towers. Clear risk connection protecting Sheffield's manufacturing legacy."
        stats={heroStats}
        primaryCTA={{ label: "Request Fire Audit", href: "/contact" }}
        secondaryCTA={{ label: "Download Checklist", href: "/resources" }}
        backgroundImage="https://images.unsplash.com/photo-1563906267088-b029e7101114?q=80&w=2070&auto=format&fit=crop"
      />

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-16">
            <section>
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">Industrial & Residential Expertise</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">Sheffield's steelworks heritage and modern logistics operations demand robust fire compliance. From advanced manufacturing to residential towers, EntireFM protects critical assets with BS 5839-certified testing.</p>

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <Card className="p-6">
                  <Shield className="h-10 w-10 text-destructive mb-4" />
                  <h3 className="text-xl font-medium mb-2">Industrial Expertise</h3>
                  <p className="text-muted-foreground">Specialist knowledge of heavy industrial fire detection requirements.</p>
                </Card>
                <Card className="p-6">
                  <Shield className="h-10 w-10 text-destructive mb-4" />
                  <h3 className="text-xl font-medium mb-2">Tower Block Compliance</h3>
                  <p className="text-muted-foreground">Enhanced requirements for residential high-rise buildings.</p>
                </Card>
              </div>
            </section>

            <Card className="bg-destructive text-white p-8 border-none">
              <Phone className="h-10 w-10 mb-4" />
              <h3 className="text-2xl font-medium mb-2">24/7 Sheffield Response</h3>
              <Button variant="secondary" size="lg" onClick={() => trackPhoneClick()}>Call Emergency Helpdesk</Button>
            </Card>

            <section className="bg-muted/30 p-8 rounded-lg">
              <h2 className="text-3xl font-light mb-6">Sheffield Coverage</h2>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                {['City Centre', 'Lower Don Valley', 'Meadowhall', 'Attercliffe', 'Hillsborough', 'Darnall'].map(area => (
                  <div key={area} className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-destructive" /><span>{area}</span></div>
                ))}
              </div>
            </section>

            <FAQSection faqs={faqs} />
          </div>
          <div className="lg:col-span-1"><div className="sticky top-4"><SidebarCTA /></div></div>
        </div>
      </div>
    </>
  );
};

export default FireSheffield;
