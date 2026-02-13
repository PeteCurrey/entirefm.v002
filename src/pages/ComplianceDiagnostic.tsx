import { useState } from "react";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Progress } from "@/components/ui/progress";
import { AlertTriangle, CheckCircle2, XCircle, ArrowRight, Download, ShieldAlert, ClipboardList, Settings, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";
import { useToolAnalytics, useToolPageView } from "@/hooks/useToolAnalytics";
import { ToolHero } from "@/components/shared/ToolHero";
import { motion } from "framer-motion";
import ContentSection from "@/components/shared/ContentSection";
import CTASection from "@/components/shared/CTASection";

const ComplianceDiagnostic = () => {
  const { trackToolComplete, trackToolStart } = useToolAnalytics();
  useToolPageView("Compliance Risk Diagnostic");

  const [step, setStep] = useState(1);
  const [estateType, setEstateType] = useState("");
  const [complianceChecks, setComplianceChecks] = useState({
    fireSystemsTested: false, waterHygiene: false, gasCompliance: false,
    emergencyLighting: false, fraActions: false
  });
  const [operationalFailures, setOperationalFailures] = useState({
    reactiveCallouts: false, assetDowntime: false,
    poorCommunication: false, noDocumentation: false
  });
  const [riskScore, setRiskScore] = useState(0);
  const [riskLevel, setRiskLevel] = useState<"low" | "medium" | "high">("low");

  const calculateRiskScore = () => {
    let score = 0;
    Object.values(complianceChecks).forEach(checked => { if (!checked) score += 15; });
    Object.values(operationalFailures).forEach(checked => { if (checked) score += 10; });
    setRiskScore(score);
    if (score < 30) setRiskLevel("low");
    else if (score < 60) setRiskLevel("medium");
    else setRiskLevel("high");
  };

  const handleComplete = () => {
    trackToolStart("Compliance Risk Diagnostic", { estateType });
    calculateRiskScore();
    setStep(5);
    trackToolComplete("Compliance Risk Diagnostic", { riskScore, riskLevel, estateType });
  };

  const getRiskColor = () => {
    switch(riskLevel) {
      case "low": return "text-green-600";
      case "medium": return "text-amber-600";
      case "high": return "text-red-600";
      default: return "text-muted-foreground";
    }
  };

  const getRiskBgColor = () => {
    switch(riskLevel) {
      case "low": return "bg-green-50 border-green-200";
      case "medium": return "bg-amber-50 border-amber-200";
      case "high": return "bg-red-50 border-red-200";
      default: return "bg-muted";
    }
  };

  return (
    <>
      <Helmet>
        <title>Compliance Risk Diagnostic | EntireFM</title>
        <meta name="description" content="Assess your estate's compliance risk across fire, water, gas & electrical safety. Free indicative diagnostic." />
        <link rel="canonical" href="https://entirefm.com/tools/risk-diagnostic" />
      </Helmet>

      <ToolHero
        icon={ShieldAlert}
        title="How Compliant Is Your Estate?"
        description="As a Responsible Person, compliance sits with you — not your contractor. Assess your position in 90 seconds."
        stats={[
          { value: "90s", label: "Quick Assessment" },
          { value: "Free", label: "No Obligation" },
          { value: "Instant", label: "Action Plan" },
          { value: "4 Steps", label: "Simple Process" }
        ]}
      />

      <main>
        {/* Introduction */}
        <ContentSection
          title="Understanding Compliance Risk"
          subtitle="The Regulatory Reform (Fire Safety) Order, ACOP L8, Gas Safety Regulations, and Electricity at Work Regulations place clear duties on Responsible Persons."
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
                  Building compliance is not simply the responsibility of your FM provider — it rests with the duty holder or Responsible Person. This is typically the employer, building owner, or managing agent. If compliance lapses, enforcement action and prosecution can follow regardless of who was contracted to deliver the services.
                </p>
                <p>
                  This diagnostic helps you quickly assess whether the key compliance areas — fire safety, water hygiene, gas, and electrical — are being adequately managed across your estate.
                </p>
              </div>
              <div>
                <p className="mb-4">
                  Answer a few questions about your current compliance status and operational challenges, and receive an indicative risk score with recommended next steps.
                </p>
                <p>
                  This is an indicative assessment designed to highlight potential areas of concern. It does not constitute formal compliance advice and should not replace a comprehensive audit by qualified professionals.
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
              { icon: ClipboardList, title: "1. Select Estate Type", desc: "Tell us about your estate to tailor the risk scoring" },
              { icon: Settings, title: "2. Answer Questions", desc: "Confirm your compliance status across fire, water, gas, and electrical" },
              { icon: BarChart3, title: "3. Get Your Score", desc: "Receive an indicative risk score with recommended actions" },
            ].map((s) => (
              <div key={s.title} className="space-y-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <s.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-medium text-foreground">{s.title}</h3>
                <p className="text-sm text-muted-foreground font-light">{s.desc}</p>
              </div>
            ))}
          </motion.div>
        </ContentSection>

        {/* Diagnostic Flow */}
        <ContentSection variant="gradient">
          <div className="max-w-4xl mx-auto">
            {step < 5 && (
              <div className="mb-8">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Step {step} of 4</span>
                  <span className="text-sm text-muted-foreground">{((step / 4) * 100).toFixed(0)}% Complete</span>
                </div>
                <Progress value={(step / 4) * 100} className="h-2" />
              </div>
            )}

            {/* Step 1 */}
            {step === 1 && (
              <Card className="p-8">
                <h2 className="text-2xl font-light mb-6 underline-accent inline-block">Step 1 — Estate Type</h2>
                <p className="text-muted-foreground font-light mb-6">This tailors the risk scoring matrix to your operational context.</p>
                <RadioGroup value={estateType} onValueChange={setEstateType}>
                  {["Corporate / Offices", "Logistics / Industrial", "Retail", "Residential Blocks", "Healthcare", "Hospitality"].map((type) => (
                    <div key={type} className="flex items-center space-x-2 mb-3">
                      <RadioGroupItem value={type.toLowerCase().replace(/\s+/g, '-')} id={type} />
                      <Label htmlFor={type} className="font-light cursor-pointer">{type}</Label>
                    </div>
                  ))}
                </RadioGroup>
                <Button onClick={() => setStep(2)} disabled={!estateType} className="mt-8 w-full" size="lg">
                  Continue to Core Compliance Checks <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Card>
            )}

            {/* Step 2 */}
            {step === 2 && (
              <Card className="p-8">
                <h2 className="text-2xl font-light mb-6 underline-accent inline-block">Step 2 — Core Compliance Checks</h2>
                <p className="text-muted-foreground font-light mb-6">Select what's currently in date and documented:</p>
                <div className="space-y-4">
                  {[
                    { key: "fireSystemsTested", label: "Fire systems fully tested & documented?" },
                    { key: "waterHygiene", label: "Water hygiene on schedule?" },
                    { key: "gasCompliance", label: "Gas compliance in date?" },
                    { key: "emergencyLighting", label: "Emergency lighting 3-hour tested this year?" },
                    { key: "fraActions", label: "FRA actions outstanding?" }
                  ].map((check) => (
                    <div key={check.key} className="flex items-center space-x-2">
                      <Checkbox id={check.key} checked={complianceChecks[check.key as keyof typeof complianceChecks]} onCheckedChange={(checked) => setComplianceChecks({...complianceChecks, [check.key]: checked})} />
                      <label htmlFor={check.key} className="text-sm font-light cursor-pointer leading-relaxed">{check.label}</label>
                    </div>
                  ))}
                </div>
                <div className="flex gap-4 mt-8">
                  <Button onClick={() => setStep(1)} variant="outline" className="w-full" size="lg">Back</Button>
                  <Button onClick={() => setStep(3)} className="w-full" size="lg">Continue to Operational Failures <ArrowRight className="w-4 h-4 ml-2" /></Button>
                </div>
              </Card>
            )}

            {/* Step 3 */}
            {step === 3 && (
              <Card className="p-8">
                <h2 className="text-2xl font-light mb-6 underline-accent inline-block">Step 3 — Operational Challenges</h2>
                <p className="text-muted-foreground font-light mb-6">Select what you're experiencing:</p>
                <div className="space-y-4">
                  {[
                    { key: "reactiveCallouts", label: "Reactive call-outs rising?" },
                    { key: "assetDowntime", label: "Asset downtime impacting users?" },
                    { key: "poorCommunication", label: "Poor communication from provider?" },
                    { key: "noDocumentation", label: "No audit-ready documentation?" }
                  ].map((failure) => (
                    <div key={failure.key} className="flex items-center space-x-2">
                      <Checkbox id={failure.key} checked={operationalFailures[failure.key as keyof typeof operationalFailures]} onCheckedChange={(checked) => setOperationalFailures({...operationalFailures, [failure.key]: checked})} />
                      <label htmlFor={failure.key} className="text-sm font-light cursor-pointer leading-relaxed">{failure.label}</label>
                    </div>
                  ))}
                </div>
                <div className="flex gap-4 mt-8">
                  <Button onClick={() => setStep(2)} variant="outline" className="w-full" size="lg">Back</Button>
                  <Button onClick={() => setStep(4)} className="w-full" size="lg">Continue to Details <ArrowRight className="w-4 h-4 ml-2" /></Button>
                </div>
              </Card>
            )}

            {/* Step 4 */}
            {step === 4 && (
              <Card className="p-8">
                <h2 className="text-2xl font-light mb-6 underline-accent inline-block">Step 4 — Get Your Risk Report</h2>
                <p className="text-muted-foreground font-light mb-6">Enter your details to receive your indicative risk report.</p>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name">Your Name *</Label>
                    <input id="name" type="text" className="mt-2 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm" placeholder="John Smith" required />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <input id="email" type="email" className="mt-2 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm" placeholder="you@company.com" required />
                  </div>
                  <div>
                    <Label htmlFor="company">Company</Label>
                    <input id="company" type="text" className="mt-2 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm" placeholder="Your company name" />
                  </div>
                </div>
                <div className="flex gap-4 mt-8">
                  <Button onClick={() => setStep(3)} variant="outline" className="w-full" size="lg">Back</Button>
                  <Button onClick={handleComplete} className="w-full" size="lg">Calculate My Risk Score <ArrowRight className="w-4 h-4 ml-2" /></Button>
                </div>
              </Card>
            )}

            {/* Step 5: Results */}
            {step === 5 && (
              <div className="space-y-6">
                <Card className={`p-8 border-2 ${getRiskBgColor()}`}>
                  <div className="text-center">
                    <h2 className="text-3xl font-light mb-4">Your Indicative Compliance Risk Score</h2>
                    <div className={`text-7xl font-light mb-4 ${getRiskColor()}`}>{riskScore}</div>
                    <div className="flex items-center justify-center gap-3 mb-4">
                      {riskLevel === "low" && (<><CheckCircle2 className="w-6 h-6 text-green-600" /><span className="text-xl font-medium text-green-600">Low Risk</span></>)}
                      {riskLevel === "medium" && (<><AlertTriangle className="w-6 h-6 text-amber-600" /><span className="text-xl font-medium text-amber-600">Escalating Risk — Review Recommended</span></>)}
                      {riskLevel === "high" && (<><XCircle className="w-6 h-6 text-red-600" /><span className="text-xl font-medium text-red-600">High Risk — Immediate Review Recommended</span></>)}
                    </div>
                    <p className="text-muted-foreground font-light">
                      {riskLevel === "low" && "Maintain your current regime and keep documentation audit-ready."}
                      {riskLevel === "medium" && "Several potential compliance gaps detected. A formal FM review is recommended."}
                      {riskLevel === "high" && "Significant compliance indicators suggest the Responsible Person should seek immediate professional review."}
                    </p>
                    <p className="text-xs text-muted-foreground mt-4 border-t pt-4">
                      This is an indicative risk assessment and does not constitute formal compliance advice. Results should be verified through a comprehensive professional audit.
                    </p>
                  </div>
                </Card>

                {/* Leadership Takeaways */}
                <Card className="p-8">
                  <h2 className="text-2xl font-light mb-6 underline-accent inline-block">Key Findings</h2>
                  <div className="space-y-4">
                    {!complianceChecks.fireSystemsTested && (
                      <div className="flex items-start gap-3 p-4 bg-red-50 border-l-4 border-red-500">
                        <AlertTriangle className="w-5 h-5 text-red-600 shrink-0 mt-1" />
                        <div>
                          <p className="font-medium text-red-900">Fire System Testing May Be Overdue</p>
                          <p className="text-sm text-red-700 font-light">Fire system testing is a regulatory requirement. Verify your current status and schedule if needed.</p>
                        </div>
                      </div>
                    )}
                    {!complianceChecks.waterHygiene && (
                      <div className="flex items-start gap-3 p-4 bg-red-50 border-l-4 border-red-500">
                        <AlertTriangle className="w-5 h-5 text-red-600 shrink-0 mt-1" />
                        <div>
                          <p className="font-medium text-red-900">Water Hygiene Schedule May Have Lapsed</p>
                          <p className="text-sm text-red-700 font-light">ACOP L8 compliance gaps can create legionella risk. Review your monitoring schedule.</p>
                        </div>
                      </div>
                    )}
                    {operationalFailures.noDocumentation && (
                      <div className="flex items-start gap-3 p-4 bg-amber-50 border-l-4 border-amber-500">
                        <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-1" />
                        <div>
                          <p className="font-medium text-amber-900">Documentation May Not Be Audit-Ready</p>
                          <p className="text-sm text-amber-700 font-light">Missing records can be a concern during inspections. Ensure your documentation is current and accessible.</p>
                        </div>
                      </div>
                    )}
                    {operationalFailures.reactiveCallouts && (
                      <div className="flex items-start gap-3 p-4 bg-amber-50 border-l-4 border-amber-500">
                        <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-1" />
                        <div>
                          <p className="font-medium text-amber-900">Rising Reactive Costs</p>
                          <p className="text-sm text-amber-700 font-light">Increasing reactive maintenance may suggest inadequate PPM coverage. Review your maintenance strategy.</p>
                        </div>
                      </div>
                    )}
                  </div>
                </Card>

                {/* Next Steps */}
                <Card className="p-8 bg-charcoal text-white">
                  <h2 className="text-2xl font-light mb-6">Recommended Next Steps</h2>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                      <p className="font-light text-gray-300">Review the findings above and verify against your compliance records</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                      <p className="font-light text-gray-300">Consider a formal compliance audit with qualified FM specialists</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                      <p className="font-light text-gray-300">Request a tailored service plan to address any identified gaps</p>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" variant="secondary" className="flex-1" asChild>
                      <Link to="/contact">Get a Compliance Audit <ArrowRight className="w-4 h-4 ml-2" /></Link>
                    </Button>
                    <Button size="lg" variant="outline" className="flex-1 border-white text-white hover:bg-white hover:text-charcoal">
                      <Download className="w-4 h-4 mr-2" /> Download PDF Report
                    </Button>
                  </div>
                </Card>
              </div>
            )}
          </div>
        </ContentSection>

        {step < 5 && (
          <CTASection
            title="Need to Speak to Someone Now?"
            description="Our compliance specialists are available for urgent concerns. Get expert guidance on your building compliance obligations."
            primaryLabel="Contact Us"
            primaryHref="/contact"
            secondaryLabel="Learn About Compliance"
            secondaryHref="/services/compliance"
            variant="gradient"
          />
        )}
      </main>
    </>
  );
};

export default ComplianceDiagnostic;
