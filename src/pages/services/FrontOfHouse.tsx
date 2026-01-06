import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Lightbulb, Palette, ShieldCheck, Thermometer, Sparkles, TrendingUp, ArrowRight, Phone, Users } from "lucide-react";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { SchemaMarkup } from "@/components/shared/SchemaMarkup";
import { SidebarCTA } from "@/components/shared/SidebarCTA";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/shared/AnimatedSection";
import CTASection from "@/components/shared/CTASection";

const FrontOfHouse = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Front-of-House Experience" }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Front-of-House Experience Enhancement",
    "description": "Transform your reception and public spaces into a brand advantage. Professional FM services for entrances, receptions, and customer-facing environments.",
    "provider": {
      "@type": "Organization",
      "name": "EntireFM"
    }
  };

  const whyItMatters = [
    "They decide whether they trust you",
    "They judge safety, quality, and culture",
    "Their perception shapes business outcomes"
  ];

  const enhancements = [
    {
      icon: Lightbulb,
      title: "Reception Lighting Design",
      description: "Optimised lighting creates the right atmosphere and impression"
    },
    {
      icon: Palette,
      title: "Decorative Refresh",
      description: "Brand alignment through quality finishes and presentation"
    },
    {
      icon: ShieldCheck,
      title: "Access Control Operation",
      description: "Smooth, reliable entry systems that work every time"
    },
    {
      icon: Thermometer,
      title: "Climate Optimisation",
      description: "Perfect temperature and air quality in reception areas"
    },
    {
      icon: Sparkles,
      title: "Finishing Details",
      description: "Flooring, handrails, and every touchpoint maintained to standard"
    },
    {
      icon: TrendingUp,
      title: "Hazard Prevention",
      description: "Live monitoring and instant corrective work"
    }
  ];

  const kpis = [
    {
      metric: "Visitor Sentiment",
      description: "Comfort scoring and perception tracking"
    },
    {
      metric: "Brand Perception",
      description: "Alignment between space and company values"
    },
    {
      metric: "Complaint Elimination",
      description: "Zero negative feedback on facilities"
    },
    {
      metric: "Customer Journey Speed",
      description: "Faster, smoother access and navigation"
    }
  ];

  const relatedSectors = [
    { name: "Corporate Offices", href: "/sectors/offices-corporate" },
    { name: "Hospitality & Leisure", href: "/sectors/hospitality-leisure" },
    { name: "Retail", href: "/sectors/retail-service-stations" }
  ];

  return (
    <>
      <Helmet>
        <title>Reception Maintenance & Public Environment Quality | EntireFM</title>
        <meta name="description" content="Transform your reception and public spaces into a brand advantage. Professional FM services for entrances, receptions, and customer-facing environments." />
        <link rel="canonical" href="https://entirefm.com/services/front-of-house" />
      </Helmet>
      <BreadcrumbSchema items={breadcrumbItems} />
      <SchemaMarkup schema={schema} />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-charcoal/70 to-charcoal z-10" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80')] bg-cover bg-center" />
        
        <div className="container mx-auto px-6 relative z-20 text-white py-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Breadcrumb items={breadcrumbItems} className="mb-6 justify-center" />
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 max-w-4xl mx-auto">
              First impressions last —<br />make yours unstoppable.
            </h1>
            <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto text-gray-200 mb-8">
              We turn entrances, receptions, and customer routes into a brand advantage.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-white text-charcoal hover:bg-gray-100" asChild>
                <Link to="/contact">
                  Request FOH Experience Review
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-charcoal" asChild>
                <Link to="/case-studies">See Before & After Wins</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-16">
            
            <AnimatedSection>
              <section className="bg-gradient-to-br from-primary/10 to-transparent p-8 rounded-2xl border border-primary/20">
                <div className="flex items-start gap-4 mb-6">
                  <Users className="w-8 h-8 text-primary flex-shrink-0" />
                  <h2 className="text-3xl font-light">Why It Matters</h2>
                </div>
                <p className="text-xl font-medium mb-6">
                  The moment a visitor walks in:
                </p>
                <div className="space-y-4 mb-6">
                  {whyItMatters.map((item, index) => (
                    <motion.div 
                      key={index} 
                      className="flex items-center gap-4 p-4 bg-background rounded-lg border"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-primary font-bold">{index + 1}</span>
                      </div>
                      <p className="text-lg font-light">{item}</p>
                    </motion.div>
                  ))}
                </div>
                <p className="text-lg font-medium text-primary">
                  FM failures ruin the moment. We ensure the moment lands perfectly.
                </p>
              </section>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <section>
                <h2 className="text-3xl font-light mb-8 underline-accent inline-block">
                  FOH Enhancement Examples
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {enhancements.map((enhancement, index) => (
                    <motion.div 
                      key={index} 
                      className="p-6 bg-card rounded-lg border hover:border-primary transition-all hover:shadow-lg group"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ y: -4 }}
                    >
                      <div className="p-3 bg-primary/10 rounded-lg inline-block mb-4 group-hover:bg-primary/20 transition-colors">
                        <enhancement.icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-medium mb-2">{enhancement.title}</h3>
                      <p className="text-muted-foreground font-light">{enhancement.description}</p>
                    </motion.div>
                  ))}
                </div>
              </section>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <section className="bg-muted/30 p-8 rounded-2xl">
                <h2 className="text-3xl font-light mb-8 underline-accent inline-block">
                  KPIs We Track
                </h2>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  {kpis.map((kpi, index) => (
                    <div key={index} className="border-l-4 border-primary pl-6 p-4 bg-background rounded-r-lg">
                      <h3 className="text-xl font-medium mb-2 text-primary">{kpi.metric}</h3>
                      <p className="text-muted-foreground font-light">{kpi.description}</p>
                    </div>
                  ))}
                </div>
                <p className="text-lg font-medium text-center text-primary">
                  Facilities create trust — or they destroy it.
                </p>
              </section>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Related Sectors
                </h2>
                <div className="grid sm:grid-cols-3 gap-4">
                  {relatedSectors.map((sector, index) => (
                    <Link key={index} to={sector.href}>
                      <motion.div 
                        className="p-6 border rounded-lg hover:border-primary hover:bg-muted/30 transition-all text-center"
                        whileHover={{ scale: 1.02, y: -4 }}
                      >
                        <span className="font-medium">{sector.name}</span>
                        <ArrowRight className="w-4 h-4 mx-auto mt-2 text-primary" />
                      </motion.div>
                    </Link>
                  ))}
                </div>
              </section>
            </AnimatedSection>

            <CTASection
              title="Book a FOH Excellence Survey"
              description="Let us assess your front-of-house experience and show you where improvements deliver immediate ROI."
              primaryLabel="Get Your FOH Assessment"
              primaryHref="/contact"
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

export default FrontOfHouse;