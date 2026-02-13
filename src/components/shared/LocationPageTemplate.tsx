import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ArrowRight, Phone, MapPin, CheckCircle2, Wrench, Shield, Zap, Clock, Building2, Factory, Home, ShoppingBag, Hotel, LucideIcon } from "lucide-react";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { FAQSection } from "@/components/shared/FAQSection";
import { SchemaMarkup } from "@/components/shared/SchemaMarkup";
import StatsBanner from "@/components/shared/StatsBanner";
import CTASection from "@/components/shared/CTASection";

interface LocationStat {
  value: string;
  label: string;
  prefix?: string;
  suffix?: string;
}

interface LocationFAQ {
  question: string;
  answer: string;
}

interface LocationPageData {
  city: string;
  region: string;
  heroImage: string;
  heroHeadline: string;
  heroSubtext: string;
  metaTitle: string;
  metaDescription: string;
  canonicalUrl: string;
  stats: LocationStat[];
  whyTitle: string;
  whyIntro: string;
  whyPoints: string[];
  coverageAreas: string[];
  services: string[];
  sectors: { title: string; description: string }[];
  whyChoosePoints: string[];
  faqs: LocationFAQ[];
  ctaHeadline: string;
  ctaSubtext: string;
}

const LocationPageTemplate = ({ data }: { data: LocationPageData }) => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": `Facilities Management ${data.city}`,
    "provider": {
      "@type": "Organization",
      "name": "EntireFM"
    },
    "areaServed": {
      "@type": "City",
      "name": data.city
    },
    "description": data.heroSubtext
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": data.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `EntireFM ${data.city}`,
    "description": `Facilities Management ${data.city} - ${data.heroSubtext}`,
    "areaServed": `${data.city}, ${data.region}`,
    "telephone": "+448001234567"
  };

  return (
    <>
      <Helmet>
        <title>{data.metaTitle}</title>
        <meta name="description" content={data.metaDescription} />
        <link rel="canonical" href={data.canonicalUrl} />
      </Helmet>

      <SchemaMarkup schema={serviceSchema} />
      <SchemaMarkup schema={faqSchema} />
      <SchemaMarkup schema={localBusinessSchema} />

      <div className="min-h-screen">
        {/* Full-screen Hero */}
        <section className="relative min-h-[85vh] flex items-center">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${data.heroImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/90 to-charcoal/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-charcoal/30" />
          
          <div className="container mx-auto px-6 relative z-10 pt-32 pb-16">
            <Breadcrumb 
              items={[
                { label: "Locations", href: "/locations" },
                { label: data.city }
              ]}
              className="mb-8 [&_a]:text-gray-400 [&_a:hover]:text-white [&_span]:text-white [&_svg]:text-gray-500"
            />
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-3xl"
            >
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-sm font-light text-gray-300">{data.city} & {data.region}</span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light mb-6 text-white leading-tight">
                {data.heroHeadline}
              </h1>
              <p className="text-xl text-gray-300 font-light leading-relaxed mb-10">
                {data.heroSubtext}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild className="hover-lift">
                  <Link to="/contact">
                    Request Proposal
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-charcoal hover-lift">
                  <a href="tel:+448001234567">
                    <Phone className="w-5 h-5 mr-2" />
                    24/7 Helpdesk – Speak Now
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Banner */}
        <StatsBanner stats={data.stats} variant="gradient" />

        {/* Why Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-light mb-6 underline-accent inline-block">
                {data.whyTitle}
              </h2>
              <p className="text-lg text-muted-foreground font-light leading-relaxed">
                {data.whyIntro}
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.whyPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-6 h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                      <p className="font-light">{point}</p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Coverage Areas */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-light mb-10 underline-accent inline-block"
            >
              {data.city} Coverage — Fully Resourced
            </motion.h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {data.coverageAreas.map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Card className="p-4 hover:shadow-md transition-all duration-300 hover:-translate-y-0.5">
                    <div className="flex items-center gap-3">
                      <MapPin className="w-4 h-4 text-primary shrink-0" />
                      <span className="text-sm font-light">{area}</span>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Integrated FM Services */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-light mb-10 underline-accent inline-block"
            >
              Integrated FM Services for {data.city}
            </motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {data.services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                >
                  <Card className="p-5 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
                    <div className="flex items-start gap-3">
                      <Wrench className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="font-light">{service}</span>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Sectors */}
        <section className="py-20 bg-charcoal text-white">
          <div className="container mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-light mb-10"
            >
              Sectors We Support in {data.city}
            </motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {data.sectors.map((sector, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                >
                  <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/10 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
                    <h3 className="font-medium mb-2 text-white">{sector.title}</h3>
                    <p className="text-sm text-gray-400 font-light">{sector.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-light mb-10 underline-accent inline-block"
            >
              Why {data.city} Clients Stay With Us
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-5">
              {data.whyChoosePoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -15 : 15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 p-4"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                  <span className="font-light text-lg">{point}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-6 max-w-4xl">
            <FAQSection faqs={data.faqs} />
          </div>
        </section>

        {/* CTA */}
        <CTASection
          title={data.ctaHeadline}
          description={data.ctaSubtext}
          primaryLabel={`Request FM Support in ${data.city}`}
          primaryHref="/contact"
          secondaryLabel="Speak to a Specialist – 24/7"
          secondaryHref="tel:+448001234567"
          variant="dark"
        />
      </div>
    </>
  );
};

export default LocationPageTemplate;
export type { LocationPageData };
