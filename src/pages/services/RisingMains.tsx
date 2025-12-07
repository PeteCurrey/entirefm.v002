import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, AlertTriangle, CheckCircle2, Phone } from "lucide-react";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { ServiceSchema, FAQSchema } from "@/components/shared/SchemaMarkup";
import { FAQSection } from "@/components/shared/FAQSection";
import { SidebarCTA } from "@/components/shared/SidebarCTA";
import { Helmet } from "react-helmet";

const RisingMains = () => {
  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Rising Mains" }
  ];

  const faqs = [
    {
      question: "What is the difference between wet and dry rising mains?",
      answer: "Dry rising mains are empty pipes charged by fire service pumps during an incident. Wet rising mains are permanently charged with water for immediate use. Both require annual testing under BS 9990 to ensure operational readiness during firefighting operations."
    },
    {
      question: "How often must rising mains be tested?",
      answer: "BS 9990 requires annual testing including visual inspection, flow testing at landing valves, pressure integrity checks, and verification of inlet/outlet access. High-rise buildings above 18m typically require wet systems with more frequent inspection regimes."
    },
    {
      question: "Who is responsible for rising main maintenance?",
      answer: "The building owner or managing agent is the Responsible Person under the Regulatory Reform (Fire Safety) Order 2005. They must ensure systems are tested annually, defects remedied promptly, and certification maintained for regulatory inspections."
    },
    {
      question: "What are the consequences of failing rising main tests?",
      answer: "Failed tests can result in enforcement notices, prohibition on building use, invalidated insurance, and criminal liability if fire safety is compromised. Common failures include blocked pipework, seized valves, pressure loss, and corroded outlets requiring immediate remediation."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Rising Mains Testing & Maintenance | BS 9990 Compliance | Entire FM</title>
        <meta name="description" content="Expert rising mains testing for wet and dry systems. BS 9990 compliance, flow testing, landing valve checks, and pressure integrity verification for high-rise firefighting infrastructure." />
      </Helmet>

      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        name="Rising Mains Testing & Maintenance"
        description="High-rise firefighting infrastructure requiring annual certification under BS 9990, including flow testing, landing valve checks, and pressure integrity verification."
        provider="Entire FM"
        areaServed="United Kingdom"
      />
      <FAQSchema faqs={faqs} />

      <div className="min-h-screen bg-background pt-20">
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-charcoal/90 z-10" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5')] bg-cover bg-center" />
          
          <div className="container mx-auto px-6 relative z-20 text-white">
            <Breadcrumb items={breadcrumbItems} className="mb-6" />
            <h1 className="text-5xl md:text-6xl font-light mb-6 max-w-4xl">
              Rising Mains (Wet & Dry)
            </h1>
            <p className="text-xl md:text-2xl font-light max-w-3xl text-gray-200">
              High-rise firefighting infrastructure requiring annual certification under BS 9990.
            </p>
          </div>
        </section>

        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Why Rising Mains Are Critical
                </h2>
                <div className="prose prose-lg max-w-none font-light leading-relaxed space-y-4">
                  <p>
                    Rising mains are vertical water supply systems enabling fire service access to upper floors of buildings exceeding 18 metres. Without functional systems, firefighting operations in high-rise buildings become impossible, placing lives at risk and allowing fires to spread unchecked through multiple floors.
                  </p>
                  <p>
                    BS 9990 defines design, installation, and annual testing requirements. Wet rising mains are permanently charged with water for immediate use. Dry rising mains remain empty until charged by fire service pumps. Both systems require landing valves at strategic intervals, inlet connections at ground level, and outlet valves for hose connection on each floor.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Annual Testing Requirements
                </h2>
                <div className="space-y-4">
                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium mb-2">Visual Inspection & Flow Testing</h3>
                        <p className="text-muted-foreground font-light">
                          Complete visual inspection of pipework, valves, outlets and inlet connections. Flow testing at landing valves to verify water delivery rates meet BS 9990 minimum flow requirements (typically 1500 litres/minute for wet systems).
                        </p>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium mb-2">Pressure Integrity & Valve Checks</h3>
                        <p className="text-muted-foreground font-light">
                          Pressure testing to confirm system can withstand operational pressures without leakage. Landing valve operation checks to ensure valves open/close correctly. Inlet valve accessibility verification for fire service connection.
                        </p>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium mb-2">Corrosion & Blockage Risks</h3>
                        <p className="text-muted-foreground font-light">
                          Internal corrosion reduces flow capacity and causes valve seizure. Dry risers accumulate debris blocking pipework. Wet systems suffer legionella contamination if stagnant. Regular testing identifies deterioration requiring remedial works.
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              </section>

              <section className="bg-muted p-8 rounded-lg">
                <h3 className="text-2xl font-light mb-4">Related Services</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Link to="/services/dry-riser-testing" className="text-primary hover:text-primary/80 transition-colors flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" />
                    Dry Riser Testing
                  </Link>
                  <Link to="/services/sprinklers" className="text-primary hover:text-primary/80 transition-colors flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" />
                    Sprinkler System Maintenance
                  </Link>
                  <Link to="/services/pump-room-maintenance" className="text-primary hover:text-primary/80 transition-colors flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" />
                    Pump Room Maintenance
                  </Link>
                  <Link to="/fm-insights/what-is-statutory-maintenance" className="text-primary hover:text-primary/80 transition-colors flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" />
                    Statutory Maintenance Guide
                  </Link>
                </div>
              </section>

              <section className="bg-charcoal text-white p-8 rounded-lg">
                <h2 className="text-3xl font-light mb-4">
                  Ensure Your Rising Mains Are Fire Service Ready
                </h2>
                <p className="text-gray-300 mb-6 font-light leading-relaxed">
                  Get a fixed-price proposal for BS 9990 compliant testing, flow verification, and remedial works.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" variant="secondary">
                    <Link to="/request-proposal">
                      Request a Proposal
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-charcoal">
                    <a href="tel:+448001234567">
                      <Phone className="w-4 h-4 mr-2" />
                      24/7 Helpdesk
                    </a>
                  </Button>
                </div>
              </section>

              <FAQSection faqs={faqs} />
            </div>

            <aside className="space-y-6">
              <SidebarCTA />
            </aside>
          </div>
        </div>
      </div>
    </>
  );
};

export default RisingMains;
