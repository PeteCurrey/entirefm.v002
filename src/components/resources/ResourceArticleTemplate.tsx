import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, AlertTriangle, CheckCircle2, FileText, Clock, Calendar } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Breadcrumb } from '@/components/shared/Breadcrumb';
import { FAQSection } from '@/components/shared/FAQSection';
import { SchemaMarkup } from '@/components/shared/SchemaMarkup';
import AnimatedSection from '@/components/shared/AnimatedSection';

interface Section {
  title: string;
  content: string | string[];
}

interface RelatedLink {
  title: string;
  url: string;
  type: 'service' | 'sector' | 'operation' | 'case-study';
}

interface ResourceArticleProps {
  // SEO & Meta
  title: string;
  metaDescription: string;
  keywords: string[];
  
  // Hero Section
  category: string;
  heroTitle: string;
  heroDescription: string;
  publishDate?: string;
  readTime?: string;
  
  // Content Sections
  introduction: string | string[];
  keyDefinition?: {
    term: string;
    definition: string;
  };
  sections: Section[];
  
  // Compliance Framework
  complianceFramework?: {
    laws: string[];
    standards: string[];
    responsiblePerson: string;
    frequency: string;
  };
  
  // Risk & Impact
  operationalImpact?: string[];
  risksIfIgnored?: string[];
  
  // Solution
  howEntireFMHelps?: {
    title: string;
    points: string[];
  };
  
  // Internal Links
  relatedLinks: RelatedLink[];
  
  // FAQs
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}

export const ResourceArticleTemplate = ({
  title,
  metaDescription,
  keywords,
  category,
  heroTitle,
  heroDescription,
  publishDate,
  readTime,
  introduction,
  keyDefinition,
  sections,
  complianceFramework,
  operationalImpact,
  risksIfIgnored,
  howEntireFMHelps,
  relatedLinks,
  faqs,
}: ResourceArticleProps) => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Resources", href: "/resources" },
    { label: title },
  ];

  const renderContent = (content: string | string[]) => {
    if (Array.isArray(content)) {
      return content.map((paragraph, idx) => (
        <p key={idx} className="text-muted-foreground font-light leading-relaxed mb-4">
          {paragraph}
        </p>
      ));
    }
    return <p className="text-muted-foreground font-light leading-relaxed mb-4">{content}</p>;
  };

  const groupedLinks = {
    service: relatedLinks.filter(l => l.type === 'service'),
    sector: relatedLinks.filter(l => l.type === 'sector'),
    operation: relatedLinks.filter(l => l.type === 'operation'),
    'case-study': relatedLinks.filter(l => l.type === 'case-study'),
  };

  return (
    <>
      <Helmet>
        <title>{title} | EntireFM Resources</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={keywords.join(', ')} />
        <link rel="canonical" href={`https://entirefm.com${window.location.pathname}`} />
      </Helmet>

      <SchemaMarkup
        schema={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: heroTitle,
          description: metaDescription,
          author: { "@type": "Organization", name: "EntireFM" },
          publisher: {
            "@type": "Organization",
            name: "EntireFM",
            logo: { "@type": "ImageObject", url: "https://entirefm.com/logo.png" }
          },
          datePublished: publishDate || new Date().toISOString(),
        }}
      />

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-charcoal/95 via-charcoal/85 to-primary/20 z-10" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-30" />
          
          <div className="container mx-auto px-4 relative z-20 py-24">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center"
            >
              <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">{category}</Badge>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 leading-tight">
                {heroTitle}
              </h1>
              <p className="text-xl text-gray-300 font-light leading-relaxed mb-8 max-w-3xl mx-auto">
                {heroDescription}
              </p>
              
              {(publishDate || readTime) && (
                <div className="flex items-center justify-center gap-6 text-sm text-gray-400">
                  {publishDate && (
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>Updated: {publishDate}</span>
                    </div>
                  )}
                  {readTime && (
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{readTime} read</span>
                    </div>
                  )}
                </div>
              )}
            </motion.div>
          </div>
        </section>

        {/* Breadcrumb */}
        <div className="container mx-auto px-4 py-4 border-b border-border/50">
          <Breadcrumb items={breadcrumbItems} />
        </div>

        {/* Main Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Introduction */}
              <AnimatedSection className="mb-12">
                {renderContent(introduction)}
              </AnimatedSection>

              {/* Key Definition */}
              {keyDefinition && (
                <AnimatedSection delay={0.1} className="mb-12">
                  <Card className="p-8 bg-gradient-to-br from-primary/5 to-background border-l-4 border-l-primary">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                        <BookOpen className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-medium mb-3 text-primary">{keyDefinition.term}</h3>
                        <p className="text-muted-foreground font-light leading-relaxed">
                          {keyDefinition.definition}
                        </p>
                      </div>
                    </div>
                  </Card>
                </AnimatedSection>
              )}

              {/* Main Sections */}
              {sections.map((section, idx) => (
                <AnimatedSection key={idx} delay={0.1 * (idx + 1)} className="mb-12">
                  <h2 className="text-3xl font-light mb-6">
                    <span className="underline-accent">{section.title}</span>
                  </h2>
                  <div className="prose prose-lg max-w-none">
                    {renderContent(section.content)}
                  </div>
                </AnimatedSection>
              ))}

              {/* Compliance Framework */}
              {complianceFramework && (
                <AnimatedSection delay={0.3} className="mb-12">
                  <Card className="p-8 bg-card/50 backdrop-blur border-2 border-border/50">
                    <h2 className="text-2xl font-light mb-6">
                      <span className="underline-accent">Compliance Framework</span>
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="font-medium mb-4 text-primary flex items-center gap-2">
                          <FileText className="w-5 h-5" />
                          Legislation & Standards
                        </h3>
                        <ul className="space-y-2">
                          {[...complianceFramework.laws, ...complianceFramework.standards].map((item, idx) => (
                            <li key={idx} className="text-sm text-muted-foreground font-light flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="space-y-6">
                        <div>
                          <h3 className="font-medium mb-3 text-primary">Responsible Person</h3>
                          <p className="text-sm text-muted-foreground font-light">
                            {complianceFramework.responsiblePerson}
                          </p>
                        </div>
                        <div>
                          <h3 className="font-medium mb-3 text-primary">Testing Frequency</h3>
                          <p className="text-sm text-muted-foreground font-light">
                            {complianceFramework.frequency}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </AnimatedSection>
              )}

              {/* Operational Impact & Risks */}
              {(operationalImpact || risksIfIgnored) && (
                <AnimatedSection delay={0.4} className="mb-12">
                  <div className="grid md:grid-cols-2 gap-6">
                    {operationalImpact && (
                      <Card className="p-6 bg-gradient-to-br from-primary/5 to-background">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="p-2 bg-primary/10 rounded-lg">
                            <CheckCircle2 className="w-6 h-6 text-primary" />
                          </div>
                          <h3 className="text-lg font-medium">Operational Impact</h3>
                        </div>
                        <ul className="space-y-3">
                          {operationalImpact.map((item, idx) => (
                            <li key={idx} className="text-sm text-muted-foreground font-light flex items-start gap-2">
                              <span className="text-primary mt-1">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </Card>
                    )}
                    {risksIfIgnored && (
                      <Card className="p-6 bg-destructive/5 border-destructive/20">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="p-2 bg-destructive/10 rounded-lg">
                            <AlertTriangle className="w-6 h-6 text-destructive" />
                          </div>
                          <h3 className="text-lg font-medium">Risks If Ignored</h3>
                        </div>
                        <ul className="space-y-3">
                          {risksIfIgnored.map((item, idx) => (
                            <li key={idx} className="text-sm text-muted-foreground font-light flex items-start gap-2">
                              <span className="text-destructive mt-1">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </Card>
                    )}
                  </div>
                </AnimatedSection>
              )}

              {/* How EntireFM Helps */}
              {howEntireFMHelps && (
                <AnimatedSection delay={0.5} className="mb-12">
                  <Card className="p-8 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
                    <h2 className="text-2xl font-light mb-6">
                      <span className="underline-accent">{howEntireFMHelps.title}</span>
                    </h2>
                    <ul className="space-y-3 mb-8">
                      {howEntireFMHelps.points.map((point, idx) => (
                        <li key={idx} className="text-muted-foreground font-light flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                    <Button size="lg" asChild className="hover-lift">
                      <Link to="/request-proposal">
                        Request a Proposal
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </Link>
                    </Button>
                  </Card>
                </AnimatedSection>
              )}

              {/* Related Services & Pages */}
              <AnimatedSection delay={0.6} className="mb-12">
                <h2 className="text-3xl font-light mb-6">
                  <span className="underline-accent">Related Services & Resources</span>
                </h2>
                
                {groupedLinks.service.length > 0 && (
                  <div className="mb-6">
                    <h3 className="text-lg font-medium mb-4 text-muted-foreground">Relevant Services</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {groupedLinks.service.map((link, idx) => (
                        <Link
                          key={idx}
                          to={link.url}
                          className="group p-4 bg-card/50 backdrop-blur rounded-lg border border-border/50 hover:border-primary/50 hover:bg-muted/50 transition-all duration-300 hover-lift"
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-light group-hover:text-primary transition-colors">
                              {link.title}
                            </span>
                            <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {(groupedLinks.sector.length > 0 || groupedLinks.operation.length > 0 || groupedLinks['case-study'].length > 0) && (
                  <div className="grid md:grid-cols-3 gap-4">
                    {groupedLinks.sector.map((link, idx) => (
                      <Link
                        key={idx}
                        to={link.url}
                        className="text-sm text-primary hover:underline font-light flex items-center gap-1"
                      >
                        {link.title}
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    ))}
                    {groupedLinks.operation.map((link, idx) => (
                      <Link
                        key={idx}
                        to={link.url}
                        className="text-sm text-primary hover:underline font-light flex items-center gap-1"
                      >
                        {link.title}
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    ))}
                    {groupedLinks['case-study'].map((link, idx) => (
                      <Link
                        key={idx}
                        to={link.url}
                        className="text-sm text-primary hover:underline font-light flex items-center gap-1"
                      >
                        {link.title}
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    ))}
                  </div>
                )}
              </AnimatedSection>

              {/* FAQs */}
              <AnimatedSection delay={0.7} className="mb-12">
                <FAQSection faqs={faqs} />
              </AnimatedSection>

              {/* Final CTA */}
              <AnimatedSection delay={0.8}>
                <Card className="p-8 text-center bg-gradient-to-br from-charcoal to-charcoal/90 border-charcoal/50">
                  <h3 className="text-2xl font-light mb-4 text-white">Need Expert Guidance?</h3>
                  <p className="text-gray-300 font-light mb-6 max-w-2xl mx-auto">
                    Our technical team can provide tailored advice on your specific facilities management requirements.
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center">
                    <Button size="lg" asChild className="hover-lift">
                      <Link to="/request-proposal">
                        Request a Proposal
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </Link>
                    </Button>
                    <Button size="lg" variant="outline" asChild className="hover-lift bg-white/10 border-white/30 text-white hover:bg-white hover:text-charcoal">
                      <Link to="/contact">Contact Us</Link>
                    </Button>
                  </div>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
