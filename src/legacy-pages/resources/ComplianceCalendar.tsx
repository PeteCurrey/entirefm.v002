"use client";

;
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { Download, Calendar, CheckCircle2, Users, ArrowRight, Phone } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";

const ComplianceCalendar = () => {
  const checklist = [
    "Fire systems (BS 5839)",
    "Emergency lighting (BS 5266)",
    "Sprinklers & risers (BS EN 12845 / BS 9990)",
    "Electrical testing (EICR, PAT)",
    "Water hygiene (ACOP L8 / HSG274)",
    "Gas & heating safety",
    "Lift & access systems (LOLER)",
    "Hazard & workplace safety checks"
  ];

  const audience = [
    { role: "Directors / Responsible Persons", description: "Ultimate accountability for compliance" },
    { role: "FM Managers", description: "Operational compliance delivery" },
    { role: "Managing Agents", description: "Multi-site portfolio oversight" },
    { role: "Site Operators", description: "Day-to-day safety management" }
  ];

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Resources", href: "/resources" },
    { label: "Compliance Calendar 2025" }
  ];

  return (
    <div className="min-h-screen bg-background">
      

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal/95 via-charcoal/85 to-primary/20 z-10" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80')] bg-cover bg-center" />
        
        <div className="container mx-auto px-6 relative z-20 py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-primary/20 rounded-xl backdrop-blur-sm">
                <Calendar className="w-8 h-8 text-primary" />
              </div>
              <span className="text-primary font-medium uppercase tracking-wider text-sm">Free Resource</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 leading-tight">
              FM Director's Compliance Calendar 2025
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed mb-4">
              Stay Ahead of Every Compliance Deadline. Every Time.
            </p>
            <p className="text-lg text-gray-400 font-light leading-relaxed mb-8 max-w-3xl">
              Your 2025 statutory maintenance and risk management calendar — engineered to keep Responsible Persons out of the firing line.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="hover-lift gap-2">
                <Download className="w-5 h-5" />
                Download Calendar (PDF)
              </Button>
              <Button size="lg" variant="outline" asChild className="hover-lift bg-white/10 border-white/30 text-white hover:bg-white hover:text-charcoal">
                <Link href="/request-proposal">
                  Request Compliance Audit
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="container mx-auto px-6 py-4 border-b border-border/50">
        <Breadcrumb items={breadcrumbItems} />
      </div>

      {/* What You'll Get */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-light mb-6">
                <span className="underline-accent">What You'll Get</span>
              </h2>
              <p className="text-lg text-muted-foreground font-light leading-relaxed mb-8">
                A visual month-by-month calendar covering all statutory maintenance requirements:
              </p>
            </AnimatedSection>
            
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {checklist.map((item, index) => (
                <AnimatedSection key={index} delay={index * 0.05}>
                  <Card className="p-5 hover-lift bg-card/50 backdrop-blur border-border/50">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <p className="font-light">{item}</p>
                    </div>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
            
            <AnimatedSection delay={0.4}>
              <p className="text-lg text-muted-foreground font-light leading-relaxed">
                All mapped to legal obligations and best-practice intervals.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl md:text-4xl font-light">
                  <span className="underline-accent">Who It's For</span>
                </h2>
              </div>
            </AnimatedSection>
            
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {audience.map((item, index) => (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <Card className="p-6 hover-lift bg-card/50 backdrop-blur border-border/50">
                    <p className="text-lg font-medium mb-2">{item.role}</p>
                    <p className="text-sm text-muted-foreground font-light">{item.description}</p>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
            
            <AnimatedSection delay={0.5}>
              <p className="text-xl text-muted-foreground font-light leading-relaxed italic text-center">
                Compliance clarity = fewer arguments, faster decisions.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-charcoal">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-light mb-6 text-white">
                Download your 2025 Compliance Calendar
              </h2>
              <p className="text-lg text-gray-300 font-light mb-8">
                PDF sent instantly — stay audit-ready all year
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" variant="secondary" className="hover-lift gap-2">
                  <Download className="w-5 h-5" />
                  Download Calendar
                </Button>
                <Button size="lg" variant="outline" asChild className="hover-lift bg-white/10 border-white/30 text-white hover:bg-white hover:text-charcoal">
                  <Link href="/contact">
                    <Phone className="w-5 h-5 mr-2" />
                    Speak to an Expert
                  </Link>
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default ComplianceCalendar;
