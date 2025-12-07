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

const PlantRoomRiskAssessments = () => {
  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Plant Room Risk Assessments" }
  ];

  const faqs = [
    {
      question: "What hazards are assessed in plant room risk assessments?",
      answer: "Assessments identify mechanical hazards (rotating machinery, belts, couplings), electrical risks (distribution boards, control panels), thermal hazards (hot pipework, boilers), stored energy (pressurised systems), confined space risks, and fire/explosion potential. Each hazard receives risk ratings and control measures."
    },
    {
      question: "Who is responsible for plant room safety?",
      answer: "The building owner or facilities manager holds duty holder responsibility under Health & Safety at Work Act. They must ensure plant rooms are risk assessed, engineers receive appropriate training, isolation procedures are documented, and emergency controls are accessible. Failure to manage plant room risks creates criminal liability."
    },
    {
      question: "How often should plant room risk assessments be reviewed?",
      answer: "Risk assessments require review after incidents, equipment changes, or alterations to access arrangements. Initial assessments should be reviewed annually or whenever significant changes occur. High-risk plant rooms with confined space entry or hot works requirements need more frequent reassessment."
    },
    {
      question: "What control measures are typically required?",
      answer: "Control measures include machinery guarding, emergency stop controls, isolation lockout procedures, ventilation for heat and fumes, adequate lighting, clear access/egress routes, personal protective equipment requirements, and permit-to-work systems for hot works or confined space entry."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Plant Room Risk Assessments | Mechanical & Electrical Hazards | Entire FM</title>
        <meta name="description" content="Comprehensive plant room risk assessments identifying operational, electrical, thermal, and fire risks. Control measures for machinery, stored energy, hot works, and confined spaces." />
      </Helmet>

      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        name="Plant Room Risk Assessments"
        description="Identifying operational, electrical and fire risks inside mechanical plant rooms, including access control, thermal hazards, hot works procedures, and stored energy risks."
        provider="Entire FM"
        areaServed="United Kingdom"
      />
      <FAQSchema faqs={faqs} />

      <div className="min-h-screen bg-background pt-20">
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-charcoal/90 z-10" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1621905251189-08b45d6a269e')] bg-cover bg-center" />
          
          <div className="container mx-auto px-6 relative z-20 text-white">
            <Breadcrumb items={breadcrumbItems} className="mb-6" />
            <h1 className="text-5xl md:text-6xl font-light mb-6 max-w-4xl">
              Plant Room Risk Assessments
            </h1>
            <p className="text-xl md:text-2xl font-light max-w-3xl text-gray-200">
              Identifying operational, electrical and fire risks inside mechanical plant rooms.
            </p>
          </div>
        </section>

        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  The Hidden Hazards of Plant Rooms
                </h2>
                <div className="prose prose-lg max-w-none font-light leading-relaxed space-y-4">
                  <p>
                    Plant rooms concentrate mechanical, electrical, thermal, and stored energy hazards in confined spaces. Engineers face rotating machinery, high voltage equipment, pressurised systems, hot surfaces exceeding 200°C, and inadequate ventilation. Without comprehensive risk assessment, plant room work creates serious injury and fatality risks.
                  </p>
                  <p>
                    The Health & Safety at Work Act requires duty holders to assess and control workplace risks. Plant rooms demand specific attention: confined space entry protocols, hot works permits, isolation procedures, and emergency shutdown training. Risk assessments document hazards, evaluate likelihood and severity, and specify control measures protecting engineers during maintenance activities.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Key Risk Categories
                </h2>
                <div className="space-y-4">
                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium mb-2">Access, Clearance & Ventilation</h3>
                        <p className="text-muted-foreground font-light">
                          Inadequate access routes create manual handling risks and evacuation delays. Insufficient working clearances force engineers into dangerous proximity to live equipment. Poor ventilation causes heat stress and toxic fume accumulation requiring forced ventilation or confined space entry procedures.
                        </p>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium mb-2">Thermal Hazards & Hot Works Control</h3>
                        <p className="text-muted-foreground font-light">
                          Uninsulated pipework and surfaces exceeding 60°C cause burn injuries. Welding, grinding, and soldering in plant rooms risk igniting flammable materials, lagging, and accumulated dust. Hot works permit systems control ignition sources and fire watch requirements during maintenance.
                        </p>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium mb-2">Stored Energy Risks</h3>
                        <p className="text-muted-foreground font-light">
                          Pressurised heating and chilled water systems store energy under pressure. Hydraulic accumulators and gas cylinders present rupture risks. Isolation procedures must address pressure relief before maintenance. Engineers require training in isolation verification and stored energy identification.
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              </section>

              <section className="bg-muted p-8 rounded-lg">
                <h3 className="text-2xl font-light mb-4">Related Services</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Link to="/services/pump-room-maintenance" className="text-primary hover:text-primary/80 transition-colors flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" />
                    Pump Room Maintenance
                  </Link>
                  <Link to="/services/hvac" className="text-primary hover:text-primary/80 transition-colors flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" />
                    HVAC Maintenance
                  </Link>
                  <Link to="/services/electrical" className="text-primary hover:text-primary/80 transition-colors flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" />
                    Electrical Services
                  </Link>
                  <Link to="/health-safety" className="text-primary hover:text-primary/80 transition-colors flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" />
                    Health & Safety Management
                  </Link>
                </div>
              </section>

              <section className="bg-charcoal text-white p-8 rounded-lg">
                <h2 className="text-3xl font-light mb-4">
                  Protect Engineers from Plant Room Hazards
                </h2>
                <p className="text-gray-300 mb-6 font-light leading-relaxed">
                  Get a fixed-price proposal for comprehensive plant room risk assessments with photographic evidence and control measure recommendations.
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

export default PlantRoomRiskAssessments;
