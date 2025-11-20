import { Helmet } from "react-helmet";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { SidebarCTA } from "@/components/shared/SidebarCTA";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { LocalBusinessSchema } from "@/components/shared/SchemaMarkup";
import { Building2, CheckCircle2 } from "lucide-react";

const London = () => {
  return (
    <>
      <Helmet>
        <title>Facilities Management London | Commercial FM & M&E Contractors | EntireFM</title>
        <meta 
          name="description" 
          content="Professional facilities management services across London. Hard & soft FM, M&E maintenance, compliance, and 24/7 support for commercial properties in Greater London."
        />
      </Helmet>

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
        <div className="container mx-auto px-6 py-8">
          <Breadcrumb items={[
            { label: "Locations" },
            { label: "London" }
          ]} />

          <div className="grid lg:grid-cols-3 gap-12 mt-8">
            <div className="lg:col-span-2 space-y-12">
              <header>
                <h1 className="text-4xl md:text-5xl font-light mb-4 underline-accent inline-block">
                  Facilities Management Services Across London
                </h1>
                <p className="text-xl text-muted-foreground font-light leading-relaxed">
                  Integrated FM, M&E maintenance, compliance, and 24/7 support for commercial properties across Greater London and the M25 corridor.
                </p>
              </header>

              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  London FM Services
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    "Hard services & M&E maintenance",
                    "HVAC servicing & air conditioning",
                    "Electrical compliance & testing",
                    "Fire alarm systems & life safety",
                    "Emergency lighting testing",
                    "Plumbing & gas safety",
                    "Water hygiene (Legionella L8)",
                    "Soft services & cleaning",
                    "24/7 emergency response",
                    "PPM programs",
                    "Building fabric maintenance",
                    "Project works & fit-outs"
                  ].map((service, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                      <span className="font-light">{service}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section className="bg-muted/30 p-8 rounded-lg">
                <h2 className="text-2xl font-light mb-6">
                  London Property Types We Support
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Office buildings & corporate HQs",
                    "Industrial estates & logistics hubs",
                    "Retail units & shopping centers",
                    "Residential blocks & PBSA",
                    "Hotels & hospitality venues",
                    "Aviation facilities (Heathrow, Gatwick, City)",
                    "Healthcare & education",
                    "Mixed-use developments"
                  ].map((type, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Building2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                      <span className="font-light">{type}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  London Case Study
                </h2>
                <Card className="p-6">
                  <div className="mb-4">
                    <span className="text-sm font-medium text-accent">Mixed-Use Estate – Central London</span>
                  </div>
                  <h3 className="text-xl font-medium mb-4">
                    12-Building Portfolio: Single FM Partner Delivers 34% Tenant Satisfaction Increase
                  </h3>
                  <div className="space-y-4 text-sm font-light text-muted-foreground">
                    <p>
                      <strong>Challenge:</strong> Multi-let office estate with fragmented contractor base, slow response times, and inconsistent service quality across buildings.
                    </p>
                    <p>
                      <strong>Solution:</strong> Integrated FM contract covering hard services, soft services, compliance, and projects. Single helpdesk, digital portal, and dedicated account management.
                    </p>
                    <p>
                      <strong>Results:</strong> Response time reduced to 41 minutes average, tenant satisfaction up 34%, reactive spend down 28%, zero compliance breaches in 18 months.
                    </p>
                  </div>
                </Card>
              </section>

              <section className="border-t border-border pt-12">
                <div className="text-center">
                  <h2 className="text-3xl font-light mb-4">
                    Speak to a Local FM Specialist
                  </h2>
                  <p className="text-lg text-muted-foreground font-light mb-8 max-w-2xl mx-auto">
                    Tell us about your London property and current FM challenges. We'll provide a tailored proposal with SLAs, pricing, and mobilisation plan.
                  </p>
                  <Button size="lg" asChild>
                    <Link to="/contact">Request London FM Proposal</Link>
                  </Button>
                </div>
              </section>
            </div>

            <aside className="lg:col-span-1">
              <div className="sticky top-24">
                <SidebarCTA />
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
};

export default London;
