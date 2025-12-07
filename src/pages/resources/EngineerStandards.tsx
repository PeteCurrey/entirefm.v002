import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle2, Shield, Award, FileCheck, Camera, UserCheck } from "lucide-react";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { SchemaMarkup } from "@/components/shared/SchemaMarkup";

const EngineerStandards = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Resources", href: "/resources" },
    { label: "Engineer Standards" }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "FM Engineers Professional Standards | EntireFM Workforce Quality",
    "description": "Professional engineers deliver professional outcomes. EntireFM's rigorous standards ensure quality, competence, and professionalism on every site visit.",
    "author": {
      "@type": "Organization",
      "name": "EntireFM"
    }
  };

  const whatClientsSee = [
    "Clean uniforms + branded PPE",
    "Respect for public-facing environments",
    "Clear communication on arrival",
    "Zero mess left behind"
  ];

  const whatClientsFeel = [
    "Work done right first time",
    "Fast root-cause diagnosis",
    "Accountability to close the loop",
    "Pride in every detail"
  ];

  const standards = [
    {
      icon: <FileCheck className="h-6 w-6" />,
      title: "Full RAMS Briefing",
      description: "Risk assessment before every site entry"
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Verified Competency",
      description: "CSCS / competency cards checked and current"
    },
    {
      icon: <Camera className="h-6 w-6" />,
      title: "Photo Documentation",
      description: "Mandatory updates for every task completed"
    },
    {
      icon: <UserCheck className="h-6 w-6" />,
      title: "Site Courtesy Reporting",
      description: "Professional communication with site staff"
    },
    {
      icon: <CheckCircle2 className="h-6 w-6" />,
      title: "Quality Sign-Off",
      description: "Work approved before task closure"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Brand Protection",
      description: "Your site reflects your brand—our engineers reflect ours"
    }
  ];

  return (
    <>
      <Helmet>
        <title>FM Engineers Professional Standards | EntireFM Workforce Quality</title>
        <meta name="description" content="Professional engineers deliver professional outcomes. EntireFM's rigorous standards ensure quality, competence, and professionalism on every site visit." />
        <link rel="canonical" href="https://entirefm.com/resources/engineer-standards" />
      </Helmet>
      <BreadcrumbSchema items={breadcrumbItems} />
      <SchemaMarkup schema={schema} />

      <div className="min-h-screen bg-background pt-20">
        {/* Hero Section */}
        <section className="relative py-20 px-4 bg-gradient-to-br from-primary/10 via-background to-background">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <Breadcrumb items={breadcrumbItems} />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              Professional engineers.<br />Professional outcomes.
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Every visit. Every site. Every time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/contact">Book a Quality Assessment Visit</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">Request Workforce Vetting Details</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* What Clients See */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">What Clients See</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {whatClientsSee.map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-6 bg-card rounded-lg border">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-lg">{item}</p>
                </div>
              ))}
            </div>
            <p className="text-xl text-center text-muted-foreground italic mt-8">
              Professional behaviour is a performance standard.
            </p>
          </div>
        </section>

        {/* What Clients Don't See — But Feel */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              What Clients Don't See — But Feel
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {whatClientsFeel.map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-6 bg-background rounded-lg border">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-lg">{item}</p>
                </div>
              ))}
            </div>
            <p className="text-xl text-center font-semibold mt-8">
              Poor presentation = poor workmanship more often than not.<br />
              We refuse both.
            </p>
          </div>
        </section>

        {/* Standards We Enforce */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Standards We Enforce
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {standards.map((standard, index) => (
                <div key={index} className="p-6 bg-card rounded-lg border hover:border-primary transition-colors">
                  <div className="text-primary mb-4">{standard.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{standard.title}</h3>
                  <p className="text-muted-foreground">{standard.description}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <p className="text-xl font-semibold mb-6">
                Your site reflects your brand.<br />
                Our engineers reflect ours.
              </p>
              <Button asChild size="lg">
                <Link to="/contact">See Our Workforce Competence Pack</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Internal Links Section */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-6">Explore More</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              <Button asChild variant="outline" className="h-auto py-4">
                <Link to="/about">Trust & Accreditations</Link>
              </Button>
              <Button asChild variant="outline" className="h-auto py-4">
                <Link to="/services">Our Services</Link>
              </Button>
              <Button asChild variant="outline" className="h-auto py-4">
                <Link to="/contact">Request a Proposal</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default EngineerStandards;
