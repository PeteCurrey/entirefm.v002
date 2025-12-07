import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SchemaMarkup, FAQSchema } from "@/components/shared/SchemaMarkup";
import { FAQSection } from "@/components/shared/FAQSection";
import { SidebarCTA } from "@/components/shared/SidebarCTA";

const MEServices = () => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Mechanical & Electrical Services",
    "provider": {
      "@type": "Organization",
      "name": "EntireFM"
    },
    "description": "Planned and reactive M&E services across commercial estates covering HVAC, electrical, and mechanical systems."
  };

  const faqs = [
    {
      question: "What is included in M&E services?",
      answer: "M&E covers mechanical systems (HVAC, boilers, chillers, pumps, ventilation) and electrical systems (power distribution, lighting, emergency systems, fire alarms). Essentially all engineered building systems requiring specialist maintenance."
    },
    {
      question: "What qualifications do M&E engineers need?",
      answer: "M&E engineers require NVQ Level 3 qualifications as minimum, plus trade-specific accreditations: 18th Edition for electrical, F-Gas for HVAC refrigerants, Gas Safe for gas systems, and manufacturer approvals for specialist equipment."
    },
    {
      question: "How often should M&E maintenance occur?",
      answer: "Critical systems require quarterly or monthly PPM visits. Statutory testing like EICRs occurs every 5 years, fire alarms weekly, and emergency lighting monthly. Frequency depends on system criticality, age, and manufacturer recommendations."
    },
    {
      question: "Can M&E services be delivered out of hours?",
      answer: "Yes. We schedule M&E works during low-occupancy periods to minimize disruption. Emergency response is available 24/7 for critical system failures affecting building operations or safety."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Mechanical & Electrical Services | M&E Maintenance | EntireFM</title>
        <meta name="description" content="Mechanical and electrical services for commercial buildings. M&E maintenance, PPM programmes, and compliance testing for HVAC, electrical, and building systems." />
        <link rel="canonical" href="https://entirefm.com/services/m-and-e" />
      </Helmet>

      <SchemaMarkup schema={serviceSchema} />
      <FAQSchema faqs={faqs} />

      <div className="min-h-screen bg-background pt-20">
        <div className="container mx-auto px-4 py-12 lg:py-20">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="lg:col-span-2">
              {/* Hero Section */}
              <section className="mb-16">
                <h1 className="text-4xl lg:text-5xl font-light mb-6 tracking-tight">
                  Mechanical & Electrical (M&E) Services
                </h1>
                <p className="text-xl text-muted-foreground font-light leading-relaxed mb-8">
                  Planned & reactive M&E services across commercial estates.
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

              {/* Service Coverage */}
              <section className="mb-16">
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  M&E Service Coverage
                </h2>
                <Card className="p-8 bg-card/50 backdrop-blur">
                  <p className="text-muted-foreground font-light leading-relaxed mb-6">
                    Mechanical and electrical services form the operational backbone of commercial buildings. These engineered systems provide heating, cooling, power, lighting, ventilation, and safety infrastructure. Without functional M&E, buildings cannot operate.
                  </p>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Our M&E delivery combines planned preventative maintenance with rapid reactive response. All works are delivered by qualified engineers and documented to manufacturer and regulatory standards.
                  </p>
                </Card>
              </section>

              {/* Mechanical Services */}
              <section className="mb-16">
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Mechanical Services
                </h2>
                <div className="space-y-4">
                  <Card className="p-6 bg-card/50 backdrop-blur">
                    <h3 className="font-medium mb-3">
                      <Link to="/services/hvac" className="hover:text-primary transition-colors">
                        HVAC Systems
                      </Link>
                    </h3>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed mb-3">
                      Air conditioning, ventilation, and heating maintenance including chillers, AHUs, FCUs, VRV/VRF systems, and ducted distribution. F-Gas compliance and energy efficiency optimization.
                    </p>
                    <ul className="text-sm text-muted-foreground font-light space-y-1">
                      <li>• Chiller servicing and refrigerant management</li>
                      <li>• Air handling unit filter replacement and belt checks</li>
                      <li>• Fan coil unit cleaning and sensor calibration</li>
                      <li>• BMS integration and control system maintenance</li>
                    </ul>
                  </Card>

                  <Card className="p-6 bg-card/50 backdrop-blur">
                    <h3 className="font-medium mb-3">Boiler & Heating Systems</h3>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed mb-3">
                      Commercial boiler servicing, radiator systems, underfloor heating, and hot water generation. Gas safety compliance and combustion efficiency testing.
                    </p>
                    <ul className="text-sm text-muted-foreground font-light space-y-1">
                      <li>• Annual boiler servicing and flue gas analysis</li>
                      <li>• Heating system balancing and radiator repairs</li>
                      <li>• Pump replacement and circulation monitoring</li>
                      <li>• Thermostatic control calibration</li>
                    </ul>
                  </Card>

                  <Card className="p-6 bg-card/50 backdrop-blur">
                    <h3 className="font-medium mb-3">Pumps & Motors</h3>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed mb-3">
                      Circulation pumps, booster sets, sump pumps, and motor-driven equipment maintenance. Vibration analysis and bearing replacement.
                    </p>
                    <ul className="text-sm text-muted-foreground font-light space-y-1">
                      <li>• Pump performance testing and impeller inspection</li>
                      <li>• Motor bearing lubrication and temperature monitoring</li>
                      <li>• Variable speed drive servicing</li>
                      <li>• Mechanical seal replacement</li>
                    </ul>
                  </Card>

                  <Card className="p-6 bg-card/50 backdrop-blur">
                    <h3 className="font-medium mb-3">
                      <Link to="/services/plumbing" className="hover:text-primary transition-colors">
                        Plumbing Systems
                      </Link>
                    </h3>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed mb-3">
                      Commercial plumbing infrastructure including pipework, drainage, sanitary ware, and pressure vessels. Leak detection and water conservation.
                    </p>
                    <ul className="text-sm text-muted-foreground font-light space-y-1">
                      <li>• Pipework inspection and leak repairs</li>
                      <li>• Drainage unblocking and CCTV surveys</li>
                      <li>• Sanitary ware replacement and tap servicing</li>
                      <li>• Hot water cylinder maintenance</li>
                    </ul>
                  </Card>
                </div>
              </section>

              {/* Electrical Services */}
              <section className="mb-16">
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Electrical Services
                </h2>
                <div className="space-y-4">
                  <Card className="p-6 bg-card/50 backdrop-blur">
                    <h3 className="font-medium mb-3">
                      <Link to="/services/electrical" className="hover:text-primary transition-colors">
                        Power Distribution & Testing
                      </Link>
                    </h3>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed mb-3">
                      Electrical installation condition reports (EICRs), fixed wire testing, distribution board maintenance, and power system monitoring.
                    </p>
                    <ul className="text-sm text-muted-foreground font-light space-y-1">
                      <li>• Five-yearly EICR compliance testing</li>
                      <li>• Distribution board thermal imaging</li>
                      <li>• Circuit breaker testing and replacement</li>
                      <li>• Earth loop impedance verification</li>
                    </ul>
                  </Card>

                  <Card className="p-6 bg-card/50 backdrop-blur">
                    <h3 className="font-medium mb-3">
                      <Link to="/services/emergency-lighting" className="hover:text-primary transition-colors">
                        Emergency Lighting Systems
                      </Link>
                    </h3>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed mb-3">
                      Monthly function testing, annual duration tests, and emergency lighting battery replacement to BS 5266-1 standards.
                    </p>
                    <ul className="text-sm text-muted-foreground font-light space-y-1">
                      <li>• Monthly flick test and log book updates</li>
                      <li>• Three-hour annual duration test</li>
                      <li>• Battery replacement and lamp upgrades</li>
                      <li>• New fitting installation where required</li>
                    </ul>
                  </Card>

                  <Card className="p-6 bg-card/50 backdrop-blur">
                    <h3 className="font-medium mb-3">
                      <Link to="/services/fire-alarms" className="hover:text-primary transition-colors">
                        Fire Alarm Systems
                      </Link>
                    </h3>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed mb-3">
                      Weekly testing, quarterly servicing, and annual commissioning of fire detection and alarm systems to BS 5839-1.
                    </p>
                    <ul className="text-sm text-muted-foreground font-light space-y-1">
                      <li>• Weekly call point activation test</li>
                      <li>• Quarterly system service and detector cleaning</li>
                      <li>• Panel battery replacement</li>
                      <li>• Zone testing and sounders verification</li>
                    </ul>
                  </Card>

                  <Card className="p-6 bg-card/50 backdrop-blur">
                    <h3 className="font-medium mb-3">Lighting Systems</h3>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed mb-3">
                      General lighting maintenance, LED upgrades, lighting control systems, and energy optimization.
                    </p>
                    <ul className="text-sm text-muted-foreground font-light space-y-1">
                      <li>• Lamp and ballast replacement</li>
                      <li>• LED retrofit and energy saving upgrades</li>
                      <li>• PIR sensor calibration</li>
                      <li>• High-bay lighting maintenance</li>
                    </ul>
                  </Card>

                  <Card className="p-6 bg-card/50 backdrop-blur">
                    <h3 className="font-medium mb-3">
                      <Link to="/services/generator-maintenance" className="hover:text-primary transition-colors">
                        Standby Power Systems
                      </Link>
                    </h3>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed mb-3">
                      Generator servicing, UPS maintenance, and backup power testing. Load bank testing and automatic transfer switch inspection.
                    </p>
                    <ul className="text-sm text-muted-foreground font-light space-y-1">
                      <li>• Monthly generator load testing</li>
                      <li>• UPS battery testing and replacement</li>
                      <li>• ATS mechanical and electrical inspection</li>
                      <li>• Fuel quality testing and polishing</li>
                    </ul>
                  </Card>
                </div>
              </section>

              {/* Compliance & Testing */}
              <section className="mb-16">
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  M&E Compliance Requirements
                </h2>
                <Card className="p-8 bg-card/50 backdrop-blur">
                  <p className="text-muted-foreground font-light leading-relaxed mb-6">
                    M&E systems are subject to extensive statutory testing requirements. Building owners must maintain current compliance certificates for insurance, safety, and legal purposes.
                  </p>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium mb-2">Electrical Testing Requirements</h3>
                      <p className="text-sm text-muted-foreground font-light leading-relaxed">
                        Commercial electrical installations require five-yearly EICRs under BS 7671 (18th Edition). Emergency lighting needs monthly testing and annual duration tests. Fire alarms require weekly testing and quarterly servicing.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">Mechanical Compliance</h3>
                      <p className="text-sm text-muted-foreground font-light leading-relaxed">
                        F-Gas regulations require annual leak detection for refrigeration systems. Gas boilers need annual safety inspections. Lift and pressure systems require six-monthly thorough examinations under LOLER and PSSR.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">Documentation Standards</h3>
                      <p className="text-sm text-muted-foreground font-light leading-relaxed">
                        All M&E testing generates certificates, test reports, and log book entries. These must be retained for audit purposes and provided to insurers, building control, and fire authorities on request.
                      </p>
                    </div>
                  </div>
                </Card>
              </section>

              {/* How EntireFM Delivers */}
              <section className="mb-16">
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  How EntireFM Delivers M&E Services
                </h2>
                <Card className="p-8 bg-card/50 backdrop-blur">
                  <ul className="space-y-3 text-muted-foreground font-light">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Multi-skilled M&E engineers with trade-specific qualifications</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Integrated PPM schedules covering mechanical and electrical systems</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>24/7 reactive response for M&E emergencies</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Digital compliance tracking and certificate management</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Condition monitoring and predictive maintenance</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Energy optimization and cost reduction initiatives</span>
                    </li>
                  </ul>
                </Card>
              </section>

              {/* FAQ Section */}
              <FAQSection faqs={faqs} />

              {/* Final CTA */}
              <section className="mt-16">
                <Card className="p-8 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
                  <h2 className="text-2xl font-light mb-4">
                    Discuss M&E Requirements
                  </h2>
                  <p className="text-muted-foreground font-light leading-relaxed mb-6">
                    Talk to our team about mechanical and electrical services for your estate.
                  </p>
                  <Link to="/request-proposal">
                    <Button size="lg" className="bg-primary hover:bg-primary/90">
                      Request Proposal
                    </Button>
                  </Link>
                </Card>
              </section>
            </div>

            {/* Sidebar */}
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

export default MEServices;
