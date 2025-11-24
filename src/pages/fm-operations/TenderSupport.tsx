import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { ServiceSchema } from "@/components/shared/SchemaMarkup";
import { FAQSection } from "@/components/shared/FAQSection";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { FAQSchema } from "@/components/shared/SchemaMarkup";
import { SidebarCTA } from "@/components/shared/SidebarCTA";

const TenderSupport = () => {
  const breadcrumbItems = [
    { label: "FM Operations", href: "/services" },
    { label: "FM Tender Support & Bid Advisory" }
  ];

  const faqs = [
    {
      question: "When should organizations seek tender support for FM procurement?",
      answer: "Tender support is valuable when: Internal FM expertise limited (no in-house procurement specialists), Contract value significant (major spend justifies professional support), Complexity high (multi-site portfolios, IFM contracts, technical specifications), Regulatory requirements (Public Contracts Regulations—public sector procurement), Time constraints (procurement resource stretched, external support accelerates process), Previous procurement issues (poor outcomes from past tenders—lessons learned required). Tender support provides: Technical specification development (clear, measurable requirements), Procurement process management (compliant, efficient, professional), Market engagement (supplier identification, capability assessment), Evaluation framework (objective, defensible scoring), Contract negotiation (commercial terms, risk allocation). Organizations without procurement expertise risk: Poor specifications (ambiguous requirements, inadequate detail), Non-compliant process (legal challenges, procurement failures), Weak evaluation (subjective decisions, inadequate due diligence), Commercial disadvantage (poor contract terms, unfavorable pricing)."
    },
    {
      question: "What does technical specification development involve?",
      answer: "Specification development process: Needs assessment (understand building portfolio, operational requirements, current pain points), Service scope definition (identify required services—statutory maintenance, reactive, PPM, soft services), Standards and frequencies (define quality levels, inspection frequencies—align to SFG20, BS standards, risk), Performance framework (KPIs, SLAs, reporting requirements—measurable, achievable), Commercial structure (payment mechanisms, incentives, variations—align interests). Specification must be: Clear (unambiguous language, measurable requirements), Comprehensive (cover all services, avoid gaps), Proportionate (appropriate detail—not over/under-specified), Compliant (statutory requirements non-negotiable), Outcome-focused (what to achieve, not prescriptive how). Poor specifications cause: Ambiguity (contractors interpret differently—disputes arise), Over-specification (excessive detail constrains innovation, increases cost), Under-specification (critical requirements missing—service gaps, non-compliance). Professional specification development prevents tender failures and operational issues."
    },
    {
      question: "How do you manage the tender evaluation and contractor selection process?",
      answer: "Evaluation process: Pre-qualification (assess contractor capability, financial stability, track record—shortlist suitable bidders), ITT issue (invitation to tender with specification, contract terms, evaluation criteria), Clarification period (bidder questions, site visits, document amendments), Bid evaluation (score technical quality and price against weighted criteria), Due diligence (reference checks, financial checks, site visits to current contracts), Presentations/interviews (assess contractor understanding, cultural fit), Award decision (select preferred bidder, negotiate contract terms). Evaluation criteria typically: 60-70% quality (technical capability, methodology, resources, track record), 30-40% price (total cost, value for money). Scoring must be: Objective (clear scoring definitions, consistent application), Documented (audit trail, justification for decisions), Defensible (able to explain to unsuccessful bidders, withstand challenge). Evaluation panel includes: Technical experts (assess FM capability), Commercial specialists (review pricing, contract terms), Stakeholders (occupier representation, client decision-makers). Professional evaluation prevents: Poor contractor selection (capability gaps identified post-award), Legal challenges (non-compliant evaluation processes), Commercial disadvantage (inadequate due diligence, unfavorable contract terms)."
    },
    {
      question: "What are the key contract terms and commercial structures for FM contracts?",
      answer: "Critical contract terms: Scope of services (detailed schedules, inclusions/exclusions), Payment mechanisms (fixed price, cost-plus, performance-linked), KPIs and SLAs (measurable performance standards, response/fix times), Contract duration (initial term, extension options—balance commitment vs flexibility), Variation procedures (how to add/remove services, change scope), Termination provisions (notice periods, exit rights, termination for default), Liability and insurance (caps, exclusions, required cover levels). Commercial structures: Fixed price (predictable costs, contractor bears risk—appropriate for stable scope), Cost-plus (transparency, flexibility—appropriate for uncertain scope), Gainshare/painshare (shared savings/overruns—align interests for cost improvement), Open-book (cost transparency, margin visibility—builds trust but requires audit). Contract terms must balance: Risk allocation (fair distribution—avoid one-sided terms), Flexibility (adapt to changing needs without excessive variation disputes), Performance incentives (reward excellence, penalize poor performance), Exit provisions (protect client if contractor fails). Professional contract advisory ensures balanced, enforceable terms—avoiding future disputes and commercial disadvantage."
    },
    {
      question: "How do you support mobilization and ensure smooth contract transition?",
      answer: "Mobilization planning starts during procurement: Transition programme (detailed timeline—pre-go-live preparation, Day 1 readiness, post-go-live stabilization), Asset data collection (verify registers, site surveys, compliance documentation), TUPE management (staff transfer consultation, competency validation), Technology setup (CAFM configuration, helpdesk integration, reporting dashboards), Stakeholder communications (occupier notifications, contractor introductions, service expectations). Mobilization risks: Compliance gaps (undiscovered non-compliances—costly catch-up), Asset data inaccuracy (missing equipment, incorrect specifications—impacts PPM scheduling), TUPE complications (staff disputes, competency gaps), Technology failures (CAFM not ready, data migration issues). Mobilization support includes: Project management (coordinate activities, manage timelines), Risk management (identify issues early, implement mitigations), Go-live readiness (checkpoint reviews, sign-off criteria), Post-go-live support (issue resolution, performance monitoring). Professional mobilization support prevents: Service disruption (Day 1 failures, occupier complaints), Compliance issues (gaps not addressed, certificates overdue), Commercial disputes (unexpected costs, scope ambiguity). Smooth mobilization sets foundation for successful long-term contract performance."
    }
  ];

  return (
    <>
      <Helmet>
        <title>FM Tender Support & Bid Advisory | Procurement Assistance | EntireFM</title>
        <meta name="description" content="FM tender support and bid advisory services providing clear technical input for estates teams preparing FM tenders. Specification development, evaluation and contract support." />
      </Helmet>

      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema 
        name="FM Tender Support & Bid Advisory"
        description="Clear technical input for estates teams preparing FM tenders. Specification development, procurement management, evaluation support and mobilization planning."
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
                FM Tender Support & Bid Advisory
              </h1>
              <p className="text-xl text-muted-foreground font-light leading-relaxed">
                Clear technical input for estates teams preparing FM tenders.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Tender Support: Professional Procurement Assistance
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                FM procurement is complex—requiring technical specification expertise, procurement process knowledge, commercial acumen, and mobilization planning. Organizations without internal FM procurement capability risk: Poor specifications (ambiguous requirements, inadequate detail—disputes arise), Weak evaluation (subjective decisions, inadequate contractor assessment), Commercial disadvantage (unfavorable contract terms, excessive costs), Failed mobilization (service disruption, compliance gaps). Professional tender support delivers: Technical specification development (clear, measurable requirements), Procurement process management (compliant, efficient execution), Evaluation framework design (objective contractor assessment), Contract negotiation support (favorable commercial terms), Mobilization planning (smooth transition, Day 1 readiness).
              </p>
              <p className="text-muted-foreground font-light leading-relaxed">
                Tender support is particularly valuable for: Major contract re-tenders (IFM, multi-million pound value), Complex portfolios (multi-site, diverse building types), Public sector procurement (Public Contracts Regulations compliance), Organizations without procurement expertise (first tender, limited internal capability). Our tender support service combines FM technical expertise with procurement professionalism—ensuring specifications are compliant, processes are robust, and outcomes deliver value. We act as client advisor—independent, objective, focused solely on achieving best procurement outcome.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Technical Specification Development
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium mb-2">Service Scope Definition & Requirements Capture</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Specification development process: Stakeholder engagement (understand operational requirements, current pain points, improvement priorities), Asset data review (verify building systems, condition, age—inform maintenance requirements), Compliance assessment (identify statutory obligations—electrical, fire, gas, water, lifting equipment), Service categorization (hard services, soft services, specialist—define boundaries clearly), Standards definition (quality levels, frequencies, response times—align to SFG20, BS standards, risk-based assessment). Specification outputs: Service schedules (detailed activity lists, frequencies, standards), Performance framework (KPIs, SLAs, reporting requirements), Statutory compliance schedule (all legal obligations listed with frequencies), Commercial structure (payment mechanisms, variations, incentives). Specification must be: Clear (unambiguous language, measurable requirements—prevent disputes), Comprehensive (cover all services, no gaps—avoid scope creep), Proportionate (appropriate detail level—not over/under-specified), Output-focused (what to achieve, not prescriptive how—allow innovation).
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Performance Framework & KPI Design</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    KPI framework design: Reactive maintenance (response times, resolution times, first-time fix rates—target 80%+), PPM delivery (schedule adherence—target 95%+), Compliance status (certificates in-date, statutory maintenance current—target 100%), Helpdesk performance (call answer times, customer satisfaction—target NPS 50+), Cost control (budget adherence, variation management—target ±5%), Safety (incident rates, near-misses—target zero harm). KPIs must be: Measurable (objective data collection, no subjective assessment), Achievable (realistic targets given asset condition, budget), Relevant (align to organizational priorities—not arbitrary metrics), Incentivized (link to payment, contract extensions—drive performance). Performance reporting: Monthly dashboards (real-time visibility), Quarterly reviews (trend analysis, improvement actions), Annual assessment (contract performance evaluation, lessons learned). Well-designed KPIs drive contractor performance—poorly designed KPIs create gaming, disputes, and misaligned behaviors.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Commercial Structure & Payment Mechanisms</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Commercial model options: <strong>Fixed price:</strong> Predictable annual cost, contractor bears risk—appropriate for stable, well-defined scope. <strong>Cost-plus:</strong> Transparent costs, client bears risk—appropriate for uncertain scope, requires open-book accounting. <strong>Gainshare/painshare:</strong> Share savings/overruns—aligns interests for cost improvement, requires baseline agreement. <strong>Hybrid:</strong> Fixed price PPM, cost-plus reactive—balances predictability with flexibility. Payment terms: Monthly/quarterly payments (cashflow management), Performance deductions (KPI failures penalized—incentivize compliance), Variation procedures (add/remove services—clear pricing basis), Indexation (inflation adjustments—CPI, wage inflation). Commercial structure must balance: Risk allocation (fair distribution between parties), Cost certainty (client budget predictability vs contractor flexibility), Performance incentives (reward excellence, penalize failures), Transparency (understand cost drivers, validate value for money).
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Procurement Process Management
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium mb-2">Market Engagement & Pre-Qualification</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Pre-tender market activities: Soft market testing (engage suppliers informally—understand capability, pricing ranges, innovation), Supplier days (present opportunity, Q&A sessions—increase competition, improve bid quality), Pre-qualification (assess financial stability, capability, track record—shortlist suitable bidders). Pre-qualification criteria: Financial standing (turnover, profit, credit rating—demonstrate stability), Technical capability (qualifications, accreditations, resources—evidence competence), Experience (relevant contract examples, client references—demonstrate track record), Health & safety (policies, incident rates, prosecutions—evidence safety culture). Pre-qualification prevents: Time wasted evaluating unsuitable bidders, Risk of contractor failure (inadequate financial stability, capability gaps), Poor bid quality (bidders without relevant experience submitting generic proposals). Typically 3-6 pre-qualified bidders invited to tender—balance competition with evaluation resource.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">ITT Documentation & Tender Period Management</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    ITT (Invitation to Tender) package includes: Executive summary (opportunity overview, key requirements), Service specification (detailed requirements, standards, frequencies), Contract terms (draft agreement, payment terms, KPIs), Pricing schedule (transparent cost breakdown template), Evaluation criteria (quality/price weighting, scoring methodology), Tender timetable (submission deadline, evaluation period, contract award date). Tender period management: Issue ITT (simultaneous to all bidders—ensure fairness), Clarification period (bidder questions answered, amendments issued to all), Site visits (enable bidders to assess buildings, meet stakeholders), Deadline management (strict submission deadline—late bids rejected). ITT must be: Complete (all information for informed bidding), Clear (unambiguous requirements, transparent evaluation), Fair (equal treatment of bidders, no preferential information), Compliant (Public Contracts Regulations if applicable—prevent legal challenges). Poor ITT documentation causes: Low-quality bids (bidders lack information for comprehensive proposals), Evaluation difficulties (incomplete/inconsistent responses), Commercial disputes (ambiguities interpreted differently).
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Bid Evaluation & Contractor Selection
              </h2>
              <div className="bg-muted/50 p-6 rounded-lg space-y-4">
                <div>
                  <h3 className="font-medium mb-2">Quality & Price Evaluation</h3>
                  <p className="text-sm text-muted-foreground font-light">
                    Evaluation criteria weighting: Typically 60-70% quality (technical methodology, resources, track record, innovation), 30-40% price (total cost, value for money). Quality assessment: Technical capability (methodology, compliance understanding, risk mitigation), Resources (engineer numbers, qualifications, management structure), Track record (references, case studies, relevant experience), Social value (local employment, apprenticeships, sustainability). Price assessment: Total contract value (compare like-for-like), Cost breakdown (understand cost drivers, validate reasonableness), Value for money (quality vs price balance—cheapest not always best). Scoring methodology: Defined scoring scales (0-10, clear definitions for each score), Weighted scores (quality and price combined according to weighting), Moderation (panel review, consensus—ensure consistency). Evaluation must be: Objective (criteria-based, not subjective preferences), Documented (scoring justifications, audit trail—defensible decisions), Consistent (same standards applied to all bidders—prevent bias).
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Due Diligence & Reference Checks</h3>
                  <p className="text-sm text-muted-foreground font-light">
                    Contractor due diligence: Financial checks (credit reports, accounts analysis—validate financial stability), Reference checks (contact existing clients—verify performance claims), Site visits (inspect current contracts—assess actual delivery quality), Insurance verification (confirm adequate cover levels—public/employer's liability, professional indemnity), Accreditations (SafeContractor, CHAS, Constructionline—validate health & safety competence). Due diligence prevents: Contractor failure (financial collapse mid-contract), Performance issues (capability claims not matched by reality), Insurance gaps (inadequate cover—client liability exposure). Thorough due diligence complements tender evaluation—validating bidder claims before contract award.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Contract Negotiation & Award</h3>
                  <p className="text-sm text-muted-foreground font-light">
                    Final negotiation with preferred bidder: Clarify ambiguities (resolve specification uncertainties), Negotiate commercial terms (payment schedules, liability caps, termination provisions), Finalize KPIs (agree targets, reporting, performance deductions), Mobilization planning (transition timeline, resource allocation, risk mitigation). Contract award: Formal notification (preferred bidder, standstill period if public sector), Unsuccessful bidder feedback (explain decision, support continuous improvement), Contract execution (sign formal agreement—legal binding), Mobilization commencement (transition programme activates). Professional negotiation ensures: Balanced risk allocation (fair terms for both parties), Commercial clarity (no ambiguities causing future disputes), Mobilization readiness (smooth transition from Day 1).
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Mobilization Planning & Transition Support
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                Mobilization planning ensures smooth transition: Transition programme (detailed timeline—pre-go-live, Day 1, post-go-live stabilization), Asset data handover (verify registers, conduct surveys, update CAFM), Compliance gap analysis (identify missing certificates, overdue inspections—agree catch-up schedule), TUPE management (staff transfers, competency validation, induction), Technology setup (CAFM configuration, helpdesk integration, reporting dashboards), Stakeholder communications (occupier notifications, contractor introductions). Mobilization risks: Compliance gaps (undiscovered issues—costly emergency works), Asset data inaccuracies (missing equipment—impacts PPM scheduling), TUPE complications (staff disputes, skills gaps), Service disruption (Day 1 failures—occupier complaints).
              </p>
              <p className="text-muted-foreground font-light leading-relaxed">
                Mobilization support activities: Project management (coordinate parties, manage timeline), Risk management (identify issues early, implement mitigations), Go-live readiness reviews (checkpoint assessments, sign-off criteria), Post-go-live support (issue resolution, performance monitoring—30-90 days). Professional mobilization support prevents service disruption, compliance failures, and commercial disputes—setting foundation for successful long-term contract performance. See Mobilisation service for detailed transition management.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Related Services
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link to="/fm-operations/fm-strategy" className="p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                  <h3 className="font-medium mb-2">FM Strategy</h3>
                  <p className="text-sm text-muted-foreground font-light">Estate performance consultancy</p>
                </Link>
                <Link to="/fm-operations/mobilisation" className="p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                  <h3 className="font-medium mb-2">FM Mobilisation</h3>
                  <p className="text-sm text-muted-foreground font-light">Contract transition management</p>
                </Link>
                <Link to="/services/building-inspections" className="p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                  <h3 className="font-medium mb-2">Building Inspections</h3>
                  <p className="text-sm text-muted-foreground font-light">Compliance audits and surveys</p>
                </Link>
                <Link to="/fm-operations/asset-lifecycle" className="p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                  <h3 className="font-medium mb-2">Asset Lifecycle Planning</h3>
                  <p className="text-sm text-muted-foreground font-light">Capital forecasting</p>
                </Link>
              </div>
            </section>

            <section className="mb-12">
              <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg">
                <h2 className="text-2xl font-light mb-4">Request Tender Support</h2>
                <p className="text-muted-foreground font-light leading-relaxed mb-6">
                  Our tender support service provides professional procurement assistance for FM contracts—from specification development through evaluation to mobilization. We deliver compliant, efficient procurement achieving best value outcomes. Contact us to discuss your tender requirements.
                </p>
                <Link 
                  to="/request-proposal" 
                  className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Request Tender Support
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

export default TenderSupport;
