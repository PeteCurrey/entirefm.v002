import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, AlertTriangle, CheckCircle2, Phone, Battery, Zap } from "lucide-react";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { ServiceSchema, FAQSchema } from "@/components/shared/SchemaMarkup";
import { FAQSection } from "@/components/shared/FAQSection";
import { SidebarCTA } from "@/components/shared/SidebarCTA";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/shared/AnimatedSection";
import CTASection from "@/components/shared/CTASection";

const UPSMaintenance = () => {
  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "UPS Maintenance" }
  ];

  const faqs = [
    {
      question: "What is the role of UPS systems in critical facilities?",
      answer: "UPS (Uninterruptible Power Supply) systems provide instantaneous backup power during mains failures, protecting data centres, hospitals, and control systems from power interruptions. Unlike generators requiring 10-30 seconds to start, UPS delivers continuous power preventing server crashes, data loss, and control system failures during momentary outages."
    },
    {
      question: "How often should UPS systems be maintained?",
      answer: "Quarterly inspections include visual checks, alarm testing, and battery voltage measurements. Annual maintenance involves battery impedance testing, load bank testing to verify capacity, capacitor replacement, and cooling fan inspection. Battery strings typically require replacement every 3-5 years depending on temperature and discharge cycles."
    },
    {
      question: "What is battery impedance testing?",
      answer: "Impedance testing measures internal resistance of UPS batteries, identifying cells approaching end-of-life before they fail. High impedance indicates sulfation, grid corrosion, or electrolyte degradation reducing capacity. Testing each cell individually prevents weak cells causing premature battery string failure during power events."
    },
    {
      question: "What are the consequences of UPS failure?",
      answer: "UPS failure during power events causes immediate loss of protected loads. Servers crash losing unsaved data and corrupting databases. Manufacturing processes halt mid-cycle damaging production. Emergency lighting fails. Control systems lose power disrupting building management. Insurance claims fail when maintenance records cannot demonstrate preventative servicing."
    }
  ];

  const stats = [
    { value: "99.9%", label: "Uptime Target" },
    { value: "24/7", label: "Emergency Response" },
    { value: "3-5 Years", label: "Battery Lifecycle" },
    { value: "UK-Wide", label: "Coverage" }
  ];

  const maintenanceComponents = [
    {
      icon: Battery,
      title: "Battery Impedance Tests",
      description: "Impedance testing measures internal resistance of each battery cell, identifying end-of-life cells before they fail. High impedance indicates sulfation, grid corrosion, or electrolyte degradation. Testing entire strings annually prevents weak cells causing premature failure during discharge events requiring emergency power delivery."
    },
    {
      icon: Zap,
      title: "Load Bank Testing",
      description: "Load bank testing applies simulated load to verify UPS delivers rated output for specified runtime. Testing identifies battery capacity loss, inverter faults, and cooling inadequacies that don't appear during normal float charging. Annual testing is essential for mission-critical installations where backup power failure has catastrophic consequences."
    },
    {
      icon: AlertTriangle,
      title: "Bypass Function Tests & Failure Risk",
      description: "Bypass function testing verifies manual bypass operation allowing UPS servicing without load disconnection. Testing automatic bypass transfer during UPS faults ensures loads transfer to mains during internal failures. Failure risk profiling identifies single points of failure and redundancy gaps requiring investment in resilient architectures."
    }
  ];

  return (
    <>
      <Helmet>
        <title>UPS Maintenance | Uninterruptible Power Supply Servicing | Entire FM</title>
        <meta name="description" content="Critical UPS maintenance for data rooms and essential services. Battery impedance testing, load bank testing, bypass function verification, and failure risk profiling." />
      </Helmet>

      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        name="UPS Maintenance"
        description="Critical backup systems for data rooms and essential services requiring battery impedance tests, load bank testing, bypass function verification, and comprehensive failure risk assessment."
        provider="Entire FM"
        areaServed="United Kingdom"
      />
      <FAQSchema faqs={faqs} />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-charcoal/80 to-charcoal z-10" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80')] bg-cover bg-center" />
        
        <div className="container mx-auto px-6 relative z-20 text-white py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Breadcrumb items={breadcrumbItems} className="mb-6" />
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 max-w-4xl">
              UPS (Uninterruptible Power Supply) Maintenance
            </h1>
            <p className="text-xl md:text-2xl font-light max-w-3xl text-gray-200 mb-8">
              Critical backup systems for data rooms and essential services.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-white text-charcoal hover:bg-gray-100" asChild>
                <Link to="/request-proposal">
                  Request a Proposal
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-charcoal" asChild>
                <a href="tel:+448001234567">
                  <Phone className="w-5 h-5 mr-2" />
                  24/7 Helpdesk
                </a>
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
                <div className="text-3xl md:text-4xl font-light mb-2">{stat.value}</div>
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
                  <Zap className="w-8 h-8 text-primary" />
                  <h2 className="text-3xl font-light underline-accent inline-block">
                    Instantaneous Protection for Critical Systems
                  </h2>
                </div>
                <div className="space-y-4 text-muted-foreground font-light leading-relaxed">
                  <p>
                    UPS systems deliver instantaneous backup power during mains failures, protecting data centres, control systems, and medical equipment from power interruptions. Unlike generators requiring startup time, UPS provides continuous power preventing server crashes, data corruption, and control system failures during momentary outages.
                  </p>
                  <p>
                    Battery-based UPS systems degrade silently. Batteries sulfate, capacitors dry out, cooling fans fail, and internal connections corrode. Visual inspections cannot identify capacity loss until batteries fail under load. Only impedance testing of individual cells identifies degradation before emergency discharge.
                  </p>
                </div>
              </section>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <section>
                <h2 className="text-3xl font-light mb-8 underline-accent inline-block">
                  Essential Maintenance Components
                </h2>
                <div className="space-y-6">
                  {maintenanceComponents.map((component, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Card className="p-6 hover:border-primary transition-colors">
                        <div className="flex items-start gap-4">
                          <div className="p-3 bg-primary/10 rounded-lg">
                            <component.icon className={`w-6 h-6 ${component.icon === AlertTriangle ? 'text-destructive' : 'text-primary'}`} />
                          </div>
                          <div>
                            <h3 className="font-medium mb-2 text-lg">{component.title}</h3>
                            <p className="text-muted-foreground font-light">{component.description}</p>
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </section>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <section className="bg-muted/30 p-8 rounded-2xl">
                <h3 className="text-2xl font-light mb-6">Related Services</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { name: "Generator Maintenance", href: "/services/generator-maintenance" },
                    { name: "Load Bank Testing", href: "/services/load-bank-testing" },
                    { name: "Electrical Services", href: "/services/electrical" },
                    { name: "Data Centre Cooling", href: "/services/data-centre-cooling-compliance" }
                  ].map((service, index) => (
                    <Link 
                      key={index}
                      to={service.href} 
                      className="flex items-center gap-2 p-3 bg-background rounded-lg hover:bg-primary/10 transition-colors group"
                    >
                      <ArrowRight className="w-4 h-4 text-primary" />
                      <span className="font-light group-hover:text-primary transition-colors">{service.name}</span>
                    </Link>
                  ))}
                </div>
              </section>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <FAQSection faqs={faqs} />
            </AnimatedSection>

            <CTASection
              title="Protect Critical Systems from Power Interruptions"
              description="Get a fixed-price proposal for comprehensive UPS maintenance including impedance testing and load bank verification."
              primaryLabel="Request a Proposal"
              primaryHref="/request-proposal"
              secondaryLabel="24/7 Helpdesk"
              secondaryHref="tel:+448001234567"
              secondaryIcon={Phone}
              variant="dark"
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

export default UPSMaintenance;