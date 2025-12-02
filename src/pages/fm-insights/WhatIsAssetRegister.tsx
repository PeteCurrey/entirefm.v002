import { ResourceArticleTemplate } from '@/components/resources/ResourceArticleTemplate';

export default function WhatIsAssetRegister() {
  return (
    <ResourceArticleTemplate
      title="What Is an Asset Register? | Building Asset Management Explained"
      metaDescription="An asset register catalogues every maintainable item across your estate—enabling compliance tracking, lifecycle planning, and informed maintenance decisions. Learn how to build one."
      keywords={[
        'asset register',
        'building asset register',
        'asset management',
        'facilities management',
        'maintenance register',
        'asset inventory',
        'equipment register',
        'asset tracking'
      ]}
      category="FM Operations"
      heroTitle="What Is an Asset Register?"
      heroDescription="An asset register is a comprehensive inventory of every maintainable item across your estate—capturing what you have, where it is, what condition it's in, and what maintenance it requires. It's the foundation of effective facilities management."
      publishDate="2025-01-24"
      readTime="8 min"
      introduction={[
        "An asset register is the single source of truth for everything in your building that requires maintenance, inspection, or eventual replacement. From boilers and chillers to fire panels and emergency lights, every asset is catalogued with its location, specification, condition, and maintenance history.",
        "Without an asset register, you're managing blind—unable to schedule maintenance accurately, forecast replacement costs, or demonstrate compliance. With one, you gain visibility, control, and the data foundation for strategic asset management.",
        "For estates with significant M&E infrastructure, multiple sites, or regulatory scrutiny, an asset register isn't administrative overhead—it's essential operational infrastructure."
      ]}
      keyDefinition={{
        term: "Asset Register",
        definition: "A structured database cataloguing all maintainable building assets, including their identification, location, specification, installation date, condition, maintenance history, and compliance requirements—enabling lifecycle management and informed decision-making."
      }}
      sections={[
        {
          title: "What an Asset Register Contains",
          content: [
            "A comprehensive asset register captures detailed information for every maintainable item:",
            "**Asset Identification**: Unique reference number, manufacturer, model, serial number, and asset tag (barcode/QR code for field identification).",
            "**Location**: Building, floor, room, or zone where the asset is installed. For large sites, GPS coordinates or CAD references may be included.",
            "**Specification**: Technical details including capacity, output, refrigerant type (for HVAC), certification requirements, and any regulatory classification.",
            "**Installation Data**: Installation date, installer, warranty expiry, commissioning certificates, and original cost.",
            "**Condition Assessment**: Current condition rating, last inspection date, defects identified, and remaining useful life estimate.",
            "**Maintenance Requirements**: Statutory obligations, recommended service intervals, competency requirements for engineers, and linked PPM tasks.",
            "**Documentation**: Linked O&M manuals, certificates, test records, photographs, and risk assessments.",
            "**Lifecycle Data**: Expected lifespan, replacement cost, and planned replacement date for capital planning."
          ]
        },
        {
          title: "Why It Matters",
          content: [
            "An accurate asset register delivers tangible benefits across operations, compliance, and finance:",
            "**Enables Accurate PPM Planning**: You can't maintain what you don't know exists. An asset register ensures every item is captured in your PPM schedule with correct frequencies and competency requirements.",
            "**Supports Compliance Demonstration**: Regulators and insurers expect you to know what assets you have and prove they're maintained. An asset register provides the evidence foundation.",
            "**Informs Lifecycle Planning**: By tracking age, condition, and expected lifespan, you can forecast replacement costs and budget capital expenditure—avoiding surprise failures.",
            "**Improves Reactive Response**: When something fails, engineers can immediately access specifications, history, and linked documentation—reducing diagnosis time and enabling first-time fixes.",
            "**Enables Benchmarking**: With consistent data across sites, you can compare asset performance, maintenance costs, and failure rates to identify improvement opportunities.",
            "**Protects Against Data Loss**: Staff turnover, contractor changes, and organisational restructures can lose institutional knowledge. An asset register preserves it."
          ]
        },
        {
          title: "Asset Categories",
          content: [
            "Asset registers typically organise assets by system or category:",
            "**Mechanical Systems**: Boilers, chillers, AHUs, FCUs, pumps, cooling towers, ventilation systems, ductwork, building management systems (BMS).",
            "**Electrical Systems**: Main switchgear, distribution boards, transformers, UPS systems, generators, lighting systems, power distribution.",
            "**Fire Safety Systems**: Fire alarm panels, detectors, call points, emergency lighting, fire extinguishers, sprinkler systems, dry risers, fire dampers, AOVs.",
            "**Water Systems**: Cold water tanks, hot water cylinders, calorifiers, pumps, TMVs, water treatment equipment, drainage systems.",
            "**Lifts & Access Equipment**: Passenger lifts, goods lifts, escalators, stair lifts, platform lifts, dock levellers.",
            "**Building Fabric**: Roofs, façades, windows, doors, structural elements, car parks, external areas.",
            "**Safety Equipment**: Fall arrest systems, eye wash stations, safety showers, first aid equipment, defibrillators.",
            "Each category has specific compliance requirements and maintenance frequencies that the register must capture."
          ]
        },
        {
          title: "Building an Asset Register",
          content: [
            "Creating an accurate asset register requires systematic data collection:",
            "**Site Survey**: Physical inspection of every space to identify and record all maintainable assets. This cannot be done from drawings alone—buildings evolve and modifications aren't always documented.",
            "**Documentation Review**: Cross-reference findings against O&M manuals, as-built drawings, and existing maintenance records to capture specifications and installation data.",
            "**Condition Assessment**: Evaluate current condition of each asset and estimate remaining useful life. This informs both maintenance priorities and capital planning.",
            "**Tagging**: Apply unique identifiers (asset tags, QR codes, or NFC tags) to physical assets for field identification and mobile data capture.",
            "**Data Validation**: Verify accuracy with site teams, compare against utility records, and reconcile with financial asset registers.",
            "**Digital Capture**: Enter data into a CAFM system or asset management platform that supports ongoing updates, maintenance logging, and reporting.",
            "For large estates, asset register creation is a significant project—but the investment pays back through improved maintenance efficiency and compliance confidence."
          ]
        },
        {
          title: "How EntireFM Manages Asset Registers",
          content: [
            "EntireFM builds and maintains asset registers as a core deliverable for all managed estates:",
            "**Verified Data**: We don't inherit assumptions. Every asset is physically surveyed, photographed, and verified—no missing items, no ghost assets.",
            "**Integrated with PPM**: Asset data feeds directly into maintenance scheduling. When an asset is added, its PPM tasks are automatically created with correct frequencies and competency requirements.",
            "**Mobile-Enabled**: Engineers access asset data in the field via mobile devices. They can view history, log work, and update condition assessments in real time.",
            "**Living Documentation**: Certificates, test records, and photographs are attached directly to assets. When a regulator asks for evidence, it's one click away.",
            "**Lifecycle Intelligence**: Condition scores and age data feed into replacement forecasting. Clients see what's due for replacement over 1, 3, 5, and 10-year horizons.",
            "**Change Management**: When assets are replaced, upgraded, or decommissioned, records are updated immediately—maintaining register accuracy.",
            "The result: a single source of truth that evolves with your estate and underpins every maintenance decision."
          ]
        }
      ]}
      complianceFramework={{
        laws: [
          "Health and Safety at Work Act 1974",
          "Regulatory Reform (Fire Safety) Order 2005",
          "Electricity at Work Regulations 1989",
          "Provision and Use of Work Equipment Regulations 1998",
          "LOLER (Lifting Operations and Lifting Equipment Regulations) 1998"
        ],
        standards: [
          "ISO 55000 (Asset Management)",
          "BS EN 13306 (Maintenance Terminology)",
          "BS EN 15221 (Facility Management)",
          "PAS 55 (Asset Management Specification)",
          "SFG20 (Standard Maintenance Specification)"
        ],
        responsiblePerson: "Building owner, landlord, or appointed Duty Holder responsible for ensuring all building assets are identified, maintained, and compliant with statutory requirements.",
        frequency: "Asset registers should be updated continuously as assets are added, removed, or modified, with formal review at least annually to verify accuracy."
      }}
      operationalImpact={[
        "Ensures no asset is missed from maintenance schedules",
        "Provides instant access to specifications and history for reactive repairs",
        "Enables accurate capital planning and replacement forecasting",
        "Supports compliance demonstration with complete asset documentation",
        "Improves engineer efficiency through mobile access to asset data"
      ]}
      risksIfIgnored={[
        "Assets missed from maintenance schedules leading to compliance breaches",
        "Unknown assets failing without warning, causing operational disruption",
        "Inability to demonstrate compliance to regulators or insurers",
        "Unplanned capital expenditure when assets fail prematurely",
        "Inefficient reactive repairs due to missing specifications and history",
        "Data loss when staff or contractors change"
      ]}
      howEntireFMHelps={{
        title: "Get Your Asset Register Built",
        points: [
          "Full physical survey of every maintainable asset across your estate",
          "Verified data capture including specifications, installation dates, and condition assessments",
          "Asset tagging with QR codes for mobile field identification",
          "Integration with PPM scheduling—maintenance tasks created automatically",
          "Lifecycle forecasting with 1, 3, 5, and 10-year replacement horizons",
          "Living documentation—certificates and records attached to assets in real time"
        ]
      }}
      relatedLinks={[
        { title: "What Is a PPM Planner?", url: "/fm-insights/what-is-a-ppm-planner", type: "operation" },
        { title: "What Is a Compliance Calendar?", url: "/fm-insights/what-is-a-compliance-calendar", type: "operation" },
        { title: "Asset Lifecycle Planning", url: "/fm-operations/asset-lifecycle", type: "operation" },
        { title: "PPM & Asset Lifecycle Governance", url: "/services/ppm", type: "service" },
        { title: "Hard Services FM", url: "/services/hard-services-fm", type: "service" },
        { title: "Building Inspections", url: "/services/building-inspections", type: "service" },
        { title: "What Is Statutory Maintenance?", url: "/fm-insights/what-is-statutory-maintenance", type: "operation" }
      ]}
      faqs={[
        {
          question: "What's the difference between an asset register and an asset inventory?",
          answer: "An inventory simply lists what you have. An asset register goes further—capturing specifications, condition, maintenance requirements, lifecycle data, and linked documentation. It's operational infrastructure, not just a list."
        },
        {
          question: "How often should an asset register be updated?",
          answer: "Continuously. Every time an asset is installed, replaced, modified, or decommissioned, the register should be updated. Formal accuracy reviews should occur at least annually, with physical verification of a sample of assets."
        },
        {
          question: "Can I use a spreadsheet as an asset register?",
          answer: "For very small estates, possibly. But spreadsheets don't support document attachment, mobile access, automated PPM linkage, or multi-user collaboration effectively. For anything beyond a single small building, a digital asset management platform is strongly recommended."
        },
        {
          question: "How long does it take to build an asset register?",
          answer: "It depends on estate size and complexity. A single office building might take 1-2 days for survey and data entry. A multi-site portfolio with significant M&E infrastructure could take weeks. The investment pays back through improved maintenance efficiency."
        },
        {
          question: "Should I include furniture and IT equipment?",
          answer: "It depends on your management scope. Traditional FM asset registers focus on M&E and building fabric. Furniture and IT are often managed separately by corporate services or IT teams. Define scope clearly at the outset."
        }
      ]}
    />
  );
}
