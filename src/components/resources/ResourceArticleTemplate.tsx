import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, AlertTriangle, CheckCircle2, FileText } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Breadcrumb } from '@/components/shared/Breadcrumb';
import { FAQSection } from '@/components/shared/FAQSection';
import { SchemaMarkup } from '@/components/shared/SchemaMarkup';

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

      <Breadcrumb items={breadcrumbItems} />

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative py-16 overflow-hidden border-b border-border">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
              <Badge className="mb-4">{category}</Badge>
              <h1 className="text-4xl md:text-5xl font-light mb-6">
                {heroTitle}
              </h1>
              <p className="text-xl text-muted-foreground font-light leading-relaxed mb-6">
                {heroDescription}
              </p>
              {(publishDate || readTime) && (
                <div className="flex items-center gap-6 text-sm text-muted-foreground">
                  {publishDate && (
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4" />
                      <span>Updated: {publishDate}</span>
                    </div>
                  )}
                  {readTime && (
                    <div className="flex items-center gap-2">
                      <BookOpen className="w-4 h-4" />
                      <span>{readTime} read</span>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Introduction */}
              <div className="mb-12">
                {renderContent(introduction)}
              </div>

              {/* Key Definition */}
              {keyDefinition && (
                <Card className="p-8 mb-12 bg-muted/30 border-l-4 border-l-primary">
                  <div className="flex items-start gap-4">
                    <BookOpen className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-light mb-3 text-primary">{keyDefinition.term}</h3>
                      <p className="text-muted-foreground font-light leading-relaxed">
                        {keyDefinition.definition}
                      </p>
                    </div>
                  </div>
                </Card>
              )}

              {/* Main Sections */}
              {sections.map((section, idx) => (
                <div key={idx} className="mb-12">
                  <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                    {section.title}
                  </h2>
                  {renderContent(section.content)}
                </div>
              ))}

              {/* Compliance Framework */}
              {complianceFramework && (
                <Card className="p-8 mb-12 bg-background border-2">
                  <h2 className="text-2xl font-light mb-6 underline-accent inline-block">
                    Compliance Framework
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-medium mb-3 text-primary">Legislation & Standards</h3>
                      <ul className="space-y-2">
                        {[...complianceFramework.laws, ...complianceFramework.standards].map((item, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground font-light flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-medium mb-3 text-primary">Responsible Person</h3>
                      <p className="text-sm text-muted-foreground font-light mb-4">
                        {complianceFramework.responsiblePerson}
                      </p>
                      <h3 className="font-medium mb-3 text-primary">Testing Frequency</h3>
                      <p className="text-sm text-muted-foreground font-light">
                        {complianceFramework.frequency}
                      </p>
                    </div>
                  </div>
                </Card>
              )}

              {/* Operational Impact & Risks */}
              {(operationalImpact || risksIfIgnored) && (
                <div className="grid md:grid-cols-2 gap-6 mb-12">
                  {operationalImpact && (
                    <Card className="p-6 bg-muted/30">
                      <div className="flex items-center gap-3 mb-4">
                        <CheckCircle2 className="w-6 h-6 text-primary" />
                        <h3 className="text-lg font-medium">Operational Impact</h3>
                      </div>
                      <ul className="space-y-2">
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
                        <AlertTriangle className="w-6 h-6 text-destructive" />
                        <h3 className="text-lg font-medium">Risks If Ignored</h3>
                      </div>
                      <ul className="space-y-2">
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
              )}

              {/* How EntireFM Helps */}
              {howEntireFMHelps && (
                <Card className="p-8 mb-12 bg-gradient-to-br from-primary/5 to-background">
                  <h2 className="text-2xl font-light mb-6 underline-accent inline-block">
                    {howEntireFMHelps.title}
                  </h2>
                  <ul className="space-y-3 mb-6">
                    {howEntireFMHelps.points.map((point, idx) => (
                      <li key={idx} className="text-muted-foreground font-light flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/request-proposal">
                    <Button size="lg">
                      Request a Proposal
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                </Card>
              )}

              {/* Related Services & Pages */}
              <div className="mb-12">
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Related Services & Resources
                </h2>
                
                {groupedLinks.service.length > 0 && (
                  <div className="mb-6">
                    <h3 className="text-lg font-medium mb-4 text-muted-foreground">Relevant Services</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {groupedLinks.service.map((link, idx) => (
                        <Link
                          key={idx}
                          to={link.url}
                          className="group p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-all duration-300 hover-lift"
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
                        className="text-sm text-primary hover:underline font-light"
                      >
                        {link.title} →
                      </Link>
                    ))}
                    {groupedLinks.operation.map((link, idx) => (
                      <Link
                        key={idx}
                        to={link.url}
                        className="text-sm text-primary hover:underline font-light"
                      >
                        {link.title} →
                      </Link>
                    ))}
                    {groupedLinks['case-study'].map((link, idx) => (
                      <Link
                        key={idx}
                        to={link.url}
                        className="text-sm text-primary hover:underline font-light"
                      >
                        {link.title} →
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* FAQs */}
              <FAQSection faqs={faqs} />

              {/* Final CTA */}
              <Card className="p-8 text-center bg-gradient-to-br from-primary/5 to-background mt-12">
                <h3 className="text-2xl font-light mb-4">Need Expert Guidance?</h3>
                <p className="text-muted-foreground font-light mb-6 max-w-2xl mx-auto">
                  Our technical team can provide tailored advice on your specific facilities management requirements.
                </p>
                <Link to="/request-proposal">
                  <Button size="lg">
                    Request a Proposal
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
