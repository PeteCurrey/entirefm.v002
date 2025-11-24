import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SchemaMarkup, FAQSchema } from "@/components/shared/SchemaMarkup";
import { FAQSection } from "@/components/shared/FAQSection";
import { SidebarCTA } from "@/components/shared/SidebarCTA";

const EmergencySystems = () => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Emergency Building Systems",
    "provider": {
      "@type": "Organization",
      "name": "EntireFM"
    },
    "description": "Emergency lighting, fire alarm interaction, AOV, smoke vents, backup systems maintenance and testing."
  };

  const faqs = [
    {
      question: "What are emergency building systems?",
      answer: "Emergency systems include emergency lighting, fire alarms, smoke ventilation (AOV), pressurization fans, sprinklers, dry risers, and backup power generation. These systems activate during emergencies to enable safe evacuation and fire-fighting operations."
    },
    {
      question: "How often must emergency systems be tested?",
      answer: "Fire alarms require weekly call point testing and quarterly servicing. Emergency lighting needs monthly function tests and annual three-hour duration tests. Smoke vents and AOV systems require six-monthly servicing and activation testing."
    },
    {
      question: "What happens if emergency system testing is missed?",
      answer: "Missed testing creates compliance breaches under fire safety legislation. Insurance may be invalidated, and building owners face prosecution if fires occur with non-functional systems. Regulatory authorities can prohibit building occupation until compliance is restored."
    },
    {
      question: "Do emergency systems require backup power?",
      answer: "Yes. Emergency lighting has integral batteries. Fire alarm panels require standby battery supplies. Critical systems like smoke vents and pressurization fans need backup power to function during mains failures."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Emergency Building Systems | Fire Safety & Life Safety Systems | EntireFM</title>
        <meta name="description" content="Emergency building systems maintenance. Emergency lighting, fire alarms, smoke ventilation, AOV systems, and backup power for life safety compliance." />
        <link rel="canonical" href="https://entirefm.com/services/emergency-systems" />
      </Helmet>

      <SchemaMarkup schema={serviceSchema} />
      <FAQSchema faqs={faqs} />

      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-12 lg:py-20">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="lg:col-span-2">
              <section className="mb-16">
                <h1 className="text-4xl lg:text-5xl font-light mb-6 tracking-tight">
                  Emergency Building Systems
                </h1>
                <p className="text-xl text-muted-foreground font-light leading-relaxed mb-8">
                  Emergency lighting, fire alarm interaction, AOV, smoke vents, backup systems.
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
                  System Purpose & Coverage
                </h2>
                <Card className="p-8 bg-card/50 backdrop-blur">
                  <p className="text-muted-foreground font-light leading-relaxed mb-6">
                    Emergency building systems activate during fires, power failures, or other critical incidents. These life safety systems enable safe evacuation, facilitate fire-fighting operations, and prevent smoke spread through buildings.
                  </p>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Failure of emergency systems during actual emergencies has catastrophic consequences. Regular testing and maintenance is legally mandated under fire safety legislation, with building owners facing prosecution for non-compliance.
                  </p>
                </Card>
              </section>

              <section className="mb-16">
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Core Emergency Systems
                </h2>
                <div className="space-y-4">
                  <Card className="p-6 bg-card/50 backdrop-blur">
                    <h3 className="font-medium mb-3">
                      <Link to="/services/emergency-lighting" className="hover:text-primary transition-colors">
                        Emergency Lighting
                      </Link>
                    </h3>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed mb-3">
                      Battery-powered lighting that activates on mains failure. Illuminates escape routes, exit signs, and safety equipment locations. Requires monthly function testing and annual three-hour duration tests to BS 5266-1.
                    </p>
                    <ul className="text-sm text-muted-foreground font-light space-y-1">
                      <li>• Maintained and non-maintained emergency lights</li>
                      <li>• Exit signs with pictograms and directional arrows</li>
                      <li>• Open area (anti-panic) lighting</li>
                      <li>• High-risk task area lighting</li>
                    </ul>
                  </Card>

                  <Card className="p-6 bg-card/50 backdrop-blur">
                    <h3 className="font-medium mb-3">
                      <Link to="/services/fire-alarms" className="hover:text-primary transition-colors">
                        Fire Detection & Alarm Systems
                      </Link>
                    </h3>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed mb-3">
                      Smoke detectors, heat detectors, manual call points, and alarm sounders. Systems must be tested weekly with quarterly servicing and annual commissioning to BS 5839-1.
                    </p>
                    <ul className="text-sm text-muted-foreground font-light space-y-1">
                      <li>• Optical and ionization smoke detectors</li>
                      <li>• Heat detectors for kitchens and plant rooms</li>
                      <li>• Break-glass manual call points</li>
                      <li>• Alarm sounders and visual indicators</li>
                    </ul>
                  </Card>

                  <Card className="p-6 bg-card/50 backdrop-blur">
                    <h3 className="font-medium mb-3">
                      <Link to="/services/smoke-vent-systems" className="hover:text-primary transition-colors">
                        Smoke Control Systems
                      </Link>
                    </h3>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed mb-3">
                      Automatic Opening Vents (AOV), natural and mechanical smoke ventilation, and smoke curtains. Systems clear smoke from escape routes and create smoke-free zones for evacuation.
                    </p>
                    <ul className="text-sm text-muted-foreground font-light space-y-1">
                      <li>• AOV actuators linked to fire alarm systems</li>
                      <li>• Mechanical smoke extract fans</li>
                      <li>• Natural ventilation louvres</li>
                      <li>• Smoke curtains and barriers</li>
                    </ul>
                  </Card>

                  <Card className="p-6 bg-card/50 backdrop-blur">
                    <h3 className="font-medium mb-3">
                      <Link to="/services/stairwell-pressurisation-fans" className="hover:text-primary transition-colors">
                        Pressurization Systems
                      </Link>
                    </h3>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed mb-3">
                      Fans that pressurize stairwells and lobbies to prevent smoke infiltration. Critical for high-rise buildings to maintain smoke-free escape routes.
                    </p>
                    <ul className="text-sm text-muted-foreground font-light space-y-1">
                      <li>• Stairwell pressurization fans</li>
                      <li>• Lobby differential pressure systems</li>
                      <li>• Pressure relief dampers</li>
                      <li>• Control panels and pressure sensors</li>
                    </ul>
                  </Card>

                  <Card className="p-6 bg-card/50 backdrop-blur">
                    <h3 className="font-medium mb-3">
                      <Link to="/services/sprinklers" className="hover:text-primary transition-colors">
                        Fire Suppression Systems
                      </Link>
                    </h3>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed mb-3">
                      Sprinkler systems, dry risers for fire-fighting, and specialist suppression systems for server rooms and kitchens. Weekly visual checks and annual servicing required.
                    </p>
                    <ul className="text-sm text-muted-foreground font-light space-y-1">
                      <li>• Wet and dry sprinkler systems</li>
                      <li>• <Link to="/services/dry-riser-testing" className="hover:text-primary">Dry riser testing</Link> and maintenance</li>
                      <li>• FM200 and Novec gaseous suppression</li>
                      <li>• Kitchen suppression systems</li>
                    </ul>
                  </Card>

                  <Card className="p-6 bg-card/50 backdrop-blur">
                    <h3 className="font-medium mb-3">
                      <Link to="/services/generator-maintenance" className="hover:text-primary transition-colors">
                        Backup Power Systems
                      </Link>
                    </h3>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed mb-3">
                      Standby generators and UPS systems that maintain power to critical life safety equipment during mains failures. Monthly load testing and fuel quality checks required.
                    </p>
                    <ul className="text-sm text-muted-foreground font-light space-y-1">
                      <li>• Diesel standby generators</li>
                      <li>• Uninterruptible power supplies (UPS)</li>
                      <li>• Automatic transfer switches</li>
                      <li>• Battery backup systems</li>
                    </ul>
                  </Card>
                </div>
              </section>

              <section className="mb-16">
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Testing & Compliance Requirements
                </h2>
                <Card className="p-8 bg-card/50 backdrop-blur">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-border">
                          <th className="text-left py-3 font-medium">System</th>
                          <th className="text-left py-3 font-medium">Test Frequency</th>
                          <th className="text-left py-3 font-medium">Standard</th>
                        </tr>
                      </thead>
                      <tbody className="text-muted-foreground font-light">
                        <tr className="border-b border-border/50">
                          <td className="py-3">Fire Alarms</td>
                          <td className="py-3">Weekly + Quarterly service</td>
                          <td className="py-3">BS 5839-1</td>
                        </tr>
                        <tr className="border-b border-border/50">
                          <td className="py-3">Emergency Lighting</td>
                          <td className="py-3">Monthly + Annual duration</td>
                          <td className="py-3">BS 5266-1</td>
                        </tr>
                        <tr className="border-b border-border/50">
                          <td className="py-3">AOV Systems</td>
                          <td className="py-3">Six-monthly servicing</td>
                          <td className="py-3">BS 9999</td>
                        </tr>
                        <tr className="border-b border-border/50">
                          <td className="py-3">Pressurization Fans</td>
                          <td className="py-3">Six-monthly testing</td>
                          <td className="py-3">BS EN 12101-6</td>
                        </tr>
                        <tr className="border-b border-border/50">
                          <td className="py-3">Sprinklers</td>
                          <td className="py-3">Weekly visual + Annual service</td>
                          <td className="py-3">BS 9251</td>
                        </tr>
                        <tr>
                          <td className="py-3">Dry Risers</td>
                          <td className="py-3">Six-monthly pressure test</td>
                          <td className="py-3">BS 9990</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </Card>
              </section>

              <section className="mb-16">
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Legal Responsibilities
                </h2>
                <Card className="p-8 bg-card/50 backdrop-blur">
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium mb-2">Regulatory Reform (Fire Safety) Order 2005</h3>
                      <p className="text-sm text-muted-foreground font-light leading-relaxed">
                        The responsible person must ensure emergency systems are maintained in working order. Fire risk assessments must identify required systems, and compliance certificates must be current.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">Building Regulations Approved Document B</h3>
                      <p className="text-sm text-muted-foreground font-light leading-relaxed">
                        Sets minimum requirements for fire detection, emergency lighting, and means of escape. Refurbishment works trigger compliance upgrades to current standards.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">Health & Safety at Work Act 1974</h3>
                      <p className="text-sm text-muted-foreground font-light leading-relaxed">
                        Building owners have general duties to ensure workplace safety. Non-functional emergency systems create breaches punishable by unlimited fines and imprisonment.
                      </p>
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
                      <span>Coordinated testing schedules across all emergency systems</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Automated compliance tracking and alert notifications</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Fire-rated engineer qualifications and manufacturer training</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Integration testing between fire alarms, smoke vents, and door releases</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Digital log books and certificate storage</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>24/7 emergency response for critical system failures</span>
                    </li>
                  </ul>
                </Card>
              </section>

              <FAQSection faqs={faqs} />

              <section className="mt-16">
                <Card className="p-8 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
                  <h2 className="text-2xl font-light mb-4">
                    Discuss Emergency Systems Requirements
                  </h2>
                  <p className="text-muted-foreground font-light leading-relaxed mb-6">
                    Talk to our team about emergency system maintenance and life safety compliance.
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

export default EmergencySystems;
