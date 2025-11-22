import { useState } from "react";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Activity, Clock, CheckCircle, AlertTriangle, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { SchemaMarkup } from "@/components/shared/SchemaMarkup";

const SLABenchmark = () => {
  const [responseTime, setResponseTime] = useState("");
  const [resolutionTime, setResolutionTime] = useState("");
  const [firstTimeFix, setFirstTimeFix] = useState("");
  const [overdueCompliance, setOverdueCompliance] = useState("");
  const [showResults, setShowResults] = useState(false);

  const handleBenchmark = () => {
    if (responseTime && resolutionTime && firstTimeFix) {
      setShowResults(true);
    }
  };

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Tools", href: "/tools/sla-benchmark" },
    { label: "SLA Benchmark" }
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "FM SLA Performance Benchmark Tool",
    description: "Compare your facilities management provider's SLA performance against industry standards and EntireFM excellence",
    applicationCategory: "UtilityApplication",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "GBP"
    }
  };

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
        <title>FM SLA Benchmark Tool | Compare Provider Performance | EntireFM</title>
        <meta name="description" content="Benchmark your FM provider's response times and fix rates against industry standards. See where you're being let down." />
        <link rel="canonical" href="https://entirefm.co.uk/tools/sla-benchmark" />
      </Helmet>

      <SchemaMarkup schema={schemaData} />
      <BreadcrumbSchema items={breadcrumbItems} />

      <main>
        <section className="py-16 bg-gradient-to-br from-background via-background to-muted/20">
          <div className="container mx-auto px-4">
            <Breadcrumb items={breadcrumbItems} />
            
            <div className="max-w-4xl mx-auto text-center mb-12">
              <Activity className="w-16 h-16 mx-auto mb-6 text-primary" />
              <h1 className="text-4xl md:text-5xl font-light mb-6 text-foreground">
                If Your Provider's Slow, You're Paying Twice
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Benchmark their response & fix rates against industry performance.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Input Form */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    Your Current Provider's Metrics
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="response-time">
                      Average Response Time (hours)
                    </Label>
                    <Input
                      id="response-time"
                      type="number"
                      placeholder="e.g., 4"
                      value={responseTime}
                      onChange={(e) => setResponseTime(e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="resolution-time">
                      Average Time to Fix (hours)
                    </Label>
                    <Input
                      id="resolution-time"
                      type="number"
                      placeholder="e.g., 48"
                      value={resolutionTime}
                      onChange={(e) => setResolutionTime(e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="first-time-fix">
                      First-Time Fix Rate (%)
                    </Label>
                    <Input
                      id="first-time-fix"
                      type="number"
                      placeholder="e.g., 65"
                      value={firstTimeFix}
                      onChange={(e) => setFirstTimeFix(e.target.value)}
                      max={100}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="overdue-compliance">
                      Overdue Compliance Tasks (%)
                    </Label>
                    <Input
                      id="overdue-compliance"
                      type="number"
                      placeholder="e.g., 15"
                      value={overdueCompliance}
                      onChange={(e) => setOverdueCompliance(e.target.value)}
                      max={100}
                    />
                  </div>

                  <Button 
                    onClick={handleBenchmark}
                    className="w-full"
                    disabled={!responseTime || !resolutionTime || !firstTimeFix}
                  >
                    Benchmark My SLA
                  </Button>
                </CardContent>
              </Card>

              {/* Results */}
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
                              <TableCell className={`text-center ${getPerformanceStatus("responseTime", responseTime).color}`}>
                                {responseTime}h
                              </TableCell>
                              <TableCell className="text-center text-muted-foreground">2-4h</TableCell>
                              <TableCell className="text-center text-primary font-medium">&lt;1h</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium">Time to Fix</TableCell>
                              <TableCell className={`text-center ${getPerformanceStatus("resolutionTime", resolutionTime).color}`}>
                                {resolutionTime}h
                              </TableCell>
                              <TableCell className="text-center text-muted-foreground">24-48h</TableCell>
                              <TableCell className="text-center text-primary font-medium">&lt;12h</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium">First-Time Fix Rate</TableCell>
                              <TableCell className={`text-center ${getPerformanceStatus("firstTimeFix", firstTimeFix).color}`}>
                                {firstTimeFix}%
                              </TableCell>
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

                      <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4">
                        <div className="flex items-start gap-3">
                          <AlertTriangle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-medium text-foreground mb-2">Performance Gap Identified</p>
                            <p className="text-sm text-muted-foreground">
                              Your current provider is underperforming in {
                                [
                                  parseFloat(responseTime) > 2 && "response time",
                                  parseFloat(resolutionTime) > 24 && "resolution speed",
                                  parseFloat(firstTimeFix) < 75 && "first-time fix rate"
                                ].filter(Boolean).join(", ")
                              }. This costs you in downtime, productivity, and reputation.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
                        <div className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-medium text-foreground mb-2">The EntireFM Advantage</p>
                            <p className="text-sm text-muted-foreground">
                              We consistently outperform both your current provider and industry standards. Real-time visibility, faster response, higher first-time fix rates.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="pt-4 space-y-3">
                        <Button asChild className="w-full">
                          <Link to="/why-switch">Eliminate SLA Embarrassment — Start Your Switch</Link>
                        </Button>
                        <Button asChild variant="outline" className="w-full">
                          <Link to="/contact">Request Performance Proposal</Link>
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
                    <p className="text-muted-foreground">
                      Enter your current provider's metrics to see the comparison
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
            <h2 className="text-3xl font-light mb-6">No Vendor Survives This Comparison</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Switch to a provider that delivers on promises, not excuses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/resources/switching-provider">Download Switching Playbook</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/about">Trust & Accreditations</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default SLABenchmark;
