import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { Download, RefreshCw, CheckCircle2, ArrowRight, Users, Clock, Shield, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const SwitchingProvider = () => {
  const playbookCovers = [
    { icon: Clock, text: "How to avoid operational downtime" },
    { icon: FileText, text: "Data to extract from your incumbent" },
    { icon: Users, text: "Stakeholder comms plan" },
    { icon: Shield, text: "Vendor accountability structure" },
    { icon: Clock, text: "Mobilisation timeline template" },
    { icon: CheckCircle2, text: "Risk watchlist + mitigations" }
  ];

  const perfectFor = [
    { title: "Procurement leads", description: "Managing FM tender transitions" },
    { title: "FM directors", description: "Overseeing provider changes" },
    { title: "Managing agents", description: "Coordinating multi-site switches" },
    { title: "Anyone tired of being let down", description: "Ready for a better FM experience" }
  ];

  const stats = [
    { value: "6", label: "Critical Phases" },
    { value: "20+", label: "Checklist Items" },
    { value: "Zero", label: "Downtime Target" }
  ];

  return (
    <>
      <Helmet>
        <title>Switch FM Provider Pain-Free | Playbook Download | EntireFM</title>
        <meta 
          name="description" 
          content="Frictionless mobilisation guidance & templates. Step-by-step playbook for friction-free FM provider transition."
        />
        <link rel="canonical" href="https://entirefm.com/resources/switch-playbook" />
      </Helmet>

      <div className="min-h-screen">
        {/* Hero */}
        <section className="relative pt-24 pb-20 bg-gradient-to-br from-primary/5 via-background to-muted/30 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />
          <div className="container mx-auto px-6 relative">
            <Breadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "Resources", href: "/resources" },
                { label: "Switching FM Provider" }
              ]}
            />
            
            <AnimatedSection direction="up" className="max-w-4xl mt-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-primary/10 rounded-2xl">
                  <RefreshCw className="w-10 h-10 text-primary" />
                </div>
                <span className="text-sm font-medium text-primary bg-primary/10 px-4 py-2 rounded-full">
                  Free Playbook
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 leading-tight">
                Switching FM Provider —
                <span className="block text-primary">Pain-Free Playbook</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-light mb-4">
                Changing FM Provider Doesn't Need to Be Chaos.
              </p>
              <p className="text-lg text-muted-foreground font-light leading-relaxed mb-8 max-w-2xl">
                A step-by-step playbook for friction-free transition — without letting compliance slide.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="gap-2 shadow-lg hover:shadow-xl transition-shadow">
                  <Download className="w-5 h-5" />
                  Download the Playbook
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/contact">Get a Mobilisation Proposal</Link>
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

        {/* What the Playbook Covers */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <AnimatedSection direction="up" className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-light mb-4 text-center">
                What the Playbook Covers
              </h2>
              <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                Everything you need for a seamless FM transition
              </p>
            </AnimatedSection>
            
            <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {playbookCovers.map((item, index) => (
                <AnimatedSection key={index} direction="up" delay={index * 0.05}>
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

        {/* Perfect For */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-6">
            <AnimatedSection direction="up" className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-light mb-4 text-center">
                Perfect for
              </h2>
              <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                Built for professionals managing FM transitions
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                {perfectFor.map((role, index) => (
                  <AnimatedSection key={index} direction="up" delay={index * 0.075}>
                    <Card className="p-6 hover:shadow-lg hover:border-primary/30 transition-all">
                      <h3 className="text-lg font-medium mb-2">{role.title}</h3>
                      <p className="text-muted-foreground font-light">{role.description}</p>
                    </Card>
                  </AnimatedSection>
                ))}
              </div>
              <AnimatedSection direction="up" delay={0.3} className="mt-12 text-center">
                <Card className="p-8 bg-background border-primary/20 inline-block">
                  <p className="text-xl text-muted-foreground font-light italic">
                    Better FM starts with a smarter switch.
                  </p>
                </Card>
              </AnimatedSection>
            </AnimatedSection>
          </div>
        </section>

        {/* Related Links */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-6">
            <AnimatedSection direction="up" className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-light mb-8 text-center">
                You Might Also Find Useful
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Link to="/compliance-diagnostic" className="group">
                  <Card className="p-6 hover:border-primary/30 transition-all h-full">
                    <h3 className="font-medium mb-2 group-hover:text-primary transition-colors">Compliance Risk Diagnostic</h3>
                    <p className="text-sm text-muted-foreground font-light mb-4">Score your current provider's performance</p>
                    <span className="text-sm text-primary flex items-center gap-2">
                      Take Assessment <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Card>
                </Link>
                <Link to="/why-switch" className="group">
                  <Card className="p-6 hover:border-primary/30 transition-all h-full">
                    <h3 className="font-medium mb-2 group-hover:text-primary transition-colors">Why Switch to EntireFM</h3>
                    <p className="text-sm text-muted-foreground font-light mb-4">See what makes us different</p>
                    <span className="text-sm text-primary flex items-center gap-2">
                      Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Card>
                </Link>
                <Link to="/sectors" className="group">
                  <Card className="p-6 hover:border-primary/30 transition-all h-full">
                    <h3 className="font-medium mb-2 group-hover:text-primary transition-colors">Sectors We Serve</h3>
                    <p className="text-sm text-muted-foreground font-light mb-4">Industry-specific FM solutions</p>
                    <span className="text-sm text-primary flex items-center gap-2">
                      View Sectors <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Card>
                </Link>
                <Link to="/contact" className="group">
                  <Card className="p-6 hover:border-primary/30 transition-all h-full">
                    <h3 className="font-medium mb-2 group-hover:text-primary transition-colors">Request a Proposal</h3>
                    <p className="text-sm text-muted-foreground font-light mb-4">Get a tailored switching plan</p>
                    <span className="text-sm text-primary flex items-center gap-2">
                      Contact Us <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
            <AnimatedSection direction="up" className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-light mb-6">
                Download the Switching Provider Playbook
              </h2>
              <p className="text-lg text-gray-300 font-light mb-8">
                Make your FM transition smooth and risk-free
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" variant="secondary" className="bg-white text-charcoal hover:bg-gray-100 gap-2 shadow-lg">
                  <Download className="w-5 h-5" />
                  Download Playbook
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                  <Link to="/contact">Get Mobilisation Proposal</Link>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </div>
    </>
  );
};

export default SwitchingProvider;