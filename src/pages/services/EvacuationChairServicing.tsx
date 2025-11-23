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

const EvacuationChairServicing = () => {
  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Evacuation Chair Servicing" }
  ];

  const faqs = [
    {
      question: "What are evacuation chairs and when are they required?",
      answer: "Evacuation chairs enable assisted descent of mobility-impaired individuals down stairs during emergencies when lifts are unavailable. Multi-storey buildings require evacuation chairs to comply with Equality Act duties ensuring disabled persons can evacuate safely. Fire risk assessments identify evacuation chair requirements based on building occupancy and floor levels."
    },
    {
      question: "How often must evacuation chairs be serviced?",
      answer: "Annual servicing is recommended to maintain operational readiness. Servicing includes gear and brake mechanism testing, belt integrity checks, frame structural inspection, wheel bearing lubrication, and operational function testing. Monthly visual inspections by building staff identify obvious damage requiring immediate attention."
    },
    {
      question: "What components are most likely to fail?",
      answer: "Brake mechanisms seize or adjust incorrectly allowing uncontrolled descent. Worn belts and straps fail during use creating fall hazards. Gear mechanisms bind preventing smooth stair descent. Wheels develop flat spots or bearing failures causing instability. Frame corrosion compromises structural integrity under user weight."
    },
    {
      question: "Who is responsible for evacuation chair provision and training?",
      answer: "Building owners or employers hold duty holder responsibility under Equality Act and fire safety legislation. They must provide sufficient evacuation chairs, ensure annual servicing, train designated staff in operation, and conduct evacuation drills. Failure to provide functional evacuation equipment creates discrimination liability and regulatory enforcement risk."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Evacuation Chair Servicing | Emergency Evacuation Equipment | Entire FM</title>
        <meta name="description" content="Annual evacuation chair servicing for multi-storey buildings. Gear, belt, and brake checks, frame integrity inspection, and compliance guidance for safe emergency evacuation." />
      </Helmet>

      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        name="Evacuation Chair Servicing"
        description="Annual servicing for safe evacuation equipment in multi-storey buildings including gear, belt and brake checks, frame integrity inspection, and compliance guidance."
        provider="Entire FM"
        areaServed="United Kingdom"
      />
      <FAQSchema faqs={faqs} />

      <div className="min-h-screen bg-background">
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-charcoal/90 z-10" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516841273335-e39b37888115')] bg-cover bg-center" />
          
          <div className="container mx-auto px-6 relative z-20 text-white">
            <Breadcrumb items={breadcrumbItems} className="mb-6" />
            <h1 className="text-5xl md:text-6xl font-light mb-6 max-w-4xl">
              Evacuation Chair Servicing
            </h1>
            <p className="text-xl md:text-2xl font-light max-w-3xl text-gray-200">
              Annual servicing for safe evacuation equipment in multi-storey buildings.
            </p>
          </div>
        </section>

        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Life Safety Equipment That Must Work First Time
                </h2>
                <div className="prose prose-lg max-w-none font-light leading-relaxed space-y-4">
                  <p>
                    Evacuation chairs enable mobility-impaired individuals to descend stairs safely during emergencies when lifts are unavailable. During fire evacuations, evacuation chairs become the only means of escape for wheelchair users and persons with limited mobility occupying upper floors. Equipment failure during emergency use creates life-threatening situations: uncontrolled descent, strap failures, brake malfunctions, and structural collapse under user weight.
                  </p>
                  <p>
                    The Equality Act requires reasonable adjustments ensuring disabled persons can evacuate buildings safely. Fire risk assessments identify evacuation chair requirements. Chairs stored for months or years develop seized brakes, degraded belts, corroded frames, and mechanical failures that only manifest during emergency deployment. Annual servicing verifies operational readiness and compliance with manufacturer specifications ensuring chairs function correctly when lives depend on them.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Servicing & Compliance
                </h2>
                <div className="space-y-4">
                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium mb-2">Gear, Belt & Brake Checks</h3>
                        <p className="text-muted-foreground font-light">
                          Gear mechanism inspection identifies binding, wear, and lubrication deficiencies affecting smooth stair descent. Belt and strap examination detects fraying, UV degradation, and contamination requiring replacement. Brake adjustment verification ensures controlled descent rates preventing dangerous acceleration under user weight.
                        </p>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium mb-2">Frame Integrity & Operational Testing</h3>
                        <p className="text-muted-foreground font-light">
                          Structural frame inspection identifies corrosion, stress cracks, and weld failures compromising load-bearing capacity. Wheel bearing lubrication ensures smooth operation during descent. Operational testing under loaded conditions verifies chairs perform correctly. Missing components, incorrect assembly, and user manual availability require verification.
                        </p>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium mb-2">Compliance Guidance & Training Requirements</h3>
                        <p className="text-muted-foreground font-light">
                          Building owners must provide sufficient chairs for maximum occupancy, ensure visible storage locations, and train designated staff in operation. Servicing records demonstrate due diligence during regulatory inspections and insurance claims. Evacuation drills verify trained staff can deploy chairs effectively during time-critical emergency scenarios.
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              </section>

              <section className="bg-muted p-8 rounded-lg">
                <h3 className="text-2xl font-light mb-4">Related Services</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Link to="/services/fire-safety" className="text-primary hover:text-primary/80 transition-colors flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" />
                    Fire Safety Services
                  </Link>
                  <Link to="/services/emergency-lighting" className="text-primary hover:text-primary/80 transition-colors flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" />
                    Emergency Lighting
                  </Link>
                  <Link to="/services/fire-alarms" className="text-primary hover:text-primary/80 transition-colors flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" />
                    Fire Alarm Systems
                  </Link>
                  <Link to="/health-safety" className="text-primary hover:text-primary/80 transition-colors flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" />
                    Health & Safety Management
                  </Link>
                </div>
              </section>

              <section className="bg-charcoal text-white p-8 rounded-lg">
                <h2 className="text-3xl font-light mb-4">
                  Ensure Evacuation Equipment Is Emergency-Ready
                </h2>
                <p className="text-gray-300 mb-6 font-light leading-relaxed">
                  Get a fixed-price proposal for annual evacuation chair servicing with certification and compliance guidance.
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

export default EvacuationChairServicing;
