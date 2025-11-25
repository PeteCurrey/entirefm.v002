import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { ServiceSchema } from "@/components/shared/SchemaMarkup";
import { FAQSection } from "@/components/shared/FAQSection";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { FAQSchema } from "@/components/shared/SchemaMarkup";
import { SidebarCTA } from "@/components/shared/SidebarCTA";
import { RelatedServices } from "@/components/shared/RelatedServices";

const Helpdesk = () => {
  const breadcrumbItems = [
    { label: "FM Operations", href: "/services" },
    { label: "Technical Helpdesk & 24/7 FM Support" }
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
      <Helmet>
        <title>Technical Helpdesk & 24/7 FM Support | First-Time Fix | EntireFM</title>
        <meta name="description" content="Technical helpdesk engineered around first-time fix, SLA control and proactive reporting. 24/7 reactive maintenance support with real-time engineer dispatch and job tracking." />
      </Helmet>

      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema 
        name="Technical Helpdesk & 24/7 FM Support"
        description="Technical helpdesk engineered around first-time fix, SLA control and proactive reporting. 24/7 reactive maintenance support with real-time dispatch and performance monitoring."
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
                Technical Helpdesk & 24/7 FM Support
              </h1>
              <p className="text-xl text-muted-foreground font-light leading-relaxed">
                Helpdesk engineered around first-time fix, SLA control, and proactive performance reporting.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                The Helpdesk: Operational Command Centre
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                The FM helpdesk is the single point of contact for all reactive maintenance, faults, and service requests across commercial estates. It operates as the operational command centre—receiving calls, logging jobs, prioritising by urgency, dispatching engineers, monitoring progress, and reporting performance. A competent helpdesk delivers immediate response to emergencies, achieves high first-time fix rates, and provides transparent SLA reporting.
              </p>
              <p className="text-muted-foreground font-light leading-relaxed">
                Poor helpdesk performance—slow response, missed calls, inadequate triage, lack of customer communication—causes operational disruption, SLA failures, and user frustration. Our helpdesk operates 24/7/365 with trained FM coordinators, integrated CAFM systems, and real-time engineer dispatch. We prioritise first-time fix through competent engineers, optimised van stock, and diagnostic discipline.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Reactive Call Flow & Triage
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium mb-2">Call Receipt & Logging</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    All reactive calls received via phone, email, or online portal. Helpdesk coordinator logs call details: location, fault description, reporter contact, urgency assessment. Job logged into CAFM system with unique reference number. Customer receives automated confirmation with reference number and expected response time. Multi-channel access (phone, email, portal) ensures accessibility for building users. Automated call logging reduces manual errors and enables real-time tracking of job status from receipt to completion.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Prioritisation & SLA Assignment</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Each job is assigned a priority level based on SLA frameworks: <strong>P1 Emergency</strong> (immediate response)—fire alarm fault, water leak, power failure, lift entrapment, gas leak. <strong>P2 Urgent</strong> (2-4 hour response)—HVAC failure, lighting outage, access control fault, minor leak. <strong>P3 Routine</strong> (24-48 hour response)—dripping tap, cosmetic repairs, non-critical equipment faults. Priority assignment is objective and consistent—preventing subjective escalation and ensuring genuine emergencies receive immediate attention. Clear SLA timescales (response and fix times) are contractually defined and performance-monitored monthly.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Engineer Dispatch & Coordination</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Jobs are dispatched to appropriate engineers based on: trade specialism (electrical, HVAC, plumbing, fabric), geographic location (minimise travel time), availability (shift patterns, existing jobs), and competency (qualification/experience match). Mobile CAFM apps provide engineers with job details, asset history, technical drawings, and customer contact information before attending site. Real-time tracking enables helpdesk coordinators to monitor engineer location and job progress. Effective dispatch reduces response times, improves first-time fix, and optimises engineer utilisation.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                First-Time Fix Strategy
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                First-time fix (FTF) measures the percentage of reactive jobs resolved on the first engineer visit without requiring return visits, parts orders, or specialist support. High FTF rates (80%+ target) indicate diagnostic competence, adequate van stock, and effective pre-visit preparation. Low FTF rates suggest skills gaps, poor parts management, or reactive culture (fix quickly rather than fix correctly).
              </p>
              <div className="bg-muted/50 p-6 rounded-lg space-y-4">
                <div>
                  <h3 className="font-medium mb-2">Diagnostic Discipline</h3>
                  <p className="text-sm text-muted-foreground font-light">
                    Engineers are trained to diagnose root cause (not symptoms) before attempting repairs. Access to technical documentation, asset history, and manufacturer guides via mobile apps. Pre-visit review of previous maintenance records identifies recurring issues and likely failure modes.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Optimised Van Stock</h3>
                  <p className="text-sm text-muted-foreground font-light">
                    Engineer vans stocked with high-usage consumables and common replacement parts (fuses, bulbs, filters, seals, contactors). Van stock analysis (usage data, failure trends) ensures relevant parts availability without excessive inventory. Specialist parts (motors, control boards, pumps) sourced from suppliers with same-day/next-day delivery agreements.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Competency & Training</h3>
                  <p className="text-sm text-muted-foreground font-light">
                    Engineers hold trade qualifications (electrical, HVAC, plumbing) and receive ongoing training on building-specific systems, new technologies, and diagnostic techniques. Competency matrices map engineer skills to job types—ensuring appropriate dispatch. Mentoring programmes pair junior engineers with experienced technicians to transfer knowledge and improve diagnostic capability.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Escalation Pathways & Critical Response
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium mb-2">Emergency Response Protocol</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    P1 emergencies trigger immediate dispatch with client notification (email/SMS). On-call managers alerted for out-of-hours emergencies. Specialist subcontractors mobilised for critical systems (lifts, fire alarms, generators). Engineers provided with emergency contact lists, building access procedures, and isolation protocols. Emergency response is time-critical—delays cause safety risks, operational downtime, and contractual penalties. Clear escalation procedures ensure appropriate resources are deployed immediately.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Management Escalation</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Jobs escalated to management when: SLA breach imminent, repeated failures indicate systemic issue, customer dissatisfaction reported, specialist support required, or significant cost implications. Escalation triggers investigation, root cause analysis, and corrective action planning. Management escalation prevents minor issues becoming major failures and ensures contractual accountability.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Performance Reporting & Continuous Improvement
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                Monthly helpdesk reporting includes: Total reactive calls, Response compliance (% within SLA), Resolution compliance (% fixed within SLA), First-time fix rate, Average time to resolve, Customer satisfaction score, Repeat call rate, Top fault categories (trend analysis). Performance data is reviewed monthly with clients—identifying recurring issues, operational inefficiencies, and improvement opportunities.
              </p>
              <p className="text-muted-foreground font-light leading-relaxed">
                Trend analysis highlights: Increasing call volumes (asset deterioration, maintenance backlog), Recurring faults (design issues, inadequate PPM), SLA failures (resourcing gaps, training needs). Data-driven insights inform PPM strategy, capital planning, and continuous improvement initiatives. Transparent reporting builds trust and demonstrates contractual accountability.
              </p>
            </section>

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

            <section className="mb-12">
              <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg">
                <h2 className="text-2xl font-light mb-4">Request Helpdesk Services</h2>
                <p className="text-muted-foreground font-light leading-relaxed mb-6">
                  Our technical helpdesk delivers 24/7 reactive support with first-time fix focus and transparent SLA reporting. Whether you need standalone helpdesk services or integrated FM delivery, we provide engineered solutions that prioritise response, resolution, and performance.
                </p>
                <Link 
                  to="/request-proposal" 
                  className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Request Helpdesk Proposal
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

export default Helpdesk;
