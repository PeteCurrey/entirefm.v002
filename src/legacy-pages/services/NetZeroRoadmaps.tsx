"use client";

;
import Link from "next/link";
import { ServiceSchema } from "@/components/shared/SchemaMarkup";
import { FAQSection } from "@/components/shared/FAQSection";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { FAQSchema } from "@/components/shared/SchemaMarkup";
import { SidebarCTA } from "@/components/shared/SidebarCTA";

const NetZeroRoadmaps = () => {
  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Carbon Reduction & Net Zero Strategy" }
  ];

  const faqs = [
    {
      question: "What is a net zero roadmap?",
      answer: "A net zero roadmap is a strategic plan outlining interventions required to achieve carbon neutrality by a target date (typically 2030-2050). Roadmaps include baseline carbon assessment, emissions reduction targets, prioritised interventions (energy efficiency, renewable generation, electrification), capital investment requirements, and residual offsetting strategies."
    },
    {
      question: "Can commercial buildings actually achieve net zero?",
      answer: "Yes, through a combination of energy efficiency improvements, renewable energy generation (solar PV, heat pumps), grid decarbonisation, and offsetting residual emissions. Most commercial buildings achieve 60-80% reduction through on-site measures, with remaining emissions offset through verified carbon credits. Net zero is challenging but achievable with phased investment."
    },
    {
      question: "What are Scope 1, 2, and 3 emissions?",
      answer: "Scope 1: Direct emissions from on-site combustion (gas boilers, generators, fleet vehicles). Scope 2: Indirect emissions from purchased electricity and heat. Scope 3: Indirect emissions from supply chain, construction, tenant energy use, and business travel. Most building net zero strategies focus on Scope 1 and 2, which building owners control directly."
    },
    {
      question: "How much does decarbonisation cost?",
      answer: "Varies significantly based on building type, baseline efficiency, and target timeline. Energy efficiency measures (insulation, controls, LED lighting) typically cost £20-100/m². Heat pump installations range from £50,000-£500,000 depending on capacity. Solar PV costs £800-1,200/kWp installed. Payback periods range from 3-15 years depending on energy prices and available incentives."
    },
    {
      question: "Are there grants or incentives for decarbonisation?",
      answer: "Yes. The Public Sector Decarbonisation Scheme provides capital grants for public buildings. Enhanced Capital Allowances offer accelerated tax relief for energy-efficient equipment. The Renewable Heat Incentive (closing to new applicants) has been replaced by the Boiler Upgrade Scheme for heat pumps. Local authorities and devolved administrations offer additional grant schemes."
    }
  ];

  return (
    <>
      

      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema 
        name="Carbon Reduction & Net Zero Strategy"
        description="Carbon reduction and net zero roadmaps for commercial estates across the UK. Reducing energy intensity and decarbonising estate operations through engineered intervention."
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
                Carbon Reduction & Net Zero Strategy
              </h1>
              <p className="text-xl text-muted-foreground font-light leading-relaxed">
                Reducing energy intensity and decarbonising estate operations through engineered intervention. Supporting ESG commitments and regulatory compliance.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                The Imperative for Decarbonisation
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                The UK's legally binding commitment to net zero by 2050 requires substantial carbon reductions across the commercial building stock. Buildings account for approximately 18% of UK carbon emissions—primarily from heating, cooling, and power consumption. Building owners face increasing regulatory pressure, investor expectations, and tenant demands for low-carbon properties.
              </p>
              <p className="text-muted-foreground font-light leading-relaxed">
                Net zero roadmaps provide the strategic framework and phased investment plan required to decarbonise estates systematically. Unlike generic carbon assessments, our roadmaps are developed by chartered engineers with deep technical knowledge of building services, ensuring interventions are technically feasible, cost-effective, and compatible with existing infrastructure.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Roadmap Components
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium mb-2">Carbon Baseline Assessment</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Quantifying current Scope 1 (direct combustion), Scope 2 (purchased electricity), and Scope 3 (supply chain, tenant energy) emissions. Baseline data establishes the starting point and enables progress tracking. SECR-compliant reporting methodologies are used for consistency.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Heat Loss & Building Fabric Studies</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Assessing insulation performance, air leakage, and thermal bridging using thermal imaging, U-value calculations, and air pressure testing. Poor building fabric increases heating/cooling demand—fabric improvements reduce energy intensity and enable lower-temperature heating systems (essential for heat pump viability).
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Renewable Energy Integration</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Evaluating solar PV potential (roof area, orientation, shading), heat pump feasibility (heating loads, distribution temperatures, electrical capacity), and battery storage opportunities. Renewable generation reduces Scope 2 emissions and provides long-term energy cost hedging.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Electrification Pathway</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Replacing gas boilers with heat pumps, transitioning fleet vehicles to electric, and eliminating on-site fossil fuel combustion. Electrification shifts emissions to Scope 2 (purchased electricity)—as the grid decarbonises, building emissions fall without further intervention. Electrical infrastructure upgrades (DNO capacity, distribution boards) are costed and phased.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Operational Energy Management</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Optimising controls, improving maintenance regimes, and eliminating energy waste. Operational improvements reduce energy intensity by 15-30% and lower the capital investment required for renewable systems. Energy management is the foundation of cost-effective decarbonisation.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Residual Offsetting Strategy</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Quantifying residual emissions that cannot be eliminated through on-site measures (e.g., Scope 3 emissions, embodied carbon in materials). Offsetting strategies using verified carbon credits (woodland creation, renewable energy projects) achieve carbon neutrality for emissions that are technically or economically unfeasible to abate directly.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Legal Frameworks & Compliance
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-muted/30 p-4 rounded-lg">
                  <h3 className="font-medium mb-2">Climate Change Act 2008 (2050 Target Amendment Order 2019)</h3>
                  <p className="text-sm text-muted-foreground font-light">Legally binding net zero by 2050. Building owners must demonstrate credible decarbonisation pathways.</p>
                </div>
                <div className="bg-muted/30 p-4 rounded-lg">
                  <h3 className="font-medium mb-2">SECR (Streamlined Energy and Carbon Reporting)</h3>
                  <p className="text-sm text-muted-foreground font-light">Annual carbon disclosure for quoted and large unquoted companies. Roadmaps support credible reporting and reduction targets.</p>
                </div>
                <div className="bg-muted/30 p-4 rounded-lg">
                  <h3 className="font-medium mb-2">Minimum Energy Efficiency Standards (MEES)</h3>
                  <p className="text-sm text-muted-foreground font-light">EPC B minimum by 2030 (England & Wales). Decarbonisation interventions improve EPC ratings and ensure rental compliance.</p>
                </div>
                <div className="bg-muted/30 p-4 rounded-lg">
                  <h3 className="font-medium mb-2">Future Homes/Buildings Standard</h3>
                  <p className="text-sm text-muted-foreground font-light">New buildings must achieve 75-80% carbon reductions from 2025. Existing buildings face increasing retrofit requirements to maintain competitiveness.</p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                ESG & Investment Considerations
              </h2>
              <div className="bg-muted/50 p-6 rounded-lg space-y-3">
                <p className="text-muted-foreground font-light leading-relaxed">
                  <span className="font-medium text-foreground">Investor Expectations:</span> ESG-focused investors require evidence of credible net zero strategies. Buildings without decarbonisation roadmaps face valuation penalties, difficulty securing finance, and reduced liquidity.
                </p>
                <p className="text-muted-foreground font-light leading-relaxed">
                  <span className="font-medium text-foreground">Tenant Demand:</span> Corporate occupiers with net zero commitments demand low-carbon buildings. High-carbon properties struggle to attract quality tenants and face rental value erosion.
                </p>
                <p className="text-muted-foreground font-light leading-relaxed">
                  <span className="font-medium text-foreground">Green Finance:</span> Green loans and sustainability-linked bonds offer preferential financing for low-carbon buildings. Credible net zero roadmaps are essential to access these financial products.
                </p>
                <p className="text-muted-foreground font-light leading-relaxed">
                  <span className="font-medium text-foreground">Stranded Asset Risk:</span> High-carbon buildings face regulatory obsolescence, reduced demand, and potential stranding. Proactive decarbonisation protects asset value and ensures long-term competitiveness.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Related Services
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link href="/services/energy-audits" className="p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                  <h3 className="font-medium mb-2">Energy Audits</h3>
                  <p className="text-sm text-muted-foreground font-light">Baseline assessment and efficiency opportunities</p>
                </Link>
                <Link href="/services/thermal-imaging-surveys" className="p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                  <h3 className="font-medium mb-2">Thermal Imaging</h3>
                  <p className="text-sm text-muted-foreground font-light">Building fabric heat loss diagnostics</p>
                </Link>
                <Link href="/services/energy-optimisation" className="p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                  <h3 className="font-medium mb-2">Energy Optimisation</h3>
                  <p className="text-sm text-muted-foreground font-light">Operational improvements and plant efficiency</p>
                </Link>
                <Link href="/services/sustainability-monitoring" className="p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                  <h3 className="font-medium mb-2">Sustainability Monitoring</h3>
                  <p className="text-sm text-muted-foreground font-light">Performance tracking and ESG reporting</p>
                </Link>
              </div>
            </section>

            <section className="mb-12">
              <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg">
                <h2 className="text-2xl font-light mb-4">Request Net Zero Roadmap</h2>
                <p className="text-muted-foreground font-light leading-relaxed mb-6">
                  Our chartered engineers develop net zero roadmaps for single buildings and multi-site portfolios. We provide phased investment plans with capital costs, carbon reduction trajectories, and ROI analysis. Contact us for a site-specific proposal.
                </p>
                <Link href="/request-proposal" 
                  className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Request Net Zero Roadmap
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

export default NetZeroRoadmaps;
