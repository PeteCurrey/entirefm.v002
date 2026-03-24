"use client";

;
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Recycle, 
  FileCheck, 
  AlertTriangle, 
  BarChart3, 
  Leaf, 
  ClipboardList,
  ArrowRight,
  Phone,
  CheckCircle2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ServiceSchema } from "@/components/shared/SchemaMarkup";
import { FAQSection } from "@/components/shared/FAQSection";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { FAQSchema } from "@/components/shared/SchemaMarkup";
import ServiceHeroSection from "@/components/shared/ServiceHeroSection";
import AnimatedSection from "@/components/shared/AnimatedSection";
import FeatureCardGrid from "@/components/shared/FeatureCardGrid";
import StatsBanner from "@/components/shared/StatsBanner";
import CTASection from "@/components/shared/CTASection";
import ContentSection from "@/components/shared/ContentSection";
import ServiceFeatureList from "@/components/shared/ServiceFeatureList";
import { TrustBar } from "@/components/shared/TrustBar";

const WasteRecycling = () => {
  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Soft Services", href: "/services" },
    { label: "Waste & Recycling Management" }
  ];

  const heroStats = [
    { value: "75", suffix: "%", label: "Avg. Recycling Rate" },
    { value: "100", suffix: "%", label: "Duty of Care Compliance" },
    { value: "0", label: "Zero to Landfill" },
    { value: "30", suffix: "%", label: "Avg. Cost Reduction" }
  ];

  const features = [
    {
      icon: FileCheck,
      title: "Duty of Care",
      description: "Full Environmental Protection Act compliance with documented waste transfers and licensed carriers."
    },
    {
      icon: Recycle,
      title: "Recycling Optimization",
      description: "Segregation infrastructure, occupier education, and contamination monitoring to maximize diversion."
    },
    {
      icon: AlertTriangle,
      title: "Hazardous Waste",
      description: "Specialist handling for fluorescent tubes, batteries, WEEE, and chemicals with consignment notes."
    },
    {
      icon: BarChart3,
      title: "Performance Reporting",
      description: "Monthly tonnage data, diversion rates, carbon impact, and waste destination transparency."
    },
    {
      icon: Leaf,
      title: "ESG Integration",
      description: "Zero-to-landfill strategies, circular economy initiatives, and sustainability target support."
    },
    {
      icon: ClipboardList,
      title: "Compliance Audits",
      description: "Documentation verification, contractor validation, and regulatory compliance assurance."
    }
  ];

  const complianceServices = [
    {
      title: "Environmental Protection Act Requirements",
      description: "Duty of care obligations including licensed carriers, secure waste handling, waste transfer notes for every collection, authorized disposal facilities, and hazardous waste segregation. Non-compliance risks unlimited fines and criminal prosecution."
    },
    {
      title: "Waste Transfer Notes & Documentation",
      description: "Legal documentation including written descriptions, quantities, dates, and signatures. Waste carrier license verification, seasonal returns for high-volume premises, and exemption registration where required. Retained for minimum 2 years."
    },
    {
      title: "Hazardous Waste Management",
      description: "Classification, segregation, and specialist handling for fluorescent tubes, batteries, WEEE, and chemicals. Hazardous waste consignment notes, pre-notification to Environment Agency, and secure storage with bunding."
    }
  ];

  const recyclingServices = [
    {
      title: "Segregation Infrastructure",
      description: "Mixed recycling bins, separate streams where needed, food waste collection, and general waste. Internal bins in kitchens and communal areas, external bulk storage, and clear labeling."
    },
    {
      title: "Occupier Engagement",
      description: "Induction training, signage, communications, contamination feedback, awareness campaigns, and performance recognition to drive behavior change and recycling rates."
    },
    {
      title: "Waste Reduction Initiatives",
      description: "Single-use elimination, paperless operations, reusable packaging, portion control, and donation schemes. Prevention is most sustainable—avoiding waste creation."
    }
  ];

  const stats = [
    { value: "75", suffix: "%", label: "Average Recycling Rate" },
    { value: "100", suffix: "%", label: "Compliance Rate" },
    { value: "0", label: "Landfill Waste" },
    { value: "40", suffix: "%", label: "Carbon Reduction" }
  ];

  const faqs = [
    {
      question: "What is duty of care for commercial waste?",
      answer: "Environmental Protection Act 1990 imposes duty of care on waste producers: Prevent unauthorized disposal (ensure waste handled by licensed contractors), Secure waste (prevent fly-tipping, escape, spillage), Complete waste transfer notes (document every transfer—who, what, when, where), Use licensed waste carriers (check Environment Agency registration), Segregate hazardous waste (separate handling, specialist disposal). Duty of care applies to all commercial waste—general waste, recyclables, hazardous materials. Non-compliance causes: Fines (unlimited for serious breaches), Prosecution (criminal liability for illegal disposal), Reputational damage (association with fly-tipping). Duty of care is legal obligation—not optional extra. Evidence of compliance: Waste transfer notes (retain 2 years), Waste carrier licenses (verify annually), Waste destination documentation (audit trail to final disposal/recovery)."
    },
    {
      question: "How do you achieve high recycling rates in commercial buildings?",
      answer: "Recycling optimization strategies: Segregation at source (separate bins for paper, cardboard, plastics, glass, cans—prevent contamination), Clear labeling (color-coded bins, pictorial guides—reduce user error), Convenient access (bins located appropriately—kitchens, copy rooms, communal areas), Education campaigns (posters, emails, inductions—inform occupiers), Contamination monitoring (check bins regularly, provide feedback to users). Typical commercial recycling rates: Poor (10-20%), Average (30-40%), Good (50-70%), Excellent (70%+). High rates require: Infrastructure (adequate bins, convenient locations), User engagement (education, feedback), Waste contractor capability (separate collections, contamination tolerance). Recycling reduces: Disposal costs (recycling cheaper than general waste), Landfill tax (avoid £103/tonne tax on residual waste), Carbon footprint (recycling reduces emissions vs virgin material production). Supports ESG reporting—waste diversion rate is key sustainability metric."
    },
    {
      question: "What are the requirements for hazardous waste management?",
      answer: "Hazardous waste requires specialist handling: Classification (identify hazardous waste—chemicals, batteries, fluorescent tubes, contaminated materials), Segregation (separate from general waste—prevent cross-contamination), Storage (secure, labeled, bunded storage—prevent escape, spillage), Consignment notes (hazardous waste consignment notes replace standard transfer notes—more detailed documentation), Licensed carriers (specialist hazardous waste contractors only—Environment Agency registered). Common commercial hazardous wastes: Fluorescent tubes/LEDs (mercury content), Batteries (lead, lithium), WEEE (electrical equipment—contains hazardous components), Cleaning chemicals (corrosive, toxic), Contaminated materials (oil-soaked rags, chemical packaging). Non-compliant hazardous waste management causes: Prosecution (serious criminal offence), Unlimited fines, Environmental damage (contamination, pollution incidents), Health risks (exposure to toxic/corrosive materials)."
    },
    {
      question: "How does waste management relate to ESG and sustainability targets?",
      answer: "Waste is significant ESG metric: Waste diversion rate (% waste recycled vs landfilled—target 70%+), Carbon emissions (waste disposal generates GHG emissions—recycling reduces carbon footprint), Circular economy (waste as resource—support reuse, recovery), Social value (waste reduction campaigns engage occupiers, support sustainability culture). ESG-aligned waste strategies: Zero-to-landfill (all non-recyclable waste to energy recovery—avoid landfill), Single-use plastic elimination (reusable alternatives for catering, events), Food waste segregation (anaerobic digestion—generate biogas, fertilizer), Reuse schemes (furniture, IT equipment donated rather than skipped). Transparent waste reporting supports: ESG disclosure (TCFD, SECR, GRESB—waste metrics required), Tenant satisfaction (sustainability-conscious occupiers expect waste stewardship), Corporate sustainability commitments (net-zero, circular economy pledges)."
    },
    {
      question: "What documentation and audits are required for waste compliance?",
      answer: "Waste compliance documentation: Waste transfer notes (every waste collection—retain 2 years), Waste carrier licenses (verify contractors Environment Agency registered—annually), Consignment notes (hazardous waste—specific forms, detailed records), Waste data (tonnages, waste streams, destinations—monthly reporting), Exemptions or permits (if waste stored/treated on-site—register with Environment Agency). Compliance audits verify: Documentation complete (transfer notes, licenses, consignment notes), Contractors legitimate (licenses valid, no enforcement action history), Duty of care discharged (waste handled appropriately, evidence trail exists), Hazardous waste managed correctly (segregated, consignment notes completed, specialist disposal). Audits prevent: Regulatory action (enforcement notices, fines if non-compliance discovered), Contractor fraud (unlicensed operators, illegal disposal—client liable), Insurance issues (inadequate documentation invalidates cover). Professional waste management includes compliance audits and documentation management—removing burden from clients."
    }
  ];

  return (
    <>
      

      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema 
        name="Waste & Recycling Management"
        description="Sustainable management aligned with duty of care and ESG objectives. Waste segregation, recycling optimization, and compliance documentation for commercial estates."
        provider="EntireFM"
        areaServed="United Kingdom"
      />
      <FAQSchema faqs={faqs} />

      {/* Hero Section */}
      <ServiceHeroSection
        breadcrumbItems={breadcrumbItems}
        title="Waste & Recycling Management"
        description="Compliance, cost control, and environmental stewardship. Duty of care fulfilled, recycling maximized, and ESG objectives supported through professional waste management."
        stats={heroStats}
        primaryCTA={{ label: "Request Quote", href: "/request-proposal", icon: ArrowRight }}
        secondaryCTA={{ label: "0800 024 8550", href: "tel:08000248550", icon: Phone }}
      />

      {/* Trust Bar */}
      <TrustBar variant="compact" />

      {/* Features Grid */}
      <ContentSection
        title="Complete Waste Management"
        subtitle="Regulatory compliance, cost optimization, and sustainability integrated into comprehensive waste management services."
        centered
      >
        <FeatureCardGrid features={features} columns={3} variant="gradient" />
      </ContentSection>

      {/* Stats Banner */}
      <StatsBanner stats={stats} variant="gradient" />

      {/* Compliance Services */}
      <ContentSection
        title="Duty of Care & Legal Compliance"
        subtitle="Environmental Protection Act requirements fulfilled through documented processes, licensed contractors, and compliance auditing."
        variant="muted"
      >
        <ServiceFeatureList items={complianceServices} variant="cards" columns={1} />
      </ContentSection>

      {/* Recycling Optimization */}
      <ContentSection
        title="Recycling Optimization"
        subtitle="Infrastructure, engagement, and reduction initiatives to maximize diversion rates and minimize costs."
      >
        <div className="grid md:grid-cols-3 gap-8">
          {recyclingServices.map((service, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <div className="h-full p-8 bg-gradient-to-br from-muted/50 to-background border border-border rounded-2xl hover:border-primary/30 transition-all">
                <h3 className="text-xl font-medium mb-4 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground font-light leading-relaxed">{service.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </ContentSection>

      {/* ESG Section */}
      <ContentSection
        title="ESG Integration & Sustainability"
        subtitle="Waste is a significant ESG metric—our strategies support zero-to-landfill targets, carbon reduction, and circular economy principles."
        variant="gradient"
      >
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Waste Diversion",
              items: [
                "70%+ recycling rate targets",
                "Zero-to-landfill strategies",
                "Energy recovery for residual waste",
                "Food waste to anaerobic digestion"
              ]
            },
            {
              title: "Carbon Reduction",
              items: [
                "Recycling vs virgin material savings",
                "Transport optimization",
                "Waste-to-energy over landfill",
                "Circular economy support"
              ]
            },
            {
              title: "Transparent Reporting",
              items: [
                "Monthly tonnage and diversion data",
                "Carbon impact estimates (kg CO2e)",
                "Waste destination documentation",
                "ESG disclosure support (GRESB, TCFD)"
              ]
            }
          ].map((section, idx) => (
            <AnimatedSection key={idx} delay={idx * 0.1}>
              <div className="p-8 bg-card border border-border rounded-2xl h-full">
                <h3 className="text-xl font-medium mb-4">{section.title}</h3>
                <ul className="space-y-3">
                  {section.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground font-light">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </ContentSection>

      {/* Waste Hierarchy */}
      <ContentSection
        title="The Waste Hierarchy"
        subtitle="Our approach prioritizes prevention and reuse over disposal—the most sustainable waste is waste that never exists."
      >
        <AnimatedSection>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {[
                { level: "1. Prevention", desc: "Eliminate waste at source—don't create it", color: "bg-green-500" },
                { level: "2. Reuse", desc: "Extend product life through reuse and refurbishment", color: "bg-emerald-500" },
                { level: "3. Recycling", desc: "Material recovery for new products", color: "bg-yellow-500" },
                { level: "4. Recovery", desc: "Energy from waste (EfW) plants", color: "bg-orange-500" },
                { level: "5. Disposal", desc: "Landfill—last resort only", color: "bg-red-500" }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg"
                >
                  <div className={`w-3 h-3 rounded-full ${item.color} flex-shrink-0`} />
                  <div>
                    <span className="font-medium">{item.level}</span>
                    <span className="text-muted-foreground font-light"> — {item.desc}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </ContentSection>

      {/* Related Services */}
      <ContentSection
        title="Related Services"
        centered
        variant="muted"
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[
            { title: "Grounds Maintenance", desc: "Green waste management", href: "/soft-services/grounds-maintenance" },
            { title: "Specialist Cleaning", desc: "Hazardous waste from cleaning", href: "/soft-services/specialist-cleaning" },
            { title: "Concierge", desc: "Waste coordination support", href: "/soft-services/concierge" },
            { title: "ESG Consulting", desc: "Sustainability strategies", href: "/services" }
          ].map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Link href={service.href}
                className="block p-6 bg-card border border-border rounded-xl hover:border-primary/50 hover:shadow-md transition-all group"
              >
                <h3 className="font-medium mb-2 group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-sm text-muted-foreground font-light">{service.desc}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </ContentSection>

      {/* FAQ Section */}
      <ContentSection
        title="Frequently Asked Questions"
        centered
      >
        <div className="max-w-3xl mx-auto">
          <FAQSection faqs={faqs} />
        </div>
      </ContentSection>

      {/* CTA Section */}
      <CTASection
        title="Request Waste Management Services"
        description="Duty of care compliance, recycling optimization, and ESG-aligned strategies. Professional waste management that reduces costs and supports sustainability targets."
        variant="dark"
      />
    </>
  );
};

export default WasteRecycling;
