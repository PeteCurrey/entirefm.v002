import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Breadcrumb } from "@/components/shared/Breadcrumb";

const EntireFMvsMitie = () => {
  return (
    <>
      <Helmet>
        <title>EntireFM vs Mitie | FM Provider Comparison 2025</title>
        <meta
          name="description"
          content="Compare EntireFM and Mitie facilities management. See performance, response times, and compliance delivery side-by-side."
        />
        <link rel="canonical" href="https://entirefm.com/compare/entirefm-vs-mitie" />
      </Helmet>

      <main className="min-h-screen">
        <section className="bg-gradient-to-br from-background via-background to-primary/5 py-16">
          <div className="container mx-auto px-4">
            <Breadcrumb items={[{ label: "Compare Providers", href: "/compare" }, { label: "EntireFM vs Mitie" }]} />
            
            <h1 className="text-4xl md:text-5xl font-light mb-6 mt-8">
              EntireFM vs Mitie: <span className="text-primary">Which FM Provider Delivers Better Results?</span>
            </h1>
            <p className="text-xl text-muted-foreground font-light max-w-3xl">
              Independent comparison of service delivery, response times, and compliance performance.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="p-8 text-center">
                <div className="text-4xl font-light text-primary mb-2">&lt; 2 hrs</div>
                <div className="text-sm text-muted-foreground">EntireFM Response Time</div>
              </Card>
              <Card className="p-8 text-center">
                <div className="text-4xl font-light text-primary mb-2">98.7%</div>
                <div className="text-sm text-muted-foreground">EntireFM SLA Achievement</div>
              </Card>
              <Card className="p-8 text-center">
                <div className="text-4xl font-light text-primary mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Direct Engineer Access</div>
              </Card>
            </div>

            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-light mb-8">Feature Comparison</h2>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-4 font-light">Feature</th>
                      <th className="text-center py-4 font-light">EntireFM</th>
                      <th className="text-center py-4 font-light">Mitie</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { feature: "24/7 Direct Engineer Contact", entirefm: true, competitor: false },
                      { feature: "Real-Time Portal Access", entirefm: true, competitor: true },
                      { feature: "Guaranteed Response Times", entirefm: true, competitor: false },
                      { feature: "Regional Account Manager", entirefm: true, competitor: true },
                      { feature: "Flexible Contract Terms", entirefm: true, competitor: false },
                      { feature: "Transparent Pricing", entirefm: true, competitor: false },
                      { feature: "Proactive Compliance Alerts", entirefm: true, competitor: false },
                      { feature: "Same-Day Emergency Response", entirefm: true, competitor: false },
                    ].map((row, idx) => (
                      <tr key={idx} className="border-b">
                        <td className="py-4 font-light">{row.feature}</td>
                        <td className="text-center py-4">
                          {row.entirefm ? (
                            <Check className="w-6 h-6 text-green-600 mx-auto" />
                          ) : (
                            <X className="w-6 h-6 text-muted-foreground mx-auto" />
                          )}
                        </td>
                        <td className="text-center py-4">
                          {row.competitor ? (
                            <Check className="w-6 h-6 text-green-600 mx-auto" />
                          ) : (
                            <X className="w-6 h-6 text-muted-foreground mx-auto" />
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-12 space-y-8">
                <div>
                  <h3 className="text-2xl font-light mb-4">Why Clients Switch to EntireFM</h3>
                  <ul className="space-y-3">
                    {[
                      "Frustrated with slow response times and missed SLAs",
                      "Lack of direct engineer access during emergencies",
                      "Poor transparency in reporting and invoicing",
                      "Rigid contract terms with limited flexibility",
                      "Account manager changes causing disruption",
                    ].map((reason, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                        <span className="font-light">{reason}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-light mb-4">Real Client Feedback</h3>
                  <Card className="p-6">
                    <p className="italic font-light mb-4">
                      "We moved from Mitie to EntireFM after ongoing SLA issues. The difference is night and day. 
                      Response times are faster, engineers are more skilled, and the portal gives us full visibility."
                    </p>
                    <p className="text-sm text-muted-foreground">— FM Director, National Logistics Portfolio</p>
                  </Card>
                </div>
              </div>

              <div className="mt-12 bg-primary/5 p-8 rounded-lg text-center">
                <h3 className="text-2xl font-light mb-4">Ready to Make the Switch?</h3>
                <p className="text-muted-foreground font-light mb-6 max-w-2xl mx-auto">
                  We handle the transition seamlessly. No disruption, no risk. Just better FM delivery.
                </p>
                <Button size="lg" asChild>
                  <Link to="/contact">Request Comparison Proposal</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default EntireFMvsMitie;
