import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { SidebarCTA } from "@/components/shared/SidebarCTA";
import { SchemaMarkup, LocalBusinessSchema } from "@/components/shared/SchemaMarkup";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { FAQSection } from "@/components/shared/FAQSection";
import { useConversionTracking } from "@/hooks/useConversionTracking";
import { Download } from "lucide-react";

const EmergencyLightingSheffield = () => {
  const { trackDownload, trackProposalRequest } = useConversionTracking();

  const faqs = [
    {
      question: "Why is industrial emergency lighting compliance critical?",
      answer: "Complex evacuation routes, hazardous areas, and machinery create elevated risk. BS 5266 compliance ensures life-critical lighting operates during emergencies."
    },
    {
      question: "How often are tests required in industrial facilities?",
      answer: "Monthly functional tests and annual 3-hour duration tests. High-risk areas may require more frequent verification and enhanced coverage."
    },
    {
      question: "Do you handle remedials for failed units?",
      answer: "Yes. Immediate remedial response for C1/C2 defects, with transparent pricing and fast-track battery or unit replacement."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Emergency Lighting Compliance Sheffield | BS 5266 Industrial & Retail Testing</title>
        <meta name="description" content="Evacuation safety in industrial + retail complexes. BS 5266 testing for Sheffield's manufacturing and public venues." />
        <link rel="canonical" href="https://entirefm.com/emergency-lighting/sheffield" />
      </Helmet>

      <SchemaMarkup schema={{ "@context": "https://schema.org", "@type": "Service", "name": "Emergency Lighting Compliance - Sheffield", "provider": { "@type": "Organization", "name": "EntireFM" }, "areaServed": "Sheffield, UK" }} />
      <BreadcrumbSchema items={[{ label: "Emergency Lighting", href: "/services/emergency-lighting" }, { label: "Sheffield" }]} />
      <LocalBusinessSchema name="EntireFM Sheffield" address={{ street: "Sheffield Office", city: "Sheffield", postalCode: "S1 1AA", country: "UK" }} />

      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-background/90 z-10" />
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1565008576549-57569a49371d?q=80&w=2071&auto=format&fit=crop')` }} aria-label="Emergency lighting in Sheffield industrial facility and event venue" />
        
        <div className="relative z-20 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-light text-white mb-6">Emergency Lighting Compliance – Sheffield</h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto font-light">Evacuation safety in industrial + retail complexes.</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" onClick={() => trackProposalRequest('emergency-lighting-sheffield')}>Book Compliance Testing</Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" onClick={() => trackDownload('bs5266-checklist')}>
              <Download className="mr-2 h-5 w-5" />Download BS 5266 Checklist
            </Button>
          </div>
        </div>
      </section>

      <Breadcrumb items={[{ label: "Emergency Lighting", href: "/services/emergency-lighting" }, { label: "Sheffield" }]} />

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">Industrial & Retail Safety</h2>
              <p className="text-lg text-muted-foreground">Complex evacuation routes in Sheffield's industrial facilities and retail venues demand reliable emergency lighting systems.</p>
            </section>

            <section>
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">Local Coverage</h2>
              <p className="text-lg text-muted-foreground">Lower Don Valley, City Centre, Meadowhall, Hillsborough</p>
            </section>

            <FAQSection faqs={faqs} />

            <section className="bg-muted/50 p-8 rounded-lg">
              <h2 className="text-3xl font-light mb-4">Book Compliance Testing</h2>
              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <Button size="lg" variant="secondary" onClick={() => trackProposalRequest('emergency-lighting-sheffield-footer')}>Book Compliance Testing</Button>
                <div className="text-muted-foreground">
                  <p className="font-medium">📩 sheffield@entirefm.com</p>
                </div>
              </div>
            </section>
          </div>
          <div className="lg:col-span-1"><div className="sticky top-4"><SidebarCTA /></div></div>
        </div>
      </div>
    </>
  );
};

export default EmergencyLightingSheffield;
