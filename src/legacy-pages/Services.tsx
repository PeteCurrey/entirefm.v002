"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { EnhancedGlobalSearch } from "@/components/shared/EnhancedGlobalSearch";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import SEOHead from "@/components/shared/SEOHead";

const Services = () => {
  const [activeTab, setActiveTab] = useState("hard-services");
  const heroRef = useRef<HTMLElement>(null);
 
  // Parallax effect for hero section
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.6]);
  const blur = useTransform(scrollYProgress, [0, 1], [0, 8]);

  const services = {
    "hard-services": {
      title: "Hard Services & Technical FM",
      description: "Expert maintenance for your building's critical infrastructure and mechanical systems.",
      subServices: ["Planned Preventative Maintenance (PPM)", "HVAC & Air Conditioning", "Electrical Services", "Mechanical & Engineering (M&E)", "Building Fabric Maintenance"],
      included: "Dedicated account management, technical audits, and asset lifecycle tracking.",
      benefits: "Extended asset life, reduced energy consumption, and minimised reactive costs.",
      sla: "4-hour response for critical faults, 24-hour for standard repairs."
    },
    "compliance": {
      title: "Statutory Compliance & Testing",
      description: "Total peace of mind with fully managed compliance and health & safety testing.",
      subServices: ["Fire Alarm Testing", "EICR & Fixed Wire Testing", "Legionella Risk Assessments", "Emergency Lighting Certification", "Gas Safety Inspections (CP42)"],
      included: "Digital compliance dashboard, remedial work tracking, and certification storage.",
      benefits: "Legal compliance, risk mitigation, and insurance requirement satisfaction.",
      sla: "Certification provided within 48 hours of inspection."
    },
    "soft-services": {
      title: "Soft Services & Site Support",
      description: "High-quality site support services that enhance the occupant experience.",
      subServices: ["Commercial Cleaning", "Security & CCTV", "Grounds Maintenance", "Waste Management", "Pest Control"],
      included: "Uniformed staff, eco-friendly products, and regular quality audits.",
      benefits: "Improved site aesthetics, safe working environment, and tenant satisfaction.",
      sla: "Immediate response to spills and urgent cleaning requirements."
    },
    "projects": {
      title: "Project Management & Refurbishment",
      description: "End-to-end delivery of specialist building projects and technical upgrades.",
      subServices: ["Office Fit-outs", "System Replacements", "Energy Efficiency Upgrades", "Dilapidation Works", "Asset Renewals"],
      included: "Principal contractor duties, CDM compliance, and transparent cost reporting.",
      benefits: "On-time delivery, value engineering, and minimal operational disruption.",
      sla: "Project timeline and milestone guarantees provided at kickoff."
    },
    "emergency": {
      title: "24/7 Emergency Response",
      description: "Rapid attendance for critical building failures and emergency repairs.",
      subServices: ["Electrical Emergencies", "Plumbing & Leak Response", "HVAC Failure", "Fire Alarm Faults", "Security Breaches"],
      included: "24/7 manned helpdesk and national network of mobile engineers.",
      benefits: "Mitigation of damage, business continuity, and safety assurance.",
      sla: "2-hour emergency attendance, 4-hour urgent attendance."
    }
  };

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services" },
  ];

  return (
    <div className="min-h-screen pt-20">
      <SEOHead
        title="Facilities Management Services | EntireFM"
        description="Comprehensive facilities management services including hard services, compliance, soft services, projects and emergency response."
        canonicalUrl="https://entirefm.com/services"
      />

      <Breadcrumb items={breadcrumbItems} />

      {/* Hero */}
      <section ref={heroRef} className="relative py-24 bg-gradient-to-b from-muted/50 to-background overflow-hidden">
        {/* Background Image with Parallax */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/images/hero-tfm.png)',
            y,
            opacity,
            filter: blur.get() !== undefined ? `blur(${blur.get()}px)` : 'none'
          } as any}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
              className="text-5xl md:text-6xl font-light mb-6 text-white"
            >
              Integrated facilities management – built around your sites.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
              className="text-xl text-gray-200 font-light leading-relaxed mb-8"
            >
              Single-provider FM with the option of standalone services. Hard, soft, compliance, and projects – all coordinated under one accountable partner.
            </motion.p>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
              className="flex justify-center"
            >
              <div className="w-full max-w-2xl">
                <EnhancedGlobalSearch />
              </div>
            </motion.div>
          </div>

          {/* Animated Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-6 h-10 border-2 border-white/60 rounded-full flex items-start justify-center p-2 cursor-pointer hover:border-white/80 transition-colors"
              onClick={() => window.scrollTo({ top: window.innerHeight * 0.7, behavior: 'smooth' })}
            >
              <motion.div
                className="w-1 h-3 bg-white/70 rounded-full"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Service Tabs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-12">
              <TabsTrigger value="hard-services">Hard Services</TabsTrigger>
              <TabsTrigger value="compliance">Compliance</TabsTrigger>
              <TabsTrigger value="soft-services">Soft Services</TabsTrigger>
              <TabsTrigger value="projects">Projects</TabsTrigger>
              <TabsTrigger value="emergency">Emergency</TabsTrigger>
            </TabsList>

            {Object.entries(services).map(([key, service]) => (
              <TabsContent key={key} value={key} className="space-y-8">
                <div>
                  <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                    {service.title}
                  </h2>
                  <p className="text-lg text-muted-foreground font-light leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-light mb-4">Sub-services</h3>
                    <ul className="space-y-3">
                      {service.subServices.map((item, index) => (
                        <li key={index} className="flex items-start text-sm font-light">
                          <span className="text-primary mr-2 mt-1">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-light mb-3">What's Included</h3>
                      <p className="text-sm text-muted-foreground font-light leading-relaxed">
                        {service.included}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-light mb-3">Benefits</h3>
                      <p className="text-sm text-muted-foreground font-light leading-relaxed">
                        {service.benefits}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-light mb-3">SLA Expectations</h3>
                      <p className="text-sm text-muted-foreground font-light leading-relaxed">
                        {service.sla}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-6">
                  <Button asChild>
                    <Link href="/contact">
                      Add this to your proposal
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Deep-Dive Service Pages */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-light mb-6 text-center underline-accent inline-block">
            Explore Services in Detail
          </h2>
          <p className="text-lg text-muted-foreground font-light text-center max-w-3xl mx-auto mb-12">
            Get comprehensive information about each service including compliance requirements, delivery models, and pricing structures.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Hard Services & M&E", link: "/services/hard-services" },
              { title: "HVAC Maintenance", link: "/services/hvac" },
              { title: "Electrical Compliance", link: "/services/electrical" },
              { title: "Fire Alarm Systems", link: "/services/fire-alarms" },
              { title: "Emergency Lighting", link: "/services/emergency-lighting" },
              { title: "PPM Programs", link: "/services/ppm" },
              { title: "Water Hygiene & L8", link: "/services/water-hygiene" },
              { title: "Gas Safety", link: "/services/gas-safety" },
              { title: "Building Fabric", link: "/services/building-fabric" }
            ].map((service, index) => (
              <Link
                key={index}
                href={service.link}
                className="p-6 border border-border rounded-lg hover:border-accent transition-colors group"
              >
                <h3 className="text-lg font-medium mb-2 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground font-light">
                  View detailed service information →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6">
            Need a custom service mix?
          </h2>
          <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto mb-8">
            We can tailor our services to match your exact requirements and budget.
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">Discuss Your Requirements</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;
