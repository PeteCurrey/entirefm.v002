import { ReactNode } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
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
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-charcoal/90 via-charcoal/80 to-primary/30 z-10" />
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImage})` }}
          />
          
          <div className="container mx-auto px-4 relative z-20 py-24">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/20 rounded-lg backdrop-blur-sm">
                  <HeroIcon className="w-6 h-6 text-primary" />
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 leading-tight">
                {heroTitle}
              </h1>
              <p className="text-xl text-gray-300 font-light leading-relaxed mb-8 max-w-3xl">
                {heroSubtitle}
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
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
                      <div className="text-3xl font-light text-primary mb-1">{stat.value}</div>
                      <div className="text-sm text-gray-400 font-light">{stat.label}</div>
                    </div>
                  ))}
                </motion.div>
              )}
            </motion.div>
          </div>
        </section>

        {/* Breadcrumb */}
        <div className="container mx-auto px-4 py-4">
          <Breadcrumb items={breadcrumbItems} />
        </div>

        {/* Main Content */}
        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
              <div className="lg:col-span-2 space-y-12">
                
                {/* Overview */}
                <AnimatedSection>
                  <h2 className="text-3xl font-light mb-6">
                    <span className="underline-accent">{overview.title}</span>
                  </h2>
                  <Card className="p-8 bg-card/50 backdrop-blur border-border/50">
                    {overview.paragraphs.map((paragraph, idx) => (
                      <p key={idx} className="text-muted-foreground font-light leading-relaxed mb-4 last:mb-0">
                        {paragraph}
                      </p>
                    ))}
                  </Card>
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
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <Card className="p-6 h-full bg-card/50 backdrop-blur border-border/50 hover:shadow-lg transition-all duration-300">
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
                    <Card className="p-8 bg-card/50 backdrop-blur border-border/50">
                      {compliance.intro && (
                        <p className="text-muted-foreground font-light leading-relaxed mb-6">
                          {compliance.intro}
                        </p>
                      )}
                      <div className="space-y-4">
                        {compliance.items.map((item, idx) => (
                          <div key={idx}>
                            <h3 className="font-medium mb-2">{item.title}</h3>
                            <p className="text-sm text-muted-foreground font-light leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </Card>
                  </AnimatedSection>
                )}

                {/* Maintenance */}
                {maintenance && maintenance.length > 0 && (
                  <AnimatedSection delay={0.3}>
                    <h2 className="text-3xl font-light mb-6">
                      <span className="underline-accent">Maintenance Requirements</span>
                    </h2>
                    <Card className="p-8 bg-card/50 backdrop-blur border-border/50">
                      <ul className="space-y-3">
                        {maintenance.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-muted-foreground font-light">
                            <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </Card>
                  </AnimatedSection>
                )}

                {/* Risks */}
                {risks && risks.length > 0 && (
                  <AnimatedSection delay={0.4}>
                    <h2 className="text-3xl font-light mb-6">
                      <span className="underline-accent">Risks of Non-Compliance</span>
                    </h2>
                    <Card className="p-8 bg-destructive/5 border-destructive/20">
                      <div className="flex items-center gap-3 mb-6">
                        <AlertTriangle className="w-6 h-6 text-destructive" />
                        <span className="font-medium">Key Risks</span>
                      </div>
                      <div className="space-y-4">
                        {risks.map((risk, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <span className="text-destructive mt-1">→</span>
                            <div>
                              <span className="font-medium">{risk.title}:</span>{" "}
                              <span className="text-muted-foreground font-light">{risk.description}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </Card>
                  </AnimatedSection>
                )}

                {/* Benefits */}
                {benefits && benefits.length > 0 && (
                  <AnimatedSection delay={0.5}>
                    <h2 className="text-3xl font-light mb-6">
                      <span className="underline-accent">How EntireFM Delivers</span>
                    </h2>
                    <Card className="p-8 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
                      <ul className="space-y-3">
                        {benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-muted-foreground font-light">
                            <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </Card>
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
                    <h2 className="text-2xl font-light mb-4">{ctaTitle}</h2>
                    <p className="text-muted-foreground font-light leading-relaxed mb-6">
                      {ctaDescription}
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <Button size="lg" asChild>
                        <Link to="/request-proposal">
                          Request Proposal
                          <ArrowRight className="w-5 h-5 ml-2" />
                        </Link>
                      </Button>
                      <Button size="lg" variant="outline" asChild>
                        <Link to="/contact">Contact Support</Link>
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

export default ServicePageTemplate;
