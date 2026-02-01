import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { 
  CheckCircle2, 
  AlertTriangle, 
  Droplets, 
  Shield, 
  ArrowRight, 
  Phone, 
  FileCheck,
  Thermometer,
  FlaskConical,
  Clock,
  Download
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { FAQSection } from "@/components/shared/FAQSection";
import { ServiceSchema, FAQSchema } from "@/components/shared/SchemaMarkup";
import { downloadWaterHygieneChecklist } from "@/utils/generateCompliancePDF";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import ServiceHeroSection from "@/components/shared/ServiceHeroSection";
import AnimatedSection from "@/components/shared/AnimatedSection";
import FeatureCardGrid from "@/components/shared/FeatureCardGrid";
import StatsBanner from "@/components/shared/StatsBanner";
import CTASection from "@/components/shared/CTASection";
import ContentSection from "@/components/shared/ContentSection";
import { TrustBar } from "@/components/shared/TrustBar";

const WaterHygiene = () => {
  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Water Hygiene & Legionella Compliance" }
  ];

  const heroStats = [
    { value: "ACOP L8", label: "Compliant" },
    { value: "HSG274", label: "Aligned" },
    { value: "UKAS", label: "Lab Testing" },
    { value: "<48hr", label: "Remedials" }
  ];

  const features = [
    {
      icon: FileCheck,
      title: "Risk Assessments",
      description: "Full ACOP L8 compliant Legionella Risk Assessments with remedial recommendations."
    },
    {
      icon: Thermometer,
      title: "Temperature Monitoring",
      description: "Continuous monitoring and flushing programs to prevent stagnation."
    },
    {
      icon: FlaskConical,
      title: "UKAS Laboratory Testing",
      description: "Accredited sampling and analysis with rapid turnaround on results."
    },
    {
      icon: Droplets,
      title: "Tank Cleaning",
      description: "Complete water storage hygiene with chlorination and certification."
    },
    {
      icon: Shield,
      title: "TMV Servicing",
      description: "Thermostatic mixing valve calibration and fail-safe verification."
    },
    {
      icon: Clock,
      title: "Rapid Remedials",
      description: "Same-visit fixes where possible, <48hr for scheduled remediation."
    }
  ];

  const stats = [
    { value: "Zero", label: "Outbreaks" },
    { value: "UKAS", label: "Accredited Labs" },
    { value: "<48", suffix: "hr", label: "Remedial Response" },
    { value: "100", suffix: "%", label: "Audit Pass Rate" }
  ];

  const complianceItems = [
    { system: "Legionella Risk Assessment", frequency: "Every 2 Years", regulation: "ACOP L8", scope: "Full system survey, risk scoring, remedial recommendations" },
    { system: "Hot Water Temperature", frequency: "Monthly", regulation: "HSG274", scope: "Sentinel outlets — must reach 50°C within 1 minute" },
    { system: "Cold Water Temperature", frequency: "Monthly", regulation: "HSG274", scope: "Sentinel outlets — must be below 20°C within 2 minutes" },
    { system: "Water Sampling", frequency: "As Risk Dictates", regulation: "ACOP L8", scope: "Legionella bacteria testing via UKAS laboratory" },
    { system: "Tank Inspection", frequency: "Annually", regulation: "ACOP L8", scope: "Visual inspection, lid integrity, insulation, chlorination" },
    { system: "TMV Servicing", frequency: "Annually", regulation: "HSG274", scope: "Fail-safe verification, temperature calibration" },
    { system: "Dead Leg Removal", frequency: "On Identification", regulation: "ACOP L8", scope: "Elimination of stagnation risk points" },
    { system: "Flushing Regime", frequency: "Weekly", regulation: "HSG274", scope: "Little-used outlets flushed to prevent stagnation" }
  ];

  const services = [
    "Legionella Risk Assessments (LRAs)",
    "Temperature monitoring & flushing",
    "Sampling + UKAS laboratory testing",
    "TMV servicing & calibration",
    "Tank inspections, cleaning & chlorination",
    "Asset remedials to eliminate stagnation risk",
    "Dead leg identification and removal",
    "Schematic updates and documentation"
  ];

  const faqs = [
    {
      question: "What causes Legionella risk?",
      answer: "Stagnation, temperature abuse, biofilm formation and poor governance are the main causes of Legionella risk in water systems. Regular monitoring and maintenance prevent these conditions."
    },
    {
      question: "Who is legally responsible for control?",
      answer: "The building's Responsible Person — usually the owner, employer, or managing agent — is legally responsible. We support full execution of their compliance duties under ACOP L8."
    },
    {
      question: "How often should risk assessments be reviewed?",
      answer: "Full risk assessments should be renewed every 2 years, or sooner if there are significant changes to the water system, building use, or following any outbreak concerns."
    },
    {
      question: "What temperatures prevent Legionella growth?",
      answer: "Hot water should be stored at 60°C and distributed at 50°C+. Cold water should remain below 20°C. We verify these temperatures monthly at sentinel outlets."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Water Hygiene & Legionella Compliance UK | ACOP L8 | EntireFM</title>
        <meta 
          name="description" 
          content="ACOP L8 and HSG274 compliant water hygiene services. Legionella risk assessments, temperature monitoring, UKAS sampling and rapid remedials across UK estates."
        />
        <link rel="canonical" href="https://entirefm.com/services/water-hygiene" />
      </Helmet>

      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema 
        name="Water Hygiene & Legionella Compliance Services"
        description="ACOP L8 and HSG274 risk control across commercial estates — sampling, monitoring, flushing and remedial actions."
        provider="EntireFM"
        areaServed="United Kingdom"
      />
      <FAQSchema faqs={faqs} />

      {/* Hero Section */}
      <ServiceHeroSection
        breadcrumbItems={breadcrumbItems}
        title="Water Safety That Protects Public Health"
        description="ACOP L8 and HSG274 compliant water hygiene. Legionella risk assessments, UKAS sampling, temperature monitoring and rapid remedials across your estate."
        stats={heroStats}
        primaryCTA={{ label: "Request Risk Assessment", href: "/request-proposal", icon: ArrowRight }}
        secondaryCTA={{ label: "0800 024 8550", href: "tel:08000248550", icon: Phone }}
        backgroundImage="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1920&q=80"
      />

      {/* Trust Bar */}
      <TrustBar variant="compact" />

      {/* Features Grid */}
      <ContentSection
        title="Complete Water Hygiene Coverage"
        subtitle="From risk assessments to UKAS sampling — full Legionella control by certified water hygiene specialists."
        centered
      >
        <FeatureCardGrid features={features} columns={3} variant="gradient" />
      </ContentSection>

      {/* Stats Banner */}
      <StatsBanner stats={stats} variant="gradient" />

      {/* Risk Section */}
      <ContentSection
        title="Legionella Risk = Legal, Financial & Reputational Exposure"
        subtitle="A single outbreak can have devastating consequences for your organisation."
        variant="muted"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[
            { icon: AlertTriangle, text: "Criminal prosecution" },
            { icon: AlertTriangle, text: "Business shutdown" },
            { icon: AlertTriangle, text: "Headline damage" },
            { icon: AlertTriangle, text: "Long-term brand harm" }
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
            <p className="text-lg font-medium">We remove Legionella risk at the source.</p>
          </div>
        </AnimatedSection>
      </ContentSection>

      {/* Services List */}
      <ContentSection
        title="ACOP L8 / HSG274 Compliance Services"
        subtitle="Complete water hygiene management designed to eliminate risk and maintain compliance."
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <AnimatedSection key={index} delay={index * 0.03}>
              <div className="flex items-start gap-3 p-4 bg-gradient-to-br from-muted/50 to-background border border-border rounded-xl hover:border-primary/30 transition-all">
                <Droplets className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="font-light">{service}</span>
              </div>
            </AnimatedSection>
          ))}
        </div>
        <AnimatedSection delay={0.3}>
          <p className="text-lg font-medium text-primary text-center mt-8">
            Regulations met. Evidence proven.
          </p>
        </AnimatedSection>
      </ContentSection>

      {/* Compliance Table */}
      <ContentSection
        title="Water Hygiene Testing Requirements"
        subtitle="UK regulatory requirements under ACOP L8 and HSG274 — all managed through our digital compliance platform."
        variant="gradient"
      >
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <div className="overflow-hidden rounded-2xl border border-border bg-card">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-charcoal text-white">
                      <th className="text-left p-5 font-medium">System / Component</th>
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
                            item.frequency === 'Weekly' ? 'bg-destructive/10 text-destructive' :
                            item.frequency === 'Monthly' ? 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400' :
                            item.frequency === 'Annually' ? 'bg-primary/10 text-primary' :
                            item.frequency === 'Every 2 Years' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' :
                            'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'
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
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 p-4 bg-primary/10 border border-primary/20 rounded-xl">
              <p className="font-medium text-foreground">Legionella control requires ongoing monitoring and risk assessment refresh.</p>
              <Button onClick={downloadWaterHygieneChecklist} variant="default" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Download Checklist
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </ContentSection>

      {/* Remedials Section */}
      <ContentSection
        title="Remedials — Risk Closed, Same Visit Where Possible"
        subtitle="When risk appears, our team ensures immediate action."
        variant="muted"
      >
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            { title: "Risk-Rated Action", description: "Severity classified for prioritization" },
            { title: "Costed Fix", description: "Clear pricing with no surprises" },
            { title: "Scheduled Remedial", description: "Rapid deployment, minimal exposure" }
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
            No waiting while bacteria multiply.
          </p>
        </AnimatedSection>
      </ContentSection>

      {/* Digital Audit Trail */}
      <ContentSection
        title="Digital Audit Trail & Compliance Dashboard"
        subtitle="All evidence stored securely with complete traceability."
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[
            { icon: FileCheck, title: "Inspector-Ready", desc: "Audit packs always available" },
            { icon: Clock, title: "Renewal Alerts", desc: "Automatic scheduling reminders" },
            { icon: Shield, title: "Asset Records", desc: "Complete condition history" },
            { icon: Droplets, title: "Photo Logging", desc: "Visual evidence of all work" }
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
            <p className="text-lg font-medium">Insurers love it. CQC/HSE demand it.</p>
          </div>
        </AnimatedSection>
      </ContentSection>

      {/* Related Services */}
      <ContentSection
        title="Related Services"
        subtitle="Comprehensive building safety and compliance solutions."
        centered
        variant="muted"
      >
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { title: "Plumbing & Drainage", href: "/services/plumbing", description: "Commercial plumbing maintenance" },
            { title: "HVAC Systems", href: "/services/hvac", description: "Climate control and ventilation" },
            { title: "PPM Contracts", href: "/services/ppm", description: "Scheduled maintenance programmes" }
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
        title="Protect Public Health, Protect Your Business"
        description="Request a Legionella risk assessment tailored to your estate. Expert compliance, UKAS testing, complete certification."
        primaryLabel="Request Risk Assessment"
        primaryHref="/request-proposal"
        secondaryLabel="Call 0800 024 8550"
        secondaryHref="tel:08000248550"
        variant="dark"
      />
    </>
  );
};

export default WaterHygiene;
