import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { ServiceSchema } from "@/components/shared/SchemaMarkup";
import { FAQSection } from "@/components/shared/FAQSection";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { FAQSchema } from "@/components/shared/SchemaMarkup";
import { SidebarCTA } from "@/components/shared/SidebarCTA";

const GroundsMaintenance = () => {
  const breadcrumbItems = [
    { label: "Soft Services", href: "/services" },
    { label: "Grounds Maintenance with Compliance Oversight" }
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

      <div className="container mx-auto px-4 py-8">
        <Breadcrumb items={breadcrumbItems} />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          <div className="lg:col-span-2">
            <section className="mb-12">
              <h1 className="text-4xl md:text-5xl font-light mb-6">
                Grounds Maintenance with Compliance Oversight
              </h1>
              <p className="text-xl text-muted-foreground font-light leading-relaxed">
                Water management, slip-risk reduction, drainage oversight and safe-access maintenance.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Grounds Maintenance: Beyond Aesthetic Management
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                Grounds maintenance manages external spaces—grass, planting, trees, hard surfaces, drainage. While aesthetic quality matters (first impressions, occupier satisfaction), compliance-led grounds management prioritizes: Safety (slip/trip hazard prevention, tree safety), Water management (drainage maintenance, pollution prevention), Accessibility (paths, ramps, mobility provision), Environmental stewardship (biodiversity, sustainable practices). Neglected grounds cause: Personal injury (uneven surfaces, overgrown vegetation, falling branches), Flooding (blocked drains, inadequate surface water management), Regulatory action (pollution incidents, accessibility failures), Reputational damage (poor external appearance).
              </p>
              <p className="text-muted-foreground font-light leading-relaxed">
                Our grounds maintenance service integrates FM compliance oversight with horticultural expertise—ensuring grounds are safe, compliant, and professionally maintained. We coordinate with drainage specialists, arborists, and FM teams—delivering holistic external estate management that supports operational safety and regulatory compliance.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Core Grounds Maintenance Services
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium mb-2">Grass & Vegetation Management</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Routine maintenance: Grass cutting (mowing, edging, strimming—frequency: fortnightly growing season, monthly shoulder seasons), Hedge maintenance (trimming, shaping—bi-annual), Bed maintenance (weeding, mulching, seasonal planting), Leaf clearance (autumn/winter—prevent slip hazards, drainage blockages), Weed control (herbicide application or manual removal—paths, hard surfaces). Equipment: Commercial mowers (ride-on, pedestrian), Strimmers, Hedge trimmers, Leaf blowers/vacuums. Standards vary by site: Corporate/retail (high-quality finish, frequent maintenance), Industrial/logistics (functional, safety-focused), Residential (amenity balance—usability vs aesthetics). Grounds maintenance schedules are seasonal—intensive during growing season (April-September), reduced in winter.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Hard Surface & Access Maintenance</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Safety-critical maintenance: Path repairs (uneven paving, cracks, trip hazards—liability risk), Weed removal (hard surfaces, joints—prevent deterioration, improve appearance), Pressure washing (remove algae, moss—reduce slip risks), Grit application (winter—prevent ice-related slips), Signage maintenance (directional, safety, parking—clear, visible). Accessibility requirements: Dropped kerbs (wheelchair access), Tactile paving (visual impairment support), Clear pathways (minimum widths, no obstructions). Hard surface deterioration causes: Slip/trip injuries (personal injury claims, employer liability), Accessibility failures (Equality Act non-compliance), Drainage issues (standing water, flooding). Regular inspection and proactive repair prevents escalation from minor defects to major safety hazards.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Tree Safety & Arboricultural Management</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Tree safety is legal duty of care: Annual inspections (visual tree surveys—identify hazards, disease, structural defects), Detailed surveys (climbing inspections, decay detection—assess structural integrity), Risk assessment (likelihood x consequence = risk level), Remedial works (pruning, crown reduction, felling where required). Common hazards: Deadwood (falling branches—injury risk), Root heave (pavement damage, trip hazards), Disease (ash dieback, Dutch elm disease—structural weakness), Overhanging branches (sight line obstruction, property damage). Tree work requires: NPTC qualifications (chainsaw, aerial platforms), Public liability insurance, TPO checks (planning permission for protected trees). Neglected tree safety causes: Personal injury (falling branches, trips), Property damage, Prosecution (if negligence proven after incident).
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Drainage & Water Management Integration
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium mb-2">Surface Water Drainage Coordination</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Grounds maintenance affects site drainage: Gully clearance (remove leaf debris, vegetation—prevent blockages), Channel maintenance (clear drainage channels, prevent overgrowth), Soakaway inspection (ensure infiltration capacity maintained), Surface water management (prevent standing water, flooding). Grounds contractors coordinate with FM drainage specialists: Quarterly gully inspections (identify blockages), Vegetation control (prevent root ingress into pipework), Leaf management (clear autumn leaf fall before gullies blocked). Poor coordination causes: Flooding (blocked drainage from neglected vegetation), Standing water (slip hazards, ice formation), Drainage system damage (root ingress, blockages from organic matter).
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Pollution Prevention & Environmental Compliance</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Grounds activities must prevent water pollution: Chemical use (herbicides, pesticides—prevent runoff into watercourses), Sediment control (prevent soil erosion, silt runoff during works), Green waste management (prevent organic matter entering drains—causes blockages, pollution). Environmental Protection Act regulations prohibit pollution of watercourses—enforcement by Environment Agency includes: Prohibition notices (stop activity), Fines (unlimited for serious pollution), Prosecution (criminal liability). Best practices: Minimize chemical use (integrated pest management), Use buffer zones (no spraying near watercourses), Dispose of green waste responsibly (composting, licensed disposal). Environmental compliance is regulatory requirement and ESG priority.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">SUDS Maintenance (Sustainable Drainage)</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    SUDS features require grounds maintenance: Infiltration basins (vegetation management, silt removal), Swales (grass cutting, channel clearance), Attenuation ponds (aquatic vegetation control, outlet clearance), Permeable paving (surface cleaning, prevent silt sealing). SUDS reduce flood risk and improve water quality—maintenance ensures ongoing performance. Neglected SUDS cause: Reduced infiltration (surface sealing, silt accumulation), Flooding (blockages prevent flow), Water quality deterioration (excessive vegetation, organic matter). SUDS maintenance is specialist—grounds contractors require understanding of drainage function, not just horticultural aesthetics.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Environmental Stewardship & ESG Integration
              </h2>
              <div className="bg-muted/50 p-6 rounded-lg space-y-4">
                <div>
                  <h3 className="font-medium mb-2">Biodiversity Enhancement</h3>
                  <p className="text-sm text-muted-foreground font-light">
                    ESG-aligned grounds management supports biodiversity: Native planting (local species support wildlife), Wildflower meadows (pollinator-friendly, low-maintenance alternative to mown grass), Reduced mowing frequency (allow natural growth—biodiversity benefits, cost reduction), Habitat creation (log piles, bird boxes, insect hotels). Biodiversity net gain is regulatory requirement (Environment Act 2021) for new developments—existing estates can voluntarily enhance biodiversity supporting ESG credentials.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Sustainable Practices & Chemical Reduction</h3>
                  <p className="text-sm text-muted-foreground font-light">
                    Environmental best practices: Eliminate glyphosate (controversial herbicide—alternatives: manual weeding, hot foam, acetic acid), Use electric equipment (zero-emission mowers, strimmers, blowers), Compost green waste on-site (circular economy, reduce waste disposal costs), Rainwater harvesting (irrigation using collected rainwater reduces mains water use). Sustainable grounds management reduces environmental impact while maintaining functionality—supports ESG reporting and tenant/occupier expectations for environmental responsibility.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Carbon Sequestration & Climate Resilience</h3>
                  <p className="text-sm text-muted-foreground font-light">
                    Trees and vegetation sequester carbon—contributing to net-zero targets. Climate-resilient landscaping: Drought-tolerant species (reduce irrigation needs), Tree planting (carbon offset, urban cooling, amenity benefits), Green infrastructure (green roofs, living walls—insulation, biodiversity). Grounds are ESG opportunity—visible demonstration of environmental stewardship supporting corporate sustainability commitments.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Seasonal Grounds Management
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                Grounds maintenance is seasonal: <strong>Spring (March-May):</strong> Grass cutting commences (fortnightly), Spring bulbs, Hedge trimming, Weed control application. <strong>Summer (June-August):</strong> Intensive grass cutting (peak growth), Irrigation (if required), Pest/disease monitoring, Bed maintenance. <strong>Autumn (September-November):</strong> Leaf clearance (weekly during peak fall), Final grass cuts, Hedge trimming, Bulb planting. <strong>Winter (December-February):</strong> Minimal grass cutting, Tree works (deciduous trees when dormant), Gritting/snow clearance, Hard surface maintenance.
              </p>
              <p className="text-muted-foreground font-light leading-relaxed">
                Seasonal scheduling optimizes cost-efficiency and plant health. Winter is ideal for: Tree surgery (visibility improved, reduced sap flow), Hard landscaping projects (minimal disruption to grass/planting), Drainage works (coordinate with grounds to minimize damage). Professional grounds management adapts to seasonal requirements—delivering appropriate maintenance throughout the year.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Related Services
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link to="/services/drainage-cctv-surveys" className="p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                  <h3 className="font-medium mb-2">Drainage Surveys</h3>
                  <p className="text-sm text-muted-foreground font-light">CCTV surveys and clearance</p>
                </Link>
                <Link to="/soft-services/waste-recycling" className="p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                  <h3 className="font-medium mb-2">Waste & Recycling</h3>
                  <p className="text-sm text-muted-foreground font-light">Green waste management</p>
                </Link>
                <Link to="/services/building-fabric" className="p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                  <h3 className="font-medium mb-2">Building Fabric</h3>
                  <p className="text-sm text-muted-foreground font-light">External repairs and hard surfaces</p>
                </Link>
                <Link to="/services/sustainability-monitoring" className="p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                  <h3 className="font-medium mb-2">Sustainability Monitoring</h3>
                  <p className="text-sm text-muted-foreground font-light">ESG reporting and environmental tracking</p>
                </Link>
              </div>
            </section>

            <section className="mb-12">
              <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg">
                <h2 className="text-2xl font-light mb-4">Request Grounds Maintenance Services</h2>
                <p className="text-muted-foreground font-light leading-relaxed mb-6">
                  Our grounds maintenance service integrates FM compliance oversight with horticultural expertise—ensuring external spaces are safe, compliant, and professionally maintained. Contact us to discuss grounds management for your estate.
                </p>
                <Link 
                  to="/request-proposal" 
                  className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Request Grounds Maintenance
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

export default GroundsMaintenance;
