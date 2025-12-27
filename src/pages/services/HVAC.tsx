import { Helmet } from "react-helmet";
import { SidebarCTA } from "@/components/shared/SidebarCTA";
import { FAQSection } from "@/components/shared/FAQSection";
import { ServiceSchema, FAQSchema } from "@/components/shared/SchemaMarkup";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle2, AlertTriangle, ArrowRight, FileText } from "lucide-react";
import { RelatedServices } from "@/components/shared/RelatedServices";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import ServiceHeroSection from "@/components/shared/ServiceHeroSection";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const HVAC = () => {
  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "HVAC Maintenance" }
  ];

  const keyFeatures = [
    {
      icon: CheckCircle2,
      title: "F-Gas Certified",
      description: "Category 1 certified engineers for refrigerant handling and compliance"
    },
    {
      icon: CheckCircle2,
      title: "All Major Brands",
      description: "Daikin, Mitsubishi, Toshiba, Carrier, Trane, York and more"
    },
    {
      icon: CheckCircle2,
      title: "Energy Optimisation",
      description: "Seasonal commissioning and efficiency improvements"
    },
    {
      icon: CheckCircle2,
      title: "24/7 Emergency",
      description: "2-hour emergency response for critical HVAC failures"
    }
  ];

  const faqs = [
    {
      question: "How often should HVAC systems be serviced?",
      answer: "Commercial HVAC systems require quarterly PPM visits as standard, with monthly filter changes, annual deep cleans, and bi-annual refrigerant checks. SFG20 schedules define specific frequencies based on system type and operational intensity."
    },
    {
      question: "What is included in HVAC maintenance?",
      answer: "Full-scope HVAC maintenance includes filter replacement, coil cleaning, refrigerant pressure checks, control calibration, belt inspections, fan motor lubrication, condenser cleaning, BMS integration checks, and thermographic surveys."
    },
    {
      question: "Do you hold F-Gas certification?",
      answer: "Yes. All our HVAC engineers hold valid F-Gas Category 1 certification for refrigerant handling, leak detection, and system commissioning in compliance with UK F-Gas regulations."
    },
    {
      question: "Can you service all HVAC brands?",
      answer: "We service all major commercial HVAC brands including Daikin, Mitsubishi, Toshiba, Carrier, Trane, York, and Lennox. We hold OEM partnerships for warranty-compliant servicing and hold critical spares for common models."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Commercial HVAC Maintenance & Air Quality UK</title>
        <meta 
          name="description" 
          content="Heating & cooling optimised for comfort, cost & compliance. Rapid response."
        />
        <link rel="canonical" href="https://entirefm.com/services/hvac" />
      </Helmet>

      <ServiceSchema 
        name="HVAC Maintenance & Servicing"
        description="Commercial HVAC maintenance, air conditioning servicing, and climate control systems"
        provider="EntireFM"
        areaServed="United Kingdom"
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={breadcrumbItems} />

      <div className="min-h-screen bg-background">
        <ServiceHeroSection
          breadcrumbItems={breadcrumbItems}
          title="HVAC That Doesn't Let You Down"
          description="Comfort, safety, and operational continuity — engineered into your air handling. F-Gas compliant servicing across all major brands."
          stats={[
            { value: "F-Gas", label: "Certified" },
            { value: "2hr", label: "Emergency Response" },
            { value: "SFG20", label: "Compliant" },
            { value: "24/7", label: "Support" }
          ]}
          primaryCTA={{
            label: "Request HVAC Proposal",
            href: "/request-proposal",
            icon: ArrowRight
          }}
          secondaryCTA={{
            label: "Book Site Survey",
            href: "/contact",
            icon: FileText
          }}
          backgroundImage="https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=1920&q=80"
        />

        {/* Key Features */}
        <section className="py-16 bg-background">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {keyFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-6 h-full hover:border-primary/50 transition-colors hover-lift">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-medium mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-12">
                
                {/* Operational Impact */}
                <div className="bg-muted/50 p-8 rounded-lg">
                  <h2 className="text-3xl font-light mb-6">
                    Operational Impact
                  </h2>
                  <p className="text-lg font-light mb-6">When HVAC fails:</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      "Occupants complain",
                      "Productivity crashes",
                      "Energy waste skyrockets",
                      "Compliance failures stack up"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <AlertTriangle className="w-5 h-5 text-accent shrink-0 mt-1" />
                        <span className="font-light">{item}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-lg font-medium mt-6">
                    We prevent every single one of those.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                    HVAC Services We Deliver
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {[
                      "Split system air conditioning",
                      "VRF / VRV multi-split systems",
                      "Chilled water systems",
                      "AHU (air handling units)",
                      "FCU (fan coil units)",
                      "Rooftop packaged units",
                      "Close control / server room cooling",
                      "Heat pumps (air source & ground source)",
                      "Ventilation & extract systems",
                      "BMS-integrated climate control",
                      "Refrigerant leak detection",
                      "Energy performance optimization"
                    ].map((service, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                        <span className="font-light">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Energy & Performance */}
                <div>
                  <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                    Energy & Performance Optimisation
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="border-l-4 border-accent pl-6">
                      <h3 className="font-medium mb-2">Smart Seasonal Commissioning</h3>
                      <p className="text-sm font-light text-muted-foreground">
                        Pre-season system optimisation ensures readiness before peak demand periods.
                      </p>
                    </div>
                    <div className="border-l-4 border-accent pl-6">
                      <h3 className="font-medium mb-2">Filter Management for Air Quality</h3>
                      <p className="text-sm font-light text-muted-foreground">
                        Proactive filter replacement schedules maintain indoor air quality compliance.
                      </p>
                    </div>
                    <div className="border-l-4 border-accent pl-6">
                      <h3 className="font-medium mb-2">Thermographic & Vibration Analysis</h3>
                      <p className="text-sm font-light text-muted-foreground">
                        Advanced diagnostics on critical assets identify failures before they occur.
                      </p>
                    </div>
                    <div className="border-l-4 border-accent pl-6">
                      <h3 className="font-medium mb-2">Energy-Saving Technology Upgrades</h3>
                      <p className="text-sm font-light text-muted-foreground">
                        ROI projections included for LED retrofits, VSD installations, and BMS upgrades.
                      </p>
                    </div>
                  </div>
                  <div className="mt-8 p-6 bg-charcoal text-white rounded-lg">
                    <p className="text-lg font-light">
                      <strong>Result:</strong> Lower OpEx, improved wellness, stronger ESG results.
                    </p>
                  </div>
                </div>

                {/* Statutory Requirements */}
                <div>
                  <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                    Statutory Requirements Covered
                  </h2>
                  <p className="text-muted-foreground font-light mb-6">
                    We manage legal obligations end-to-end:
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    {[
                      "F-Gas regulation compliance, leak logs & certifications",
                      "TM44 inspections & energy efficiency audits",
                      "Indoor Air Quality monitoring & reporting (business-critical in 2025)"
                    ].map((item, index) => (
                      <div key={index} className="p-4 border border-border rounded-lg">
                        <CheckCircle2 className="w-5 h-5 text-accent mb-2" />
                        <p className="text-sm font-light">{item}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8">
                    <Button variant="outline" asChild>
                      <Link to="/resources">Download HVAC Compliance Guide</Link>
                    </Button>
                  </div>
                </div>

                <RelatedServices 
                  services={[
                    {
                      title: "PPM Delivery",
                      description: "Scheduled HVAC maintenance and filter replacement programs",
                      link: "/fm-operations/ppm-delivery"
                    },
                    {
                      title: "Reactive Maintenance",
                      description: "Emergency HVAC repairs and 24/7 climate control response",
                      link: "/fm-operations/reactive-maintenance"
                    },
                    {
                      title: "Asset Lifecycle Planning",
                      description: "HVAC system condition surveys and replacement forecasting",
                      link: "/fm-operations/asset-lifecycle"
                    }
                  ]}
                />

                <FAQSection faqs={faqs} />
              </div>

              <aside className="lg:col-span-1">
                <div className="sticky top-24">
                  <SidebarCTA />
                </div>
              </aside>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HVAC;