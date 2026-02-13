import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Download, ClipboardCheck, CheckCircle2, ArrowRight, Target, TrendingUp, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import ServiceHeroSection from "@/components/shared/ServiceHeroSection";
import { TrustBar } from "@/components/shared/TrustBar";
import ContentSection from "@/components/shared/ContentSection";
import CTASection from "@/components/shared/CTASection";

const AuditFramework = () => {
  const coverageAreas = [
    { icon: Target, text: "SLA vs. actual vs. perceived performance" },
    { icon: CheckCircle2, text: "Compliance evidence visibility" },
    { icon: TrendingUp, text: "Financial transparency" },
    { icon: ClipboardCheck, text: "Response + first-time fix rates" },
    { icon: Users, text: "Culture & communication scorecard" },
    { icon: TrendingUp, text: "Asset lifecycle strategy" },
    { icon: Target, text: "Environmental & energy performance" },
    { icon: CheckCircle2, text: "Risk management & governance maturity" },
  ];

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Resources", href: "/resources" },
    { label: "FM Audit Framework" },
  ];

  const heroStats = [
    { value: "8", label: "Key Audit Areas" },
    { value: "40+", label: "Performance Criteria" },
    { value: "100%", label: "Evidence-Based" },
  ];

  return (
    <>
      <Helmet>
        <title>FM Audit Framework | Evaluate Your Provider | EntireFM</title>
        <meta name="description" content="Evaluate your FM provider like a pro. Structured audit checklist exposing weak delivery and highlighting operational excellence." />
        <link rel="canonical" href="https://entirefm.com/resources/audit-framework" />
      </Helmet>

      <ServiceHeroSection
        breadcrumbItems={breadcrumbItems}
        title="What Good Looks Like: FM Audit Framework"
        description="Evaluate Your FM Provider Like a Pro. A structured audit checklist that exposes weak delivery — and shines a spotlight on operational excellence."
        stats={heroStats}
        primaryCTA={{ label: "Download Audit Framework", icon: Download, href: "#" }}
        secondaryCTA={{ label: "Book a Free Site Inspection", icon: ArrowRight, href: "/contact" }}
      />

      <TrustBar variant="compact" />

      <ContentSection title="What The Audit Framework Covers" subtitle="Comprehensive evaluation across eight critical performance areas." centered>
        <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {coverageAreas.map((item, index) => (
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

      <ContentSection title="Why It Converts" centered variant="muted">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-2xl text-muted-foreground font-light leading-relaxed mb-8">
            Directors quickly realise how much they're missing with other providers.
          </p>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Card className="p-8 border-primary/20">
              <blockquote className="text-lg italic text-muted-foreground font-light">
                "This guide highlights exactly where FM value is won or lost."
              </blockquote>
            </Card>
          </motion.div>
        </div>
      </ContentSection>

      <ContentSection>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-light mb-8 text-center">Related Resources</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { label: "Switching Provider Playbook", description: "Friction-free FM transition guide", href: "/resources/switch-playbook", action: "Download" },
              { label: "Compliance Diagnostic", description: "Score your current provider", href: "/compliance-diagnostic", action: "Take Assessment" },
              { label: "Tender Support Pack", description: "Win your next FM contract", href: "/resources/tender-support", action: "Download" },
            ].map((link, idx) => (
              <Link key={idx} to={link.href} className="group">
                <Card className="p-6 h-full hover-lift border-border/50 hover:border-primary/50 transition-all">
                  <h3 className="font-medium mb-2 group-hover:text-primary transition-colors">{link.label}</h3>
                  <p className="text-sm text-muted-foreground mb-4 font-light">{link.description}</p>
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
        title="Download the FM Audit Framework"
        description="Evaluate your FM provider with professional standards."
        primaryLabel="Download Framework"
        primaryHref="#"
        primaryIcon={Download}
        secondaryLabel="Request Site Inspection"
        secondaryHref="/contact"
        variant="dark"
      />
    </>
  );
};

export default AuditFramework;
