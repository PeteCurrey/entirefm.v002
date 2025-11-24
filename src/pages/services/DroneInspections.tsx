import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SchemaMarkup, FAQSchema } from "@/components/shared/SchemaMarkup";
import { FAQSection } from "@/components/shared/FAQSection";
import { SidebarCTA } from "@/components/shared/SidebarCTA";

const DroneInspections = () => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Drone Building Inspections",
    "provider": {
      "@type": "Organization",
      "name": "EntireFM"
    },
    "description": "Roof inspections, façade surveys, high-rise inaccessible areas using drone technology."
  };

  const faqs = [
    {
      question: "What can drone inspections detect?",
      answer: "Drones identify roof damage, membrane deterioration, gutter blockages, façade cracks, render defects, window seal failures, and structural issues on high-rise buildings without requiring scaffolding or rope access."
    },
    {
      question: "Are drone inspections legally compliant for building surveys?",
      answer: "Yes. Drone surveys provide photographic and thermal imaging evidence accepted by insurers, building control, and surveyors. CAA-licensed pilots ensure legal compliance with aviation regulations."
    },
    {
      question: "How much do drone inspections cost compared to traditional access?",
      answer: "Drone surveys typically cost 60-80% less than scaffolding or rope access for equivalent coverage. No access equipment hire, reduced time on site, and immediate reporting deliver significant savings."
    },
    {
      question: "What weather conditions prevent drone inspections?",
      answer: "Strong winds above 25mph, heavy rain, and poor visibility prevent safe drone operations. We reschedule inspections when conditions don't meet CAA safety requirements."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Drone Building Inspections | Roof & Façade Surveys | EntireFM</title>
        <meta name="description" content="Drone building inspection services for roofs, façades, and high-rise buildings. Safe, cost-effective surveys of inaccessible areas without scaffolding." />
        <link rel="canonical" href="https://entirefm.com/services/drone-inspections" />
      </Helmet>

      <SchemaMarkup schema={serviceSchema} />
      <FAQSchema faqs={faqs} />

      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-12 lg:py-20">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="lg:col-span-2">
              <section className="mb-16">
                <h1 className="text-4xl lg:text-5xl font-light mb-6 tracking-tight">
                  Drone Building Inspections
                </h1>
                <p className="text-xl text-muted-foreground font-light leading-relaxed mb-8">
                  Roof inspections, façade surveys, high-rise inaccessible areas.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/request-proposal">
                    <Button size="lg" className="bg-primary hover:bg-primary/90">
                      Request Proposal
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button size="lg" variant="outline">
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </section>

              <section className="mb-16">
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Drone Survey Capabilities
                </h2>
                <Card className="p-8 bg-card/50 backdrop-blur">
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Drone technology enables safe, cost-effective inspections of building areas previously requiring scaffolding, cherry pickers, or rope access. High-resolution photography and thermal imaging detect defects invisible from ground level.
                  </p>
                </Card>
              </section>

              <section className="mb-16">
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Applications
                </h2>
                <div className="space-y-4">
                  <Card className="p-6 bg-card/50 backdrop-blur">
                    <h3 className="font-medium mb-3">Roof Inspections</h3>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed">
                      Membrane condition, ponding water, drainage blockages, and structural damage on flat and pitched roofs.
                    </p>
                  </Card>

                  <Card className="p-6 bg-card/50 backdrop-blur">
                    <h3 className="font-medium mb-3">Façade Surveys</h3>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed">
                      Cladding defects, render cracks, window seal failures, and masonry deterioration on high-rise buildings.
                    </p>
                  </Card>

                  <Card className="p-6 bg-card/50 backdrop-blur">
                    <h3 className="font-medium mb-3">Thermal Imaging</h3>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed">
                      Heat loss detection, insulation defects, water ingress, and electrical hotspots through infrared analysis.
                    </p>
                  </Card>
                </div>
              </section>

              <FAQSection faqs={faqs} />

              <section className="mt-16">
                <Card className="p-8 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
                  <h2 className="text-2xl font-light mb-4">
                    Discuss Drone Survey Requirements
                  </h2>
                  <p className="text-muted-foreground font-light leading-relaxed mb-6">
                    Talk to our team about drone inspection services for your property.
                  </p>
                  <Link to="/request-proposal">
                    <Button size="lg" className="bg-primary hover:bg-primary/90">
                      Request Proposal
                    </Button>
                  </Link>
                </Card>
              </section>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <SidebarCTA />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DroneInspections;
