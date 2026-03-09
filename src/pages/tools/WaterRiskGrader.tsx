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
import { useToolAnalytics, useToolPageView } from "@/hooks/useToolAnalytics";
import { ToolHero } from "@/components/shared/ToolHero";
import { Droplets, AlertTriangle, CheckCircle2, Mail, ClipboardList, Settings, BarChart3 } from "lucide-react";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { SchemaMarkup } from "@/components/shared/SchemaMarkup";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ContentSection from "@/components/shared/ContentSection";
import CTASection from "@/components/shared/CTASection";

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
  const { trackToolComplete, trackToolStart } = useToolAnalytics();
  useToolPageView("Water Hygiene Risk Grader");

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
        coldWaterStorage: false, hotWaterCylinders: false, coolingTowers: false,
        showers: false, deadLegs: false, littleUsedOutlets: false,
      },
    },
  });

  const waterSystems = watch("waterSystems");
  const buildingType = watch("buildingType");

  const calculateRisk = (data: WaterRiskFormData) => {
    let score = 0;
    const actions: string[] = [];

    const buildingRisk: Record<string, number> = {
      healthcare: 30, residential: 25, hotel: 20, office: 15, retail: 10, industrial: 15,
    };
    score += buildingRisk[data.buildingType] || 15;

    const systemCount = Object.values(data.waterSystems).filter(v => v).length;
    score += systemCount * 5;
    if (data.waterSystems.coolingTowers) { score += 10; actions.push("Cooling tower requires monthly bacteriological sampling"); }
    if (data.waterSystems.deadLegs || data.waterSystems.littleUsedOutlets) { score += 8; actions.push("Dead legs and little-used outlets require regular flushing"); }
    if (data.waterSystems.showers) { score += 5; actions.push("Showerheads require quarterly descaling and disinfection"); }

    if (!data.lastRiskAssessment) {
      score += 20;
      actions.push("URGENT: ACOP L8 risk assessment never conducted - legal requirement");
    } else {
      const lastDate = new Date(data.lastRiskAssessment);
      const monthsSince = Math.floor((new Date().getTime() - lastDate.getTime()) / (1000 * 60 * 60 * 24 * 30));
      if (monthsSince > 24) { score += 15; actions.push("Risk assessment overdue - required every 2 years minimum"); }
      else if (monthsSince > 12) { score += 5; actions.push("Risk assessment approaching review deadline"); }
    }

    const monitoringRisk: Record<string, number> = { none: 20, annual: 15, quarterly: 10, monthly: 5, weekly: 0 };
    score += monitoringRisk[data.temperatureMonitoring] || 15;
    if (data.temperatureMonitoring === "none" || data.temperatureMonitoring === "annual") {
      actions.push("Temperature monitoring must be conducted monthly minimum (ACOP L8)");
    }

    if (data.occupantType === "vulnerable") { score += 10; actions.push("Vulnerable occupants require enhanced monitoring protocols"); }
    else if (data.occupantType === "high-density") { score += 5; }

    let riskLevel: "low" | "medium" | "high" | "critical";
    let riskDescription: string;
    let acop8Compliance: string;

    if (score >= 70) { riskLevel = "critical"; riskDescription = "Immediate legionella control measures indicated"; acop8Compliance = "NON-COMPLIANT - Formal assessment recommended"; }
    else if (score >= 50) { riskLevel = "high"; riskDescription = "Significant legionella risk indicators - review recommended"; acop8Compliance = "AT RISK - Immediate review recommended"; }
    else if (score >= 30) { riskLevel = "medium"; riskDescription = "Moderate risk indicators - control measures may need review"; acop8Compliance = "PARTIAL COMPLIANCE - Improvements may be required"; }
    else { riskLevel = "low"; riskDescription = "Low legionella risk indicators with adequate controls"; acop8Compliance = "LIKELY COMPLIANT - Maintain current protocols"; }

    if (riskLevel === "critical" || riskLevel === "high") {
      actions.unshift("Immediate water sampling and bacteriological testing recommended");
      actions.push("Emergency review of written control scheme recommended");
    }

    setResults({ riskScore: score, riskLevel, riskDescription, requiredActions: actions, acop8Compliance });
  };

  const onSubmit = (data: WaterRiskFormData) => {
    trackToolStart("Water Hygiene Risk Grader", { buildingType: data.buildingType });
    calculateRisk(data);
    setShowResults(true);
    trackToolCompletion("Water Hygiene Risk Grader");
    trackToolComplete("Water Hygiene Risk Grader", { riskLevel: results.riskLevel, riskScore: results.riskScore });
    console.log("Water Risk Grader submission:", data);
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
    url: "https://entirefm.com/tools/water-risk-grader",
  };

  return (
    <>
      <Helmet>
        <title>Water Hygiene & Legionella Risk Grader | EntireFM</title>
        <meta name="description" content="Free water hygiene risk assessment tool. Grade your legionella risk, check ACOP L8 compliance, and identify urgent actions required for your water systems." />
        <link rel="canonical" href="https://entirefm.co.uk/tools/water-risk-grader" />
      </Helmet>

      <SchemaMarkup schema={schema} />

      <ToolHero
        icon={Droplets}
        title="Water Hygiene Risk Grader"
        description="Assess your facility's legionella risk and ACOP L8 compliance status with instant analysis"
        stats={[
          { value: "ACOP L8", label: "Compliance Check" },
          { value: "100%", label: "Free Assessment" },
          { value: "2min", label: "Quick Grading" },
          { value: "Instant", label: "Results" }
        ]}
      />

      <main>
        {/* Introduction */}
        <ContentSection
          title="Why Assess Water Hygiene Risk?"
          subtitle="Under ACOP L8, duty holders have a legal obligation to assess and control the risk of legionella in their water systems."
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
                  Legionella bacteria thrive in building water systems where temperatures are between 20–45°C, water is stagnant, or systems are poorly maintained. ACOP L8 — the Approved Code of Practice — sets out the legal duties for managing these risks in all workplaces and public buildings.
                </p>
                <p>
                  The Responsible Person (typically the employer, building owner, or facilities manager) must ensure a suitable and sufficient risk assessment is carried out and appropriate control measures are maintained.
                </p>
              </div>
              <div>
                <p className="mb-4">
                  This indicative assessment tool helps you understand your current risk profile by evaluating your building type, water systems, monitoring frequency, and occupant vulnerability. It is not a substitute for a formal ACOP L8 risk assessment.
                </p>
                <p>
                  Complete the assessment below for an instant indicative risk grade and recommended actions. For a comprehensive formal assessment, contact our water hygiene specialists.
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
              { icon: ClipboardList, title: "1. Describe Your Systems", desc: "Tell us about your building type, water systems, and monitoring practices" },
              { icon: Settings, title: "2. We Assess Risk", desc: "Your inputs are scored against ACOP L8 risk factors" },
              { icon: BarChart3, title: "3. Get Your Grade", desc: "Receive an indicative risk grade with recommended actions" },
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

        {/* Assessment Form */}
        <ContentSection variant="gradient">
          <Breadcrumb items={breadcrumbItems} className="mb-8" />

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h2 className="text-2xl font-light mb-6">Water System Assessment</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div>
                    <Label htmlFor="buildingType">Building Type *</Label>
                    <Select value={buildingType} onValueChange={(value) => setValue("buildingType", value)}>
                      <SelectTrigger><SelectValue placeholder="Select building type" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="healthcare">Healthcare / Hospital</SelectItem>
                        <SelectItem value="residential">Residential / Care Home / PBSA</SelectItem>
                        <SelectItem value="hotel">Hotel / Leisure</SelectItem>
                        <SelectItem value="office">Office / Corporate</SelectItem>
                        <SelectItem value="retail">Retail / Shopping Centre</SelectItem>
                        <SelectItem value="industrial">Industrial / Warehouse</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.buildingType && <p className="text-sm text-destructive mt-1">{errors.buildingType.message}</p>}
                  </div>

                  <div>
                    <Label>Water Systems Present *</Label>
                    <p className="text-xs text-muted-foreground mb-3">Select all that apply</p>
                    <div className="space-y-2">
                      {[
                        { id: "coldWaterStorage", label: "Cold water storage tanks" },
                        { id: "hotWaterCylinders", label: "Hot water cylinders/calorifiers" },
                        { id: "coolingTowers", label: "Cooling towers / evaporative condensers" },
                        { id: "showers", label: "Showers and spray taps" },
                        { id: "deadLegs", label: "Dead legs (>2m pipe runs)" },
                        { id: "littleUsedOutlets", label: "Little-used outlets" },
                      ].map((system) => (
                        <div key={system.id} className="flex items-center space-x-2">
                          <Checkbox
                            id={system.id}
                            checked={waterSystems[system.id as keyof typeof waterSystems]}
                            onCheckedChange={(checked) => setValue(`waterSystems.${system.id}` as any, checked as boolean)}
                          />
                          <Label htmlFor={system.id} className="cursor-pointer font-normal">{system.label}</Label>
                        </div>
                      ))}
                    </div>
                    {errors.waterSystems && <p className="text-sm text-destructive mt-2">{errors.waterSystems.message}</p>}
                  </div>

                  <div>
                    <Label htmlFor="lastRiskAssessment">Last ACOP L8 Risk Assessment (Optional)</Label>
                    <Input id="lastRiskAssessment" type="date" {...register("lastRiskAssessment")} />
                    <p className="text-xs text-muted-foreground mt-1">Leave blank if never conducted</p>
                  </div>

                  <div>
                    <Label htmlFor="temperatureMonitoring">Temperature Monitoring Frequency *</Label>
                    <Select value={watch("temperatureMonitoring")} onValueChange={(value) => setValue("temperatureMonitoring", value)}>
                      <SelectTrigger><SelectValue placeholder="Select frequency" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="weekly">Weekly</SelectItem>
                        <SelectItem value="monthly">Monthly (minimum ACOP L8)</SelectItem>
                        <SelectItem value="quarterly">Quarterly</SelectItem>
                        <SelectItem value="annual">Annual only</SelectItem>
                        <SelectItem value="none">No monitoring in place</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.temperatureMonitoring && <p className="text-sm text-destructive mt-1">{errors.temperatureMonitoring.message}</p>}
                  </div>

                  <div>
                    <Label htmlFor="occupantType">Occupant Type *</Label>
                    <Select value={watch("occupantType")} onValueChange={(value) => setValue("occupantType", value)}>
                      <SelectTrigger><SelectValue placeholder="Select occupant type" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General public / staff</SelectItem>
                        <SelectItem value="high-density">High-density occupancy</SelectItem>
                        <SelectItem value="vulnerable">Vulnerable persons (elderly, immunocompromised)</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.occupantType && <p className="text-sm text-destructive mt-1">{errors.occupantType.message}</p>}
                  </div>

                  <div className="border-t pt-4">
                    <h3 className="text-sm font-medium mb-3 flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      Receive Your Risk Report
                    </h3>
                    <div className="space-y-3">
                      <div>
                        <Label htmlFor="name">Your Name *</Label>
                        <Input id="name" placeholder="John Smith" {...register("name")} />
                        {errors.name && <p className="text-sm text-destructive mt-1">{errors.name.message}</p>}
                      </div>
                      <div>
                        <Label htmlFor="companyName">Company Name (Optional)</Label>
                        <Input id="companyName" placeholder="Your Company Ltd" {...register("companyName")} />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input id="email" type="email" placeholder="john@company.com" {...register("email")} />
                        {errors.email && <p className="text-sm text-destructive mt-1">{errors.email.message}</p>}
                      </div>
                    </div>
                  </div>

                  <Button type="submit" className="w-full" size="lg">Grade My Water Risk</Button>
                </form>
              </Card>

              <div className="space-y-6">
                {!showResults ? (
                  <Card className="p-6 bg-muted">
                    <h3 className="text-xl font-light mb-4">ACOP L8 Key Obligations</h3>
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
                        <span><strong>Insurance compliance</strong> - often required for liability cover</span>
                      </li>
                    </ul>
                  </Card>
                ) : (
                  <>
                    <Card className={`p-6 ${
                      results.riskLevel === "critical" ? "bg-destructive text-destructive-foreground"
                        : results.riskLevel === "high" ? "bg-orange-500 text-white"
                        : results.riskLevel === "medium" ? "bg-yellow-500 text-black"
                        : "bg-green-600 text-white"
                    }`}>
                      <h3 className="text-2xl font-light mb-4">Your Indicative Risk Assessment</h3>
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
                          <div className="text-sm opacity-90">Indicative ACOP L8 Status</div>
                          <div className="text-lg font-medium">{results.acop8Compliance}</div>
                        </div>
                      </div>
                      <p className="text-xs opacity-75 mt-4 border-t border-white/20 pt-3">
                        This is an indicative assessment and does not replace a formal ACOP L8 risk assessment conducted by a competent person.
                      </p>
                    </Card>

                    <Card className="p-6">
                      <h3 className="font-medium mb-3 flex items-center gap-2">
                        <AlertTriangle className="w-5 h-5 text-destructive" />
                        Recommended Actions
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
                      <h3 className="font-medium mb-3">Get a Formal Assessment</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        {results.riskLevel === "critical" || results.riskLevel === "high"
                          ? "Based on these indicators, a formal ACOP L8 risk assessment is strongly recommended."
                          : "Maintain compliance across all building systems with a comprehensive water hygiene audit."}
                      </p>
                      <Button asChild className="w-full">
                        <Link to="/request-proposal">Request Formal Assessment</Link>
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
        </ContentSection>

        <CTASection
          title="Need a Formal ACOP L8 Assessment?"
          description="Our water hygiene specialists can conduct a comprehensive legionella risk assessment and provide a full written control scheme for your building."
          primaryLabel="Request Assessment"
          primaryHref="/contact"
          secondaryLabel="Learn About Water Hygiene"
          secondaryHref="/services/water-hygiene"
          variant="gradient"
        />
      </main>
    </>
  );
};

export default WaterRiskGrader;
