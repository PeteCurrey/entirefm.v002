import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Download, CheckCircle, AlertTriangle } from "lucide-react";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { SidebarCTA } from "@/components/shared/SidebarCTA";
import { FAQSection } from "@/components/shared/FAQSection";
import { SchemaMarkup, LocalBusinessSchema } from "@/components/shared/SchemaMarkup";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { useConversionTracking } from "@/hooks/useConversionTracking";

const ElectricalSheffield = () => {
  const { trackDownload, trackProposalRequest } = useConversionTracking();

  const faqs = [
    {
      question: "What electrical testing is required for Sheffield industrial sites?",
      answer: "Sheffield manufacturing facilities require comprehensive EICR testing covering high-load three-phase supplies, industrial equipment connections, and older infrastructure upgrades. Testing must assess power demand capacity, earth fault protection, and thermal loading. EntireFM specializes in heavy industrial electrical compliance with minimal production downtime."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Industrial Electrical Compliance Sheffield | EICR Testing for Manufacturing</title>
        <meta name="description" content="EICR testing for Sheffield heavy industrial sites. Manufacturing safety focus protecting older infrastructure with heavy industrial power demand compliance." />
        <link rel="canonical" href="https://entirefm.com/electrical/sheffield" />
      </Helmet>

      <SchemaMarkup schema={{ "@context": "https://schema.org", "@type": "Service", "name": "Electrical Compliance - Sheffield", "provider": { "@type": "Organization", "name": "EntireFM" }, "areaServed": "Sheffield, UK" }} />
      <BreadcrumbSchema items={[{ label: "Electrical Services", href: "/services/electrical" }, { label: "Sheffield" }]} />
      <LocalBusinessSchema name="EntireFM Sheffield - Electrical" address={{ street: "Sheffield Office", city: "Sheffield", postalCode: "S1 1AA", country: "UK" }} />

      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-background/90 z-10" />
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=2070&auto=format&fit=crop')` }} aria-label="Heavy industrial electrical power systems in Sheffield manufacturing facility" />
        
        <div className="relative z-20 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-light text-white mb-6">Industrial Electrical Compliance – Sheffield</h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto font-light">Heavy industrial power demand + older infrastructure. Manufacturing safety focus.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" onClick={() => trackProposalRequest('electrical-sheffield')}>Request Compliance Survey</Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" onClick={() => trackDownload('eicr-checklist')}><Download className="mr-2 h-5 w-5" />EICR Checklist</Button>
          </div>
        </div>
      </section>

      <Breadcrumb items={[{ label: "Electrical Services", href: "/services/electrical" }, { label: "Sheffield" }]} />

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-16">
            <section>
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">Heavy Industrial Electrical Safety</h2>
              <p className="text-lg text-muted-foreground">Sheffield's manufacturing heritage and heavy industrial operations demand electrical compliance that addresses high power demand and older infrastructure challenges. EntireFM delivers BS 7671-certified EICR testing protecting steelworks legacy sites, advanced manufacturing facilities, and logistics operations across South Yorkshire.</p>
            </section>

            <section>
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">Infrastructure Upgrade Planning</h2>
              <div className="bg-muted/50 border-l-4 border-primary p-6 rounded-r-lg">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium mb-2">Older Infrastructure Assessment</h3>
                    <p className="text-muted-foreground">Sheffield industrial sites with legacy electrical systems receive detailed capacity assessments, thermal loading analysis, and phased upgrade recommendations to maintain production continuity while achieving modern safety standards.</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-muted/30 p-8 rounded-lg">
              <h2 className="text-3xl font-light mb-6">Sheffield Coverage</h2>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                {['City Centre', 'Attercliffe', 'Meadowhall', 'Parkway', 'Lower Don Valley', 'Handsworth'].map(area => (
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

export default ElectricalSheffield;
