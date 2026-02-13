import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Download, RefreshCw, CheckCircle2, ArrowRight, Users, Clock, Shield, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import ServiceHeroSection from "@/components/shared/ServiceHeroSection";
import { TrustBar } from "@/components/shared/TrustBar";
import ContentSection from "@/components/shared/ContentSection";
import CTASection from "@/components/shared/CTASection";

const SwitchingProvider = () => {
  const playbookCovers = [
    { icon: Clock, text: "How to avoid operational downtime" },
    { icon: FileText, text: "Data to extract from your incumbent" },
    { icon: Users, text: "Stakeholder comms plan" },
    { icon: Shield, text: "Vendor accountability structure" },
    { icon: Clock, text: "Mobilisation timeline template" },
    { icon: CheckCircle2, text: "Risk watchlist + mitigations" },
  ];

  const perfectFor = [
    { title: "Procurement leads", description: "Managing FM tender transitions" },
    { title: "FM directors", description: "Overseeing provider changes" },
    { title: "Managing agents", description: "Coordinating multi-site switches" },
    { title: "Anyone tired of being let down", description: "Ready for a better FM experience" },
  ];

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Resources", href: "/resources" },
    { label: "Switching FM Provider" },
  ];

  const heroStats = [
    { value: "6", label: "Critical Phases" },
    { value: "20+", label: "Checklist Items" },
    { value: "Zero", label: "Downtime Target" },
  ];

  return (
    <>
      <Helmet>
        <title>Switch FM Provider Pain-Free | Playbook Download | EntireFM</title>
        <meta name="description" content="Frictionless mobilisation guidance & templates. Step-by-step playbook for friction-free FM provider transition." />
        <link rel="canonical" href="https://entirefm.com/resources/switch-playbook" />
      </Helmet>

      <ServiceHeroSection
        breadcrumbItems={breadcrumbItems}
        title="Switching FM Provider — Pain-Free Playbook"
        description="Changing FM Provider Doesn't Need to Be Chaos. A step-by-step playbook for friction-free transition — without letting compliance slide."
        stats={heroStats}
        primaryCTA={{ label: "Download the Playbook", icon: Download, href: "#" }}
        secondaryCTA={{ label: "Get a Mobilisation Proposal", icon: ArrowRight, href: "/contact" }}
      />

      <TrustBar variant="compact" />

      <ContentSection title="What the Playbook Covers" subtitle="Everything you need for a seamless FM transition." centered>
        <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {playbookCovers.map((item, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-30px" }} transition={{ delay: index * 0.05, duration: 0.5 }}>
              <Card className="p-5 hover-lift border-border/50 hover:border-primary/50 transition-all group">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="font-light text-foreground">{item.text}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </ContentSection>

      <ContentSection title="Perfect for" subtitle="Built for professionals managing FM transitions." centered variant="muted">
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {perfectFor.map((role, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-30px" }} transition={{ delay: index * 0.075, duration: 0.5 }}>
              <Card className="p-6 hover-lift border-border/50 hover:border-primary/50 transition-all">
                <h3 className="text-lg font-medium mb-2">{role.title}</h3>
                <p className="text-muted-foreground font-light">{role.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="mt-12 text-center">
          <Card className="p-8 border-primary/20 inline-block">
            <p className="text-xl text-muted-foreground font-light italic">Better FM starts with a smarter switch.</p>
          </Card>
        </motion.div>
      </ContentSection>

      <ContentSection>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-light mb-8 text-center">You Might Also Find Useful</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { label: "Compliance Risk Diagnostic", description: "Score your current provider's performance", href: "/compliance-diagnostic", action: "Take Assessment" },
              { label: "Why Switch to EntireFM", description: "See what makes us different", href: "/why-switch", action: "Learn More" },
              { label: "Sectors We Serve", description: "Industry-specific FM solutions", href: "/sectors", action: "View Sectors" },
              { label: "Request a Proposal", description: "Get a tailored switching plan", href: "/contact", action: "Contact Us" },
            ].map((link, idx) => (
              <Link key={idx} to={link.href} className="group">
                <Card className="p-6 hover-lift border-border/50 hover:border-primary/50 transition-all h-full">
                  <h3 className="font-medium mb-2 group-hover:text-primary transition-colors">{link.label}</h3>
                  <p className="text-sm text-muted-foreground font-light mb-4">{link.description}</p>
                  <span className="text-sm text-primary flex items-center gap-2">
                    {link.action} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </ContentSection>

      <CTASection
        title="Download the Switching Provider Playbook"
        description="Make your FM transition smooth and risk-free."
        primaryLabel="Download Playbook"
        primaryHref="#"
        primaryIcon={Download}
        secondaryLabel="Get Mobilisation Proposal"
        secondaryHref="/contact"
        variant="dark"
      />
    </>
  );
};

export default SwitchingProvider;
