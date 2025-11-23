import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { SidebarCTA } from "@/components/shared/SidebarCTA";
import { SchemaMarkup, LocalBusinessSchema } from "@/components/shared/SchemaMarkup";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { FAQSection } from "@/components/shared/FAQSection";
import { useConversionTracking } from "@/hooks/useConversionTracking";
import { Download } from "lucide-react";

const EmergencyLightingBirmingham = () => {
  const { trackDownload, trackProposalRequest } = useConversionTracking();

  const faqs = [
    {
      question: "How often are emergency lighting tests required in Birmingham?",
      answer: "Monthly functional tests and annual 3-hour duration tests as per BS 5266. High-footfall venues often require more frequent verification."
    },
    {
      question: "What happens if emergency lights fail during testing?",
      answer: "We immediately categorize the risk, provide transparent remedial quotes, and schedule fast-track battery replacement or unit upgrades."
    },
    {
      question: "Do you cover large venues like NEC Birmingham?",
      answer: "Yes. We specialize in complex multi-zone sites with extensive emergency lighting systems requiring coordinated testing and rapid remediation."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Emergency Lighting Compliance Birmingham | BS 5266 Testing & Rapid Remedials</title>
        <meta name="description" content="EICR testing & remedials across logistics, manufacturing & corporate estates in the West Midlands. BS 5266 testing for high-footfall retail and logistics venues." />
        <link rel="canonical" href="https://entirefm.com/emergency-lighting/birmingham" />
      </Helmet>

      <SchemaMarkup schema={{ "@context": "https://schema.org", "@type": "Service", "name": "Emergency Lighting Compliance - Birmingham", "provider": { "@type": "Organization", "name": "EntireFM" }, "areaServed": "Birmingham, UK" }} />
      <BreadcrumbSchema items={[{ label: "Emergency Lighting", href: "/services/emergency-lighting" }, { label: "Birmingham" }]} />
      <LocalBusinessSchema name="EntireFM Birmingham" address={{ street: "Birmingham Office", city: "Birmingham", postalCode: "B1 1AA", country: "UK" }} />

      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-background/90 z-10" />
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2074&auto=format&fit=crop')` }} aria-label="Emergency lighting system in Birmingham public venue showing evacuation route signage" />
        
        <div className="relative z-20 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-light text-white mb-6">Emergency Lighting Compliance – Birmingham</h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto font-light">EICR testing & remedials across logistics, manufacturing & corporate estates in the West Midlands.</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" onClick={() => trackProposalRequest('emergency-lighting-birmingham')}>Request Safety Audit</Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" onClick={() => trackDownload('bs5266-checklist')}>
              <Download className="mr-2 h-5 w-5" />Download BS 5266 Checklist
            </Button>
          </div>
        </div>
      </section>

      <Breadcrumb items={[{ label: "Emergency Lighting", href: "/services/emergency-lighting" }, { label: "Birmingham" }]} />

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">Why Birmingham Requires Absolute Compliance</h2>
              <p className="text-lg text-muted-foreground mb-4">High volumes in retail + logistics → rapid evacuation scenarios demand enforced standards.</p>
              <p className="text-lg text-muted-foreground mb-4">Failures lead to:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
                <li>Legal liability for the Responsible Person</li>
                <li>Insurance rejection for fire-related claims</li>
                <li>Operational shutdown and enforcement penalties</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">Core Compliance Services (BS 5266)</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Monthly functional tests of all emergency lighting units</li>
                <li>Annual 3-hour duration discharge verification</li>
                <li>Immediate remedials and battery replacements</li>
                <li>Digital logbooks and audit-ready certificates</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">Remedials Resolved Fast</h2>
              <p className="text-lg text-muted-foreground">We proactively identify and fix safety concerns to eliminate shutdown risk and maintain continuous compliance.</p>
            </section>

            <section>
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">Audit-Ready Documentation</h2>
              <p className="text-lg text-muted-foreground">Complete evidence and traceability for insurers, fire officers, and internal auditors—always accessible, always current.</p>
            </section>

            <section>
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">Sectors Protected</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>NEC venues and exhibition spaces</li>
                <li>Logistics and distribution centres</li>
                <li>Corporate facilities and business parks</li>
                <li>Retail and hospitality venues</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">Local Coverage</h2>
              <p className="text-lg text-muted-foreground">City Centre, Solihull, Sutton Coldfield, Digbeth, NEC, Tyseley</p>
            </section>

            <FAQSection faqs={faqs} />

            <section className="bg-muted/50 p-8 rounded-lg">
              <h2 className="text-3xl font-light mb-4">Protect Your Business. Request a Safety Audit Today.</h2>
              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <Button size="lg" variant="secondary" onClick={() => trackProposalRequest('emergency-lighting-birmingham-footer')}>Request Safety Audit</Button>
                <div className="text-muted-foreground">
                  <p className="font-medium">📩 birmingham@entirefm.com</p>
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

export default EmergencyLightingBirmingham;
