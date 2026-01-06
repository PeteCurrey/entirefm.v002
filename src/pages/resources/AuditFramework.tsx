import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { Download, ClipboardCheck, CheckCircle2, ArrowRight, Target, TrendingUp, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const AuditFramework = () => {
  const coverageAreas = [
    { icon: Target, text: "SLA vs. actual vs. perceived performance" },
    { icon: CheckCircle2, text: "Compliance evidence visibility" },
    { icon: TrendingUp, text: "Financial transparency" },
    { icon: ClipboardCheck, text: "Response + first-time fix rates" },
    { icon: Users, text: "Culture & communication scorecard" },
    { icon: TrendingUp, text: "Asset lifecycle strategy" },
    { icon: Target, text: "Environmental & energy performance" },
    { icon: CheckCircle2, text: "Risk management & governance maturity" }
  ];

  const stats = [
    { value: "8", label: "Key audit areas" },
    { value: "40+", label: "Performance criteria" },
    { value: "100%", label: "Evidence-based" }
  ];

  return (
    <>
      <Helmet>
        <title>FM Audit Framework | Evaluate Your Provider | EntireFM</title>
        <meta 
          name="description" 
          content="Evaluate your FM provider like a pro. Structured audit checklist exposing weak delivery and highlighting operational excellence."
        />
        <link rel="canonical" href="https://entirefm.com/resources/audit-framework" />
      </Helmet>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative pt-24 pb-20 bg-gradient-to-br from-primary/5 via-background to-muted/30 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />
          <div className="container mx-auto px-6 relative">
            <Breadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "Resources", href: "/resources" },
                { label: "FM Audit Framework" }
              ]}
            />
            
            <AnimatedSection animation="fade-up" className="max-w-4xl mt-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-primary/10 rounded-2xl">
                  <ClipboardCheck className="w-10 h-10 text-primary" />
                </div>
                <span className="text-sm font-medium text-primary bg-primary/10 px-4 py-2 rounded-full">
                  Free Resource
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 leading-tight">
                What Good Looks Like:
                <span className="block text-primary">FM Audit Framework</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed mb-4">
                Evaluate Your FM Provider Like a Pro.
              </p>
              <p className="text-lg text-muted-foreground font-light leading-relaxed mb-8 max-w-2xl">
                A structured audit checklist that exposes weak delivery — and shines a spotlight on operational excellence.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="gap-2 shadow-lg hover:shadow-xl transition-shadow">
                  <Download className="w-5 h-5" />
                  Download Audit Framework
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/contact">Book a Free Site Inspection</Link>
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
                <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
                  <div className="text-3xl md:text-4xl font-light text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-300 font-light">{stat.label}</div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* What The Audit Framework Covers */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <AnimatedSection animation="fade-up" className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-light mb-4 text-center">
                What The Audit Framework Covers
              </h2>
              <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                Comprehensive evaluation across eight critical performance areas
              </p>
            </AnimatedSection>
            
            <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {coverageAreas.map((item, index) => (
                <AnimatedSection key={index} animation="fade-up" delay={index * 50}>
                  <Card className="p-5 hover:shadow-lg hover:border-primary/30 transition-all duration-300 group">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <p className="font-light text-foreground">{item.text}</p>
                    </div>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Why It Converts */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-6">
            <AnimatedSection animation="fade-up" className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-light mb-6">
                Why It Converts
              </h2>
              <p className="text-2xl text-muted-foreground font-light leading-relaxed mb-8">
                Directors quickly realise how much they're missing with other providers.
              </p>
              <Card className="p-8 bg-background border-primary/20">
                <blockquote className="text-lg italic text-muted-foreground font-light">
                  "This guide highlights exactly where FM value is won or lost."
                </blockquote>
              </Card>
            </AnimatedSection>
          </div>
        </section>

        {/* Related Resources */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-6">
            <AnimatedSection animation="fade-up" className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-light mb-8 text-center">Related Resources</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <Link to="/resources/switch-playbook" className="group">
                  <Card className="p-6 h-full hover:border-primary/30 transition-all">
                    <h3 className="font-medium mb-2 group-hover:text-primary transition-colors">Switching Provider Playbook</h3>
                    <p className="text-sm text-muted-foreground mb-4">Friction-free FM transition guide</p>
                    <span className="text-sm text-primary flex items-center gap-2">
                      Download <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Card>
                </Link>
                <Link to="/compliance-diagnostic" className="group">
                  <Card className="p-6 h-full hover:border-primary/30 transition-all">
                    <h3 className="font-medium mb-2 group-hover:text-primary transition-colors">Compliance Diagnostic</h3>
                    <p className="text-sm text-muted-foreground mb-4">Score your current provider</p>
                    <span className="text-sm text-primary flex items-center gap-2">
                      Take Assessment <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Card>
                </Link>
                <Link to="/resources/tender-support" className="group">
                  <Card className="p-6 h-full hover:border-primary/30 transition-all">
                    <h3 className="font-medium mb-2 group-hover:text-primary transition-colors">Tender Support Pack</h3>
                    <p className="text-sm text-muted-foreground mb-4">Win your next FM contract</p>
                    <span className="text-sm text-primary flex items-center gap-2">
                      Download <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Card>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-br from-charcoal via-charcoal to-charcoal/95 text-white">
          <div className="container mx-auto px-6">
            <AnimatedSection animation="fade-up" className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-light mb-6">
                Download the FM Audit Framework
              </h2>
              <p className="text-lg text-gray-300 font-light mb-8">
                Evaluate your FM provider with professional standards
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" variant="secondary" className="bg-white text-charcoal hover:bg-gray-100 gap-2 shadow-lg">
                  <Download className="w-5 h-5" />
                  Download Framework
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                  <Link to="/contact">Request Site Inspection</Link>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </div>
    </>
  );
};

export default AuditFramework;
