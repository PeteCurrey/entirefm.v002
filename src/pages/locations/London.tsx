import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, Phone, MapPin, Clock, Shield, Zap } from "lucide-react";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { SidebarCTA } from "@/components/shared/SidebarCTA";
import { FAQSection } from "@/components/shared/FAQSection";
import { SchemaMarkup } from "@/components/shared/SchemaMarkup";
import { LocalBusinessSchema } from "@/components/shared/SchemaMarkup";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { Helmet } from "react-helmet";

const London = () => {
  const faqs = [
    {
      question: "Do you serve all London boroughs?",
      answer: "Yes — we provide full Greater London coverage with strategically positioned engineers for rapid response across all boroughs and business districts."
    },
    {
      question: "Do you support multi-site portfolios?",
      answer: "Regularly — we specialise in managing multi-site portfolios, especially for retail and commercial HQ operators across London and the surrounding areas."
    },
    {
      question: "Can you work during trading hours?",
      answer: "Yes — low-disruption execution is our standard practice. We plan works around your operational requirements and peak trading times."
    },
    {
      question: "Do you provide emergency call-outs?",
      answer: "24/7 — our helpdesk provides immediate response for critical assets with rapid engineer dispatch across all London zones."
    }
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Facilities Management London",
    "provider": {
      "@type": "Organization",
      "name": "EntireFM"
    },
    "areaServed": {
      "@type": "City",
      "name": "London"
    },
    "description": "Hard and soft FM services across London with rapid response, full compliance, and comprehensive M&E maintenance for commercial properties."
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
        <title>Facilities Management London</title>
        <meta 
          name="description" 
          content="Responsive FM & compliance support across London. 24/7 uptime & safety." 
        />
        <link rel="canonical" href="https://entirefm.com/locations/london" />
      </Helmet>

      <SchemaMarkup schema={serviceSchema} />
      <SchemaMarkup schema={faqSchema} />
      <BreadcrumbSchema items={[
        { label: "Home", href: "/" },
        { label: "Locations", href: "/locations" },
        { label: "London" }
      ]} />
      <LocalBusinessSchema 
        name="EntireFM London"
        address={{
          street: "Placeholder Street",
          city: "London",
          postalCode: "SW1A 1AA",
          country: "United Kingdom"
        }}
      />

      <div className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="relative bg-charcoal text-white py-20">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
          <div className="container mx-auto px-4 relative z-10">
            <Breadcrumb 
              items={[
                { label: "Locations", href: "/locations" },
                { label: "London" }
              ]}
            />
            <div className="max-w-4xl mt-8">
              <h1 className="text-4xl md:text-5xl font-light mb-6 leading-tight">
                London Moves Fast. Your FM Partner Should Move Faster.
              </h1>
              <p className="text-xl text-gray-300 mb-8 font-light leading-relaxed">
                Hard & soft FM services across the capital — with rapid response, full compliance, and zero excuses.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="group">
                  <Link to="/contact">
                    Request Proposal
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-charcoal">
                  <a href="tel:+448001234567">
                    <Phone className="w-4 h-4 mr-2" />
                    24/7 Helpdesk — Speak Now
                  </a>
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
                {/* Operational Excellence Section */}
                <div>
                  <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                    Operational Excellence for the City That Never Slows Down
                  </h2>
                  <p className="text-muted-foreground mb-6 font-light leading-relaxed">
                    London sites are high-pressure environments:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    {[
                      "Mixed-use complexity",
                      "Multi-tenant compliance",
                      "Zero downtime tolerance",
                      "Peak trading & extended hours",
                      "Brand-critical environments"
                    ].map((challenge, index) => (
                      <Card key={index} className="p-4 bg-muted/30">
                        <p className="text-sm font-light flex items-start">
                          <span className="text-primary mr-2 font-medium">•</span>
                          {challenge}
                        </p>
                      </Card>
                    ))}
                  </div>
                  <p className="text-foreground font-medium text-lg">
                    We keep your sites running like the capital demands.
                  </p>
                </div>

                {/* London Coverage */}
                <div>
                  <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                    London Coverage — Fully Resourced
                  </h2>
                  <p className="text-muted-foreground mb-6 font-light leading-relaxed">
                    Fast engineer dispatch across:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    {[
                      { area: "Central London", icon: MapPin },
                      { area: "City & Canary Wharf", icon: MapPin },
                      { area: "West End & South Bank", icon: MapPin },
                      { area: "East London logistics belt", icon: MapPin },
                      { area: "North Circular industrial estates", icon: MapPin },
                      { area: "Heathrow & Gatwick support zones", icon: MapPin }
                    ].map((location, index) => (
                      <Card key={index} className="p-4 hover-lift">
                        <div className="flex items-start gap-3">
                          <location.icon className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                          <p className="text-sm font-light">{location.area}</p>
                        </div>
                      </Card>
                    ))}
                  </div>
                  <div className="bg-primary/5 border-l-4 border-primary p-4">
                    <p className="font-medium">
                      Strategic engineer placement = faster fixes + lower cost.
                    </p>
                  </div>
                </div>

                {/* Integrated FM Services */}
                <div>
                  <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                    Integrated FM — One Provider, One Standard
                  </h2>
                  <p className="text-muted-foreground mb-6 font-light leading-relaxed">
                    We deliver complete FM support:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                    {[
                      "Hard Services & M&E",
                      "Fire & Life Safety Systems",
                      "Water Hygiene & ACOP L8",
                      "Gas & Heating Compliance",
                      "Building Fabric Maintenance",
                      "Reactive Emergency Response"
                    ].map((service, index) => (
                      <div key={index} className="flex items-start text-foreground font-light">
                        <span className="text-primary mr-3 font-medium">✓</span>
                        {service}
                      </div>
                    ))}
                  </div>
                  <p className="text-muted-foreground font-light italic">
                    With tech that proves performance in real time.
                  </p>
                </div>

                {/* Sectors Supported */}
                <div>
                  <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                    Sectors We Support in London
                  </h2>
                  <p className="text-muted-foreground mb-6 font-light leading-relaxed">
                    We protect operations and compliance for:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { sector: "City offices & HQ buildings", link: "/sectors/offices-corporate" },
                      { sector: "Retail stores & shopping districts", link: "/sectors/retail-service-stations" },
                      { sector: "Service stations & roadside retail", link: "/sectors/retail-service-stations" },
                      { sector: "Industrial & logistics hubs", link: "/sectors/industrial-logistics" },
                      { sector: "Hospitality & leisure venues", link: "/sectors/hospitality-leisure" },
                      { sector: "Residential blocks & PBSA assets", link: "/sectors/residential-pbsa" }
                    ].map((item, index) => (
                      <Link key={index} to={item.link}>
                        <Card className="p-4 hover-lift group cursor-pointer">
                          <p className="text-sm font-light group-hover:text-primary transition-colors">
                            {item.sector}
                          </p>
                        </Card>
                      </Link>
                    ))}
                  </div>
                  <p className="mt-6 text-foreground font-medium">
                    Different challenges — same reliability.
                  </p>
                </div>

                {/* Case Studies */}
                <div>
                  <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                    London Projects Delivered
                  </h2>
                  <div className="space-y-6">
                    <Card className="p-6 hover-lift">
                      <h3 className="font-medium mb-2 text-lg">West End Retail Estate</h3>
                      <ul className="space-y-2 text-sm text-muted-foreground font-light">
                        <li className="flex items-start">
                          <span className="text-primary mr-2">✓</span>
                          HVAC optimisation = 19% energy saving
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">✓</span>
                          Fire system compliance recovery inside 45 days
                        </li>
                      </ul>
                    </Card>
                    <Card className="p-6 hover-lift">
                      <h3 className="font-medium mb-2 text-lg">Docklands Logistics Hub</h3>
                      <ul className="space-y-2 text-sm text-muted-foreground font-light">
                        <li className="flex items-start">
                          <span className="text-primary mr-2">✓</span>
                          Zero-downtime lighting upgrade
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">✓</span>
                          Dock and bay compliance maintained under peak season
                        </li>
                      </ul>
                    </Card>
                    <Card className="p-6 hover-lift">
                      <h3 className="font-medium mb-2 text-lg">Central HQ Tower</h3>
                      <ul className="space-y-2 text-sm text-muted-foreground font-light">
                        <li className="flex items-start">
                          <span className="text-primary mr-2">✓</span>
                          Reception-level aesthetic refresh
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">✓</span>
                          Asset uptime improved from 86% → 97%
                        </li>
                      </ul>
                    </Card>
                  </div>
                </div>

                {/* Why London Chooses */}
                <div>
                  <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                    Why London Chooses EntireFM
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    {[
                      { icon: Clock, text: "Night works & out-of-hours access" },
                      { icon: Zap, text: "Rapid response SLAs enforced" },
                      { icon: Shield, text: "Proven multi-site and high-rise capability" },
                      { icon: Shield, text: "Clean, uniformed engineers for public-facing environments" }
                    ].map((item, index) => (
                      <Card key={index} className="p-4">
                        <div className="flex items-start gap-3">
                          <item.icon className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                          <p className="text-sm font-light">{item.text}</p>
                        </div>
                      </Card>
                    ))}
                  </div>
                  <div className="bg-charcoal text-white p-6 rounded-lg">
                    <p className="font-medium text-lg mb-2">
                      Owner-led accountability — no corporate maze
                    </p>
                    <p className="font-light text-gray-300">
                      You call. We act. No layers. No delays.
                    </p>
                  </div>
                </div>

                {/* FAQ Section */}
                <FAQSection faqs={faqs} />

                {/* Quick Links */}
                <div className="bg-muted/30 p-8 rounded-lg">
                  <h2 className="text-2xl font-light mb-6">
                    Explore More
                  </h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    <Link to="/compliance-diagnostic" className="p-4 border border-border rounded-lg hover:border-primary transition-colors">
                      <p className="font-medium mb-1">Compliance Risk Check</p>
                      <p className="text-sm text-muted-foreground font-light">Score your FM provider in 90 seconds</p>
                    </Link>
                    <Link to="/why-switch" className="p-4 border border-border rounded-lg hover:border-primary transition-colors">
                      <p className="font-medium mb-1">Why Switch to Us</p>
                      <p className="text-sm text-muted-foreground font-light">See how we're different</p>
                    </Link>
                    <Link to="/about" className="p-4 border border-border rounded-lg hover:border-primary transition-colors">
                      <p className="font-medium mb-1">Trust & Accreditations</p>
                      <p className="text-sm text-muted-foreground font-light">Our safety & compliance credentials</p>
                    </Link>
                    <Link to="/resources" className="p-4 border border-border rounded-lg hover:border-primary transition-colors">
                      <p className="font-medium mb-1">Free Resources</p>
                      <p className="text-sm text-muted-foreground font-light">Guides, checklists & templates</p>
                    </Link>
                  </div>
                </div>

                {/* Final CTA */}
                <Card className="p-8 bg-charcoal text-white text-center">
                  <h2 className="text-3xl font-light mb-4">
                    Get FM that keeps pace with London.
                  </h2>
                  <p className="text-gray-300 mb-6 font-light text-lg">
                    Stop firefighting. Start performing.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild size="lg" variant="secondary">
                      <Link to="/contact">
                        Request FM Support in London
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-charcoal">
                      <a href="tel:+448001234567">
                        <Phone className="w-4 h-4 mr-2" />
                        Speak to a Specialist — Right Now
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

export default London;
