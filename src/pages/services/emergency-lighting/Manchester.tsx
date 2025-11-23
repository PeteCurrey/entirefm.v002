import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { SidebarCTA } from "@/components/shared/SidebarCTA";
import { SchemaMarkup, LocalBusinessSchema } from "@/components/shared/SchemaMarkup";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { FAQSection } from "@/components/shared/FAQSection";
import { useConversionTracking } from "@/hooks/useConversionTracking";
import { Download } from "lucide-react";

const EmergencyLightingManchester = () => {
  const { trackDownload, trackProposalRequest } = useConversionTracking();

  const faqs = [
    {
      question: "Why is emergency lighting critical in Manchester's PBSA sector?",
      answer: "Student accommodations are high-risk due to occupancy density, late-night activity, and vulnerable populations. BS 5266 compliance ensures life-critical evacuation routes remain lit."
    },
    {
      question: "How quickly can remedials be completed?",
      answer: "Priority callouts for C1/C2 defects, with same-day battery replacements where supply allows. We minimize downtime and restore compliance fast."
    },
    {
      question: "Do you provide digital test records?",
      answer: "Yes. All test certificates, logbooks, and remedial records are digitally archived with instant audit export capability."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Emergency Lighting Compliance Manchester | BS 5266 PBSA & Nightlife Safety</title>
        <meta name="description" content="Emergency lighting compliance for Manchester's student accommodation and nightlife economy. BS 5266 testing with rapid remedial response." />
        <link rel="canonical" href="https://entirefm.com/emergency-lighting/manchester" />
      </Helmet>

      <SchemaMarkup schema={{ "@context": "https://schema.org", "@type": "Service", "name": "Emergency Lighting Compliance - Manchester", "provider": { "@type": "Organization", "name": "EntireFM" }, "areaServed": "Manchester, UK" }} />
      <BreadcrumbSchema items={[{ label: "Emergency Lighting", href: "/services/emergency-lighting" }, { label: "Manchester" }]} />
      <LocalBusinessSchema name="EntireFM Manchester" address={{ street: "Manchester Office", city: "Manchester", postalCode: "M1 1AA", country: "UK" }} />

      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-background/90 z-10" />
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop')` }} aria-label="Emergency lighting in Manchester student accommodation and nightlife venue" />
        
        <div className="relative z-20 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-light text-white mb-6">Emergency Lighting Compliance – Manchester</h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto font-light">Student accommodation & nightlife safety. BS 5266 compliance protecting high-risk environments.</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" onClick={() => trackProposalRequest('emergency-lighting-manchester')}>Book Testing</Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" onClick={() => trackDownload('bs5266-checklist')}>
              <Download className="mr-2 h-5 w-5" />Download BS 5266 Checklist
            </Button>
          </div>
        </div>
      </section>

      <Breadcrumb items={[{ label: "Emergency Lighting", href: "/services/emergency-lighting" }, { label: "Manchester" }]} />

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">Why Manchester Requires Absolute Compliance</h2>
              <p className="text-lg text-muted-foreground mb-4">Student accommodations, major commercial estates, and nightlife economy create complex evacuation scenarios with elevated risk.</p>
              <p className="text-lg text-muted-foreground mb-4">Failures lead to:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
                <li>Legal liability for the Responsible Person</li>
                <li>Insurance rejection for safety-related claims</li>
                <li>Enforcement action and operational shutdown</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">Core Compliance Services (BS 5266)</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Monthly functional tests of all emergency lighting units</li>
                <li>Annual 3-hour duration discharge verification</li>
                <li>Priority remedials for PBSA and high-occupancy venues</li>
                <li>Digital logbooks and audit-ready certificates</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">Remedials Resolved Fast</h2>
              <p className="text-lg text-muted-foreground">Same-day urgent repairs where risk is present. Priority callouts for C1/C2 defects to protect vulnerable populations.</p>
            </section>

            <section>
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">Digital Audit-Ready Data</h2>
              <p className="text-lg text-muted-foreground">Every asset logged. Every fault resolved. Zero paper chase. Complete traceability for insurers and regulators.</p>
            </section>

            <section>
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">Sectors Protected</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>PBSA and student accommodation</li>
                <li>Trafford Park industrial estates</li>
                <li>Salford Quays commercial developments</li>
                <li>Hospitality and nightlife venues</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">Local Coverage</h2>
              <p className="text-lg text-muted-foreground">City Centre, Salford Quays, Trafford, Didsbury, Airport City</p>
            </section>

            <FAQSection faqs={faqs} />

            <section className="bg-muted/50 p-8 rounded-lg">
              <h2 className="text-3xl font-light mb-4">Protect Your Business. Book Testing Today.</h2>
              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <Button size="lg" variant="secondary" onClick={() => trackProposalRequest('emergency-lighting-manchester-footer')}>Book Testing</Button>
                <div className="text-muted-foreground">
                  <p className="font-medium">📩 manchester@entirefm.com</p>
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

export default EmergencyLightingManchester;
