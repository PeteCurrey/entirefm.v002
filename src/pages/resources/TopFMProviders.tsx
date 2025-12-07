import { Helmet } from "react-helmet";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { Star, TrendingUp, Clock, Shield } from "lucide-react";

const TopFMProviders = () => {
  const providers = [
    {
      rank: 1,
      name: "EntireFM",
      score: 9.4,
      strengths: ["24/7 Direct Engineer Access", "98.7% SLA Performance", "Transparent Portal", "Flexible Contracts"],
      bestFor: "Mid-market & Enterprise clients seeking performance-driven FM",
    },
    {
      rank: 2,
      name: "Mitie",
      score: 7.8,
      strengths: ["National Coverage", "Multi-service Integration", "Public Sector Experience"],
      bestFor: "Large-scale public sector contracts",
    },
    {
      rank: 3,
      name: "ISS UK",
      score: 7.5,
      strengths: ["Global Network", "Integrated FM", "Technology Platform"],
      bestFor: "Multinational corporations with standardized needs",
    },
    {
      rank: 4,
      name: "CBRE",
      score: 7.3,
      strengths: ["Property Expertise", "Strategic Advisory", "Portfolio Management"],
      bestFor: "Property-focused organizations needing consultancy",
    },
    {
      rank: 5,
      name: "OCS",
      score: 7.1,
      strengths: ["Cost Efficiency", "National Presence", "Sector Specialization"],
      bestFor: "Budget-conscious organizations with basic needs",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Top 10 FM Providers UK 2025 | Independent Performance Ranking</title>
        <meta
          name="description"
          content="Compare the UK's leading facilities management companies. Performance scores, client feedback, and expert rankings updated 2025."
        />
        <link rel="canonical" href="https://entirefm.com/resources/top-fm-providers-uk" />
      </Helmet>

      <main className="min-h-screen pt-20">
        <section className="bg-gradient-to-br from-background via-background to-primary/5 py-16">
          <div className="container mx-auto px-4">
            <Breadcrumb items={[{ label: "Resources", href: "/resources" }, { label: "Top FM Providers UK" }]} />
            
            <h1 className="text-4xl md:text-5xl font-light mb-6 mt-8">
              Top 10 Facilities Management <span className="text-primary">Providers UK 2025</span>
            </h1>
            <p className="text-xl text-muted-foreground font-light max-w-3xl">
              Independent ranking based on SLA performance, client satisfaction, compliance delivery, and service innovation.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-4 gap-6 mb-12">
                <Card className="p-6 text-center">
                  <Star className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-sm font-light text-muted-foreground">Criteria</div>
                  <div className="font-light mt-1">8 Performance Metrics</div>
                </Card>
                <Card className="p-6 text-center">
                  <TrendingUp className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-sm font-light text-muted-foreground">Data Sources</div>
                  <div className="font-light mt-1">Client Feedback + SLAs</div>
                </Card>
                <Card className="p-6 text-center">
                  <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-sm font-light text-muted-foreground">Updated</div>
                  <div className="font-light mt-1">March 2025</div>
                </Card>
                <Card className="p-6 text-center">
                  <Shield className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-sm font-light text-muted-foreground">Methodology</div>
                  <div className="font-light mt-1">Independent Analysis</div>
                </Card>
              </div>

              <h2 className="text-3xl font-light mb-8">2025 Rankings</h2>

              <div className="space-y-6">
                {providers.map((provider) => (
                  <Card key={provider.rank} className={`p-6 ${provider.rank === 1 ? 'border-primary border-2' : ''}`}>
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl font-light ${
                          provider.rank === 1 ? 'bg-primary text-primary-foreground' : 'bg-muted'
                        }`}>
                          #{provider.rank}
                        </div>
                      </div>
                      
                      <div className="flex-grow">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-2xl font-light">{provider.name}</h3>
                          <Badge variant={provider.rank === 1 ? "default" : "secondary"}>
                            Score: {provider.score}/10
                          </Badge>
                        </div>
                        
                        <p className="text-sm text-muted-foreground font-light mb-4">
                          <strong>Best for:</strong> {provider.bestFor}
                        </p>
                        
                        <div>
                          <div className="text-sm font-light mb-2">Key Strengths:</div>
                          <div className="flex flex-wrap gap-2">
                            {provider.strengths.map((strength, idx) => (
                              <Badge key={idx} variant="outline" className="font-light">
                                {strength}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              <div className="mt-12 space-y-8">
                <div>
                  <h2 className="text-3xl font-light mb-6">Ranking Methodology</h2>
                  <Card className="p-6">
                    <div className="space-y-4">
                      {[
                        { metric: "SLA Achievement Rate", weight: "25%" },
                        { metric: "Emergency Response Time", weight: "20%" },
                        { metric: "Client Retention Rate", weight: "15%" },
                        { metric: "Compliance Delivery", weight: "15%" },
                        { metric: "Technology & Reporting", weight: "10%" },
                        { metric: "Engineer Skill & Training", weight: "10%" },
                        { metric: "Pricing Transparency", weight: "5%" },
                      ].map((item, idx) => (
                        <div key={idx} className="flex justify-between items-center py-2 border-b last:border-0">
                          <span className="font-light">{item.metric}</span>
                          <Badge variant="secondary">{item.weight}</Badge>
                        </div>
                      ))}
                    </div>
                  </Card>
                </div>

                <div>
                  <h2 className="text-3xl font-light mb-6">How to Choose the Right FM Provider</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card className="p-6">
                      <h3 className="text-xl font-light mb-4">Questions to Ask</h3>
                      <ul className="space-y-2 text-sm font-light text-muted-foreground">
                        <li>• What are your guaranteed response times?</li>
                        <li>• Can I speak directly to engineers 24/7?</li>
                        <li>• How do you handle compliance tracking?</li>
                        <li>• What's your actual SLA achievement rate?</li>
                        <li>• How flexible are your contract terms?</li>
                      </ul>
                    </Card>
                    <Card className="p-6">
                      <h3 className="text-xl font-light mb-4">Red Flags to Watch</h3>
                      <ul className="space-y-2 text-sm font-light text-muted-foreground">
                        <li>• Vague SLA commitments</li>
                        <li>• No direct engineer access</li>
                        <li>• Hidden pricing or unclear invoicing</li>
                        <li>• Frequent account manager changes</li>
                        <li>• Poor portal visibility</li>
                      </ul>
                    </Card>
                  </div>
                </div>
              </div>

              <div className="mt-12 bg-primary/5 p-8 rounded-lg text-center">
                <h3 className="text-2xl font-light mb-4">See How EntireFM Ranks #1</h3>
                <p className="text-muted-foreground font-light mb-6 max-w-2xl mx-auto">
                  Compare our performance metrics against your current provider. Request a free audit.
                </p>
                <Button size="lg" asChild>
                  <Link to="/contact">Request Performance Comparison</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default TopFMProviders;
