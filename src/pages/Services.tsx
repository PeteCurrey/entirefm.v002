import { Helmet } from "react-helmet";
import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { EnhancedGlobalSearch } from "@/components/shared/EnhancedGlobalSearch";
import { Breadcrumb } from "@/components/shared/Breadcrumb";

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

  const services = {
    "hard-services": {
      title: "Hard Services & M&E",
      description: "Mechanical, electrical, and building fabric maintenance",
      subServices: [
        "HVAC systems maintenance and repair",
        "Electrical installations and testing",
        "Mechanical systems and pumps",
        "Plumbing, gas, and drainage",
        "Building fabric and structure",
        "BMS and controls",
        "Lighting and emergency systems",
        "Energy optimisation"
      ],
      included: "Planned preventative maintenance (PPM), reactive repairs, fault finding, minor projects, emergency call-outs, compliance testing, lifecycle planning",
      benefits: "Reduced downtime, predictable budgets, extended asset life, regulatory compliance, energy efficiency",
      sla: "Emergency response within 2 hours, PPM completed on schedule, 24/7 helpdesk access"
    },
    "compliance": {
      title: "Compliance & Life Safety",
      description: "Statutory compliance and critical safety systems",
      subServices: [
        "Fire alarm systems and testing",
        "Emergency lighting and signage",
        "Fire extinguishers and equipment",
        "Sprinklers and dry risers",
        "Fire Risk Assessment actions",
        "Gas safety inspections",
        "Water hygiene (L8)",
        "LOLER and lifting equipment",
        "Asbestos management",
        "Electrical testing (EICR)"
      ],
      included: "Scheduled inspections, certification, remediation works, digital compliance registers, audit-ready documentation",
      benefits: "Zero compliance breaches, clear audit trails, reduced risk exposure, peace of mind, insurance readiness",
      sla: "Critical safety issues responded to immediately, certification provided on completion, quarterly compliance reporting"
    },
    "soft-services": {
      title: "Soft Services & Workplace",
      description: "Day-to-day operations and environment management",
      subServices: [
        "Commercial cleaning",
        "Washroom services and consumables",
        "Waste management and recycling",
        "Grounds and landscaping",
        "Window cleaning",
        "Reception and concierge",
        "Security coordination",
        "Pest control",
        "Consumables management"
      ],
      included: "Daily/weekly cleaning schedules, quality audits, staff management, supply chain coordination",
      benefits: "Professional appearance, improved workplace satisfaction, vendor consolidation, cost control",
      sla: "Daily service delivery, quality inspections, rapid response to issues, regular account reviews"
    },
    "projects": {
      title: "Projects & Small Works",
      description: "From minor works to major refurbishments",
      subServices: [
        "Office fit-outs and refurbishments",
        "Retail and hospitality upgrades",
        "Service station improvements",
        "Landlord make-good works",
        "Dilapidations remediation",
        "Space reconfiguration",
        "Building improvements",
        "Reactive project works"
      ],
      included: "Design coordination, project management, multi-trade delivery, compliance integration, handover documentation",
      benefits: "Single point of contact, trade coordination, on-time delivery, budget certainty, integration with FM services",
      sla: "Detailed proposals within 5 days, agreed project milestones, regular progress updates, snagging completion"
    },
    "emergency": {
      title: "Emergency & 24/7 Response",
      description: "Always-on support for critical situations",
      subServices: [
        "24/7/365 helpdesk",
        "Emergency call-outs",
        "Out-of-hours support",
        "Critical system failures",
        "Security incidents",
        "Flood and water damage",
        "Power outages",
        "Heating failures",
        "Access issues"
      ],
      included: "Direct helpdesk line, engineer dispatch, real-time updates, incident management, post-incident reporting",
      benefits: "Minimal downtime, rapid resolution, business continuity, documented response times, escalation protocols",
      sla: "Emergency response within 2 hours, critical issues prioritised, live status updates, 24/7 account manager access"
    }
  };

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services" },
  ];

  return (
    <div className="min-h-screen pt-20">
      <Helmet>
        <title>Facilities Management Services | EntireFM</title>
        <meta name="description" content="Comprehensive facilities management services including hard services, compliance, soft services, projects and emergency response." />
      </Helmet>
      
      <Breadcrumb items={breadcrumbItems} />
      
      {/* Hero */}
      <section ref={heroRef} className="relative py-24 bg-gradient-to-b from-muted/50 to-background overflow-hidden">
        {/* Background Image with Parallax */}
        <motion.div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ 
            backgroundImage: 'url(/images/services-hero.jpg)',
            y,
            opacity
          }}
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
                    <Link to="/contact">
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
                to={service.link}
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
            <Link to="/contact">Discuss Your Requirements</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;
