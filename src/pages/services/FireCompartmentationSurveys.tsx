import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, AlertTriangle, CheckCircle2, Phone, Camera, Thermometer } from "lucide-react";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { ServiceSchema, FAQSchema } from "@/components/shared/SchemaMarkup";
import { FAQSection } from "@/components/shared/FAQSection";
import { SidebarCTA } from "@/components/shared/SidebarCTA";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/shared/AnimatedSection";
import CTASection from "@/components/shared/CTASection";

const FireCompartmentationSurveys = () => {
  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Fire Compartmentation Surveys" }
  ];

  const faqs = [
    {
      question: "What is fire compartmentation?",
      answer: "Fire compartmentation divides buildings into fire-resistant sections using walls, floors, and fire-stopping materials. This prevents fire and smoke spread, containing incidents to single compartments and protecting escape routes. Breaches in compartmentation allow rapid fire spread, defeating passive fire protection strategies."
    },
    {
      question: "Why are compartmentation surveys necessary?",
      answer: "Building alterations, service installations, and deterioration create breaches in fire compartmentation. Surveys identify gaps around pipes, cables, and ducts where fire-stopping has failed or been omitted. The Fire Safety Act places increased responsibility on building owners to demonstrate effective compartmentation."
    },
    {
      question: "What do compartmentation surveys assess?",
      answer: "Surveys examine fire doors, cavity barriers, penetration seals, fire-stopping materials, structural gaps, and service risers. Surveyors use thermal imaging, smoke testing, and intrusive investigation to identify hidden breaches. Reports provide photographic evidence, risk ratings, and costed remediation schedules."
    },
    {
      question: "How often should compartmentation be surveyed?",
      answer: "Survey frequency depends on building risk, occupancy type, and alteration frequency. High-rise residential buildings typically require surveys every 3-5 years. Buildings undergoing refurbishment need pre and post-works surveys to verify fire-stopping integrity. Post-fire surveys identify compromised compartmentation requiring reinstatement."
    }
  ];

  const stats = [
    { value: "Fire Safety Act", label: "Compliant" },
    { value: "Thermal", label: "Imaging Used" },
    { value: "100%", label: "Photo Evidence" },
    { value: "Costed", label: "Remediation" }
  ];

  const methodologies = [
    {
      icon: CheckCircle2,
      title: "Penetration Sealing Assessment",
      description: "Visual inspection of service penetrations through fire-rated walls and floors. Assessment of fire-stopping materials, installation quality, and certification compliance. Identification of unsealed penetrations requiring immediate remediation."
    },
    {
      icon: Thermometer,
      title: "Thermal Imaging & Smoke Testing",
      description: "Thermal imaging cameras identify hidden voids and air leakage paths indicating compartmentation breaches. Smoke pencil testing verifies seal integrity around doors and penetrations. Intrusive investigation exposes concealed defects behind finishes."
    },
    {
      icon: AlertTriangle,
      title: "Regulatory Drivers (Fire Safety Act)",
      description: "The Fire Safety Act 2021 requires building owners to provide evidence of effective compartmentation. Failure to demonstrate compliance results in enforcement notices, prohibition orders, and criminal liability. Surveys provide the documentation necessary for regulatory defense."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Fire Compartmentation Surveys | Breach Detection & Risk Reports | Entire FM</title>
        <meta name="description" content="Specialist fire compartmentation surveys identifying breaches in fire separation. Thermal imaging, penetration sealing assessment, and actionable risk reports for Fire Safety Act compliance." />
      </Helmet>

      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        name="Fire Compartmentation Surveys"
        description="Identifying breaches in fire separation and delivering actionable risk reports using thermal imaging, smoke testing, and intrusive investigation techniques."
        provider="Entire FM"
        areaServed="United Kingdom"
      />
      <FAQSchema faqs={faqs} />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-charcoal/80 to-charcoal z-10" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80')] bg-cover bg-center" />
        
        <div className="container mx-auto px-6 relative z-20 text-white py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Breadcrumb items={breadcrumbItems} className="mb-6" />
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 max-w-4xl">
              Fire Compartmentation Surveys
            </h1>
            <p className="text-xl md:text-2xl font-light max-w-3xl text-gray-200 mb-8">
              Identifying breaches in fire separation and delivering actionable risk reports.
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
                  <Shield className="w-8 h-8 text-primary" />
                  <h2 className="text-3xl font-light underline-accent inline-block">
                    The Critical Role of Compartmentation
                  </h2>
                </div>
                <div className="space-y-4 text-muted-foreground font-light leading-relaxed">
                  <p>
                    Fire compartmentation prevents fire and smoke spreading beyond the compartment of origin, protecting escape routes and limiting property damage. Breaches in compartmentation—gaps around pipes, unsealed cable trays, missing cavity barriers—allow rapid fire spread through hidden voids, defeating passive fire protection and endangering occupants.
                  </p>
                  <p>
                    The Fire Safety Act 2021 strengthens requirements for building owners to demonstrate effective compartmentation. Surveys identify defects created by alterations, service installations, and material deterioration. Without regular assessment, breaches accumulate undetected, creating catastrophic fire spread risk during incidents.
                  </p>
                </div>
              </section>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <section>
                <h2 className="text-3xl font-light mb-8 underline-accent inline-block">
                  Survey Methodology & Tools
                </h2>
                <div className="space-y-4">
                  {methodologies.map((item, index) => (
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
                    { name: "Fire Safety Services", href: "/services/fire-safety" },
                    { name: "Fire Alarm Systems", href: "/services/fire-alarms" },
                    { name: "Emergency Lighting", href: "/services/emergency-lighting" },
                    { name: "Statutory Maintenance Guide", href: "/fm-insights/what-is-statutory-maintenance" }
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
              title="Identify Compartmentation Breaches Before They Spread Fire"
              description="Get a fixed-price proposal for comprehensive compartmentation surveys with photographic evidence and remediation schedules."
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

export default FireCompartmentationSurveys;