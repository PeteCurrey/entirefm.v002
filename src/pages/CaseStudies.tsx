import { useState } from "react";
import CaseStudyCard from "@/components/shared/CaseStudyCard";
import CTASection from "@/components/shared/CTASection";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { motion } from "framer-motion";

import sectorLogistics from "@/assets/sector-logistics-hero.jpg";
import sectorAirports from "@/assets/sector-airports-hero.jpg";
import sectorCorporate from "@/assets/sector-corporate-hero.jpg";
import sectorServiceStations from "@/assets/sector-service-stations-hero.jpg";
import sectorRetail from "@/assets/sector-retail-hero.jpg";
import sectorPBSA from "@/assets/sector-pbsa-hero.jpg";
import sectorIndustrial from "@/assets/sector-industrial-hero.jpg";
import sectorHospitality from "@/assets/sector-hospitality-hero.jpg";
import sectorHealthcare from "@/assets/sector-healthcare-hero.jpg";
import sectorOffices from "@/assets/sector-offices-hero.jpg";
import sectorResidential from "@/assets/sector-residential-hero.jpg";

const CaseStudies = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Case Studies" },
  ];

  const filters = ["All", "Offices", "Industrial", "Retail", "Aviation", "Residential", "Other"];

  const caseStudies = [
    {
      sector: "Logistics",
      title: "Reducing reactive call-outs by 32% for regional logistics hub",
      image: sectorLogistics,
      metrics: [
        "Response time cut from 2hrs to 41 mins",
        "£47k annual cost savings identified",
        "98% SLA compliance achieved",
        "First-time fix rate increased to 87%"
      ],
      slug: "/case-studies/logistics-distribution-hub"
    },
    {
      sector: "Aviation",
      title: "Delivering compliant FM across 3 UK airports",
      image: sectorAirports,
      metrics: [
        "Zero compliance breaches in 18 months",
        "24/7 helpdesk response maintained",
        "Security-cleared engineer network established",
        "100% airside access protocols met"
      ],
      slug: "/case-studies/aviation"
    },
    {
      sector: "Mixed-Use",
      title: "Integrated FM for 12-building commercial estate",
      image: sectorCorporate,
      metrics: [
        "Single point of contact for all trades",
        "Tenant satisfaction up 34%",
        "Digital asset register deployed",
        "Reactive spend reduced 28%"
      ]
    },
    {
      sector: "Retail",
      title: "42-site service station network standardisation",
      image: sectorServiceStations,
      metrics: [
        "Standardised service delivery across all sites",
        "Out-of-hours works as standard",
        "Brand compliance maintained",
        "Customer complaints reduced 71%"
      ],
      slug: "/case-studies/retail-service-stations"
    },
    {
      sector: "Corporate",
      title: "Grade A office tower – workplace excellence",
      image: sectorOffices,
      metrics: [
        "Desk-side support implemented",
        "Tenant retention improved",
        "Energy consumption reduced 18%",
        "Professional appearance standards exceeded"
      ],
      slug: "/case-studies/corporate-hq"
    },
    {
      sector: "Residential",
      title: "250-unit residential scheme transformation",
      image: sectorPBSA,
      metrics: [
        "Resident satisfaction up 41%",
        "Transparent reporting introduced",
        "Response times halved",
        "Section 20 consultation support provided"
      ],
      slug: "/case-studies/residential-pbsa"
    },
    {
      sector: "Industrial",
      title: "24/7 manufacturing facility support",
      image: sectorIndustrial,
      metrics: [
        "Zero production downtime from FM failures",
        "Critical spares inventory maintained",
        "Night shift engineer coverage",
        "Preventative maintenance preventing 94% of failures"
      ]
    },
    {
      sector: "Hospitality",
      title: "Hotel and leisure complex guest experience focus",
      image: sectorHospitality,
      metrics: [
        "Guest complaints reduced 68%",
        "Discreet service delivery protocols",
        "Preventative approach preventing 90% of disruptions",
        "Seasonal peak support maintained"
      ],
      slug: "/case-studies/hospitality"
    },
    {
      sector: "Education",
      title: "Multi-academy trust safeguarding-compliant FM",
      image: sectorOffices,
      metrics: [
        "DBS-checked engineers across all sites",
        "Holiday works programme delivered",
        "Safeguarding protocols maintained",
        "Term-time disruption eliminated"
      ]
    },
    {
      sector: "Retail",
      title: "Instant Response FM for a High-Footfall Service Station Estate",
      image: sectorRetail,
      metrics: [
        "Fire & life safety compliance back to 100%",
        "Reactive response time cut by 42%",
        "Store manager satisfaction score +30%",
        "SLA performance consistent at 98%+"
      ],
      slug: "/case-studies/service-stations"
    },
    {
      sector: "Industrial",
      title: "Operational Uptime & Safety Retention for a Critical Production Site",
      image: sectorIndustrial,
      metrics: [
        "Production-impacting downtime cut by 53%",
        "0 H&S enforcement actions",
        "Electrical performance stability sharply improved",
        "FM freed internal team from daily crisis management"
      ],
      slug: "/case-studies/industrial-plant"
    },
    {
      sector: "Healthcare",
      title: "Life-Critical Compliance & Environment Improvement in a Healthcare Facility",
      image: sectorHealthcare,
      metrics: [
        "100% statutory compliance restored and verified",
        "IAQ performance up 41%",
        "Infection-risk observations: nil returned",
        "No operational shutdowns during remediation"
      ],
      slug: "/case-studies/healthcare"
    }
  ];

  const filteredCaseStudies = activeFilter === "All" 
    ? caseStudies 
    : caseStudies.filter(cs => cs.sector.toLowerCase().includes(activeFilter.toLowerCase()));

  return (
    <>
      <Helmet>
        <title>Case Studies | FM Success Stories | EntireFM</title>
        <meta 
          name="description" 
          content="Real FM results for real clients. Explore our case studies showcasing quantified outcomes across logistics, aviation, retail, healthcare and more."
        />
        <link rel="canonical" href="https://entirefm.com/case-studies" />
      </Helmet>

      <div className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="relative h-[50vh] min-h-[400px] flex items-end">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: 'url(/images/case-studies-hero.jpg)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/70 to-charcoal/40" />
          <div className="container mx-auto px-6 py-12 relative z-10">
            <Breadcrumb items={breadcrumbItems} />
            <div className="max-w-3xl mt-6">
              <h1 className="text-5xl md:text-6xl font-light mb-6 underline-accent inline-block text-white">
                Proof in action.
              </h1>
              <p className="text-xl text-gray-300 font-light leading-relaxed">
                Real results for real clients. Quantified outcomes, not marketing fluff.
              </p>
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-3xl font-light mb-6">
                Every outcome is <span className="text-primary">measured</span>
              </h2>
              <p className="text-lg text-muted-foreground font-light leading-relaxed mb-4">
                We don't publish vague testimonials. Every case study below features verified KPIs — from compliance scores and response times to cost savings and satisfaction uplifts.
              </p>
              <p className="text-lg text-muted-foreground font-light leading-relaxed">
                Across logistics hubs, aviation terminals, healthcare facilities, and corporate estates, we consistently deliver FM outcomes our clients can prove to their boards.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 bg-muted border-b border-border sticky top-20 z-30">
          <div className="container mx-auto px-6">
            <div className="flex flex-wrap gap-3">
              {filters.map((filter) => (
                <Button
                  key={filter}
                  variant={activeFilter === filter ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Grid - dark background for card contrast */}
        <section className="py-16 bg-charcoal">
          <div className="container mx-auto px-6">
            {filteredCaseStudies.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-lg text-gray-400 font-light">
                  No case studies found for this filter.
                </p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredCaseStudies.map((caseStudy, index) => (
                  <CaseStudyCard key={index} {...caseStudy} />
                ))}
              </div>
            )}
          </div>
        </section>

        {/* CTA */}
        <CTASection
          title="Want results like these?"
          description="Every case study starts with understanding your current challenges. Share yours with us."
          primaryLabel="Request Similar Solution"
          variant="dark"
        />
      </div>
    </>
  );
};

export default CaseStudies;
