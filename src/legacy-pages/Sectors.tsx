"use client";

;
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { EnhancedGlobalSearch } from "@/components/shared/EnhancedGlobalSearch";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import officeImage from "@/assets/office-interior.jpg";
import industrialImage from "@/assets/industrial-facility.jpg";

const Sectors = () => {
  const sectors = [
    {
      title: "Offices & Corporate",
      href: "/sectors/offices-corporate",
      image: officeImage,
      challenges: "Grade A to multi-let schemes. Managing diverse tenant needs. Minimising disruption to business operations.",
      approach: "Out-of-hours works where required. Tenant liaison protocols. Professional appearance standards. Desk-side support available.",
      example: "12-building mixed-use estate – single point of contact for all trades, digital helpdesk, tenant satisfaction up 34%."
    },
    {
      title: "Industrial & Logistics",
      href: "/sectors/industrial-logistics",
      image: industrialImage,
      challenges: "24/7 operations. Critical infrastructure. High-bay environments. Minimal tolerance for downtime.",
      approach: "Rapid response times. Mobile engineer network. Planned works scheduled around operations. Critical spares holding.",
      example: "Regional logistics hub – reactive call-outs reduced 32%, response time cut to 41 mins, £47k annual savings."
    },
    {
      title: "Retail & Service Stations",
      href: "/sectors/retail-service-stations",
      image: officeImage,
      challenges: "Customer-facing environments. Brand standards. Out-of-hours maintenance. Multiple site coordination.",
      approach: "Night works as standard. Brand compliance built-in. Multi-site scheduling. Fast turnaround on customer impact issues.",
      example: "42-site service station network – standardised service delivery, compliance across all sites, minimal customer disruption."
    },
    {
      title: "Aviation & Transport",
      href: "/sectors/aviation",
      image: industrialImage,
      challenges: "Regulated environments. Security clearances. Complex operational interfaces. Safety-critical systems.",
      approach: "Security-vetted engineers. Airside access protocols. Coordination with operations teams. CAA/DfT compliance built-in.",
      example: "3 UK airports – zero compliance breaches in 18 months, security-cleared network, 24/7 helpdesk response maintained."
    },
    {
      title: "Hospitality & Leisure",
      href: "/sectors/hospitality-leisure",
      image: officeImage,
      challenges: "Guest experience impact. Varied opening hours. Seasonal peaks. Front-of-house and back-of-house requirements.",
      approach: "Discreet service delivery. Rapid response to guest-facing issues. Preventative approach to avoid disruption.",
      example: "Hotel and leisure complex – guest complaints reduced 68%, preventative maintenance prevents 90% of disruptions."
    },
    {
      title: "Residential Blocks & PBSA",
      href: "/sectors/residential-pbsa",
      image: industrialImage,
      challenges: "Resident satisfaction. Out-of-hours emergencies. Common areas. Estate management. Leaseholder interfaces.",
      approach: "Resident communication protocols. Emergency response structure. Regular inspections. Section 20 consultation support.",
      example: "250-unit residential scheme – resident satisfaction up 41%, transparent reporting, faster response times."
    },
    {
      title: "Education & Healthcare",
      href: "/sectors/healthcare-public",
      image: officeImage,
      challenges: "Safeguarding requirements. Term-time constraints. Critical environments. Regulatory compliance.",
      approach: "DBS-checked engineers. Holiday scheduling. HTM compliance for healthcare. Documented procedures.",
      example: "Multi-academy trust – safeguarding protocols maintained, holiday works programme, compliance reporting."
    },
    {
      title: "Construction & Developments",
      href: "/sectors/construction-developments",
      image: industrialImage,
      challenges: "Handover coordination. Defects management. Site progression support. Landlord readiness.",
      approach: "Mobilisation planning. Defects period support. Integration with construction teams. Final mile readiness.",
      example: "Mixed-use development – seamless handover, defects cleared ahead of schedule, landlord FM mobilised on day one."
    }
  ];

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Sectors" },
  ];

  return (
    <div className="min-h-screen pt-20">
      
      
      <Breadcrumb items={breadcrumbItems} />
      
      {/* Hero */}
      <section className="py-24 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h1 className="text-5xl md:text-6xl font-light mb-6">
              Different environments. Same reliability.
            </h1>
            <p className="text-xl text-muted-foreground font-light leading-relaxed mb-8">
              Sector-specific understanding meets consistent delivery standards. We adapt our approach to your environment without compromising on quality.
            </p>
            
            {/* Search Bar */}
            <div className="flex justify-center">
              <div className="w-full max-w-2xl">
                <EnhancedGlobalSearch />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sectors Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="space-y-12">
            {sectors.map((sector, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="grid md:grid-cols-2">
                  <Link href={sector.href} className={`block relative flex flex-col justify-end p-8 min-h-[300px] group overflow-hidden ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                    <img src={(sector.image as any).src || sector.image}
                      alt={sector.title}
                      className="absolute inset-0 w-full h-full object-cover z-0 group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent z-10" />
                    <h2 className="relative z-20 text-3xl md:text-4xl font-light text-white border-b border-primary/40 group-hover:border-primary pb-3 inline-block self-start transition-colors">
                      {sector.title}
                    </h2>
                  </Link>
                  <div className={`p-8 space-y-6 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                    <div>
                      <h3 className="text-lg font-medium mb-3">Key Challenges</h3>
                      <p className="text-sm text-muted-foreground font-light leading-relaxed">
                        {sector.challenges}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-3">Our Approach</h3>
                      <p className="text-sm text-muted-foreground font-light leading-relaxed">
                        {sector.approach}
                      </p>
                    </div>
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h3 className="text-sm font-medium mb-2">Example</h3>
                      <p className="text-sm text-muted-foreground font-light leading-relaxed">
                        {sector.example}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-light mb-4">
              Explore Our Sectors
            </h2>
            <p className="text-lg text-muted-foreground font-light max-w-2xl">
              Detailed sector guides with compliance insights, case studies, and service information.
            </p>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-medium mb-2">
                <Link href="/sectors/offices-corporate" className="hover:text-primary transition-colors">
                  Offices & Corporate
                </Link>
              </h3>
              <p className="text-sm text-muted-foreground font-light">Grade A and multi-let schemes</p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-medium mb-2">
                <Link href="/sectors/industrial-logistics" className="hover:text-primary transition-colors">
                  Industrial & Logistics
                </Link>
              </h3>
              <p className="text-sm text-muted-foreground font-light">Manufacturing and warehousing</p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-medium mb-2">
                <Link href="/sectors/retail-service-stations" className="hover:text-primary transition-colors">
                  Retail & Service Stations
                </Link>
              </h3>
              <p className="text-sm text-muted-foreground font-light">Customer-facing operations</p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-medium mb-2">
                <Link href="/sectors/aviation" className="hover:text-primary transition-colors">
                  Aviation & Transport
                </Link>
              </h3>
              <p className="text-sm text-muted-foreground font-light">Airports and terminals</p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-medium mb-2">
                <Link href="/sectors/hospitality-leisure" className="hover:text-primary transition-colors">
                  Hospitality & Leisure
                </Link>
              </h3>
              <p className="text-sm text-muted-foreground font-light">Hotels and leisure facilities</p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-medium mb-2">
                <Link href="/sectors/residential-pbsa" className="hover:text-primary transition-colors">
                  Residential & PBSA
                </Link>
              </h3>
              <p className="text-sm text-muted-foreground font-light">Student accommodation estates</p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-medium mb-2">
                <Link href="/sectors/airports" className="hover:text-primary transition-colors">
                  Airport Facilities
                </Link>
              </h3>
              <p className="text-sm text-muted-foreground font-light">Terminal and airside infrastructure</p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-medium mb-2">
                <Link href="/sectors/venues" className="hover:text-primary transition-colors">
                  Venues & Arenas
                </Link>
              </h3>
              <p className="text-sm text-muted-foreground font-light">High-capacity event spaces</p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-medium mb-2">
                <Link href="/sectors/residential" className="hover:text-primary transition-colors">
                  Residential Estate
                </Link>
              </h3>
              <p className="text-sm text-muted-foreground font-light">BTR and PRS developments</p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-medium mb-2">
                <Link href="/sectors/logistics-parks" className="hover:text-primary transition-colors">
                  Logistics Parks
                </Link>
              </h3>
              <p className="text-sm text-muted-foreground font-light">Distribution centres and estates</p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-medium mb-2">
                <Link href="/sectors/healthcare-public" className="hover:text-primary transition-colors">
                  Healthcare & Public
                </Link>
              </h3>
              <p className="text-sm text-muted-foreground font-light">HTM compliance environments</p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-medium mb-2">
                <Link href="/sectors/education" className="hover:text-primary transition-colors">
                  Education
                </Link>
              </h3>
              <p className="text-sm text-muted-foreground font-light">Schools and academies</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-charcoal text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6">
            Don't see your sector?
          </h2>
          <p className="text-lg text-gray-300 font-light max-w-2xl mx-auto mb-8">
            We work across diverse environments. Talk to us about your specific requirements.
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-charcoal hover:bg-gray-100" asChild>
            <Link href="/contact">Talk to Us About Your Sector</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Sectors;
