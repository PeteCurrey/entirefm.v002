import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Breadcrumb } from "@/components/shared/Breadcrumb";

const EntireFMvsFreelance = () => {
  return (
    <>
      <Helmet>
        <title>EntireFM vs Freelance Engineers | Managed Service or Direct Contractors?</title>
        <meta
          name="description"
          content="Compare managed FM services with freelance engineer relationships. Examine coverage, compliance burden, and continuity of service."
        />
        <link rel="canonical" href="https://entirefm.com/compare/entirefm-vs-freelance" />
      </Helmet>

      <main className="min-h-screen">
        <section className="bg-gradient-to-br from-background via-background to-primary/5 py-16">
          <div className="container mx-auto px-4">
            <Breadcrumb items={[{ label: "Compare Providers", href: "/compare" }, { label: "EntireFM vs Freelance Engineers" }]} />
            
            <h1 className="text-4xl md:text-5xl font-light mb-6 mt-8">
              EntireFM vs Freelance Engineers: <span className="text-primary">Managed Service or Direct Contractors?</span>
            </h1>
            <p className="text-xl text-muted-foreground font-light max-w-3xl">
              Examining coverage, compliance burden, and continuity of service.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="p-8 text-center">
                <div className="text-4xl font-light text-primary mb-2">Managed</div>
                <div className="text-sm text-muted-foreground">Compliance</div>
              </Card>
              <Card className="p-8 text-center">
                <div className="text-4xl font-light text-primary mb-2">Backup</div>
                <div className="text-sm text-muted-foreground">Coverage Guaranteed</div>
              </Card>
              <Card className="p-8 text-center">
                <div className="text-4xl font-light text-primary mb-2">Multi-Trade</div>
                <div className="text-sm text-muted-foreground">Capability</div>
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
                      <th className="text-center py-4 font-light">Freelance</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { feature: "Compliance Management", entirefm: true, competitor: false },
                      { feature: "Backup Engineer Cover", entirefm: true, competitor: false },
                      { feature: "Multi-Trade Access", entirefm: true, competitor: false },
                      { feature: "Direct Relationship", entirefm: true, competitor: true },
                      { feature: "Lower Day Rate", entirefm: false, competitor: true },
                      { feature: "RAMS & Documentation", entirefm: true, competitor: false },
                      { feature: "24/7 Availability", entirefm: true, competitor: false },
                      { feature: "Insurance Verification", entirefm: true, competitor: false },
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
                  <h3 className="text-2xl font-light mb-4">Risks of Freelance-Only Approach</h3>
                  <ul className="space-y-3">
                    {[
                      "Single point of failure — no cover for holidays, sickness, or departure",
                      "Compliance burden remains entirely with you",
                      "Limited access to specialist trades outside their expertise",
                      "Insurance and accreditation verification falls on you",
                      "No escalation path when issues exceed their capability",
                    ].map((reason, idx) => (
                      <li key={idx} className="flex items-start">
                        <X className="w-5 h-5 text-destructive mr-3 mt-0.5 flex-shrink-0" />
                        <span className="font-light">{reason}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-light mb-4">When Freelance Works</h3>
                  <ul className="space-y-3">
                    {[
                      "Small, simple site with predictable single-trade needs",
                      "Budget constraints requiring lowest possible day rates",
                      "You have in-house capability to manage compliance",
                    ].map((reason, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="w-5 h-5 text-muted-foreground mr-3 mt-0.5 flex-shrink-0" />
                        <span className="font-light">{reason}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-12 bg-primary/5 p-8 rounded-lg text-center">
                <h3 className="text-2xl font-light mb-4">Need More Robust Coverage?</h3>
                <p className="text-muted-foreground font-light mb-6 max-w-2xl mx-auto">
                  We can help you transition from freelance arrangements to managed service without disruption.
                </p>
                <Button size="lg" asChild>
                  <Link to="/contact">Discuss Your Requirements</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default EntireFMvsFreelance;