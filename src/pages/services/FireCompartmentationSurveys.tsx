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

const FireCompartmentationSurveys = () => {
  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Fire Compartmentation Surveys" }
  ];

  const faqs = [
    {
      question: "What is fire compartmentation?",
      answer: "Fire compartmentation divides buildings into fire-resistant sections using walls, floors, and fire-stopping materials. This prevents fire and smoke spread, containing incidents to single compartments and protecting escape routes. Breaches in compartmentation allow rapid fire spread, defeating passive fire protection strategies."
    },
    {
      question: "Why are compartmentation surveys necessary?",
      answer: "Building alterations, service installations, and deterioration create breaches in fire compartmentation. Surveys identify gaps around pipes, cables, and ducts where fire-stopping has failed or been omitted. The Fire Safety Act places increased responsibility on building owners to demonstrate effective compartmentation."
    },
    {
      question: "What do compartmentation surveys assess?",
      answer: "Surveys examine fire doors, cavity barriers, penetration seals, fire-stopping materials, structural gaps, and service risers. Surveyors use thermal imaging, smoke testing, and intrusive investigation to identify hidden breaches. Reports provide photographic evidence, risk ratings, and costed remediation schedules."
    },
    {
      question: "How often should compartmentation be surveyed?",
      answer: "Survey frequency depends on building risk, occupancy type, and alteration frequency. High-rise residential buildings typically require surveys every 3-5 years. Buildings undergoing refurbishment need pre and post-works surveys to verify fire-stopping integrity. Post-fire surveys identify compromised compartmentation requiring reinstatement."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Fire Compartmentation Surveys | Breach Detection & Risk Reports | Entire FM</title>
        <meta name="description" content="Specialist fire compartmentation surveys identifying breaches in fire separation. Thermal imaging, penetration sealing assessment, and actionable risk reports for Fire Safety Act compliance." />
      </Helmet>

      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        name="Fire Compartmentation Surveys"
        description="Identifying breaches in fire separation and delivering actionable risk reports using thermal imaging, smoke testing, and intrusive investigation techniques."
        provider="Entire FM"
        areaServed="United Kingdom"
      />
      <FAQSchema faqs={faqs} />

      <div className="min-h-screen bg-background">
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-charcoal/90 z-10" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1')] bg-cover bg-center" />
          
          <div className="container mx-auto px-6 relative z-20 text-white">
            <Breadcrumb items={breadcrumbItems} className="mb-6" />
            <h1 className="text-5xl md:text-6xl font-light mb-6 max-w-4xl">
              Fire Compartmentation Surveys
            </h1>
            <p className="text-xl md:text-2xl font-light max-w-3xl text-gray-200">
              Identifying breaches in fire separation and delivering actionable risk reports.
            </p>
          </div>
        </section>

        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  The Critical Role of Compartmentation
                </h2>
                <div className="prose prose-lg max-w-none font-light leading-relaxed space-y-4">
                  <p>
                    Fire compartmentation prevents fire and smoke spreading beyond the compartment of origin, protecting escape routes and limiting property damage. Breaches in compartmentation—gaps around pipes, unsealed cable trays, missing cavity barriers—allow rapid fire spread through hidden voids, defeating passive fire protection and endangering occupants.
                  </p>
                  <p>
                    The Fire Safety Act 2021 strengthens requirements for building owners to demonstrate effective compartmentation. Surveys identify defects created by alterations, service installations, and material deterioration. Without regular assessment, breaches accumulate undetected, creating catastrophic fire spread risk during incidents.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Survey Methodology & Tools
                </h2>
                <div className="space-y-4">
                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium mb-2">Penetration Sealing Assessment</h3>
                        <p className="text-muted-foreground font-light">
                          Visual inspection of service penetrations through fire-rated walls and floors. Assessment of fire-stopping materials, installation quality, and certification compliance. Identification of unsealed penetrations requiring immediate remediation.
                        </p>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium mb-2">Thermal Imaging & Smoke Testing</h3>
                        <p className="text-muted-foreground font-light">
                          Thermal imaging cameras identify hidden voids and air leakage paths indicating compartmentation breaches. Smoke pencil testing verifies seal integrity around doors and penetrations. Intrusive investigation exposes concealed defects behind finishes.
                        </p>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium mb-2">Regulatory Drivers (Fire Safety Act)</h3>
                        <p className="text-muted-foreground font-light">
                          The Fire Safety Act 2021 requires building owners to provide evidence of effective compartmentation. Failure to demonstrate compliance results in enforcement notices, prohibition orders, and criminal liability. Surveys provide the documentation necessary for regulatory defense.
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
                  <Link to="/services/fire-alarms" className="text-primary hover:text-primary/80 transition-colors flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" />
                    Fire Alarm Systems
                  </Link>
                  <Link to="/services/emergency-lighting" className="text-primary hover:text-primary/80 transition-colors flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" />
                    Emergency Lighting
                  </Link>
                  <Link to="/fm-insights/what-is-statutory-maintenance" className="text-primary hover:text-primary/80 transition-colors flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" />
                    Statutory Maintenance Guide
                  </Link>
                </div>
              </section>

              <section className="bg-charcoal text-white p-8 rounded-lg">
                <h2 className="text-3xl font-light mb-4">
                  Identify Compartmentation Breaches Before They Spread Fire
                </h2>
                <p className="text-gray-300 mb-6 font-light leading-relaxed">
                  Get a fixed-price proposal for comprehensive compartmentation surveys with photographic evidence and remediation schedules.
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

export default FireCompartmentationSurveys;
