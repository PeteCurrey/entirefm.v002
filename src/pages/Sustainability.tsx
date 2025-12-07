import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Leaf, TrendingDown, Battery, Recycle, Award, Target, Building2, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FAQSection } from "@/components/shared/FAQSection";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { SchemaMarkup } from "@/components/shared/SchemaMarkup";

const Sustainability = () => {
  const faqs = [
    {
      question: "How does EntireFM help reduce carbon emissions?",
      answer: "We implement energy-efficient systems, optimize HVAC performance, upgrade to LED lighting, and provide real-time monitoring to identify waste. Our PPM approach prevents equipment running inefficiently, directly reducing your Scope 1 and 2 emissions."
    },
    {
      question: "Can you help us meet net-zero targets?",
      answer: "Yes. We provide carbon baseline assessments, retrofit recommendations, renewable energy integration, and ongoing reporting aligned with SECR, ESOS, and PPN 06/21 requirements."
    },
    {
      question: "What sustainability certifications does EntireFM hold?",
      answer: "We maintain ISO 14001 environmental management certification and work with clients pursuing BREEAM, LEED, and SKA ratings. Our engineers are trained in energy-efficient installation and low-carbon technologies."
    },
    {
      question: "How do you report on sustainability performance?",
      answer: "We provide monthly energy consumption reports, carbon intensity metrics, waste diversion rates, and progress against your ESG targets. Data is integrated into your preferred reporting platforms."
    },
    {
      question: "What's the ROI on sustainability improvements?",
      answer: "Typical clients see 15-30% energy cost reductions within 12 months through our optimization programs. Payback periods for LED upgrades average 18-24 months, with BMS improvements often under 3 years."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Sustainability & Net Zero FM Services | EntireFM</title>
        <meta name="description" content="Drive your net-zero targets with EntireFM's sustainable facilities management. Energy optimization, carbon reduction, and environmental compliance across UK portfolios." />
        <link rel="canonical" href="https://www.entirefm.com/sustainability" />
      </Helmet>

      <SchemaMarkup
        schema={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Sustainability & Net Zero FM Services",
          "description": "Sustainable facilities management services helping organizations achieve net-zero targets through energy optimization, carbon reduction, and environmental compliance.",
          "provider": {
            "@type": "Organization",
            "name": "EntireFM",
            "url": "https://entirefm.com"
          },
          "serviceType": "Facilities Management"
        }}
      />

      <div className="min-h-screen bg-gradient-to-b from-background to-secondary/10 pt-20">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Sustainability & Net Zero" }
          ]}
        />

        {/* Hero Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Leaf className="h-4 w-4" />
              Net Zero Committed
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Sustainability & Net Zero FM
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Achieve your environmental targets without compromising performance. Data-driven FM that reduces carbon, cuts energy costs, and delivers measurable ESG outcomes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/request-proposal">Request Carbon Assessment</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/resources/energy-esg">Energy & ESG Guide</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Impact Metrics */}
        <section className="py-16 px-4 bg-card/50">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card className="p-6 text-center">
                <TrendingDown className="h-10 w-10 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold mb-1">27%</div>
                <div className="text-sm text-muted-foreground">Average Energy Reduction</div>
              </Card>
              <Card className="p-6 text-center">
                <Recycle className="h-10 w-10 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold mb-1">89%</div>
                <div className="text-sm text-muted-foreground">Waste Diversion Rate</div>
              </Card>
              <Card className="p-6 text-center">
                <Battery className="h-10 w-10 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold mb-1">£340k</div>
                <div className="text-sm text-muted-foreground">Annual Savings (avg client)</div>
              </Card>
              <Card className="p-6 text-center">
                <Award className="h-10 w-10 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold mb-1">ISO 14001</div>
                <div className="text-sm text-muted-foreground">Certified Operations</div>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Our Sustainability Framework</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="p-6">
                <BarChart3 className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Baseline & Strategy</h3>
                <p className="text-muted-foreground mb-4">
                  Comprehensive energy audits, carbon footprint analysis, and roadmap development aligned with SBTi and TCFD frameworks.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Energy consumption mapping</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Carbon baseline (Scope 1, 2, 3)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Net-zero trajectory planning</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-6">
                <Target className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Implementation</h3>
                <p className="text-muted-foreground mb-4">
                  Retrofit programs, technology upgrades, and operational optimization delivering measurable carbon and cost savings.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>LED lighting conversions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>HVAC efficiency upgrades</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Solar & renewable integration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Water conservation systems</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-6">
                <Building2 className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Monitoring & Reporting</h3>
                <p className="text-muted-foreground mb-4">
                  Real-time dashboards, automated ESG reporting, and compliance support for SECR, ESOS, and investor requirements.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Live energy monitoring (BMS)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Monthly impact reports</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>SECR/ESOS submissions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>ESG disclosure support</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* Key Services */}
        <section className="py-16 px-4 bg-secondary/20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Sustainability Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">Energy Management</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">→</span>
                    <span>ISO 50001 energy management systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">→</span>
                    <span>HVAC optimization & BMS tuning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">→</span>
                    <span>Lighting efficiency upgrades (LED, sensors)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">→</span>
                    <span>Renewable energy integration (solar, heat pumps)</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">Carbon Reduction</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">→</span>
                    <span>Scope 1, 2, 3 carbon assessments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">→</span>
                    <span>Net-zero roadmap development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">→</span>
                    <span>Refrigerant management (F-Gas compliance)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">→</span>
                    <span>Fleet electrification support</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">Waste & Circularity</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">→</span>
                    <span>Zero-to-landfill programs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">→</span>
                    <span>Recycling & segregation strategies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">→</span>
                    <span>Circular economy material sourcing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">→</span>
                    <span>Waste audit & reduction planning</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">Compliance & Reporting</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">→</span>
                    <span>SECR (Streamlined Energy & Carbon Reporting)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">→</span>
                    <span>ESOS (Energy Savings Opportunity Scheme)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">→</span>
                    <span>PPN 06/21 carbon reduction plans</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">→</span>
                    <span>BREEAM, LEED, SKA support</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* Case Example */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 bg-gradient-to-br from-primary/10 to-secondary/10">
              <h2 className="text-2xl font-bold mb-6">Client Impact: 800,000 sq ft Retail Portfolio</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  <strong className="text-foreground">Challenge:</strong> Major UK retailer needed to meet 2030 net-zero targets across 32 stores while maintaining operational budgets.
                </p>
                <p>
                  <strong className="text-foreground">Solution:</strong> Comprehensive retrofit program including LED upgrades, HVAC optimization, solar installations, and real-time monitoring via BMS integration.
                </p>
                <p>
                  <strong className="text-foreground">Results:</strong>
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>32% reduction in Scope 1 & 2 emissions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>£420,000 annual energy cost savings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>92% waste diversion from landfill</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>SECR compliant reporting delivered monthly</span>
                  </li>
                </ul>
              </div>
            </Card>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 px-4 bg-secondary/20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Sustainability FAQs</h2>
            <FAQSection faqs={faqs} />
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Accelerate Your Net-Zero Journey?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Get a free carbon baseline assessment and discover your pathway to sustainable FM.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/request-proposal">Request Assessment</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/contact">Speak to Sustainability Team</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Sustainability;