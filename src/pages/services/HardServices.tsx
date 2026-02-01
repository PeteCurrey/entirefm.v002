import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { CheckCircle2, Shield, ArrowRight, Phone, Wrench, Zap, Droplets, Flame, Building, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SidebarCTA } from "@/components/shared/SidebarCTA";
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
      description: "EICR testing, distribution boards, fault-finding, and emergency systems."
    },
    {
      icon: Wrench,
      title: "Mechanical Services", 
      description: "Pumps, motors, conveyors, HVAC machinery, and pressurisation systems."
    },
    {
      icon: Droplets,
      title: "Plumbing & Drainage",
      description: "Pipework, leaks, booster sets, hot & cold water systems."
    },
    {
      icon: Flame,
      title: "Gas & Heating",
      description: "Commercial gas safety, boiler PPM, and plant room optimisation."
    },
    {
      icon: Building,
      title: "Building Fabric",
      description: "Joinery, locks, roof repairs, glazing, and fire doors."
    },
    {
      icon: Lightbulb,
      title: "Lighting Systems",
      description: "LED upgrades, emergency lighting, and control gear maintenance."
    }
  ];

  const stats = [
    { value: "500", suffix: "+", label: "Sites Managed" },
    { value: "2", suffix: "hr", label: "Response Time" },
    { value: "98", suffix: "%", label: "First-Time Fix" },
    { value: "40", suffix: "%", label: "Cost Savings" }
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
        backgroundImage="/images/services/hard-fm-hero.jpg"
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

      <div className="container mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">

              {/* Why It Matters */}
              <section className="bg-charcoal text-white p-8 rounded-lg">
                <h2 className="text-3xl font-light mb-6">
                  Why Hard FM Matters
                </h2>
                <p className="text-lg font-light mb-6">
                  If your assets fail, productivity stops. Customers leave. Revenue leaks.
                  We keep your environment operational — always.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                    <span className="font-light">Planned Preventative Maintenance (PPM) aligned to SFG20</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                    <span className="font-light">Fast-response Reactive Maintenance</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                    <span className="font-light">M&E Asset Lifecycle Planning</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                    <span className="font-light">Real-time job tracking + engineer ETA visibility</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                    <span className="font-light">Compliance reporting senior leadership can trust</span>
                  </div>
                </div>
              </section>

              {/* What We Cover - Table Format */}
              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  What We Cover
                </h2>
                <p className="text-muted-foreground font-light mb-6">
                  Hard FM service delivery through qualified UK specialists:
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-muted/50">
                        <th className="text-left p-4 font-medium border border-border">Service Category</th>
                        <th className="text-left p-4 font-medium border border-border">Includes</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-4 border border-border font-medium">Electrical Services</td>
                        <td className="p-4 border border-border font-light text-muted-foreground">Testing (EICR), maintenance, fault-finding, distribution boards</td>
                      </tr>
                      <tr>
                        <td className="p-4 border border-border font-medium">Mechanical Services</td>
                        <td className="p-4 border border-border font-light text-muted-foreground">Pumps, motors, conveyors, HVAC machinery, pressurisation</td>
                      </tr>
                      <tr>
                        <td className="p-4 border border-border font-medium">Plumbing & Drainage</td>
                        <td className="p-4 border border-border font-light text-muted-foreground">Pipework, leaks, booster sets, hot & cold water</td>
                      </tr>
                      <tr>
                        <td className="p-4 border border-border font-medium">Gas & Heating</td>
                        <td className="p-4 border border-border font-light text-muted-foreground">Commercial gas safety, boiler PPM, plant room optimisation</td>
                      </tr>
                      <tr>
                        <td className="p-4 border border-border font-medium">Building Fabric</td>
                        <td className="p-4 border border-border font-light text-muted-foreground">Joinery, locks, roof repairs, glazing, fire doors</td>
                      </tr>
                      <tr>
                        <td className="p-4 border border-border font-medium">Lighting</td>
                        <td className="p-4 border border-border font-light text-muted-foreground">LED upgrades, emergency lighting, control gear</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* What You Get */}
              <section className="bg-muted/30 p-8 rounded-lg">
                <h2 className="text-3xl font-light mb-6">
                  What You Get as Standard
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "SLA-driven response times proven in KPIs",
                    "Before & after photographic & video reports",
                    "Full statutory compliance dashboard",
                    "Director-level communication — no corporate scripts",
                    "Lifecycle risk forecasting for asset investment planning",
                    "Transparent fixed pricing or T&M — your call"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                      <span className="font-light">{item}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Compliance Framework */}
              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Compliance & Statutory Considerations
                </h2>
                <p className="text-muted-foreground font-light mb-6">
                  We help you hit every regulatory requirement with zero admin burden:
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    "SFG20 maintenance guidance",
                    "Electricity at Work Regulations",
                    "Gas Safety (Installation & Use) Regulations",
                    "Building Regulations Part L",
                    "FRA / PAS 79 support for fire strategy",
                    "F-Gas compliance for refrigerants"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 border border-border rounded-lg">
                      <Shield className="w-5 h-5 text-accent shrink-0 mt-1" />
                      <span className="font-light text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <Button variant="outline" asChild>
                    <Link to="/contact">Book a Compliance Audit</Link>
                  </Button>
                </div>
              </section>

              {/* FAQs */}
              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-6">
                  <div className="border-l-4 border-accent pl-6">
                    <h3 className="font-medium mb-2">How often should M&E systems be serviced?</h3>
                    <p className="text-sm font-light text-muted-foreground">
                      Typically quarterly or biannual for most commercial assets, aligned to SFG20. Critical systems may require monthly inspection.
                    </p>
                  </div>
                  <div className="border-l-4 border-accent pl-6">
                    <h3 className="font-medium mb-2">Do you manage multi-site portfolios?</h3>
                    <p className="text-sm font-light text-muted-foreground">
                      Yes — our CAFM platform manages grouped PPM plans and reporting across your entire UK estate.
                    </p>
                  </div>
                  <div className="border-l-4 border-accent pl-6">
                    <h3 className="font-medium mb-2">Do you provide 24/7 emergency call-outs?</h3>
                    <p className="text-sm font-light text-muted-foreground">
                      Absolutely. If critical systems fail, we roll immediately. 2-hour response time as standard.
                    </p>
                  </div>
                  <div className="border-l-4 border-accent pl-6">
                    <h3 className="font-medium mb-2">What is included in hard services FM?</h3>
                    <p className="text-sm font-light text-muted-foreground">
                      All mechanical, electrical, and building fabric maintenance including HVAC, electrical installations, plumbing, gas systems, BMS controls, emergency systems, and structural repairs with PPM and reactive support.
                    </p>
                  </div>
                </div>
              </section>

              {/* Final CTA */}
              <section className="border-t border-border pt-12">
                <div className="text-center bg-muted/30 p-12 rounded-lg">
                  <h2 className="text-3xl font-light mb-4">
                    Don't wait for a system failure to expose the cracks.
                  </h2>
                  <p className="text-lg text-muted-foreground font-light mb-8 max-w-2xl mx-auto">
                    Request a proposal tailored to your assets and operational risk profile.
                  </p>
                  <Button size="lg" asChild>
                    <Link to="/contact">Request Hard Services Proposal</Link>
                  </Button>
                </div>
              </section>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24">
              <SidebarCTA />
            </div>
          </aside>
        </div>
      </div>
    </>
  );
};

export default HardServices;
