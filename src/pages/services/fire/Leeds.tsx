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

const FireLeeds = () => {
  const { trackPhoneClick, trackDownload, trackProposalRequest } = useConversionTracking();

  const faqs = [
    {
      question: "What fire alarm testing is required for Leeds PBSA?",
      answer: "Leeds student accommodation requires BS 5839 L1 systems with weekly call point testing, monthly system verification, and immediate fault response due to sleeping risk. Universities and private PBSA operators must maintain detailed log books and demonstrate proactive compliance to satisfy licensing conditions."
    },
    {
      question: "How often should retail campus fire alarms be tested in Leeds?",
      answer: "Leeds retail campuses require weekly call point tests, monthly sounder verification, quarterly battery checks, and annual third-party certification to BS 5839 standards. High-occupancy retail environments must demonstrate enhanced evacuation procedures and staff training records."
    }
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Fire Alarm Compliance Services - Leeds",
    "description": "Professional fire alarm testing and BS 5839 certification across Leeds and West Yorkshire. Specialist PBSA and retail campus compliance services.",
    "provider": { "@type": "Organization", "name": "EntireFM" },
    "areaServed": "Leeds, UK",
    "serviceType": "Fire Safety Compliance"
  };

  return (
    <>
      <Helmet>
        <title>Fire Safety Compliance in Leeds | Local Testing & Statutory Compliance | EntireFM</title>
        <meta name="description" content="Professional fire alarm testing across Leeds and West Yorkshire. PBSA, retail campus and commercial compliance with BS 5839 certification." />
        <link rel="canonical" href="https://entirefm.com/services/fire-safety" />
      </Helmet>

      <SchemaMarkup schema={serviceSchema} />
      <BreadcrumbSchema items={[{ label: "Fire Compliance", href: "/services/fire-alarms" }, { label: "Leeds" }]} />
      <LocalBusinessSchema name="EntireFM Leeds - Fire Compliance" address={{ street: "Leeds Office", city: "Leeds", postalCode: "LS1 1AA", country: "UK" }} />

      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-destructive/90 via-destructive/80 to-background/90 z-10" />
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1625225233840-695456021cde?q=80&w=2070&auto=format&fit=crop')` }} aria-label="Fire suppression system equipment in Leeds university accommodation building" />
        
        <div className="relative z-20 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-light text-white mb-6 tracking-tight">Fire Alarm Compliance – Leeds</h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto font-light">
            Protect White Rose PBSA estates and retail campuses with statutory testing across West Yorkshire.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg" onClick={() => trackProposalRequest('fire-leeds-hero')}>Request Audit</Button>
            <Button size="lg" variant="outline" className="text-lg border-white text-white hover:bg-white hover:text-destructive" onClick={() => trackDownload('fire-safety-checklist')}>
              <Download className="mr-2 h-5 w-5" />Download Checklist
            </Button>
          </div>
        </div>
      </section>

      <Breadcrumb items={[{ label: "Fire Compliance", href: "/services/fire-alarms" }, { label: "Leeds" }]} />

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-16">
            <section>
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">PBSA & Retail Campus Expertise</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Leeds' concentration of university estates and retail campus developments demands specialist fire compliance knowledge. EntireFM delivers BS 5839-compliant testing protecting both student welfare and operational licensing across White Rose areas.
              </p>
            </section>

            <Card className="bg-destructive text-white p-8 border-none">
              <Phone className="h-10 w-10 mb-4" />
              <h3 className="text-2xl font-medium mb-2">24/7 Leeds Response</h3>
              <Button variant="secondary" size="lg" onClick={() => trackPhoneClick()}>Call Emergency Helpdesk</Button>
            </Card>

            <section className="bg-muted/30 p-8 rounded-lg">
              <h2 className="text-3xl font-light mb-6">Leeds Coverage</h2>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                {['City Centre', 'Headingley', 'Hyde Park', 'Kirkstall', 'Holbeck', 'Chapel Allerton'].map(area => (
                  <div key={area} className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-destructive" /><span>{area}</span></div>
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

export default FireLeeds;