import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Clock, Shield, Smartphone, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import ServiceCard from "@/components/shared/ServiceCard";
import SectorCard from "@/components/shared/SectorCard";
import MetricCard from "@/components/shared/MetricCard";
import CaseStudyCard from "@/components/shared/CaseStudyCard";
import { LocalBusinessSchema, FAQSchema, ServiceSchema, OrganizationSchema } from "@/components/shared/SchemaMarkup";
import { CityData } from "@/data/geoLandingData";
import officeImage from "@/assets/office-interior.jpg";
import industrialImage from "@/assets/industrial-facility.jpg";

interface GeoLandingPageProps {
  cityData: CityData;
  customSlug?: string;
}

const GeoLandingPage = ({ cityData, customSlug }: GeoLandingPageProps) => {
  const {
    name,
    region,
    heroImage,
    tagline,
    description,
    keyIndustries,
    coverageAreas,
    localClients,
    caseStudies,
    faqs,
    metaTitle,
    metaDescription,
    localContext
  } = cityData;

  const canonicalSlug = customSlug || `fm-${cityData.slug}`;
  const canonicalUrl = `https://entirefm.com/${canonicalSlug}`;

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={`facilities management ${name}, FM services ${name}, commercial maintenance ${region}, M&E services ${name}, building management ${name}`} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={heroImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDescription} />
      </Helmet>

      <LocalBusinessSchema
        name={`EntireFM - Facilities Management ${name}`}
        address={{
          street: `${name} Service Centre`,
          city: name,
          postalCode: "",
          country: "UK"
        }}
        serviceType="Facilities Management"
      />

      <ServiceSchema
        name={`Facilities Management Services in ${name}`}
        description={description}
        provider="EntireFM"
        areaServed={name}
      />

      <FAQSchema
        faqs={faqs.map(faq => ({
          question: faq.question,
          answer: faq.answer
        }))}
      />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            className="max-w-4xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="flex items-center gap-2 mb-4"
            >
              <MapPin className="w-5 h-5 text-primary" />
              <span className="text-primary font-medium">{region}</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
              className="text-white mb-4 leading-tight font-extralight md:text-5xl text-3xl lg:text-6xl"
            >
              Facilities Management {name}
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
              className="text-2xl text-primary font-light mb-4"
            >
              {tagline}
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
              className="text-gray-200 mb-8 leading-relaxed max-w-2xl font-extralight md:text-xl text-lg"
            >
              {description}
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button size="lg" asChild className="hover-scale">
                <Link to="/contact">Request a Proposal</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-white hover:bg-white hover:text-charcoal hover-scale" asChild>
                <Link to="/case-studies">View Case Studies</Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Metrics Dashboard */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl"
          >
            <MetricCard value="41" label="Avg response time (mins)" className="opacity-75" />
            <MetricCard value="87" label="First-time fix rate" suffix="%" className="opacity-75" />
            <MetricCard value="120" label="Sites under management" suffix="+" className="opacity-75" />
            <MetricCard value="98" label="SLA compliance" suffix="%" className="opacity-75" />
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-white/60 rounded-full flex items-start justify-center p-2 cursor-pointer hover:border-white/80 transition-colors"
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
          >
            <motion.div 
              className="w-1 h-3 bg-white/70 rounded-full"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Trust Strip */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-6">
          <p className="text-center text-sm text-muted-foreground mb-8 font-light">
            Trusted by operations teams across {region}
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-50">
            {localClients.slice(0, 5).map(client => (
              <div key={client} className="text-lg font-light text-muted-foreground">
                {client}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Context Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl mb-6 underline-accent inline-block font-extralight">
                Your FM Partner in {name}
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg font-light mb-6">
                {localContext}
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium mb-1">Local Engineers</h4>
                    <p className="text-sm text-muted-foreground">Based in {region} for rapid response</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium mb-1">Compliance Experts</h4>
                    <p className="text-sm text-muted-foreground">Full statutory compliance coverage</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium mb-1">24/7 Helpdesk</h4>
                    <p className="text-sm text-muted-foreground">Round-the-clock support</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Smartphone className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium mb-1">Real-time Portal</h4>
                    <p className="text-sm text-muted-foreground">Live job tracking & reporting</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-charcoal rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-light mb-6">Key Industries We Serve in {name}</h3>
              <div className="flex flex-wrap gap-3">
                {keyIndustries.map((industry, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-white/10 rounded-full text-sm font-light"
                  >
                    {industry}
                  </span>
                ))}
              </div>
              
              <div className="mt-8 pt-8 border-t border-white/20">
                <h4 className="text-lg font-light mb-4">Areas We Cover</h4>
                <div className="grid grid-cols-2 gap-2 text-sm text-gray-300">
                  {coverageAreas.slice(0, 10).map((area, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <MapPin className="w-3 h-3 text-primary" />
                      {area}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FM Partner Section */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl mb-6 underline-accent inline-block font-extralight">
              Why Choose EntireFM in {name}?
            </h2>
            <p className="text-muted-foreground leading-relaxed text-xl font-extralight">
              Complete Facilities Management & FM Support Services across {region}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: CheckCircle2,
                title: "No more chasing contractors",
                description: "Dedicated helpdesk and single point of contact. We own the problem until it's solved."
              },
              {
                icon: Shield,
                title: "Compliance without the chaos",
                description: "PPM schedules, digital asset registers, and clear audit trails. Everything documented."
              },
              {
                icon: Smartphone,
                title: "Tech-enabled, not tech-distracted",
                description: "CAFM platform, live portals, and real-time job tracking without the complexity."
              },
              {
                icon: Clock,
                title: "Owner-led, no corporate scripts",
                description: "Direct access to decision makers. Quick responses. Real accountability."
              }
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-light mb-3">{feature.title}</h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Matrix */}
      <section className="py-24 relative">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/what-we-deliver-bg.jpg)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/75 to-black/85" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-6 underline-accent inline-block text-white">
              FM Services in {name}
            </h2>
            <p className="text-lg text-gray-300 font-light max-w-2xl leading-relaxed">
              Integrated FM combining hard, soft and project services under one contract. Or standalone services tailored to {region} needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <ServiceCard 
              title="Hard Services & M&E" 
              description="Mechanical, electrical, and building fabric maintenance" 
              items={["HVAC, electrical, mechanical systems", "Plumbing, gas, and drainage", "Emergency systems and lighting", "Energy optimisation and BMS"]} 
            />
            <ServiceCard 
              title="Compliance & Life Safety" 
              description="Statutory compliance and risk management" 
              items={["Fire alarms, emergency lighting, extinguishers", "FRA actions and remediation", "Gas safety, water hygiene, LOLER", "Complete audit trails"]} 
            />
            <ServiceCard 
              title="Soft Services & Workplace" 
              description="Day-to-day operations and environment management" 
              items={["Commercial cleaning and washrooms", "Grounds maintenance and waste", "Reception and concierge services", "Security coordination"]} 
            />
            <ServiceCard 
              title="Projects & Small Works" 
              description="From minor works to complete fit-outs" 
              items={["Office and retail fit-outs", "Building refurbishments", "Service station upgrades", "Landlord make-good works"]} 
            />
          </div>

          <div className="text-center mt-12">
            <Button size="lg" asChild>
              <Link to="/services">
                Explore All Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Sectors Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-6 underline-accent inline-block">
              Sectors We Serve in {name}
            </h2>
            <p className="text-lg text-muted-foreground font-light max-w-2xl leading-relaxed">
              Sector-specific understanding across diverse environments in {region}.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <SectorCard 
              title="Offices & Corporate" 
              description="Grade A to multi-let schemes. Workplace services that support productivity." 
              image={officeImage} 
              link="/sectors/offices" 
            />
            <SectorCard 
              title="Industrial & Logistics" 
              description="24/7 operations. Critical infrastructure. Minimal disruption to workflow." 
              image={industrialImage} 
              link="/sectors/industrial-logistics" 
            />
            <SectorCard 
              title="Retail & Service Stations" 
              description="Customer-facing environments. Out-of-hours works. Brand standards maintained." 
              image={officeImage} 
              link="/sectors/retail-hospitality" 
            />
            <SectorCard 
              title="Aviation & Transport" 
              description="Regulated environments. Security clearances. Complex operational interfaces." 
              image={industrialImage} 
              link="/sectors/healthcare-public" 
            />
            <SectorCard 
              title="Residential & PBSA" 
              description="Resident satisfaction. Common areas. Estate management." 
              image={officeImage} 
              link="/sectors/pbsa" 
            />
            <SectorCard 
              title="Construction & Developments" 
              description="Site progression support. Handover coordination. Defects management." 
              image={industrialImage} 
              link="/sectors" 
            />
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" asChild>
              <Link to="/sectors">
                View All Sectors
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 bg-charcoal text-white">
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-6 underline-accent inline-block">
              FM Success Stories in {region}
            </h2>
            <p className="text-lg text-gray-400 font-light max-w-2xl leading-relaxed">
              Real results for real clients across {name} and {region}.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {caseStudies.map((study, index) => (
              <CaseStudyCard 
                key={index}
                sector={study.sector} 
                title={study.title} 
                metrics={study.metrics} 
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-charcoal" asChild>
              <Link to="/case-studies" className="bg-primary">
                View All Case Studies
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-light mb-12 underline-accent inline-block">
              FAQs About FM in {name}
            </h2>
            
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 pb-6">
                  <h3 className="text-xl font-medium mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-r from-secondary to-secondary/80 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-6">
            Ready to fix your facilities management in {name}?
          </h2>
          <p className="text-xl text-gray-200 mb-10 font-light max-w-2xl mx-auto leading-relaxed">
            Send us your current issues and incumbent contract details – we'll give you a clear, no-nonsense action plan for your {region} properties.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-secondary hover:bg-gray-100" asChild>
              <Link to="/contact">Request a Proposal</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-secondary" asChild>
              <a href="tel:08001234567" className="bg-primary">
                <Phone className="w-5 h-5 mr-2" />
                Call 24/7 Helpdesk
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GeoLandingPage;
