"use client";

;
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { SchemaMarkup } from "@/components/shared/SchemaMarkup";
import { useConversionTracking } from "@/hooks/useConversionTracking";
import { CheckCircle2, TrendingUp } from "lucide-react";

const RetailComplexBirmingham = () => {
  const { trackProposalRequest } = useConversionTracking();

  const kpis = [
    { label: "Trading hours lost to breakdowns", value: "Zero" },
    { label: "Emergency HVAC response time", value: "< 2hrs" },
    { label: "Customer complaints reduced", value: "68%" },
    { label: "Fire compliance maintained", value: "100%" }
  ];

  const services = [
    { name: "HVAC", delivered: "24/7 emergency response, comfort stabilization, F-Gas compliance" },
    { name: "Fire Safety", delivered: "Out-of-hours testing, BS 5839 certification" },
    { name: "Electrical", delivered: "Emergency lighting, EICR, LED retrofit programme" },
    { name: "Gas Safety", delivered: "CP42 kitchen compliance for food court tenants" },
    { name: "PPM", delivered: "Preventative maintenance scheduled around trading hours" }
  ];

  return (
    <div className="min-h-screen pt-20">
      

      <SchemaMarkup schema={{
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Retail Complex Birmingham - FM Case Study",
        "description": "24/7 facilities management protecting retail trading uptime"
      }} />

      <BreadcrumbSchema items={[
        { label: "Home", href: "/" },
        { label: "Case Studies", href: "/case-studies" },
        { label: "Retail Complex Birmingham", href: "/case-studies/retail-complex-birmingham" }
      ]} />

      <Breadcrumb 
        items={[
          { label: "Home", href: "/" },
          { label: "Case Studies", href: "/case-studies" },
          { label: "Retail Complex Birmingham" }
        ]} 
      />

      {/* Hero */}
      <section className="py-16 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <Badge className="mb-4">Retail & Service Stations</Badge>
            <h1 className="text-4xl md:text-5xl font-light mb-6 underline-accent inline-block">
              Case Study: Retail Complex — Birmingham
            </h1>
            <p className="text-xl text-muted-foreground font-light leading-relaxed">
              Multi-tenanted shopping complex requiring zero-downtime HVAC management, food court gas safety compliance, and brand-compliant service delivery.
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
                HVAC failures during peak trading periods causing tenant complaints and customer dissatisfaction. Previous reactive-only approach resulted in prolonged downtime and lost revenue. Food court required CP42 gas compliance across multiple kitchens with different operators.
              </p>
              <p className="text-muted-foreground font-light leading-relaxed">
                Shopping centre management needed guaranteed response times, preventative maintenance approach, and coordination with tenant operations to minimize customer-facing disruption.
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
                  <span className="text-muted-foreground font-light">24/7 emergency HVAC response with &lt;2 hour guaranteed attendance</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground font-light">Night-works programme for fire alarm and emergency lighting testing</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground font-light">CP42 gas compliance delivered across all food court kitchens</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground font-light">Preventative HVAC maintenance scheduled outside trading hours</span>
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
                "Since Entire FM took over, we haven't lost a single trading hour to mechanical failure. The 24/7 response guarantee gives us complete peace of mind during peak shopping periods."
              </blockquote>
              <p className="text-sm text-muted-foreground mt-4">— Centre Manager, Birmingham Retail Complex</p>
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
                  <Badge variant="secondary">Week 1-2</Badge>
                  <p className="text-muted-foreground font-light">Emergency response protocols established, HVAC system audit</p>
                </div>
                <div className="flex gap-4">
                  <Badge variant="secondary">Week 3-4</Badge>
                  <p className="text-muted-foreground font-light">Critical spares stocked, night-works programme launched</p>
                </div>
                <div className="flex gap-4">
                  <Badge variant="secondary">Month 2+</Badge>
                  <p className="text-muted-foreground font-light">Full preventative maintenance, zero customer-facing disruption achieved</p>
                </div>
              </div>
            </Card>

            {/* Related Links */}
            <div>
              <h3 className="text-xl font-light mb-4">Related Services</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <Link href="/services/hvac-compliance">
                  <Card className="p-6 hover-lift cursor-pointer h-full">
                    <h4 className="font-medium mb-2">HVAC Emergency Response</h4>
                    <p className="text-sm text-muted-foreground font-light">24/7 rapid callout</p>
                  </Card>
                </Link>
                <Link href="/services/gas-safety">
                  <Card className="p-6 hover-lift cursor-pointer h-full">
                    <h4 className="font-medium mb-2">Gas Safety</h4>
                    <p className="text-sm text-muted-foreground font-light">CP42 kitchen compliance</p>
                  </Card>
                </Link>
                <Link href="/services/fire-safety">
                  <Card className="p-6 hover-lift cursor-pointer h-full">
                    <h4 className="font-medium mb-2">Fire Safety</h4>
                    <p className="text-sm text-muted-foreground font-light">Out-of-hours testing</p>
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
            Protect your retail uptime with guaranteed response times.
          </p>
          <Button 
            size="lg" 
            variant="secondary" 
            className="bg-white text-charcoal hover:bg-gray-100"
            onClick={() => trackProposalRequest('case_study_retail_birmingham')}
            asChild
          >
            <Link href="/contact">Request Proposal</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default RetailComplexBirmingham;
