import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { 
  CheckCircle2, 
  AlertTriangle, 
  ArrowRight, 
  Phone,
  Zap,
  FileCheck,
  Shield,
  Thermometer,
  Lightbulb,
  Clock,
  Camera,
  BadgeCheck
} from "lucide-react";
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

const Electrical = () => {
  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Electrical Compliance" }
  ];

  const heroStats = [
    { value: "NICEIC", label: "Approved" },
    { value: "5", suffix: "yr", label: "EICR Standard" },
    { value: "Same Day", label: "Remedials" },
    { value: "24/7", label: "Emergency" }
  ];

  const features = [
    {
      icon: FileCheck,
      title: "EICR Testing",
      description: "5-yearly fixed wire testing with clear C1-C3 coding and remedial recommendations."
    },
    {
      icon: Zap,
      title: "PAT Testing",
      description: "Portable appliance testing with asset tags, inventory management, and certificates."
    },
    {
      icon: Thermometer,
      title: "Thermal Imaging",
      description: "Distribution board analysis, hotspot detection, and predictive maintenance."
    },
    {
      icon: Lightbulb,
      title: "Emergency Lighting",
      description: "Monthly testing, annual duration tests, and battery replacements to BS 5266-1."
    },
    {
      icon: Shield,
      title: "Fire Alarms",
      description: "Weekly testing, quarterly servicing, and full system maintenance to BS 5839-1."
    },
    {
      icon: BadgeCheck,
      title: "Same-Day Remedials",
      description: "Immediate compliance breach fixes available with transparent pricing."
    }
  ];

  const stats = [
    { value: "1000", suffix: "+", label: "EICRs Completed" },
    { value: "Same", label: "Day Remedials" },
    { value: "100", suffix: "%", label: "Compliance Rate" },
    { value: "24/7", label: "Emergency Cover" }
  ];

  const serviceTable = [
    { service: "EICR Testing (5-Yearly Standard)", output: "Clear coding of risks (C1–C3) with photographic evidence" },
    { service: "Emergency Call-Outs & Remedial Works", output: "Same-day fixes for compliance breaches" },
    { service: "PAT Testing", output: "Asset tags + inventory for audit trail" },
    { service: "Distribution Board Maintenance", output: "Thermographic scanning + load analysis" },
    { service: "Lighting & Control Gear", output: "Energy efficiency upgrades & safety checks" },
    { service: "ARC / Panel Maintenance", output: "Minimising outages & switchgear failure" }
  ];

  const legalRequirements = [
    "Electricity at Work Regulations 1989",
    "BS 7671 requirements for electrical installations",
    "Landlord safety responsibilities (commercial tenancy)",
    "Insurance audit readiness"
  ];

  const faqs = [
    {
      question: "How often do I need an EICR?",
      answer: "Commercial premises require EICR testing every 5 years as standard, or more frequently based on building use and risk assessment. High-risk environments like industrial sites may require 3-yearly testing."
    },
    {
      question: "Can you carry out remedials after the inspection?",
      answer: "Yes — we quote instantly on-site and can start same day if required. All remedial works are completed by NICEIC-approved electricians with full certification."
    },
    {
      question: "Do you work out-of-hours?",
      answer: "Of course. We schedule electrical testing and remedials during low-occupancy periods to minimise disruption. Emergency response is available 24/7 for critical failures."
    },
    {
      question: "What do the C1, C2, C3 codes mean?",
      answer: "C1 indicates danger present requiring immediate action. C2 indicates potentially dangerous conditions requiring urgent remediation. C3 indicates improvement recommended but not immediately dangerous. We explain all findings in plain English."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Electrical Compliance & Testing UK | EICR & PAT Testing | EntireFM</title>
        <meta 
          name="description" 
          content="NICEIC-approved electrical testing and compliance. EICR, PAT testing, thermal imaging, and same-day remedials for commercial buildings across the UK."
        />
        <link rel="canonical" href="https://entirefm.com/services/electrical" />
      </Helmet>

      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema 
        name="Electrical Compliance & Testing"
        description="Commercial electrical testing, EICR certification, PAT testing, and electrical maintenance across the UK."
        provider="EntireFM"
        areaServed="United Kingdom"
      />
      <FAQSchema faqs={faqs} />

      {/* Hero Section */}
      <ServiceHeroSection
        breadcrumbItems={breadcrumbItems}
        title="Electrical Compliance Without the Guesswork"
        description="Safety assurance. Zero disruption. Full legal protection. EICR, PAT testing and remedials by NICEIC-approved UK specialists."
        stats={heroStats}
        primaryCTA={{ label: "Request Electrical Proposal", href: "/request-proposal", icon: ArrowRight }}
        secondaryCTA={{ label: "0800 024 8550", href: "tel:08000248550", icon: Phone }}
        backgroundImage="/images/services/electrical-hero.jpg"
      />

      {/* Trust Bar */}
      <TrustBar variant="compact" />

      {/* Features Grid */}
      <ContentSection
        title="Complete Electrical Coverage"
        subtitle="All electrical testing, compliance, and maintenance delivered by NICEIC-approved contractors with full certification."
        centered
      >
        <FeatureCardGrid features={features} columns={3} variant="gradient" />
      </ContentSection>

      {/* Stats Banner */}
      <StatsBanner stats={stats} variant="gradient" />

      {/* Why Compliance Matters */}
      <ContentSection
        title="Why Electrical Compliance Is a Board-Level Priority"
        subtitle="Electrical faults are silent threats — until they aren't. The consequences of non-compliance affect the entire organisation."
        variant="muted"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[
            { icon: AlertTriangle, text: "Fire risk" },
            { icon: AlertTriangle, text: "Life safety failures" },
            { icon: AlertTriangle, text: "Expensive downtime" },
            { icon: AlertTriangle, text: "Criminal liability for duty holders" }
          ].map((item, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <div className="flex items-center gap-4 p-6 bg-card border border-border rounded-xl">
                <item.icon className="w-6 h-6 text-destructive flex-shrink-0" />
                <span className="font-light text-foreground">{item.text}</span>
              </div>
            </AnimatedSection>
          ))}
        </div>
        <AnimatedSection delay={0.4}>
          <div className="mt-8 p-6 bg-charcoal text-white rounded-xl max-w-2xl mx-auto text-center">
            <p className="text-lg font-medium">We make sure none of that ever lands on your desk.</p>
          </div>
        </AnimatedSection>
      </ContentSection>

      {/* Services Table */}
      <ContentSection
        title="Services Delivered by Qualified UK Specialists"
        subtitle="Every service includes full certification, photographic evidence, and recommendations you can act on."
      >
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="overflow-hidden rounded-2xl border border-border bg-card">
              <table className="w-full">
                <thead>
                  <tr className="bg-charcoal text-white">
                    <th className="text-left p-5 font-medium">Service</th>
                    <th className="text-left p-5 font-medium">Output</th>
                  </tr>
                </thead>
                <tbody>
                  {serviceTable.map((item, index) => (
                    <tr key={index} className={`border-t border-border ${index % 2 === 0 ? 'bg-muted/30' : 'bg-background'}`}>
                      <td className="p-5 font-medium text-foreground">{item.service}</td>
                      <td className="p-5 font-light text-muted-foreground">{item.output}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimatedSection>
          <p className="text-center text-muted-foreground font-light mt-6">
            You get certificates with every visit — downloadable anytime via our portal.
          </p>
        </div>
      </ContentSection>

      {/* UK Legal Requirements */}
      <ContentSection
        title="UK Legal Requirements Covered"
        subtitle="Your compliance obligations — handled. We translate regulations into actions and deliver them on time."
        variant="gradient"
      >
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {legalRequirements.map((item, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <div className="flex items-start gap-4 p-6 bg-card border border-border rounded-xl">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <span className="font-light text-foreground">{item}</span>
              </div>
            </AnimatedSection>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <Button variant="outline" asChild className="hover-lift">
            <Link to="/services/compliance">
              <Shield className="w-4 h-4 mr-2" />
              View All Compliance Services
            </Link>
          </Button>
        </div>
      </ContentSection>

      {/* Reporting */}
      <ContentSection
        title="Reporting Clients Actually Use"
        subtitle="Every report is designed for action — no jargon, no hiding behind standards."
        variant="muted"
      >
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {[
            {
              icon: FileCheck,
              title: "Clear coding & recommended actions",
              description: "No ambiguity. Just clear next steps with priority ranking."
            },
            {
              icon: Camera,
              title: "Photographic evidence & timestamps",
              description: "Full audit trail for every inspection with before/after documentation."
            },
            {
              icon: BadgeCheck,
              title: "Costed remedials ready for approval",
              description: "Budget-ready pricing with no surprises or hidden extras."
            },
            {
              icon: Shield,
              title: "Root-cause insights",
              description: "Prevent repeat failures with actionable intelligence and trend analysis."
            }
          ].map((item, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <div className="flex items-start gap-4 p-6 bg-card border border-border rounded-xl hover:border-primary/30 transition-all">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium mb-2 text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground font-light">{item.description}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </ContentSection>

      {/* How We Deliver */}
      <ContentSection
        title="How We Deliver"
        subtitle="NICEIC-approved electricians, transparent pricing, and minimal disruption to your operations."
      >
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <AnimatedSection delay={0}>
            <div className="p-8 bg-card border border-border rounded-2xl h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <BadgeCheck className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-medium">Qualified Team</h3>
              </div>
              <ul className="space-y-3">
                {[
                  "NICEIC-approved contractors",
                  "18th Edition qualified electricians",
                  "City & Guilds 2391 inspection & testing",
                  "DBS checked for sensitive sites"
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
                <h3 className="text-xl font-medium">Flexible Delivery</h3>
              </div>
              <ul className="space-y-3">
                {[
                  "Out-of-hours testing available",
                  "Same-day remedial works",
                  "Minimal operational disruption",
                  "24/7 emergency response"
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
        title="Related Services"
        subtitle="Comprehensive electrical and compliance solutions."
        centered
        variant="muted"
      >
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { title: "Emergency Lighting", href: "/services/emergency-lighting", description: "Monthly testing and annual duration tests" },
            { title: "Fire Alarms", href: "/services/fire-alarms", description: "Weekly testing and quarterly servicing" },
            { title: "Hard FM Services", href: "/services/hard-fm", description: "Complete M&E maintenance" }
          ].map((service, idx) => (
            <AnimatedSection key={idx} delay={idx * 0.1}>
              <Link 
                to={service.href}
                className="block p-6 bg-card border border-border rounded-xl hover:border-primary/50 hover:shadow-lg transition-all group h-full"
              >
                <h3 className="text-lg font-medium mb-2 group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-sm text-muted-foreground font-light mb-4">{service.description}</p>
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
      >
        <div className="max-w-3xl mx-auto">
          <FAQSection faqs={faqs} />
        </div>
      </ContentSection>

      {/* CTA Section */}
      <CTASection
        title="Get Your Electrical Compliance Sorted"
        description="Request an EICR quote or book a compliance audit for your commercial estate. Expert advice, transparent pricing, no obligation."
        primaryLabel="Request Electrical Proposal"
        primaryHref="/request-proposal"
        secondaryLabel="Call 0800 024 8550"
        secondaryHref="tel:08000248550"
        variant="dark"
      />
    </>
  );
};

export default Electrical;
