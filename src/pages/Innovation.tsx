import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Lightbulb, Cpu, Zap, Shield, TrendingUp, Rocket, Brain, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FAQSection } from "@/components/shared/FAQSection";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { SchemaMarkup } from "@/components/shared/SchemaMarkup";

const Innovation = () => {
  const faqs = [
    {
      question: "How does EntireFM use AI and machine learning?",
      answer: "We deploy AI-powered predictive maintenance algorithms that analyze equipment sensor data to forecast failures before they occur. Machine learning models optimize energy consumption patterns and identify anomalies in real-time across your portfolio."
    },
    {
      question: "What IoT devices does EntireFM use?",
      answer: "We integrate wireless sensors for temperature, humidity, occupancy, air quality, and equipment performance monitoring. All devices connect to our cloud platform for centralized visibility and automated alert workflows."
    },
    {
      question: "Can you integrate with our existing systems?",
      answer: "Yes. Our platform connects via API to most BMS, CAFM, CMMS, and ERP systems including Concept Evolution, Planon, MRI, SAP, and Oracle. We also offer custom integration development for proprietary systems."
    },
    {
      question: "How secure is your technology platform?",
      answer: "We maintain ISO 27001 information security certification, use end-to-end encryption, and host on UK-based AWS infrastructure with SOC 2 compliance. Regular penetration testing and vulnerability assessments are conducted quarterly."
    },
    {
      question: "What's the typical ROI on innovation investments?",
      answer: "Predictive maintenance typically delivers 15-25% reduction in reactive callouts within 6 months. Energy optimization through AI can yield 20-35% consumption reductions with payback periods of 12-18 months depending on portfolio size."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Innovation & Technology in FM | EntireFM</title>
        <meta name="description" content="Cutting-edge facilities management technology: AI, IoT, predictive maintenance, and digital platforms transforming how we manage UK commercial buildings." />
        <link rel="canonical" href="https://www.entirefm.com/innovation" />
      </Helmet>

      <SchemaMarkup
        schema={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Innovation & Technology in FM",
          "description": "Advanced facilities management technology including AI-powered predictive maintenance, IoT monitoring, and integrated digital platforms.",
          "provider": {
            "@type": "Organization",
            "name": "EntireFM",
            "url": "https://entirefm.com"
          },
          "serviceType": "Facilities Management"
        }}
      />

      <div className="min-h-screen bg-gradient-to-b from-background to-secondary/10">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Innovation & Technology" }
          ]}
        />

        {/* Hero Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Rocket className="h-4 w-4" />
              Technology-Led FM
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Innovation & Technology
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Next-generation facilities management powered by AI, IoT, and integrated digital platforms. Smarter buildings, predictive maintenance, and data-driven decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/request-proposal">Request Demo</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/technology">Platform Overview</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Innovation Pillars */}
        <section className="py-16 px-4 bg-card/50">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <Brain className="h-10 w-10 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">AI & Machine Learning</h3>
                <p className="text-sm text-muted-foreground">Predictive algorithms preventing failures before they occur</p>
              </Card>
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <Cpu className="h-10 w-10 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">IoT Monitoring</h3>
                <p className="text-sm text-muted-foreground">Real-time sensors across critical building systems</p>
              </Card>
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <Smartphone className="h-10 w-10 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Digital Platforms</h3>
                <p className="text-sm text-muted-foreground">Unified dashboards for total portfolio visibility</p>
              </Card>
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <Zap className="h-10 w-10 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Automation</h3>
                <p className="text-sm text-muted-foreground">Smart workflows reducing manual intervention by 70%</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Key Technologies */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Technology Stack</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-8">
                <Lightbulb className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-2xl font-semibold mb-4">Predictive Maintenance AI</h3>
                <p className="text-muted-foreground mb-6">
                  Our machine learning models analyze equipment performance data, environmental conditions, and historical failure patterns to predict maintenance needs 2-4 weeks in advance.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span className="text-sm">Anomaly detection for HVAC, electrical, and mechanical systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span className="text-sm">Automatic work order generation and engineer dispatch</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span className="text-sm">Parts inventory optimization based on failure predictions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span className="text-sm">Continuous model training from portfolio-wide data</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-8">
                <Cpu className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-2xl font-semibold mb-4">IoT Monitoring Network</h3>
                <p className="text-muted-foreground mb-6">
                  Deploy wireless sensors across your portfolio for comprehensive visibility into building conditions, occupancy patterns, and system performance.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span className="text-sm">Temperature, humidity, CO2, and air quality monitoring</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span className="text-sm">Occupancy detection for demand-based HVAC control</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span className="text-sm">Leak detection sensors preventing water damage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span className="text-sm">Equipment vibration and power consumption tracking</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-8">
                <Shield className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-2xl font-semibold mb-4">Digital Twin Technology</h3>
                <p className="text-muted-foreground mb-6">
                  Create virtual replicas of your physical buildings to simulate scenarios, optimize operations, and plan maintenance interventions before deployment.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span className="text-sm">3D building models integrated with BMS data</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span className="text-sm">Energy consumption simulation and optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span className="text-sm">Space utilization analysis and planning tools</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span className="text-sm">Scenario testing for retrofit investments</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-8">
                <TrendingUp className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-2xl font-semibold mb-4">Integrated Command Center</h3>
                <p className="text-muted-foreground mb-6">
                  Single-pane-of-glass visibility across all your sites with real-time alerts, compliance tracking, and performance analytics at your fingertips.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span className="text-sm">Live asset status dashboards across entire portfolio</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span className="text-sm">Mobile apps for engineers and facilities managers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span className="text-sm">Automated compliance documentation and audit trails</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span className="text-sm">API integrations with existing CAFM/CMMS systems</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* Innovation Showcase */}
        <section className="py-16 px-4 bg-secondary/20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Innovation in Action</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="p-6">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Smart Energy Management</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  AI algorithms continuously optimize HVAC, lighting, and plug loads based on occupancy patterns, weather forecasts, and energy pricing.
                </p>
                <div className="text-sm text-primary font-semibold">Result: 28% energy reduction</div>
              </Card>

              <Card className="p-6">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Failure Prevention</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Predictive models identify equipment at risk of failure, enabling proactive part replacement and preventing costly emergency repairs.
                </p>
                <div className="text-sm text-primary font-semibold">Result: 41% reduction in reactive maintenance</div>
              </Card>

              <Card className="p-6">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Smartphone className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Occupant Experience</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Mobile apps allow occupants to report issues, adjust environmental settings, and receive real-time updates on maintenance activities.
                </p>
                <div className="text-sm text-primary font-semibold">Result: 92% satisfaction score</div>
              </Card>
            </div>
          </div>
        </section>

        {/* Case Study */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 bg-gradient-to-br from-primary/10 to-secondary/10">
              <h2 className="text-2xl font-bold mb-6">Case Study: Multi-Site Logistics Portfolio</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  <strong className="text-foreground">Challenge:</strong> National logistics operator needed real-time visibility across 18 distribution centers to reduce downtime and optimize energy usage.
                </p>
                <p>
                  <strong className="text-foreground">Solution:</strong> Deployed 450+ IoT sensors integrated with AI-powered predictive maintenance platform and digital twin modeling.
                </p>
                <p>
                  <strong className="text-foreground">Technology Deployed:</strong>
                </p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>Wireless temperature, vibration, and power monitoring on critical equipment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>Machine learning models predicting compressor and motor failures</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>Automated work order generation integrated with existing CMMS</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>Real-time dashboard with mobile app for site managers</span>
                  </li>
                </ul>
                <p>
                  <strong className="text-foreground">Outcomes:</strong>
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-background/50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-primary mb-1">38%</div>
                    <div className="text-sm">Reduction in unplanned downtime</div>
                  </div>
                  <div className="bg-background/50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-primary mb-1">£520k</div>
                    <div className="text-sm">Annual cost savings</div>
                  </div>
                  <div className="bg-background/50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-primary mb-1">24%</div>
                    <div className="text-sm">Energy consumption reduction</div>
                  </div>
                  <div className="bg-background/50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-primary mb-1">14 months</div>
                    <div className="text-sm">ROI payback period</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 px-4 bg-secondary/20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Technology FAQs</h2>
            <FAQSection faqs={faqs} />
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your FM Operations?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Discover how our technology platform can deliver measurable improvements across your portfolio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/request-proposal">Request Demo</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/technology">Explore Platform</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Innovation;