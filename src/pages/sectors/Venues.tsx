import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SchemaMarkup, FAQSchema } from "@/components/shared/SchemaMarkup";
import { FAQSection } from "@/components/shared/FAQSection";
import { SidebarCTA } from "@/components/shared/SidebarCTA";

const Venues = () => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Venue & Arena Facilities Management",
    "provider": {
      "@type": "Organization",
      "name": "EntireFM"
    },
    "description": "High-capacity public buildings with complex safety and compliance systems."
  };

  const faqs = [
    {
      question: "Can you work around event schedules?",
      answer: "Yes. We schedule maintenance during dark days and off-peak periods. Emergency works are coordinated with event management to minimize disruption to shows and performances."
    },
    {
      question: "What compliance applies to venues and arenas?",
      answer: "Venues require enhanced fire safety for high-occupancy spaces, event-specific risk assessments, emergency evacuation systems, electrical safety for staging and lighting, and accessibility compliance for public areas."
    },
    {
      question: "Do you support multi-venue portfolios?",
      answer: "We manage FM across multiple venue sites with standardized processes, centralized helpdesk support, and coordinated engineering teams. Ideal for operators managing regional or national portfolios."
    },
    {
      question: "How do you handle emergency call-outs during events?",
      answer: "Our 24/7 helpdesk provides rapid response for critical failures. Engineers are dispatched immediately for issues affecting public safety or event continuity, with discretion and minimal visible disruption."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Venue & Arena Facilities Management | Event Space FM | EntireFM</title>
        <meta name="description" content="Specialist facilities management for venues, arenas, and stadiums. High-capacity public buildings with complex safety systems and event-focused service delivery." />
        <link rel="canonical" href="https://entirefm.com/sectors/venues" />
      </Helmet>

      <SchemaMarkup schema={serviceSchema} />
      <FAQSchema faqs={faqs} />

      <div className="min-h-screen bg-background pt-20">
        <div className="container mx-auto px-4 py-12 lg:py-20">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="lg:col-span-2">
              {/* Hero Section */}
              <section className="mb-16">
                <h1 className="text-4xl lg:text-5xl font-light mb-6 tracking-tight">
                  Venue, Arena & Stadium Facilities Management
                </h1>
                <p className="text-xl text-muted-foreground font-light leading-relaxed mb-8">
                  High-capacity public buildings with complex safety and compliance systems.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/request-proposal">
                    <Button size="lg" className="bg-primary hover:bg-primary/90">
                      Request Proposal
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button size="lg" variant="outline">
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </section>

              {/* Sector Summary */}
              <section className="mb-16">
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Venue FM Requirements
                </h2>
                <Card className="p-8 bg-card/50 backdrop-blur">
                  <p className="text-muted-foreground font-light leading-relaxed mb-6">
                    Entertainment venues, sports arenas, and conference facilities operate under intense regulatory scrutiny. These high-occupancy buildings demand robust fire safety systems, enhanced emergency evacuation protocols, and meticulous compliance documentation.
                  </p>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Maintenance must be scheduled around event calendars, with rapid response capabilities for issues that could impact shows or public safety. Our approach balances operational continuity with statutory compliance requirements.
                  </p>
                </Card>
              </section>

              {/* Core Compliance Risks */}
              <section className="mb-16">
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Core Compliance Risks
                </h2>
                <div className="space-y-4">
                  <Card className="p-6 bg-card/50 backdrop-blur">
                    <h3 className="font-medium mb-3">Fire Safety & Emergency Evacuation</h3>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed">
                      Large public assemblies require enhanced <Link to="/services/fire-safety" className="text-primary hover:underline">fire detection and suppression systems</Link>. Emergency lighting, fire alarm testing, and evacuation chair servicing are critical for license retention and public safety.
                    </p>
                  </Card>

                  <Card className="p-6 bg-card/50 backdrop-blur">
                    <h3 className="font-medium mb-3">Electrical Infrastructure for Events</h3>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed">
                      Staging, lighting rigs, and sound systems place heavy demands on electrical distribution. <Link to="/services/electrical" className="text-primary hover:underline">Regular EICRs and fixed wire testing</Link> prevent failures during high-profile events.
                    </p>
                  </Card>

                  <Card className="p-6 bg-card/50 backdrop-blur">
                    <h3 className="font-medium mb-3">HVAC for High-Occupancy Spaces</h3>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed">
                      Maintaining air quality and thermal comfort with thousands of occupants requires sophisticated <Link to="/services/hvac" className="text-primary hover:underline">HVAC systems</Link>. Regular servicing prevents discomfort and complaints during peak events.
                    </p>
                  </Card>

                  <Card className="p-6 bg-card/50 backdrop-blur">
                    <h3 className="font-medium mb-3">Public Washroom Water Hygiene</h3>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed">
                      High-use public washrooms and catering facilities present legionella risks. <Link to="/services/water-hygiene" className="text-primary hover:underline">Water hygiene programmes</Link> and regular temperature monitoring are mandatory.
                    </p>
                  </Card>
                </div>
              </section>

              {/* Key Systems */}
              <section className="mb-16">
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Key Systems Within Venues
                </h2>
                <Card className="p-8 bg-card/50 backdrop-blur">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-medium mb-3">Public Safety Systems</h3>
                      <ul className="space-y-2 text-sm text-muted-foreground font-light">
                        <li>• Fire alarm and detection systems</li>
                        <li>• Emergency lighting and signage</li>
                        <li>• Smoke ventilation systems</li>
                        <li>• Sprinkler and suppression systems</li>
                        <li>• Disabled refuge communication</li>
                        <li>• Public address systems</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-medium mb-3">Building Infrastructure</h3>
                      <ul className="space-y-2 text-sm text-muted-foreground font-light">
                        <li>• High-capacity HVAC systems</li>
                        <li>• Electrical distribution networks</li>
                        <li>• Backup power generation</li>
                        <li>• BMS and building controls</li>
                        <li>• Access control and turnstiles</li>
                        <li>• Lift and escalator systems</li>
                      </ul>
                    </div>
                  </div>
                </Card>
              </section>

              {/* Operational Challenges */}
              <section className="mb-16">
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Operational Challenges
                </h2>
                <Card className="p-8 bg-card/50 backdrop-blur">
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-medium mb-2">Event Calendar Coordination</h3>
                      <p className="text-sm text-muted-foreground font-light leading-relaxed">
                        Planned maintenance must occur during dark days between events. Poor scheduling causes conflicts with show production and revenue loss.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">Public Safety Licensing</h3>
                      <p className="text-sm text-muted-foreground font-light leading-relaxed">
                        Venues operate under licenses that require current compliance certificates. Expired documentation can result in event cancellation and license suspension.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">High-Footfall Wear</h3>
                      <p className="text-sm text-muted-foreground font-light leading-relaxed">
                        Public areas experience accelerated wear from thousands of visitors. Reactive maintenance must be rapid to maintain appearance and safety standards.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">Emergency Response During Events</h3>
                      <p className="text-sm text-muted-foreground font-light leading-relaxed">
                        Critical failures during sold-out events require immediate engineer attendance with minimal disruption to the audience experience.
                      </p>
                    </div>
                  </div>
                </Card>
              </section>

              {/* Why EntireFM */}
              <section className="mb-16">
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Why EntireFM for Venue FM
                </h2>
                <Card className="p-8 bg-card/50 backdrop-blur">
                  <p className="text-muted-foreground font-light leading-relaxed mb-6">
                    We recognize that venue operations are unforgiving. Failed systems during events cause reputational damage and revenue loss. Our engineers understand the pressure of event-driven environments and deliver accordingly.
                  </p>
                  <ul className="space-y-3 text-muted-foreground font-light">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Scheduling around event calendars and dark days</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>24/7 emergency response for critical failures</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Enhanced compliance for high-occupancy licensing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Discreet service delivery during live events</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Multi-venue portfolio management capability</span>
                    </li>
                  </ul>
                </Card>
              </section>

              {/* Related Case Studies */}
              <section className="mb-16">
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Related Case Studies
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <Card className="p-6 bg-card/50 backdrop-blur hover:shadow-lg transition-shadow">
                    <h3 className="font-medium mb-3">
                      <Link to="/case-studies/hospitality" className="hover:text-primary transition-colors">
                        Conference & Events Centre
                      </Link>
                    </h3>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed mb-4">
                      Comprehensive FM services for a multi-purpose venue hosting conferences, concerts, and sporting events.
                    </p>
                    <Link to="/case-studies/hospitality" className="text-sm text-primary hover:underline">
                      Read case study →
                    </Link>
                  </Card>

                  <Card className="p-6 bg-card/50 backdrop-blur hover:shadow-lg transition-shadow">
                    <h3 className="font-medium mb-3">Hospitality & Leisure</h3>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed mb-4">
                      FM solutions for leisure facilities and public entertainment spaces with high visitor volumes.
                    </p>
                    <Link to="/sectors/hospitality-leisure" className="text-sm text-primary hover:underline">
                      View sector overview →
                    </Link>
                  </Card>
                </div>
              </section>

              {/* FAQ Section */}
              <FAQSection faqs={faqs} />

              {/* Final CTA */}
              <section className="mt-16">
                <Card className="p-8 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
                  <h2 className="text-2xl font-light mb-4">
                    Discuss Venue FM Requirements
                  </h2>
                  <p className="text-muted-foreground font-light leading-relaxed mb-6">
                    Talk to our team about facilities management for arenas, venues, and event spaces.
                  </p>
                  <Link to="/request-proposal">
                    <Button size="lg" className="bg-primary hover:bg-primary/90">
                      Request Proposal
                    </Button>
                  </Link>
                </Card>
              </section>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <SidebarCTA />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Venues;
