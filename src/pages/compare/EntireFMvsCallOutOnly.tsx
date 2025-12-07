import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Breadcrumb } from "@/components/shared/Breadcrumb";

const EntireFMvsCallOutOnly = () => {
  return (
    <>
      <Helmet>
        <title>EntireFM vs Call-Out-Only Providers | Planned vs Reactive Maintenance</title>
        <meta
          name="description"
          content="Compare planned maintenance with reactive-only services. Evaluate long-term costs, asset protection, and compliance management."
        />
        <link rel="canonical" href="https://entirefm.com/compare/entirefm-vs-call-out-only" />
      </Helmet>

      <main className="min-h-screen pt-20">
        <section className="bg-gradient-to-br from-background via-background to-primary/5 py-16">
          <div className="container mx-auto px-4">
            <Breadcrumb items={[{ label: "Compare Providers", href: "/compare" }, { label: "EntireFM vs Call-Out-Only" }]} />
            
            <h1 className="text-4xl md:text-5xl font-light mb-6 mt-8">
              EntireFM vs Call-Out-Only: <span className="text-primary">Planned Maintenance or Reactive Fixes?</span>
            </h1>
            <p className="text-xl text-muted-foreground font-light max-w-3xl">
              Comparing long-term costs, asset protection, and compliance management approaches.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="p-8 text-center">
                <div className="text-4xl font-light text-primary mb-2">Planned</div>
                <div className="text-sm text-muted-foreground">Preventive Approach</div>
              </Card>
              <Card className="p-8 text-center">
                <div className="text-4xl font-light text-primary mb-2">Protected</div>
                <div className="text-sm text-muted-foreground">Asset Lifecycle</div>
              </Card>
              <Card className="p-8 text-center">
                <div className="text-4xl font-light text-primary mb-2">Compliant</div>
                <div className="text-sm text-muted-foreground">Statutory Coverage</div>
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
                      <th className="text-center py-4 font-light">Call-Out Only</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { feature: "Planned Preventive Maintenance", entirefm: true, competitor: false },
                      { feature: "Statutory Compliance Management", entirefm: true, competitor: false },
                      { feature: "Lower Initial Commitment", entirefm: false, competitor: true },
                      { feature: "Asset Lifecycle Planning", entirefm: true, competitor: false },
                      { feature: "Predictable Monthly Costs", entirefm: true, competitor: false },
                      { feature: "Emergency Response", entirefm: true, competitor: true },
                      { feature: "Compliance Documentation", entirefm: true, competitor: false },
                      { feature: "Reduced Breakdown Frequency", entirefm: true, competitor: false },
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
                  <h3 className="text-2xl font-light mb-4">Hidden Costs of Reactive-Only</h3>
                  <ul className="space-y-3">
                    {[
                      "Emergency call-out rates significantly higher than planned visits",
                      "Accelerated asset degradation from lack of preventive care",
                      "Compliance gaps leading to potential enforcement action",
                      "Unpredictable costs making budgeting difficult",
                      "Extended downtime waiting for reactive response",
                    ].map((reason, idx) => (
                      <li key={idx} className="flex items-start">
                        <X className="w-5 h-5 text-destructive mr-3 mt-0.5 flex-shrink-0" />
                        <span className="font-light">{reason}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-light mb-4">When Call-Out-Only Works</h3>
                  <ul className="space-y-3">
                    {[
                      "New buildings with warranty coverage and minimal maintenance needs",
                      "Short-term occupancy where long-term asset care isn't a concern",
                      "Very small estates with simple, modern systems",
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
                <h3 className="text-2xl font-light mb-4">Ready for a Planned Approach?</h3>
                <p className="text-muted-foreground font-light mb-6 max-w-2xl mx-auto">
                  We can show you the total cost comparison for your estate — often the numbers speak for themselves.
                </p>
                <Button size="lg" asChild>
                  <Link to="/contact">Request Cost Comparison</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default EntireFMvsCallOutOnly;