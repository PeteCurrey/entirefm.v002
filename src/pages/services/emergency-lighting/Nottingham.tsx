import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { SidebarCTA } from "@/components/shared/SidebarCTA";
import { SchemaMarkup, LocalBusinessSchema } from "@/components/shared/SchemaMarkup";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { FAQSection } from "@/components/shared/FAQSection";
import { useConversionTracking } from "@/hooks/useConversionTracking";
import { Download } from "lucide-react";

const EmergencyLightingNottingham = () => {
  const { trackDownload, trackProposalRequest } = useConversionTracking();

  const faqs = [
    {
      question: "Why is PBSA emergency lighting compliance critical?",
      answer: "Student accommodations are high-risk due to occupancy density and vulnerable populations. BS 5266 ensures evacuation routes remain lit during emergencies."
    },
    {
      question: "How quickly can failed units be replaced?",
      answer: "Same-day battery replacements where supply allows, with priority callouts for C1/C2 defects to maintain uninterrupted compliance."
    },
    {
      question: "Do you provide digital compliance records?",
      answer: "Yes. All certificates, logbooks, and remedial records are digitally archived with instant audit export for insurers and regulators."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Emergency Lighting Compliance Nottingham | BS 5266 PBSA & Heritage Testing</title>
        <meta name="description" content="PBSA & heritage buildings requiring risk oversight. BS 5266 testing for Nottingham's student accommodation and retail estate." />
        <link rel="canonical" href="https://entirefm.com/emergency-lighting/nottingham" />
      </Helmet>

      <SchemaMarkup schema={{ "@context": "https://schema.org", "@type": "Service", "name": "Emergency Lighting Compliance - Nottingham", "provider": { "@type": "Organization", "name": "EntireFM" }, "areaServed": "Nottingham, UK" }} />
      <BreadcrumbSchema items={[{ label: "Emergency Lighting", href: "/services/emergency-lighting" }, { label: "Nottingham" }]} />
      <LocalBusinessSchema name="EntireFM Nottingham" address={{ street: "Nottingham Office", city: "Nottingham", postalCode: "NG1 1AA", country: "UK" }} />

      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-background/90 z-10" />
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?q=80&w=2070&auto=format&fit=crop')` }} aria-label="Emergency exit signage in Nottingham student accommodation and retail property" />
        
        <div className="relative z-20 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-light text-white mb-6">Emergency Lighting Compliance – Nottingham</h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto font-light">PBSA & heritage buildings require risk oversight.</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" onClick={() => trackProposalRequest('emergency-lighting-nottingham')}>Request Compliance Audit</Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" onClick={() => trackDownload('bs5266-checklist')}>
              <Download className="mr-2 h-5 w-5" />Download BS 5266 Checklist
            </Button>
          </div>
        </div>
      </section>

      <Breadcrumb items={[{ label: "Emergency Lighting", href: "/services/emergency-lighting" }, { label: "Nottingham" }]} />

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">Why Nottingham Requires Absolute Compliance</h2>
              <p className="text-lg text-muted-foreground mb-4">PBSA and heritage infrastructure demand proactive emergency lighting governance to protect vulnerable populations and irreplaceable assets.</p>
              <p className="text-lg text-muted-foreground mb-4">Failures lead to:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
                <li>Legal liability for the Responsible Person</li>
                <li>Insurance rejection and claim disputes</li>
                <li>Enforcement action and operational shutdown</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">Core Compliance Services (BS 5266)</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Monthly functional tests with comprehensive documentation</li>
                <li>Annual 3-hour duration discharge verification</li>
                <li>Sensitive testing for heritage building constraints</li>
                <li>Digital logbooks and audit-ready certificates</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">Remedials Resolved Fast</h2>
              <p className="text-lg text-muted-foreground">Priority deployment for any risk-rated defects with full categorization and transparent pricing for remedial works.</p>
            </section>

            <section>
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">Audit-Ready Documentation</h2>
              <p className="text-lg text-muted-foreground">Complete traceability for university governance, insurers, and fire officers—digital evidence supporting continuous compliance.</p>
            </section>

            <section>
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">Sectors Protected</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Universities and student accommodation</li>
                <li>Retail and leisure facilities</li>
                <li>Heritage buildings and public spaces</li>
                <li>Large residential operators</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">Local Coverage</h2>
              <p className="text-lg text-muted-foreground">City Centre, West Bridgford, Beeston, Colwick</p>
            </section>

            <FAQSection faqs={faqs} />

            <section className="bg-muted/50 p-8 rounded-lg">
              <h2 className="text-3xl font-light mb-4">Protect Your Business. Request a Compliance Audit Today.</h2>
              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <Button size="lg" variant="secondary" onClick={() => trackProposalRequest('emergency-lighting-nottingham-footer')}>Request Compliance Audit</Button>
                <div className="text-muted-foreground">
                  <p className="font-medium">📩 nottingham@entirefm.com</p>
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

export default EmergencyLightingNottingham;
