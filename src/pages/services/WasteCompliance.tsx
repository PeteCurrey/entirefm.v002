import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { ServiceSchema } from "@/components/shared/SchemaMarkup";
import { FAQSection } from "@/components/shared/FAQSection";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { FAQSchema } from "@/components/shared/SchemaMarkup";
import { SidebarCTA } from "@/components/shared/SidebarCTA";

const WasteCompliance = () => {
  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Waste Management & Environmental Compliance" }
  ];

  const faqs = [
    {
      question: "What is Duty of Care for waste management?",
      answer: "Environmental Protection Act 1990 Section 34 imposes a legal 'Duty of Care' on all waste producers, carriers, and recipients to ensure waste is properly described, contained, transferred, and disposed of. You must check your waste carrier is registered, transfer waste only to authorised persons, complete Waste Transfer Notes for every consignment, and keep records for 2 years (3 years in Scotland). Breaches result in fines up to £50,000 (unlimited on indictment) and/or imprisonment."
    },
    {
      question: "What is the difference between commercial and hazardous waste?",
      answer: "Commercial waste is non-hazardous waste from business premises (paper, cardboard, food waste, general refuse). Hazardous waste has properties making it harmful to human health or the environment (toxic, corrosive, flammable, infectious)—examples include batteries, fluorescent tubes, oils, solvents, asbestos, contaminated PPE. Hazardous waste requires special handling: consignment notes, registered carriers, licensed disposal sites. Penalties for improper hazardous waste disposal are severe—unlimited fines and/or imprisonment."
    },
    {
      question: "How long must waste documentation be retained?",
      answer: "Waste Transfer Notes and Hazardous Waste Consignment Notes must be retained for 2 years (England/Wales/NI) or 3 years (Scotland). Electronic records are acceptable if auditable. During inspections, Environment Agency officers may request immediate production of records—failure results in Fixed Penalty Notices (£300) or prosecution. We recommend digital record-keeping systems for easy retrieval and compliance demonstration."
    },
    {
      question: "Can we be prosecuted for our waste contractor's illegal activities?",
      answer: "Yes, if you failed to exercise Duty of Care. If your contractor fly-tips or illegally disposes of your waste, you remain liable if you did not check their registration status, obtain proper documentation, or verify disposal sites. This is why Duty of Care checks are critical—verify waste carrier registration (Environment Agency public register), obtain Waste Transfer Notes, and request evidence of lawful disposal (weighbridge tickets, facility permits). Due diligence protects you from prosecution."
    },
    {
      question: "What are the waste management requirements for multi-tenant buildings?",
      answer: "Landlords must provide adequate waste storage facilities (separate bins for recycling, general waste, food waste where applicable). Tenants are responsible for their own Duty of Care—checking waste carrier registration, obtaining Waste Transfer Notes, segregating waste correctly. Lease agreements should clearly define responsibilities. Landlords often provide centralised waste contracts to ensure compliance and achieve economies of scale. Contamination (mixing recyclables with general waste) is a common issue requiring ongoing tenant education."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Waste Management & Environmental Compliance | Duty of Care | EntireFM</title>
        <meta name="description" content="Waste management and environmental compliance for commercial estates. Ensuring Duty of Care, documentation, hazardous waste handling, and sustainable waste practices." />
      </Helmet>

      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema 
        name="Waste Management & Environmental Compliance"
        description="Waste management and environmental compliance services for commercial estates. Ensuring Duty of Care compliance, proper waste documentation, hazardous waste handling, and sustainable waste practices."
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
                Waste Management & Environmental Compliance
              </h1>
              <p className="text-xl text-muted-foreground font-light leading-relaxed">
                Ensuring sustainable waste handling for commercial estates through proper documentation, compliance management, and responsible disposal practices.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Legal Framework & Duty of Care
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                Environmental Protection Act 1990 Section 34 imposes a legal 'Duty of Care' on all waste producers, carriers, and recipients. This means businesses are legally responsible for ensuring their waste is properly described, contained, transferred, and disposed of—from production to final disposal.
              </p>
              <p className="text-muted-foreground font-light leading-relaxed">
                Failure to comply results in prosecution by the Environment Agency or local authorities, with fines up to £50,000 (unlimited on indictment) and potential imprisonment. Even if your waste contractor illegally disposes of waste, you remain liable if you failed to exercise Duty of Care. Compliance requires systems for waste segregation, carrier verification, documentation, and audit trails.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Waste Management Compliance Requirements
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium mb-2">Waste Transfer Notes (WTNs)</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Every time waste is transferred between parties, a Waste Transfer Note must be completed describing the waste type, quantity, container type, carrier details, and disposal route. WTNs must be retained for 2 years (3 years in Scotland). Missing or incomplete WTNs result in Fixed Penalty Notices (£300) or prosecution. We implement digital WTN systems providing instant compliance evidence during inspections.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Waste Carrier Registration Checks</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Only registered waste carriers may transport waste. Before appointing contractors, verify registration on the Environment Agency public register (England/Wales), SEPA (Scotland), or NIEA (Northern Ireland). Unregistered carriers operate illegally—using them breaches your Duty of Care and may result in prosecution. Registration numbers must be recorded on Waste Transfer Notes. We conduct quarterly registration checks to ensure ongoing compliance.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Hazardous Waste Consignment Notes</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Hazardous waste (batteries, fluorescent tubes, oils, solvents, asbestos, contaminated materials) requires Hazardous Waste Consignment Notes, not standard WTNs. These are pre-printed, numbered documents tracking waste from production to disposal. Producers must notify the Environment Agency of hazardous waste arisings (Hazardous Waste Regulations 2005). Illegal disposal of hazardous waste carries unlimited fines and imprisonment—compliance is non-negotiable.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Waste Storage & Segregation</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Waste must be stored securely to prevent escape, contamination, or nuisance. Separate bins required for general waste, dry recyclables (paper, cardboard, plastic, metal), glass, food waste (where applicable), and hazardous waste. Contamination (mixing waste streams) reduces recycling rates and increases disposal costs. Waste storage areas must be secure (prevent fly-tipping), weatherproof (prevent leachate), and compliant with fire safety regulations (combustible waste storage).
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Environmental Permits & Exemptions</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Some on-site waste activities require environmental permits or waste exemptions—examples include storing waste (&gt;50 tonnes), treating waste (composting, shredding), or burning waste (energy recovery). Operating without required permits is illegal and results in prosecution. We assess whether your operations require permits/exemptions and manage registration/renewal processes. Most commercial estates do not require permits if waste is collected by registered carriers.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Sustainable Waste Practices
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                Beyond compliance, sustainable waste management reduces costs, improves ESG performance, and supports circular economy principles. The waste hierarchy prioritises prevention, reuse, recycling, recovery, and disposal (in that order).
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium mb-2">Waste Reduction & Prevention</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Preventing waste generation is the most effective strategy—reducing packaging, reusing materials, digitalising processes, and optimising procurement. Office estates can reduce waste by 20-40% through simple measures: reusable cups, double-sided printing, digital documentation, and reduced packaging requirements for suppliers. Waste prevention reduces disposal costs (£80-£150 per tonne for general waste, £200-£500 per tonne for hazardous waste).
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Recycling & Segregation</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Proper segregation increases recycling rates and reduces disposal costs. Recyclables (paper, cardboard, plastic, metal, glass) are cheaper to dispose of than general waste—£30-£80 per tonne vs £80-£150 per tonne. Target recycling rate: 50-70% for office estates. Common barriers: contamination (food waste in recycling), lack of bins, poor signage, occupant behaviour. We conduct waste audits identifying contamination sources and implement behaviour change programmes.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Food Waste Segregation</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Businesses producing &gt;5kg food waste per week must segregate food waste for separate collection (Environmental Protection Act 1990). Food waste is processed via anaerobic digestion (generating biogas) or composting, diverting waste from landfill and reducing carbon emissions. Non-compliance results in Fixed Penalty Notices. Applicable to offices with canteens, hospitality venues, retail with food courts, healthcare facilities with catering.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">BREEAM & ISO 14001 Alignment</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    BREEAM (Building Research Establishment Environmental Assessment Method) awards credits for waste management plans, segregation facilities, and high recycling rates. ISO 14001 (Environmental Management Systems) requires waste monitoring, target-setting, and continuous improvement. We align waste management practices with these frameworks supporting sustainability certifications and ESG reporting. Documentation systems provide audit trails for third-party verification.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Common Hazardous Wastes in Commercial Buildings
              </h2>
              <div className="bg-muted/50 p-6 rounded-lg space-y-4">
                <div>
                  <h3 className="font-medium mb-2">Batteries (all types)</h3>
                  <p className="text-sm text-muted-foreground font-light">
                    Lead-acid (UPS systems), lithium-ion (laptops, tools), alkaline (general use). Contain toxic heavy metals. Require separate collection and specialist recycling. Landfill disposal illegal.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Fluorescent Tubes & Energy-Saving Bulbs</h3>
                  <p className="text-sm text-muted-foreground font-light">
                    Contain mercury vapour (toxic). Must be collected in intact condition and recycled via specialist contractors. Crushing/breaking releases mercury—avoid compactors. LED bulbs are not hazardous.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Oils & Lubricants</h3>
                  <p className="text-sm text-muted-foreground font-light">
                    Waste oil from generators, compressors, hydraulic systems. Must be stored in bunded containers, collected by licensed carriers, and sent to oil re-processors. Never mix with other waste or pour down drains.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Solvents & Chemicals</h3>
                  <p className="text-sm text-muted-foreground font-light">
                    Cleaning chemicals, paints, adhesives, pesticides. Check Safety Data Sheets (SDS) for classification. Hazardous chemicals require specialist disposal—never pour down drains or mix with general waste.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Asbestos-Containing Materials (ACM)</h3>
                  <p className="text-sm text-muted-foreground font-light">
                    ACM removed during refurbishment/demolition must be double-bagged, labelled, and disposed of via licensed asbestos disposal sites. Transport requires licensed asbestos carrier. Non-compliance results in prosecution under Control of Asbestos Regulations 2012.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">WEEE (Waste Electrical & Electronic Equipment)</h3>
                  <p className="text-sm text-muted-foreground font-light">
                    IT equipment, monitors, printers, small appliances. Contains hazardous substances (lead, mercury, cadmium). Must be recycled via WEEE-registered contractors. WEEE Regulations 2013 impose producer responsibility—retailers/distributors must offer take-back schemes.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Waste Audits & Improvement Programmes
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                Waste audits analyse waste composition, identify contamination sources, and benchmark performance against industry standards. This data informs targeted interventions—improved signage, additional bins, occupant training, contractor performance management.
              </p>
              <p className="text-muted-foreground font-light leading-relaxed">
                Typical audit findings: 20-30% of 'general waste' is actually recyclable (contamination due to poor segregation), hazardous waste mixed with general waste (compliance risk), overfilled bins (inadequate collection frequency). Post-audit interventions typically improve recycling rates by 15-25% and reduce disposal costs by 10-20%.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Related Services
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link to="/services/sustainability-monitoring" className="p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                  <h3 className="font-medium mb-2">Sustainability Performance Monitoring</h3>
                  <p className="text-sm text-muted-foreground font-light">ESG reporting and target tracking</p>
                </Link>
                <Link to="/services/water-optimisation" className="p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                  <h3 className="font-medium mb-2">Water Consumption Optimisation</h3>
                  <p className="text-sm text-muted-foreground font-light">Reducing water usage and waste</p>
                </Link>
                <Link to="/services/energy-audits" className="p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                  <h3 className="font-medium mb-2">Energy Audits</h3>
                  <p className="text-sm text-muted-foreground font-light">Building performance assessments</p>
                </Link>
                <Link to="/services/net-zero-roadmaps" className="p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                  <h3 className="font-medium mb-2">Net Zero Roadmaps</h3>
                  <p className="text-sm text-muted-foreground font-light">Carbon reduction strategies</p>
                </Link>
              </div>
            </section>

            <section className="mb-12">
              <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg">
                <h2 className="text-2xl font-light mb-4">Request Waste Compliance Review</h2>
                <p className="text-muted-foreground font-light leading-relaxed mb-6">
                  Our environmental compliance specialists conduct waste management audits for commercial, industrial, and public sector estates. We ensure Duty of Care compliance, implement documentation systems, and develop sustainable waste strategies. Contact us for a site-specific compliance review.
                </p>
                <Link 
                  to="/request-proposal" 
                  className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Request Compliance Review
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

export default WasteCompliance;
