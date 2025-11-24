import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { ServiceSchema } from "@/components/shared/SchemaMarkup";
import { FAQSection } from "@/components/shared/FAQSection";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { FAQSchema } from "@/components/shared/SchemaMarkup";
import { SidebarCTA } from "@/components/shared/SidebarCTA";

const SpecialistCleaning = () => {
  const breadcrumbItems = [
    { label: "Soft Services", href: "/services" },
    { label: "Specialist Cleaning Services" }
  ];

  const faqs = [
    {
      question: "What distinguishes specialist cleaning from standard janitorial services?",
      answer: "Specialist cleaning addresses technical, high-level, or critical environment requirements beyond routine janitorial: High-level access (rope access, cherry pickers, scaffolding—clean facades, atriums, roof glazing), Technical plant cleaning (AHU coils, fan units, car park extractors—improve performance), Critical environments (cleanrooms, healthcare, food production—contamination control), Deep cleaning (periodic intensive cleaning—restore finishes, remove buildup), Post-construction cleaning (builders' clean, hand-over preparation). Specialist cleaning requires: Qualified operatives (working at height, confined spaces, COSHH competency), Specialist equipment (access systems, degreasing agents, HEPA filtration), Safety protocols (risk assessments, method statements, permits to work). Standard janitorial is routine—specialist cleaning is technical, infrequent, and risk-managed."
    },
    {
      question: "Why is specialist plant room and HVAC cleaning important?",
      answer: "Plant room cleanliness affects system performance and indoor air quality: AHU cleaning (coils, filters, ductwork—remove dust, debris, microbial growth) improves heat transfer efficiency, reduces pressure drop, prevents IAQ contamination. Fan and motor cleaning (grease, dust removal) prevents overheating and bearing failures. Car park extract systems (fume extraction grilles, ductwork—remove carbon deposits) ensure adequate ventilation and CO level control. Neglected plant accumulates contamination causing: Reduced efficiency (increased energy consumption), IAQ issues (dust, microbial spores circulated into occupied spaces), Equipment failures (bearings seize, motors overheat). Specialist cleaning is periodic (annually/bi-annually) using degreasers, steam cleaning, and HEPA filtration—coordinated with PPM shutdowns."
    },
    {
      question: "What is high-level facade and atrium cleaning?",
      answer: "High-level cleaning accesses difficult areas using specialist access methods: Rope access (abseilers clean facades, atriums, glazing—cost-effective for tall buildings), Mobile elevated work platforms (MEWPs, cherry pickers—clean lower-level facades, canopies), Scaffolding (traditional access for large-scale projects), Building maintenance units (BMUs, cradles—permanent installations for regular facade cleaning). High-level cleaning requires: IRATA/IPAF qualifications (rope access, MEWP operation), Rescue plans (emergency procedures if operative injured at height), Insurance (public liability, employer's liability for working at height). Frequency depends on: Location (urban pollution, coastal salt), Building material (glass, stone, cladding), Aesthetic standards (corporate HQs clean more frequently). Typical frequency: quarterly to annually."
    },
    {
      question: "What cleaning standards apply to healthcare and critical environments?",
      answer: "Healthcare and critical environments require contamination control: Cleanrooms (ISO classifications—particulate control, HEPA filtration, validated cleaning protocols), Healthcare (National Standards of Healthcare Cleanliness—infection control, biohazard procedures), Food production (HACCP compliance—allergen control, hygiene zoning), Laboratories (containment, decontamination, waste segregation). Specialist requirements: Training (infection control, COSHH, biohazards), Equipment (HEPA vacuums, steam cleaners, UV disinfection), Cleaning validation (ATP testing, microbiological swabs, visual inspections), Segregation (color-coded equipment, zoned cleaning—prevent cross-contamination). Non-compliant cleaning causes: Infection outbreaks (healthcare), Contamination incidents (food/pharma), Regulatory action (closure, prosecution)."
    },
    {
      question: "How do you ensure safety during high-risk specialist cleaning?",
      answer: "Safety management for specialist cleaning: Risk assessments (identify hazards—working at height, confined spaces, COSHH, lone working), Method statements (step-by-step procedures, control measures), Permits to work (client authorization before high-risk activities), Competency validation (operatives qualified—IRATA, IPAF, confined space, first aid), Supervision (competent person on-site, rescue arrangements), Insurance (adequate cover for specialist activities). High-risk cleaning is safety-critical—inadequate control causes: Falls from height (fatalities, serious injury), Confined space incidents (asphyxiation, toxic exposure), Chemical incidents (burns, respiratory harm). Professional specialist cleaning prioritizes safety—qualified operatives, robust procedures, comprehensive insurance."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Specialist Cleaning Services | High-Level Plant Cleaning | EntireFM</title>
        <meta name="description" content="Specialist cleaning services for high-level, critical environment and technical plant cleaning. Car park exhaust cleaning, plant room degreasing and IAQ-focused cleaning." />
      </Helmet>

      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema 
        name="Specialist Cleaning Services"
        description="High-level, critical environment and technical cleaning services. Specialist plant cleaning, car park exhaust cleaning, and contamination control for commercial estates."
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
                Specialist Cleaning Services
              </h1>
              <p className="text-xl text-muted-foreground font-light leading-relaxed">
                High-level, critical environment and technical cleaning beyond standard janitorial services.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Specialist Cleaning: Technical, High-Level, Critical
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                Specialist cleaning addresses requirements beyond routine janitorial—high-level access, technical plant, critical environments, deep cleaning. It requires qualified operatives, specialist equipment, and safety-critical procedures. Standard janitorial maintains daily cleanliness—specialist cleaning addresses periodic, technical, or high-risk requirements: Facade and atrium cleaning (rope access, MEWPs), Plant room and HVAC cleaning (improve system performance), Car park extract system cleaning (fume extraction efficiency), Cleanroom and healthcare cleaning (contamination control), Post-construction cleaning (handover preparation).
              </p>
              <p className="text-muted-foreground font-light leading-relaxed">
                Specialist cleaning delivers: Asset performance (clean plant operates efficiently), Indoor air quality (remove HVAC contaminants), Regulatory compliance (healthcare, food production standards), Safety (prevent slip/trip hazards from grease, debris), Aesthetic quality (maintain building appearance). Our specialist cleaning service combines technical competence with safety management—qualified operatives, risk-assessed procedures, and appropriate insurance for high-risk activities.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Technical Plant & HVAC Cleaning
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium mb-2">Air Handling Unit (AHU) Cleaning</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    AHU cleaning improves performance and IAQ: Coil cleaning (remove dust, grease, microbial growth—restores heat transfer efficiency, reduces pressure drop), Filter renewal (replace contaminated filters—improves airflow, reduces energy consumption), Ductwork cleaning (remove accumulated debris—prevents IAQ contamination), Fan cleaning (degrease, balance—prevents vibration, noise, bearing failures). Neglected AHUs accumulate contamination causing: Reduced efficiency (10-30% energy penalty), IAQ issues (dust, spores circulated into occupied spaces), System failures (frozen coils, bearing seizures). AHU cleaning is periodic (annually or bi-annually) coordinated with PPM shutdowns—using steam cleaning, degreasers, and HEPA filtration.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Car Park Fume Extraction Cleaning</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Car park extract systems remove vehicle fumes—cleaning is essential for performance: Extract grilles (remove carbon deposits, dust—restore airflow), Ductwork (clean internal surfaces—prevent blockages, maintain extraction rates), Fan units (degrease, clean blades—prevent motor overload, bearing failures). Contaminated extract systems cause: Inadequate ventilation (CO level exceedances, health risk), System failures (blocked ductwork, motor burnout), Regulatory non-compliance (failed CO monitoring tests). Cleaning frequency: annually or as performance monitoring indicates. Specialist degreasing agents and steam cleaning remove carbon buildup effectively.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Plant Room Degreasing & Deep Cleaning</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Plant rooms accumulate grease, dust, debris—creating fire risks and operational hazards: Degreasing (remove oil, grease from pumps, motors, pipework—reduce fire risk, improve safety), Dust removal (HEPA vacuum plant surfaces—prevent equipment contamination), Floor cleaning (remove trip hazards, improve access for maintenance). Clean plant rooms improve: Safety (reduce fire risk, slip/trip hazards), Maintenance access (engineers work safely, identify faults easily), Regulatory compliance (fire risk assessments require clean plant rooms). Periodic deep cleaning (annually) complements routine janitorial—addressing technical spaces often neglected in standard cleaning contracts.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                High-Level Access & Facade Cleaning
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium mb-2">Rope Access Cleaning (IRATA)</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Rope access enables cost-effective high-level cleaning: Facades (clean external glazing, cladding, stone), Atriums (clean internal high-level glazing, steelwork), Canopies and overhangs (remove debris, bird fouling), Signage (clean building signage, logos). Rope access is: Cost-effective (no scaffolding/MEWP hire), Fast (rapid deployment, minimal disruption), Versatile (access difficult areas, tight spaces). Requirements: IRATA-qualified operatives (Level 1 minimum, Level 3 supervision), Rescue plans (emergency procedures if operative injured), Building owner consent (roof access, anchor points). Typical frequency: quarterly (urban buildings, high pollution) to annually (suburban, lower pollution).
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">MEWP & Cherry Picker Access</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Mobile elevated work platforms for lower-level access: Boom lifts (articulated/telescopic arms reach 12-30m), Scissor lifts (vertical platforms reach 6-12m), Truck-mounted platforms (large-scale projects, 20-50m reach). MEWP cleaning suitable for: Canopies and entrance areas, Ground-floor to mid-level facades, External lighting and signage. Requirements: IPAF-qualified operators (3a/3b categories), Ground conditions suitable for outriggers, Traffic management (if road access required). MEWPs provide stable working platform—safer than ladders for extended work periods. Cost-effective for lower-level work but expensive for very high access (rope access or BMU preferred).
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Building Maintenance Units (BMU/Cradle)</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Permanent BMU installations for regular facade maintenance: Track-mounted cradles (travel building perimeter on roof-mounted tracks), Davit systems (swing stages suspended from davits), Gantries (overhead beams with suspended platforms). BMUs are capital investments (£50,000-£500,000+) justified for: Large buildings requiring frequent cleaning (quarterly/monthly), Corporate HQs with high aesthetic standards, Buildings where scaffolding/rope access impractical (complex facades, constrained sites). BMU servicing and testing is statutory (LOLER)—included in specialist cleaning contracts. Operatives require BMU competency training beyond standard rope access/MEWP qualifications.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Critical Environment & Healthcare Cleaning
              </h2>
              <div className="bg-muted/50 p-6 rounded-lg space-y-4">
                <div>
                  <h3 className="font-medium mb-2">Cleanroom Cleaning (ISO Standards)</h3>
                  <p className="text-sm text-muted-foreground font-light">
                    Cleanrooms require validated cleaning protocols: Particulate control (HEPA vacuums, low-lint materials), Surface disinfection (validated agents, contact times), Cleaning validation (particle counts, surface swabs post-clean). ISO classifications (1-9) determine cleanliness requirements—lower numbers require more stringent protocols. Typical sectors: Pharmaceuticals, Electronics manufacturing, Medical device production. Non-compliant cleaning causes product contamination, regulatory action, production shutdowns.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Healthcare Cleaning Standards</h3>
                  <p className="text-sm text-muted-foreground font-light">
                    National Standards of Healthcare Cleanliness define: Cleaning frequencies (clinical areas daily, public areas variable), Cleaning methods (color-coded equipment, zoned cleaning—prevent cross-contamination), Disinfection protocols (contact times, product specifications), Training requirements (infection control, biohazards). Healthcare cleaning prevents hospital-acquired infections—inadequate cleaning causes outbreaks (C. difficile, MRSA, norovirus). Professional healthcare cleaning combines technical protocols with quality auditing—ATP testing, visual inspections, microbiological sampling.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Safety Management & Risk Control
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                Specialist cleaning is high-risk—safety is paramount: Working at height (rope access, MEWPs, scaffolding—falls are leading cause of workplace fatalities), Confined spaces (plant rooms, tanks, voids—asphyxiation, toxic exposure risks), COSHH (degreasing agents, disinfectants—chemical burns, respiratory harm), Lone working (operatives work alone—emergency response procedures required). Safety management: Risk assessments (identify hazards, implement controls), Method statements (detailed procedures, safety measures), Permits to work (client authorization before high-risk activities), Competency validation (qualified operatives—IRATA, IPAF, confined space, COSHH), Rescue plans (emergency procedures, first aiders on-site), Insurance (adequate employer's/public liability cover for specialist activities).
              </p>
              <p className="text-muted-foreground font-light leading-relaxed">
                Professional specialist cleaning contractors prioritize safety—robust procedures, qualified supervision, comprehensive insurance. Inadequate safety management causes fatalities, prosecutions (HSE), insurance invalidation. Clients must verify contractor competency—accreditations (IRATA, SafeContractor), insurance adequacy, incident records—before authorizing high-risk cleaning activities.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Related Services
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link to="/services/hvac" className="p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                  <h3 className="font-medium mb-2">HVAC Maintenance</h3>
                  <p className="text-sm text-muted-foreground font-light">System servicing and performance optimization</p>
                </Link>
                <Link to="/services/car-park-fume-extraction" className="p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                  <h3 className="font-medium mb-2">Car Park Fume Extraction</h3>
                  <p className="text-sm text-muted-foreground font-light">Ventilation system maintenance</p>
                </Link>
                <Link to="/services/indoor-air-quality-testing" className="p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                  <h3 className="font-medium mb-2">Indoor Air Quality Testing</h3>
                  <p className="text-sm text-muted-foreground font-light">IAQ assessment and monitoring</p>
                </Link>
                <Link to="/services/bmu-cradle-servicing" className="p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                  <h3 className="font-medium mb-2">BMU Servicing</h3>
                  <p className="text-sm text-muted-foreground font-light">Cradle maintenance and LOLER testing</p>
                </Link>
              </div>
            </section>

            <section className="mb-12">
              <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg">
                <h2 className="text-2xl font-light mb-4">Request Specialist Cleaning Services</h2>
                <p className="text-muted-foreground font-light leading-relaxed mb-6">
                  Our specialist cleaning service delivers technical, high-level, and critical environment cleaning with qualified operatives and safety-critical procedures. Contact us to discuss your specialist cleaning requirements.
                </p>
                <Link 
                  to="/request-proposal" 
                  className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Request Specialist Cleaning
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

export default SpecialistCleaning;
