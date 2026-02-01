import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { 
  CheckCircle2, 
  AlertTriangle, 
  Lightbulb, 
  Shield, 
  ArrowRight, 
  Phone, 
  FileCheck,
  Clock,
  Battery,
  Eye,
  Download
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { FAQSection } from "@/components/shared/FAQSection";
import { ServiceSchema, FAQSchema } from "@/components/shared/SchemaMarkup";
import { downloadEmergencyLightingChecklist } from "@/utils/generateCompliancePDF";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import ServiceHeroSection from "@/components/shared/ServiceHeroSection";
import AnimatedSection from "@/components/shared/AnimatedSection";
import FeatureCardGrid from "@/components/shared/FeatureCardGrid";
import StatsBanner from "@/components/shared/StatsBanner";
import CTASection from "@/components/shared/CTASection";
import ContentSection from "@/components/shared/ContentSection";
import { TrustBar } from "@/components/shared/TrustBar";

const EmergencyLighting = () => {
  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Emergency Lighting Compliance" }
  ];

  const heroStats = [
    { value: "BS 5266", label: "Certified" },
    { value: "3hr", label: "Duration Testing" },
    { value: "Monthly", label: "Function Tests" },
    { value: "24/7", label: "Support" }
  ];

  const features = [
    {
      icon: Lightbulb,
      title: "Monthly Function Tests",
      description: "Regular verification that all emergency lighting units operate correctly."
    },
    {
      icon: Clock,
      title: "Annual 3-Hour Duration",
      description: "Full battery capacity testing to BS 5266 requirements with certification."
    },
    {
      icon: Battery,
      title: "Battery Replacements",
      description: "Proactive battery management and replacement before failure occurs."
    },
    {
      icon: Eye,
      title: "Escape Route Mapping",
      description: "Lux level verification ensuring adequate illumination on all escape routes."
    },
    {
      icon: FileCheck,
      title: "Digital Certification",
      description: "Instant downloadable certificates with photo evidence and audit trails."
    },
    {
      icon: Shield,
      title: "Rapid Remedials",
      description: "Same-visit repairs where possible, priority scheduling for failures."
    }
  ];

  const stats = [
    { value: "100", suffix: "%", label: "Compliance Rate" },
    { value: "3", suffix: "hr", label: "Duration Tested" },
    { value: "<48", suffix: "hr", label: "Remedial Response" },
    { value: "Zero", label: "Test Failures" }
  ];

  const complianceItems = [
    { system: "Emergency Lighting", frequency: "Monthly", regulation: "BS 5266-1", scope: "Functional test (flick test) of all luminaires" },
    { system: "Emergency Lighting", frequency: "Annually", regulation: "BS 5266-1", scope: "Full 3-hour duration test with battery discharge" },
    { system: "Exit Signage", frequency: "Monthly", regulation: "BS 5266-1", scope: "Illumination verification and condition check" },
    { system: "Central Battery", frequency: "Monthly", regulation: "BS 5266-1", scope: "Charger output, battery condition, alarm tests" },
    { system: "Central Battery", frequency: "Annually", regulation: "BS 5266-1", scope: "Full load duration test with capacity verification" },
    { system: "Maintained Fittings", frequency: "Monthly", regulation: "BS 5266-1", scope: "Lamp condition and mains switching test" },
    { system: "Non-Maintained", frequency: "Monthly", regulation: "BS 5266-1", scope: "Activation on mains failure simulation" }
  ];

  const testingServices = [
    "Monthly functional testing",
    "Annual 3-hour duration testing",
    "Signage illumination performance",
    "Escape route coverage mapping",
    "Battery and fitting replacements",
    "Logbooks & digital certification",
    "Lux level measurements",
    "Central battery system testing"
  ];

  const faqs = [
    {
      question: "What causes a failed duration test?",
      answer: "Ageing batteries, poor charging circuits or insufficient capacity can all cause emergency lighting duration tests to fail. Regular maintenance and timely battery replacements prevent these issues."
    },
    {
      question: "Who is responsible for emergency lighting compliance?",
      answer: "The Responsible Person — usually the building owner, employer, or managing agent — is legally responsible for ensuring emergency lighting systems are compliant with BS 5266 standards."
    },
    {
      question: "Can tests be carried out after hours?",
      answer: "Absolutely. We schedule disruptive works responsibly to minimize operational impact, including evening and weekend testing when required."
    },
    {
      question: "How often should emergency lighting be tested?",
      answer: "Monthly functional tests (brief activation) and annual 3-hour duration tests are required under BS 5266-1. Central battery systems require additional monthly charger and alarm checks."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Emergency Lighting & BS 5266 Compliance UK | EntireFM</title>
        <meta 
          name="description" 
          content="BS 5266 certified emergency lighting testing, 3-hour duration verification and rapid remedials. Evacuation safety compliance across UK commercial estates."
        />
        <link rel="canonical" href="https://entirefm.com/services/emergency-lighting" />
      </Helmet>

      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema 
        name="Emergency Lighting & Evacuation Safety Compliance"
        description="BS 5266 certified emergency lighting testing, 3-hour duration verification and remedials for compliant and safe evacuation."
        provider="EntireFM"
        areaServed="United Kingdom"
      />
      <FAQSchema faqs={faqs} />

      {/* Hero Section */}
      <ServiceHeroSection
        breadcrumbItems={breadcrumbItems}
        title="Evacuation Safety When Visibility Fails"
        description="BS 5266 certified testing and 3-hour duration verification. When power fails, your escape routes stay illuminated — guaranteed."
        stats={heroStats}
        primaryCTA={{ label: "Request Duration Test", href: "/request-proposal", icon: ArrowRight }}
        secondaryCTA={{ label: "0800 024 8550", href: "tel:08000248550", icon: Phone }}
        backgroundImage="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80"
      />

      {/* Trust Bar */}
      <TrustBar variant="compact" />

      {/* Features Grid */}
      <ContentSection
        title="Complete Emergency Lighting Coverage"
        subtitle="From monthly function tests to annual duration verification — ensuring your evacuation routes are always safe."
        centered
      >
        <FeatureCardGrid features={features} columns={3} variant="gradient" />
      </ContentSection>

      {/* Stats Banner */}
      <StatsBanner stats={stats} variant="gradient" />

      {/* Risk Section */}
      <ContentSection
        title="When Emergency Lighting Fails, Evacuation Fails"
        subtitle="In an emergency, people don't panic because of fire — they panic because they can't see."
        variant="muted"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[
            { icon: AlertTriangle, text: "Evacuation slows" },
            { icon: AlertTriangle, text: "Injury & liability rise" },
            { icon: AlertTriangle, text: "Insurers reject claims" },
            { icon: AlertTriangle, text: "Enforcement escalates" }
          ].map((item, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <div className="flex items-center gap-4 p-6 bg-card border border-destructive/20 rounded-xl">
                <item.icon className="w-6 h-6 text-destructive flex-shrink-0" />
                <span className="font-light text-foreground">{item.text}</span>
              </div>
            </AnimatedSection>
          ))}
        </div>
        <AnimatedSection delay={0.4}>
          <div className="mt-8 p-6 bg-charcoal text-white rounded-xl max-w-2xl mx-auto text-center">
            <p className="text-lg font-medium">Compliance isn't optional — it's life preservation.</p>
          </div>
        </AnimatedSection>
      </ContentSection>

      {/* Testing Services */}
      <ContentSection
        title="Full BS 5266 Compliance Delivery"
        subtitle="Everything you need for emergency lighting compliance, delivered by certified engineers."
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {testingServices.map((service, index) => (
            <AnimatedSection key={index} delay={index * 0.03}>
              <div className="flex items-start gap-3 p-4 bg-gradient-to-br from-muted/50 to-background border border-border rounded-xl hover:border-primary/30 transition-all">
                <Lightbulb className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="font-light">{service}</span>
              </div>
            </AnimatedSection>
          ))}
        </div>
        <AnimatedSection delay={0.3}>
          <p className="text-lg font-medium text-primary text-center mt-8">
            Your evacuation stays safe — even when power fails.
          </p>
        </AnimatedSection>
      </ContentSection>

      {/* Compliance Table */}
      <ContentSection
        title="Emergency Lighting Testing Requirements"
        subtitle="UK regulatory requirements under BS 5266 — all managed through our digital compliance platform."
        variant="gradient"
      >
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="overflow-hidden rounded-2xl border border-border bg-card">
              <table className="w-full">
                <thead>
                  <tr className="bg-charcoal text-white">
                    <th className="text-left p-5 font-medium">System Type</th>
                    <th className="text-left p-5 font-medium">Frequency</th>
                    <th className="text-left p-5 font-medium">Regulation</th>
                    <th className="text-left p-5 font-medium">Scope</th>
                  </tr>
                </thead>
                <tbody>
                  {complianceItems.map((item, index) => (
                    <tr key={index} className={`border-t border-border ${index % 2 === 0 ? 'bg-muted/30' : 'bg-background'}`}>
                      <td className="p-5 font-medium text-foreground">{item.system}</td>
                      <td className="p-5">
                        <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${
                          item.frequency === 'Monthly' ? 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400' :
                          'bg-primary/10 text-primary'
                        }`}>
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
              <p className="font-medium text-foreground">Monthly functional tests and annual 3-hour duration tests required.</p>
              <Button onClick={downloadEmergencyLightingChecklist} variant="default" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Download Checklist
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </ContentSection>

      {/* Live Remedials */}
      <ContentSection
        title="Live Remedials — Zero Exposure"
        subtitle="Any failure identified during testing triggers immediate action."
        variant="muted"
      >
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            { title: "Risk-Coded", description: "Severity categorized for prioritization" },
            { title: "Costed", description: "Transparent pricing with no surprises" },
            { title: "Resolved Rapidly", description: "Fast deployment, minimal downtime" }
          ].map((item, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <div className="p-8 bg-card border border-border rounded-2xl text-center h-full">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-3">{item.title}</h3>
                <p className="text-muted-foreground font-light">{item.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
        <AnimatedSection delay={0.4}>
          <p className="text-lg font-medium text-primary text-center mt-8">
            We don't leave evacuation safety to chance.
          </p>
        </AnimatedSection>
      </ContentSection>

      {/* Digital Governance */}
      <ContentSection
        title="Digital Compliance Governance"
        subtitle="Every test. Every asset. Every result. Stored electronically with full audit trails."
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[
            { icon: FileCheck, title: "Photo Evidence", desc: "Visual proof of every test and condition" },
            { icon: Clock, title: "Remedial Logs", desc: "Complete lifecycle tracking" },
            { icon: Shield, title: "Digital Certificates", desc: "Downloadable compliance proof" },
            { icon: AlertTriangle, title: "Re-test Alerts", desc: "Automatic scheduling reminders" }
          ].map((item, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <div className="p-6 bg-card border border-border rounded-xl text-center h-full">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-medium mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground font-light">{item.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
        <AnimatedSection delay={0.4}>
          <div className="mt-8 p-6 bg-primary/10 border border-primary/20 rounded-xl max-w-2xl mx-auto text-center">
            <p className="text-lg font-medium">Auditors love this. Insurers expect it.</p>
          </div>
        </AnimatedSection>
      </ContentSection>

      {/* Related Services */}
      <ContentSection
        title="Related Services"
        subtitle="Comprehensive fire and life safety solutions."
        centered
        variant="muted"
      >
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { title: "Fire Alarm Systems", href: "/services/fire-alarms", description: "BS 5839 detection and alarm testing" },
            { title: "Fire Extinguishers", href: "/services/fire-extinguishers", description: "Annual servicing and certification" },
            { title: "Fire Doors", href: "/services/fire-doors", description: "Quarterly inspection and remedials" }
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
        title="Keep Your Escape Routes Illuminated"
        description="Request an emergency lighting compliance proposal. Expert testing, rapid remedials, complete certification."
        primaryLabel="Request Duration Test"
        primaryHref="/request-proposal"
        secondaryLabel="Call 0800 024 8550"
        secondaryHref="tel:08000248550"
        variant="dark"
      />
    </>
  );
};

export default EmergencyLighting;
