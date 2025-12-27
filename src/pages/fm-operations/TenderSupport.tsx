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
  FileText, 
  Scale, 
  CheckSquare, 
  Handshake,
  ArrowRight,
  ClipboardList
} from "lucide-react";

const TenderSupport = () => {
  const breadcrumbItems = [
    { label: "FM Operations", href: "/fm-operations" },
    { label: "FM Tender Support & Bid Advisory" }
  ];

  const keyFeatures = [
    {
      icon: FileText,
      title: "Specification Development",
      description: "Clear, measurable requirements aligned to SFG20 and statutory standards"
    },
    {
      icon: Scale,
      title: "Evaluation Framework",
      description: "Objective quality/price scoring with defensible methodology"
    },
    {
      icon: CheckSquare,
      title: "Procurement Compliance",
      description: "Public Contracts Regulations compliant processes"
    },
    {
      icon: Handshake,
      title: "Contract Negotiation",
      description: "Balanced terms, risk allocation, and commercial structures"
    }
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

      <div className="min-h-screen bg-background">
        <ServiceHeroSection
          breadcrumbItems={breadcrumbItems}
          title="FM Tender Support & Bid Advisory"
          description="Clear technical input for estates teams preparing FM tenders. Professional procurement assistance from specification through contract award."
          stats={[
            { value: "PCR", label: "Compliant" },
            { value: "60/40", label: "Quality/Price" },
            { value: "SFG20", label: "Aligned" },
            { value: "ITT", label: "Ready" }
          ]}
          primaryCTA={{
            label: "Request Support",
            href: "/request-proposal",
            icon: ArrowRight
          }}
          secondaryCTA={{
            label: "View Mobilisation",
            href: "/fm-operations/mobilisation",
            icon: ClipboardList
          }}
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
                    Tender Support: Professional Procurement Assistance
                  </h2>
                  <p className="text-muted-foreground font-light leading-relaxed mb-4">
                    FM procurement is complex—requiring technical specification expertise, procurement process knowledge, commercial acumen, and mobilization planning. Organizations without internal FM procurement capability risk: Poor specifications (ambiguous requirements, inadequate detail—disputes arise), Weak evaluation (subjective decisions, inadequate contractor assessment), Commercial disadvantage (unfavorable contract terms, excessive costs), Failed mobilization (service disruption, compliance gaps). Professional tender support delivers: Technical specification development (clear, measurable requirements), Procurement process management (compliant, efficient execution), Evaluation framework design (objective contractor assessment), Contract negotiation support (favorable commercial terms), Mobilization planning (smooth transition, Day 1 readiness).
                  </p>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Tender support is particularly valuable for: Major contract re-tenders (IFM, multi-million pound value), Complex portfolios (multi-site, diverse building types), Public sector procurement (Public Contracts Regulations compliance), Organizations without procurement expertise (first tender, limited internal capability). Our tender support service combines FM technical expertise with procurement professionalism—ensuring specifications are compliant, processes are robust, and outcomes deliver value. We act as client advisor—independent, objective, focused solely on achieving best procurement outcome.
                  </p>
                </div>

                <div>
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
                </div>

                <div>
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
                </div>

                <div>
                  <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                    Bid Evaluation & Contractor Selection
                  </h2>
                  <div className="bg-muted/50 p-6 rounded-lg space-y-4">
                    <div>
                      <h3 className="font-medium mb-2">Quality & Price Evaluation</h3>
                      <p className="text-sm text-muted-foreground font-light">
                        Evaluation weighting: Typical 60% quality, 40% price (quality-focused) or 50/50 (balanced). Quality criteria: Technical capability, methodology, resources, track record, innovation. Price evaluation: Total cost comparison, value for money assessment, pricing realism (identify unsustainably low bids). Scoring methodology: Clear definitions for each score level, consistent panel application, documented justification.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">Due Diligence & Reference Checks</h3>
                      <p className="text-sm text-muted-foreground font-light">
                        Reference checks: Contact existing clients, verify claims, assess performance on similar contracts. Financial due diligence: Credit checks, accounts review, assess contractor financial stability. Site visits: Inspect current contract delivery, meet operational teams, assess real-world performance. Due diligence prevents: Selecting contractors with poor performance history, Financial failures mid-contract, Capability gaps discovered post-award.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">Award & Contract Negotiation</h3>
                      <p className="text-sm text-muted-foreground font-light">
                        Preferred bidder selection: Highest-scoring bidder subject to due diligence and contract negotiation. Contract negotiation: Clarify ambiguities, agree variations to draft terms, finalize commercial arrangements. Standstill period (public sector): Mandatory 10-day notification period before contract signature. Contract execution: Formal signing, mobilization planning commencement, project governance establishment.
                      </p>
                    </div>
                  </div>
                </div>

                <RelatedServices 
                  services={[
                    {
                      title: "FM Mobilisation",
                      description: "Contract transition and Day 1 readiness",
                      link: "/fm-operations/mobilisation"
                    },
                    {
                      title: "FM Strategy",
                      description: "Operating model design and procurement strategy",
                      link: "/fm-operations/fm-strategy"
                    },
                    {
                      title: "PPM Delivery",
                      description: "Post-contract statutory maintenance delivery",
                      link: "/fm-operations/ppm-delivery"
                    },
                    {
                      title: "Technical Helpdesk",
                      description: "Reactive support operational from Day 1",
                      link: "/fm-operations/helpdesk"
                    }
                  ]}
                />

                <section>
                  <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg">
                    <h2 className="text-2xl font-light mb-4">Request Tender Support</h2>
                    <p className="text-muted-foreground font-light leading-relaxed mb-6">
                      Our tender support service provides professional procurement assistance—from specification development through contract award. We deliver compliant processes, objective evaluation, and successful outcomes for FM procurements of all sizes.
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
        </section>
      </div>
    </>
  );
};

export default TenderSupport;
