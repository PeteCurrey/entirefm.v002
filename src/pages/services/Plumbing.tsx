import { Helmet } from "react-helmet";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { SidebarCTA } from "@/components/shared/SidebarCTA";
import { FAQSection } from "@/components/shared/FAQSection";
import { ServiceSchema, FAQSchema } from "@/components/shared/SchemaMarkup";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle2, AlertTriangle } from "lucide-react";

const Plumbing = () => {
  const faqs = [
    {
      question: "How often should commercial gas appliances be serviced?",
      answer: "Annually as a legal minimum under Gas Safety (Installation & Use) Regulations. High-use commercial catering equipment may require more frequent inspections."
    },
    {
      question: "What is a CP42 gas safety certificate?",
      answer: "CP42 is the commercial equivalent of a CP12 (domestic gas safety certificate). It certifies all gas appliances and pipework are safe and compliant."
    },
    {
      question: "Do you handle emergency plumbing call-outs?",
      answer: "Yes. 24/7 emergency response for burst pipes, water leaks, boiler failures, and gas emergencies across UK portfolios."
    },
    {
      question: "Are your engineers Gas Safe registered?",
      answer: "All our gas engineers hold valid Gas Safe registration and commercial gas qualifications (CODNCO1, CIGA1, CORT1, etc.)."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Commercial Plumbing & Gas Safety UK | CP42 Certification | EntireFM</title>
        <meta 
          name="description" 
          content="Commercial plumbing maintenance, gas safety inspections, and CP42 certification across UK sites. Emergency call-outs and compliance management."
        />
      </Helmet>

      <ServiceSchema 
        name="Plumbing & Gas Safety"
        description="Commercial plumbing maintenance, gas safety inspections, and compliance management"
        provider="EntireFM"
        areaServed="United Kingdom"
      />
      <FAQSchema faqs={faqs} />

      <div className="min-h-screen pt-20">
        <div className="container mx-auto px-6 py-8">
          <Breadcrumb items={[
            { label: "Services", href: "/services" },
            { label: "Plumbing & Gas Safety" }
          ]} />

          <div className="grid lg:grid-cols-3 gap-12 mt-8">
            <div className="lg:col-span-2 space-y-12">
              <header>
                <h1 className="text-4xl md:text-5xl font-light mb-4 underline-accent inline-block">
                  Plumbing & Gas That Works. Every Single Time.
                </h1>
                <p className="text-xl text-muted-foreground font-light leading-relaxed mb-8">
                  Commercial plumbing, gas safety, and compliance management — delivered by Gas Safe engineers.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" asChild>
                    <Link to="/contact">Request Plumbing Service</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link to="/contact">Book Gas Safety Audit</Link>
                  </Button>
                </div>
              </header>

              {/* Risk Impact */}
              <section className="bg-muted/30 p-8 rounded-lg">
                <h2 className="text-3xl font-light mb-6">
                  The Cost of Plumbing & Gas Failures
                </h2>
                <p className="text-lg font-light mb-6">When plumbing and gas systems fail:</p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Water damage escalates into six-figure claims",
                    "Gas leaks create immediate life safety risk",
                    "Operations grind to a halt",
                    "HSE prosecution exposure becomes real"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-accent shrink-0 mt-1" />
                      <span className="font-light">{item}</span>
                    </div>
                  ))}
                </div>
                <p className="text-lg font-medium mt-6">
                  We engineer reliability into every tap, pipe, and appliance.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Plumbing & Gas Services
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    "Commercial gas safety inspections (CP42)",
                    "Boiler servicing & repairs",
                    "Gas appliance installation & commissioning",
                    "Pipework installation, repair & upgrades",
                    "Leak detection (water & gas)",
                    "Hot & cold water system maintenance",
                    "TMV (thermostatic mixing valve) servicing",
                    "Drainage repairs & CCTV surveys",
                    "Commercial catering gas equipment",
                    "Emergency plumbing & gas call-outs",
                    "Water pressure optimisation",
                    "Backflow prevention & testing"
                  ].map((service, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                      <span className="font-light">{service}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Gas Safety Compliance */}
              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Gas Safety Statutory Requirements
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-charcoal text-white">
                        <th className="p-4 text-left font-medium">Regulation</th>
                        <th className="p-4 text-left font-medium">Frequency</th>
                        <th className="p-4 text-left font-medium">What's Checked</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border">
                        <td className="p-4 font-light">Gas Safety (Installation & Use) Regulations</td>
                        <td className="p-4 font-light text-sm">Annual (CP42)</td>
                        <td className="p-4 font-light text-sm">Gas appliances, pipework, ventilation, flue integrity</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="p-4 font-light">Commercial Boiler Servicing</td>
                        <td className="p-4 font-light text-sm">Annual minimum</td>
                        <td className="p-4 font-light text-sm">Burner efficiency, controls, safety devices, combustion analysis</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="p-4 font-light">TMV Servicing (Healthcare & Care Homes)</td>
                        <td className="p-4 font-light text-sm">Annual (HTM 04-01)</td>
                        <td className="p-4 font-light text-sm">Temperature verification, scald risk prevention</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="p-4 font-light">Gas Interlock Systems</td>
                        <td className="p-4 font-light text-sm">Annual testing</td>
                        <td className="p-4 font-light text-sm">Ventilation failure detection & gas shut-off verification</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="mt-8">
                  <Button variant="outline" asChild>
                    <Link to="/resources">Download Gas Safety Compliance Guide</Link>
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
                    <h3 className="font-medium mb-2">CP42 Certificate Management</h3>
                    <p className="text-sm font-light text-muted-foreground">
                      All gas safety certificates tracked digitally with renewal reminders before expiry.
                    </p>
                  </div>
                  <div className="border-l-4 border-accent pl-6">
                    <h3 className="font-medium mb-2">Emergency Response</h3>
                    <p className="text-sm font-light text-muted-foreground">
                      24/7 call-out for burst pipes, gas leaks, boiler failures, and drainage emergencies.
                    </p>
                  </div>
                  <div className="border-l-4 border-accent pl-6">
                    <h3 className="font-medium mb-2">Multi-Site Gas Safety</h3>
                    <p className="text-sm font-light text-muted-foreground">
                      Portfolio-wide gas safety compliance reporting for directors and asset managers.
                    </p>
                  </div>
                  <div className="border-l-4 border-accent pl-6">
                    <h3 className="font-medium mb-2">Leak Detection Technology</h3>
                    <p className="text-sm font-light text-muted-foreground">
                      Thermal imaging and acoustic leak detection to find hidden water and gas leaks fast.
                    </p>
                  </div>
                </div>
              </section>

              <FAQSection faqs={faqs} />

              {/* Final CTA */}
              <section className="border-t border-border pt-12">
                <div className="text-center bg-charcoal text-white p-12 rounded-lg">
                  <h2 className="text-3xl font-light mb-4">
                    Don't wait for a gas emergency or catastrophic leak.
                  </h2>
                  <p className="text-lg text-gray-300 font-light mb-8 max-w-2xl mx-auto">
                    Request a plumbing and gas safety audit across your portfolio today.
                  </p>
                  <Button size="lg" variant="secondary" className="bg-white text-charcoal hover:bg-gray-100" asChild>
                    <Link to="/contact">Get Your Gas Safety Plan</Link>
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

export default Plumbing;
