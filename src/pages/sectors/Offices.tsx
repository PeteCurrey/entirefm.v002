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
import { DynamicYouMayAlsoNeed } from "@/components/shared/DynamicYouMayAlsoNeed";

const Offices = () => {
  const { trackProposalRequest } = useConversionTracking();

  const challenges = [
    "Occupant comfort complaints",
    "HVAC failures disrupting productivity",
    "Fire & electrical governance scrutiny",
    "ESG + EPC uplift pressure",
    "Stakeholder visibility on compliance"
  ];

  const delivery = [
    "Statutory compliance (Fire, Elec, HVAC, Gas, Water)",
    "Asset lifecycle PPM",
    "Optimised BMS control",
    "Smart work order management",
    "Rapid remedials & uptime protection"
  ];

  return (
    <div className="min-h-screen pt-20">
      <Helmet>
        <title>Corporate Office Facilities Management | Compliance & Productivity</title>
        <meta name="description" content="Compliance-driven FM protecting productivity, reputation and operational continuity for corporate workplaces. Fire, electrical, HVAC, gas and water compliance." />
      </Helmet>

      <SchemaMarkup schema={{
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Corporate Office Facilities Management",
        "description": "Compliance-driven facilities management for corporate workplaces",
        "provider": {
          "@type": "Organization",
          "name": "Entire FM"
        }
      }} />

      <BreadcrumbSchema items={[
        { label: "Home", href: "/" },
        { label: "Sectors", href: "/sectors" },
        { label: "Corporate Offices", href: "/sectors/offices" }
      ]} />

      <Breadcrumb 
        items={[
          { label: "Home", href: "/" },
          { label: "Sectors", href: "/sectors" },
          { label: "Corporate Offices" }
        ]}
      />

      {/* Hero */}
      <section className="py-24 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-light mb-6 underline-accent inline-block">
              Facilities Management for Corporate Workplaces
            </h1>
            <p className="text-xl text-muted-foreground font-light leading-relaxed mb-8">
              Compliance-driven FM that protects productivity, reputation and operational continuity for the corporate environment.
            </p>
            <Button 
              size="lg" 
              onClick={() => trackProposalRequest('offices_hero')}
              asChild
            >
              <Link to="/contact">Request Office Compliance Audit</Link>
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
                  Challenges We Solve
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

              {/* Our Delivery */}
              <Card className="p-8">
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Our Delivery
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
                      <p className="text-sm text-muted-foreground font-light">BS 5839 compliance & testing</p>
                    </Card>
                  </Link>
                  <Link to="/services/hvac-compliance">
                    <Card className="p-6 hover-lift cursor-pointer h-full">
                      <h3 className="font-medium mb-2">HVAC Compliance</h3>
                      <p className="text-sm text-muted-foreground font-light">TM44 & F-Gas governance</p>
                    </Card>
                  </Link>
                  <Link to="/services/ppm">
                    <Card className="p-6 hover-lift cursor-pointer h-full">
                      <h3 className="font-medium mb-2">PPM Programmes</h3>
                      <p className="text-sm text-muted-foreground font-light">Asset lifecycle management</p>
                    </Card>
                  </Link>
                </div>
              </div>

              {/* Critical Infrastructure - You May Also Need */}
              <div>
                <h2 className="text-2xl font-light mb-6 underline-accent inline-block">You May Also Need</h2>
                <div className="grid md:grid-cols-3 gap-4">
                  <Link to="/services/critical/ups-maintenance">
                    <Card className="p-6 hover-lift cursor-pointer h-full">
                      <h3 className="font-medium mb-2">UPS Maintenance</h3>
                      <p className="text-sm text-muted-foreground font-light">Critical power continuity for office systems</p>
                    </Card>
                  </Link>
                  <Link to="/services/critical/lightning-protection">
                    <Card className="p-6 hover-lift cursor-pointer h-full">
                      <h3 className="font-medium mb-2">Lightning Protection</h3>
                      <p className="text-sm text-muted-foreground font-light">BS EN 62305 testing & earthing systems</p>
                    </Card>
                  </Link>
                  <Link to="/services/critical/thermal-imaging">
                    <Card className="p-6 hover-lift cursor-pointer h-full">
                      <h3 className="font-medium mb-2">Thermal Imaging</h3>
                      <p className="text-sm text-muted-foreground font-light">Predictive electrical & building diagnostics</p>
                    </Card>
                  </Link>
                  <Link to="/services/critical/generator-maintenance">
                    <Card className="p-6 hover-lift cursor-pointer h-full">
                      <h3 className="font-medium mb-2">Generator Maintenance</h3>
                      <p className="text-sm text-muted-foreground font-light">Emergency power resilience testing</p>
                    </Card>
                  </Link>
                </div>
              </div>

              {/* Case Study Placeholder */}
              <Card className="p-8 bg-muted/50">
                <h3 className="text-xl font-light mb-4">Case Study</h3>
                <p className="text-muted-foreground font-light mb-4">
                  12-building corporate estate – unified compliance delivery, digital governance platform, and 34% improvement in tenant satisfaction scores.
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

      <DynamicYouMayAlsoNeed pageType="sector" currentPageUrl="/sectors/offices" />

      {/* Final CTA */}
      <section className="py-16 bg-charcoal text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6">
            Book Workplace Audit
          </h2>
          <p className="text-lg text-gray-300 font-light max-w-2xl mx-auto mb-8">
            Protect productivity and compliance across your corporate estate.
          </p>
          <Button 
            size="lg" 
            variant="secondary" 
            className="bg-white text-charcoal hover:bg-gray-100"
            onClick={() => trackProposalRequest('offices_cta')}
            asChild
          >
            <Link to="/contact">Request Office Compliance Audit</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Offices;
