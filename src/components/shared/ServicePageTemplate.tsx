import { ReactNode, useRef } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { ServiceSchema, FAQSchema } from "@/components/shared/SchemaMarkup";
import { FAQSection } from "@/components/shared/FAQSection";
import { SidebarCTA } from "@/components/shared/SidebarCTA";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { ArrowRight, Phone, CheckCircle2, AlertTriangle, Shield } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface ServiceStat {
  value: string;
  label: string;
}

interface ServiceComponent {
  title: string;
  description: string;
}

interface ComplianceItem {
  title: string;
  description: string;
}

interface RiskItem {
  title: string;
  description: string;
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

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface ServicePageTemplateProps {
  // SEO
  title: string;
  metaDescription: string;
  canonicalUrl?: string;
  
  // Breadcrumbs
  breadcrumbItems: BreadcrumbItem[];
  
  // Hero
  heroTitle: string;
  heroSubtitle: string;
  heroImage?: string;
  heroIcon?: LucideIcon;
  stats?: ServiceStat[];
  
  // Content
  overview: {
    title: string;
    paragraphs: string[];
  };
  components?: ServiceComponent[];
  compliance?: {
    title: string;
    intro?: string;
    items: ComplianceItem[];
  };
  maintenance?: string[];
  risks?: RiskItem[];
  benefits?: string[];
  
  // Related
  relatedServices?: RelatedService[];
  
  // FAQs
  faqs: FAQ[];
  
  // CTA
  ctaTitle?: string;
  ctaDescription?: string;
  
  // Custom
  customSections?: ReactNode;
}

const ServicePageTemplate = ({
  title,
  metaDescription,
  canonicalUrl,
  breadcrumbItems,
  heroTitle,
  heroSubtitle,
  heroImage = "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80",
  heroIcon: HeroIcon = Shield,
  stats,
  overview,
  components,
  compliance,
  maintenance,
  risks,
  benefits,
  relatedServices,
  faqs,
  ctaTitle = "Discuss Your Requirements",
  ctaDescription = "Talk to our team about your facilities management needs.",
  customSections,
}: ServicePageTemplateProps) => {
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

  // Hero parallax
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.3]);
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
        {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      </Helmet>

      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema 
        name={heroTitle}
        description={metaDescription}
        provider="EntireFM"
        areaServed="United Kingdom"
      />
      <FAQSchema faqs={faqs} />

      <div className="min-h-screen bg-background">
        {/* Hero Section with Parallax */}
        <section ref={heroRef} className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
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
            style={{ opacity: heroOpacity }}
          />
          
          {/* Floating particles effect */}
          <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-primary/30 rounded-full"
                style={{
                  left: `${20 + i * 20}%`,
                  top: `${25 + (i % 2) * 30}%`,
                }}
                animate={{
                  y: [-15, 15, -15],
                  x: [-8, 8, -8],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 4 + i * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.4,
                }}
              />
            ))}
          </div>
          
          {/* Hero Content with parallax text */}
          <motion.div 
            className="container mx-auto px-4 relative z-20 py-24"
            style={{ y: textY }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl"
            >
              <motion.div 
                className="flex items-center gap-3 mb-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <motion.div 
                  className="p-2 bg-primary/20 rounded-lg backdrop-blur-sm border border-primary/30"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <HeroIcon className="w-6 h-6 text-primary" />
                </motion.div>
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
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.h1>
              
              <motion.p 
                className="text-xl text-gray-300 font-light leading-relaxed mb-8 max-w-3xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                {heroSubtitle}
              </motion.p>
              
              <motion.div 
                className="flex flex-wrap gap-4 mb-8"
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
                      <div className="text-3xl font-light text-primary mb-1">{stat.value}</div>
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
            transition={{ delay: 1.2 }}
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
          className="relative h-20 -mt-10 z-30"
          style={{ opacity: transitionOpacity }}
        >
          {/* Gradient Fade */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
          
          {/* Animated Center Line */}
          <motion.div 
            className="absolute bottom-6 left-1/2 -translate-x-1/2 origin-center"
            style={{ scaleX: lineScale }}
          >
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
          </motion.div>
          
          {/* Decorative Dot */}
          <motion.div 
            className="absolute bottom-2 left-1/2 -translate-x-1/2"
            style={{ opacity: transitionOpacity }}
          >
            <div className="w-1.5 h-1.5 rounded-full bg-primary/60" />
          </motion.div>
        </motion.div>

        {/* Breadcrumb */}
        <div className="container mx-auto px-4 py-4">
          <Breadcrumb items={breadcrumbItems} />
        </div>

        {/* Main Content */}
        <motion.section 
          ref={contentRef}
          className="py-12 lg:py-16"
          style={{ 
            opacity: contentOpacity,
            y: contentY 
          }}
        >
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
              <div className="lg:col-span-2 space-y-12">
                
                {/* Overview */}
                <AnimatedSection>
                  <h2 className="text-3xl font-light mb-6">
                    <span className="underline-accent">{overview.title}</span>
                  </h2>
                  <motion.div
                    whileHover={{ scale: 1.01, y: -2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  >
                    <Card className="p-8 bg-card/50 backdrop-blur border-border/50 hover:shadow-xl hover:border-primary/30 transition-all duration-300">
                      {overview.paragraphs.map((paragraph, idx) => (
                        <p key={idx} className="text-muted-foreground font-light leading-relaxed mb-4 last:mb-0">
                          {paragraph}
                        </p>
                      ))}
                    </Card>
                  </motion.div>
                </AnimatedSection>

                {/* Service Components */}
                {components && components.length > 0 && (
                  <AnimatedSection delay={0.1}>
                    <h2 className="text-3xl font-light mb-6">
                      <span className="underline-accent">Service Components</span>
                    </h2>
                    <div className="grid md:grid-cols-2 gap-4">
                      {components.map((component, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          whileHover={{ scale: 1.03, y: -4 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1, type: "spring", stiffness: 300 }}
                        >
                          <Card className="p-6 h-full bg-card/50 backdrop-blur border-border/50 hover:shadow-xl hover:border-primary/30 transition-all duration-300">
                            <h3 className="font-medium mb-3">{component.title}</h3>
                            <p className="text-sm text-muted-foreground font-light leading-relaxed">
                              {component.description}
                            </p>
                          </Card>
                        </motion.div>
                      ))}
                    </div>
                  </AnimatedSection>
                )}

                {/* Compliance */}
                {compliance && (
                  <AnimatedSection delay={0.2}>
                    <h2 className="text-3xl font-light mb-6">
                      <span className="underline-accent">{compliance.title}</span>
                    </h2>
                    <motion.div
                      whileHover={{ scale: 1.01 }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    >
                      <Card className="p-8 bg-card/50 backdrop-blur border-border/50 hover:shadow-xl hover:border-primary/30 transition-all duration-300">
                        {compliance.intro && (
                          <p className="text-muted-foreground font-light leading-relaxed mb-6">
                            {compliance.intro}
                          </p>
                        )}
                        <div className="space-y-4">
                          {compliance.items.map((item, idx) => (
                            <motion.div 
                              key={idx}
                              whileHover={{ x: 4 }}
                              transition={{ type: "spring", stiffness: 400 }}
                            >
                              <h3 className="font-medium mb-2">{item.title}</h3>
                              <p className="text-sm text-muted-foreground font-light leading-relaxed">
                                {item.description}
                              </p>
                            </motion.div>
                          ))}
                        </div>
                      </Card>
                    </motion.div>
                  </AnimatedSection>
                )}

                {/* Maintenance */}
                {maintenance && maintenance.length > 0 && (
                  <AnimatedSection delay={0.3}>
                    <h2 className="text-3xl font-light mb-6">
                      <span className="underline-accent">Maintenance Requirements</span>
                    </h2>
                    <motion.div
                      whileHover={{ scale: 1.01 }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    >
                      <Card className="p-8 bg-card/50 backdrop-blur border-border/50 hover:shadow-xl hover:border-primary/30 transition-all duration-300">
                        <ul className="space-y-3">
                          {maintenance.map((item, idx) => (
                            <motion.li 
                              key={idx} 
                              className="flex items-start gap-3 text-muted-foreground font-light group"
                              whileHover={{ x: 6 }}
                              transition={{ type: "spring", stiffness: 400 }}
                            >
                              <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                              <span>{item}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </Card>
                    </motion.div>
                  </AnimatedSection>
                )}

                {/* Risks */}
                {risks && risks.length > 0 && (
                  <AnimatedSection delay={0.4}>
                    <h2 className="text-3xl font-light mb-6">
                      <span className="underline-accent">Risks of Non-Compliance</span>
                    </h2>
                    <motion.div
                      whileHover={{ scale: 1.01 }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    >
                      <Card className="p-8 bg-destructive/5 border-destructive/20 hover:shadow-xl hover:border-destructive/40 transition-all duration-300">
                        <div className="flex items-center gap-3 mb-6">
                          <motion.div
                            whileHover={{ rotate: 12, scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 400 }}
                          >
                            <AlertTriangle className="w-6 h-6 text-destructive" />
                          </motion.div>
                          <span className="font-medium">Key Risks</span>
                        </div>
                        <div className="space-y-4">
                          {risks.map((risk, idx) => (
                            <motion.div 
                              key={idx} 
                              className="flex items-start gap-3"
                              whileHover={{ x: 6 }}
                              transition={{ type: "spring", stiffness: 400 }}
                            >
                              <span className="text-destructive mt-1">→</span>
                              <div>
                                <span className="font-medium">{risk.title}:</span>{" "}
                                <span className="text-muted-foreground font-light">{risk.description}</span>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </Card>
                    </motion.div>
                  </AnimatedSection>
                )}

                {/* Benefits */}
                {benefits && benefits.length > 0 && (
                  <AnimatedSection delay={0.5}>
                    <h2 className="text-3xl font-light mb-6">
                      <span className="underline-accent">How EntireFM Delivers</span>
                    </h2>
                    <motion.div
                      whileHover={{ scale: 1.01 }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    >
                      <Card className="p-8 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 hover:shadow-xl hover:from-primary/10 hover:to-primary/15 transition-all duration-300">
                        <ul className="space-y-3">
                          {benefits.map((benefit, idx) => (
                            <motion.li 
                              key={idx} 
                              className="flex items-start gap-3 text-muted-foreground font-light group"
                              whileHover={{ x: 6 }}
                              transition={{ type: "spring", stiffness: 400 }}
                            >
                              <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                              <span>{benefit}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </Card>
                    </motion.div>
                  </AnimatedSection>
                )}

                {/* Custom Sections */}
                {customSections}

                {/* Related Services */}
                {relatedServices && relatedServices.length > 0 && (
                  <AnimatedSection delay={0.6}>
                    <h2 className="text-3xl font-light mb-6">
                      <span className="underline-accent">Related Services</span>
                    </h2>
                    <div className="grid md:grid-cols-2 gap-4">
                      {relatedServices.map((service, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          whileHover={{ scale: 1.03, y: -4 }}
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
                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  >
                    <Card className="p-8 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20 hover:shadow-xl hover:from-primary/15 hover:to-primary/10 transition-all duration-300">
                      <h2 className="text-2xl font-light mb-4">{ctaTitle}</h2>
                      <p className="text-muted-foreground font-light leading-relaxed mb-6">
                        {ctaDescription}
                      </p>
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
                            <Link to="/contact">Contact Support</Link>
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

export default ServicePageTemplate;
