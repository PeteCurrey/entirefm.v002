import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Breadcrumb } from "@/components/shared/Breadcrumb";

const EntireFMvsJLL = () => {
  return (
    <>
      <Helmet>
        <title>EntireFM vs JLL | FM Provider Comparison 2025</title>
        <meta
          name="description"
          content="Compare EntireFM and JLL facilities management. Independent UK operations versus multinational FM delivery."
        />
        <link rel="canonical" href="https://entirefm.com/compare/entirefm-vs-jll" />
      </Helmet>

      <main className="min-h-screen">
        <section className="bg-gradient-to-br from-background via-background to-primary/5 py-16">
          <div className="container mx-auto px-4">
            <Breadcrumb items={[{ label: "Compare Providers", href: "/compare" }, { label: "EntireFM vs JLL" }]} />
            
            <h1 className="text-4xl md:text-5xl font-light mb-6 mt-8">
              EntireFM vs JLL: <span className="text-primary">Independent Agility or Global Reach?</span>
            </h1>
            <p className="text-xl text-muted-foreground font-light max-w-3xl">
              Comparing governance structures, escalation paths, and day-to-day operations.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="p-8 text-center">
                <div className="text-4xl font-light text-primary mb-2">Lean</div>
                <div className="text-sm text-muted-foreground">Management Structure</div>
              </Card>
              <Card className="p-8 text-center">
                <div className="text-4xl font-light text-primary mb-2">Fast</div>
                <div className="text-sm text-muted-foreground">Escalation Resolution</div>
              </Card>
              <Card className="p-8 text-center">
                <div className="text-4xl font-light text-primary mb-2">Clear</div>
                <div className="text-sm text-muted-foreground">Accountability Lines</div>
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
                      <th className="text-center py-4 font-light">JLL</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { feature: "Lean Management Structure", entirefm: true, competitor: false },
                      { feature: "Direct Escalation to Directors", entirefm: true, competitor: false },
                      { feature: "Global Property Services", entirefm: false, competitor: true },
                      { feature: "Single Point of Accountability", entirefm: true, competitor: false },
                      { feature: "Rapid Contract Modifications", entirefm: true, competitor: false },
                      { feature: "Integrated Technology Platform", entirefm: true, competitor: true },
                      { feature: "Specialist Hard FM Focus", entirefm: true, competitor: false },
                      { feature: "Owner-Led Decision Making", entirefm: true, competitor: false },
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
                  <h3 className="text-2xl font-light mb-4">When EntireFM Makes Sense</h3>
                  <ul className="space-y-3">
                    {[
                      "Estates requiring rapid escalation and resolution",
                      "Clients frustrated with multi-layer approval processes",
                      "Need for specialist hard FM rather than integrated services",
                      "Preference for consistent account management",
                      "Priority on governance and compliance focus",
                    ].map((reason, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                        <span className="font-light">{reason}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-12 bg-primary/5 p-8 rounded-lg text-center">
                <h3 className="text-2xl font-light mb-4">Considering a Change?</h3>
                <p className="text-muted-foreground font-light mb-6 max-w-2xl mx-auto">
                  We can provide a detailed comparison based on your specific estate requirements.
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

export default EntireFMvsJLL;