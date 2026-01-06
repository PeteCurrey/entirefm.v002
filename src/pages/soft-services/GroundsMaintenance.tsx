import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  TreeDeciduous, 
  Droplets, 
  AlertTriangle, 
  Leaf, 
  Shield, 
  Sprout,
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

const GroundsMaintenance = () => {
  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Soft Services", href: "/services" },
    { label: "Grounds Maintenance" }
  ];

  const heroStats = [
    { value: "200", suffix: "+", label: "Sites Maintained" },
    { value: "0", label: "Slip/Trip Incidents" },
    { value: "100", suffix: "%", label: "Drainage Compliance" },
    { value: "50", suffix: "%", label: "Chemical Reduction" }
  ];

  const features = [
    {
      icon: Leaf,
      title: "Grass & Vegetation",
      description: "Routine mowing, hedge trimming, bed maintenance, and seasonal planting programs."
    },
    {
      icon: AlertTriangle,
      title: "Safety Management",
      description: "Slip/trip hazard prevention, path repairs, and winter gritting programs."
    },
    {
      icon: TreeDeciduous,
      title: "Tree Safety",
      description: "Annual surveys, structural assessments, and remedial works by qualified arborists."
    },
    {
      icon: Droplets,
      title: "Drainage Coordination",
      description: "Gully clearance, surface water management, and SUDS maintenance integration."
    },
    {
      icon: Shield,
      title: "Compliance Oversight",
      description: "Environmental regulations, pollution prevention, and accessibility requirements."
    },
    {
      icon: Sprout,
      title: "ESG Integration",
      description: "Biodiversity enhancement, chemical reduction, and sustainable practices."
    }
  ];

  const coreServices = [
    {
      title: "Grass & Vegetation Management",
      description: "Routine maintenance including grass cutting (fortnightly during growing season), hedge maintenance (bi-annual), bed maintenance, leaf clearance, and weed control. Commercial mowers, strimmers, and appropriate equipment for each site type."
    },
    {
      title: "Hard Surface & Access Maintenance",
      description: "Safety-critical maintenance including path repairs, weed removal from hard surfaces, pressure washing to reduce slip risks, winter gritting, and signage maintenance. Accessibility requirements including dropped kerbs and tactile paving."
    },
    {
      title: "Tree Safety & Arboriculture",
      description: "Annual visual inspections, detailed climbing surveys, risk assessments, and remedial works. NPTC-qualified arborists handle deadwood removal, crown reduction, and felling where required. TPO checks for protected trees."
    }
  ];

  const drainageServices = [
    {
      title: "Surface Water Drainage",
      description: "Gully clearance, channel maintenance, soakaway inspection, and prevention of standing water and flooding through coordinated vegetation control."
    },
    {
      title: "Pollution Prevention",
      description: "Environmental Protection Act compliance including chemical use controls, sediment management, and proper green waste disposal to prevent watercourse contamination."
    },
    {
      title: "SUDS Maintenance",
      description: "Sustainable drainage feature maintenance including infiltration basins, swales, and attenuation ponds—understanding drainage function beyond horticultural aesthetics."
    }
  ];

  const stats = [
    { value: "200", suffix: "+", label: "Sites Maintained" },
    { value: "0", label: "Slip/Trip Claims" },
    { value: "70", suffix: "%", label: "Biodiversity Increase" },
    { value: "50", suffix: "%", label: "Chemical Reduction" }
  ];

  const faqs = [
    {
      question: "What compliance issues relate to grounds maintenance?",
      answer: "Grounds maintenance affects safety, water management, and accessibility: Slip/trip hazards (uneven paving, overgrown vegetation, leaf accumulation—personal injury claims), Drainage oversight (gullies, soakaways, surface water management—prevent flooding, standing water), Water runoff management (pollution prevention—contaminated runoff into watercourses), Tree safety (structural surveys, hazardous tree identification—prevent falling branch injuries), Accessibility (paths, ramps, tactile paving—meet Equality Act requirements). Neglected grounds cause: Personal injury (slip/trip accidents—employer/occupier liability), Flooding (blocked drains, inadequate surface water management), Regulatory action (pollution incidents reported to Environment Agency), Reputational damage (poor external appearance)."
    },
    {
      question: "How often should grounds maintenance be carried out?",
      answer: "Maintenance frequency depends on site type and usage: Grass cutting (fortnightly during growing season April-September, monthly in shoulder seasons, none in winter), Hedge trimming (twice annually—spring and autumn), Leaf clearance (weekly during autumn, ad-hoc in winter), Weed control (quarterly application of herbicides or manual removal), Litter picking (daily for high-traffic areas, weekly for low-use areas), Drainage inspection (quarterly gully checks, annual CCTV surveys if issues suspected). Frequency increases for: High-visibility sites (corporate HQs, retail—weekly/fortnightly), Contractual requirements (tenant leases specify standards), Safety-critical areas (car parks, pedestrian routes—prevent slip/trip hazards). Seasonal variation is normal—growing season requires more intensive maintenance."
    },
    {
      question: "What are the responsibilities for tree safety and management?",
      answer: "Tree owners/occupiers have duty of care for tree safety: Visual inspections (annual tree surveys—identify hazards, defects, disease), Structural surveys (detailed inspection using climbing/aerial platforms—assess structural integrity), Risk assessment (likelihood of failure x consequence of harm = risk level), Remedial works (pruning, bracing, felling where hazards identified). Common tree hazards: Deadwood (falling branches—personal injury risk), Root heave (damage to pavements, structures), Disease (ash dieback, Dutch elm disease—structural weakness), Overhanging branches (obstruct sight lines, damage property). Tree work requires: Arboricultural qualifications (NPTC, Lantra), Insurance (public/employer's liability), Tree Preservation Order (TPO) checks (planning permission required for protected trees). Neglect causes: Personal injury (falling branches, trip hazards from roots), Property damage (subsidence, structural damage), Prosecution (if negligence proven after serious incident)."
    },
    {
      question: "How does grounds maintenance relate to water management and drainage?",
      answer: "Grounds maintenance affects site drainage and water quality: Surface water management (gullies, channels, soakaways—prevent flooding, standing water), Vegetation control (clear drainage channels, prevent blockages), Pollution prevention (prevent soil, leaf debris, chemical runoff entering watercourses—Environmental Protection Act), SUDS maintenance (sustainable drainage—infiltration basins, swales, attenuation ponds require vegetation management). Poor grounds maintenance causes: Flooding (blocked gullies, overgrown vegetation preventing drainage), Water pollution (sediment, leaf matter, herbicides entering watercourses—Environment Agency enforcement), Standing water (slip hazards, mosquito breeding, ice formation in winter). Grounds contractors should coordinate with FM drainage specialists—ensuring vegetation management supports drainage performance."
    },
    {
      question: "What is the environmental and ESG impact of grounds maintenance?",
      answer: "Grounds maintenance affects biodiversity, sustainability, and social value: Biodiversity enhancement (native planting, wildflower meadows, pollinator-friendly species—support ESG targets), Chemical use reduction (minimize herbicides, pesticides—reduce environmental impact), Waste management (green waste composting, recycling—divert from landfill), Carbon sequestration (trees, vegetation absorb CO2—offset emissions). ESG-aligned grounds management: Eliminates glyphosate (controversial herbicide), Reduces mowing frequency (allow wildflower growth—biodiversity benefits), Uses electric equipment (zero-emission mowers, trimmers), Composts green waste on-site (circular economy). Grounds are visible ESG opportunity—demonstrating environmental stewardship, social value (improved amenity spaces for occupiers), and governance (professional, compliant management)."
    }
  ];

  const seasonalSchedule = [
    { season: "Spring", months: "March-May", activities: "Grass cutting commences, spring bulbs, hedge trimming, weed control" },
    { season: "Summer", months: "June-Aug", activities: "Intensive grass cutting, irrigation, pest monitoring, bed maintenance" },
    { season: "Autumn", months: "Sept-Nov", activities: "Leaf clearance, final grass cuts, hedge trimming, bulb planting" },
    { season: "Winter", months: "Dec-Feb", activities: "Minimal cutting, tree works, gritting, hard surface maintenance" }
  ];

  return (
    <>
      <Helmet>
        <title>Grounds Maintenance with Compliance Oversight | Safe Access & Drainage | EntireFM</title>
        <meta name="description" content="Grounds maintenance with compliance oversight for water management, slip-risk reduction and safe-access maintenance. Drainage coordination and tree safety management." />
      </Helmet>

      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema 
        name="Grounds Maintenance with Compliance Oversight"
        description="Water management, slip-risk reduction, drainage oversight and safe-access maintenance. Compliance-led grounds maintenance for commercial estates."
        provider="EntireFM"
        areaServed="United Kingdom"
      />
      <FAQSchema faqs={faqs} />

      {/* Hero Section */}
      <ServiceHeroSection
        breadcrumbItems={breadcrumbItems}
        title="Grounds Maintenance with Compliance Oversight"
        description="Beyond aesthetic management—safety, water management, accessibility, and environmental stewardship integrated with professional horticultural expertise."
        stats={heroStats}
        primaryCTA={{ label: "Request Quote", href: "/request-proposal", icon: ArrowRight }}
        secondaryCTA={{ label: "0800 024 8550", href: "tel:08000248550", icon: Phone }}
      />

      {/* Trust Bar */}
      <TrustBar variant="compact" />

      {/* Features Grid */}
      <ContentSection
        title="Compliance-Led Grounds Management"
        subtitle="Safety, drainage, and environmental compliance integrated with professional grounds maintenance for commercial estates."
        centered
      >
        <FeatureCardGrid features={features} columns={3} variant="gradient" />
      </ContentSection>

      {/* Stats Banner */}
      <StatsBanner stats={stats} variant="gradient" />

      {/* Core Services */}
      <ContentSection
        title="Core Grounds Maintenance"
        subtitle="Professional horticultural services with safety and compliance integrated into every activity."
        variant="muted"
      >
        <ServiceFeatureList items={coreServices} variant="cards" columns={1} />
      </ContentSection>

      {/* Drainage Integration */}
      <ContentSection
        title="Drainage & Water Management"
        subtitle="Grounds maintenance affects site drainage—we coordinate with FM specialists to ensure vegetation management supports drainage performance."
      >
        <div className="grid md:grid-cols-3 gap-8">
          {drainageServices.map((service, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <div className="h-full p-8 bg-gradient-to-br from-muted/50 to-background border border-border rounded-2xl hover:border-primary/30 transition-all">
                <h3 className="text-xl font-medium mb-4 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground font-light leading-relaxed">{service.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </ContentSection>

      {/* ESG Section */}
      <ContentSection
        title="Environmental Stewardship & ESG"
        subtitle="Grounds are a visible ESG opportunity—demonstrating environmental stewardship and supporting sustainability commitments."
        variant="gradient"
      >
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Biodiversity Enhancement",
              items: [
                "Native species planting",
                "Wildflower meadows for pollinators",
                "Reduced mowing frequency",
                "Habitat creation (log piles, bird boxes)"
              ]
            },
            {
              title: "Sustainable Practices",
              items: [
                "Glyphosate elimination",
                "Electric equipment use",
                "On-site green waste composting",
                "Rainwater harvesting for irrigation"
              ]
            },
            {
              title: "Climate Resilience",
              items: [
                "Drought-tolerant species",
                "Tree planting for carbon offset",
                "Green infrastructure support",
                "Urban cooling through vegetation"
              ]
            }
          ].map((section, idx) => (
            <AnimatedSection key={idx} delay={idx * 0.1}>
              <div className="p-8 bg-card border border-border rounded-2xl h-full">
                <h3 className="text-xl font-medium mb-4">{section.title}</h3>
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

      {/* Seasonal Schedule */}
      <ContentSection
        title="Seasonal Maintenance Schedule"
        subtitle="Grounds maintenance is seasonal—intensive during growing season, reduced in winter."
      >
        <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {seasonalSchedule.map((item, idx) => (
            <AnimatedSection key={idx} delay={idx * 0.1}>
              <div className="p-6 bg-card border border-border rounded-xl text-center h-full">
                <div className="text-2xl font-light text-primary mb-1">{item.season}</div>
                <div className="text-sm text-muted-foreground mb-4">{item.months}</div>
                <p className="text-sm text-muted-foreground font-light">{item.activities}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </ContentSection>

      {/* Related Services */}
      <ContentSection
        title="Related Services"
        centered
        variant="muted"
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[
            { title: "Water Hygiene", desc: "Drainage and water management", href: "/services/water" },
            { title: "Waste & Recycling", desc: "Green waste management", href: "/soft-services/waste-recycling" },
            { title: "PPM Services", desc: "Planned maintenance coordination", href: "/services/ppm" },
            { title: "ESG Consulting", desc: "Sustainability strategies", href: "/services" }
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
        title="Request Grounds Maintenance"
        description="Compliance-led grounds management integrating safety, drainage, and environmental stewardship with professional horticultural expertise."
        variant="dark"
      />
    </>
  );
};

export default GroundsMaintenance;
