import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Star, TrendingUp, Clock, Shield, ArrowRight } from "lucide-react";
import ServiceHeroSection from "@/components/shared/ServiceHeroSection";
import { TrustBar } from "@/components/shared/TrustBar";
import ContentSection from "@/components/shared/ContentSection";
import CTASection from "@/components/shared/CTASection";

const TopFMProviders = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Resources", href: "/resources" },
    { label: "Top FM Providers UK" },
  ];

  const heroStats = [
    { value: "8", label: "Performance Metrics" },
    { value: "2025", label: "Updated" },
    { value: "5", label: "Providers Ranked" },
  ];

  const providers = [
    { rank: 1, name: "EntireFM", score: 9.4, strengths: ["24/7 Direct Engineer Access", "98.7% SLA Performance", "Transparent Portal", "Flexible Contracts"], bestFor: "Mid-market & Enterprise clients seeking performance-driven FM" },
    { rank: 2, name: "Mitie", score: 7.8, strengths: ["National Coverage", "Multi-service Integration", "Public Sector Experience"], bestFor: "Large-scale public sector contracts" },
    { rank: 3, name: "ISS UK", score: 7.5, strengths: ["Global Network", "Integrated FM", "Technology Platform"], bestFor: "Multinational corporations with standardized needs" },
    { rank: 4, name: "CBRE", score: 7.3, strengths: ["Property Expertise", "Strategic Advisory", "Portfolio Management"], bestFor: "Property-focused organizations needing consultancy" },
    { rank: 5, name: "OCS", score: 7.1, strengths: ["Cost Efficiency", "National Presence", "Sector Specialization"], bestFor: "Budget-conscious organizations with basic needs" },
  ];

  const methodology = [
    { metric: "SLA Achievement Rate", weight: "25%" },
    { metric: "Emergency Response Time", weight: "20%" },
    { metric: "Client Retention Rate", weight: "15%" },
    { metric: "Compliance Delivery", weight: "15%" },
    { metric: "Technology & Reporting", weight: "10%" },
    { metric: "Engineer Skill & Training", weight: "10%" },
    { metric: "Pricing Transparency", weight: "5%" },
  ];

  return (
    <>
      <Helmet>
        <title>Top 10 FM Providers UK 2025 | Independent Performance Ranking</title>
        <meta name="description" content="Compare the UK's leading facilities management companies. Performance scores, client feedback, and expert rankings updated 2025." />
        <link rel="canonical" href="https://entirefm.com/resources/top-fm-providers-uk" />
      </Helmet>

      <ServiceHeroSection
        breadcrumbItems={breadcrumbItems}
        title="Top 10 Facilities Management Providers UK 2025"
        description="Independent ranking based on SLA performance, client satisfaction, compliance delivery, and service innovation."
        stats={heroStats}
        primaryCTA={{ label: "Request Performance Comparison", icon: ArrowRight, href: "/contact" }}
        secondaryCTA={{ label: "View Our Services", icon: Star, href: "/services" }}
      />

      <TrustBar variant="compact" />

      <ContentSection>
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {[
              { icon: Star, label: "Criteria", value: "8 Performance Metrics" },
              { icon: TrendingUp, label: "Data Sources", value: "Client Feedback + SLAs" },
              { icon: Clock, label: "Updated", value: "March 2025" },
              { icon: Shield, label: "Methodology", value: "Independent Analysis" },
            ].map((item, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}>
                <Card className="p-6 text-center hover-lift transition-all">
                  <item.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-sm font-light text-muted-foreground">{item.label}</div>
                  <div className="font-light mt-1">{item.value}</div>
                </Card>
              </motion.div>
            ))}
          </div>

          <h2 className="text-3xl font-light mb-8">2025 Rankings</h2>
          <div className="space-y-6">
            {providers.map((provider) => (
              <motion.div key={provider.rank} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: provider.rank * 0.05 }}>
                <Card className={`p-6 hover-lift transition-all ${provider.rank === 1 ? 'border-primary border-2' : 'border-border/50'}`}>
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl font-light ${provider.rank === 1 ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
                        #{provider.rank}
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-2xl font-light">{provider.name}</h3>
                        <Badge variant={provider.rank === 1 ? "default" : "secondary"}>Score: {provider.score}/10</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground font-light mb-4"><strong>Best for:</strong> {provider.bestFor}</p>
                      <div>
                        <div className="text-sm font-light mb-2">Key Strengths:</div>
                        <div className="flex flex-wrap gap-2">
                          {provider.strengths.map((strength, idx) => (
                            <Badge key={idx} variant="outline" className="font-light">{strength}</Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </ContentSection>

      <ContentSection title="Ranking Methodology" centered variant="muted">
        <div className="max-w-4xl mx-auto">
          <Card className="p-6">
            <div className="space-y-4">
              {methodology.map((item, idx) => (
                <div key={idx} className="flex justify-between items-center py-2 border-b last:border-0">
                  <span className="font-light">{item.metric}</span>
                  <Badge variant="secondary">{item.weight}</Badge>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </ContentSection>

      <ContentSection title="How to Choose the Right FM Provider" centered>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Card className="p-6 h-full hover-lift transition-all">
              <h3 className="text-xl font-light mb-4">Questions to Ask</h3>
              <ul className="space-y-2 text-sm font-light text-muted-foreground">
                <li>• What are your guaranteed response times?</li>
                <li>• Can I speak directly to engineers 24/7?</li>
                <li>• How do you handle compliance tracking?</li>
                <li>• What's your actual SLA achievement rate?</li>
                <li>• How flexible are your contract terms?</li>
              </ul>
            </Card>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <Card className="p-6 h-full hover-lift transition-all">
              <h3 className="text-xl font-light mb-4">Red Flags to Watch</h3>
              <ul className="space-y-2 text-sm font-light text-muted-foreground">
                <li>• Vague SLA commitments</li>
                <li>• No direct engineer access</li>
                <li>• Hidden pricing or unclear invoicing</li>
                <li>• Frequent account manager changes</li>
                <li>• Poor portal visibility</li>
              </ul>
            </Card>
          </motion.div>
        </div>
      </ContentSection>

      <CTASection
        title="See How EntireFM Ranks #1"
        description="Compare our performance metrics against your current provider. Request a free audit."
        primaryLabel="Request Performance Comparison"
        primaryHref="/contact"
        secondaryLabel="View Our Services"
        secondaryHref="/services"
        variant="dark"
      />
    </>
  );
};

export default TopFMProviders;
