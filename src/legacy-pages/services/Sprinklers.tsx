"use client";

;
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { SidebarCTA } from "@/components/shared/SidebarCTA";
import { FAQSection } from "@/components/shared/FAQSection";
import { ServiceSchema, FAQSchema } from "@/components/shared/SchemaMarkup";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle2, Shield, Droplets, AlertTriangle, ArrowRight, Phone } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/shared/AnimatedSection";
import CTASection from "@/components/shared/CTASection";
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

  const stats = [
    { value: "98%", label: "SLA Compliance" },
    { value: "500+", label: "Systems Maintained" },
    { value: "24/7", label: "Emergency Response" },
    { value: "Zero", label: "Enforcement Notices" }
  ];

  return (
    <>
      

      <ServiceSchema 
        name="Sprinkler & Dry Riser Maintenance"
        description="Sprinkler system testing, dry riser maintenance, and fire suppression compliance"
        provider="EntireFM"
        areaServed="United Kingdom"
      />
      <FAQSchema faqs={faqs} />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-charcoal/80 to-charcoal z-10" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80')] bg-cover bg-center" />
        
        <div className="container mx-auto px-6 relative z-20 text-white py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Breadcrumb items={[
              { label: "Services", href: "/services" },
              { label: "Sprinklers & Dry Risers" }
            ]} className="mb-6" />
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 max-w-4xl">
              Fire Suppression Systems That Don't Fail When Lives Depend on Them
            </h1>
            <p className="text-xl md:text-2xl font-light max-w-3xl text-gray-200 mb-8">
              Certified inspection, testing and maintenance — built around high-risk environments.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-white text-charcoal hover:bg-gray-100" asChild>
                <Link href="/contact">
                  Request Sprinkler Proposal
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-charcoal" asChild>
                <Link href="/contact">Book Compliance Survey</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="bg-charcoal py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center text-white"
              >
                <div className="text-3xl md:text-4xl font-light mb-2">{stat.value}</div>
                <div className="text-sm text-gray-400 font-light">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-16">
            
            <AnimatedSection>
              <section className="bg-gradient-to-br from-primary/10 to-transparent p-8 rounded-2xl border border-primary/20">
                <div className="flex items-start gap-4 mb-4">
                  <Shield className="w-8 h-8 text-primary flex-shrink-0" />
                  <h2 className="text-3xl font-light">
                    The Last Line of Defence in Fire Safety
                  </h2>
                </div>
                <p className="text-lg font-light leading-relaxed text-muted-foreground">
                  If a fire grows beyond detection, your suppression systems are the only thing standing between danger and disaster. We ensure they perform instantly — every time.
                </p>
              </section>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  What We Maintain — Fully Compliant
                </h2>
                <div className="overflow-x-auto rounded-lg border">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-muted/50">
                        <TableHead className="font-medium">System</TableHead>
                        <TableHead className="font-medium">Standard</TableHead>
                        <TableHead className="font-medium">Frequency</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {[
                        { system: "Sprinklers", standard: "BS EN 12845", frequency: "Weekly / Quarterly / Annual" },
                        { system: "Dry Risers", standard: "BS 9990", frequency: "Annual test + 6-month inspection" },
                        { system: "Wet Risers", standard: "BS 9990", frequency: "Pressure tests + flow validation" },
                        { system: "Pumps & Tanks", standard: "BS EN 12845", frequency: "Weekly runs + monthly checks" },
                        { system: "Valves & Controls", standard: "Manufacturer + SFG20", frequency: "Functional testing" }
                      ].map((row, index) => (
                        <TableRow key={index} className="hover:bg-muted/30 transition-colors">
                          <TableCell className="font-light">{row.system}</TableCell>
                          <TableCell className="font-light text-primary">{row.standard}</TableCell>
                          <TableCell className="font-light">{row.frequency}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
                <p className="text-sm text-muted-foreground font-light mt-4 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  Digital certificates issued after every visit — audit-ready.
                </p>
              </section>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Beyond "Testing" — We Strengthen Your Fire Strategy
                </h2>
                <p className="text-lg font-light leading-relaxed mb-6 text-muted-foreground">
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
                    <motion.div 
                      key={index} 
                      className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Droplets className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="font-light">{item}</span>
                    </motion.div>
                  ))}
                </div>
                <p className="text-lg font-medium mt-6 text-primary">
                  We engineer resilience — not checklists.
                </p>
              </section>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <section className="bg-destructive/5 border border-destructive/20 p-8 rounded-2xl">
                <div className="flex items-start gap-4 mb-6">
                  <AlertTriangle className="w-8 h-8 text-destructive flex-shrink-0" />
                  <h2 className="text-3xl font-light">
                    Common Risks We Eliminate
                  </h2>
                </div>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    "Inoperable landing valves",
                    "Seized isolation valves",
                    "Insufficient pressure / water volume",
                    "Corrosion on pipework and outlets",
                    "Incomplete zone protection",
                    "Unknown asset condition = unknown risk"
                  ].map((risk, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-background/50 rounded-lg">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="font-light text-sm">{risk}</span>
                    </div>
                  ))}
                </div>
                <p className="text-lg font-medium mt-6">
                  We bring control back to the Responsible Person.
                </p>
              </section>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  High-Risk Sites Welcome
                </h2>
                <p className="text-lg font-light leading-relaxed mb-6 text-muted-foreground">
                  We specialise in:
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    { name: "Logistics & warehouses", icon: "📦" },
                    { name: "Industrial / plant environments", icon: "🏭" },
                    { name: "Retail and public-facing space", icon: "🏪" },
                    { name: "High-rise commercial", icon: "🏢" },
                    { name: "Student/residential blocks", icon: "🏠" }
                  ].map((site, index) => (
                    <motion.div 
                      key={index} 
                      className="flex items-center gap-3 p-4 bg-card border rounded-lg hover:border-primary transition-colors"
                      whileHover={{ scale: 1.02 }}
                    >
                      <span className="text-2xl">{site.icon}</span>
                      <span className="font-light">{site.name}</span>
                    </motion.div>
                  ))}
                </div>
                <p className="text-lg font-medium mt-6 text-primary">
                  Complex assets → Our everyday workload.
                </p>
              </section>
            </AnimatedSection>

            <AnimatedSection delay={0.5}>
              <section className="bg-muted/30 p-8 rounded-2xl">
                <h2 className="text-3xl font-light mb-6">
                  Full Asset Tagging & Compliance Visibility
                </h2>
                <p className="text-lg font-light leading-relaxed mb-6 text-muted-foreground">
                  Your fire suppression compliance displayed clearly:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { title: "QR-coded equipment tagging", desc: "Every asset tracked and accessible instantly." },
                    { title: "Traffic-light risk scoring", desc: "Clear visibility on system health and priorities." },
                    { title: "Remedial recommendations", desc: "Actionable insights with costed proposals." },
                    { title: "CAPEX planning (asset lifecycle)", desc: "Long-term budgeting for system replacements." },
                    { title: "Cloud storage of all records", desc: "Instant audit readiness, anytime access." }
                  ].map((item, index) => (
                    <div key={index} className="border-l-4 border-primary pl-6">
                      <h3 className="font-medium mb-2">{item.title}</h3>
                      <p className="text-sm font-light text-muted-foreground">{item.desc}</p>
                    </div>
                  ))}
                </div>
                <p className="text-lg font-medium mt-6 text-primary">
                  Portfolio owners love this.
                </p>
              </section>
            </AnimatedSection>

            <AnimatedSection delay={0.6}>
              <FAQSection faqs={faqs} />
            </AnimatedSection>

            <CTASection
              title="Don't discover system failure in an emergency"
              description="Book a full suppression system compliance review today."
              primaryLabel="Request Compliance Review"
              primaryHref="/contact"
              secondaryLabel="24/7 Helpdesk"
              secondaryHref="tel:+448001234567"
              secondaryIcon={Phone}
              variant="dark"
            />
          </div>

          <aside className="lg:col-span-1">
            <div className="sticky top-24">
              <SidebarCTA />
            </div>
          </aside>
        </div>
      </div>
    </>
  );
};

export default Sprinklers;