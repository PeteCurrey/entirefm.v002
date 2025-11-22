import { Helmet } from "react-helmet";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { SidebarCTA } from "@/components/shared/SidebarCTA";
import { FAQSection } from "@/components/shared/FAQSection";
import { ServiceSchema, FAQSchema } from "@/components/shared/SchemaMarkup";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle2, Shield } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Sprinklers = () => {
  const faqs = [
    {
      question: "How often should sprinklers be serviced in the UK?",
      answer: "Weekly visual checks + quarterly and annual maintenance per BS EN 12845."
    },
    {
      question: "What is required for dry riser testing?",
      answer: "A 6-month visual inspection and an annual full wet-pressure test as per BS 9990."
    },
    {
      question: "Can you support buildings while in full occupancy?",
      answer: "Yes — we plan around business continuity, including night shifts."
    },
    {
      question: "Do you provide remedial works after testing?",
      answer: "Yes — immediate fixes prevent prolonged risk exposure."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Sprinkler & Dry Riser Testing UK (BS EN 12845)</title>
        <meta 
          name="description" 
          content="Full fire suppression maintenance for safety-critical sites."
        />
        <link rel="canonical" href="https://entirefm.com/services/sprinklers-risers" />
      </Helmet>

      <ServiceSchema 
        name="Sprinkler & Dry Riser Maintenance"
        description="Sprinkler system testing, dry riser maintenance, and fire suppression compliance"
        provider="EntireFM"
        areaServed="United Kingdom"
      />
      <FAQSchema faqs={faqs} />

      <div className="min-h-screen pt-20">
        <div className="container mx-auto px-6 py-8">
          <Breadcrumb items={[
            { label: "Services", href: "/services" },
            { label: "Sprinklers & Dry Risers" }
          ]} />

          <div className="grid lg:grid-cols-3 gap-12 mt-8">
            <div className="lg:col-span-2 space-y-12">
              <header>
                <h1 className="text-4xl md:text-5xl font-light mb-4 underline-accent inline-block">
                  Fire Suppression Systems That Don't Fail When Lives Depend on Them.
                </h1>
                <p className="text-xl text-muted-foreground font-light leading-relaxed mb-8">
                  Certified inspection, testing and maintenance — built around high-risk environments.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" asChild>
                    <Link to="/contact">Request Sprinkler & Riser Proposal</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link to="/contact">Book a Compliance Survey</Link>
                  </Button>
                </div>
              </header>

              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  The Last Line of Defence in Fire Safety
                </h2>
                <p className="text-lg font-light leading-relaxed mb-4">
                  If a fire grows beyond detection, your suppression systems are the only thing standing between danger and disaster.
                </p>
                <p className="text-lg font-medium">
                  We ensure they perform instantly — every time.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  What We Maintain — Fully Compliant
                </h2>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>System</TableHead>
                        <TableHead>Standard</TableHead>
                        <TableHead>Frequency</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-light">Sprinklers</TableCell>
                        <TableCell className="font-light">BS EN 12845</TableCell>
                        <TableCell className="font-light">Weekly / Quarterly / Annual</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-light">Dry Risers</TableCell>
                        <TableCell className="font-light">BS 9990</TableCell>
                        <TableCell className="font-light">Annual test + 6-month inspection</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-light">Wet Risers</TableCell>
                        <TableCell className="font-light">BS 9990</TableCell>
                        <TableCell className="font-light">Pressure tests + flow validation</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-light">Pumps & Tanks</TableCell>
                        <TableCell className="font-light">BS EN 12845</TableCell>
                        <TableCell className="font-light">Weekly runs + monthly checks</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-light">Valves & Controls</TableCell>
                        <TableCell className="font-light">Manufacturer + SFG20</TableCell>
                        <TableCell className="font-light">Functional testing</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
                <p className="text-sm text-muted-foreground font-light mt-4">
                  Digital certificates issued after every visit — audit-ready.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Beyond "Testing" — We Strengthen Your Fire Strategy
                </h2>
                <p className="text-lg font-light leading-relaxed mb-6">
                  We assess and upgrade:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Pump performance & reliability",
                    "Tank condition and water supply integrity",
                    "Valve accessibility for fire brigade use",
                    "Obstruction & loading risks",
                    "Zone performance for rapid suppression"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Shield className="w-5 h-5 text-accent shrink-0 mt-1" />
                      <span className="font-light">{item}</span>
                    </div>
                  ))}
                </div>
                <p className="text-lg font-medium mt-6">
                  We engineer resilience — not checklists.
                </p>
              </section>

              <section className="bg-muted/30 p-8 rounded-lg">
                <h2 className="text-3xl font-light mb-6">
                  Common Risks We Eliminate
                </h2>
                <div className="space-y-3">
                  {[
                    "Inoperable landing valves",
                    "Seized isolation valves",
                    "Insufficient pressure / water volume",
                    "Corrosion on pipework and outlets",
                    "Incomplete zone protection",
                    "Unknown asset condition = unknown risk"
                  ].map((risk, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                      <span className="font-light">{risk}</span>
                    </div>
                  ))}
                </div>
                <p className="text-lg font-medium mt-6">
                  We bring control back to the Responsible Person.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  High-Risk Sites Welcome
                </h2>
                <p className="text-lg font-light leading-relaxed mb-6">
                  We specialise in:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Logistics & warehouses",
                    "Industrial / plant environments",
                    "Retail and public-facing space",
                    "High-rise commercial",
                    "Student/residential blocks"
                  ].map((site, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                      <span className="font-light">{site}</span>
                    </div>
                  ))}
                </div>
                <p className="text-lg font-medium mt-6">
                  Complex assets → Our everyday workload.
                </p>
              </section>

              <section className="bg-muted/30 p-8 rounded-lg">
                <h2 className="text-3xl font-light mb-6">
                  Full Asset Tagging & Compliance Visibility
                </h2>
                <p className="text-lg font-light leading-relaxed mb-6">
                  Your fire suppression compliance displayed clearly:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border-l-4 border-accent pl-6">
                    <h3 className="font-medium mb-2">QR-coded equipment tagging</h3>
                    <p className="text-sm font-light text-muted-foreground">
                      Every asset tracked and accessible instantly.
                    </p>
                  </div>
                  <div className="border-l-4 border-accent pl-6">
                    <h3 className="font-medium mb-2">Traffic-light risk scoring</h3>
                    <p className="text-sm font-light text-muted-foreground">
                      Clear visibility on system health and priorities.
                    </p>
                  </div>
                  <div className="border-l-4 border-accent pl-6">
                    <h3 className="font-medium mb-2">Remedial recommendations</h3>
                    <p className="text-sm font-light text-muted-foreground">
                      Actionable insights with costed proposals.
                    </p>
                  </div>
                  <div className="border-l-4 border-accent pl-6">
                    <h3 className="font-medium mb-2">CAPEX planning (asset lifecycle)</h3>
                    <p className="text-sm font-light text-muted-foreground">
                      Long-term budgeting for system replacements.
                    </p>
                  </div>
                  <div className="border-l-4 border-accent pl-6">
                    <h3 className="font-medium mb-2">All reports & service logs securely stored</h3>
                    <p className="text-sm font-light text-muted-foreground">
                      Cloud-based access for instant audit readiness.
                    </p>
                  </div>
                </div>
                <p className="text-lg font-medium mt-6">
                  Portfolio owners love this.
                </p>
              </section>

              <FAQSection faqs={faqs} />

              {/* Final CTA */}
              <section className="border-t border-border pt-12">
                <div className="text-center bg-charcoal text-white p-12 rounded-lg">
                  <h2 className="text-3xl font-light mb-4">
                    Don't discover system failure in an emergency.
                  </h2>
                  <p className="text-lg text-gray-300 font-light mb-8 max-w-2xl mx-auto">
                    Book a full suppression system compliance review today.
                  </p>
                  <Button size="lg" variant="secondary" className="bg-white text-charcoal hover:bg-gray-100" asChild>
                    <Link to="/contact">Request a Full Fire Alarm Compliance Review</Link>
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

export default Sprinklers;
