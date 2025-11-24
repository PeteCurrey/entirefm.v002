import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SchemaMarkup, FAQSchema } from "@/components/shared/SchemaMarkup";
import { FAQSection } from "@/components/shared/FAQSection";
import { SidebarCTA } from "@/components/shared/SidebarCTA";

const AccessControl = () => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Access Control Systems",
    "provider": {
      "@type": "Organization",
      "name": "EntireFM"
    },
    "description": "Fobs, door control, turnstiles, integration with CCTV, and electrical compliance crossover."
  };

  const faqs = [
    {
      question: "What types of access control systems do you maintain?",
      answer: "We maintain proximity card readers, biometric scanners, keypad entry systems, turnstiles, automatic doors, barrier gates, and integrated building management systems. All electrical wiring and power supplies are tested to BS 7671 standards."
    },
    {
      question: "How does access control integrate with fire safety?",
      answer: "Access control systems must release electromagnetic locks on fire alarm activation. We test fail-safe operation, ensure compliant hold-open devices, and verify that fire doors close automatically during emergencies."
    },
    {
      question: "What compliance applies to access control electrical installations?",
      answer: "All access control wiring must comply with BS 7671 electrical regulations. Power supplies require surge protection, and emergency door releases must function without power. Five-yearly EICRs cover access control circuits."
    },
    {
      question: "Can access control be integrated with CCTV and building management?",
      answer: "Yes. We integrate access control with CCTV for event verification, link to intruder alarms for automatic arming, and connect to BMS systems for energy-saving automation and visitor management."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Access Control Systems | Door Entry & Security Systems | EntireFM</title>
        <meta name="description" content="Access control system maintenance and installation. Fobs, door entry, turnstiles, CCTV integration, and electrical compliance for building security systems." />
        <link rel="canonical" href="https://entirefm.com/services/access-control" />
      </Helmet>

      <SchemaMarkup schema={serviceSchema} />
      <FAQSchema faqs={faqs} />

      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-12 lg:py-20">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="lg:col-span-2">
              <section className="mb-16">
                <h1 className="text-4xl lg:text-5xl font-light mb-6 tracking-tight">
                  Access Control Systems
                </h1>
                <p className="text-xl text-muted-foreground font-light leading-relaxed mb-8">
                  Fobs, door control, turnstiles, integration with CCTV, electrical compliance crossover.
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
                  System Coverage
                </h2>
                <Card className="p-8 bg-card/50 backdrop-blur">
                  <p className="text-muted-foreground font-light leading-relaxed mb-6">
                    Access control systems regulate building entry, manage visitor flow, and integrate with fire safety and security infrastructure. Modern systems combine electronic locks, card readers, biometric verification, and automated barrier controls.
                  </p>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    These systems require specialist maintenance covering electrical installation, mechanical door hardware, software management, and integration with building management systems. Failed access control creates security vulnerabilities and operational disruption.
                  </p>
                </Card>
              </section>

              <section className="mb-16">
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Access Control Components
                </h2>
                <div className="space-y-4">
                  <Card className="p-6 bg-card/50 backdrop-blur">
                    <h3 className="font-medium mb-3">Electronic Door Entry</h3>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed">
                      Proximity card readers, keypad systems, biometric scanners, and smartphone-based entry. Electromagnetic locks, electric strikes, and motorized latch mechanisms.
                    </p>
                  </Card>

                  <Card className="p-6 bg-card/50 backdrop-blur">
                    <h3 className="font-medium mb-3">Turnstiles & Barriers</h3>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed">
                      Full-height turnstiles, waist-high barriers, speed gates, and wheelchair-accessible lanes. Vehicle barrier gates and bollards for car park access control.
                    </p>
                  </Card>

                  <Card className="p-6 bg-card/50 backdrop-blur">
                    <h3 className="font-medium mb-3">Fire Safety Integration</h3>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed">
                      Fire alarm interfaces that release electromagnetic locks. Automatic door hold-open devices that release on alarm activation. Break-glass emergency exit releases.
                    </p>
                  </Card>

                  <Card className="p-6 bg-card/50 backdrop-blur">
                    <h3 className="font-medium mb-3">CCTV & Security Integration</h3>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed">
                      Camera systems linked to access events for identity verification. Intruder alarm integration for after-hours arming. Visitor management system coordination.
                    </p>
                  </Card>
                </div>
              </section>

              <section className="mb-16">
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Electrical Compliance Requirements
                </h2>
                <Card className="p-8 bg-card/50 backdrop-blur">
                  <p className="text-muted-foreground font-light leading-relaxed mb-6">
                    Access control systems are electrical installations subject to BS 7671 wiring regulations. All cabling, power supplies, and control equipment must comply with fixed wire testing requirements.
                  </p>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium mb-2">Power Supply Standards</h3>
                      <p className="text-sm text-muted-foreground font-light leading-relaxed">
                        Dedicated power supplies with battery backup ensure continued operation during power failures. Surge protection prevents damage from lightning or voltage spikes. Five-yearly <Link to="/services/electrical" className="text-primary hover:underline">EICR testing</Link> covers all access control circuits.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">Emergency Release Requirements</h3>
                      <p className="text-sm text-muted-foreground font-light leading-relaxed">
                        Fire exit doors must unlock automatically on fire alarm activation. Manual break-glass units provide emergency override. Systems must fail-safe to prevent entrapment during power loss.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">Cable Installation Standards</h3>
                      <p className="text-sm text-muted-foreground font-light leading-relaxed">
                        Data cabling must meet structured cabling standards. Fire-rated cables are required in escape routes. Proper earthing and bonding prevents electric shock risks.
                      </p>
                    </div>
                  </div>
                </Card>
              </section>

              <section className="mb-16">
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Maintenance Requirements
                </h2>
                <Card className="p-8 bg-card/50 backdrop-blur">
                  <ul className="space-y-3 text-muted-foreground font-light">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Quarterly system health checks and reader cleaning</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Annual lock mechanism servicing and strike adjustment</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Fire alarm integration testing and fail-safe verification</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Battery backup testing and replacement</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Software updates and security patch management</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Door closer adjustment and hardware lubrication</span>
                    </li>
                  </ul>
                </Card>
              </section>

              <section className="mb-16">
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  System Failures & Risks
                </h2>
                <Card className="p-8 bg-card/50 backdrop-blur">
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <div>
                        <h3 className="font-medium mb-1">Security Breaches</h3>
                        <p className="text-sm text-muted-foreground font-light leading-relaxed">
                          Failed locks allow unauthorized entry. Cloning vulnerabilities in older card systems enable security bypasses. Software glitches create access denial or uncontrolled entry.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <div>
                        <h3 className="font-medium mb-1">Fire Safety Non-Compliance</h3>
                        <p className="text-sm text-muted-foreground font-light leading-relaxed">
                          Magnetic locks that fail to release during fire alarms create entrapment risks. Non-functional break-glass units prevent emergency exit. Both create serious legal liability.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <div>
                        <h3 className="font-medium mb-1">Operational Disruption</h3>
                        <p className="text-sm text-muted-foreground font-light leading-relaxed">
                          System failures prevent staff access at shift changes. Broken turnstiles cause queuing and congestion. Visitor management failures impact customer experience and reception workflows.
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
                      <span>Engineers qualified in both electrical and access control systems</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Fire safety integration testing and compliance verification</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>24/7 emergency response for access control failures</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>System health monitoring and proactive fault detection</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>CCTV and BMS integration capability</span>
                    </li>
                  </ul>
                </Card>
              </section>

              <FAQSection faqs={faqs} />

              <section className="mt-16">
                <Card className="p-8 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
                  <h2 className="text-2xl font-light mb-4">
                    Discuss Access Control Requirements
                  </h2>
                  <p className="text-muted-foreground font-light leading-relaxed mb-6">
                    Talk to our team about access control system maintenance and compliance.
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

export default AccessControl;
