import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FAQSection } from "@/components/shared/FAQSection";
import { ServiceSchema, FAQSchema } from "@/components/shared/SchemaMarkup";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import ServiceHeroSection from "@/components/shared/ServiceHeroSection";
import { TrustBar } from "@/components/shared/TrustBar";
import StatsBanner from "@/components/shared/StatsBanner";
import ContentSection from "@/components/shared/ContentSection";
import FeatureCardGrid from "@/components/shared/FeatureCardGrid";
import CTASection from "@/components/shared/CTASection";
import { RegionalServiceIndex } from "@/components/shared/RegionalServiceIndex";
import { Link } from "react-router-dom";
import {
  Zap,
  AlertTriangle,
  FileCheck,
  Shield,
  ThermometerSun,
  CircuitBoard,
  Gauge,
  Cable,
  ShieldCheck,
  Wrench,
  Download,
  Building2,
  Hotel,
  GraduationCap,
  Factory,
  Heart,
  Store,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import heroImage from "@/assets/electrical-compliance-hero.jpg";

const ElectricalCompliance = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Electrical Compliance & EICR Testing" },
  ];

  const heroStats = [
    { value: "BS 7671", label: "Certified" },
    { value: "NICEIC", label: "Approved" },
    { value: "24/7", label: "Emergency Response" },
    { value: "100%", label: "Digital Records" },
  ];

  const kpiStats = [
    { value: "5000", suffix: "+", label: "EICR Inspections Completed" },
    { value: "99", suffix: "%", label: "Compliance Rate Achieved" },
    { value: "48", suffix: "hr", label: "Average C1 Response Time" },
    { value: "150", suffix: "+", label: "Multi-Site Portfolios Managed" },
  ];

  const coreServices = [
    {
      icon: Zap,
      title: "EICR (Fixed Wire Testing)",
      description:
        "Comprehensive Electrical Installation Condition Reports to BS 7671. Full circuit testing, distribution board assessment, and satisfactory/unsatisfactory classification.",
    },
    {
      icon: ThermometerSun,
      title: "Thermal Imaging & Load Analysis",
      description:
        "Infrared thermographic surveys identify hot spots, overloaded circuits, and deteriorating connections before they cause failures or fires.",
    },
    {
      icon: CircuitBoard,
      title: "Distribution Board Integrity",
      description:
        "Consumer unit inspections, MCB/RCBO verification, labelling compliance, and capacity assessments for panel safety and performance.",
    },
    {
      icon: Gauge,
      title: "Protective Device Testing",
      description:
        "RCD trip-time testing, MCB fault current verification, and RCBO performance checks to ensure all protective devices operate correctly.",
    },
    {
      icon: Cable,
      title: "Earthing & Bonding Verification",
      description:
        "Main protective bonding to gas, water, and oil pipework. Supplementary bonding in bathrooms and kitchens. Earth electrode testing.",
    },
    {
      icon: ShieldCheck,
      title: "Surge Protection Compliance",
      description:
        "BS 7671:2018 Amendment 2 surge protection requirements. SPD installation, testing, and certification for all new and modified installations.",
    },
  ];

  const complianceTable = [
    { system: "EICR (Fixed Wire Testing)", frequency: "Every 5 Years", regulation: "BS 7671", scope: "All fixed electrical installations" },
    { system: "PAT Testing", frequency: "Annually", regulation: "IET Code of Practice", scope: "Portable appliance testing & labelling" },
    { system: "RCD Testing", frequency: "Quarterly", regulation: "BS 7671", scope: "Residual current device trip testing" },
    { system: "Thermographic Survey", frequency: "Annually", regulation: "BS 7671", scope: "Infrared inspection of electrical panels" },
    { system: "Lightning Protection", frequency: "Annually", regulation: "BS EN 62305", scope: "Earth resistance & bonding verification" },
    { system: "Generator Testing", frequency: "Monthly", regulation: "BS 7698", scope: "Load test & operational verification" },
    { system: "Emergency Lighting", frequency: "Monthly / Annually", regulation: "BS 5266-1", scope: "Functional tests & 3-hour duration test" },
    { system: "Surge Protection Devices", frequency: "Annually", regulation: "BS 7671 Amd 2", scope: "SPD condition & performance check" },
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
      title: "Industrial Operations",
      metric: "120 circuits",
      result: "Zero production interruption during full EICR programme",
    },
    {
      title: "PBSA Estate",
      metric: "30+ buildings",
      result: "100% compliance restored within 3 weeks",
    },
    {
      title: "Retail District",
      metric: "Thermal imaging",
      result: "Major panel failure prevented pre-Christmas trading",
    },
  ];

  const faqs = [
    {
      question: "How often is an EICR required?",
      answer:
        "Typically every 3–5 years depending on building use and insurer requirements. High-risk environments like hospitals or industrial facilities may require more frequent testing.",
    },
    {
      question: "Can you test overnight or weekends?",
      answer:
        "Yes — we schedule testing around your business operations to minimise disruption. Many of our clients prefer out-of-hours testing for critical facilities.",
    },
    {
      question: "Do you handle remedials as well as testing?",
      answer:
        "Yes. We fix issues identified during testing — not just list them. Our engineers resolve C1, C2, and C3 defects with rapid deployment and transparent pricing.",
    },
    {
      question: "What is the difference between C1, C2, and C3 codes?",
      answer:
        "C1 indicates immediate danger requiring urgent action. C2 means potentially dangerous and requires urgent remedial work. C3 is an improvement recommendation that should be addressed during future work.",
    },
    {
      question: "Is thermal imaging included in EICR testing?",
      answer:
        "Thermal imaging is available as an additional service to identify hot spots, overloaded circuits, and potential failure points before they cause problems.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Electrical Compliance & EICR Testing Services | EntireFM</title>
        <meta
          name="description"
          content="BS 7671 certified EICR testing, thermal imaging and electrical remedials. Protect people, uptime, and legal accountability across commercial estates."
        />
        <link rel="canonical" href="https://entirefm.com/services/electrical-compliance" />
      </Helmet>

      <ServiceSchema
        name="Electrical Compliance & EICR Testing Services"
        description="BS 7671 certified testing, thermal imaging and remedials that protect people, uptime, and legal accountability across commercial estates."
        provider="EntireFM"
        areaServed="United Kingdom"
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema
        items={[
          { label: "Services", href: "/services" },
          { label: "Electrical Compliance & EICR Testing" },
        ]}
      />

      {/* ─── Hero ─── */}
      <ServiceHeroSection
        breadcrumbItems={breadcrumbItems}
        title="Electrical Compliance & EICR Testing"
        description="BS 7671 certified testing, thermal imaging and remedials that protect people, uptime, and legal accountability across commercial estates."
        stats={heroStats}
        backgroundImage={heroImage}
        primaryCTA={{ label: "Request EICR Survey", icon: Zap, href: "/request-proposal" }}
        secondaryCTA={{ label: "Download EICR Guide", icon: Download, href: "/resources/eicr-manual" }}
      />

      <TrustBar variant="compact" />

      {/* ─── KPI Stats ─── */}
      <StatsBanner stats={kpiStats} variant="gradient" />

      {/* ─── Why Electrical Safety Matters ─── */}
      <ContentSection
        title="Electrical Safety — The Foundation of Every Safe Building"
        subtitle="Electrical systems silently power everything. When they fail, the consequences are immediate and severe."
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { icon: AlertTriangle, title: "Fire Risk", desc: "Faulty wiring causes thousands of commercial fires annually across the UK" },
            { icon: AlertTriangle, title: "Fatal Electric Shock", desc: "Direct threat to life from deteriorated installations and poor maintenance" },
            { icon: AlertTriangle, title: "Operational Shutdown", desc: "Business continuity destroyed by unplanned electrical failures" },
            { icon: AlertTriangle, title: "Criminal Liability", desc: "Prosecution under Electricity at Work Regulations 1989 with unlimited fines" },
            { icon: AlertTriangle, title: "Insurance Refusal", desc: "Claims denied without valid EICR certification and evidence of compliance" },
            { icon: Shield, title: "Our Role: Prevent. Prove. Protect.", desc: "Every asset tested. Every certificate issued. Every defect resolved." },
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
        title="Complete Electrical Compliance Services"
        subtitle="Aligned to BS 7671 and the Electricity at Work Regulations 1989. Testing scheduled around your business — zero disruption."
        variant="muted"
        centered
      >
        <FeatureCardGrid features={coreServices} columns={3} variant="gradient" />
      </ContentSection>

      {/* ─── Remedials: C1/C2/C3 ─── */}
      <ContentSection
        title="Remedials: Risk Eliminated Fast"
        subtitle="We don't hand over problems — we resolve them. Every defect is actioned, not ignored."
      >
        <div className="max-w-3xl mx-auto space-y-5">
          {[
            {
              code: "C1",
              label: "Immediate Danger",
              desc: "Fixed immediately — no delays. Life safety cannot wait. Our engineers isolate or rectify at time of inspection.",
              color: "bg-destructive",
              borderColor: "border-destructive",
              bgColor: "bg-destructive/5",
            },
            {
              code: "C2",
              label: "Urgent Remedial Need",
              desc: "Rapid deployment — typically within 24–48 hours. Potentially dangerous conditions addressed with priority scheduling.",
              color: "bg-orange-500",
              borderColor: "border-orange-500",
              bgColor: "bg-orange-500/5",
            },
            {
              code: "C3",
              label: "Improvement Recommended",
              desc: "Budgeted and planned — improvement opportunities programmed into future work cycles with clear cost guidance.",
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
                  <span className="text-white font-bold text-lg">{item.code}</span>
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
        subtitle="UK regulatory testing requirements for electrical systems and equipment."
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
        </div>
      </ContentSection>

      {/* ─── Digital Compliance Governance ─── */}
      <ContentSection
        title="Digital Compliance Governance"
        subtitle="Governance you can show to insurers, auditors, and HSE — anytime, anywhere."
        centered
      >
        <FeatureCardGrid
          features={[
            { icon: FileCheck, title: "Digital Certificates", description: "EICR reports accessible 24/7 through your compliance portal with full audit trail." },
            { icon: FileCheck, title: "Photo-Based Evidence", description: "Visual documentation of all defects with before/after remedial photography." },
            { icon: FileCheck, title: "Remedial Logs", description: "Lifecycle tracking from initial discovery through to resolution and sign-off." },
            { icon: FileCheck, title: "KPI Dashboard", description: "Real-time compliance status visibility across your entire portfolio." },
            { icon: FileCheck, title: "Renewal Alerts", description: "Automated notifications 6 months before certificates expire." },
            { icon: FileCheck, title: "Audit-Ready Reports", description: "Exportable compliance packs for insurer reviews, HSE inspections, and board reporting." },
          ]}
          columns={3}
          variant="default"
        />
      </ContentSection>

      {/* ─── Sectors We Support ─── */}
      <ContentSection
        title="Sectors We Support"
        subtitle="Built for high-demand environments where electrical compliance is non-negotiable."
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
        subtitle="Real results from real estates. Electrical compliance delivered without compromise."
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
        <RegionalServiceIndex serviceName="Electrical Compliance" serviceSlug="electrical" />
      </ContentSection>

      {/* ─── FAQs ─── */}
      <ContentSection
        title="Frequently Asked Questions"
        subtitle="Common questions about EICR testing and electrical compliance services."
        centered
      >
        <div className="max-w-3xl mx-auto">
          <FAQSection faqs={faqs} />
        </div>
      </ContentSection>

      {/* ─── CTA ─── */}
      <CTASection
        title="Your Business Relies on Electricity Every Second"
        description="Make sure it's safe, compliant, and future-proof. Our NICEIC-approved engineers deliver comprehensive EICR testing, remedial works, and ongoing compliance management."
        primaryLabel="Request EICR Survey"
        primaryHref="/request-proposal"
        primaryIcon={ArrowRight}
        secondaryLabel="Download EICR Manual"
        secondaryHref="/resources/eicr-manual"
        secondaryIcon={Download}
        variant="dark"
      />
    </>
  );
};

export default ElectricalCompliance;
