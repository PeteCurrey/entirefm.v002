import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { SidebarCTA } from "@/components/shared/SidebarCTA";
import { FAQSection } from "@/components/shared/FAQSection";
import { ServiceSchema, FAQSchema, SchemaMarkup } from "@/components/shared/SchemaMarkup";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle2, AlertTriangle, Flame, Shield, Database, Zap, ArrowRight, FileText } from "lucide-react";
import { useConversionTracking } from "@/hooks/useConversionTracking";
import { RelatedServices } from "@/components/shared/RelatedServices";
import ServiceHeroSection from "@/components/shared/ServiceHeroSection";
import AnimatedSection from "@/components/shared/AnimatedSection";
import ContentSection from "@/components/shared/ContentSection";
import FeatureCardGrid from "@/components/shared/FeatureCardGrid";

const GasSafety = () => {
  const { trackProposalRequest } = useConversionTracking();

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Gas Safety & Boiler Compliance" }
  ];

  const keyFeatures = [
    {
      icon: Flame,
      title: "CP1 / CP15 Certification",
      description: "Full commercial gas safety certificates for all installations"
    },
    {
      icon: Shield,
      title: "CP42 Catering Compliance",
      description: "Restaurants, hotels, takeaways and dark kitchen certification"
    },
    {
      icon: CheckCircle2,
      title: "Boiler Servicing",
      description: "Annual maintenance with combustion analysis and safety checks"
    },
    {
      icon: AlertTriangle,
      title: "CO Risk Elimination",
      description: "Carbon monoxide testing and emergency isolation protocols"
    }
  ];

  const faqs = [
    {
      question: "How often do commercial boilers require servicing?",
      answer: "Annually at minimum — more if high-load or critical use."
    },
    {
      question: "Do kitchens legally require CP42 certification?",
      answer: "Yes — every year."
    },
    {
      question: "Do you offer 24/7 emergency response?",
      answer: "Yes — urgent hazards are resolved immediately."
    },
    {
      question: "What causes carbon monoxide risk?",
      answer: "Poor combustion, inadequate ventilation, blocked flues, and faulty equipment. We test and eliminate these risks during every inspection."
    }
  ];

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "EntireFM Gas Safety Services",
    "description": "Commercial gas safety, CP1/CP15/CP42 certification, and boiler compliance services",
    "areaServed": "United Kingdom",
    "serviceType": "Gas Safety & Commercial Boiler Compliance",
    "email": "hello@entirefm.com"
  };

  return (
    <>
      <Helmet>
        <title>Commercial Gas Safety & Boiler Compliance Services | Gas Safe Inspections</title>
        <meta 
          name="description" 
          content="Gas Safe inspections, CP1/CP15 certification, catering CP42 compliance and carbon monoxide risk elimination across commercial estates."
        />
        <link rel="canonical" href="https://entirefm.com/services/gas-safety" />
      </Helmet>

      <ServiceSchema 
        name="Commercial Gas Safety & Boiler Compliance Services"
        description="Gas Safe inspections, CP1/CP15 certification, catering CP42 compliance and carbon monoxide risk elimination across commercial estates"
        provider="EntireFM"
        areaServed="United Kingdom"
      />
      <SchemaMarkup schema={localBusinessSchema} />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={breadcrumbItems} />

      <div className="min-h-screen bg-background">
        <ServiceHeroSection
          breadcrumbItems={breadcrumbItems}
          title="Commercial Gas Safety & Boiler Compliance"
          description="Gas Safe inspections, CP1/CP15 certification, catering CP42 compliance and carbon monoxide risk elimination across commercial estates."
          stats={[
            { value: "Gas Safe", label: "Registered" },
            { value: "CP42", label: "Catering Cert" },
            { value: "24/7", label: "Emergency" },
            { value: "Same Day", label: "Response" }
          ]}
          primaryCTA={{
            label: "Request Gas Compliance Audit",
            href: "/request-proposal",
            icon: ArrowRight
          }}
          secondaryCTA={{
            label: "Download Gas Checklist",
            href: "/resources",
            icon: FileText
          }}
          backgroundImage="https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=1920&q=80"
        />

        {/* Key Features Grid */}
        <section className="py-16 bg-background">
          <div className="max-w-6xl mx-auto px-4">
            <FeatureCardGrid features={keyFeatures} columns={4} variant="gradient" />
          </div>
        </section>

        {/* Gas Safety Failures Section */}
        <ContentSection variant="muted" title="Gas Safety Failures Are Public — and Prosecuted" subtitle="Gas is high hazard. When systems fail, the consequences are severe and immediate.">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection delay={0.1}>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {[
                  "Carbon monoxide exposure kills silently",
                  "HSE prosecutes under Gas Safety Regulations 1998",
                  "Insurance claims are voided",
                  "Buildings are evacuated and closed",
                  "Operators make headlines for all the wrong reasons"
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3 p-4 border border-destructive/20 rounded-lg bg-destructive/5"
                  >
                    <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                    <span className="font-light text-foreground">{item}</span>
                  </motion.div>
                ))}
              </div>
              <div className="bg-primary/5 p-6 rounded-lg border border-primary/20 text-center">
                <p className="text-xl font-light text-foreground">
                  We remove the risk entirely — <span className="text-primary font-medium">and prove it's controlled.</span>
                </p>
              </div>
            </AnimatedSection>
          </div>
        </ContentSection>

        {/* Main Content Grid */}
        <section className="py-16 bg-background">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-12">
                
                {/* Full Gas Compliance Delivery */}
                <AnimatedSection className="bg-muted/30 p-8 rounded-xl">
                  <h2 className="text-3xl font-light mb-6">
                    Full Gas Compliance Delivery
                  </h2>
                  <p className="text-muted-foreground font-light mb-6">All statutory requirements delivered:</p>
                  <div className="space-y-4">
                    {[
                      { icon: Flame, text: "CP1 / CP15 Commercial Gas Certificates" },
                      { icon: Flame, text: "CP42 Catering Gas Safety (restaurants, takeaways, hotel kitchens, dark kitchens)" },
                      { icon: CheckCircle2, text: "Commercial boiler servicing & combustion checks" },
                      { icon: Shield, text: "Pressure system safety & PRV testing" },
                      { icon: CheckCircle2, text: "Ventilation & flue integrity validation" },
                      { icon: AlertTriangle, text: "Emergency shut-off systems proven and labelled" }
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-background/50 transition-colors"
                      >
                        <item.icon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="font-light text-foreground">{item.text}</span>
                      </motion.div>
                    ))}
                  </div>
                  <p className="text-lg font-medium mt-6 text-foreground">
                    Certified Gas Safe engineers only. No subcontracting gambles.
                  </p>
                </AnimatedSection>

                {/* Carbon Monoxide Risk */}
                <AnimatedSection delay={0.1}>
                  <h2 className="text-3xl font-light mb-6">
                    <span className="underline-accent">Carbon Monoxide Risk — Zero Tolerance</span>
                  </h2>
                  <p className="text-muted-foreground font-light mb-6">
                    We test and enforce safety on every <Link to="/fm-operations/ppm-delivery" className="text-primary hover:underline">PPM visit</Link>:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      "Combustion performance",
                      "Fresh air supply",
                      "Extraction airflow",
                      "CO detector operation",
                      "Flue gas leakage"
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        className="border-l-4 border-primary pl-4 py-2"
                      >
                        <span className="font-medium text-foreground">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                  <p className="text-lg font-medium mt-6 text-foreground">
                    If CO risk exists → Stop. Fix. Sign off. No negotiation with hazard.
                  </p>
                </AnimatedSection>

                {/* Energy & Efficiency */}
                <AnimatedSection delay={0.2} className="bg-muted/30 p-8 rounded-xl">
                  <h2 className="text-3xl font-light mb-6">
                    Energy & Efficiency Performance Gains
                  </h2>
                  <p className="text-muted-foreground font-light mb-6">We turn plantrooms into productivity assets:</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      { icon: Zap, text: "High-efficiency boiler upgrades" },
                      { icon: Flame, text: "Burner optimisation" },
                      { icon: Database, text: "Smart BMS control improvements" },
                      { icon: Shield, text: "R32 & low-GWP migration planning" },
                      { icon: Zap, text: "Heat recovery integration" }
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        className="flex items-start gap-3 p-3"
                      >
                        <item.icon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="font-light text-foreground">{item.text}</span>
                      </motion.div>
                    ))}
                  </div>
                  <div className="mt-6 p-4 bg-charcoal text-white rounded-lg">
                    <p className="font-light">
                      <strong>Result:</strong> Lower OpEx, save fuel, save downtime, save CO₂.
                    </p>
                  </div>
                </AnimatedSection>

                {/* Governance & Certification */}
                <AnimatedSection delay={0.1}>
                  <h2 className="text-3xl font-light mb-6">
                    <span className="underline-accent">Governance & Certification Digitalised</span>
                  </h2>
                  <p className="text-muted-foreground font-light mb-6">Our platform stores:</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      { icon: Database, text: "Full certificate history" },
                      { icon: CheckCircle2, text: "Remedial lifecycle tracking" },
                      { icon: Shield, text: "Asset condition scores" },
                      { icon: AlertTriangle, text: "Renewal notifications" }
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        className="flex items-start gap-3 p-4 border border-border rounded-lg bg-card"
                      >
                        <item.icon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="font-light text-foreground">{item.text}</span>
                      </motion.div>
                    ))}
                  </div>
                  <p className="text-lg font-medium mt-6 text-foreground">
                    Auditors love it. Insurers expect it. Procurement trusts it.
                  </p>
                </AnimatedSection>

                {/* Sector Expertise */}
                <AnimatedSection delay={0.2}>
                  <h2 className="text-3xl font-light mb-6">
                    <span className="underline-accent">Sector Expertise</span>
                  </h2>
                  <p className="text-muted-foreground font-light mb-6">We support:</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      { name: "Hospitality / food service", link: "/sectors/hospitality-leisure" },
                      { name: "PBSA & residential operators", link: "/sectors/residential-pbsa" },
                      { name: "Retail environments", link: "/sectors/retail-service-stations" },
                      { name: "Industrial estates", link: "/sectors/industrial-logistics" },
                      { name: "Healthcare & public buildings", link: "/sectors" },
                      { name: "Corporate workplaces", link: "/sectors/offices-corporate" }
                    ].map((sector, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <Link 
                          to={sector.link}
                          className="flex items-start gap-3 p-4 rounded-lg border border-border hover:border-primary transition-colors group bg-card"
                        >
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                          <span className="font-light group-hover:text-primary transition-colors">{sector.name}</span>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </AnimatedSection>

                {/* Case Studies */}
                <AnimatedSection delay={0.1}>
                  <h2 className="text-3xl font-light mb-6">
                    <span className="underline-accent">Case Studies</span>
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="border-l-4 border-primary pl-6 p-4 bg-muted/30 rounded-r-lg"
                    >
                      <h3 className="font-medium mb-2 text-foreground">City Hotel</h3>
                      <p className="text-sm text-muted-foreground font-light">
                        Full CP42 compliance delivered with zero guest disruption.
                      </p>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 }}
                      className="border-l-4 border-primary pl-6 p-4 bg-muted/30 rounded-r-lg"
                    >
                      <h3 className="font-medium mb-2 text-foreground">Industrial Park</h3>
                      <p className="text-sm text-muted-foreground font-light">
                        Emergency flue remedials completed same day.
                      </p>
                    </motion.div>
                  </div>
                  <p className="text-sm text-muted-foreground font-light mt-4 italic">
                    * Real performance stories coming soon
                  </p>
                </AnimatedSection>

                <RelatedServices 
                  services={[
                    {
                      title: "PPM Delivery",
                      description: "Annual gas safety inspections and boiler servicing schedules",
                      link: "/fm-operations/ppm-delivery"
                    },
                    {
                      title: "Reactive Maintenance",
                      description: "Emergency gas leak response and appliance repairs",
                      link: "/fm-operations/reactive-maintenance"
                    },
                    {
                      title: "Emergency Response",
                      description: "24/7 gas emergency attendance and make-safe procedures",
                      link: "/services/emergency-response"
                    },
                    {
                      title: "Asset Lifecycle Planning",
                      description: "Boiler and heating system replacement forecasting",
                      link: "/fm-operations/asset-lifecycle"
                    }
                  ]}
                />

                <FAQSection faqs={faqs} />
              </div>

              {/* Sidebar */}
              <aside className="lg:col-span-1">
                <div className="sticky top-24">
                  <SidebarCTA />
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <ContentSection variant="gradient" centered>
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-light mb-4">
              Gas compliance isn't optional — it's operational survival.
            </h2>
            <p className="text-lg text-muted-foreground mb-2">
              Protect health. Protect compliance. Protect your business.
            </p>
            <p className="text-muted-foreground mb-8">📩 hello@entirefm.com</p>
            <Button 
              size="lg" 
              onClick={() => trackProposalRequest('gas_safety_footer')}
              asChild
            >
              <Link to="/request-proposal">
                <ArrowRight className="w-5 h-5 mr-2" />
                Request Gas Compliance Audit
              </Link>
            </Button>
          </AnimatedSection>
        </ContentSection>
      </div>
    </>
  );
};

export default GasSafety;
