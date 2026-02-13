import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { 
  CheckCircle2, 
  AlertTriangle, 
  ArrowRight, 
  Phone,
  Thermometer,
  Wind,
  Snowflake,
  Gauge,
  Leaf,
  Settings,
  FileCheck,
  Clock,
  Download
} from "lucide-react";
import heroImage from "@/assets/hvac-hero.jpg";
import { downloadHVACChecklist } from "@/utils/generateCompliancePDF";
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

const HVAC = () => {
  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "HVAC Maintenance" }
  ];

  const heroStats = [
    { value: "F-Gas", label: "Certified" },
    { value: "2", suffix: "hr", label: "Emergency Response" },
    { value: "SFG20", label: "Compliant" },
    { value: "24/7", label: "Support" }
  ];

  const features = [
    {
      icon: Snowflake,
      title: "Air Conditioning",
      description: "Split systems, VRV/VRF, and ducted AC maintenance across all major brands."
    },
    {
      icon: Thermometer,
      title: "Heating Systems",
      description: "Boilers, heat pumps, and underfloor heating servicing and repairs."
    },
    {
      icon: Wind,
      title: "Ventilation",
      description: "AHUs, extract systems, and indoor air quality management."
    },
    {
      icon: Gauge,
      title: "Chillers & Cooling",
      description: "Chilled water systems, close control, and server room cooling."
    },
    {
      icon: Settings,
      title: "BMS Integration",
      description: "Building management system optimisation and control calibration."
    },
    {
      icon: Leaf,
      title: "Energy Efficiency",
      description: "Seasonal commissioning, performance tuning, and carbon reduction."
    }
  ];

  const stats = [
    { value: "500", suffix: "+", label: "HVAC Sites" },
    { value: "2", suffix: "hr", label: "Response Time" },
    { value: "30", suffix: "%", label: "Energy Savings" },
    { value: "99", suffix: "%", label: "Uptime" }
  ];

  const hvacServices = [
    "Split system air conditioning",
    "VRF / VRV multi-split systems",
    "Chilled water systems",
    "AHU (air handling units)",
    "FCU (fan coil units)",
    "Rooftop packaged units",
    "Close control / server room cooling",
    "Heat pumps (air source & ground source)",
    "Ventilation & extract systems",
    "BMS-integrated climate control",
    "Refrigerant leak detection",
    "Energy performance optimization"
  ];

  const complianceItems = [
    { system: "F-Gas Systems", frequency: "Annually", regulation: "F-Gas Regulations", scope: "Leak detection, refrigerant logs, system certification" },
    { system: "Air Conditioning (>12kW)", frequency: "Every 5 Years", regulation: "TM44", scope: "Air conditioning energy assessment" },
    { system: "HVAC PPM", frequency: "Quarterly", regulation: "SFG20", scope: "PPM task scheduling and verification" },
    { system: "Building Regs Compliance", frequency: "On Install", regulation: "Part L", scope: "Energy efficiency compliance" },
    { system: "Filter Changes", frequency: "Monthly", regulation: "SFG20", scope: "Air handling unit filter replacement" },
    { system: "Coil Cleaning", frequency: "Annually", regulation: "SFG20", scope: "Evaporator and condenser coil cleaning" },
    { system: "Belt & Drive Inspection", frequency: "Quarterly", regulation: "SFG20", scope: "Fan belt tension, pulley alignment, drive condition" },
    { system: "Refrigerant Checks", frequency: "6-Monthly", regulation: "F-Gas", scope: "Pressure readings, leak detection, oil levels" }
  ];

  const getFrequencyBadgeColor = (frequency: string) => {
    if (frequency === "Monthly") return "bg-orange-500/20 text-orange-600 border-orange-500/30";
    if (frequency === "Quarterly") return "bg-yellow-500/20 text-yellow-600 border-yellow-500/30";
    if (frequency === "6-Monthly") return "bg-blue-500/20 text-blue-600 border-blue-500/30";
    if (frequency === "Annually") return "bg-primary/20 text-primary border-primary/30";
    return "bg-purple-500/20 text-purple-600 border-purple-500/30";
  };

  const faqs = [
    {
      question: "How often should HVAC systems be serviced?",
      answer: "Commercial HVAC systems require quarterly PPM visits as standard, with monthly filter changes, annual deep cleans, and bi-annual refrigerant checks. SFG20 schedules define specific frequencies based on system type and operational intensity."
    },
    {
      question: "What is included in HVAC maintenance?",
      answer: "Full-scope HVAC maintenance includes filter replacement, coil cleaning, refrigerant pressure checks, control calibration, belt inspections, fan motor lubrication, condenser cleaning, BMS integration checks, and thermographic surveys."
    },
    {
      question: "Do you hold F-Gas certification?",
      answer: "Yes. All our HVAC engineers hold valid F-Gas Category 1 certification for refrigerant handling, leak detection, and system commissioning in compliance with UK F-Gas regulations."
    },
    {
      question: "Can you service all HVAC brands?",
      answer: "We service all major commercial HVAC brands including Daikin, Mitsubishi, Toshiba, Carrier, Trane, York, and Lennox. We hold OEM partnerships for warranty-compliant servicing and hold critical spares for common models."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Commercial HVAC Maintenance & Air Conditioning UK | EntireFM</title>
        <meta 
          name="description" 
          content="F-Gas certified HVAC maintenance for commercial buildings. Air conditioning, heating, ventilation, and climate control with 24/7 emergency response across the UK."
        />
        <link rel="canonical" href="https://entirefm.com/services/hvac" />
      </Helmet>

      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema 
        name="HVAC Maintenance & Servicing"
        description="Commercial HVAC maintenance, air conditioning servicing, and climate control systems across the UK."
        provider="EntireFM"
        areaServed="United Kingdom"
      />
      <FAQSchema faqs={faqs} />

      {/* Hero Section */}
      <ServiceHeroSection
        breadcrumbItems={breadcrumbItems}
        title="HVAC That Doesn't Let You Down"
        description="Comfort, safety, and operational continuity — engineered into your air handling. F-Gas compliant servicing across all major brands with 24/7 emergency response."
        stats={heroStats}
        primaryCTA={{ label: "Request HVAC Proposal", href: "/request-proposal", icon: ArrowRight }}
        secondaryCTA={{ label: "0800 024 8550", href: "tel:08000248550", icon: Phone }}
        backgroundImage={heroImage}
      />

      {/* Trust Bar */}
      <TrustBar variant="compact" />

      {/* Features Grid */}
      <ContentSection
        title="Complete HVAC Coverage"
        subtitle="All heating, ventilation, and air conditioning systems maintained by F-Gas certified engineers with manufacturer training."
        centered
      >
        <FeatureCardGrid features={features} columns={3} variant="gradient" />
      </ContentSection>

      {/* Stats Banner */}
      <StatsBanner stats={stats} variant="gradient" />

      {/* Operational Impact */}
      <ContentSection
        title="When HVAC Fails, Everything Fails"
        subtitle="Climate control isn't a nice-to-have — it's operational infrastructure. Failures cascade across your entire operation."
        variant="muted"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[
            { icon: AlertTriangle, text: "Occupant complaints escalate" },
            { icon: AlertTriangle, text: "Productivity crashes" },
            { icon: AlertTriangle, text: "Energy waste skyrockets" },
            { icon: AlertTriangle, text: "Compliance failures stack up" }
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
            <p className="text-lg font-medium">We prevent every single one of those.</p>
          </div>
        </AnimatedSection>
      </ContentSection>

      {/* HVAC Services List */}
      <ContentSection
        title="HVAC Services We Deliver"
        subtitle="Comprehensive climate control maintenance across all system types and manufacturers."
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {hvacServices.map((service, index) => (
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
        subtitle="UK regulatory requirements for commercial HVAC systems — all managed through our digital compliance platform."
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
                  {complianceItems.map((item, index) => (
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
              <p className="font-medium text-foreground">F-Gas certified engineers required for refrigerant handling.</p>
              <Button onClick={downloadHVACChecklist} variant="default" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Download Checklist
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </ContentSection>

      {/* Energy & Performance */}
      <ContentSection
        title="Energy & Performance Optimisation"
        subtitle="Reduce operational costs while improving comfort and meeting ESG targets."
        variant="muted"
      >
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {[
            {
              title: "Smart Seasonal Commissioning",
              description: "Pre-season system optimisation ensures readiness before peak demand periods, preventing failures when you need cooling or heating most."
            },
            {
              title: "Filter Management for Air Quality",
              description: "Proactive filter replacement schedules maintain indoor air quality compliance and system efficiency — critical for occupant wellness."
            },
            {
              title: "Thermographic & Vibration Analysis",
              description: "Advanced diagnostics on critical assets identify bearing wear, electrical faults, and refrigerant issues before they cause failures."
            },
            {
              title: "Energy-Saving Technology Upgrades",
              description: "ROI projections included for VSD installations, EC fan retrofits, and BMS optimisation — typically delivering 20-30% energy savings."
            }
          ].map((item, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <div className="p-8 bg-card border border-border rounded-2xl hover:border-primary/30 transition-all h-full">
                <h3 className="text-xl font-medium mb-4 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground font-light leading-relaxed">{item.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
        <AnimatedSection delay={0.4}>
          <div className="mt-8 p-6 bg-primary/10 border border-primary/20 rounded-xl max-w-2xl mx-auto text-center">
            <p className="text-lg font-medium text-foreground">
              Result: Lower OpEx, improved wellness, stronger ESG results.
            </p>
          </div>
        </AnimatedSection>
      </ContentSection>

      {/* How We Deliver */}
      <ContentSection
        title="How We Deliver HVAC Services"
        subtitle="F-Gas certified engineers, integrated scheduling, and 24/7 emergency response."
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
                  "F-Gas Category 1 certified",
                  "Manufacturer-trained (Daikin, Mitsubishi, etc.)",
                  "City & Guilds qualified",
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
                  "2-hour emergency response SLA",
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
        subtitle="Comprehensive M&E solutions beyond HVAC."
        centered
        variant="muted"
      >
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { title: "Hard FM Services", href: "/services/hard-fm", description: "Complete mechanical and electrical maintenance" },
            { title: "Electrical Compliance", href: "/services/electrical", description: "EICR testing and electrical safety" },
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
        title="Keep Your Climate Control Running"
        description="Request an HVAC maintenance proposal tailored to your building portfolio. Expert advice, transparent pricing, no obligation."
        primaryLabel="Request HVAC Proposal"
        primaryHref="/request-proposal"
        secondaryLabel="Call 0800 024 8550"
        secondaryHref="tel:08000248550"
        variant="dark"
      />
    </>
  );
};

export default HVAC;
