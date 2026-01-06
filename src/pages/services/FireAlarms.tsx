import { Helmet } from "react-helmet";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { SidebarCTA } from "@/components/shared/SidebarCTA";
import { FAQSection } from "@/components/shared/FAQSection";
import { ServiceSchema, FAQSchema } from "@/components/shared/SchemaMarkup";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle2, AlertTriangle, Bell, Shield, ArrowRight, Phone, Zap } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/shared/AnimatedSection";
import CTASection from "@/components/shared/CTASection";

const FireAlarms = () => {
  const faqs = [
    {
      question: "How often do fire alarms need testing?",
      answer: "Weekly user tests + quarterly specialist maintenance, per BS 5839."
    },
    {
      question: "Do you service multi-site portfolios?",
      answer: "Yes — our CAFM platform simplifies cross-site scheduling and reporting."
    },
    {
      question: "Can you respond to fire panel faults 24/7?",
      answer: "Absolutely. Critical response is instant."
    },
    {
      question: "Do you handle Cause & Effect?",
      answer: "Yes — we validate logic and update programming where required."
    }
  ];

  const stats = [
    { value: "98%", label: "Remedial SLA Met" },
    { value: "100%", label: "Compliance Retention" },
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

  return (
    <>
      <Helmet>
        <title>Fire Alarm Maintenance & Compliance (BS 5839)</title>
        <meta 
          name="description" 
          content="Inspections, testing & rapid remediation. Protect people & operations."
        />
        <link rel="canonical" href="https://entirefm.com/services/fire-alarms" />
      </Helmet>

      <ServiceSchema 
        name="Fire Alarm Service & Maintenance"
        description="Fire alarm testing, maintenance, and BS 5839 compliance for commercial properties"
        provider="EntireFM"
        areaServed="United Kingdom"
      />
      <FAQSchema faqs={faqs} />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-destructive/80 via-charcoal/90 to-charcoal z-10" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80')] bg-cover bg-center" />
        
        <div className="container mx-auto px-6 relative z-20 text-white py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Breadcrumb items={[
              { label: "Services", href: "/services" },
              { label: "Fire Alarm Systems" }
            ]} className="mb-6" />
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 max-w-4xl">
              Fire Safety with No Room for Error
            </h1>
            <p className="text-xl md:text-2xl font-light max-w-3xl text-gray-200 mb-8">
              Certified fire alarm testing and maintenance that protects people, property, and your legal liability.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-white text-charcoal hover:bg-gray-100" asChild>
                <Link to="/contact">
                  Request Fire Alarm Proposal
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-charcoal" asChild>
                <Link to="/contact">Book System Survey</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="bg-charcoal py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center text-white"
              >
                <div className="text-3xl md:text-4xl font-light mb-2">{stat.value}</div>
                <div className="text-sm text-gray-400 font-light">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-16">
            
            <AnimatedSection>
              <section className="bg-destructive/5 border border-destructive/20 p-8 rounded-2xl">
                <div className="flex items-start gap-4 mb-4">
                  <AlertTriangle className="w-8 h-8 text-destructive flex-shrink-0" />
                  <h2 className="text-3xl font-light">
                    Risk: Fires Don't Give Second Chances
                  </h2>
                </div>
                <p className="text-lg font-light text-muted-foreground">
                  When fire protection fails, everything fails. We keep your systems compliant, responsive, and ready.
                </p>
              </section>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <Bell className="w-8 h-8 text-primary" />
                  <h2 className="text-3xl font-light underline-accent inline-block">
                    What We Maintain
                  </h2>
                </div>
                <p className="text-muted-foreground font-light mb-6">
                  All critical detection and control components:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {maintenanceItems.map((service, index) => (
                    <motion.div 
                      key={index} 
                      className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="font-light">{service}</span>
                    </motion.div>
                  ))}
                </div>
                <p className="text-lg font-medium mt-6 text-primary">
                  If it protects life — we maintain it.
                </p>
              </section>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <Shield className="w-8 h-8 text-primary" />
                  <h2 className="text-3xl font-light underline-accent inline-block">
                    BS 5839: Full Compliance, No Grey Areas
                  </h2>
                </div>
                <p className="text-muted-foreground font-light mb-6">
                  We inspect, test and maintain to BS 5839-1 for commercial buildings, including:
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  {[
                    "Weekly user tests (supported & scheduled reminders)",
                    "Quarterly & biannual inspections",
                    "Annual full-system test",
                    "Zone testing with recorded traceability"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 border rounded-lg hover:border-primary transition-colors">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="font-light">{item}</span>
                    </div>
                  ))}
                </div>
                <p className="text-lg font-medium bg-primary/10 p-4 rounded-lg">
                  All visits logged. All records stored. Easily retrievable for audits or HSE.
                </p>
              </section>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <section className="bg-muted/30 p-8 rounded-2xl">
                <h2 className="text-3xl font-light mb-6">
                  Reporting Fire Risk Clearly
                </h2>
                <p className="text-muted-foreground font-light mb-6">
                  Every inspection includes:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { title: "Device-by-device test records", desc: "Complete traceability for every component tested." },
                    { title: "Photographic evidence of failures", desc: "Visual proof of issues for audit and remedial action." },
                    { title: "Risk-prioritised remedial actions", desc: "Clear priorities to address critical issues first." },
                    { title: "Costed compliance proposals", desc: "Data-driven decision support for Responsible Persons." }
                  ].map((item, index) => (
                    <div key={index} className="border-l-4 border-primary pl-6">
                      <h3 className="font-medium mb-2">{item.title}</h3>
                      <p className="text-sm font-light text-muted-foreground">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </section>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <AlertTriangle className="w-8 h-8 text-destructive" />
                  <h2 className="text-3xl font-light underline-accent inline-block">
                    Industry Problem: Vendors Who Just Tick Boxes
                  </h2>
                </div>
                <p className="text-lg font-light mb-6 text-muted-foreground">
                  We fix the industry's biggest fire safety issues:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Missed tests",
                    "Non-existent asset registers",
                    "Lost certificates",
                    "Zero context for risk exposure"
                  ].map((item, index) => (
                    <motion.div 
                      key={index} 
                      className="flex items-start gap-3 p-4 bg-destructive/5 border border-destructive/20 rounded-lg"
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <AlertTriangle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                      <span className="font-light">{item}</span>
                    </motion.div>
                  ))}
                </div>
                <p className="text-lg font-medium mt-6 text-primary">
                  We build a full compliance storyline — not a checkbox exercise.
                </p>
              </section>
            </AnimatedSection>

            <AnimatedSection delay={0.5}>
              <section className="bg-gradient-to-br from-primary/10 to-transparent p-8 rounded-2xl border border-primary/20">
                <div className="flex items-center gap-3 mb-6">
                  <Zap className="w-8 h-8 text-primary" />
                  <h2 className="text-3xl font-light">
                    Our Technology Advantage
                  </h2>
                </div>
                <p className="text-lg font-light mb-6 text-muted-foreground">
                  Your fire system compliance is visible in real-time:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { title: "QR-coded asset tagging", desc: "Instant access to equipment history and records." },
                    { title: "Digital certificates", desc: "Immediate access to compliance documentation." },
                    { title: "Automatic expiry reminders", desc: "Never miss a test deadline or inspection window." },
                    { title: "Mobile engineer updates", desc: "Real-time job status and completion notifications." },
                    { title: "Cloud storage of all records", desc: "Complete audit trail accessible anytime, anywhere." },
                    { title: "SLA tracking for downtime", desc: "Performance metrics that prove reliability." }
                  ].map((item, index) => (
                    <div key={index} className="border-l-4 border-primary pl-6">
                      <h3 className="font-medium mb-2">{item.title}</h3>
                      <p className="text-sm font-light text-muted-foreground">{item.desc}</p>
                    </div>
                  ))}
                </div>
                <p className="text-lg font-medium mt-6 text-primary">
                  No more "paper folder in the FM office".
                </p>
              </section>
            </AnimatedSection>

            <AnimatedSection delay={0.6}>
              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Proof & Performance
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    { value: "98%", desc: "Of critical remedial actions completed within SLA" },
                    { value: "100%", desc: "Compliance retention across portfolio clients" },
                    { value: "Zero", desc: "Enforcement notices in 24 months across high-risk sites" }
                  ].map((item, index) => (
                    <motion.div 
                      key={index} 
                      className="border-l-4 border-primary pl-6 p-4 bg-muted/30 rounded-r-lg"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="text-4xl font-light mb-2 text-primary">{item.value}</div>
                      <p className="text-sm font-light text-muted-foreground">{item.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </section>
            </AnimatedSection>

            <AnimatedSection delay={0.7}>
              <FAQSection faqs={faqs} />
            </AnimatedSection>

            <CTASection
              title="Fire safety negligence isn't a risk — it's a guarantee of failure"
              description="Switch to a provider who won't miss the basics."
              primaryLabel="Request Compliance Review"
              primaryHref="/contact"
              secondaryLabel="24/7 Helpdesk"
              secondaryHref="tel:+448001234567"
              secondaryIcon={Phone}
              variant="dark"
            />
          </div>

          <aside className="lg:col-span-1">
            <div className="sticky top-24">
              <SidebarCTA />
            </div>
          </aside>
        </div>
      </div>
    </>
  );
};

export default FireAlarms;