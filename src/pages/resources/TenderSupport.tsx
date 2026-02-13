import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { FileText, CheckCircle, Shield, Calendar, TrendingUp, Download, Phone, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { SchemaMarkup } from "@/components/shared/SchemaMarkup";
import ServiceHeroSection from "@/components/shared/ServiceHeroSection";
import { TrustBar } from "@/components/shared/TrustBar";
import ContentSection from "@/components/shared/ContentSection";
import CTASection from "@/components/shared/CTASection";

const TenderSupport = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Resources", href: "/resources" },
    { label: "Tender Support" },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "FM Tender Support & Proposal Resources - EntireFM",
    description: "Comprehensive tender support and RFP resources for facilities management procurement.",
    author: { "@type": "Organization", name: "EntireFM" },
    publisher: { "@type": "Organization", name: "EntireFM" },
  };

  const heroStats = [
    { value: "5", label: "Document Packs" },
    { value: "100%", label: "RFP Coverage" },
    { value: "Free", label: "Download" },
  ];

  const documents = [
    { icon: FileText, title: "Full Technical Response Pack", description: "Complete methodology statements and technical capabilities" },
    { icon: Shield, title: "Compliance Documents & Certifications", description: "All statutory certifications and industry accreditations" },
    { icon: CheckCircle, title: "Risk Register + Mitigation Plan", description: "Comprehensive risk assessment with mitigation strategies" },
    { icon: Calendar, title: "Mobilisation Roadmap", description: "Clear milestones and transition timeline" },
    { icon: TrendingUp, title: "Example KPIs + SLA Framework", description: "Performance metrics tailored to your estate type" },
  ];

  const outcomes = [
    "Zero supply chain guesswork",
    "Operational alignment before contract award",
    "Stakeholder reassurance at director level",
    "Transparent commercials from day one",
  ];

  return (
    <>
      <Helmet>
        <title>FM Tender Support & Proposal Resources | EntireFM</title>
        <meta name="description" content="Comprehensive tender support for facilities management RFPs. Technical response packs, compliance documents, risk mitigation plans, and mobilisation roadmaps for procurement success." />
        <link rel="canonical" href="https://entirefm.com/resources/tender-support" />
      </Helmet>
      <BreadcrumbSchema items={breadcrumbItems} />
      <SchemaMarkup schema={schema} />

      <ServiceHeroSection
        breadcrumbItems={breadcrumbItems}
        title="Stronger submissions. Faster approvals. Risk-free procurement."
        description="We give procurement teams the clarity and confidence to select a partner who actually delivers."
        stats={heroStats}
        primaryCTA={{ label: "Download Tender Pack", icon: Download, href: "#" }}
        secondaryCTA={{ label: "Request a Proposal Draft", icon: Phone, href: "/contact" }}
      />

      <TrustBar variant="compact" />

      <ContentSection title="What We Provide for RFP Success" subtitle="EntireFM removes evaluation doubt. You're choosing a partner — not flipping a coin." centered>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {documents.map((doc, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-30px" }} transition={{ delay: index * 0.1, duration: 0.5 }}>
              <Card className="p-6 hover-lift border-border/50 hover:border-primary/50 transition-all h-full">
                <div className="p-3 bg-primary/10 rounded-xl w-fit mb-4">
                  <doc.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-medium mb-2">{doc.title}</h3>
                <p className="text-sm text-muted-foreground font-light">{doc.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </ContentSection>

      <ContentSection title="Procurement-Proof Outcomes" centered variant="muted">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-12 border-primary/20">
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {outcomes.map((outcome, index) => (
                <motion.div key={index} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-lg font-light">{outcome}</p>
                </motion.div>
              ))}
            </div>
            <div className="text-center pt-6 border-t border-border">
              <p className="text-2xl font-light mb-2">
                Save time. Reduce risk. Build confidence.
              </p>
              <p className="text-primary font-medium text-xl">Procurement done right.</p>
            </div>
          </Card>
        </div>
      </ContentSection>

      <ContentSection title="Tailored to Each Estate Type" subtitle="Whether you're managing industrial facilities, corporate offices, retail estates, or multi-site portfolios, our tender responses are customized to your specific operational requirements and risk profile." centered>
        <div className="flex flex-wrap gap-4 justify-center">
          {["Industrial", "Corporate Offices", "Retail Estates", "Multi-Site Portfolios"].map((type, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}>
              <Card className="px-6 py-4 hover-lift transition-all">
                <span className="font-light">{type}</span>
              </Card>
            </motion.div>
          ))}
        </div>
      </ContentSection>

      <CTASection
        title="Download Your Complete FM Tender Pack"
        description="Methodology statements tailored to your estate type with transparent commercials."
        primaryLabel="Download Tender Pack"
        primaryHref="#"
        primaryIcon={Download}
        secondaryLabel="Speak to a Tender Specialist"
        secondaryHref="/contact"
        variant="dark"
      />
    </>
  );
};

export default TenderSupport;
