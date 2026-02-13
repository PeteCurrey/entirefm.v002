import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Clock, Shield, Smartphone } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ServiceCard from "@/components/shared/ServiceCard";
import SectorCard from "@/components/shared/SectorCard";
import MetricCard from "@/components/shared/MetricCard";
import CaseStudyCard from "@/components/shared/CaseStudyCard";
import { VideoHero } from "@/components/shared/VideoHero";
import { ClientLogosSection } from "@/components/home/ClientLogosSection";
import heroImage from "@/assets/hero-london.jpg";
import industrialImage from "@/assets/industrial-facility.jpg";
import officeImage from "@/assets/office-interior.jpg";

// Animation variants for reusable motion patterns
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const }
  }
};

const getTimeGreeting = () => {
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 12) return "Good Morning";
  if (hour >= 12 && hour < 17) return "Good Afternoon";
  if (hour >= 17 && hour < 21) return "Good Evening";
  return "Good Evening";
};

const Home = () => {
  const greeting = getTimeGreeting();
  
  // Parallax effect for Proof in Action section
  const proofSectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: proofSectionRef,
    offset: ["start end", "end start"]
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <VideoHero 
        videoSrc="/videos/hero-video.mp4" 
        posterImage="/images/hero-background.jpg"
      >
        <motion.div 
          className="max-w-4xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <motion.p
            initial={{ opacity: 0, x: -20, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ 
              delay: 0.3, 
              duration: 0.7, 
              ease: [0.25, 0.1, 0.25, 1]
            }}
            className="text-primary mb-4 font-extralight tracking-wider md:text-lg text-base"
          >
            {greeting}
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8, ease: "easeOut" }}
            className="text-white mb-6 leading-tight font-extralight md:text-4xl text-3xl"
          >
            Facilities Management &amp; FM Support Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8, ease: "easeOut" }}
            className="text-gray-200 mb-8 leading-relaxed max-w-2xl font-extralight md:text-xl text-left tracking-wider text-lg"
          >
            EntireFM. Your Dedicated Facilities Management Company
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button size="lg" asChild className="hover-scale">
              <Link to="/contact">Request a Proposal</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-white hover:bg-white hover:text-charcoal hover-scale" asChild>
              <Link to="/case-studies">View Case Studies</Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* Metrics Dashboard */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.8, ease: "easeOut" }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl"
        >
          <MetricCard value="41" label="Avg response time (mins)" className="opacity-75" />
          <MetricCard value="87" label="First-time fix rate" suffix="%" className="opacity-75" />
          <MetricCard value="120" label="Sites under management" suffix="+" className="opacity-75" />
          <MetricCard value="98" label="SLA compliance" suffix="%" className="opacity-75" />
        </motion.div>
      </VideoHero>

      {/* Client Logos Section */}
      <ClientLogosSection />

      {/* Who We Are Introduction Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-muted/30 via-background to-muted/20" />
        <div className="container mx-auto px-6 relative z-10">
          {/* Block 1: Who We Are — text left, image right */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
            >
              <span className="block text-primary text-sm tracking-widest uppercase mb-4 font-light">Who We Are</span>
              <h2 className="text-3xl md:text-4xl font-extralight mb-6">
                <span className="underline-accent">Tailored Facilities Management</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed font-light mb-4">
                At EntireFM, we specialise in delivering tailored facilities management solutions that cater to the distinct requirements of your business. Our services encompass maintenance, compliance, sustainability and safety, ensuring your facilities operate seamlessly.
              </p>
              <p className="text-muted-foreground leading-relaxed font-light mb-4">
                Leveraging our industry expertise and a personalised approach, we provide 24/7 support to help you reduce costs, enhance efficiency and create optimal environments for both employees and customers.
              </p>
              <p className="text-muted-foreground leading-relaxed font-light italic">
                Entrust EntireFM with your facilities management needs, allowing you to concentrate on what truly matters: your business.
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeInLeft}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img src={officeImage} alt="Modern UK office managed by EntireFM" className="w-full h-80 md:h-96 object-cover" loading="lazy" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary/10 rounded-2xl blur-2xl" />
            </motion.div>
          </div>

          {/* Block 2: What We Cover — image left, text right */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeInLeft}
              transition={{ duration: 0.7 }}
              className="relative order-2 md:order-1"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img src={industrialImage} alt="UK industrial facility managed by EntireFM" className="w-full h-80 md:h-96 object-cover" loading="lazy" />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-2xl blur-2xl" />
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="order-1 md:order-2"
            >
              <span className="block text-primary text-sm tracking-widest uppercase mb-4 font-light">What We Cover</span>
              <h2 className="text-3xl md:text-4xl font-extralight mb-6">
                <span className="underline-accent">Comprehensive, Multi-Site Solutions</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed font-light mb-4">
                Whether overseeing a single location or multiple sites, EntireFM offers a holistic suite of facilities management services designed to keep your operations running efficiently and effectively.
              </p>
              <p className="text-muted-foreground leading-relaxed font-light">
                Our customised solutions address the unique challenges of your industry — from preventive maintenance and risk management to sustainable initiatives that minimise environmental footprints. We cover every aspect necessary for optimising your spaces.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FM Partner Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Premium gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-muted/40 via-background to-muted/30" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
        
        {/* Decorative elements */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            className="max-w-3xl mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            <motion.span 
              className="block text-primary text-sm tracking-widest uppercase mb-4 font-light"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Why Choose Us
            </motion.span>
            <h2 className="text-4xl md:text-5xl mb-6 font-extralight">
              <span className="underline-accent">Your Space, Our Expertise.</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed text-xl font-extralight">
              Complete Facilities Management &amp; FM Support Services
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {[
              {
                icon: CheckCircle2,
                title: "No more chasing contractors",
                description: "Dedicated helpdesk and single point of contact. We own the problem until it's solved."
              },
              {
                icon: Shield,
                title: "Compliance without the chaos",
                description: "PPM schedules, digital asset registers, and clear audit trails. Everything documented."
              },
              {
                icon: Smartphone,
                title: "Tech-enabled, not tech-distracted",
                description: "CAFM platform, live portals, and real-time job tracking without the complexity."
              },
              {
                icon: Clock,
                title: "Owner-led, no corporate scripts",
                description: "Direct access to decision makers. Quick responses. Real accountability."
              }
            ].map((feature, index) => (
              <motion.div 
                key={index} 
                className="relative text-center group p-8 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/80 shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-500"
                variants={staggerItem}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                {/* Gradient border accent on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Top accent line */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <motion.div 
                    className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 mb-6 group-hover:from-primary/20 group-hover:to-primary/10 transition-all duration-300 shadow-sm"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <feature.icon className="w-7 h-7 text-primary" />
                  </motion.div>
                  <h3 className="text-lg font-light mb-3 group-hover:text-primary transition-colors duration-300">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Service Matrix */}
      <section className="py-24 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/what-we-deliver-bg.jpg)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/75 to-black/85" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            className="mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInLeft}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-light mb-6 underline-accent inline-block text-white">
              What We Deliver
            </h2>
            <p className="text-lg text-gray-300 font-light max-w-2xl leading-relaxed">
              Integrated FM combining hard, soft and project services under one contract. Or standalone services tailored to your needs.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.div variants={staggerItem}>
              <ServiceCard 
                title="Hard Services & M&E" 
                description="Mechanical, electrical, and building fabric maintenance" 
                items={["HVAC, electrical, mechanical systems", "Plumbing, gas, and drainage", "Emergency systems and lighting", "Energy optimisation and BMS"]} 
              />
            </motion.div>
            <motion.div variants={staggerItem}>
              <ServiceCard 
                title="Compliance & Life Safety" 
                description="Statutory compliance and risk management" 
                items={["Fire alarms, emergency lighting, extinguishers", "FRA actions and remediation", "Gas safety, water hygiene, LOLER", "Complete audit trails"]} 
              />
            </motion.div>
            <motion.div variants={staggerItem}>
              <ServiceCard 
                title="Soft Services & Workplace" 
                description="Day-to-day operations and environment management" 
                items={["Commercial cleaning and washrooms", "Grounds maintenance and waste", "Reception and concierge services", "Security coordination"]} 
              />
            </motion.div>
            <motion.div variants={staggerItem}>
              <ServiceCard 
                title="Projects & Small Works" 
                description="From minor works to complete fit-outs" 
                items={["Office and retail fit-outs", "Building refurbishments", "Service station upgrades", "Landlord make-good works"]} 
              />
            </motion.div>
          </motion.div>

          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <Button size="lg" asChild className="hover-scale">
              <Link to="/services">
                Explore All Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Sectors Grid */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div 
            className="mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInLeft}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-light mb-6 underline-accent inline-block">
              Where We Operate
            </h2>
            <p className="text-lg text-muted-foreground font-light max-w-2xl leading-relaxed">
              Sector-specific understanding across diverse environments.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.div variants={scaleIn}>
              <SectorCard title="Offices & Corporate" description="Grade A to multi-let schemes. Workplace services that support productivity." image={officeImage} link="/sectors/offices" />
            </motion.div>
            <motion.div variants={scaleIn}>
              <SectorCard title="Industrial & Logistics" description="24/7 operations. Critical infrastructure. Minimal disruption to workflow." image={industrialImage} link="/sectors/industrial-logistics" />
            </motion.div>
            <motion.div variants={scaleIn}>
              <SectorCard title="Retail & Service Stations" description="Customer-facing environments. Out-of-hours works. Brand standards maintained." image={officeImage} link="/sectors/retail-hospitality" />
            </motion.div>
            <motion.div variants={scaleIn}>
              <SectorCard title="Aviation & Transport" description="Regulated environments. Security clearances. Complex operational interfaces." image={industrialImage} link="/sectors/healthcare-public" />
            </motion.div>
            <motion.div variants={scaleIn}>
              <SectorCard title="Residential & PBSA" description="Resident satisfaction. Common areas. Estate management." image={officeImage} link="/sectors/pbsa" />
            </motion.div>
            <motion.div variants={scaleIn}>
              <SectorCard title="Construction & Developments" description="Site progression support. Handover coordination. Defects management." image={industrialImage} link="/sectors" />
            </motion.div>
          </motion.div>

          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <Button size="lg" variant="outline" asChild className="hover-scale">
              <Link to="/sectors">
                View All Sectors
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section ref={proofSectionRef} className="py-24 relative text-white overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url(${industrialImage})`,
            y: backgroundY
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/85 to-charcoal/90" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            className="mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInLeft}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-light mb-6 underline-accent inline-block">
              Proof in Action
            </h2>
            <p className="text-lg text-gray-400 font-light max-w-2xl leading-relaxed">
              Real results for real clients.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.div variants={staggerItem}>
              <CaseStudyCard 
                sector="Logistics" 
                title="Reducing reactive call-outs by 32% for regional logistics hub" 
                metrics={["Response time cut from 2hrs to 41 mins", "£47k annual cost savings", "98% SLA compliance achieved"]}
                image={industrialImage}
              />
            </motion.div>
            <motion.div variants={staggerItem}>
              <CaseStudyCard 
                sector="Aviation" 
                title="Delivering compliant FM across 3 UK airports" 
                metrics={["Zero compliance breaches in 18 months", "24/7 helpdesk response maintained", "Security-cleared engineer network"]}
                image={heroImage}
              />
            </motion.div>
            <motion.div variants={staggerItem}>
              <CaseStudyCard 
                sector="Mixed-Use" 
                title="Integrated FM for 12-building commercial estate" 
                metrics={["Single point of contact for all trades", "Tenant satisfaction up 34%", "Digital asset register deployed"]}
                image={officeImage}
              />
            </motion.div>
          </motion.div>

          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-charcoal hover-scale" asChild>
              <Link to="/case-studies" className="bg-primary">
                View All Case Studies
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <motion.section 
        className="py-24 bg-gradient-to-r from-secondary to-secondary/80 text-white overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="container mx-auto px-6 text-center">
          <motion.h2 
            className="text-4xl md:text-5xl font-light mb-6"
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            Ready to fix your facilities management problem?
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-200 mb-10 font-light max-w-2xl mx-auto leading-relaxed"
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Send us your current issues and incumbent contract details – we'll give you a clear, no-nonsense action plan.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Button size="lg" variant="secondary" className="bg-white text-secondary hover:bg-gray-100 hover-scale" asChild>
              <Link to="/contact">Request a Proposal</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-secondary hover-scale" asChild>
              <a href="tel:08001234567" className="bg-primary">Call 24/7 Helpdesk</a>
            </Button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;