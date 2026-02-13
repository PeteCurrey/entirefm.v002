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
import { downloadFireAlarmChecklist } from "@/utils/generateCompliancePDF";
import {
  Flame,
  Shield,
  AlertTriangle,
  FileCheck,
  CheckCircle2,
  ArrowRight,
  Download,
  Building2,
  Hotel,
  GraduationCap,
  Factory,
  Heart,
  Store,
  Siren,
  Lightbulb,
  DoorOpen,
} from "lucide-react";
import heroImage from "@/assets/fire-safety-hero.jpg";

const FireSafety = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Fire Safety & Life Protection" },
  ];

  const heroStats = [
    { value: "BS 5839", label: "Fire Alarms" },
    { value: "BS 5266", label: "Emergency Lighting" },
    { value: "24/7", label: "Emergency Response" },
    { value: "UK Wide", label: "Coverage" },
  ];

  const kpiStats = [
    { value: "10000", suffix: "+", label: "Fire Assets Maintained" },
    { value: "100", suffix: "%", label: "Audit Pass Rate" },
    { value: "4", suffix: "hr", label: "Emergency Attendance" },
    { value: "500", suffix: "+", label: "Sites Covered" },
  ];

  const coreServices = [
    {
      icon: Flame,
      title: "Fire Alarm Testing",
      description: "BS 5839 testing, servicing & certification for all system types (L1-L5). Weekly user tests and periodic servicing.",
    },
    {
      icon: Lightbulb,
      title: "Emergency Lighting",
      description: "BS 5266 compliance with monthly functional tests and annual 3-hour duration testing across all luminaire types.",
    },
    {
      icon: Shield,
      title: "Fire Extinguishers",
      description: "BS 5306 maintenance with annual servicing, 5-year extended service, and commissioning of all extinguisher types.",
    },
    {
      icon: DoorOpen,
      title: "Passive Fire Protection",
      description: "Fire doors, compartmentation surveys, intumescent seals, and fire stopping to maintain building fire integrity.",
    },
    {
      icon: Siren,
      title: "Sprinklers & Suppression",
      description: "BS EN 12845 sprinkler systems, dry/wet risers, gas suppression, and fire-fighting infrastructure maintenance.",
    },
    {
      icon: FileCheck,
      title: "Fire Risk Assessments",
      description: "Regulatory compliance audits under the Fire Safety Order 2005 with remedial recommendations and prioritisation.",
    },
  ];

  const complianceTable = [
    { system: "Fire Alarm (BS 5839)", frequency: "Weekly / Quarterly", regulation: "BS 5839-1", scope: "Call point testing, panel checks, zone verification" },
    { system: "Emergency Lighting (BS 5266)", frequency: "Monthly / Annually", regulation: "BS 5266-1", scope: "Functional tests & 3-hour duration test" },
    { system: "Fire Extinguishers", frequency: "Annually", regulation: "BS 5306-3", scope: "Visual inspection, weight checks, extended service" },
    { system: "Sprinkler Systems", frequency: "Weekly / Annually", regulation: "BS EN 12845", scope: "Flow tests, valve checks, pump operation" },
    { system: "Fire Doors", frequency: "Quarterly", regulation: "RRO 2005", scope: "Closer mechanisms, intumescent strips, signage" },
    { system: "Fire Dampers", frequency: "Annually", regulation: "BS 9999", scope: "Operation testing, ductwork integrity, reset" },
    { system: "Dry/Wet Risers", frequency: "6-Monthly", regulation: "BS 9990", scope: "Pressure testing, inlet/outlet checks, drainage" },
    { system: "AOV Smoke Control", frequency: "Weekly / Annually", regulation: "BS EN 12101", scope: "Activation testing, actuator checks, weathering" },
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
      title: "Retail Portfolio Renewal",
      metric: "150 sites",
      result: "Full fire asset upgrade with zero operational downtime achieved",
    },
    {
      title: "PBSA Risk Reduction",
      metric: "3 weeks",
      result: "Evacuation safety uplift delivered across 2,000-bed estate",
    },
    {
      title: "Industrial Compliance",
      metric: "99.8% uptime",
      result: "Fire system availability maintained across logistics portfolio",
    },
  ];

  const faqs = [
    {
      question: "Who is the Responsible Person under the Fire Safety Order?",
      answer: "Typically the building owner, employer, or managing agent — we support full execution of their duties under the Regulatory Reform (Fire Safety) Order 2005.",
    },
    {
      question: "How often do fire alarms need testing?",
      answer: "Weekly user testing plus periodic servicing determined by BS 5839. We provide comprehensive testing schedules tailored to your system type (L1-L5).",
    },
    {
      question: "Can you provide multi-system compliance under one contract?",
      answer: "Yes — that is our default approach. We integrate fire alarms, emergency lighting, extinguishers, sprinklers, and passive systems under unified governance.",
    },
    {
      question: "What happens if defects are found during inspection?",
      answer: "Every defect receives a risk code, costed proposal, and rapid resolution pathway. We reduce fire risk, not just record it.",
    },
    {
      question: "Do you provide emergency callout services?",
      answer: "Yes. Our engineers provide 24/7 emergency attendance across the UK with rapid response times for critical fire safety failures.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Fire Safety Compliance & Testing | BS 5839, BS 5266 | EntireFM</title>
        <meta
          name="description"
          content="Expert fire alarm testing, emergency lighting, sprinklers & fire risk assessments. BS 5839, BS 5266 & BS 5306 compliant. Nationwide coverage with 24/7 emergency response."
        />
        <link rel="canonical" href="https://entirefm.com/services/fire-safety" />
      </Helmet>

      <ServiceSchema
        name="Fire Safety & Life Protection Services"
        description="Certified fire compliance across alarms, extinguishers, emergency lighting, passive systems and evacuation infrastructure."
        provider="EntireFM"
        areaServed="United Kingdom"
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema
        items={[
          { label: "Services", href: "/services" },
          { label: "Fire Safety & Life Protection" },
        ]}
      />

      {/* ─── Hero ─── */}
      <ServiceHeroSection
        breadcrumbItems={breadcrumbItems}
        title="Fire Safety Compliance & Life Protection Systems"
        description="BS 5839 fire alarm testing, BS 5266 emergency lighting, BS 5306 extinguisher maintenance, sprinkler systems and fire risk assessments. 24/7 emergency response nationwide."
        stats={heroStats}
        backgroundImage={heroImage}
        primaryCTA={{ label: "Request Fire Compliance Audit", icon: ArrowRight, href: "/request-proposal" }}
        secondaryCTA={{ label: "Download Fire Risk Guide", icon: Download, href: "/resources/fire-risk-guide" }}
      />

      <TrustBar variant="compact" />

      {/* ─── KPI Stats ─── */}
      <StatsBanner stats={kpiStats} variant="gradient" />

      {/* ─── Why Fire Safety Matters ─── */}
      <ContentSection
        title="Fire Safety — When Compliance Fails, Lives Are at Risk"
        subtitle="The Regulatory Reform (Fire Safety) Order 2005 places legal accountability on building owners, employers, and managing agents."
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { icon: AlertTriangle, title: "Criminal Prosecution", desc: "Unlimited fines and up to 2 years imprisonment for serious breaches" },
            { icon: AlertTriangle, title: "Building Closure", desc: "Fire brigades can issue prohibition notices forcing immediate closure" },
            { icon: AlertTriangle, title: "Insurance Refusal", desc: "Claims rejected without valid fire safety certification evidence" },
            { icon: AlertTriangle, title: "Corporate Manslaughter", desc: "Directors face personal liability and criminal charges in fatality events" },
            { icon: AlertTriangle, title: "Reputational Damage", desc: "Loss of business continuity and permanent brand harm" },
            { icon: Shield, title: "Our Role: Test. Certify. Protect.", desc: "Every system tested. Every defect resolved. Every certificate issued." },
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
        title="Complete Fire Protection Services"
        subtitle="Aligned with the Regulatory Reform (Fire Safety) Order 2005, BS 5839, BS 5306, BS 5266, and BS EN 12845."
        variant="muted"
        centered
      >
        <FeatureCardGrid features={coreServices} columns={3} variant="gradient" />
      </ContentSection>

      {/* ─── Remedials Resolved Fast ─── */}
      <ContentSection
        title="Remedials: Risk Eliminated Fast"
        subtitle="Every defect identified during inspection gets actioned — not just recorded."
      >
        <div className="max-w-3xl mx-auto space-y-5">
          {[
            {
              code: "P1",
              label: "Critical Life Safety",
              desc: "Immediate attendance for failures affecting means of escape, detection coverage, or suppression systems. No delays.",
              color: "bg-destructive",
              borderColor: "border-destructive",
              bgColor: "bg-destructive/5",
            },
            {
              code: "P2",
              label: "Urgent Remedial",
              desc: "Rapid deployment — typically within 24 hours. Issues affecting system integrity addressed with priority scheduling.",
              color: "bg-orange-500",
              borderColor: "border-orange-500",
              bgColor: "bg-orange-500/5",
            },
            {
              code: "P3",
              label: "Planned Improvement",
              desc: "Budgeted and scheduled — improvement opportunities programmed into maintenance cycles with clear cost guidance.",
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
        subtitle="UK regulatory testing requirements for fire safety systems and equipment."
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
            <p className="font-medium text-foreground">All fire safety certificates tracked digitally with automated renewal alerts.</p>
            <Button onClick={downloadFireAlarmChecklist} variant="default" size="sm">
              <Download className="w-4 h-4 mr-2" />
              Download Checklist
            </Button>
          </div>
        </div>
      </ContentSection>

      {/* ─── Digital Compliance Governance ─── */}
      <ContentSection
        title="Digital Compliance & Audit Governance"
        subtitle="Nothing lost. Nothing forgotten. Nothing late. Governance you can show to fire officers, insurers, and the HSE."
        centered
      >
        <FeatureCardGrid
          features={[
            { icon: FileCheck, title: "Live Asset Logs", description: "Real-time tracking of all fire assets with complete maintenance history." },
            { icon: FileCheck, title: "Photo Evidence", description: "Visual defect documentation with before/after remedial photography." },
            { icon: FileCheck, title: "Instant Certifications", description: "PDF certificates on demand through your compliance portal." },
            { icon: FileCheck, title: "Renewal Alerts", description: "Automated compliance reminders before certificates expire." },
            { icon: FileCheck, title: "Audit Pack Exports", description: "Complete documentation packs for fire officers and insurer reviews." },
            { icon: FileCheck, title: "KPI Dashboard", description: "Real-time compliance visibility across your entire portfolio." },
          ]}
          columns={3}
          variant="default"
        />
      </ContentSection>

      {/* ─── Sectors We Support ─── */}
      <ContentSection
        title="Sectors We Protect"
        subtitle="Specialist fire compliance experience across every high-demand sector."
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
        subtitle="Real results from real estates. Fire compliance delivered without compromise."
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
        <RegionalServiceIndex serviceName="Fire Safety" serviceSlug="fire" />
      </ContentSection>

      {/* ─── FAQs ─── */}
      <ContentSection
        title="Frequently Asked Questions"
        subtitle="Common questions about fire safety compliance and testing services."
        centered
      >
        <div className="max-w-3xl mx-auto">
          <FAQSection faqs={faqs} />
        </div>
      </ContentSection>

      {/* ─── CTA ─── */}
      <CTASection
        title="Remedy Risks Before They Become Incidents"
        description="Request a fire compliance audit tailored to your estate. Expert testing, certified remedials, complete certification under one contract."
        primaryLabel="Request Fire Compliance Audit"
        primaryHref="/request-proposal"
        primaryIcon={ArrowRight}
        secondaryLabel="Download Fire Risk Guide"
        secondaryHref="/resources/fire-risk-guide"
        secondaryIcon={Download}
        variant="dark"
      />
    </>
  );
};

export default FireSafety;
