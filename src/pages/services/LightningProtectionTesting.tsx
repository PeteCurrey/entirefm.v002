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

const LightningProtectionTesting = () => {
  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Lightning Protection Testing" }
  ];

  const faqs = [
    {
      question: "How often should lightning protection systems be tested?",
      answer: "BS EN 62305 requires annual testing including earth resistance measurements, visual inspection of air terminals and down conductors, and bonding continuity checks to ensure the system can safely conduct lightning strikes to earth."
    },
    {
      question: "What buildings require lightning protection?",
      answer: "Buildings with high occupancy, historical significance, containing hazardous materials, or in exposed locations typically require protection. Risk assessment calculations determine necessity based on structure height, location, and consequences of lightning strike."
    },
    {
      question: "What is measured during earth resistance testing?",
      answer: "The resistance between the lightning protection system and earth, which must typically be below 10 ohms. High resistance indicates corroded connections, inadequate earth electrode depth, or poor soil conductivity requiring remediation."
    },
    {
      question: "Can lightning protection systems deteriorate over time?",
      answer: "Yes. Corrosion of conductors, loosened bonds, and degraded earth electrodes reduce effectiveness. Annual testing identifies deterioration before system failure, ensuring continued protection during lightning events."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Lightning Protection Testing | BS EN 62305 Compliance | Entire FM</title>
        <meta name="description" content="Expert lightning protection testing to BS EN 62305. Earth resistance testing, structural bonding checks, and visual inspection for safeguarding structures from lightning strikes." />
      </Helmet>

      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        name="Lightning Protection Testing"
        description="BS EN 62305 compliance for safeguarding structures from lightning strikes, including earth resistance testing, visual inspection, bonding checks, and structural risk considerations."
        provider="Entire FM"
        areaServed="United Kingdom"
      />
      <FAQSchema faqs={faqs} />

      <div className="min-h-screen bg-background">
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-charcoal/90 z-10" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1605296867424-35fc25c9212a')] bg-cover bg-center" />
          
          <div className="container mx-auto px-6 relative z-20 text-white">
            <Breadcrumb items={breadcrumbItems} className="mb-6" />
            <h1 className="text-5xl md:text-6xl font-light mb-6 max-w-4xl">
              Lightning Protection Testing
            </h1>
            <p className="text-xl md:text-2xl font-light max-w-3xl text-gray-200">
              BS EN 62305 compliance for safeguarding structures from lightning strikes.
            </p>
          </div>
        </section>

        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Why Lightning Protection Matters
                </h2>
                <div className="prose prose-lg max-w-none font-light leading-relaxed space-y-4">
                  <p>
                    Lightning strikes deliver up to 200,000 amps and 1 billion volts to structures. Without effective protection, strikes cause catastrophic fires, structural damage, and destruction of electrical systems. Lightning protection systems provide a controlled path for strike energy to reach earth safely, preventing damage to buildings and protecting occupants.
                  </p>
                  <p>
                    BS EN 62305 defines design, installation, and testing requirements. Systems comprise air terminals (lightning rods), down conductors, and earth termination networks. Annual testing verifies earth resistance remains below specified thresholds (typically 10 ohms), bonds are intact, and conductors are undamaged by corrosion or mechanical stress.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Testing Requirements
                </h2>
                <div className="space-y-4">
                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium mb-2">Earth Resistance Testing</h3>
                        <p className="text-muted-foreground font-light">
                          Annual measurement using specialized earth testers. Resistance must typically be below 10 ohms. High readings indicate inadequate earthing requiring additional electrodes or soil treatment.
                        </p>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium mb-2">Visual Inspection & Bonding Checks</h3>
                        <p className="text-muted-foreground font-light">
                          Inspecting air terminals, down conductors, and bonding connections for corrosion, mechanical damage, or loose fixings. Verifying all metallic services are bonded to the lightning protection system.
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              </section>

              <section className="bg-charcoal text-white p-8 rounded-lg">
                <h2 className="text-3xl font-light mb-4">
                  Protect Your Structure from Lightning Damage
                </h2>
                <p className="text-gray-300 mb-6 font-light leading-relaxed">
                  Get a fixed-price proposal for BS EN 62305 compliant testing, earth resistance surveys, and remedial works.
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

export default LightningProtectionTesting;