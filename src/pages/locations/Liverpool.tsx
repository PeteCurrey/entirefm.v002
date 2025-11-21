import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Phone, MapPin, CheckCircle2, ArrowRight } from "lucide-react";
import { SidebarCTA } from "@/components/shared/SidebarCTA";
import { FAQSection } from "@/components/shared/FAQSection";
import { SchemaMarkup } from "@/components/shared/SchemaMarkup";

const Liverpool = () => {
  const faqs = [
    {
      question: "Can you manage multi-site portfolios?",
      answer: "Yes."
    },
    {
      question: "Can you support waterfront estates?",
      answer: "Fully compliant inc. corrosion-risk assets."
    },
    {
      question: "Do you offer same-day reactive services?",
      answer: "Standard."
    }
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Facilities Management Liverpool",
    "provider": {
      "@type": "Organization",
      "name": "EntireFM"
    },
    "areaServed": {
      "@type": "City",
      "name": "Liverpool"
    },
    "description": "We keep commercial, logistics, and waterfront estates operating at full capacity."
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
        "name": "EntireFM Liverpool",
        "description": "Facilities Management Liverpool - Port-city performance FM services",
        "areaServed": "Liverpool, Merseyside",
        "telephone": "+448001234567"
      }}
    />
  );

  return (
    <>
      <Helmet>
        <title>Facilities Management Liverpool | FM Services Merseyside | EntireFM</title>
        <meta 
          name="description" 
          content="Port-city performance FM services across Liverpool and Merseyside. M&E contractors, compliance management, 24/7 support. Commercial, logistics, and waterfront estates."
        />
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
                <span className="text-sm font-light text-gray-300">Liverpool & Merseyside</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-light mb-6 text-white">
                Port-City Performance. No Delays.
              </h1>
              <p className="text-xl text-gray-300 font-light leading-relaxed mb-8">
                We keep commercial, logistics, and waterfront estates operating at full capacity.
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
                    Speak to Helpdesk — 24/7
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
                {/* Why Liverpool */}
                <div>
                  <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                    Why Liverpool?
                  </h2>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                      <span className="font-light">High-volume logistics & warehousing</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                      <span className="font-light">Hospitality & tourism front-and-centre</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                      <span className="font-light">Mixed commercial growth across Merseyside → FM failures hit harder here</span>
                    </li>
                  </ul>
                </div>

                {/* Coverage */}
                <div>
                  <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                    Coverage
                  </h2>
                  <div className="flex flex-wrap gap-3">
                    {['Liverpool City', 'Bootle', 'Speke', 'Knowsley', 'Wirral'].map((area) => (
                      <Card key={area} className="px-6 py-3">
                        <span className="font-light">{area}</span>
                      </Card>
                    ))}
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
                      <span className="font-light">M&E & HVAC</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                      <span className="font-light">Fire & Safety Systems</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                      <span className="font-light">Fabric maintenance & externals</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                      <span className="font-light">Reactive resource close to major business parks</span>
                    </li>
                  </ul>
                </div>

                {/* Sectors */}
                <div>
                  <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                    Sectors
                  </h2>
                  <div className="flex flex-wrap gap-3">
                    {['Logistics', 'Offices', 'Retail', 'Leisure', 'Residential blocks'].map((sector) => (
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
                    Choose FM that keeps pace with the port.
                  </h2>
                  <p className="text-lg text-gray-300 font-light mb-6">
                    Request Liverpool FM support.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" variant="secondary" asChild>
                      <Link to="/contact">Request FM Support in Liverpool</Link>
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

export default Liverpool;
