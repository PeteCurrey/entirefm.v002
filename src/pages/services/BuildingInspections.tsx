import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SchemaMarkup, FAQSchema } from "@/components/shared/SchemaMarkup";
import { FAQSection } from "@/components/shared/FAQSection";
import { SidebarCTA } from "@/components/shared/SidebarCTA";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { ArrowRight, ClipboardCheck, Zap, Droplets, Flame, Phone, Shield } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/shared/AnimatedSection";
import CTASection from "@/components/shared/CTASection";

const BuildingInspections = () => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Building Testing & Inspection",
    "provider": {
      "@type": "Organization",
      "name": "EntireFM"
    },
    "description": "Fire, electrical, water hygiene, gas, HVAC, structural checks, surveys."
  };

  const faqs = [
    {
      question: "What building inspections are legally required?",
      answer: "Commercial buildings require electrical EICRs every 5 years, annual gas safety checks, fire alarm testing weekly, emergency lighting monthly, legionella risk assessments every 2 years, and lift examinations every 6 months under various regulations."
    },
    {
      question: "Who can conduct statutory building inspections?",
      answer: "Only qualified and accredited engineers can perform statutory testing. Electrical testing requires NICEIC/NAPIT approval, gas work needs Gas Safe registration, and lift testing requires LOLER competent persons."
    },
    {
      question: "How long do building inspection certificates last?",
      answer: "Validity varies by system: EICRs last 5 years, gas certificates 12 months, fire alarm certificates depend on test type (weekly to annual), emergency lighting certificates follow monthly/annual testing, and legionella assessments are valid for 2 years."
    },
    {
      question: "What happens if inspections find non-compliance?",
      answer: "Inspections may identify dangerous conditions requiring immediate remediation, observations needing attention within timeframes, or advisory recommendations for improvements. Non-compliance creates legal liability and insurance issues."
    }
  ];

  const stats = [
    { value: "5,000+", label: "Inspections Annually" },
    { value: "100%", label: "Certified Engineers" },
    { value: "48hr", label: "Report Turnaround" },
    { value: "UK-Wide", label: "Coverage" }
  ];

  const coreServices = [
    {
      icon: Zap,
      title: "Electrical Testing (EICR)",
      description: "Fixed wire testing every 5 years to BS 7671. Distribution boards, circuits, earthing, and safety devices tested with formal certification.",
      link: "/services/electrical"
    },
    {
      icon: Flame,
      title: "Fire Safety Inspections",
      description: "Fire alarm testing, emergency lighting checks, fire door inspections, and compartmentation surveys to fire safety legislation.",
      link: "/services/fire-safety"
    },
    {
      icon: Droplets,
      title: "Water Hygiene Assessment",
      description: "Legionella risk assessments, temperature monitoring, water sampling, and TMV testing under L8 guidance.",
      link: "/services/water-hygiene"
    },
    {
      icon: Flame,
      title: "Gas Safety Inspections",
      description: "Annual landlord gas certificates, commercial boiler inspections, and pipework testing by Gas Safe engineers.",
      link: "/services/gas-safety"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Building Testing & Inspection Services | Compliance Testing | EntireFM</title>
        <meta name="description" content="Comprehensive building testing and inspection services. Fire, electrical, water, gas, HVAC, and structural compliance testing for commercial properties." />
        <link rel="canonical" href="https://entirefm.com/services/building-inspections" />
      </Helmet>

      <SchemaMarkup schema={serviceSchema} />
      <FAQSchema faqs={faqs} />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-charcoal/80 to-charcoal z-10" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80')] bg-cover bg-center" />
        
        <div className="container mx-auto px-6 relative z-20 text-white py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Breadcrumb items={[
              { label: "Services", href: "/services" },
              { label: "Building Testing & Inspection" }
            ]} className="mb-6" />
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 max-w-4xl">
              Building Testing & Inspection
            </h1>
            <p className="text-xl md:text-2xl font-light max-w-3xl text-gray-200 mb-8">
              Fire, electrical, water hygiene, gas, HVAC, structural checks, surveys.
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
                  <ClipboardCheck className="w-8 h-8 text-primary flex-shrink-0" />
                  <h2 className="text-3xl font-light">
                    Statutory Inspection Overview
                  </h2>
                </div>
                <p className="text-lg font-light leading-relaxed text-muted-foreground">
                  Building owners must conduct regular statutory inspections to verify system safety, identify defects, and maintain compliance certificates. These inspections are legally mandated under various regulations, with building owners facing prosecution for non-compliance.
                </p>
              </section>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <section>
                <h2 className="text-3xl font-light mb-8 underline-accent inline-block">
                  Core Inspection Services
                </h2>
                <div className="grid gap-6">
                  {coreServices.map((service, index) => (
                    <Link key={index} to={service.link}>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Card className="p-6 hover:border-primary transition-all hover:shadow-lg group">
                          <div className="flex items-start gap-4">
                            <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                              <service.icon className="w-6 h-6 text-primary" />
                            </div>
                            <div className="flex-1">
                              <h3 className="font-medium mb-2 text-lg group-hover:text-primary transition-colors">
                                {service.title}
                              </h3>
                              <p className="text-muted-foreground font-light">{service.description}</p>
                            </div>
                            <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                          </div>
                        </Card>
                      </motion.div>
                    </Link>
                  ))}
                </div>
              </section>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <section className="bg-muted/30 p-8 rounded-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <Shield className="w-8 h-8 text-primary" />
                  <h2 className="text-3xl font-light">
                    Why Compliance Matters
                  </h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { title: "Legal Protection", desc: "Avoid prosecution and unlimited fines for non-compliance" },
                    { title: "Insurance Validity", desc: "Maintain policy coverage with documented maintenance" },
                    { title: "Occupant Safety", desc: "Protect building users from system failures" },
                    { title: "Asset Protection", desc: "Prevent costly damage from undetected defects" }
                  ].map((item, index) => (
                    <div key={index} className="border-l-4 border-primary pl-6">
                      <h3 className="font-medium mb-2">{item.title}</h3>
                      <p className="text-sm font-light text-muted-foreground">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </section>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <FAQSection faqs={faqs} />
            </AnimatedSection>

            <CTASection
              title="Discuss Inspection Requirements"
              description="Talk to our team about building testing and compliance inspections."
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

export default BuildingInspections;