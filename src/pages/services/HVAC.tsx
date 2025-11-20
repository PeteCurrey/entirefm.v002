import { Helmet } from "react-helmet";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { SidebarCTA } from "@/components/shared/SidebarCTA";
import { FAQSection } from "@/components/shared/FAQSection";
import { ServiceSchema, FAQSchema } from "@/components/shared/SchemaMarkup";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle2, AlertTriangle } from "lucide-react";

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
        <title>Commercial HVAC Maintenance & Servicing UK | Air Conditioning Repairs | EntireFM</title>
        <meta 
          name="description" 
          content="Expert commercial HVAC maintenance across the UK. Air conditioning servicing, repairs, and compliance with F-Gas certification. Reduce breakdowns and energy costs."
        />
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
                  Commercial HVAC Maintenance That Prevents Costly Breakdowns
                </h1>
                <p className="text-xl text-muted-foreground font-light leading-relaxed">
                  Maintain optimal comfort, reduce energy waste, and avoid emergency failures with preventative HVAC servicing across your UK sites.
                </p>
              </header>

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

              <section className="bg-muted/30 p-8 rounded-lg">
                <div className="flex items-start gap-4 mb-6">
                  <AlertTriangle className="w-8 h-8 text-accent shrink-0" />
                  <h2 className="text-2xl font-light">
                    HVAC Problems That Impact Your Business
                  </h2>
                </div>
                <ul className="space-y-3 font-light text-muted-foreground">
                  <li><strong>Summer breakdowns:</strong> AC failures during peak demand cause productivity losses and staff complaints</li>
                  <li><strong>Poor indoor air quality:</strong> Dirty filters and coils circulate dust, allergens, and bacteria</li>
                  <li><strong>High energy bills:</strong> Inefficient systems waste 20-30% more energy than well-maintained units</li>
                  <li><strong>Refrigerant leaks:</strong> F-Gas non-compliance risks fines up to £200,000 and environmental damage</li>
                  <li><strong>Short equipment life:</strong> Neglected HVAC systems fail years before expected lifecycle</li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Our HVAC PPM Schedule
                </h2>
                <div className="space-y-4">
                  <div className="border-l-4 border-accent pl-6">
                    <h3 className="font-medium mb-2">Quarterly Visits (Standard)</h3>
                    <p className="text-sm font-light text-muted-foreground">
                      Filter inspection & replacement, coil visual inspection, refrigerant pressure check, control functionality test, condensate drain clearance, electrical connections check, operational performance verification.
                    </p>
                  </div>
                  <div className="border-l-4 border-accent pl-6">
                    <h3 className="font-medium mb-2">Bi-Annual Deep Service</h3>
                    <p className="text-sm font-light text-muted-foreground">
                      Full coil chemical clean, refrigerant leak test, thermographic survey, fan motor lubrication, belt tension adjustment, control calibration, BMS integration check.
                    </p>
                  </div>
                  <div className="border-l-4 border-accent pl-6">
                    <h3 className="font-medium mb-2">Annual Compliance</h3>
                    <p className="text-sm font-light text-muted-foreground">
                      F-Gas leak testing (systems over 3kg charge), energy efficiency assessment, asset condition report, lifecycle recommendations.
                    </p>
                  </div>
                </div>
              </section>

              <FAQSection faqs={faqs} />

              <section className="border-t border-border pt-12">
                <div className="text-center">
                  <h2 className="text-3xl font-light mb-4">
                    Get a Fixed-Price HVAC Maintenance Plan
                  </h2>
                  <p className="text-lg text-muted-foreground font-light mb-8 max-w-2xl mx-auto">
                    Tell us about your HVAC systems and current servicing gaps. We'll provide a costed PPM plan with SLAs and energy savings projections.
                  </p>
                  <Button size="lg" asChild>
                    <Link to="/contact">Request HVAC Proposal</Link>
                  </Button>
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
