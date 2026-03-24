"use client";

;
import { Button } from "@/components/ui/button";
import { ArrowRight, Wind, AlertTriangle, FileText, Phone, CheckCircle2, Shield } from "lucide-react";
import Link from "next/link";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { ServiceSchema, FAQSchema } from "@/components/shared/SchemaMarkup";
import { FAQSection } from "@/components/shared/FAQSection";
import { SidebarCTA } from "@/components/shared/SidebarCTA";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/shared/AnimatedSection";
import CTASection from "@/components/shared/CTASection";

const FumeExtractionLEV = () => {
  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "LEV Testing" }
  ];

  const faqs = [
    {
      question: "How often must LEV systems be tested?",
      answer: "COSHH regulations require LEV testing at least every 14 months, with more frequent testing for high-risk processes. New installations must be commissioned and tested before use."
    },
    {
      question: "What does LEV testing involve?",
      answer: "Hood face velocity measurement, duct integrity checks, filter condition assessment, airflow verification, and performance comparison against design specifications and COSHH requirements."
    },
    {
      question: "Who can conduct LEV testing?",
      answer: "Testing must be performed by competent persons with LEV-specific training. P601 (thorough examination and testing) or P602 (design, installation, commissioning) qualifications demonstrate competence."
    },
    {
      question: "What are the consequences of non-compliant LEV?",
      answer: "HSE enforcement action, improvement/prohibition notices, prosecution, worker exposure to hazardous substances, occupational health claims, and insurance invalidation for inadequate workplace health controls."
    },
    {
      question: "What documentation is required?",
      answer: "LEV register, test certificates, maintenance logs, COSHH assessments, and performance records demonstrating compliance with HSG258 guidance and COSHH regulations."
    }
  ];

  const stats = [
    { value: "COSHH", label: "Compliant Testing" },
    { value: "14 Months", label: "Max Testing Interval" },
    { value: "P601/P602", label: "Qualified Engineers" },
    { value: "HSG258", label: "Guidance Followed" }
  ];

  const testingRequirements = [
    { title: "Testing Intervals", desc: "COSHH requires LEV testing at least every 14 months. High-risk processes require more frequent testing. New installations must be commissioned before use." },
    { title: "Hood Face Velocity Tests", desc: "Measure airflow at extraction hoods to verify performance meets design specifications and COSHH control requirements for specific contaminants." },
    { title: "Filter Checks", desc: "Inspect filter loading, pressure drop, and efficiency to ensure continued contaminant capture without excessive energy consumption or reduced performance." },
    { title: "Reporting", desc: "Comprehensive test certificates, performance comparison against baseline, identified defects, and remedial recommendations meeting HSG258 guidance standards." }
  ];

  const risks = [
    { title: "Worker health risks", desc: "Exposure to hazardous substances causes respiratory disease, occupational asthma, and long-term illness" },
    { title: "HSE enforcement", desc: "Improvement or prohibition notices, prosecution, and unlimited fines for COSHH breaches" },
    { title: "Occupational health claims", desc: "Employee litigation for exposure-related illness caused by inadequate workplace controls" },
    { title: "Insurance invalidation", desc: "Policies require documented compliance with health and safety legislation as a condition of cover" }
  ];

  return (
    <>
      

      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema 
        name="LEV (Local Exhaust Ventilation) Testing & Maintenance"
        description="Protecting air quality and ensuring compliance with COSHH regulations."
        provider="EntireFM"
        areaServed="United Kingdom"
      />
      <FAQSchema faqs={faqs} />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal/90 via-primary/50 to-charcoal z-10" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80')] bg-cover bg-center" />
        
        <div className="container mx-auto px-6 relative z-20 text-white py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Breadcrumb items={breadcrumbItems} className="mb-6" />
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 max-w-4xl">
              LEV Testing & Maintenance
            </h1>
            <p className="text-xl md:text-2xl font-light max-w-3xl text-gray-200 mb-8">
              Protecting air quality and ensuring compliance with COSHH regulations.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-white text-charcoal hover:bg-gray-100" asChild>
                <Link href="/request-proposal">
                  Request Proposal
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-charcoal" asChild>
                <Link href="/contact">Contact Support</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="bg-charcoal py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center text-white"
              >
                <div className="text-2xl md:text-3xl font-light mb-2">{stat.value}</div>
                <div className="text-sm text-gray-400 font-light">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-16">
            
            <AnimatedSection>
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <Wind className="w-8 h-8 text-primary" />
                  <h2 className="text-3xl font-light underline-accent inline-block">
                    Workplace Air Quality Protection
                  </h2>
                </div>
                <div className="space-y-4 text-muted-foreground font-light leading-relaxed">
                  <p>
                    Local Exhaust Ventilation (LEV) systems protect workers from hazardous fumes, dust, vapors, and airborne contaminants generated during industrial processes—meeting COSHH (Control of Substances Hazardous to Health) regulatory requirements.
                  </p>
                  <p>
                    Regular testing verifies LEV systems capture and remove contaminants effectively, preventing worker exposure that could cause respiratory disease, occupational illness, or long-term health consequences.
                  </p>
                </div>
              </section>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <FileText className="w-8 h-8 text-primary" />
                  <h2 className="text-3xl font-light underline-accent inline-block">
                    COSHH Testing Requirements
                  </h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {testingRequirements.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Card className="p-6 h-full hover:border-primary transition-colors">
                        <h3 className="font-medium mb-3">{item.title}</h3>
                        <p className="text-sm text-muted-foreground font-light">{item.desc}</p>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </section>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <section className="bg-destructive/5 border border-destructive/20 p-8 rounded-2xl">
                <div className="flex items-start gap-4 mb-6">
                  <AlertTriangle className="w-8 h-8 text-destructive flex-shrink-0" />
                  <h2 className="text-3xl font-light">
                    Risks of Non-Compliant LEV Systems
                  </h2>
                </div>
                <p className="font-medium text-lg mb-6">
                  Inadequate LEV systems expose organizations to:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {risks.map((risk, index) => (
                    <motion.div 
                      key={index}
                      className="flex items-start gap-3 p-4 bg-background/50 rounded-lg"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <AlertTriangle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">{risk.title}</span>
                        <p className="text-sm text-muted-foreground">{risk.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </section>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <section className="bg-muted/30 p-8 rounded-2xl">
                <h2 className="text-3xl font-light mb-6">Related Industrial Services</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { name: "Industrial Refrigeration", desc: "Cold room compliance", href: "/services/industrial-refrigeration" },
                    { name: "Compressor Maintenance", desc: "Air compressor servicing", href: "/services/compressor-maintenance" },
                    { name: "HVAC Systems", desc: "Ventilation and air quality", href: "/services/hvac" },
                    { name: "Health & Safety", desc: "Workplace compliance", href: "/services/health-safety" }
                  ].map((service, index) => (
                    <Link key={index} href={service.href}>
                      <motion.div 
                        className="p-4 border rounded-lg hover:border-primary hover:bg-muted/30 transition-all"
                        whileHover={{ scale: 1.02 }}
                      >
                        <h3 className="font-medium mb-1">{service.name}</h3>
                        <p className="text-sm text-muted-foreground">{service.desc}</p>
                      </motion.div>
                    </Link>
                  ))}
                </div>
              </section>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <FAQSection faqs={faqs} />
            </AnimatedSection>

            <CTASection
              title="Request LEV Testing"
              description="Speak to our team about COSHH-compliant LEV testing for your industrial environment."
              primaryLabel="Request Proposal"
              primaryHref="/request-proposal"
              secondaryLabel="Contact Support"
              secondaryHref="/contact"
              secondaryIcon={Phone}
              variant="gradient"
            />
          </div>

          <aside className="lg:col-span-1">
            <div className="sticky top-24">
              <SidebarCTA />
            </div>
          </aside>
        </div>
      </div>
    </>
  );
};

export default FumeExtractionLEV;