import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Download, CheckCircle, AlertTriangle } from "lucide-react";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { SidebarCTA } from "@/components/shared/SidebarCTA";
import { FAQSection } from "@/components/shared/FAQSection";
import { SchemaMarkup, LocalBusinessSchema } from "@/components/shared/SchemaMarkup";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { useConversionTracking } from "@/hooks/useConversionTracking";

const ElectricalNottingham = () => {
  const { trackDownload, trackProposalRequest } = useConversionTracking();

  const faqs = [
    {
      question: "What electrical compliance is required for Nottingham PBSA developments?",
      answer: "Nottingham student accommodation requires EICR testing every 5 years with enhanced landlord obligations for HMO licensing. Testing must cover all communal areas, individual units, emergency lighting circuits, and fire alarm power supplies. PBSA density drives legal electrical inspection cycles with mandatory C1/C2 remedial completion before occupation."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Commercial Electrical Compliance Nottingham | EICR Testing PBSA & Retail</title>
        <meta name="description" content="EICR testing for Nottingham PBSA and high-footfall retail precincts. Legal electrical inspection cycles protecting student housing and commercial uptime." />
        <link rel="canonical" href="https://entirefm.com/electrical/nottingham" />
      </Helmet>

      <SchemaMarkup schema={{ "@context": "https://schema.org", "@type": "Service", "name": "Electrical Compliance - Nottingham", "provider": { "@type": "Organization", "name": "EntireFM" }, "areaServed": "Nottingham, UK" }} />
      <BreadcrumbSchema items={[{ label: "Electrical Services", href: "/services/electrical" }, { label: "Nottingham" }]} />
      <LocalBusinessSchema name="EntireFM Nottingham - Electrical" address={{ street: "Nottingham Office", city: "Nottingham", postalCode: "NG1 1AA", country: "UK" }} />

      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-background/90 z-10" />
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1621905252472-178d8ac26c65?q=80&w=2070&auto=format&fit=crop')` }} aria-label="Student accommodation electrical safety inspection in Nottingham PBSA development" />
        
        <div className="relative z-20 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-light text-white mb-6">Commercial Electrical Compliance – Nottingham</h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto font-light">PBSA density drives legal electrical inspection cycles. High-footfall retail precinct uptime.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" onClick={() => trackProposalRequest('electrical-nottingham')}>Request Compliance Survey</Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" onClick={() => trackDownload('eicr-checklist')}><Download className="mr-2 h-5 w-5" />EICR Checklist</Button>
          </div>
        </div>
      </section>

      <Breadcrumb items={[{ label: "Electrical Services", href: "/services/electrical" }, { label: "Nottingham" }]} />

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-16">
            <section>
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">PBSA & Retail Electrical Compliance</h2>
              <p className="text-lg text-muted-foreground">Nottingham's high student population density and commercial retail precincts demand rigorous electrical compliance. EntireFM delivers BS 7671-certified EICR testing protecting landlord licensing obligations, tenant safety, and retail operational uptime across the city's PBSA estates and high-footfall shopping environments.</p>
            </section>

            <section>
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">Legal Inspection Cycles</h2>
              <div className="bg-muted/50 border-l-4 border-primary p-6 rounded-r-lg">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium mb-2">PBSA Licensing Compliance</h3>
                    <p className="text-muted-foreground">Nottingham PBSA developments receive priority scheduling with pre-occupation EICR completion, immediate C1/C2 remedial response, and digital certification formatted for council licensing submissions and university accommodation standards.</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-muted/30 p-8 rounded-lg">
              <h2 className="text-3xl font-light mb-6">Nottingham Coverage</h2>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                {['City Centre', 'Lenton', 'Beeston', 'West Bridgford', 'Hockley', 'Sneinton'].map(area => (
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

export default ElectricalNottingham;
