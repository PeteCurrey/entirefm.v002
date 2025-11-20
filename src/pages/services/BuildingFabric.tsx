import { Helmet } from "react-helmet";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { SidebarCTA } from "@/components/shared/SidebarCTA";
import { FAQSection } from "@/components/shared/FAQSection";
import { ServiceSchema, FAQSchema } from "@/components/shared/SchemaMarkup";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle2, AlertTriangle } from "lucide-react";

const BuildingFabric = () => {
  const faqs = [
    {
      question: "What is included in building fabric maintenance?",
      answer: "Roofing, walls, windows, doors, flooring, ceilings, fire doors, joinery, decoration, and all structural elements that keep the building weatherproof and operationally fit."
    },
    {
      question: "How often should fire doors be inspected?",
      answer: "Fire doors require 6-monthly inspections under UK fire safety regulations, checking seals, closers, latches, and gap tolerances."
    },
    {
      question: "Do you provide reactive fabric repairs?",
      answer: "Yes. 24/7 emergency response for urgent fabric issues including roof leaks, broken glazing, security breaches, and structural damage."
    },
    {
      question: "Can you manage building refurbishment projects?",
      answer: "Absolutely. We handle fabric upgrades, refurbishments, and fit-outs from design through to handover with minimal operational disruption."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Building Fabric Maintenance UK | Commercial Property Repairs | EntireFM</title>
        <meta 
          name="description" 
          content="Building fabric maintenance for UK commercial properties. Roofing, fire doors, glazing, decoration, and reactive repairs. Keep buildings weatherproof and compliant."
        />
      </Helmet>

      <ServiceSchema 
        name="Building Fabric Maintenance"
        description="Building fabric maintenance, repairs, and refurbishment for commercial properties"
        provider="EntireFM"
        areaServed="United Kingdom"
      />
      <FAQSchema faqs={faqs} />

      <div className="min-h-screen pt-20">
        <div className="container mx-auto px-6 py-8">
          <Breadcrumb items={[
            { label: "Services", href: "/services" },
            { label: "Building Fabric Maintenance" }
          ]} />

          <div className="grid lg:grid-cols-3 gap-12 mt-8">
            <div className="lg:col-span-2 space-y-12">
              <header>
                <h1 className="text-4xl md:text-5xl font-light mb-4 underline-accent inline-block">
                  Building Fabric That Doesn't Fall Apart.
                </h1>
                <p className="text-xl text-muted-foreground font-light leading-relaxed mb-8">
                  Weatherproof, compliant, and maintained — because neglected fabric becomes expensive very quickly.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" asChild>
                    <Link to="/contact">Request Fabric Service</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link to="/contact">Book Condition Survey</Link>
                  </Button>
                </div>
              </header>

              {/* Risk Impact */}
              <section className="bg-muted/30 p-8 rounded-lg">
                <h2 className="text-3xl font-light mb-6">
                  The Cost of Fabric Neglect
                </h2>
                <p className="text-lg font-light mb-6">When building fabric isn't maintained:</p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Water ingress causes structural damage",
                    "Energy costs spiral from poor insulation",
                    "Fire door failures create compliance breaches",
                    "Tenant complaints & lease disputes escalate"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-accent shrink-0 mt-1" />
                      <span className="font-light">{item}</span>
                    </div>
                  ))}
                </div>
                <p className="text-lg font-medium mt-6">
                  We keep fabric maintained — before small issues become capital expenditure.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Building Fabric Services
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    "Roof repairs & maintenance",
                    "Gutter cleaning & rainwater drainage",
                    "Fire door inspections & repairs",
                    "Glazing repairs & replacement",
                    "Door & window maintenance",
                    "Joinery & carpentry",
                    "Internal & external decoration",
                    "Floor repairs & levelling",
                    "Ceiling tile replacement & suspended ceiling works",
                    "Locksmithing & security hardware",
                    "Brickwork repointing & render repairs",
                    "Weatherproofing & damp-proofing"
                  ].map((service, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                      <span className="font-light">{service}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Fire Door Compliance */}
              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Fire Door Compliance (UK Regulations)
                </h2>
                <p className="text-muted-foreground font-light mb-6">
                  Fire doors are life-safety critical and require systematic inspection:
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-charcoal text-white">
                        <th className="p-4 text-left font-medium">Component</th>
                        <th className="p-4 text-left font-medium">Inspection Frequency</th>
                        <th className="p-4 text-left font-medium">What's Checked</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border">
                        <td className="p-4 font-light">Door Leaf & Frame</td>
                        <td className="p-4 font-light text-sm">6 months</td>
                        <td className="p-4 font-light text-sm">Gaps (max 4mm), warping, damage, certification label</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="p-4 font-light">Intumescent Seals</td>
                        <td className="p-4 font-light text-sm">6 months</td>
                        <td className="p-4 font-light text-sm">Seal integrity, correct type, full perimeter coverage</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="p-4 font-light">Self-Closers</td>
                        <td className="p-4 font-light text-sm">6 months</td>
                        <td className="p-4 font-light text-sm">Closing force, full closure, no holdopen devices</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="p-4 font-light">Latches & Locks</td>
                        <td className="p-4 font-light text-sm">6 months</td>
                        <td className="p-4 font-light text-sm">Operation, engagement, fire-rated compliance</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="p-4 font-light">Glazing (if fitted)</td>
                        <td className="p-4 font-light text-sm">6 months</td>
                        <td className="p-4 font-light text-sm">Fire-rated glass intact, beading secure</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="mt-8">
                  <Button variant="outline" asChild>
                    <Link to="/resources">Download Fire Door Inspection Guide</Link>
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
                    <h3 className="font-medium mb-2">Planned PPM Schedules</h3>
                    <p className="text-sm font-light text-muted-foreground">
                      Fabric maintenance integrated into annual PPM cycles to prevent reactive escalations.
                    </p>
                  </div>
                  <div className="border-l-4 border-accent pl-6">
                    <h3 className="font-medium mb-2">Condition Surveys</h3>
                    <p className="text-sm font-light text-muted-foreground">
                      Full building fabric audits with lifecycle forecasting and budget planning.
                    </p>
                  </div>
                  <div className="border-l-4 border-accent pl-6">
                    <h3 className="font-medium mb-2">24/7 Emergency Response</h3>
                    <p className="text-sm font-light text-muted-foreground">
                      Immediate call-out for urgent fabric failures: roof leaks, broken glass, security breaches.
                    </p>
                  </div>
                  <div className="border-l-4 border-accent pl-6">
                    <h3 className="font-medium mb-2">Refurbishment & Small Works</h3>
                    <p className="text-sm font-light text-muted-foreground">
                      Managed projects from decoration through to structural alterations with minimal downtime.
                    </p>
                  </div>
                </div>
              </section>

              <FAQSection faqs={faqs} />

              {/* Final CTA */}
              <section className="border-t border-border pt-12">
                <div className="text-center bg-charcoal text-white p-12 rounded-lg">
                  <h2 className="text-3xl font-light mb-4">
                    Fabric failures compound fast. Fix them before they become capital projects.
                  </h2>
                  <p className="text-lg text-gray-300 font-light mb-8 max-w-2xl mx-auto">
                    Request a building fabric condition survey and maintenance plan today.
                  </p>
                  <Button size="lg" variant="secondary" className="bg-white text-charcoal hover:bg-gray-100" asChild>
                    <Link to="/contact">Get Your Fabric Plan</Link>
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

export default BuildingFabric;
