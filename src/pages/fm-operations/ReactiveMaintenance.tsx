import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ServiceSchema } from "@/components/shared/SchemaMarkup";
import { FAQSection } from "@/components/shared/FAQSection";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { FAQSchema } from "@/components/shared/SchemaMarkup";
import { SidebarCTA } from "@/components/shared/SidebarCTA";
import { RelatedServices } from "@/components/shared/RelatedServices";
import ServiceHeroSection from "@/components/shared/ServiceHeroSection";
import { Card } from "@/components/ui/card";
import { 
  Clock, 
  Wrench, 
  TrendingDown, 
  BarChart3,
  ArrowRight,
  Headphones
} from "lucide-react";

const ReactiveMaintenance = () => {
  const breadcrumbItems = [
    { label: "FM Operations", href: "/fm-operations" },
    { label: "Reactive Maintenance & SLA Management" }
  ];

  const keyFeatures = [
    {
      icon: Clock,
      title: "Rapid Response",
      description: "P1 emergencies attended within 1 hour, P2 urgent within 4 hours"
    },
    {
      icon: Wrench,
      title: "First-Time Fix",
      description: "80%+ resolution on first visit through competent engineers"
    },
    {
      icon: TrendingDown,
      title: "Cost Reduction",
      description: "Data-driven fault analysis reducing reactive call volumes"
    },
    {
      icon: BarChart3,
      title: "SLA Compliance",
      description: "Real-time monitoring and transparent performance reporting"
    }
  ];

  const faqs = [
    {
      question: "What is reactive maintenance and how does it differ from PPM?",
      answer: "Reactive maintenance addresses unexpected equipment failures and faults reported by building users—responding to breakdowns rather than preventing them. Examples include fixing broken boilers, repairing lighting failures, clearing blocked drains, and attending fire alarm faults. It contrasts with Planned Preventative Maintenance (PPM), which is scheduled, proactive, and designed to prevent failures. High reactive workload indicates asset deterioration, inadequate PPM, or end-of-life equipment. Best-practice FM targets 70-80% PPM / 20-30% reactive split—excessive reactive work is costly, disruptive, and indicative of poor asset management."
    },
    {
      question: "How are SLAs defined and measured for reactive maintenance?",
      answer: "Service Level Agreements (SLAs) define contractual response and fix times for reactive faults. Typical SLA structure: P1 Emergency (1-hour response, 4-hour fix), P2 Urgent (4-hour response, 24-hour fix), P3 Routine (24-hour response, 5-day fix). Response time = engineer on-site/remote investigation commenced. Fix time = fault rectified and system operational. SLA compliance is measured monthly: (jobs completed within SLA / total jobs) x 100%. Performance below 90-95% triggers contract reviews, penalty clauses, or service improvement plans. SLA frameworks must balance operational necessity with cost—excessively tight SLAs increase FM costs through higher engineer availability requirements."
    },
    {
      question: "What causes high reactive maintenance costs?",
      answer: "High reactive costs result from: Asset deterioration (aging equipment failing frequently), Inadequate PPM (lack of preventative maintenance allowing minor issues to escalate), Poor first-time fix rates (multiple engineer visits per fault), Out-of-hours callouts (premium rates for emergency attendance), Repeat failures (root cause not addressed), Inefficient parts management (emergency procurement at inflated costs). Reducing reactive costs requires investment in PPM, asset replacement planning, engineer competency, and diagnostic discipline. Reactive-heavy FM contracts are operationally expensive and disruptive—proactive maintenance is always more cost-effective."
    },
    {
      question: "How do you reduce reactive call volumes over time?",
      answer: "Reactive call reduction strategies: Root cause analysis (identify recurring faults and address systemically), Enhanced PPM (increase inspection frequency for failure-prone assets), Condition monitoring (predictive maintenance using sensors/IoT to detect failures before they occur), Asset replacement (end-of-life equipment replaced proactively), User education (reduce misuse and inappropriate callouts), Building management system (BMS) optimisation (automated fault detection and remote rectification). Typical reduction target: 10-20% year-on-year through continuous improvement. Data-driven analysis (fault trends, repeat failures, asset performance) informs targeted interventions and capital investment decisions."
    },
    {
      question: "What is the role of technology in reactive maintenance management?",
      answer: "Technology enables efficient reactive maintenance through: CAFM systems (call logging, job tracking, performance reporting), Mobile apps (engineer dispatch, real-time updates, asset history access), BMS integration (remote diagnostics, automated alerts), IoT sensors (predictive failure detection), Customer portals (self-service job logging, status tracking), Automated reporting (SLA compliance dashboards, trend analysis). Technology improves response times, first-time fix rates, and transparency. However, technology is only effective when combined with competent engineers, disciplined processes, and proactive asset management. Poorly configured systems create administrative burden without operational benefit."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Reactive Maintenance & SLA Management | Controlled Response | EntireFM</title>
        <meta name="description" content="Reactive maintenance with controlled response, real-time monitoring and performance-led outcomes. SLA compliance tracking, first-time fix focus, and data-driven fault resolution." />
      </Helmet>

      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema 
        name="Reactive Maintenance & SLA Management"
        description="Controlled reactive maintenance with real-time monitoring and performance-led outcomes. SLA compliance tracking and first-time fix focus for commercial estates."
        provider="EntireFM"
        areaServed="United Kingdom"
      />
      <FAQSchema faqs={faqs} />

      <div className="min-h-screen bg-background">
        <ServiceHeroSection
          breadcrumbItems={breadcrumbItems}
          title="Reactive Maintenance & SLA Management"
          description="Controlled response, real-time monitoring, and performance-led fault resolution. First-time fix focus with transparent SLA tracking."
          stats={[
            { value: "1hr", label: "P1 Response" },
            { value: "80", label: "First-Time Fix", suffix: "%" },
            { value: "95", label: "SLA Compliance", suffix: "%" },
            { value: "24/7", label: "Availability" }
          ]}
          primaryCTA={{
            label: "Request Proposal",
            href: "/request-proposal",
            icon: ArrowRight
          }}
          secondaryCTA={{
            label: "Contact Helpdesk",
            href: "/fm-operations/helpdesk",
            icon: Headphones
          }}
          backgroundImage="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1920&q=80"
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
                
                <div>
                  <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                    Reactive Maintenance: Necessity, Not Strategy
                  </h2>
                  <p className="text-muted-foreground font-light leading-relaxed mb-4">
                    Reactive maintenance addresses unexpected equipment failures—breakdowns, faults, and operational disruptions reported by building users. While some reactive work is unavoidable (unpredictable failures, user-caused damage, external factors), excessive reactive maintenance indicates: Asset deterioration (aging equipment failing frequently), Inadequate PPM (preventative maintenance not preventing failures), Poor asset management (no condition monitoring, no lifecycle planning).
                  </p>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Best-practice FM targets 70-80% PPM / 20-30% reactive workload split. High reactive volumes are costly (emergency callouts, premium rates, parts procurement), disruptive (operational downtime, user complaints), and symptomatic of underlying asset management issues.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                    SLA Framework & Performance Standards
                  </h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-medium mb-2">Priority Classification</h3>
                      <p className="text-muted-foreground font-light leading-relaxed mb-4">
                        Reactive calls are prioritised based on safety risk, operational impact, and urgency:
                      </p>
                      <div className="grid gap-4">
                        <Card className="p-4 border-l-4 border-red-500">
                          <h4 className="font-medium mb-1">P1 Emergency</h4>
                          <p className="text-sm text-muted-foreground">Immediate safety risk, critical system failure. 1-hour response, 4-hour fix. Examples: fire alarm fault, major water leak, power failure, lift entrapment.</p>
                        </Card>
                        <Card className="p-4 border-l-4 border-amber-500">
                          <h4 className="font-medium mb-1">P2 Urgent</h4>
                          <p className="text-sm text-muted-foreground">Operational impact, no safety risk. 4-hour response, 24-hour fix. Examples: HVAC failure, lighting outage, access control fault.</p>
                        </Card>
                        <Card className="p-4 border-l-4 border-green-500">
                          <h4 className="font-medium mb-1">P3 Routine</h4>
                          <p className="text-sm text-muted-foreground">Minor fault, no operational impact. 24-hour response, 5-day fix. Examples: dripping tap, cosmetic damage, non-urgent equipment issue.</p>
                        </Card>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                    First-Time Fix & Cost Efficiency
                  </h2>
                  <p className="text-muted-foreground font-light leading-relaxed mb-4">
                    First-time fix (FTF) measures the percentage of reactive jobs resolved on the first engineer visit. High FTF rates (80%+ target) indicate: Competent engineers (correct diagnosis, skilled repairs), Effective parts management (van stock, critical spares), Pre-visit preparation (asset history, technical documentation).
                  </p>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Low FTF rates ({'<'}60%) result in: Multiple site visits (increased cost, continued disruption), Customer dissatisfaction (unresolved issues, repeated callouts), Extended downtime (systems remain non-operational). Improving FTF requires investment in engineer training, mobile technology (asset history access), and optimised van stock.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                    Reducing Reactive Call Volumes
                  </h2>
                  <div className="bg-muted/50 p-6 rounded-lg space-y-4">
                    <div>
                      <h3 className="font-medium mb-2">Root Cause Analysis</h3>
                      <p className="text-sm text-muted-foreground font-light">
                        Identify recurring faults and address systemically—fix the cause, not just the symptom. Monthly fault trend analysis highlights chronic issues for targeted intervention.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">Enhanced PPM</h3>
                      <p className="text-sm text-muted-foreground font-light">
                        Increase inspection frequency for failure-prone assets. Risk-based maintenance prioritises critical equipment and deteriorating systems.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">Condition Monitoring</h3>
                      <p className="text-sm text-muted-foreground font-light">
                        Predictive maintenance using sensors, IoT, and BMS data to detect failures before they occur. Enables planned intervention rather than emergency response.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">Asset Replacement</h3>
                      <p className="text-sm text-muted-foreground font-light">
                        End-of-life equipment replaced proactively based on lifecycle planning. Capital investment prevents escalating reactive costs.
                      </p>
                    </div>
                  </div>
                </div>

                <RelatedServices 
                  services={[
                    { 
                      title: "Technical Helpdesk", 
                      description: "24/7 call logging and dispatch", 
                      link: "/fm-operations/helpdesk" 
                    },
                    { 
                      title: "PPM Delivery", 
                      description: "Preventative maintenance programmes", 
                      link: "/fm-operations/ppm-delivery" 
                    },
                    { 
                      title: "Asset Lifecycle Planning", 
                      description: "Condition-based replacement forecasting", 
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
    </>
  );
};

export default ReactiveMaintenance;