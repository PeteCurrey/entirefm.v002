import { useState } from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useConversionTracking } from "@/hooks/useConversionTracking";
import { useToolAnalytics, useToolPageView } from "@/hooks/useToolAnalytics";
import { ToolHero } from "@/components/shared/ToolHero";
import { Calculator, AlertTriangle, TrendingUp, Shield, Mail, ClipboardList, Settings, BarChart3 } from "lucide-react";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { SchemaMarkup } from "@/components/shared/SchemaMarkup";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ContentSection from "@/components/shared/ContentSection";
import CTASection from "@/components/shared/CTASection";

const calculatorSchema = z.object({
  buildingType: z.string().min(1, "Please select building type"),
  assetCount: z.string().min(1, "Please enter asset count"),
  downtimeCost: z.string().min(1, "Please enter hourly downtime cost"),
  email: z.string().email("Valid email required for results"),
  name: z.string().min(2, "Name required").max(100)
});
type CalculatorFormData = z.infer<typeof calculatorSchema>;

const PPMCalculator = () => {
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState({
    annualRisk: 0,
    maintenanceCost: 0,
    savings: 0,
    roi: 0
  });
  const { trackProposalRequest } = useConversionTracking();
  const { trackToolComplete, trackToolStart } = useToolAnalytics();
  useToolPageView("PPM Calculator");
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors }
  } = useForm<CalculatorFormData>({
    resolver: zodResolver(calculatorSchema)
  });
  const buildingType = watch("buildingType");

  const calculateResults = (data: CalculatorFormData) => {
    const assetCount = parseInt(data.assetCount);
    const hourlyCost = parseFloat(data.downtimeCost);
    const riskMultipliers: Record<string, number> = {
      office: 2.5, retail: 4.0, industrial: 5.5, healthcare: 6.0,
      pbsa: 3.5, hotel: 4.5, datacenter: 8.0
    };
    const multiplier = riskMultipliers[data.buildingType] || 3.0;
    const avgDowntimeHours = assetCount * multiplier;
    const annualRisk = avgDowntimeHours * hourlyCost;
    const costPerAsset = data.buildingType === "datacenter" ? 300 : data.buildingType === "healthcare" ? 250 : data.buildingType === "industrial" ? 200 : 180;
    const maintenanceCost = assetCount * costPerAsset;
    const preventedDowntime = avgDowntimeHours * 0.8;
    const preventedCost = preventedDowntime * hourlyCost;
    const savings = preventedCost - maintenanceCost;
    const roi = savings / maintenanceCost * 100;
    setResults({
      annualRisk: Math.round(annualRisk),
      maintenanceCost: Math.round(maintenanceCost),
      savings: Math.round(savings),
      roi: Math.round(roi)
    });
  };

  const onSubmit = (data: CalculatorFormData) => {
    trackToolStart("PPM Calculator", { buildingType: data.buildingType });
    calculateResults(data);
    setShowResults(true);
    trackProposalRequest();
    trackToolComplete("PPM Calculator", { roi: results.roi });
    console.log("PPM Calculator submission:", data);
  };

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Tools", href: "/tools/cost-savings" },
    { label: "PPM Cost Calculator" }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "PPM Cost & Risk Calculator | EntireFM",
    description: "Calculate the financial risk of equipment downtime and ROI of planned preventative maintenance for your facility.",
    applicationCategory: "FinanceApplication",
    url: "https://entirefm.com/tools/ppm-calculator"
  };

  return (
    <>
      <Helmet>
        <title>PPM Cost & Risk Calculator | EntireFM</title>
        <meta name="description" content="Calculate the financial risk of equipment downtime and the ROI of implementing a planned preventative maintenance program. Free tool with instant results." />
        <link rel="canonical" href="https://entirefm.co.uk/tools/ppm-calculator" />
      </Helmet>

      <SchemaMarkup schema={schema} />

      <ToolHero
        icon={Calculator}
        title="PPM Cost & Risk Calculator"
        description="Estimate your facility's reactive maintenance risk exposure and calculate the potential ROI of planned preventative maintenance"
        stats={[
          { value: "40%", label: "Avg Cost Reduction" },
          { value: "60%", label: "Downtime Prevention" },
          { value: "5x", label: "Asset Lifespan" },
          { value: "90s", label: "Takes Only" }
        ]}
      />

      <main>
        {/* Introduction Section */}
        <ContentSection
          title="What Is Planned Preventative Maintenance?"
          subtitle="Understanding the financial case for moving from reactive to planned maintenance."
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
                  Planned Preventative Maintenance (PPM) is a scheduled approach to maintaining building assets — including HVAC, electrical systems, fire safety equipment, and plumbing — before they fail. It replaces the costly cycle of reactive call-outs with structured inspections and servicing.
                </p>
                <p>
                  Without a PPM programme, facilities typically experience 3–5x higher maintenance costs due to emergency repairs, unplanned downtime, and accelerated asset degradation.
                </p>
              </div>
              <div>
                <p className="mb-4">
                  This calculator helps facilities managers, property directors, and estates teams estimate the potential financial impact of implementing a PPM strategy tailored to their building type and asset portfolio.
                </p>
                <p>
                  Simply enter your facility details below to receive an indicative cost-benefit analysis comparing your current reactive spend against a structured maintenance programme.
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
              { icon: ClipboardList, title: "1. Enter Details", desc: "Tell us about your building type, asset count, and downtime costs" },
              { icon: Settings, title: "2. We Calculate", desc: "Our model estimates risk exposure and potential PPM savings" },
              { icon: BarChart3, title: "3. Review Results", desc: "See your indicative ROI and next steps for implementation" },
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

        {/* Calculator Section */}
        <ContentSection variant="gradient">
          <Breadcrumb items={breadcrumbItems} className="mb-8" />

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Calculator Form */}
              <Card className="p-6">
                <h2 className="text-2xl font-light mb-6">Your Facility Details</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div>
                    <Label htmlFor="buildingType">Building Type *</Label>
                    <Select value={buildingType} onValueChange={value => setValue("buildingType", value)}>
                      <SelectTrigger><SelectValue placeholder="Select building type" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="office">Office / Corporate</SelectItem>
                        <SelectItem value="retail">Retail / Shopping Centre</SelectItem>
                        <SelectItem value="industrial">Industrial / Warehouse</SelectItem>
                        <SelectItem value="healthcare">Healthcare / Hospital</SelectItem>
                        <SelectItem value="pbsa">PBSA / Student Housing</SelectItem>
                        <SelectItem value="hotel">Hotel / Leisure</SelectItem>
                        <SelectItem value="datacenter">Data Centre / Mission Critical</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.buildingType && <p className="text-sm text-destructive mt-1">{errors.buildingType.message}</p>}
                  </div>

                  <div>
                    <Label htmlFor="assetCount">Number of Critical Assets *</Label>
                    <Input id="assetCount" type="number" placeholder="e.g., 45" {...register("assetCount")} />
                    <p className="text-xs text-muted-foreground mt-1">Include: HVAC units, boilers, pumps, fire systems, lifts, generators</p>
                    {errors.assetCount && <p className="text-sm text-destructive mt-1">{errors.assetCount.message}</p>}
                  </div>

                  <div>
                    <Label htmlFor="downtimeCost">Hourly Cost of Downtime (£) *</Label>
                    <Input id="downtimeCost" type="number" placeholder="e.g., 500" {...register("downtimeCost")} />
                    <p className="text-xs text-muted-foreground mt-1">Lost productivity, revenue, comfort complaints, emergency call-outs</p>
                    {errors.downtimeCost && <p className="text-sm text-destructive mt-1">{errors.downtimeCost.message}</p>}
                  </div>

                  <div className="border-t pt-4">
                    <h3 className="text-sm font-medium mb-3 flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      Get Your Results
                    </h3>
                    <div className="space-y-3">
                      <div>
                        <Label htmlFor="name">Your Name *</Label>
                        <Input id="name" placeholder="John Smith" {...register("name")} />
                        {errors.name && <p className="text-sm text-destructive mt-1">{errors.name.message}</p>}
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input id="email" type="email" placeholder="john@company.com" {...register("email")} />
                        {errors.email && <p className="text-sm text-destructive mt-1">{errors.email.message}</p>}
                      </div>
                    </div>
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    Calculate My Risk & ROI
                  </Button>
                </form>
              </Card>

              {/* Results Panel */}
              <div className="space-y-6">
                {!showResults ? (
                  <Card className="p-6 bg-muted">
                    <h3 className="text-xl font-light mb-4">Why Calculate PPM ROI?</h3>
                    <ul className="space-y-3 text-sm">
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span><strong>Reactive costs</strong> are typically 3-5x higher than planned maintenance</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <TrendingUp className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span><strong>Asset lifespan</strong> can extend 30-50% with regular PPM</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Shield className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span><strong>Compliance risks</strong> are reduced through scheduled testing</span>
                      </li>
                    </ul>
                  </Card>
                ) : (
                  <>
                    <Card className="p-6 bg-primary text-primary-foreground">
                      <h3 className="text-2xl font-light mb-4">Your Indicative Results</h3>
                      <div className="space-y-4">
                        <div className="border-b border-primary-foreground/20 pb-3">
                          <div className="text-sm opacity-90">Estimated Annual Risk Without PPM</div>
                          <div className="text-3xl font-light">£{results.annualRisk.toLocaleString()}</div>
                        </div>
                        <div className="border-b border-primary-foreground/20 pb-3">
                          <div className="text-sm opacity-90">Estimated PPM Investment</div>
                          <div className="text-3xl font-light">£{results.maintenanceCost.toLocaleString()}</div>
                          <div className="text-xs opacity-75">per year</div>
                        </div>
                        <div className="border-b border-primary-foreground/20 pb-3">
                          <div className="text-sm opacity-90">Projected Annual Savings</div>
                          <div className="text-3xl font-light">£{results.savings.toLocaleString()}</div>
                        </div>
                        <div>
                          <div className="text-sm opacity-90">Indicative Return on Investment</div>
                          <div className="text-4xl font-light">{results.roi}%</div>
                        </div>
                      </div>
                      <p className="text-xs opacity-75 mt-4 border-t border-primary-foreground/20 pt-3">
                        These figures are indicative estimates based on industry benchmarks and may vary depending on your specific circumstances.
                      </p>
                    </Card>

                    <Card className="p-6">
                      <h3 className="font-medium mb-3">What's Next?</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Get a comprehensive audit of your maintenance program with a tailored strategy and costed plan.
                      </p>
                      <Button asChild className="w-full">
                        <Link to="/request-proposal">Request Full Audit</Link>
                      </Button>
                    </Card>
                  </>
                )}

                <Card className="p-6">
                  <h3 className="text-lg font-medium mb-3">Included in PPM Programs</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>✓ Scheduled statutory inspections</li>
                    <li>✓ Asset condition monitoring</li>
                    <li>✓ Priority-based remedials</li>
                    <li>✓ Compliance logging & certificates</li>
                    <li>✓ Performance trend analysis</li>
                    <li>✓ Emergency response cover</li>
                  </ul>
                </Card>
              </div>
            </div>
          </div>
        </ContentSection>

        <CTASection
          title="Ready to Build a Smarter Maintenance Strategy?"
          description="Our team can draft a custom PPM strategy with costed outcomes and an implementation timeline tailored to your estate."
          primaryLabel="Request a PPM Strategy"
          primaryHref="/request-proposal"
          secondaryLabel="Learn About Our PPM Service"
          secondaryHref="/services/ppm"
          variant="gradient"
        />
      </main>
    </>
  );
};

export default PPMCalculator;
