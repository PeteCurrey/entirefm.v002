import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Phone, ArrowRight } from "lucide-react";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { FAQSection } from "@/components/shared/FAQSection";
import { SidebarCTA } from "@/components/shared/SidebarCTA";
import { ServiceSchema, FAQSchema } from "@/components/shared/SchemaMarkup";

const faqs = [
  {
    question: "Are you authorised to work airside?",
    answer: "Yes — our engineers and supervisors are security cleared and hold current airside passes, ensuring full compliance with aviation security standards."
  },
  {
    question: "Do you support both landside and airside operations?",
    answer: "Seamlessly — we operate across both environments using the same control systems, but with heightened safety protocols for airside work."
  },
  {
    question: "Do you comply with aviation safety governance?",
    answer: "Yes — we're fully compliant with airside safety requirements and CAA expectations, with strict adherence to Permit to Work and incident reporting procedures."
  },
  {
    question: "How do you avoid passenger disruption?",
    answer: "Through night scheduling, micro-zone control strategies, and rapid execution capabilities that minimize impact on passenger flow and operations."
  }
];

const AviationTravelHub = () => {
  return (
    <>
      <Helmet>
        <title>Aviation & Travel Hub FM | Airport Facilities Maintenance | EntireFM</title>
        <meta 
          name="description" 
          content="Mission-critical facilities management for airports and travel hubs. Airside reliability and landside experience with aviation-grade compliance and security clearance." 
        />
        <meta 
          name="keywords" 
          content="Aviation FM UK, Airport Facilities Maintenance, Airside FM Contractor, Travel Hub Maintenance, Airport Terminal Services" 
        />
      </Helmet>

      <ServiceSchema 
        name="Aviation & Travel Hub Facilities Management"
        description="Mission-critical maintenance for airports and travel hubs where safety, security, and passenger flow are non-negotiable"
        provider="EntireFM"
        areaServed="United Kingdom"
      />

      <FAQSchema faqs={faqs} />

      <div className="container mx-auto px-4 py-8">
        <Breadcrumb 
          items={[
            { label: "Sectors", href: "/sectors" },
            { label: "Aviation & Travel Hub" }
          ]} 
        />

        <div className="grid lg:grid-cols-3 gap-8 mt-8">
          <div className="lg:col-span-2">
            {/* Hero Section */}
            <section className="mb-16">
              <h1 className="text-4xl md:text-5xl font-light mb-6 leading-tight">
                Airside Reliability. Landside Experience. <span className="text-primary">One FM Partner.</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 font-light leading-relaxed">
                Mission-critical maintenance for environments where safety, security, and passenger flow are non-negotiable.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg">
                  <Link to="/contact">
                    Request Aviation FM Proposal
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/contact">
                    Book Airside Site Survey
                  </Link>
                </Button>
              </div>
            </section>

            {/* Crisis Section */}
            <section className="mb-16">
              <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                In Aviation, Downtime Isn't an Option — It's a Crisis
              </h2>
              <p className="text-muted-foreground mb-6 font-light leading-relaxed">
                When assets fail at airports, the consequences cascade rapidly:
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-muted/30 p-4 rounded-lg">
                  <p className="font-medium mb-2">🚫 Passenger congestion multiplies</p>
                </div>
                <div className="bg-muted/30 p-4 rounded-lg">
                  <p className="font-medium mb-2">🚫 Security risk escalates</p>
                </div>
                <div className="bg-muted/30 p-4 rounded-lg">
                  <p className="font-medium mb-2">🚫 Airline schedules unravel</p>
                </div>
                <div className="bg-muted/30 p-4 rounded-lg">
                  <p className="font-medium mb-2">🚫 Revenue evaporates</p>
                </div>
                <div className="bg-muted/30 p-4 rounded-lg">
                  <p className="font-medium mb-2">🚫 Brand damage spreads fast</p>
                </div>
              </div>
              <p className="text-lg font-medium">
                We maintain continuous passenger movement — from kerb to gate.
              </p>
            </section>

            {/* Where We Operate */}
            <section className="mb-16">
              <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                Where We Operate
              </h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary mr-3 mt-1">✓</span>
                  <span className="text-muted-foreground font-light">Regional airports</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 mt-1">✓</span>
                  <span className="text-muted-foreground font-light">Travel hubs & stations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 mt-1">✓</span>
                  <span className="text-muted-foreground font-light">Landside retail & hospitality zones</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 mt-1">✓</span>
                  <span className="text-muted-foreground font-light">Car parks & external routes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 mt-1">✓</span>
                  <span className="text-muted-foreground font-light">Secure airside operational spaces</span>
                </li>
              </ul>
              <p className="text-muted-foreground mt-4 font-light italic">
                Authorised & trained for restricted access environments.
              </p>
            </section>

            {/* Specialist Services Table */}
            <section className="mb-16">
              <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                Specialist Aviation FM Services
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-muted">
                      <th className="text-left p-4 font-medium">Mission-Critical Area</th>
                      <th className="text-left p-4 font-medium">What We Deliver</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="p-4 font-medium">Passenger Circulation</td>
                      <td className="p-4 text-muted-foreground font-light">Escalators, travelators, lifts, signage, lighting</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-4 font-medium">Climate & IAQ</td>
                      <td className="p-4 text-muted-foreground font-light">Terminal HVAC, BMS optimisation, air quality compliance</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-4 font-medium">Life Safety</td>
                      <td className="p-4 text-muted-foreground font-light">Fire systems, emergency lighting, evacuation clearance</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-4 font-medium">Security Systems</td>
                      <td className="p-4 text-muted-foreground font-light">Access control, surveillance infrastructure (in partnership)</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-4 font-medium">Electrical & Standby</td>
                      <td className="p-4 text-muted-foreground font-light">Generators, UPS, critical circuit protection</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-4 font-medium">Fabric & Branding</td>
                      <td className="p-4 text-muted-foreground font-light">Front-of-house perfection + rapid remediation</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-lg font-medium mt-6">
                If it keeps people moving, safe, and secure — we own it.
              </p>
            </section>

            {/* Airside Compliance */}
            <section className="mb-16">
              <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                Airside Compliance & Accreditation
              </h2>
              <p className="text-muted-foreground mb-4 font-light leading-relaxed">
                We operate under:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary mr-3 mt-1">✓</span>
                  <span className="text-muted-foreground font-light">Aviation security vetting & airside pass controls</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 mt-1">✓</span>
                  <span className="text-muted-foreground font-light">Permit to Work & safety briefing regimes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 mt-1">✓</span>
                  <span className="text-muted-foreground font-light">Strict RAMS and incident reporting</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 mt-1">✓</span>
                  <span className="text-muted-foreground font-light">Aviation-specific life safety standards</span>
                </li>
              </ul>
              <p className="text-lg font-medium mt-6">
                Your operations remain CAA-grade compliant.
              </p>
            </section>

            {/* Passenger Experience */}
            <section className="mb-16">
              <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                Passenger Experience is a Commercial Metric
              </h2>
              <p className="text-muted-foreground mb-4 font-light leading-relaxed">
                EntireFM impacts:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary mr-3 mt-1">→</span>
                  <span className="text-muted-foreground font-light">Overall satisfaction scores</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 mt-1">→</span>
                  <span className="text-muted-foreground font-light">Queuing times & movement efficiency</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 mt-1">→</span>
                  <span className="text-muted-foreground font-light">Comfort perception (temp, air quality, lighting)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 mt-1">→</span>
                  <span className="text-muted-foreground font-light">Accessibility performance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 mt-1">→</span>
                  <span className="text-muted-foreground font-light">Retail / F&B revenue opportunities</span>
                </li>
              </ul>
              <p className="text-lg font-medium mt-6">
                Smooth flow = commercial growth.
              </p>
            </section>

            {/* PPM Built Around Flight Schedules */}
            <section className="mb-16">
              <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                PPM Built Around Flight Schedules
              </h2>
              <p className="text-muted-foreground mb-4 font-light leading-relaxed">
                We plan around:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-muted/30 p-4 rounded-lg">
                  <p className="font-medium mb-1">Peak hours avoidance</p>
                  <p className="text-sm text-muted-foreground font-light">Work scheduled during quieter periods</p>
                </div>
                <div className="bg-muted/30 p-4 rounded-lg">
                  <p className="font-medium mb-1">Night-works capability</p>
                  <p className="text-sm text-muted-foreground font-light">24/7 operational flexibility</p>
                </div>
                <div className="bg-muted/30 p-4 rounded-lg">
                  <p className="font-medium mb-1">Rapid reactive models</p>
                  <p className="text-sm text-muted-foreground font-light">Emergency response protocols</p>
                </div>
                <div className="bg-muted/30 p-4 rounded-lg">
                  <p className="font-medium mb-1">SLA acceleration</p>
                  <p className="text-sm text-muted-foreground font-light">Based on criticality levels</p>
                </div>
              </div>
              <p className="text-lg font-medium mt-6">
                No disruption to airline efficiency.
              </p>
            </section>

            {/* Case Studies */}
            <section className="mb-16">
              <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                Proven Approach in Complex Estates
              </h2>
              <div className="space-y-6">
                <div className="bg-muted/30 p-6 rounded-lg">
                  <h3 className="text-xl font-medium mb-3">Terminal Retail Mall Compliance</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span className="text-muted-foreground font-light">Fire compliance uplift in terminal retail mall</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span className="text-muted-foreground font-light">Zero-failure evacuation routes verified airside</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-muted/30 p-6 rounded-lg">
                  <h3 className="text-xl font-medium mb-3">Terminal Climate Optimization</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span className="text-muted-foreground font-light">HVAC redesign improved IAQ scores by 37%</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span className="text-muted-foreground font-light">Cosmetic + brand-critical repairs completed under live terminal conditions</span>
                    </li>
                  </ul>
                </div>
              </div>
              <p className="text-lg font-medium mt-6">
                We turn aviation FM into a zero-drama operation.
              </p>
            </section>

            {/* FAQs */}
            <FAQSection faqs={faqs} />

            {/* Final CTA */}
            <section className="bg-charcoal text-white p-8 rounded-lg mt-16">
              <h2 className="text-3xl font-light mb-4">
                A travel hub that fails loses the confidence of the world.
              </h2>
              <p className="text-lg mb-6 font-light text-gray-300">
                Partner with FM specialists who match aviation's operational tempo.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" variant="secondary">
                  <Link to="/contact">
                    Request Aviation FM Proposal
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href="tel:+448001234567" className="text-white border-white hover:bg-white hover:text-charcoal">
                    <Phone className="w-4 h-4 mr-2" />
                    Speak to FM Specialist (24/7)
                  </a>
                </Button>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-8">
              <SidebarCTA />
            </div>
          </aside>
        </div>
      </div>
    </>
  );
};

export default AviationTravelHub;
