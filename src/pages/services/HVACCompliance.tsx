import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FAQSection } from "@/components/shared/FAQSection";
import { ServiceSchema, FAQSchema, SchemaMarkup } from "@/components/shared/SchemaMarkup";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import ServiceHeroSection from "@/components/shared/ServiceHeroSection";
import { TrustBar } from "@/components/shared/TrustBar";
import StatsBanner from "@/components/shared/StatsBanner";
import ContentSection from "@/components/shared/ContentSection";
import FeatureCardGrid from "@/components/shared/FeatureCardGrid";
import CTASection from "@/components/shared/CTASection";
import { RegionalServiceIndex } from "@/components/shared/RegionalServiceIndex";
import { Link } from "react-router-dom";
import { downloadHVACChecklist } from "@/utils/generateCompliancePDF";
import {
  Wind,
  Snowflake,
  Thermometer,
  Activity,
  AlertTriangle,
  Shield,
  TrendingDown,
  FileCheck,
  Database,
  Zap,
  CheckCircle2,
  ArrowRight,
  Download,
  Building2,
  Hotel,
  GraduationCap,
  Factory,
  Heart,
  Store,
} from "lucide-react";
import heroImage from "@/assets/hvac-compliance-hero.jpg";

const HVACCompliance = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "HVAC, Air Conditioning & F-Gas Compliance" },
  ];

  const heroStats = [
    { value: "TM44", label: "Certified" },
    { value: "F-Gas", label: "Compliant" },
    { value: "24/7", label: "Emergency Response" },
    { value: "100%", label: "Digital Records" },
  ];

  const kpiStats = [
    { value: "3000", suffix: "+", label: "Systems Maintained" },
    { value: "100", suffix: "%", label: "TM44 Pass Rate" },
    { value: "30", suffix: "%", label: "Avg Energy Saving" },
    { value: "200", suffix: "+", label: "Multi-Site Portfolios" },
  ];

  const coreServices = [
    {
      icon: Snowflake,
      title: "VRV/VRF System Servicing",
      description: "Comprehensive servicing of variable refrigerant volume and flow systems with manufacturer-aligned maintenance protocols.",
    },
    {
      icon: Wind,
      title: "AHU Performance & IAQ",
      description: "Air Handling Unit servicing, filter management, and indoor air quality monitoring to ensure healthy, productive environments.",
    },
    {
      icon: Thermometer,
      title: "TM44 Inspection & Certification",
      description: "Mandatory Energy Performance inspections for AC systems over 12kW. Full audits, efficiency scoring, and improvement plans.",
    },
    {
      icon: AlertTriangle,
      title: "F-Gas Leak Governance",
      description: "EC 517/2014 compliant refrigerant leak checks, digital logbooks, automatic leakage alerts, and low-GWP migration planning.",
    },
    {
      icon: TrendingDown,
      title: "Energy Optimisation & ESG",
      description: "BMS optimisation, VSD efficiencies, heat recovery opportunities, and R32 conversion pathways for reduced emissions.",
    },
    {
      icon: Activity,
      title: "Comfort Performance Diagnostics",
      description: "Temperature mapping, comfort benchmarking, and ventilation compliance ensuring optimal occupant experience year-round.",
    },
  ];

  const complianceTable = [
    { system: "TM44 AC Inspection", frequency: "Every 5 Years", regulation: "EPBR", scope: "AC systems over 12kW — energy efficiency audit" },
    { system: "F-Gas Leak Checks", frequency: "Annual / Quarterly", regulation: "EC 517/2014", scope: "Refrigerant leak detection based on CO2e charge" },
    { system: "AHU Filter Replacement", frequency: "Quarterly", regulation: "HSG274 / CIBSE", scope: "Filter lifecycle management & IAQ assurance" },
    { system: "Refrigerant Logbook", frequency: "Every Service", regulation: "F-Gas Regs", scope: "Full refrigerant history & leak rate tracking" },
    { system: "BMS Calibration", frequency: "Annually", regulation: "CIBSE TM39", scope: "Sensor accuracy, setpoint verification, schedules" },
    { system: "Ventilation Compliance", frequency: "Annually", regulation: "Approved Doc F", scope: "Fresh air rates, CO2 monitoring, extract performance" },
    { system: "Cooling Tower Inspection", frequency: "Monthly", regulation: "ACOP L8", scope: "Legionella risk, drift eliminator, chemical dosing" },
  ];

  const sectors = [
    { icon: Building2, label: "Corporate Workplaces" },
    { icon: Store, label: "Retail & Hospitality" },
    { icon: Hotel, label: "PBSA & Residential" },
    { icon: Factory, label: "Logistics & Industrial" },
    { icon: Heart, label: "Healthcare" },
    { icon: GraduationCap, label: "Education & Public Sector" },
  ];

  const caseStudies = [
    {
      title: "Corporate Estate Comfort",
      metric: "70% reduction",
      result: "Overheating events eliminated through AHU optimisation and IAQ monitoring",
    },
    {
      title: "Industrial AHU Programme",
      metric: "£45k saved",
      result: "Thermal inspection prevented major failure and production downtime",
    },
    {
      title: "Retail Portfolio F-Gas",
      metric: "250 units",
      result: "Full F-Gas compliance delivered across multi-site retail estate",
    },
  ];

  const faqs = [
    {
      question: "When is TM44 required?",
      answer: "For AC systems over 12kW — inspection every 5 years under the Energy Performance of Buildings Regulations.",
    },
    {
      question: "How often do leak checks need to be performed?",
      answer: "Depends on refrigerant volume & GWP risk rating. Systems with >5kg of refrigerant require regular checks, with frequency determined by CO2 equivalent.",
    },
    {
      question: "Can works be performed out of hours?",
      answer: "Yes — to protect business continuity and minimize operational disruption.",
    },
    {
      question: "What is F-Gas compliance and why does it matter?",
      answer: "F-Gas regulations (EC 517/2014) control refrigerant leaks and emissions. Non-compliance results in fines, insurance issues, and environmental liability.",
    },
  ];

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "EntireFM HVAC & F-Gas Compliance Services",
    "description": "TM44 inspections, F-Gas leak governance and proactive HVAC maintenance",
    "areaServed": "United Kingdom",
    "serviceType": "HVAC, Air Conditioning & F-Gas Compliance",
    "email": "hello@entirefm.com",
  };

  return (
    <>
      <Helmet>
        <title>HVAC, Air Conditioning & F-Gas Compliance | TM44 | EntireFM</title>
        <meta
          name="description"
          content="TM44 inspections, F-Gas leak governance and proactive HVAC maintenance that optimise comfort, uptime, and safety across commercial estates."
        />
        <link rel="canonical" href="https://entirefm.com/services/hvac-compliance" />
      </Helmet>

      <ServiceSchema
        name="HVAC, Air Conditioning & F-Gas Compliance Services"
        description="TM44 inspections, F-Gas leak governance and proactive HVAC maintenance that optimise comfort, uptime, and safety across commercial estates."
        provider="EntireFM"
        areaServed="United Kingdom"
      />
      <SchemaMarkup schema={localBusinessSchema} />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema
        items={[
          { label: "Services", href: "/services" },
          { label: "HVAC, Air Conditioning & F-Gas Compliance" },
        ]}
      />

      {/* ─── Hero ─── */}
      <ServiceHeroSection
        breadcrumbItems={breadcrumbItems}
        title="HVAC, Air Conditioning & F-Gas Compliance"
        description="TM44 inspections, F-Gas leak governance and proactive HVAC maintenance that optimise comfort, uptime, and safety across commercial estates."
        stats={heroStats}
        backgroundImage={heroImage}
        primaryCTA={{ label: "Book HVAC Audit", icon: ArrowRight, href: "/request-proposal" }}
        secondaryCTA={{ label: "Download TM44 Guide", icon: Download, href: "/resources" }}
      />

      <TrustBar variant="compact" />

      {/* ─── KPI Stats ─── */}
      <StatsBanner stats={kpiStats} variant="gradient" />

      {/* ─── Why HVAC Matters ─── */}
      <ContentSection
        title="HVAC Performance — The Invisible Backbone of Every Building"
        subtitle="Your heating and cooling systems directly influence staff productivity, public comfort, and regulatory compliance."
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { icon: Activity, title: "Staff Productivity", desc: "Poor climate control reduces cognitive performance by up to 15%" },
            { icon: Thermometer, title: "Public Comfort", desc: "Customer experience destroyed by overheating or poor ventilation" },
            { icon: Shield, title: "Building Compliance", desc: "TM44 and F-Gas failures expose directors to enforcement action" },
            { icon: Wind, title: "Airborne Contaminants", desc: "Inadequate ventilation creates health risks and absenteeism" },
            { icon: TrendingDown, title: "Energy Waste", desc: "Poorly maintained HVAC systems waste 20–40% of energy spend" },
            { icon: Shield, title: "Our Role: Optimise. Certify. Protect.", desc: "Every system maintained. Every certificate issued. Every risk eliminated." },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
            >
              <Card
                className={`p-6 h-full border-border/50 hover:border-primary/50 transition-all hover:shadow-md group ${
                  idx === 5 ? "bg-primary/5 border-primary/20" : ""
                }`}
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className={`w-5 h-5 ${idx < 5 ? "text-destructive" : "text-primary"}`} />
                </div>
                <h3 className="text-sm font-medium mb-2">{item.title}</h3>
                <p className="text-xs text-muted-foreground font-light leading-relaxed">{item.desc}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </ContentSection>

      {/* ─── Core Services ─── */}
      <ContentSection
        title="Complete HVAC & F-Gas Compliance Services"
        subtitle="Aligned to TM44, F-Gas Regulations, and CIBSE guidelines. Maintenance scheduled around your operations — zero disruption."
        variant="muted"
        centered
      >
        <FeatureCardGrid features={coreServices} columns={3} variant="gradient" />
      </ContentSection>

      {/* ─── F-Gas Governance ─── */}
      <ContentSection
        title="F-Gas Leak Governance"
        subtitle="EC 517/2014 compliance — zero refrigerant governance risk, zero environmental liability."
      >
        <div className="max-w-3xl mx-auto space-y-5">
          {[
            {
              code: "Check",
              label: "Refrigerant Leak Detection",
              desc: "Regular leak checks based on system charge and GWP rating. All leaks recorded, reported, and resolved immediately.",
              color: "bg-destructive",
              borderColor: "border-destructive",
              bgColor: "bg-destructive/5",
            },
            {
              code: "Log",
              label: "Digital Logbook & History",
              desc: "Complete refrigerant lifecycle tracking — every charge, recovery, and top-up recorded with engineer certification.",
              color: "bg-orange-500",
              borderColor: "border-orange-500",
              bgColor: "bg-orange-500/5",
            },
            {
              code: "Plan",
              label: "Low-GWP Migration",
              desc: "Strategic planning for R32 and natural refrigerant transitions. Future-proof your estate before phase-down deadlines.",
              color: "bg-amber-500",
              borderColor: "border-amber-500",
              bgColor: "bg-amber-500/5",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              className={`p-6 border-l-4 ${item.borderColor} ${item.bgColor} rounded-r-xl`}
            >
              <div className="flex items-start gap-5">
                <div className={`w-14 h-14 rounded-full ${item.color} flex items-center justify-center flex-shrink-0`}>
                  <span className="text-white font-bold text-sm">{item.code}</span>
                </div>
                <div>
                  <p className="font-medium text-foreground text-lg mb-1">{item.label}</p>
                  <p className="text-muted-foreground font-light leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </ContentSection>

      {/* ─── Statutory Testing Frequency Table ─── */}
      <ContentSection
        title="Statutory Testing Frequency Table"
        subtitle="UK regulatory testing requirements for HVAC, refrigeration and ventilation systems."
        variant="muted"
        centered
      >
        <div className="max-w-5xl mx-auto overflow-x-auto">
          <div className="rounded-xl border border-border overflow-hidden shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-charcoal text-white">
                  <th className="text-left p-4 font-medium">System / Equipment</th>
                  <th className="text-left p-4 font-medium">Frequency</th>
                  <th className="text-left p-4 font-medium">Regulation</th>
                  <th className="text-left p-4 font-medium">Scope</th>
                </tr>
              </thead>
              <tbody>
                {complianceTable.map((row, idx) => (
                  <motion.tr
                    key={idx}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className={`border-b border-border last:border-0 ${idx % 2 === 0 ? "bg-muted/30" : "bg-background"}`}
                  >
                    <td className="p-4 font-medium text-foreground">{row.system}</td>
                    <td className="p-4 text-primary font-medium">{row.frequency}</td>
                    <td className="p-4 text-muted-foreground">{row.regulation}</td>
                    <td className="p-4 text-muted-foreground">{row.scope}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 p-4 bg-primary/10 border border-primary/20 rounded-xl">
            <p className="font-medium text-foreground">All certificates tracked digitally with automated renewal alerts.</p>
            <Button onClick={downloadHVACChecklist} variant="default" size="sm">
              <Download className="w-4 h-4 mr-2" />
              Download Checklist
            </Button>
          </div>
        </div>
      </ContentSection>

      {/* ─── Digital Compliance Governance ─── */}
      <ContentSection
        title="Digital Compliance Governance"
        subtitle="Decision-grade clarity — governance you can show to insurers, auditors, and the HSE."
        centered
      >
        <FeatureCardGrid
          features={[
            { icon: Database, title: "Asset Audit History", description: "Complete HVAC asset records with full maintenance lifecycle visibility." },
            { icon: FileCheck, title: "Digital Certificates", description: "TM44 and F-Gas certificates accessible 24/7 through your compliance portal." },
            { icon: CheckCircle2, title: "Remedial Tracking", description: "Every defect tracked from discovery to resolution with photo evidence." },
            { icon: AlertTriangle, title: "Compliance Alerts", description: "Automated notifications before certificates expire or services are due." },
            { icon: Activity, title: "SLA Dashboards", description: "Real-time performance monitoring and workflow tracking across your estate." },
            { icon: FileCheck, title: "Audit-Ready Reports", description: "Exportable compliance packs for insurer reviews and board reporting." },
          ]}
          columns={3}
          variant="default"
        />
      </ContentSection>

      {/* ─── Sectors We Support ─── */}
      <ContentSection
        title="Sectors We Support"
        subtitle="Built for high-demand environments where HVAC performance and compliance are non-negotiable."
        variant="gradient"
        centered
      >
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
          {sectors.map((sector, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.4 }}
            >
              <Card className="p-5 text-center h-full border-border/50 hover:border-primary/50 transition-all hover:shadow-md group">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors">
                  <sector.icon className="w-6 h-6 text-primary" />
                </div>
                <p className="text-xs font-medium text-foreground">{sector.label}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </ContentSection>

      {/* ─── Case Study Highlights ─── */}
      <ContentSection
        title="Proof in Action"
        subtitle="Real results from real estates. HVAC compliance delivered without compromise."
        centered
      >
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {caseStudies.map((study, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
            >
              <Card className="p-6 h-full border-border/50 hover:border-primary/50 transition-all hover:shadow-lg group bg-gradient-to-br from-muted/50 to-muted/20">
                <div className="text-2xl font-light text-primary mb-2">{study.metric}</div>
                <h3 className="text-lg font-medium mb-3 group-hover:text-primary transition-colors">
                  {study.title}
                </h3>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground font-light">{study.result}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </ContentSection>

      {/* ─── Regional Service Index ─── */}
      <ContentSection variant="muted">
        <RegionalServiceIndex serviceName="HVAC Compliance" serviceSlug="hvac" />
      </ContentSection>

      {/* ─── FAQs ─── */}
      <ContentSection
        title="Frequently Asked Questions"
        subtitle="Common questions about TM44 inspections, F-Gas compliance, and HVAC maintenance."
        centered
      >
        <div className="max-w-3xl mx-auto">
          <FAQSection faqs={faqs} />
        </div>
      </ContentSection>

      {/* ─── CTA ─── */}
      <CTASection
        title="Comfort Protected. Compliance Delivered. Cost Reduced."
        description="Optimise your HVAC systems for performance, safety, and efficiency. Our certified engineers deliver TM44 inspections, F-Gas governance, and ongoing compliance management."
        primaryLabel="Book HVAC Compliance Audit"
        primaryHref="/request-proposal"
        primaryIcon={ArrowRight}
        secondaryLabel="Download TM44 Guide"
        secondaryHref="/resources"
        secondaryIcon={Download}
        variant="dark"
      />
    </>
  );
};

export default HVACCompliance;
