import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { ArrowRight, Truck, AlertTriangle, FileText, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { ServiceSchema, FAQSchema } from "@/components/shared/SchemaMarkup";
import { FAQSection } from "@/components/shared/FAQSection";
import { SidebarCTA } from "@/components/shared/SidebarCTA";

const LoadingBaySafetySystems = () => {
  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Loading Bay Safety" }
  ];

  const faqs = [
    {
      question: "What safety systems are required at loading bays?",
      answer: "Vehicle restraints, dock lights, traffic management systems, safety barriers, roller shutter interlocks, and wheel chocks prevent accidents during loading/unloading operations."
    },
    {
      question: "How often should loading bay equipment be inspected?",
      answer: "PUWER requires regular inspection of powered equipment including roller shutters, dock levelers, and vehicle restraints. Quarterly safety checks are recommended for high-traffic industrial sites."
    },
    {
      question: "What are the main risks at loading bays?",
      answer: "Vehicle roll-away, premature trailer departure, pedestrian-vehicle collisions, falls from dock edges, dock leveler failures, and roller shutter entrapment—all preventable with proper safety systems."
    },
    {
      question: "Are loading bay safety systems legally required?",
      answer: "Yes—Health & Safety at Work Act, PUWER, and workplace transport regulations require adequate controls for vehicle-pedestrian segregation, edge protection, and loading equipment safety."
    },
    {
      question: "What documentation is required?",
      answer: "Risk assessments, equipment inspection records, operator training logs, maintenance history, and incident reports demonstrating compliance with workplace transport safety regulations."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Loading Bay Safety Systems | Roller Shutters, Traffic & Dock Safety</title>
        <meta name="description" content="Roller shutters, dock lights, traffic systems and interlocks for industrial estates. Expert loading bay safety and PUWER compliance." />
      </Helmet>

      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema 
        name="Loading Bay Safety Systems"
        description="Roller shutters, dock lights, traffic systems and interlocks for industrial estates."
        provider="EntireFM"
        areaServed="United Kingdom"
      />
      <FAQSchema faqs={faqs} />

      <div className="min-h-screen bg-background pt-20">
        <div className="relative h-[40vh] bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80')] bg-cover bg-center opacity-20" />
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Loading Bay Safety Systems</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Roller shutters, dock lights, traffic systems and interlocks for industrial estates
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <Breadcrumb items={breadcrumbItems} />
          
          <div className="grid lg:grid-cols-3 gap-8 mt-8">
            <div className="lg:col-span-2 space-y-12">
              <section>
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                  <Truck className="w-8 h-8 text-primary" />
                  High-Risk Vehicle-Pedestrian Interface
                </h2>
                <div className="prose prose-lg max-w-none space-y-4">
                  <p>
                    Loading bays are high-risk environments where vehicles, pedestrians, powered equipment, and height hazards converge. Safety systems prevent vehicle roll-away, dock edge falls, equipment entrapment, and pedestrian-vehicle collisions.
                  </p>
                  <p>
                    Inadequate controls cause serious injuries, fatalities, HSE enforcement, and prosecution under workplace transport and PUWER regulations. Properly maintained safety systems demonstrate duty of care and prevent life-changing incidents.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                  <Shield className="w-8 h-8 text-primary" />
                  Safety System Components
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-3">Vehicle Restraints</h3>
                    <p className="text-muted-foreground">
                      Mechanical or automatic restraints prevent premature trailer departure during loading, eliminating roll-away incidents and dock leveler falls.
                    </p>
                  </div>
                  <div className="border rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-3">Dock Lights & Visibility</h3>
                    <p className="text-muted-foreground">
                      LED dock lights, amber/green traffic signals, and reversing alarms improve visibility and communication between drivers and loading operatives.
                    </p>
                  </div>
                  <div className="border rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-3">Roller Shutter Interlocks</h3>
                    <p className="text-muted-foreground">
                      Safety interlocks prevent roller shutters closing onto vehicles or personnel, eliminating entrapment and crushing incidents during operations.
                    </p>
                  </div>
                  <div className="border rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-3">Traffic Management</h3>
                    <p className="text-muted-foreground">
                      Pedestrian barriers, marked walkways, mirrors, and one-way systems segregate vehicles and pedestrians, preventing collision incidents.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                  <FileText className="w-8 h-8 text-primary" />
                  Compliance & Regulatory Framework
                </h2>
                <div className="prose prose-lg max-w-none space-y-4">
                  <p>
                    Loading bay safety is governed by Health & Safety at Work Act, PUWER (Provision and Use of Work Equipment Regulations), and workplace transport guidance HSG136. Employers must:
                  </p>
                  <ul className="space-y-2">
                    <li>Conduct risk assessments for loading operations</li>
                    <li>Provide adequate vehicle-pedestrian segregation</li>
                    <li>Maintain loading equipment including dock levelers and restraints</li>
                    <li>Implement traffic management systems and signage</li>
                    <li>Train operators on safe loading procedures</li>
                    <li>Document inspections and maintenance activities</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                  <AlertTriangle className="w-8 h-8 text-destructive" />
                  Risks of Inadequate Safety Controls
                </h2>
                <div className="bg-destructive/10 border-l-4 border-destructive p-6 rounded-lg space-y-4">
                  <p className="font-semibold text-lg">
                    Inadequately controlled loading bays expose organizations to:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-1">→</span>
                      <span><strong>Vehicle roll-away:</strong> Trailers departing during loading cause dock leveler collapse, falls from height, and crushing injuries</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-1">→</span>
                      <span><strong>Pedestrian-vehicle collisions:</strong> Inadequate segregation causes serious injury or fatality in high-traffic industrial environments</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-1">→</span>
                      <span><strong>HSE enforcement:</strong> Prosecution, improvement notices, and unlimited fines for workplace transport safety failures</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-1">→</span>
                      <span><strong>Equipment entrapment:</strong> Roller shutter and dock leveler failures cause crushing injuries and fatalities</span>
                    </li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-6">Related Safety Services</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <Link to="/services/roller-shutter-maintenance" className="border rounded-lg p-4 hover:border-primary transition-colors">
                    <h3 className="font-semibold mb-2">Roller Shutter Maintenance</h3>
                    <p className="text-sm text-muted-foreground">Industrial door servicing</p>
                  </Link>
                  <Link to="/services/dock-leveller-maintenance" className="border rounded-lg p-4 hover:border-primary transition-colors">
                    <h3 className="font-semibold mb-2">Dock Leveller Maintenance</h3>
                    <p className="text-sm text-muted-foreground">LOLER compliance</p>
                  </Link>
                  <Link to="/services/anpr-systems" className="border rounded-lg p-4 hover:border-primary transition-colors">
                    <h3 className="font-semibold mb-2">ANPR Systems</h3>
                    <p className="text-sm text-muted-foreground">Vehicle access automation</p>
                  </Link>
                  <Link to="/services/health-safety" className="border rounded-lg p-4 hover:border-primary transition-colors">
                    <h3 className="font-semibold mb-2">Health & Safety</h3>
                    <p className="text-sm text-muted-foreground">Workplace compliance</p>
                  </Link>
                </div>
              </section>

              <section className="bg-primary/5 rounded-lg p-8">
                <h2 className="text-2xl font-bold mb-4">Request Loading Bay Safety Assessment</h2>
                <p className="text-muted-foreground mb-6">
                  Speak to our team about comprehensive loading bay safety systems and compliance.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button asChild size="lg">
                    <Link to="/request-proposal">
                      Request Proposal <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link to="/contact">Contact Support</Link>
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

export default LoadingBaySafetySystems;
