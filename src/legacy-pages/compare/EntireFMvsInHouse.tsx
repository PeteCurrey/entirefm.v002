"use client";

;
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, X } from "lucide-react";
import Link from "next/link";
import { Breadcrumb } from "@/components/shared/Breadcrumb";

const EntireFMvsInHouse = () => {
  return (
    <>
      

      <main className="min-h-screen pt-20">
        <section className="bg-gradient-to-br from-background via-background to-primary/5 py-16">
          <div className="container mx-auto px-4">
            <Breadcrumb items={[{ label: "Compare Providers", href: "/compare" }, { label: "EntireFM vs In-House FM" }]} />
            
            <h1 className="text-4xl md:text-5xl font-light mb-6 mt-8">
              EntireFM vs In-House FM: <span className="text-primary">Outsource or Build Internally?</span>
            </h1>
            <p className="text-xl text-muted-foreground font-light max-w-3xl">
              Understanding when outsourcing makes sense and when an internal team is the right choice.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="p-8 text-center">
                <div className="text-4xl font-light text-primary mb-2">Scalable</div>
                <div className="text-sm text-muted-foreground">Resource Model</div>
              </Card>
              <Card className="p-8 text-center">
                <div className="text-4xl font-light text-primary mb-2">Transferred</div>
                <div className="text-sm text-muted-foreground">Compliance Risk</div>
              </Card>
              <Card className="p-8 text-center">
                <div className="text-4xl font-light text-primary mb-2">Specialist</div>
                <div className="text-sm text-muted-foreground">Capabilities</div>
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
                      <th className="text-center py-4 font-light">In-House</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { feature: "Scalable Resource Model", entirefm: true, competitor: false },
                      { feature: "Compliance Risk Transfer", entirefm: true, competitor: false },
                      { feature: "Specialist Trade Access", entirefm: true, competitor: false },
                      { feature: "Direct Site Knowledge", entirefm: true, competitor: true },
                      { feature: "Fixed Headcount Costs", entirefm: false, competitor: true },
                      { feature: "Holiday/Sickness Cover", entirefm: true, competitor: false },
                      { feature: "Technology Platform", entirefm: true, competitor: false },
                      { feature: "Regulatory Updates", entirefm: true, competitor: false },
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
                  <h3 className="text-2xl font-light mb-4">When Outsourcing Makes Sense</h3>
                  <ul className="space-y-3">
                    {[
                      "Multi-site portfolios requiring coordinated delivery",
                      "Access to specialist trades without recruitment burden",
                      "Risk transfer for compliance and statutory obligations",
                      "Need for scalable resources during peak periods",
                      "Technology platform without capital investment",
                    ].map((reason, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                        <span className="font-light">{reason}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-light mb-4">When In-House Works Better</h3>
                  <ul className="space-y-3">
                    {[
                      "Single site with consistent, predictable workload",
                      "Highly specialised operations requiring dedicated expertise",
                      "Budget constraints favouring fixed costs over variable",
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
                <h3 className="text-2xl font-light mb-4">Not Sure Which Model Suits You?</h3>
                <p className="text-muted-foreground font-light mb-6 max-w-2xl mx-auto">
                  We can help you evaluate the options and provide a no-obligation assessment.
                </p>
                <Button size="lg" asChild>
                  <Link href="/contact">Discuss Your Requirements</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default EntireFMvsInHouse;