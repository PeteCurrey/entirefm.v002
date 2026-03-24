"use client";

;
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Shield, Zap, Target, Users, Building2, TrendingUp, Award, Rocket } from "lucide-react";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { SchemaMarkup } from "@/components/shared/SchemaMarkup";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useState, useRef } from "react";
import earlyOffice from "@/assets/history/early-office-2009.jpg";
import teamGrowth from "@/assets/history/team-growth-2013.jpg";
import expansion from "@/assets/history/expansion-2017.jpg";
import nationalPresence from "@/assets/history/national-presence-2020.jpg";
import industryLeader from "@/assets/history/industry-leader-2024.jpg";
import projectsShowcase from "@/assets/history/projects-showcase.jpg";

const About = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Our Story" }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "Our Story - Built by Operators, Not Bureaucrats",
    "description": "EntireFM was built by operators who saw the FM industry's failures and created an alternative. Accountable, agile, and relentless facilities management.",
    "mainEntity": {
      "@type": "Organization",
      "name": "EntireFM",
      "description": "Facilities management built around accountability, compliance, and delivery",
      "url": "https://entirefm.com"
    }
  };

  const problems = [
    "Blame suppliers",
    "Hide behind process",
    "Move slow",
    "Deliver excuses instead of execution"
  ];

  const principles = [
    "Accountability that doesn't disappear through layers",
    "Compliance that lives in the open",
    "Engineers that actually fix things",
    "Directors who answer the phone",
    "Tech that shows truth, not vanity metrics"
  ];

  const cultureCode = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Own it",
      description: "No passing the buck"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Move fast",
      description: "Delays are expensive"
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Be world-class",
      description: "Every visit matters"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Stay humble",
      description: "Listen, fix, improve"
    }
  ];

  const milestones = [
    {
      year: "2009",
      title: "The Beginning",
      description: "Founded as a modest building maintenance company serving local businesses and letting agents",
      icon: <Building2 className="h-5 w-5" />,
      stats: ["5 team members", "20+ local clients", "Single office location"],
      details: "Started with a focus on building maintenance, delivering reliable service to local businesses and property managers."
    },
    {
      year: "2011-2013",
      title: "Building Reputation",
      description: "Exceptional service captured attention of larger clients who recognized our value",
      icon: <TrendingUp className="h-5 w-5" />,
      stats: ["15+ team members", "100+ clients", "£2M+ annual turnover"],
      details: "Word-of-mouth referrals led to partnerships with larger organizations seeking dependable facilities management."
    },
    {
      year: "2014-2017",
      title: "Rapid Expansion",
      description: "Client base grew to include multinational firms, consultancies, logistics companies, and leading supermarket chains",
      icon: <Rocket className="h-5 w-5" />,
      stats: ["50+ team members", "300+ clients", "Multiple regional hubs"],
      details: "Secured contracts with multinational corporations, establishing EntireFM as a trusted national FM provider."
    },
    {
      year: "2018-2021",
      title: "National Presence",
      description: "Established network of regional offices with forward-thinking professionals pushing industry boundaries",
      icon: <Award className="h-5 w-5" />,
      stats: ["100+ team members", "500+ clients", "6 regional offices"],
      details: "Expanded infrastructure with regional offices across the UK, ensuring local expertise with national consistency."
    },
    {
      year: "2022-Present",
      title: "Industry Leader",
      description: "Nationwide leader providing comprehensive FM services across diverse industries with unwavering commitment to excellence",
      icon: <Target className="h-5 w-5" />,
      stats: ["150+ team members", "800+ clients", "Nationwide coverage"],
      details: "Today we're recognized as an industry leader, delivering excellence across facilities management, compliance, and innovation."
    }
  ];

  const galleryImages = [
    {
      src: earlyOffice,
      alt: "EntireFM early office 2009 - Our humble beginnings",
      year: "2009",
      caption: "Our first office where it all began"
    },
    {
      src: teamGrowth,
      alt: "EntireFM team on site 2013 - Growing team of engineers",
      year: "2013",
      caption: "Our growing team of dedicated engineers"
    },
    {
      src: expansion,
      alt: "EntireFM office meeting 2017 - Professional expansion",
      year: "2017",
      caption: "Expanding our professional services"
    },
    {
      src: nationalPresence,
      alt: "EntireFM national operations 2020 - Nationwide presence",
      year: "2020",
      caption: "Building our nationwide presence"
    },
    {
      src: industryLeader,
      alt: "EntireFM team 2024 - Industry leading team",
      year: "2024",
      caption: "Our team today - driving industry excellence"
    },
    {
      src: projectsShowcase,
      alt: "EntireFM project work - Professional facilities management",
      year: "Present",
      caption: "Delivering world-class facilities management"
    }
  ];

  const [hoveredMilestone, setHoveredMilestone] = useState<number | null>(null);
  const heroRef = useRef<HTMLElement>(null);
  
  // Parallax effect for hero section
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.6]);
  const blur = useTransform(scrollYProgress, [0, 1], [0, 8]);

  return (
    <>
      
      <BreadcrumbSchema items={breadcrumbItems} />
      <SchemaMarkup schema={schema} />

      <div className="min-h-screen bg-background pt-20">
        {/* Hero Section */}
        <section ref={heroRef} className="relative min-h-[70vh] py-32 px-4 bg-gradient-to-br from-primary/10 via-background to-background overflow-hidden flex items-center">
          {/* Background Image with Parallax */}
          <motion.div 
            className="absolute inset-0 bg-cover bg-center" 
            style={{ 
              backgroundImage: 'url(/images/about-hero.jpg)',
              y,
              opacity,
              filter: blur.get() !== undefined ? `blur(${blur.get()}px)` : 'none'
            } as any}
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
          
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex justify-center mb-8"
            >
              <Breadcrumb items={breadcrumbItems} />
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white"
            >
              We didn't come from FM.<br />We came from fixing FM.
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
              className="text-xl md:text-2xl text-gray-200 mb-8"
            >
              A business born from frustration — and driven by delivery.
            </motion.p>
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
        </section>

        {/* Our Story Section */}
        <section className="py-20 px-4 bg-background">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left Column - Story Text */}
              <div className="space-y-6">
                <div className="border-b-2 border-primary pb-2 mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground">EntireFM Our Story</h2>
                </div>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  EntireFM is a proudly independent service provider specialising in facilities management and support services. Our journey began in 2009 as a modest building maintenance company, catering to local businesses and letting agents.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  From the very start, we focused on delivering exceptional service with honesty, reliability and a commitment to quality. It didn't take long for EntireFM to stand out in the industry, capturing the attention of larger clients who recognised the value we brought to their operations. Many of these clients remain our trusted partners today, a testament to the enduring relationships we've built.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  As our reputation grew, so did our client base. What started as a local business soon expanded to include multinational property management firms, consultancy companies, motorway service stations, logistics and manufacturing companies, and leading supermarket chains to name just a few. Despite our growth, the ethos that defined us in those early days continues to drive everything we do: delivering bespoke, personalised services tailored to each client's unique needs. We take pride in integrating seamlessly into our clients' teams, always going the extra mile to achieve excellence in every task.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Today, EntireFM operates with a network of regional offices and a strong, dynamic team of forward thinking professionals. Our people share a common passion for pushing the boundaries of the facilities management industry, ensuring EntireFM remains at the forefront of innovation and service delivery. Our commitment to progress is matched by our dedication to being a responsible employer and an active supporter of the local communities we serve.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Now a nationwide leader in facilities management, EntireFM provides comprehensive support services across a wide array of industries. We thrive in the fast paced world of facilities management, where no two days are ever the same. Our team's depth of expertise ensures that we can adapt quickly to meet the demands of new clients while maintaining the high standards of service our longstanding partners have come to expect.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Whether managing complex property portfolios, maintaining critical infrastructure, or providing tailored support solutions, EntireFM is your trusted partner for facilities management. By staying true to our values and continually evolving, we're shaping a future where excellence is the standard and client satisfaction is the ultimate measure of success.
                </p>
              </div>

              {/* Right Column - Featured Quote */}
              <div className="lg:sticky lg:top-24">
                <div className="bg-gradient-to-br from-muted/50 to-muted/30 border-l-4 border-primary p-8 rounded-lg">
                  <blockquote className="text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed text-muted-foreground">
                    "we aim to deliver a{" "}
                    <span className="text-primary font-semibold">bespoke</span>{" "}
                    facilities management solution to our clients, integrate in to their team and go the extra mile to achieve{" "}
                    <span className="text-primary font-semibold">excellence</span>"
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-muted/30 to-background">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Our Journey</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                From a local maintenance company to a nationwide FM leader — driven by excellence at every step
              </p>
            </div>

            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary/20 via-primary/40 to-primary/20 hidden md:block" />

              {/* Timeline Items */}
              <div className="space-y-12">
                {milestones.map((milestone, index) => {
                  const isEven = index % 2 === 0;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className={`flex flex-col md:flex-row gap-8 items-center ${
                        isEven ? "md:flex-row-reverse" : ""
                      }`}
                    >
                      {/* Content */}
                      <div className={`flex-1 ${isEven ? "md:text-right" : "md:text-left"} text-center`}>
                        <motion.div
                          initial={{ scale: 0.9 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                          onMouseEnter={() => setHoveredMilestone(index)}
                          onMouseLeave={() => setHoveredMilestone(null)}
                          className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-lg relative overflow-hidden group cursor-pointer"
                        >
                          {/* Animated background gradient on hover */}
                          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          
                          <div className="relative z-10">
                            <div className={`flex items-center gap-3 mb-3 ${
                              isEven ? "md:justify-end justify-center" : "md:justify-start justify-center"
                            }`}>
                              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                                {milestone.icon}
                              </div>
                              <span className="text-2xl font-bold text-primary">{milestone.year}</span>
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-foreground">{milestone.title}</h3>
                            <p className="text-muted-foreground mb-4">{milestone.description}</p>
                            
                            {/* Stats that appear on hover */}
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ 
                                height: hoveredMilestone === index ? "auto" : 0,
                                opacity: hoveredMilestone === index ? 1 : 0
                              }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="pt-4 border-t border-border/50 space-y-3">
                                <p className="text-sm text-muted-foreground font-medium">{milestone.details}</p>
                                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                                  {milestone.stats.map((stat, statIndex) => (
                                    <span 
                                      key={statIndex}
                                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium"
                                    >
                                      {stat}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </motion.div>
                          </div>
                        </motion.div>
                      </div>

                      {/* Center Dot */}
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.1 + 0.1 }}
                        className="relative z-10"
                      >
                        <div className="w-6 h-6 rounded-full bg-primary border-4 border-background shadow-lg" />
                      </motion.div>

                      {/* Spacer for alignment */}
                      <div className="flex-1 hidden md:block" />
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Photo Gallery Section */}
        <section className="py-20 px-4 bg-background">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Our Journey in Pictures</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                From our early days to becoming a nationwide leader — witness the evolution of EntireFM through the years
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-lg border border-border bg-card shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={(image.src as any).src || image.src} 
                      alt={image.alt}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  
                  {/* Overlay with caption */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                      <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-sm font-bold rounded-full mb-3">
                        {image.year}
                      </span>
                      <p className="text-foreground font-medium text-lg">
                        {image.caption}
                      </p>
                    </div>
                  </div>
                  
                  {/* Year badge always visible */}
                  <div className="absolute top-4 right-4 px-3 py-1 bg-background/90 backdrop-blur-sm border border-border rounded-full text-sm font-bold text-foreground">
                    {image.year}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* The Problem We Saw */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">The Problem We Saw</h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-center mb-8 font-semibold">
                Big FM providers:
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {problems.map((problem, index) => (
                  <div key={index} className="p-6 bg-card rounded-lg border border-destructive/20">
                    <p className="text-lg font-medium text-destructive">{problem}</p>
                  </div>
                ))}
              </div>
              <div className="text-center space-y-4">
                <p className="text-xl font-semibold">
                  Meanwhile, the client suffers —
                </p>
                <p className="text-lg text-muted-foreground">
                  operations wobble, compliance drifts, people complain.
                </p>
                <p className="text-xl font-bold text-foreground">
                  We couldn't watch that mess anymore.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* So We Built the Alternative */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              So We Built the Alternative
            </h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-center mb-8 font-semibold">
                We built EntireFM around what FM should be:
              </p>
              <div className="space-y-4 mb-8">
                {principles.map((principle, index) => (
                  <div key={index} className="flex items-start gap-4 p-6 bg-background rounded-lg border">
                    <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary font-bold">✓</span>
                    </div>
                    <p className="text-lg">{principle}</p>
                  </div>
                ))}
              </div>
              <div className="text-center p-6 bg-primary/10 rounded-lg border border-primary/20">
                <p className="text-xl font-bold">
                  There's no "that's not our department."<br />
                  There's only the result.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Culture Code */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Culture Code
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {cultureCode.map((item, index) => (
                <div key={index} className="p-6 bg-card rounded-lg border text-center hover:border-primary transition-colors">
                  <div className="flex justify-center text-primary mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
            <p className="text-2xl text-center font-bold">
              Accountable. Agile. Relentless.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-primary/10 via-background to-background">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Meet the leadership that actually leads
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Book a call with a Director and experience the difference accountability makes.
            </p>
            <Button asChild size="lg">
              <Link href="/contact">Book a Call with a Director</Link>
            </Button>
          </div>
        </section>

        {/* Internal Links Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-6">Learn More About Us</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              <Button asChild variant="outline" className="h-auto py-4">
                <Link href="/services">Our Services</Link>
              </Button>
              <Button asChild variant="outline" className="h-auto py-4">
                <Link href="/technology">Our Technology</Link>
              </Button>
              <Button asChild variant="outline" className="h-auto py-4">
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;