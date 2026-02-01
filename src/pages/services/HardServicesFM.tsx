import { useRef } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SchemaMarkup, FAQSchema } from "@/components/shared/SchemaMarkup";
import { FAQSection } from "@/components/shared/FAQSection";
import { SidebarCTA } from "@/components/shared/SidebarCTA";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { 
  ArrowRight, 
  Phone, 
  Wrench, 
  Shield, 
  Zap, 
  Flame, 
  Droplets, 
  Wind,
  Building2,
  AlertTriangle,
  CheckCircle2,
  Clock,
  FileCheck
} from "lucide-react";

const HardServicesFM = () => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Hard FM & Technical Building Services",
    "provider": {
      "@type": "Organization",
      "name": "EntireFM"
    },
    "description": "Definition of Hard FM, compliance responsibilities, and asset maintenance overview for commercial estates."
  };

  const faqs = [
    {
      question: "What is the difference between hard FM and soft FM?",
      answer: "Hard FM covers technical building systems and infrastructure - mechanical, electrical, plumbing, fire safety, and structural maintenance. Soft FM covers services that support building occupancy like cleaning, security, catering, and grounds maintenance."
    },
    {
      question: "What compliance responsibilities fall under hard FM?",
      answer: "Hard FM includes all statutory compliance testing: electrical EICRs, gas safety certificates, fire alarm testing, emergency lighting, water hygiene, lift inspections, and pressure system examinations. Non-compliance creates legal liability for building owners."
    },
    {
      question: "How often should hard FM maintenance occur?",
      answer: "Frequency depends on the system and regulations. Fire alarms require weekly testing, emergency lighting monthly, gas safety annually, and EICRs every 5 years for commercial properties. PPM schedules are tailored to asset criticality and manufacturer recommendations."
    },
    {
      question: "Can hard FM be delivered reactively without PPM?",
      answer: "Reactive-only approaches fail on compliance and increase costs. Statutory testing is mandatory regardless of asset condition. PPM prevents failures, extends asset life, and reduces total cost of ownership compared to run-to-failure strategies."
    }
  ];

  const stats = [
    { value: "24/7", label: "Emergency Response" },
    { value: "100%", label: "Compliance Focus" },
    { value: "6", label: "Core Disciplines" },
    { value: "UK Wide", label: "Coverage" }
  ];

  const coreServices = [
    {
      icon: Zap,
      title: "Electrical Systems & Compliance",
      description: "Fixed wire testing, EICRs, distribution board maintenance, emergency lighting testing, and electrical safety compliance. Prevents fire risks and ensures power system reliability.",
      href: "/services/electrical"
    },
    {
      icon: Wind,
      title: "HVAC & Mechanical Services",
      description: "Air conditioning, ventilation, heating systems, chillers, boilers, and F-Gas compliance. Maintains thermal comfort, air quality, and energy efficiency.",
      href: "/services/hvac"
    },
    {
      icon: Flame,
      title: "Fire Safety Systems",
      description: "Fire alarms, emergency lighting, sprinklers, dry risers, AOV systems, and fire door maintenance. Critical for life safety and regulatory compliance.",
      href: "/services/fire-safety"
    },
    {
      icon: Droplets,
      title: "Plumbing & Water Systems",
      description: "Pipework, pumps, drainage, hot water systems, and pressure vessels. Includes legionella control and water hygiene management.",
      href: "/services/plumbing"
    },
    {
      icon: Flame,
      title: "Gas Safety & Compliance",
      description: "Commercial gas safety inspections, boiler servicing, gas pipework testing, and landlord gas certificates. Prevents carbon monoxide risks.",
      href: "/services/gas-safety"
    },
    {
      icon: Building2,
      title: "Building Fabric & Structure",
      description: "Roofing, façade maintenance, windows, doors, structural repairs, and weatherproofing. Protects the building envelope and prevents water ingress.",
      href: "/services/building-fabric"
    }
  ];

  const complianceTable = [
    { system: "Fire Alarms", frequency: "Weekly call point test", regulation: "BS 5839-1" },
    { system: "Emergency Lighting", frequency: "Monthly function test", regulation: "BS 5266-1" },
    { system: "Fixed Wire Testing (EICR)", frequency: "Every 5 years", regulation: "BS 7671" },
    { system: "Gas Safety Inspection", frequency: "Annually", regulation: "Gas Safety Regulations" },
    { system: "Legionella Risk Assessment", frequency: "Every 2 years", regulation: "L8 (HSE)" },
    { system: "Sprinkler Systems", frequency: "Weekly visual check", regulation: "BS 9251" },
    { system: "Lift Inspections", frequency: "Every 6 months", regulation: "LOLER" },
    { system: "Air Conditioning (TM44)", frequency: "Every 5 years", regulation: "Energy Performance Regulations" }
  ];

  const risks = [
    {
      title: "Legal Prosecution",
      description: "HSE and fire authorities prosecute building owners for compliance failures. Penalties include unlimited fines, custodial sentences for serious breaches, and director disqualification."
    },
    {
      title: "Insurance Invalidation",
      description: "Insurance policies require current compliance certificates. Claims may be rejected if testing is overdue, leaving building owners liable for full loss value."
    },
    {
      title: "Operational Disruption",
      description: "Failed systems cause business interruption. Air conditioning failure in data centres, lift breakdowns in high-rise buildings, or fire alarm faults impacting operations cost far more than preventative maintenance."
    },
    {
      title: "Asset Life Reduction",
      description: "Neglected maintenance accelerates asset degradation. Boilers, chillers, and electrical systems fail prematurely without regular servicing, requiring expensive capital replacement."
    }
  ];

  const deliveryPoints = [
    "Qualified engineers with trade-specific accreditations",
    "Planned maintenance schedules aligned to compliance deadlines",
    "24/7 helpdesk for emergency response",
    "Digital compliance management and certificate storage",
    "Transparent reporting and service level monitoring",
    "Proactive asset condition monitoring"
  ];

  const heroRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const { scrollYProgress: contentProgress } = useScroll({
    target: contentRef,
    offset: ["start end", "start 0.3"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.3]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  
  const transitionOpacity = useTransform(contentProgress, [0, 0.5], [0, 1]);
  const lineScale = useTransform(contentProgress, [0, 0.6], [0, 1]);
  const contentY = useTransform(contentProgress, [0, 1], [60, 0]);
  const contentOpacity = useTransform(contentProgress, [0, 0.5], [0, 1]);

  return (
    <>
      <Helmet>
        <title>Hard FM & Technical Building Services | Facilities Management | EntireFM</title>
        <meta name="description" content="Hard facilities management and technical building services. Mechanical, electrical, plumbing, fire safety, and compliance maintenance for commercial estates." />
        <link rel="canonical" href="https://entirefm.com/services/hard-services" />
      </Helmet>

      <SchemaMarkup schema={serviceSchema} />
      <FAQSchema faqs={faqs} />

      <div className="min-h-screen bg-background">
        {/* Hero Section with Parallax */}
        <section ref={heroRef} className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
          {/* Parallax Background Image */}
          <motion.div 
            className="absolute inset-0 z-0"
            style={{ y: backgroundY, scale }}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center h-[120%] w-full"
              style={{ backgroundImage: `url(https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80)` }}
            />
          </motion.div>
          
          {/* Gradient Overlay */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-charcoal/95 via-charcoal/85 to-primary/20 z-10"
            style={{ opacity }}
          />
          
          {/* Floating particles effect */}
          <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-primary/30 rounded-full"
                style={{
                  left: `${15 + i * 15}%`,
                  top: `${20 + (i % 3) * 25}%`,
                }}
                animate={{
                  y: [-20, 20, -20],
                  x: [-10, 10, -10],
                  opacity: [0.3, 0.7, 0.3],
                }}
                transition={{
                  duration: 4 + i * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.3,
                }}
              />
            ))}
          </div>
          
          {/* Hero Content */}
          <motion.div 
            className="container mx-auto px-4 relative z-20 py-32"
            style={{ y: textY }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl"
            >
              <motion.div 
                className="flex items-center gap-3 mb-6"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <motion.div 
                  className="p-3 bg-primary/20 rounded-xl backdrop-blur-sm border border-primary/30"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Wrench className="w-8 h-8 text-primary" />
                </motion.div>
                <span className="text-primary font-medium uppercase tracking-wider text-sm">Technical Services</span>
              </motion.div>
              
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Hard FM & Technical Building Services
              </motion.h1>
              
              <motion.p 
                className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed mb-8 max-w-3xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Comprehensive mechanical, electrical, and compliance maintenance protecting your building infrastructure and operational continuity.
              </motion.p>
              
              <motion.div 
                className="flex flex-wrap gap-4 mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                  <Button size="lg" asChild className="hover-lift shadow-lg shadow-primary/25">
                    <Link to="/request-proposal">
                      Request Proposal
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                  <Button size="lg" variant="outline" asChild className="hover-lift bg-white/10 border-white/30 text-white hover:bg-white hover:text-charcoal backdrop-blur-sm">
                    <Link to="/contact">
                      <Phone className="w-5 h-5 mr-2" />
                      Contact Us
                    </Link>
                  </Button>
                </motion.div>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.6 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
              >
                {stats.map((stat, index) => (
                  <motion.div 
                    key={index} 
                    className="text-center md:text-left p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1 + index * 0.1, duration: 0.4 }}
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                  >
                    <motion.div 
                      className="text-2xl md:text-3xl font-light text-primary mb-1"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.2 + index * 0.1 }}
                    >
                      {stat.value}
                    </motion.div>
                    <div className="text-xs md:text-sm text-gray-400 font-light">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
          
          {/* Scroll indicator */}
          <motion.div 
            className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <motion.div
              className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <motion.div 
                className="w-1.5 h-3 bg-primary rounded-full mt-2"
                animate={{ y: [0, 8, 0], opacity: [1, 0.5, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>
        </section>

        {/* Hero-to-Content Transition Zone */}
        <motion.div 
          className="relative h-24 -mt-12 z-30"
          style={{ opacity: transitionOpacity }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
          
          <motion.div 
            className="absolute bottom-8 left-1/2 -translate-x-1/2 origin-center"
            style={{ scaleX: lineScale }}
          >
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
          </motion.div>
          
          <motion.div 
            className="absolute bottom-4 left-1/2 -translate-x-1/2"
            style={{ opacity: transitionOpacity }}
          >
            <div className="w-2 h-2 rounded-full bg-primary/60" />
          </motion.div>
        </motion.div>

        {/* Main Content */}
        <motion.section 
          ref={contentRef}
          className="py-16 lg:py-24"
          style={{ 
            opacity: contentOpacity,
            y: contentY 
          }}
        >
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
              <div className="lg:col-span-2 space-y-16">
                
                {/* What Hard FM Covers */}
                <AnimatedSection>
                  <h2 className="text-3xl font-light mb-6">
                    <span className="underline-accent">What Hard FM Covers</span>
                  </h2>
                  <motion.div
                    whileHover={{ scale: 1.01, y: -2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  >
                    <Card className="p-8 bg-card/50 backdrop-blur border-border/50 hover:shadow-xl hover:border-primary/30 transition-all duration-300">
                      <p className="text-muted-foreground font-light leading-relaxed mb-4">
                        Hard facilities management encompasses the technical infrastructure that makes buildings functional and compliant. This includes all mechanical, electrical, plumbing, fire safety, and structural systems requiring specialist engineering knowledge.
                      </p>
                      <p className="text-muted-foreground font-light leading-relaxed">
                        Unlike soft FM services which support building occupancy, hard FM maintains the physical assets that provide heating, cooling, power, water, fire protection, and life safety systems. Failure of hard FM systems creates compliance breaches, operational disruption, and safety risks.
                      </p>
                    </Card>
                  </motion.div>
                </AnimatedSection>

                {/* Core Services Grid */}
                <AnimatedSection delay={0.1}>
                  <h2 className="text-3xl font-light mb-6">
                    <span className="underline-accent">Core Hard FM Services</span>
                  </h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {coreServices.map((service, index) => {
                      const IconComponent = service.icon;
                      return (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          whileHover={{ scale: 1.02, y: -4 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1, type: "spring", stiffness: 300 }}
                        >
                          <Link to={service.href}>
                            <Card className="p-6 h-full bg-card/50 backdrop-blur border-border/50 hover:shadow-xl hover:border-primary/30 transition-all duration-300 group cursor-pointer">
                              <div className="flex items-start gap-4">
                                <motion.div 
                                  className="p-3 bg-primary/10 rounded-xl flex-shrink-0 group-hover:bg-primary/20 transition-colors"
                                  whileHover={{ rotate: 5, scale: 1.1 }}
                                  transition={{ type: "spring", stiffness: 400 }}
                                >
                                  <IconComponent className="w-6 h-6 text-primary" />
                                </motion.div>
                                <div>
                                  <h3 className="font-medium mb-2 group-hover:text-primary transition-colors flex items-center gap-2">
                                    {service.title}
                                    <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                  </h3>
                                  <p className="text-sm text-muted-foreground font-light leading-relaxed">
                                    {service.description}
                                  </p>
                                </div>
                              </div>
                            </Card>
                          </Link>
                        </motion.div>
                      );
                    })}
                  </div>
                </AnimatedSection>

                {/* Legal & Technical Responsibilities */}
                <AnimatedSection delay={0.2}>
                  <h2 className="text-3xl font-light mb-6">
                    <span className="underline-accent">Legal & Technical Responsibilities</span>
                  </h2>
                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  >
                    <Card className="p-8 bg-card/50 backdrop-blur border-border/50 hover:shadow-xl hover:border-primary/30 transition-all duration-300">
                      <div className="space-y-6">
                        {[
                          {
                            icon: Shield,
                            title: "Building Owner Duties",
                            description: "Under the Health and Safety at Work Act 1974 and subsequent regulations, building owners must ensure premises are safe and compliant. This includes maintaining all building systems, conducting statutory inspections, and holding current certificates."
                          },
                          {
                            icon: FileCheck,
                            title: "Responsible Person Obligations",
                            description: "The Regulatory Reform (Fire Safety) Order 2005 designates a responsible person who must ensure fire safety compliance. This includes maintaining fire systems, conducting fire risk assessments, and keeping documentation current."
                          },
                          {
                            icon: Building2,
                            title: "Landlord & Tenant Responsibilities",
                            description: "Lease agreements must clearly define maintenance responsibilities. Typically, landlords maintain core building systems while tenants maintain fit-out and tenant-specific installations. Ambiguity creates compliance gaps."
                          },
                          {
                            icon: CheckCircle2,
                            title: "Contractor Competency Requirements",
                            description: "Building owners must ensure contractors are competent and hold appropriate qualifications. Gas Safe registration, NICEIC approval, and trade-specific accreditations are mandatory for regulated works."
                          }
                        ].map((item, idx) => {
                          const IconComponent = item.icon;
                          return (
                            <motion.div 
                              key={idx}
                              className="flex items-start gap-4"
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: idx * 0.1 }}
                            >
                              <motion.div 
                                className="p-2 bg-primary/10 rounded-lg flex-shrink-0"
                                whileHover={{ rotate: 5, scale: 1.1 }}
                              >
                                <IconComponent className="w-5 h-5 text-primary" />
                              </motion.div>
                              <div>
                                <h3 className="font-medium mb-2">{item.title}</h3>
                                <p className="text-sm text-muted-foreground font-light leading-relaxed">
                                  {item.description}
                                </p>
                              </div>
                            </motion.div>
                          );
                        })}
                      </div>
                    </Card>
                  </motion.div>
                </AnimatedSection>

                {/* Compliance Table */}
                <AnimatedSection delay={0.3}>
                  <h2 className="text-3xl font-light mb-6">
                    <span className="underline-accent">Statutory Testing Frequency</span>
                  </h2>
                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  >
                    <Card className="p-8 bg-card/50 backdrop-blur border-border/50 hover:shadow-xl hover:border-primary/30 transition-all duration-300 overflow-hidden">
                      <div className="overflow-x-auto -mx-8 px-8">
                        <table className="w-full text-sm min-w-[500px]">
                          <thead>
                            <tr className="border-b border-border">
                              <th className="text-left py-3 font-medium">System</th>
                              <th className="text-left py-3 font-medium">Test Frequency</th>
                              <th className="text-left py-3 font-medium">Regulation</th>
                            </tr>
                          </thead>
                          <tbody className="text-muted-foreground font-light">
                            {complianceTable.map((row, idx) => (
                              <motion.tr 
                                key={idx}
                                className="border-b border-border/50 hover:bg-primary/5 transition-colors"
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05 }}
                              >
                                <td className="py-3 font-medium text-foreground">{row.system}</td>
                                <td className="py-3">{row.frequency}</td>
                                <td className="py-3 text-primary">{row.regulation}</td>
                              </motion.tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </Card>
                  </motion.div>
                </AnimatedSection>

                {/* Risks of Non-Compliance */}
                <AnimatedSection delay={0.4}>
                  <h2 className="text-3xl font-light mb-6">
                    <span className="underline-accent">Risks of Non-Compliance</span>
                  </h2>
                  <div className="space-y-4">
                    {risks.map((risk, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        whileHover={{ scale: 1.02, x: 8 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, type: "spring", stiffness: 300 }}
                      >
                        <Card className="p-6 bg-card/50 backdrop-blur border-border/50 hover:shadow-xl hover:border-destructive/30 transition-all duration-300">
                          <div className="flex items-start gap-4">
                            <motion.div 
                              className="p-2 bg-destructive/10 rounded-lg flex-shrink-0"
                              whileHover={{ rotate: 12, scale: 1.1 }}
                              transition={{ type: "spring", stiffness: 400 }}
                            >
                              <AlertTriangle className="w-5 h-5 text-destructive" />
                            </motion.div>
                            <div>
                              <h3 className="font-medium mb-2">{risk.title}</h3>
                              <p className="text-sm text-muted-foreground font-light leading-relaxed">
                                {risk.description}
                              </p>
                            </div>
                          </div>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </AnimatedSection>

                {/* How EntireFM Delivers */}
                <AnimatedSection delay={0.5}>
                  <h2 className="text-3xl font-light mb-6">
                    <span className="underline-accent">How EntireFM Delivers Hard FM</span>
                  </h2>
                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  >
                    <Card className="p-8 bg-card/50 backdrop-blur border-border/50 hover:shadow-xl hover:border-primary/30 transition-all duration-300">
                      <p className="text-muted-foreground font-light leading-relaxed mb-6">
                        Our hard FM delivery model combines planned preventative maintenance with reactive response capability. All works are delivered by qualified engineers and documented to regulatory standards.
                      </p>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {deliveryPoints.map((point, idx) => (
                          <motion.div
                            key={idx}
                            className="flex items-start gap-3 group"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ x: 4 }}
                          >
                            <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                            <span className="text-sm text-muted-foreground font-light">{point}</span>
                          </motion.div>
                        ))}
                      </div>
                    </Card>
                  </motion.div>
                </AnimatedSection>

                {/* FAQ Section */}
                <AnimatedSection delay={0.6}>
                  <FAQSection faqs={faqs} />
                </AnimatedSection>

                {/* Final CTA */}
                <AnimatedSection delay={0.7}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Card className="p-8 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border-primary/20 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500">
                      <div className="flex items-start gap-4 mb-6">
                        <motion.div 
                          className="p-3 bg-primary/20 rounded-xl"
                          animate={{ rotate: [0, 5, -5, 0] }}
                          transition={{ duration: 4, repeat: Infinity }}
                        >
                          <Clock className="w-6 h-6 text-primary" />
                        </motion.div>
                        <div>
                          <h2 className="text-2xl font-light mb-2">
                            Discuss Hard FM Requirements
                          </h2>
                          <p className="text-muted-foreground font-light leading-relaxed">
                            Talk to our team about hard facilities management for your estate. We'll assess your compliance position and propose a tailored maintenance programme.
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-4">
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                          <Button size="lg" asChild className="shadow-lg shadow-primary/25">
                            <Link to="/request-proposal">
                              Request Proposal
                              <ArrowRight className="w-5 h-5 ml-2" />
                            </Link>
                          </Button>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                          <Button size="lg" variant="outline" asChild>
                            <Link to="/contact">
                              <Phone className="w-5 h-5 mr-2" />
                              Contact Us
                            </Link>
                          </Button>
                        </motion.div>
                      </div>
                    </Card>
                  </motion.div>
                </AnimatedSection>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-24">
                  <AnimatedSection direction="right" delay={0.3}>
                    <SidebarCTA />
                  </AnimatedSection>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </>
  );
};

export default HardServicesFM;
