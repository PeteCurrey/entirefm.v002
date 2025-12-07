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

const RollerShutterMaintenance = () => {
  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Roller Shutter Maintenance" }
  ];

  const faqs = [
    {
      question: "What regulations apply to roller shutter doors?",
      answer: "PUWER (Provision and Use of Work Equipment Regulations) requires regular maintenance ensuring doors remain safe. BS EN 13241-1 defines safety requirements for power-operated doors. Risk assessments must address entrapment, crushing, and shearing hazards. Safety edge testing verifies doors stop/reverse on contact with obstructions preventing crushing injuries."
    },
    {
      question: "How often should roller shutters be serviced?",
      answer: "Six-monthly servicing is recommended for commercial doors in regular use. High-traffic industrial doors require quarterly maintenance. Servicing includes spring balance checks, motor performance testing, safety brake verification, guide rail lubrication, and control panel inspection. Emergency release mechanisms must be tested annually."
    },
    {
      question: "What are the most common failure modes?",
      answer: "Spring failures cause doors to drop suddenly creating crushing hazards. Motor burnout leaves doors inoperable. Worn guide rollers create binding and excessive friction. Safety brake failures allow uncontrolled descent. Corroded bottom bars fail during security incidents. Neglected maintenance accelerates wear causing premature replacement requirements."
    },
    {
      question: "What safety features are required on industrial doors?",
      answer: "Safety edges must detect obstructions causing instant stop/reverse. Emergency stop buttons require accessible positioning. Spring break safety devices prevent uncontrolled descent. Vision panels enable safe operation verification. Control systems must prevent operation during safety system faults. Manual override enables emergency access during power failures."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Roller Shutter & Industrial Door Maintenance | PUWER Compliance | Entire FM</title>
        <meta name="description" content="Safety-critical roller shutter maintenance under PUWER. Spring/balance testing, motor performance, safety brake checks, guide rail servicing, and emergency release testing." />
      </Helmet>

      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        name="Roller Shutter & Industrial Door Maintenance"
        description="Safety-critical doors requiring regular inspection under PUWER including spring/balance testing, motor performance, safety brake checks, and emergency release verification."
        provider="Entire FM"
        areaServed="United Kingdom"
      />
      <FAQSchema faqs={faqs} />

      <div className="min-h-screen bg-background pt-20">
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-charcoal/90 z-10" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1586864387634-97c19ce1729e')] bg-cover bg-center" />
          
          <div className="container mx-auto px-6 relative z-20 text-white">
            <Breadcrumb items={breadcrumbItems} className="mb-6" />
            <h1 className="text-5xl md:text-6xl font-light mb-6 max-w-4xl">
              Roller Shutter & Industrial Door Maintenance
            </h1>
            <p className="text-xl md:text-2xl font-light max-w-3xl text-gray-200">
              Safety-critical doors requiring regular inspection under PUWER.
            </p>
          </div>
        </section>

        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  The Hidden Dangers of Power-Operated Doors
                </h2>
                <div className="prose prose-lg max-w-none font-light leading-relaxed space-y-4">
                  <p>
                    Roller shutters and industrial doors weigh hundreds of kilograms, operating under spring tension and motor power creating significant crushing, shearing, and entrapment hazards. Spring failures cause doors to drop suddenly. Motor faults leave doors inoperable blocking access. Safety brake failures allow uncontrolled descent. Without rigorous maintenance, industrial doors transition from operational assets to dangerous liabilities.
                  </p>
                  <p>
                    PUWER requires employers to ensure work equipment remains safe through regular maintenance and inspection. BS EN 13241-1 defines safety requirements for power-operated doors including safety edges, emergency stops, and spring break devices. Risk assessments must address entrapment zones, shearing points, and emergency access requirements. Regular testing verifies safety systems prevent injuries during normal operation and fault conditions.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Critical Maintenance Components
                </h2>
                <div className="space-y-4">
                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium mb-2">Spring/Balance Testing & Motor Performance</h3>
                        <p className="text-muted-foreground font-light">
                          Spring balance verification ensures doors hold position when partially opened. Over-tensioned springs cause rapid closure creating impact hazards. Under-tensioned springs overload motors causing premature failure. Motor performance testing identifies overheating, excessive current draw, and bearing wear requiring corrective maintenance before complete failure.
                        </p>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium mb-2">Safety Brake Checks</h3>
                        <p className="text-muted-foreground font-light">
                          Safety brakes prevent uncontrolled door descent during spring or motor failures. Brake adjustment verification ensures doors stop within specified distances. Worn brake linings allow slippage creating dangerous falling hazards. Emergency manual release mechanisms must function during power failures enabling emergency egress and access for fire service.
                        </p>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium mb-2">Guide Rails & Safety Edge Testing</h3>
                        <p className="text-muted-foreground font-light">
                          Worn guide rollers create binding, excessive friction, and premature motor failure. Guide rail lubrication prevents corrosion and ensures smooth operation. Safety edge testing verifies doors stop/reverse on contact with obstructions. Failed safety edges create crushing hazards during automatic closure cycles.
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              </section>

              <section className="bg-muted p-8 rounded-lg">
                <h3 className="text-2xl font-light mb-4">Related Services</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Link to="/services/dock-leveller-maintenance" className="text-primary hover:text-primary/80 transition-colors flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" />
                    Dock Leveller Maintenance
                  </Link>
                  <Link to="/services/lifting-equipment" className="text-primary hover:text-primary/80 transition-colors flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" />
                    Lifting Equipment Testing
                  </Link>
                  <Link to="/services/access-control-systems" className="text-primary hover:text-primary/80 transition-colors flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" />
                    Access Control Systems
                  </Link>
                  <Link to="/health-safety" className="text-primary hover:text-primary/80 transition-colors flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" />
                    Health & Safety Management
                  </Link>
                </div>
              </section>

              <section className="bg-charcoal text-white p-8 rounded-lg">
                <h2 className="text-3xl font-light mb-4">
                  Maintain Safe Industrial Door Operations
                </h2>
                <p className="text-gray-300 mb-6 font-light leading-relaxed">
                  Get a fixed-price proposal for PUWER-compliant roller shutter maintenance with safety system verification.
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

export default RollerShutterMaintenance;
