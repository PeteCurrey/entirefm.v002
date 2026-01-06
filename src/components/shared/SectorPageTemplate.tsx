import { ReactNode, useRef } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SchemaMarkup, FAQSchema } from "@/components/shared/SchemaMarkup";
import { FAQSection } from "@/components/shared/FAQSection";
import { SidebarCTA } from "@/components/shared/SidebarCTA";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { ArrowRight, Phone, CheckCircle2, AlertTriangle, Building2 } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface SectorStat {
  value: string;
  label: string;
}

interface ComplianceRisk {
  title: string;
  description: string;
  link?: string;
  linkText?: string;
}

interface KeySystem {
  category: string;
  items: string[];
}

interface OperationalChallenge {
  title: string;
  description: string;
}

interface CaseStudy {
  title: string;
  description: string;
  link: string;
  linkText: string;
}

interface RelatedService {
  title: string;
  description: string;
  href: string;
}

interface FAQ {
  question: string;
  answer: string;
}

interface SectorPageTemplateProps {
  // SEO
  title: string;
  metaDescription: string;
  canonicalUrl: string;
  
  // Hero
  heroTitle: string;
  heroSubtitle: string;
  heroImage?: string;
  stats?: SectorStat[];
  heroIcon?: LucideIcon;
  
  // Content
  sectorSummary: {
    title: string;
    paragraphs: string[];
  };
  complianceRisks: ComplianceRisk[];
  keySystems?: KeySystem[];
  operationalChallenges?: OperationalChallenge[];
  whyEntireFM: string[];
  
  // Related Content
  caseStudies?: CaseStudy[];
  relatedServices?: RelatedService[];
  
  // FAQs
  faqs: FAQ[];
  
  // Custom Content
  customSections?: ReactNode;
}

const SectorPageTemplate = ({
  title,
  metaDescription,
  canonicalUrl,
  heroTitle,
  heroSubtitle,
  heroImage = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80",
  stats,
  heroIcon: HeroIcon = Building2,
  sectorSummary,
  complianceRisks,
  keySystems,
  operationalChallenges,
  whyEntireFM,
  caseStudies,
  relatedServices,
  faqs,
  customSections,
}: SectorPageTemplateProps) => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": heroTitle,
    "provider": {
      "@type": "Organization",
      "name": "EntireFM"
    },
    "description": metaDescription
  };

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
  
  // Transition zone animations
  const transitionOpacity = useTransform(contentProgress, [0, 0.5], [0, 1]);
  const lineScale = useTransform(contentProgress, [0, 0.6], [0, 1]);
  const contentY = useTransform(contentProgress, [0, 1], [60, 0]);
  const contentOpacity = useTransform(contentProgress, [0, 0.5], [0, 1]);

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={canonicalUrl} />
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
              style={{ backgroundImage: `url(${heroImage})` }}
            />
          </motion.div>
          
          {/* Gradient Overlay with animated opacity */}
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
          
          {/* Hero Content with parallax text */}
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
                  <HeroIcon className="w-8 h-8 text-primary" />
                </motion.div>
                <span className="text-primary font-medium uppercase tracking-wider text-sm">Sector Expertise</span>
              </motion.div>
              
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                {heroTitle.split(' ').map((word, i) => (
                  <motion.span
                    key={i}
                    className="inline-block mr-3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.h1>
              
              <motion.p 
                className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed mb-8 max-w-3xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                {heroSubtitle}
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

              {stats && stats.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.6 }}
                  className="grid grid-cols-2 md:grid-cols-4 gap-6"
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
                        className="text-3xl md:text-4xl font-light text-primary mb-1"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2 + index * 0.1 }}
                      >
                        {stat.value}
                      </motion.div>
                      <div className="text-sm text-gray-400 font-light">{stat.label}</div>
                    </motion.div>
                  ))}
                </motion.div>
              )}
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
          {/* Gradient Fade */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
          
          {/* Animated Center Line */}
          <motion.div 
            className="absolute bottom-8 left-1/2 -translate-x-1/2 origin-center"
            style={{ scaleX: lineScale }}
          >
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
          </motion.div>
          
          {/* Decorative Dot */}
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
                
                {/* Sector Summary */}
                <AnimatedSection>
                  <h2 className="text-3xl font-light mb-6">
                    <span className="underline-accent">{sectorSummary.title}</span>
                  </h2>
                  <motion.div
                    whileHover={{ scale: 1.01, y: -2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  >
                    <Card className="p-8 bg-card/50 backdrop-blur border-border/50 hover:shadow-xl hover:border-primary/30 transition-all duration-300">
                      {sectorSummary.paragraphs.map((paragraph, idx) => (
                        <p key={idx} className="text-muted-foreground font-light leading-relaxed mb-4 last:mb-0">
                          {paragraph}
                        </p>
                      ))}
                    </Card>
                  </motion.div>
                </AnimatedSection>

                {/* Compliance Risks */}
                <AnimatedSection delay={0.1}>
                  <h2 className="text-3xl font-light mb-6">
                    <span className="underline-accent">Core Compliance Risks</span>
                  </h2>
                  <div className="space-y-4">
                    {complianceRisks.map((risk, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        whileHover={{ scale: 1.02, x: 8 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, type: "spring", stiffness: 300 }}
                      >
                        <Card className="p-6 bg-card/50 backdrop-blur border-border/50 hover:shadow-xl hover:border-destructive/30 transition-all duration-300 cursor-default">
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
                                {risk.link && (
                                  <>
                                    {" "}
                                    <Link to={risk.link} className="text-primary hover:underline font-medium">
                                      {risk.linkText || "Learn more"}
                                    </Link>
                                  </>
                                )}
                              </p>
                            </div>
                          </div>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </AnimatedSection>

                {/* Key Systems */}
                {keySystems && keySystems.length > 0 && (
                  <AnimatedSection delay={0.2}>
                    <h2 className="text-3xl font-light mb-6">
                      <span className="underline-accent">Key Systems</span>
                    </h2>
                    <motion.div
                      whileHover={{ scale: 1.01 }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    >
                      <Card className="p-8 bg-card/50 backdrop-blur border-border/50 hover:shadow-xl hover:border-primary/30 transition-all duration-300">
                        <div className="grid md:grid-cols-2 gap-8">
                          {keySystems.map((system, idx) => (
                            <motion.div 
                              key={idx}
                              initial={{ opacity: 0, y: 10 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: idx * 0.15 }}
                            >
                              <h3 className="font-medium mb-4 text-primary">{system.category}</h3>
                              <ul className="space-y-2">
                                {system.items.map((item, itemIdx) => (
                                  <motion.li 
                                    key={itemIdx} 
                                    className="text-sm text-muted-foreground font-light flex items-start gap-2 group"
                                    whileHover={{ x: 4 }}
                                    transition={{ type: "spring", stiffness: 400 }}
                                  >
                                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                                    <span>{item}</span>
                                  </motion.li>
                                ))}
                              </ul>
                            </motion.div>
                          ))}
                        </div>
                      </Card>
                    </motion.div>
                  </AnimatedSection>
                )}

                {/* Operational Challenges */}
                {operationalChallenges && operationalChallenges.length > 0 && (
                  <AnimatedSection delay={0.3}>
                    <h2 className="text-3xl font-light mb-6">
                      <span className="underline-accent">Operational Challenges</span>
                    </h2>
                    <motion.div
                      whileHover={{ scale: 1.01 }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    >
                      <Card className="p-8 bg-card/50 backdrop-blur border-border/50 hover:shadow-xl hover:border-primary/30 transition-all duration-300">
                        <div className="space-y-6">
                          {operationalChallenges.map((challenge, idx) => (
                            <motion.div 
                              key={idx}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              whileHover={{ x: 4 }}
                              viewport={{ once: true }}
                              transition={{ delay: idx * 0.1, type: "spring", stiffness: 300 }}
                            >
                              <h3 className="font-medium mb-2">{challenge.title}</h3>
                              <p className="text-sm text-muted-foreground font-light leading-relaxed">
                                {challenge.description}
                              </p>
                            </motion.div>
                          ))}
                        </div>
                      </Card>
                    </motion.div>
                  </AnimatedSection>
                )}

                {/* Custom Sections */}
                {customSections}

                {/* Why EntireFM */}
                <AnimatedSection delay={0.4}>
                  <h2 className="text-3xl font-light mb-6">
                    <span className="underline-accent">Why EntireFM</span>
                  </h2>
                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  >
                    <Card className="p-8 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 hover:shadow-xl hover:from-primary/10 hover:to-primary/15 transition-all duration-300">
                      <ul className="space-y-3">
                        {whyEntireFM.map((point, idx) => (
                          <motion.li 
                            key={idx} 
                            className="flex items-start gap-3 text-muted-foreground font-light group"
                            whileHover={{ x: 6 }}
                            transition={{ type: "spring", stiffness: 400 }}
                          >
                            <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                            <span>{point}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </Card>
                  </motion.div>
                </AnimatedSection>

                {/* Case Studies */}
                {caseStudies && caseStudies.length > 0 && (
                  <AnimatedSection delay={0.5}>
                    <h2 className="text-3xl font-light mb-6">
                      <span className="underline-accent">Related Case Studies</span>
                    </h2>
                    <div className="grid md:grid-cols-2 gap-4">
                      {caseStudies.map((study, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          whileHover={{ scale: 1.03, y: -4 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.1, type: "spring", stiffness: 300 }}
                        >
                          <Card className="p-6 h-full bg-card/50 backdrop-blur hover:shadow-xl hover:border-primary/40 transition-all duration-300">
                            <h3 className="font-medium mb-3">
                              <Link to={study.link} className="hover:text-primary transition-colors">
                                {study.title}
                              </Link>
                            </h3>
                            <p className="text-sm text-muted-foreground font-light leading-relaxed mb-4">
                              {study.description}
                            </p>
                            <Link to={study.link} className="text-sm text-primary hover:underline inline-flex items-center gap-1 group">
                              {study.linkText}
                              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                          </Card>
                        </motion.div>
                      ))}
                    </div>
                  </AnimatedSection>
                )}

                {/* Related Services */}
                {relatedServices && relatedServices.length > 0 && (
                  <AnimatedSection delay={0.6}>
                    <h2 className="text-3xl font-light mb-6">
                      <span className="underline-accent">Related Services</span>
                    </h2>
                    <div className="grid md:grid-cols-3 gap-4">
                      {relatedServices.map((service, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          whileHover={{ scale: 1.05, y: -6 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.08, type: "spring", stiffness: 300 }}
                        >
                          <Link to={service.href}>
                            <Card className="p-6 h-full cursor-pointer bg-card/50 backdrop-blur hover:border-primary/50 hover:shadow-xl transition-all duration-300">
                              <h3 className="font-medium mb-2">{service.title}</h3>
                              <p className="text-sm text-muted-foreground font-light">{service.description}</p>
                            </Card>
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </AnimatedSection>
                )}

                {/* FAQ Section */}
                <AnimatedSection delay={0.7}>
                  <FAQSection faqs={faqs} />
                </AnimatedSection>

                {/* Final CTA */}
                <AnimatedSection delay={0.8}>
                  <Card className="p-8 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
                    <h2 className="text-2xl font-light mb-4">
                      Discuss Your Requirements
                    </h2>
                    <p className="text-muted-foreground font-light leading-relaxed mb-6">
                      Talk to our team about facilities management for your sector.
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <Button size="lg" asChild>
                        <Link to="/request-proposal">
                          Request Proposal
                          <ArrowRight className="w-5 h-5 ml-2" />
                        </Link>
                      </Button>
                      <Button size="lg" variant="outline" asChild>
                        <Link to="/contact">
                          <Phone className="w-5 h-5 mr-2" />
                          Contact Us
                        </Link>
                      </Button>
                    </div>
                  </Card>
                </AnimatedSection>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-24">
                  <SidebarCTA />
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </>
  );
};

export default SectorPageTemplate;
