import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { ServiceSchema } from "@/components/shared/SchemaMarkup";
import { FAQSection } from "@/components/shared/FAQSection";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { FAQSchema } from "@/components/shared/SchemaMarkup";
import { SidebarCTA } from "@/components/shared/SidebarCTA";
import { RelatedServices } from "@/components/shared/RelatedServices";

const Mobilisation = () => {
  const breadcrumbItems = [
    { label: "FM Operations", href: "/services" },
    { label: "Mobilisation & Contract Transition" }
  ];

  const faqs = [
    {
      question: "What is FM mobilisation and why is it critical?",
      answer: "FM mobilisation is the structured process of transitioning building services from one provider to another (or from in-house management to outsourced FM). Critical activities include asset data capture, compliance gap analysis, staff TUPE transfer, contract risk review, and service continuity planning. Poor mobilisation leads to service disruption, compliance failures, and contract disputes. A structured 30-90 day mobilisation programme ensures compliant handover, minimal operational risk, and immediate service delivery from Day 1. Best-practice mobilisation follows RICS, IWFM and BS8572 guidance."
    },
    {
      question: "What happens during the Day 0-30 mobilisation phase?",
      answer: "Day 0-30 (pre-go-live): Contract documentation review, site surveys and asset verification, compliance gap analysis (identify missing certificates, overdue inspections), TUPE consultation (staff transfer), technology setup (CAFM, helpdesk, reporting), engineer induction and competency validation, supplier onboarding, communications plan (building users, landlords, stakeholders), risk register creation, and go-live readiness checkpoint. This phase is documentation-heavy—capturing existing service performance, asset registers, and contractual obligations to ensure accurate baseline and smooth transition."
    },
    {
      question: "What is involved in Day 30-60 and Day 60-90 phases?",
      answer: "Day 30-60 (operational stabilisation): Service delivery begins, reactive helpdesk operational, PPM schedules loaded, compliance catch-up initiated (completing overdue statutory inspections), monthly performance reporting, first contract review meeting, and risk mitigation actions. Day 60-90 (optimisation): Full PPM delivery established, KPI performance stabilised, asset condition surveys completed, capital investment planning commenced, continuous improvement initiatives identified, contract efficiency opportunities assessed. By Day 90, service should be fully compliant, operationally stable, and delivering contractual KPIs."
    },
    {
      question: "How do you manage compliance gaps identified during mobilisation?",
      answer: "Compliance gaps (missing certificates, overdue inspections, non-compliant installations) are identified during pre-mobilisation surveys. Each gap is logged, risk-assessed, and assigned a remediation timeline: Critical (safety risk)—immediate action (7-14 days), High (statutory breach)—30-60 days, Medium (non-statutory but contractual)—60-90 days, Low (advisory)—12-month improvement plan. Compliance catch-up costs are agreed pre-contract (buyer responsibility) or post-mobilisation (seller indemnity). Clear gap analysis prevents disputes and ensures legal compliance from Day 1. All remediation is documented and reported monthly."
    },
    {
      question: "What role does CAFM play in mobilisation?",
      answer: "Computer-Aided Facilities Management (CAFM) systems are central to mobilisation—asset registers are uploaded, PPM schedules configured, helpdesk workflows established, and reporting dashboards created. CAFM provides single-source-of-truth for asset data, service history, compliance certificates, and performance metrics. During mobilisation, legacy data (Excel registers, PDF certificates, paper logbooks) is digitised and structured within CAFM. This enables real-time visibility of service delivery, compliance status, and KPI performance from Day 1. Poor CAFM setup delays reporting and reduces operational efficiency—best-practice mobilisation prioritises CAFM configuration in Week 1-2."
    }
  ];

  return (
    <>
      <Helmet>
        <title>FM Mobilisation & Contract Transition | Structured Handover | EntireFM</title>
        <meta name="description" content="Structured FM mobilisation ensuring compliant contract handover and immediate service continuity. Day 0 to Day 90 transition management with asset capture and compliance gap analysis." />
      </Helmet>

      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema 
        name="FM Mobilisation & Contract Transition"
        description="Structured FM mobilisation process ensuring compliant handover and immediate service continuity. Day 0 to Day 90 mobilisation roadmap with asset capture, compliance gap analysis, and service stabilisation."
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
                FM Mobilisation & Contract Transition
              </h1>
              <p className="text-xl text-muted-foreground font-light leading-relaxed">
                Structured mobilisation process ensuring compliant handover and immediate service continuity from Day 1.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Mobilisation: The Foundation of Contract Performance
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                FM mobilisation is the most critical phase of any facilities management contract. Poor mobilisation causes service disruption, compliance failures, TUPE disputes, and commercial conflict—undermining performance for years. Effective mobilisation requires structured project management, detailed asset verification, compliance gap analysis, and coordinated stakeholder engagement across 30-90 days.
              </p>
              <p className="text-muted-foreground font-light leading-relaxed">
                We follow BS8572 (Facilities Management Procurement), RICS guidance, and IWFM best-practice frameworks to deliver compliant, risk-managed transitions. Our mobilisation methodology ensures service continuity, regulatory compliance, and contractual clarity from Day 1—eliminating the typical "bedding-in" period that often characterises FM handovers.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Day 0–30: Pre-Mobilisation & Planning
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium mb-2">Contract Documentation Review</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Detailed review of contract terms, KPIs, SLAs, reporting requirements, and commercial obligations. Identification of ambiguities, risk clauses, and performance expectations. Creation of contract delivery plan mapping services, responsibilities, and compliance obligations. Review includes asset schedules, existing maintenance records, compliance certificates, and service history documentation. Any contractual gaps or unclear obligations are flagged and resolved before go-live.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Site Surveys & Asset Verification</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Physical site surveys conducted to verify asset registers, identify undocumented equipment, and assess asset condition. Asset tagging (barcode/QR codes) for CAFM integration. Photographic evidence captured for high-value/critical assets. Discrepancies between contractual asset schedules and physical estate are documented and reconciled. Survey includes accessibility assessments, key-holder information, site access protocols, and emergency contact details. Asset verification forms the foundation of accurate PPM scheduling and compliance reporting.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Compliance Gap Analysis</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Review of existing compliance certificates (electrical, fire, gas, water, HVAC, lifting equipment) against statutory frequencies. Identification of missing, expired, or non-compliant documentation. Risk assessment of each gap (safety, legal, financial). Creation of compliance catch-up schedule with priorities: Critical (immediate), High (30 days), Medium (60 days), Low (90 days). Compliance gaps are transparently reported to client with costed remediation plan. This prevents post-mobilisation disputes and ensures legal obligations are met from Day 1.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">TUPE & Staff Transfer</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Transfer of Undertakings (Protection of Employment) process managed in accordance with TUPE regulations. Consultation with transferring staff, review of employment terms, pension arrangements, and continuity of service. Induction and competency validation for transferred engineers. Integration into new management structures, reporting lines, and operational systems. TUPE compliance is critical—mismanagement leads to employment tribunal claims and service disruption. We ensure legal compliance and smooth staff integration throughout mobilisation.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">CAFM & Technology Setup</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Configuration of Computer-Aided Facilities Management (CAFM) system: asset registers uploaded, PPM schedules configured, reactive helpdesk workflows established, compliance certificate repositories created, reporting dashboards customised. Integration with client systems (building management systems, access control, energy metering). User training for client FM teams and operational staff. CAFM is the operational backbone—early setup ensures accurate reporting and service visibility from Day 1.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Day 30–60: Service Stabilisation
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium mb-2">Operational Service Delivery</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Reactive helpdesk operational 24/7. PPM schedules commenced. Compliance catch-up works underway (overdue inspections completed to agreed timeline). Monthly KPI reporting established. First contract review meeting held—performance against SLAs, outstanding compliance gaps, and operational challenges discussed. Risk register reviewed and updated. Service stabilisation phase focuses on embedding operational routines, ensuring engineer competency, and resolving teething issues (access, communication, equipment availability).
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Performance Monitoring & Reporting</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    KPI dashboards active: reactive response times, first-time fix rates, PPM completion %, compliance status, helpdesk call volumes, engineer utilisation. Monthly reports issued with performance analysis, trend identification, and improvement actions. Client meetings structured around data-driven performance review. Reporting transparency builds trust and enables proactive issue resolution. Performance data is used to refine operational processes and improve service quality continuously.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Day 60–90: Optimisation & Contract Normalisation
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium mb-2">Full PPM Delivery & Compliance</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    All statutory and non-statutory PPM activities operational. Compliance catch-up complete—100% of overdue inspections cleared, certificates issued, and compliance status green. Asset condition surveys completed—informing capital planning and lifecycle forecasting. By Day 90, estate is fully compliant, operationally stable, and delivering contractual KPIs. Continuous improvement initiatives identified through performance data analysis and stakeholder feedback.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Continuous Improvement & Efficiency</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Review of operational efficiency: PPM scheduling optimisation, reactive call reduction strategies, energy consumption analysis, contractor performance assessment. Identification of cost-saving opportunities (consolidated contracts, improved spares management, energy efficiency measures). Client collaboration on strategic initiatives (asset replacement planning, ESG improvement, technology integration). Day 90 review establishes baseline performance and sets improvement targets for Year 1.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Key Mobilisation Risks & Mitigation
              </h2>
              <div className="bg-muted/50 p-6 rounded-lg space-y-4">
                <div>
                  <h3 className="font-medium mb-2">Incomplete Asset Data</h3>
                  <p className="text-sm text-muted-foreground font-light">
                    <span className="font-medium text-foreground">Risk:</span> Missing or inaccurate asset registers prevent effective PPM scheduling and compliance tracking.<br/>
                    <span className="font-medium text-foreground">Mitigation:</span> Physical verification surveys, asset tagging, and CAFM data reconciliation during pre-mobilisation phase.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Compliance Gaps</h3>
                  <p className="text-sm text-muted-foreground font-light">
                    <span className="font-medium text-foreground">Risk:</span> Undiscovered compliance gaps result in legal exposure and post-mobilisation disputes.<br/>
                    <span className="font-medium text-foreground">Mitigation:</span> Pre-contract compliance audits, transparent gap reporting, and agreed remediation schedules with clear cost allocation.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">TUPE Complications</h3>
                  <p className="text-sm text-muted-foreground font-light">
                    <span className="font-medium text-foreground">Risk:</span> Staff transfer disputes, competency gaps, and resistance to operational change.<br/>
                    <span className="font-medium text-foreground">Mitigation:</span> Structured TUPE consultation, induction programmes, competency validation, and change management support.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Stakeholder Communication Breakdown</h3>
                  <p className="text-sm text-muted-foreground font-light">
                    <span className="font-medium text-foreground">Risk:</span> Poor communication with building users, landlords, and contractors causes service disruption and reputational damage.<br/>
                    <span className="font-medium text-foreground">Mitigation:</span> Structured communications plan, regular stakeholder updates, and clear escalation pathways.
                  </p>
                </div>
              </div>
            </section>

            <RelatedServices 
              services={[
                {
                  title: "Technical Helpdesk",
                  description: "24/7 FM support operational from Day 1",
                  link: "/fm-operations/helpdesk"
                },
                {
                  title: "PPM Delivery",
                  description: "Statutory and non-statutory maintenance setup",
                  link: "/fm-operations/ppm-delivery"
                },
                {
                  title: "Asset Lifecycle Planning",
                  description: "Condition-based forecasting and capital planning",
                  link: "/fm-operations/asset-lifecycle"
                },
                {
                  title: "Tender Support",
                  description: "Pre-mobilisation bid support and contract review",
                  link: "/fm-operations/tender-support"
                }
              ]}
            />

            <section className="mb-12">
              <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg">
                <h2 className="text-2xl font-light mb-4">Plan Your FM Mobilisation</h2>
                <p className="text-muted-foreground font-light leading-relaxed mb-6">
                  Whether you're transitioning FM providers, bringing services in-house, or mobilising a new contract, we deliver structured, risk-managed mobilisation that ensures service continuity and compliance from Day 1. Contact us to discuss your mobilisation requirements.
                </p>
                <Link 
                  to="/request-proposal" 
                  className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Request Mobilisation Support
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

export default Mobilisation;
