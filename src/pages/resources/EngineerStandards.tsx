import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { CheckCircle2, Shield, Award, FileCheck, Camera, UserCheck, ArrowRight } from "lucide-react";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { SchemaMarkup } from "@/components/shared/SchemaMarkup";
import ServiceHeroSection from "@/components/shared/ServiceHeroSection";
import { TrustBar } from "@/components/shared/TrustBar";
import ContentSection from "@/components/shared/ContentSection";
import CTASection from "@/components/shared/CTASection";

const EngineerStandards = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Resources", href: "/resources" },
    { label: "Engineer Standards" },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "FM Engineers Professional Standards | EntireFM Workforce Quality",
    description: "Professional engineers deliver professional outcomes. EntireFM's rigorous standards ensure quality, competence, and professionalism on every site visit.",
    author: { "@type": "Organization", name: "EntireFM" },
  };

  const heroStats = [
    { value: "100%", label: "Competency Verified" },
    { value: "95%", label: "First-Time Fix Rate" },
    { value: "4.9/5", label: "Client Satisfaction" },
  ];

  const whatClientsSee = [
    "Clean uniforms + branded PPE",
    "Respect for public-facing environments",
    "Clear communication on arrival",
    "Zero mess left behind",
  ];

  const whatClientsFeel = [
    "Work done right first time",
    "Fast root-cause diagnosis",
    "Accountability to close the loop",
    "Pride in every detail",
  ];

  const standards = [
    { icon: FileCheck, title: "Full RAMS Briefing", description: "Risk assessment before every site entry" },
    { icon: Award, title: "Verified Competency", description: "CSCS / competency cards checked and current" },
    { icon: Camera, title: "Photo Documentation", description: "Mandatory updates for every task completed" },
    { icon: UserCheck, title: "Site Courtesy Reporting", description: "Professional communication with site staff" },
    { icon: CheckCircle2, title: "Quality Sign-Off", description: "Work approved before task closure" },
    { icon: Shield, title: "Brand Protection", description: "Your site reflects your brand—our engineers reflect ours" },
  ];

  return (
    <>
      <Helmet>
        <title>FM Engineers Professional Standards | EntireFM Workforce Quality</title>
        <meta name="description" content="Professional engineers deliver professional outcomes. EntireFM's rigorous standards ensure quality, competence, and professionalism on every site visit." />
        <link rel="canonical" href="https://entirefm.com/resources/engineer-standards" />
      </Helmet>
      <BreadcrumbSchema items={breadcrumbItems} />
      <SchemaMarkup schema={schema} />

      <ServiceHeroSection
        breadcrumbItems={breadcrumbItems}
        title="Professional engineers. Professional outcomes."
        description="Every visit. Every site. Every time. Our rigorous standards ensure quality, competence, and professionalism on every site visit."
        stats={heroStats}
        primaryCTA={{ label: "Book a Quality Assessment Visit", icon: ArrowRight, href: "/contact" }}
        secondaryCTA={{ label: "Request Workforce Vetting Details", icon: Shield, href: "/contact" }}
      />

      <TrustBar variant="compact" />

      <ContentSection title="What Clients See" subtitle="Professional behaviour is a performance standard." centered>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {whatClientsSee.map((item, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-30px" }} transition={{ delay: index * 0.075, duration: 0.5 }}>
              <Card className="flex items-start gap-4 p-6 hover-lift border-border/50 hover:border-primary/50 transition-all">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-lg font-light">{item}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </ContentSection>

      <ContentSection title="What Clients Don't See — But Feel" subtitle="The invisible quality that makes all the difference." centered variant="muted">
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          {whatClientsFeel.map((item, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-30px" }} transition={{ delay: index * 0.075, duration: 0.5 }}>
              <Card className="flex items-start gap-4 p-6 hover-lift border-border/50 hover:border-primary/50 transition-all">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-lg font-light">{item}</p>
              </Card>
            </motion.div>
          ))}
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
          <Card className="p-8 border-primary/20 max-w-2xl mx-auto text-center">
            <p className="text-xl font-light text-foreground">
              Poor presentation = poor workmanship more often than not.
              <span className="block text-primary mt-2 font-medium">We refuse both.</span>
            </p>
          </Card>
        </motion.div>
      </ContentSection>

      <ContentSection title="Standards We Enforce" subtitle="Non-negotiable requirements for every engineer, every visit." centered>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {standards.map((standard, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-30px" }} transition={{ delay: index * 0.075, duration: 0.5 }}>
              <Card className="p-6 hover-lift border-border/50 hover:border-primary/50 transition-all h-full">
                <div className="p-3 bg-primary/10 rounded-xl w-fit mb-4">
                  <standard.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-2">{standard.title}</h3>
                <p className="text-muted-foreground font-light">{standard.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </ContentSection>

      <CTASection
        title="Your site reflects your brand. Our engineers reflect ours."
        description="See our workforce competence pack and quality standards in action."
        primaryLabel="See Our Competence Pack"
        primaryHref="/contact"
        secondaryLabel="View Our Services"
        secondaryHref="/services"
        variant="dark"
      />

      <ContentSection variant="muted">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-light mb-8">Explore More</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { label: "Trust & Accreditations", href: "/about" },
              { label: "Our Services", href: "/services" },
              { label: "Request a Proposal", href: "/contact" },
            ].map((link, idx) => (
              <Link key={idx} to={link.href} className="group">
                <Card className="p-6 h-full hover-lift border-border/50 hover:border-primary/50 transition-all">
                  <h3 className="font-medium mb-2 group-hover:text-primary transition-colors">{link.label}</h3>
                  <span className="text-sm text-primary flex items-center justify-center gap-2">
                    Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </ContentSection>
    </>
  );
};

export default EngineerStandards;
