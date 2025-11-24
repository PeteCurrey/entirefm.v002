import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { ServiceSchema } from "@/components/shared/SchemaMarkup";
import { FAQSection } from "@/components/shared/FAQSection";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { FAQSchema } from "@/components/shared/SchemaMarkup";
import { SidebarCTA } from "@/components/shared/SidebarCTA";

const WasteRecycling = () => {
  const breadcrumbItems = [
    { label: "Soft Services", href: "/services" },
    { label: "Waste & Recycling Management" }
  ];

  const faqs = [
    {
      question: "What is duty of care for commercial waste?",
      answer: "Environmental Protection Act 1990 imposes duty of care on waste producers: Prevent unauthorized disposal (ensure waste handled by licensed contractors), Secure waste (prevent fly-tipping, escape, spillage), Complete waste transfer notes (document every transfer—who, what, when, where), Use licensed waste carriers (check Environment Agency registration), Segregate hazardous waste (separate handling, specialist disposal). Duty of care applies to all commercial waste—general waste, recyclables, hazardous materials. Non-compliance causes: Fines (unlimited for serious breaches), Prosecution (criminal liability for illegal disposal), Reputational damage (association with fly-tipping). Duty of care is legal obligation—not optional extra. Evidence of compliance: Waste transfer notes (retain 2 years), Waste carrier licenses (verify annually), Waste destination documentation (audit trail to final disposal/recovery)."
    },
    {
      question: "How do you achieve high recycling rates in commercial buildings?",
      answer: "Recycling optimization strategies: Segregation at source (separate bins for paper, cardboard, plastics, glass, cans—prevent contamination), Clear labeling (color-coded bins, pictorial guides—reduce user error), Convenient access (bins located appropriately—kitchens, copy rooms, communal areas), Education campaigns (posters, emails, inductions—inform occupiers), Contamination monitoring (check bins regularly, provide feedback to users). Typical commercial recycling rates: Poor (10-20%), Average (30-40%), Good (50-70%), Excellent (70%+). High rates require: Infrastructure (adequate bins, convenient locations), User engagement (education, feedback), Waste contractor capability (separate collections, contamination tolerance). Recycling reduces: Disposal costs (recycling cheaper than general waste), Landfill tax (avoid £103/tonne tax on residual waste), Carbon footprint (recycling reduces emissions vs virgin material production). Supports ESG reporting—waste diversion rate is key sustainability metric."
    },
    {
      question: "What are the requirements for hazardous waste management?",
      answer: "Hazardous waste requires specialist handling: Classification (identify hazardous waste—chemicals, batteries, fluorescent tubes, contaminated materials), Segregation (separate from general waste—prevent cross-contamination), Storage (secure, labeled, bunded storage—prevent escape, spillage), Consignment notes (hazardous waste consignment notes replace standard transfer notes—more detailed documentation), Licensed carriers (specialist hazardous waste contractors only—Environment Agency registered). Common commercial hazardous wastes: Fluorescent tubes/LEDs (mercury content), Batteries (lead, lithium), WEEE (electrical equipment—contains hazardous components), Cleaning chemicals (corrosive, toxic), Contaminated materials (oil-soaked rags, chemical packaging). Non-compliant hazardous waste management causes: Prosecution (serious criminal offence), Unlimited fines, Environmental damage (contamination, pollution incidents), Health risks (exposure to toxic/corrosive materials)."
    },
    {
      question: "How does waste management relate to ESG and sustainability targets?",
      answer: "Waste is significant ESG metric: Waste diversion rate (% waste recycled vs landfilled—target 70%+), Carbon emissions (waste disposal generates GHG emissions—recycling reduces carbon footprint), Circular economy (waste as resource—support reuse, recovery), Social value (waste reduction campaigns engage occupiers, support sustainability culture). ESG-aligned waste strategies: Zero-to-landfill (all non-recyclable waste to energy recovery—avoid landfill), Single-use plastic elimination (reusable alternatives for catering, events), Food waste segregation (anaerobic digestion—generate biogas, fertilizer), Reuse schemes (furniture, IT equipment donated rather than skipped). Transparent waste reporting supports: ESG disclosure (TCFD, SECR, GRESB—waste metrics required), Tenant satisfaction (sustainability-conscious occupiers expect waste stewardship), Corporate sustainability commitments (net-zero, circular economy pledges)."
    },
    {
      question: "What documentation and audits are required for waste compliance?",
      answer: "Waste compliance documentation: Waste transfer notes (every waste collection—retain 2 years), Waste carrier licenses (verify contractors Environment Agency registered—annually), Consignment notes (hazardous waste—specific forms, detailed records), Waste data (tonnages, waste streams, destinations—monthly reporting), Exemptions or permits (if waste stored/treated on-site—register with Environment Agency). Compliance audits verify: Documentation complete (transfer notes, licenses, consignment notes), Contractors legitimate (licenses valid, no enforcement action history), Duty of care discharged (waste handled appropriately, evidence trail exists), Hazardous waste managed correctly (segregated, consignment notes completed, specialist disposal). Audits prevent: Regulatory action (enforcement notices, fines if non-compliance discovered), Contractor fraud (unlicensed operators, illegal disposal—client liable), Insurance issues (inadequate documentation invalidates cover). Professional waste management includes compliance audits and documentation management—removing burden from clients."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Waste & Recycling Management | Duty of Care & ESG | EntireFM</title>
        <meta name="description" content="Waste and recycling management aligned with duty of care and ESG objectives. Sustainable waste handling, segregation, and compliance documentation for commercial estates." />
      </Helmet>

      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema 
        name="Waste & Recycling Management"
        description="Sustainable management aligned with duty of care and ESG objectives. Waste segregation, recycling optimization, and compliance documentation for commercial estates."
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
                Waste & Recycling Management
              </h1>
              <p className="text-xl text-muted-foreground font-light leading-relaxed">
                Sustainable management aligned with duty of care and ESG objectives.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Waste Management: Compliance, Cost, Sustainability
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                Commercial waste management balances regulatory compliance, cost control, and environmental stewardship. Environmental Protection Act 1990 imposes duty of care on waste producers—ensuring waste is handled by licensed contractors, properly documented, and legally disposed. Beyond compliance, effective waste management delivers: Cost reduction (high recycling rates reduce disposal costs and landfill tax), ESG credentials (waste diversion supports sustainability reporting), Occupier satisfaction (visible commitment to environmental responsibility). Poor waste management causes: Regulatory action (fines, prosecution for illegal disposal), Excessive costs (low recycling, high landfill tax), Reputational damage (association with fly-tipping, environmental harm).
              </p>
              <p className="text-muted-foreground font-light leading-relaxed">
                Our waste management service integrates compliance oversight with sustainability optimization—ensuring legal duty of care while maximizing recycling rates, minimizing costs, and supporting ESG objectives. We manage contractor relationships, documentation, and performance monitoring—removing complexity from client operations.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Duty of Care & Legal Compliance
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium mb-2">Environmental Protection Act Requirements</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Duty of care obligations: Prevent unauthorized disposal (ensure waste handled by licensed carriers—check Environment Agency registration), Secure waste (prevent escape, spillage, fly-tipping), Complete waste transfer notes (document every collection—who, what, when, where, how much), Use authorized facilities (waste sent to licensed sites—disposal, recovery, recycling), Segregate hazardous waste (separate handling, specialist disposal with consignment notes). Duty of care applies to ALL commercial waste—general refuse, recyclables, hazardous materials. Non-compliance consequences: Unlimited fines (serious breaches), Criminal prosecution (including directors personally), Reputational damage (association with illegal disposal, fly-tipping). Evidence of compliance: Waste transfer notes (retain minimum 2 years), Waste carrier licenses (verify annually), Audit trail (documented waste destinations).
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Waste Transfer Notes & Documentation</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Legal documentation requirements: Waste transfer notes (written description of waste, quantity, transfer date, parties involved—signed by producer and carrier), Waste carrier licenses (verify contractors Environment Agency registered—valid license essential), Seasonal waste returns (annual returns for premises producing large quantities—data submission to Environment Agency), Exemptions registration (if waste stored/treated on-site—register exemptions with Environment Agency). Documentation proves duty of care discharged—without it, prosecution risk exists even if waste properly managed. Professional waste contractors provide documentation automatically—clients must retain and audit periodically. Missing documentation is regulatory non-compliance—regardless of actual disposal method.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Hazardous Waste Management</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Hazardous waste requires specialist handling: Classification (identify hazardous materials—fluorescent tubes, batteries, chemicals, contaminated waste), Segregation (separate from general waste—prevent cross-contamination), Consignment notes (hazardous waste consignment notes replace standard transfer notes—more detailed, pre-notification to Environment Agency), Licensed carriers (specialist hazardous contractors only), Secure storage (labeled, bunded, locked—prevent escape, spillage, theft). Common commercial hazardous wastes: Fluorescent tubes/LEDs (mercury), Batteries (lead, lithium), WEEE (electrical waste—hazardous components), Cleaning chemicals, Oil/fuel contaminated materials. Hazardous waste non-compliance is serious criminal offence—unlimited fines, prosecution, environmental damage liability.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Recycling Optimization & Waste Reduction
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium mb-2">Segregation Infrastructure & Bin Provision</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Effective recycling requires segregation at source: Mixed recycling (paper, cardboard, plastics, cans, glass—single bin with co-mingled collection), Separate streams (paper/cardboard, glass, cans—if contamination issues), Food waste (separate collection—anaerobic digestion), General waste (residual non-recyclable). Bin provision: Internal bins (kitchens, copy rooms, communal areas—convenient, accessible), External bins (bulk storage, contractor collection—adequate capacity, secure), Labeling (color-coded, pictorial guides—reduce contamination, user error). Infrastructure inadequacy causes low recycling rates: Insufficient bins (inconvenient access—users default to general waste), Confusing labeling (contamination from incorrect disposal), Inadequate capacity (overflowing bins—poor occupier experience).
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Occupier Engagement & Education</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Recycling success depends on occupier behavior: Induction training (new starters—explain waste systems, expectations), Signage (posters, bin labels—clear visual guides), Communications (emails, newsletters—recycling tips, performance updates), Contamination feedback (monitor bins, identify issues, educate users). Engagement campaigns: Waste awareness weeks (focus events, competitions, prizes), Data sharing (publish recycling rates, improvement targets—transparency motivates), Recognition schemes (acknowledge departments/floors with high performance). User engagement is more effective than infrastructure alone—high recycling rates require both convenient systems AND informed, motivated occupiers.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Waste Reduction Initiatives</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Reduce waste at source: Eliminate single-use items (reusable cups, cutlery, plates—replace disposables), Paperless operations (digital documents, emails—reduce paper waste), Reusable packaging (returnable pallets, crates—avoid cardboard waste), Portion control (catering—reduce food waste), Donation schemes (surplus furniture, IT equipment—reuse vs disposal). Waste hierarchy prioritizes: Prevention (don't create waste), Reuse (extend product life), Recycling (material recovery), Recovery (energy from waste), Disposal (landfill—last resort). Waste reduction is most sustainable—preventing waste is better than recycling it.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                ESG Integration & Sustainability Reporting
              </h2>
              <div className="bg-muted/50 p-6 rounded-lg space-y-4">
                <div>
                  <h3 className="font-medium mb-2">Waste Diversion & Zero-to-Landfill Targets</h3>
                  <p className="text-sm text-muted-foreground font-light">
                    Waste diversion rate = (total waste - landfilled waste) / total waste x 100%. Target rates: Poor ({'<'}30%), Average (30-50%), Good (50-70%), Excellent ({'>'}70%). Zero-to-landfill strategies: Maximize recycling (segregation, contractor capability), Energy recovery (non-recyclable waste to energy-from-waste plants—avoid landfill), Waste reduction (reduce waste generation—less to dispose). Zero-to-landfill improves ESG metrics while reducing landfill tax (£103/tonne)—financial and environmental benefits align.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Carbon Footprint & Circular Economy</h3>
                  <p className="text-sm text-muted-foreground font-light">
                    Waste disposal generates GHG emissions: Landfill (methane from decomposition), Transport (collection vehicle emissions), Processing (energy consumption). Recycling reduces carbon footprint vs virgin material production—recycled aluminum saves 95% energy, recycled paper saves 40%. Circular economy principles: Design out waste (products designed for reuse, repair, recycling), Keep materials in use (extend life, reuse, remanufacture), Regenerate natural systems (return organic matter to soil—composting, anaerobic digestion). Waste strategies supporting circular economy demonstrate ESG leadership.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Transparent Waste Reporting</h3>
                  <p className="text-sm text-muted-foreground font-light">
                    Monthly waste data reporting: Tonnages (total waste, recycling, residual—by waste stream), Diversion rate (% recycled), Costs (disposal charges, contractor fees), Destination (where waste sent—recovery facilities, landfill), Carbon impact (estimated emissions—kg CO2e). Transparent reporting supports: ESG disclosure (TCFD, SECR, GRESB—waste metrics required), Tenant satisfaction (demonstrate environmental stewardship), Continuous improvement (data-driven optimization, target tracking). Waste is visible ESG opportunity—high diversion rates, transparent reporting, innovative reduction initiatives support sustainability credentials.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Contractor Management & Performance Monitoring
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                Professional waste management requires contractor oversight: License verification (ensure Environment Agency registration valid—annually), Performance monitoring (collection reliability, contamination rates, diversion rates), Cost benchmarking (compare pricing, identify savings opportunities), Documentation compliance (waste transfer notes, data returns, audit trails), Contract management (pricing reviews, service level agreements, dispute resolution).
              </p>
              <p className="text-muted-foreground font-light leading-relaxed">
                Contractor issues include: Missed collections (operational disruption, occupier complaints), Contamination rejection (bins not collected due to incorrect contents), Pricing disputes (unclear charges, unexpected costs), License lapses (non-compliant contractor—client liability risk). Professional waste management removes client burden—contractor relationships, compliance verification, performance optimization delivered as integrated service.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Related Services
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link to="/soft-services/grounds-maintenance" className="p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                  <h3 className="font-medium mb-2">Grounds Maintenance</h3>
                  <p className="text-sm text-muted-foreground font-light">Green waste management</p>
                </Link>
                <Link to="/services/sustainability-monitoring" className="p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                  <h3 className="font-medium mb-2">Sustainability Monitoring</h3>
                  <p className="text-sm text-muted-foreground font-light">ESG reporting and performance tracking</p>
                </Link>
                <Link to="/fm-operations/occupier-experience" className="p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                  <h3 className="font-medium mb-2">Occupier Experience</h3>
                  <p className="text-sm text-muted-foreground font-light">User engagement and satisfaction</p>
                </Link>
                <Link to="/fm-operations/fm-strategy" className="p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                  <h3 className="font-medium mb-2">FM Strategy</h3>
                  <p className="text-sm text-muted-foreground font-light">Estate performance consultancy</p>
                </Link>
              </div>
            </section>

            <section className="mb-12">
              <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg">
                <h2 className="text-2xl font-light mb-4">Request Waste Management Services</h2>
                <p className="text-muted-foreground font-light leading-relaxed mb-6">
                  Our waste management service integrates compliance oversight with sustainability optimization—ensuring legal duty of care while maximizing recycling rates and supporting ESG objectives. Contact us to discuss waste management for your estate.
                </p>
                <Link 
                  to="/request-proposal" 
                  className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Request Waste Management
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

export default WasteRecycling;
