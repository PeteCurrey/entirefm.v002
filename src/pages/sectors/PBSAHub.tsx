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

const PBSAHub = () => {
  const { trackProposalRequest } = useConversionTracking();

  const challenges = [
    "High occupant turnover",
    "Fire evacuation safety",
    "Legionella temperature control",
    "Comfort expectations + rising complaints"
  ];

  const delivery = [
    "Compliance-focused PPM",
    "Rapid remedials & safety prioritisation",
    "IAQ monitoring & ventilation assurance"
  ];

  return (
    <div className="min-h-screen pt-20">
      <Helmet>
        <title>PBSA Facilities Management | Student Accommodation Compliance</title>
        <meta name="description" content="High-density estates demand strict governance — we keep them compliant and incident-free. PBSA facilities management with rapid response." />
      </Helmet>

      <SchemaMarkup schema={{
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "PBSA Facilities Management",
        "description": "Facilities management for purpose-built student accommodation",
        "provider": {
          "@type": "Organization",
          "name": "Entire FM"
        }
      }} />

      <BreadcrumbSchema items={[
        { label: "Home", href: "/" },
        { label: "Sectors", href: "/sectors" },
        { label: "PBSA", href: "/sectors/pbsa" }
      ]} />

      <Breadcrumb 
        items={[
          { label: "Home", href: "/" },
          { label: "Sectors", href: "/sectors" },
          { label: "PBSA" }
        ]}
      />

      {/* Hero */}
      <section className="py-24 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-light mb-6 underline-accent inline-block">
              PBSA Facilities Management
            </h1>
            <p className="text-xl text-muted-foreground font-light leading-relaxed mb-8">
              High-density estates demand strict governance — we keep them compliant and incident-free.
            </p>
            <Button 
              size="lg" 
              onClick={() => trackProposalRequest('pbsa_hero')}
              asChild
            >
              <Link to="/contact">Request PBSA Compliance Audit</Link>
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
                  <Link to="/services/fire-safety">
                    <Card className="p-6 hover-lift cursor-pointer h-full">
                      <h3 className="font-medium mb-2">Fire Safety</h3>
                      <p className="text-sm text-muted-foreground font-light">Evacuation assurance</p>
                    </Card>
                  </Link>
                  <Link to="/services/water-hygiene">
                    <Card className="p-6 hover-lift cursor-pointer h-full">
                      <h3 className="font-medium mb-2">Water Hygiene</h3>
                      <p className="text-sm text-muted-foreground font-light">Temperature control</p>
                    </Card>
                  </Link>
                  <Link to="/services/hvac-compliance">
                    <Card className="p-6 hover-lift cursor-pointer h-full">
                      <h3 className="font-medium mb-2">Ventilation</h3>
                      <p className="text-sm text-muted-foreground font-light">IAQ monitoring</p>
                    </Card>
                  </Link>
                </div>
              </div>

              {/* Case Study */}
              <Card className="p-8 bg-muted/50">
                <h3 className="text-xl font-light mb-4">Case Study</h3>
                <p className="text-muted-foreground font-light mb-4">
                  <strong>30+ building PBSA estate:</strong> Compliance restored in 3 weeks. Fire risk eliminated. Water hygiene regime implemented. Zero student disruption.
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
            Request PBSA Compliance Audit
          </h2>
          <p className="text-lg text-gray-300 font-light max-w-2xl mx-auto mb-8">
            High-density estates protected with zero incidents.
          </p>
          <Button 
            size="lg" 
            variant="secondary" 
            className="bg-white text-charcoal hover:bg-gray-100"
            onClick={() => trackProposalRequest('pbsa_cta')}
            asChild
          >
            <Link to="/contact">Request PBSA Compliance Audit</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default PBSAHub;
