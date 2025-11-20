import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Clock, Shield, Smartphone } from "lucide-react";
import ServiceCard from "@/components/shared/ServiceCard";
import SectorCard from "@/components/shared/SectorCard";
import MetricCard from "@/components/shared/MetricCard";
import CaseStudyCard from "@/components/shared/CaseStudyCard";
import heroImage from "@/assets/hero-london.jpg";
import industrialImage from "@/assets/industrial-facility.jpg";
import officeImage from "@/assets/office-interior.jpg";
const Home = () => {
  return <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: `url(${heroImage})`
      }}>
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-5xl text-white mb-6 leading-tight animate-fade-in-up font-extralight md:text-4xl">
              Facilities Management &amp; FM Support Services
            </h1>
            <p style={{
            animationDelay: "0.2s"
          }} className="text-xl text-gray-200 mb-8 leading-relaxed max-w-2xl animate-fade-in-up font-extralight md:text-xl text-left tracking-wider">
              Your Dedicated Facilities Management Company
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{
            animationDelay: "0.4s"
          }}>
              <Button size="lg" asChild>
                <Link to="/contact">Request a Proposal</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-white hover:bg-white hover:text-charcoal" asChild>
                <Link to="/case-studies">View Case Studies</Link>
              </Button>
            </div>
          </div>

          {/* Metrics Dashboard */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl animate-fade-in-up" style={{
          animationDelay: "0.6s"
        }}>
            <MetricCard value="41" label="Avg response time (mins)" />
            <MetricCard value="87" label="First-time fix rate" suffix="%" />
            <MetricCard value="120" label="Sites under management" suffix="+" />
            <MetricCard value="98" label="SLA compliance" suffix="%" />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-6">
          <p className="text-center text-sm text-muted-foreground mb-8 font-light">
            Trusted by operations teams across the UK
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-50">
            {["Logistics Group", "Retail Chain", "Aviation Hub", "Property Fund", "Industrial Estate"].map(client => <div key={client} className="text-lg font-light text-muted-foreground">
                {client}
              </div>)}
          </div>
        </div>
      </section>

      {/* FM Partner Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl mb-6 underline-accent inline-block font-extralight">
              Your Space, Our Expertise.     
            </h2>
            <p className="text-muted-foreground leading-relaxed text-xl font-extralight">
              Complete Facilities Management &amp; FM Support Services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[{
            icon: CheckCircle2,
            title: "No more chasing contractors",
            description: "Dedicated helpdesk and single point of contact. We own the problem until it's solved."
          }, {
            icon: Shield,
            title: "Compliance without the chaos",
            description: "PPM schedules, digital asset registers, and clear audit trails. Everything documented."
          }, {
            icon: Smartphone,
            title: "Tech-enabled, not tech-distracted",
            description: "CAFM platform, live portals, and real-time job tracking without the complexity."
          }, {
            icon: Clock,
            title: "Owner-led, no corporate scripts",
            description: "Direct access to decision makers. Quick responses. Real accountability."
          }].map((feature, index) => <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-light mb-3">{feature.title}</h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">
                  {feature.description}
                </p>
              </div>)}
          </div>
        </div>
      </section>

      {/* Service Matrix */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-6 underline-accent inline-block">
              What We Deliver
            </h2>
            <p className="text-lg text-muted-foreground font-light max-w-2xl leading-relaxed">
              Integrated FM combining hard, soft and project services under one contract. Or standalone services tailored to your needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <ServiceCard title="Hard Services & M&E" description="Mechanical, electrical, and building fabric maintenance" items={["HVAC, electrical, mechanical systems", "Plumbing, gas, and drainage", "Emergency systems and lighting", "Energy optimisation and BMS"]} />
            <ServiceCard title="Compliance & Life Safety" description="Statutory compliance and risk management" items={["Fire alarms, emergency lighting, extinguishers", "FRA actions and remediation", "Gas safety, water hygiene, LOLER", "Complete audit trails"]} />
            <ServiceCard title="Soft Services & Workplace" description="Day-to-day operations and environment management" items={["Commercial cleaning and washrooms", "Grounds maintenance and waste", "Reception and concierge services", "Security coordination"]} />
            <ServiceCard title="Projects & Small Works" description="From minor works to complete fit-outs" items={["Office and retail fit-outs", "Building refurbishments", "Service station upgrades", "Landlord make-good works"]} />
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
              Where We Operate
            </h2>
            <p className="text-lg text-muted-foreground font-light max-w-2xl leading-relaxed">
              Sector-specific understanding across diverse environments.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <SectorCard title="Offices & Corporate" description="Grade A to multi-let schemes. Workplace services that support productivity." image={officeImage} />
            <SectorCard title="Industrial & Logistics" description="24/7 operations. Critical infrastructure. Minimal disruption to workflow." image={industrialImage} />
            <SectorCard title="Retail & Service Stations" description="Customer-facing environments. Out-of-hours works. Brand standards maintained." image={officeImage} />
            <SectorCard title="Aviation & Transport" description="Regulated environments. Security clearances. Complex operational interfaces." image={industrialImage} />
            <SectorCard title="Residential & PBSA" description="Resident satisfaction. Common areas. Estate management." image={officeImage} />
            <SectorCard title="Construction & Developments" description="Site progression support. Handover coordination. Defects management." image={industrialImage} />
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

      {/* Case Studies Preview */}
      <section className="py-24 bg-charcoal text-white">
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-6 underline-accent inline-block">
              Proof in Action
            </h2>
            <p className="text-lg text-gray-400 font-light max-w-2xl leading-relaxed">
              Real results for real clients.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <CaseStudyCard sector="Logistics" title="Reducing reactive call-outs by 32% for regional logistics hub" metrics={["Response time cut from 2hrs to 41 mins", "£47k annual cost savings", "98% SLA compliance achieved"]} />
            <CaseStudyCard sector="Aviation" title="Delivering compliant FM across 3 UK airports" metrics={["Zero compliance breaches in 18 months", "24/7 helpdesk response maintained", "Security-cleared engineer network"]} />
            <CaseStudyCard sector="Mixed-Use" title="Integrated FM for 12-building commercial estate" metrics={["Single point of contact for all trades", "Tenant satisfaction up 34%", "Digital asset register deployed"]} />
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-charcoal" asChild>
              <Link to="/case-studies">
                View All Case Studies
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-r from-secondary to-secondary/80 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-6">
            Ready to fix your facilities management problem?
          </h2>
          <p className="text-xl text-gray-200 mb-10 font-light max-w-2xl mx-auto leading-relaxed">
            Send us your current issues and incumbent contract details – we'll give you a clear, no-nonsense action plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-secondary hover:bg-gray-100" asChild>
              <Link to="/contact">Request a Proposal</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-secondary" asChild>
              <a href="tel:08001234567">Call 24/7 Helpdesk</a>
            </Button>
          </div>
        </div>
      </section>
    </div>;
};
export default Home;