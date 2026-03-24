"use client";

;
import Link from "next/link";
import { motion } from "framer-motion";
import { ServiceSchema } from "@/components/shared/SchemaMarkup";
import { FAQSection } from "@/components/shared/FAQSection";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { FAQSchema } from "@/components/shared/SchemaMarkup";
import { SidebarCTA } from "@/components/shared/SidebarCTA";
import { RelatedServices } from "@/components/shared/RelatedServices";
import ServiceHeroSection from "@/components/shared/ServiceHeroSection";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Headphones, 
  Clock, 
  CheckCircle2, 
  Wrench, 
  BarChart3, 
  ArrowRight,
  Phone,
  AlertTriangle,
  FileText,
  Zap
} from "lucide-react";

const Helpdesk = () => {
  const breadcrumbItems = [
    { label: "FM Operations", href: "/fm-operations" },
    { label: "Technical Helpdesk & 24/7 FM Support" }
  ];

  const keyFeatures = [
    {
      icon: Clock,
      title: "24/7/365 Availability",
      description: "Round-the-clock support with trained FM coordinators ready to respond"
    },
    {
      icon: Zap,
      title: "Rapid Response",
      description: "P1 emergencies dispatched immediately, routine requests triaged efficiently"
    },
    {
      icon: CheckCircle2,
      title: "80%+ First-Time Fix",
      description: "Competent engineers, optimised van stock, and diagnostic discipline"
    },
    {
      icon: BarChart3,
      title: "Transparent Reporting",
      description: "Monthly SLA dashboards, trend analysis, and performance metrics"
    }
  ];

  const faqs = [
    {
      question: "What is the role of an FM helpdesk?",
      answer: "An FM helpdesk is the single point of contact for all building-related service requests, faults, and emergencies. It receives calls/emails from building users, logs requests into CAFM systems, prioritises by urgency/SLA, dispatches appropriate engineers (internal or subcontractors), monitors job progress, and provides status updates to customers. Effective helpdesks operate 24/7/365, triage issues intelligently (emergency vs routine), and escalate critical failures immediately. The helpdesk is the operational nerve centre—poor helpdesk performance causes service delays, missed SLAs, and user frustration. Best-practice helpdesks achieve 80%+ first-time fix rates and respond to emergencies within contractual SLAs."
    },
    {
      question: "How do you prioritise reactive maintenance requests?",
      answer: "Reactive requests are prioritised using SLA frameworks: P1 Emergency (immediate response, safety risk, critical system failure)—examples: fire alarm fault, major water leak, loss of power, lift entrapment. P2 Urgent (2-4 hour response, operational impact, no safety risk)—examples: HVAC failure, lighting outage, access control fault. P3 Routine (24-48 hour response, minor fault, no operational impact)—examples: dripping tap, cosmetic damage, non-urgent equipment issue. Each priority level has defined response and fix times. Prioritisation prevents helpdesk overload and ensures critical issues receive immediate attention while routine tasks are scheduled efficiently."
    },
    {
      question: "What is first-time fix and why does it matter?",
      answer: "First-time fix (FTF) is the percentage of reactive calls resolved on the first engineer visit without requiring return visits, parts orders, or specialist support. High FTF rates (80%+) indicate competent engineers, accurate diagnostics, and effective parts management. Low FTF rates (<60%) suggest skills gaps, poor diagnostics, inadequate van stock, or reactive culture. FTF impacts customer satisfaction (fewer disruptions), operational cost (fewer visits), and SLA performance (faster resolution). Improving FTF requires competency training, mobile technology (access to technical manuals, CAFM asset history), optimised van stock, and diagnostic discipline."
    },
    {
      question: "How do you manage out-of-hours and emergency calls?",
      answer: "Out-of-hours support (evenings, weekends, public holidays) is delivered via 24/7 helpdesk with on-call engineers and specialist subcontractor networks. Emergency calls are triaged for severity: life-safety (immediate dispatch), critical systems (callout within 1-2 hours), or defer to next working day (non-urgent). On-call engineers have remote access to building management systems (BMS), CAFM asset data, and technical documentation to diagnose issues before attending site. Emergency response protocols include client notifications, contractor escalation pathways, and incident logging. Effective out-of-hours management prevents minor issues escalating into major failures and minimises operational downtime."
    },
    {
      question: "What reporting metrics define helpdesk performance?",
      answer: "Key helpdesk KPIs: Call volume (total reactive requests per month), Response compliance (% calls responded within SLA), Resolution compliance (% calls fixed within SLA), First-time fix rate (% resolved on first visit), Average time to resolve (days), Customer satisfaction score (survey-based), Repeat calls (% of re-opened jobs indicating poor initial fix), Escalations (% requiring management intervention). Monthly reporting should include trend analysis (increasing call volumes indicate asset deterioration), root cause analysis (recurring faults suggest design/maintenance issues), and corrective actions. Transparent performance data drives continuous improvement and contract accountability."
    }
  ];

  return (
    <>
      

      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema 
        name="Technical Helpdesk & 24/7 FM Support"
        description="Technical helpdesk engineered around first-time fix, SLA control and proactive reporting. 24/7 reactive maintenance support with real-time dispatch and performance monitoring."
        provider="EntireFM"
        areaServed="United Kingdom"
      />
      <FAQSchema faqs={faqs} />

      <div className="min-h-screen bg-background">
        <ServiceHeroSection
          breadcrumbItems={breadcrumbItems}
          title="Technical Helpdesk & 24/7 FM Support"
          description="Helpdesk engineered around first-time fix, SLA control, and proactive performance reporting. Your single point of contact for all reactive maintenance."
          stats={[
            { value: "24/7", label: "Availability" },
            { value: "41", label: "Avg Response", suffix: "min" },
            { value: "80", label: "First-Time Fix", suffix: "%" },
            { value: "98", label: "SLA Compliance", suffix: "%" }
          ]}
          primaryCTA={{
            label: "Report an Issue",
            href: "/fm-operations/report-issue",
            icon: AlertTriangle
          }}
          secondaryCTA={{
            label: "Knowledge Base",
            href: "/fm-operations/knowledge-base",
            icon: FileText
          }}
          backgroundImage="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1920&q=80"
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
                
                {/* Report Issue CTA */}
                <Card className="p-8 bg-gradient-to-br from-primary/10 to-accent/5 border-primary/30">
                  <div className="flex items-start gap-4">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/20 flex-shrink-0">
                      <Headphones className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-medium mb-3">Report a Maintenance Issue</h3>
                      <p className="text-muted-foreground mb-4">
                        For sites, tenants, and FM contacts: log maintenance issues directly with our helpdesk team.
                      </p>
                      <div className="flex flex-wrap gap-4">
                        <Button asChild>
                          <Link href="/fm-operations/report-issue">
                            Report Issue Now
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Knowledge Base CTA */}
                <Card className="p-6 border-border">
                  <div className="flex items-start gap-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-muted flex-shrink-0">
                      <Wrench className="w-6 h-6 text-muted-foreground" />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-2">Engineer Knowledge Base</h3>
                      <p className="text-muted-foreground mb-4">
                        Access technical documentation, troubleshooting guides, and asset manuals for engineers and FM teams.
                      </p>
                      <Button variant="outline" asChild>
                        <Link href="/fm-operations/knowledge-base">
                          View Knowledge Base
                        </Link>
                      </Button>
                    </div>
                  </div>
                </Card>

                {/* Operational Command Centre */}
                <div>
                  <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                    The Helpdesk: Operational Command Centre
                  </h2>
                  <p className="text-muted-foreground font-light leading-relaxed mb-4">
                    The FM helpdesk is the single point of contact for all reactive maintenance, faults, and service requests across commercial estates. It operates as the operational command centre—receiving calls, logging jobs, prioritising by urgency, dispatching engineers, monitoring progress, and reporting performance.
                  </p>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Our helpdesk operates 24/7/365 with trained FM coordinators, integrated CAFM systems, and real-time engineer dispatch. We prioritise first-time fix through competent engineers, optimised van stock, and diagnostic discipline.
                  </p>
                </div>

                {/* Reactive Call Flow */}
                <div>
                  <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                    Reactive Call Flow & Triage
                  </h2>
                  <div className="space-y-6">
                    {[
                      {
                        title: "Call Receipt & Logging",
                        description: "All reactive calls received via phone, email, or online portal. Helpdesk coordinator logs call details: location, fault description, reporter contact, urgency assessment. Job logged into CAFM system with unique reference number."
                      },
                      {
                        title: "Prioritisation & SLA Assignment",
                        description: "Each job is assigned a priority level: P1 Emergency (immediate response), P2 Urgent (2-4 hour response), P3 Routine (24-48 hour response). Clear SLA timescales are contractually defined and performance-monitored monthly."
                      },
                      {
                        title: "Engineer Dispatch & Coordination",
                        description: "Jobs dispatched to appropriate engineers based on trade specialism, geographic location, availability, and competency. Mobile CAFM apps provide engineers with job details, asset history, and technical drawings."
                      }
                    ].map((item, index) => (
                      <Card key={index} className="p-6">
                        <h3 className="text-xl font-medium mb-3">{item.title}</h3>
                        <p className="text-muted-foreground font-light leading-relaxed">
                          {item.description}
                        </p>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* First-Time Fix Strategy */}
                <div>
                  <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                    First-Time Fix Strategy
                  </h2>
                  <p className="text-muted-foreground font-light leading-relaxed mb-6">
                    First-time fix (FTF) measures the percentage of reactive jobs resolved on the first engineer visit. High FTF rates (80%+ target) indicate diagnostic competence, adequate van stock, and effective pre-visit preparation.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    {[
                      {
                        title: "Diagnostic Discipline",
                        description: "Engineers trained to diagnose root cause before attempting repairs, with access to technical documentation and asset history."
                      },
                      {
                        title: "Optimised Van Stock",
                        description: "Engineer vans stocked with high-usage consumables and common replacement parts based on usage data analysis."
                      },
                      {
                        title: "Competency & Training",
                        description: "Trade qualifications with ongoing training on building-specific systems and diagnostic techniques."
                      }
                    ].map((item, index) => (
                      <Card key={index} className="p-5 bg-muted/50">
                        <h3 className="font-medium mb-2">{item.title}</h3>
                        <p className="text-sm text-muted-foreground font-light">{item.description}</p>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Escalation Pathways */}
                <div>
                  <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                    Escalation Pathways & Critical Response
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card className="p-6 border-l-4 border-l-destructive">
                      <h3 className="text-xl font-medium mb-3">Emergency Response Protocol</h3>
                      <p className="text-muted-foreground font-light leading-relaxed">
                        P1 emergencies trigger immediate dispatch with client notification. On-call managers alerted for out-of-hours emergencies. Specialist subcontractors mobilised for critical systems.
                      </p>
                    </Card>
                    <Card className="p-6 border-l-4 border-l-primary">
                      <h3 className="text-xl font-medium mb-3">Management Escalation</h3>
                      <p className="text-muted-foreground font-light leading-relaxed">
                        Jobs escalated when SLA breach imminent, repeated failures indicate systemic issues, or significant cost implications arise. Triggers investigation and corrective action planning.
                      </p>
                    </Card>
                  </div>
                </div>

                {/* Performance Reporting */}
                <div>
                  <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                    Performance Reporting & Continuous Improvement
                  </h2>
                  <p className="text-muted-foreground font-light leading-relaxed mb-4">
                    Monthly helpdesk reporting includes: Total reactive calls, Response compliance, Resolution compliance, First-time fix rate, Average time to resolve, Customer satisfaction score, Repeat call rate, and Top fault categories.
                  </p>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Data-driven insights inform PPM strategy, capital planning, and continuous improvement initiatives. Transparent reporting builds trust and demonstrates contractual accountability.
                  </p>
                </div>

                <RelatedServices 
                  services={[
                    {
                      title: "Reactive Maintenance",
                      description: "SLA-controlled fault resolution and first-time fix delivery",
                      link: "/fm-operations/reactive-maintenance"
                    },
                    {
                      title: "PPM Delivery",
                      description: "Preventative maintenance programmes reducing call volumes",
                      link: "/fm-operations/ppm-delivery"
                    },
                    {
                      title: "Emergency Systems",
                      description: "Fire alarms, emergency lighting and life-safety systems",
                      link: "/services/emergency-systems"
                    },
                    {
                      title: "Emergency Response",
                      description: "Critical incident management and priority callout services",
                      link: "/services/emergency-response"
                    }
                  ]}
                />

                {/* Request CTA */}
                <Card className="p-8 bg-gradient-to-r from-secondary/10 to-primary/5 border-l-4 border-primary">
                  <h2 className="text-2xl font-light mb-4">Request Helpdesk Services</h2>
                  <p className="text-muted-foreground font-light leading-relaxed mb-6">
                    Our technical helpdesk delivers 24/7 reactive support with first-time fix focus and transparent SLA reporting. Whether you need standalone helpdesk services or integrated FM delivery, we provide engineered solutions that prioritise response, resolution, and performance.
                  </p>
                  <Button size="lg" asChild>
                    <Link href="/request-proposal">
                      Request Helpdesk Proposal
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </Card>

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

export default Helpdesk;
