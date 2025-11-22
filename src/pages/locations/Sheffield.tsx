import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Phone, MapPin, CheckCircle2, ArrowRight } from "lucide-react";
import { SidebarCTA } from "@/components/shared/SidebarCTA";
import { FAQSection } from "@/components/shared/FAQSection";
import { SchemaMarkup } from "@/components/shared/SchemaMarkup";

const Sheffield = () => {
  const faqs = [
    {
      question: "Do you work with manufacturers?",
      answer: "Yes — high-risk sites are core to our model."
    },
    {
      question: "Is 24/7 response available?",
      answer: "Always."
    },
    {
      question: "Are fire systems and water hygiene included?",
      answer: "Full compliance, every visit."
    }
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Facilities Management Sheffield",
    "provider": {
      "@type": "Organization",
      "name": "EntireFM"
    },
    "areaServed": {
      "@type": "City",
      "name": "Sheffield"
    },
    "description": "FM built for industrial strength and commercial pace — across the Steel City."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const LocalBusinessSchema = () => (
    <SchemaMarkup
      schema={{
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "EntireFM Sheffield",
        "description": "Facilities Management Sheffield - FM built for industrial strength and commercial pace",
        "areaServed": "Sheffield, South Yorkshire",
        "telephone": "+448001234567"
      }}
    />
  );

  return (
    <>
      <Helmet>
        <title>Facilities Management Sheffield</title>
        <meta 
          name="description" 
          content="Industrial-focused FM. Compliance & uptime for every asset." 
        />
        <link rel="canonical" href="https://entirefm.com/locations/sheffield" />
      </Helmet>

      <SchemaMarkup schema={serviceSchema} />
      <SchemaMarkup schema={faqSchema} />
      <LocalBusinessSchema />

      <div className="min-h-screen pt-20">
        {/* Hero */}
        <section className="relative py-24 bg-gradient-to-b from-charcoal to-charcoal/95">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIvPjwvZz48L3N2Zz4=')] opacity-30" />
          <div className="container mx-auto px-6 relative">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-5 h-5 text-accent" />
                <span className="text-sm font-light text-gray-300">Sheffield & South Yorkshire</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-light mb-6 text-white">
                Sheffield Runs on Reliability. We Deliver It.
              </h1>
              <p className="text-xl text-gray-300 font-light leading-relaxed mb-8">
                FM built for industrial strength and commercial pace — across the Steel City.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link to="/contact">
                    Request Proposal
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="bg-transparent border-white text-white hover:bg-white hover:text-charcoal">
                  <a href="tel:+448001234567">
                    <Phone className="w-5 h-5 mr-2" />
                    24/7 Helpdesk – Speak Now
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Main Content Column */}
              <div className="lg:col-span-2 space-y-16">
                {/* Why Sheffield Chooses EntireFM */}
                <div>
                  <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                    Why Sheffield Chooses EntireFM
                  </h2>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                      <span className="font-light">Major manufacturing footprint = zero downtime tolerance</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                      <span className="font-light">Mixed estates: industrial, logistics, student living, retail</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                      <span className="font-light">Local engineers = fast fixes & visible accountability</span>
                    </li>
                  </ul>
                </div>

                {/* Coverage */}
                <div>
                  <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                    Coverage
                  </h2>
                  <div className="grid md:grid-cols-3 gap-4">
                    <Card className="p-6">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                        <p className="font-light">Sheffield City Centre</p>
                      </div>
                    </Card>
                    <Card className="p-6">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                        <p className="font-light">Meadowhall, Attercliffe, Tinsley</p>
                      </div>
                    </Card>
                    <Card className="p-6">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                        <p className="font-light">Rotherham, Doncaster, Barnsley</p>
                      </div>
                    </Card>
                  </div>
                </div>

                {/* Services */}
                <div>
                  <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                    Services
                  </h2>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                      <span className="font-light">Hard FM & M&E</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                      <span className="font-light">Fire & Life Safety</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                      <span className="font-light">Water Hygiene & ACOP L8</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                      <span className="font-light">Building Fabric + Reactive</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                      <span className="font-light">Nationwide escalation when needed</span>
                    </li>
                  </ul>
                </div>

                {/* Sectors */}
                <div>
                  <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                    Sectors Supported
                  </h2>
                  <div className="flex flex-wrap gap-3">
                    {['Industrial', 'Logistics', 'PBSA', 'Offices', 'Retail', 'Hospitality'].map((sector) => (
                      <Card key={sector} className="px-6 py-3">
                        <span className="font-light">{sector}</span>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* FAQs */}
                <FAQSection faqs={faqs} />

                {/* Final CTA */}
                <Card className="p-8 bg-charcoal text-white">
                  <h2 className="text-3xl font-light mb-4">
                    Get FM that protects uptime & compliance.
                  </h2>
                  <p className="text-lg text-gray-300 font-light mb-6">
                    Request Sheffield FM support.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" variant="secondary" asChild>
                      <Link to="/contact">Request FM Support in Sheffield</Link>
                    </Button>
                    <Button size="lg" variant="outline" asChild className="bg-transparent border-white text-white hover:bg-white hover:text-charcoal">
                      <a href="tel:+448001234567">
                        <Phone className="w-4 h-4 mr-2" />
                        Speak to a Specialist – 24/7
                      </a>
                    </Button>
                  </div>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-24">
                  <SidebarCTA />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Sheffield;
