import { Helmet } from "react-helmet";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { SidebarCTA } from "@/components/shared/SidebarCTA";
import { FAQSection } from "@/components/shared/FAQSection";
import { ServiceSchema, FAQSchema } from "@/components/shared/SchemaMarkup";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle2, AlertTriangle, TrendingUp, Phone } from "lucide-react";

const OfficesCorporate = () => {
  const faqs = [
    {
      question: "Do you work in live office environments?",
      answer: "Yes — low-disruption maintenance is standard."
    },
    {
      question: "Can you integrate soft services?",
      answer: "Absolutely — concierge, reception, cleaning, waste, etc."
    },
    {
      question: "Can you support hybrid workplaces?",
      answer: "Yes — PPM schedules built around occupancy analytics."
    },
    {
      question: "Do you manage compliance on behalf of the Responsible Person?",
      answer: "We take full ownership — with auditable records."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Office FM UK | Workplace Maintenance Contractor | Corporate Facilities Services</title>
        <meta 
          name="description" 
          content="Smart, compliant, and reliable office environments that protect productivity, wellbeing, and brand reputation. Corporate facilities management that performs."
        />
      </Helmet>

      <ServiceSchema 
        name="Offices & Corporate Facilities Management"
        description="Facilities management for offices, corporate headquarters, and professional workplace environments"
        provider="EntireFM"
        areaServed="United Kingdom"
      />
      <FAQSchema faqs={faqs} />

      <div className="min-h-screen pt-20">
        <div className="container mx-auto px-6 py-8">
          <Breadcrumb items={[
            { label: "Sectors", href: "/sectors" },
            { label: "Offices & Corporate" }
          ]} />

          <div className="grid lg:grid-cols-3 gap-12 mt-8">
            <div className="lg:col-span-2 space-y-12">
              <header>
                <h1 className="text-4xl md:text-5xl font-light mb-4 underline-accent inline-block">
                  A Workplace That Performs — So Your People Can Too.
                </h1>
                <p className="text-xl text-muted-foreground font-light leading-relaxed mb-8">
                  Smart, compliant, and reliable environments that protect productivity, wellbeing, and brand reputation.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" asChild>
                    <Link to="/contact">Request Office FM Proposal</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link to="/contact">Book Workplace Assessment</Link>
                  </Button>
                </div>
              </header>

              {/* A Broken Workplace */}
              <section className="bg-muted/30 p-8 rounded-lg">
                <h2 className="text-3xl font-light mb-6">
                  A Broken Workplace Breaks Performance
                </h2>
                <p className="text-lg font-light mb-6">When facilities fail, so does productivity:</p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Too hot / too cold",
                    "Faulty lighting",
                    "Leaks and hazards",
                    "Lift downtime",
                    "Poor air quality",
                    "Dirty environments"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-accent shrink-0 mt-1" />
                      <span className="font-light">{item}</span>
                    </div>
                  ))}
                </div>
                <p className="text-lg font-medium mt-6">
                  Every issue becomes a culture and retention problem.<br />
                  We keep the workplace friction-free.
                </p>
              </section>

              {/* Premium FM Table */}
              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Premium FM for the Modern Workplace
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-charcoal text-white">
                        <th className="p-4 text-left font-medium">Corporate Priority</th>
                        <th className="p-4 text-left font-medium">Our Response</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border">
                        <td className="p-4 font-light">Employee wellbeing & comfort</td>
                        <td className="p-4 font-light text-sm">HVAC optimisation, IAQ, clean environments</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="p-4 font-light">ESG objectives</td>
                        <td className="p-4 font-light text-sm">Energy efficiency & sustainability upgrades</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="p-4 font-light">Brand experience</td>
                        <td className="p-4 font-light text-sm">Sleek, well-maintained public spaces</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="p-4 font-light">Security & contractor governance</td>
                        <td className="p-4 font-light text-sm">Access control + strict compliance</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="p-4 font-light">Audit-ready compliance</td>
                        <td className="p-4 font-light text-sm">Full statutory control via CAFM dashboard</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-lg font-medium mt-6">
                  Your office should support top talent — not frustrate it.
                </p>
              </section>

              {/* Full-Scope Maintenance */}
              <section className="bg-charcoal text-white p-8 rounded-lg">
                <h2 className="text-3xl font-light mb-6">
                  Full-Scope Workplace Maintenance
                </h2>
                <p className="text-lg font-light mb-6">We handle:</p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "HVAC & BMS optimisation",
                    "Electrical & lighting upgrades",
                    "Fire & life safety compliance",
                    "Water hygiene (ACOP L8)",
                    "Cleaning, washroom & concierge services",
                    "Joinery & fabric repairs",
                    "PPM programmes built around hybrid working patterns"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                      <span className="font-light text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
                <p className="text-lg font-medium mt-6">
                  We keep facilities invisible — because everything just works.
                </p>
              </section>

              {/* Reception Excellence */}
              <section className="bg-muted/30 p-8 rounded-lg">
                <h2 className="text-3xl font-light mb-6">
                  Reception & Front-of-House Excellence
                </h2>
                <p className="text-lg font-light mb-6">
                  Your building's first impression = your brand.
                </p>
                <div className="space-y-3">
                  {[
                    "High-touch maintenance",
                    "Spotless presentation",
                    "Reliability for VIP and stakeholder visits"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                      <span className="font-light">{item}</span>
                    </div>
                  ))}
                </div>
                <p className="text-lg font-medium mt-6">
                  We protect the image execs care about most.
                </p>
              </section>

              {/* Smart Operations */}
              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Smart Operations & Workplace Technology
                </h2>
                <p className="text-muted-foreground font-light mb-6">
                  We integrate seamlessly with:
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  {[
                    "Building analytics",
                    "Access control",
                    "Helpdesk systems",
                    "Collaboration / booking tools"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                      <span className="font-light">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-muted/30 p-6 rounded-lg">
                  <h3 className="text-lg font-medium mb-4">Live visibility for Facilities Managers & Directors:</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="border-l-4 border-accent pl-6">
                      <h4 className="font-medium mb-2">SLA tracking</h4>
                      <p className="text-sm font-light text-muted-foreground">
                        Real-time performance monitoring
                      </p>
                    </div>
                    <div className="border-l-4 border-accent pl-6">
                      <h4 className="font-medium mb-2">Issue analytics</h4>
                      <p className="text-sm font-light text-muted-foreground">
                        Identify patterns and prevent recurrence
                      </p>
                    </div>
                    <div className="border-l-4 border-accent pl-6">
                      <h4 className="font-medium mb-2">Compliance dashboards</h4>
                      <p className="text-sm font-light text-muted-foreground">
                        Audit-ready documentation at all times
                      </p>
                    </div>
                    <div className="border-l-4 border-accent pl-6">
                      <h4 className="font-medium mb-2">Asset performance</h4>
                      <p className="text-sm font-light text-muted-foreground">
                        Lifecycle tracking and optimization
                      </p>
                    </div>
                  </div>
                  <p className="text-lg font-medium mt-6">
                    Better data → better decisions → better business.
                  </p>
                </div>
              </section>

              {/* Case Studies */}
              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Proven Results in Action
                </h2>
                <div className="space-y-6">
                  {/* Case Study 1 */}
                  <div className="border border-border p-6 rounded-lg hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-medium mb-3">HQ Refresh — National Financial Business</h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <TrendingUp className="w-5 h-5 text-accent shrink-0 mt-1" />
                        <span className="font-light">40% reduction in comfort complaints</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                        <span className="font-light">Lighting redesign improved employee feedback scores</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                        <span className="font-light">Full compliance turnaround within 90 days</span>
                      </div>
                    </div>
                  </div>

                  {/* Case Study 2 */}
                  <div className="border border-border p-6 rounded-lg hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-medium mb-3">Professional Services Workplace — City Centre</h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <TrendingUp className="w-5 h-5 text-accent shrink-0 mt-1" />
                        <span className="font-light">Improved IAQ metrics → wellness program uplift</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                        <span className="font-light">Reception & front-of-house brand uplift</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                        <span className="font-light">Contractor control overhaul = zero incidents</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <FAQSection faqs={faqs} />

              {/* Related Services & Locations */}
              <section className="bg-muted/30 p-8 rounded-lg">
                <h2 className="text-3xl font-light mb-6">
                  Related Services & Locations
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h3 className="font-medium mb-3">Core Services</h3>
                    <div className="space-y-2">
                      <Link to="/services/hvac" className="block text-sm font-light hover:text-primary">HVAC Maintenance</Link>
                      <Link to="/services/electrical" className="block text-sm font-light hover:text-primary">Electrical Services</Link>
                      <Link to="/services/fire-alarms" className="block text-sm font-light hover:text-primary">Fire Systems</Link>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium mb-3">Major Cities</h3>
                    <div className="space-y-2">
                      <Link to="/locations/london" className="block text-sm font-light hover:text-primary">London</Link>
                      <Link to="/locations/manchester" className="block text-sm font-light hover:text-primary">Manchester</Link>
                      <Link to="/locations/birmingham" className="block text-sm font-light hover:text-primary">Birmingham</Link>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium mb-3">Case Studies</h3>
                    <div className="space-y-2">
                      <Link to="/case-studies/corporate-hq" className="block text-sm font-light hover:text-primary">Corporate HQ Success</Link>
                      <Link to="/case-studies" className="block text-sm font-light hover:text-primary">View All Case Studies</Link>
                    </div>
                  </div>
                </div>
              </section>

              {/* Final CTA */}
              <section className="border-t border-border pt-12">
                <div className="text-center bg-charcoal text-white p-12 rounded-lg">
                  <h2 className="text-3xl font-light mb-4">
                    Your workplace is a strategic asset. Treat it like one.
                  </h2>
                  <p className="text-lg text-gray-300 font-light mb-8 max-w-2xl mx-auto">
                    Make facility performance a competitive advantage.
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center">
                    <Button size="lg" variant="secondary" className="bg-white text-charcoal hover:bg-gray-100" asChild>
                      <Link to="/contact">Request Office FM Proposal</Link>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                      <a href="tel:+448001234567" className="text-white border-white hover:bg-white hover:text-charcoal">
                        <Phone className="w-4 h-4 mr-2" />
                        24/7 Helpdesk Contact
                      </a>
                    </Button>
                  </div>
                </div>
              </section>
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

export default OfficesCorporate;
