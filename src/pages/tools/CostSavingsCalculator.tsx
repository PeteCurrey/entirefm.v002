import { useState } from "react";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calculator, TrendingDown, Clock, Shield, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { WebApplicationSchema } from "@/components/shared/SchemaMarkup";
import { useConversionTracking } from "@/hooks/useConversionTracking";
import { useToolAnalytics, useToolPageView } from "@/hooks/useToolAnalytics";
import { ToolHero } from "@/components/shared/ToolHero";

const CostSavingsCalculator = () => {
  const { trackToolCompletion } = useConversionTracking();
  const { trackToolComplete, trackToolStart } = useToolAnalytics();
  useToolPageView("Cost Savings Calculator");
  const [reactiveSpend, setReactiveSpend] = useState(50000);
  const [estateType, setEstateType] = useState("");
  const [assetAge, setAssetAge] = useState("medium");
  const [downtimeSensitivity, setDowntimeSensitivity] = useState("medium");
  const [showResults, setShowResults] = useState(false);

  const calculateSavings = () => {
    trackToolStart("Cost Savings Calculator", { 
      reactiveSpend, 
      estateType, 
      assetAge, 
      downtimeSensitivity 
    });
    setShowResults(true);
    trackToolCompletion('Cost Savings Calculator');
    trackToolComplete("Cost Savings Calculator", { 
      annualSavings, 
      paybackMonths 
    });
  };

  // Calculate savings based on inputs
  const reductionRate = estateType === "logistics" ? 0.40 : estateType === "retail" ? 0.35 : 0.32;
  const annualSavings = Math.round(reactiveSpend * reductionRate);
  const paybackMonths = Math.round((reactiveSpend * 0.15) / (annualSavings / 12));

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Tools", href: "/tools/cost-savings-calculator" },
    { label: "Cost Savings Calculator" }
  ];

  return (
    <>
      <Helmet>
        <title>FM Cost Savings Calculator | EntireFM</title>
        <meta name="description" content="Estimate potential FM savings based on your estate size and spend." />
        <link rel="canonical" href="https://entirefm.com/tools/cost-savings" />
      </Helmet>

      <WebApplicationSchema 
        name="Reactive vs PPM Cost Savings Calculator"
        description="Calculate potential savings by switching from reactive to planned preventive maintenance"
        applicationCategory="UtilityApplication"
      />
      <BreadcrumbSchema items={breadcrumbItems} />

      <ToolHero
        icon={Calculator}
        title="FM Cost Savings Calculator"
        description="Discover potential savings by switching from reactive to planned preventive maintenance"
        stats={[
          { value: "35%", label: "Average Savings" },
          { value: "£50k+", label: "Typical Annual Benefit" },
          { value: "12mo", label: "Average Payback" },
          { value: "Free", label: "No Obligation" }
        ]}
      />

      <main>
        <section className="py-8 bg-background">
          <div className="container mx-auto px-4">
            <Breadcrumb items={breadcrumbItems} />

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Calculator Form */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <DollarSign className="w-5 h-5" />
                    Calculate Your Savings
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Reactive Spend */}
                  <div className="space-y-3">
                    <Label htmlFor="reactive-spend">
                      What's Your Annual Reactive Spend?
                    </Label>
                    <div className="flex items-center gap-4">
                      <span className="text-2xl font-light text-primary">
                        £{reactiveSpend.toLocaleString()}
                      </span>
                    </div>
                    <Slider
                      id="reactive-spend"
                      min={5000}
                      max={2000000}
                      step={5000}
                      value={[reactiveSpend]}
                      onValueChange={(value) => setReactiveSpend(value[0])}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>£5K</span>
                      <span>£2M</span>
                    </div>
                  </div>

                  {/* Estate Type */}
                  <div className="space-y-2">
                    <Label htmlFor="estate-type">Estate Type</Label>
                    <Select value={estateType} onValueChange={setEstateType}>
                      <SelectTrigger id="estate-type">
                        <SelectValue placeholder="Select your estate type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="logistics">Logistics / Industrial</SelectItem>
                        <SelectItem value="retail">Retail / Service Station</SelectItem>
                        <SelectItem value="corporate">Corporate / Office</SelectItem>
                        <SelectItem value="pbsa">PBSA / Residential</SelectItem>
                        <SelectItem value="hospitality">Hospitality</SelectItem>
                        <SelectItem value="healthcare">Healthcare</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Control Variables */}
                  <div className="space-y-2">
                    <Label htmlFor="asset-age">Asset Age</Label>
                    <Select value={assetAge} onValueChange={setAssetAge}>
                      <SelectTrigger id="asset-age">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="new">0-5 years</SelectItem>
                        <SelectItem value="medium">5-15 years</SelectItem>
                        <SelectItem value="old">15+ years</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="downtime-sensitivity">Downtime Sensitivity</Label>
                    <Select value={downtimeSensitivity} onValueChange={setDowntimeSensitivity}>
                      <SelectTrigger id="downtime-sensitivity">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="low">Low</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="high">High</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button 
                    onClick={calculateSavings}
                    className="w-full"
                    disabled={!estateType}
                  >
                    Calculate My Savings
                  </Button>
                </CardContent>
              </Card>

              {/* Results */}
              {showResults && estateType && (
                <Card className="border-primary/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-primary">
                      <TrendingDown className="w-5 h-5" />
                      Your ROI Simulation
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div className="flex justify-between items-start p-4 bg-muted/50 rounded-lg">
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">Expected Reduction in Reactive Events</p>
                          <p className="text-2xl font-light text-foreground">28–45%</p>
                        </div>
                        <TrendingDown className="w-6 h-6 text-primary" />
                      </div>

                      <div className="flex justify-between items-start p-4 bg-muted/50 rounded-lg">
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">Estimated Annual Savings</p>
                          <p className="text-2xl font-light text-primary">
                            £{(annualSavings * 0.85).toLocaleString()} – £{(annualSavings * 1.15).toLocaleString()}
                          </p>
                        </div>
                        <DollarSign className="w-6 h-6 text-primary" />
                      </div>

                      <div className="flex justify-between items-start p-4 bg-muted/50 rounded-lg">
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">Payback Period</p>
                          <p className="text-2xl font-light text-foreground">
                            &lt; {paybackMonths} months
                          </p>
                        </div>
                        <Clock className="w-6 h-6 text-primary" />
                      </div>

                      <div className="flex justify-between items-start p-4 bg-muted/50 rounded-lg">
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">Compliance Risk Reduction</p>
                          <p className="text-2xl font-light text-foreground">High</p>
                        </div>
                        <Shield className="w-6 h-6 text-primary" />
                      </div>
                    </div>

                    <div className="pt-6 space-y-3">
                      <Button asChild className="w-full">
                        <Link to="/contact">Get a Custom PPM Strategy + Costed Plan</Link>
                      </Button>
                      <Button asChild variant="outline" className="w-full">
                        <Link to="/services/ppm">Learn About Our PPM Service</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}

              {!showResults && (
                <Card className="flex items-center justify-center bg-muted/30">
                  <CardContent className="text-center py-12">
                    <Calculator className="w-16 h-16 mx-auto mb-4 text-muted-foreground/50" />
                    <p className="text-muted-foreground">
                      Complete the form to see your potential savings
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </section>

        {/* Secondary CTA */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <h2 className="text-3xl font-light mb-6">Ready to Stop Overpaying?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our team will draft a custom PPM strategy with costed outcomes and implementation timeline.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/contact">Request a PPM Costed Plan</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/why-switch">Why Switch to EntireFM</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default CostSavingsCalculator;
