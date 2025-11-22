import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Download, CheckCircle, AlertTriangle } from "lucide-react";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { SidebarCTA } from "@/components/shared/SidebarCTA";
import { FAQSection } from "@/components/shared/FAQSection";
import { SchemaMarkup, LocalBusinessSchema } from "@/components/shared/SchemaMarkup";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { useConversionTracking } from "@/hooks/useConversionTracking";

const ElectricalLincoln = () => {
  const { trackDownload, trackProposalRequest } = useConversionTracking();

  const faqs = [
    {
      question: "What electrical compliance is required for Lincoln healthcare facilities?",
      answer: "Lincoln healthcare facilities require enhanced EICR testing covering medical equipment circuits, emergency backup systems, patient safety isolation, and critical care power integrity. Testing must comply with HTM standards and be conducted with minimal disruption to clinical operations. Risk-averse healthcare environments prioritize proactive electrical compliance."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Healthcare Electrical Compliance Lincoln | EICR Testing Heritage & Medical</title>
        <meta name="description" content="EICR testing for Lincoln heritage properties and healthcare facilities. Risk-averse environment electrical compliance with conservation-sensitive inspections." />
        <link rel="canonical" href="https://entirefm.com/electrical/lincoln" />
      </Helmet>

      <SchemaMarkup schema={{ "@context": "https://schema.org", "@type": "Service", "name": "Electrical Compliance - Lincoln", "provider": { "@type": "Organization", "name": "EntireFM" }, "areaServed": "Lincoln, UK" }} />
      <BreadcrumbSchema items={[{ label: "Electrical Services", href: "/services/electrical" }, { label: "Lincoln" }]} />
      <LocalBusinessSchema name="EntireFM Lincoln - Electrical" address={{ street: "Lincoln Office", city: "Lincoln", postalCode: "LN1 1AA", country: "UK" }} />

      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-background/90 z-10" />
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=2070&auto=format&fit=crop')` }} aria-label="Heritage building electrical safety inspection in Lincoln cathedral conservation area" />
        
        <div className="relative z-20 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-light text-white mb-6">Heritage & Healthcare Electrical Compliance – Lincoln</h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto font-light">Heritage property safety + healthcare compliance. Risk-averse environment demands proactive electrical compliance.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" onClick={() => trackProposalRequest('electrical-lincoln')}>Request Compliance Survey</Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" onClick={() => trackDownload('eicr-checklist')}><Download className="mr-2 h-5 w-5" />EICR Checklist</Button>
          </div>
        </div>
      </section>

      <Breadcrumb items={[{ label: "Electrical Services", href: "/services/electrical" }, { label: "Lincoln" }]} />

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-16">
            <section>
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">Heritage & Healthcare Electrical Safety</h2>
              <p className="text-lg text-muted-foreground">Lincoln's cathedral city heritage and healthcare facilities create unique electrical compliance requirements. EntireFM delivers BS 7671-certified EICR testing that respects conservation constraints while meeting modern safety standards, and provides HTM-compliant healthcare electrical inspections protecting patient safety and clinical operations.</p>
            </section>

            <section>
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">Conservation-Sensitive Compliance</h2>
              <div className="bg-muted/50 border-l-4 border-primary p-6 rounded-r-lg">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium mb-2">Risk-Averse Environment Expertise</h3>
                    <p className="text-muted-foreground">Lincoln heritage properties receive conservation-sensitive electrical inspections minimizing visual impact while achieving BS 7671 compliance. Healthcare facilities receive enhanced testing covering medical equipment circuits and emergency backup systems with minimal clinical disruption.</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-muted/30 p-8 rounded-lg">
              <h2 className="text-3xl font-light mb-6">Lincoln Coverage</h2>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                {['City Centre', 'Cathedral Quarter', 'West End', 'Birchwood', 'North Hykeham', 'Saxilby'].map(area => (
                  <div key={area} className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary" /><span>{area}</span></div>
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

export default ElectricalLincoln;
