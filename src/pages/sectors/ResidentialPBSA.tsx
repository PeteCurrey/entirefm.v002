import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, Phone, Shield, Users, FileCheck, TrendingUp } from "lucide-react";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { SidebarCTA } from "@/components/shared/SidebarCTA";
import { FAQSection } from "@/components/shared/FAQSection";
import { SchemaMarkup } from "@/components/shared/SchemaMarkup";
import { Helmet } from "react-helmet";

const ResidentialPBSA = () => {
  const faqs = [
    {
      question: "Do you support both housing associations and private managing agents?",
      answer: "Yes — we provide scalable support models for any portfolio size, from single blocks to large residential estates and PBSA operators."
    },
    {
      question: "Do you take on distressed compliance cases?",
      answer: "Regularly — we specialise in fast turnaround on fire risk and hygiene deficiencies, bringing non-compliant properties up to standard quickly."
    },
    {
      question: "Do residents contact you directly for issues?",
      answer: "Yes — with communications handled professionally to reduce agent workload and improve resident satisfaction through faster response times."
    },
    {
      question: "Do you provide emergency call-outs 24/7?",
      answer: "Always — residential risk never sleeps. Our 24/7 helpdesk ensures immediate response to critical issues affecting resident safety and comfort."
    }
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Residential Blocks & PBSA Facilities Management",
    "provider": {
      "@type": "Organization",
      "name": "EntireFM"
    },
    "areaServed": "United Kingdom",
    "description": "Specialist facilities management for residential blocks, towers, and purpose-built student accommodation ensuring compliance, safety, and resident satisfaction."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <Helmet>
        <title>Residential Block FM UK / PBSA</title>
        <meta 
          name="description" 
          content="Life-safety compliance & resident satisfaction delivered." 
        />
        <link rel="canonical" href="https://entirefm.com/sectors/residential-pbsa" />
      </Helmet>

      <SchemaMarkup schema={serviceSchema} />
      <SchemaMarkup schema={faqSchema} />

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-charcoal text-white py-20">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
          <div className="container mx-auto px-4 relative z-10">
            <Breadcrumb 
              items={[
                { label: "Sectors", href: "/sectors" },
                { label: "Residential & PBSA" }
              ]}
            />
            <div className="max-w-4xl mt-8">
              <h1 className="text-4xl md:text-5xl font-light mb-6 leading-tight">
                Happy Residents. Zero Complaints. Full Compliance.
              </h1>
              <p className="text-xl text-gray-300 mb-8 font-light leading-relaxed">
                FM that protects living standards, life safety, asset value — and the reputation of those responsible.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="group">
                  <Link to="/contact">
                    Request Block FM Proposal
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-charcoal">
                  <Link to="/contact">
                    Book Compliance Audit
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content Column */}
              <div className="lg:col-span-2 space-y-12">
                {/* The Reality Section */}
                <div>
                  <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                    The Reality: Residents Complain Immediately
                  </h2>
                  <p className="text-muted-foreground mb-6 font-light leading-relaxed">
                    In housing environments, a single failure can trigger:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    {[
                      "Reputation damage for landlords & managing agents",
                      "Escalated complaints to councils & ombudsman",
                      "Safety issues for occupants",
                      "Tenant compensation claims",
                      "Void losses and churn"
                    ].map((issue, index) => (
                      <Card key={index} className="p-4 bg-destructive/5 border-destructive/20">
                        <p className="text-sm font-light flex items-start">
                          <span className="text-destructive mr-2 font-medium">✕</span>
                          {issue}
                        </p>
                      </Card>
                    ))}
                  </div>
                  <p className="text-foreground font-medium">
                    We take FM issues out of the spotlight — before residents take them public.
                  </p>
                </div>

                {/* Service Table */}
                <div>
                  <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                    Tailored to Blocks, Towers & Student Living
                  </h2>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-muted">
                          <th className="border border-border p-4 text-left font-medium">Priority Area</th>
                          <th className="border border-border p-4 text-left font-medium">What We Manage</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { area: "Life Safety Compliance", service: "Fire alarms, emergency lighting, compartmentation, FRA actions" },
                          { area: "Building Services", service: "HVAC for communal spaces, pumps, drainage, lifts (partners)" },
                          { area: "Water Hygiene", service: "ACOP L8 compliance for shared systems" },
                          { area: "Fabric & Common Areas", service: "Doors, handrails, flooring, communal aesthetics" },
                          { area: "Security & Access", service: "Entry systems, CCTV infra (with partners)" },
                          { area: "Resident Experience", service: "Cleanliness, lighting, comfort, issue resolution" }
                        ].map((row, index) => (
                          <tr key={index} className="hover:bg-muted/50 transition-colors">
                            <td className="border border-border p-4 font-medium">{row.area}</td>
                            <td className="border border-border p-4 text-muted-foreground font-light">{row.service}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="mt-6 text-foreground font-medium">
                    We handle the full operational environment.
                  </p>
                </div>

                {/* Engagement Model */}
                <div>
                  <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                    Engagement Model That Keeps Everyone Informed
                  </h2>
                  <p className="text-muted-foreground mb-6 font-light leading-relaxed">
                    We manage the communications flow to protect reputation:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    {[
                      { icon: Phone, text: "Dedicated helpdesk for rapid updates" },
                      { icon: FileCheck, text: "Real-time reporting accessible to block managers" },
                      { icon: Shield, text: "Photo proof of every job" },
                      { icon: Users, text: "Resident-friendly communication options (optional)" }
                    ].map((item, index) => (
                      <Card key={index} className="p-4 hover-lift">
                        <div className="flex items-start gap-3">
                          <item.icon className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                          <p className="text-sm font-light">{item.text}</p>
                        </div>
                      </Card>
                    ))}
                  </div>
                  <div className="bg-primary/5 border-l-4 border-primary p-4">
                    <p className="font-light">
                      <span className="font-medium">Transparency = fewer escalations.</span><br />
                      <span className="font-medium">Speed = happy residents.</span>
                    </p>
                  </div>
                </div>

                {/* Compliance Section */}
                <div>
                  <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                    Compliance Is Everything Here
                  </h2>
                  <p className="text-muted-foreground mb-6 font-light leading-relaxed">
                    Blocks require absolute diligence:
                  </p>
                  <ul className="space-y-3 mb-6">
                    {[
                      "FRA action tracking + remediation",
                      "Fire door inspection and upgrades",
                      "Evacuation route integrity",
                      "Water tank hygiene",
                      "Regular statutory checks documented + stored"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start text-foreground font-light">
                        <span className="text-primary mr-3 font-medium">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="text-foreground font-medium">
                    We make compliance visible and provable at any inspection.
                  </p>
                </div>

                {/* Planned Maintenance */}
                <div>
                  <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                    Planned Maintenance That Protects Asset Value
                  </h2>
                  <p className="text-muted-foreground mb-6 font-light leading-relaxed">
                    Buildings deteriorate fast without structure. We create:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    {[
                      "12–60 month PPM plans",
                      "CAPEX forecasting for major refurb",
                      "Dilapidation prevention strategies",
                      "Asset registers for investment-grade visibility"
                    ].map((item, index) => (
                      <Card key={index} className="p-4">
                        <div className="flex items-start gap-3">
                          <TrendingUp className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                          <p className="text-sm font-light">{item}</p>
                        </div>
                      </Card>
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 font-light">
                    We protect the interests of:
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {["Freeholders", "Managing agents", "PBSA operators", "Institutional owners"].map((stakeholder, index) => (
                      <span key={index} className="px-4 py-2 bg-muted rounded-full text-sm font-light">
                        {stakeholder}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Case Studies */}
                <div>
                  <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                    Proven Results
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card className="p-6 hover-lift">
                      <h3 className="font-medium mb-2">Student Residence — Midlands</h3>
                      <ul className="space-y-2 text-sm text-muted-foreground font-light">
                        <li className="flex items-start">
                          <span className="text-primary mr-2">✓</span>
                          Resolved 100% historical FRAs within 8 weeks
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">✓</span>
                          Stopped major water hygiene failure risk
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">✓</span>
                          Reactive calls reduced by 35%
                        </li>
                      </ul>
                    </Card>
                    <Card className="p-6 hover-lift">
                      <h3 className="font-medium mb-2">High-Rise Block — UK City</h3>
                      <ul className="space-y-2 text-sm text-muted-foreground font-light">
                        <li className="flex items-start">
                          <span className="text-primary mr-2">✓</span>
                          Fire doors + dampers compliance overhaul
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">✓</span>
                          Refurb of communal areas → higher resident ratings
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">✓</span>
                          Introduced tech for real-time job visibility
                        </li>
                      </ul>
                    </Card>
                  </div>
                </div>

                {/* FAQ Section */}
                <FAQSection faqs={faqs} />

                {/* Final CTA */}
                <Card className="p-8 bg-charcoal text-white text-center">
                  <h2 className="text-3xl font-light mb-4">
                    Better environments. Better compliance. Better resident satisfaction.
                  </h2>
                  <p className="text-gray-300 mb-6 font-light">
                    Make FM a reason they stay — not a reason they leave.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild size="lg" variant="secondary">
                      <Link to="/contact">
                        Request Residential FM Proposal
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-charcoal">
                      <a href="tel:+448001234567">
                        <Phone className="w-4 h-4 mr-2" />
                        Speak to Helpdesk (24/7)
                      </a>
                    </Button>
                  </div>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-24">
                  <SidebarCTA />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ResidentialPBSA;
