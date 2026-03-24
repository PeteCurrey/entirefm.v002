"use client";

import { motion } from "framer-motion";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import StatsBanner from "@/components/shared/StatsBanner";
import CTASection from "@/components/shared/CTASection";
import CaseStudyCard from "@/components/shared/CaseStudyCard";
import { LucideIcon, Quote } from "lucide-react";

interface ChallengeItem {
  icon?: LucideIcon;
  title: string;
  description: string;
}

interface SolutionItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface MetricStat {
  value: string;
  label: string;
  prefix?: string;
  suffix?: string;
}

interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

interface RelatedStudy {
  sector: string;
  title: string;
  metrics: string[];
  slug: string;
}

interface CaseStudyTemplateProps {
  seo: {
    title: string;
    description: string;
    canonical: string;
  };
  heroImage: string;
  sector: string;
  sectorIcon: LucideIcon;
  title: string;
  subtitle: string;
  breadcrumbLabel: string;
  stats: MetricStat[];
  challengeIntro: string;
  challenges: ChallengeItem[];
  solutionTitle?: string;
  solutions: SolutionItem[];
  metrics: MetricStat[];
  metricsTitle?: string;
  testimonial: Testimonial;
  relatedStudies?: RelatedStudy[];
  ctaTitle: string;
  ctaDescription: string;
  ctaPrimaryLabel?: string;
}

const CaseStudyTemplate = ({
  seo,
  heroImage,
  sector,
  sectorIcon: SectorIcon,
  title,
  subtitle,
  breadcrumbLabel,
  stats,
  challengeIntro,
  challenges,
  solutionTitle = "Our Solution",
  solutions,
  metrics,
  metricsTitle = "Measurable Wins",
  testimonial,
  relatedStudies = [],
  ctaTitle,
  ctaDescription,
  ctaPrimaryLabel,
}: CaseStudyTemplateProps) => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Case Studies", href: "/case-studies" },
    { label: breadcrumbLabel },
  ];

  return (
    <>
      
      <div className="min-h-screen pt-20">
        {/* Hero with parallax image */}
        <section className="relative h-[60vh] min-h-[450px] flex items-end">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/80 to-charcoal/40" />
          <div className="container mx-auto px-6 py-12 relative z-10">
            <Breadcrumb items={breadcrumbItems} className="mb-6" />
            <div className="max-w-4xl">
              <div className="flex items-center gap-2 mb-4">
                <SectorIcon className="w-6 h-6 text-primary" />
                <span className="text-primary font-light uppercase tracking-wider text-sm">
                  {sector}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-light mb-6 underline-accent inline-block text-white">
                {title}
              </h1>
              <p className="text-xl text-gray-300 font-light leading-relaxed max-w-3xl">
                {subtitle}
              </p>
            </div>
          </div>
        </section>

        {/* Stats Banner */}
        <StatsBanner stats={stats} variant="gradient" />

        {/* The Challenge */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                  The Client Challenge
                </h2>
                <p className="text-lg text-muted-foreground font-light mb-10 leading-relaxed max-w-3xl">
                  {challengeIntro}
                </p>
              </motion.div>
              <div className="grid md:grid-cols-2 gap-6">
                {challenges.map((challenge, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-6 border border-border rounded-lg border-l-4 border-l-destructive/50 bg-card"
                  >
                    <h3 className="font-medium mb-3 flex items-center gap-2">
                      {challenge.icon ? (
                        <challenge.icon className="w-5 h-5 text-destructive flex-shrink-0" />
                      ) : (
                        <span className="text-destructive">✗</span>
                      )}
                      {challenge.title}
                    </h3>
                    <p className="text-sm text-muted-foreground font-light">
                      {challenge.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Solution - alternating image/text */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl font-light mb-12 underline-accent inline-block"
              >
                {solutionTitle}
              </motion.h2>

              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Solutions list */}
                <div className="space-y-8">
                  {solutions.map((solution, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex gap-4"
                    >
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                          <solution.icon className="w-6 h-6 text-primary" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-medium mb-2">{solution.title}</h3>
                        <p className="text-muted-foreground font-light">
                          {solution.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Image */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="hidden lg:block"
                >
                  <div className="rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src={heroImage}
                      alt={`${sector} facilities management`}
                      className="w-full h-[400px] object-cover"
                      loading="lazy"
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Metrics */}
        <section className="py-20 bg-gradient-to-br from-charcoal via-charcoal to-charcoal-light text-white">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl font-light mb-12 underline-accent inline-block text-white"
              >
                {metricsTitle}
              </motion.h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {metrics.map((metric, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center"
                  >
                    <div className="text-4xl font-light text-primary mb-2">
                      {metric.prefix}{metric.value}{metric.suffix}
                    </div>
                    <div className="text-sm text-gray-400 font-light">
                      {metric.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-primary/5">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center"
            >
              <Quote className="w-12 h-12 text-primary/30 mx-auto mb-6" />
              <p className="text-2xl md:text-3xl font-light italic text-foreground mb-8 leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div>
                <p className="font-medium text-foreground">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground font-light">
                  {testimonial.role}
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Related Case Studies */}
        {relatedStudies.length > 0 && (
          <section className="py-20 bg-charcoal">
            <div className="container mx-auto px-6">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl font-light mb-12 text-white text-center"
              >
                Related Case Studies
              </motion.h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {relatedStudies.map((study, index) => (
                  <CaseStudyCard key={index} {...study} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <CTASection
          title={ctaTitle}
          description={ctaDescription}
          primaryLabel={ctaPrimaryLabel || "Request Proposal"}
          variant="dark"
        />
      </div>
    </>
  );
};

export default CaseStudyTemplate;
