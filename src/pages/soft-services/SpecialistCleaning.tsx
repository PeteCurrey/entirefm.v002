import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Building2, 
  Wind, 
  ShieldCheck, 
  Droplets, 
  ClipboardCheck, 
  Sparkles,
  ArrowRight,
  Phone,
  CheckCircle2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ServiceSchema } from "@/components/shared/SchemaMarkup";
import { FAQSection } from "@/components/shared/FAQSection";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { FAQSchema } from "@/components/shared/SchemaMarkup";
import ServiceHeroSection from "@/components/shared/ServiceHeroSection";
import AnimatedSection from "@/components/shared/AnimatedSection";
import FeatureCardGrid from "@/components/shared/FeatureCardGrid";
import StatsBanner from "@/components/shared/StatsBanner";
import CTASection from "@/components/shared/CTASection";
import ContentSection from "@/components/shared/ContentSection";
import ServiceFeatureList from "@/components/shared/ServiceFeatureList";
import { TrustBar } from "@/components/shared/TrustBar";

const SpecialistCleaning = () => {
  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Soft Services", href: "/services" },
    { label: "Specialist Cleaning Services" }
  ];

  const heroStats = [
    { value: "500", suffix: "+", label: "Sites Serviced" },
    { value: "98", suffix: "%", label: "Client Satisfaction" },
    { value: "24", suffix: "/7", label: "Emergency Response" },
    { value: "15", suffix: "+", label: "Years Experience" }
  ];

  const features = [
    {
      icon: Building2,
      title: "High-Level Facade Cleaning",
      description: "Rope access and MEWP cleaning for atriums, facades, and external glazing with IRATA-qualified operatives."
    },
    {
      icon: Wind,
      title: "HVAC & AHU Cleaning",
      description: "Technical plant cleaning to improve system performance and indoor air quality, coordinated with PPM schedules."
    },
    {
      icon: Droplets,
      title: "Car Park Extract Systems",
      description: "Fume extraction cleaning to maintain ventilation efficiency and CO level compliance in parking facilities."
    },
    {
      icon: ShieldCheck,
      title: "Critical Environment Cleaning",
      description: "ISO cleanroom, healthcare, and food production cleaning with contamination control protocols."
    },
    {
      icon: ClipboardCheck,
      title: "Safety-Critical Procedures",
      description: "Full risk assessments, method statements, and permits to work for all high-risk cleaning activities."
    },
    {
      icon: Sparkles,
      title: "Deep Cleaning & Restoration",
      description: "Periodic intensive cleaning to restore finishes, remove buildup, and maintain asset condition."
    }
  ];

  const technicalServices = [
    {
      title: "Air Handling Unit (AHU) Cleaning",
      description: "Coil cleaning removes dust, grease, and microbial growth to restore heat transfer efficiency and reduce pressure drop. Filter renewal improves airflow and reduces energy consumption. Ductwork cleaning prevents IAQ contamination. Annual or bi-annual cleaning coordinated with PPM shutdowns using steam cleaning, degreasers, and HEPA filtration."
    },
    {
      title: "Car Park Fume Extraction",
      description: "Extract grille cleaning removes carbon deposits and dust to restore airflow. Ductwork cleaning prevents blockages and maintains extraction rates. Fan unit degreasing prevents motor overload and bearing failures. Annual cleaning ensures ventilation compliance and prevents CO level exceedances."
    },
    {
      title: "Plant Room Degreasing",
      description: "Remove oil and grease from pumps, motors, and pipework to reduce fire risk and improve safety. HEPA vacuum plant surfaces to prevent equipment contamination. Floor cleaning removes trip hazards and improves maintenance access. Annual deep cleaning complements routine janitorial."
    }
  ];

  const accessMethods = [
    {
      title: "Rope Access (IRATA)",
      description: "Cost-effective high-level cleaning for facades, atriums, and glazing. IRATA-qualified operatives with rescue plans and building owner consent. Rapid deployment with minimal disruption."
    },
    {
      title: "MEWP & Cherry Pickers",
      description: "Mobile elevated work platforms for lower-level access. Boom lifts reach 12-30m, scissor lifts 6-12m. IPAF-qualified operators with traffic management where required."
    },
    {
      title: "Building Maintenance Units",
      description: "Permanent BMU installations for regular facade maintenance. Track-mounted cradles, davit systems, and gantries. LOLER-compliant servicing and testing included."
    }
  ];

  const stats = [
    { value: "500", suffix: "+", label: "Sites Cleaned Annually" },
    { value: "98", suffix: "%", label: "SLA Compliance" },
    { value: "0", label: "Reportable Incidents" },
    { value: "35", suffix: "%", label: "Avg. Efficiency Improvement" }
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
      answer: "High-level cleaning accesses difficult areas using specialist access methods: Rope access (abseilers clean facades, atriums, glazing—cost-effective for tall buildings), Mobile elevated work platforms (MEWPs, cherry pickers—clean lower-level facades, canopies), Scaffolding (traditional access for large-scale projects), Building maintenance units (BMUs, cradles—permanent installations for regular facade cleaning). High-level cleaning requires: IRATA/IPAF qualifications (rope access, MEWP operation), Rescue plans (emergency procedures if operative injured at height), Building owner consent (roof access, anchor points). Frequency depends on: Location (urban pollution, coastal salt), Building material (glass, stone, cladding), Aesthetic standards (corporate HQs clean more frequently). Typical frequency: quarterly to annually."
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
        <link rel="canonical" href="https://entirefm.com/soft-services/specialist-cleaning" />
      </Helmet>

      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema 
        name="Specialist Cleaning Services"
        description="High-level, critical environment and technical cleaning services. Specialist plant cleaning, car park exhaust cleaning, and contamination control for commercial estates."
        provider="EntireFM"
        areaServed="United Kingdom"
      />
      <FAQSchema faqs={faqs} />

      {/* Hero Section */}
      <ServiceHeroSection
        breadcrumbItems={breadcrumbItems}
        title="Specialist Cleaning Services"
        description="High-level, critical environment and technical cleaning beyond standard janitorial. Qualified operatives, specialist equipment, and safety-critical procedures for every engagement."
        stats={heroStats}
        primaryCTA={{ label: "Request Quote", href: "/request-proposal", icon: ArrowRight }}
        secondaryCTA={{ label: "0800 024 8550", href: "tel:08000248550", icon: Phone }}
      />

      {/* Trust Bar */}
      <TrustBar variant="compact" />

      {/* Features Grid */}
      <ContentSection
        title="Comprehensive Specialist Cleaning"
        subtitle="Technical cleaning expertise for every requirement—from high-level facade access to critical environment contamination control."
        centered
      >
        <FeatureCardGrid features={features} columns={3} variant="gradient" />
      </ContentSection>

      {/* Stats Banner */}
      <StatsBanner stats={stats} variant="gradient" />

      {/* Technical Plant Cleaning */}
      <ContentSection
        title="Technical Plant & HVAC Cleaning"
        subtitle="Improve system performance, energy efficiency, and indoor air quality with specialist plant cleaning coordinated with your PPM schedule."
        variant="muted"
      >
        <ServiceFeatureList items={technicalServices} variant="cards" columns={1} />
      </ContentSection>

      {/* High Level Access */}
      <ContentSection
        title="High-Level Access & Facade Cleaning"
        subtitle="Qualified access methods for every building type and height requirement."
      >
        <div className="grid md:grid-cols-3 gap-8">
          {accessMethods.map((method, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <div className="h-full p-8 bg-gradient-to-br from-muted/50 to-background border border-border rounded-2xl hover:border-primary/30 transition-all">
                <h3 className="text-xl font-medium mb-4 text-foreground">{method.title}</h3>
                <p className="text-muted-foreground font-light leading-relaxed">{method.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </ContentSection>

      {/* Critical Environments */}
      <ContentSection
        title="Critical Environment & Healthcare Cleaning"
        subtitle="Contamination control for ISO cleanrooms, healthcare facilities, and food production environments."
        variant="gradient"
      >
        <div className="grid md:grid-cols-2 gap-8">
          <AnimatedSection>
            <div className="p-8 bg-card border border-border rounded-2xl">
              <h3 className="text-xl font-medium mb-4">Cleanroom Cleaning (ISO Standards)</h3>
              <ul className="space-y-3">
                {[
                  "Particulate control with HEPA vacuums and low-lint materials",
                  "Validated surface disinfection with contact time verification",
                  "Cleaning validation with particle counts and surface swabs",
                  "ISO classification-appropriate protocols (ISO 1-9)"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground font-light">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="p-8 bg-card border border-border rounded-2xl">
              <h3 className="text-xl font-medium mb-4">Healthcare Cleaning Standards</h3>
              <ul className="space-y-3">
                {[
                  "National Standards of Healthcare Cleanliness compliance",
                  "Infection control and biohazard procedures",
                  "Color-coded equipment and zoned cleaning",
                  "ATP testing and microbiological sampling validation"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground font-light">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </ContentSection>

      {/* Safety Section */}
      <ContentSection
        title="Safety Management & Risk Control"
        subtitle="High-risk cleaning requires rigorous safety protocols—qualified operatives, robust procedures, and comprehensive insurance."
      >
        <AnimatedSection>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-medium">Safety Protocols</h3>
                <ul className="space-y-3">
                  {[
                    "Detailed risk assessments for all activities",
                    "Method statements with step-by-step procedures",
                    "Permits to work for high-risk activities",
                    "Competency validation (IRATA, IPAF, confined space)"
                  ].map((item, idx) => (
                    <motion.li 
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground font-light">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-medium">Insurance & Compliance</h3>
                <ul className="space-y-3">
                  {[
                    "Comprehensive employer's liability coverage",
                    "Public liability for specialist activities",
                    "Rescue plans and emergency procedures",
                    "On-site supervision and first aid provision"
                  ].map((item, idx) => (
                    <motion.li 
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground font-light">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </ContentSection>

      {/* Related Services */}
      <ContentSection
        title="Related Services"
        centered
        variant="muted"
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[
            { title: "HVAC Maintenance", desc: "System servicing and performance optimization", href: "/services/hvac" },
            { title: "Fire Safety", desc: "Compliance and risk management", href: "/services/fire" },
            { title: "Water Hygiene", desc: "Legionella control and water safety", href: "/services/water" },
            { title: "PPM Services", desc: "Planned preventive maintenance", href: "/services/ppm" }
          ].map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Link 
                to={service.href}
                className="block p-6 bg-card border border-border rounded-xl hover:border-primary/50 hover:shadow-md transition-all group"
              >
                <h3 className="font-medium mb-2 group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-sm text-muted-foreground font-light">{service.desc}</p>
              </Link>
            </motion.div>
          ))}
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
        title="Request Specialist Cleaning Services"
        description="From high-level facade cleaning to critical environment contamination control—our qualified teams deliver technical cleaning with safety-first procedures."
        variant="dark"
      />
    </>
  );
};

export default SpecialistCleaning;
