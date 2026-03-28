import React from "react";
import { ShieldCheck, ClipboardCheck, Flame, Zap, Droplets, Calendar, FileText, Activity, Layers, GitMerge, TrendingUp, Lightbulb, Search, BookOpen, Download, User, ShieldAlert } from "lucide-react";

export interface ToolLink {
  icon: string; // Icon name as string for serializability
  title: string;
  description: string;
  href: string;
}

export interface ResourceArticle {
  slug: string;
  category: string;
  title: string;
  badge: "Insight" | "Guide" | "Manual" | "Checklist" | "Article" | "Reference";
  description: string;
  readTime: string;
  date: string;
  author: string;
  content: string;
  icon: string; // Lucide icon name
  quickFacts: string[];
  relatedTools: ToolLink[];
  targetKeywords?: string[];
  faq?: {
    question: string;
    answer: string;
  }[];
}

export const resources: ResourceArticle[] = [
  {
    slug: "what-is-total-facilities-management",
    title: "What Is Total Facilities Management (TFM)?",
    badge: "Insight",
    date: "28 January 2025",
    readTime: "6 min",
    description: "Complete FM outsourcing under single-point accountability — integrating all services under unified governance.",
    icon: "layers",
    category: "FM Fundamentals",
    author: "EntireFM Editorial Team",
    quickFacts: [
      "Single provider: All hard and soft FM",
      "Benefit: One invoice, one accountability",
      "Best for: Multi-site estates",
      "Contract length: Typically 3-5 years"
    ],
    relatedTools: [
      { icon: "Calculator", title: "ROI Calculator", description: "Calculate total FM cost of ownership", href: "/tools/fm-roi-calculator" },
      { icon: "Calendar", title: "PPM Schedule Builder", description: "Build an SFG20 aligned schedule", href: "/tools/ppm-schedule-builder" },
      { icon: "ShieldCheck", title: "FM Health Check", description: "Audit your building compliance in 2 mins", href: "/tools/fm-health-check" }
    ],
    content: `
## The Definition of Total Facilities Management

Total Facilities Management (TFM) represents the apex of strategic outsourcing in the built environment. It is a consolidated service delivery model where every single facilities management requirement—from high-voltage electrical maintenance to daily office cleaning—is outsourced to a single specialized provider like EntireFM.

> [!LEGISLATION] Regulatory Reform (Fire Safety) Order 2005 | TFM providers take on the role of 'competent person' to ensure the Responsible Person meets all statutory obligations across the entire asset portfolio.

> [!STAT] 22% | Average cost reduction
> 100% | Single-point accountability
> 24/7 | Helpdesk response time

Unlike the traditional 'multi-vendor' or 'siloed' approach where separate companies handle different aspects of a building's operation, TFM places 100% of the operational responsibility under one governance structure. It is not merely a bundling of services for a discount; it is a fundamental shift toward single-point accountability.

## What TFM Covers: The Full Spectrum

A TFM contract typically integrates both Hard FM (technical and building fabric) and Soft FM (people and support services). For a corporate estate, this often includes:

### Hard FM (Technical)
*   HVAC and mechanical plant maintenance
*   Electrical compliance (EICR and PAT)
*   Fire safety systems and fire risk assessments
*   Water hygiene and Legionella control
*   Vertical transportation (Lifts and escalators)

### Soft FM (Support)
*   Commercial cleaning and specialized floor care
*   Security and manned guarding
*   Waste management and recycling
*   Grounds maintenance and gritting
*   Pest control

## TFM vs Managed FM vs Single-Service Contracts

Understanding the distinction is critical for estate directors. In a **Single-Service Contract**, you manage the vendor yourself. In **Managed FM**, you pay a fee to a consultant to manage multiple vendors on your behalf. In **TFM**, the provider *is* the vendor for everything, self-delivering as much as possible to maintain quality and control.

| Feature | TFM | Multi-Supplier | In-House FM |
|---------|-----|----------------|-------------|
| Accountability | Single Point | Fragmented | Internal Team |
| Cost Efficiency | Very High | Medium | Variable |
| Consistency | Total | Variable | High |
| Compliance Risk | Transferred to Provider | High (Manager's duty) | High |
| Reporting | Unified Dashboard | Multiple Reports | Manual |

## The Single-Supplier Advantage

The primary driver for TFM is the reduction of 'management friction'. When EntireFM operates a TFM model, we eliminate the 'contractor blame game'. If a leak in an AHU causes damage to a carpet, there is no debate between the mechanical contractor and the cleaning firm. We own the problem, and we own the solution.

Operational benefits include:
1.  **Unified Reporting**: Monthly performance data across all service lines delivered in a single, high-level KPI dashboard.
2.  **Economies of Scale**: Consolidation of management fees and overheads leads to an average cost reduction of 22% compared to multi-vendor models.
3.  **Cultural Alignment**: A single team that understands the brand and culture of your business, providing a seamless 'white glove' experience for your staff and visitors.

## When TFM Is — and Isn't — the Right Model

TFM is generally most effective for multi-site estates, large corporate headquarters, and industrial facilities where the complex interaction of services requires high-level coordination. It is particularly valuable for businesses where compliance failure poses a Tier 1 risk to operational continuity.

However, if your building is small, single-use, or has highly unique specialist requirements that cannot be met by a generalist provider, a bundled (IFM) model might be more appropriate.

## EntireFM's Approach to TFM

At EntireFM, we have been refining our TFM delivery since 2009. We believe in transparency above all else. Our clients gain 24/7 access to our digital portals, providing real-time visibility into every statutory certificate and reactive job across their entire estate. We don't just manage your buildings; we provide the operational governance that allows you to focus on your core business.
    `
  },
  {
    slug: "what-is-integrated-facilities-management",
    title: "What Is Integrated Facilities Management (IFM)?",
    badge: "Insight",
    date: "28 January 2025",
    readTime: "5 min",
    description: "Bundled service delivery combining selected FM services under unified management for coordinated operations.",
    icon: "git-merge",
    category: "FM Fundamentals",
    author: "EntireFM Editorial Team",
    quickFacts: [
      "IFM: Selected services, one provider",
      "TFM: All services, one provider",
      "Benefit: Coordinated service delivery",
      "vs TFM: More flexible scope"
    ],
    relatedTools: [
      { icon: "ClipboardCheck", title: "FM Health Check", description: "Audit your building compliance in 2 mins", href: "/tools/fm-health-check" },
      { icon: "Calculator", title: "ROI Calculator", description: "Calculate total FM cost of ownership", href: "/tools/fm-roi-calculator" }
    ],
    content: `
## IFM — A Definition

Integrated Facilities Management (IFM) is a strategic method of managing and delivering multiple facilities management services through a single provider. While it shares many characteristics with Total Facilities Management (TFM), IFM is often characterized by its flexibility and focus on service 'bundles' rather than taking over 100% of the building's operations.

In an IFM model, EntireFM might combine HVAC, Fire Safety, and Electrical testing into a 'Hard FM' bundle, or provide a 'Soft FM' bundle consisting of cleaning, security, and waste management.

## IFM vs TFM: What's the Difference?

The terminology is often used interchangeably, but there is a distinct operational difference. 

> [!INFO] IFM vs TFM in Plain English | IFM bundles the services you choose under one provider. TFM bundles everything. IFM is the more flexible model — TFM is the most comprehensive.

IFM is the ideal starting point for businesses that have some in-house capabilities or historical specialist contracts they wish to maintain, but want to reduce the noise of managing dozens of individual smaller vendors.

## What Services Get Bundled in IFM?

The most common IFM bundles we deploy focus on 'Compliance Clusters'. For example:
*   **The Technical Bundle**: HVAC, Gas Safety, Fixed Wire Testing, and Fire Alarms.
*   **The Hygiene Bundle**: Daily cleaning, window cleaning, washroom services, and water hygiene.
*   **The Security Bundle**: Manned guarding, mobile patrols, and CCTV maintenance.

By integrating these services, we can utilize 'multi-skilled' site supervisors who can oversee multiple service lines, reducing the management fee that would otherwise be duplicated across separate contracts.

## The Coordination Benefit — Why It Matters

True IFM means single management, single reporting, and genuine service coordination. It is not just a reseller model where one invoice aggregates multiple invoices. 

When services are integrated, we achieve proactive synchronization. For example, our grounds maintenance team can coordinate with our window cleaners to ensure mowing happens *after* the windows have been cleaned, preventing grass and debris from ruining the finish. This 'common sense' coordination is what gets lost in fragmented models.

## Is IFM Right for Your Estate?

If you find that your internal management team is spending more than 25% of their time chasing various contractors for paperwork, entry times, or KPIs, you are an ideal candidate for IFM. 

An IFM model with EntireFM provides the baseline of compliance and quality you need, while retaining the flexibility to add or remove services as your business evolves.

## Common IFM Misconceptions

> [!WARNING]
> **Don't Confuse IFM with a Bundle Discount**
> Some providers rebrand multi-contract arrangements as IFM. True IFM means single management, single reporting, and genuine service coordination — not just one invoice from a reseller.

At EntireFM, we ensure that IFM delivery is backed by a unified helpdesk. Every job, whether it's a broken light or a missed cleaning slot, is logged in the same system, allowing for cross-service analysis and smarter budgeting.
    `
  },
  {
    slug: "hard-fm-vs-soft-fm-vs-specialist-engineering",
    title: "Hard FM vs Soft FM vs Specialist Engineering",
    badge: "Insight",
    date: "26 January 2025",
    readTime: "7 min",
    description: "Understanding the differences between FM service categories and why estates need a combined model.",
    icon: "layers",
    category: "FM Fundamentals",
    author: "EntireFM Editorial Team",
    quickFacts: [
      "Hard FM: Building fabric & M&E systems",
      "Soft FM: People-facing services",
      "Specialist: Beyond standard FM scope",
      "Best practice: All three, one provider"
    ],
    relatedTools: [
      { icon: "ShieldCheck", title: "Compliance Checker", description: "Evaluate your building safety", href: "/tools/compliance-checker" },
      { icon: "Calendar", title: "Compliance Calendar", description: "Track statutory dates", href: "/resources/compliance-calendar" }
    ],
    content: `
## The Three Pillars of Facilities Management

To manage a modern commercial estate effectively, you must understand the categorization of services. At EntireFM, we break this down into three core pillars: Hard FM, Soft FM, and Specialist Engineering. 

While they serve different functions, they must work in unison to protect the building, its occupants, and the business's bottom line.

## What Is Hard FM?

Hard FM relates to the physical structure and 'fixed' assets of a building. These are the systems that, if they fail, can make the building uninhabitable or legally non-compliant. Hard FM services are often statutory and governed by strict UK legislation.

Examples include:
*   HVAC and gas safety
*   Electrical installation and testing (EICR)
*   Fire safety systems (alarms, sprinklers, extinguishers)
*   Plumbing and water hygiene (Legionella control)
*   Building fabric maintenance (roofing, gutters, glazing)

## What Is Soft FM?

Soft FM services are those that make the building comfortable, efficient, and safe for the people using it. While less frequently 'statutory' (though often still essential for health and safety), they have a massive impact on the brand perception and employee productivity.

Examples include:
*   Daily office cleaning and periodic deep cleaning
*   Manned security and access control
*   Grounds maintenance and landscaping
*   Pest control and hygiene services
*   Waste management

## What Is Specialist Engineering?

Specialist Engineering covers the highly technical services that go beyond the standard FM scope. These require specific certifications, advanced technology, or high-risk protocols.

Examples include:
*   Drone building inspections and aerial surveys
*   High-voltage electrical maintenance
*   BMS (Building Management System) optimization
*   Lift and vertical transportation engineering
*   Standby generator and UPS load bank testing

## Why the Distinction Matters

Understanding these categories allows estate managers to allocate budget correctly. Hard FM is often a 'non-negotiable' line item due to legal compliance. Soft FM is frequently seen as discretionary but is the primary driver of building user satisfaction. Specialist Engineering is the proactive 'insurance policy' that prevents catastrophic system failures.

## Service Comparison Table

| Service | Category | Statutory? |
|---------|----------|------------|
| Fire alarm service | Hard FM | Yes |
| Commercial cleaning | Soft FM | No |
| HVAC maintenance | Hard FM | Recommended |
| Manned security | Soft FM | No |
| EICR fixed wire test | Hard FM | Yes |
| Grounds maintenance | Soft FM | No |
| Drone inspection | Specialist | No |
| Legionella monitoring | Hard FM | Yes |
| Window cleaning | Soft FM | No |
| Generator testing | Specialist | Recommended |

## The Case for a Combined Model

The most common failure in FM is the 'silo' approach, where Hard and Soft FM never communicate. At EntireFM, we advocate for a combined model. When our security team (Soft FM) notices a leak in an AHU while performing a perimeter patrol, they instantly log it via our helpdesk for our M&E team (Hard FM) to action.

This cross-service communication reduces response times, prevents secondary damage, and ensures that your building is managed as a single, holistic asset.
    `
  },
  {
    slug: "what-is-a-ppm-planner",
    title: "What Is a PPM Planner?",
    badge: "Guide",
    date: "20 January 2025",
    readTime: "6 min",
    description: "How PPM planners underpin maintenance strategy, compliance tracking, and lifecycle cost control.",
    icon: "calendar",
    category: "PPM & Maintenance",
    author: "EntireFM Editorial Team",
    quickFacts: [
      "PPM: Planned Preventative Maintenance",
      "Standard: SFG20 / BS series",
      "Benefit: 12-34% reactive cost reduction",
      "Format: Asset register + frequency schedule"
    ],
    relatedTools: [
      { icon: "Calendar", title: "PPM Schedule Builder", description: "Build an SFG20 aligned schedule", href: "/tools/ppm-schedule-builder" },
      { icon: "CalendarDays", title: "Compliance Calendar", description: "Track your statutory deadlines", href: "/resources/compliance-calendar" },
      { icon: "ShieldCheck", title: "FM Health Check Quiz", description: "Assess your building strategy", href: "/tools/fm-health-check" }
    ],
    content: `
## What Is a PPM Planner?

A Planned Preventative Maintenance (PPM) Planner is the DNA of your building management strategy. It is a comprehensive schedule of all maintenance tasks that must be performed over a 12-month (or multi-year) cycle to keep a facility compliant, efficient, and operationally sound.

Without a PPM planner, maintenance becomes 'reactive'—running to fail and creating unpredictable costs. With a planner, EntireFM provides you with a clear roadmap of exactly what will happen in your building, and when.

## The Four Elements of a PPM Planner

A professional PPM planner consists of four critical components:
1.  **The Asset Register**: A complete list of every maintainable item in the building.
2.  **The Service Frequency**: How often each task is performed (Monthly, Quarterly, Annually).
3.  **The Compliance Marker**: Identifying which tasks are statutory (legally required).
4.  **The Task List (SFG20)**: The specific technical steps an engineer must take during the visit.

## PPM Planner vs Reactive Maintenance Schedule

Reactive maintenance is like fixing a flat tyre after you've pulled over. PPM is like checking the tyre pressure every week to prevent the puncture. The data is clear: implementing a PPM planner typically reduces reactive spend by **12-34%** and significantly extends the life of building assets.

## Build Your First PPM Planner: A 5-Step Process

### Step 1: Build the Asset Register
Catalogue every building system — HVAC, fire safety, electrical, water, lifts, and building fabric. You cannot maintain what you haven't identified.

### Step 2: Assign SFG20 Frequencies
Map each asset type to the correct maintenance frequency using SFG20 as the industry-recognized baseline.

### Step 3: Build the Schedule
Populate a 12-month calendar with every scheduled visit and task, ensuring they are logically sequenced.

### Step 4: Resource and Deploy
Assign qualified engineers, book specialist contractors, and set automated reminders for each activity.

### Step 5: Record and Report
Document every completed visit with certificates, photos, and engineer sign-off to prove compliance during audits.

> [!PROCESS] Step 1: Build the Asset Register | Catalogue every building system — HVAC, fire safety, electrical, water, lifts.
> Step 2: Assign SFG20 Frequencies | Map each asset type to the correct maintenance frequency.
> Step 3: Build the Schedule | Populate a 12-month calendar with every scheduled visit.
> Step 4: Resource and Deploy | Assign qualified engineers and set automated reminders.

## SFG20 — The Standard Behind Every Good PPM Plan

At EntireFM, our PPM planners are built on the **SFG20 standard**. This is the UK's gold standard for building maintenance. It removes the guesswork, ensuring that you aren't over-maintaining (wasting money) or under-maintaining (creating risk).

## How EntireFM Manages PPM Across Your Estate

We utilize a 24/7 helpdesk and a digital compliance portal to manage your PPM planner. Every time an EntireFM engineer completes a task, the certificate is instantly uploaded to your portal, providing an 'always-on' compliance status for your entire portfolio.
    `
  },
  {
    slug: "what-is-a-compliance-calendar",
    title: "What Is a Compliance Calendar?",
    badge: "Guide",
    date: "22 January 2025",
    readTime: "5 min",
    description: "Track statutory maintenance deadlines and ensure nothing falls through the cracks.",
    icon: "calendar",
    category: "Compliance",
    author: "EntireFM Editorial Team",
    quickFacts: [
      "Tracks: All statutory maintenance dates",
      "Frequency range: Monthly to 2-yearly",
      "Format: 12-month visual schedule",
      "Essential for: Every commercial building"
    ],
    relatedTools: [
      { icon: "Calendar", title: "Compliance Calendar Tool", description: "Generate your custom schedule", href: "/tools/compliance-calendar" }
    ],
    content: `
## What Is a Compliance Calendar?

A Compliance Calendar is a visual, chronological roadmap of every statutory maintenance activity required by law in a commercial building. While a PPM Planner details *how* to maintain a building, the Compliance Calendar focuses strictly on the *when* and the *legal obligation*.

It is the single most important tool for any 'Responsible Person' who needs to prove to fire inspectors, insurance auditors, or health and safety officers that the building is legally safe.

## Why Every Building Manager Needs One

In the UK, building compliance is not a static state; it is a moving target. With different tasks expiring monthly, quarterly, and annually, it is impossible to manage without a visual tracker.

> [!WARNING]
> **A Compliance Calendar Is Not Optional**
> Without a compliance calendar, statutory maintenance gets missed. When it gets missed, it gets missed silently — until an inspection, an incident, or an insurance claim reveals it. A calendar is the minimum viable compliance tool.

## What a Compliance Calendar Tracks

A standard Whole-Life Compliance Calendar from EntireFM tracks:
*   **Monthly**: Emergency lighting flick tests, water temperature checks.
*   **Quarterly**: Fire alarm servicing, HVAC major services.
*   **Six-Monthly**: Lift inspections (LOLER), fire door checks.
*   **Annual**: Fire Risk Assessment reviews, gas safety (CP12), annual boiler service, fire extinguisher service.
*   **5-Yearly**: Fixed Wire Testing (EICR).

## The Most Common Compliance Calendar Mistakes

The biggest mistake is 'set and forget'. A calendar built in 2020 is likely dangerously out of date for 2025 legislation. At EntireFM, we provide dynamic calendars that update as the law evolves, ensuring your team is always working to the latest standards.

## Build Your Free Compliance Calendar

We believe that every building should be safe. That's why EntireFM offers a free interactive Compliance Calendar tool. Simply input your building type and key assets, and we will generate a statutory baseline for your 2025 maintenance programme.
    `
  },
  {
    slug: "what-is-an-asset-register",
    title: "What Is an Asset Register?",
    badge: "Guide",
    date: "24 January 2025",
    readTime: "5 min",
    description: "The foundation of effective facilities management — cataloguing every maintainable item.",
    icon: "file-text",
    category: "PPM & Maintenance",
    author: "EntireFM Editorial Team",
    quickFacts: [
      "Asset register: Complete inventory of maintainable items",
      "Used for: PPM planning, compliance, insurance",
      "Format: Spreadsheet or CAFM system",
      "Starting point: Every FM programme"
    ],
    relatedTools: [
      { icon: "ShieldCheck", title: "FM Health Check", description: "Assess your asset status", href: "/tools/fm-health-check" }
    ],
    content: `
## What Is an Asset Register?

An Asset Register is a definitive, categorized list of every maintainable item within a building's environment. It is the absolute foundation of facilities management. You cannot maintain, repair, or insure what you haven't catalogued.

Whether it is a single air conditioning unit or a complex high-voltage transformer, if it requires servicing to function or has a legal compliance requirement, it must live in your asset register.

## Why an Asset Register Is the Foundation of FM

A robust asset register from EntireFM does more than just list equipment; it provides the data for:
1.  **PPM Planning**: Telling us exactly what needs to be serviced.
2.  **Budgeting**: Allowing for accurate 'Life-Cycle' planning (when will an asset need replacement?).
3.  **Equity Valuation**: Proving the value and maintenance health of a building during a sale or lease.
4.  **Compliance Audit**: Quickly demonstrating that all statutory items are accounted for.

## What Goes in an Asset Register?

| Field | Description | Example |
|-------|-------------|---------|
| Asset ID | Unique tracking number | EFM-AC-001 |
| Category | Main system type | HVAC |
| Name | Common name | Split Unit AC |
| Make/Model | Manufacturer data | Daikin / RXZ |
| Location | Where to find it | Room 204, Floor 2 |
| Install Date | For age tracking | 12/03/2021 |
| Criticality | Impact of failure | High |
| Statutory? | Legal requirement | Yes |

## Asset Criticality Rating — Why It Matters

Not all assets are created equal. At EntireFM, we assign a criticality rating (Critical, High, Medium, Low) to every item. A 'Critical' asset is one that, if it fails, immediately closes the building (e.g., the main fire alarm panel). A 'Low' criticality asset might be a single office door handle. This rating allows us to prioritize maintenance spend where it matters most.

## How to Build an Asset Register From Scratch

EntireFM specializes in building 'Master Asset Registers'. We follow a rigorous 6-step process:
1.  **Walk the building**: Physical inspection of every floor, roof, and plant room.
2.  **Catalogue**: Record name, location, make/model, and serial number.
3.  **Classify**: Group assets by system (HVAC, fire, etc.).
4.  **Rate Criticality**: Define the operational impact of failure.
5.  **Flag Statutory**: Identify items with legal maintenance requirements.
6.  **Map to SFG20**: Set the maintenance frequencies for the PPM planner.

## Keeping Your Asset Register Current

An asset register is a living document. Whenever a new piece of equipment is installed or a unit is decommissioned, the register must be updated. EntireFM manages this automatically through our CAFM systems, ensuring your data is always accurate and audit-ready.
    `
  },
  {
    slug: "fire-risk-assessment-guide",
    title: "Fire Risk Assessment Guide",
    badge: "Guide",
    date: "15 January 2025",
    readTime: "8 min",
    description: "Comprehensive guide to conducting fire risk assessments for UK commercial properties.",
    icon: "shield",
    category: "Compliance",
    author: "EntireFM Compliance Team",
    quickFacts: [
      "Legislation: Regulatory Reform (Fire Safety) Order 2005",
      "Required: Every commercial building",
      "Responsible: The 'Responsible Person'",
      "Update: Annually or after building changes"
    ],
    relatedTools: [
      { icon: "ShieldAlert", title: "Compliance Checker", description: "Audit your fire risks", href: "/tools/compliance-checker" }
    ],
    content: "REDIRECT:/resources/fire-risk-guide"
  },
  {
    slug: "electrical-eicr-survival-manual",
    title: "Electrical EICR Survival Manual",
    badge: "Manual",
    date: "10 January 2025",
    readTime: "7 min",
    description: "Everything property managers need to know about EICR and BS 7671 compliance.",
    icon: "zap",
    category: "Compliance",
    author: "EntireFM Technical Division",
    quickFacts: [
      "Interval: Usually 5 years",
      "Standard: BS 7671",
      "Codes: C1, C2, C3, FI",
      "Requirement: Electricity at Work Regs 1989"
    ],
    relatedTools: [
      { icon: "Zap", title: "Fixed Wire Testing", description: "Book your EICR inspection", href: "/services/electrical-compliance" }
    ],
    content: "REDIRECT:/resources/eicr-manual"
  },
  {
    slug: "emergency-lighting-testing",
    title: "Emergency Lighting Testing",
    badge: "Checklist",
    date: "5 January 2025",
    readTime: "4 min",
    description: "Complete checklist for conducting 3-hour emergency lighting tests to BS 5266.",
    icon: "lightbulb",
    category: "Compliance",
    author: "EntireFM Technical Division",
    quickFacts: [
      "Monthly: Functional 'flick' test",
      "Annual: 3-hour duration test",
      "Standard: BS 5266",
      "Logbook: Must be maintained"
    ],
    relatedTools: [
      { icon: "ShieldCheck", title: "FM Health Check", description: "Audit your safety systems", href: "/tools/fm-health-check" }
    ],
    content: "REDIRECT:/resources/emergency-lighting-checklist"
  },
  {
    slug: "ppm-vs-reactive-maintenance",
    title: "PPM vs Reactive Maintenance",
    badge: "Article",
    date: "20 December 2024",
    readTime: "6 min",
    description: "Data-driven analysis of preventative vs reactive maintenance costs across 100+ UK sites.",
    icon: "trending-up",
    category: "PPM & Maintenance",
    author: "EntireFM Editorial Team",
    quickFacts: [
      "Reactive cost premium: 40-60% above PPM",
      "PPM saves: 12-34% on maintenance budget",
      "Hidden cost: Downtime + compliance risk",
      "Sample: 100+ UK commercial sites"
    ],
    relatedTools: [
      { icon: "Calculator", title: "ROI Calculator", description: "Calculate your FM savings", href: "/tools/fm-roi-calculator" },
      { icon: "Calendar", title: "PPM Cost Estimator", description: "Instant PPM pricing", href: "/tools/ppm-estimator" },
      { icon: "Calendar", title: "PPM Schedule Builder", description: "Plan your proactive care", href: "/tools/ppm-schedule-builder" }
    ],
    content: `
## The Question Every FM Manager Faces

In the world of facilities management, the fundamental question is: "Do we maintain it now, or fix it when it breaks?" While reactive maintenance seems simple, EntireFM's data from over 100 UK commercial sites proves that it is the most expensive way to run an estate.

## What Reactive Maintenance Actually Costs (It's Not Just the Callout)

The 'visible' cost of reactive maintenance is the emergency callout fee. However, the true cost is much higher. When an HVAC system fails in a data center or a retail unit's fire alarm system develops a fault at 3 PM on a Saturday, the costs include:
1.  **Premium Labor Rates**: Emergency after-hours callouts are significantly more expensive.
2.  **Operational Downtime**: Lost productivity or lost trade while waiting for a repair.
3.  **Collateral Damage**: A leaking HVAC unit doesn't just need a repair; it often damages ceilings, carpets, and electrical equipment.
4.  **Shortened Asset Life**: Equipment that isn't maintained works harder, burns more energy, and ultimately fails years earlier than its rated lifespan.

## What PPM Costs vs What It Saves

Planned Preventative Maintenance (PPM) is a fixed, predictable cost. By performing routine tasks—filter changes, belt inspections, sensor calibration—we prevent the catastrophic failures that drive reactive spend.

Our analysis across 100+ UK commercial sites shows that a robust PPM strategy delivers:
*   **40-60%** reduction in emergency callout premiums.
*   **12-34%** total maintenance budget savings.
*   **10-15%** reduction in energy consumption due to optimized equipment performance.

## The Data: 100+ UK Sites Compared

| Cost Factor | Reactive Only | PPM Model |
|-------------|---------------|-----------|
| Routine Maintenance | High, variable | Lower, predictable |
| Emergency Callout Premium | £200-800/visit | Minimal |
| Asset replacement cost | Earlier, unplanned | Extended, scheduled |
| Compliance fine risk | High | Very low |
| Management time cost | High | Low |

## When Reactive Is Acceptable — and When It Isn't

Reactive maintenance is acceptable for non-critical, redundant assets (e.g., a single broken office chair or a non-statutory light fitting in a back corridor). However, for any asset related to **Statutory Compliance**, **Life Safety**, or **Business Continuity**, a reactive-only model is a high-risk strategy.

> [!WARNING]
> **Reactive-Only FM Is a False Economy**
> The callout cost is visible. The downtime cost, the compliance exposure, the shortened asset life, and the management overhead are not — until they compound into something that cannot be ignored.

## The Hybrid Model: PPM as the Base, Reactive as the Safety Net

At EntireFM, we implement a hybrid model. We use the PPM schedule to ensure 100% compliance and system health, while our 24/7 helpdesk provides a rapid reactive safety net for the unpredictable issues that occur on any site. This creates a predictable budget and an operationally stable environment.
    `
  },
  {
    slug: "legionella-governance-guide",
    title: "Legionella Governance Guide",
    badge: "Guide",
    date: "15 December 2024",
    readTime: "7 min",
    description: "Complete guide to legionella control and ACOP L8 compliance requirements.",
    icon: "shield",
    category: "Compliance",
    author: "EntireFM Compliance Team",
    quickFacts: [
      "Legislation: L8 Approved Code of Practice",
      "Update: Risk assessment every 2 years",
      "Hot water: Store above 60°C",
      "Cold water: Below 20°C"
    ],
    relatedTools: [
      { icon: "Droplet", title: "Water Hygiene Service", description: "L8 ACoP compliance care", href: "/services/water-hygiene" }
    ],
    content: "REDIRECT:/resources/legionella-guide"
  },
  {
    slug: "compliance-calendar-2025",
    title: "Compliance Calendar 2025",
    badge: "Reference",
    date: "1 December 2024",
    readTime: "5 min",
    description: "Complete calendar of mandatory inspections and certification requirements.",
    icon: "calendar",
    category: "Compliance",
    author: "EntireFM Editorial Team",
    quickFacts: [
      "Updated: For 2025 legislation",
      "Includes: All statutory dates",
      "Format: Month-by-month guide",
      "Coverage: Nationwide UK"
    ],
    relatedTools: [
      { icon: "Calendar", title: "Compliance Calendar Tool", description: "Download your 2025 version", href: "/tools/compliance-calendar" }
    ],
    content: `
## 2025 Statutory Reference

This reference calendar sets out every statutory and recommended maintenance activity required in a typical UK commercial building across 2025. Use it alongside our interactive Compliance Calendar tool to generate a personalized version for your specific building.

> [!TIP]
> **Generate a personalised version** → [Compliance Calendar Tool](/tools/compliance-calendar)

## January 2025 — Launch Phase
*   **Annual Duration Test**: Full 3-hour emergency lighting testing (BS 5266).
*   **Boiler Major Service**: Ensure combustion safety and efficiency before winter peak ends.
*   **Fire Extinguisher Annual Service**: Inspection of every unit for weight and pressure.
*   **Monthly Checks**: Fire alarm, emergency light flick, Legionella temperatures.

## April 2025 — Spring Compliance
*   **Fire Alarm Quarterly Service**: Functional test of every zone.
*   **Air Conditioning Pre-Summer Service**: Check refrigerants and AHU Hygiene.
*   **Showerhead Descaling**: Quarterly legionella prevention.
*   **Monthly Checks**: Statutory logbook updates.

## July 2025 — Lifecycle Review
*   **LOLER Passenger Lift Examination**: 6-monthly independent inspection.
*   **Dry Riser Pressure Test**: 6-monthly visual inspection (with annual pressure test if due).
*   **Fire Alarm Quarterly Service**: Second major service visit.
*   **Monthly Checks**: Temperature and alarm logging.

## October 2025 — Winter Preparation
*   **Gutter Clearance**: Post leaf-fall debris removal for flood prevention.
*   **Boiler Pre-Winter Check**: Functional review of internal controls.
*   **Fixed Wire Testing (EICR)**: Review if 5-year cycle is expiring.
*   **Monthly Checks**: Statutory maintenance documentation.

> [!WARNING]
> This calendar covers the most common requirements. Your specific obligations depend on your building type, assets, and sector. Always verify against your PPM schedule and consult a qualified FM professional.
    `
  },
  // Adding back original articles with updated formats
  {
    slug: "facilities-management-checklist-2025",
    title: "The Ultimate FM Checklist [2025]",
    badge: "Checklist",
    date: "14 December 2024",
    readTime: "10 min",
    category: "Checklists",
    description: "Our comprehensive 2025 FM checklist covers fire safety, HVAC, electrical, and water hygiene.",
    icon: "clipboard-check",
    author: "EntireFM Team",
    quickFacts: ["Covers all statutory areas", "Updated for 2025", "Includes fire safety", "Includes M&E"],
    relatedTools: [{ icon: "ShieldCheck", title: "Health Check", description: "Audit your site", href: "/tools/fm-health-check" }],
    content: `
## Master FM Checklist 2025

Managing a commercial estate requires military precision. This checklist provides the baseline for operational excellence.

### Fire Safety
* [ ] Fire Risk Assessment up to date
* [ ] Weekly alarm tests logged
* [ ] Monthly emergency lighting tests
* [ ] 6-monthly fire door inspections

### Electrical Compliance
* [ ] Valid EICR (5-year)
* [ ] PAT testing completed
* [ ] Emergency lighting duration test

### Mechanical & HVAC
* [ ] Gas safety certificate (CP12)
* [ ] Annual boiler service
* [ ] TM44 inspection (if applicable)
* [ ] F-Gas leak checks
    `
  },
  {
    slug: "top-fm-providers-uk",
    title: "Top FM Providers in the UK",
    badge: "Article",
    date: "12 December 2024",
    readTime: "7 min",
    category: "Industry Guides",
    description: "How to choose between corporate giants and specialist independents for your FM partner.",
    icon: "search",
    author: "EntireFM editorial",
    quickFacts: ["Corporate vs Independent", "Self-delivery focus", "Compliance transparency", "Service integration"],
    relatedTools: [{ icon: "Activity", title: "ROI Calc", description: "Vender value check", href: "/tools/fm-roi-calculator" }],
    content: `
## Choosing the Right FM Partner

The UK FM market is diverse. You have the global multi-nationals and the boutique specialists. 

### Why Specialist Independent?
Specialists like EntireFM offer greater agility, direct access to senior management, and a focus on self-delivery rather than sub-contracting.

### Corporate Giants
Good for global contracts, but often lead to 'account fatigue' for mid-market clients.
    `
  }
];

export function getResourceBySlug(slug: string) {
  return resources.find(r => r.slug === slug);
}
