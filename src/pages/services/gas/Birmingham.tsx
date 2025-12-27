import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Download, ArrowRight } from "lucide-react";
import { FAQSection } from "@/components/shared/FAQSection";
import { SidebarCTA } from "@/components/shared/SidebarCTA";
import { SchemaMarkup } from "@/components/shared/SchemaMarkup";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { useConversionTracking } from "@/hooks/useConversionTracking";
import ServiceHeroSection from "@/components/shared/ServiceHeroSection";

const GasSafetyBirmingham = () => {
  const { trackDownload, trackProposalRequest } = useConversionTracking();

  const faqs = [
    {
      question: "What creates elevated CO exposure risk in industrial settings?",
      answer: "Large commercial catering facilities, industrial gas heating systems, and high-volume boiler plantrooms create elevated CO risk due to continuous operation, high combustion loads, and complex ventilation requirements. Regular CP42 and CP15 certification ensures safe operation.",
    },
    {
      question: "Can gas safety inspections be scheduled around operations?",
      answer: "Yes. We work with industrial and logistics operators to schedule gas safety audits, boiler servicing, and CP1/CP15 certification during planned shutdowns or out-of-hours to maintain operational continuity.",
    },
    {
      question: "How does boiler optimisation reduce energy costs?",
      answer: "Burner tuning, heat recovery installation, and control system upgrades can reduce fuel consumption by 15-25% in large commercial plantrooms. At logistics sites with 24/7 heating demands, payback periods are typically under 18 months.",
    },
  ];

  const LocalBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Entire FM - Gas Safety & Boiler Compliance Birmingham",
    "description": "Industrial gas safety compliance across logistics & manufacturing estates in Birmingham.",
    "areaServed": "Birmingham",
    "serviceType": "Gas Safety Compliance",
    "email": "birmingham@entirefm.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Birmingham",
      "addressCountry": "GB"
    }
  };

  const heroStats = [
    { value: "24/7", label: "Emergency Response" },
    { value: "CP42", label: "Catering Certified" },
    { value: "100", label: "Sites Covered", suffix: "+" },
    { value: "15-25", label: "Fuel Savings", suffix: "%" }
  ];

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Gas Safety", href: "/services/gas-safety" },
    { label: "Birmingham" }
  ];

  return (
    <>
      <Helmet>
        <title>Gas Safety & Boiler Compliance in Birmingham | Local Testing & Statutory Compliance | EntireFM</title>
        <meta name="description" content="Industrial gas safety compliance for Birmingham logistics & manufacturing estates. CP1/CP15, CP42 catering, PRV testing, and boiler optimisation." />
        <link rel="canonical" href="https://entirefm.com/services/gas-safety" />
      </Helmet>

      <SchemaMarkup schema={LocalBusinessSchema} />
      <BreadcrumbSchema items={breadcrumbItems} />

      <ServiceHeroSection
        breadcrumbItems={breadcrumbItems}
        title="Gas Safety & Boiler Compliance – Birmingham"
        description="Industrial gas safety compliance across logistics & manufacturing estates. CP42 catering, PRV testing, and boiler optimisation."
        stats={heroStats}
        primaryCTA={{
          label: "Book Risk Assessment",
          href: "/contact",
          icon: ArrowRight
        }}
        secondaryCTA={{
          label: "Download Checklist",
          href: "#",
          icon: Download
        }}
        backgroundImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070"
      />

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-16">
            <section>
              <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                Why Birmingham Needs Strong Controls
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                Large workforce volumes + warm recirculating systems = elevated bacterial growth risk in industrial heating systems.
              </p>
              <p className="text-foreground font-medium">
                We ensure risk is controlled, evidenced and audit-ready.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                Gas Safe Certified Services
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <h3 className="text-xl font-light mb-4">Core Services</h3>
                  <ul className="space-y-2">
                    <li className="text-sm text-muted-foreground font-light flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      CP1 / CP15 Commercial Gas Certificates
                    </li>
                    <li className="text-sm text-muted-foreground font-light flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      CP42 Gas Catering Safety
                    </li>
                    <li className="text-sm text-muted-foreground font-light flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      PRV testing & pressure systems
                    </li>
                    <li className="text-sm text-muted-foreground font-light flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      Flue compliance verification
                    </li>
                  </ul>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-light mb-4">Rapid Remedials</h3>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed">
                    When gas safety risks are identified, we execute repairs immediately — no delays, no extended exposure to hazardous conditions.
                  </p>
                </Card>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                Energy Efficiency Upgrades
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-6">
                Boiler optimisation + heat recovery at logistics sites delivers rapid ROI:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <Card className="p-4">
                  <h4 className="font-medium mb-2">Burner Optimisation</h4>
                  <p className="text-sm text-muted-foreground font-light">Tune combustion efficiency without equipment replacement</p>
                </Card>
                <Card className="p-4">
                  <h4 className="font-medium mb-2">Heat Recovery Systems</h4>
                  <p className="text-sm text-muted-foreground font-light">Capture waste heat for space heating and DHW</p>
                </Card>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                Digital Evidence Trail
              </h2>
              <Card className="p-6 bg-muted/50">
                <p className="text-muted-foreground font-light leading-relaxed mb-4">
                  All compliance stored centrally — always inspector-ready.
                </p>
                <ul className="space-y-2">
                  <li className="text-sm text-muted-foreground font-light flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    Digital certificates and engineer logs
                  </li>
                  <li className="text-sm text-muted-foreground font-light flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    Automated renewal alerts
                  </li>
                  <li className="text-sm text-muted-foreground font-light flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    Audit-ready documentation portal
                  </li>
                </ul>
              </Card>
            </section>

            <section>
              <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                Sectors We Support
              </h2>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-light">Industrial</span>
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-light">Logistics</span>
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-light">Commercial</span>
              </div>
            </section>

            <section className="bg-muted/30 p-8 rounded-lg">
              <h3 className="text-2xl font-light mb-4 underline-accent inline-block">Case Study</h3>
              <p className="text-muted-foreground font-light leading-relaxed">
                NEC hospitality venue compliance uplift — full CP42 certification achieved with improved governance & peace of mind.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                Local Coverage in Birmingham
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed">
                Our Gas Safe engineers serve: City Centre, Solihull, Digbeth, NEC corridor.
              </p>
            </section>

            <FAQSection faqs={faqs} />

            <section className="bg-charcoal text-white p-12 rounded-lg text-center">
              <h2 className="text-3xl font-light mb-4">Industrial Gas Safety You Can Trust</h2>
              <p className="text-xl mb-8 text-gray-300 font-light">
                📩 birmingham@entirefm.com
              </p>
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">
                  Book Gas Audit
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </section>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <SidebarCTA />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GasSafetyBirmingham;
