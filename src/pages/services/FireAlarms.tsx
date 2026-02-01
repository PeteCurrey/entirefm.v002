import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { 
  CheckCircle2, 
  AlertTriangle, 
  Bell, 
  Shield, 
  ArrowRight, 
  Phone, 
  Zap,
  FileCheck,
  Clock,
  Users
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

const FireAlarms = () => {
  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Fire Alarm Systems" }
  ];

  const heroStats = [
    { value: "BS 5839", label: "Certified" },
    { value: "24/7", label: "Emergency Response" },
    { value: "98%", label: "SLA Met" },
    { value: "Zero", label: "Enforcement Notices" }
  ];

  const features = [
    {
      icon: Bell,
      title: "Fire Alarm Panels",
      description: "Addressable and conventional panel testing, maintenance and fault diagnosis."
    },
    {
      icon: Shield,
      title: "Detection Systems",
      description: "Smoke, heat, and multi-sensor detector testing and replacement."
    },
    {
      icon: Zap,
      title: "VESDA & Aspirating",
      description: "Specialist early warning system maintenance for high-value assets."
    },
    {
      icon: FileCheck,
      title: "Cause & Effect",
      description: "Logic validation, programming updates and integration testing."
    },
    {
      icon: Clock,
      title: "Emergency Response",
      description: "24/7 callout for panel faults and false alarm management."
    },
    {
      icon: Users,
      title: "Multi-Site Portfolios",
      description: "CAFM-integrated scheduling and reporting across estates."
    }
  ];

  const stats = [
    { value: "98", suffix: "%", label: "Remedial SLA Met" },
    { value: "100", suffix: "%", label: "Compliance Retention" },
    { value: "Zero", label: "Enforcement Notices" },
    { value: "24/7", label: "Response Available" }
  ];

  const maintenanceItems = [
    "Fire alarm panels (addressable & conventional)",
    "Smoke & heat detectors",
    "Manual call points",
    "Sounders, strobes & visual alarms",
    "Dampers & fire doors interfacing",
    "Aspirating & VESDA systems",
    "Cause & Effect programming",
    "Integration to sprinklers & extinguishing systems"
  ];

  const complianceItems = [
    { system: "Fire Alarm System", frequency: "Weekly", regulation: "BS 5839-1", scope: "Manual call point test (different zone each week)" },
    { system: "Fire Alarm System", frequency: "Quarterly", regulation: "BS 5839-1", scope: "25% of detectors tested, visual inspection, battery checks" },
    { system: "Fire Alarm System", frequency: "Annually", regulation: "BS 5839-1", scope: "100% detector test, cause & effect verification, full system check" },
    { system: "Emergency Lighting", frequency: "Monthly", regulation: "BS 5266-1", scope: "Functional test (flick test) of all luminaires" },
    { system: "Emergency Lighting", frequency: "Annually", regulation: "BS 5266-1", scope: "Full 3-hour duration test with battery discharge" },
    { system: "Fire Doors", frequency: "Quarterly", regulation: "RRO Article 17", scope: "Visual inspection, gap checks, ironmongery, intumescent seals" },
    { system: "Fire Doors", frequency: "Annually", regulation: "BS 8214", scope: "Comprehensive inspection by competent person" },
    { system: "Sprinkler Systems", frequency: "Weekly", regulation: "BS EN 12845", scope: "Visual check, pump test, pressure readings" },
    { system: "Sprinkler Systems", frequency: "Annually", regulation: "LPC Rules", scope: "Full flow test, valve inspection, comprehensive service" },
    { system: "Dry Risers", frequency: "6-Monthly", regulation: "BS 9990", scope: "Visual inspection, inlet/outlet checks" },
    { system: "Dry Risers", frequency: "Annually", regulation: "BS 9990", scope: "Wet pressure test to 10 bar for 15 minutes" },
    { system: "Fire Extinguishers", frequency: "Annually", regulation: "BS 5306-3", scope: "Service & certification by competent technician" },
    { system: "Smoke Control / AOVs", frequency: "Weekly", regulation: "BS EN 12101-2", scope: "Functional test of automatic vents" },
    { system: "Smoke Control / AOVs", frequency: "Annually", regulation: "BS 7346-8", scope: "Full system test and certification" }
  ];

  const faqs = [
    {
      question: "How often do fire alarms need testing?",
      answer: "Weekly user tests of call points (rotating zones) plus quarterly specialist maintenance and annual full system verification per BS 5839-1. We manage the entire schedule through our CAFM platform."
    },
    {
      question: "Do you service multi-site portfolios?",
      answer: "Yes — our CAFM platform simplifies cross-site scheduling, real-time job tracking and consolidated compliance reporting for estates of any size."
    },
    {
      question: "Can you respond to fire panel faults 24/7?",
      answer: "Absolutely. Our 24/7 helpdesk provides critical response for panel faults, false alarm management and emergency call-outs with guaranteed response times."
    },
    {
      question: "Do you handle Cause & Effect programming?",
      answer: "Yes — we validate logic, update programming where required, and test integration with fire suppression, HVAC shutdown, door release and access control systems."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Fire Alarm Maintenance & BS 5839 Compliance UK | EntireFM</title>
        <meta 
          name="description" 
          content="BS 5839 certified fire alarm testing, maintenance and 24/7 emergency response. Protecting people, property and legal liability across UK commercial estates."
        />
        <link rel="canonical" href="https://entirefm.com/services/fire-alarms" />
      </Helmet>

      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema 
        name="Fire Alarm Service & Maintenance"
        description="BS 5839 compliant fire alarm testing, maintenance, and 24/7 emergency response for commercial properties."
        provider="EntireFM"
        areaServed="United Kingdom"
      />
      <FAQSchema faqs={faqs} />

      {/* Hero Section */}
      <ServiceHeroSection
        breadcrumbItems={breadcrumbItems}
        title="Fire Safety with No Room for Error"
        description="BS 5839 certified testing that protects people, property, and your legal liability. 24/7 emergency response with zero enforcement notices across our portfolio."
        stats={heroStats}
        primaryCTA={{ label: "Request Fire Alarm Proposal", href: "/request-proposal", icon: ArrowRight }}
        secondaryCTA={{ label: "0800 024 8550", href: "tel:08000248550", icon: Phone }}
        backgroundImage="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2070&auto=format&fit=crop"
      />

      {/* Trust Bar */}
      <TrustBar variant="compact" />

      {/* Features Grid */}
      <ContentSection
        title="Complete Fire Alarm Coverage"
        subtitle="From addressable panels to VESDA systems — all life-safety detection maintained by certified engineers with 24/7 emergency support."
        centered
      >
        <FeatureCardGrid features={features} columns={3} variant="gradient" />
      </ContentSection>

      {/* Stats Banner */}
      <StatsBanner stats={stats} variant="gradient" />

      {/* Risk Section */}
      <ContentSection
        title="When Fire Protection Fails, Everything Fails"
        subtitle="Fires don't give second chances. Compliance isn't optional — it's life preservation."
        variant="muted"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[
            { icon: AlertTriangle, text: "People at risk" },
            { icon: AlertTriangle, text: "Criminal liability exposure" },
            { icon: AlertTriangle, text: "Insurance invalidation" },
            { icon: AlertTriangle, text: "Business shutdown" }
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
            <p className="text-lg font-medium">We keep your systems compliant, responsive, and ready.</p>
          </div>
        </AnimatedSection>
      </ContentSection>

      {/* Maintenance Items */}
      <ContentSection
        title="What We Maintain"
        subtitle="All critical detection and control components for complete fire safety coverage."
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {maintenanceItems.map((service, index) => (
            <AnimatedSection key={index} delay={index * 0.03}>
              <div className="flex items-start gap-3 p-4 bg-gradient-to-br from-muted/50 to-background border border-border rounded-xl hover:border-primary/30 transition-all">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="font-light">{service}</span>
              </div>
            </AnimatedSection>
          ))}
        </div>
        <AnimatedSection delay={0.3}>
          <p className="text-lg font-medium text-primary text-center mt-8">
            If it protects life — we maintain it.
          </p>
        </AnimatedSection>
      </ContentSection>

      {/* Statutory Testing Frequency Table */}
      <ContentSection
        title="Statutory Testing Frequency Table"
        subtitle="UK fire safety compliance requirements — all managed through our digital compliance platform."
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
                            item.frequency === 'Quarterly' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400' :
                            item.frequency === '6-Monthly' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' :
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
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="mt-6 p-4 bg-primary/10 border border-primary/20 rounded-xl text-center">
              <p className="font-medium text-foreground">All visits logged. All records stored. Easily retrievable for audits or HSE.</p>
            </div>
          </AnimatedSection>
        </div>
      </ContentSection>

      {/* Technology Advantage */}
      <ContentSection
        title="Our Technology Advantage"
        subtitle="Your fire system compliance is visible in real-time through our digital platform."
        variant="muted"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { title: "QR-coded asset tagging", desc: "Instant access to equipment history and records." },
            { title: "Digital certificates", desc: "Immediate access to compliance documentation." },
            { title: "Automatic expiry reminders", desc: "Never miss a test deadline or inspection window." },
            { title: "Mobile engineer updates", desc: "Real-time job status and completion notifications." },
            { title: "Cloud storage of all records", desc: "Complete audit trail accessible anytime, anywhere." },
            { title: "SLA tracking for downtime", desc: "Performance metrics that prove reliability." }
          ].map((item, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <div className="p-6 bg-card border border-border rounded-xl hover:border-primary/30 transition-all h-full">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-medium text-foreground">{item.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground font-light">{item.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
        <AnimatedSection delay={0.6}>
          <p className="text-lg font-medium text-primary text-center mt-8">
            No more "paper folder in the FM office".
          </p>
        </AnimatedSection>
      </ContentSection>

      {/* Delivery Model */}
      <ContentSection
        title="How We Deliver Fire Alarm Services"
        subtitle="BAFE certified engineers, integrated scheduling, and 24/7 emergency response."
      >
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <AnimatedSection delay={0}>
            <div className="p-8 bg-card border border-border rounded-2xl h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <FileCheck className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-medium">Qualified Engineers</h3>
              </div>
              <ul className="space-y-3">
                {[
                  "BAFE SP203-1 certified",
                  "FIA trained technicians",
                  "Manufacturer accredited",
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
                <h3 className="text-xl font-medium">Responsive Service</h3>
              </div>
              <ul className="space-y-3">
                {[
                  "4-hour emergency response SLA",
                  "Quarterly PPM scheduling",
                  "Real-time job tracking",
                  "Digital compliance certificates"
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
        subtitle="Comprehensive fire and life safety solutions."
        centered
        variant="muted"
      >
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { title: "Emergency Lighting", href: "/services/emergency-lighting", description: "BS 5266 evacuation safety testing" },
            { title: "Fire Extinguishers", href: "/services/fire-extinguishers", description: "Annual servicing and certification" },
            { title: "Dry Risers", href: "/services/dry-risers", description: "BS 9990 pressure testing" }
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
        title="Protect Your People and Property"
        description="Request a fire alarm maintenance proposal tailored to your portfolio. Expert compliance, transparent pricing, no obligation."
        primaryLabel="Request Fire Alarm Proposal"
        primaryHref="/request-proposal"
        secondaryLabel="Call 0800 024 8550"
        secondaryHref="tel:08000248550"
        variant="dark"
      />
    </>
  );
};

export default FireAlarms;
