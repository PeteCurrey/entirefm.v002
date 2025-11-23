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

const IndustrialWarehouseSheffield = () => {
  const { trackProposalRequest } = useConversionTracking();

  const kpis = [
    { label: "Production downtime eliminated", value: "100%" },
    { label: "Reactive callouts reduced", value: "47%" },
    { label: "Emergency response time", value: "41 mins" },
    { label: "Annual cost savings", value: "£47k" }
  ];

  const services = [
    { name: "Electrical", delivered: "HV/LV systems, emergency lighting for high-bay areas" },
    { name: "HVAC", delivered: "AHU performance, ventilation for temperature-controlled zones" },
    { name: "Fire Safety", delivered: "Sprinkler systems, smoke detection, emergency evacuation" },
    { name: "Water Hygiene", delivered: "ACOP L8 compliance in warm plant environments" },
    { name: "PPM", delivered: "Critical spares strategy, predictive maintenance" }
  ];

  return (
    <div className="min-h-screen pt-20">
      <Helmet>
        <title>Case Study: Industrial Warehouse Sheffield | Entire FM</title>
        <meta name="description" content="How we eliminated production downtime for Sheffield industrial warehouse through predictive maintenance and 41-minute emergency response times." />
      </Helmet>

      <SchemaMarkup schema={{
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Industrial Warehouse Sheffield - FM Case Study",
        "description": "Zero-downtime facilities management for industrial operations"
      }} />

      <BreadcrumbSchema items={[
        { label: "Home", href: "/" },
        { label: "Case Studies", href: "/case-studies" },
        { label: "Industrial Warehouse Sheffield", href: "/case-studies/industrial-warehouse-sheffield" }
      ]} />

      <Breadcrumb 
        items={[
          { label: "Home", href: "/" },
          { label: "Case Studies", href: "/case-studies" },
          { label: "Industrial Warehouse Sheffield" }
        ]} 
      />

      <section className="py-16 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <Badge className="mb-4">Industrial & Logistics</Badge>
            <h1 className="text-4xl md:text-5xl font-light mb-6 underline-accent inline-block">
              Case Study: Industrial Warehouse — Sheffield
            </h1>
            <p className="text-xl text-muted-foreground font-light leading-relaxed">
              24/7 manufacturing facility requiring zero-tolerance downtime approach, critical infrastructure reliability, and predictive maintenance strategy.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto space-y-12">
            <Card className="p-8">
              <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                The Challenge
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                Production-critical facility experiencing frequent electrical and HVAC failures impacting manufacturing output. Previous reactive maintenance approach resulted in prolonged downtime and lost productivity. Insurance audit identified emergency lighting and fire system compliance gaps.
              </p>
              <p className="text-muted-foreground font-light leading-relaxed">
                Operations director needed guaranteed response times, predictive maintenance approach, and critical spares strategy to eliminate production disruption and maintain 24/7 operational continuity.
              </p>
            </Card>

            <Card className="p-8">
              <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                Our Response
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground font-light">Rapid response network with 41-minute average attendance time</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground font-light">Critical spares holding for production-critical assets</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground font-light">Predictive maintenance using thermal imaging and vibration analysis</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground font-light">Planned works scheduled around production cycles</span>
                </li>
              </ul>
            </Card>

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

            <Card className="p-8 bg-muted/50">
              <h3 className="text-xl font-light mb-4">Client Testimonial</h3>
              <blockquote className="text-muted-foreground font-light italic leading-relaxed border-l-4 border-primary pl-6">
                "Production downtime has become a non-issue since Entire FM took over. The predictive maintenance approach means failures are caught before they impact operations. The cost savings are significant, but the operational continuity is priceless."
              </blockquote>
              <p className="text-sm text-muted-foreground mt-4">— Operations Director, Sheffield Manufacturing Facility</p>
            </Card>

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

            <Card className="p-8">
              <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                Timeline & Delivery Method
              </h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <Badge variant="secondary">Week 1-2</Badge>
                  <p className="text-muted-foreground font-light">Critical asset audit, emergency response protocols established</p>
                </div>
                <div className="flex gap-4">
                  <Badge variant="secondary">Week 3-6</Badge>
                  <p className="text-muted-foreground font-light">Critical spares stocked, thermal imaging programme launched</p>
                </div>
                <div className="flex gap-4">
                  <Badge variant="secondary">Month 2+</Badge>
                  <p className="text-muted-foreground font-light">Predictive maintenance delivered, zero production disruption achieved</p>
                </div>
              </div>
            </Card>

            <div>
              <h3 className="text-xl font-light mb-4">Related Services</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <Link to="/services/electrical-compliance">
                  <Card className="p-6 hover-lift cursor-pointer h-full">
                    <h4 className="font-medium mb-2">Electrical Safety</h4>
                    <p className="text-sm text-muted-foreground font-light">HV/LV systems</p>
                  </Card>
                </Link>
                <Link to="/services/hvac-compliance">
                  <Card className="p-6 hover-lift cursor-pointer h-full">
                    <h4 className="font-medium mb-2">HVAC Performance</h4>
                    <p className="text-sm text-muted-foreground font-light">AHU optimization</p>
                  </Card>
                </Link>
                <Link to="/services/ppm">
                  <Card className="p-6 hover-lift cursor-pointer h-full">
                    <h4 className="font-medium mb-2">Predictive PPM</h4>
                    <p className="text-sm text-muted-foreground font-light">Zero downtime</p>
                  </Card>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-charcoal text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6">
            Request Similar Results
          </h2>
          <p className="text-lg text-gray-300 font-light max-w-2xl mx-auto mb-8">
            Eliminate production downtime with predictive maintenance.
          </p>
          <Button 
            size="lg" 
            variant="secondary" 
            className="bg-white text-charcoal hover:bg-gray-100"
            onClick={() => trackProposalRequest('case_study_industrial_sheffield')}
            asChild
          >
            <Link to="/contact">Request Proposal</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default IndustrialWarehouseSheffield;
