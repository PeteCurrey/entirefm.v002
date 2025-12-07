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

const DataCentreCoolingCompliance = () => {
  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Data Centre Cooling Compliance" }
  ];

  const faqs = [
    {
      question: "Why is cooling critical for data centres?",
      answer: "Server equipment generates extreme heat densities requiring continuous cooling to maintain operating temperatures. Cooling failure causes thermal runaway: servers throttle performance, hard drives fail, and equipment shuts down preventing catastrophic component damage. Minutes of cooling loss can cause irreversible data loss and hardware destruction worth millions."
    },
    {
      question: "What is the difference between CRAC and CRAH units?",
      answer: "CRAC (Computer Room Air Conditioning) units contain integral refrigeration systems. CRAH (Computer Room Air Handler) units use chilled water from central plant. Both require routine maintenance including filter changes, refrigerant checks, fan bearing lubrication, and control sensor calibration to maintain stable temperatures."
    },
    {
      question: "How is cooling redundancy tested?",
      answer: "Redundancy testing involves shutting down individual cooling units while monitoring room temperature rise rates. N+1 configurations must maintain operating temperatures with one unit offline. Testing verifies automatic failover systems activate correctly and remaining units increase capacity to compensate for failed equipment."
    },
    {
      question: "What are the energy efficiency considerations?",
      answer: "Data centre cooling typically consumes 30-40% of total facility power. Temperature/humidity optimization, hot/cold aisle containment, and variable speed fan drives reduce energy consumption. PUE (Power Usage Effectiveness) monitoring quantifies efficiency improvements. Small optimizations deliver significant energy cost reductions in 24/7 operations."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Data Centre Cooling Compliance | CRAC/CRAH Maintenance | Entire FM</title>
        <meta name="description" content="Expert data centre cooling compliance ensuring uptime and thermal stability. CRAC/CRAH maintenance, redundancy testing, temperature/humidity controls, and energy efficiency optimization." />
      </Helmet>

      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        name="Data Centre Cooling Compliance"
        description="Ensuring uptime and thermal stability for mission-critical IT estates through CRAC/CRAH maintenance, redundancy testing, temperature/humidity control, and sensor calibration."
        provider="Entire FM"
        areaServed="United Kingdom"
      />
      <FAQSchema faqs={faqs} />

      <div className="min-h-screen bg-background pt-20">
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-charcoal/90 z-10" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31')] bg-cover bg-center" />
          
          <div className="container mx-auto px-6 relative z-20 text-white">
            <Breadcrumb items={breadcrumbItems} className="mb-6" />
            <h1 className="text-5xl md:text-6xl font-light mb-6 max-w-4xl">
              Data Centre Cooling Compliance
            </h1>
            <p className="text-xl md:text-2xl font-light max-w-3xl text-gray-200">
              Ensuring uptime and thermal stability for mission-critical IT estates.
            </p>
          </div>
        </section>

        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  The Unforgiving Nature of Thermal Management
                </h2>
                <div className="prose prose-lg max-w-none font-light leading-relaxed space-y-4">
                  <p>
                    Data centre equipment generates extreme heat densities in confined spaces. Server racks consuming 10-20kW per rack create thermal loads comparable to industrial furnaces. Without continuous precision cooling, temperatures exceed operating limits within minutes, triggering thermal shutdown protecting components from permanent damage. Cooling failure doesn't provide warning—it creates cascading failures destroying data and hardware.
                  </p>
                  <p>
                    CRAC and CRAH units maintain stable temperatures and humidity through continuous operation. Neglected cooling systems develop blocked filters reducing airflow, refrigerant leaks causing capacity loss, failed sensors providing incorrect temperature data, and bearing failures stopping fans. Redundancy testing verifies N+1 configurations maintain operations during single unit failures. Energy optimization reduces operating costs without compromising thermal stability.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Comprehensive Cooling Management
                </h2>
                <div className="space-y-4">
                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium mb-2">CRAH/CRAC Maintenance</h3>
                        <p className="text-muted-foreground font-light">
                          Quarterly maintenance includes filter replacement, refrigerant charge verification, condenser coil cleaning, and fan bearing lubrication. Control sensor calibration ensures accurate temperature/humidity readings. Humidifier maintenance prevents mineral buildup. Compressor oil analysis identifies bearing wear before catastrophic failure.
                        </p>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium mb-2">Redundancy Testing & Temperature Controls</h3>
                        <p className="text-muted-foreground font-light">
                          Annual redundancy testing verifies N+1 configurations maintain operating temperatures with individual units offline. Hot/cold aisle temperature monitoring identifies thermal hotspots. Automatic failover testing confirms remaining units increase capacity during failures. Documentation proves resilience for insurance and compliance audits.
                        </p>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium mb-2">Energy Efficiency Impact</h3>
                        <p className="text-muted-foreground font-light">
                          Cooling typically consumes 30-40% of data centre power. Temperature setpoint optimization, variable speed drives, and hot/cold aisle containment reduce energy consumption. PUE monitoring quantifies efficiency improvements. Small optimizations deliver significant cost reductions in 24/7 operations without compromising thermal stability or equipment reliability.
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              </section>

              <section className="bg-muted p-8 rounded-lg">
                <h3 className="text-2xl font-light mb-4">Related Services</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Link to="/services/ups-maintenance" className="text-primary hover:text-primary/80 transition-colors flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" />
                    UPS Maintenance
                  </Link>
                  <Link to="/services/generator-maintenance" className="text-primary hover:text-primary/80 transition-colors flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" />
                    Generator Maintenance
                  </Link>
                  <Link to="/services/hvac" className="text-primary hover:text-primary/80 transition-colors flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" />
                    HVAC Maintenance
                  </Link>
                  <Link to="/services/bms-integration-testing" className="text-primary hover:text-primary/80 transition-colors flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" />
                    BMS Integration Testing
                  </Link>
                </div>
              </section>

              <section className="bg-charcoal text-white p-8 rounded-lg">
                <h2 className="text-3xl font-light mb-4">
                  Protect Mission-Critical Operations from Thermal Failures
                </h2>
                <p className="text-gray-300 mb-6 font-light leading-relaxed">
                  Get a fixed-price proposal for data centre cooling compliance including redundancy testing and energy optimization.
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

export default DataCentreCoolingCompliance;
