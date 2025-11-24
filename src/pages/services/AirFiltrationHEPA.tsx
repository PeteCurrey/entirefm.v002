import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { ServiceSchema } from "@/components/shared/SchemaMarkup";
import { FAQSection } from "@/components/shared/FAQSection";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { FAQSchema } from "@/components/shared/SchemaMarkup";
import { SidebarCTA } from "@/components/shared/SidebarCTA";

const AirFiltrationHEPA = () => {
  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Air Filtration & HEPA Systems" }
  ];

  const faqs = [
    {
      question: "What is a HEPA filter and where are they required?",
      answer: "HEPA (High Efficiency Particulate Air) filters remove at least 99.97% of particles 0.3 microns or larger. They are mandatory in cleanrooms, healthcare environments, pharmaceutical facilities, and laboratories where air quality must meet stringent standards. HEPA filters protect processes, products, and occupants from contamination."
    },
    {
      question: "How often should air filters be changed?",
      answer: "Depends on filter type, building use, and external air quality. Typical intervals: pre-filters (quarterly), bag filters (6–12 months), HEPA filters (annually or when differential pressure exceeds design limits). Neglecting filter changes causes HVAC inefficiency, energy waste, and IAQ problems."
    },
    {
      question: "What is ISO 14644 and when does it apply?",
      answer: "ISO 14644 is the international standard for cleanroom classification and monitoring. It defines particle count limits for different cleanliness classes (ISO 1 to ISO 9). Facilities such as pharmaceutical manufacturing, electronics assembly, and surgical theatres must comply with specified ISO class requirements."
    },
    {
      question: "Can dirty filters cause HVAC system failure?",
      answer: "Yes. Blocked filters increase airflow resistance, causing fans to work harder, overheating motors, and reducing system life. Extreme blockage can cause fan failure or differential pressure switches to shut down systems. Filter maintenance is essential for HVAC reliability and energy efficiency."
    },
    {
      question: "What testing validates HEPA filter performance?",
      answer: "HEPA filters are integrity tested using particle counters or aerosol photometers (e.g., DOP testing). Tests confirm filter efficiency, detect leaks, and validate installation. Testing is mandatory after installation and annually thereafter in critical environments. Non-compliant filters compromise cleanroom classification and product safety."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Air Filtration & HEPA System Compliance | ISO 14644 | Cleanroom Validation | EntireFM</title>
        <meta name="description" content="Air filtration and HEPA system compliance for cleanrooms, healthcare, and critical environments. ISO 14644 validation, filter performance testing, and IAQ improvement." />
      </Helmet>

      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema 
        name="Air Filtration & HEPA System Compliance"
        description="Air filtration and HEPA system compliance services for cleanrooms, healthcare, and critical environments across the UK. ISO 14644 validation and filter performance testing."
        provider="EntireFM"
        areaServed="United Kingdom"
      />
      <FAQSchema faqs={faqs} />

      <div className="container mx-auto px-4 py-8">
        <Breadcrumb items={breadcrumbItems} />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          <div className="lg:col-span-2">
            <section className="mb-12">
              <h1 className="text-4xl md:text-5xl font-light mb-6">
                Air Filtration & HEPA System Compliance
              </h1>
              <p className="text-xl text-muted-foreground font-light leading-relaxed">
                HEPA, bag filters, carbon filters, and airflow performance validation for cleanrooms, healthcare, and critical environments.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Why Air Filtration Matters
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                Air filtration protects indoor environments from particulate matter, allergens, pathogens, and airborne contaminants. In critical environments—such as cleanrooms, operating theatres, and pharmaceutical facilities—filtration is essential for product safety, regulatory compliance, and occupant health.
              </p>
              <p className="text-muted-foreground font-light leading-relaxed">
                Even in standard commercial buildings, filtration directly affects indoor air quality, HVAC system efficiency, and energy consumption. Inadequate filtration or neglected filter maintenance results in poor IAQ, increased HVAC load, and premature plant failure.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Filter Types & Applications
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium mb-2">HEPA Filters (H13/H14)</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    HEPA filters remove 99.97% (H13) or 99.995% (H14) of particles 0.3 microns or larger. Used in cleanrooms, laboratories, operating theatres, and pharmaceutical production. HEPA filters must be integrity tested after installation and annually to confirm performance and detect leaks.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Bag Filters (F7–F9 / ePM1–ePM10)</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Medium-efficiency bag filters are the primary filtration stage in commercial HVAC systems. They remove fine particulates, pollen, and combustion particles. Regular replacement is essential for IAQ and system efficiency. Filters are classified under ISO 16890 (ePM ratings) or legacy EN 779 (F ratings).
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Panel Pre-Filters (G3–G4 / Coarse)</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Low-efficiency pre-filters protect downstream filters and plant from coarse dust, lint, and debris. Typically installed at air intake positions. Neglecting pre-filter replacement causes rapid fouling of main filters and reduced HVAC performance.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Activated Carbon Filters</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Carbon filters remove gaseous contaminants—such as volatile organic compounds (VOCs), odours, and chemical vapours. Used in laboratories, industrial environments, and buildings affected by external pollution sources. Carbon media must be replaced based on exposure and saturation.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">ULPA Filters (U15–U17)</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Ultra-low penetration air filters exceed HEPA efficiency, removing 99.9995% or more of particles. Required in semiconductor manufacturing, nanotechnology, and ultra-clean environments. ULPA systems demand precise airflow validation and leak testing.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Cleanroom Compliance (ISO 14644)
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                ISO 14644 defines cleanroom classification based on particle count limits. Facilities must demonstrate compliance through particle count testing at defined intervals—typically annually or following significant system changes.
              </p>
              <p className="text-muted-foreground font-light leading-relaxed">
                HEPA filter integrity, airflow uniformity, and particle count testing are mandatory components of ISO 14644 compliance. Non-compliant cleanrooms risk product contamination, regulatory enforcement, and loss of operating licences in regulated industries.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Testing & Validation
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium mb-2">HEPA Filter Integrity Testing</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Integrity tests detect leaks in filter media, seals, and frames. Tests use aerosol photometers or particle counters to scan the downstream face of HEPA filters. Any leak exceeding 0.01% of upstream concentration indicates failure. Leak testing is mandatory after installation and annually.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Particle Count Testing</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Particle counters measure airborne particle concentrations to verify cleanroom classification. Testing follows ISO 14644-1 methodology, with sampling at defined locations and durations. Results confirm compliance with specified ISO class requirements.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Airflow Velocity & Uniformity</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Cleanrooms and critical environments require controlled airflow velocities. Testing confirms that airflow meets design specifications and is uniform across HEPA filter faces. Non-uniform airflow indicates system imbalance or filter blockage.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Differential Pressure Monitoring</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Differential pressure across filters indicates filter loading and replacement timing. Magnehelic gauges or BMS sensors monitor pressure drop. Exceeding maximum design pressure triggers filter change requirements.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Risks of Filter Neglect
              </h2>
              <div className="bg-muted/50 p-6 rounded-lg space-y-3">
                <p className="text-muted-foreground font-light leading-relaxed">
                  <span className="font-medium text-foreground">IAQ Degradation:</span> Blocked or exhausted filters fail to remove particulates, VOCs, and allergens, causing occupant complaints and health issues.
                </p>
                <p className="text-muted-foreground font-light leading-relaxed">
                  <span className="font-medium text-foreground">HVAC Inefficiency:</span> Dirty filters increase airflow resistance, forcing fans to work harder and consuming excessive energy. System efficiency drops significantly.
                </p>
                <p className="text-muted-foreground font-light leading-relaxed">
                  <span className="font-medium text-foreground">Cleanroom Non-Compliance:</span> Leaking or exhausted HEPA filters compromise cleanroom classification, risking product contamination and regulatory action.
                </p>
                <p className="text-muted-foreground font-light leading-relaxed">
                  <span className="font-medium text-foreground">Equipment Failure:</span> Excessive pressure drop can cause fan motor overheating, bearing failure, and premature system breakdown.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Related Services
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link to="/services/indoor-air-quality-testing" className="p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                  <h3 className="font-medium mb-2">IAQ Testing</h3>
                  <p className="text-sm text-muted-foreground font-light">Validating air quality and filtration effectiveness</p>
                </Link>
                <Link to="/services/hvac-compliance" className="p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                  <h3 className="font-medium mb-2">HVAC Compliance</h3>
                  <p className="text-sm text-muted-foreground font-light">Ventilation system performance and maintenance</p>
                </Link>
                <Link to="/services/fume-extraction-lev" className="p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                  <h3 className="font-medium mb-2">LEV Testing</h3>
                  <p className="text-sm text-muted-foreground font-light">Local exhaust ventilation and filtration compliance</p>
                </Link>
                <Link to="/services/energy-optimisation" className="p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                  <h3 className="font-medium mb-2">Energy Optimisation</h3>
                  <p className="text-sm text-muted-foreground font-light">Filter maintenance and HVAC efficiency</p>
                </Link>
              </div>
            </section>

            <section className="mb-12">
              <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg">
                <h2 className="text-2xl font-light mb-4">Request Filtration System Assessment</h2>
                <p className="text-muted-foreground font-light leading-relaxed mb-6">
                  Our air quality specialists conduct HEPA integrity testing, cleanroom validation, and filtration system audits. We support ISO 14644 compliance, IAQ improvement, and HVAC maintenance programmes. Contact us for a site-specific filtration assessment.
                </p>
                <Link 
                  to="/request-proposal" 
                  className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Request Filtration Assessment
                </Link>
              </div>
            </section>

            <FAQSection faqs={faqs} />
          </div>

          <aside className="lg:col-span-1">
            <SidebarCTA />
          </aside>
        </div>
      </div>
    </>
  );
};

export default AirFiltrationHEPA;
