import { useState } from "react";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calculator, TrendingDown, Clock, Shield, DollarSign, ClipboardList, Settings, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { WebApplicationSchema } from "@/components/shared/SchemaMarkup";
import { useConversionTracking } from "@/hooks/useConversionTracking";
import { useToolAnalytics, useToolPageView } from "@/hooks/useToolAnalytics";
import { ToolHero } from "@/components/shared/ToolHero";
import { motion } from "framer-motion";
import ContentSection from "@/components/shared/ContentSection";
import CTASection from "@/components/shared/CTASection";

const CostSavingsCalculator = () => {
  const { trackToolCompletion } = useConversionTracking();
  const { trackToolComplete, trackToolStart } = useToolAnalytics();
  useToolPageView("Cost Savings Calculator");
  const [reactiveSpend, setReactiveSpend] = useState(50000);
  const [estateType, setEstateType] = useState("");
  const [assetAge, setAssetAge] = useState("medium");
  const [downtimeSensitivity, setDowntimeSensitivity] = useState("medium");
  const [showResults, setShowResults] = useState(false);

  const reductionRate = estateType === "logistics" ? 0.40 : estateType === "retail" ? 0.35 : 0.32;
  const annualSavings = Math.round(reactiveSpend * reductionRate);
  const paybackMonths = Math.round((reactiveSpend * 0.15) / (annualSavings / 12));

  const calculateSavings = () => {
    trackToolStart("Cost Savings Calculator", { reactiveSpend, estateType, assetAge, downtimeSensitivity });
    setShowResults(true);
    trackToolCompletion('Cost Savings Calculator');
    trackToolComplete("Cost Savings Calculator", { annualSavings, paybackMonths });
  };

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
        {/* Introduction */}
        <ContentSection
          title="Understanding Reactive vs Preventive Costs"
          subtitle="Most facilities spend significantly more on emergency repairs than they need to. This calculator helps quantify the potential difference."
          centered
        >
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid md:grid-cols-2 gap-8 text-muted-foreground font-light leading-relaxed"
            >
              <div>
                <p className="mb-4">
                  Reactive maintenance — fixing things only when they break — often results in higher costs due to emergency call-out premiums, extended downtime, and cascading failures across connected systems.
                </p>
                <p>
                  A structured preventive maintenance programme can help reduce these costs by catching issues early, extending asset life, and avoiding the disruption of unplanned outages.
                </p>
              </div>
              <div>
                <p className="mb-4">
                  This tool is designed for facilities managers, property directors, and estates teams looking to build the business case for a more proactive approach to building maintenance.
                </p>
                <p>
                  Enter your current reactive spend and estate details below to see an indicative estimate of potential savings and payback timeline.
                </p>
              </div>
            </motion.div>
          </div>
        </ContentSection>

        {/* How It Works */}
        <ContentSection variant="muted">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center"
          >
            {[
              { icon: ClipboardList, title: "1. Enter Your Spend", desc: "Tell us your annual reactive maintenance spend and estate type" },
              { icon: Settings, title: "2. We Model Savings", desc: "Our algorithm estimates savings based on industry benchmarks" },
              { icon: BarChart3, title: "3. See Your Estimate", desc: "Review indicative savings, payback period, and next steps" },
            ].map((step) => (
              <div key={step.title} className="space-y-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <step.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-medium text-foreground">{step.title}</h3>
                <p className="text-sm text-muted-foreground font-light">{step.desc}</p>
              </div>
            ))}
          </motion.div>
        </ContentSection>

        {/* Calculator */}
        <ContentSection variant="gradient">
          <Breadcrumb items={breadcrumbItems} className="mb-8" />

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="w-5 h-5" />
                  Calculate Your Savings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <Label htmlFor="reactive-spend">What's Your Annual Reactive Spend?</Label>
                  <div className="flex items-center gap-4">
                    <span className="text-2xl font-light text-primary">£{reactiveSpend.toLocaleString()}</span>
                  </div>
                  <Slider id="reactive-spend" min={5000} max={2000000} step={5000} value={[reactiveSpend]} onValueChange={(value) => setReactiveSpend(value[0])} className="w-full" />
                  <div className="flex justify-between text-xs text-muted-foreground"><span>£5K</span><span>£2M</span></div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="estate-type">Estate Type</Label>
                  <Select value={estateType} onValueChange={setEstateType}>
                    <SelectTrigger id="estate-type"><SelectValue placeholder="Select your estate type" /></SelectTrigger>
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

                <div className="space-y-2">
                  <Label htmlFor="asset-age">Asset Age</Label>
                  <Select value={assetAge} onValueChange={setAssetAge}>
                    <SelectTrigger id="asset-age"><SelectValue /></SelectTrigger>
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
                    <SelectTrigger id="downtime-sensitivity"><SelectValue /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">Low</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="high">High</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button onClick={calculateSavings} className="w-full" disabled={!estateType}>
                  Calculate My Savings
                </Button>
              </CardContent>
            </Card>

            {showResults && estateType && (
              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-primary">
                    <TrendingDown className="w-5 h-5" />
                    Your Indicative ROI
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
                        <p className="text-sm text-muted-foreground mb-1">Indicative Payback Period</p>
                        <p className="text-2xl font-light text-foreground">&lt; {paybackMonths} months</p>
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

                  <p className="text-xs text-muted-foreground border-t pt-4">
                    These figures are indicative estimates based on industry benchmarks. Actual savings will depend on your specific estate, asset condition, and service requirements.
                  </p>

                  <div className="pt-2 space-y-3">
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
                  <p className="text-muted-foreground">Complete the form to see your potential savings</p>
                </CardContent>
              </Card>
            )}
          </div>
        </ContentSection>

        <CTASection
          title="Ready to Optimise Your Maintenance Spend?"
          description="Our team will draft a custom PPM strategy with costed outcomes and implementation timeline."
          primaryLabel="Request a Costed Plan"
          primaryHref="/contact"
          secondaryLabel="Why Switch to EntireFM"
          secondaryHref="/why-switch"
          variant="gradient"
        />
      </main>
    </>
  );
};

export default CostSavingsCalculator;
