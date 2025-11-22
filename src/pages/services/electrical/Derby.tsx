import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Download, CheckCircle, AlertTriangle } from "lucide-react";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { SidebarCTA } from "@/components/shared/SidebarCTA";
import { FAQSection } from "@/components/shared/FAQSection";
import { SchemaMarkup, LocalBusinessSchema } from "@/components/shared/SchemaMarkup";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { useConversionTracking } from "@/hooks/useConversionTracking";

const ElectricalDerby = () => {
  const { trackDownload, trackProposalRequest } = useConversionTracking();

  const faqs = [
    {
      question: "What electrical compliance is required for Derby aerospace facilities?",
      answer: "Derby rail and aerospace manufacturing sites require comprehensive EICR testing covering critical production equipment, control systems, and secure electrical infrastructure. Testing must assess power integrity, earth fault protection, and emergency backup systems. EntireFM provides aerospace sector-compliant electrical inspections with minimal disruption to advanced manufacturing operations."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Industrial Electrical Compliance Derby | EICR Testing Rail & Aerospace</title>
        <meta name="description" content="EICR testing for Derby rail and aerospace corridor. Industrial clients rely on secure electrical control systems with critical asset safety compliance." />
        <link rel="canonical" href="https://entirefm.com/electrical/derby" />
      </Helmet>

      <SchemaMarkup schema={{ "@context": "https://schema.org", "@type": "Service", "name": "Electrical Compliance - Derby", "provider": { "@type": "Organization", "name": "EntireFM" }, "areaServed": "Derby, UK" }} />
      <BreadcrumbSchema items={[{ label: "Electrical Services", href: "/services/electrical" }, { label: "Derby" }]} />
      <LocalBusinessSchema name="EntireFM Derby - Electrical" address={{ street: "Derby Office", city: "Derby", postalCode: "DE1 1AA", country: "UK" }} />

      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-background/90 z-10" />
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1581092583537-20d51876f086?q=80&w=2070&auto=format&fit=crop')` }} aria-label="Aerospace manufacturing electrical control systems in Derby industrial facility" />
        
        <div className="relative z-20 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-light text-white mb-6">Industrial Electrical Compliance – Derby</h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto font-light">Rail & aerospace safety compliance. Industrial clients rely on secure electrical control systems.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" onClick={() => trackProposalRequest('electrical-derby')}>Request Compliance Survey</Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" onClick={() => trackDownload('eicr-checklist')}><Download className="mr-2 h-5 w-5" />EICR Checklist</Button>
          </div>
        </div>
      </section>

      <Breadcrumb items={[{ label: "Electrical Services", href: "/services/electrical" }, { label: "Derby" }]} />

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-16">
            <section>
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">Aerospace & Rail Electrical Safety</h2>
              <p className="text-lg text-muted-foreground">Derby's position as the UK's rail and aerospace manufacturing hub demands electrical compliance that protects critical production assets. EntireFM delivers BS 7671-certified EICR testing across advanced manufacturing facilities with specialist understanding of secure electrical control systems and mission-critical power integrity requirements.</p>
            </section>

            <section>
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">Critical Asset Protection</h2>
              <div className="bg-muted/50 border-l-4 border-primary p-6 rounded-r-lg">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium mb-2">Secure Control System Compliance</h3>
                    <p className="text-muted-foreground">Derby aerospace and rail facilities receive enhanced electrical inspections covering control system power integrity, emergency backup verification, and production equipment electrical safety with minimal operational disruption to advanced manufacturing processes.</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-muted/30 p-8 rounded-lg">
              <h2 className="text-3xl font-light mb-6">Derby Coverage</h2>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                {['City Centre', 'Pride Park', 'Sinfin', 'Alvaston', 'Chaddesden', 'Oakwood'].map(area => (
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

export default ElectricalDerby;
