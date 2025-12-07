import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { ArrowRight, Users, Shield, Sparkles, Coffee } from "lucide-react";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { FAQSection } from "@/components/shared/FAQSection";
import { FAQSchema } from "@/components/shared/SchemaMarkup";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const WhatIsSoftFM = () => {
  const breadcrumbItems = [
    { label: "FM Insights", href: "/fm-insights" },
    { label: "What is Soft FM?" }
  ];

  const faqs = [
    {
      question: "What is included in soft FM services?",
      answer: "Soft FM includes cleaning and hygiene services, security and access control, reception and concierge, catering and hospitality, waste management, grounds maintenance, pest control, and other services that support daily building operations and user experience."
    },
    {
      question: "How does soft FM differ from hard FM?",
      answer: "Soft FM covers non-technical support services focused on cleanliness, security, and user experience. Hard FM deals with technical building systems like electrical, HVAC, and fire safety. Both are essential but serve different operational needs."
    },
    {
      question: "Is soft FM a legal requirement?",
      answer: "While soft FM services themselves aren't always mandated, many have regulatory drivers. Workplace hygiene regulations, health and safety duties, fire safety orders, and waste disposal laws create legal obligations that soft FM services help fulfill."
    },
    {
      question: "Who manages soft FM services?",
      answer: "Soft FM is typically managed by facilities managers who coordinate service schedules, manage contractors, ensure quality standards, and maintain compliance documentation. Many organisations outsource soft FM to specialist providers for efficiency and expertise."
    },
    {
      question: "How much does soft FM cost?",
      answer: "Costs vary based on building size, service frequency, quality standards, and contract scope. Typical models include regular service contracts (cleaning schedules), on-demand services (pest control), or fully managed packages covering multiple disciplines."
    }
  ];

  const relatedInsights = [
    { title: "What is Facilities Management?", link: "/fm-insights/what-is-facilities-management" },
    { title: "What is Hard FM?", link: "/fm-insights/what-is-hard-fm" },
    { title: "What is Statutory Maintenance?", link: "/fm-insights/what-is-statutory-maintenance" }
  ];

  return (
    <>
      <Helmet>
        <title>What is Soft FM? | Support Services Guide | EntireFM</title>
        <meta name="description" content="Understanding soft facilities management: the services that shape daily user experience, cleanliness, security, and operational efficiency in buildings." />
      </Helmet>
      <BreadcrumbSchema items={breadcrumbItems} />
      <FAQSchema faqs={faqs} />

      <div className="min-h-screen bg-background pt-20">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <Breadcrumb items={breadcrumbItems} />

          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-light mb-4 underline-accent inline-block">
              What is Soft FM?
            </h1>
            <p className="text-xl text-muted-foreground font-light leading-relaxed">
              The services that shape daily user experience and safety.
            </p>
          </header>

          <article className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                What Does It Mean?
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                Soft FM encompasses the people-focused, non-technical services that support daily building operations and occupant wellbeing. It includes cleaning, security, reception, catering, waste management, and other support functions that create safe, productive, and welcoming environments.
              </p>
              <p className="text-muted-foreground font-light leading-relaxed">
                While less visible than technical building systems, soft FM services directly influence user satisfaction, workplace hygiene, security standards, and operational continuity.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Core Soft FM Services
              </h2>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <Card className="p-6">
                  <Sparkles className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-lg font-medium mb-3">Cleaning & Hygiene</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start"><span className="text-primary mr-2">•</span>Daily office cleaning schedules</li>
                    <li className="flex items-start"><span className="text-primary mr-2">•</span>Washroom hygiene services</li>
                    <li className="flex items-start"><span className="text-primary mr-2">•</span>Deep cleaning programmes</li>
                    <li className="flex items-start"><span className="text-primary mr-2">•</span>Specialist floor care</li>
                  </ul>
                </Card>

                <Card className="p-6">
                  <Shield className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-lg font-medium mb-3">Security & Access</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start"><span className="text-primary mr-2">•</span>Manned security patrols</li>
                    <li className="flex items-start"><span className="text-primary mr-2">•</span>Access control management</li>
                    <li className="flex items-start"><span className="text-primary mr-2">•</span>CCTV monitoring</li>
                    <li className="flex items-start"><span className="text-primary mr-2">•</span>Visitor management systems</li>
                  </ul>
                </Card>

                <Card className="p-6">
                  <Users className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-lg font-medium mb-3">Reception & Front-of-House</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start"><span className="text-primary mr-2">•</span>Reception desk services</li>
                    <li className="flex items-start"><span className="text-primary mr-2">•</span>Concierge support</li>
                    <li className="flex items-start"><span className="text-primary mr-2">•</span>Telephone answering</li>
                    <li className="flex items-start"><span className="text-primary mr-2">•</span>Mail and courier coordination</li>
                  </ul>
                </Card>

                <Card className="p-6">
                  <Coffee className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-lg font-medium mb-3">Support Services</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start"><span className="text-primary mr-2">•</span>Catering and hospitality</li>
                    <li className="flex items-start"><span className="text-primary mr-2">•</span>Waste and recycling management</li>
                    <li className="flex items-start"><span className="text-primary mr-2">•</span>Grounds and landscaping</li>
                    <li className="flex items-start"><span className="text-primary mr-2">•</span>Pest control services</li>
                  </ul>
                </Card>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Who Is Responsible?
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                Soft FM accountability typically rests with:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Facilities managers:</strong> Coordinating service delivery and quality standards</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Service contractors:</strong> Specialist providers delivering cleaning, security, catering</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Building owners:</strong> Setting performance expectations and budget allocation</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Employers:</strong> Ensuring safe, hygienic workplaces under health and safety law</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                What Must Be Done?
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                Effective soft FM requires consistent service delivery and clear governance:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start"><span className="text-primary mr-2">•</span>Implement service schedules aligned with operational needs</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span>Maintain hygiene standards meeting workplace health regulations</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span>Deploy trained, vetted personnel (security, cleaning, reception)</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span>Monitor service quality through audits and feedback mechanisms</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span>Ensure compliance documentation (risk assessments, training records)</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span>Coordinate waste management and recycling obligations</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                How Often Is It Required?
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                Service frequencies depend on building use, occupancy, and contract specifications:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Daily:</strong> Office cleaning, washroom servicing, security patrols, reception coverage</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Weekly:</strong> Deep cleaning rotations, grounds maintenance, waste collection</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Monthly:</strong> Detailed audits, window cleaning, specialist floor care</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Quarterly:</strong> Carpet deep cleaning, high-level cleaning, pest control inspections</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Ad-hoc:</strong> Event support, reactive cleaning, emergency response</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                What Are the Risks of Poor Soft FM?
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                Inadequate soft FM creates operational, reputational, and legal consequences:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Health hazards:</strong> Poor hygiene leading to illness, infection, workplace complaints</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Security breaches:</strong> Unauthorised access, theft, safety incidents</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Regulatory failures:</strong> Breach of workplace health regulations, waste management laws</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Reputational damage:</strong> Poor first impressions, client dissatisfaction, negative reviews</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Productivity loss:</strong> Uncomfortable or unsafe working conditions affecting performance</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Increased costs:</strong> Reactive cleaning, emergency services, staff turnover</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                How EntireFM Assists
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                While our core expertise lies in hard FM and statutory compliance, we coordinate trusted soft FM partners where integrated service delivery benefits our clients. Our approach includes:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start"><span className="text-primary mr-2">•</span>Vetted contractor networks for cleaning, security, and support services</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span>Single-point accountability for both hard and soft FM coordination</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span>Unified reporting and performance governance</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span>Compliance oversight ensuring consistent standards</li>
              </ul>
              <p className="text-muted-foreground font-light leading-relaxed mt-4">
                We don't claim to be soft FM specialists — but we ensure the providers we work with meet our governance expectations.
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
              <h3 className="text-2xl font-light mb-4">Need Integrated FM Services?</h3>
              <p className="text-muted-foreground font-light mb-6">
                Request a proposal for comprehensive facilities management solutions.
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

export default WhatIsSoftFM;
