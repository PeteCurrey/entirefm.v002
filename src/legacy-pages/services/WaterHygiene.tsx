"use client";

;
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FAQSection } from "@/components/shared/FAQSection";
import { ServiceSchema, FAQSchema } from "@/components/shared/SchemaMarkup";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { useConversionTracking } from "@/hooks/useConversionTracking";
import { RelatedServices } from "@/components/shared/RelatedServices";
import { SidebarCTA } from "@/components/shared/SidebarCTA";
import { ArrowRight, FileText, Droplets, AlertTriangle, CheckCircle2, Shield, FileCheck } from "lucide-react";
import ServiceHeroSection from "@/components/shared/ServiceHeroSection";
import AnimatedSection from "@/components/shared/AnimatedSection";
import ContentSection from "@/components/shared/ContentSection";
import FeatureCardGrid from "@/components/shared/FeatureCardGrid";

const WaterHygiene = () => {
  useConversionTracking();

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Water Hygiene & Legionella Compliance" }
  ];

  const keyFeatures = [
    {
      icon: Droplets,
      title: "Legionella Risk Assessments",
      description: "Full ACOP L8 compliant assessments with remedial recommendations"
    },
    {
      icon: Shield,
      title: "Temperature Monitoring",
      description: "Continuous monitoring and flushing programs to prevent stagnation"
    },
    {
      icon: CheckCircle2,
      title: "UKAS Laboratory Testing",
      description: "Accredited sampling and analysis with rapid results"
    },
    {
      icon: FileCheck,
      title: "Tank Cleaning & Chlorination",
      description: "Complete water storage hygiene with certification"
    }
  ];

  const faqs = [
    {
      question: "What causes Legionella risk?",
      answer: "Stagnation, temperature abuse, biofilm formation and poor governance are the main causes of Legionella risk in water systems. Regular monitoring and maintenance prevent these conditions."
    },
    {
      question: "Who is legally responsible for control?",
      answer: "The building's Responsible Person — usually the owner, employer, or managing agent — is legally responsible. We support full execution of their compliance duties under ACOP L8."
    },
    {
      question: "How often should reviews happen?",
      answer: "Depends on system risk — typically annual monitoring with a 2-year risk assessment refresh. More frequent reviews may be required for high-risk environments or after system changes."
    }
  ];

  return (
    <>
      

      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        name="Water Hygiene & Legionella Compliance Services"
        description="ACOP L8 and HSG274 risk control across commercial estates — sampling, monitoring, flushing and remedial actions that protect health, uptime, and legal accountability."
        provider="Entire FM"
        areaServed="United Kingdom"
      />
      <FAQSchema faqs={faqs} />

      <div className="min-h-screen bg-background">
        <ServiceHeroSection
          breadcrumbItems={breadcrumbItems}
          title="Water Hygiene & Legionella Compliance"
          description="ACOP L8 and HSG274 risk control across commercial estates — sampling, monitoring, flushing and remedial actions that protect health, uptime, and legal accountability."
          stats={[
            { value: "ACOP L8", label: "Compliant" },
            { value: "HSG274", label: "Aligned" },
            { value: "UKAS", label: "Lab Testing" },
            { value: "48hr", label: "Remedials" }
          ]}
          primaryCTA={{
            label: "Request Legionella Risk Assessment",
            href: "/request-proposal",
            icon: ArrowRight
          }}
          secondaryCTA={{
            label: "Download Water Hygiene Guide",
            href: "/resources",
            icon: FileText
          }}
          backgroundImage="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1920&q=80"
        />

        {/* Key Features Grid */}
        <section className="py-16 bg-background">
          <div className="max-w-6xl mx-auto px-4">
            <FeatureCardGrid features={keyFeatures} columns={4} variant="gradient" />
          </div>
        </section>

        {/* Risk Exposure Section */}
        <ContentSection variant="muted" title="Legionella Risk = Legal, Financial & Reputational Exposure" subtitle="A single outbreak can have devastating consequences for your organisation.">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection delay={0.1}>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {[
                  "Trigger criminal prosecution",
                  "Shut down businesses instantly",
                  "Make headlines for all the wrong reasons",
                  "Cause long-term brand damage"
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-card p-6 rounded-lg border border-destructive/30 flex items-start gap-3"
                  >
                    <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                    <span className="font-light text-foreground">{item}</span>
                  </motion.div>
                ))}
              </div>
              <div className="bg-primary/5 p-8 rounded-lg border border-primary/20 text-center">
                <p className="text-xl font-light">
                  We don't take chances with public health —<br />
                  <span className="text-primary text-2xl font-medium">we remove Legionella risk at the source.</span>
                </p>
              </div>
            </AnimatedSection>
          </div>
        </ContentSection>

        {/* Main Content Grid */}
        <section className="py-16 bg-background">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-12">
                
                {/* ACOP L8 / HSG274 Compliance Services */}
                <AnimatedSection>
                  <h2 className="text-3xl font-light mb-6">
                    <span className="underline-accent">ACOP L8 / HSG274 Compliance Services</span>
                  </h2>
                  <p className="text-xl text-muted-foreground font-light mb-8">We design and deliver:</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      "Legionella Risk Assessments (LRAs)",
                      "Temperature monitoring & flushing",
                      "Sampling + UKAS laboratory testing",
                      "TMV servicing & calibration",
                      "Tank inspections, cleaning & chlorination",
                      "Asset remedials to eliminate stagnation risk"
                    ].map((service, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        className="bg-card p-5 rounded-lg border border-border hover:border-primary/50 transition-colors"
                      >
                        <div className="flex items-start gap-3">
                          <Droplets className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="font-light text-foreground">{service}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  <p className="text-lg text-muted-foreground font-light mt-8 text-center">
                    Regulations met. Evidence proven.
                  </p>
                </AnimatedSection>

                {/* Remedials Section */}
                <AnimatedSection delay={0.1} className="bg-muted/30 p-8 rounded-xl">
                  <h2 className="text-3xl font-light mb-6">
                    Remedials — Risk Closed, Same Visit Where Possible
                  </h2>
                  <p className="text-muted-foreground font-light mb-8">
                    When risk appears, our <Link href="/fm-operations/reactive-maintenance" className="text-primary hover:underline">reactive maintenance</Link> team ensures it gets:
                  </p>
                  <div className="grid md:grid-cols-3 gap-6">
                    {[
                      { title: "A risk-rated action", desc: "Severity classified" },
                      { title: "A costed fix", desc: "Clear pricing" },
                      { title: "A scheduled remedial date", desc: "Rapid deployment" }
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-card p-6 rounded-lg border border-border text-center"
                      >
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                          <CheckCircle2 className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-lg font-medium mb-2 text-foreground">{item.title}</h3>
                        <p className="text-muted-foreground font-light text-sm">{item.desc}</p>
                      </motion.div>
                    ))}
                  </div>
                  <p className="text-lg text-center mt-8 text-foreground font-medium">
                    No waiting while bacteria multiply.
                  </p>
                </AnimatedSection>

                {/* Digital Audit Trail */}
                <AnimatedSection delay={0.2}>
                  <h2 className="text-3xl font-light mb-6">
                    <span className="underline-accent">Digital Audit Trail & Compliance Dashboard</span>
                  </h2>
                  <p className="text-muted-foreground font-light mb-8">All evidence stored securely:</p>
                  <div className="grid md:grid-cols-2 gap-4 mb-8">
                    {[
                      "Inspector-ready audit packs",
                      "Renewals and re-test alerts",
                      "Complete asset condition records",
                      "Photo logging of issues and fixes"
                    ].map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        className="flex items-center gap-3 bg-card p-5 rounded-lg border border-border"
                      >
                        <FileCheck className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="font-light text-foreground">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                  <div className="bg-primary/5 p-6 rounded-lg border border-primary/20 text-center">
                    <p className="text-lg font-light">
                      Insurers love it. <span className="text-primary font-medium">CQC/HSE demand it.</span>
                    </p>
                  </div>
                </AnimatedSection>

                {/* High-Scrutiny Sector Expertise */}
                <AnimatedSection delay={0.1}>
                  <h2 className="text-3xl font-light mb-6">
                    <span className="underline-accent">High-Scrutiny Sector Expertise</span>
                  </h2>
                  <p className="text-muted-foreground font-light mb-6">We protect:</p>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                      { name: "PBSA & universities", link: "/sectors/residential-pbsa" },
                      { name: "Hospitality & leisure", link: "/sectors/hospitality-leisure" },
                      { name: "Healthcare environments", link: "/sectors" },
                      { name: "Retail", link: "/sectors/retail-service-stations" },
                      { name: "Corporate workplaces", link: "/sectors/offices-corporate" },
                      { name: "Industrial estates", link: "/sectors/industrial-logistics" }
                    ].map((sector, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <Link href={sector.link}
                          className="block bg-card p-5 rounded-lg border border-border hover:border-primary transition-colors text-center"
                        >
                          <span className="font-light text-foreground">{sector.name}</span>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </AnimatedSection>

                {/* Case Study Highlights */}
                <AnimatedSection delay={0.2}>
                  <h2 className="text-3xl font-light mb-6">
                    <span className="underline-accent">Case Study Highlights</span>
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="bg-card p-6 rounded-xl border border-border hover:border-primary/30 transition-colors"
                    >
                      <h3 className="text-xl font-medium mb-3 text-foreground">PBSA Outbreak Prevention</h3>
                      <p className="text-muted-foreground font-light leading-relaxed">
                        Complete risk control and remedials delivered in &lt;48 hours.
                      </p>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 }}
                      className="bg-card p-6 rounded-xl border border-border hover:border-primary/30 transition-colors"
                    >
                      <h3 className="text-xl font-medium mb-3 text-foreground">Healthcare Compliance Delivery</h3>
                      <p className="text-muted-foreground font-light leading-relaxed">
                        Full digital audit traceability — zero findings at inspection.
                      </p>
                    </motion.div>
                  </div>
                  <p className="text-sm text-muted-foreground text-center mt-6">
                    Detailed case studies coming soon
                  </p>
                </AnimatedSection>

                {/* Related Services */}
                <RelatedServices 
                  services={[
                    {
                      title: "PPM Delivery",
                      description: "Water hygiene monitoring and Legionella testing programs",
                      link: "/fm-operations/ppm-delivery"
                    },
                    {
                      title: "Reactive Maintenance",
                      description: "Emergency water system repairs and contamination response",
                      link: "/fm-operations/reactive-maintenance"
                    },
                    {
                      title: "Asset Lifecycle Planning",
                      description: "Water infrastructure condition surveys and replacement planning",
                      link: "/fm-operations/asset-lifecycle"
                    },
                    {
                      title: "Business Continuity",
                      description: "Water supply resilience and emergency provisions",
                      link: "/fm-operations/business-continuity"
                    }
                  ]}
                />

                <FAQSection faqs={faqs} />
              </div>

              {/* Sidebar */}
              <aside className="lg:col-span-1">
                <div className="sticky top-24">
                  <SidebarCTA />
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <ContentSection variant="gradient" centered>
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-light mb-4">
              Protect health. Protect compliance. Protect your business.
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              📩 hello@entirefm.com
            </p>
            <Button size="lg" asChild>
              <Link href="/request-proposal">
                <ArrowRight className="w-5 h-5 mr-2" />
                Request Legionella Risk Assessment
              </Link>
            </Button>
          </AnimatedSection>
        </ContentSection>
      </div>
    </>
  );
};

export default WaterHygiene;
