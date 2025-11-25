import { Helmet } from "react-helmet";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { SidebarCTA } from "@/components/shared/SidebarCTA";
import { FAQSection } from "@/components/shared/FAQSection";
import { ServiceSchema, FAQSchema } from "@/components/shared/SchemaMarkup";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle2, AlertTriangle } from "lucide-react";
import { RelatedServices } from "@/components/shared/RelatedServices";
import { KnowledgeCentreCTA } from "@/components/shared/KnowledgeCentreCTA";
import { DualCTA } from "@/components/shared/DualCTA";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";

const HVAC = () => {
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

      <div className="min-h-screen pt-20">
        <div className="container mx-auto px-6 py-8">
          <Breadcrumb items={[
            { label: "Services", href: "/services" },
            { label: "HVAC Maintenance" }
          ]} />

          <div className="grid lg:grid-cols-3 gap-12 mt-8">
            <div className="lg:col-span-2 space-y-12">
              <header>
                <h1 className="text-4xl md:text-5xl font-light mb-4 underline-accent inline-block">
                  HVAC That Doesn't Let You Down.
                </h1>
                <p className="text-xl text-muted-foreground font-light leading-relaxed mb-8">
                  Comfort, safety, and operational continuity — engineered into your air handling.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" asChild>
                    <Link to="/contact">Request HVAC Proposal</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link to="/contact">Book Site Survey</Link>
                  </Button>
                </div>
              </header>

              {/* Operational Impact */}
              <section className="bg-muted/30 p-8 rounded-lg">
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
              </section>

              <section>
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
              </section>

              {/* Energy & Performance */}
              <section>
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
              </section>

              {/* Statutory Requirements */}
              <section>
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
              </section>

              {/* Asset-Centric Maintenance */}
              <section className="bg-muted/30 p-8 rounded-lg">
                <h2 className="text-3xl font-light mb-6">
                  Asset-Centric Maintenance Strategy
                </h2>
                <p className="text-muted-foreground font-light mb-6">
                  We create customised <Link to="/fm-operations/ppm-delivery" className="text-primary hover:underline">PPM schedules</Link> informed by:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Asset age & utilisation",
                    "Manufacturer guidance",
                    "Building use & occupancy",
                    "Business continuity risk level"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                      <span className="font-light">{item}</span>
                    </div>
                  ))}
                </div>
                <p className="text-lg font-medium mt-6">
                  Zero copy-paste maintenance plans. We engineer outcomes.
                </p>
              </section>

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
                  },
                  {
                    title: "Energy Audits",
                    description: "HVAC efficiency analysis and optimization strategies",
                    link: "/services/energy-audits"
                  }
                ]}
              />

              {/* FAQs Optimised to Rank */}
              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  FAQs (Optimised to Rank)
                </h2>
                <div className="space-y-6">
                  <div className="border-l-4 border-accent pl-6">
                    <h3 className="font-medium mb-2">How often should commercial HVAC be serviced?</h3>
                    <p className="text-sm font-light text-muted-foreground">
                      Typically quarterly, though heavy-use or critical assets may require monthly inspections. SFG20 schedules define specific frequencies.
                    </p>
                  </div>
                  <div className="border-l-4 border-accent pl-6">
                    <h3 className="font-medium mb-2">Do you support legacy HVAC systems?</h3>
                    <p className="text-sm font-light text-muted-foreground">
                      Yes — and we specialise in optimising "end of lifecycle" assets to buy time before replacement CAPEX is required.
                    </p>
                  </div>
                  <div className="border-l-4 border-accent pl-6">
                    <h3 className="font-medium mb-2">Do you provide emergency HVAC call-outs?</h3>
                    <p className="text-sm font-light text-muted-foreground">
                      24/7. If your air stops, we start. 2-hour emergency response as standard.
                    </p>
                  </div>
                  <div className="border-l-4 border-accent pl-6">
                    <h3 className="font-medium mb-2">Do you hold F-Gas certification?</h3>
                    <p className="text-sm font-light text-muted-foreground">
                      Yes. All our HVAC engineers hold valid F-Gas Category 1 certification for refrigerant handling, leak detection, and system commissioning.
                    </p>
                  </div>
                </div>
              </section>

              {/* Related Sectors */}
              <section className="bg-muted/30 p-8 rounded-lg">
                <h2 className="text-3xl font-light mb-6">
                  Sectors We Serve
                </h2>
                <p className="text-muted-foreground font-light mb-6">
                  HVAC excellence across:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <Link to="/sectors/offices-corporate" className="p-4 border border-border rounded-lg hover:border-primary transition-colors">
                    <p className="font-light hover:text-primary">Offices & Corporate HQs</p>
                  </Link>
                  <Link to="/sectors/industrial-logistics" className="p-4 border border-border rounded-lg hover:border-primary transition-colors">
                    <p className="font-light hover:text-primary">Industrial & Logistics</p>
                  </Link>
                  <Link to="/sectors/retail-service-stations" className="p-4 border border-border rounded-lg hover:border-primary transition-colors">
                    <p className="font-light hover:text-primary">Retail & Service Stations</p>
                  </Link>
                  <Link to="/sectors/hospitality-leisure" className="p-4 border border-border rounded-lg hover:border-primary transition-colors">
                    <p className="font-light hover:text-primary">Hospitality & Leisure</p>
                  </Link>
                </div>
              </section>

              {/* Final CTA */}
              <section className="border-t border-border pt-12">
                <div className="text-center bg-charcoal text-white p-12 rounded-lg">
                  <h2 className="text-3xl font-light mb-4">
                    Stop losing hours of productivity to poor air and warm rooms.
                  </h2>
                  <p className="text-lg text-gray-300 font-light mb-8 max-w-2xl mx-auto">
                    Speak to our HVAC engineers today — and feel the difference this week.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" variant="secondary" className="bg-white text-charcoal hover:bg-gray-100" asChild>
                      <Link to="/contact">Get Your HVAC Plan</Link>
                    </Button>
                    <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-charcoal" asChild>
                      <Link to="/about">View Our Accreditations</Link>
                    </Button>
                  </div>
                </div>
              </section>
            </div>

            <aside className="lg:col-span-1">
              <div className="sticky top-24">
                <SidebarCTA />
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
};

export default HVAC;
