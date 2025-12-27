import { Helmet } from "react-helmet";
import { SidebarCTA } from "@/components/shared/SidebarCTA";
import { FAQSection } from "@/components/shared/FAQSection";
import { ServiceSchema, FAQSchema } from "@/components/shared/SchemaMarkup";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle2, AlertTriangle, ArrowRight, FileText } from "lucide-react";
import { RelatedServices } from "@/components/shared/RelatedServices";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { DynamicYouMayAlsoNeed } from "@/components/shared/DynamicYouMayAlsoNeed";
import ServiceHeroSection from "@/components/shared/ServiceHeroSection";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Electrical = () => {
  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Electrical Compliance" }
  ];

  const keyFeatures = [
    {
      icon: CheckCircle2,
      title: "EICR Testing",
      description: "5-yearly fixed wire testing with clear C1-C3 coding"
    },
    {
      icon: CheckCircle2,
      title: "PAT Testing",
      description: "Portable appliance testing with asset tags and inventory"
    },
    {
      icon: CheckCircle2,
      title: "Same-Day Remedials",
      description: "Immediate compliance breach fixes available"
    },
    {
      icon: CheckCircle2,
      title: "Thermographic Scanning",
      description: "Distribution board analysis and load monitoring"
    }
  ];

  const faqs = [
    {
      question: "How often do I need an EICR?",
      answer: "Typically every 5 years for commercial premises, or more frequently based on use/risk."
    },
    {
      question: "Can you carry out remedials after the inspection?",
      answer: "Yes — we quote instantly and can start same day if required."
    },
    {
      question: "Do you work out-of-hours?",
      answer: "Of course. Operational continuity comes first."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Electrical Compliance & Maintenance</title>
        <meta 
          name="description" 
          content="EICR, testing & repairs for legal uptime. Fast & certified."
        />
        <link rel="canonical" href="https://entirefm.com/services/electrical" />
      </Helmet>

      <ServiceSchema 
        name="Electrical Compliance & Testing"
        description="Commercial electrical testing, EICR certification, PAT testing, and electrical maintenance"
        provider="EntireFM"
        areaServed="United Kingdom"
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={breadcrumbItems} />

      <div className="min-h-screen bg-background">
        <ServiceHeroSection
          breadcrumbItems={breadcrumbItems}
          title="Electrical Compliance Without the Guesswork"
          description="Safety assurance. Zero disruption. Full legal protection. EICR, PAT testing and remedials by qualified UK specialists."
          stats={[
            { value: "NICEIC", label: "Approved" },
            { value: "5yr", label: "EICR Standard" },
            { value: "Same Day", label: "Remedials" },
            { value: "24/7", label: "Emergency" }
          ]}
          primaryCTA={{
            label: "Request Electrical Proposal",
            href: "/request-proposal",
            icon: ArrowRight
          }}
          secondaryCTA={{
            label: "Book EICR Survey",
            href: "/contact",
            icon: FileText
          }}
          backgroundImage="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=1920&q=80"
        />

        {/* Key Features */}
        <section className="py-16 bg-background">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {keyFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-6 h-full hover:border-primary/50 transition-colors hover-lift">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-medium mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-12">
                
                {/* Board-Level Priority */}
                <div className="bg-muted/50 p-8 rounded-lg">
                  <h2 className="text-3xl font-light mb-6">
                    Why Electrical Compliance Is a Board-Level Priority
                  </h2>
                  <p className="text-lg font-light mb-6">Electrical faults are silent threats — until they aren't.</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      "Fires",
                      "Life safety failures",
                      "Expensive downtime",
                      "Criminal liability for you as the duty holder"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <AlertTriangle className="w-5 h-5 text-accent shrink-0 mt-1" />
                        <span className="font-light">{item}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-lg font-medium mt-6">
                    We make sure none of that ever lands on your desk.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                    Services Delivered by Qualified UK Specialists
                  </h2>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-charcoal text-white">
                          <th className="p-4 text-left font-medium">Service</th>
                          <th className="p-4 text-left font-medium">Output</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-border">
                          <td className="p-4 font-light">EICR Testing (5-Yearly Standard)</td>
                          <td className="p-4 font-light text-sm">Clear coding of risks (C1–C3) with photographic evidence</td>
                        </tr>
                        <tr className="border-b border-border">
                          <td className="p-4 font-light">Emergency Call-Outs & Remedial Works</td>
                          <td className="p-4 font-light text-sm">Same-day fixes for compliance breaches</td>
                        </tr>
                        <tr className="border-b border-border">
                          <td className="p-4 font-light">PAT Testing</td>
                          <td className="p-4 font-light text-sm">Asset tags + inventory for audit trail</td>
                        </tr>
                        <tr className="border-b border-border">
                          <td className="p-4 font-light">Distribution Board Maintenance</td>
                          <td className="p-4 font-light text-sm">Thermographic scanning + load analysis</td>
                        </tr>
                        <tr className="border-b border-border">
                          <td className="p-4 font-light">Lighting & Control Gear</td>
                          <td className="p-4 font-light text-sm">Energy efficiency upgrades & safety checks</td>
                        </tr>
                        <tr className="border-b border-border">
                          <td className="p-4 font-light">ARC / Panel Maintenance</td>
                          <td className="p-4 font-light text-sm">Minimising outages & switchgear failure</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-muted-foreground font-light mt-6">
                    You get certificates with every visit — downloadable anytime via our portal.
                  </p>
                </div>

                {/* UK Legal Requirements */}
                <div>
                  <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                    UK Legal Requirements Covered
                  </h2>
                  <p className="text-muted-foreground font-light mb-6">
                    Your compliance obligations — handled:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      "Electricity at Work Regulations 1989",
                      "BS 7671 requirements for electrical installations",
                      "Landlord safety responsibilities (commercial tenancy)",
                      "Insurance audit readiness"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                        <span className="font-light">{item}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-lg font-medium mt-6">
                    We translate regulations into actions — and then deliver them on time.
                  </p>
                </div>

                {/* Reporting */}
                <div className="bg-muted/50 p-8 rounded-lg">
                  <h2 className="text-3xl font-light mb-6">
                    Reporting Clients Actually Use
                  </h2>
                  <p className="text-muted-foreground font-light mb-6">
                    Every report includes:
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="border-l-4 border-accent pl-6">
                      <h3 className="font-medium mb-2">Clear coding & recommended actions</h3>
                      <p className="text-sm font-light text-muted-foreground">
                        No ambiguity. Just clear next steps.
                      </p>
                    </div>
                    <div className="border-l-4 border-accent pl-6">
                      <h3 className="font-medium mb-2">Photographic evidence & timestamps</h3>
                      <p className="text-sm font-light text-muted-foreground">
                        Full audit trail for every inspection.
                      </p>
                    </div>
                    <div className="border-l-4 border-accent pl-6">
                      <h3 className="font-medium mb-2">Costed remedials ready for approval</h3>
                      <p className="text-sm font-light text-muted-foreground">
                        Budget-ready pricing with no surprises.
                      </p>
                    </div>
                    <div className="border-l-4 border-accent pl-6">
                      <h3 className="font-medium mb-2">Root-cause insights</h3>
                      <p className="text-sm font-light text-muted-foreground">
                        Prevent repeat failures with actionable intelligence.
                      </p>
                    </div>
                  </div>
                  <p className="text-lg font-medium mt-6">
                    No jargon. No hiding behind standards.
                  </p>
                </div>

                <RelatedServices 
                  services={[
                    {
                      title: "PPM Delivery",
                      description: "Scheduled electrical testing and maintenance programs",
                      link: "/fm-operations/ppm-delivery"
                    },
                    {
                      title: "Reactive Maintenance",
                      description: "24/7 electrical fault response and emergency repairs",
                      link: "/fm-operations/reactive-maintenance"
                    },
                    {
                      title: "Asset Lifecycle Planning",
                      description: "Electrical infrastructure condition surveys and replacement forecasting",
                      link: "/fm-operations/asset-lifecycle"
                    }
                  ]}
                />

                <FAQSection faqs={faqs} />
              </div>

              <aside className="lg:col-span-1">
                <div className="sticky top-24">
                  <SidebarCTA />
                </div>
              </aside>
            </div>
          </div>
        </section>
      </div>

      <DynamicYouMayAlsoNeed pageType="compliance" currentPageUrl="/services/electrical" />
    </>
  );
};

export default Electrical;