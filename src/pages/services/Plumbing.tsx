import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { 
  CheckCircle2, 
  AlertTriangle, 
  ArrowRight, 
  Phone,
  Droplets,
  Flame,
  ThermometerSun,
  Wrench,
  Shield,
  Clock,
  FileCheck,
  BadgeCheck,
  Download
} from "lucide-react";
import { generateCompliancePDF } from "@/utils/generateCompliancePDF";
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
import heroImage from "@/assets/plumbing-hero.jpg";

const Plumbing = () => {
  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Plumbing & Gas Safety" }
  ];

  const heroStats = [
    { value: "Gas Safe", label: "Registered" },
    { value: "2", suffix: "hr", label: "Emergency Response" },
    { value: "CP42", label: "Certified" },
    { value: "24/7", label: "Support" }
  ];

  const features = [
    {
      icon: Flame,
      title: "Gas Safety",
      description: "CP42 inspections, commercial gas appliances, and annual safety certification."
    },
    {
      icon: ThermometerSun,
      title: "Boiler Services",
      description: "Commercial boiler servicing, repairs, and efficiency optimisation."
    },
    {
      icon: Droplets,
      title: "Water Systems",
      description: "Hot & cold water, TMV servicing, and water hygiene compliance."
    },
    {
      icon: Wrench,
      title: "Pipework & Drainage",
      description: "Leak detection, repairs, CCTV surveys, and drainage maintenance."
    },
    {
      icon: Shield,
      title: "Emergency Response",
      description: "24/7 call-outs for burst pipes, gas leaks, and boiler failures."
    },
    {
      icon: FileCheck,
      title: "Compliance Management",
      description: "Certificate tracking, renewal reminders, and portfolio reporting."
    }
  ];

  const stats = [
    { value: "500", suffix: "+", label: "Sites Covered" },
    { value: "2", suffix: "hr", label: "Emergency Response" },
    { value: "100", suffix: "%", label: "Gas Safe" },
    { value: "24/7", label: "Availability" }
  ];

  const plumbingServices = [
    "Commercial gas safety inspections (CP42)",
    "Boiler servicing & repairs",
    "Gas appliance installation & commissioning",
    "Pipework installation, repair & upgrades",
    "Leak detection (water & gas)",
    "Hot & cold water system maintenance",
    "TMV (thermostatic mixing valve) servicing",
    "Drainage repairs & CCTV surveys",
    "Commercial catering gas equipment",
    "Emergency plumbing & gas call-outs",
    "Water pressure optimisation",
    "Backflow prevention & testing"
  ];

  const complianceTable = [
    { system: "Gas Appliances", frequency: "Annually", regulation: "Gas Safety Regs", scope: "Gas appliances, pipework, ventilation, flue integrity" },
    { system: "Commercial Boilers", frequency: "Annually", regulation: "Manufacturer Spec", scope: "Burner efficiency, controls, safety devices, combustion analysis" },
    { system: "TMV Servicing", frequency: "Annually", regulation: "HTM 04-01", scope: "Temperature verification, scald risk prevention" },
    { system: "Gas Interlock Systems", frequency: "Annually", regulation: "BS 6173", scope: "Ventilation failure detection & gas shut-off verification" },
    { system: "Backflow Prevention", frequency: "Annually", regulation: "Water Regs", scope: "RPZ valve testing and certification" },
    { system: "Gas Tightness Testing", frequency: "On Install", regulation: "IGEM/UP/1B", scope: "Pipework integrity and leak detection" },
    { system: "Combustion Analysis", frequency: "Annually", regulation: "Gas Safe", scope: "CO/CO2 readings, flue gas analysis, efficiency" }
  ];

  const getFrequencyBadgeColor = (frequency: string) => {
    if (frequency === "Monthly") return "bg-orange-500/20 text-orange-600 border-orange-500/30";
    if (frequency === "Quarterly") return "bg-yellow-500/20 text-yellow-600 border-yellow-500/30";
    if (frequency === "6-Monthly") return "bg-blue-500/20 text-blue-600 border-blue-500/30";
    if (frequency === "Annually") return "bg-primary/20 text-primary border-primary/30";
    return "bg-purple-500/20 text-purple-600 border-purple-500/30";
  };

  const plumbingComplianceItems = [
    { system: "Gas Appliances", frequency: "Annually", regulation: "Gas Safety Regs", scope: "Gas appliances, pipework, ventilation, flue integrity" },
    { system: "Commercial Boilers", frequency: "Annually", regulation: "Manufacturer Spec", scope: "Burner efficiency, controls, safety devices, combustion analysis" },
    { system: "TMV Servicing", frequency: "Annually", regulation: "HTM 04-01", scope: "Temperature verification, scald risk prevention" },
    { system: "Gas Interlock Systems", frequency: "Annually", regulation: "BS 6173", scope: "Ventilation failure detection & gas shut-off verification" },
    { system: "Backflow Prevention", frequency: "Annually", regulation: "Water Regs", scope: "RPZ valve testing and certification" },
    { system: "Gas Tightness Testing", frequency: "On Install", regulation: "IGEM/UP/1B", scope: "Pipework integrity and leak detection" },
    { system: "Combustion Analysis", frequency: "Annually", regulation: "Gas Safe", scope: "CO/CO2 readings, flue gas analysis, efficiency" }
  ];

  const handleDownloadPlumbingChecklist = () => {
    generateCompliancePDF({
      title: "Plumbing & Gas Safety Compliance Checklist",
      subtitle: "UK Statutory Testing Requirements — Gas Safety Regulations, HTM 04-01",
      items: plumbingComplianceItems,
      footerNote: "All Gas Safe registered engineers. All certificates tracked digitally."
    });
  };

  const deliverables = [
    {
      title: "CP42 Certificate Management",
      description: "All gas safety certificates tracked digitally with renewal reminders before expiry."
    },
    {
      title: "Emergency Response",
      description: "24/7 call-out for burst pipes, gas leaks, boiler failures, and drainage emergencies."
    },
    {
      title: "Multi-Site Gas Safety",
      description: "Portfolio-wide gas safety compliance reporting for directors and asset managers."
    },
    {
      title: "Leak Detection Technology",
      description: "Thermal imaging and acoustic leak detection to find hidden water and gas leaks fast."
    }
  ];

  const faqs = [
    {
      question: "How often should commercial gas appliances be serviced?",
      answer: "Annually as a legal minimum under Gas Safety (Installation & Use) Regulations. High-use commercial catering equipment may require more frequent inspections based on manufacturer recommendations and usage intensity."
    },
    {
      question: "What is a CP42 gas safety certificate?",
      answer: "CP42 is the commercial equivalent of a CP12 (domestic gas safety certificate). It certifies all gas appliances and pipework are safe and compliant with Gas Safety Regulations, and is required annually for commercial premises."
    },
    {
      question: "Do you handle emergency plumbing call-outs?",
      answer: "Yes. 24/7 emergency response for burst pipes, water leaks, boiler failures, and gas emergencies across UK portfolios. 2-hour response SLA as standard for critical failures."
    },
    {
      question: "Are your engineers Gas Safe registered?",
      answer: "All our gas engineers hold valid Gas Safe registration and commercial gas qualifications (CODNCO1, CIGA1, CORT1, etc.). Registration can be verified on the Gas Safe Register website."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Commercial Plumbing & Gas Safety UK | CP42 Certification | EntireFM</title>
        <meta 
          name="description" 
          content="Gas Safe registered plumbing and gas safety services. CP42 certification, boiler servicing, emergency call-outs, and compliance management for commercial buildings."
        />
        <link rel="canonical" href="https://entirefm.com/services/plumbing" />
      </Helmet>

      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema 
        name="Plumbing & Gas Safety"
        description="Commercial plumbing maintenance, gas safety inspections, and compliance management across the UK."
        provider="EntireFM"
        areaServed="United Kingdom"
      />
      <FAQSchema faqs={faqs} />

      {/* Hero Section */}
      <ServiceHeroSection
        breadcrumbItems={breadcrumbItems}
        title="Plumbing & Gas That Works. Every Single Time."
        description="Commercial plumbing, gas safety, and compliance management — delivered by Gas Safe registered engineers with 24/7 emergency support."
        stats={heroStats}
        primaryCTA={{ label: "Request Plumbing Proposal", href: "/request-proposal", icon: ArrowRight }}
        secondaryCTA={{ label: "0800 024 8550", href: "tel:08000248550", icon: Phone }}
        backgroundImage={heroImage}
      />

      {/* Trust Bar */}
      <TrustBar variant="compact" />

      {/* Features Grid */}
      <ContentSection
        title="Complete Plumbing & Gas Coverage"
        subtitle="All plumbing, gas, and water systems maintained by Gas Safe registered engineers with commercial qualifications."
        centered
      >
        <FeatureCardGrid features={features} columns={3} variant="gradient" />
      </ContentSection>

      {/* Stats Banner */}
      <StatsBanner stats={stats} variant="gradient" />

      {/* Risk Impact */}
      <ContentSection
        title="The Cost of Plumbing & Gas Failures"
        subtitle="When plumbing and gas systems fail, the consequences are immediate and severe."
        variant="muted"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[
            { icon: AlertTriangle, text: "Water damage escalates into six-figure claims" },
            { icon: AlertTriangle, text: "Gas leaks create immediate life safety risk" },
            { icon: AlertTriangle, text: "Operations grind to a halt" },
            { icon: AlertTriangle, text: "HSE prosecution exposure becomes real" }
          ].map((item, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <div className="flex flex-col items-center text-center gap-4 p-6 bg-card border border-border rounded-xl">
                <item.icon className="w-8 h-8 text-destructive" />
                <span className="font-light text-foreground text-sm">{item.text}</span>
              </div>
            </AnimatedSection>
          ))}
        </div>
        <AnimatedSection delay={0.4}>
          <div className="mt-8 p-6 bg-charcoal text-white rounded-xl max-w-2xl mx-auto text-center">
            <p className="text-lg font-medium">We engineer reliability into every tap, pipe, and appliance.</p>
          </div>
        </AnimatedSection>
      </ContentSection>

      {/* Services List */}
      <ContentSection
        title="Plumbing & Gas Services"
        subtitle="Comprehensive commercial plumbing and gas safety services across all system types."
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {plumbingServices.map((service, index) => (
            <AnimatedSection key={index} delay={index * 0.03}>
              <div className="flex items-start gap-3 p-4 bg-gradient-to-br from-muted/50 to-background border border-border rounded-xl hover:border-primary/30 transition-all">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="font-light">{service}</span>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </ContentSection>

      {/* Compliance Table */}
      <ContentSection
        title="Statutory Testing Frequency Table"
        subtitle="UK gas safety regulations and testing frequencies — all managed through our digital compliance platform."
        variant="gradient"
      >
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <div className="overflow-x-auto rounded-2xl border border-border bg-card">
              <table className="w-full min-w-[700px]">
                <thead>
                  <tr className="bg-charcoal text-white">
                    <th className="text-left p-5 font-medium">System / Component</th>
                    <th className="text-left p-5 font-medium">Frequency</th>
                    <th className="text-left p-5 font-medium">Regulation</th>
                    <th className="text-left p-5 font-medium">Scope</th>
                  </tr>
                </thead>
                <tbody>
                  {complianceTable.map((item, index) => (
                    <tr key={index} className={`border-t border-border ${index % 2 === 0 ? 'bg-muted/30' : 'bg-background'}`}>
                      <td className="p-5 font-medium text-foreground">{item.system}</td>
                      <td className="p-5">
                        <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium border ${getFrequencyBadgeColor(item.frequency)}`}>
                          {item.frequency}
                        </span>
                      </td>
                      <td className="p-5 font-light text-muted-foreground">{item.regulation}</td>
                      <td className="p-5 font-light text-muted-foreground">{item.scope}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 p-4 bg-primary/10 border border-primary/20 rounded-xl">
              <p className="font-medium text-foreground">All Gas Safe registered engineers. Certificates tracked digitally.</p>
              <Button onClick={handleDownloadPlumbingChecklist} variant="default" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Download Checklist
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </ContentSection>

      {/* What You Get */}
      <ContentSection
        title="What You Get as Standard"
        subtitle="Every plumbing and gas contract includes comprehensive service delivery and proactive compliance management."
        variant="muted"
      >
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {deliverables.map((item, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <div className="p-8 bg-card border border-border rounded-2xl hover:border-primary/30 transition-all h-full">
                <h3 className="text-xl font-medium mb-4 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground font-light leading-relaxed">{item.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </ContentSection>

      {/* How We Deliver */}
      <ContentSection
        title="How We Deliver"
        subtitle="Gas Safe registered engineers, transparent pricing, and 24/7 emergency response."
      >
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <AnimatedSection delay={0}>
            <div className="p-8 bg-card border border-border rounded-2xl h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <BadgeCheck className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-medium">Gas Safe Engineers</h3>
              </div>
              <ul className="space-y-3">
                {[
                  "Gas Safe registered (verifiable)",
                  "Commercial gas qualifications",
                  "CODNCO1, CIGA1, CORT1 certified",
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
                <h3 className="text-xl font-medium">Emergency Response</h3>
              </div>
              <ul className="space-y-3">
                {[
                  "24/7 emergency call-out",
                  "2-hour response SLA",
                  "Burst pipes & gas leaks prioritised",
                  "National coverage"
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
        subtitle="Comprehensive M&E solutions beyond plumbing and gas."
        centered
        variant="muted"
      >
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { title: "HVAC Services", href: "/services/hvac", description: "Heating, ventilation, and air conditioning" },
            { title: "Hard FM Services", href: "/services/hard-fm", description: "Complete M&E maintenance" },
            { title: "Water Hygiene", href: "/services/water-hygiene", description: "Legionella compliance (L8)" }
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
        title="Don't Wait for a Gas Emergency or Catastrophic Leak"
        description="Request a plumbing and gas safety audit across your portfolio today. Expert advice, transparent pricing, no obligation."
        primaryLabel="Get Your Gas Safety Plan"
        primaryHref="/request-proposal"
        secondaryLabel="Call 0800 024 8550"
        secondaryHref="tel:08000248550"
        variant="dark"
      />
    </>
  );
};

export default Plumbing;
