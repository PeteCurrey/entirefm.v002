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

      <div className="min-h-screen bg-background pt-20">
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
                  Reactive maintenance addresses unexpected equipment failures—breakdowns, faults, and operational disruptions reported by building users. Best-practice FM targets 70-80% PPM / 20-30% reactive workload split.
                </p>
              </section>

              <RelatedServices 
                services={[
                  { title: "Technical Helpdesk", description: "24/7 call logging and dispatch", link: "/fm-operations/helpdesk" },
                  { title: "PPM Delivery", description: "Preventative maintenance programmes", link: "/fm-operations/ppm-delivery" }
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
      </div>
    </>
  );
};

export default ReactiveMaintenance;
