import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { SidebarCTA } from "@/components/shared/SidebarCTA";
import { SchemaMarkup, LocalBusinessSchema } from "@/components/shared/SchemaMarkup";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { FAQSection } from "@/components/shared/FAQSection";
import { useConversionTracking } from "@/hooks/useConversionTracking";
import { Download } from "lucide-react";

const EmergencyLightingLondon = () => {
  const { trackDownload, trackProposalRequest } = useConversionTracking();

  const faqs = [
    {
      question: "How often do BS 5266 tests need completing?",
      answer: "BS 5266 requires monthly functional tests and annual 3-hour duration tests. We manage the full schedule and provide audit-ready documentation for every test."
    },
    {
      question: "What happens if units fail duration tests?",
      answer: "We immediately log the failure, categorize the risk, and schedule battery replacement or unit upgrades. Certificates are reissued once remediation is complete."
    },
    {
      question: "Who is responsible for emergency lighting compliance?",
      answer: "The Responsible Person or duty holder under the Regulatory Reform (Fire Safety) Order 2005. We support full compliance on their behalf with testing, remedials, and documentation."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Emergency Lighting Compliance London | BS 5266 Testing & 3-Hour Verification</title>
        <meta name="description" content="BS 5266 emergency lighting testing and 3-hour discharge verification protecting life safety and legal compliance across London's commercial estate." />
        <link rel="canonical" href="https://entirefm.com/emergency-lighting/london" />
      </Helmet>

      <SchemaMarkup schema={{ "@context": "https://schema.org", "@type": "Service", "name": "Emergency Lighting Compliance - London", "provider": { "@type": "Organization", "name": "EntireFM" }, "areaServed": "London, UK" }} />
      <BreadcrumbSchema items={[{ label: "Emergency Lighting", href: "/services/emergency-lighting" }, { label: "London" }]} />
      <LocalBusinessSchema name="EntireFM London" address={{ street: "London Office", city: "London", postalCode: "EC1A 1AA", country: "UK" }} />

      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-background/90 z-10" />
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')` }} aria-label="London commercial building with emergency exit lighting system" />
        
        <div className="relative z-20 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-light text-white mb-6">Emergency Lighting Compliance – London</h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto font-light">BS 5266 testing and 3-hour discharge verification to protect life safety and legal compliance across London's commercial estate.</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" onClick={() => trackProposalRequest('emergency-lighting-london')}>Request 3-Hour Test</Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" onClick={() => trackDownload('bs5266-checklist')}>
              <Download className="mr-2 h-5 w-5" />Download BS 5266 Checklist
            </Button>
          </div>
        </div>
      </section>

      <Breadcrumb items={[{ label: "Emergency Lighting", href: "/services/emergency-lighting" }, { label: "London" }]} />

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">Why London Requires Absolute Compliance</h2>
              <p className="text-lg text-muted-foreground mb-4">Dense public footfall + high-rise evacuation risk = enforced standards.</p>
              <p className="text-lg text-muted-foreground mb-4">Failures lead to:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
                <li>Legal liability for the Responsible Person</li>
                <li>Insurance rejection</li>
                <li>Shutdown penalties</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">Core Compliance Services (BS 5266)</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Monthly functional tests</li>
                <li>Annual 3-hour duration tests</li>
                <li>Remedials and battery replacements</li>
                <li>Logbooks and audit certificates</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">Remedials Resolved Fast</h2>
              <p className="text-lg text-muted-foreground">We proactively fix safety concerns to remove shutdown risk.</p>
            </section>

            <section>
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">Audit-Ready Documentation</h2>
              <p className="text-lg text-muted-foreground">Evidence and traceability for insurers, fire officers & auditors.</p>
            </section>

            <section>
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">Sectors Protected</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Corporate offices</li>
                <li>Retail & hospitality</li>
                <li>PBSA & universities</li>
                <li>Public venues</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">Local Coverage</h2>
              <p className="text-lg text-muted-foreground">Westminster, City, Canary Wharf, Stratford, Wembley, Heathrow corridor</p>
            </section>

            <FAQSection faqs={faqs} />

            <section className="bg-muted/50 p-8 rounded-lg">
              <h2 className="text-3xl font-light mb-4">Protect Your Business. Request a 3-Hour Test Today.</h2>
              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <Button size="lg" variant="secondary" onClick={() => trackProposalRequest('emergency-lighting-london-footer')}>Request 3-Hour Test</Button>
                <div className="text-muted-foreground">
                  <p className="font-medium">📩 london@entirefm.com</p>
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

export default EmergencyLightingLondon;
