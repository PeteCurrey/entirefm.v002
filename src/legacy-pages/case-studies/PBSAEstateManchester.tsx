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

const PBSAEstateManchester = () => {
  const { trackProposalRequest } = useConversionTracking();

  const kpis = [
    { label: "Buildings brought into compliance", value: "30+" },
    { label: "Compliance delivery timeline", value: "3 weeks" },
    { label: "Fire risk eliminated", value: "100%" },
    { label: "Student disruption incidents", value: "Zero" }
  ];

  const services = [
    { name: "Fire Safety", delivered: "BS 5839 testing, fire door inspections, evacuation protocols" },
    { name: "Emergency Lighting", delivered: "BS 5266 compliance, quarterly testing" },
    { name: "Water Hygiene", delivered: "ACOP L8 temperature monitoring, TMV testing" },
    { name: "Electrical", delivered: "EICR compliance, PAT testing, remedial works" },
    { name: "PPM", delivered: "Rapid remedial response, student-friendly protocols" }
  ];

  return (
    <div className="min-h-screen pt-20">
      

      <SchemaMarkup schema={{
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "PBSA Estate Manchester - FM Case Study",
        "description": "Rapid compliance delivery for purpose-built student accommodation"
      }} />

      <BreadcrumbSchema items={[
        { label: "Home", href: "/" },
        { label: "Case Studies", href: "/case-studies" },
        { label: "PBSA Estate Manchester", href: "/case-studies/pbsa-estate-manchester" }
      ]} />

      <Breadcrumb 
        items={[
          { label: "Home", href: "/" },
          { label: "Case Studies", href: "/case-studies" },
          { label: "PBSA Estate Manchester" }
        ]} 
      />

      <section className="py-16 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <Badge className="mb-4">PBSA</Badge>
            <h1 className="text-4xl md:text-5xl font-light mb-6 underline-accent inline-block">
              Case Study: PBSA Estate — Manchester
            </h1>
            <p className="text-xl text-muted-foreground font-light leading-relaxed">
              30+ building student accommodation portfolio requiring rapid compliance mobilization, fire safety assurance, and water hygiene regime implementation.
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
                High-density student accommodation with fragmented compliance records and outstanding fire safety remedials. Previous provider failed to implement water hygiene regime resulting in legionella risk. Insurance renewal threatened due to compliance gaps.
              </p>
              <p className="text-muted-foreground font-light leading-relaxed">
                Portfolio operator needed rapid mobilization, complete compliance audit, remedial closure programme, and ongoing maintenance approach that minimized student disruption during term time.
              </p>
            </Card>

            <Card className="p-8">
              <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                Our Response
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground font-light">3-week emergency mobilization with full compliance audit across all 30 buildings</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground font-light">Critical fire safety remedials prioritized and closed within 10 days</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground font-light">Water hygiene regime implemented with temperature monitoring across estate</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground font-light">Student-friendly service protocols with clear communication channels</span>
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
                "Entire FM mobilized faster than any provider we've worked with. Within 3 weeks, every building was compliant, the water hygiene risk was eliminated, and our insurance renewal was secured. The students didn't even notice the work happening."
              </blockquote>
              <p className="text-sm text-muted-foreground mt-4">— Portfolio Director, Manchester PBSA Operator</p>
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
                  <Badge variant="secondary">Week 1</Badge>
                  <p className="text-muted-foreground font-light">Emergency mobilization, compliance audit, critical remedials identified</p>
                </div>
                <div className="flex gap-4">
                  <Badge variant="secondary">Week 2</Badge>
                  <p className="text-muted-foreground font-light">Fire safety remedials completed, water hygiene regime launched</p>
                </div>
                <div className="flex gap-4">
                  <Badge variant="secondary">Week 3+</Badge>
                  <p className="text-muted-foreground font-light">Full compliance achieved, ongoing PPM implemented, zero disruption maintained</p>
                </div>
              </div>
            </Card>

            <div>
              <h3 className="text-xl font-light mb-4">Related Services</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <Link href="/services/fire-safety">
                  <Card className="p-6 hover-lift cursor-pointer h-full">
                    <h4 className="font-medium mb-2">Fire Safety</h4>
                    <p className="text-sm text-muted-foreground font-light">Evacuation assurance</p>
                  </Card>
                </Link>
                <Link href="/services/water-hygiene">
                  <Card className="p-6 hover-lift cursor-pointer h-full">
                    <h4 className="font-medium mb-2">Water Hygiene</h4>
                    <p className="text-sm text-muted-foreground font-light">ACOP L8 compliance</p>
                  </Card>
                </Link>
                <Link href="/services/emergency-lighting">
                  <Card className="p-6 hover-lift cursor-pointer h-full">
                    <h4 className="font-medium mb-2">Emergency Lighting</h4>
                    <p className="text-sm text-muted-foreground font-light">BS 5266 testing</p>
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
            Rapid compliance delivery for your PBSA portfolio.
          </p>
          <Button 
            size="lg" 
            variant="secondary" 
            className="bg-white text-charcoal hover:bg-gray-100"
            onClick={() => trackProposalRequest('case_study_pbsa_manchester')}
            asChild
          >
            <Link href="/contact">Request Proposal</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default PBSAEstateManchester;
