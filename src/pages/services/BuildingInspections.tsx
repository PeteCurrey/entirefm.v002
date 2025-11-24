import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SchemaMarkup, FAQSchema } from "@/components/shared/SchemaMarkup";
import { FAQSection } from "@/components/shared/FAQSection";
import { SidebarCTA } from "@/components/shared/SidebarCTA";

const BuildingInspections = () => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Building Testing & Inspection",
    "provider": {
      "@type": "Organization",
      "name": "EntireFM"
    },
    "description": "Fire, electrical, water hygiene, gas, HVAC, structural checks, surveys."
  };

  const faqs = [
    {
      question: "What building inspections are legally required?",
      answer: "Commercial buildings require electrical EICRs every 5 years, annual gas safety checks, fire alarm testing weekly, emergency lighting monthly, legionella risk assessments every 2 years, and lift examinations every 6 months under various regulations."
    },
    {
      question: "Who can conduct statutory building inspections?",
      answer: "Only qualified and accredited engineers can perform statutory testing. Electrical testing requires NICEIC/NAPIT approval, gas work needs Gas Safe registration, and lift testing requires LOLER competent persons."
    },
    {
      question: "How long do building inspection certificates last?",
      answer: "Validity varies by system: EICRs last 5 years, gas certificates 12 months, fire alarm certificates depend on test type (weekly to annual), emergency lighting certificates follow monthly/annual testing, and legionella assessments are valid for 2 years."
    },
    {
      question: "What happens if inspections find non-compliance?",
      answer: "Inspections may identify dangerous conditions requiring immediate remediation, observations needing attention within timeframes, or advisory recommendations for improvements. Non-compliance creates legal liability and insurance issues."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Building Testing & Inspection Services | Compliance Testing | EntireFM</title>
        <meta name="description" content="Comprehensive building testing and inspection services. Fire, electrical, water, gas, HVAC, and structural compliance testing for commercial properties." />
        <link rel="canonical" href="https://entirefm.com/services/building-inspections" />
      </Helmet>

      <SchemaMarkup schema={serviceSchema} />
      <FAQSchema faqs={faqs} />

      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-12 lg:py-20">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="lg:col-span-2">
              <section className="mb-16">
                <h1 className="text-4xl lg:text-5xl font-light mb-6 tracking-tight">
                  Building Testing & Inspection
                </h1>
                <p className="text-xl text-muted-foreground font-light leading-relaxed mb-8">
                  Fire, electrical, water hygiene, gas, HVAC, structural checks, surveys.
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
                  Statutory Inspection Overview
                </h2>
                <Card className="p-8 bg-card/50 backdrop-blur">
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Building owners must conduct regular statutory inspections to verify system safety, identify defects, and maintain compliance certificates. These inspections are legally mandated under various regulations, with building owners facing prosecution for non-compliance.
                  </p>
                </Card>
              </section>

              <section className="mb-16">
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Core Inspection Services
                </h2>
                <div className="space-y-4">
                  <Card className="p-6 bg-card/50 backdrop-blur">
                    <h3 className="font-medium mb-3"><Link to="/services/electrical" className="hover:text-primary">Electrical Testing (EICR)</Link></h3>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed">
                      Fixed wire testing every 5 years to BS 7671. Distribution boards, circuits, earthing, and safety devices tested with formal certification.
                    </p>
                  </Card>

                  <Card className="p-6 bg-card/50 backdrop-blur">
                    <h3 className="font-medium mb-3"><Link to="/services/fire-safety" className="hover:text-primary">Fire Safety Inspections</Link></h3>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed">
                      Fire alarm testing, emergency lighting checks, fire door inspections, and compartmentation surveys to fire safety legislation.
                    </p>
                  </Card>

                  <Card className="p-6 bg-card/50 backdrop-blur">
                    <h3 className="font-medium mb-3"><Link to="/services/water-hygiene" className="hover:text-primary">Water Hygiene Assessment</Link></h3>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed">
                      Legionella risk assessments, temperature monitoring, water sampling, and TMV testing under L8 guidance.
                    </p>
                  </Card>

                  <Card className="p-6 bg-card/50 backdrop-blur">
                    <h3 className="font-medium mb-3"><Link to="/services/gas-safety" className="hover:text-primary">Gas Safety Inspections</Link></h3>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed">
                      Annual landlord gas certificates, commercial boiler inspections, and pipework testing by Gas Safe engineers.
                    </p>
                  </Card>
                </div>
              </section>

              <FAQSection faqs={faqs} />

              <section className="mt-16">
                <Card className="p-8 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
                  <h2 className="text-2xl font-light mb-4">
                    Discuss Inspection Requirements
                  </h2>
                  <p className="text-muted-foreground font-light leading-relaxed mb-6">
                    Talk to our team about building testing and compliance inspections.
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

export default BuildingInspections;
