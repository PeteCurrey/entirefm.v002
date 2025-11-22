import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Shield, FileCheck, AlertTriangle, Phone, Download, CheckCircle } from "lucide-react";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { SidebarCTA } from "@/components/shared/SidebarCTA";
import { FAQSection } from "@/components/shared/FAQSection";
import { SchemaMarkup, LocalBusinessSchema } from "@/components/shared/SchemaMarkup";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { useConversionTracking } from "@/hooks/useConversionTracking";

const ElectricalManchester = () => {
  const { trackPhoneClick, trackDownload, trackProposalRequest } = useConversionTracking();

  const faqs = [
    {
      question: "What electrical safety testing is required for Manchester PBSA?",
      answer: "Manchester student accommodation requires EICR testing every 5 years minimum, with enhanced requirements for HMOs and PBSA developments. Testing must cover all fixed electrical installations, communal areas, individual units, and emergency systems. Landlords must provide current EICR certificates to tenants and resolve all C1/C2 defects immediately to maintain licensing compliance."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Commercial Electrical Compliance Manchester | EICR Testing & PBSA Safety</title>
        <meta name="description" content="EICR testing for Manchester commercial properties and PBSA developments. BS 7671 compliant electrical inspections protecting Trafford Park, Airport City and student accommodation estates." />
        <link rel="canonical" href="https://entirefm.com/electrical/manchester" />
      </Helmet>

      <SchemaMarkup schema={{ "@context": "https://schema.org", "@type": "Service", "name": "Electrical Compliance - Manchester", "provider": { "@type": "Organization", "name": "EntireFM" }, "areaServed": "Manchester, UK" }} />
      <BreadcrumbSchema items={[{ label: "Electrical Services", href: "/services/electrical" }, { label: "Manchester" }]} />
      <LocalBusinessSchema name="EntireFM Manchester - Electrical" address={{ street: "Manchester Office", city: "Manchester", postalCode: "M1 1AA", country: "UK" }} />

      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-background/90 z-10" />
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop')` }} aria-label="Thermal imaging inspection of electrical systems in Manchester property" />
        
        <div className="relative z-20 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-light text-white mb-6">Commercial Electrical Compliance – Manchester</h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto font-light">PBSA fire safety tie-in. Protect student accommodation and commercial estates across Greater Manchester.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" onClick={() => trackProposalRequest('electrical-manchester')}>Request Compliance Survey</Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" onClick={() => trackDownload('eicr-checklist')}><Download className="mr-2 h-5 w-5" />EICR Checklist</Button>
          </div>
        </div>
      </section>

      <Breadcrumb items={[{ label: "Electrical Services", href: "/services/electrical" }, { label: "Manchester" }]} />

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-16">
            <section>
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">PBSA & Commercial Electrical Safety</h2>
              <p className="text-lg text-muted-foreground">Manchester's surge of student accommodation developments and commercial growth across Trafford Park and Airport City demands rigorous electrical compliance. EntireFM delivers BS 7671-certified EICR testing protecting landlord obligations, tenant safety, and operational licensing across Greater Manchester estates.</p>
            </section>

            <section>
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">Immediate Remedial Response</h2>
              <div className="bg-muted/50 border-l-4 border-primary p-6 rounded-r-lg">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium mb-2">Priority PBSA Safety</h3>
                    <p className="text-muted-foreground">Student accommodation C1/C2 defects receive 4-hour response across Manchester. We prioritize sleeping risk environments with immediate temporary mitigations and fast-tracked permanent repairs to maintain continuous licensing compliance.</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-muted/30 p-8 rounded-lg">
              <h2 className="text-3xl font-light mb-6">Greater Manchester Coverage</h2>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                {['Trafford Park', 'Airport City', 'Salford Quays', 'Oxford Road Corridor', 'Northern Quarter', 'MediaCityUK'].map(area => (
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

export default ElectricalManchester;
