import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, AlertTriangle, CheckCircle2, Phone, Truck, Settings } from "lucide-react";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { ServiceSchema, FAQSchema } from "@/components/shared/SchemaMarkup";
import { FAQSection } from "@/components/shared/FAQSection";
import { SidebarCTA } from "@/components/shared/SidebarCTA";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/shared/AnimatedSection";
import CTASection from "@/components/shared/CTASection";

const DockLevellerMaintenance = () => {
  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Dock Leveller Maintenance" }
  ];

  const faqs = [
    {
      question: "What are dock levellers and why are they critical?",
      answer: "Dock levellers are adjustable platforms bridging warehouse loading bays to vehicle trailer beds, enabling safe forklift access for loading/unloading. Failures cause operational shutdowns preventing goods movement, create fall hazards from unsecured platforms, and generate crushing risks from unexpected platform movement under load."
    },
    {
      question: "What regulations govern dock leveller maintenance?",
      answer: "LOLER (Lifting Operations and Lifting Equipment Regulations) requires six-monthly thorough examinations by competent persons. PUWER (Provision and Use of Work Equipment Regulations) mandates maintenance ensuring equipment remains safe. Failures to maintain dock levellers create criminal liability for duty holders under Health & Safety at Work Act."
    },
    {
      question: "What are common dock leveller failure modes?",
      answer: "Hydraulic seal leaks cause platform sagging under load. Lip extension mechanisms seize preventing trailer bed contact. Control valve failures cause uncontrolled platform descent. Safety interlocks fail allowing forklift access to unsecured platforms. Worn hinges and pivots create side-to-side platform movement generating instability."
    },
    {
      question: "How often should dock levellers be serviced?",
      answer: "Six-monthly LOLER examinations are mandatory. Quarterly preventative maintenance includes hydraulic system checks, lip extension testing, safety interlock verification, and structural inspection. High-volume facilities require monthly inspections due to accelerated wear from continuous operation under heavy loads."
    }
  ];

  const stats = [
    { value: "LOLER", label: "Compliant" },
    { value: "6-Monthly", label: "Examinations" },
    { value: "24/7", label: "Emergency Response" },
    { value: "UK-Wide", label: "Coverage" }
  ];

  const maintenanceItems = [
    {
      icon: CheckCircle2,
      title: "Hydraulic Checks & Safety Interlocks",
      description: "Hydraulic system inspection identifies seal leaks, contaminated fluid, and pressure loss causing platform sagging. Safety interlock testing verifies platforms cannot descend with forklifts present. Velocity fuses prevent uncontrolled descent during hydraulic failures. Emergency lowering systems require functional testing for trapped load recovery."
    },
    {
      icon: Settings,
      title: "Lip Extension Testing",
      description: "Lip extension mechanisms must deploy reliably to contact trailer beds. Seized mechanisms prevent secure platform-to-trailer connection creating dangerous gaps. Spring tension verification ensures lips remain in contact during loading. Worn pivot bushings create lateral movement generating instability under forklift traffic."
    },
    {
      icon: AlertTriangle,
      title: "Control Panel Integrity",
      description: "Control panels must prevent unauthorized operation and weatherproof critical electrical components. Emergency stop functions require testing to verify instant platform arrest. Control voltage verification ensures operation under all conditions. Damaged cables and connectors cause intermittent failures during critical loading operations."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Dock Leveller Servicing | LOLER & PUWER Compliance | Entire FM</title>
        <meta name="description" content="LOLER-compliant dock leveller maintenance for warehouse loading bays. Hydraulic checks, safety interlocks, lip extension testing, and control panel integrity verification." />
      </Helmet>

      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        name="Dock Leveller Servicing"
        description="LOLER & PUWER-aligned maintenance for warehouse loading docks including hydraulic checks, safety interlocks, lip extension testing, and control panel integrity."
        provider="Entire FM"
        areaServed="United Kingdom"
      />
      <FAQSchema faqs={faqs} />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-charcoal/80 to-charcoal z-10" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80')] bg-cover bg-center" />
        
        <div className="container mx-auto px-6 relative z-20 text-white py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Breadcrumb items={breadcrumbItems} className="mb-6" />
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 max-w-4xl">
              Dock Leveller Servicing
            </h1>
            <p className="text-xl md:text-2xl font-light max-w-3xl text-gray-200 mb-8">
              LOLER & PUWER-aligned maintenance for warehouse loading docks.
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
                  <Truck className="w-8 h-8 text-primary" />
                  <h2 className="text-3xl font-light underline-accent inline-block">
                    Critical Infrastructure for Goods Movement
                  </h2>
                </div>
                <div className="space-y-4 text-muted-foreground font-light leading-relaxed">
                  <p>
                    Dock levellers enable forklift trucks to traverse height differences between loading bays and vehicle trailer beds. Without functional levellers, goods cannot be loaded or unloaded, halting logistics operations entirely. Platform failures during loading create fall hazards, crushing risks from unexpected descent, and collision risks between forklifts and trailers.
                  </p>
                  <p>
                    LOLER requires six-monthly thorough examinations by competent persons. PUWER mandates maintenance ensuring equipment remains safe for continued use. Dock levellers operate under extreme conditions: continuous heavy loads, exposure to weather, hydraulic system stress, and mechanical wear from repeated lip extension cycles.
                  </p>
                </div>
              </section>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <section>
                <h2 className="text-3xl font-light mb-8 underline-accent inline-block">
                  Maintenance & Compliance Requirements
                </h2>
                <div className="space-y-6">
                  {maintenanceItems.map((item, index) => (
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
                            <item.icon className={`w-6 h-6 ${item.icon === AlertTriangle ? 'text-destructive' : 'text-primary'}`} />
                          </div>
                          <div>
                            <h3 className="font-medium mb-2 text-lg">{item.title}</h3>
                            <p className="text-muted-foreground font-light">{item.description}</p>
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
                    { name: "Roller Shutter Maintenance", href: "/services/roller-shutter-maintenance" },
                    { name: "Lifting Equipment Testing", href: "/services/lifting-equipment" },
                    { name: "Loading Bay Fume Extraction", href: "/services/loading-bay-fume-extraction" },
                    { name: "Health & Safety Management", href: "/health-safety" }
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
              title="Maintain Safe and Compliant Loading Operations"
              description="Get a fixed-price proposal for LOLER-compliant dock leveller maintenance with thorough examination certification."
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

export default DockLevellerMaintenance;