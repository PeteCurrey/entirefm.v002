import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Breadcrumb } from "@/components/shared/Breadcrumb";

const EntireFMvsCBRE = () => {
  return (
    <>
      <Helmet>
        <title>EntireFM vs CBRE | FM Provider Comparison 2025</title>
        <meta
          name="description"
          content="Compare EntireFM and CBRE facilities management. Independent UK delivery versus global property services."
        />
        <link rel="canonical" href="https://entirefm.com/compare/entirefm-vs-cbre" />
      </Helmet>

      <main className="min-h-screen pt-20">
        <section className="bg-gradient-to-br from-background via-background to-primary/5 py-16">
          <div className="container mx-auto px-4">
            <Breadcrumb items={[{ label: "Compare Providers", href: "/compare" }, { label: "EntireFM vs CBRE" }]} />
            
            <h1 className="text-4xl md:text-5xl font-light mb-6 mt-8">
              EntireFM vs CBRE: <span className="text-primary">Global Scale or Local Accountability?</span>
            </h1>
            <p className="text-xl text-muted-foreground font-light max-w-3xl">
              Comparing independent UK delivery against multinational property services.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="p-8 text-center">
                <div className="text-4xl font-light text-primary mb-2">Direct</div>
                <div className="text-sm text-muted-foreground">Decision Maker Access</div>
              </Card>
              <Card className="p-8 text-center">
                <div className="text-4xl font-light text-primary mb-2">UK</div>
                <div className="text-sm text-muted-foreground">Focused Operations</div>
              </Card>
              <Card className="p-8 text-center">
                <div className="text-4xl font-light text-primary mb-2">Flexible</div>
                <div className="text-sm text-muted-foreground">Contract Terms</div>
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
                      <th className="text-center py-4 font-light">CBRE</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { feature: "Direct Senior Contact", entirefm: true, competitor: false },
                      { feature: "UK-Focused Operations", entirefm: true, competitor: false },
                      { feature: "Global Portfolio Coverage", entirefm: false, competitor: true },
                      { feature: "Flexible Contract Terms", entirefm: true, competitor: false },
                      { feature: "Transparent Pricing Model", entirefm: true, competitor: false },
                      { feature: "Rapid Decision Making", entirefm: true, competitor: false },
                      { feature: "Local Market Knowledge", entirefm: true, competitor: true },
                      { feature: "Owner-Led Accountability", entirefm: true, competitor: false },
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
                      "UK-focused portfolio requiring local expertise",
                      "Need for direct access to senior decision makers",
                      "Desire for contract flexibility and agile service changes",
                      "Priority on transparent pricing without hidden fees",
                      "Preference for owner-led accountability over corporate hierarchy",
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

export default EntireFMvsCBRE;