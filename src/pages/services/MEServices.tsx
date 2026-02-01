import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { 
  Thermometer, 
  Zap, 
  Droplets, 
  Flame, 
  Fan, 
  Settings,
  ArrowRight,
  Phone,
  CheckCircle2,
  Shield,
  Clock,
  FileCheck
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SchemaMarkup, FAQSchema, ServiceSchema } from "@/components/shared/SchemaMarkup";
import { FAQSection } from "@/components/shared/FAQSection";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import ServiceHeroSection from "@/components/shared/ServiceHeroSection";
import AnimatedSection from "@/components/shared/AnimatedSection";
import FeatureCardGrid from "@/components/shared/FeatureCardGrid";
import StatsBanner from "@/components/shared/StatsBanner";
import CTASection from "@/components/shared/CTASection";
import ContentSection from "@/components/shared/ContentSection";
import ServiceFeatureList from "@/components/shared/ServiceFeatureList";
import { TrustBar } from "@/components/shared/TrustBar";

const MEServices = () => {
  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Mechanical & Electrical Services" }
  ];

  const heroStats = [
    { value: "99.5", suffix: "%", label: "Uptime Achieved" },
    { value: "24/7", label: "Emergency Response" },
    { value: "100", suffix: "%", label: "Compliance Rate" },
    { value: "4", suffix: "hr", label: "SLA Response" }
  ];

  const features = [
    {
      icon: Thermometer,
      title: "HVAC Systems",
      description: "Air conditioning, ventilation, heating, chillers, AHUs, FCUs, and BMS-integrated climate control."
    },
    {
      icon: Zap,
      title: "Electrical Services",
      description: "Power distribution, testing (EICRs), emergency lighting, fire alarms, and standby systems."
    },
    {
      icon: Flame,
      title: "Gas & Heating",
      description: "Commercial boilers, Gas Safe compliance, hot water systems, and combustion efficiency testing."
    },
    {
      icon: Droplets,
      title: "Plumbing & Water",
      description: "Pipework, drainage, sanitary ware, pumps, and water hygiene compliance (L8)."
    },
    {
      icon: Fan,
      title: "Ventilation Systems",
      description: "Extract fans, LEV systems, kitchen extraction, and indoor air quality management."
    },
    {
      icon: Settings,
      title: "BMS & Controls",
      description: "Building management systems, control integration, optimization, and energy monitoring."
    }
  ];

  const mechanicalServices = [
    {
      title: "HVAC Maintenance",
      description: "Complete heating, ventilation, and air conditioning services including chillers, AHUs, FCUs, VRV/VRF systems, and ducted distribution. F-Gas compliance and energy efficiency optimization for commercial environments."
    },
    {
      title: "Boiler & Heating Systems",
      description: "Commercial boiler servicing, radiator systems, underfloor heating, and hot water generation. Annual Gas Safe inspections, combustion analysis, and thermostatic control calibration."
    },
    {
      title: "Pumps, Motors & Mechanical Plant",
      description: "Circulation pumps, booster sets, sump pumps, and motor-driven equipment. Vibration analysis, bearing replacement, variable speed drive servicing, and performance monitoring."
    }
  ];

  const electricalServices = [
    {
      title: "Power Distribution & Testing",
      description: "EICR compliance testing, fixed wire testing, distribution board maintenance, circuit breaker testing, thermal imaging, and earth loop impedance verification under BS 7671."
    },
    {
      title: "Emergency & Safety Systems",
      description: "Emergency lighting (BS 5266-1), fire alarm systems (BS 5839-1), and standby power. Monthly testing, annual duration tests, panel maintenance, and battery replacements."
    },
    {
      title: "Lighting & Control Systems",
      description: "General lighting maintenance, LED retrofits, PIR sensor calibration, high-bay lighting, and intelligent lighting control systems for energy optimization."
    }
  ];

  const stats = [
    { value: "500", suffix: "+", label: "Sites Under Management" },
    { value: "2", suffix: "hr", label: "Emergency Response" },
    { value: "99.5", suffix: "%", label: "First-Time Fix Rate" },
    { value: "100", suffix: "%", label: "Compliance Achieved" }
  ];

  const faqs = [
    {
      question: "What is included in M&E services?",
      answer: "M&E covers mechanical systems (HVAC, boilers, chillers, pumps, ventilation) and electrical systems (power distribution, lighting, emergency systems, fire alarms). Essentially all engineered building systems requiring specialist maintenance."
    },
    {
      question: "What qualifications do M&E engineers need?",
      answer: "M&E engineers require NVQ Level 3 qualifications as minimum, plus trade-specific accreditations: 18th Edition for electrical, F-Gas for HVAC refrigerants, Gas Safe for gas systems, and manufacturer approvals for specialist equipment."
    },
    {
      question: "How often should M&E maintenance occur?",
      answer: "Critical systems require quarterly or monthly PPM visits. Statutory testing like EICRs occurs every 5 years, fire alarms weekly, and emergency lighting monthly. Frequency depends on system criticality, age, and manufacturer recommendations."
    },
    {
      question: "Can M&E services be delivered out of hours?",
      answer: "Yes. We schedule M&E works during low-occupancy periods to minimize disruption. Emergency response is available 24/7 for critical system failures affecting building operations or safety."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Mechanical & Electrical Services | M&E Maintenance UK | EntireFM</title>
        <meta name="description" content="Comprehensive M&E maintenance for commercial buildings. HVAC, electrical, plumbing, and compliance services with 24/7 emergency response across the UK." />
        <link rel="canonical" href="https://entirefm.com/services/m-and-e" />
      </Helmet>

      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema 
        name="Mechanical & Electrical Services"
        description="Comprehensive M&E maintenance for commercial buildings including HVAC, electrical, plumbing, and compliance services."
        provider="EntireFM"
        areaServed="United Kingdom"
      />
      <FAQSchema faqs={faqs} />

      {/* Hero Section */}
      <ServiceHeroSection
        breadcrumbItems={breadcrumbItems}
        title="Mechanical & Electrical Services"
        description="Complete M&E maintenance for mission-critical buildings. Planned preventative maintenance, rapid reactive response, and full statutory compliance across your commercial estate."
        stats={heroStats}
        primaryCTA={{ label: "Request Proposal", href: "/request-proposal", icon: ArrowRight }}
        secondaryCTA={{ label: "0800 024 8550", href: "tel:08000248550", icon: Phone }}
        backgroundImage="/images/services/me-services-hero.jpg"
      />

      {/* Trust Bar */}
      <TrustBar variant="compact" />

      {/* Features Grid */}
      <ContentSection
        title="Complete M&E Coverage"
        subtitle="All mechanical, electrical, and building services systems maintained by qualified engineers with trade-specific accreditations."
        centered
      >
        <FeatureCardGrid features={features} columns={3} variant="gradient" />
      </ContentSection>

      {/* Stats Banner */}
      <StatsBanner stats={stats} variant="gradient" />

      {/* Mechanical Services */}
      <ContentSection
        title="Mechanical Services"
        subtitle="HVAC, heating, plumbing, and mechanical plant maintained to manufacturer specifications and SFG20 standards."
        variant="muted"
      >
        <div className="grid lg:grid-cols-3 gap-8">
          {mechanicalServices.map((service, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <div className="h-full p-8 bg-card border border-border rounded-2xl hover:border-primary/30 transition-all group">
                <h3 className="text-xl font-medium mb-4 text-foreground group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-muted-foreground font-light leading-relaxed">{service.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <Button variant="outline" asChild className="hover-lift">
            <Link to="/services/hvac">
              Explore HVAC Services
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </ContentSection>

      {/* Electrical Services */}
      <ContentSection
        title="Electrical Services"
        subtitle="Power systems, emergency lighting, fire alarms, and standby generation maintained to BS 7671 and statutory requirements."
      >
        <div className="grid lg:grid-cols-3 gap-8">
          {electricalServices.map((service, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <div className="h-full p-8 bg-gradient-to-br from-muted/50 to-background border border-border rounded-2xl hover:border-primary/30 transition-all group">
                <h3 className="text-xl font-medium mb-4 text-foreground group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-muted-foreground font-light leading-relaxed">{service.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <Button variant="outline" asChild className="hover-lift">
            <Link to="/services/electrical">
              Explore Electrical Services
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </ContentSection>

      {/* Compliance Section */}
      <ContentSection
        title="M&E Compliance & Testing"
        subtitle="All statutory testing requirements managed, documented, and tracked through our digital compliance platform."
        variant="gradient"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Electrical Testing",
              items: [
                "5-yearly EICR compliance (BS 7671)",
                "PAT testing for portable appliances",
                "Thermal imaging surveys",
                "Earth loop impedance verification"
              ]
            },
            {
              title: "Fire & Life Safety",
              items: [
                "Weekly fire alarm call point tests",
                "Quarterly system servicing",
                "Monthly emergency lighting tests",
                "Annual 3-hour duration tests"
              ]
            },
            {
              title: "Mechanical Compliance",
              items: [
                "Annual F-Gas leak detection",
                "Gas Safe boiler inspections",
                "LOLER lift examinations",
                "PSSR pressure system inspections"
              ]
            }
          ].map((section, idx) => (
            <AnimatedSection key={idx} delay={idx * 0.1}>
              <div className="p-8 bg-card border border-border rounded-2xl h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <FileCheck className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-medium">{section.title}</h3>
                </div>
                <ul className="space-y-3">
                  {section.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground font-light">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </ContentSection>

      {/* Delivery Model */}
      <ContentSection
        title="How We Deliver M&E Services"
        subtitle="Multi-skilled engineers, integrated PPM schedules, and 24/7 reactive response ensure your buildings operate without interruption."
        variant="muted"
      >
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <AnimatedSection delay={0}>
            <div className="p-8 bg-card border border-border rounded-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-medium">Qualified Engineers</h3>
              </div>
              <ul className="space-y-2 text-muted-foreground font-light">
                <li>• 18th Edition electricians</li>
                <li>• F-Gas certified HVAC technicians</li>
                <li>• Gas Safe registered engineers</li>
                <li>• Manufacturer-trained specialists</li>
              </ul>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="p-8 bg-card border border-border rounded-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-medium">24/7 Response</h3>
              </div>
              <ul className="space-y-2 text-muted-foreground font-light">
                <li>• 2-hour emergency response SLA</li>
                <li>• National helpdesk with engineer dispatch</li>
                <li>• Real-time job tracking</li>
                <li>• Escalation protocols for critical failures</li>
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </ContentSection>

      {/* FAQ Section */}
      <ContentSection
        title="Frequently Asked Questions"
        centered
      >
        <div className="max-w-3xl mx-auto">
          <FAQSection faqs={faqs} />
        </div>
      </ContentSection>

      {/* CTA Section */}
      <CTASection
        title="Ready to Discuss M&E Requirements?"
        description="Talk to our team about mechanical and electrical services for your commercial estate. Expert advice, transparent pricing, no obligation."
        primaryLabel="Request Proposal"
        primaryHref="/request-proposal"
        secondaryLabel="Call 0800 024 8550"
        secondaryHref="tel:08000248550"
        variant="dark"
      />
    </>
  );
};

export default MEServices;
