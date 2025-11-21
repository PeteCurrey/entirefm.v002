import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Phone, MapPin, CheckCircle2, ArrowRight } from "lucide-react";
import { SidebarCTA } from "@/components/shared/SidebarCTA";
import { FAQSection } from "@/components/shared/FAQSection";
import { SchemaMarkup } from "@/components/shared/SchemaMarkup";

const Leicester = () => {
  const faqs = [
    {
      question: "Can you work around manufacturers' shifts?",
      answer: "Yes — low-disruption scheduling."
    },
    {
      question: "Do you manage compliance end-to-end?",
      answer: "We own it."
    }
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Facilities Management Leicester",
    "provider": {
      "@type": "Organization",
      "name": "EntireFM"
    },
    "areaServed": {
      "@type": "City",
      "name": "Leicester"
    },
    "description": "FM built for Leicester's industrial heart and fast-moving commercial scene."
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
        "name": "EntireFM Leicester",
        "description": "Facilities Management Leicester - FM built for industrial and commercial estates",
        "areaServed": "Leicester, East Midlands",
        "telephone": "+448001234567"
      }}
    />
  );

  return (
    <>
      <Helmet>
        <title>Facilities Management Leicester | FM Services East Midlands | EntireFM</title>
        <meta 
          name="description" 
          content="FM built for Leicester's industrial heart and fast-moving commercial scene. M&E contractors, compliance management, 24/7 support across the East Midlands."
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
                <span className="text-sm font-light text-gray-300">Leicester & East Midlands</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-light mb-6 text-white">
                Where Manufacturers Scale, We Keep Them Moving.
              </h1>
              <p className="text-xl text-gray-300 font-light leading-relaxed mb-8">
                FM built for Leicester's industrial heart and fast-moving commercial scene.
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
                    Speak to 24/7 Helpdesk
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
                {/* Why EntireFM for Leicester */}
                <div>
                  <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                    Why EntireFM for Leicester
                  </h2>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                      <span className="font-light">Engineering + retail + logistics = mixed risk profile</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                      <span className="font-light">We balance production uptime + compliance + presentation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                      <span className="font-light">Local resources reduce cost & response time</span>
                    </li>
                  </ul>
                </div>

                {/* Coverage */}
                <div>
                  <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                    Coverage
                  </h2>
                  <div className="flex flex-wrap gap-3">
                    {['Leicester City', 'Loughborough', 'Hinckley', 'Coalville'].map((area) => (
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
                      <span className="font-light">Fire, emergency lighting, sprinklers</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                      <span className="font-light">Water hygiene</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                      <span className="font-light">Fabric repairs + dilapidations</span>
                    </li>
                  </ul>
                </div>

                {/* FAQs */}
                <FAQSection faqs={faqs} />

                {/* Final CTA */}
                <Card className="p-8 bg-charcoal text-white">
                  <h2 className="text-3xl font-light mb-4">
                    Get FM that matches Leicester's momentum.
                  </h2>
                  <p className="text-lg text-gray-300 font-light mb-6">
                    Request Leicester FM support.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" variant="secondary" asChild>
                      <Link to="/contact">Request FM Support in Leicester</Link>
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

export default Leicester;
