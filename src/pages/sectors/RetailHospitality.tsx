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

const RetailHospitality = () => {
  const { trackProposalRequest } = useConversionTracking();

  const challenges = [
    "Lost trading = lost revenue",
    "Compliance surprise → closure risk",
    "Comfort impacts customer spend",
    "CO₂ output within ESG reporting"
  ];

  const delivery = [
    "24/7 response",
    "Kitchen gas CP42 compliance",
    "HVAC comfort stabilisation",
    "Fire safety governance",
    "Guest/customer safety standards"
  ];

  return (
    <div className="min-h-screen pt-20">
      <Helmet>
        <title>Retail & Hospitality Facilities Management | Brand Protection</title>
        <meta name="description" content="Protect brand experience, safety and trading uptime. 24/7 FM response for retail and hospitality with zero disruption to operations." />
      </Helmet>

      <SchemaMarkup schema={{
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Retail & Hospitality Facilities Management",
        "description": "Facilities management protecting brand experience and trading uptime",
        "provider": {
          "@type": "Organization",
          "name": "Entire FM"
        }
      }} />

      <BreadcrumbSchema items={[
        { label: "Home", href: "/" },
        { label: "Sectors", href: "/sectors" },
        { label: "Retail & Hospitality", href: "/sectors/retail-hospitality" }
      ]} />

      <Breadcrumb 
        items={[
          { label: "Home", href: "/" },
          { label: "Sectors", href: "/sectors" },
          { label: "Retail & Hospitality" }
        ]}
      />

      {/* Hero */}
      <section className="py-24 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-light mb-6 underline-accent inline-block">
              Facilities Management for Retail & Hospitality
            </h1>
            <p className="text-xl text-muted-foreground font-light leading-relaxed mb-8">
              Protect brand experience, safety and trading uptime — no disruption, no closed doors.
            </p>
            <Button 
              size="lg" 
              onClick={() => trackProposalRequest('retail_hospitality_hero')}
              asChild
            >
              <Link to="/contact">Protect Retail Uptime</Link>
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
                      <p className="text-sm text-muted-foreground font-light">CP42 catering compliance</p>
                    </Card>
                  </Link>
                  <Link to="/services/hvac-compliance">
                    <Card className="p-6 hover-lift cursor-pointer h-full">
                      <h3 className="font-medium mb-2">HVAC Compliance</h3>
                      <p className="text-sm text-muted-foreground font-light">Comfort stabilisation</p>
                    </Card>
                  </Link>
                  <Link to="/services/fire-safety">
                    <Card className="p-6 hover-lift cursor-pointer h-full">
                      <h3 className="font-medium mb-2">Fire Safety</h3>
                      <p className="text-sm text-muted-foreground font-light">Customer safety assurance</p>
                    </Card>
                  </Link>
                </div>
              </div>

              {/* Case Studies */}
              <Card className="p-8 bg-muted/50">
                <h3 className="text-xl font-light mb-4">Case Studies</h3>
                <div className="space-y-4">
                  <p className="text-muted-foreground font-light">
                    <strong>Shopping centre:</strong> Emergency HVAC response prevented closure during peak trading weekend.
                  </p>
                  <p className="text-muted-foreground font-light">
                    <strong>Hotel estate:</strong> CP42 kitchen compliance delivered across 8 properties with zero guest disruption.
                  </p>
                </div>
                <Link to="/case-studies" className="text-primary hover:text-primary/80 transition-colors text-sm font-medium mt-4 inline-block">
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
            Protect Retail Uptime
          </h2>
          <p className="text-lg text-gray-300 font-light max-w-2xl mx-auto mb-8">
            Keep your doors open and your customers safe.
          </p>
          <Button 
            size="lg" 
            variant="secondary" 
            className="bg-white text-charcoal hover:bg-gray-100"
            onClick={() => trackProposalRequest('retail_hospitality_cta')}
            asChild
          >
            <Link to="/contact">Protect Retail Uptime</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default RetailHospitality;
