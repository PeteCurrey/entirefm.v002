import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FAQSection } from "@/components/shared/FAQSection";
import { SidebarCTA } from "@/components/shared/SidebarCTA";
import { ServiceSchema, FAQSchema } from "@/components/shared/SchemaMarkup";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { useConversionTracking } from "@/hooks/useConversionTracking";
import { Shield, AlertTriangle, FileCheck, ArrowRight, FileText, Flame, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { RelatedServices } from "@/components/seo/RelatedServices";
import { ComplianceDetails } from "@/components/seo/ComplianceDetails";
import { DynamicYouMayAlsoNeed } from "@/components/shared/DynamicYouMayAlsoNeed";
import { RegionalServiceIndex } from "@/components/shared/RegionalServiceIndex";
import ServiceHeroSection from "@/components/shared/ServiceHeroSection";
import AnimatedSection from "@/components/shared/AnimatedSection";
import ContentSection from "@/components/shared/ContentSection";
import FeatureCardGrid from "@/components/shared/FeatureCardGrid";

const FireSafety = () => {
  const { trackProposalRequest } = useConversionTracking();

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Fire Safety & Life Protection" }
  ];

  const keyFeatures = [
    {
      icon: Flame,
      title: "Fire Alarms",
      description: "BS 5839 testing, servicing & certification for all system types (L1-L5)"
    },
    {
      icon: Shield,
      title: "Emergency Lighting",
      description: "BS 5266 compliance with monthly & annual 3-hour duration testing"
    },
    {
      icon: CheckCircle2,
      title: "Fire Extinguishers",
      description: "BS 5306 maintenance with annual servicing & 5-year extended service"
    },
    {
      icon: FileCheck,
      title: "Passive Fire Protection",
      description: "Fire doors, compartmentation surveys & intumescent seals"
    }
  ];

  const faqs = [
    {
      question: "Who is the Responsible Person under the Fire Safety Order?",
      answer: "Typically the building owner, employer, or managing agent — we support full execution of their duties under the Regulatory Reform (Fire Safety) Order 2005."
    },
    {
      question: "How often do fire alarms need testing?",
      answer: "Weekly user testing plus periodic servicing determined by BS 5839. We provide comprehensive testing schedules tailored to your system type (L1-L5)."
    },
    {
      question: "Can you provide multi-system compliance under one contract?",
      answer: "Yes — that is our default approach. We integrate fire alarms, emergency lighting, extinguishers, sprinklers, and passive systems under unified governance."
    },
    {
      question: "What happens if defects are found during inspection?",
      answer: "Every defect receives a risk code, costed proposal, and rapid resolution pathway. We reduce fire risk, not just record it."
    },
    {
      question: "Do you provide emergency callout services?",
      answer: "Yes. Our engineers provide 24/7 emergency attendance across the UK with rapid response times for critical fire safety failures."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Fire Safety Compliance & Testing | BS 5839, BS 5266 | EntireFM</title>
        <meta 
          name="description" 
          content="Expert fire alarm testing, emergency lighting, sprinklers & fire risk assessments. BS 5839, BS 5266 & BS 5306 compliant. Nationwide coverage with 24/7 emergency response." 
        />
        <meta name="keywords" content="fire safety compliance, fire alarm testing BS 5839, emergency lighting testing, fire risk assessment, AOV systems, fire dampers, fire safety engineering, commercial fire protection" />
        <link rel="canonical" href="https://entirefm.com/services/fire-safety" />
      </Helmet>

      <ServiceSchema 
        name="Fire Safety & Life Protection Services"
        description="Certified fire compliance across alarms, extinguishers, emergency lighting, passive systems and evacuation infrastructure — fully aligned with UK safety legislation."
        provider="EntireFM"
        areaServed="United Kingdom"
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={breadcrumbItems} />

      <div className="min-h-screen bg-background">
        <ServiceHeroSection
          breadcrumbItems={breadcrumbItems}
          title="Fire Safety Compliance & Life Protection Systems"
          description="BS 5839 fire alarm testing, BS 5266 emergency lighting, BS 5306 extinguisher maintenance, sprinkler systems and fire risk assessments. Weekly testing, annual certification & 24/7 emergency response nationwide."
          stats={[
            { value: "BS 5839", label: "Fire Alarms" },
            { value: "BS 5266", label: "Emergency Lighting" },
            { value: "24/7", label: "Emergency Response" },
            { value: "UK Wide", label: "Coverage" }
          ]}
          primaryCTA={{
            label: "Request Fire Compliance Audit",
            href: "/request-proposal",
            icon: ArrowRight
          }}
          secondaryCTA={{
            label: "Download Fire Risk Guide",
            href: "/resources",
            icon: FileText
          }}
          backgroundImage="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80"
        />

        {/* Key Features Grid */}
        <section className="py-16 bg-background">
          <div className="max-w-6xl mx-auto px-4">
            <FeatureCardGrid features={keyFeatures} columns={4} variant="gradient" />
          </div>
        </section>

        {/* Fire Compliance Legal Section */}
        <ContentSection variant="muted" title="Fire Safety Compliance Under UK Law" subtitle="The Regulatory Reform (Fire Safety) Order 2005 places legal accountability on building owners, employers and managing agents.">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection delay={0.1}>
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {[
                  "Directors face personal prosecution",
                  "Fire brigades can enforce closure",
                  "Insurers refuse claims",
                  "Lives are put at risk"
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3 p-4 border border-destructive/20 rounded-lg bg-destructive/5"
                  >
                    <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0 mt-1" />
                    <p className="font-medium text-foreground">{item}</p>
                  </motion.div>
                ))}
              </div>
              <div className="bg-primary/5 p-6 rounded-lg border border-primary/20 text-center">
                <p className="text-xl font-light text-foreground">
                  We deliver <span className="text-primary font-medium">full compliance certainty</span>.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </ContentSection>

        {/* Main Content Grid */}
        <section className="py-16 bg-background">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-12">
                
                {/* Complete Fire Protection Services */}
                <AnimatedSection>
                  <h2 className="text-3xl font-light mb-6">
                    <span className="underline-accent">Complete Fire Protection Services</span>
                  </h2>
                  <div className="space-y-4 text-muted-foreground font-light leading-relaxed mb-6">
                    <p className="text-lg">Aligned with:</p>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Regulatory Reform (Fire Safety) Order 2005</li>
                      <li>BS 5839, BS 5306, BS 5266, BS EN 12845</li>
                    </ul>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    {[
                      { title: "Fire Alarms", desc: "BS 5839 testing & certification", link: "/services/fire-alarms" },
                      { title: "Emergency Lighting", desc: "BS 5266 compliance", link: "/services/emergency-lighting" },
                      { title: "Fire Extinguishers", desc: "BS 5306 maintenance", link: null },
                      { title: "Fire Doors & Passive Systems", desc: "Compartmentation integrity", link: null },
                      { title: "Sprinklers & Suppression", desc: "BS EN 12845 systems", link: "/services/sprinklers" },
                      { title: "Dry & Wet Risers", desc: "Firefighting infrastructure", link: null },
                      { title: "Fire Risk Assessments", desc: "Regulatory compliance audits", link: null }
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                      >
                        {item.link ? (
                          <Link 
                            to={item.link}
                            className="flex items-start gap-3 p-4 border border-border rounded-lg hover:border-primary/50 transition-colors group bg-card"
                          >
                            <Shield className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                            <div>
                              <p className="font-medium text-foreground group-hover:text-primary transition-colors">{item.title}</p>
                              <p className="text-sm text-muted-foreground">{item.desc}</p>
                            </div>
                          </Link>
                        ) : (
                          <div className="flex items-start gap-3 p-4 border border-border rounded-lg bg-card">
                            <Shield className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                            <div>
                              <p className="font-medium text-foreground">{item.title}</p>
                              <p className="text-sm text-muted-foreground">{item.desc}</p>
                            </div>
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </div>
                  
                  <p className="text-lg font-medium text-foreground mt-6">
                    Every system. One responsible supplier.
                  </p>
                </AnimatedSection>

                {/* Digital Compliance */}
                <AnimatedSection delay={0.1} className="bg-muted/30 p-8 rounded-xl">
                  <h2 className="text-3xl font-light mb-6">
                    Digital Compliance & Audit Governance
                  </h2>
                  <p className="text-muted-foreground font-light mb-6">Compliance visibility through our platform:</p>
                  
                  <div className="grid sm:grid-cols-2 gap-4 mb-6">
                    {[
                      { title: "Live Asset Logs", desc: "Real-time tracking of all fire assets" },
                      { title: "Photo Evidence", desc: "Visual defect documentation" },
                      { title: "Instant Certifications", desc: "PDF certificates on demand" },
                      { title: "Renewal Alerts", desc: "Automated compliance reminders" },
                      { title: "Audit Pack Exports", desc: "Complete documentation for insurers & fire officers" }
                    ].map((item, index) => (
                      <motion.div 
                        key={index}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        className="flex items-start gap-3 p-4 border border-border rounded-lg bg-card"
                      >
                        <FileCheck className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                        <div>
                          <p className="font-medium text-foreground">{item.title}</p>
                          <p className="text-sm text-muted-foreground">{item.desc}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  
                  <div className="bg-primary/10 p-6 rounded-lg border border-primary/20">
                    <p className="text-lg font-medium text-foreground text-center">
                      Nothing lost. Nothing forgotten. Nothing late.
                    </p>
                  </div>
                </AnimatedSection>

                {/* Remedials Resolved Fast */}
                <AnimatedSection delay={0.2}>
                  <h2 className="text-3xl font-light mb-6">
                    <span className="underline-accent">Remedials Resolved Fast</span>
                  </h2>
                  <p className="text-muted-foreground font-light mb-6">
                    Every defect identified during <Link to="/fm-operations/ppm-delivery" className="text-primary hover:underline">PPM delivery</Link> gets:
                  </p>
                  <div className="space-y-4">
                    {["Risk code", "Costed proposal", "Rapid resolution"].map((item, index) => (
                      <motion.div 
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center gap-4"
                      >
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <CheckCircle2 className="w-5 h-5 text-primary" />
                        </div>
                        <p className="text-lg font-medium text-foreground">{item}</p>
                      </motion.div>
                    ))}
                  </div>
                  <p className="text-lg font-medium text-foreground mt-6">
                    We reduce fire risk — not just record it.
                  </p>
                </AnimatedSection>

                {/* Nationwide Service */}
                <AnimatedSection delay={0.1}>
                  <h2 className="text-3xl font-light mb-6">
                    <span className="underline-accent">Nationwide Service with Local Response Teams</span>
                  </h2>
                  <div className="text-muted-foreground font-light space-y-4">
                    <p>Engineers across the UK deliver:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Routine maintenance</li>
                      <li>Emergency attendance</li>
                      <li>Regulatory compliance support</li>
                    </ul>
                    <p className="text-lg font-medium text-foreground mt-4">
                      Local presence. National capability.
                    </p>
                  </div>
                </AnimatedSection>

                {/* Sector Experience */}
                <AnimatedSection delay={0.2}>
                  <h2 className="text-3xl font-light mb-6">
                    <span className="underline-accent">Sector Experience That Matters</span>
                  </h2>
                  <p className="text-muted-foreground font-light mb-6">We protect:</p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {[
                      { name: "Corporate offices", link: "/sectors/offices-corporate" },
                      { name: "Retail & public venues", link: "/sectors/retail-service-stations" },
                      { name: "PBSA & universities", link: "/sectors/residential-pbsa" },
                      { name: "Logistics & industrial", link: "/sectors/industrial-logistics" },
                      { name: "Healthcare & care sector", link: "/sectors" },
                      { name: "Hospitality & leisure", link: "/sectors/hospitality-leisure" }
                    ].map((sector, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <Link 
                          to={sector.link}
                          className="block p-4 border border-border rounded-lg hover:border-primary/50 transition-colors bg-card"
                        >
                          {sector.name}
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </AnimatedSection>

                {/* Case Studies */}
                <AnimatedSection delay={0.1}>
                  <h2 className="text-3xl font-light mb-6">
                    <span className="underline-accent">Case Study Highlights</span>
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="p-6 border border-border rounded-xl bg-card hover:border-primary/30 transition-colors"
                    >
                      <h3 className="text-xl font-medium mb-2">Retail Compliance Renewal</h3>
                      <p className="text-muted-foreground font-light">
                        Full asset upgrade. Zero downtime. Audit success.
                      </p>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 }}
                      className="p-6 border border-border rounded-xl bg-card hover:border-primary/30 transition-colors"
                    >
                      <h3 className="text-xl font-medium mb-2">PBSA Risk Reduction</h3>
                      <p className="text-muted-foreground font-light">
                        Evacuation safety uplift delivered in 3 weeks.
                      </p>
                    </motion.div>
                  </div>
                </AnimatedSection>

                {/* Compliance Details */}
                <ComplianceDetails 
                  serviceName="Fire Safety"
                  legalFramework={[
                    "Regulatory Reform (Fire Safety) Order 2005",
                    "BS 5839-1:2017 (Fire detection and alarm systems)",
                    "BS 5266-1:2016 (Emergency lighting)",
                    "BS 5306-3:2017 (Fire extinguisher maintenance)",
                    "BS EN 12845:2015 (Sprinkler systems)",
                    "Building Regulations Approved Document B"
                  ]}
                  responsiblePerson="The Responsible Person (typically the building owner, employer, or managing agent)"
                  consequences={[
                    "Unlimited fines and up to 2 years imprisonment for serious breaches",
                    "Prohibition notices forcing immediate building closure",
                    "Insurance claims rejected due to non-compliance",
                    "Personal liability for directors and duty holders",
                    "Corporate manslaughter charges in the event of fatalities",
                    "HSE enforcement action and improvement notices",
                    "Reputational damage and loss of business continuity"
                  ]}
                  testingFrequency="Fire alarms: Weekly user tests + quarterly/bi-annual servicing (BS 5839) | Emergency lighting: Monthly function tests + annual 3-hour duration tests (BS 5266) | Fire extinguishers: Annual servicing + 5-year extended service (BS 5306) | Sprinklers: Weekly/monthly checks + annual full system test"
                  whatWeInspect={[
                    "Fire alarm control panel functionality and fault diagnostics",
                    "All smoke, heat and manual call point devices tested individually",
                    "Emergency lighting battery capacity and illumination levels",
                    "Fire extinguisher pressure, seals, signage and accessibility",
                    "Sprinkler pump operation, valve positioning and water flow tests",
                    "Fire door closer mechanisms, intumescent strips and signage",
                    "AOV (automatic opening vent) smoke control systems",
                    "Fire damper operation within ductwork and ventilation",
                    "Dry/wet riser inlet connections and pressure testing",
                    "Emergency evacuation signage and wayfinding compliance",
                    "Fire risk assessment recommendations and remedial actions",
                    "Digital compliance records with photographic evidence"
                  ]}
                />

                <RelatedServices currentUrl="/services/fire-safety" />

                <RegionalServiceIndex 
                  serviceName="Fire Safety"
                  serviceSlug="fire"
                />

                <FAQSection faqs={faqs} />
              </div>

              {/* Sidebar */}
              <aside className="lg:col-span-1">
                <div className="sticky top-24">
                  <SidebarCTA />
                </div>
              </aside>
            </div>
          </div>
        </section>

        <DynamicYouMayAlsoNeed pageType="compliance" currentPageUrl="/services/fire-safety" />

        {/* Final CTA */}
        <ContentSection variant="gradient" centered>
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-light mb-4">
              Remedy risks before they become incidents.
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              📩 hello@entirefm.com
            </p>
            <Button 
              size="lg"
              onClick={() => trackProposalRequest('fire_safety_bottom')}
              asChild
            >
              <Link to="/request-proposal">
                <ArrowRight className="w-5 h-5 mr-2" />
                Request Fire Compliance Audit
              </Link>
            </Button>
          </AnimatedSection>
        </ContentSection>
      </div>
    </>
  );
};

export default FireSafety;
