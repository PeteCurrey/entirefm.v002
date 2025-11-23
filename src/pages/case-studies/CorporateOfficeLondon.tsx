import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { SchemaMarkup } from "@/components/shared/SchemaMarkup";
import { useConversionTracking } from "@/hooks/useConversionTracking";
import { CheckCircle2, TrendingUp } from "lucide-react";

const CorporateOfficeLondon = () => {
  const { trackProposalRequest } = useConversionTracking();

  const kpis = [
    { label: "Fire compliance achieved", value: "100%" },
    { label: "Reactive callouts reduced", value: "34%" },
    { label: "Tenant satisfaction increase", value: "41%" },
    { label: "Energy consumption reduced", value: "18%" }
  ];

  const services = [
    { name: "Fire Safety", delivered: "BS 5839 testing, quarterly inspections" },
    { name: "Electrical", delivered: "EICR compliance, emergency lighting testing" },
    { name: "Water Hygiene", delivered: "ACOP L8 temperature monitoring" },
    { name: "HVAC", delivered: "TM44 audit, F-Gas compliance, BMS optimization" },
    { name: "PPM", delivered: "Integrated maintenance schedule across 12 buildings" }
  ];

  return (
    <div className="min-h-screen pt-20">
      <Helmet>
        <title>Case Study: Corporate Office Estate London | Entire FM</title>
        <meta name="description" content="How we delivered unified FM compliance across a 12-building corporate office estate in London, reducing reactive callouts by 34% and increasing tenant satisfaction by 41%." />
      </Helmet>

      <SchemaMarkup schema={{
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Corporate Office Estate London - FM Compliance Case Study",
        "description": "Unified facilities management compliance delivery across 12-building corporate estate"
      }} />

      <BreadcrumbSchema items={[
        { label: "Home", href: "/" },
        { label: "Case Studies", href: "/case-studies" },
        { label: "Corporate Office London", href: "/case-studies/corporate-office-london" }
      ]} />

      <Breadcrumb 
        items={[
          { label: "Home", href: "/" },
          { label: "Case Studies", href: "/case-studies" },
          { label: "Corporate Office London" }
        ]} 
      />

      {/* Hero */}
      <section className="py-16 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <Badge className="mb-4">Corporate Offices</Badge>
            <h1 className="text-4xl md:text-5xl font-light mb-6 underline-accent inline-block">
              Case Study: Corporate Office Estate — London
            </h1>
            <p className="text-xl text-muted-foreground font-light leading-relaxed">
              12-building mixed-use corporate estate requiring unified compliance delivery, digital helpdesk implementation, and tenant satisfaction improvement.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto space-y-12">
            {/* Challenge */}
            <Card className="p-8">
              <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                The Challenge
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                Multi-tenanted corporate estate with fragmented service delivery across multiple contractors. Compliance gaps identified during insurance audit. Tenant dissatisfaction with reactive response times and lack of visibility on maintenance activities.
              </p>
              <p className="text-muted-foreground font-light leading-relaxed">
                Estate management needed single point of contact, unified digital platform, and proactive maintenance approach to reduce business disruption and improve occupier experience.
              </p>
            </Card>

            {/* Our Response */}
            <Card className="p-8">
              <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                Our Response
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground font-light">60-day mobilisation with full compliance audit and remedial closure programme</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground font-light">Digital helpdesk with tenant liaison protocols and SLA tracking</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground font-light">Out-of-hours maintenance scheduling to minimize occupier disruption</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground font-light">CAFM platform integration with real-time compliance dashboards</span>
                </li>
              </ul>
            </Card>

            {/* KPIs */}
            <div>
              <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                KPIs & Measurables
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {kpis.map((kpi, index) => (
                  <Card key={index} className="p-6 border-l-4 border-l-primary">
                    <div className="flex items-center gap-3 mb-2">
                      <TrendingUp className="w-5 h-5 text-primary" />
                      <span className="text-3xl font-light">{kpi.value}</span>
                    </div>
                    <p className="text-sm text-muted-foreground font-light">{kpi.label}</p>
                  </Card>
                ))}
              </div>
            </div>

            {/* Testimonial */}
            <Card className="p-8 bg-muted/50">
              <h3 className="text-xl font-light mb-4">Client Testimonial</h3>
              <blockquote className="text-muted-foreground font-light italic leading-relaxed border-l-4 border-primary pl-6">
                "Entire FM delivered what our previous provider couldn't — unified compliance visibility, rapid response times, and a digital platform our tenants actually use. The transformation in 60 days was remarkable."
              </blockquote>
              <p className="text-sm text-muted-foreground mt-4">— Estate Director, London Corporate Portfolio</p>
            </Card>

            {/* Scope of Services */}
            <div>
              <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                Scope of Services
              </h2>
              <div className="space-y-4">
                {services.map((service, index) => (
                  <Card key={index} className="p-6">
                    <h3 className="font-medium mb-2">{service.name}</h3>
                    <p className="text-sm text-muted-foreground font-light">{service.delivered}</p>
                  </Card>
                ))}
              </div>
            </div>

            {/* Timeline */}
            <Card className="p-8">
              <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                Timeline & Delivery Method
              </h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <Badge variant="secondary">Day 1-30</Badge>
                  <p className="text-muted-foreground font-light">Mobilisation, compliance audit, remedial prioritization</p>
                </div>
                <div className="flex gap-4">
                  <Badge variant="secondary">Day 31-60</Badge>
                  <p className="text-muted-foreground font-light">Critical remedials completed, helpdesk launched, tenant onboarding</p>
                </div>
                <div className="flex gap-4">
                  <Badge variant="secondary">Month 3+</Badge>
                  <p className="text-muted-foreground font-light">Full PPM implementation, performance optimization, cost savings delivery</p>
                </div>
              </div>
            </Card>

            {/* Related Links */}
            <div>
              <h3 className="text-xl font-light mb-4">Related Services</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <Link to="/services/fire-safety">
                  <Card className="p-6 hover-lift cursor-pointer h-full">
                    <h4 className="font-medium mb-2">Fire Safety</h4>
                    <p className="text-sm text-muted-foreground font-light">BS 5839 compliance</p>
                  </Card>
                </Link>
                <Link to="/services/hvac-compliance">
                  <Card className="p-6 hover-lift cursor-pointer h-full">
                    <h4 className="font-medium mb-2">HVAC Compliance</h4>
                    <p className="text-sm text-muted-foreground font-light">TM44 & F-Gas governance</p>
                  </Card>
                </Link>
                <Link to="/services/ppm">
                  <Card className="p-6 hover-lift cursor-pointer h-full">
                    <h4 className="font-medium mb-2">PPM Programmes</h4>
                    <p className="text-sm text-muted-foreground font-light">Integrated maintenance</p>
                  </Card>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-charcoal text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6">
            Request Similar Results
          </h2>
          <p className="text-lg text-gray-300 font-light max-w-2xl mx-auto mb-8">
            Get a tailored proposal for your corporate estate.
          </p>
          <Button 
            size="lg" 
            variant="secondary" 
            className="bg-white text-charcoal hover:bg-gray-100"
            onClick={() => trackProposalRequest('case_study_corporate_office_london')}
            asChild
          >
            <Link to="/contact">Request Proposal</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default CorporateOfficeLondon;
