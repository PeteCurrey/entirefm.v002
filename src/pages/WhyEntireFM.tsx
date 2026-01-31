import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  Check, 
  X, 
  Shield, 
  Clock, 
  Building, 
  FileCheck, 
  Cog,
  AlertTriangle,
  Phone,
  FileText,
  Download,
  Users,
  Zap,
  Target,
  Eye
} from "lucide-react";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import AnimatedSection from "@/components/shared/AnimatedSection";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" as const }
  }
};

const WhyEntireFM = () => {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const comparisonData = [
    {
      feature: "Decision Making",
      enterprise: "Layers of approvals and slow decision chains",
      entirefm: "Direct access to decision makers",
      icon: Zap
    },
    {
      feature: "Accountability",
      enterprise: "Internal politics and account churn",
      entirefm: "Owner-led accountability",
      icon: Target
    },
    {
      feature: "FM Oversight",
      enterprise: "Generic service models with junior staff",
      entirefm: "Lean, senior-heavy FM oversight",
      icon: Eye
    },
    {
      feature: "Technology",
      enterprise: "One-size-fits-all CAFM systems",
      entirefm: "Platform built around how engineers actually work",
      icon: Cog
    },
    {
      feature: "Flexibility",
      enterprise: "Rigid contract structures",
      entirefm: "Delivery model shaped around each estate",
      icon: Users
    }
  ];

  const estateManagement = [
    {
      title: "Field Operations Intelligence Platform",
      description: "Real-time visibility into engineer movements, job progress, and asset status across your entire portfolio.",
      icon: Eye
    },
    {
      title: "PPM Planning & Governance",
      description: "Structured maintenance schedules with forward planning, budget forecasting, and compliance tracking.",
      icon: Clock
    },
    {
      title: "Reactive Triage & Escalation",
      description: "Clear escalation paths with defined response times. Critical issues flagged immediately to senior management.",
      icon: AlertTriangle
    },
    {
      title: "Supplier Network & Specialist Partners",
      description: "Vetted specialist contractors for niche requirements. Single point of contact regardless of trade.",
      icon: Users
    },
    {
      title: "Compliance Documentation & Audit Readiness",
      description: "Complete audit trail with certificates, reports, and remedial tracking. Always inspection-ready.",
      icon: FileCheck
    }
  ];

  const riskGovernance = [
    { 
      title: "Statutory Obligations", 
      description: "Full compliance with RRO, Electricity at Work, Gas Safety, ACOP L8, and all relevant legislation.",
      icon: FileCheck
    },
    { 
      title: "Life-Safety Systems", 
      description: "Fire detection, emergency lighting, suppression systems — tested, maintained, documented.",
      icon: Shield
    },
    { 
      title: "High-Risk Plant", 
      description: "Fire, electrical, water, gas, lifting equipment, BMUs — specialist management and certification.",
      icon: AlertTriangle
    },
    { 
      title: "Contractor Controls", 
      description: "RAMS review, permit-to-work systems, induction management, and competency verification.",
      icon: Users
    }
  ];

  const clientCares = [
    { text: "No surprises", icon: Shield },
    { text: "No 'we'll get back to you next week'", icon: Clock },
    { text: "Honest reporting", icon: FileText },
    { text: "Clear responsibilities", icon: Target },
    { text: "Buildings that work", icon: Building }
  ];

  const metrics = [
    { value: "24/7", label: "Helpdesk Coverage" },
    { value: "120+", label: "Sites Managed" },
    { value: "98%", label: "SLA Compliance" },
    { value: "<41", label: "Min Avg Response" }
  ];

  return (
    <>
      <Helmet>
        <title>Why EntireFM | Independent Facilities Management Partner</title>
        <meta 
          name="description" 
          content="Choose EntireFM for independent, agile facilities management with owner-led accountability, UK-wide coverage, and rigorous compliance standards. Direct access to decision makers." 
        />
        <link rel="canonical" href="https://entirefm.com/why-entirefm" />
      </Helmet>
      <BreadcrumbSchema items={[
        { label: "Home", href: "/" },
        { label: "Why EntireFM" }
      ]} />

      {/* Hero Section - Full Screen with Parallax */}
      <section 
        ref={heroRef}
        className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
      >
        {/* Background with parallax */}
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y: heroY }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal-light to-charcoal" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-secondary/15 via-transparent to-transparent" />
          
          {/* Decorative elements */}
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px]" />
        </motion.div>

        {/* Content */}
        <motion.div 
          className="container mx-auto px-6 relative z-10 pt-32"
          style={{ opacity: heroOpacity }}
        >
          <div className="max-w-5xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block text-primary text-sm tracking-widest uppercase mb-6 font-light"
            >
              Independent FM Partner
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
              className="text-4xl md:text-5xl lg:text-7xl font-extralight text-white mb-8 leading-[1.1] tracking-tight"
            >
              Why Choose{" "}
              <span className="text-primary">EntireFM</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
              className="text-xl md:text-2xl text-gray-300 font-extralight leading-relaxed max-w-3xl mb-12"
            >
              Independent facilities management that delivers control, responsiveness, and governance — 
              without the friction of enterprise bureaucracy.
            </motion.p>

            {/* Metrics Row */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-3xl"
            >
              {metrics.map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9 + index * 0.1, duration: 0.5 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 text-center"
                >
                  <div className="text-2xl md:text-3xl font-light text-white mb-1">{metric.value}</div>
                  <div className="text-xs md:text-sm text-gray-400 font-light">{metric.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2"
          >
            <motion.div className="w-1.5 h-3 bg-white/50 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Hero to Content Transition */}
      <div className="h-24 bg-gradient-to-b from-charcoal to-background" />

      {/* Section 1: Engineered FM */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-muted/30 via-background to-muted/20" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection className="max-w-3xl mb-16">
              <span className="block text-primary text-sm tracking-widest uppercase mb-4 font-light">
                Our Approach
              </span>
              <h2 className="text-4xl md:text-5xl font-extralight mb-6">
                <span className="underline-accent">Engineered FM</span>, Not Just Tasks
              </h2>
              <p className="text-xl text-muted-foreground font-light leading-relaxed">
                We deliver outcomes — uptime, compliance, occupier experience — not just completed work orders. 
                Our approach is built on a hard FM and compliance backbone, with real sector depth and national 
                coverage backed by realistic, grown-up promises.
              </p>
            </AnimatedSection>
            
            <motion.div 
              className="grid md:grid-cols-3 gap-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {[
                {
                  icon: Shield,
                  title: "Hard FM Backbone",
                  description: "Compliance-first approach to M&E, fire safety, water hygiene, and electrical systems."
                },
                {
                  icon: Building,
                  title: "Sector Depth",
                  description: "Offices, PBSA, healthcare, industrial, logistics — we understand your building type."
                },
                {
                  icon: Clock,
                  title: "National Coverage",
                  description: "UK-wide delivery with realistic response times and local engineer presence."
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={staggerItem}
                  className="group relative"
                >
                  <div className="relative bg-white/50 dark:bg-white/5 backdrop-blur-sm border border-border/50 rounded-xl p-8 h-full transition-all duration-500 hover:bg-white/80 dark:hover:bg-white/10 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-medium mb-3">{item.title}</h3>
                    <p className="text-muted-foreground font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2: Independent vs Enterprise - Premium Comparison */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal-light to-charcoal" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection className="text-center mb-16">
              <span className="block text-primary text-sm tracking-widest uppercase mb-4 font-light">
                The Difference
              </span>
              <h2 className="text-4xl md:text-5xl font-extralight text-white mb-6">
                Independent vs Enterprise FM
              </h2>
              <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto">
                See how owner-led accountability outperforms corporate bureaucracy
              </p>
            </AnimatedSection>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Enterprise Column */}
              <motion.div
                variants={scaleIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                  <div className="flex items-center gap-4 mb-8 pb-6 border-b border-white/10">
                    <div className="w-12 h-12 rounded-full bg-destructive/20 flex items-center justify-center">
                      <X className="w-6 h-6 text-destructive" />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium text-white">Enterprise FM Providers</h3>
                      <p className="text-sm text-gray-500 font-light">Mitie, CBRE, JLL, etc.</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    {comparisonData.map((item, index) => (
                      <motion.div 
                        key={index} 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start gap-4 p-4 rounded-xl bg-destructive/5 border border-destructive/10"
                      >
                        <X className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm font-medium text-white">{item.feature}</p>
                          <p className="text-sm text-gray-400 font-light">{item.enterprise}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* EntireFM Column */}
              <motion.div
                variants={scaleIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="relative"
              >
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-2xl blur-lg opacity-50" />
                
                <div className="relative bg-gradient-to-br from-primary/10 to-primary/5 backdrop-blur-sm border border-primary/20 rounded-2xl p-8">
                  <div className="flex items-center gap-4 mb-8 pb-6 border-b border-primary/20">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <Check className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium text-white">EntireFM</h3>
                      <p className="text-sm text-primary/70 font-light">Independent, owner-led FM</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    {comparisonData.map((item, index) => (
                      <motion.div 
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start gap-4 p-4 rounded-xl bg-primary/5 border border-primary/10"
                      >
                        <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm font-medium text-white">{item.feature}</p>
                          <p className="text-sm text-gray-300 font-light">{item.entirefm}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: How We Run Your Estate */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/20 to-background" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[120px]" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection className="max-w-3xl mb-16">
              <span className="block text-primary text-sm tracking-widest uppercase mb-4 font-light">
                Our Process
              </span>
              <h2 className="text-4xl md:text-5xl font-extralight mb-6">
                How We Run <span className="text-primary">Your Estate</span>
              </h2>
              <p className="text-xl text-muted-foreground font-light">
                A systematic approach to facilities management that keeps your buildings running smoothly.
              </p>
            </AnimatedSection>
            
            <motion.div 
              className="space-y-6"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {estateManagement.map((item, index) => (
                <motion.div
                  key={index}
                  variants={staggerItem}
                  className="group"
                >
                  <div className="flex gap-6 p-6 md:p-8 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm hover:bg-card/60 hover:border-primary/20 transition-all duration-500 hover:shadow-lg hover:shadow-primary/5">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-2">
                        <span className="text-xs text-primary font-medium tracking-wider uppercase">Step {index + 1}</span>
                      </div>
                      <h3 className="text-xl font-medium mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                      <p className="text-muted-foreground font-light leading-relaxed">{item.description}</p>
                    </div>
                    <div className="hidden md:flex items-center">
                      <ArrowRight className="w-5 h-5 text-muted-foreground/30 group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 4: Risk & Governance */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-muted/40 via-background to-muted/30" />
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection className="flex flex-col md:flex-row md:items-end gap-6 mb-16">
              <div className="flex-1">
                <span className="block text-primary text-sm tracking-widest uppercase mb-4 font-light">
                  Compliance First
                </span>
                <h2 className="text-4xl md:text-5xl font-extralight mb-4">
                  Risk & <span className="text-primary">Governance</span>
                </h2>
                <p className="text-xl text-muted-foreground font-light">
                  Your statutory and regulatory obligations, managed with rigour and transparency.
                </p>
              </div>
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <AlertTriangle className="w-10 h-10 text-primary" />
                </div>
              </div>
            </AnimatedSection>
            
            <motion.div 
              className="grid md:grid-cols-2 gap-6"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {riskGovernance.map((item, index) => (
                <motion.div
                  key={index}
                  variants={staggerItem}
                  className="group"
                >
                  <div className="relative h-full bg-white/60 dark:bg-white/5 backdrop-blur-sm border border-border/50 rounded-2xl p-8 transition-all duration-500 hover:bg-white/80 dark:hover:bg-white/10 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-lg font-medium">{item.title}</h3>
                    </div>
                    <p className="text-muted-foreground font-light leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 5: What Our Clients Care About */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal-light to-charcoal" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-primary/15 via-transparent to-transparent" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection className="text-center mb-16">
              <span className="block text-primary text-sm tracking-widest uppercase mb-4 font-light">
                Our Promise
              </span>
              <h2 className="text-4xl md:text-5xl font-extralight text-white mb-6">
                What Our Clients Care About
              </h2>
            </AnimatedSection>
            
            <motion.div 
              className="flex flex-wrap justify-center gap-4 md:gap-6"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {clientCares.map((item, index) => (
                <motion.div 
                  key={index}
                  variants={staggerItem}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group flex items-center gap-3 px-6 py-4 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:border-primary/30 hover:bg-primary/10 transition-all duration-300 cursor-default"
                >
                  <item.icon className="w-5 h-5 text-primary" />
                  <span className="text-white font-light">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 6: CTA */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
        <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/3 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px]" />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            <span className="block text-primary text-sm tracking-widest uppercase mb-4 font-light">
              Get Started
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight mb-6">
              Ready to Make the Switch?
            </h2>
            <p className="text-xl text-muted-foreground font-light mb-12 max-w-2xl mx-auto">
              Discover how EntireFM can transform your facilities management experience with owner-led accountability and genuine expertise.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="hover-scale text-base px-8">
                <Link to="/request-proposal">
                  <FileText className="mr-2 h-5 w-5" />
                  Request a Proposal
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="hover-scale text-base px-8">
                <Link to="/fm-operations/helpdesk">
                  <Phone className="mr-2 h-5 w-5" />
                  Arrange a Call
                </Link>
              </Button>
            </div>
            
            <div className="mt-12 flex flex-wrap justify-center gap-6">
              <Link 
                to="/compliance-pack" 
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-light group"
              >
                <Download className="w-4 h-4" />
                <span className="group-hover:underline">Sample Compliance Pack</span>
              </Link>
              <Link 
                to="/compare" 
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-light group"
              >
                <ArrowRight className="w-4 h-4" />
                <span className="group-hover:underline">Compare Providers</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default WhyEntireFM;
