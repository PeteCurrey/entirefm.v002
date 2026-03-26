export interface Lesson {
  id: string;
  title: string;
  duration: string;
  description: string;
  videoPlaceholder: boolean;
  transcript: string;
  keyPoints: string[];
}

export interface Course {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  lessonCount: number;
  category: string;
  popular: boolean;
  new: boolean;
  outcomes: string[];
  audience: string[];
  lessons: Lesson[];
  relatedService: string;
  certificateTitle: string;
}

export const academyCourses: Course[] = [
  {
    id: "understanding-ppm",
    slug: "understanding-ppm",
    title: "Understanding Planned Preventative Maintenance",
    subtitle: "From reactive firefighting to proactive FM — the complete guide",
    description: "This course covers everything you need to know about planned preventative maintenance — from the fundamentals of what PPM is, to building your first schedule using SFG20-aligned frequencies. By the end, you'll have the knowledge to transform your building's maintenance approach.",
    level: "Beginner",
    duration: "28 minutes",
    lessonCount: 4,
    category: "PPM & Maintenance",
    popular: true,
    new: false,
    outcomes: [
      "Understand what PPM is and why it matters",
      "Know the difference between reactive and planned maintenance",
      "Understand SFG20 and how it applies to your building",
      "Be able to start building a PPM programme for your site",
    ],
    audience: [
      "Facilities managers new to PPM",
      "Property managers taking on FM responsibilities",
      "Building owners managing their own maintenance",
      "FM assistants and coordinators",
    ],
    lessons: [
      {
        id: "ppm-1-1",
        title: "What Is PPM and Why Does It Matter?",
        duration: "7 min",
        description: "An introduction to planned preventative maintenance — what it is, where it came from, and why every building needs it.",
        videoPlaceholder: true,
        keyPoints: [
          "PPM is proactive maintenance at scheduled intervals",
          "Reactive maintenance costs 12–18% more than PPM on average",
          "PPM creates an audit trail that protects you legally",
          "Most insurance policies require evidence of planned maintenance",
        ],
        transcript: `Welcome to Understanding Planned Preventative Maintenance. In this first lesson, we're going to cover the fundamentals — what PPM actually is, where the concept came from, and most importantly, why every building manager needs to understand it.

Planned Preventative Maintenance — or PPM — is exactly what it sounds like. It's a proactive approach to building maintenance where servicing, inspection, and repair tasks are scheduled at regular intervals, rather than waiting for something to break before you act.

The concept isn't new. It emerged from manufacturing in the mid-20th century, where production line operators realised that planned downtime for maintenance was far less costly than unplanned breakdowns. The FM industry adopted the same logic — and the results have consistently proven its value.

So what does PPM look like in practice? For a typical commercial office building, it might mean your HVAC system is serviced every six months, your fire alarm panel is inspected and tested quarterly, your emergency lighting is function-tested monthly, and your boiler is serviced annually by a Gas Safe registered engineer. All of these tasks are scheduled well in advance, assigned to competent engineers, and documented afterward.

The alternative — reactive maintenance — means waiting until the air conditioning fails mid-summer, the fire alarm faults during a fire drill, or the boiler breaks down on the coldest day of the year. Each of those scenarios costs significantly more to resolve than a scheduled service would have.

Industry data consistently shows that reactive maintenance costs between 12 and 18% more than planned maintenance on a like-for-like basis. And that's before you factor in downtime, occupant disruption, and the reputational damage of a building that keeps breaking down.

But the financial case is only part of the story. There's also the legal dimension. Under UK legislation — including the Regulatory Reform (Fire Safety) Order 2005, the Health and Safety at Work Act 1974, and various sector-specific regulations — building managers and owners have statutory duties to maintain certain building systems. Those duties don't just require that the work is done. They require that it's documented.

In an HSE inspection or insurance audit, "we maintain everything" isn't enough. You need to be able to produce records — dates, engineer names, outcomes, any remedial actions taken. PPM, properly managed, gives you exactly that audit trail.

In the next lesson, we'll look at the numbers in more detail — a proper cost comparison between reactive and planned maintenance that might surprise you.`,
      },
      {
        id: "ppm-1-2",
        title: "Reactive vs Planned — The Real Cost Comparison",
        duration: "6 min",
        description: "A clear breakdown of what reactive maintenance is truly costing your organisation — and what the numbers look like when you switch to PPM.",
        videoPlaceholder: true,
        keyPoints: [
          "True reactive cost includes emergency callout premiums, downtime, and compliance risk",
          "PPM reduces reactive spend by an average of 12–34%",
          "Asset lifespan increases by up to 40% with consistent PPM",
          "Insurance premiums can reduce with documented PPM evidence",
        ],
        transcript: `In the previous lesson we established what PPM is and why it matters in principle. In this lesson, we're going to look at the numbers — because nothing makes the case for planned maintenance more powerfully than a proper cost comparison.

Let's take an HVAC system as our example. A typical commercial air handling unit, serviced every six months, might cost £400–£600 per service visit. That's £800–£1,200 per year in planned maintenance costs. Predictable, budgetable, and manageable.

Now imagine you skip the planned services. After 18 months, the filters are clogged, the belts are worn, and the coil is dirty. The system starts working harder to deliver the same output. Energy consumption rises — typically by 10–20% on a poorly maintained HVAC unit. Then, in the middle of summer, the system fails. Emergency callout rates from most commercial FM providers are typically double the standard rate. Parts that should have been identified at a service visit are now urgent — sometimes meaning an emergency order from a specialist supplier. The system is down for two to three days. Your building is uncomfortable. Your tenants are complaining. You're scrambling for temporary cooling solutions.

The total cost of that reactive failure — callout, parts, temporary solutions, and the knock-on cost of occupant disruption — will typically be four to six times what the planned service would have cost. And you're now further behind on your planned maintenance programme than before.

This pattern plays out across every building system. The numbers change, but the principle doesn't. Research from the Building Engineering Services Association consistently shows that organisations with structured PPM programmes spend 12–34% less on maintenance overall than those using a purely reactive model.

Asset lifespan is the other dimension that often doesn't get enough attention. A commercial boiler that receives annual servicing will typically last 15–20 years. The same boiler that only gets attention when it fails might last 10–12 years before requiring replacement. That's a capital expenditure that PPM effectively defers — sometimes by years.

In the next lesson, we'll move from the 'why' to the 'how' — by introducing you to SFG20, the UK's primary maintenance standard.`,
      },
      {
        id: "ppm-1-3",
        title: "Understanding SFG20 — The UK Maintenance Standard",
        duration: "8 min",
        description: "SFG20 is the backbone of UK building services maintenance. This lesson explains what it is, what it covers, and how to use it to build your PPM schedule.",
        videoPlaceholder: true,
        keyPoints: [
          "SFG20 is published by BESA — the Building Engineering Services Association",
          "It covers maintenance tasks for over 2,000 building asset types",
          "Tasks are split into statutory (legal requirement) and non-statutory (best practice)",
          "Using SFG20 gives you a defensible compliance position",
        ],
        transcript: `If you've spent any time researching building maintenance in the UK, you'll have encountered the term SFG20. It comes up in FM contracts, maintenance schedules, tender documents, and compliance audits. In this lesson, we're going to demystify it completely.

SFG20 is the standard maintenance specification for building services engineering in the United Kingdom. It's published by BESA — the Building Engineering Services Association — and it's updated regularly to reflect changes in legislation, manufacturer guidance, and engineering best practice.

The name comes from its original publisher, the heating and ventilating contractors' association, and '20' referred to the section of their original guidance document. Today, SFG20 is a comprehensive digital library covering maintenance tasks for over 2,000 different building asset types — from air handling units and boilers, to passenger lifts, fire suppression systems, and building management systems.

The way SFG20 works is straightforward. For each asset type, it specifies a series of maintenance tasks, along with recommended frequencies — monthly, quarterly, six-monthly, annually, or less frequently. Each task is classified as either statutory — meaning it's a legal requirement — or non-statutory, meaning it's best practice recommended by the standard.

This distinction is important. When you describe your maintenance programme as 'SFG20-aligned', you're telling your clients, your insurers, and any regulatory inspector that your approach is based on the recognised UK industry standard. In the event of an incident, an enforcement action, or a legal dispute, being SFG20-aligned gives you a defensible position. You followed the recognised standard. You can demonstrate it.

The full SFG20 library is a subscription service used primarily by FM providers and large estates teams. But the principles and frequencies it defines are widely published and referenced in industry guidance — which means you can align your PPM programme to SFG20 without necessarily having a subscription.

At EntireFM, all of our PPM programmes are built and delivered to SFG20 standards. In the next and final lesson, we'll show you how to translate this knowledge into your first PPM schedule.`,
      },
      {
        id: "ppm-1-4",
        title: "Building Your First PPM Schedule",
        duration: "7 min",
        description: "A practical, step-by-step walkthrough of how to build a PPM schedule for your building — from asset register to frequency table.",
        videoPlaceholder: true,
        keyPoints: [
          "Start with a complete asset register — everything that needs maintaining",
          "Assign SFG20 frequencies to each asset type",
          "Prioritise statutory assets first",
          "Use our free PPM Schedule Template to get started immediately",
        ],
        transcript: `We've covered what PPM is, why it's more cost-effective than reactive maintenance, and the SFG20 standard that underpins PPM in the UK. Now it's time to put it all together and look at how you actually build a PPM schedule for your building.

Step one is your asset register. Before you can plan maintenance, you need to know what you're maintaining. Walk your building — or work with your FM team — and document every asset that requires planned maintenance. For most commercial buildings, this will include HVAC equipment, boilers, fire alarm systems, emergency lighting, fire extinguishers, electrical distribution, hot and cold water systems, lifts, access control, CCTV, and external grounds equipment.

For each asset, record: the asset type, location (floor, room, zone), make and model where possible, and the date of the last service. This asset register becomes your maintenance master list.

Step two is assigning frequencies. Using SFG20 as your guide — or EntireFM's free PPM Schedule Builder tool — assign maintenance frequencies to each asset type. Some of these will be driven by statutory requirements: fire alarm systems require quarterly servicing under BS 5839-1. Passenger lifts require six-monthly LOLER thorough examinations. Commercial boilers require annual Gas Safe certification. Others are manufacturer recommendations or best practice — HVAC systems typically every six months, cooling towers every quarter.

Step three is prioritisation. With everything listed and frequencies assigned, you can now see your statutory obligations clearly — and those take priority. Build those into your schedule first as non-negotiable. Then layer in the recommended and best practice maintenance around them.

Step four is scheduling. Spread your maintenance visits sensibly across the year. Avoid clustering too many visits in the same month. Consider seasonal sensitivities — boiler servicing is best done in late summer before the heating season starts. HVAC cooling system servicing should be done in spring before peak demand.

The result is a rolling 12-month schedule that tells you exactly what engineer needs to be on site, when, and to do what. Download our free PPM Schedule Template from the EntireFM Document Vault to get started immediately — it has SFG20-aligned frequencies pre-populated for the most common asset types.

Congratulations on completing this course. You're now ready to claim your certificate.`,
      },
    ],
    relatedService: "/services/ppm",
    certificateTitle: "Certificate of Completion — Understanding Planned Preventative Maintenance",
  },
  {
    id: "fire-safety-compliance",
    slug: "fire-safety-compliance",
    title: "Fire Safety Compliance for Building Managers",
    subtitle: "Your legal responsibilities and how to meet them",
    description: "A comprehensive guide to fire safety compliance for anyone responsible for a building. Covers the Regulatory Reform (Fire Safety) Order, fire risk assessments, statutory testing requirements, and record keeping.",
    level: "Beginner",
    duration: "35 minutes",
    lessonCount: 5,
    category: "Compliance",
    popular: true,
    new: false,
    outcomes: [
      "Understand the Regulatory Reform (Fire Safety) Order 2005",
      "Know your duties as a Responsible Person",
      "Understand what fire safety checks are legally required and how often",
      "Be able to maintain a compliant fire safety record book",
      "Know when to commission a fire risk assessment",
    ],
    audience: [
      "Building managers and landlords",
      "Facilities managers",
      "Office managers with building responsibilities",
      "Property management companies",
    ],
    lessons: [
      {
        id: "fs-2-1",
        title: "The Regulatory Reform (Fire Safety) Order 2005",
        duration: "7 min",
        description: "An introduction to the legislation that governs fire safety in almost every non-domestic building in England and Wales.",
        videoPlaceholder: true,
        keyPoints: [
          "The RRO replaced 70+ pieces of fire safety legislation",
          "Applies to virtually all non-domestic premises",
          "The Responsible Person has a legal duty to manage fire risk",
          "Non-compliance can result in unlimited fines or imprisonment",
        ],
        transcript: `The Regulatory Reform (Fire Safety) Order 2005 — commonly referred to simply as the RRO — is the primary piece of fire safety legislation for England and Wales. Understanding it is not optional for anyone responsible for a non-domestic building. It is the framework within which every fire safety decision you make must sit.

Before the RRO came into effect in 2006, fire safety in the UK was governed by a patchwork of more than 70 different pieces of legislation — the Fire Precautions Act 1971, the Fire Precautions (Workplace) Regulations 1997, and numerous sector-specific rules. The RRO replaced all of them with a single, unified framework.

The scope of the RRO is very broad. It applies to virtually all non-domestic premises in England and Wales — offices, retail units, factories, warehouses, hotels, schools, hospitals, places of worship, and communal areas of residential buildings. If you work in, own, or manage any of these, the RRO applies to you.

The central concept of the RRO is the 'Responsible Person'. This is the person — or people — who have duties under the legislation. If you're an employer, you're the Responsible Person for your part of the building. If you're the owner or landlord of an empty building, you're the Responsible Person. If multiple organisations share a building, each has responsibility for their area, and there must be coordination between them for shared spaces.

The duties of the Responsible Person under the RRO are significant. You must carry out or commission a fire risk assessment. You must implement appropriate fire safety measures. You must maintain those measures. And you must keep records. Failure to meet these duties is a criminal offence. The penalties are severe — unlimited fines, and in serious cases, imprisonment. In the next lesson, we'll dig deeper into exactly who the Responsible Person is and what happens when there's more than one.`,
      },
      {
        id: "fs-2-2",
        title: "Who Is the Responsible Person?",
        duration: "6 min",
        description: "Defining the Responsible Person in law, and understanding what happens when responsibilities are shared.",
        videoPlaceholder: true,
        keyPoints: [
          "The Responsible Person is the employer, owner, or person in control of the premises",
          "Multiple Responsible Persons can exist in one building",
          "You cannot delegate legal responsibility — only tasks",
          "Ignorance of the law is not a defence",
        ],
        transcript: `In the previous lesson we introduced the concept of the Responsible Person under the Regulatory Reform (Fire Safety) Order. In this lesson, we're going to define it more precisely — because it's one of the most commonly misunderstood aspects of fire safety compliance.

The RRO defines the Responsible Person as follows: the employer, if the workplace is to any extent under their control; the person who has control of the premises, including the owner where they manage the premises; or the owner where neither of the above applies. In practical terms, this usually means the employer in a single-occupancy building, the landlord in a vacant building, or — in a multi-tenancy scenario — each employer for their own area and the landlord or managing agent for shared spaces.

In larger or more complex buildings, multiple Responsible Persons will often exist simultaneously. An office building might have ten different employers, each a Responsible Person for their own floor or unit, with the building owner or their managing agent holding responsibility for the entrance lobby, lifts, stairs, plant rooms, and car parks. This doesn't reduce the duty — it means each party has their own obligations, and they must cooperate and coordinate.

One of the most important principles for building managers to understand is this: you cannot delegate legal responsibility. You can delegate tasks. You can appoint a competent FM provider to carry out your fire alarm servicing, maintain your extinguishers, and manage your record keeping. But the legal responsibility remains with you, as the Responsible Person. If your FM provider fails to carry out a fire alarm service and there's subsequently an incident, the Responsible Person is liable — not the FM provider.

This is why choosing a competent, documented, accountable FM partner is not just a service decision. It's a legal risk management decision.`,
      },
      {
        id: "fs-2-3",
        title: "Fire Risk Assessments — What They Are and When You Need One",
        duration: "8 min",
        description: "Understanding the legal requirement for fire risk assessments and what makes one suitable and sufficient.",
        videoPlaceholder: true,
        keyPoints: [
          "A fire risk assessment must be 'suitable and sufficient'",
          "Must be reviewed regularly and after significant changes",
          "Buildings with 5+ employees must have it in writing",
          "A competent person must carry it out — this can be you for simple premises",
        ],
        transcript: `The fire risk assessment is the cornerstone of your fire safety management. The RRO requires every Responsible Person to carry out or commission a fire risk assessment of their premises — but it doesn't just require that it exists. It requires that it is 'suitable and sufficient'.

What does 'suitable and sufficient' mean in practice? It means the assessment must identify all fire hazards in the premises — sources of ignition, sources of fuel, and sources of oxygen. It must identify all people at risk — employees, visitors, and particularly vulnerable people including children, elderly persons, and anyone with mobility or sensory impairments. It must evaluate the risk — considering the likelihood of a fire starting and its potential consequences. And it must identify existing fire safety measures and any additional measures needed to reduce the risk to an acceptable level.

The assessment doesn't have a fixed duration before it must be repeated. Instead, the RRO requires it to be reviewed 'regularly' and whenever 'there is reason to suspect it is no longer valid'. In practice, most competent assessors and insurers recommend an annual review, with a full reassessment every three to five years, or following any significant change — a new layout, different occupants, a change in the activities carried out on the premises, a near-miss, or a false alarm.

If your business employs five or more people, the significant findings of your fire risk assessment must be recorded in writing. Even below that threshold, it's strongly advisable. Your written assessment is your primary evidence of compliance.

Who can carry out a fire risk assessment? The law says it must be carried out by a 'competent person'. For simple premises — a small office with one exit, standard electrical equipment, and no unusual hazards — a manager who has educated themselves in fire safety may be competent to carry it out. For more complex premises — larger buildings, multiple occupancies, buildings with sleeping accommodation, or premises with unusual hazards — you should commission an accredited fire risk assessor.`,
      },
      {
        id: "fs-2-4",
        title: "Statutory Fire Safety Testing Requirements",
        duration: "7 min",
        description: "A clear breakdown of every statutory fire safety maintenance requirement, with frequencies and the legislation behind each.",
        videoPlaceholder: true,
        keyPoints: [
          "Fire alarms: weekly test, quarterly service, annual inspection",
          "Emergency lighting: monthly function test, annual full duration test",
          "Fire extinguishers: annual service, 5-year extended test",
          "All tests must be logged with dates and outcomes",
        ],
        transcript: `Alongside your fire risk assessment, the RRO requires you to ensure that your fire safety equipment and systems are maintained in efficient working order and good repair. The specific maintenance requirements are defined in the relevant British Standards for each type of system.

Let's go through the key statutory requirements. Fire alarm systems — including the control panel, detectors, call points, and sounders — must be tested weekly under BS 5839-1. This means activating a different call point each week on a rotation, verifying that the panel responds correctly, and logging the result. Beyond weekly testing, a competent engineer must carry out a full system inspection and service quarterly. This is not a task for a non-specialist — it requires a fire alarm engineer who can test each detector, check wiring integrity, review the event log, and certify the system. An annual inspection is also required, which is typically more comprehensive and results in a formal service certificate.

Emergency lighting — the battery-backed lighting that illuminates escape routes when normal power fails — requires a monthly functional test under BS 5266-1. This involves activating each luminaire using its test facility and confirming it operates. An annual full-duration test — three hours for most systems — must also be carried out and logged. This is typically done by a competent person, often the FM engineer.

Fire extinguishers must be inspected annually under BS 5306-3 by a competent engineer. They must be labelled with the service date, their condition assessed, and their weight or pressure verified. Certain types — CO2 and water — require an extended service every five years.

Fire doors must be regularly inspected for compliance — that they close fully and correctly, that intumescent strips and seals are undamaged, that ironmongery functions correctly, and that they carry appropriate signage.

Every single one of these checks must be logged. The log must record the date, who carried out the test, and the outcome. A failure must be followed by a remedial action and re-test.`,
      },
      {
        id: "fs-2-5",
        title: "Keeping Compliant — Record Keeping and Audits",
        duration: "7 min",
        description: "How to maintain a compliant fire safety logbook and what to expect from a fire safety audit or inspection.",
        videoPlaceholder: true,
        keyPoints: [
          "A fire safety logbook is your primary compliance evidence",
          "In an inspection, you must produce records on demand",
          "Digital records are acceptable but must be accessible",
          "An annual audit by a competent FM provider removes the risk",
        ],
        transcript: `You've carried out your fire risk assessment. You're having your fire alarm system serviced quarterly, your emergency lighting tested monthly, and your extinguishers maintained annually. But are you keeping the records that prove it?

This lesson is about the often-overlooked final step of fire safety compliance — documentation. And it's not a minor point. In the event of a fire, a near-miss, an HSE inspection, or an insurance claim, your records are your evidence. Without them, it doesn't matter what work was done. If you can't prove it was done, legally it may as well not have been.

A fire safety logbook is the standard mechanism for recording fire safety activities. It can be a physical paper log or a digital equivalent. It should record: the date and result of every weekly fire alarm test; the date, engineer name, and outcome of every quarterly and annual fire alarm service; the date and result of every monthly emergency lighting test; the date, engineer name, and outcome of every annual emergency lighting inspection; the date and outcome of every fire extinguisher service; and the date of every fire drill, including how many people were present and the evacuation time.

If a defect is identified during any test or inspection, the logbook must also record the nature of the defect, when it was reported, and when and how it was rectified. A fire safety logbook with a series of defects that were identified and logged — and then quickly resolved — is strong evidence of diligent management. A logbook that simply stops, or shows months of missed entries, is evidence of a significant compliance failure.

When a fire safety audit is carried out — whether by the local Fire Authority, an insurance assessor, or an independent FM auditor — you will be expected to produce your fire risk assessment and your logbook immediately. They will check that the assessment is current and relevant, that all maintenance is up to date, that records are complete, and that any actions previously identified have been resolved.

The simplest way to ensure this never becomes a problem is to work with an accountable FM provider who manages your fire safety programme, maintains your records, and provides you with a compliance report at the end of each year.`,
      },
    ],
    relatedService: "/services/hard-fm",
    certificateTitle: "Certificate of Completion — Fire Safety Compliance for Building Managers",
  },
  {
    id: "multi-site-fm-management",
    slug: "multi-site-fm-management",
    title: "Managing FM Across Multiple Sites",
    subtitle: "Strategies for consistency, compliance and cost control at scale",
    description: "An intermediate-level strategic guide for portfolio managers, estate directors, and FM procurement professionals. Covers the hidden costs of multi-supplier models, building consistent standards, TFM, and FM procurement.",
    level: "Intermediate",
    duration: "42 minutes",
    lessonCount: 5,
    category: "Strategy",
    popular: false,
    new: true,
    outcomes: [
      "Identify the hidden costs of multi-supplier FM models",
      "Understand how to build consistent standards across a portfolio",
      "Know what to look for in a multi-site FM provider",
      "Be able to build an FM tender brief for a portfolio",
      "Understand TFM and when it is the right model",
    ],
    audience: [
      "Portfolio and estate managers",
      "Property directors",
      "Operations directors managing multi-site estates",
      "FM procurement professionals",
    ],
    lessons: [
      { id: "ms-3-1", title: "The Multi-Site FM Challenge", duration: "8 min", description: "Understanding the hidden complexity and risk of managing FM across a portfolio.", videoPlaceholder: true, keyPoints: ["Multi-supplier models create accountability gaps", "Standards drift when there is no single provider", "Compliance visibility across sites is the biggest risk", "The average multi-site estate uses 4–7 FM contractors"], transcript: "Welcome to Managing FM Across Multiple Sites. In this opening lesson, we examine the core challenge — why managing FM across a portfolio is so much harder than managing a single site, and why the multi-supplier model that most organisations fall into creates disproportionate risk.\n\nThe typical multi-site estate, when audited, is found to have between four and seven different FM contractors operating across its portfolio. One contract for mechanical and electrical maintenance. A different one for cleaning. A regional facilities company for some sites but not others. Individual arrangements for grounds, for pest control, for lift maintenance. Some sites have their own local supplier relationships that have evolved over years. All of this feels manageable — until something goes wrong.\n\nWhen a leak causes damage to a tenant's offices, whose liability is it? Is it the plumbing contractor who last worked on the system? The M&E provider who manages the plant room? The building manager who failed to log a previous issue? In a multi-supplier model, this question often goes unanswered for weeks while contractors point at each other. The tenant doesn't care whose fault it is. They care that their office is flooded.\n\nThe accountability gap is the defining problem of multi-supplier FM. There is no single entity that can be held responsible for the overall performance of the estate. Each contractor is responsible only for their specific scope — and the gaps between scopes are where things fall apart.\n\nIn the next lesson, we'll look at the model that solves this problem: Total Facilities Management." },
      { id: "ms-3-2", title: "Total Facilities Management — The Single Supplier Model", duration: "9 min", description: "How TFM works, what it delivers, and when it's the right choice.", videoPlaceholder: true, keyPoints: ["TFM means one contract, one provider, one invoice", "Single point of accountability eliminates the blame game", "Consolidated spend typically saves 15–22% vs multi-supplier", "TFM is not just for large estates — works from 3 sites upwards"], transcript: "Total Facilities Management — TFM — is the model where a single provider takes responsibility for all FM services across a portfolio or building. One contract. One point of contact. One invoice. One set of KPIs. And one team accountable for everything.\n\nUnder a TFM contract, the FM provider — like EntireFM — manages all hard FM services (M&E maintenance, fire safety, electrical compliance, water safety), all soft FM services (cleaning, security, grounds), and all reactive maintenance through a single helpdesk. They manage the supply chain, the subcontractors, the compliance documentation, and the monthly reporting. You deal with one team.\n\nThe financial case for TFM is compelling. Research consistently shows consolidation savings of 15–22% compared with managing the same services through multiple suppliers. Where do those savings come from? Efficiency — one mobilisation, one contract negotiation, one account management overhead. Supply chain leverage — a TFM provider buys materials and subcontractor services at scale. And the elimination of overlap and duplication that almost always exists in multi-supplier models.\n\nTFM is often perceived as a model only for large corporate estates. That's a misconception. At EntireFM, we operate TFM contracts for clients with as few as three sites. The benefits — consolidated accountability, consistent standards, and simplified management — don't require scale. They require the right partner." },
      { id: "ms-3-3", title: "Building Consistent Standards Across a Portfolio", duration: "8 min", description: "Practical approaches to driving consistency when managing multiple sites.", videoPlaceholder: true, keyPoints: ["Define a minimum standard and enforce it everywhere", "Central reporting is essential — you cannot manage what you cannot see", "Monthly site inspection reports are the baseline", "KPIs must be consistent across all sites"], transcript: "Consistency is the hardest thing to achieve in multi-site FM — and the most valuable. A portfolio where every site meets the same standard is a portfolio that's easy to manage, easy to audit, and easy to be proud of. The challenge is getting there.\n\nThe starting point is defining your standard. What does 'good' look like? Document it. Write a facilities management standard that specifies your minimum acceptable conditions for cleanliness, building fabric condition, plant room presentation, car park maintenance, and compliance documentation. Make it specific enough to be measurable, and distribute it to every site manager and every FM contractor.\n\nThe second requirement is visibility. You cannot manage what you cannot see. For multi-site portfolios, this means regular site inspection reports — monthly at a minimum. Each report should cover the same categories, using the same scoring methodology, so you can compare performance across sites and identify outliers. A site that consistently scores below average on cleanliness needs attention before it becomes a problem. A site that's consistently top-performing deserves recognition.\n\nKPIs are the numerical expression of your standards. Define them clearly and apply them consistently across all sites: PPM completion rate (target: 98%+), reactive job response time (e.g., emergency: 2 hours, urgent: 8 hours, routine: next working day), and monthly cleaning compliance score. When every site is measured against the same KPIs, you get comparable, actionable data." },
      { id: "ms-3-4", title: "Procurement — Writing an FM Tender Brief", duration: "9 min", description: "How to write an FM tender brief that gets you comparable, high-quality proposals.", videoPlaceholder: true, keyPoints: ["A good brief gets you comparable proposals — a bad one gets you confusion", "Define scope, SLAs, reporting requirements and TUPE position upfront", "Use our free FM Tender Brief Generator to build yours", "Evaluation criteria should weight capability over price"], transcript: "At some point, every multi-site estate manager faces the FM tender process. Whether you're re-tendering an existing contract, consolidating from multi-supplier to TFM, or bringing FM services in-house for the first time — the quality of your tender brief will directly determine the quality of the proposals you receive.\n\nThe most common mistake in FM procurement is writing a brief that's too vague. 'We want facilities management services for 12 sites across the East Midlands at a competitive price' is not a brief. It's an invitation to confusion. Every provider who receives it will interpret the scope differently. You'll receive proposals that cover completely different things, at wildly different prices, using different assumptions.  A good FM tender brief specifies: the exact scope of services required — which hard FM services, which soft FM services, and for which sites; the current service delivery model and what TUPE implications exist; your minimum SLA requirements — emergency response times, PPM completion targets, helpdesk availability; your reporting requirements — monthly reports, quarterly reviews, annual compliance audits; the contract term and any renewal options; the evaluation criteria and their weightings. Use EntireFM's free FM Tender Brief Generator to build yours in under 10 minutes." },
      { id: "ms-3-5", title: "Mobilising a New FM Contract — What Good Looks Like", duration: "8 min", description: "What to expect from mobilisation and how to ensure your new FM contract starts on the right foot.", videoPlaceholder: true, keyPoints: ["A 30-day mobilisation is achievable for most estates", "TUPE must be handled correctly — it is a legal requirement", "A good provider embeds before day one — site visits, stakeholder meetings, asset surveys", "The first 90 days set the tone for the entire contract"], transcript: "You've written your brief. You've evaluated the proposals. You've selected your FM provider. Now comes the part that will determine whether the next three to five years of FM management are a success or a frustration: mobilisation.\n\nMobilisation is the transition period between contract award and full service commencement. For a multi-site estate, this period typically lasts 30 to 90 days, depending on complexity. Done well, it sets the foundation for an excellent FM relationship. Done poorly, it creates problems that take years to fully resolve.\n\nWhat good mobilisation looks like: before day one, your new FM provider should have visited every site, met every key stakeholder, completed a full asset survey, understood every existing supplier relationship and contract, and produced a mobilisation plan with clear milestones. They should have assessed the TUPE position — identifying which employees transfer under the Transfer of Undertakings (Protection of Employment) regulations — and handled the consultation process compliantly. TUPE is a legal requirement, not a negotiable step, and mishandling it exposes both parties to significant liability.\n\nIn the first 30 days, your provider should establish their helpdesk, onboard all sites into their management system, complete any outstanding statutory compliance work, and produce their first compliance report. By day 90, they should be operating business as usual — delivering planned maintenance to schedule, response reactive jobs to SLA, and producing monthly reports that give you complete visibility.\n\nThe first 90 days set the tone for the entire contract. A provider who executes mobilisation well has demonstrated capability, process discipline, and commitment. That foundation makes everything that follows easier." },
    ],
    relatedService: "/services/total-facilities-management",
    certificateTitle: "Certificate of Completion — Managing FM Across Multiple Sites",
  },
  {
    id: "legionella-water-safety",
    slug: "legionella-water-safety",
    title: "Legionella and Water Safety for Building Managers",
    subtitle: "L8 ACoP explained — your duties, the risks, and how to stay compliant",
    description: "A clear, practical guide to Legionella risk and water safety compliance. Covers the legislation, your duties, and the practical monitoring requirements you need to meet.",
    level: "Beginner",
    duration: "24 minutes",
    lessonCount: 3,
    category: "Compliance",
    popular: false,
    new: true,
    outcomes: [
      "Understand what Legionella is and where the risk comes from",
      "Know your legal duties under the L8 ACoP",
      "Understand what water safety checks are required and how often",
      "Know when to commission a Legionella risk assessment",
    ],
    audience: ["Building managers", "Landlords and property managers", "FM managers new to water safety", "Operations managers"],
    lessons: [
      { id: "leg-4-1", title: "What Is Legionella and Why Is It a Building Manager's Problem?", duration: "8 min", description: "Understanding the Legionella bacterium, how it spreads, and why building water systems are a primary risk.", videoPlaceholder: true, keyPoints: ["Legionella pneumophila causes Legionnaires' disease — a potentially fatal pneumonia", "It thrives in water systems between 20°C and 45°C", "Building water systems are a primary source of outbreaks", "Building managers have a legal duty of care"], transcript: "Legionnaires' disease is a severe form of pneumonia caused by the Legionella pneumophila bacterium. It's contracted by inhaling fine water droplets — aerosols — that contain the bacteria. It cannot be spread from person to person. The source is always environmental — and most typically, it's a building water system.\n\nLegionella bacteria are naturally present in freshwater environments at low levels that pose no risk. The risk arises when the bacteria are able to multiply significantly in a man-made water system and are then released as aerosols that people can inhale. The conditions that allow this multiplication are well understood: water temperatures between 20°C and 45°C provide the ideal growth range; stagnant water — in pipework, dead legs, or infrequently used outlets — allows biofilm to develop, which harbours the bacteria; and the presence of nutrients — rust, scale, sludge, or other organic matter — provides the food source for growth.\n\nBuilding water systems that pose an elevated risk include: hot and cold water distribution systems, particularly where water temperatures fall in the danger range; cooling towers, which are the most significant source of large community outbreaks; spa baths and whirlpool baths; and any water feature that generates aerosols.\n\nThe consequences of an outbreak associated with your building are severe. Apart from the human cost — Legionnaires' disease has a case fatality rate of around 10% in the general population — the legal, regulatory, and reputational consequences for a building manager who failed to manage the risk are significant. Prosecutions under health and safety legislation following Legionella outbreaks have resulted in substantial fines and, in some cases, custodial sentences. As a building manager, this is your responsibility." },
      { id: "leg-4-2", title: "The L8 ACoP — Your Legal Duties Explained", duration: "8 min", description: "Understanding the Approved Code of Practice that governs Legionella risk management in the UK.", videoPlaceholder: true, keyPoints: ["L8 ACoP is the approved code of practice under COSHH regulations", "You must identify and assess the risk in your water systems", "A written scheme of control must be in place", "Records must be kept for a minimum of 5 years"], transcript: "The legal framework for Legionella control in the UK is built on the Control of Substances Hazardous to Health Regulations 2002 — COSHH — and the Health and Safety at Work Act 1974. But the practical guidance that defines what you must do is found in the L8 Approved Code of Practice, published by the Health and Safety Executive. L8 is not guidance — it's an Approved Code of Practice, which means that if you're prosecuted for a health and safety offence relating to Legionella and you didn't follow L8, you will be presumed to have failed in your duty unless you can show you complied by other means.\n\nUnder L8, the duty holder — typically the employer or building owner — must identify and assess the risk from Legionella in their water systems. This is the Legionella risk assessment. It must be carried out by a competent person, and it must be documented. The assessment must identify any water systems that present a risk, identify the population that could be at risk, identify any particular vulnerabilities — such as elderly, immunocompromised, or very young people — and assess the likelihood of exposure.\n\nFollowing the assessment, a written scheme of control must be prepared. This is a documented plan specifying the control measures that will be implemented to manage the risk — typically including temperature monitoring, regular flushing of infrequently used outlets, water treatment, and physical measures such as the removal of dead legs. The scheme must specify who is responsible for each control measure and at what frequency. Records of all monitoring, maintenance, and control activities must be kept for at least five years." },
      { id: "leg-4-3", title: "Practical Water Safety — Monthly Checks and Annual Assessments", duration: "8 min", description: "The practical monitoring regime your building needs and how to maintain compliant records.", videoPlaceholder: true, keyPoints: ["Hot water must reach 60°C at the calorifier", "Cold water must remain below 20°C throughout", "Monthly temperature logs are your primary evidence", "Full risk assessment required every 2 years minimum"], transcript: "In this final lesson, we translate the legal framework into the practical monitoring regime your building needs to operate on a day-to-day basis.\n\nThe primary control measure for most commercial water systems is temperature management. Legionella cannot survive at temperatures above 60°C, and its growth is significantly inhibited below 20°C. Your water safety control scheme should be designed around keeping water outside the danger zone — above 50°C at outlets and below 20°C in cold water pipework — as much as possible.\n\nFor hot water systems, the calorifier (the hot water cylinder) must be set to store water at 60°C. Outlet temperatures at the furthest points of the distribution system must reach at least 50°C within one minute of running. For cold water, the temperature at outlets should not exceed 20°C after two minutes of running. These temperature checks must be carried out monthly and logged — recording the date, the outlet tested, the temperature recorded, and who carried out the check.\n\nFlushing of infrequently used outlets is another key control measure. Any outlet that has not been used for seven days or more should be flushed for two minutes before normal use. This prevents stagnation in pipework. If your building has outlets that are routinely unused — perhaps a remote toilet block or a seasonal area — these should be on a weekly flushing schedule.\n\nBeyond monthly temperature monitoring, a full Legionella risk assessment review should be carried out at least every two years, or whenever there is a significant change to the water system or the pattern of use. This review must be carried out by a competent person — typically a specialist water hygiene contractor — and must be documented." },
    ],
    relatedService: "/services/hard-fm",
    certificateTitle: "Certificate of Completion — Legionella and Water Safety for Building Managers",
  },
  {
    id: "drone-inspection-guide",
    slug: "drone-inspection-guide",
    title: "Drone Technology in Facilities Management",
    subtitle: "How aerial inspection is transforming building surveys",
    description: "An introduction to drone inspection technology for FM professionals — what it can inspect, the regulatory framework, and what a good inspection report looks like.",
    level: "Beginner",
    duration: "18 minutes",
    lessonCount: 3,
    category: "Technology",
    popular: false,
    new: true,
    outcomes: [
      "Understand what drone inspection can and cannot do",
      "Know when drone inspection is the right choice vs traditional access methods",
      "Understand the CAA regulatory framework",
      "Know what to expect from a drone inspection report",
    ],
    audience: ["Building managers", "Estates directors", "Property surveyors", "FM procurement teams"],
    lessons: [
      { id: "drone-5-1", title: "What Can Drones Inspect and Why Does It Matter?", duration: "6 min", description: "An overview of drone inspection capabilities and the advantages over traditional access methods.", videoPlaceholder: true, keyPoints: ["Drones can inspect roofs, cladding, gutters, HVAC units, chimneys, and solar panels", "4K video and thermal imaging reveal defects invisible to ground-level inspection", "No scaffolding means no access cost or disruption", "A drone survey of a large roof takes 2–4 hours vs 2–3 days with scaffold"], transcript: "Drone technology — Unmanned Aerial Vehicles (UAVs) — has transformed building inspection over the last decade. Where once you needed a team of abseilers, a scaffold tower, or a cherry picker to inspect a building's roof, cladding, or high-level fabric elements, a drone equipped with a 4K camera can cover the same area in a fraction of the time, at a fraction of the cost, without any of the disruption.\n\nSo what can a drone actually inspect? For building fabric, the primary applications are roof surveys — membrane condition, flashing integrity, ponding water, seam failures, and penetration details; cladding and façade inspection — checking for panel delamination, fixings, sealant failure, and — critically post-Grenfell — the identification of potentially combustible cladding materials; gutters and rainwater goods — blockages, degradation, and overflow risks; high-level M&E equipment — rooftop HVAC units, plant rooms, and solar arrays; chimneys and stacks; and historical building features like stonework, ornamental details, and leadwork.\n\nBeyond standard HD video, modern commercial drones can carry thermal imaging cameras. Thermal imagery reveals heat loss through the building envelope, potential moisture ingress behind surfaces, and anomalies in photovoltaic panel arrays. These are defects that would be entirely invisible to a visual inspection at ground level.\n\nThe access savings are significant. A scaffold erection for a full roof survey of a large commercial building might take two days to erect and one day to dismantle — with a team of scaffold engineers and associated costs. A drone survey of the same area typically takes two to four hours from setup to completion, with no disruption to building occupants and no access equipment costs." },
      { id: "drone-5-2", title: "CAA Regulations — What You Need to Know", duration: "6 min", description: "The Civil Aviation Authority framework governing commercial drone operations and what to look for when commissioning services.", videoPlaceholder: true, keyPoints: ["All commercial drone operators must be CAA registered", "Operators must hold a GVC (General Visual Line of Sight Certificate)", "Operations near airports or controlled airspace require additional permissions", "Always ask your drone provider for their CAA credentials"], transcript: "Before commissioning a drone inspection service, you need to understand the regulatory framework that governs commercial drone operations in the UK. This isn't just interesting background — it's due diligence. If a drone operator isn't properly authorised and something goes wrong during an inspection, you could find yourself implicated in an enforcement action.\n\nIn the UK, commercial drone operations are regulated by the Civil Aviation Authority — the CAA. The key regulations are found in the UK Air Navigation Order 2016, as amended by the Air Navigation (Amendment) Order 2018 and later instruments. Drone operators must be registered with the CAA and must hold appropriate qualifications. For standard commercial operations — which is what a building inspection typically involves — the relevant qualification is the GVC, the General Visual Line of Sight Certificate. This replaced the previous Permissions for Commercial Operations (PfCO) system and is the benchmark qualification for commercial drone operators.\n\nFor operations that go beyond standard parameters — flying near people, flying near airports, or flying in controlled airspace — additional authorisations are required. If your building is near an airport or within controlled airspace (which is more common than you might think, particularly in urban areas), your drone provider must be able to demonstrate that they have obtained the necessary permissions before the flight takes place.\n\nWhen you commission a drone inspection, always ask your provider for: their CAA Operator ID number (which can be verified on the CAA register), evidence of their pilot's GVC qualification, their public liability insurance certificate (minimum £1 million — most commercial providers carry £5 million), and their operational risk assessment for your specific site. A professional, compliant drone operator will provide all of this as standard." },
      { id: "drone-5-3", title: "What to Expect from a Drone Inspection Report", duration: "6 min", description: "Understanding the components of a professional drone inspection report and how to use it.", videoPlaceholder: true, keyPoints: ["A good report includes annotated 4K imagery, thermal imaging where relevant, and defect priority ratings", "Reports should reference BS 8210 building maintenance standards", "Photogrammetry can produce 3D models of complex building forms", "Reports are admissible evidence in insurance claims"], transcript: "The drone flight itself is only half the service. The value of a drone inspection is in the report that follows — the document that translates aerial imagery into actionable intelligence for your maintenance programme.\n\nA professional drone inspection report should contain several key elements. First, annotated imagery. Every identified defect should be illustrated with a high-resolution image — ideally 4K — with the defect clearly marked and described. The annotation should include the location of the defect within the building, a description of what has been found, and an assessment of its significance. Second, a defect schedule. A tabulated list of all findings, each with a priority rating — typically using a RAG (red, amber, green) classification or a severity score. Priority one defects represent urgent risk — water ingress, structural failure risk, or safety hazards. Priority two defects are significant but not immediately urgent. Priority three are monitoring items. Third, recommendations. Each defect should be accompanied by a recommended remedial action and, where possible, an indication of the associated cost or complexity.\n\nFor thermal imaging surveys, the report should include both the visible light and thermal imagery side by side for each finding, with a clear explanation of what the thermal anomaly indicates. A cold spot in a roof might indicate moisture ingress. A difference in cladding panel temperatures might indicate delamination or missing insulation. The report should interpret the data — not just present it. Your drone inspection report is also an important document in your building maintenance records and can be used as evidence in insurance claims, dilapidations assessments, and maintenance budget planning." },
    ],
    relatedService: "/services/drone-inspection",
    certificateTitle: "Certificate of Completion — Drone Technology in FM",
  },
];

export function getCourseBySlug(slug: string): Course | undefined {
  return academyCourses.find((c) => c.slug === slug);
}

export function getRelatedCourses(currentSlug: string, count = 2): Course[] {
  return academyCourses.filter((c) => c.slug !== currentSlug).slice(0, count);
}
