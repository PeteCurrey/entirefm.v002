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
import { ThermometerSnowflake, AlertCircle, Calendar, Mail, ClipboardList, Settings, BarChart3 } from "lucide-react";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { SchemaMarkup } from "@/components/shared/SchemaMarkup";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ContentSection from "@/components/shared/ContentSection";
import CTASection from "@/components/shared/CTASection";

const tm44Schema = z.object({
  systemSize: z.string().min(1, "Please select system size"),
  lastInspection: z.string().optional(),
  location: z.string().min(1, "Please select location"),
  email: z.string().email("Valid email required for results"),
  name: z.string().min(2, "Name required").max(100),
  companyName: z.string().optional(),
});

type TM44FormData = z.infer<typeof tm44Schema>;

const TM44Checker = () => {
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState({
    dueDate: "",
    urgency: "low" as "low" | "medium" | "high" | "overdue",
    riskLevel: "",
    penalty: "",
    daysRemaining: 0,
  });

  const { trackToolCompletion } = useConversionTracking();
  const { trackToolComplete, trackToolStart } = useToolAnalytics();
  useToolPageView("TM44 Renewal Checker");

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<TM44FormData>({
    resolver: zodResolver(tm44Schema),
  });

  const systemSize = watch("systemSize");

  const calculateTM44Status = (data: TM44FormData) => {
    const now = new Date();
    let dueDate = new Date();
    let daysRemaining = 0;

    if (data.lastInspection) {
      const lastDate = new Date(data.lastInspection);
      dueDate = new Date(lastDate);
      dueDate.setFullYear(dueDate.getFullYear() + 5);
      daysRemaining = Math.floor((dueDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
    } else {
      dueDate = new Date(now);
      daysRemaining = -365;
    }

    let urgency: "low" | "medium" | "high" | "overdue" = "low";
    let riskLevel = "";
    let penalty = "";

    if (daysRemaining < 0) {
      urgency = "overdue";
      riskLevel = "CRITICAL - Inspection Overdue";
      penalty = "Potential £300 fixed penalty notice + £20/day continuing penalty";
    } else if (daysRemaining <= 90) {
      urgency = "high";
      riskLevel = "HIGH - Action Required Soon";
      penalty = "Potential £300 penalty if not completed before deadline";
    } else if (daysRemaining <= 180) {
      urgency = "medium";
      riskLevel = "MEDIUM - Plan Inspection";
      penalty = "Schedule now to avoid potential penalties";
    } else {
      urgency = "low";
      riskLevel = "LOW - Compliant";
      penalty = "No immediate action required";
    }

    setResults({
      dueDate: dueDate.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" }),
      urgency,
      riskLevel,
      penalty,
      daysRemaining: Math.abs(daysRemaining),
    });
  };

  const onSubmit = (data: TM44FormData) => {
    trackToolStart("TM44 Renewal Checker", { systemSize: data.systemSize });
    calculateTM44Status(data);
    setShowResults(true);
    trackToolCompletion("TM44 Renewal Checker");
    trackToolComplete("TM44 Renewal Checker", {
      urgency: results.urgency,
      daysRemaining: results.daysRemaining
    });
    console.log("TM44 Checker submission:", data);
  };

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Tools", href: "/tools/cost-savings" },
    { label: "TM44 Renewal Checker" },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "TM44 Air Conditioning Renewal Checker | EntireFM",
    description: "Check your TM44 air conditioning inspection deadline and compliance risk score. Free instant assessment.",
    applicationCategory: "BusinessApplication",
    url: "https://entirefm.com/tools/tm44-checker",
  };

  return (
    <>
      <Helmet>
        <title>TM44 Air Conditioning Renewal Checker | EntireFM</title>
        <meta name="description" content="Check when your TM44 air conditioning inspection is due and calculate your compliance risk. Free tool with instant results and penalty warnings." />
        <link rel="canonical" href="https://entirefm.com/tools/tm44-checker" />
      </Helmet>

      <SchemaMarkup schema={schema} />

      <ToolHero
        icon={ThermometerSnowflake}
        title="TM44 Renewal Checker"
        description="Check your TM44 air conditioning inspection deadline and understand your compliance position"
        stats={[
          { value: "5yr", label: "Inspection Cycle" },
          { value: "£300", label: "Initial Penalty" },
          { value: "£20/day", label: "Continuing Fine" },
          { value: "Free", label: "Instant Check" }
        ]}
      />

      <main>
        {/* Introduction */}
        <ContentSection
          title="What Is a TM44 Inspection?"
          subtitle="Understanding your legal obligations for air conditioning energy assessments under the Energy Performance of Buildings Regulations."
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
                  TM44 is a CIBSE-published methodology for inspecting air conditioning systems as required by the Energy Performance of Buildings Regulations. Any air conditioning system with an effective rated output of 12kW or more must be inspected by an accredited energy assessor every five years.
                </p>
                <p>
                  The inspection assesses the efficiency of your cooling systems and provides recommendations for improvement — helping reduce energy consumption and carbon emissions while meeting your legal obligations.
                </p>
              </div>
              <div>
                <p className="mb-4">
                  Non-compliance can result in a fixed penalty notice of £300, with a continuing penalty of £20 per day thereafter. More importantly, regular inspections help identify inefficiencies that may be costing your business significantly in wasted energy.
                </p>
                <p>
                  Use this free tool to check when your next TM44 inspection is due and understand your current compliance position. Results are based on the information you provide and should be verified with your compliance records.
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
              { icon: ClipboardList, title: "1. Enter System Details", desc: "Tell us your AC system size, location, and last inspection date" },
              { icon: Settings, title: "2. We Check Compliance", desc: "Your details are checked against the 5-year inspection cycle" },
              { icon: BarChart3, title: "3. See Your Status", desc: "Get an instant view of your compliance position and any actions needed" },
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

        {/* Checker Form */}
        <ContentSection variant="gradient">
          <Breadcrumb items={breadcrumbItems} className="mb-8" />

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h2 className="text-2xl font-light mb-6">System Details</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div>
                    <Label htmlFor="systemSize">AC System Size *</Label>
                    <Select value={systemSize} onValueChange={(value) => setValue("systemSize", value)}>
                      <SelectTrigger><SelectValue placeholder="Select system capacity" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under12kw">Under 12kW (not required)</SelectItem>
                        <SelectItem value="12-70kw">12-70kW (TM44 required every 5 years)</SelectItem>
                        <SelectItem value="over70kw">Over 70kW (TM44 required every 5 years)</SelectItem>
                        <SelectItem value="unsure">Unsure - Need assessment</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.systemSize && <p className="text-sm text-destructive mt-1">{errors.systemSize.message}</p>}
                  </div>

                  <div>
                    <Label htmlFor="lastInspection">Last TM44 Inspection Date (Optional)</Label>
                    <Input id="lastInspection" type="date" {...register("lastInspection")} />
                    <p className="text-xs text-muted-foreground mt-1">Leave blank if never inspected or unknown</p>
                  </div>

                  <div>
                    <Label htmlFor="location">Building Location *</Label>
                    <Select value={watch("location")} onValueChange={(value) => setValue("location", value)}>
                      <SelectTrigger><SelectValue placeholder="Select location" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="london">London</SelectItem>
                        <SelectItem value="birmingham">Birmingham</SelectItem>
                        <SelectItem value="manchester">Manchester</SelectItem>
                        <SelectItem value="leeds">Leeds</SelectItem>
                        <SelectItem value="sheffield">Sheffield</SelectItem>
                        <SelectItem value="nottingham">Nottingham</SelectItem>
                        <SelectItem value="derby">Derby</SelectItem>
                        <SelectItem value="other">Other UK Location</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.location && <p className="text-sm text-destructive mt-1">{errors.location.message}</p>}
                  </div>

                  <div className="border-t pt-4">
                    <h3 className="text-sm font-medium mb-3 flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      Get Your Compliance Report
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

                  <Button type="submit" className="w-full" size="lg">Check TM44 Status</Button>
                </form>
              </Card>

              <div className="space-y-6">
                {!showResults ? (
                  <Card className="p-6 bg-muted">
                    <h3 className="text-xl font-light mb-4">Key TM44 Facts</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <AlertCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span><strong>Required every 5 years</strong> for systems &gt;12kW</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span><strong>£300 fixed penalty</strong> for non-compliance</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span><strong>£20/day continuing penalty</strong> after notice</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Calendar className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span><strong>Certificate valid for 5 years</strong> from inspection date</span>
                      </li>
                    </ul>
                  </Card>
                ) : (
                  <>
                    <Card className={`p-6 ${
                      results.urgency === "overdue" ? "bg-destructive text-destructive-foreground"
                        : results.urgency === "high" ? "bg-orange-500 text-white"
                        : results.urgency === "medium" ? "bg-yellow-500 text-black"
                        : "bg-green-600 text-white"
                    }`}>
                      <h3 className="text-2xl font-light mb-4">Your TM44 Status</h3>
                      <div className="space-y-4">
                        <div className="border-b border-white/20 pb-3">
                          <div className="text-sm opacity-90">Risk Level</div>
                          <div className="text-2xl font-light">{results.riskLevel}</div>
                        </div>
                        <div className="border-b border-white/20 pb-3">
                          <div className="text-sm opacity-90">{results.urgency === "overdue" ? "Days Overdue" : "Days Until Due"}</div>
                          <div className="text-4xl font-light">{results.daysRemaining}</div>
                        </div>
                        <div className="border-b border-white/20 pb-3">
                          <div className="text-sm opacity-90">{results.urgency === "overdue" ? "Was Due" : "Due Date"}</div>
                          <div className="text-xl font-light">{results.dueDate}</div>
                        </div>
                        <div>
                          <div className="text-sm opacity-90">Penalty Risk</div>
                          <div className="text-lg">{results.penalty}</div>
                        </div>
                      </div>
                      <p className="text-xs opacity-75 mt-4 border-t border-white/20 pt-3">
                        This assessment is based on the information provided and should be verified against your compliance records.
                      </p>
                    </Card>

                    <Card className="p-6">
                      <h3 className="font-medium mb-3">
                        {results.urgency === "overdue" || results.urgency === "high" ? "Urgent Action Required" : "Complete Compliance Review"}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        {results.urgency === "overdue"
                          ? "Based on the dates provided, your inspection appears overdue. We recommend scheduling an inspection promptly."
                          : results.urgency === "high"
                          ? "Your inspection is approaching. Schedule now to ensure continuous compliance."
                          : "Ensure complete compliance across all building systems with a comprehensive audit."}
                      </p>
                      <Button asChild className="w-full">
                        <Link to="/request-proposal">Request Full Audit</Link>
                      </Button>
                    </Card>
                  </>
                )}

                <Card className="p-6">
                  <h3 className="text-lg font-medium mb-3">Our TM44 Service</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>✓ Fully accredited TM44 inspectors</li>
                    <li>✓ Same-day or next-day slots available</li>
                    <li>✓ Digital certificate issued within 24hrs</li>
                    <li>✓ Energy efficiency recommendations included</li>
                    <li>✓ 5-year renewal reminder service</li>
                    <li>✓ Fixed pricing with no hidden costs</li>
                  </ul>
                </Card>
              </div>
            </div>
          </div>
        </ContentSection>

        <CTASection
          title="Need a TM44 Inspection?"
          description="Our accredited assessors can inspect your air conditioning systems and issue your TM44 certificate, typically within 24 hours."
          primaryLabel="Book TM44 Inspection"
          primaryHref="/contact"
          secondaryLabel="Learn About Our Services"
          secondaryHref="/services/air-conditioning"
          variant="gradient"
        />
      </main>
    </>
  );
};

export default TM44Checker;
