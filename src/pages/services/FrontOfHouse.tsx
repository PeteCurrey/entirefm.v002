import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Lightbulb, Palette, ShieldCheck, Thermometer, Sparkles, TrendingUp } from "lucide-react";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { SchemaMarkup } from "@/components/shared/SchemaMarkup";

const FrontOfHouse = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Front-of-House Experience" }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Front-of-House Experience Enhancement",
    "description": "Transform your reception and public spaces into a brand advantage. Professional FM services for entrances, receptions, and customer-facing environments.",
    "provider": {
      "@type": "Organization",
      "name": "EntireFM"
    }
  };

  const whyItMatters = [
    "They decide whether they trust you",
    "They judge safety, quality, and culture",
    "Their perception shapes business outcomes"
  ];

  const enhancements = [
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Reception Lighting Design",
      description: "Optimised lighting creates the right atmosphere and impression"
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: "Decorative Refresh",
      description: "Brand alignment through quality finishes and presentation"
    },
    {
      icon: <ShieldCheck className="h-6 w-6" />,
      title: "Access Control Operation",
      description: "Smooth, reliable entry systems that work every time"
    },
    {
      icon: <Thermometer className="h-6 w-6" />,
      title: "Climate Optimisation",
      description: "Perfect temperature and air quality in reception areas"
    },
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: "Finishing Details",
      description: "Flooring, handrails, and every touchpoint maintained to standard"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Hazard Prevention",
      description: "Live monitoring and instant corrective work"
    }
  ];

  const kpis = [
    {
      metric: "Visitor Sentiment",
      description: "Comfort scoring and perception tracking"
    },
    {
      metric: "Brand Perception",
      description: "Alignment between space and company values"
    },
    {
      metric: "Complaint Elimination",
      description: "Zero negative feedback on facilities"
    },
    {
      metric: "Customer Journey Speed",
      description: "Faster, smoother access and navigation"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Reception Maintenance & Public Environment Quality | EntireFM</title>
        <meta name="description" content="Transform your reception and public spaces into a brand advantage. Professional FM services for entrances, receptions, and customer-facing environments." />
        <link rel="canonical" href="https://entirefm.com/services/front-of-house" />
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
              First impressions last —<br />make yours unstoppable.
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              We turn entrances, receptions, and customer routes into a brand advantage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/contact">Request FOH Experience Review</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/case-studies">See Before & After Wins</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Why It Matters */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Why It Matters</h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-center mb-8 font-semibold">
                The moment a visitor walks in:
              </p>
              <div className="space-y-4 mb-8">
                {whyItMatters.map((item, index) => (
                  <div key={index} className="flex items-center gap-4 p-6 bg-card rounded-lg border">
                    <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-bold">{index + 1}</span>
                    </div>
                    <p className="text-lg">{item}</p>
                  </div>
                ))}
              </div>
              <p className="text-xl text-center font-semibold">
                FM failures ruin the moment.<br />
                We ensure the moment lands perfectly.
              </p>
            </div>
          </div>
        </section>

        {/* FOH Enhancement Examples */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              FOH Enhancement Examples
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {enhancements.map((enhancement, index) => (
                <div key={index} className="p-6 bg-background rounded-lg border hover:border-primary transition-colors">
                  <div className="text-primary mb-4">{enhancement.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{enhancement.title}</h3>
                  <p className="text-muted-foreground">{enhancement.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* KPIs We Track */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              KPIs We Track
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {kpis.map((kpi, index) => (
                <div key={index} className="p-6 bg-card rounded-lg border">
                  <h3 className="text-xl font-semibold mb-2 text-primary">{kpi.metric}</h3>
                  <p className="text-muted-foreground">{kpi.description}</p>
                </div>
              ))}
            </div>
            <p className="text-xl text-center font-semibold">
              Facilities create trust — or they destroy it.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-primary/10 via-background to-background">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Book a FOH Excellence Survey
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let us assess your front-of-house experience and show you where improvements deliver immediate ROI.
            </p>
            <Button asChild size="lg">
              <Link to="/contact">Get Your FOH Assessment</Link>
            </Button>
          </div>
        </section>

        {/* Internal Links Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-6">Related Services</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              <Button asChild variant="outline" className="h-auto py-4">
                <Link to="/sectors/offices-corporate">Corporate Offices</Link>
              </Button>
              <Button asChild variant="outline" className="h-auto py-4">
                <Link to="/sectors/hospitality-leisure">Hospitality & Leisure</Link>
              </Button>
              <Button asChild variant="outline" className="h-auto py-4">
                <Link to="/sectors/retail-service-stations">Retail</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default FrontOfHouse;
