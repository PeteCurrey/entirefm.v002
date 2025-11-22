import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle2, XCircle, ArrowRight, Clock, Shield, TrendingUp, Phone } from "lucide-react";
import { Helmet } from "react-helmet";

const WhySwitch = () => {
  return (
    <>
      <Helmet>
        <title>Why Switch to EntireFM | Stop Chasing, Start Executing</title>
        <meta name="description" content="Tired of excuses? Switch to EntireFM for FM that performs. Fast response times, clear communication, compliance visibility, and genuine accountability." />
      </Helmet>
      
      <div className="min-h-screen pt-20">
        {/* Hero */}
        <section className="py-24 bg-gradient-to-b from-muted/50 to-white">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-6xl font-light mb-6 underline-accent inline-block">
                Tired of Excuses? Change to Execution.
              </h1>
              <p className="text-xl text-muted-foreground font-light leading-relaxed mb-8">
                The most valuable FM provider is the one you never have to chase.
              </p>
              <p className="text-lg text-muted-foreground font-light leading-relaxed">
                Switch to EntireFM and experience FM that performs — not promises.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <Button size="lg" asChild>
                  <Link to="/contact">Get a Switching Proposal</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/resources/switching-provider">Download the Switching Playbook</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Why Most FM Providers Fail */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                Why Most FM Providers Fail
              </h2>
              <p className="text-lg text-muted-foreground font-light leading-relaxed mb-8">
                You've lived this movie. We rewrite the ending.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { icon: Clock, issue: "Slow response times", color: "text-destructive" },
                  { icon: Phone, issue: "Poor communication", color: "text-destructive" },
                  { icon: TrendingUp, issue: "Rising reactive costs", color: "text-destructive" },
                  { icon: Shield, issue: "No compliance visibility", color: "text-destructive" },
                  { icon: XCircle, issue: "Excuses instead of actions", color: "text-destructive" },
                  { icon: XCircle, issue: "No ownership or accountability", color: "text-destructive" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start bg-muted/30 p-4 rounded-lg">
                    <item.icon className={`w-6 h-6 ${item.color} mr-3 mt-1 flex-shrink-0`} />
                    <span className="text-muted-foreground font-light text-lg">{item.issue}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-light mb-6 text-center underline-accent inline-block">
                Why Companies Switch to Us
              </h2>
              <p className="text-lg text-muted-foreground font-light leading-relaxed mb-12 text-center">
                Agile where corporates are slow. Accountable where bureaucrats deflect.
              </p>
              
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <table className="w-full">
                  <thead className="bg-charcoal text-white">
                    <tr>
                      <th className="text-left py-4 px-6 font-light">Incumbent Weakness</th>
                      <th className="text-left py-4 px-6 font-light">Our Response</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        weakness: "\"We're waiting on updates.\"",
                        response: "Live portal + auto-ETAs"
                      },
                      {
                        weakness: "Fire compliance failures",
                        response: "Priority remediation"
                      },
                      {
                        weakness: "Asset downtime",
                        response: "Root-cause elimination"
                      },
                      {
                        weakness: "Budget shocks",
                        response: "Predictable PPM & lifecycle plans"
                      },
                      {
                        weakness: "No ownership",
                        response: "Direct access to leadership"
                      }
                    ].map((row, index) => (
                      <tr key={index} className={index % 2 === 0 ? "bg-muted/30" : "bg-white"}>
                        <td className="py-4 px-6 text-muted-foreground font-light border-r border-border">
                          {row.weakness}
                        </td>
                        <td className="py-4 px-6 text-foreground font-medium">
                          {row.response}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* The Result */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-light mb-8 underline-accent inline-block">
                The Result
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                {[
                  {
                    icon: CheckCircle2,
                    title: "Less Admin",
                    description: "Stop chasing contractors for updates"
                  },
                  {
                    icon: TrendingUp,
                    title: "More Uptime",
                    description: "Assets work. Systems perform."
                  },
                  {
                    icon: Shield,
                    title: "Better Compliance",
                    description: "Audit-ready at all times"
                  },
                  {
                    icon: CheckCircle2,
                    title: "Stronger Reputation",
                    description: "Brand protection through reliable facilities"
                  },
                  {
                    icon: Phone,
                    title: "Clear Communication",
                    description: "Updates without chasing"
                  },
                  {
                    icon: Clock,
                    title: "Leadership Sleeps Easier",
                    description: "Confidence in your FM partner"
                  }
                ].map((result, index) => (
                  <div key={index} className="bg-muted/30 p-6 rounded-lg">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                      <result.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-light mb-2">{result.title}</h3>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed">
                      {result.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-charcoal text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-light mb-6">
              Switch without the stress.
            </h2>
            <p className="text-lg text-gray-300 font-light max-w-2xl mx-auto mb-8">
              We handle the transition so you don't have to. No operational downtime. No compliance gaps.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-charcoal hover:bg-gray-100" asChild>
                <Link to="/contact">Start FM Transition Planning</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-charcoal" asChild>
                <Link to="/resources/switching-provider">
                  Download Switching Playbook <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default WhySwitch;