import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, Calendar, CheckCircle2, Users, ArrowRight, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { SchemaMarkup } from "@/components/shared/SchemaMarkup";
import ServiceHeroSection from "@/components/shared/ServiceHeroSection";
import { TrustBar } from "@/components/shared/TrustBar";
import ContentSection from "@/components/shared/ContentSection";
import CTASection from "@/components/shared/CTASection";

const ComplianceCalendar = () => {
  const checklist = [
    { icon: CheckCircle2, text: "Fire systems (BS 5839)" },
    { icon: CheckCircle2, text: "Emergency lighting (BS 5266)" },
    { icon: CheckCircle2, text: "Sprinklers & risers (BS EN 12845 / BS 9990)" },
    { icon: CheckCircle2, text: "Electrical testing (EICR, PAT)" },
    { icon: CheckCircle2, text: "Water hygiene (ACOP L8 / HSG274)" },
    { icon: CheckCircle2, text: "Gas & heating safety" },
    { icon: CheckCircle2, text: "Lift & access systems (LOLER)" },
    { icon: CheckCircle2, text: "Hazard & workplace safety checks" },
  ];

  const audience = [
    { role: "Directors / Responsible Persons", description: "Ultimate accountability for compliance" },
    { role: "FM Managers", description: "Operational compliance delivery" },
    { role: "Managing Agents", description: "Multi-site portfolio oversight" },
    { role: "Site Operators", description: "Day-to-day safety management" },
  ];

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Resources", href: "/resources" },
    { label: "Compliance Calendar 2025" },
  ];

  const heroStats = [
    { value: "12", label: "Months Covered" },
    { value: "2025", label: "Updated" },
    { value: "Free", label: "Download" },
    { value: "All", label: "Disciplines" },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "DownloadAction",
    name: "FM Director's Compliance Calendar 2025",
    description: "Statutory maintenance deadlines — stay audit-ready all year.",
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>FM Compliance Calendar 2025 | EntireFM Resources</title>
        <meta name="description" content="Statutory maintenance deadlines — stay audit-ready all year. Download the 2025 FM Director's Compliance Calendar." />
        <link rel="canonical" href="https://entirefm.com/resources/compliance-calendar" />
      </Helmet>
      <SchemaMarkup schema={schema} />

      <ServiceHeroSection
        breadcrumbItems={breadcrumbItems}
        title="FM Director's Compliance Calendar 2025"
        description="Stay Ahead of Every Compliance Deadline. Every Time. Your 2025 statutory maintenance and risk management calendar — engineered to keep Responsible Persons out of the firing line."
        stats={heroStats}
        primaryCTA={{ label: "Download Calendar (PDF)", icon: Download, href: "#" }}
        secondaryCTA={{ label: "Request Compliance Audit", icon: ArrowRight, href: "/request-proposal" }}
        backgroundImage="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80"
      />

      <TrustBar variant="compact" />

      <ContentSection title="What You'll Get" subtitle="A visual month-by-month calendar covering all statutory maintenance requirements:" centered>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {checklist.map((item, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-30px" }} transition={{ delay: index * 0.05, duration: 0.5 }}>
              <Card className="p-5 hover-lift border-border/50 hover:border-primary/50 transition-all">
                <div className="flex items-start gap-3">
                  <item.icon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="font-light text-sm">{item.text}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="text-lg text-muted-foreground font-light leading-relaxed text-center mt-8">
          All mapped to legal obligations and best-practice intervals.
        </motion.p>
      </ContentSection>

      <ContentSection title="Who It's For" variant="muted" centered>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {audience.map((item, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-30px" }} transition={{ delay: index * 0.1, duration: 0.5 }}>
              <Card className="p-6 hover-lift border-border/50 hover:border-primary/50 transition-all">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg shrink-0">
                    <Users className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-lg font-medium mb-1">{item.role}</p>
                    <p className="text-sm text-muted-foreground font-light">{item.description}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 }} className="text-xl text-muted-foreground font-light leading-relaxed italic text-center mt-10">
          Compliance clarity = fewer arguments, faster decisions.
        </motion.p>
      </ContentSection>

      <CTASection
        title="Download your 2025 Compliance Calendar"
        description="PDF sent instantly — stay audit-ready all year"
        primaryLabel="Download Calendar"
        primaryHref="#"
        primaryIcon={Download}
        secondaryLabel="Speak to an Expert"
        secondaryHref="/contact"
        secondaryIcon={Phone}
        variant="dark"
      />
    </div>
  );
};

export default ComplianceCalendar;
