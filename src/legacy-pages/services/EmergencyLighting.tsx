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
import { RegionalServiceIndex } from "@/components/shared/RegionalServiceIndex";
import { SidebarCTA } from "@/components/shared/SidebarCTA";
import { ArrowRight, FileText, Lightbulb, Shield, CheckCircle2, FileCheck, AlertTriangle } from "lucide-react";
import ServiceHeroSection from "@/components/shared/ServiceHeroSection";
import AnimatedSection from "@/components/shared/AnimatedSection";
import ContentSection from "@/components/shared/ContentSection";
import FeatureCardGrid from "@/components/shared/FeatureCardGrid";

const EmergencyLighting = () => {
  useConversionTracking();

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Emergency Lighting Compliance" }
  ];

  const keyFeatures = [
    {
      icon: Lightbulb,
      title: "Monthly Function Tests",
      description: "Regular verification that all emergency lighting units operate correctly"
    },
    {
      icon: Shield,
      title: "Annual 3-Hour Duration",
      description: "Full battery capacity testing to BS 5266 requirements"
    },
    {
      icon: CheckCircle2,
      title: "Battery Replacements",
      description: "Proactive battery management before failure occurs"
    },
    {
      icon: FileCheck,
      title: "Digital Certification",
      description: "Instant downloadable certificates with photo evidence"
    }
  ];

  const faqs = [
    {
      question: "What causes a failed duration test?",
      answer: "Ageing batteries, poor charging circuits or insufficient capacity can all cause emergency lighting duration tests to fail. Regular maintenance and timely battery replacements prevent these issues."
    },
    {
      question: "Who is responsible for emergency lighting compliance?",
      answer: "The Responsible Person — usually the building owner, employer, or managing agent — is legally responsible for ensuring emergency lighting systems are compliant with BS 5266 standards."
    },
    {
      question: "Can tests be carried out after hours?",
      answer: "Absolutely. We schedule disruptive works responsibly to minimize operational impact, including evening and weekend testing when required."
    }
  ];

  return (
    <>
      

      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        name="Emergency Lighting & Evacuation Safety Compliance"
        description="BS 5266 certified emergency lighting testing, 3-hour duration verification and remedials for compliant and safe evacuation across commercial estates."
        provider="Entire FM"
        areaServed="United Kingdom"
      />
      <FAQSchema faqs={faqs} />

      <div className="min-h-screen bg-background">
        <ServiceHeroSection
          breadcrumbItems={breadcrumbItems}
          title="Emergency Lighting & Evacuation Safety"
          description="BS 5266 testing, 3-hour duration verification and remedials for compliant and safe evacuation across commercial estates."
          stats={[
            { value: "BS 5266", label: "Certified" },
            { value: "3hr", label: "Duration Testing" },
            { value: "Monthly", label: "Function Tests" },
            { value: "24/7", label: "Support" }
          ]}
          primaryCTA={{
            label: "Request 3-Hour Duration Test",
            href: "/request-proposal",
            icon: ArrowRight
          }}
          secondaryCTA={{
            label: "Download BS 5266 Checklist",
            href: "/resources",
            icon: FileText
          }}
          backgroundImage="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80"
        />

        {/* Key Features Grid */}
        <section className="py-16 bg-background">
          <div className="max-w-6xl mx-auto px-4">
            <FeatureCardGrid features={keyFeatures} columns={4} variant="gradient" />
          </div>
        </section>

        {/* Evacuation Safety Section */}
        <ContentSection variant="muted" title="Evacuation Safety When Visibility Fails" subtitle="In an emergency, people don't panic because of fire — they panic because they can't see." centered>
          <div className="max-w-4xl mx-auto">
            <AnimatedSection delay={0.1}>
              <div className="grid md:grid-cols-2 gap-6 text-left mt-8">
                <div className="bg-card p-6 rounded-lg border border-border">
                  <h3 className="text-xl font-light mb-4 text-foreground">When Emergency Lighting Fails:</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    {[
                      "Evacuation slows",
                      "Injury & liability rise",
                      "Insurers reject claims",
                      "Fire safety enforcement escalates"
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start gap-2"
                      >
                        <AlertTriangle className="w-4 h-4 text-destructive mt-1 flex-shrink-0" />
                        <span className="font-light">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
                <div className="bg-primary/5 p-6 rounded-lg border border-primary/20 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-xl font-light">
                      Compliance isn't optional —<br />
                      <span className="text-primary text-2xl font-medium">it's life preservation.</span>
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </ContentSection>

        {/* Main Content Grid */}
        <section className="py-16 bg-background">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-12">
                
                {/* Full BS 5266 Compliance */}
                <AnimatedSection>
                  <h2 className="text-3xl font-light mb-6">
                    <span className="underline-accent">Full BS 5266 Compliance Delivery</span>
                  </h2>
                  <p className="text-xl text-muted-foreground font-light mb-8">We maintain and certify:</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      "Monthly functional testing",
                      "Annual 3-hour duration testing",
                      "Signage illumination performance",
                      "Escape route coverage mapping",
                      "Battery and fitting replacements",
                      "Logbooks & digital certification"
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
                          <Lightbulb className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="font-light text-foreground">{service}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  <p className="text-lg text-center mt-8 text-foreground font-medium">
                    Your evacuation stays safe — even when power fails.
                  </p>
                </AnimatedSection>

                {/* Live Remedials */}
                <AnimatedSection delay={0.1} className="bg-muted/30 p-8 rounded-xl">
                  <h2 className="text-3xl font-light mb-6">
                    Live Remedials — Zero Exposure
                  </h2>
                  <p className="text-muted-foreground font-light mb-8">
                    Any failure identified during testing triggers our <Link href="/fm-operations/reactive-maintenance" className="text-primary hover:underline">reactive maintenance</Link> process, ensuring it:
                  </p>
                  <div className="grid md:grid-cols-3 gap-6">
                    {[
                      { title: "Risk-coded", desc: "Severity categorized" },
                      { title: "Costed", desc: "Transparent pricing" },
                      { title: "Resolved rapidly", desc: "Fast deployment" }
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
                    We don't leave evacuation safety to chance.
                  </p>
                </AnimatedSection>

                {/* Digital Compliance Governance */}
                <AnimatedSection delay={0.2}>
                  <h2 className="text-3xl font-light mb-6">
                    <span className="underline-accent">Digital Compliance Governance</span>
                  </h2>
                  <p className="text-muted-foreground font-light mb-8">
                    Every test. Every asset. Every result. Stored electronically with:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mb-8">
                    {[
                      "Photo evidence",
                      "Remedial lifecycle logs",
                      "Downloadable certificates",
                      "Automatic re-test alerts"
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
                      Auditors love this. <span className="text-primary font-medium">Insurers expect it.</span>
                    </p>
                  </div>
                </AnimatedSection>

                {/* Sectors We Protect */}
                <AnimatedSection delay={0.1}>
                  <h2 className="text-3xl font-light mb-6">
                    <span className="underline-accent">Sectors We Protect</span>
                  </h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                      { name: "PBSA & residential", link: "/sectors/residential-pbsa" },
                      { name: "Retail & hospitality", link: "/sectors/retail-service-stations" },
                      { name: "Corporate offices", link: "/sectors/offices-corporate" },
                      { name: "Public buildings & venues", link: "/sectors" },
                      { name: "Logistics & industrial", link: "/sectors/industrial-logistics" }
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
                      <h3 className="text-xl font-medium mb-3 text-foreground">City Retail Centre</h3>
                      <p className="text-muted-foreground font-light leading-relaxed">
                        Compliance restored within 48 hours of audit deadline.
                      </p>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 }}
                      className="bg-card p-6 rounded-xl border border-border hover:border-primary/30 transition-colors"
                    >
                      <h3 className="text-xl font-medium mb-3 text-foreground">PBSA Building</h3>
                      <p className="text-muted-foreground font-light leading-relaxed">
                        Duration failures eliminated across full site.
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
                      description: "Monthly functional testing and annual emergency lighting certification",
                      link: "/fm-operations/ppm-delivery"
                    },
                    {
                      title: "Fire Safety",
                      description: "Comprehensive fire safety system testing and maintenance",
                      link: "/services/fire-safety"
                    },
                    {
                      title: "Reactive Maintenance",
                      description: "Emergency lighting fault diagnosis and rapid repairs",
                      link: "/fm-operations/reactive-maintenance"
                    },
                    {
                      title: "Emergency Response",
                      description: "Critical life-safety system emergency attendance",
                      link: "/services/emergency-response"
                    }
                  ]}
                />

                <RegionalServiceIndex 
                  serviceName="Emergency Lighting"
                  serviceSlug="emergency-lighting"
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
              Evacuation readiness = life safety.
            </h2>
            <p className="text-lg text-muted-foreground mb-2">
              Don't leave it unclear.
            </p>
            <p className="text-muted-foreground mb-8">📩 hello@entirefm.com</p>
            <Button size="lg" asChild>
              <Link href="/request-proposal">
                <ArrowRight className="w-5 h-5 mr-2" />
                Request 3-Hour Test
              </Link>
            </Button>
          </AnimatedSection>
        </ContentSection>
      </div>
    </>
  );
};

export default EmergencyLighting;
