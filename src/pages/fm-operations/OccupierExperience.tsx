import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { ServiceSchema } from "@/components/shared/SchemaMarkup";
import { FAQSection } from "@/components/shared/FAQSection";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { FAQSchema } from "@/components/shared/SchemaMarkup";
import { SidebarCTA } from "@/components/shared/SidebarCTA";
import { RelatedServices } from "@/components/shared/RelatedServices";

const OccupierExperience = () => {
  const breadcrumbItems = [
    { label: "FM Operations", href: "/services" },
    { label: "Occupier Experience & Tenant Engagement" }
  ];

  const faqs = [
    {
      question: "What is occupier experience in an FM context?",
      answer: "Occupier experience encompasses all interactions between building users (tenants, employees, visitors) and facilities services—from requesting maintenance to using amenities, accessing the building, and receiving communications. Positive occupier experience delivers: High satisfaction scores (tenant retention, lease renewals), Reduced complaints (fewer helpdesk calls, escalations), Enhanced productivity (comfortable, functional environments), Reputational benefits (attract tenants, support employer branding). Poor occupier experience—slow response, poor communication, inadequate comfort—causes tenant churn, complaints, and reputational damage. FM services directly impact occupier satisfaction—effective FM is invisible and proactive, poor FM is visible and reactive."
    },
    {
      question: "How do you measure and improve occupier satisfaction?",
      answer: "Satisfaction measurement methods: Regular surveys (quarterly/annual—structured questionnaires, satisfaction scores), Real-time feedback (post-service surveys after helpdesk calls), Complaint analysis (frequency, categories, resolution time), Net Promoter Score (NPS—likelihood to recommend building/FM service), Focus groups (qualitative feedback, improvement suggestions). Satisfaction drivers: Responsive maintenance (fast helpdesk response, first-time fix), Comfortable environments (temperature, air quality, lighting), Clear communication (advance notifications, status updates, transparency), Proactive service (issues resolved before complaints). Improvement actions based on data: Service refinements (adjust PPM, enhance helpdesk), Training (customer service skills, communication), Technology (self-service portals, mobile apps), Stakeholder engagement (regular meetings, feedback loops)."
    },
    {
      question: "What role does communication play in occupier experience?",
      answer: "Communication is fundamental to occupier satisfaction: Advance notifications (planned maintenance, system shutdowns—avoid surprises), Service updates (helpdesk job status, expected completion times), Building announcements (access changes, amenity availability, safety information), Emergency communications (incident alerts, evacuation procedures, all-clear confirmations), Educational content (energy efficiency tips, waste recycling guidance, system usage). Communication channels: Email (formal notifications, newsletters), Digital displays (lobby screens, lift panels), Mobile apps (self-service, notifications), Intranet/portal (document access, service requests), Face-to-face (building managers, concierge). Effective communication is: Timely (advance warning, not retrospective), Clear (plain language, no jargon), Relevant (targeted to affected users, not blanket spam). Poor communication causes dissatisfaction regardless of service quality—users prefer informed disruption to silent excellence."
    },
    {
      question: "How do you handle occupier complaints and service requests?",
      answer: "Complaint management process: Acknowledgement (within 24 hours—confirm receipt, provide reference), Investigation (review circumstances, identify root cause, determine remediation), Response (communicate findings, actions taken, preventative measures), Resolution (implement improvements, close complaint, confirm satisfaction), Analysis (monthly complaint trends, recurring issues, process improvements). Service request handling: Easy access (multiple channels—phone, email, portal, app), Fast triage (urgent vs routine, appropriate response times), Transparent tracking (status updates, completion notifications), Quality delivery (competent engineers, first-time fix, professional conduct). Complaint reduction strategies: Proactive maintenance (prevent issues before complaints), Enhanced communication (inform before disruption), Staff training (customer service skills), Process improvements (streamline request handling). Complaints are opportunities—they highlight service gaps and inform continuous improvement."
    },
    {
      question: "What is the role of building managers in occupier engagement?",
      answer: "Building managers are client-facing FM representatives: Single point of contact (occupier queries, escalations, relationship management), Stakeholder engagement (regular meetings with tenants, landlords, occupier committees), Service coordination (link occupiers to helpdesk, contractors, specialists), Feedback collection (gather satisfaction data, improvement suggestions, complaint resolution), Building advocacy (represent occupier interests, champion service improvements). Effective building managers: Visible and accessible (regular site presence, known to occupiers), Proactive communicators (advance notifications, status updates), Problem solvers (resolve issues quickly, coordinate escalations), Relationship builders (trust, transparency, responsiveness). Building managers bridge technical FM delivery and occupier satisfaction—translating engineering excellence into positive experiences."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Occupier Experience & Tenant Engagement | FM Satisfaction | EntireFM</title>
        <meta name="description" content="Occupier experience and tenant engagement through structured FM delivery. Enhancing satisfaction, communication and building usability through proactive service management." />
      </Helmet>

      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema 
        name="Occupier Experience & Tenant Engagement"
        description="Enhancing satisfaction, communication and building usability through structured FM delivery. Occupier-focused service management improving tenant retention and user satisfaction."
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
                Occupier Experience & Tenant Engagement
              </h1>
              <p className="text-xl text-muted-foreground font-light leading-relaxed">
                Enhancing satisfaction, communication and building usability through structured FM delivery.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Occupier Experience: Beyond Technical Delivery
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                Occupier experience encompasses all interactions between building users and facilities services. While technical competence—reliable HVAC, compliant electrical systems, functioning access control—is essential, occupier satisfaction depends equally on: Responsive communication (advance notifications, status updates), Fast resolution (helpdesk response, first-time fix), Professional conduct (courteous engineers, minimal disruption), Proactive service (issues resolved before complaints). Poor occupier experience—regardless of technical excellence—causes tenant complaints, lease non-renewals, and reputational damage.
              </p>
              <p className="text-muted-foreground font-light leading-relaxed">
                Commercial landlords, corporate occupiers, and residential operators increasingly prioritize occupier satisfaction as competitive differentiator. High satisfaction delivers: Tenant retention (reduced churn, lease renewals), Rental premiums (desirable buildings command higher rents), Employer branding (workplace experience attracts talent), ESG credentials (wellbeing, satisfaction metrics support social value reporting). Our occupier-focused FM delivery combines technical competence with communication, responsiveness, and stakeholder engagement—translating engineering excellence into positive user experiences.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Measuring Occupier Satisfaction
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium mb-2">Satisfaction Surveys & Feedback Mechanisms</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Regular satisfaction surveys (quarterly or bi-annually) assess: Overall satisfaction (1-10 scale, benchmarked against industry standards), Service category performance (helpdesk, maintenance, cleaning, comfort), Communication effectiveness (advance notices, responsiveness, clarity), Improvement priorities (what matters most to occupiers). Post-service feedback (automated after helpdesk resolution) captures real-time satisfaction—identifying individual service failures and performance trends. Surveys use standardized questions enabling longitudinal tracking and peer benchmarking.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Net Promoter Score (NPS) & Benchmarking</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    NPS measures likelihood to recommend building/FM service (0-10 scale): Promoters (9-10)—highly satisfied, advocates; Passives (7-8)—satisfied but unenthusiastic; Detractors (0-6)—dissatisfied, risk of churn. NPS = % Promoters - % Detractors. Industry benchmarks: Excellent ({'>'} +50), Good (+30 to +50), Average (+10 to +30), Poor ({'<'} +10). NPS provides single-metric satisfaction indicator enabling trend tracking and competitive benchmarking. High NPS correlates with tenant retention, referrals, and lease renewals.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Complaint Analysis & Resolution Tracking</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Complaint data reveals satisfaction pain points: Complaint frequency (total per month, per occupier), Complaint categories (HVAC, cleanliness, access, communication), Resolution time (average days to close), Repeat complaints (chronic issues indicating systemic problems). Analysis identifies: Service gaps (recurring issues requiring process improvements), Communication failures (complaints from lack of information vs actual service failures), Training needs (engineer conduct, customer service skills). Reducing complaints through proactive service and enhanced communication improves satisfaction more effectively than reactive complaint handling.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Communication & Stakeholder Engagement
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium mb-2">Proactive Communication Strategies</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Communication prevents dissatisfaction: Advance notifications (planned maintenance 7 days notice, system shutdowns 48 hours notice), Service updates (helpdesk job progress, expected completion times), Building announcements (access changes, amenity closures, safety information), Educational content (energy efficiency, waste recycling, emergency procedures). Communication channels: Email (formal notifications, newsletters), Digital displays (lobby screens, lift panels), Mobile apps (push notifications, self-service), Intranet portals (documents, service requests), Notice boards (visual communications in common areas). Effective communication is timely, clear, and relevant—avoiding information overload while ensuring critical messages reach intended audiences.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Building Manager Engagement</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Building managers act as client-facing FM representatives: Visible presence (regular site visits, known to occupiers), Single point of contact (queries, complaints, escalations), Relationship management (tenant meetings, feedback sessions, issue resolution), Service coordination (link occupiers to helpdesk, specialists, contractors), Building advocacy (represent occupier interests, champion improvements). Building managers translate technical FM delivery into occupier satisfaction—providing human interface to otherwise anonymous service delivery. High-performing building managers are proactive communicators, problem solvers, and relationship builders.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Occupier Forums & Consultation</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Regular forums (quarterly meetings, working groups) enable: Feedback collection (satisfaction, improvement priorities, concerns), Service updates (performance reporting, planned improvements, compliance updates), Consultation (major works, service changes, sustainability initiatives), Relationship building (trust, transparency, collaborative problem-solving). Forums demonstrate occupier voice is heard—increasing engagement, satisfaction, and trust. Actions arising from forums must be tracked and delivered—failure to act on feedback damages credibility and reduces future engagement.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Service Quality & First Impressions
              </h2>
              <div className="bg-muted/50 p-6 rounded-lg space-y-4">
                <div>
                  <h3 className="font-medium mb-2">Helpdesk Responsiveness & First-Time Fix</h3>
                  <p className="text-sm text-muted-foreground font-light">
                    Fast helpdesk response and high first-time fix rates are primary satisfaction drivers. Target: acknowledge calls within 1 hour, attend within SLA, resolve 80%+ on first visit. Poor helpdesk performance—slow response, repeat visits, poor communication—is leading cause of dissatisfaction.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Engineer Conduct & Professionalism</h3>
                  <p className="text-sm text-muted-foreground font-light">
                    Engineer behavior impacts satisfaction: courteous communication, minimal disruption, clean work areas, ID badges visible, professional appearance. Training in customer service skills, communication, and occupier interaction improves satisfaction beyond technical competence alone.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Comfort & Environmental Quality</h3>
                  <p className="text-sm text-muted-foreground font-light">
                    Temperature control, air quality, lighting, and noise levels directly affect occupier satisfaction. Regular comfort surveys identify problem areas. BMS optimization, HVAC tuning, and IAQ monitoring improve environmental quality—enhancing productivity and satisfaction.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Continuous Improvement & Service Excellence
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                Occupier satisfaction improves through: Data-driven insights (survey analysis, complaint trends, satisfaction scores inform targeted improvements), Service refinements (adjust PPM, enhance helpdesk processes, improve communication protocols), Training investment (customer service skills, communication, technical competency), Technology adoption (self-service portals, mobile apps, real-time tracking), Stakeholder engagement (forums, feedback loops, transparent communication).
              </p>
              <p className="text-muted-foreground font-light leading-relaxed">
                Continuous improvement culture uses satisfaction data to identify priorities, implement changes, and measure impact. Quarterly satisfaction reviews with clients assess trends, celebrate successes, and agree improvement actions. High-performing FM organizations treat occupier satisfaction as strategic KPI—equal in importance to technical compliance and cost control.
              </p>
            </section>

            <RelatedServices 
              services={[
                {
                  title: "Technical Helpdesk",
                  description: "24/7 responsive service delivery and user support",
                  link: "/fm-operations/helpdesk"
                },
                {
                  title: "Building Concierge",
                  description: "Professional front-of-house and reception services",
                  link: "/soft-services/concierge"
                },
                {
                  title: "Space Planning",
                  description: "Workplace optimization and occupancy management",
                  link: "/services/space-planning"
                },
                {
                  title: "Reactive Maintenance",
                  description: "Fast fault resolution enhancing user satisfaction",
                  link: "/fm-operations/reactive-maintenance"
                }
              ]}
            />

            <section className="mb-12">
              <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg">
                <h2 className="text-2xl font-light mb-4">Enhance Occupier Satisfaction</h2>
                <p className="text-muted-foreground font-light leading-relaxed mb-6">
                  Our occupier-focused FM delivery combines technical competence with communication, responsiveness, and stakeholder engagement. We deliver engineered services that enhance satisfaction, support tenant retention, and improve building reputation.
                </p>
                <Link 
                  to="/request-proposal" 
                  className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Request Occupier Experience Consultation
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

export default OccupierExperience;
