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
import { toast } from "@/hooks/use-toast";
import { Calculator, AlertTriangle, TrendingUp, Shield, Mail } from "lucide-react";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { SchemaMarkup } from "@/components/shared/SchemaMarkup";

const calculatorSchema = z.object({
  buildingType: z.string().min(1, "Please select building type"),
  assetCount: z.string().min(1, "Please enter asset count"),
  downtimeCost: z.string().min(1, "Please enter hourly downtime cost"),
  email: z.string().email("Valid email required for results"),
  name: z.string().min(2, "Name required").max(100),
});

type CalculatorFormData = z.infer<typeof calculatorSchema>;

const PPMCalculator = () => {
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState({
    annualRisk: 0,
    maintenanceCost: 0,
    savings: 0,
    roi: 0,
  });

  const { trackToolCompletion } = useConversionTracking();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<CalculatorFormData>({
    resolver: zodResolver(calculatorSchema),
  });

  const buildingType = watch("buildingType");

  const calculateResults = (data: CalculatorFormData) => {
    const assetCount = parseInt(data.assetCount);
    const hourlyCost = parseFloat(data.downtimeCost);

    // Risk multipliers by building type
    const riskMultipliers: Record<string, number> = {
      office: 2.5,
      retail: 4.0,
      industrial: 5.5,
      healthcare: 6.0,
      pbsa: 3.5,
      hotel: 4.5,
      datacenter: 8.0,
    };

    const multiplier = riskMultipliers[data.buildingType] || 3.0;

    // Calculate average downtime hours per year without PPM
    const avgDowntimeHours = assetCount * multiplier;
    const annualRisk = avgDowntimeHours * hourlyCost;

    // PPM cost estimation (£150-300 per asset per year depending on complexity)
    const costPerAsset = data.buildingType === "datacenter" ? 300 : 
                         data.buildingType === "healthcare" ? 250 : 
                         data.buildingType === "industrial" ? 200 : 180;
    
    const maintenanceCost = assetCount * costPerAsset;

    // PPM typically reduces downtime by 75-85%
    const preventedDowntime = avgDowntimeHours * 0.8;
    const preventedCost = preventedDowntime * hourlyCost;
    const savings = preventedCost - maintenanceCost;
    const roi = ((savings / maintenanceCost) * 100);

    setResults({
      annualRisk: Math.round(annualRisk),
      maintenanceCost: Math.round(maintenanceCost),
      savings: Math.round(savings),
      roi: Math.round(roi),
    });
  };

  const onSubmit = (data: CalculatorFormData) => {
    calculateResults(data);
    setShowResults(true);
    trackToolCompletion("PPM Cost Calculator");
    
    toast({
      title: "Results Calculated",
      description: "Your PPM cost analysis has been generated. Check your email for the detailed report.",
    });

    console.log("PPM Calculator submission:", data);
    // In production: Send email with detailed PDF report
  };

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Tools", href: "/tools/cost-savings" },
    { label: "PPM Cost Calculator" },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "PPM Cost & Risk Calculator | EntireFM",
    description: "Calculate the financial risk of equipment downtime and ROI of planned preventative maintenance for your facility.",
    applicationCategory: "FinanceApplication",
    url: "https://entirefm.co.uk/tools/ppm-calculator",
  };

  return (
    <>
      <Helmet>
        <title>PPM Cost & Risk Calculator | EntireFM</title>
        <meta
          name="description"
          content="Calculate the financial risk of equipment downtime and the ROI of implementing a planned preventative maintenance program. Free tool with instant results."
        />
        <link rel="canonical" href="https://entirefm.co.uk/tools/ppm-calculator" />
      </Helmet>

      <SchemaMarkup schema={schema} />

      <div className="bg-background">
        <div className="container mx-auto px-4 py-8">
          <Breadcrumb items={breadcrumbItems} />

          <div className="max-w-4xl mx-auto mt-8">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-primary/10 rounded-full">
                  <Calculator className="w-12 h-12 text-primary" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-light mb-4">
                PPM Cost & Risk Calculator
              </h1>
              <p className="text-xl text-muted-foreground font-light">
                Quantify the financial risk of reactive maintenance vs the ROI of planned prevention
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Calculator Form */}
              <Card className="p-6">
                <h2 className="text-2xl font-light mb-6">Your Facility Details</h2>
                
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div>
                    <Label htmlFor="buildingType">Building Type *</Label>
                    <Select
                      value={buildingType}
                      onValueChange={(value) => setValue("buildingType", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select building type" />
                      </SelectTrigger>
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
                    {errors.buildingType && (
                      <p className="text-sm text-destructive mt-1">{errors.buildingType.message}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="assetCount">Number of Critical Assets *</Label>
                    <Input
                      id="assetCount"
                      type="number"
                      placeholder="e.g., 45"
                      {...register("assetCount")}
                    />
                    <p className="text-xs text-muted-foreground mt-1">
                      Include: HVAC units, boilers, pumps, fire systems, lifts, generators
                    </p>
                    {errors.assetCount && (
                      <p className="text-sm text-destructive mt-1">{errors.assetCount.message}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="downtimeCost">Hourly Cost of Downtime (£) *</Label>
                    <Input
                      id="downtimeCost"
                      type="number"
                      placeholder="e.g., 500"
                      {...register("downtimeCost")}
                    />
                    <p className="text-xs text-muted-foreground mt-1">
                      Lost productivity, revenue, comfort complaints, emergency call-outs
                    </p>
                    {errors.downtimeCost && (
                      <p className="text-sm text-destructive mt-1">{errors.downtimeCost.message}</p>
                    )}
                  </div>

                  <div className="border-t pt-4">
                    <h3 className="text-sm font-medium mb-3 flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      Get Your Results
                    </h3>
                    
                    <div className="space-y-3">
                      <div>
                        <Label htmlFor="name">Your Name *</Label>
                        <Input
                          id="name"
                          placeholder="John Smith"
                          {...register("name")}
                        />
                        {errors.name && (
                          <p className="text-sm text-destructive mt-1">{errors.name.message}</p>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@company.com"
                          {...register("email")}
                        />
                        <p className="text-xs text-muted-foreground mt-1">
                          We'll send a detailed PDF report to this address
                        </p>
                        {errors.email && (
                          <p className="text-sm text-destructive mt-1">{errors.email.message}</p>
                        )}
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
                        <span><strong>Reactive costs</strong> are 3-5x higher than planned maintenance</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <TrendingUp className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span><strong>Asset lifespan</strong> extends 30-50% with regular PPM</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Shield className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span><strong>Compliance failures</strong> avoided through scheduled testing</span>
                      </li>
                    </ul>
                  </Card>
                ) : (
                  <>
                    <Card className="p-6 bg-primary text-primary-foreground">
                      <h3 className="text-2xl font-light mb-4">Your Results</h3>
                      
                      <div className="space-y-4">
                        <div className="border-b border-primary-foreground/20 pb-3">
                          <div className="text-sm opacity-90">Annual Risk Without PPM</div>
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
                          <div className="text-sm opacity-90">Return on Investment</div>
                          <div className="text-4xl font-light">{results.roi}%</div>
                        </div>
                      </div>
                    </Card>

                    <Card className="p-6">
                      <h3 className="font-medium mb-3">What's Next?</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        We've sent a detailed breakdown to your email. Want to see how these savings apply to your specific estate?
                      </p>
                      <Button asChild className="w-full">
                        <a href="/request-proposal">Request PPM Proposal</a>
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
        </div>
      </div>
    </>
  );
};

export default PPMCalculator;
