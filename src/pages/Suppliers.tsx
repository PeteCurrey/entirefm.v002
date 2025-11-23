import { Helmet } from "react-helmet";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { Truck, Shield, Award, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Suppliers = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Supplier & Contractor Hub" },
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Trusted Network",
      description: "Join our vetted network of specialist FM contractors and suppliers"
    },
    {
      icon: Award,
      title: "Quality Standards",
      description: "Work with a provider committed to excellence and compliance"
    },
    {
      icon: Truck,
      title: "Regular Work",
      description: "Access consistent projects across our national portfolio"
    },
    {
      icon: Users,
      title: "Partnership Approach",
      description: "Collaborative relationships built on trust and performance"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Supplier & Contractor Hub | EntireFM</title>
        <meta
          name="description"
          content="Partner with EntireFM. Join our trusted network of specialist FM contractors and suppliers."
        />
        <link rel="canonical" href="https://entirefm.co.uk/suppliers" />
      </Helmet>

      <div className="bg-background min-h-screen pt-20">
        <div className="container mx-auto px-4 py-8">
          <Breadcrumb items={breadcrumbItems} />

          {/* Header */}
          <div className="mt-8 mb-12 text-center max-w-3xl mx-auto">
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-primary/10 rounded-full">
                <Truck className="w-12 h-12 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-light mb-4">
              Supplier & Contractor Hub
            </h1>
            <p className="text-xl text-muted-foreground font-light">
              Partner with EntireFM and join our trusted network of specialist contractors delivering excellence across the UK.
            </p>
          </div>

          {/* Benefits */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <benefit.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-lg font-medium mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground font-light">
                  {benefit.description}
                </p>
              </Card>
            ))}
          </div>

          {/* Requirements */}
          <Card className="p-8 mb-12">
            <h2 className="text-2xl font-light mb-6">Contractor Requirements</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium mb-3">Essential Criteria</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>✓ Full public & employer's liability insurance (£10M minimum)</li>
                  <li>✓ Industry-specific accreditations (NICEIC, Gas Safe, BAFE, etc.)</li>
                  <li>✓ ISO 9001 Quality Management certification</li>
                  <li>✓ ISO 45001 Health & Safety certification</li>
                  <li>✓ Proven track record in commercial FM</li>
                  <li>✓ National or multi-regional coverage capability</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium mb-3">Preferred Criteria</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>✓ ISO 14001 Environmental Management</li>
                  <li>✓ CHAS or equivalent H&S pre-qualification</li>
                  <li>✓ Modern Slavery Act compliance statement</li>
                  <li>✓ Cyber Essentials certification</li>
                  <li>✓ Experience in high-risk/critical environments</li>
                  <li>✓ Out-of-hours emergency response capability</li>
                </ul>
              </div>
            </div>
          </Card>

          {/* CTA */}
          <Card className="p-8 bg-primary/5 text-center">
            <h2 className="text-2xl md:text-3xl font-light mb-4">
              Ready to Partner with EntireFM?
            </h2>
            <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto mb-6">
              Submit your company details and certifications to join our approved supplier network.
            </p>
            <Button asChild size="lg">
              <Link to="/contact">Submit Supplier Application</Link>
            </Button>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Suppliers;
