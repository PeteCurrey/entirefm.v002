import { useState } from "react";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Activity, Clock, CheckCircle, AlertTriangle, TrendingUp, ClipboardList, Settings, BarChart3 } from "lucide-react";
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

const SLABenchmark = () => {
  const { trackToolCompletion } = useConversionTracking();
  const { trackToolComplete, trackToolStart } = useToolAnalytics();
  useToolPageView("SLA Benchmark Tool");
  const [responseTime, setResponseTime] = useState("");
  const [resolutionTime, setResolutionTime] = useState("");
  const [firstTimeFix, setFirstTimeFix] = useState("");
  const [overdueCompliance, setOverdueCompliance] = useState("");
  const [showResults, setShowResults] = useState(false);

  const handleBenchmark = () => {
    if (responseTime && resolutionTime && firstTimeFix) {
      trackToolStart("SLA Benchmark Tool", { responseTime, resolutionTime, firstTimeFix });
      setShowResults(true);
      trackToolCompletion('SLA Benchmark Tool');
      trackToolComplete("SLA Benchmark Tool", { responseTime, resolutionTime, firstTimeFix });
    }
  };

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Tools", href: "/tools/sla-benchmark" },
    { label: "SLA Benchmark" }
  ];

  const getPerformanceStatus = (metric: string, value: string) => {
    const numValue = parseFloat(value);
    switch(metric) {
      case "responseTime":
        if (numValue > 4) return { status: "Poor", color: "text-destructive" };
        if (numValue > 2) return { status: "Below Average", color: "text-warning" };
        return { status: "Good", color: "text-primary" };
      case "resolutionTime":
        if (numValue > 48) return { status: "Poor", color: "text-destructive" };
        if (numValue > 24) return { status: "Below Average", color: "text-warning" };
        return { status: "Good", color: "text-primary" };
      case "firstTimeFix":
        if (numValue < 60) return { status: "Poor", color: "text-destructive" };
        if (numValue < 75) return { status: "Below Average", color: "text-warning" };
        return { status: "Good", color: "text-primary" };
      default:
        return { status: "Unknown", color: "text-muted-foreground" };
    }
  };

  return (
    <>
      <Helmet>
        <title>SLA Benchmark Tool | Compare FM Performance | EntireFM</title>
        <meta name="description" content="Compare response times, first-time fix rates & compliance standards." />
        <link rel="canonical" href="https://entirefm.com/tools/sla-benchmark" />
      </Helmet>

      <WebApplicationSchema
        name="FM SLA Performance Benchmark Tool"
        description="Compare your facilities management provider's SLA performance against industry standards"
        applicationCategory="UtilityApplication"
      />
      <BreadcrumbSchema items={breadcrumbItems} />

      <ToolHero
        icon={Activity}
        title="SLA Performance Benchmark"
        description="Compare your current service provider's performance against industry standards"
        stats={[
          { value: "4hrs", label: "Industry Std Response" },
          { value: "24hrs", label: "Industry Std Resolution" },
          { value: "85%", label: "Industry First Fix" },
          { value: "Free", label: "Instant Results" }
        ]}
      />

      <main>
        {/* Introduction */}
        <ContentSection
          title="What Is SLA Benchmarking?"
          subtitle="Understanding how your FM provider's performance compares to industry standards is the first step to better service outcomes."
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
                  Service Level Agreements (SLAs) define the performance standards your FM provider should meet — including response times, resolution speeds, and first-time fix rates. Benchmarking these against industry norms helps you understand where your provider excels and where there may be room for improvement.
                </p>
                <p>
                  This tool compares your current provider's key metrics against published industry standards, giving you an objective view of performance.
                </p>
              </div>
              <div>
                <p className="mb-4">
                  Whether you're reviewing an existing contract, preparing for a procurement exercise, or simply want to understand your current service quality, this benchmark provides a useful starting point.
                </p>
                <p>
                  Enter your provider's metrics below for an instant comparison. Results are indicative and based on widely recognised FM industry benchmarks.
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
              { icon: ClipboardList, title: "1. Enter Metrics", desc: "Input your current provider's response time, fix rate, and resolution speed" },
              { icon: Settings, title: "2. We Compare", desc: "Your metrics are benchmarked against industry standards" },
              { icon: BarChart3, title: "3. Review Comparison", desc: "See where your provider stands and identify areas for improvement" },
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

        {/* Benchmark Tool */}
        <ContentSection variant="gradient">
          <Breadcrumb items={breadcrumbItems} className="mb-8" />

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  Your Current Provider's Metrics
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="response-time">Average Response Time (hours)</Label>
                  <Input id="response-time" type="number" placeholder="e.g., 4" value={responseTime} onChange={(e) => setResponseTime(e.target.value)} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="resolution-time">Average Time to Fix (hours)</Label>
                  <Input id="resolution-time" type="number" placeholder="e.g., 48" value={resolutionTime} onChange={(e) => setResolutionTime(e.target.value)} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="first-time-fix">First-Time Fix Rate (%)</Label>
                  <Input id="first-time-fix" type="number" placeholder="e.g., 65" value={firstTimeFix} onChange={(e) => setFirstTimeFix(e.target.value)} max={100} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="overdue-compliance">Overdue Compliance Tasks (%)</Label>
                  <Input id="overdue-compliance" type="number" placeholder="e.g., 15" value={overdueCompliance} onChange={(e) => setOverdueCompliance(e.target.value)} max={100} />
                </div>
                <Button onClick={handleBenchmark} className="w-full" disabled={!responseTime || !resolutionTime || !firstTimeFix}>
                  Benchmark My SLA
                </Button>
              </CardContent>
            </Card>

            {showResults && (
              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-primary">
                    <TrendingUp className="w-5 h-5" />
                    Performance Comparison
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="overflow-x-auto">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Metric</TableHead>
                            <TableHead className="text-center">Your Provider</TableHead>
                            <TableHead className="text-center">Industry Standard</TableHead>
                            <TableHead className="text-center">EntireFM</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell className="font-medium">Response Time</TableCell>
                            <TableCell className={`text-center ${getPerformanceStatus("responseTime", responseTime).color}`}>{responseTime}h</TableCell>
                            <TableCell className="text-center text-muted-foreground">2-4h</TableCell>
                            <TableCell className="text-center text-primary font-medium">&lt;1h</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">Time to Fix</TableCell>
                            <TableCell className={`text-center ${getPerformanceStatus("resolutionTime", resolutionTime).color}`}>{resolutionTime}h</TableCell>
                            <TableCell className="text-center text-muted-foreground">24-48h</TableCell>
                            <TableCell className="text-center text-primary font-medium">&lt;12h</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">First-Time Fix Rate</TableCell>
                            <TableCell className={`text-center ${getPerformanceStatus("firstTimeFix", firstTimeFix).color}`}>{firstTimeFix}%</TableCell>
                            <TableCell className="text-center text-muted-foreground">70-75%</TableCell>
                            <TableCell className="text-center text-primary font-medium">92%+</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">Compliance Visibility</TableCell>
                            <TableCell className="text-center text-muted-foreground">Variable</TableCell>
                            <TableCell className="text-center text-muted-foreground">Quarterly Reports</TableCell>
                            <TableCell className="text-center text-primary font-medium">Live 24/7</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </div>

                    {(parseFloat(responseTime) > 2 || parseFloat(resolutionTime) > 24 || parseFloat(firstTimeFix) < 75) && (
                      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                        <div className="flex items-start gap-3">
                          <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-medium text-foreground mb-2">Areas for Improvement</p>
                            <p className="text-sm text-muted-foreground">
                              Based on industry benchmarks, your provider may be underperforming in {
                                [
                                  parseFloat(responseTime) > 2 && "response time",
                                  parseFloat(resolutionTime) > 24 && "resolution speed",
                                  parseFloat(firstTimeFix) < 75 && "first-time fix rate"
                                ].filter(Boolean).join(", ")
                              }. This could be affecting your operational efficiency and costs.
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-foreground mb-2">The EntireFM Approach</p>
                          <p className="text-sm text-muted-foreground">
                            We aim to outperform industry standards with real-time visibility, faster response, and higher first-time fix rates across all service categories.
                          </p>
                        </div>
                      </div>
                    </div>

                    <p className="text-xs text-muted-foreground border-t pt-4">
                      Benchmarks are based on industry standards and may vary by sector and contract scope. This comparison is for indicative purposes only.
                    </p>

                    <div className="pt-2 space-y-3">
                      <Button asChild className="w-full">
                        <Link to="/contact">Request a Performance Proposal</Link>
                      </Button>
                      <Button asChild variant="outline" className="w-full">
                        <Link to="/why-switch">Learn About Switching Providers</Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {!showResults && (
              <Card className="flex items-center justify-center bg-muted/30">
                <CardContent className="text-center py-12">
                  <Activity className="w-16 h-16 mx-auto mb-4 text-muted-foreground/50" />
                  <p className="text-muted-foreground">Enter your current provider's metrics to see the comparison</p>
                </CardContent>
              </Card>
            )}
          </div>
        </ContentSection>

        <CTASection
          title="How Does Your Provider Compare?"
          description="If your current SLAs aren't meeting expectations, we can help. Request a tailored performance proposal."
          primaryLabel="Request Performance Proposal"
          primaryHref="/contact"
          secondaryLabel="Download Switching Playbook"
          secondaryHref="/resources/switching-provider"
          variant="gradient"
        />
      </main>
    </>
  );
};

export default SLABenchmark;
