import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { SidebarCTA } from "@/components/shared/SidebarCTA";
import { SchemaMarkup } from "@/components/shared/SchemaMarkup";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { useConversionTracking } from "@/hooks/useConversionTracking";
import { CheckCircle2 } from "lucide-react";

const HotelsLeisure = () => {
  const { trackProposalRequest } = useConversionTracking();

  const challenges = [
    "HVAC & hot water comfort standards",
    "Kitchen gas safety (CP42)",
    "Fire compliance every guest relies on",
    "Brand reputation protection"
  ];

  const delivery = [
    "Ventilation IAQ performance",
    "Pool water safety (where applicable)",
    "Fire alarm & EL testing out of hours",
    "Proactive remedials"
  ];

  return (
    <div className="min-h-screen pt-20">
      <Helmet>
        <title>Hotels & Leisure Facilities Management | Guest Experience Protection</title>
        <meta name="description" content="Comfort, safety and uptime — guests never notice the work behind the luxury. Hotels and leisure FM with proactive maintenance." />
      </Helmet>

      <SchemaMarkup schema={{
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Hotels & Leisure Facilities Management",
        "description": "Facilities management for hotels and leisure protecting guest experience",
        "provider": {
          "@type": "Organization",
          "name": "Entire FM"
        }
      }} />

      <BreadcrumbSchema items={[
        { label: "Home", href: "/" },
        { label: "Sectors", href: "/sectors" },
        { label: "Hotels & Leisure", href: "/sectors/hotels-leisure" }
      ]} />

      <Breadcrumb 
        items={[
          { label: "Home", href: "/" },
          { label: "Sectors", href: "/sectors" },
          { label: "Hotels & Leisure" }
        ]}
      />

      {/* Hero */}
      <section className="py-24 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-light mb-6 underline-accent inline-block">
              Facilities Management for Hotels & Leisure
            </h1>
            <p className="text-xl text-muted-foreground font-light leading-relaxed mb-8">
              Comfort, safety and uptime — guests never notice the work behind the luxury.
            </p>
            <Button 
              size="lg" 
              onClick={() => trackProposalRequest('hotels_leisure_hero')}
              asChild
            >
              <Link to="/contact">Protect Guest Experience</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-12">
              {/* Challenges */}
              <Card className="p-8">
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Challenges
                </h2>
                <ul className="space-y-4">
                  {challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground font-light">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              {/* Delivery */}
              <Card className="p-8">
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Delivery
                </h2>
                <ul className="space-y-4">
                  {delivery.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground font-light">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              {/* Related Services */}
              <div>
                <h2 className="text-2xl font-light mb-6">Related Services</h2>
                <div className="grid md:grid-cols-3 gap-4">
                  <Link to="/services/gas-safety">
                    <Card className="p-6 hover-lift cursor-pointer h-full">
                      <h3 className="font-medium mb-2">Gas Safety</h3>
                      <p className="text-sm text-muted-foreground font-light">CP42 kitchen compliance</p>
                    </Card>
                  </Link>
                  <Link to="/services/hvac-compliance">
                    <Card className="p-6 hover-lift cursor-pointer h-full">
                      <h3 className="font-medium mb-2">HVAC & Comfort</h3>
                      <p className="text-sm text-muted-foreground font-light">IAQ performance</p>
                    </Card>
                  </Link>
                  <Link to="/services/fire-safety">
                    <Card className="p-6 hover-lift cursor-pointer h-full">
                      <h3 className="font-medium mb-2">Fire Safety</h3>
                      <p className="text-sm text-muted-foreground font-light">Guest protection</p>
                    </Card>
                  </Link>
                </div>
              </div>

              {/* Case Study */}
              <Card className="p-8 bg-muted/50">
                <h3 className="text-xl font-light mb-4">Case Study</h3>
                <p className="text-muted-foreground font-light mb-4">
                  <strong>City hotel:</strong> Boiler upgrade delivered out of hours — 17% fuel saving, zero guest disruption, payback in 14 months.
                </p>
                <Link to="/case-studies" className="text-primary hover:text-primary/80 transition-colors text-sm font-medium">
                  View All Case Studies →
                </Link>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="lg:sticky lg:top-24 lg:self-start">
              <SidebarCTA />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-charcoal text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6">
            Protect Guest Experience
          </h2>
          <p className="text-lg text-gray-300 font-light max-w-2xl mx-auto mb-8">
            Comfort and safety delivered behind the scenes.
          </p>
          <Button 
            size="lg" 
            variant="secondary" 
            className="bg-white text-charcoal hover:bg-gray-100"
            onClick={() => trackProposalRequest('hotels_leisure_cta')}
            asChild
          >
            <Link to="/contact">Protect Guest Experience</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default HotelsLeisure;
