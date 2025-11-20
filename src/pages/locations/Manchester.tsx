import { Helmet } from "react-helmet";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { SidebarCTA } from "@/components/shared/SidebarCTA";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { LocalBusinessSchema } from "@/components/shared/SchemaMarkup";
import { CheckCircle2 } from "lucide-react";

const Manchester = () => {
  return (
    <>
      <Helmet>
        <title>Facilities Management Manchester | M&E Contractors & Commercial FM | EntireFM</title>
        <meta 
          name="description" 
          content="Professional FM services across Manchester and the North West. M&E maintenance, compliance, and 24/7 support for commercial and industrial properties."
        />
      </Helmet>

      <LocalBusinessSchema 
        name="EntireFM Manchester"
        address={{
          street: "Placeholder Street",
          city: "Manchester",
          postalCode: "M1 1AA",
          country: "United Kingdom"
        }}
      />

      <div className="min-h-screen pt-20">
        <div className="container mx-auto px-6 py-8">
          <Breadcrumb items={[
            { label: "Locations" },
            { label: "Manchester" }
          ]} />

          <div className="grid lg:grid-cols-3 gap-12 mt-8">
            <div className="lg:col-span-2 space-y-12">
              <header>
                <h1 className="text-4xl md:text-5xl font-light mb-4 underline-accent inline-block">
                  Facilities Management Services in Manchester & North West
                </h1>
                <p className="text-xl text-muted-foreground font-light leading-relaxed">
                  Comprehensive FM, M&E, and compliance services across Manchester, Salford, Trafford Park, and the wider North West region.
                </p>
              </header>

              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Manchester FM Coverage
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    "Hard services & M&E maintenance",
                    "HVAC & air conditioning",
                    "Electrical installations & testing",
                    "Fire safety systems",
                    "Emergency lighting",
                    "PPM schedules",
                    "Water hygiene & L8 compliance",
                    "Soft services & workplace",
                    "24/7 emergency support",
                    "Compliance management",
                    "Building fabric",
                    "Industrial maintenance"
                  ].map((service, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                      <span className="font-light">{service}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section className="bg-charcoal text-white p-8 rounded-lg">
                <h2 className="text-2xl font-light mb-6">
                  North West Sectors We Serve
                </h2>
                <div className="grid grid-cols-2 gap-4 text-sm font-light">
                  <div>• Offices & corporate</div>
                  <div>• Industrial & logistics</div>
                  <div>• Retail & leisure</div>
                  <div>• Residential blocks</div>
                  <div>• Hospitality</div>
                  <div>• Healthcare & education</div>
                  <div>• Mixed-use developments</div>
                  <div>• Service stations</div>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Manchester Case Example
                </h2>
                <Card className="p-6">
                  <div className="mb-4">
                    <span className="text-sm font-medium text-accent">Logistics Hub – Trafford Park</span>
                  </div>
                  <h3 className="text-xl font-medium mb-4">
                    Regional Distribution Centre: 32% Reduction in Reactive Call-Outs
                  </h3>
                  <div className="space-y-4 text-sm font-light text-muted-foreground">
                    <p>
                      <strong>Challenge:</strong> 24/7 logistics operation with critical infrastructure. High reactive maintenance costs and poor response times causing operational delays.
                    </p>
                    <p>
                      <strong>Solution:</strong> Structured PPM program, critical spares holding, mobile engineer network, and priority emergency response SLA.
                    </p>
                    <p>
                      <strong>Results:</strong> Reactive call-outs reduced 32%, average response time cut to 41 minutes, annual savings £47k, zero downtime incidents in 12 months.
                    </p>
                  </div>
                </Card>
              </section>

              <section className="border-t border-border pt-12">
                <div className="text-center">
                  <h2 className="text-3xl font-light mb-4">
                    Get Manchester FM Support
                  </h2>
                  <p className="text-lg text-muted-foreground font-light mb-8 max-w-2xl mx-auto">
                    Contact our North West team for a site-specific FM proposal covering your Manchester properties.
                  </p>
                  <Button size="lg" asChild>
                    <Link to="/contact">Request Manchester Proposal</Link>
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

export default Manchester;
