import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { ServiceSchema } from "@/components/shared/SchemaMarkup";
import { FAQSection } from "@/components/shared/FAQSection";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { FAQSchema } from "@/components/shared/SchemaMarkup";
import { SidebarCTA } from "@/components/shared/SidebarCTA";
import { RelatedServices } from "@/components/shared/RelatedServices";

const PPMDelivery = () => {
  const breadcrumbItems = [
    { label: "FM Operations", href: "/services" },
    { label: "PPM Delivery & Scheduling" }
  ];

  const faqs = [
    {
      question: "What is the difference between statutory and non-statutory PPM?",
      answer: "Statutory PPM is legally required maintenance mandated by health & safety legislation (Health & Safety at Work Act, Regulatory Reform Order, specific regulations for electrical, fire, gas, water, lifting equipment). Non-compliance results in enforcement action, prosecution, or insurance invalidation. Examples: electrical testing (EICR), fire alarm testing, emergency lighting, Legionella risk assessments, gas safety checks, lift examinations. Non-statutory PPM is manufacturer-recommended maintenance not legally required but contractually specified or operationally prudent. Examples: boiler servicing, AHU filter changes, BMS calibration, fabric inspections. Both are essential—statutory for legal compliance, non-statutory for asset longevity and performance."
    },
    {
      question: "How do you schedule PPM to minimise operational disruption?",
      answer: "PPM scheduling considers: Building occupancy patterns (schedule during low-use periods—evenings, weekends), System criticality (critical systems serviced during planned shutdowns with backup provisions), Trade coordination (electrical, HVAC, plumbing tasks grouped to minimise site visits), Seasonal factors (HVAC maintenance before summer/winter peaks), Compliance deadlines (statutory inspections scheduled well before expiry to allow remediation time). Advanced scheduling tools (CAFM systems) optimise engineer routes, batch tasks by location, and send automated notifications to building users. Best-practice PPM achieves 95%+ schedule compliance without operational disruption."
    },
    {
      question: "What happens when PPM identifies defects or non-compliances?",
      answer: "PPM inspections identify: Critical defects (immediate safety risk, immediate action required), Priority defects (safety risk if not addressed, fix within 7-30 days), Observations (advisory, no immediate risk, address within 12 months). Each defect is logged, photographed, risk-assessed, and reported. Remediation works are either: Completed immediately (minor repairs during PPM visit), Scheduled as reactive jobs (within agreed SLA), Planned as capital works (major repairs/replacements requiring budget approval). Defect tracking ensures issues are closed-out systematically. Compliance defects are escalated immediately to prevent legal exposure."
    },
    {
      question: "How do you demonstrate PPM compliance and performance?",
      answer: "PPM compliance reporting includes: Schedule adherence (% PPM tasks completed on time), Compliance certificate status (electrical, fire, gas, water, lifting—all in-date), Defect tracking (open/closed status), Engineer competency records (qualifications, training), Audit trails (task completion evidence, signatures, photographs). Monthly compliance dashboards provide real-time visibility of estate compliance status. Annual compliance audits verify certificate validity, remediation completion, and statutory adherence. Transparent reporting demonstrates due diligence and supports insurance, regulatory inspections, and stakeholder assurance."
    },
    {
      question: "Can PPM frequency be adjusted based on risk and asset condition?",
      answer: "Yes, risk-based PPM optimises maintenance frequency: High-risk assets (life-safety systems, critical operations) inspected at statutory maximum frequency or more frequently. Medium-risk assets (comfort systems, non-critical plant) serviced at manufacturer intervals. Low-risk assets (non-critical, redundant systems) inspected annually or condition-based. Condition monitoring (vibration analysis, thermography, oil analysis) informs dynamic PPM scheduling—extending intervals for well-performing assets, increasing frequency for deteriorating equipment. Risk-based PPM reduces cost without compromising compliance or reliability. However, statutory maintenance frequencies cannot be extended below legal minimums."
    }
  ];

  return (
    <>
      <Helmet>
        <title>PPM Delivery & Scheduling | Statutory Maintenance | EntireFM</title>
        <meta name="description" content="PPM delivery and scheduling in line with SFG20 and risk frameworks. Statutory and non-statutory maintenance ensuring compliance, asset reliability and performance reporting." />
      </Helmet>

      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema 
        name="PPM Delivery & Scheduling"
        description="Delivering statutory and non-statutory maintenance in line with SFG20 and risk frameworks. Scheduled PPM ensuring compliance, asset reliability and transparent performance reporting."
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
                PPM Delivery & Scheduling
              </h1>
              <p className="text-xl text-muted-foreground font-light leading-relaxed">
                Delivering statutory and non-statutory maintenance in line with SFG20 and risk frameworks.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                PPM: The Foundation of Asset Reliability
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                Planned Preventative Maintenance (PPM) is scheduled, proactive maintenance designed to prevent equipment failures, ensure statutory compliance, and extend asset lifespan. Unlike reactive maintenance (responding to breakdowns), PPM is planned, predictable, and cost-effective. It forms the operational backbone of competent facilities management—delivering legal compliance, asset reliability, and operational continuity.
              </p>
              <p className="text-muted-foreground font-light leading-relaxed">
                Effective PPM requires: Accurate asset registers, Risk-based maintenance frequencies (SFG20, manufacturer guidance, statutory requirements), Competent engineers (trade qualifications, system knowledge), Structured scheduling (CAFM systems, route optimisation), Defect management (remediation tracking, compliance escalation), Performance reporting (schedule adherence, compliance status, defect trends). Poor PPM delivery—missed inspections, inadequate records, delayed remediation—causes compliance failures, asset deterioration, and increased reactive costs.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Statutory vs Non-Statutory PPM
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium mb-2">Statutory Maintenance (Legal Requirement)</h3>
                  <p className="text-muted-foreground font-light leading-relaxed mb-3">
                    Statutory PPM is mandated by health & safety legislation—failure to comply results in enforcement action, prosecution, or insurance invalidation. Key statutory maintenance includes:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground font-light">
                    <li><strong>Electrical:</strong> Fixed wire testing (EICR) every 5 years (commercial), portable appliance testing (PAT) annually</li>
                    <li><strong>Fire Safety:</strong> Fire alarm weekly tests, quarterly maintenance, annual certification. Emergency lighting monthly tests, annual certification</li>
                    <li><strong>Gas Safety:</strong> Commercial gas appliances annual inspection (Gas Safety Regulations)</li>
                    <li><strong>Water Hygiene:</strong> Legionella risk assessment every 2 years, monthly temperature checks, quarterly cleaning</li>
                    <li><strong>Lifting Equipment:</strong> Lifts examined every 6 months (LOLER), thorough examination and testing</li>
                    <li><strong>Pressure Systems:</strong> Written scheme of examination, periodic inspections (PSSR)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Non-Statutory Maintenance (Best Practice)</h3>
                  <p className="text-muted-foreground font-light leading-relaxed mb-3">
                    Non-statutory PPM is manufacturer-recommended maintenance not legally required but essential for asset reliability, warranty validity, and operational performance:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground font-light">
                    <li>HVAC plant servicing (boilers, chillers, AHUs) typically quarterly or bi-annually</li>
                    <li>BMS calibration and software updates annually</li>
                    <li>Access control and security systems quarterly maintenance</li>
                    <li>Building fabric inspections (roofs, drainage, glazing) annually</li>
                    <li>Pumps, motors, fans—bearing lubrication, belt tension, vibration checks</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                SFG20 & Risk-Based Maintenance Frequencies
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                SFG20 (published by CIBSE/BSRIA) provides industry-standard maintenance schedules for building services equipment. It defines task frequencies, inspection procedures, and competency requirements for statutory and non-statutory maintenance. SFG20 is the benchmark for PPM specification in UK FM contracts.
              </p>
              <div className="bg-muted/50 p-6 rounded-lg space-y-4">
                <div>
                  <h3 className="font-medium mb-2">Risk-Based Frequency Adjustment</h3>
                  <p className="text-sm text-muted-foreground font-light">
                    While SFG20 provides baseline frequencies, risk assessments inform adjustments: High-risk environments (hospitals, data centres)—increased frequency. Redundant systems (duty/standby configurations)—maintained at higher frequency to ensure backup availability. Low-use equipment—frequency reduced but never below statutory minimums. Condition monitoring (IoT, predictive analytics)—informs dynamic scheduling.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Manufacturer Recommendations</h3>
                  <p className="text-sm text-muted-foreground font-light">
                    Equipment warranties often require adherence to manufacturer maintenance schedules. PPM frequencies must balance SFG20 guidance, statutory requirements, manufacturer warranties, and operational risk. Deviation from manufacturer schedules may void warranties—compliance is documented and auditable.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                PPM Scheduling & Operational Coordination
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium mb-2">CAFM-Driven Scheduling</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    CAFM systems generate PPM schedules automatically—calculating due dates based on last completion, statutory frequencies, and risk profiles. Schedules are optimised by: Geographic clustering (minimise travel time), Trade grouping (electrical, HVAC, plumbing tasks batched), Building access (coordinate with occupant schedules), Seasonal priorities (HVAC pre-season checks). Engineers receive mobile task lists with asset locations, maintenance procedures, and completion forms. Real-time schedule updates ensure visibility and accountability.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Stakeholder Communication</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    PPM activities are communicated to building users via: Advance notifications (email, portal, signage), Access arrangements (out-of-hours works, restricted areas), System shutdowns (planned outages for critical maintenance), Completion confirmations (works completed, systems tested, access restored). Proactive communication minimises disruption and demonstrates professional service delivery.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Defect Management & Remediation
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                PPM inspections identify defects requiring remediation. Each defect is: Categorised (critical, priority, observation), Photographed (evidence capture), Risk-assessed (safety, compliance, operational impact), Logged in CAFM (tracked to resolution), Reported (monthly defect status, remediation progress). Critical defects trigger immediate action. Priority defects are scheduled for rectification within agreed timescales. Observations are addressed during routine maintenance or capital works.
              </p>
              <p className="text-muted-foreground font-light leading-relaxed">
                Defect tracking ensures issues do not remain unresolved. Monthly reporting shows: Open defects (by category, age, location), Remediation progress (works scheduled, completed, outstanding), Compliance impact (defects affecting statutory compliance escalated immediately). Transparent defect management prevents compliance failures and demonstrates asset stewardship.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Performance Reporting & Continuous Improvement
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                Monthly PPM reporting includes: Schedule adherence (% tasks completed on time), Compliance certificate status (all in-date), Defect summary (open/closed by priority), Engineer performance (task completion rates, quality scores), Cost analysis (labour, parts, subcontractors). Performance data informs: PPM frequency optimisation (adjust based on defect trends), Asset replacement planning (recurring defects indicate end-of-life), Engineer training needs (competency gaps), Contract efficiency improvements.
              </p>
              <p className="text-muted-foreground font-light leading-relaxed">
                Continuous improvement culture uses PPM data to reduce reactive demand, improve compliance, and enhance asset reliability. Quarterly reviews with clients assess performance trends, identify strategic opportunities, and agree improvement initiatives.
              </p>
            </section>

            <RelatedServices 
              services={[
                {
                  title: "PPM Compliance",
                  description: "Overview of PPM requirements and statutory maintenance obligations",
                  link: "/services/ppm"
                },
                {
                  title: "Reactive Maintenance",
                  description: "24/7 fault response, SLA management and first-time fix focus",
                  link: "/fm-operations/reactive-maintenance"
                },
                {
                  title: "Asset Lifecycle Planning",
                  description: "Condition-based forecasting and strategic capital planning",
                  link: "/fm-operations/asset-lifecycle"
                },
                {
                  title: "Building Inspections",
                  description: "Comprehensive compliance audits and condition surveys",
                  link: "/services/building-inspections"
                }
              ]}
            />

            <section className="mb-12">
              <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg">
                <h2 className="text-2xl font-light mb-4">Request PPM Delivery Proposal</h2>
                <p className="text-muted-foreground font-light leading-relaxed mb-6">
                  Our PPM delivery service combines statutory compliance with risk-based maintenance strategies, ensuring asset reliability, legal adherence, and transparent performance reporting. Contact us to discuss your PPM requirements.
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

export default PPMDelivery;
