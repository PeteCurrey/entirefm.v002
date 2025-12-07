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

const AHUFireInterlockTesting = () => {
  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "AHU Fire Interlock Testing" }
  ];

  const faqs = [
    {
      question: "What is an AHU fire interlock?",
      answer: "A control sequence that automatically shuts down air handling units and closes fire dampers when the fire alarm activates. This prevents HVAC systems from spreading smoke and fire throughout the building via ductwork."
    },
    {
      question: "How often should fire interlocks be tested?",
      answer: "Annual testing is required to verify shutdown sequences, damper operation, and integration with fire alarm systems. Testing should be coordinated with fire alarm servicing to avoid false alarms."
    },
    {
      question: "What happens if fire dampers fail to close?",
      answer: "Open dampers allow smoke to travel through ductwork, spreading fire to adjacent compartments and compromising building compartmentation. This can result in rapid fire spread and untenable conditions throughout the building."
    },
    {
      question: "Can AHUs restart after fire alarm activation?",
      answer: "Only after manual reset by a competent person who has verified there is no fire risk. Automatic restart is prohibited. BMS systems must log fire alarm events and interlock activations for audit purposes."
    }
  ];

  return (
    <>
      <Helmet>
        <title>AHU Fire Interlock Testing | Fire Damper Compliance | Entire FM</title>
        <meta name="description" content="Expert AHU fire interlock testing. Ensuring air handling units shut down correctly on fire alarm activation with damper behaviour and BMS integration checks." />
      </Helmet>

      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        name="AHU Fire Interlock Testing"
        description="Ensuring air handling units shut down correctly on fire alarm activation, including damper behaviour, shutdown sequencing, and BMS integration checks."
        provider="Entire FM"
        areaServed="United Kingdom"
      />
      <FAQSchema faqs={faqs} />

      <div className="min-h-screen bg-background pt-20">
        {/* Hero Section */}
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-charcoal/90 z-10" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581094794329-c8112a89af12')] bg-cover bg-center" />
          
          <div className="container mx-auto px-6 relative z-20 text-white">
            <Breadcrumb items={breadcrumbItems} className="mb-6" />
            <h1 className="text-5xl md:text-6xl font-light mb-6 max-w-4xl">
              AHU Fire Interlock Testing
            </h1>
            <p className="text-xl md:text-2xl font-light max-w-3xl text-gray-200">
              Ensuring air handling units shut down correctly on fire alarm activation.
            </p>
          </div>
        </section>

        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              {/* Overview */}
              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Why AHU Fire Interlocks Are Critical
                </h2>
                <div className="prose prose-lg max-w-none font-light leading-relaxed space-y-4">
                  <p>
                    Air handling units (AHUs) circulate vast volumes of air throughout buildings via shared ductwork. During a fire event, operating AHUs become smoke distribution systems, spreading toxic gases and combustion products to areas far from the fire's origin. This defeats compartmentation strategies and creates untenable conditions across multiple zones simultaneously.
                  </p>
                  <p>
                    Fire interlocks are control sequences integrated with the fire alarm system and building management system (BMS). When the fire alarm activates, interlocks command AHUs to shut down and close motorised fire dampers within ductwork. This prevents smoke from travelling through the HVAC system and maintains building compartmentation.
                  </p>
                  <p>
                    Annual testing verifies that shutdown sequences execute correctly, dampers close fully, and BMS logging functions capture fire alarm events. Failures can result in rapid fire spread, prosecution under the Regulatory Reform (Fire Safety) Order 2005, and insurance invalidation if investigations reveal inadequate maintenance.
                  </p>
                </div>
              </section>

              {/* Compliance Standards */}
              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Compliance Standards
                </h2>
                <div className="grid gap-4">
                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <Shield className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium text-lg mb-2">BS 5588 / Approved Document B</h3>
                        <p className="text-muted-foreground font-light">
                          Building Regulations guidance on fire safety, including requirements for fire dampers and smoke control in HVAC systems. Specifies interlock requirements to prevent smoke spread via ductwork.
                        </p>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <Shield className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium text-lg mb-2">BS EN 15650</h3>
                        <p className="text-muted-foreground font-light">
                          Ventilation for buildings – Fire dampers. Defines performance requirements and testing protocols for fire dampers, including closure time, leakage rates, and periodic inspection intervals.
                        </p>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <Shield className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium text-lg mb-2">Regulatory Reform (Fire Safety) Order 2005</h3>
                        <p className="text-muted-foreground font-light">
                          Requires the Responsible Person to maintain fire safety systems, including AHU interlocks and fire dampers. Non-compliance can result in prosecution and unlimited fines.
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              </section>

              {/* Testing Requirements */}
              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Testing Requirements
                </h2>
                <div className="space-y-4">
                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium mb-2">Damper Behaviour Testing</h3>
                        <p className="text-muted-foreground font-light">
                          Simulating fire alarm activation to verify that motorised fire dampers close fully. Measuring closure times, checking for mechanical obstructions, and verifying damper blade seating. Dampers should close within specified time limits (typically 30-60 seconds).
                        </p>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium mb-2">Shutdown Sequencing</h3>
                        <p className="text-muted-foreground font-light">
                          Verifying correct AHU shutdown sequences: fans stop, dampers close, and systems enter safe mode. Testing zone-specific interlocks to ensure only relevant AHUs shut down (not entire building-wide systems if fire is localised).
                        </p>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium mb-2">BMS Integration Checks</h3>
                        <p className="text-muted-foreground font-light">
                          Testing communication between fire alarm panels, BMS controllers, and AHU control panels. Verifying alarm event logging, interlock status monitoring, and manual reset functions. Checking that BMS cannot override fire interlocks.
                        </p>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium mb-2">Manual Reset & Restart Procedures</h3>
                        <p className="text-muted-foreground font-light">
                          Verifying that AHUs cannot automatically restart after fire alarm events. Testing manual reset procedures and ensuring only authorised personnel can reinitiate HVAC operation after fire investigations.
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              </section>

              {/* Risks */}
              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Risks of Non-Compliance
                </h2>
                <div className="space-y-4">
                  <Card className="p-6 border-destructive">
                    <div className="flex items-start gap-4">
                      <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium mb-2">Rapid Fire & Smoke Spread</h3>
                        <p className="text-muted-foreground font-light">
                          Failed interlocks allow HVAC systems to distribute smoke to areas far from the fire's origin. This defeats compartmentation, creates untenable escape conditions, and can result in multiple casualties.
                        </p>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-6 border-destructive">
                    <div className="flex items-start gap-4">
                      <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium mb-2">Compromised Fire Compartmentation</h3>
                        <p className="text-muted-foreground font-light">
                          Open fire dampers breach fire-rated compartment boundaries, allowing fire to spread through ductwork. This undermines the building's passive fire protection strategy and can invalidate fire engineering approvals.
                        </p>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-6 border-destructive">
                    <div className="flex items-start gap-4">
                      <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium mb-2">Legal and Insurance Consequences</h3>
                        <p className="text-muted-foreground font-light">
                          The Responsible Person faces prosecution if fire spread results from inadequately maintained interlocks. Insurance claims may be rejected if investigations reveal non-compliant HVAC fire protection.
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              </section>

              {/* CTA Section */}
              <section className="bg-charcoal text-white p-8 rounded-lg">
                <h2 className="text-3xl font-light mb-4">
                  Ensure Compliant AHU Fire Interlocks
                </h2>
                <p className="text-gray-300 mb-6 font-light leading-relaxed">
                  Get a fixed-price proposal for annual testing, damper inspections, and BMS integration verification. Our engineers specialise in complex HVAC and fire safety systems.
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

              {/* FAQ Section */}
              <FAQSection faqs={faqs} />
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              <SidebarCTA />

              <Card className="p-6">
                <h3 className="font-medium mb-4">Related Services</h3>
                <ul className="space-y-3 text-sm">
                  <li>
                    <Link to="/services/fire-alarms" className="text-muted-foreground hover:text-foreground transition-colors">
                      Fire Alarm Systems
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/hvac-compliance" className="text-muted-foreground hover:text-foreground transition-colors">
                      HVAC Compliance & Maintenance
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/smoke-vent-systems" className="text-muted-foreground hover:text-foreground transition-colors">
                      Smoke Vent Systems (AOV)
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/ppm" className="text-muted-foreground hover:text-foreground transition-colors">
                      Planned Preventative Maintenance
                    </Link>
                  </li>
                </ul>
              </Card>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
};

export default AHUFireInterlockTesting;