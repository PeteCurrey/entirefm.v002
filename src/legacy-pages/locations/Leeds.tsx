"use client";

;
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { Phone, MapPin, CheckCircle2, ArrowRight } from "lucide-react";
import { SidebarCTA } from "@/components/shared/SidebarCTA";
import { FAQSection } from "@/components/shared/FAQSection";
import { SchemaMarkup } from "@/components/shared/SchemaMarkup";

const Leeds = () => {
  const faqs = [
    {
      question: "Do you provide FM services across West Yorkshire?",
      answer: "Yes — full regional coverage including Leeds city centre, Bradford, Wakefield, Huddersfield."
    },
    {
      question: "Can you manage multi-site portfolios in Leeds?",
      answer: "Absolutely — we integrate multiple sites under one portal with real-time visibility."
    },
    {
      question: "Do you offer same-day reactive services?",
      answer: "Yes — local engineers + spares = faster response times, less disruption."
    },
    {
      question: "Do you handle full life-safety compliance?",
      answer: "Yes — fire systems, water hygiene, electrical = included under our integrated FM model."
    }
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Facilities Management Leeds",
    "provider": {
      "@type": "Organization",
      "name": "EntireFM"
    },
    "areaServed": {
      "@type": "City",
      "name": "Leeds"
    },
    "description": "Comprehensive facilities management across Leeds & West Yorkshire — rapid response, full compliance, local presence, scalable for multi-site."
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
        "name": "EntireFM Leeds",
        "description": "Facilities Management Leeds - Comprehensive FM services across Leeds & West Yorkshire",
        "areaServed": "Leeds, West Yorkshire",
        "telephone": "+448001234567"
      }}
    />
  );

  return (
    <>
      

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
                <span className="text-sm font-light text-gray-300">Leeds & West Yorkshire</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-light mb-6 text-white">
                Leeds Depends on Reliability. Your FM Partner Must Deliver It.
              </h1>
              <p className="text-xl text-gray-300 font-light leading-relaxed mb-8">
                Comprehensive facilities management across Leeds & West Yorkshire — rapid response, full compliance, local presence, scalable for multi-site.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/contact">
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
                {/* Why Leeds Needs Specialist FM */}
                <div>
                  <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                    Why the Leeds Region Demands a Specialist FM Partner
                  </h2>
                  <p className="text-lg text-muted-foreground font-light leading-relaxed mb-4">
                    Leeds is home to industrial, logistics, corporate & commercial estates alongside residential developments and retail hubs. The mix means FM providers must be regionally embedded, multi-sector capable and highly responsive.
                  </p>
                  <p className="text-lg text-muted-foreground font-light leading-relaxed">
                    In this territory, delay = cost, so you need a local partner who moves fast.
                  </p>
                </div>

                {/* Coverage & Capability */}
                <div>
                  <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                    Our Leeds Coverage & Capability
                  </h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    <Card className="p-6">
                      <div className="flex items-start gap-3 mb-3">
                        <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                        <p className="font-light">Full West Yorkshire footprint: Leeds city centre, Bradford, Wakefield, Huddersfield, Leeds Dock, Thorpe Park</p>
                      </div>
                    </Card>
                    <Card className="p-6">
                      <div className="flex items-start gap-3 mb-3">
                        <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                        <p className="font-light">Regional engineer bases + spares stock + rapid mobilisation network</p>
                      </div>
                    </Card>
                    <Card className="p-6">
                      <div className="flex items-start gap-3 mb-3">
                        <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                        <p className="font-light">Scalable support for single buildings to large portfolios</p>
                      </div>
                    </Card>
                    <Card className="p-6">
                      <div className="flex items-start gap-3 mb-3">
                        <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                        <p className="font-light">A service model built for Leeds's mix of sectors: industrial, logistics, offices, retail, residential blocks</p>
                      </div>
                    </Card>
                  </div>
                </div>

                {/* Integrated FM Services */}
                <div>
                  <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                    Integrated FM Services for Leeds-Based Estates
                  </h2>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                      <span className="font-light">M&E hard services (electrical, mechanical, HVAC)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                      <span className="font-light">Compliance management (fire systems, life safety, water hygiene)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                      <span className="font-light">Building fabric & exterior maintenance</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                      <span className="font-light">24/7 reactive support, national escalation model</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                      <span className="font-light">Unified portal: asset registers, job tracking, KPI dashboards</span>
                    </li>
                  </ul>
                </div>

                {/* Sectors */}
                <div>
                  <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                    Sectors We Support Locally
                  </h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    <Card className="p-6 hover:shadow-lg transition-shadow">
                      <h3 className="font-medium mb-2">Industrial & Logistics</h3>
                      <p className="text-sm text-muted-foreground font-light">
                        Estates across the region
                      </p>
                    </Card>
                    <Card className="p-6 hover:shadow-lg transition-shadow">
                      <h3 className="font-medium mb-2">Retail Parks</h3>
                      <p className="text-sm text-muted-foreground font-light">
                        Service stations
                      </p>
                    </Card>
                    <Card className="p-6 hover:shadow-lg transition-shadow">
                      <h3 className="font-medium mb-2">Office Campuses</h3>
                      <p className="text-sm text-muted-foreground font-light">
                        Multi-tenant blocks
                      </p>
                    </Card>
                    <Card className="p-6 hover:shadow-lg transition-shadow">
                      <h3 className="font-medium mb-2">Residential</h3>
                      <p className="text-sm text-muted-foreground font-light">
                        Blocks & PBSA
                      </p>
                    </Card>
                    <Card className="p-6 hover:shadow-lg transition-shadow">
                      <h3 className="font-medium mb-2">Hospitality</h3>
                      <p className="text-sm text-muted-foreground font-light">
                        Venues and leisure sites
                      </p>
                    </Card>
                  </div>
                </div>

                {/* Why Choose Us */}
                <div>
                  <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                    Why Our Leeds Clients Stick With Us
                  </h2>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                      <span className="font-light">Localised resource with national standards</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                      <span className="font-light">Transparent SLAs, measurable and visible delivery</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                      <span className="font-light">Direct accountability — no layers of bureaucracy</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                      <span className="font-light">Tech-enabled asset visibility and performance dashboards</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                      <span className="font-light">Local presence means faster fixes, less downtime</span>
                    </li>
                  </ul>
                </div>

                {/* FAQs */}
                <FAQSection faqs={faqs} />

                {/* Final CTA */}
                <Card className="p-8 bg-charcoal text-white">
                  <h2 className="text-3xl font-light mb-4">
                    Don't settle for generic FM. Get a partner built for Leeds.
                  </h2>
                  <p className="text-lg text-gray-300 font-light mb-6">
                    Protect your operation, minimise downtime, and scale with confidence.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" variant="secondary" asChild>
                      <Link href="/contact">Request FM Support in Leeds</Link>
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

export default Leeds;
