import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { ServiceSchema } from "@/components/shared/SchemaMarkup";
import { FAQSection } from "@/components/shared/FAQSection";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { FAQSchema } from "@/components/shared/SchemaMarkup";
import { SidebarCTA } from "@/components/shared/SidebarCTA";

const FMStrategy = () => {
  const breadcrumbItems = [
    { label: "FM Operations", href: "/services" },
    { label: "FM Strategy & Estate Performance Consultancy" }
  ];

  const faqs = [
    {
      question: "When should organizations seek FM strategy consultancy?",
      answer: "FM strategy consultancy is valuable during: Contract re-tendering (evaluate current performance, define future requirements, develop procurement strategy), Portfolio optimization (consolidate contracts, right-size service levels, reduce costs), Operational review (assess compliance, identify inefficiencies, benchmark performance), Major change events (mergers, acquisitions, estate rationalization), ESG acceleration (develop net-zero roadmaps, sustainability strategies). Consultancy provides: Independent expertise (objective assessment free from operational bias), Benchmarking insight (industry best practices, peer comparison), Strategic clarity (define FM vision, priorities, delivery model), Procurement support (tender development, evaluation, mobilization). Organizations typically lack internal FM strategy capability—consultancy fills expertise gap during critical decision-making periods."
    },
    {
      question: "What does FM performance benchmarking involve?",
      answer: "Benchmarking compares FM performance against industry standards: Cost benchmarking (compare spend per m², per occupant vs peers—identify over/under-spend), Service quality (compare KPIs, satisfaction scores, complaint rates vs best practice), Compliance status (audit statutory maintenance, certificates, procedures—identify gaps), Efficiency metrics (PPM vs reactive ratio, first-time fix rates, SLA performance). Benchmarking sources: IPD Occupiers Property Databank (industry-standard FM cost benchmarking), RICS guidance (best practice standards), Peer data (anonymized comparison with similar estates), Contract data (analyze own historical performance trends). Benchmarking identifies: Cost inefficiencies (excessive spend on poorly performing services), Service gaps (under-provision of critical maintenance), Improvement opportunities (best practices to adopt). Data-driven benchmarking supports informed decision-making—replaces subjective opinions with objective evidence."
    },
    {
      question: "How do you develop an FM operating model for a new organization?",
      answer: "Operating model development process: Needs assessment (understand building portfolio, occupancy, operational requirements), Service scope definition (identify required FM services—hard, soft, specialist), Delivery model selection (in-house, outsourced, hybrid—assess pros/cons for each service), Governance structure (define roles, responsibilities, reporting lines—client-side FM team), Technology strategy (CAFM, helpdesk, reporting—digital enablement), Performance framework (define KPIs, reporting, continuous improvement mechanisms). Delivery model options: Fully outsourced (single IFM contract—simplicity, accountability), Bundled contracts (separate hard/soft, multi-contractor—flexibility, specialization), In-house (client-employed team—control, cost), Hybrid (in-house oversight, outsourced delivery—balance). Operating model must align with: Organizational culture, Risk appetite (control vs flexibility), Budget constraints, Internal capability (ability to manage contractors/in-house teams). Professional FM strategy consultancy ensures operating model is fit-for-purpose—avoiding misalignment between organizational needs and FM delivery approach."
    },
    {
      question: "What is involved in FM contract optimization and cost reduction?",
      answer: "Cost optimization strategies: Service specification review (challenge scope, frequency, standards—eliminate over-provision), Contract consolidation (bundle services, reduce contractor numbers—economies of scale), Competitive re-tendering (market test pricing, introduce competition), Technology adoption (CAFM, IoT, automation—improve efficiency, reduce labour), Energy efficiency (reduce consumption—lower utility costs), Proactive maintenance (increase PPM—reduce expensive reactive work). Typical savings: 10-20% through specification review and re-tendering, 5-15% through energy efficiency, 10-30% through contract consolidation and technology. Cost reduction requires balance: Avoid cutting statutory maintenance (creates compliance risk), Maintain service quality (cost cuts affecting occupier experience cause dissatisfaction), Consider whole-life costs (deferred maintenance increases future capital expenditure). Professional consultancy identifies sustainable cost reductions—avoiding false economies that create future problems."
    },
    {
      question: "How do you support organizations with ESG and net-zero FM strategies?",
      answer: "ESG-aligned FM strategy includes: Carbon baseline assessment (measure current emissions—Scope 1, 2, 3), Net-zero roadmap development (pathways to reduce emissions—energy efficiency, renewable energy, operational changes), ESG framework implementation (define targets, reporting, governance), Sustainability integration (embed ESG into procurement, operations, performance management). Key workstreams: Energy reduction (building fabric, HVAC optimization, controls, behaviour change), Renewable energy (solar PV, green electricity tariffs, on-site generation), Waste optimization (reduce, reuse, recycle—zero-to-landfill), Water stewardship (leak detection, consumption reduction, efficiency measures), Social value (employment, skills, community engagement—demonstrated through FM delivery). ESG strategy ensures FM supports organizational sustainability commitments—translating corporate net-zero pledges into operational delivery plans with measurable outcomes."
    }
  ];

  return (
    <>
      <Helmet>
        <title>FM Strategy & Estate Performance Consultancy | Compliance & Cost Optimization | EntireFM</title>
        <meta name="description" content="FM strategy and estate performance consultancy enhancing compliance, reducing cost and improving operational resilience. Strategic advisory for commercial estate management." />
      </Helmet>

      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema 
        name="FM Strategy & Estate Performance Consultancy"
        description="Advisory services to enhance compliance, reduce cost and improve operational resilience. FM strategy consultancy supporting organizational efficiency and performance optimization."
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
                FM Strategy & Estate Performance Consultancy
              </h1>
              <p className="text-xl text-muted-foreground font-light leading-relaxed">
                Advisory services to enhance compliance, reduce cost and improve operational resilience.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                FM Strategy: From Operational Necessity to Strategic Asset
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                Facilities management is often viewed as operational overhead—a cost to minimize rather than strategic function to optimize. However, effective FM strategy delivers: Cost efficiency (benchmark performance, eliminate over-provision, competitive procurement), Compliance assurance (systematic statutory maintenance, audit-ready documentation), Operational resilience (business continuity, asset lifecycle planning, risk management), ESG enablement (net-zero pathways, sustainability integration, social value demonstration). Poor FM strategy causes: Excessive costs (reactive culture, over-specified contracts, missed savings opportunities), Compliance failures (inadequate statutory maintenance, missing certificates), Operational disruption (asset failures, inadequate resilience planning).
              </p>
              <p className="text-muted-foreground font-light leading-relaxed">
                Our FM strategy consultancy provides independent expertise during critical decision-making periods—contract re-tendering, portfolio optimization, operational reviews, ESG acceleration. We combine technical FM competence with strategic thinking—delivering actionable recommendations that improve performance, reduce cost, and ensure compliance. Unlike operational FM providers, consultancy is objective—no vested interest in service delivery approach, just evidence-based advice supporting organizational objectives.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Performance Benchmarking & Gap Analysis
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium mb-2">Cost & Efficiency Benchmarking</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Comparative cost analysis: Total FM spend per m² (compare to IPD Occupiers benchmarks—identify over/under-spend), Service category breakdown (HVAC, electrical, cleaning, security—highlight outliers), Reactive vs PPM ratio (target 70-80% PPM, 20-30% reactive—assess maintenance culture), Outsourced vs in-house costs (compare delivery models—inform operating model decisions). Benchmarking sources: IPD Occupiers Property Databank (industry-standard FM cost data), RICS standards (best practice guidance), Peer comparison (anonymized data from similar organizations), Historical trend analysis (own performance over time—identify deterioration/improvement). Benchmarking identifies: Cost inefficiencies (excessive spend without commensurate service quality), Service gaps (critical under-provision creating risk), Optimization opportunities (areas for efficiency improvement, cost reduction). Evidence-based benchmarking replaces subjective opinions—enabling informed decision-making.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Compliance Audits & Risk Assessment</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Systematic compliance review: Statutory maintenance status (electrical, fire, gas, water, lifting—certificates in-date, inspections current), Documentation compliance (risk assessments, method statements, permits—complete, reviewed), Contractor competency (qualifications, insurance, accreditations—verified), Emergency procedures (fire, first aid, incident management—documented, tested). Risk assessment prioritizes gaps: Critical (immediate safety risk, regulatory exposure—urgent remediation), High (compliance failure, operational impact—address within 30-60 days), Medium (best-practice gap, efficiency opportunity—12-month improvement plan). Compliance audits prevent: Regulatory action (enforcement notices, prosecution following inspections), Insurance invalidation (inadequate maintenance voids cover), Operational disruption (failures from deferred maintenance escalate). Independent audits provide objective assessment—identifying issues operational teams may overlook or minimize.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Service Quality & Occupier Satisfaction Assessment</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Qualitative performance evaluation: Occupier satisfaction surveys (NPS, category ratings—benchmark vs industry standards), Complaint analysis (frequency, categories, resolution—identify service pain points), Stakeholder interviews (FM team, occupiers, contractors—understand perceptions, challenges), Mystery shopper audits (test helpdesk, contractor response—objective service quality assessment). Service quality gaps: Helpdesk responsiveness (slow response, poor communication), First-time fix rates (repeat visits, incomplete repairs), Communication effectiveness (inadequate advance notice, poor status updates), Professional conduct (contractor behavior, site housekeeping). Service quality assessment complements cost benchmarking—cheap but poor-quality FM creates occupier dissatisfaction, operational disruption, reputational damage. Strategy must balance cost efficiency with service excellence.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Operating Model Design & Procurement Strategy
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium mb-2">Delivery Model Selection</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Operating model options: <strong>Single IFM (Integrated FM):</strong> One contractor delivers all services—simplicity, single accountability, potential cost savings through bundling. Risks: Over-dependence, reduced flexibility, contractor lock-in. <strong>Bundled contracts:</strong> Separate hard/soft services, specialist contracts—flexibility, best-of-breed specialists. Risks: Coordination complexity, multiple relationships. <strong>In-house delivery:</strong> Client-employed FM team—control, cultural alignment, long-term cost efficiency. Risks: Recruitment challenges, capacity constraints, limited scalability. <strong>Hybrid models:</strong> In-house oversight, outsourced delivery—balance control with flexibility. Model selection criteria: Organizational culture (risk appetite, control preference), Portfolio characteristics (size, complexity, geographic spread), Internal capability (client-side FM expertise), Budget (capital vs operational expenditure preferences). No universal 'best' model—appropriate approach depends on organizational context. Strategy consultancy assesses options objectively—recommending fit-for-purpose delivery model.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Procurement & Tender Support</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Strategic procurement planning: Market engagement (soft market testing, supplier days—understand capability, pricing), Specification development (define scope, standards, KPIs—clear, measurable requirements), Tender documentation (ITT, contract terms, evaluation criteria—professional, compliant), Evaluation framework (quality/price weighting, scoring methodology—objective, defensible), Mobilization planning (transition programme, risk mitigation—ensure continuity). Procurement strategy must balance: Cost (competitive pricing without compromising quality), Quality (competent contractors, professional service delivery), Risk (contractor financial stability, capability, track record), Innovation (technology adoption, sustainability initiatives). Professional procurement support ensures: Compliant process (Public Contracts Regulations if applicable), Market competition (sufficient bidders, competitive tension), Informed decisions (robust evaluation, due diligence), Successful mobilization (smooth transition, minimal disruption). See Tender Support service for detailed procurement assistance.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Cost Optimization & Efficiency Improvement
              </h2>
              <div className="bg-muted/50 p-6 rounded-lg space-y-4">
                <div>
                  <h3 className="font-medium mb-2">Service Specification Review</h3>
                  <p className="text-sm text-muted-foreground font-light">
                    Challenge current scope: Frequency (reduce over-provision—quarterly inspection adequate vs monthly), Standards (adjust finish quality to appropriate levels—Grade A vs industrial), Coverage (eliminate redundant services, low-value activities). Typical savings: 10-20% through specification rationalization without compromising compliance or quality. Requires technical expertise—distinguishing statutory requirements (non-negotiable) from discretionary enhancements (negotiable).
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Contract Consolidation & Competitive Tendering</h3>
                  <p className="text-sm text-muted-foreground font-light">
                    Consolidate fragmented contracts (bundle services, reduce contractor numbers—economies of scale, simplified management). Market test existing arrangements (competitive re-tendering—typical savings 10-20% from pricing pressure). Review contract durations (longer terms secure better pricing—balance savings vs flexibility). Contract optimization requires commercial acumen—negotiation skills, market knowledge, risk assessment.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Technology & Process Efficiency</h3>
                  <p className="text-sm text-muted-foreground font-light">
                    CAFM adoption (replace manual systems—improve scheduling, reporting, compliance tracking). IoT/sensors (condition-based maintenance—reduce unnecessary PPM, predict failures). Self-service portals (occupier empowerment—reduce helpdesk burden). Energy optimization (controls, behavior change, fabric improvements—5-15% utility cost reduction). Technology investments require business case justification—ROI calculation, implementation planning, change management support.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                ESG Strategy & Net-Zero Roadmaps
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                FM is critical to organizational ESG performance: Carbon emissions (Scope 1 heating, Scope 2 electricity, Scope 3 supply chain—FM operations contribute significantly), Resource efficiency (energy, water, waste—FM manages consumption), Social value (employment, skills, community engagement—FM contractors deliver). ESG-aligned FM strategy: Carbon baseline (measure current emissions—identify reduction priorities), Net-zero roadmap (pathways to reduce emissions—energy efficiency, renewable energy, electrification), Circular economy (waste reduction, material reuse, sustainable procurement), Social value (local employment, apprenticeships, community investment—integrate into FM contracts). ESG strategy ensures FM supports corporate sustainability commitments—translating high-level pledges into operational delivery plans with measurable outcomes.
              </p>
              <p className="text-muted-foreground font-light leading-relaxed">
                Key ESG workstreams: Energy (fabric improvements, HVAC optimization, controls, renewable energy), Waste (reduce, reuse, recycle—zero-to-landfill), Water (leak detection, efficiency measures, consumption reduction), Biodiversity (grounds management, green infrastructure), Social (employment, skills, safety, wellbeing). ESG strategy requires: Target setting (SMART objectives aligned to corporate commitments), Performance monitoring (KPIs, dashboards, regular reporting), Continuous improvement (data-driven optimization, innovation adoption). Professional ESG consultancy ensures FM strategy aligns with organizational sustainability ambitions—avoiding greenwashing through measurable, evidence-based delivery.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Related Services
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link to="/fm-operations/tender-support" className="p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                  <h3 className="font-medium mb-2">Tender Support</h3>
                  <p className="text-sm text-muted-foreground font-light">Bid advisory and procurement assistance</p>
                </Link>
                <Link to="/fm-operations/asset-lifecycle" className="p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                  <h3 className="font-medium mb-2">Asset Lifecycle Planning</h3>
                  <p className="text-sm text-muted-foreground font-light">Capital planning and forecasting</p>
                </Link>
                <Link to="/services/energy-audits" className="p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                  <h3 className="font-medium mb-2">Energy Audits</h3>
                  <p className="text-sm text-muted-foreground font-light">Building performance reviews</p>
                </Link>
                <Link to="/services/sustainability-monitoring" className="p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                  <h3 className="font-medium mb-2">Sustainability Monitoring</h3>
                  <p className="text-sm text-muted-foreground font-light">ESG performance tracking</p>
                </Link>
              </div>
            </section>

            <section className="mb-12">
              <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg">
                <h2 className="text-2xl font-light mb-4">Request FM Strategy Consultancy</h2>
                <p className="text-muted-foreground font-light leading-relaxed mb-6">
                  Our FM strategy consultancy provides independent expertise during critical decision-making periods. We deliver evidence-based recommendations that improve performance, reduce cost, ensure compliance, and support ESG objectives. Contact us to discuss your FM strategy requirements.
                </p>
                <Link 
                  to="/request-proposal" 
                  className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Request Strategy Consultancy
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

export default FMStrategy;
