"use client";

import { useState } from "react";
import CaseStudyCard from "@/components/shared/CaseStudyCard";
import { Button } from "@/components/ui/button";
;
import { Breadcrumb } from "@/components/shared/Breadcrumb";

const CaseStudies = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Case Studies" },
  ];

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
      ],
      slug: "/case-studies/logistics-distribution-hub"
    },
    {
      sector: "Aviation",
      title: "Delivering compliant FM across 3 UK airports",
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
      ],
      slug: "/case-studies/retail-service-stations"
    },
    {
      sector: "Corporate",
      title: "Grade A office tower – workplace excellence",
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
      ],
      slug: "/case-studies/hospitality"
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
    },
    {
      sector: "Retail",
      title: "Instant Response FM for a High-Footfall Service Station Estate",
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
      metrics: [
        "100% statutory compliance restored and verified",
        "IAQ performance up 41%",
        "Infection-risk observations: nil returned",
        "No operational shutdowns during remediation"
      ],
      slug: "/case-studies/healthcare"
    }
  ];

  const filteredCaseStudies = caseStudies.filter(cs => {
    const matchesFilter = activeFilter === "All" || cs.sector.toLowerCase().includes(activeFilter.toLowerCase());
    const matchesSearch = searchQuery === "" || 
      cs.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      cs.sector.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <>
      

      <div className="min-h-screen">
        {/* Hero Section with Half-Page Image */}
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

        {/* Filters */}
        <section className="py-8 bg-white border-b border-border sticky top-20 z-30">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="search"
                placeholder="Search case studies..."
                className="max-w-md flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
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
    </>
  );
};

export default CaseStudies;
