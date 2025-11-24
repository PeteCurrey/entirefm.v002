import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SchemaMarkup, FAQSchema } from "@/components/shared/SchemaMarkup";
import { FAQSection } from "@/components/shared/FAQSection";
import { SidebarCTA } from "@/components/shared/SidebarCTA";

const CommercialPlumbing = () => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Commercial Plumbing Services",
    "provider": {
      "@type": "Organization",
      "name": "EntireFM"
    },
    "description": "Pipework, pumps, hot water systems, leaks, cylinder servicing for commercial buildings."
  };

  const faqs = [
    {
      question: "What plumbing services do you provide for commercial buildings?",
      answer: "We cover all commercial plumbing including pipework installation and repairs, drainage, sanitary ware, pumps, water storage tanks, hot water cylinders, pressure vessels, and water treatment systems. Includes reactive repairs and planned maintenance."
    },
    {
      question: "What water hygiene compliance applies to commercial plumbing?",
      answer: "Commercial buildings require legionella risk assessments under L8 (HSE). Hot and cold water systems need temperature monitoring, regular flushing of infrequently used outlets, and TMV testing. Storage tanks require annual cleaning and inspection."
    },
    {
      question: "How quickly can you respond to plumbing emergencies?",
      answer: "Our 24/7 helpdesk provides emergency response for burst pipes, leaks, drainage blockages, and hot water failures. Engineers are typically on-site within 2-4 hours for critical issues affecting building operations."
    },
    {
      question: "Do plumbing installations require building regulations approval?",
      answer: "Major plumbing works including new installations, system replacements, and modifications to drainage require building control notification. We handle all necessary documentation and inspections."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Commercial Plumbing Services | Pipework & Water Systems | EntireFM</title>
        <meta name="description" content="Commercial plumbing services for offices, industrial, and commercial buildings. Pipework, pumps, hot water systems, drainage, and water hygiene compliance." />
        <link rel="canonical" href="https://entirefm.com/services/plumbing" />
      </Helmet>

      <SchemaMarkup schema={serviceSchema} />
      <FAQSchema faqs={faqs} />

      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-12 lg:py-20">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="lg:col-span-2">
              <section className="mb-16">
                <h1 className="text-4xl lg:text-5xl font-light mb-6 tracking-tight">
                  Commercial Plumbing Services
                </h1>
                <p className="text-xl text-muted-foreground font-light leading-relaxed mb-8">
                  Pipework, pumps, hot water systems, leaks, cylinder servicing.
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
                  Service Coverage
                </h2>
                <Card className="p-8 bg-card/50 backdrop-blur">
                  <p className="text-muted-foreground font-light leading-relaxed mb-6">
                    Commercial plumbing infrastructure delivers potable water, removes waste, and provides hot water services to occupied buildings. Failed plumbing systems cause operational disruption, health and safety risks, and potential building damage from water ingress.
                  </p>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Modern commercial plumbing includes water hygiene management, pressure system compliance, and energy-efficient hot water delivery. Our engineers hold Water Regulations qualifications and deliver all works to Building Regulations standards.
                  </p>
                </Card>
              </section>

              <section className="mb-16">
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Plumbing Systems & Services
                </h2>
                <div className="space-y-4">
                  <Card className="p-6 bg-card/50 backdrop-blur">
                    <h3 className="font-medium mb-3">Cold Water Systems</h3>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed mb-3">
                      Mains supply connections, storage tanks, booster pumps, and distribution pipework. Includes backflow prevention, PRV installation, and pressure monitoring.
                    </p>
                    <ul className="text-sm text-muted-foreground font-light space-y-1">
                      <li>• Cold water storage tank cleaning and inspection</li>
                      <li>• Booster set servicing and pressure checks</li>
                      <li>• Pipework leak detection and repairs</li>
                      <li>• Water meter installation and monitoring</li>
                    </ul>
                  </Card>

                  <Card className="p-6 bg-card/50 backdrop-blur">
                    <h3 className="font-medium mb-3">Hot Water Systems</h3>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed mb-3">
                      Cylinder servicing, calorifier maintenance, TMV installation, and distribution temperature monitoring for legionella control.
                    </p>
                    <ul className="text-sm text-muted-foreground font-light space-y-1">
                      <li>• Hot water cylinder servicing and anode replacement</li>
                      <li>• Calorifier descaling and coil inspection</li>
                      <li>• TMV2/TMV3 thermostatic valve testing</li>
                      <li>• Temperature monitoring and thermal disinfection</li>
                    </ul>
                  </Card>

                  <Card className="p-6 bg-card/50 backdrop-blur">
                    <h3 className="font-medium mb-3">
                      <Link to="/services/water-hygiene" className="hover:text-primary transition-colors">
                        Water Hygiene & Legionella Control
                      </Link>
                    </h3>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed mb-3">
                      Risk assessments, temperature monitoring, outlet flushing, and water sampling to prevent legionella bacteria growth.
                    </p>
                    <ul className="text-sm text-muted-foreground font-light space-y-1">
                      <li>• L8-compliant legionella risk assessments</li>
                      <li>• Monthly temperature monitoring</li>
                      <li>• Quarterly outlet flushing programmes</li>
                      <li>• Water sampling and laboratory analysis</li>
                    </ul>
                  </Card>

                  <Card className="p-6 bg-card/50 backdrop-blur">
                    <h3 className="font-medium mb-3">Drainage Systems</h3>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed mb-3">
                      Soil and waste pipe maintenance, drainage unblocking, gulley cleaning, and CCTV drainage surveys for blockage investigation.
                    </p>
                    <ul className="text-sm text-muted-foreground font-light space-y-1">
                      <li>• High-pressure jetting and drain clearance</li>
                      <li>• CCTV drainage surveys and reports</li>
                      <li>• Grease trap cleaning and maintenance</li>
                      <li>• Gully and interceptor servicing</li>
                    </ul>
                  </Card>

                  <Card className="p-6 bg-card/50 backdrop-blur">
                    <h3 className="font-medium mb-3">Sanitary Ware & Fittings</h3>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed mb-3">
                      WC repairs, tap replacement, shower maintenance, and accessible washroom equipment servicing.
                    </p>
                    <ul className="text-sm text-muted-foreground font-light space-y-1">
                      <li>• Tap washer replacement and cartridge servicing</li>
                      <li>• WC cistern repairs and flush valve replacement</li>
                      <li>• Shower valve servicing and head descaling</li>
                      <li>• Sensor tap and flush calibration</li>
                    </ul>
                  </Card>

                  <Card className="p-6 bg-card/50 backdrop-blur">
                    <h3 className="font-medium mb-3">Pumps & Pressure Systems</h3>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed mb-3">
                      Booster pumps, sump pumps, pressure vessels, and pump room equipment requiring PSSR compliance.
                    </p>
                    <ul className="text-sm text-muted-foreground font-light space-y-1">
                      <li>• <Link to="/services/pump-room-maintenance" className="hover:text-primary">Pump room maintenance</Link> and inspection</li>
                      <li>• Pressure vessel testing and certification</li>
                      <li>• Sump pump servicing and alarm testing</li>
                      <li>• PRV calibration and pressure monitoring</li>
                    </ul>
                  </Card>
                </div>
              </section>

              <section className="mb-16">
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Compliance & Regulations
                </h2>
                <Card className="p-8 bg-card/50 backdrop-blur">
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium mb-2">Water Supply (Water Fittings) Regulations 1999</h3>
                      <p className="text-sm text-muted-foreground font-light leading-relaxed">
                        All plumbing installations must prevent contamination of drinking water. Backflow prevention devices, air gaps, and approved fittings are mandatory. Water undertakers can prosecute for non-compliant installations.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">Health & Safety (Legionella) ACOP L8</h3>
                      <p className="text-sm text-muted-foreground font-light leading-relaxed">
                        Building owners must conduct legionella risk assessments and implement control measures. Hot water must be stored at 60°C and distributed above 50°C. Cold water must be below 20°C to prevent bacterial growth.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">Building Regulations Part G</h3>
                      <p className="text-sm text-muted-foreground font-light leading-relaxed">
                        Sets standards for sanitation, hot water safety, and water efficiency. TMV2/TMV3 valves required in commercial washrooms to prevent scalding. Mandatory notification for major plumbing works.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">Pressure Systems Safety Regulations (PSSR)</h3>
                      <p className="text-sm text-muted-foreground font-light leading-relaxed">
                        Pressure vessels and steam systems require written schemes of examination and periodic inspection by competent persons. Non-compliance creates explosion risks and HSE prosecution.
                      </p>
                    </div>
                  </div>
                </Card>
              </section>

              <section className="mb-16">
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Common Plumbing Issues
                </h2>
                <Card className="p-8 bg-card/50 backdrop-blur">
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <div>
                        <h3 className="font-medium mb-1">Water Leaks & Burst Pipes</h3>
                        <p className="text-sm text-muted-foreground font-light leading-relaxed">
                          Failed pipework causes water damage, operational disruption, and increased utility costs. Thermal expansion, corrosion, and mechanical stress cause pipe failures requiring emergency isolation and repair.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <div>
                        <h3 className="font-medium mb-1">Drainage Blockages</h3>
                        <p className="text-sm text-muted-foreground font-light leading-relaxed">
                          Blocked drains cause flooding, foul odours, and health hazards. Fat, oil, grease (FOG) accumulation, foreign objects, and root ingress require professional jetting and clearance.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <div>
                        <h3 className="font-medium mb-1">Hot Water Failures</h3>
                        <p className="text-sm text-muted-foreground font-light leading-relaxed">
                          Cylinder failures, pump breakdowns, or TMV faults prevent hot water delivery. Critical for catering, healthcare, and residential environments requiring immediate engineer response.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <div>
                        <h3 className="font-medium mb-1">Legionella Risk</h3>
                        <p className="text-sm text-muted-foreground font-light leading-relaxed">
                          Poorly maintained water systems allow legionella bacteria growth. Infections cause serious illness and death, with building owners facing prosecution for non-compliance with L8 guidance.
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </section>

              <section className="mb-16">
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  How EntireFM Delivers
                </h2>
                <Card className="p-8 bg-card/50 backdrop-blur">
                  <ul className="space-y-3 text-muted-foreground font-light">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Water Regulations approved plumbers and gas engineers</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>24/7 emergency response for leaks and blockages</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Legionella control programmes and water sampling</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Planned maintenance for pumps, cylinders, and TMVs</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>CCTV drainage surveys and high-pressure jetting</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Building Regulations compliance and documentation</span>
                    </li>
                  </ul>
                </Card>
              </section>

              <FAQSection faqs={faqs} />

              <section className="mt-16">
                <Card className="p-8 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
                  <h2 className="text-2xl font-light mb-4">
                    Discuss Plumbing Requirements
                  </h2>
                  <p className="text-muted-foreground font-light leading-relaxed mb-6">
                    Talk to our team about commercial plumbing services for your estate.
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

export default CommercialPlumbing;
