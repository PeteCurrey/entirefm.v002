import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { CheckCircle2, Shield, Award, FileCheck, Camera, UserCheck, ArrowRight } from "lucide-react";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { SchemaMarkup } from "@/components/shared/SchemaMarkup";
import AnimatedSection from "@/components/shared/AnimatedSection";

const EngineerStandards = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Resources", href: "/resources" },
    { label: "Engineer Standards" }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "FM Engineers Professional Standards | EntireFM Workforce Quality",
    "description": "Professional engineers deliver professional outcomes. EntireFM's rigorous standards ensure quality, competence, and professionalism on every site visit.",
    "author": {
      "@type": "Organization",
      "name": "EntireFM"
    }
  };

  const whatClientsSee = [
    "Clean uniforms + branded PPE",
    "Respect for public-facing environments",
    "Clear communication on arrival",
    "Zero mess left behind"
  ];

  const whatClientsFeel = [
    "Work done right first time",
    "Fast root-cause diagnosis",
    "Accountability to close the loop",
    "Pride in every detail"
  ];

  const standards = [
    {
      icon: FileCheck,
      title: "Full RAMS Briefing",
      description: "Risk assessment before every site entry"
    },
    {
      icon: Award,
      title: "Verified Competency",
      description: "CSCS / competency cards checked and current"
    },
    {
      icon: Camera,
      title: "Photo Documentation",
      description: "Mandatory updates for every task completed"
    },
    {
      icon: UserCheck,
      title: "Site Courtesy Reporting",
      description: "Professional communication with site staff"
    },
    {
      icon: CheckCircle2,
      title: "Quality Sign-Off",
      description: "Work approved before task closure"
    },
    {
      icon: Shield,
      title: "Brand Protection",
      description: "Your site reflects your brand—our engineers reflect ours"
    }
  ];

  const stats = [
    { value: "100%", label: "Competency Verified" },
    { value: "95%", label: "First-Time Fix Rate" },
    { value: "4.9/5", label: "Client Satisfaction" }
  ];

  return (
    <>
      <Helmet>
        <title>FM Engineers Professional Standards | EntireFM Workforce Quality</title>
        <meta name="description" content="Professional engineers deliver professional outcomes. EntireFM's rigorous standards ensure quality, competence, and professionalism on every site visit." />
        <link rel="canonical" href="https://entirefm.com/resources/engineer-standards" />
      </Helmet>
      <BreadcrumbSchema items={breadcrumbItems} />
      <SchemaMarkup schema={schema} />

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative pt-24 pb-20 bg-gradient-to-br from-primary/5 via-background to-muted/30 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />
          <div className="container mx-auto px-6 relative">
            <Breadcrumb items={breadcrumbItems} />
            
            <AnimatedSection direction="up" className="max-w-4xl mx-auto text-center mt-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 leading-tight">
                Professional engineers.
                <span className="block text-primary">Professional outcomes.</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-light mb-8">
                Every visit. Every site. Every time.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="shadow-lg">
                  <Link to="/contact">Book a Quality Assessment Visit</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/contact">Request Workforce Vetting Details</Link>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Stats Banner */}
        <section className="py-12 bg-charcoal text-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto text-center">
              {stats.map((stat, index) => (
                <AnimatedSection key={index} direction="up" delay={index * 0.1}>
                  <div className="text-3xl md:text-4xl font-light text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-300 font-light">{stat.label}</div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* What Clients See */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <AnimatedSection direction="up" className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-light mb-4 text-center">What Clients See</h2>
              <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                Professional behaviour is a performance standard.
              </p>
              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {whatClientsSee.map((item, index) => (
                  <AnimatedSection key={index} direction="up" delay={index * 0.075}>
                    <Card className="flex items-start gap-4 p-6 hover:shadow-lg hover:border-primary/30 transition-all">
                      <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <p className="text-lg font-light">{item}</p>
                    </Card>
                  </AnimatedSection>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* What Clients Don't See — But Feel */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-6">
            <AnimatedSection direction="up" className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-light mb-4 text-center">
                What Clients Don't See — But Feel
              </h2>
              <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                The invisible quality that makes all the difference.
              </p>
              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
                {whatClientsFeel.map((item, index) => (
                  <AnimatedSection key={index} direction="up" delay={index * 0.075}>
                    <Card className="flex items-start gap-4 p-6 bg-background hover:shadow-lg hover:border-primary/30 transition-all">
                      <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <p className="text-lg font-light">{item}</p>
                    </Card>
                  </AnimatedSection>
                ))}
              </div>
              <AnimatedSection direction="up" delay={0.3}>
                <Card className="p-8 bg-background border-primary/20 max-w-2xl mx-auto text-center">
                  <p className="text-xl font-light text-foreground">
                    Poor presentation = poor workmanship more often than not.
                    <span className="block text-primary mt-2 font-medium">We refuse both.</span>
                  </p>
                </Card>
              </AnimatedSection>
            </AnimatedSection>
          </div>
        </section>

        {/* Standards We Enforce */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <AnimatedSection direction="up" className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-light mb-4 text-center">
                Standards We Enforce
              </h2>
              <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                Non-negotiable requirements for every engineer, every visit.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {standards.map((standard, index) => (
                  <AnimatedSection key={index} direction="up" delay={index * 0.075}>
                    <Card className="p-6 hover:shadow-lg hover:border-primary/30 transition-all h-full">
                      <div className="p-3 bg-primary/10 rounded-xl w-fit mb-4">
                        <standard.icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-medium mb-2">{standard.title}</h3>
                      <p className="text-muted-foreground font-light">{standard.description}</p>
                    </Card>
                  </AnimatedSection>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Brand Protection Statement */}
        <section className="py-20 bg-gradient-to-br from-charcoal via-charcoal to-charcoal/95 text-white">
          <div className="container mx-auto px-6">
            <AnimatedSection direction="up" className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-light mb-6">
                Your site reflects your brand.
                <span className="block text-primary">Our engineers reflect ours.</span>
              </h2>
              <Button asChild size="lg" variant="secondary" className="bg-white text-charcoal hover:bg-gray-100 shadow-lg">
                <Link to="/contact">See Our Workforce Competence Pack</Link>
              </Button>
            </AnimatedSection>
          </div>
        </section>

        {/* Internal Links Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-6">
            <AnimatedSection direction="up" className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl font-light mb-8">Explore More</h2>
              <div className="grid sm:grid-cols-3 gap-4">
                <Link to="/about" className="group">
                  <Card className="p-6 h-full hover:border-primary/30 transition-all">
                    <h3 className="font-medium mb-2 group-hover:text-primary transition-colors">Trust & Accreditations</h3>
                    <span className="text-sm text-primary flex items-center justify-center gap-2">
                      Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Card>
                </Link>
                <Link to="/services" className="group">
                  <Card className="p-6 h-full hover:border-primary/30 transition-all">
                    <h3 className="font-medium mb-2 group-hover:text-primary transition-colors">Our Services</h3>
                    <span className="text-sm text-primary flex items-center justify-center gap-2">
                      View All <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Card>
                </Link>
                <Link to="/contact" className="group">
                  <Card className="p-6 h-full hover:border-primary/30 transition-all">
                    <h3 className="font-medium mb-2 group-hover:text-primary transition-colors">Request a Proposal</h3>
                    <span className="text-sm text-primary flex items-center justify-center gap-2">
                      Contact Us <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Card>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </div>
    </>
  );
};

export default EngineerStandards;