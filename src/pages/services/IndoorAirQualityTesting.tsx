import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { ServiceSchema } from "@/components/shared/SchemaMarkup";
import { FAQSection } from "@/components/shared/FAQSection";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { FAQSchema } from "@/components/shared/SchemaMarkup";
import { SidebarCTA } from "@/components/shared/SidebarCTA";

const IndoorAirQualityTesting = () => {
  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Indoor Air Quality Testing" }
  ];

  const faqs = [
    {
      question: "What parameters are measured during IAQ testing?",
      answer: "Carbon dioxide (CO₂), particulate matter (PM2.5, PM10), volatile organic compounds (VOCs), temperature, relative humidity, and carbon monoxide (CO). Additional tests may include formaldehyde, radon, and biological contaminants depending on building use and occupant complaints."
    },
    {
      question: "What CO₂ levels are acceptable in offices?",
      answer: "CIBSE recommends maintaining CO₂ levels below 1000 ppm in occupied spaces. Levels above 1500 ppm indicate inadequate ventilation and are associated with reduced cognitive performance, fatigue, and increased absence rates. Persistent high CO₂ suggests HVAC system deficiency."
    },
    {
      question: "Can poor indoor air quality cause legal liability?",
      answer: "Yes. Under the Health and Safety at Work Act 1974 and the Workplace (Health, Safety and Welfare) Regulations 1992, employers must provide adequate ventilation and a healthy working environment. Persistent poor IAQ resulting in occupant illness can lead to civil claims and HSE enforcement action."
    },
    {
      question: "How does IAQ affect building performance certifications?",
      answer: "IAQ is increasingly assessed under BREEAM, WELL, and Fitwel building standards. Poor IAQ results in lower certification scores, reduced building value, and tenant dissatisfaction. ESG-focused investors and occupiers now regard IAQ as a core building performance metric."
    },
    {
      question: "What is the connection between HVAC systems and IAQ?",
      answer: "HVAC systems control fresh air supply, filtration, and air distribution. Defective HVAC systems—such as blocked filters, inadequate outside air intake, or recirculation of contaminated air—are the primary cause of IAQ problems. Regular HVAC maintenance is essential for acceptable IAQ."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Indoor Air Quality (IAQ) Testing | Workplace Health & HVAC Performance | EntireFM</title>
        <meta name="description" content="Indoor air quality testing for commercial, education, and residential buildings. Assessing CO₂, VOCs, particulates, and ventilation effectiveness to protect occupant health." />
      </Helmet>

      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema 
        name="Indoor Air Quality (IAQ) Testing"
        description="Indoor air quality testing for commercial, education, and residential buildings across the UK. Assessing CO₂, VOCs, particulates, and ventilation effectiveness."
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
                Indoor Air Quality (IAQ) Testing
              </h1>
              <p className="text-xl text-muted-foreground font-light leading-relaxed">
                Air quality assessments for workplaces, education estates, and residential buildings. Measuring CO₂, VOCs, particulates, and ventilation effectiveness.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Why Indoor Air Quality Matters
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                Poor indoor air quality causes headaches, fatigue, respiratory problems, and reduced cognitive performance. Long-term exposure to elevated pollutant levels increases the risk of chronic respiratory and cardiovascular disease.
              </p>
              <p className="text-muted-foreground font-light leading-relaxed">
                Post-pandemic awareness of ventilation and airborne transmission has elevated IAQ to a core building performance and ESG metric. Building owners, employers, and occupiers now expect verifiable evidence of acceptable air quality through regular testing and monitoring.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                What We Test
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium mb-2">Carbon Dioxide (CO₂)</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    CO₂ concentration is the primary indicator of ventilation adequacy. Elevated CO₂ levels signal insufficient fresh air supply and are associated with reduced concentration, decision-making ability, and occupant discomfort. CIBSE guidance recommends maintaining levels below 1000 ppm.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Particulate Matter (PM2.5 / PM10)</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Fine particulate matter from outdoor pollution, construction dust, and internal sources causes respiratory irritation and long-term health risks. Filtration systems and HVAC design directly affect particulate levels. WHO guidelines recommend PM2.5 below 10 µg/m³.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Volatile Organic Compounds (VOCs)</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    VOCs are emitted from building materials, furniture, cleaning products, and office equipment. High VOC concentrations cause odour complaints, headaches, and nausea. Testing identifies sources and informs remedial measures such as increased ventilation or material substitution.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Temperature & Relative Humidity</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Temperature and humidity affect thermal comfort and mould risk. The Workplace (Health, Safety and Welfare) Regulations require reasonable indoor temperatures. High humidity (above 70%) encourages mould growth; low humidity (below 30%) causes dry eyes and respiratory discomfort.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Carbon Monoxide (CO)</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    CO is a toxic gas produced by incomplete combustion in boilers, gas heaters, or vehicle exhausts in loading bays and car parks. Even low-level exposure causes headaches and dizziness. Testing detects hazardous concentrations before serious health incidents occur.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                HVAC System Interaction
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                Indoor air quality is directly dependent on HVAC system performance. Inadequate outside air supply, blocked filters, poor air distribution, and defective controls are the most common causes of IAQ complaints.
              </p>
              <p className="text-muted-foreground font-light leading-relaxed">
                IAQ testing should be conducted alongside HVAC inspections to identify system deficiencies and validate corrective measures. Testing confirms whether ventilation rates meet design intent and regulatory standards.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Health & Regulatory Considerations
              </h2>
              <div className="bg-muted/50 p-6 rounded-lg space-y-3">
                <p className="text-muted-foreground font-light leading-relaxed">
                  <span className="font-medium text-foreground">Workplace Regulations:</span> The Workplace (Health, Safety and Welfare) Regulations 1992 require employers to provide adequate ventilation. Failure to maintain acceptable IAQ breaches these duties.
                </p>
                <p className="text-muted-foreground font-light leading-relaxed">
                  <span className="font-medium text-foreground">Building Performance:</span> ESG frameworks, BREEAM, and WELL certifications increasingly require IAQ monitoring and evidence of acceptable air quality as part of building performance assessments.
                </p>
                <p className="text-muted-foreground font-light leading-relaxed">
                  <span className="font-medium text-foreground">Occupant Productivity:</span> Studies demonstrate that improved IAQ increases cognitive performance, reduces absenteeism, and enhances tenant satisfaction—particularly relevant for office and education environments.
                </p>
                <p className="text-muted-foreground font-light leading-relaxed">
                  <span className="font-medium text-foreground">Post-Pandemic Standards:</span> Heightened awareness of airborne transmission has made IAQ testing a standard due diligence requirement for landlords, occupiers, and institutional investors.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Related Services
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link to="/services/hvac-compliance" className="p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                  <h3 className="font-medium mb-2">HVAC Compliance</h3>
                  <p className="text-sm text-muted-foreground font-light">Ventilation system testing and performance validation</p>
                </Link>
                <Link to="/services/air-filtration-hepa" className="p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                  <h3 className="font-medium mb-2">Air Filtration & HEPA Systems</h3>
                  <p className="text-sm text-muted-foreground font-light">Filter performance and air quality improvement</p>
                </Link>
                <Link to="/services/energy-optimisation" className="p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                  <h3 className="font-medium mb-2">Energy Optimisation</h3>
                  <p className="text-sm text-muted-foreground font-light">HVAC efficiency and IAQ balance</p>
                </Link>
                <Link to="/services/fume-extraction-lev" className="p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                  <h3 className="font-medium mb-2">LEV Testing</h3>
                  <p className="text-sm text-muted-foreground font-light">Local exhaust ventilation compliance</p>
                </Link>
              </div>
            </section>

            <section className="mb-12">
              <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg">
                <h2 className="text-2xl font-light mb-4">Request IAQ Assessment</h2>
                <p className="text-muted-foreground font-light leading-relaxed mb-6">
                  Our IAQ specialists conduct comprehensive air quality testing across commercial, education, and residential buildings. We provide detailed reports with actionable recommendations and HVAC system improvement measures. Contact us to schedule testing.
                </p>
                <Link 
                  to="/request-proposal" 
                  className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Request IAQ Testing
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

export default IndoorAirQualityTesting;
