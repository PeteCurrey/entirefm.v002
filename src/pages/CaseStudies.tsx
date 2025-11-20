import { useState } from "react";
import CaseStudyCard from "@/components/shared/CaseStudyCard";
import { Button } from "@/components/ui/button";

const CaseStudies = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Offices", "Industrial", "Retail", "Aviation", "Residential", "Other"];

  const caseStudies = [
    {
      sector: "Logistics",
      title: "Reducing reactive call-outs by 32% for regional logistics hub",
      metrics: [
        "Response time cut from 2hrs to 41 mins",
        "£47k annual cost savings identified",
        "98% SLA compliance achieved",
        "First-time fix rate increased to 87%"
      ]
    },
    {
      sector: "Aviation",
      title: "Delivering compliant FM across 3 UK airports",
      metrics: [
        "Zero compliance breaches in 18 months",
        "24/7 helpdesk response maintained",
        "Security-cleared engineer network established",
        "100% airside access protocols met"
      ]
    },
    {
      sector: "Mixed-Use",
      title: "Integrated FM for 12-building commercial estate",
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
      metrics: [
        "Standardised service delivery across all sites",
        "Out-of-hours works as standard",
        "Brand compliance maintained",
        "Customer complaints reduced 71%"
      ]
    },
    {
      sector: "Corporate",
      title: "Grade A office tower – workplace excellence",
      metrics: [
        "Desk-side support implemented",
        "Tenant retention improved",
        "Energy consumption reduced 18%",
        "Professional appearance standards exceeded"
      ]
    },
    {
      sector: "Residential",
      title: "250-unit residential scheme transformation",
      metrics: [
        "Resident satisfaction up 41%",
        "Transparent reporting introduced",
        "Response times halved",
        "Section 20 consultation support provided"
      ]
    },
    {
      sector: "Industrial",
      title: "24/7 manufacturing facility support",
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
      metrics: [
        "Guest complaints reduced 68%",
        "Discreet service delivery protocols",
        "Preventative approach preventing 90% of disruptions",
        "Seasonal peak support maintained"
      ]
    },
    {
      sector: "Education",
      title: "Multi-academy trust safeguarding-compliant FM",
      metrics: [
        "DBS-checked engineers across all sites",
        "Holiday works programme delivered",
        "Safeguarding protocols maintained",
        "Term-time disruption eliminated"
      ]
    }
  ];

  const filteredCaseStudies = activeFilter === "All" 
    ? caseStudies 
    : caseStudies.filter(cs => cs.sector.toLowerCase().includes(activeFilter.toLowerCase()));

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-b from-charcoal to-charcoal-light text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-light mb-6 underline-accent inline-block">
              Proof in action.
            </h1>
            <p className="text-xl text-gray-300 font-light leading-relaxed">
              Real results for real clients. Quantified outcomes, not marketing fluff.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b border-border sticky top-20 z-30">
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

      {/* Case Studies Grid */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          {filteredCaseStudies.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-lg text-muted-foreground font-light">
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
      <section className="py-16 bg-secondary text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6">
            Want results like these?
          </h2>
          <p className="text-lg text-gray-200 font-light max-w-2xl mx-auto mb-8">
            Every case study starts with understanding your current challenges. Share yours with us.
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-secondary hover:bg-gray-100">
            Request Similar Solution
          </Button>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
