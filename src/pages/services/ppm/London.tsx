import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Download,
  CheckCircle2,
  Settings,
  BarChart3,
  Shield,
  Zap,
  TrendingDown
} from "lucide-react";
import { SidebarCTA } from "@/components/shared/SidebarCTA";
import { FAQSection } from "@/components/shared/FAQSection";
import { ServiceSchema, LocalBusinessSchema } from "@/components/shared/SchemaMarkup";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { useConversionTracking } from "@/hooks/useConversionTracking";

const PPMLondon = () => {
  const { trackDownload, trackProposalRequest } = useConversionTracking();

  const handleDownloadCalendar = () => {
    trackDownload('PPM Compliance Calendar');
  };

  const handleProposalRequest = () => {
    trackProposalRequest('/ppm/london');
  };

  const faqs = [
    {
      question: "How quickly can we onboard a new PPM plan?",
      answer: "Typical onboarding takes 2-4 weeks including site surveys, asset audits, and system setup. For urgent requirements, we can deploy emergency interim programmes within 48 hours while completing full integration."
    },
    {
      question: "Does PPM reduce operational costs?",
      answer: "Yes — significantly. Proactive maintenance typically reduces unplanned callouts by 40-60%, extends asset life by 20-30%, and prevents costly emergency repairs. Most clients achieve ROI within 12-18 months through reduced downtime and avoided capital replacement costs."
    },
    {
      question: "Will you take over mid-contract from another provider?",
      answer: "Yes. We specialize in seamless transitions including documentation handover, asset audits, remedial catch-up, and compliance gap closure. We ensure zero service disruption during the changeover period."
    },
    {
      question: "What compliance systems are included in PPM programmes?",
      answer: "All legally required hard services: electrical testing (EICR), fire protection systems, HVAC/TM44/F-Gas, emergency lighting (BS 5266), water hygiene (ACOP L8), and gas safety including CP42 catering compliance."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Planned Preventive Maintenance London | PPM Compliance | Entire FM</title>
        <meta 
          name="description" 
          content="Proactive PPM programmes integrating fire, electrical, HVAC, water and gas compliance for London estates. Digital governance, predictive maintenance. Build programme." 
        />
        <meta 
          name="keywords" 
          content="PPM London, planned preventive maintenance London, compliance management London, CAFM integration, asset lifecycle management, predictive maintenance London" 
        />
        <link rel="canonical" href="https://entirefm.com/ppm/london" />
      </Helmet>

      <ServiceSchema
        name="Planned Preventive Maintenance Services - London"
        description="Proactive maintenance programmes integrating fire, electrical, HVAC, water and gas compliance"
        areaServed="London"
        provider="Entire FM"
      />

      <LocalBusinessSchema
        name="Entire FM - PPM Services London"
        address={{
          street: "London Service Centre",
          city: "London",
          postalCode: "EC1",
          country: "UK"
        }}
      />

      <BreadcrumbSchema 
        items={[
          { label: "Services", href: "/services" },
          { label: "PPM", href: "/services/ppm" },
          { label: "London" }
        ]}
      />

      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8 max-w-7xl">
          <Breadcrumb 
            items={[
              { label: "Services", href: "/services" },
              { label: "PPM", href: "/services/ppm" },
              { label: "London" }
            ]}
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
            <div className="lg:col-span-2 space-y-12">
              {/* Hero Section */}
              <section>
                <div className="flex items-center gap-2 mb-4">
                  <Settings className="w-8 h-8 text-primary" />
                  <span className="text-sm font-medium text-primary">Planned Preventive Maintenance</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-light mb-6">
                  Planned Preventive Maintenance & Asset Compliance – London
                </h1>
                <p className="text-xl text-muted-foreground font-light mb-8 leading-relaxed">
                  Proactive maintenance programmes integrating fire, electrical, HVAC, water and gas compliance — eliminating downtime and governance risk across London's commercial estates.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" asChild onClick={handleProposalRequest}>
                    <Link to="/contact">
                      Build My PPM Programme
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" onClick={handleDownloadCalendar}>
                    <Download className="mr-2 w-4 h-4" />
                    Download PPM Compliance Calendar
                  </Button>
                </div>
              </section>

              {/* Why PPM */}
              <section>
                <h2 className="text-3xl font-light mb-6">
                  PPM = Operational Continuity in London
                </h2>
                <p className="text-muted-foreground font-light leading-relaxed mb-6">
                  With London's density, complexity and regulatory oversight, reactive maintenance is commercial suicide.
                </p>
                <Card className="p-6 bg-destructive/5 border-destructive/20">
                  <h3 className="font-medium mb-4">Without PPM:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Shield className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                      <span className="font-light">Failures disrupt revenue and operations</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Shield className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                      <span className="font-light">Insurance cover collapses</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Shield className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                      <span className="font-light">Statutory compliance fails quietly — until it's too late</span>
                    </li>
                  </ul>
                </Card>
                <p className="text-primary font-medium mt-6">
                  PPM keeps the estate running — safely and profitably.
                </p>
              </section>

              {/* Complete Hard Services Integration */}
              <section>
                <h2 className="text-3xl font-light mb-6">
                  Complete Hard Services Integration
                </h2>
                <p className="text-muted-foreground font-light leading-relaxed mb-6">
                  Every legally required system under one plan:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <Card className="p-4">
                    <h3 className="font-medium mb-3 flex items-center gap-2">
                      <Zap className="w-5 h-5 text-primary" />
                      Electrical Compliance
                    </h3>
                    <p className="text-sm text-muted-foreground font-light">EICR testing and certification</p>
                  </Card>
                  
                  <Card className="p-4">
                    <h3 className="font-medium mb-3 flex items-center gap-2">
                      <Shield className="w-5 h-5 text-primary" />
                      Fire Protection
                    </h3>
                    <p className="text-sm text-muted-foreground font-light">Alarms, extinguishers, risers, emergency lighting</p>
                  </Card>
                  
                  <Card className="p-4">
                    <h3 className="font-medium mb-3 flex items-center gap-2">
                      <Settings className="w-5 h-5 text-primary" />
                      HVAC Systems
                    </h3>
                    <p className="text-sm text-muted-foreground font-light">TM44 audits, F-Gas governance, AHU servicing</p>
                  </Card>
                  
                  <Card className="p-4">
                    <h3 className="font-medium mb-3 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      Water & Gas Safety
                    </h3>
                    <p className="text-sm text-muted-foreground font-light">ACOP L8 Legionella control, Gas Safe CP42 catering</p>
                  </Card>
                </div>
                <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                  <p className="text-primary font-medium">
                    No missed tests. No expired certificates. No operational blindspots.
                  </p>
                </div>
              </section>

              {/* Predictive Maintenance */}
              <section>
                <h2 className="text-3xl font-light mb-6">
                  Predictive Maintenance & Cost Avoidance
                </h2>
                <Card className="p-6 border-primary/20">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-medium mb-4 flex items-center gap-2">
                        <BarChart3 className="w-5 h-5 text-primary" />
                        Asset Intelligence
                      </h3>
                      <ul className="space-y-2 text-muted-foreground font-light">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                          <span>Lifecycle asset planning</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                          <span>Failure risk scoring</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                          <span>Critical spares strategy</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-medium mb-4 flex items-center gap-2">
                        <TrendingDown className="w-5 h-5 text-primary" />
                        Financial Planning
                      </h3>
                      <ul className="space-y-2 text-muted-foreground font-light">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                          <span>Capital expenditure forecasting</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                          <span>Budget certainty and cost control</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                          <span>ROI tracking and reporting</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-primary font-medium mt-6">
                    You see problems before they become downtime.
                  </p>
                </Card>
              </section>

              {/* Digital Governance */}
              <section>
                <h2 className="text-3xl font-light mb-6">
                  Digital Governance & CAFM Integration
                </h2>
                <p className="text-muted-foreground font-light leading-relaxed mb-6">
                  Through our platform:
                </p>
                <Card className="p-6">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="font-light">All jobs, certificates and logs tracked live</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="font-light">Remedials instantly traceable</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="font-light">SLA performance transparent</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="font-light">Renewal calendars auto-managed</span>
                    </li>
                  </ul>
                </Card>
                <p className="text-muted-foreground font-light leading-relaxed mt-6">
                  Say goodbye to compliance emails and spreadsheets.
                </p>
              </section>

              {/* Energy & ESG */}
              <section>
                <h2 className="text-3xl font-light mb-6">
                  Energy & ESG Performance
                </h2>
                <p className="text-muted-foreground font-light leading-relaxed mb-6">
                  PPM drives sustainability:
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <Card className="p-4 text-center">
                    <TrendingDown className="w-8 h-8 text-primary mx-auto mb-3" />
                    <h3 className="font-medium mb-2">Optimised HVAC Efficiency</h3>
                    <p className="text-sm text-muted-foreground font-light">Maintain peak performance</p>
                  </Card>
                  <Card className="p-4 text-center">
                    <Settings className="w-8 h-8 text-primary mx-auto mb-3" />
                    <h3 className="font-medium mb-2">Smart Controls</h3>
                    <p className="text-sm text-muted-foreground font-light">Automated efficiency strategies</p>
                  </Card>
                  <Card className="p-4 text-center">
                    <BarChart3 className="w-8 h-8 text-primary mx-auto mb-3" />
                    <h3 className="font-medium mb-2">Reduced Failures</h3>
                    <p className="text-sm text-muted-foreground font-light">Eliminate energy spikes</p>
                  </Card>
                </div>
                <p className="text-primary font-medium mt-6">
                  Save energy. Save carbon. Save budget.
                </p>
              </section>

              {/* Case Study */}
              <section>
                <Card className="p-8 bg-muted/50">
                  <span className="text-sm font-medium text-primary">CASE STUDY</span>
                  <h3 className="text-2xl font-light mt-2 mb-4">
                    Multi-Site Estate: 96% Compliance → 100% Compliance in 10 Weeks
                  </h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Major London property portfolio operator faced regulatory enforcement risk with fragmented compliance records and multiple expired certificates across 12 buildings. We deployed integrated PPM programme with digital governance platform — achieving 100% compliance within 10 weeks and reducing unplanned callouts by 40% through predictive maintenance strategies.
                  </p>
                </Card>
              </section>

              {/* Sectors */}
              <section>
                <h2 className="text-3xl font-light mb-6">
                  Sectors We Support in London
                </h2>
                <div className="flex flex-wrap gap-3">
                  {[
                    "Corporate Offices",
                    "PBSA & Universities",
                    "Retail & Hospitality",
                    "Public Sector Estates",
                    "Logistics & Industrial"
                  ].map((sector) => (
                    <span 
                      key={sector}
                      className="px-4 py-2 bg-primary/10 text-primary rounded-md font-light"
                    >
                      {sector}
                    </span>
                  ))}
                </div>
              </section>

              {/* Coverage Areas */}
              <section>
                <h2 className="text-3xl font-light mb-6">Local Coverage</h2>
                <p className="text-muted-foreground font-light leading-relaxed">
                  City, Canary Wharf, West End, Heathrow corridor, Stratford, Westminster, Docklands, and all Greater London boroughs.
                </p>
              </section>

              {/* FAQs */}
              <FAQSection faqs={faqs} />

              {/* Final CTA */}
              <section className="text-center py-12 px-6 bg-charcoal text-white rounded-lg">
                <h2 className="text-3xl font-light mb-4">
                  Guarantee Uptime. Eliminate Compliance Risk.
                </h2>
                <p className="text-gray-300 font-light mb-6 max-w-2xl mx-auto">
                  📩 london@entirefm.com
                </p>
                <Button size="lg" variant="secondary" asChild>
                  <Link to="/contact">
                    Build My PPM Programme
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </section>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <SidebarCTA />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PPMLondon;