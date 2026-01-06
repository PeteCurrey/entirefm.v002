import { ReactNode } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
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
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-charcoal/95 via-charcoal/85 to-primary/20 z-10" />
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImage})` }}
          />
          
          <div className="container mx-auto px-4 relative z-20 py-32">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary/20 rounded-xl backdrop-blur-sm">
                  <HeroIcon className="w-8 h-8 text-primary" />
                </div>
                <span className="text-primary font-medium uppercase tracking-wider text-sm">Sector Expertise</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 leading-tight">
                {heroTitle}
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed mb-8 max-w-3xl">
                {heroSubtitle}
              </p>
              
              <div className="flex flex-wrap gap-4 mb-12">
                <Button size="lg" asChild className="hover-lift">
                  <Link to="/request-proposal">
                    Request Proposal
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="hover-lift bg-white/10 border-white/30 text-white hover:bg-white hover:text-charcoal">
                  <Link to="/contact">
                    <Phone className="w-5 h-5 mr-2" />
                    Contact Us
                  </Link>
                </Button>
              </div>

              {stats && stats.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="grid grid-cols-2 md:grid-cols-4 gap-6"
                >
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center md:text-left">
                      <div className="text-3xl md:text-4xl font-light text-primary mb-1">{stat.value}</div>
                      <div className="text-sm text-gray-400 font-light">{stat.label}</div>
                    </div>
                  ))}
                </motion.div>
              )}
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
              <div className="lg:col-span-2 space-y-16">
                
                {/* Sector Summary */}
                <AnimatedSection>
                  <h2 className="text-3xl font-light mb-6">
                    <span className="underline-accent">{sectorSummary.title}</span>
                  </h2>
                  <Card className="p-8 bg-card/50 backdrop-blur border-border/50">
                    {sectorSummary.paragraphs.map((paragraph, idx) => (
                      <p key={idx} className="text-muted-foreground font-light leading-relaxed mb-4 last:mb-0">
                        {paragraph}
                      </p>
                    ))}
                  </Card>
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
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Card className="p-6 bg-card/50 backdrop-blur border-border/50 hover:shadow-lg transition-all duration-300">
                          <div className="flex items-start gap-4">
                            <div className="p-2 bg-destructive/10 rounded-lg flex-shrink-0">
                              <AlertTriangle className="w-5 h-5 text-destructive" />
                            </div>
                            <div>
                              <h3 className="font-medium mb-2">{risk.title}</h3>
                              <p className="text-sm text-muted-foreground font-light leading-relaxed">
                                {risk.description}
                                {risk.link && (
                                  <>
                                    {" "}
                                    <Link to={risk.link} className="text-primary hover:underline">
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
                    <Card className="p-8 bg-card/50 backdrop-blur border-border/50">
                      <div className="grid md:grid-cols-2 gap-8">
                        {keySystems.map((system, idx) => (
                          <div key={idx}>
                            <h3 className="font-medium mb-4 text-primary">{system.category}</h3>
                            <ul className="space-y-2">
                              {system.items.map((item, itemIdx) => (
                                <li key={itemIdx} className="text-sm text-muted-foreground font-light flex items-start gap-2">
                                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </Card>
                  </AnimatedSection>
                )}

                {/* Operational Challenges */}
                {operationalChallenges && operationalChallenges.length > 0 && (
                  <AnimatedSection delay={0.3}>
                    <h2 className="text-3xl font-light mb-6">
                      <span className="underline-accent">Operational Challenges</span>
                    </h2>
                    <Card className="p-8 bg-card/50 backdrop-blur border-border/50">
                      <div className="space-y-6">
                        {operationalChallenges.map((challenge, idx) => (
                          <div key={idx}>
                            <h3 className="font-medium mb-2">{challenge.title}</h3>
                            <p className="text-sm text-muted-foreground font-light leading-relaxed">
                              {challenge.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </Card>
                  </AnimatedSection>
                )}

                {/* Custom Sections */}
                {customSections}

                {/* Why EntireFM */}
                <AnimatedSection delay={0.4}>
                  <h2 className="text-3xl font-light mb-6">
                    <span className="underline-accent">Why EntireFM</span>
                  </h2>
                  <Card className="p-8 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
                    <ul className="space-y-3">
                      {whyEntireFM.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-muted-foreground font-light">
                          <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </AnimatedSection>

                {/* Case Studies */}
                {caseStudies && caseStudies.length > 0 && (
                  <AnimatedSection delay={0.5}>
                    <h2 className="text-3xl font-light mb-6">
                      <span className="underline-accent">Related Case Studies</span>
                    </h2>
                    <div className="grid md:grid-cols-2 gap-4">
                      {caseStudies.map((study, idx) => (
                        <Card key={idx} className="p-6 bg-card/50 backdrop-blur hover:shadow-lg transition-all duration-300 hover-lift">
                          <h3 className="font-medium mb-3">
                            <Link to={study.link} className="hover:text-primary transition-colors">
                              {study.title}
                            </Link>
                          </h3>
                          <p className="text-sm text-muted-foreground font-light leading-relaxed mb-4">
                            {study.description}
                          </p>
                          <Link to={study.link} className="text-sm text-primary hover:underline inline-flex items-center gap-1">
                            {study.linkText}
                            <ArrowRight className="w-4 h-4" />
                          </Link>
                        </Card>
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
                        <Link key={idx} to={service.href}>
                          <Card className="p-6 h-full hover-lift cursor-pointer bg-card/50 backdrop-blur hover:border-primary/50 transition-all duration-300">
                            <h3 className="font-medium mb-2">{service.title}</h3>
                            <p className="text-sm text-muted-foreground font-light">{service.description}</p>
                          </Card>
                        </Link>
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
        </section>
      </div>
    </>
  );
};

export default SectorPageTemplate;
