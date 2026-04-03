"use client";

import { ReactNode, useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SchemaMarkup, FAQSchema } from "@/components/shared/SchemaMarkup";
import { FAQSection } from "@/components/shared/FAQSection";
import { TrustBar } from "@/components/shared/TrustBar";
import StatsBanner from "@/components/shared/StatsBanner";
import ContentSection from "@/components/shared/ContentSection";
import CTASection from "@/components/shared/CTASection";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { ArrowRight, Phone, CheckCircle2, AlertTriangle, Building2, Shield, Wrench, Zap, Settings, Cog, Gauge, ClipboardCheck } from "lucide-react";
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
  complianceRisks?: ComplianceRisk[];
  risks?: ComplianceRisk[];
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
  
  // Optional second image for alternating sections
  sectionImage?: string;
}

// Icon pool for compliance risks & key systems
const riskIcons: LucideIcon[] = [AlertTriangle, Shield, ClipboardCheck, Zap, Gauge, Settings];
const systemIcons: LucideIcon[] = [Wrench, Cog, Settings, Zap, Shield, Gauge, ClipboardCheck];

const SectorPageTemplate = ({
  title,
  metaDescription,
  canonicalUrl,
  heroTitle,
  heroSubtitle,
  heroImage = "/images/hero-tfm.png",
  stats,
  heroIcon: HeroIcon = Building2,
  sectorSummary,
  complianceRisks,
  risks,
  keySystems,
  operationalChallenges,
  whyEntireFM,
  caseStudies,
  relatedServices,
  faqs,
  customSections,
  sectionImage,
}: SectorPageTemplateProps) => {
  const displayRisks = complianceRisks || risks || [];
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

  const secondaryImage = sectionImage || heroImage;

  const heroRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  
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

  // Build stats for StatsBanner
  const bannerStats = stats?.map(s => {
    const numMatch = s.value.match(/^([<>+~]?)(\d+)(.*)$/);
    if (numMatch) {
      return { value: numMatch[2], label: s.label, prefix: numMatch[1] || undefined, suffix: numMatch[3] || undefined };
    }
    return { value: s.value, label: s.label };
  }) || [];

  return (
    <>


      <SchemaMarkup schema={serviceSchema} />
      <FAQSchema faqs={faqs} />

      <div className="min-h-screen bg-background">
        {/* ===== HERO SECTION (preserved) ===== */}
        <section ref={heroRef} className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
          <motion.div className="absolute inset-0 z-0" style={{ y: backgroundY, scale }}>
            <div 
              className="absolute inset-0 bg-cover bg-center h-[120%] w-full"
              style={{ backgroundImage: `url(${heroImage})` }}
            />
          </motion.div>
          
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-charcoal/95 via-charcoal/85 to-primary/20 z-10"
            style={{ opacity }}
          />
          
          <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-primary/30 rounded-full"
                style={{ left: `${15 + i * 15}%`, top: `${20 + (i % 3) * 25}%` }}
                animate={{ y: [-20, 20, -20], x: [-10, 10, -10], opacity: [0.3, 0.7, 0.3] }}
                transition={{ duration: 4 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
              />
            ))}
          </div>
          
          <motion.div className="container mx-auto px-4 relative z-20 py-32" style={{ y: textY }}>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl">
              <motion.div className="flex items-center gap-3 mb-6" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
                <motion.div className="p-3 bg-primary/20 rounded-xl backdrop-blur-sm border border-primary/30" whileHover={{ scale: 1.1, rotate: 5 }} transition={{ type: "spring", stiffness: 400 }}>
                  <HeroIcon className="w-8 h-8 text-primary" />
                </motion.div>
                <span className="text-primary font-medium uppercase tracking-wider text-sm">Sector Expertise</span>
              </motion.div>
              
              <motion.h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 leading-tight" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}>
                {heroTitle.split(' ').map((word, i) => (
                  <motion.span key={i} className="inline-block mr-3" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}>
                    {word}
                  </motion.span>
                ))}
              </motion.h1>
              
              <motion.p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed mb-8 max-w-3xl" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }}>
                {heroSubtitle}
              </motion.p>
              
              <motion.div className="flex flex-wrap gap-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.7 }}>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                  <Button size="lg" asChild className="hover-lift shadow-lg shadow-primary/25">
                    <Link href="/request-proposal">Request Proposal <ArrowRight className="w-5 h-5 ml-2" /></Link>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                  <Button size="lg" variant="outline" asChild className="hover-lift bg-white/10 border-white/30 text-white hover:bg-white hover:text-charcoal backdrop-blur-sm">
                    <Link href="/contact"><Phone className="w-5 h-5 mr-2" />Contact Us</Link>
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
          
          <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}>
            <motion.div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center" animate={{ y: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
              <motion.div className="w-1.5 h-3 bg-primary rounded-full mt-2" animate={{ y: [0, 8, 0], opacity: [1, 0.5, 1] }} transition={{ duration: 1.5, repeat: Infinity }} />
            </motion.div>
          </motion.div>
        </section>

        {/* ===== TRANSITION ZONE (preserved) ===== */}
        <motion.div className="relative h-24 -mt-12 z-30" style={{ opacity: transitionOpacity }}>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
          <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2 origin-center" style={{ scaleX: lineScale }}>
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
          </motion.div>
          <motion.div className="absolute bottom-4 left-1/2 -translate-x-1/2" style={{ opacity: transitionOpacity }}>
            <div className="w-2 h-2 rounded-full bg-primary/60" />
          </motion.div>
        </motion.div>

        {/* ===== TRUST BAR ===== */}
        <TrustBar variant="compact" />

        {/* ===== STATS BANNER ===== */}
        {bannerStats.length > 0 && (
          <StatsBanner stats={bannerStats} variant="gradient" />
        )}

        {/* ===== MAIN CONTENT (full-width, no sidebar) ===== */}
        <motion.div
          ref={contentRef}
          style={{ opacity: contentOpacity, y: contentY }}
        >
          {/* --- Sector Summary with alternating image --- */}
          <ContentSection variant="default">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <AnimatedSection>
                <h2 className="text-3xl md:text-4xl font-light mb-6 text-foreground">
                  <span className="underline-accent">{sectorSummary.title}</span>
                </h2>
                {sectorSummary.paragraphs.map((paragraph, idx) => (
                  <p key={idx} className="text-muted-foreground font-light leading-relaxed mb-4 last:mb-0">
                    {paragraph}
                  </p>
                ))}
              </AnimatedSection>
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]"
              >
                <img src={heroImage} alt={sectorSummary.title} className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 to-transparent" />
              </motion.div>
            </div>
          </ContentSection>

          {/* --- Operational Challenges with image (reversed) --- */}
          {operationalChallenges && operationalChallenges.length > 0 && (
            <ContentSection variant="muted">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                  className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] order-2 lg:order-1"
                >
                  <img src={secondaryImage} alt="Operational challenges" className="w-full h-full object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 to-transparent" />
                </motion.div>
                <AnimatedSection className="order-1 lg:order-2">
                  <h2 className="text-3xl md:text-4xl font-light mb-8 text-foreground">
                    <span className="underline-accent">Operational Challenges</span>
                  </h2>
                  <div className="space-y-6">
                    {operationalChallenges.map((challenge, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: 10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        whileHover={{ x: 4 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1, type: "spring", stiffness: 300 }}
                        className="flex items-start gap-3"
                      >
                        <div className="p-1.5 bg-primary/10 rounded-lg flex-shrink-0 mt-0.5">
                          <Cog className="w-4 h-4 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-medium mb-1 text-foreground">{challenge.title}</h3>
                          <p className="text-sm text-muted-foreground font-light leading-relaxed">{challenge.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </AnimatedSection>
              </div>
            </ContentSection>
          )}

          {/* --- Compliance Risks as icon card grid --- */}
          <ContentSection title="Core Compliance Risks" variant="default">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayRisks.map((risk, index) => {
                const RiskIcon = riskIcons[index % riskIcons.length];
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.03, y: -4 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08, duration: 0.5 }}
                    className="p-6 bg-card/50 backdrop-blur rounded-xl border border-border/50 hover:border-destructive/40 hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center mb-4 group-hover:bg-destructive/20 transition-colors">
                      <RiskIcon className="w-6 h-6 text-destructive" />
                    </div>
                    <h3 className="text-lg font-medium mb-2 text-foreground">{risk.title}</h3>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed">
                      {risk.description}
                      {risk.link && (
                        <>
                          {" "}
                          <Link href={risk.link} className="text-primary hover:underline font-medium">
                            {risk.linkText || "Learn more"}
                          </Link>
                        </>
                      )}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </ContentSection>

          {/* --- Key Systems as icon grid with glassmorphism --- */}
          {keySystems && keySystems.length > 0 && (
            <ContentSection title="Key Systems" variant="muted">
              <div className="grid md:grid-cols-2 gap-8">
                {keySystems.map((system, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.15, duration: 0.5 }}
                    className="p-6 bg-card/30 backdrop-blur-md rounded-xl border border-border/50 hover:border-primary/40 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        {(() => { const SysIcon = systemIcons[idx % systemIcons.length]; return <SysIcon className="w-5 h-5 text-primary" />; })()}
                      </div>
                      <h3 className="text-lg font-medium text-primary">{system.category}</h3>
                    </div>
                    <div className="grid grid-cols-1 gap-2.5">
                      {system.items.map((item, itemIdx) => (
                        <motion.div
                          key={itemIdx}
                          className="flex items-start gap-2.5 group"
                          whileHover={{ x: 4 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                          <span className="text-sm text-muted-foreground font-light">{item}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </ContentSection>
          )}

          {/* --- Custom Sections --- */}
          {customSections}

          {/* --- Why EntireFM as full-width gradient strip --- */}
          <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 via-primary/5 to-background">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-light text-foreground">
                  <span className="underline-accent">Why EntireFM</span>
                </h2>
              </motion.div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
                {whyEntireFM.map((point, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.03, y: -2 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.06, duration: 0.4 }}
                    className="flex items-start gap-3 p-4 bg-card/60 backdrop-blur rounded-lg border border-border/50 hover:border-primary/40 hover:shadow-md transition-all duration-300"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground font-light leading-relaxed">{point}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* --- Case Studies with glassmorphism --- */}
          {caseStudies && caseStudies.length > 0 && (
            <ContentSection title="Related Case Studies" variant="default">
              <div className="grid md:grid-cols-2 gap-6">
                {caseStudies.map((study, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.03, y: -4 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, type: "spring", stiffness: 300 }}
                    className="relative overflow-hidden rounded-xl border border-border/50 hover:border-primary/50 hover:shadow-2xl transition-all duration-300 group"
                  >
                    {/* Background image hint */}
                    <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                      <div className="w-full h-full bg-gradient-to-br from-primary/30 to-primary/5" />
                    </div>
                    <div className="relative p-8 bg-card/70 backdrop-blur-sm">
                      <h3 className="text-xl font-medium mb-3 text-foreground">
                        <Link href={study.link} className="hover:text-primary transition-colors">
                          {study.title}
                        </Link>
                      </h3>
                      <p className="text-muted-foreground font-light leading-relaxed mb-5">
                        {study.description}
                      </p>
                      <Link href={study.link} className="text-sm text-primary hover:underline inline-flex items-center gap-1.5 font-medium group/link">
                        {study.linkText}
                        <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            </ContentSection>
          )}

          {/* --- Related Services as hover-interactive cards --- */}
          {relatedServices && relatedServices.length > 0 && (
            <ContentSection title="Related Services" variant="muted">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedServices.map((service, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.04, y: -6 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.08, type: "spring", stiffness: 300 }}
                  >
                    <Link href={service.href} className="block h-full">
                      <div className="h-full p-6 bg-card/60 backdrop-blur rounded-xl border border-border/50 hover:border-primary/50 hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative">
                          <div className="flex items-start justify-between mb-3">
                            <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">{service.title}</h3>
                            <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0 ml-2" />
                          </div>
                          <p className="text-sm text-muted-foreground font-light leading-relaxed">{service.description}</p>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </ContentSection>
          )}

          {/* --- FAQ Section (preserved) --- */}
          <ContentSection variant="default">
            <FAQSection faqs={faqs} />
          </ContentSection>

          {/* --- Enhanced CTA --- */}
          <CTASection
            title="Discuss Your Requirements"
            description="Talk to our team about tailored facilities management solutions for your sector."
            variant="gradient"
          />
        </motion.div>
      </div>
    </>
  );
};

export default SectorPageTemplate;
