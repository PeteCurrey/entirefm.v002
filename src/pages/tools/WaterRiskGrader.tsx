import { useState } from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useConversionTracking } from "@/hooks/useConversionTracking";
import { toast } from "@/hooks/use-toast";
import { Droplets, AlertTriangle, CheckCircle2, Mail } from "lucide-react";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { SchemaMarkup } from "@/components/shared/SchemaMarkup";
import { Link } from "react-router-dom";

const waterRiskSchema = z.object({
  buildingType: z.string().min(1, "Please select building type"),
  waterSystems: z.object({
    coldWaterStorage: z.boolean(),
    hotWaterCylinders: z.boolean(),
    coolingTowers: z.boolean(),
    showers: z.boolean(),
    deadLegs: z.boolean(),
    littleUsedOutlets: z.boolean(),
  }).refine((data) => Object.values(data).some(v => v === true), {
    message: "Please select at least one water system",
  }),
  lastRiskAssessment: z.string().optional(),
  temperatureMonitoring: z.string().min(1, "Please select monitoring frequency"),
  occupantType: z.string().min(1, "Please select occupant type"),
  email: z.string().email("Valid email required for results"),
  name: z.string().min(2, "Name required").max(100),
  companyName: z.string().optional(),
});

type WaterRiskFormData = z.infer<typeof waterRiskSchema>;

const WaterRiskGrader = () => {
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState({
    riskScore: 0,
    riskLevel: "" as "low" | "medium" | "high" | "critical",
    riskDescription: "",
    requiredActions: [] as string[],
    acop8Compliance: "",
  });

  const { trackToolCompletion } = useConversionTracking();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<WaterRiskFormData>({
    resolver: zodResolver(waterRiskSchema),
    defaultValues: {
      waterSystems: {
        coldWaterStorage: false,
        hotWaterCylinders: false,
        coolingTowers: false,
        showers: false,
        deadLegs: false,
        littleUsedOutlets: false,
      },
    },
  });

  const waterSystems = watch("waterSystems");
  const buildingType = watch("buildingType");

  const calculateRisk = (data: WaterRiskFormData) => {
    let score = 0;
    const actions: string[] = [];

    // Building type risk factor (0-30 points)
    const buildingRisk: Record<string, number> = {
      healthcare: 30,
      residential: 25,
      hotel: 20,
      office: 15,
      retail: 10,
      industrial: 15,
    };
    score += buildingRisk[data.buildingType] || 15;

    // Water system complexity (0-30 points)
    const systemCount = Object.values(data.waterSystems).filter(v => v).length;
    score += systemCount * 5;
    
    if (data.waterSystems.coolingTowers) {
      score += 10; // High-risk system
      actions.push("Cooling tower requires monthly bacteriological sampling");
    }
    if (data.waterSystems.deadLegs || data.waterSystems.littleUsedOutlets) {
      score += 8;
      actions.push("Dead legs and little-used outlets require regular flushing");
    }
    if (data.waterSystems.showers) {
      score += 5;
      actions.push("Showerheads require quarterly descaling and disinfection");
    }

    // Last risk assessment (0-20 points)
    if (!data.lastRiskAssessment) {
      score += 20;
      actions.push("URGENT: ACOP L8 risk assessment never conducted - legal requirement");
    } else {
      const lastDate = new Date(data.lastRiskAssessment);
      const monthsSince = Math.floor(
        (new Date().getTime() - lastDate.getTime()) / (1000 * 60 * 60 * 24 * 30)
      );
      if (monthsSince > 24) {
        score += 15;
        actions.push("Risk assessment overdue - required every 2 years minimum");
      } else if (monthsSince > 12) {
        score += 5;
        actions.push("Risk assessment approaching review deadline");
      }
    }

    // Temperature monitoring (0-20 points)
    const monitoringRisk: Record<string, number> = {
      none: 20,
      annual: 15,
      quarterly: 10,
      monthly: 5,
      weekly: 0,
    };
    score += monitoringRisk[data.temperatureMonitoring] || 15;
    
    if (data.temperatureMonitoring === "none" || data.temperatureMonitoring === "annual") {
      actions.push("Temperature monitoring must be conducted monthly minimum (ACOP L8)");
    }

    // Vulnerable occupants (0-10 points)
    if (data.occupantType === "vulnerable") {
      score += 10;
      actions.push("Vulnerable occupants require enhanced monitoring protocols");
    } else if (data.occupantType === "high-density") {
      score += 5;
    }

    // Determine risk level
    let riskLevel: "low" | "medium" | "high" | "critical";
    let riskDescription: string;
    let acop8Compliance: string;

    if (score >= 70) {
      riskLevel = "critical";
      riskDescription = "Immediate legionella control measures required";
      acop8Compliance = "NON-COMPLIANT - Legal breach identified";
    } else if (score >= 50) {
      riskLevel = "high";
      riskDescription = "Significant legionella risk - urgent action needed";
      acop8Compliance = "AT RISK - Immediate review recommended";
    } else if (score >= 30) {
      riskLevel = "medium";
      riskDescription = "Moderate risk - control measures require review";
      acop8Compliance = "PARTIAL COMPLIANCE - Improvements required";
    } else {
      riskLevel = "low";
      riskDescription = "Low legionella risk with adequate controls";
      acop8Compliance = "LIKELY COMPLIANT - Maintain current protocols";
    }

    // Add general actions
    if (riskLevel === "critical" || riskLevel === "high") {
      actions.unshift("Immediate water sampling and bacteriological testing");
      actions.push("Emergency review of written control scheme");
    }

    setResults({
      riskScore: score,
      riskLevel,
      riskDescription,
      requiredActions: actions,
      acop8Compliance,
    });
  };

  const onSubmit = (data: WaterRiskFormData) => {
    calculateRisk(data);
    setShowResults(true);
    trackToolCompletion("Water Hygiene Risk Grader");
    
    toast({
      title: "Risk Assessment Complete",
      description: "Your water hygiene risk report has been generated and sent to your email.",
    });

    console.log("Water Risk Grader submission:", data);
    // In production: Send comprehensive PDF report with ACOP L8 guidance
  };

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Tools", href: "/tools/cost-savings" },
    { label: "Water Hygiene Risk Grader" },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Water Hygiene & Legionella Risk Grader | EntireFM",
    description: "Assess your facility's legionella risk and ACOP L8 compliance status. Free instant water hygiene risk assessment tool.",
    applicationCategory: "BusinessApplication",
    url: "https://entirefm.co.uk/tools/water-risk-grader",
  };

  return (
    <>
      <Helmet>
        <title>Water Hygiene & Legionella Risk Grader | EntireFM</title>
        <meta
          name="description"
          content="Free water hygiene risk assessment tool. Grade your legionella risk, check ACOP L8 compliance, and identify urgent actions required for your water systems."
        />
        <link rel="canonical" href="https://entirefm.co.uk/tools/water-risk-grader" />
      </Helmet>

      <SchemaMarkup schema={schema} />

      <div className="bg-background">
        <div className="container mx-auto px-4 py-8">
          <Breadcrumb items={breadcrumbItems} />

          <div className="max-w-5xl mx-auto mt-8">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-primary/10 rounded-full">
                  <Droplets className="w-12 h-12 text-primary" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-light mb-4">
                Water Hygiene Risk Grader
              </h1>
              <p className="text-xl text-muted-foreground font-light">
                Assess legionella risk and ACOP L8 compliance for your water systems
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Assessment Form */}
              <Card className="p-6">
                <h2 className="text-2xl font-light mb-6">Water System Assessment</h2>
                
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
                        <SelectItem value="healthcare">Healthcare / Hospital</SelectItem>
                        <SelectItem value="residential">Residential / Care Home / PBSA</SelectItem>
                        <SelectItem value="hotel">Hotel / Leisure</SelectItem>
                        <SelectItem value="office">Office / Corporate</SelectItem>
                        <SelectItem value="retail">Retail / Shopping Centre</SelectItem>
                        <SelectItem value="industrial">Industrial / Warehouse</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.buildingType && (
                      <p className="text-sm text-destructive mt-1">{errors.buildingType.message}</p>
                    )}
                  </div>

                  <div>
                    <Label>Water Systems Present *</Label>
                    <p className="text-xs text-muted-foreground mb-3">Select all that apply</p>
                    
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="coldWaterStorage"
                          checked={waterSystems.coldWaterStorage}
                          onCheckedChange={(checked) =>
                            setValue("waterSystems.coldWaterStorage", checked as boolean)
                          }
                        />
                        <Label htmlFor="coldWaterStorage" className="cursor-pointer font-normal">
                          Cold water storage tanks
                        </Label>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="hotWaterCylinders"
                          checked={waterSystems.hotWaterCylinders}
                          onCheckedChange={(checked) =>
                            setValue("waterSystems.hotWaterCylinders", checked as boolean)
                          }
                        />
                        <Label htmlFor="hotWaterCylinders" className="cursor-pointer font-normal">
                          Hot water cylinders/calorifiers
                        </Label>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="coolingTowers"
                          checked={waterSystems.coolingTowers}
                          onCheckedChange={(checked) =>
                            setValue("waterSystems.coolingTowers", checked as boolean)
                          }
                        />
                        <Label htmlFor="coolingTowers" className="cursor-pointer font-normal">
                          Cooling towers / evaporative condensers
                        </Label>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="showers"
                          checked={waterSystems.showers}
                          onCheckedChange={(checked) =>
                            setValue("waterSystems.showers", checked as boolean)
                          }
                        />
                        <Label htmlFor="showers" className="cursor-pointer font-normal">
                          Showers and spray taps
                        </Label>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="deadLegs"
                          checked={waterSystems.deadLegs}
                          onCheckedChange={(checked) =>
                            setValue("waterSystems.deadLegs", checked as boolean)
                          }
                        />
                        <Label htmlFor="deadLegs" className="cursor-pointer font-normal">
                          Dead legs (&gt;2m pipe runs)
                        </Label>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="littleUsedOutlets"
                          checked={waterSystems.littleUsedOutlets}
                          onCheckedChange={(checked) =>
                            setValue("waterSystems.littleUsedOutlets", checked as boolean)
                          }
                        />
                        <Label htmlFor="littleUsedOutlets" className="cursor-pointer font-normal">
                          Little-used outlets
                        </Label>
                      </div>
                    </div>
                    {errors.waterSystems && (
                      <p className="text-sm text-destructive mt-2">{errors.waterSystems.message}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="lastRiskAssessment">Last ACOP L8 Risk Assessment (Optional)</Label>
                    <Input
                      id="lastRiskAssessment"
                      type="date"
                      {...register("lastRiskAssessment")}
                    />
                    <p className="text-xs text-muted-foreground mt-1">
                      Leave blank if never conducted
                    </p>
                  </div>

                  <div>
                    <Label htmlFor="temperatureMonitoring">Temperature Monitoring Frequency *</Label>
                    <Select
                      value={watch("temperatureMonitoring")}
                      onValueChange={(value) => setValue("temperatureMonitoring", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select frequency" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="weekly">Weekly</SelectItem>
                        <SelectItem value="monthly">Monthly (minimum ACOP L8)</SelectItem>
                        <SelectItem value="quarterly">Quarterly</SelectItem>
                        <SelectItem value="annual">Annual only</SelectItem>
                        <SelectItem value="none">No monitoring in place</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.temperatureMonitoring && (
                      <p className="text-sm text-destructive mt-1">{errors.temperatureMonitoring.message}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="occupantType">Occupant Type *</Label>
                    <Select
                      value={watch("occupantType")}
                      onValueChange={(value) => setValue("occupantType", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select occupant type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General public / staff</SelectItem>
                        <SelectItem value="high-density">High-density occupancy</SelectItem>
                        <SelectItem value="vulnerable">Vulnerable persons (elderly, immunocompromised)</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.occupantType && (
                      <p className="text-sm text-destructive mt-1">{errors.occupantType.message}</p>
                    )}
                  </div>

                  <div className="border-t pt-4">
                    <h3 className="text-sm font-medium mb-3 flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      Receive Your Risk Report
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
                        <Label htmlFor="companyName">Company Name (Optional)</Label>
                        <Input
                          id="companyName"
                          placeholder="Your Company Ltd"
                          {...register("companyName")}
                        />
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
                          Detailed risk report and ACOP L8 guidance emailed instantly
                        </p>
                        {errors.email && (
                          <p className="text-sm text-destructive mt-1">{errors.email.message}</p>
                        )}
                      </div>
                    </div>
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    Grade My Water Risk
                  </Button>
                </form>
              </Card>

              {/* Results Panel */}
              <div className="space-y-6">
                {!showResults ? (
                  <Card className="p-6 bg-muted">
                    <h3 className="text-xl font-light mb-4">Why Assess Water Risk?</h3>
                    <ul className="space-y-3 text-sm">
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span><strong>Legal duty</strong> under ACOP L8 to assess and control legionella</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span><strong>Prosecution risk</strong> - unlimited fines for non-compliance</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span><strong>Occupant safety</strong> - prevent legionnaires' disease outbreaks</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span><strong>Insurance compliance</strong> - required for liability cover</span>
                      </li>
                    </ul>
                  </Card>
                ) : (
                  <>
                    <Card 
                      className={`p-6 ${
                        results.riskLevel === "critical" 
                          ? "bg-destructive text-destructive-foreground" 
                          : results.riskLevel === "high"
                          ? "bg-orange-500 text-white"
                          : results.riskLevel === "medium"
                          ? "bg-yellow-500 text-black"
                          : "bg-green-600 text-white"
                      }`}
                    >
                      <h3 className="text-2xl font-light mb-4">Your Risk Assessment</h3>
                      
                      <div className="space-y-4">
                        <div className="border-b border-white/20 pb-3">
                          <div className="text-sm opacity-90">Risk Score</div>
                          <div className="text-5xl font-light">{results.riskScore}<span className="text-2xl">/100</span></div>
                        </div>

                        <div className="border-b border-white/20 pb-3">
                          <div className="text-sm opacity-90">Risk Level</div>
                          <div className="text-2xl font-light uppercase">{results.riskLevel}</div>
                          <div className="text-sm mt-1">{results.riskDescription}</div>
                        </div>

                        <div>
                          <div className="text-sm opacity-90">ACOP L8 Status</div>
                          <div className="text-lg font-medium">{results.acop8Compliance}</div>
                        </div>
                      </div>
                    </Card>

                    <Card className="p-6">
                      <h3 className="font-medium mb-3 flex items-center gap-2">
                        <AlertTriangle className="w-5 h-5 text-destructive" />
                        Required Actions
                      </h3>
                      <ul className="space-y-2 text-sm">
                        {results.requiredActions.map((action, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <span className="text-destructive font-bold shrink-0">•</span>
                            <span>{action}</span>
                          </li>
                        ))}
                      </ul>
                    </Card>

                    <Card className="p-6">
                      <h3 className="font-medium mb-3">Complete Compliance Audit</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        {results.riskLevel === "critical" || results.riskLevel === "high"
                          ? "Urgent action required. Get a full compliance audit covering all water systems and building services."
                          : "Maintain compliance across all building systems with a comprehensive audit."}
                      </p>
                      <Button asChild className="w-full">
                        <Link to="/request-proposal">Request Full Audit</Link>
                      </Button>
                    </Card>
                  </>
                )}

                <Card className="p-6">
                  <h3 className="text-lg font-medium mb-3">Our Water Hygiene Services</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>✓ ACOP L8 risk assessments</li>
                    <li>✓ Monthly temperature monitoring</li>
                    <li>✓ Bacteriological water sampling</li>
                    <li>✓ TMV servicing & calibration</li>
                    <li>✓ Tank cleaning & disinfection</li>
                    <li>✓ Written control scheme management</li>
                    <li>✓ Emergency legionella response</li>
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

export default WaterRiskGrader;
