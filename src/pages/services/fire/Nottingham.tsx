import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { SidebarCTA } from "@/components/shared/SidebarCTA";
import { FAQSection } from "@/components/shared/FAQSection";
import { SchemaMarkup, LocalBusinessSchema } from "@/components/shared/SchemaMarkup";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { useConversionTracking } from "@/hooks/useConversionTracking";
import { Download } from "lucide-react";

const FireNottingham = () => {
  const { trackDownload, trackProposalRequest } = useConversionTracking();
  const faqs = [{ question: "What fire compliance is needed for Nottingham's historic buildings?", answer: "Historic buildings in Nottingham require retrospective fire alarm systems meeting BS 5839 while respecting conservation requirements. EntireFM specializes in integrating modern detection technology into heritage structures with minimal visual impact." }];

  return (
    <>
      <Helmet>
        <title>Fire Safety Compliance in Nottingham | Local Testing & Statutory Compliance | EntireFM</title>
        <meta name="description" content="Fire compliance for Nottingham's historic buildings and student-dense environment. BS 5839 testing protecting heritage structures and PBSA developments." />
        <link rel="canonical" href="https://entirefm.com/services/fire-safety" />
      </Helmet>

      <SchemaMarkup schema={{ "@context": "https://schema.org", "@type": "Service", "name": "Fire Alarm Compliance - Nottingham", "provider": { "@type": "Organization", "name": "EntireFM" }, "areaServed": "Nottingham, UK" }} />
      <BreadcrumbSchema items={[{ label: "Fire Compliance", href: "/services/fire-alarms" }, { label: "Nottingham" }]} />
      <LocalBusinessSchema name="EntireFM Nottingham" address={{ street: "Nottingham Office", city: "Nottingham", postalCode: "NG1 1AA", country: "UK" }} />

      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-destructive/90 to-background/90 z-10" />
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1624018030910-e3c4b8f7eebe?q=80&w=2070&auto=format&fit=crop')` }} aria-label="Fire detection sensors and monitoring equipment in Nottingham heritage building" />
        
        <div className="relative z-20 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-light text-white mb-6">Fire Compliance – Nottingham</h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto font-light">Historic buildings + student-dense environment. Compliance vulnerability protection.</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" onClick={() => trackProposalRequest('fire-nottingham')}>Request Audit</Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-destructive" onClick={() => trackDownload('fire-checklist')}><Download className="mr-2 h-5 w-5" />Download Checklist</Button>
          </div>
        </div>
      </section>

      <Breadcrumb items={[{ label: "Fire Compliance", href: "/services/fire-alarms" }, { label: "Nottingham" }]} />

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-16">
            <section>
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">Heritage & Student Housing Expertise</h2>
              <p className="text-lg text-muted-foreground">Nottingham's historic commercial buildings and high student population create unique fire compliance challenges. EntireFM delivers BS 5839 certification respecting conservation requirements while protecting modern PBSA developments.</p>
            </section>
            <FAQSection faqs={faqs} />
          </div>
          <div className="lg:col-span-1"><div className="sticky top-4"><SidebarCTA /></div></div>
        </div>
      </div>
    </>
  );
};

export default FireNottingham;