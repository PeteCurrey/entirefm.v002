import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { ServiceSchema } from "@/components/shared/SchemaMarkup";
import { FAQSection } from "@/components/shared/FAQSection";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { FAQSchema } from "@/components/shared/SchemaMarkup";
import { SidebarCTA } from "@/components/shared/SidebarCTA";
import { RelatedServices } from "@/components/shared/RelatedServices";
import { YouMayAlsoNeed } from "@/components/shared/YouMayAlsoNeed";

const ReactiveMaintenance = () => {
  const breadcrumbItems = [
    { label: "FM Operations", href: "/services" },
    { label: "Reactive Maintenance & SLA Management" }
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

      <div className="container mx-auto px-4 py-8">
        <Breadcrumb items={breadcrumbItems} />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          <div className="lg:col-span-2">
            <section className="mb-12">
              <h1 className="text-4xl md:text-5xl font-light mb-6">
                Reactive Maintenance & SLA Management
              </h1>
              <p className="text-xl text-muted-foreground font-light leading-relaxed">
                Controlled response, real-time monitoring, and performance-led fault resolution.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Reactive Maintenance: Necessity, Not Strategy
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                Reactive maintenance addresses unexpected equipment failures—breakdowns, faults, and operational disruptions reported by building users. Unlike planned preventative maintenance (PPM), reactive work is unscheduled, disruptive, and often costly. While unavoidable (all equipment fails eventually), excessive reactive maintenance indicates poor asset management, inadequate PPM, or end-of-life infrastructure.
              </p>
              <p className="text-muted-foreground font-light leading-relaxed">
                Best-practice FM targets 70-80% PPM / 20-30% reactive workload split. Reactive-heavy portfolios incur higher costs (emergency callouts, premium parts, operational downtime) and lower service reliability. Our approach combines rapid response with root cause analysis—resolving immediate faults while identifying systemic issues to reduce future reactive demand.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                SLA Framework & Priority Assignment
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium mb-2">Priority 1: Emergency Response</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    <strong>Criteria:</strong> Life-safety risk, critical system failure, total operational shutdown<br/>
                    <strong>Examples:</strong> Fire alarm fault, gas leak, major water leak, loss of power, lift entrapment, emergency lighting failure<br/>
                    <strong>Response:</strong> Immediate (on-site within 1 hour or remote investigation commenced)<br/>
                    <strong>Resolution:</strong> 4-8 hours (make safe, temporary fix, or permanent repair)<br/>
                    <strong>Escalation:</strong> Client notified immediately, on-call manager alerted, specialist contractors mobilised if required
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Priority 2: Urgent Response</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    <strong>Criteria:</strong> Operational impact, comfort/usability affected, no immediate safety risk<br/>
                    <strong>Examples:</strong> HVAC failure, lighting outage, access control fault, minor leak, BMS fault<br/>
                    <strong>Response:</strong> 2-4 hours (on-site attendance or remote diagnosis)<br/>
                    <strong>Resolution:</strong> 24-48 hours (permanent repair or temporary mitigation)<br/>
                    <strong>Escalation:</strong> Regular status updates, management notification if SLA breach imminent
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Priority 3: Routine Response</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    <strong>Criteria:</strong> Minor fault, no operational impact, cosmetic/non-critical issues<br/>
                    <strong>Examples:</strong> Dripping tap, squeaky door, cosmetic repairs, non-urgent equipment faults<br/>
                    <strong>Response:</strong> 24-48 hours (scheduled alongside planned maintenance)<br/>
                    <strong>Resolution:</strong> 5-10 working days (batched with similar works for efficiency)<br/>
                    <strong>Escalation:</strong> Routine reporting, no immediate client notification required
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                First-Time Fix & Diagnostic Excellence
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                First-time fix (FTF) measures the percentage of reactive jobs resolved on the first engineer visit. High FTF rates (80%+) indicate diagnostic competence, adequate parts availability, and effective pre-visit preparation. Low FTF rates result in repeat visits, extended downtime, and SLA failures.
              </p>
              <div className="bg-muted/50 p-6 rounded-lg space-y-4">
                <div>
                  <h3 className="font-medium mb-2">Pre-Visit Preparation</h3>
                  <p className="text-sm text-muted-foreground font-light">
                    Engineers review asset history, previous maintenance records, and manufacturer documentation via mobile CAFM apps before attending site. This enables informed diagnosis and appropriate parts/tools selection.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Diagnostic Discipline</h3>
                  <p className="text-sm text-muted-foreground font-light">
                    Engineers diagnose root cause (not symptoms) before attempting repairs. Thorough investigation prevents misdiagnosis, incorrect parts ordering, and repeat failures.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Parts Availability</h3>
                  <p className="text-sm text-muted-foreground font-light">
                    Engineer vans stocked with high-usage consumables (fuses, bulbs, filters, seals). Specialist parts sourced from suppliers with same-day/next-day delivery agreements. Parts data analysis ensures optimal stock levels without excessive inventory.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Root Cause Analysis & Continuous Improvement
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                Reactive maintenance generates valuable performance data—fault frequencies, failure modes, repeat issues, and cost trends. Monthly analysis identifies: Recurring faults (design issues, inadequate PPM), High-cost assets (frequent failures indicating end-of-life), Seasonal trends (HVAC failures in summer/winter peaks), Engineer performance gaps (low FTF rates, extended resolution times).
              </p>
              <p className="text-muted-foreground font-light leading-relaxed">
                Root cause analysis informs: PPM strategy refinement (increased inspection frequency for failure-prone assets), Capital planning (proactive replacement of deteriorating equipment), Training requirements (competency gaps addressed through targeted training), Process improvements (helpdesk triage, parts management, engineer dispatch). Data-driven continuous improvement reduces reactive demand over time—shifting workload towards proactive PPM and strategic asset management.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Performance Reporting & Accountability
              </h2>
              <div className="space-y-4">
                <p className="text-muted-foreground font-light leading-relaxed">
                  Monthly reactive maintenance reporting includes: Total reactive calls logged, SLA response compliance (% within target), SLA resolution compliance (% fixed within target), First-time fix rate (% resolved on first visit), Average time to resolve (days), Repeat call rate (% re-opened jobs), Top fault categories (trend analysis), Cost analysis (labour, parts, subcontractors).
                </p>
                <p className="text-muted-foreground font-light leading-relaxed">
                  Transparent reporting demonstrates contractual accountability and enables proactive issue resolution. Performance below target triggers investigation, corrective actions, and service improvement plans. Client meetings review data trends, identify operational challenges, and agree improvement initiatives. Performance-led FM replaces reactive culture with strategic asset management.
                </p>
              </div>
            </section>

            <RelatedServices 
              services={[
                {
                  title: "Technical Helpdesk",
                  description: "24/7 call logging, intelligent triage and real-time engineer dispatch",
                  link: "/fm-operations/helpdesk"
                },
                {
                  title: "PPM Delivery",
                  description: "Preventative maintenance programmes reducing reactive demand",
                  link: "/fm-operations/ppm-delivery"
                },
                {
                  title: "Asset Lifecycle Planning",
                  description: "Condition-based forecasting preventing equipment failures",
                  link: "/fm-operations/asset-lifecycle"
                },
                {
                  title: "Emergency Response",
                  description: "Critical incident management and priority response protocols",
                  link: "/services/emergency-response"
                }
              ]}
            />

            <YouMayAlsoNeed 
              services={[
                {
                  title: "Generator Maintenance",
                  description: "Emergency power systems requiring rapid reactive response capability",
                  url: "/services/critical/generator-maintenance"
                },
                {
                  title: "UPS Maintenance",
                  description: "Critical power protection with 24/7 reactive support",
                  url: "/services/critical/ups-maintenance"
                }
              ]}
            />

            <section className="mb-12">
              <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg">
                <h2 className="text-2xl font-light mb-4">Request Reactive Maintenance Proposal</h2>
                <p className="text-muted-foreground font-light leading-relaxed mb-6">
                  Our reactive maintenance service delivers controlled response, first-time fix focus, and transparent SLA reporting. Whether standalone reactive support or integrated FM delivery, we provide engineered solutions that balance responsiveness with cost efficiency.
                </p>
                <Link 
                  to="/request-proposal" 
                  className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Request Proposal
                </Link>
              </div>
            </section>

            <FAQSection faqs={faqs} />
          </div>

          <aside className="lg:col-span-1">
            <SidebarCTA />
          </aside>
        </div>
      </div>
    </>
  );
};

export default ReactiveMaintenance;
