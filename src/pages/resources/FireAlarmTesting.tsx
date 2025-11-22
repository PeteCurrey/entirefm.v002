import { Helmet } from "react-helmet";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Link } from "react-router-dom";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { AlertCircle, Calendar, CheckCircle } from "lucide-react";
import { FAQSection } from "@/components/shared/FAQSection";

const FireAlarmTesting = () => {
  const faqs = [
    {
      question: "How often should fire alarms be tested?",
      answer: "Under BS 5839-1, fire alarm systems must be tested weekly (call points/sounders), with quarterly inspection of detectors and annual full system testing by a competent engineer."
    },
    {
      question: "What happens if fire alarm testing is missed?",
      answer: "Missed testing creates compliance breaches, insurance invalidation risk, and potential prosecution under the Regulatory Reform (Fire Safety) Order 2005. It also increases fire risk to life and property."
    },
    {
      question: "Who is responsible for fire alarm maintenance?",
      answer: "The Responsible Person (typically building owner or facilities manager) must ensure fire alarm systems are maintained to BS 5839 standards. This includes regular testing, inspection, and records retention."
    },
    {
      question: "Can I test fire alarms myself?",
      answer: "Weekly call point testing can be done in-house, but quarterly inspections and annual servicing must be completed by BS 5839-certified competent engineers to meet legal requirements."
    }
  ];

  return (
    <>
      <Helmet>
        <title>How Often Should Fire Alarms Be Tested? | BS 5839 Compliance Guide</title>
        <meta
          name="description"
          content="Complete fire alarm testing schedule under BS 5839. Weekly, quarterly, and annual requirements explained. Avoid prosecution and insurance issues."
        />
        <link rel="canonical" href="https://entirefm.com/resources/fire-alarm-testing-frequency" />
      </Helmet>

      <main className="min-h-screen">
        <section className="bg-gradient-to-br from-background via-background to-primary/5 py-16">
          <div className="container mx-auto px-4">
            <Breadcrumb items={[{ label: "Resources", href: "/resources" }, { label: "Fire Alarm Testing Guide" }]} />
            
            <h1 className="text-4xl md:text-5xl font-light mb-6 mt-8">
              How Often Should Fire Alarms <span className="text-primary">Be Tested?</span>
            </h1>
            <p className="text-xl text-muted-foreground font-light max-w-3xl">
              Complete BS 5839-1 compliance guide for fire alarm testing, inspection schedules, and record-keeping requirements.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Alert className="mb-8">
                <AlertCircle className="h-5 w-5" />
                <AlertDescription>
                  <strong>Legal Requirement:</strong> Fire alarm systems must be tested and maintained under BS 5839-1 
                  and the Regulatory Reform (Fire Safety) Order 2005. Non-compliance can result in prosecution and insurance invalidation.
                </AlertDescription>
              </Alert>

              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-light mb-6 flex items-center gap-3">
                    <Calendar className="w-8 h-8 text-primary" />
                    Fire Alarm Testing Schedule
                  </h2>
                  
                  <div className="grid gap-6">
                    <Card className="p-6 border-l-4 border-l-primary">
                      <div className="flex items-start gap-4">
                        <div className="bg-primary/10 p-3 rounded-lg">
                          <span className="text-2xl font-light">Weekly</span>
                        </div>
                        <div>
                          <h3 className="text-xl font-light mb-2">Call Point Testing</h3>
                          <p className="text-muted-foreground font-light mb-3">
                            Test a different manual call point each week on a rotational basis. 
                            Verify alarm activation, sounder operation, and panel display.
                          </p>
                          <div className="text-sm text-muted-foreground">
                            <strong>Who:</strong> In-house responsible person or trained staff
                          </div>
                        </div>
                      </div>
                    </Card>

                    <Card className="p-6 border-l-4 border-l-orange-500">
                      <div className="flex items-start gap-4">
                        <div className="bg-orange-500/10 p-3 rounded-lg">
                          <span className="text-2xl font-light">Quarterly</span>
                        </div>
                        <div>
                          <h3 className="text-xl font-light mb-2">Detector Inspection</h3>
                          <p className="text-muted-foreground font-light mb-3">
                            Test 25% of smoke/heat detectors per quarter (100% annually). 
                            Verify functionality, clean detectors, and check panel zones.
                          </p>
                          <div className="text-sm text-muted-foreground">
                            <strong>Who:</strong> BS 5839-certified competent engineer
                          </div>
                        </div>
                      </div>
                    </Card>

                    <Card className="p-6 border-l-4 border-l-blue-500">
                      <div className="flex items-start gap-4">
                        <div className="bg-blue-500/10 p-3 rounded-lg">
                          <span className="text-2xl font-light">Annual</span>
                        </div>
                        <div>
                          <h3 className="text-xl font-light mb-2">Full System Service</h3>
                          <p className="text-muted-foreground font-light mb-3">
                            Comprehensive inspection including all detectors, sounders, power supplies, 
                            backup batteries, wiring integrity, and control panel diagnostics.
                          </p>
                          <div className="text-sm text-muted-foreground">
                            <strong>Who:</strong> BS 5839-1 accredited service engineer
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>

                <div>
                  <h2 className="text-3xl font-light mb-6">What Gets Tested?</h2>
                  <Card className="p-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-lg font-light mb-4 flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-primary" />
                          Weekly Testing Includes:
                        </h3>
                        <ul className="space-y-2 text-sm font-light text-muted-foreground">
                          <li>• Manual call point activation</li>
                          <li>• Alarm sounder verification</li>
                          <li>• Control panel display check</li>
                          <li>• Log book recording</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-lg font-light mb-4 flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-primary" />
                          Quarterly/Annual Includes:
                        </h3>
                        <ul className="space-y-2 text-sm font-light text-muted-foreground">
                          <li>• Smoke & heat detector testing</li>
                          <li>• Battery backup functionality</li>
                          <li>• Wiring and zone integrity</li>
                          <li>• Power supply voltage checks</li>
                          <li>• Full compliance certification</li>
                        </ul>
                      </div>
                    </div>
                  </Card>
                </div>

                <div>
                  <h2 className="text-3xl font-light mb-6">Record-Keeping Requirements</h2>
                  <Card className="p-6">
                    <p className="font-light mb-4">
                      The Responsible Person must maintain a fire alarm log book containing:
                    </p>
                    <ul className="space-y-2 font-light text-muted-foreground">
                      <li>• Date and time of each test</li>
                      <li>• Call point or detector tested</li>
                      <li>• Test result (pass/fail)</li>
                      <li>• Faults identified and remedial actions</li>
                      <li>• Name and signature of tester</li>
                      <li>• Quarterly and annual service certificates</li>
                    </ul>
                    <Alert className="mt-6">
                      <AlertDescription>
                        Records must be retained for inspection by fire authorities, insurers, and auditors. 
                        Digital log books via FM portals provide automated compliance tracking.
                      </AlertDescription>
                    </Alert>
                  </Card>
                </div>

                <div>
                  <h2 className="text-3xl font-light mb-6">Consequences of Non-Compliance</h2>
                  <div className="grid md:grid-cols-3 gap-6">
                    <Card className="p-6 text-center">
                      <div className="text-3xl mb-2">⚖️</div>
                      <h3 className="font-light mb-2">Legal Risk</h3>
                      <p className="text-sm text-muted-foreground font-light">
                        Prosecution under RR(FS)O 2005. Fines and potential imprisonment for responsible persons.
                      </p>
                    </Card>
                    <Card className="p-6 text-center">
                      <div className="text-3xl mb-2">🛡️</div>
                      <h3 className="font-light mb-2">Insurance Void</h3>
                      <p className="text-sm text-muted-foreground font-light">
                        Fire damage claims rejected if maintenance records are incomplete or non-compliant.
                      </p>
                    </Card>
                    <Card className="p-6 text-center">
                      <div className="text-3xl mb-2">🔥</div>
                      <h3 className="font-light mb-2">Life Safety</h3>
                      <p className="text-sm text-muted-foreground font-light">
                        Untested systems may fail during emergencies, endangering occupants and property.
                      </p>
                    </Card>
                  </div>
                </div>

                <FAQSection faqs={faqs} />

                <div className="bg-primary/5 p-8 rounded-lg text-center">
                  <h3 className="text-2xl font-light mb-4">Never Miss Fire Alarm Testing Again</h3>
                  <p className="text-muted-foreground font-light mb-6 max-w-2xl mx-auto">
                    EntireFM delivers automated compliance tracking, engineer dispatch, and digital log books. 
                    Protect your people and avoid prosecution.
                  </p>
                  <Button size="lg" asChild>
                    <Link to="/services/fire-alarms">Explore Fire Alarm Services</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default FireAlarmTesting;
