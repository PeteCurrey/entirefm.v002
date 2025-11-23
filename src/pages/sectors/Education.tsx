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

const Education = () => {
  const { trackProposalRequest } = useConversionTracking();

  const challenges = [
    "Aged plant infrastructure",
    "Large campus-scale risk profiles",
    "Water hygiene and lab environments",
    "Insurer scrutiny"
  ];

  const delivery = [
    "Asset lifecycle governance",
    "Fire compartmentation + evacuation safety",
    "Digital compliance dashboard for estates teams"
  ];

  return (
    <div className="min-h-screen pt-20">
      <Helmet>
        <title>Universities & Education Facilities Management | Campus Compliance</title>
        <meta name="description" content="Safe learning environments — full compliance across complex, multi-building estates. University and education FM with digital governance." />
      </Helmet>

      <SchemaMarkup schema={{
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Universities & Education Facilities Management",
        "description": "Facilities management for universities and education with campus-wide compliance",
        "provider": {
          "@type": "Organization",
          "name": "Entire FM"
        }
      }} />

      <BreadcrumbSchema items={[
        { label: "Home", href: "/" },
        { label: "Sectors", href: "/sectors" },
        { label: "Education", href: "/sectors/education" }
      ]} />

      <Breadcrumb 
        items={[
          { label: "Home", href: "/" },
          { label: "Sectors", href: "/sectors" },
          { label: "Education" }
        ]}
      />

      {/* Hero */}
      <section className="py-24 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-light mb-6 underline-accent inline-block">
              Facilities Management for Universities & Education
            </h1>
            <p className="text-xl text-muted-foreground font-light leading-relaxed mb-8">
              Safe learning environments — full compliance across complex, multi-building estates.
            </p>
            <Button 
              size="lg" 
              onClick={() => trackProposalRequest('education_hero')}
              asChild
            >
              <Link to="/contact">Build Campus PPM Plan</Link>
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
                  <Link to="/services/ppm">
                    <Card className="p-6 hover-lift cursor-pointer h-full">
                      <h3 className="font-medium mb-2">PPM Programmes</h3>
                      <p className="text-sm text-muted-foreground font-light">Campus-wide governance</p>
                    </Card>
                  </Link>
                  <Link to="/services/fire-safety">
                    <Card className="p-6 hover-lift cursor-pointer h-full">
                      <h3 className="font-medium mb-2">Fire Safety</h3>
                      <p className="text-sm text-muted-foreground font-light">Compartmentation assurance</p>
                    </Card>
                  </Link>
                  <Link to="/services/water-hygiene">
                    <Card className="p-6 hover-lift cursor-pointer h-full">
                      <h3 className="font-medium mb-2">Water Hygiene</h3>
                      <p className="text-sm text-muted-foreground font-light">Lab environments</p>
                    </Card>
                  </Link>
                </div>
              </div>

              {/* Case Study */}
              <Card className="p-8 bg-muted/50">
                <h3 className="text-xl font-light mb-4">Case Study</h3>
                <p className="text-muted-foreground font-light mb-4">
                  <strong>Teaching block ventilation upgrade:</strong> IAQ improved by 64%. Student comfort complaints eliminated. Works completed during summer break.
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
            Build Campus PPM Plan
          </h2>
          <p className="text-lg text-gray-300 font-light max-w-2xl mx-auto mb-8">
            Safe learning environments with full estate compliance.
          </p>
          <Button 
            size="lg" 
            variant="secondary" 
            className="bg-white text-charcoal hover:bg-gray-100"
            onClick={() => trackProposalRequest('education_cta')}
            asChild
          >
            <Link to="/contact">Build Campus PPM Plan</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Education;
