import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { ServiceSchema } from "@/components/shared/SchemaMarkup";
import { FAQSection } from "@/components/shared/FAQSection";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { FAQSchema } from "@/components/shared/SchemaMarkup";
import { SidebarCTA } from "@/components/shared/SidebarCTA";
import { RelatedServices } from "@/components/shared/RelatedServices";

const SpacePlanning = () => {
  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Space Planning & Workplace Adjustments" }
  ];

  const faqs = [
    {
      question: "What is space planning and why does it matter for commercial occupiers?",
      answer: "Space planning optimizes workplace layout, density, and functionality to support organizational needs. Effective space planning delivers: Cost efficiency (reduce rent per head through optimized density), Productivity (layout supports workflows, collaboration, focus work), Flexibility (adapt to changing headcount, hybrid working, reorganizations), Compliance (meet Building Regulations, fire safety, accessibility, welfare standards). Poor space planning causes: Inefficient space use (excessive rent costs, underutilized areas), Operational issues (workflow disruption, inadequate meeting rooms, storage problems), Regulatory non-compliance (occupancy density, fire exits, welfare provision). Space planning is particularly critical during: Office relocations, Lease renewals (right-sizing space), Organizational restructures, Hybrid working adoption."
    },
    {
      question: "How do you assess current space utilization and occupancy?",
      answer: "Utilization assessment methods: Occupancy surveys (manual counts at regular intervals—desk usage, meeting room occupancy), Sensor technology (PIR sensors, desk booking systems, Wi-Fi analytics—continuous monitoring), Space audits (measure actual vs planned capacity, identify underutilized areas), Staff surveys (understand work patterns, space preferences, pain points). Analysis reveals: Utilization rates (% time desks/meeting rooms occupied—typically 40-60% in traditional offices), Peak occupancy patterns (days/times of maximum use), Underutilized space (areas rarely used, over-specified meeting rooms), Hot-desking viability (ratio of staff to desks based on attendance patterns). Data informs right-sizing decisions and space reallocation."
    },
    {
      question: "What space standards apply to office planning?",
      answer: "Workplace space standards: Desk space: 6-10m² per person (including circulation, storage, shared areas). Higher for cellular offices, lower for open-plan benching. Meeting rooms: 1 meeting room per 10-15 staff (varies by organization type). Size range: 4-person (8m²), 6-person (12m²), 10-person (20m²). Welfare facilities: Toilets (minimum provision per Workplace Regulations—1 per 5 female, 1 per 25 male), Kitchen/breakout (1 per 40-50 staff). Building Regulations and British Standards provide minimum requirements—BCO Guide to Specification (British Council for Offices) provides best-practice standards. Space standards balance: Cost (higher density reduces rent), Productivity (overcrowding reduces performance), Compliance (minimum welfare, circulation, fire safety requirements)."
    },
    {
      question: "How do you plan for hybrid working and flexible workspace?",
      answer: "Hybrid working requires flexible space strategies: Desk-to-staff ratios (reduce from 1:1 to 0.6-0.8:1 based on attendance patterns—saves 20-40% space costs), Bookable desks (desk booking systems, neighborhood zoning, lockers replace fixed desks), Activity-based working (variety of spaces—focus work, collaboration, social, quiet rooms), Technology enablement (Wi-Fi, video conferencing, power access throughout). Planning considerations: Occupancy modeling (forecast peak attendance, avoid under-provision), Cultural adaptation (staff acceptance of desk-sharing, managerial support), Technology requirements (booking systems, occupancy sensors, utilization tracking). Hybrid planning reduces space costs while maintaining employee experience—requires data-driven utilization analysis and change management."
    },
    {
      question: "What is involved in office reconfiguration and moves?",
      answer: "Reconfiguration project stages: Planning (space plan design, furniture specification, services coordination—power, data, lighting), Regulatory compliance (Building Regulations, fire safety, CDM coordination), Stakeholder engagement (staff consultation, change management, communications), Implementation (furniture installation, services alteration, IT relocation, phased moves), Post-move support (snagging, adjustments, staff feedback). Moves management includes: Pre-move (pack, label, inventory), Move-day coordination (logistics, IT disconnect/reconnect, access management), Post-move (unpack, setup, snagging). Professional moves management minimizes disruption, protects IT equipment, and ensures compliance. Out-of-hours works reduce operational impact but increase costs (premium labour rates)."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Space Planning & Workplace Adjustments | Office Reconfiguration | EntireFM</title>
        <meta name="description" content="Space planning and workplace adjustments for office reconfiguration. Welfare optimization, moves management and flexible workspace design." />
      </Helmet>

      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema 
        name="Space Planning & Workplace Adjustments"
        description="Office reconfiguration, welfare optimization, moves and changes management. Space planning supporting organizational efficiency and workplace flexibility."
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
                Space Planning & Workplace Adjustments
              </h1>
              <p className="text-xl text-muted-foreground font-light leading-relaxed">
                Office reconfiguration, welfare optimization, moves and changes for organizational efficiency.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Space Planning: Optimizing Workplace Value
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                Space planning optimizes workplace layout and density to support organizational objectives—reducing occupancy costs, improving productivity, and enabling flexibility. Effective space planning considers: Current utilization (actual vs planned occupancy—typically 40-60% desk usage), Future requirements (growth forecasts, hybrid working, departmental changes), Regulatory compliance (Building Regulations, fire safety, welfare provision, accessibility), Cost efficiency (rent per head, fit-out costs, ongoing FM). Poor space planning results in: Excessive rent costs (underutilized space), Operational inefficiency (inadequate meeting rooms, poor layout), Regulatory non-compliance (overcrowding, inadequate welfare).
              </p>
              <p className="text-muted-foreground font-light leading-relaxed">
                Space planning is critical during: Office relocations (right-sizing), Lease events (expansion, downsizing, renewal), Organizational change (restructures, mergers, hybrid working adoption). Our space planning service combines utilization analysis, regulatory compliance, and workplace design—delivering data-driven solutions that optimize space value while maintaining employee experience and legal compliance.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Utilization Assessment & Data Analysis
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium mb-2">Occupancy Measurement Methods</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Utilization data collection: Manual surveys (headcounts at regular intervals—hourly throughout day, weekly across month), Sensor technology (PIR sensors on desks/meeting rooms—continuous automated monitoring), Desk booking systems (reservation data reveals actual vs available capacity), Wi-Fi analytics (device presence indicates occupancy patterns—anonymized data). Analysis identifies: Average utilization (% time space occupied—typical office desks 40-60%), Peak occupancy (maximum simultaneous users—determines minimum provision), Underutilized areas (consistently low usage—candidates for reallocation), Seasonal/weekly patterns (Monday/Friday lower attendance, vacation periods). Data-driven assessment prevents subjective assumptions and informs evidence-based space decisions.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Space Audit & Efficiency Analysis</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Physical space audit measures: Total area (Net Internal Area—usable space), Circulation (walkways, corridors—typically 20-30% of total), Workstation density (m² per person—compare to standards), Meeting room provision (quantity, size, utilization), Support spaces (storage, welfare, break-out—adequacy assessment). Efficiency metrics: Space utilization ratio (occupied desks / total desks), Cost per desk (annual rent / desks), Density (people per m²—typical 8-12m²/person including circulation). Audit reveals over-specification (excess space, low utilization) and under-provision (inadequate meeting rooms, storage constraints)—informing reconfiguration opportunities.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Space Standards & Regulatory Compliance
              </h2>
              <div className="bg-muted/50 p-6 rounded-lg space-y-4">
                <div>
                  <h3 className="font-medium mb-2">Workplace Density Standards</h3>
                  <p className="text-sm text-muted-foreground font-light">
                    <strong>Desk provision:</strong> 6-10m² per person (NIA including circulation, storage, shared areas). Open-plan benching at lower end, cellular offices at higher end. <strong>BCO Guide standards:</strong> Efficient (8-10m²), Typical (10-12m²), Premium (12-15m²). Higher densities reduce costs but risk overcrowding if peak occupancy exceeds capacity.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Welfare & Regulatory Requirements</h3>
                  <p className="text-sm text-muted-foreground font-light">
                    <strong>Toilets:</strong> Workplace (Health, Safety and Welfare) Regulations 1992—minimum 1 per 5 women, 1 per 25 men (plus urinals). <strong>Welfare facilities:</strong> Drinking water, rest areas, facilities to eat meals (if food consumed on site). <strong>Fire safety:</strong> Approved Document B—maximum travel distances to exits (18m single direction, 45m alternative directions), minimum exit widths. <strong>Accessibility:</strong> Approved Document M—accessible toilets, circulation widths, door openings.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Building Regulations & Fire Safety</h3>
                  <p className="text-sm text-muted-foreground font-light">
                    Space planning must comply with Building Regulations Part B (Fire Safety): Travel distances (maximum distances to exits based on occupancy and use), Means of escape (adequate exit widths, alternative routes), Compartmentation (fire-resisting partitions where required), Occupancy calculations (determine fire safety provisions based on density). Reconfiguration affecting fire safety requires Building Control notification and approval.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Hybrid Working & Flexible Workspace Design
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                Hybrid working (mix of office and remote work) enables space reduction: Desk ratios (reduce from 1:1 to 0.6-0.8:1—saves 20-40% space costs), Hot-desking (desk booking systems, unassigned seating), Activity-based working (variety of space types—focus desks, collaboration areas, quiet rooms, social spaces). Planning considerations: Peak occupancy modeling (forecast maximum simultaneous attendance—avoid under-provision during busy periods), Technology enablement (Wi-Fi, power, AV throughout—support flexible working), Cultural acceptance (staff engagement, managerial support, change management).
              </p>
              <p className="text-muted-foreground font-light leading-relaxed">
                Flexible workspace benefits: Cost reduction (lower rent per head through optimized density), Adaptability (reconfigure easily for organizational changes), Employee choice (variety of work settings enhances satisfaction). Risks: Peak overcrowding (if modeling underestimates attendance), Cultural resistance (staff preference for assigned desks), Technology failures (inadequate Wi-Fi, booking system issues). Success requires data-driven planning, robust technology, and effective change management.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Office Reconfiguration & Moves Management
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium mb-2">Reconfiguration Project Delivery</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Office reconfiguration involves: Space planning (new layout design, furniture specification), Services coordination (power, data, lighting alterations—coordinate with landlord), Regulatory approvals (Building Control, fire risk assessments, CDM notifications), Furniture procurement (order, delivery, installation), IT coordination (relocate servers, reconnect workstations, test systems), Phased implementation (minimize disruption through out-of-hours works, weekend moves). Project management ensures coordination across trades, stakeholders, and timelines—delivering compliant, functional workspace within budget and programme.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Moves & Change Management</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Professional moves management: Pre-move (inventory assets, pack, label, decommission IT), Move-day (logistics coordination, furniture installation, IT reconnection), Post-move (unpack, snagging, adjustments, staff support). Communication is critical: Advance notifications (timelines, expectations, roles), Move-day support (helpdesk, queries, issue resolution), Post-move feedback (satisfaction surveys, identify improvements). Moves cause stress and disruption—professional management, clear communication, and responsive support minimize impact and ensure successful transitions.
                  </p>
                </div>
              </div>
            </section>

            <RelatedServices 
              services={[
                {
                  title: "Occupier Experience",
                  description: "Workplace satisfaction and user engagement strategies",
                  link: "/fm-operations/occupier-experience"
                },
                {
                  title: "Building Inspections",
                  description: "Space audits and utilization assessments",
                  link: "/services/building-inspections"
                },
                {
                  title: "Indoor Air Quality",
                  description: "Environmental comfort and wellbeing testing",
                  link: "/services/indoor-air-quality-testing"
                },
                {
                  title: "FM Strategy",
                  description: "Strategic workplace and estate consultancy",
                  link: "/fm-operations/fm-strategy"
                }
              ]}
            />

            <section className="mb-12">
              <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg">
                <h2 className="text-2xl font-light mb-4">Request Space Planning Consultation</h2>
                <p className="text-muted-foreground font-light leading-relaxed mb-6">
                  Our space planning service combines utilization analysis, regulatory compliance, and workplace design—delivering data-driven solutions that optimize occupancy costs, improve productivity, and enable organizational flexibility. Contact us to discuss your space planning requirements.
                </p>
                <Link 
                  to="/request-proposal" 
                  className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Request Space Planning
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

export default SpacePlanning;
