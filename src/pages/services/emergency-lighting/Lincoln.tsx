import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { SidebarCTA } from "@/components/shared/SidebarCTA";
import { SchemaMarkup, LocalBusinessSchema } from "@/components/shared/SchemaMarkup";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { FAQSection } from "@/components/shared/FAQSection";
import { useConversionTracking } from "@/hooks/useConversionTracking";
import { Download } from "lucide-react";

const EmergencyLightingLincoln = () => {
  const { trackDownload, trackProposalRequest } = useConversionTracking();

  const faqs = [
    {
      question: "Why is emergency lighting critical in healthcare facilities?",
      answer: "Vulnerable populations and life-critical operations demand reliable BS 5266-compliant emergency lighting to protect patient safety during evacuations."
    },
    {
      question: "How do you handle heritage building constraints?",
      answer: "We work sensitively with conservation requirements, providing discreet testing and installation that respects historic fabric while meeting BS 5266 standards."
    },
    {
      question: "What documentation supports CQC compliance?",
      answer: "Full BS 5266 certificates, digital logbooks, and remedial records provide audit-ready evidence for CQC inspections and healthcare governance frameworks."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Emergency Lighting Compliance Lincoln | BS 5266 Healthcare & Heritage Testing</title>
        <meta name="description" content="Healthcare & heritage sites must meet strict safety enforcement. BS 5266 testing for Lincoln's hospitals and historic buildings." />
        <link rel="canonical" href="https://entirefm.com/emergency-lighting/lincoln" />
      </Helmet>

      <SchemaMarkup schema={{ "@context": "https://schema.org", "@type": "Service", "name": "Emergency Lighting Compliance - Lincoln", "provider": { "@type": "Organization", "name": "EntireFM" }, "areaServed": "Lincoln, UK" }} />
      <BreadcrumbSchema items={[{ label: "Emergency Lighting", href: "/services/emergency-lighting" }, { label: "Lincoln" }]} />
      <LocalBusinessSchema name="EntireFM Lincoln" address={{ street: "Lincoln Office", city: "Lincoln", postalCode: "LN1 1AA", country: "UK" }} />

      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-background/90 z-10" />
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?q=80&w=2072&auto=format&fit=crop')` }} aria-label="Emergency lighting in Lincoln healthcare facility and heritage building" />
        
        <div className="relative z-20 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-light text-white mb-6">Emergency Lighting Compliance – Lincoln</h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto font-light">Healthcare & heritage sites — must meet strict safety enforcement.</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" onClick={() => trackProposalRequest('emergency-lighting-lincoln')}>Request Compliance Visit</Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" onClick={() => trackDownload('bs5266-checklist')}>
              <Download className="mr-2 h-5 w-5" />Download BS 5266 Checklist
            </Button>
          </div>
        </div>
      </section>

      <Breadcrumb items={[{ label: "Emergency Lighting", href: "/services/emergency-lighting" }, { label: "Lincoln" }]} />

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">Healthcare & Heritage Protection</h2>
              <p className="text-lg text-muted-foreground">Specialized emergency lighting obligations for vulnerable populations and irreplaceable assets.</p>
            </section>

            <section>
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">Local Coverage</h2>
              <p className="text-lg text-muted-foreground">City Centre, North Hykeham, Ermine, Branston</p>
            </section>

            <FAQSection faqs={faqs} />

            <section className="bg-muted/50 p-8 rounded-lg">
              <h2 className="text-3xl font-light mb-4">Request Compliance Visit</h2>
              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <Button size="lg" variant="secondary" onClick={() => trackProposalRequest('emergency-lighting-lincoln-footer')}>Request Compliance Visit</Button>
                <div className="text-muted-foreground">
                  <p className="font-medium">📩 lincoln@entirefm.com</p>
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

export default EmergencyLightingLincoln;
