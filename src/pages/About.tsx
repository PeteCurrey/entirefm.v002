import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Shield, Zap, Target, Users } from "lucide-react";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { SchemaMarkup } from "@/components/shared/SchemaMarkup";

const About = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Our Story" }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "Our Story - Built by Operators, Not Bureaucrats",
    "description": "EntireFM was built by operators who saw the FM industry's failures and created an alternative. Accountable, agile, and relentless facilities management.",
    "mainEntity": {
      "@type": "Organization",
      "name": "EntireFM",
      "description": "Facilities management built around accountability, compliance, and delivery",
      "url": "https://entirefm.com"
    }
  };

  const problems = [
    "Blame suppliers",
    "Hide behind process",
    "Move slow",
    "Deliver excuses instead of execution"
  ];

  const principles = [
    "Accountability that doesn't disappear through layers",
    "Compliance that lives in the open",
    "Engineers that actually fix things",
    "Directors who answer the phone",
    "Tech that shows truth, not vanity metrics"
  ];

  const cultureCode = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Own it",
      description: "No passing the buck"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Move fast",
      description: "Delays are expensive"
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Be world-class",
      description: "Every visit matters"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Stay humble",
      description: "Listen, fix, improve"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Our Story — Built by Operators, Not Bureaucrats | EntireFM</title>
        <meta name="description" content="EntireFM was built by operators who saw the FM industry's failures and created an alternative. Accountable, agile, and relentless facilities management." />
        <link rel="canonical" href="https://entirefm.com/about" />
      </Helmet>
      <BreadcrumbSchema items={breadcrumbItems} />
      <SchemaMarkup schema={schema} />

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative py-20 px-4 bg-gradient-to-br from-primary/10 via-background to-background">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <Breadcrumb items={breadcrumbItems} />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              We didn't come from FM.<br />We came from fixing FM.
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              A business born from frustration — and driven by delivery.
            </p>
          </div>
        </section>

        {/* The Problem We Saw */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">The Problem We Saw</h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-center mb-8 font-semibold">
                Big FM providers:
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {problems.map((problem, index) => (
                  <div key={index} className="p-6 bg-card rounded-lg border border-destructive/20">
                    <p className="text-lg font-medium text-destructive">{problem}</p>
                  </div>
                ))}
              </div>
              <div className="text-center space-y-4">
                <p className="text-xl font-semibold">
                  Meanwhile, the client suffers —
                </p>
                <p className="text-lg text-muted-foreground">
                  operations wobble, compliance drifts, people complain.
                </p>
                <p className="text-xl font-bold text-foreground">
                  We couldn't watch that mess anymore.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* So We Built the Alternative */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              So We Built the Alternative
            </h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-center mb-8 font-semibold">
                We built EntireFM around what FM should be:
              </p>
              <div className="space-y-4 mb-8">
                {principles.map((principle, index) => (
                  <div key={index} className="flex items-start gap-4 p-6 bg-background rounded-lg border">
                    <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary font-bold">✓</span>
                    </div>
                    <p className="text-lg">{principle}</p>
                  </div>
                ))}
              </div>
              <div className="text-center p-6 bg-primary/10 rounded-lg border border-primary/20">
                <p className="text-xl font-bold">
                  There's no "that's not our department."<br />
                  There's only the result.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Culture Code */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Culture Code
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {cultureCode.map((item, index) => (
                <div key={index} className="p-6 bg-card rounded-lg border text-center hover:border-primary transition-colors">
                  <div className="flex justify-center text-primary mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
            <p className="text-2xl text-center font-bold">
              Accountable. Agile. Relentless.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-primary/10 via-background to-background">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Meet the leadership that actually leads
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Book a call with a Director and experience the difference accountability makes.
            </p>
            <Button asChild size="lg">
              <Link to="/contact">Book a Call with a Director</Link>
            </Button>
          </div>
        </section>

        {/* Internal Links Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-6">Learn More About Us</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              <Button asChild variant="outline" className="h-auto py-4">
                <Link to="/services">Our Services</Link>
              </Button>
              <Button asChild variant="outline" className="h-auto py-4">
                <Link to="/technology">Our Technology</Link>
              </Button>
              <Button asChild variant="outline" className="h-auto py-4">
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;