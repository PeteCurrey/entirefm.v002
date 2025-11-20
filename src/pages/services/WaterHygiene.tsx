import { Helmet } from "react-helmet";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { SidebarCTA } from "@/components/shared/SidebarCTA";
import { FAQSection } from "@/components/shared/FAQSection";
import { ServiceSchema, FAQSchema } from "@/components/shared/SchemaMarkup";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle2, AlertTriangle } from "lucide-react";

const WaterHygiene = () => {
  const faqs = [
    {
      question: "How often should water hygiene risk assessments be carried out?",
      answer: "Initial assessment when taking control of premises, then reviewed every 2 years or when significant changes occur (building alterations, change of use, etc.)."
    },
    {
      question: "What temperature kills Legionella bacteria?",
      answer: "Water stored above 60°C and distributed above 50°C kills Legionella. Cold water must be stored and distributed below 20°C to prevent growth."
    },
    {
      question: "Do you provide Legionella testing?",
      answer: "Yes. We manage sampling, UKAS-accredited laboratory analysis, and remedial action plans for any positive results."
    },
    {
      question: "What is a TMV and why does it matter?",
      answer: "Thermostatic Mixing Valves prevent scalding by blending hot and cold water. They're mandatory in healthcare, education, and care settings under HTM 04-01 and require annual servicing."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Water Hygiene & Legionella Control UK | L8 Compliance | EntireFM</title>
        <meta 
          name="description" 
          content="Water hygiene management, Legionella risk assessments, and L8 compliance for UK commercial properties. Temperature monitoring, TMV servicing, and testing."
        />
      </Helmet>

      <ServiceSchema 
        name="Water Hygiene & Legionella Control"
        description="Water hygiene management, Legionella risk assessments, and L8 ACoP compliance"
        provider="EntireFM"
        areaServed="United Kingdom"
      />
      <FAQSchema faqs={faqs} />

      <div className="min-h-screen pt-20">
        <div className="container mx-auto px-6 py-8">
          <Breadcrumb items={[
            { label: "Services", href: "/services" },
            { label: "Water Hygiene & Legionella" }
          ]} />

          <div className="grid lg:grid-cols-3 gap-12 mt-8">
            <div className="lg:col-span-2 space-y-12">
              <header>
                <h1 className="text-4xl md:text-5xl font-light mb-4 underline-accent inline-block">
                  Water Hygiene That Protects People.
                </h1>
                <p className="text-xl text-muted-foreground font-light leading-relaxed mb-8">
                  L8 compliance, Legionella control, and temperature management — engineered to prevent outbreaks.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" asChild>
                    <Link to="/contact">Request Water Hygiene Service</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link to="/contact">Book L8 Risk Assessment</Link>
                  </Button>
                </div>
              </header>

              {/* Risk Impact */}
              <section className="bg-muted/30 p-8 rounded-lg">
                <h2 className="text-3xl font-light mb-6">
                  Why Water Hygiene Cannot Be Ignored
                </h2>
                <p className="text-lg font-light mb-6">When water systems aren't managed properly:</p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Legionnaires' disease outbreaks (life-threatening)",
                    "HSE prosecution under L8 ACoP",
                    "Building closure & reputational damage",
                    "Personal liability for duty holders"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-accent shrink-0 mt-1" />
                      <span className="font-light">{item}</span>
                    </div>
                  ))}
                </div>
                <p className="text-lg font-medium mt-6">
                  We eliminate Legionella risk through systematic control.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Water Hygiene Services
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    "Legionella risk assessments (L8 ACoP)",
                    "Monthly temperature monitoring",
                    "Quarterly Legionella sampling & testing",
                    "TMV (thermostatic mixing valve) servicing",
                    "Tank cleaning & disinfection",
                    "Descaling & chlorination",
                    "Shower head cleaning & replacement",
                    "Dead-leg identification & removal",
                    "Water management scheme creation",
                    "Remedial action plans & implementation",
                    "Multi-site compliance dashboards",
                    "Responsible Person training"
                  ].map((service, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                      <span className="font-light">{service}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* L8 Compliance Framework */}
              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  L8 ACoP Statutory Requirements
                </h2>
                <p className="text-muted-foreground font-light mb-6">
                  We manage full compliance with HSE L8 Approved Code of Practice:
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-charcoal text-white">
                        <th className="p-4 text-left font-medium">Task</th>
                        <th className="p-4 text-left font-medium">Frequency</th>
                        <th className="p-4 text-left font-medium">What's Checked</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border">
                        <td className="p-4 font-light">Temperature Monitoring</td>
                        <td className="p-4 font-light text-sm">Monthly</td>
                        <td className="p-4 font-light text-sm">Hot water ≥50°C at outlets, cold water ≤20°C</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="p-4 font-light">Legionella Sampling</td>
                        <td className="p-4 font-light text-sm">Quarterly (risk-based)</td>
                        <td className="p-4 font-light text-sm">UKAS lab testing for Legionella bacteria presence</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="p-4 font-light">TMV Servicing</td>
                        <td className="p-4 font-light text-sm">Annual</td>
                        <td className="p-4 font-light text-sm">Temperature accuracy, fail-safe operation (HTM 04-01)</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="p-4 font-light">Tank Cleaning</td>
                        <td className="p-4 font-light text-sm">Annual or as required</td>
                        <td className="p-4 font-light text-sm">Sediment removal, disinfection, inspection</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="p-4 font-light">Risk Assessment Review</td>
                        <td className="p-4 font-light text-sm">Every 2 years</td>
                        <td className="p-4 font-light text-sm">System changes, control effectiveness, new risks</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="mt-8">
                  <Button variant="outline" asChild>
                    <Link to="/resources">Download L8 Compliance Guide</Link>
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
                    <h3 className="font-medium mb-2">Written Scheme of Control</h3>
                    <p className="text-sm font-light text-muted-foreground">
                      Bespoke water management plan aligned to your building's risk profile and L8 requirements.
                    </p>
                  </div>
                  <div className="border-l-4 border-accent pl-6">
                    <h3 className="font-medium mb-2">Digital Log Books</h3>
                    <p className="text-sm font-light text-muted-foreground">
                      All temperature checks, tests, and remedial actions logged with timestamps and evidence.
                    </p>
                  </div>
                  <div className="border-l-4 border-accent pl-6">
                    <h3 className="font-medium mb-2">UKAS-Accredited Testing</h3>
                    <p className="text-sm font-light text-muted-foreground">
                      Legionella sampling analysed by accredited laboratories with rapid result turnaround.
                    </p>
                  </div>
                  <div className="border-l-4 border-accent pl-6">
                    <h3 className="font-medium mb-2">Outbreak Response Planning</h3>
                    <p className="text-sm font-light text-muted-foreground">
                      Immediate remedial action and incident management if positive results detected.
                    </p>
                  </div>
                </div>
              </section>

              <FAQSection faqs={faqs} />

              {/* Final CTA */}
              <section className="border-t border-border pt-12">
                <div className="text-center bg-charcoal text-white p-12 rounded-lg">
                  <h2 className="text-3xl font-light mb-4">
                    Legionella risk isn't theoretical. It's manslaughter if it goes wrong.
                  </h2>
                  <p className="text-lg text-gray-300 font-light mb-8 max-w-2xl mx-auto">
                    Request a full water hygiene risk assessment and control plan today.
                  </p>
                  <Button size="lg" variant="secondary" className="bg-white text-charcoal hover:bg-gray-100" asChild>
                    <Link to="/contact">Get Your Water Hygiene Plan</Link>
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

export default WaterHygiene;
