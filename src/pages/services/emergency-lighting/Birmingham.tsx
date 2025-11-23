import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { SidebarCTA } from "@/components/shared/SidebarCTA";
import { SchemaMarkup, LocalBusinessSchema } from "@/components/shared/SchemaMarkup";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { FAQSection } from "@/components/shared/FAQSection";
import { useConversionTracking } from "@/hooks/useConversionTracking";
import { Download } from "lucide-react";

const EmergencyLightingBirmingham = () => {
  const { trackDownload, trackProposalRequest } = useConversionTracking();

  const faqs = [
    {
      question: "How often are emergency lighting tests required in Birmingham?",
      answer: "Monthly functional tests and annual 3-hour duration tests as per BS 5266. High-footfall venues often require more frequent verification."
    },
    {
      question: "What happens if emergency lights fail during testing?",
      answer: "We immediately categorize the risk, provide transparent remedial quotes, and schedule fast-track battery replacement or unit upgrades."
    },
    {
      question: "Do you cover large venues like NEC Birmingham?",
      answer: "Yes. We specialize in complex multi-zone sites with extensive emergency lighting systems requiring coordinated testing and rapid remediation."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Emergency Lighting Compliance Birmingham | BS 5266 Testing & Rapid Remedials</title>
        <meta name="description" content="EICR testing & remedials across logistics, manufacturing & corporate estates in the West Midlands. BS 5266 testing for high-footfall retail and logistics venues." />
        <link rel="canonical" href="https://entirefm.com/emergency-lighting/birmingham" />
      </Helmet>

      <SchemaMarkup schema={{ "@context": "https://schema.org", "@type": "Service", "name": "Emergency Lighting Compliance - Birmingham", "provider": { "@type": "Organization", "name": "EntireFM" }, "areaServed": "Birmingham, UK" }} />
      <BreadcrumbSchema items={[{ label: "Emergency Lighting", href: "/services/emergency-lighting" }, { label: "Birmingham" }]} />
      <LocalBusinessSchema name="EntireFM Birmingham" address={{ street: "Birmingham Office", city: "Birmingham", postalCode: "B1 1AA", country: "UK" }} />

      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-background/90 z-10" />
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2074&auto=format&fit=crop')` }} aria-label="Emergency lighting system in Birmingham public venue showing evacuation route signage" />
        
        <div className="relative z-20 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-light text-white mb-6">Emergency Lighting Compliance – Birmingham</h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto font-light">EICR testing & remedials across logistics, manufacturing & corporate estates in the West Midlands.</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" onClick={() => trackProposalRequest('emergency-lighting-birmingham')}>Request Safety Audit</Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" onClick={() => trackDownload('bs5266-checklist')}>
              <Download className="mr-2 h-5 w-5" />Download BS 5266 Checklist
            </Button>
          </div>
        </div>
      </section>

      <Breadcrumb items={[{ label: "Emergency Lighting", href: "/services/emergency-lighting" }, { label: "Birmingham" }]} />

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">High Volumes in Retail + Logistics</h2>
              <p className="text-lg text-muted-foreground mb-4">Rapid evacuation scenarios in Birmingham's retail and logistics hubs demand reliable emergency lighting compliance.</p>
            </section>

            <section>
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">Compliance Delivery</h2>
              <p className="text-lg text-muted-foreground">Functional & duration testing with precise remedials ensure continuous life safety protection.</p>
            </section>

            <section>
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">Sectors Protected</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>NEC venues</li>
                <li>Logistics & distribution</li>
                <li>Corporate facilities</li>
                <li>Hospitality</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">Local Coverage</h2>
              <p className="text-lg text-muted-foreground">City Centre, Solihull, Sutton Coldfield, Digbeth, NEC</p>
            </section>

            <FAQSection faqs={faqs} />

            <section className="bg-muted/50 p-8 rounded-lg">
              <h2 className="text-3xl font-light mb-4">Request Safety Audit</h2>
              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <Button size="lg" variant="secondary" onClick={() => trackProposalRequest('emergency-lighting-birmingham-footer')}>Request Safety Audit</Button>
                <div className="text-muted-foreground">
                  <p className="font-medium">📩 birmingham@entirefm.com</p>
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

export default EmergencyLightingBirmingham;
