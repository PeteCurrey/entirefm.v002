import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Settings, TrendingDown, CheckCircle } from "lucide-react";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { FAQSection } from "@/components/shared/FAQSection";
import { FAQSchema } from "@/components/shared/SchemaMarkup";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const WhatIsPPM = () => {
  const breadcrumbItems = [
    { label: "FM Insights", href: "/fm-insights" },
    { label: "What is PPM?" }
  ];

  const faqs = [
    {
      question: "What does PPM stand for in facilities management?",
      answer: "PPM stands for Planned Preventative Maintenance. It's a scheduled programme of inspections, servicing, and component replacements designed to prevent equipment failures, maintain compliance, and extend asset life."
    },
    {
      question: "What is the difference between PPM and reactive maintenance?",
      answer: "PPM is proactive — scheduled work preventing failures before they occur. Reactive maintenance responds to breakdowns after they happen. PPM reduces reactive costs, minimises disruption, and ensures compliance. Reactive maintenance is more expensive and unpredictable."
    },
    {
      question: "Is PPM legally required?",
      answer: "PPM itself isn't mandated, but the outcomes it delivers are. Regulations require systems to be maintained in safe working order. Well-designed PPM schedules fulfill these legal obligations while reducing breakdown risk and long-term costs."
    },
    {
      question: "How often should PPM be carried out?",
      answer: "Frequencies vary by equipment type and manufacturer guidance. Common intervals: monthly filter changes, quarterly belt inspections, annual boiler servicing, 5-year electrical testing. Risk-based assessments determine optimal schedules for each asset."
    },
    {
      question: "How much does a PPM contract cost?",
      answer: "Costs depend on building size, system complexity, service scope, and visit frequency. Typical PPM contracts range from £2-£8 per square foot annually. Comprehensive programmes covering all critical systems cost more upfront but deliver significant long-term savings through reduced breakdowns and extended asset life."
    }
  ];

  const relatedInsights = [
    { title: "What is Statutory Maintenance?", link: "/fm-insights/what-is-statutory-maintenance" },
    { title: "What is Hard FM?", link: "/fm-insights/what-is-hard-fm" },
    { title: "What is Facilities Management?", link: "/fm-insights/what-is-facilities-management" }
  ];

  return (
    <>
      <Helmet>
        <title>What is PPM? | Planned Preventative Maintenance Guide | EntireFM</title>
        <meta name="description" content="Understanding PPM: reducing breakdowns, costs and risk through strategic engineering maintenance. Essential guide to planned preventative maintenance programmes." />
      </Helmet>
      <BreadcrumbSchema items={breadcrumbItems} />
      <FAQSchema faqs={faqs} />

      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <Breadcrumb items={breadcrumbItems} />

          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-light mb-4 underline-accent inline-block">
              What is PPM (Planned Preventative Maintenance)?
            </h1>
            <p className="text-xl text-muted-foreground font-light leading-relaxed">
              Reducing breakdowns, costs and risk through strategic engineering.
            </p>
          </header>

          <article className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                What Does It Mean?
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                Planned Preventative Maintenance (PPM) is a systematic approach to maintaining building systems and equipment through scheduled inspections, servicing, adjustments, and component replacements. The objective is simple: prevent failures before they occur.
              </p>
              <p className="text-muted-foreground font-light leading-relaxed">
                PPM combines statutory compliance obligations with manufacturer-recommended servicing and engineering best practice to maximise equipment reliability, extend asset life, and minimise operational disruption.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Why PPM Matters
              </h2>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <Card className="p-6">
                  <TrendingDown className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-lg font-medium mb-3">Cost Reduction</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Emergency breakdowns cost 3-5 times more than planned maintenance. PPM reduces reactive callouts, prevents catastrophic failures, and delivers predictable budgeting through scheduled interventions.
                  </p>
                </Card>

                <Card className="p-6">
                  <CheckCircle className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-lg font-medium mb-3">Compliance Certainty</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    PPM schedules embed statutory testing requirements, ensuring legal obligations are met consistently. Complete audit trails demonstrate due diligence to regulators, insurers, and auditors.
                  </p>
                </Card>

                <Card className="p-6">
                  <Settings className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-lg font-medium mb-3">Extended Asset Life</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Regular servicing prevents premature wear, identifies developing faults early, and maintains equipment efficiency. Well-maintained systems routinely exceed manufacturer life expectancy projections.
                  </p>
                </Card>

                <Card className="p-6">
                  <Calendar className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-lg font-medium mb-3">Operational Continuity</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Scheduled maintenance minimises unplanned downtime. Work is coordinated during low-occupancy periods, avoiding business disruption and maintaining comfortable, safe environments for occupants.
                  </p>
                </Card>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                What Systems Require PPM?
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                Comprehensive PPM programmes typically cover:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Electrical systems:</strong> Distribution boards, emergency lighting, fixed wire testing</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>HVAC equipment:</strong> Air handling units, chillers, boilers, ventilation systems</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Fire safety:</strong> Alarm systems, extinguishers, sprinklers, smoke vents</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Water systems:</strong> Legionella control, TMVs, pumps, tanks</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Gas appliances:</strong> Boilers, catering equipment, heating systems</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Mechanical plant:</strong> Lifts, pumps, compressors, generators</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Building fabric:</strong> Roofs, drainage, doors, windows, structure</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Who Is Responsible?
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                PPM responsibility typically rests with:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Building owners:</strong> Ultimate accountability for asset preservation and compliance</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Facilities managers:</strong> Coordinating schedules, managing budgets, tracking completion</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>FM providers:</strong> Delivering scheduled works through qualified engineers</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Specialist contractors:</strong> Performing discipline-specific maintenance (HVAC, electrical, etc.)</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                What Must Be Done?
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                Effective PPM implementation requires:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start"><span className="text-primary mr-2">•</span>Complete asset registers documenting all equipment requiring maintenance</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span>Risk-based schedules balancing statutory obligations and manufacturer guidance</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span>Qualified engineers performing inspections, adjustments, and replacements</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span>Detailed service reports with findings, defects, and remediation recommendations</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span>Digital tracking systems managing schedules, certificates, and compliance evidence</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span>Defect escalation processes ensuring timely repairs</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span>Performance reviews optimising frequencies and scope based on outcomes</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                How Often Is It Required?
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                PPM frequencies vary by equipment type, usage intensity, and manufacturer specifications:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Weekly:</strong> Visual inspections, fire alarm tests</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Monthly:</strong> Emergency lighting tests, water temperature checks, filter inspections</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Quarterly:</strong> HVAC filter changes, belt adjustments, plant room inspections</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>6-monthly:</strong> Fire alarm servicing, pump maintenance</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Annually:</strong> Boiler servicing, gas safety checks, F-Gas inspections, full system testing</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Multi-year:</strong> Major overhauls, component replacements, deep inspections</li>
              </ul>
              <p className="text-muted-foreground font-light leading-relaxed mt-4">
                Well-designed PPM programmes balance compliance obligations, manufacturer guidance, and site-specific risk assessments.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                What Are the Risks of Neglecting PPM?
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                Inadequate PPM creates predictable and preventable consequences:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Equipment failures:</strong> Breakdowns causing operational disruption and emergency costs</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Compliance breaches:</strong> Missed statutory testing creating legal liability</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Insurance invalidation:</strong> Claims rejected due to poor maintenance records</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Shortened asset life:</strong> Premature replacements increasing capital expenditure</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Energy inefficiency:</strong> Poorly maintained systems consuming excessive power</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Safety incidents:</strong> System malfunctions creating occupant risk</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Reactive cost spiral:</strong> Emergency repairs costing 3-5x preventative maintenance</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                How EntireFM Assists
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                We deliver engineered PPM programmes combining compliance certainty with cost discipline. Our approach includes:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start"><span className="text-primary mr-2">•</span>Comprehensive asset audits establishing complete equipment inventories</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span>Risk-based scheduling balancing statutory, manufacturer, and best-practice requirements</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span>Qualified engineers with relevant certifications and proven competence</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span>Digital job management with automatic compliance alerts and certificate tracking</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span>Detailed service reports with photographic evidence and defect recommendations</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span>Performance analytics optimising schedules and identifying emerging issues</li>
              </ul>
              <p className="text-muted-foreground font-light leading-relaxed mt-4">
                No unnecessary visits. No box-ticking. Just disciplined engineering that prevents failures and protects assets.
              </p>
            </section>

            <FAQSection faqs={faqs} />

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                Related Insights
              </h2>
              <div className="grid md:grid-cols-3 gap-4">
                {relatedInsights.map((insight) => (
                  <Link key={insight.link} to={insight.link}>
                    <Card className="p-6 hover-lift h-full">
                      <h3 className="text-lg font-medium mb-2">{insight.title}</h3>
                      <div className="flex items-center text-sm text-primary">
                        Read more <ArrowRight className="w-4 h-4 ml-2" />
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
            </section>

            <Card className="p-8 bg-muted/30 text-center">
              <h3 className="text-2xl font-light mb-4">Need a PPM Programme?</h3>
              <p className="text-muted-foreground font-light mb-6">
                Request a proposal for planned preventative maintenance services.
              </p>
              <Button asChild size="lg">
                <Link to="/request-proposal">
                  Request a Proposal <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </Card>
          </article>
        </div>
      </div>
    </>
  );
};

export default WhatIsPPM;
