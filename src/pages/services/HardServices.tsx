import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { 
  CheckCircle2, 
  Shield, 
  ArrowRight, 
  Phone, 
  Wrench, 
  Zap, 
  Droplets, 
  Flame, 
  Building, 
  Lightbulb,
  Clock,
  FileCheck,
  AlertTriangle,
  TrendingUp
} from "lucide-react";
import heroImage from "@/assets/hard-services-hero.jpg";
import { Button } from "@/components/ui/button";
import { FAQSection } from "@/components/shared/FAQSection";
import { ServiceSchema, FAQSchema } from "@/components/shared/SchemaMarkup";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import ServiceHeroSection from "@/components/shared/ServiceHeroSection";
import AnimatedSection from "@/components/shared/AnimatedSection";
import FeatureCardGrid from "@/components/shared/FeatureCardGrid";
import StatsBanner from "@/components/shared/StatsBanner";
import CTASection from "@/components/shared/CTASection";
import ContentSection from "@/components/shared/ContentSection";
import { TrustBar } from "@/components/shared/TrustBar";

const HardServices = () => {
  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Hard Services & M&E" }
  ];

  const heroStats = [
    { value: "99.5", suffix: "%", label: "Uptime SLA" },
    { value: "2", suffix: "hr", label: "Emergency Response" },
    { value: "100", suffix: "%", label: "Compliance" },
    { value: "24/7", label: "Helpdesk" }
  ];

  const features = [
    {
      icon: Zap,
      title: "Electrical Services",
      description: "EICR testing, distribution boards, fault-finding, emergency systems, and power infrastructure."
    },
    {
      icon: Wrench,
      title: "Mechanical Services", 
      description: "Pumps, motors, conveyors, HVAC machinery, pressurisation, and mechanical plant."
    },
    {
      icon: Droplets,
      title: "Plumbing & Drainage",
      description: "Pipework, leak detection, booster sets, hot & cold water systems, and drainage."
    },
    {
      icon: Flame,
      title: "Gas & Heating",
      description: "Commercial gas safety, boiler PPM, plant room optimisation, and heating systems."
    },
    {
      icon: Building,
      title: "Building Fabric",
      description: "Joinery, locks, roof repairs, glazing, fire doors, and structural maintenance."
    },
    {
      icon: Lightbulb,
      title: "Lighting Systems",
      description: "LED upgrades, emergency lighting, control gear, and energy-efficient solutions."
    }
  ];

  const stats = [
    { value: "500", suffix: "+", label: "Sites Managed" },
    { value: "2", suffix: "hr", label: "Response Time" },
    { value: "98", suffix: "%", label: "First-Time Fix" },
    { value: "40", suffix: "%", label: "Cost Savings" }
  ];

  const whyHardFM = [
    {
      title: "Planned Preventative Maintenance",
      description: "SFG20-aligned PPM schedules prevent failures before they occur, extending asset life and reducing emergency callouts."
    },
    {
      title: "Rapid Reactive Response",
      description: "2-hour emergency response SLA with real-time engineer tracking and direct communication throughout."
    },
    {
      title: "Asset Lifecycle Planning",
      description: "Condition monitoring, risk forecasting, and capital planning to optimise replacement timing and budgets."
    }
  ];

  const complianceItems = [
    { regulation: "SFG20", description: "Maintenance task scheduling" },
    { regulation: "BS 7671", description: "Electrical installations (18th Edition)" },
    { regulation: "Gas Safety Regulations", description: "Commercial gas appliances" },
    { regulation: "BS 5839-1", description: "Fire detection and alarm systems" },
    { regulation: "BS 5266-1", description: "Emergency lighting" },
    { regulation: "F-Gas Regulations", description: "Refrigerant handling & leak detection" }
  ];

  const deliverables = [
    "SLA-driven response times proven in KPIs",
    "Before & after photographic & video reports",
    "Full statutory compliance dashboard",
    "Director-level communication — no corporate scripts",
    "Lifecycle risk forecasting for asset investment planning",
    "Transparent fixed pricing or T&M — your call"
  ];

  const faqs = [
    {
      question: "What is included in hard services FM?",
      answer: "Hard services cover all mechanical, electrical, and building fabric maintenance including HVAC systems, electrical installations, plumbing, gas systems, lifts, BMS controls, emergency systems, and structural repairs. We deliver planned preventative maintenance (PPM), reactive repairs, statutory compliance testing, and minor project works."
    },
    {
      question: "How often does M&E equipment need servicing?",
      answer: "Service frequencies are determined by manufacturer guidelines, SFG20 schedules, and statutory requirements. Typical frequencies: HVAC quarterly, electrical testing every 5 years (EICR), gas appliances annually, emergency lighting monthly tests with annual duration tests, and fire alarms weekly call points with quarterly full system tests."
    },
    {
      question: "Do you support multi-site UK portfolios?",
      answer: "Yes. We manage FM contracts across multiple UK sites with standardised service delivery, centralised helpdesk, consistent reporting, and dedicated account management. Our CAFM platform provides unified visibility across your entire portfolio."
    },
    {
      question: "What is your emergency response time?",
      answer: "Emergency M&E failures receive a 2-hour response time as standard, with critical life safety issues prioritised immediately. Our 24/7 helpdesk triages all calls and dispatches our mobile engineer network across the UK."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Hard Services & M&E Maintenance | Facilities Management UK | EntireFM</title>
        <meta 
          name="description" 
          content="Full hard FM solutions: HVAC, electrical, plumbing, gas, and building fabric. Guaranteed uptime, 24/7 support, and full compliance across the UK."
        />
        <link rel="canonical" href="https://entirefm.com/services/hard-fm" />
      </Helmet>

      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema 
        name="Hard Services & M&E Maintenance"
        description="Comprehensive mechanical, electrical, and building fabric maintenance services for commercial buildings across the UK."
        provider="EntireFM"
        areaServed="United Kingdom"
      />
      <FAQSchema faqs={faqs} />

      {/* Hero Section */}
      <ServiceHeroSection
        breadcrumbItems={breadcrumbItems}
        title="Hard Services & M&E"
        description="Guaranteed uptime. Full compliance. Zero excuses. Mission-critical maintenance for buildings that cannot afford downtime."
        stats={heroStats}
        primaryCTA={{ label: "Request Proposal", href: "/request-proposal", icon: ArrowRight }}
        secondaryCTA={{ label: "24/7 Support", href: "tel:08000248550", icon: Phone }}
        backgroundImage={heroImage}
      />

      {/* Trust Bar */}
      <TrustBar variant="compact" />

      {/* Features Grid */}
      <ContentSection
        title="Complete Hard FM Coverage"
        subtitle="All mechanical, electrical, and building fabric services delivered by qualified UK specialists with trade-specific accreditations."
        centered
      >
        <FeatureCardGrid features={features} columns={3} variant="gradient" />
      </ContentSection>

      {/* Stats Banner */}
      <StatsBanner stats={stats} variant="gradient" />

      {/* Why Hard FM Matters */}
      <ContentSection
        title="Why Hard FM Matters"
        subtitle="If your assets fail, productivity stops. Customers leave. Revenue leaks. We keep your environment operational — always."
        variant="muted"
      >
        <div className="grid lg:grid-cols-3 gap-8">
          {whyHardFM.map((item, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <div className="h-full p-8 bg-card border border-border rounded-2xl hover:border-primary/30 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  {index === 0 && <Clock className="w-6 h-6 text-primary" />}
                  {index === 1 && <AlertTriangle className="w-6 h-6 text-primary" />}
                  {index === 2 && <TrendingUp className="w-6 h-6 text-primary" />}
                </div>
                <h3 className="text-xl font-medium mb-4 text-foreground group-hover:text-primary transition-colors">{item.title}</h3>
                <p className="text-muted-foreground font-light leading-relaxed">{item.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </ContentSection>

      {/* What You Get as Standard */}
      <ContentSection
        title="What You Get as Standard"
        subtitle="Every hard FM contract includes comprehensive service delivery, transparent reporting, and proactive asset management."
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {deliverables.map((item, index) => (
            <AnimatedSection key={index} delay={index * 0.05}>
              <div className="flex items-start gap-4 p-6 bg-gradient-to-br from-muted/50 to-background border border-border rounded-xl hover:border-primary/30 transition-all">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <span className="font-light text-foreground">{item}</span>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </ContentSection>

      {/* Statutory Testing Frequency Table */}
      <ContentSection
        title="Statutory Testing Frequency"
        subtitle="UK regulatory compliance requirements mapped to testing frequencies. All certificates managed through our digital compliance platform."
        variant="gradient"
      >
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="overflow-hidden rounded-2xl border border-border bg-card">
              <table className="w-full">
                <thead>
                  <tr className="bg-charcoal text-white">
                    <th className="text-left p-5 font-medium">Regulation / Standard</th>
                    <th className="text-left p-5 font-medium">Scope</th>
                  </tr>
                </thead>
                <tbody>
                  {complianceItems.map((item, index) => (
                    <tr key={index} className={`border-t border-border ${index % 2 === 0 ? 'bg-muted/30' : 'bg-background'}`}>
                      <td className="p-5 font-medium text-foreground">{item.regulation}</td>
                      <td className="p-5 font-light text-muted-foreground">{item.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimatedSection>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" asChild className="hover-lift">
              <Link to="/services/compliance">
                <Shield className="w-4 h-4 mr-2" />
                View Compliance Services
              </Link>
            </Button>
            <Button asChild className="hover-lift">
              <Link to="/request-proposal">
                Book a Compliance Audit
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </ContentSection>

      {/* Service Delivery Model */}
      <ContentSection
        title="How We Deliver"
        subtitle="Multi-skilled engineers, integrated PPM schedules, and 24/7 reactive response ensure your buildings operate without interruption."
        variant="muted"
      >
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <AnimatedSection delay={0}>
            <div className="p-8 bg-card border border-border rounded-2xl h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-medium">Qualified Engineers</h3>
              </div>
              <ul className="space-y-3">
                {[
                  "18th Edition electricians",
                  "F-Gas certified HVAC technicians",
                  "Gas Safe registered engineers",
                  "Manufacturer-trained specialists"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground font-light">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="p-8 bg-card border border-border rounded-2xl h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-medium">24/7 Response</h3>
              </div>
              <ul className="space-y-3">
                {[
                  "2-hour emergency response SLA",
                  "National helpdesk with engineer dispatch",
                  "Real-time job tracking",
                  "Escalation protocols for critical failures"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground font-light">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </ContentSection>

      {/* Related Services */}
      <ContentSection
        title="Explore Related Services"
        subtitle="Comprehensive hard FM solutions across all mechanical, electrical, and building services disciplines."
        centered
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "HVAC Services", href: "/services/hvac", icon: Flame },
            { title: "Electrical", href: "/services/electrical", icon: Zap },
            { title: "Plumbing", href: "/services/plumbing", icon: Droplets },
            { title: "PPM Contracts", href: "/services/ppm", icon: FileCheck }
          ].map((service, idx) => (
            <AnimatedSection key={idx} delay={idx * 0.1}>
              <Link 
                to={service.href}
                className="block p-6 bg-gradient-to-br from-muted/50 to-background border border-border rounded-xl hover:border-primary/50 hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-medium mb-2 group-hover:text-primary transition-colors">{service.title}</h3>
                <span className="text-sm text-primary flex items-center gap-1">
                  Learn more
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </ContentSection>

      {/* FAQ Section */}
      <ContentSection
        title="Frequently Asked Questions"
        centered
        variant="muted"
      >
        <div className="max-w-3xl mx-auto">
          <FAQSection faqs={faqs} />
        </div>
      </ContentSection>

      {/* CTA Section */}
      <CTASection
        title="Don't Wait for a System Failure"
        description="Request a proposal tailored to your assets and operational risk profile. Expert advice, transparent pricing, no obligation."
        primaryLabel="Request Hard FM Proposal"
        primaryHref="/request-proposal"
        secondaryLabel="Call 0800 024 8550"
        secondaryHref="tel:08000248550"
        variant="dark"
      />
    </>
  );
};

export default HardServices;
