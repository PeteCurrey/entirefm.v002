import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Shield, Phone, Download, CheckCircle } from "lucide-react";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { SidebarCTA } from "@/components/shared/SidebarCTA";
import { FAQSection } from "@/components/shared/FAQSection";
import { SchemaMarkup, LocalBusinessSchema } from "@/components/shared/SchemaMarkup";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { useConversionTracking } from "@/hooks/useConversionTracking";

const FireSheffield = () => {
  const { trackPhoneClick, trackDownload, trackProposalRequest } = useConversionTracking();

  const faqs = [
    {
      question: "What fire compliance is required for Sheffield industrial sites?",
      answer: "Sheffield manufacturing and logistics facilities require BS 5839 systems appropriate to the fire risk classification. Heavy industrial sites typically need Category L2 systems with beam detection, sprinkler integration, and enhanced evacuation protocols tied to manufacturing heritage."
    }
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Fire Alarm Compliance Services - Sheffield",
    "description": "Fire alarm testing for Sheffield's industrial, logistics and residential sites. BS 5839 certification with manufacturing expertise.",
    "provider": { "@type": "Organization", "name": "EntireFM" },
    "areaServed": "Sheffield, UK"
  };

  return (
    <>
      <Helmet>
        <title>Fire Alarm Compliance Sheffield | Industrial & Logistics BS 5839 Testing</title>
        <meta name="description" content="Fire compliance for Sheffield's heavy industrial, logistics and residential tower sites. Expert BS 5839 testing with manufacturing heritage knowledge." />
        <link rel="canonical" href="https://entirefm.com/fire/sheffield" />
      </Helmet>

      <SchemaMarkup schema={serviceSchema} />
      <BreadcrumbSchema items={[{ label: "Fire Compliance", href: "/services/fire-alarms" }, { label: "Sheffield" }]} />
      <LocalBusinessSchema name="EntireFM Sheffield - Fire Compliance" address={{ street: "Sheffield Office", city: "Sheffield", postalCode: "S1 1AA", country: "UK" }} />

      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-destructive/90 via-destructive/80 to-background/90 z-10" />
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1581094271901-8022df4466f9?q=80&w=2070&auto=format&fit=crop')` }} />
        
        <div className="relative z-20 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-light text-white mb-6 tracking-tight">Fire Compliance – Sheffield</h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto font-light">
            Heavy industrial + logistics + residential towers. Clear risk connection protecting Sheffield's manufacturing legacy.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" onClick={() => trackProposalRequest('fire-sheffield')}>Request Audit</Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-destructive" onClick={() => trackDownload('fire-safety-checklist')}>
              <Download className="mr-2 h-5 w-5" />Download Checklist
            </Button>
          </div>
        </div>
      </section>

      <Breadcrumb items={[{ label: "Fire Compliance", href: "/services/fire-alarms" }, { label: "Sheffield" }]} />

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-16">
            <section>
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">Industrial & Residential Expertise</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Sheffield's steelworks heritage and modern logistics operations demand robust fire compliance. From advanced manufacturing to residential towers, EntireFM protects critical assets with BS 5839-certified testing and immediate remedial response.
              </p>
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