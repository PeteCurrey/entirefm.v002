import { Helmet } from "react-helmet";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { SidebarCTA } from "@/components/shared/SidebarCTA";
import { FAQSection } from "@/components/shared/FAQSection";
import { ServiceSchema, FAQSchema } from "@/components/shared/SchemaMarkup";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle2, AlertTriangle } from "lucide-react";

const Electrical = () => {
  const faqs = [
    {
      question: "How often should EICR testing be carried out?",
      answer: "Commercial properties require EICR testing every 5 years as a legal minimum, though high-risk environments (industrial, hospitality) may require annual or 3-year cycles depending on insurance and use."
    },
    {
      question: "What happens if electrical testing identifies non-compliances?",
      answer: "We provide a prioritised remedial action plan with C1 (immediate danger), C2 (potentially dangerous), and C3 (improvement recommended) items clearly defined. Critical items are flagged for emergency resolution."
    },
    {
      question: "Do you provide emergency electrical call-outs?",
      answer: "Yes. 24/7 emergency response for power failures, distribution board faults, and life-safety electrical failures. 2-hour response as standard for critical sites."
    },
    {
      question: "Are your engineers Part P registered?",
      answer: "All our electrical engineers hold valid qualifications including 18th Edition BS 7671, ECS cards, and relevant certifications for commercial environments."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Commercial Electrical Compliance & Testing UK | EICR Testing | EntireFM</title>
        <meta 
          name="description" 
          content="Commercial electrical testing, EICR certification, and ongoing compliance across UK portfolios. Keep your sites safe, legal, and operational."
        />
      </Helmet>

      <ServiceSchema 
        name="Electrical Compliance & Testing"
        description="Commercial electrical testing, EICR certification, PAT testing, and electrical maintenance"
        provider="EntireFM"
        areaServed="United Kingdom"
      />
      <FAQSchema faqs={faqs} />

      <div className="min-h-screen pt-20">
        <div className="container mx-auto px-6 py-8">
          <Breadcrumb items={[
            { label: "Services", href: "/services" },
            { label: "Electrical Compliance" }
          ]} />

          <div className="grid lg:grid-cols-3 gap-12 mt-8">
            <div className="lg:col-span-2 space-y-12">
              <header>
                <h1 className="text-4xl md:text-5xl font-light mb-4 underline-accent inline-block">
                  Electrical Compliance That Protects People and Operations.
                </h1>
                <p className="text-xl text-muted-foreground font-light leading-relaxed mb-8">
                  No corners cut. No expired certificates. Just safe, legal electrical systems — maintained properly.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" asChild>
                    <Link to="/contact">Request Electrical Proposal</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link to="/contact">Book EICR Testing</Link>
                  </Button>
                </div>
              </header>

              {/* Operational Impact */}
              <section className="bg-muted/30 p-8 rounded-lg">
                <h2 className="text-3xl font-light mb-6">
                  Why Electrical Compliance Matters
                </h2>
                <p className="text-lg font-light mb-6">When electrical systems fail or fall out of compliance:</p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Insurance claims are void",
                    "HSE enforcement notices issued",
                    "Fire risk increases exponentially",
                    "Business interruption costs spike"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-accent shrink-0 mt-1" />
                      <span className="font-light">{item}</span>
                    </div>
                  ))}
                </div>
                <p className="text-lg font-medium mt-6">
                  We eliminate those risks — systematically.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Electrical Services We Deliver
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    "EICR (Electrical Installation Condition Reports)",
                    "Fixed wire testing & certification",
                    "PAT testing (portable appliances)",
                    "Distribution board maintenance & upgrades",
                    "Emergency lighting circuit testing",
                    "Fault finding & diagnostics",
                    "LED lighting retrofits",
                    "Electrical PPM schedules",
                    "EV charging point installation",
                    "Power monitoring & energy audits",
                    "Thermal imaging surveys",
                    "Earthing & bonding verification"
                  ].map((service, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                      <span className="font-light">{service}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Compliance Table */}
              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Statutory Requirements We Cover
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-charcoal text-white">
                        <th className="p-4 text-left font-medium">Regulation</th>
                        <th className="p-4 text-left font-medium">What It Requires</th>
                        <th className="p-4 text-left font-medium">Frequency</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border">
                        <td className="p-4 font-light">BS 7671 (18th Edition)</td>
                        <td className="p-4 font-light text-sm">Electrical installations designed, installed, and maintained safely</td>
                        <td className="p-4 font-light text-sm">EICR every 5 years</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="p-4 font-light">Electricity at Work Regulations 1989</td>
                        <td className="p-4 font-light text-sm">All electrical systems maintained to prevent danger</td>
                        <td className="p-4 font-light text-sm">Ongoing PPM</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="p-4 font-light">PAT Testing (IET Code of Practice)</td>
                        <td className="p-4 font-light text-sm">Portable appliances tested for safety</td>
                        <td className="p-4 font-light text-sm">Annually or as per risk assessment</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="p-4 font-light">Emergency Lighting (BS 5266)</td>
                        <td className="p-4 font-light text-sm">Emergency lighting tested and certified</td>
                        <td className="p-4 font-light text-sm">Monthly flick tests, annual 3-hour test</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="mt-8">
                  <Button variant="outline" asChild>
                    <Link to="/resources">Download Electrical Compliance Calendar</Link>
                  </Button>
                </div>
              </section>

              {/* What You Get */}
              <section className="bg-muted/30 p-8 rounded-lg">
                <h2 className="text-3xl font-light mb-6">
                  What You Get as Standard
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border-l-4 border-accent pl-6">
                    <h3 className="font-medium mb-2">Certificate Management</h3>
                    <p className="text-sm font-light text-muted-foreground">
                      All certificates digitised, tracked, and renewed before expiry. No chasing required.
                    </p>
                  </div>
                  <div className="border-l-4 border-accent pl-6">
                    <h3 className="font-medium mb-2">Remedial Action Plans</h3>
                    <p className="text-sm font-light text-muted-foreground">
                      C1, C2, and C3 items prioritised with cost estimates and mobilisation timelines.
                    </p>
                  </div>
                  <div className="border-l-4 border-accent pl-6">
                    <h3 className="font-medium mb-2">Multi-Site Reporting</h3>
                    <p className="text-sm font-light text-muted-foreground">
                      Portfolio-wide compliance dashboards for directors and asset managers.
                    </p>
                  </div>
                  <div className="border-l-4 border-accent pl-6">
                    <h3 className="font-medium mb-2">24/7 Emergency Response</h3>
                    <p className="text-sm font-light text-muted-foreground">
                      Power failures and critical electrical faults handled immediately.
                    </p>
                  </div>
                </div>
              </section>

              <FAQSection faqs={faqs} />

              {/* Final CTA */}
              <section className="border-t border-border pt-12">
                <div className="text-center bg-charcoal text-white p-12 rounded-lg">
                  <h2 className="text-3xl font-light mb-4">
                    Don't let expired certificates become boardroom problems.
                  </h2>
                  <p className="text-lg text-gray-300 font-light mb-8 max-w-2xl mx-auto">
                    Request a full electrical compliance audit across your portfolio today.
                  </p>
                  <Button size="lg" variant="secondary" className="bg-white text-charcoal hover:bg-gray-100" asChild>
                    <Link to="/contact">Get Your Electrical Plan</Link>
                  </Button>
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

export default Electrical;
