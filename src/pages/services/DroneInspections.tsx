import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SchemaMarkup, FAQSchema } from "@/components/shared/SchemaMarkup";
import { FAQSection } from "@/components/shared/FAQSection";
import { SidebarCTA } from "@/components/shared/SidebarCTA";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { ArrowRight, Camera, Thermometer, Building2, Phone, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/shared/AnimatedSection";
import CTASection from "@/components/shared/CTASection";

const DroneInspections = () => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Drone Building Inspections",
    "provider": {
      "@type": "Organization",
      "name": "EntireFM"
    },
    "description": "Roof inspections, façade surveys, high-rise inaccessible areas using drone technology."
  };

  const faqs = [
    {
      question: "What can drone inspections detect?",
      answer: "Drones identify roof damage, membrane deterioration, gutter blockages, façade cracks, render defects, window seal failures, and structural issues on high-rise buildings without requiring scaffolding or rope access."
    },
    {
      question: "Are drone inspections legally compliant for building surveys?",
      answer: "Yes. Drone surveys provide photographic and thermal imaging evidence accepted by insurers, building control, and surveyors. CAA-licensed pilots ensure legal compliance with aviation regulations."
    },
    {
      question: "How much do drone inspections cost compared to traditional access?",
      answer: "Drone surveys typically cost 60-80% less than scaffolding or rope access for equivalent coverage. No access equipment hire, reduced time on site, and immediate reporting deliver significant savings."
    },
    {
      question: "What weather conditions prevent drone inspections?",
      answer: "Strong winds above 25mph, heavy rain, and poor visibility prevent safe drone operations. We reschedule inspections when conditions don't meet CAA safety requirements."
    }
  ];

  const stats = [
    { value: "60-80%", label: "Cost Savings" },
    { value: "CAA", label: "Licensed Pilots" },
    { value: "Same Day", label: "Reporting" },
    { value: "4K+", label: "Image Quality" }
  ];

  const capabilities = [
    {
      icon: Building2,
      title: "Roof Inspections",
      description: "Membrane condition, ponding water, drainage blockages, and structural damage on flat and pitched roofs."
    },
    {
      icon: Camera,
      title: "Façade Surveys",
      description: "Cladding defects, render cracks, window seal failures, and masonry deterioration on high-rise buildings."
    },
    {
      icon: Thermometer,
      title: "Thermal Imaging",
      description: "Heat loss detection, insulation defects, water ingress, and electrical hotspots through infrared analysis."
    }
  ];

  const benefits = [
    "No scaffolding or access equipment required",
    "Minimal disruption to building occupants",
    "High-resolution photographic evidence",
    "Thermal imaging for hidden defects",
    "Immediate digital reporting",
    "Insurance and surveyor accepted",
    "CAA compliant operations",
    "Cost-effective for large buildings"
  ];

  return (
    <>
      <Helmet>
        <title>Drone Building Inspections | Roof & Façade Surveys | EntireFM</title>
        <meta name="description" content="Drone building inspection services for roofs, façades, and high-rise buildings. Safe, cost-effective surveys of inaccessible areas without scaffolding." />
        <link rel="canonical" href="https://entirefm.com/services/drone-inspections" />
      </Helmet>

      <SchemaMarkup schema={serviceSchema} />
      <FAQSchema faqs={faqs} />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal/90 via-primary/50 to-charcoal z-10" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80')] bg-cover bg-center" />
        
        <div className="container mx-auto px-6 relative z-20 text-white py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Breadcrumb items={[
              { label: "Services", href: "/services" },
              { label: "Drone Inspections" }
            ]} className="mb-6" />
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 max-w-4xl">
              Drone Building Inspections
            </h1>
            <p className="text-xl md:text-2xl font-light max-w-3xl text-gray-200 mb-8">
              Roof inspections, façade surveys, high-rise inaccessible areas — without scaffolding.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-white text-charcoal hover:bg-gray-100" asChild>
                <Link to="/request-proposal">
                  Request Proposal
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-charcoal" asChild>
                <Link to="/contact">Contact Us</Link>
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
              <section className="bg-gradient-to-br from-primary/10 to-transparent p-8 rounded-2xl border border-primary/20">
                <div className="flex items-start gap-4 mb-4">
                  <Camera className="w-8 h-8 text-primary flex-shrink-0" />
                  <h2 className="text-3xl font-light">
                    Drone Survey Capabilities
                  </h2>
                </div>
                <p className="text-lg font-light leading-relaxed text-muted-foreground">
                  Drone technology enables safe, cost-effective inspections of building areas previously requiring scaffolding, cherry pickers, or rope access. High-resolution photography and thermal imaging detect defects invisible from ground level.
                </p>
              </section>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <section>
                <h2 className="text-3xl font-light mb-8 underline-accent inline-block">
                  Applications
                </h2>
                <div className="grid gap-6">
                  {capabilities.map((capability, index) => (
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
                            <capability.icon className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-medium mb-2 text-lg">{capability.title}</h3>
                            <p className="text-muted-foreground font-light">{capability.description}</p>
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </section>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Why Choose Drone Inspections?
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <motion.div 
                      key={index}
                      className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="font-light">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </section>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <FAQSection faqs={faqs} />
            </AnimatedSection>

            <CTASection
              title="Discuss Drone Survey Requirements"
              description="Talk to our team about drone inspection services for your property."
              primaryLabel="Request Proposal"
              primaryHref="/request-proposal"
              secondaryLabel="Contact Us"
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

export default DroneInspections;