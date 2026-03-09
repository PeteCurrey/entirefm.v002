import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Leaf, TrendingDown, Users, Award, Lightbulb, Wind, Thermometer, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { SchemaMarkup } from "@/components/shared/SchemaMarkup";
import ServiceHeroSection from "@/components/shared/ServiceHeroSection";
import { TrustBar } from "@/components/shared/TrustBar";
import ContentSection from "@/components/shared/ContentSection";
import CTASection from "@/components/shared/CTASection";

const EnergyESG = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Resources", href: "/resources" },
    { label: "Energy & ESG" },
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Energy & ESG Improvement — Operating Cost Advantage",
    description: "Turn FM actions into OpEx savings with energy efficiency upgrades and ESG facilities strategy",
    author: { "@type": "Organization", name: "EntireFM" },
    publisher: { "@type": "Organization", name: "EntireFM", logo: { "@type": "ImageObject", url: "https://entirefm.com/logo.png" } },
  };

  const heroStats = [
    { value: "10-30%", label: "Energy Reduction" },
    { value: "2-3yr", label: "Typical Payback" },
    { value: "100%", label: "Compliance Coverage" },
  ];

  const strategicWins = [
    { icon: Lightbulb, title: "LED & HVAC Optimisations", description: "Retrofit lighting and tune mechanical systems for immediate energy reduction" },
    { icon: Thermometer, title: "BMS Rule Tuning", description: "Optimise building management systems for peak efficiency and comfort" },
    { icon: Wind, title: "IAQ Improvements", description: "Indoor air quality enhancements = wellbeing + productivity lift" },
    { icon: TrendingDown, title: "Demand-Side Load Control", description: "Strategic load management reduces peak consumption and costs" },
    { icon: Leaf, title: "On-Site Renewables Integration", description: "Partner model for solar, heat pumps, and renewable generation" },
  ];

  const boardLevelValue = [
    { driver: "Carbon Reduction", action: "Energy use cut", gain: "Lower operational footprint" },
    { driver: "Employee Wellbeing", action: "IAQ + comfort control", gain: "Better retention & output" },
    { driver: "Brand Reputation", action: "Sustainability wins", gain: "Procurement alignment" },
  ];

  return (
    <>
      <Helmet>
        <title>Energy Efficiency & ESG Strategy | FM Sustainability Solutions | EntireFM</title>
        <meta name="description" content="Turn FM actions into OpEx savings. Energy efficiency upgrades, ESG strategy, and sustainability improvements that deliver measurable board-level value." />
        <link rel="canonical" href="https://entirefm.co.uk/resources/energy-esg" />
      </Helmet>
      <SchemaMarkup schema={schemaData} />
      <BreadcrumbSchema items={breadcrumbItems} />

      <ServiceHeroSection
        breadcrumbItems={breadcrumbItems}
        title="Energy is Now a Board Priority"
        description="We turn FM actions into OpEx savings. Energy efficiency upgrades, ESG strategy, and sustainability improvements that deliver measurable board-level value."
        stats={heroStats}
        primaryCTA={{ label: "Request Energy Proposal", icon: ArrowRight, href: "/contact" }}
        secondaryCTA={{ label: "Benchmark My Building", icon: TrendingDown, href: "/tools/cost-savings-calculator" }}
      />

      <TrustBar variant="compact" />

      <ContentSection title="Strategic Wins We Deliver" subtitle="Practical energy initiatives with measurable outcomes." centered>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {strategicWins.map((win, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-30px" }} transition={{ delay: index * 0.075, duration: 0.5 }}>
              <Card className="h-full hover-lift border-border/50 hover:border-primary/50 transition-all">
                <CardContent className="pt-6">
                  <div className="p-3 bg-primary/10 rounded-xl w-fit mb-4">
                    <win.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-medium mb-2">{win.title}</h3>
                  <p className="text-sm text-muted-foreground font-light">{win.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </ContentSection>

      <ContentSection title="Board-Level Value" subtitle="FM becomes the hero — not the overhead." centered variant="muted">
        <div className="grid gap-6 max-w-5xl mx-auto">
          {boardLevelValue.map((item, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-30px" }} transition={{ delay: index * 0.1, duration: 0.5 }}>
              <Card className="hover-lift border-border/50 hover:border-primary/50 transition-all">
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <p className="text-sm text-muted-foreground mb-2">ESG Driver</p>
                      <p className="font-medium text-foreground text-lg">{item.driver}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-2">FM Action</p>
                      <p className="font-medium text-foreground text-lg">{item.action}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-2">Measurable Gain</p>
                      <p className="font-medium text-primary text-lg">{item.gain}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </ContentSection>

      <ContentSection title="Targeted Results" centered>
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0 }}>
            <Card className="hover-lift transition-all">
              <CardContent className="pt-8 text-center">
                <div className="text-5xl font-light text-primary mb-4">10–30%</div>
                <p className="text-muted-foreground font-light">Energy Reduction Typical Range</p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <Card className="hover-lift transition-all">
              <CardContent className="pt-8 text-center">
                <div className="p-3 bg-primary/10 rounded-xl w-fit mx-auto mb-4">
                  <Users className="w-10 h-10 text-primary" />
                </div>
                <p className="text-muted-foreground font-light">Soft FM enhancements improve workplace scoring</p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <Card className="hover-lift transition-all">
              <CardContent className="pt-8 text-center">
                <div className="p-3 bg-primary/10 rounded-xl w-fit mx-auto mb-4">
                  <CheckCircle className="w-10 h-10 text-primary" />
                </div>
                <p className="text-muted-foreground font-light">Scalable investment with short payback timelines</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </ContentSection>

      <CTASection
        title="Secure Energy Savings and Sustainability Approvals"
        description="Proposal drafted with costed outcomes and measurable impact."
        primaryLabel="Request Energy Proposal"
        primaryHref="/contact"
        secondaryLabel="Explore HVAC Services"
        secondaryHref="/services/hvac"
        variant="dark"
      />

      <ContentSection variant="muted">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-xl font-light mb-8">Related Resources</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "FM Audit Framework", href: "/resources/audit-framework" },
              { label: "Cost Savings Calculator", href: "/tools/cost-savings-calculator" },
              { label: "All Services", href: "/services" },
              { label: "Corporate Sector", href: "/sectors/offices-corporate" },
            ].map((link, idx) => (
              <Link key={idx} to={link.href} className="group">
                <Card className="p-4 h-full hover-lift border-border/50 hover:border-primary/50 transition-all text-center">
                  <span className="text-sm font-medium group-hover:text-primary transition-colors">{link.label}</span>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </ContentSection>
    </>
  );
};

export default EnergyESG;
