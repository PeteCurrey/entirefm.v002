"use client";

;
import Link from "next/link";
import { ArrowRight, Wind, AlertCircle, Shield, CheckCircle2, Phone, FileText } from "lucide-react";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { FAQSection } from "@/components/shared/FAQSection";
import { FAQSchema, ServiceSchema } from "@/components/shared/SchemaMarkup";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SidebarCTA } from "@/components/shared/SidebarCTA";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/shared/AnimatedSection";
import CTASection from "@/components/shared/CTASection";

const SmokeVentSystems = () => {
  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Smoke Vent Systems" }
  ];

  const faqs = [
    {
      question: "What are smoke vent systems and why are they required?",
      answer: "Smoke vent systems (AOVs - Automatic Opening Vents) expel smoke and heat during fires, maintaining clear escape routes and enabling firefighter access. They're legally required in many building types under fire safety regulations and Building Regulations Approved Document B."
    },
    {
      question: "How often should smoke vents be tested?",
      answer: "Weekly manual operation tests, 6-monthly functional testing of all components, and annual full system inspection by competent engineers. Testing must verify automatic activation, manual override, and smoke detection integration."
    },
    {
      question: "Who can service smoke vent systems?",
      answer: "Only competent engineers with specialist knowledge of smoke control systems, fire detection integration, and relevant British Standards (BS EN 12101 series). Certification confirms compliance and system performance."
    },
    {
      question: "What happens if smoke vents fail during a fire?",
      answer: "Smoke vents failing to activate trap occupants in smoke-filled spaces, prevent evacuation, and hinder firefighting operations. This creates direct life safety risk and prosecution liability for responsible persons."
    },
    {
      question: "Do smoke vents require emergency power backup?",
      answer: "Yes. AOV systems must operate during power failures using battery backup or alternative power sources. This ensures functionality during fires when mains power may be compromised."
    }
  ];

  const relatedServices = [
    { title: "Fire Alarm Systems", link: "/services/fire-alarms" },
    { title: "Fire Safety Compliance", link: "/services/fire-safety" },
    { title: "Emergency Lighting", link: "/services/emergency-lighting" }
  ];

  const stats = [
    { value: "BS EN 12101", label: "Compliant Testing" },
    { value: "24/7", label: "Emergency Response" },
    { value: "100%", label: "Certification Rate" },
    { value: "UK-Wide", label: "Coverage" }
  ];

  return (
    <>
      
      <BreadcrumbSchema items={breadcrumbItems} />
      <FAQSchema faqs={faqs} />
      <ServiceSchema
        name="Smoke Vent & Fire Extraction Systems"
        description="Smoke vent (AOV) and fire extraction system testing, maintenance, and certification. Life safety assets requiring strict performance governance to BS EN 12101 standards."
        provider="EntireFM"
        areaServed="United Kingdom"
      />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal/90 via-primary/60 to-charcoal z-10" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80')] bg-cover bg-center" />
        
        <div className="container mx-auto px-6 relative z-20 text-white py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Breadcrumb items={breadcrumbItems} className="mb-6" />
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 max-w-4xl">
              Smoke Vent & Fire Extraction Systems
            </h1>
            <p className="text-xl md:text-2xl font-light max-w-3xl text-gray-200 mb-8">
              Life safety assets requiring strict performance governance.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-white text-charcoal hover:bg-gray-100" asChild>
                <Link href="/request-proposal">
                  Request Proposal
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-charcoal" asChild>
                <Link href="/contact">Contact Specialists</Link>
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
                    Why Smoke Control Matters
                  </h2>
                </div>
                <div className="space-y-4 text-muted-foreground font-light leading-relaxed">
                  <p>
                    Smoke kills more people in fires than flames. Smoke vent systems (Automatic Opening Vents - AOVs) and fire extraction systems remove smoke and heat from escape routes, stairwells, and protected areas, maintaining tenable conditions for evacuation and firefighting operations.
                  </p>
                  <p>
                    But these systems must activate reliably when needed. Weekly testing, 6-monthly servicing, and annual inspections to BS EN 12101 standards ensure functional readiness. The Regulatory Reform (Fire Safety) Order 2005 places maintenance obligations on responsible persons — failures create prosecution risk and catastrophic safety consequences.
                  </p>
                </div>
              </section>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <FileText className="w-8 h-8 text-primary" />
                  <h2 className="text-3xl font-light underline-accent inline-block">
                    Applicable Standards
                  </h2>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { standard: "BS EN 12101 series", desc: "Smoke and heat control systems standards" },
                    { standard: "BS 7346 series", desc: "Components for smoke and heat control systems" },
                    { standard: "BS 9999:2017", desc: "Fire safety in building design, management and use" },
                    { standard: "Approved Document B", desc: "Building Regulations fire safety guidance" },
                    { standard: "Fire Safety Order 2005", desc: "Legal requirement for functional smoke control" }
                  ].map((item, index) => (
                    <motion.div 
                      key={index}
                      className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg border hover:border-primary transition-colors"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Shield className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">{item.standard}</span>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </section>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Responsible Person Obligations
                </h2>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    "Commission weekly manual operation tests",
                    "Arrange 6-monthly functional testing by competent engineers",
                    "Conduct annual full system inspections with certification",
                    "Verify integration with fire detection and alarm systems",
                    "Maintain emergency power backup systems",
                    "Keep test certificates and service records accessible",
                    "Remediate defects immediately"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="font-light text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </section>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Inspection & Testing Frequencies
                </h2>
                <div className="overflow-x-auto rounded-lg border">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b bg-muted/50">
                        <th className="text-left p-4 font-medium">Test Type</th>
                        <th className="text-left p-4 font-medium">Frequency</th>
                        <th className="text-left p-4 font-medium">Components Tested</th>
                      </tr>
                    </thead>
                    <tbody className="text-sm">
                      {[
                        { type: "Manual Operation", freq: "Weekly", components: "Manual call point activation, visual confirmation" },
                        { type: "Functional Test", freq: "6-monthly", components: "Actuators, motors, control panels, detectors" },
                        { type: "Full Inspection", freq: "Annually", components: "Complete system, backup power, integration" },
                        { type: "Emergency Power", freq: "Monthly", components: "Battery condition and charge status" }
                      ].map((row, index) => (
                        <tr key={index} className="border-b border-border/50 hover:bg-muted/30 transition-colors">
                          <td className="p-4 font-medium">{row.type}</td>
                          <td className="p-4 text-primary">{row.freq}</td>
                          <td className="p-4 text-muted-foreground">{row.components}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <section className="bg-destructive/5 border border-destructive/20 p-8 rounded-2xl">
                <div className="flex items-start gap-4 mb-6">
                  <AlertCircle className="w-8 h-8 text-destructive flex-shrink-0" />
                  <h2 className="text-3xl font-light">
                    Non-Compliance Consequences
                  </h2>
                </div>
                
                <Card className="p-6 border-l-4 border-l-destructive mb-6 bg-background">
                  <h3 className="text-lg font-medium mb-2">Life Safety Failure</h3>
                  <p className="text-sm text-muted-foreground">
                    Non-functional smoke vents trap occupants in smoke-filled spaces during fires, preventing evacuation and causing deaths. Responsible persons face Corporate Manslaughter charges when system failures cause fatalities.
                  </p>
                </Card>

                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    { title: "Criminal prosecution", desc: "Fire service enforcement under Fire Safety Order" },
                    { title: "Unlimited fines", desc: "No cap on penalties for fire safety breaches" },
                    { title: "Imprisonment", desc: "Up to 2 years for responsible persons" },
                    { title: "Prohibition notices", desc: "Building closures until compliance achieved" },
                    { title: "Insurance invalidation", desc: "Claims rejected without maintenance records" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-background/50 rounded-lg">
                      <AlertCircle className="w-4 h-4 text-destructive shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium text-sm">{item.title}</span>
                        <p className="text-xs text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </AnimatedSection>

            <AnimatedSection delay={0.5}>
              <section className="bg-muted/30 p-8 rounded-2xl">
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Our Smoke Vent Service
                </h2>
                <p className="text-muted-foreground font-light leading-relaxed mb-6">
                  We deliver systematic smoke control system maintenance through specialist engineers:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Weekly manual operation testing coordination",
                    "6-monthly functional testing by competent engineers",
                    "Annual BS EN 12101 compliance inspections",
                    "Fire detection system integration verification",
                    "Emergency power backup testing and maintenance",
                    "Complete certification and audit trail management"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-background/50 rounded-lg">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="font-light text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </section>
            </AnimatedSection>

            <AnimatedSection delay={0.6}>
              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Related Services
                </h2>
                <div className="grid md:grid-cols-3 gap-4">
                  {relatedServices.map((service, index) => (
                    <Link key={service.link} href={service.link}>
                      <motion.div 
                        className="p-6 border rounded-lg hover:border-primary hover:bg-muted/30 transition-all h-full"
                        whileHover={{ scale: 1.02, y: -4 }}
                      >
                        <h3 className="text-lg font-medium mb-2">{service.title}</h3>
                        <div className="flex items-center text-sm text-primary">
                          Learn more <ArrowRight className="w-4 h-4 ml-2" />
                        </div>
                      </motion.div>
                    </Link>
                  ))}
                </div>
              </section>
            </AnimatedSection>

            <AnimatedSection delay={0.7}>
              <FAQSection faqs={faqs} />
            </AnimatedSection>

            <CTASection
              title="Need Smoke Vent Maintenance?"
              description="Request a proposal for smoke vent and fire extraction system services."
              primaryLabel="Request a Proposal"
              primaryHref="/request-proposal"
              secondaryLabel="24/7 Helpdesk"
              secondaryHref="tel:+448001234567"
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

export default SmokeVentSystems;