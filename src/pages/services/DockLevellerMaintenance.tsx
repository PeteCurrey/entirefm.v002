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

const DockLevellerMaintenance = () => {
  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Dock Leveller Maintenance" }
  ];

  const faqs = [
    {
      question: "What are dock levellers and why are they critical?",
      answer: "Dock levellers are adjustable platforms bridging warehouse loading bays to vehicle trailer beds, enabling safe forklift access for loading/unloading. Failures cause operational shutdowns preventing goods movement, create fall hazards from unsecured platforms, and generate crushing risks from unexpected platform movement under load."
    },
    {
      question: "What regulations govern dock leveller maintenance?",
      answer: "LOLER (Lifting Operations and Lifting Equipment Regulations) requires six-monthly thorough examinations by competent persons. PUWER (Provision and Use of Work Equipment Regulations) mandates maintenance ensuring equipment remains safe. Failures to maintain dock levellers create criminal liability for duty holders under Health & Safety at Work Act."
    },
    {
      question: "What are common dock leveller failure modes?",
      answer: "Hydraulic seal leaks cause platform sagging under load. Lip extension mechanisms seize preventing trailer bed contact. Control valve failures cause uncontrolled platform descent. Safety interlocks fail allowing forklift access to unsecured platforms. Worn hinges and pivots create side-to-side platform movement generating instability."
    },
    {
      question: "How often should dock levellers be serviced?",
      answer: "Six-monthly LOLER examinations are mandatory. Quarterly preventative maintenance includes hydraulic system checks, lip extension testing, safety interlock verification, and structural inspection. High-volume facilities require monthly inspections due to accelerated wear from continuous operation under heavy loads."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Dock Leveller Servicing | LOLER & PUWER Compliance | Entire FM</title>
        <meta name="description" content="LOLER-compliant dock leveller maintenance for warehouse loading bays. Hydraulic checks, safety interlocks, lip extension testing, and control panel integrity verification." />
      </Helmet>

      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        name="Dock Leveller Servicing"
        description="LOLER & PUWER-aligned maintenance for warehouse loading docks including hydraulic checks, safety interlocks, lip extension testing, and control panel integrity."
        provider="Entire FM"
        areaServed="United Kingdom"
      />
      <FAQSchema faqs={faqs} />

      <div className="min-h-screen bg-background pt-20">
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-charcoal/90 z-10" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d')] bg-cover bg-center" />
          
          <div className="container mx-auto px-6 relative z-20 text-white">
            <Breadcrumb items={breadcrumbItems} className="mb-6" />
            <h1 className="text-5xl md:text-6xl font-light mb-6 max-w-4xl">
              Dock Leveller Servicing
            </h1>
            <p className="text-xl md:text-2xl font-light max-w-3xl text-gray-200">
              LOLER & PUWER-aligned maintenance for warehouse loading docks.
            </p>
          </div>
        </section>

        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Critical Infrastructure for Goods Movement
                </h2>
                <div className="prose prose-lg max-w-none font-light leading-relaxed space-y-4">
                  <p>
                    Dock levellers enable forklift trucks to traverse height differences between loading bays and vehicle trailer beds. Without functional levellers, goods cannot be loaded or unloaded, halting logistics operations entirely. Platform failures during loading create fall hazards, crushing risks from unexpected descent, and collision risks between forklifts and trailers. High-volume distribution centres suffer immediate operational shutdown from dock leveller failures.
                  </p>
                  <p>
                    LOLER requires six-monthly thorough examinations by competent persons. PUWER mandates maintenance ensuring equipment remains safe for continued use. Dock levellers operate under extreme conditions: continuous heavy loads, exposure to weather, hydraulic system stress, and mechanical wear from repeated lip extension cycles. Without preventative maintenance, hydraulic seals leak, safety interlocks fail, and lip mechanisms seize creating dangerous operating conditions.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Maintenance & Compliance Requirements
                </h2>
                <div className="space-y-4">
                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium mb-2">Hydraulic Checks & Safety Interlocks</h3>
                        <p className="text-muted-foreground font-light">
                          Hydraulic system inspection identifies seal leaks, contaminated fluid, and pressure loss causing platform sagging. Safety interlock testing verifies platforms cannot descend with forklifts present. Velocity fuses prevent uncontrolled descent during hydraulic failures. Emergency lowering systems require functional testing for trapped load recovery.
                        </p>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium mb-2">Lip Extension Testing</h3>
                        <p className="text-muted-foreground font-light">
                          Lip extension mechanisms must deploy reliably to contact trailer beds. Seized mechanisms prevent secure platform-to-trailer connection creating dangerous gaps. Spring tension verification ensures lips remain in contact during loading. Worn pivot bushings create lateral movement generating instability under forklift traffic.
                        </p>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium mb-2">Control Panel Integrity</h3>
                        <p className="text-muted-foreground font-light">
                          Control panels must prevent unauthorized operation and weatherproof critical electrical components. Emergency stop functions require testing to verify instant platform arrest. Control voltage verification ensures operation under all conditions. Damaged cables and connectors cause intermittent failures during critical loading operations.
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              </section>

              <section className="bg-muted p-8 rounded-lg">
                <h3 className="text-2xl font-light mb-4">Related Services</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Link to="/services/roller-shutter-maintenance" className="text-primary hover:text-primary/80 transition-colors flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" />
                    Roller Shutter Maintenance
                  </Link>
                  <Link to="/services/lifting-equipment" className="text-primary hover:text-primary/80 transition-colors flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" />
                    Lifting Equipment Testing
                  </Link>
                  <Link to="/services/loading-bay-fume-extraction" className="text-primary hover:text-primary/80 transition-colors flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" />
                    Loading Bay Fume Extraction
                  </Link>
                  <Link to="/health-safety" className="text-primary hover:text-primary/80 transition-colors flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" />
                    Health & Safety Management
                  </Link>
                </div>
              </section>

              <section className="bg-charcoal text-white p-8 rounded-lg">
                <h2 className="text-3xl font-light mb-4">
                  Maintain Safe and Compliant Loading Operations
                </h2>
                <p className="text-gray-300 mb-6 font-light leading-relaxed">
                  Get a fixed-price proposal for LOLER-compliant dock leveller maintenance with thorough examination certification.
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

export default DockLevellerMaintenance;
