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

const LoadBankTesting = () => {
  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Load Bank Testing" }
  ];

  const faqs = [
    {
      question: "What is load bank testing?",
      answer: "Load bank testing applies artificial electrical load to generators and UPS systems, simulating real-world demand conditions. Resistive load banks apply pure resistive load (kW). Reactive load banks simulate inductive loads like motors (kVAR). Testing verifies equipment delivers rated output without overheating, voltage drops, or fuel system failures."
    },
    {
      question: "Why is load bank testing necessary for generators?",
      answer: "Weekly no-load test runs cannot identify capacity degradation, voltage regulation problems, cooling system inadequacies, or fuel delivery defects that only appear under full load. Load bank testing stresses generators to rated capacity, revealing hidden faults before emergency use. Insurance policies often mandate annual load testing for critical installations."
    },
    {
      question: "How often should load bank testing be performed?",
      answer: "Annual testing is recommended for mission-critical generators. Data centres, hospitals, and facilities with regulatory requirements should test bi-annually. Generators that rarely run under load accumulate carbon deposits requiring periodic full-load exercise to burn off contamination and maintain combustion efficiency."
    },
    {
      question: "What defects does load bank testing identify?",
      answer: "Testing reveals voltage regulation failures, alternator winding faults, governor speed control problems, cooling system inadequacies, fuel starvation under load, exhaust system restrictions, and thermal overload conditions. Thermal imaging during tests identifies bearing overheating and hotspot development indicating imminent failures."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Load Bank Testing | Generator & UPS Performance Verification | Entire FM</title>
        <meta name="description" content="Specialist load bank testing for generators and UPS systems. Resistive/reactive load testing, thermal profiling, full reporting, and integration with generator maintenance programs." />
      </Helmet>

      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        name="Load Bank Testing"
        description="Simulated load testing for generators and UPS systems to identify performance failures through resistive/reactive load application, thermal profiling, and comprehensive reporting."
        provider="Entire FM"
        areaServed="United Kingdom"
      />
      <FAQSchema faqs={faqs} />

      <div className="min-h-screen bg-background pt-20">
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-charcoal/90 z-10" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581092160562-40aa08e78837')] bg-cover bg-center" />
          
          <div className="container mx-auto px-6 relative z-20 text-white">
            <Breadcrumb items={breadcrumbItems} className="mb-6" />
            <h1 className="text-5xl md:text-6xl font-light mb-6 max-w-4xl">
              Load Bank Testing
            </h1>
            <p className="text-xl md:text-2xl font-light max-w-3xl text-gray-200">
              Simulated load testing for generators and UPS systems to identify performance failures.
            </p>
          </div>
        </section>

        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Beyond No-Load Testing
                </h2>
                <div className="prose prose-lg max-w-none font-light leading-relaxed space-y-4">
                  <p>
                    Weekly automated generator test runs operate at minimal load, verifying basic engine operation but not capacity delivery under emergency conditions. Generators passing no-load tests routinely fail during power cuts due to voltage regulation defects, fuel starvation under load, cooling inadequacies, and alternator winding faults that only manifest when delivering rated output to simulated building loads.
                  </p>
                  <p>
                    Load bank testing applies artificial electrical load using resistive and reactive load banks, forcing generators to operate at 50-100% rated capacity. Testing reveals hidden defects: voltage drops indicating alternator problems, overheating showing cooling system inadequacy, black smoke exposing fuel system contamination, and speed fluctuation demonstrating governor failures. Annual load testing is essential for mission-critical installations where backup power failure has catastrophic consequences.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Testing Methodology
                </h2>
                <div className="space-y-4">
                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium mb-2">Resistive/Reactive Load Tests</h3>
                        <p className="text-muted-foreground font-light">
                          Resistive load banks apply pure resistive load (kW) simulating heating and lighting loads. Reactive load banks simulate inductive loads (kVAR) from motors and transformers. Combined testing verifies generators deliver rated kVA with correct power factor under real-world mixed loads.
                        </p>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium mb-2">Thermal Profiling & Full Reporting</h3>
                        <p className="text-muted-foreground font-light">
                          Thermal imaging cameras monitor alternator windings, bearing temperatures, exhaust manifolds, and cooling systems during load testing. Temperature profiling identifies overheating components indicating imminent failures. Comprehensive reports document voltage regulation, frequency stability, exhaust emissions, and thermal performance across load steps.
                        </p>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium mb-2">Integration with Generator Maintenance</h3>
                        <p className="text-muted-foreground font-light">
                          Load bank testing forms part of comprehensive generator maintenance programs. Results inform servicing schedules, identify components requiring replacement, and verify repair effectiveness. Regular load testing prevents carbon buildup from continuous light-load running, maintaining combustion efficiency and preventing wet stacking.
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              </section>

              <section className="bg-muted p-8 rounded-lg">
                <h3 className="text-2xl font-light mb-4">Related Services</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Link to="/services/generator-maintenance" className="text-primary hover:text-primary/80 transition-colors flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" />
                    Generator Maintenance
                  </Link>
                  <Link to="/services/ups-maintenance" className="text-primary hover:text-primary/80 transition-colors flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" />
                    UPS Maintenance
                  </Link>
                  <Link to="/services/electrical" className="text-primary hover:text-primary/80 transition-colors flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" />
                    Electrical Services
                  </Link>
                  <Link to="/services/data-centre-cooling-compliance" className="text-primary hover:text-primary/80 transition-colors flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" />
                    Data Centre Cooling
                  </Link>
                </div>
              </section>

              <section className="bg-charcoal text-white p-8 rounded-lg">
                <h2 className="text-3xl font-light mb-4">
                  Verify Emergency Power Under Real Conditions
                </h2>
                <p className="text-gray-300 mb-6 font-light leading-relaxed">
                  Get a fixed-price proposal for load bank testing with thermal profiling and comprehensive performance reporting.
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

export default LoadBankTesting;
