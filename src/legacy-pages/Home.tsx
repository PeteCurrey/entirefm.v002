"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, Shield, Smartphone } from "lucide-react";
import { motion } from "framer-motion";
import ServiceCard from "@/components/shared/ServiceCard";
import SectorCard from "@/components/shared/SectorCard";
import MetricCard from "@/components/shared/MetricCard";
import CaseStudyCard from "@/components/shared/CaseStudyCard";
import { VideoHero } from "@/components/shared/VideoHero";
import heroImage from "@/assets/hero-london.jpg";
import industrialImage from "@/assets/industrial-facility.jpg";
import officeImage from "@/assets/office-interior.jpg";
import { fadeInUp, staggerContainer } from "@/utils/animations";
import SEOHead from "@/components/shared/SEOHead";

const Home = () => {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) setGreeting("Good Morning");
    else if (hour >= 12 && hour < 17) setGreeting("Good Afternoon");
    else setGreeting("Good Evening");
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <SEOHead
        title="Leading Facilities Management Company UK"
        description="EntireFM provides nationwide Facilities Management services. From Hard FM and Cleaning to Security and Compliance. Rated #1 for customer service."
      />
      {/* Hero Section */}
      <VideoHero
        videoSrc="/videos/hero-video.mp4"
        posterImage="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2070&auto=format&fit=crop"
      >
        <motion.div
          className="max-w-4xl relative z-10"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp}>
            {greeting && (
              <span className="text-primary font-medium mb-4 block animate-fade-in uppercase tracking-[0.3em] text-[10px]">
                {greeting}
              </span>
            )}
            <h1 className="text-white mb-6 leading-tight font-extralight md:text-6xl text-4xl tracking-tighter">
              Facilities Management & <br />
              <span className="font-light text-white/90">FM Support Services</span>
            </h1>
          </motion.div>

          <motion.p
            variants={fadeInUp}
            className="text-white/70 mb-10 leading-relaxed max-w-2xl font-light md:text-lg text-left tracking-wide"
          >
            EntireFM is your dedicated partner for nationwide facilities management and compliance.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-white rounded-none px-8 font-light tracking-wide shadow-xl shadow-primary/20">
              <Link href="/contact">Request a Proposal</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-white/5 backdrop-blur-md text-white border-white/20 hover:bg-white hover:text-slate-950 rounded-none px-8 font-light tracking-wide transition-all" asChild>
              <Link href="/case-studies">View Case Studies</Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* Metrics Dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl"
        >
          <MetricCard value="41" label="Avg response time (mins)" className="border-white/5" />
          <MetricCard value="87" label="First-time fix rate" suffix="%" className="border-white/5" />
          <MetricCard value="120" label="Sites under management" suffix="+" className="border-white/5" />
          <MetricCard value="98" label="SLA compliance" suffix="%" className="border-white/5" />
        </motion.div>
      </VideoHero>

      {/* Trust Strip */}
      <section className="py-12 bg-muted/30 border-b border-border/50">
        <div className="container mx-auto px-6">
          <p className="text-center text-sm text-muted-foreground mb-8 font-light uppercase tracking-widest">
            Trusted by operations teams across the UK
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {["Logistics Group", "Retail Chain", "Aviation Hub", "Property Fund", "Industrial Estate"].map((client, i) => (
              <motion.div
                key={client}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-lg font-light text-muted-foreground hover:text-primary transition-colors cursor-default"
              >
                {client}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FM Partner Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="py-24 bg-background"
      >
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl mb-6 underline-accent inline-block font-extralight tracking-tight">
              Your Space, Our Expertise.
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground leading-relaxed text-xl font-light">
              Complete Facilities Management & FM Support Services designed for the modern built environment.
            </motion.p>
          </div>

          <motion.div variants={staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[{
              icon: CheckCircle2,
              title: "No more chasing contractors",
              description: "Dedicated helpdesk and single point of contact. We own the problem until it's solved."
            }, {
              icon: Shield,
              title: "Compliance without the chaos",
              description: "PPM schedules, digital asset registers, and clear audit trails. Everything documented."
            }, {
              icon: Smartphone,
              title: "Tech-enabled, not tech-distracted",
              description: "CAFM platform, live portals, and real-time job tracking without the complexity."
            }, {
              icon: Clock,
              title: "Owner-led, no corporate scripts",
              description: "Direct access to decision makers. Quick responses. Real accountability."
            }].map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center group p-4 rounded-xl hover:bg-muted/30 transition-colors duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/5 text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-lg group-hover:scale-110">
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-medium mb-3">{feature.title}</h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Service Matrix */}
      <section className="py-24 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center fixed-bg"
          style={{ backgroundImage: 'url(/images/what-we-deliver-bg.jpg)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/95 via-charcoal/85 to-charcoal/90 backdrop-blur-[2px]" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="container mx-auto px-6 relative z-10"
        >
          <div className="mb-16">
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-light mb-6 underline-accent inline-block text-white">
              What We Deliver
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-gray-300 font-light max-w-2xl leading-relaxed">
              Integrated FM combining hard, soft and project services under one contract. Or standalone services tailored to your needs.
            </motion.p>
          </div>

          <motion.div variants={staggerContainer} className="grid md:grid-cols-2 gap-6">
            <ServiceCard title="Hard Services & M&E" description="Mechanical, electrical, and building fabric maintenance" items={["HVAC, electrical, mechanical systems", "Plumbing, gas, and drainage", "Emergency systems and lighting", "Energy optimisation and BMS"]} />
            <ServiceCard title="Compliance & Life Safety" description="Statutory compliance and risk management" items={["Fire alarms, emergency lighting, extinguishers", "FRA actions and remediation", "Gas safety, water hygiene, LOLER", "Complete audit trails"]} />
            <ServiceCard title="Soft Services & Workplace" description="Day-to-day operations and environment management" items={["Commercial cleaning and washrooms", "Grounds maintenance and waste", "Reception and concierge services", "Security coordination"]} />
            <ServiceCard title="Projects & Small Works" description="From minor works to complete fit-outs" items={["Office and retail fit-outs", "Building refurbishments", "Service station upgrades", "Landlord make-good works"]} />
          </motion.div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-primary/25 transition-all duration-300" asChild>
              <Link href="/services">
                Explore All Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Sectors Grid */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
        className="py-24 bg-background"
      >
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-light mb-6 underline-accent inline-block">
              Where We Operate
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-muted-foreground font-light max-w-2xl leading-relaxed">
              Sector-specific understanding across diverse environments.
            </motion.p>
          </div>

          <motion.div variants={staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 h-auto">
            <SectorCard title="Offices & Corporate" description="Grade A to multi-let schemes. Workplace services that support productivity." image={officeImage} link="/sectors/offices" />
            <SectorCard title="Industrial & Logistics" description="24/7 operations. Critical infrastructure. Minimal disruption to workflow." image={industrialImage} link="/sectors/industrial-logistics" />
            <SectorCard title="Retail & Service Stations" description="Customer-facing environments. Out-of-hours works. Brand standards maintained." image={officeImage} link="/sectors/retail-hospitality" />
            <SectorCard title="Aviation & Transport" description="Regulated environments. Security clearances. Complex operational interfaces." image={industrialImage} link="/sectors/healthcare-public" />
            <SectorCard title="Residential & PBSA" description="Resident satisfaction. Common areas. Estate management." image={officeImage} link="/sectors/pbsa" />
            <SectorCard title="Construction & Developments" description="Site progression support. Handover coordination. Defects management." image={industrialImage} link="/sectors" />
          </motion.div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" asChild className="hover-lift">
              <Link href="/sectors">
                View All Sectors
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </motion.section>

      {/* Case Studies Preview */}
      <section className="py-24 bg-charcoal text-white relative overflow-hidden">
        {/* Abstract Pattern */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 transform origin-top-right" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="container mx-auto px-6 relative z-10"
        >
          <div className="mb-16">
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-light mb-6 underline-accent inline-block">
              Proof in Action
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-gray-400 font-light max-w-2xl leading-relaxed">
              Real results for real clients. Performance you can measure.
            </motion.p>
          </div>

          <motion.div variants={staggerContainer} className="grid md:grid-cols-3 gap-6">
            <CaseStudyCard sector="Logistics" title="Reducing reactive call-outs by 32% for regional logistics hub" metrics={["Response time cut from 2hrs to 41 mins", "£47k annual cost savings", "98% SLA compliance achieved"]} />
            <CaseStudyCard sector="Aviation" title="Delivering compliant FM across 3 UK airports" metrics={["Zero compliance breaches in 18 months", "24/7 helpdesk response maintained", "Security-cleared engineer network"]} />
            <CaseStudyCard sector="Mixed-Use" title="Integrated FM for 12-building commercial estate" metrics={["Single point of contact for all trades", "Tenant satisfaction up 34%", "Digital asset register deployed"]} />
          </motion.div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-charcoal hover-lift" asChild>
              <Link href="/case-studies">
                View All Case Studies
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-r from-secondary to-secondary/80 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="container mx-auto px-6 text-center relative z-10"
        >
          <h2 className="text-4xl md:text-5xl font-light mb-6">
            Ready to fix your facilities management problem?
          </h2>
          <p className="text-xl text-gray-200 mb-10 font-light max-w-2xl mx-auto leading-relaxed">
            Send us your current issues and incumbent contract details – we'll give you a clear, no-nonsense action plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-secondary hover:bg-gray-100 shadow-xl" asChild>
              <Link href="/contact">Request a Proposal</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-secondary" asChild>
              <a href="tel:08001234567">Call 24/7 Helpdesk</a>
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;