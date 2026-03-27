export interface ResourceArticle {
  slug: string;
  category: string;
  title: string;
  description: string;
  readTime: string;
  targetKeywords: string[];
  date: string;
  author: string;
  content: string;
  faq: {
    question: string;
    answer: string;
  }[];
}

export const resources: ResourceArticle[] = [
  {
    slug: "what-is-planned-preventative-maintenance",
    category: "PPM & Maintenance",
    title: "What Is Planned Preventative Maintenance (PPM) — And Why Does Your Business Need It?",
    description: "Discover how a structured PPM programme can reduce reactive maintenance costs by up to 18%, ensure statutory compliance, and extend the lifecycle of your building assets.",
    readTime: "7 min read",
    targetKeywords: ["planned preventative maintenance", "PPM facilities management", "PPM schedule", "SFG20 maintenance"],
    date: "March 24, 2024",
    author: "EntireFM Editorial Team",
    content: `
## Introduction to Planned Preventative Maintenance (PPM)

In the world of facilities management, there is a fundamental choice: do you wait for things to break, or do you ensure they never do? **Planned Preventative Maintenance (PPM)**, also known as scheduled or proactive maintenance, is the systematic care of building assets to ensure they remain in peak condition. 

Unlike reactive maintenance—where engineers are called out after a failure has occurred (the "run-to-fail" model)—PPM is about foresight. It involves pre-determined tasks performed at specific intervals (monthly, quarterly, annually) based on manufacturer recommendations, statutory requirements, or industry standards like SFG20.

## Reactive vs. Preventative: The Real Cost Comparison

Many business owners and estate managers mistakenly believe they are saving money by only calling out repair teams when necessary. However, the data tells a different story. 

Reactive maintenance is inherently more expensive for several reasons:
1. **Emergency Call-Out Fees**: Last-minute repairs often incur premium rates.
2. **Operational Downtime**: When a critical HVAC system or lift fails during business hours, it impacts productivity and revenue.
3. **Asset Short-Cycling**: Assets that are not maintained work harder to achieve the same result, leading to a significantly shorter lifespan.

Research consistently shows that a robust PPM programme can reduce overall maintenance spend. By identifying minor issues before they become catastrophic failures, businesses can achieve a **12-18% reduction in reactive costs** and an average ROI of 10:1 on maintenance investment.

## What Does a Comprehensive PPM Programme Cover?

A standard PPM schedule from EntireFM covers all critical M&E (Mechanical & Electrical) and building fabric assets:

### HVAC and Temperature Control
Heating, ventilation, and air conditioning systems are the lungs of your building. PPM includes filter changes, belt inspections, refrigerant leak checks, and seasonal calibration. 

### Electrical Compliance and M&E
From fixed wire testing (EICR) to emergency lighting and PAT testing, scheduled electrical maintenance is more than a cost-saver—it's a legal requirement.

### Fire Safety and Security
Fire alarms, smoke detectors, sprinklers, and dry risers must be tested at precise intervals to ensure they function when it matters most.

### Water Safety and Hygiene
Legionella risk assessments and temperature monitoring are essential to prevent bacterial growth and ensure building user safety.

## The Role of SFG20: The Gold Standard

At EntireFM, our PPM programmes are built on the **SFG20 standard**. This is the industry benchmark for building maintenance in the UK. SFG20 provides a massive library of maintenance schedules for over 2,000 different asset types, distinguishing between:
- **Statutory Tasks**: Legally mandated to prevent criminal liability.
- **Mandatory Tasks**: Required by insurance or lease agreements.
- **Function Critical Tasks**: Necessary to keep the business operational.

Using SFG20 ensures that your maintenance is neither 'under-done' (leaving you at risk) nor 'over-done' (wasting your budget).

## How to Set Up Your PPM Programme

Transitioning from a reactive to a preventative model requires a structured approach:

1. **Conduct a Full Asset Audit**: You cannot maintain what you haven't identified. A complete list of all M&E and fabric assets must be compiled.
2. **Assign Service Levels**: Determine the maintenance frequency for each asset based on SFG20 and critical priority.
3. **Create the Annual Schedule**: Map out every visit for the next 12 months to avoid disruption to your operations.
4. **Implementation and Helpdesk Integration**: Real-time reporting via a 24/7 helpdesk ensures that every PPM visit is logged and compliance certificates are instantly available.

## Why EntireFM?

EntireFM has been delivering nationwide PPM solutions since 2009. We don't just 'tick boxes'—we provide genuine operational governance. Our independent status means we focus on the health of your building, not selling you unnecessary equipment. 

By partnering with EntireFM, you gain a transparent, accountable maintenance partner that treats your estate with the same care you do.
    `,
    faq: [
      {
        question: "How much can PPM really save my business?",
        answer: "On average, businesses see a 12-18% reduction in reactive maintenance costs after implementing a structured PPM programme. Long-term savings are even higher when considering asset lifecycle extensions."
      },
      {
        question: "Is PPM a legal requirement in the UK?",
        answer: "Many elements of PPM, such as fire safety testing, gas servicing, and electrical inspections, are statutory requirements under UK health and safety laws."
      },
      {
        question: "How often should PPM visits occur?",
        answer: "Frequency depends on the asset type. For example, some fire safety checks are weekly, while HVAC major services might be annual. We use SFG20 standards to determine the optimal interval for your specific building."
      }
    ]
  },
  {
    slug: "hard-fm-vs-soft-fm-explained",
    category: "Hard FM",
    title: "Hard FM vs Soft FM: What's the Difference and Why Do You Need Both?",
    description: "Understanding the distinction between hard and soft facilities management is critical for operational efficiency. Learn how these two pillars work together to create a safe, compliant workplace.",
    readTime: "6 min read",
    targetKeywords: ["hard FM", "soft FM", "hard facilities management", "soft facilities management", "total FM"],
    date: "March 24, 2024",
    author: "EntireFM Editorial Team",
    content: `
## The Two Pillars of Facilities Management

If you have ever been responsible for building management, you have likely encountered the terms **Hard FM** and **Soft FM**. While they fall under the same umbrella, they serve distinct purposes and require different skill sets to manage effectively. 

In simple terms:
- **Hard FM** relates to the physical structure and critical systems of the building. It is often legally mandated.
- **Soft FM** relates to the services that make the building comfortable, efficient, and safe for its occupants.

## What is Hard Facilities Management?

Hard FM services are "built-in" to the building and cannot be removed. These are the critical technical services that keep a facility habitable and compliant. If these systems fail, the building usually cannot operate.

Examples of Hard FM include:
- **Mechanical and Electrical (M&E)**: Wiring, lighting, and power distribution.
- **HVAC**: Heating, ventilation, and air conditioning maintenance.
- **Fire Safety**: Alarms, sprinklers, and emergency lighting systems.
- **Plumbing and Gas**: Boiler servicing and water hygiene.
- **Building Fabric Maintenance**: Roof repairs, window maintenance, and structural upkeep.

Hard FM carries a high degree of responsibility because much of it is **statutory**. Ensuring your gas safety certificates are up to date or your fire alarms are tested is not a choice—it is a legal obligation.

## What is Soft Facilities Management?

Soft FM services are the "human-centric" elements. They are designed to improve the environment for employees, residents, or visitors. While failure in soft FM might not cause a building closure, it will significantly impact productivity, health & safety, and brand reputation.

Examples of Soft FM include:
- **Commercial Cleaning**: Daily office cleaning, deep cleans, and window cleaning.
- **Security**: Manned guarding, CCTV monitoring, and access control.
- **Grounds Maintenance**: Landscaping, grass cutting, and gritting.
- **Waste Management**: General waste and recycling collection.
- **Pest Control**: Preventative monitoring and reactive treatments.
- **Concierge and Caretaking**: Managing deliveries and site hygiene.

## Why the Interaction Matters

While it is easy to view these as separate departments, they are deeply interconnected. For example, a cleaning team (Soft FM) might be the first to notice a leak in an HVAC unit (Hard FM). Or a security guard performing a perimeter check might identify a loose building fabric panel.

When these services are managed by different providers, a "silo" effect occurs. Information is missed, accountability is shifted, and costs rise as multiple management layers are added. 

## The Total Facilities Management (TFM) Model

This is why many high-performing organisations are moving toward **Total Facilities Management (TFM)**. In a TFM model, a single provider like EntireFM manages both Hard and Soft services.

The benefits of TFM include:
1. **Single Point of Contact**: One helpdesk, one account manager, one invoice.
2. **Integrated Accountability**: No more providers blaming each other for service gaps.
3. **Economies of Scale**: Consolidating contracts often yields significant cost reductions.
4. **Uniform Quality**: Consistent standards across every service line.

## Conclusion: Finding the Right Balance

Every building is unique. A high-tech data centre will have a heavy focus on Hard FM, whereas a Grade A office might place equal weight on premium cleaning and concierge services (Soft FM). 

At EntireFM, we don't believe in one-size-fits-all. We work with our clients to design a tailored FM strategy that ensures the physical building is compliant (Hard) while the interior environment is exceptional (Soft).
    `,
    faq: [
      {
        question: "Is Soft FM a legal requirement like Hard FM?",
        answer: "While less of soft FM is 'statutory', much of it falls under Health and Safety at Work legislation. For example, ensuring a workplace is clean and safe (cleaning/security) is a legal duty of care for employers."
      },
      {
        question: "Can I switch from separate providers to a TFM model mid-contract?",
        answer: "Yes. EntireFM frequently manages phased transitions where we take on services as existing contracts expire, eventually consolidating everything into one seamless TFM agreement."
      },
      {
        question: "Which is more expensive: Hard or Soft FM?",
        answer: "This depends on the building type. Highly technical buildings (hospitals, labs) have high Hard FM costs. High-footfall buildings (retail, offices) often have higher Soft FM costs due to cleaning and security volume."
      }
    ]
  },
  {
    slug: "sfg20-compliance-guide",
    category: "Compliance",
    title: "SFG20 Explained: The UK's Standard for Building Maintenance Compliance",
    description: "Learn why SFG20 is the essential framework for statutory compliance in the UK. Understand the difference between red, amber, and green tasks for your estate.",
    readTime: "8 min read",
    targetKeywords: ["SFG20", "SFG20 compliance", "building maintenance standard UK", "statutory maintenance UK"],
    date: "March 24, 2024",
    author: "EntireFM Editorial Team",
    content: `
## What is SFG20?

If you are involved in the maintenance of commercial property in the UK, you have likely heard of **SFG20**. But what exactly is it, and why has it become the de-facto standard for the industry?

Launched in 1990 by the Building Engineering Services Association (BESA), SFG20 is the definitive standard for building maintenance. It is a dynamic web-based library of maintenance schedules that is kept constantly under review to reflect changes in legislation and best practices.

## Why Was SFG20 Created?

Before SFG20, maintenance was often inconsistent. Every engineer had their own way of doing things, and every building manager had a different idea of what "good" looked like. This led to a lack of transparency and, crucially, a lack of compliance.

SFG20 was designed to provide a uniform framework—a "common language" that both FM providers and building owners could use to ensure maintenance is being performed correctly and consistently across the entire UK.

## The SFG20 Color Coding System

The most valuable feature of SFG20 is its prioritisation system. It categories every maintenance task into one of three colors:

### Red: Statutory Tasks
These are items required by law. If you do not perform these tasks, you are in breach of UK legislation (such as the Health and Safety at Work Act). Examples include gas safety checks, fire alarm testing, and EICR inspections. Failure here can result in criminal prosecution and invalidated insurance.

### Amber: Mandatory Tasks
These are tasks required to comply with manufacturer warranties, insurance requirements, or specific lease agreements. While not strictly 'criminal' to miss, doing so can lead to massive financial liability if an asset fails or an insurance claim is denied.

### Green: Non-Critical Tasks
These are "nice to have" tasks that improve the longevity of an asset or improve the environment but aren't strictly required for legal or insurance reasons. In budget-constrained environments, these are the tasks that are often deprioritised.

## How SFG20 Maps to Your Assets

The SFG20 library is massive, covering over 2,000 asset types. When EntireFM builds a PPM schedule for a client, we map their asset register to SFG20. This includes:

- **HVAC**: Boilers, chillers, air handling units, pumps.
- **Electrical**: Distribution boards, emergency lighting, lightning protection.
- **Fire Safety**: Alarms, smoke vents, fire doors, extinguishers.
- **Water**: Tanks, calorifiers, cooling towers.
- **Building Fabric**: Lifts, automatic doors, roof systems.

For each asset, SFG20 specifies **what** needs to be done, **how often** it needs to be done, and **what skill level** is required to perform the task.

## The Risks of Ignoring SFG20

Working without a recognised standard like SFG20 is a dangerous game. The risks include:
1. **Compliance Gaps**: Missing a statutory check that leads to a fire or safety incident.
2. **Over-Mainteance**: Paying for monthly visits on an asset that only requires quarterly servicing.
3. **Asset Failure**: Shortening the life of expensive equipment through improper care.
4. **Insurance Issues**: If a claim is made and you cannot produce SFG20-aligned maintenance records, your insurer may refuse to pay.

## How EntireFM Uses SFG20

At EntireFM, we have a full subscription to SFG20. It isn't just a book on a shelf; it is integrated into our service delivery. Every job sheet our engineers receive on their mobile devices is aligned with SFG20 task lists. This means that whether we are in London, Birmingham, or Leeds, our clients get the same high-standard, compliant service.

If you are unsure whether your current maintenance programme meets the SFG20 standard, EntireFM can perform a compliance audit to identify any 'red' risks in your estate.
    `,
    faq: [
      {
        question: "Is SFG20 free to use?",
        answer: "No, SFG20 is a subscription-based product managed by BESA. However, by hiring an FM provider like EntireFM, you get the benefit of our subscription and our expertise in implementing the standard."
      },
      {
        question: "Does SFG20 cover domestic properties?",
        answer: "SFG20 is primarily designed for commercial, industrial, and large-scale residential buildings (like PBSA or apartment blocks). It is not typically used for individual single-family homes."
      },
      {
        question: "Can SFG20 help me reduce my carbon footprint?",
        answer: "Yes. By ensuring HVAC and other M&E systems are serviced to SFG20 standards, they operate more efficiently, consuming less energy and reducing the carbon emissions of your building."
      }
    ]
  },
  {
    slug: "facilities-management-checklist-2025",
    category: "Checklists",
    title: "The Ultimate Facilities Management Checklist for UK Businesses [2025 Edition]",
    description: "Our comprehensive 2025 FM checklist covers fire safety, HVAC, electrical compliance, water hygiene, and sustainability to ensure your estate remains a high-performance asset.",
    readTime: "10 min read",
    targetKeywords: ["facilities management checklist", "FM checklist UK", "building compliance checklist", "PPM checklist"],
    date: "March 24, 2024",
    author: "EntireFM Editorial Team",
    content: `
## Why You Need a Master FM Checklist

In the fast-paced world of property management, it is easy for small details to become major liabilities. This **2025 Facilities Management Checklist** is designed to provide UK estate managers, business owners, and operations directors with a high-level framework for building health and compliance.

Whether you manage a single corporate office or a nationwide retail estate, these categories form the bedrock of operational excellence.

---

### ✓ Section 1: Fire Safety Compliance
Fire safety is the most critical area of building compliance. Failure here isn't just a cost—it's a massive risk to life and property.
1. **Fire Risk Assessment (FRA)**: Is your FRA up to date (reviewed annually or after building changes)?
2. **Alarm Systems**: Are fire alarms tested weekly and serviced quarterly by a competent person?
3. **Emergency Lighting**: Are monthly flick tests and annual 3-hour duration tests being performed and logged?
4. **Fire Doors**: Are fire doors checked for integrity, gaps, and closing speed every 6 months?
5. **Escape Routes**: Are all corridors and exits kept clear of obstructions at all times?

---

### ✓ Section 2: HVAC & Mechanical Systems
Ventilation and heating are the lungs and heart of your building. 2025 sees an increased focus on indoor air quality (IAQ).
1. **Gas Safety**: Is there a current landlord gas safety record (CP12)?
2. **Boiler Servicing**: Has your annual major service been completed before the winter peak?
3. **Air Conditioning/FGas**: Are FGas leak checks logged according to the CO2 equivalent weight?
4. **TM44 Inspections**: Have all air conditioning systems with an effective rated output of over 12kW had a TM44 inspection within the last 5 years?
5. **Filter Hygiene**: Are AHU and split unit filters being cleaned or replaced at SFG20-recommended intervals?

---

### ✓ Section 3: Electrical Safety & Compliance
Electrical failures are a leading cause of workplace fires and operational downtime.
1. **Fixed Wire Testing (EICR)**: Do you have a valid EICR for the building (typically required every 5 years for commercial premises)?
2. **PAT Testing**: Is all portable equipment tested and tagged annually (depending on risk profile)?
3. **UPS & Generators**: Are backup power systems tested under load every 3-6 months?
4. **Lightning Protection**: Has your lightning conductor system been tested within the last 11 months?

---

### ✓ Section 4: Water Safety (Legionella)
Water hygiene is a strictly regulated area of FM to prevent the growth of Legionella bacteria.
1. **Risk Assessment**: Is there a Legionella risk assessment for the site (updated every 2 years)?
2. **Temperature Monitoring**: Are monthly sentinel point temperatures being recorded in a logbook?
3. **Showerhead Descaling**: Are showerheads and hoses being cleaned and descaled quarterly?
4. **Tank Inspections**: Are cold water storage tanks inspected for debris and temperature annually?

---

### ✓ Section 5: Building Fabric & External
The shell of your building protects your internal assets. 2025 is the year to check for weather-related wear and tear early.
1. **Roof and Gutters**: Are gutters cleared after autumn leaf-fall (at minimum twice per year)?
2. **Cladding Integrity**: Are there signs of staining, corrosion, or attachment failure on cladding panels?
3. **Automatic Doors**: Are automated entry/exit systems serviced twice per year to BS EN 16005 standards?
4. **Glazing**: Are perimeter window seals intact and glass free from cracks or blown units?

---

### ✓ Section 6: Helpdesk & Reactive Response
A checklist is only useful if there is a system to action it.
1. **SLA Tracking**: Are reactive jobs being completed within agreed timeframes?
2. **Helpdesk Visibility**: Can you log in to a portal to see real-time compliance status?
3. **Emergency Contact**: Do you have a guaranteed 4-hour response for critical site failures?

## Conclusion: Turning the Checklist into Local Action

Managing this checklist manually is a full-time job. At EntireFM, we integrate this entire framework into our automated PPM schedules. We don't just 'check the box'—we document the evidence, provide the certification, and give you the peace of mind that your 2025 compliance is fully handled.

**Need a more detailed site-specific version? Talk to EntireFM today for a free compliance gap analysis.**
    `,
    faq: [
      {
        question: "How often should I update my FM checklist?",
        answer: "You should review your FM checklist annually at minimum, as UK building and health & safety legislation frequently changes. Our 2025 edition includes the latest standards for air quality and fire safety."
      },
      {
        question: "What is the most common compliance failure in the UK?",
        answer: "Emergency lighting and fire door maintenance are frequently overlooked. These represent significant risks during fire safety audits by local authorities."
      },
      {
        question: "Can EntireFM manage this checklist for me?",
        answer: "Absolutely. We convert this static checklist into a dynamic, SFG20-aligned PPM schedule tailored to your specific building assets."
      }
    ]
  },
  {
    slug: "top-fm-providers-uk",
    category: "Industry Guides",
    title: "How to Choose the Right Facilities Management Provider in the UK — A Practical Guide",
    description: "Navigating the FM market can be difficult. Learn the difference between corporate giants and specialist independents, and discover the red flags to avoid when hiring an FM partner.",
    readTime: "7 min read",
    targetKeywords: ["facilities management company UK", "FM provider UK", "best FM company", "how to choose FM provider"],
    date: "March 24, 2024",
    author: "EntireFM Editorial Team",
    content: `
## The FM Market: Large Corporate vs. Specialist Independent

When searching for an FM provider in the UK, you will encounter two main types of companies: the 'Big Box' enterprise firms (like Mitie, CBRE, or OCS) and specialist, independent providers like EntireFM.

Understanding which model fits your business is the most important decision you will make. 

### The Enterprise Model
Large corporate FM firms are excellent at managing global, multi-million pound contracts for FTSE 100 companies. However, for mid-market clients, SMEs, and large regional estates, they can often feel bureaucratic. In these large organisations, your contract can easily become just another line on a spreadsheet, and the personal 'on-site' touch is often lost in multiple management layers.

### The Independent Specialist Model
Providers like EntireFM offer a different experience. We provide the same nationwide coverage and technical sophistication as the giants, but with the agility and accountability of an owner-led business. You aren't 'Site #4902'; you are a valued client with a direct line to senior management. 

## 5 Questions to Ask Before Signing a Contract

Before you commit to a long-term FM agreement, ask any potential provider these five questions:

1. **How do you handle helpdesk and reporting?** (You need a 24/7 UK-based helpdesk and a real-time client portal—not an email address that goes into a black hole.)
2. **What is your self-delivery percentage?** (A provider that sub-contracts everything out is just a middle-man. You want a partner with an in-house engineering team.)
3. **Is your maintenance SFG20-aligned?** (If they say no, they aren't working to the UK's legal gold standard.)
4. **Can I see real-time compliance dashboards?** (Paper certificates are outdated. You need digital access to your compliance documents 24/7.)
5. **How do you manage contractor onboarding and safety?** (They must have robust RAMS and insurance verification processes for every person on your site.)

## Red Flags to Avoid

Be cautious of FM providers who demonstrate the following:
- **Opaque Pricing**: Be wary of incredibly low management fees; they often hide high mark-ups on materials and reactive call-outs.
- **Fixed-Term Only**: A provider confident in their service shouldn't need to 'trap' you in a draconian long-term contract without performance break clauses.
- **Lack of Specific Experience**: Managing an industrial warehouse is fundamentally different from managing a high-end residential block. Ensure they have sector-specific case studies.

## The Onboarding Process: What a 'Good' Transition Looks Like

A professional FM provider will have a structured transition plan (typically 30-90 days). This should involve:
- **Discovery Phase**: Auditing all existing assets and compliance docs.
- **Mobilisation**: Introducing the on-site teams and setting up helpdesk protocols.
- **Implementation**: The first round of PPM visits to establish a baseline of site health.
- **Review**: A 90-day review meeting to refine the service delivery.

## Why EntireFM is the Independent Choice

Founded in 2009, EntireFM has grown into one of the UK's leading independent FM providers. We offer the technical depth of a national player with the care and responsiveness of a specialist. Our focus on transparency, through our proprietary helpdesk and reporting systems, ensures our clients never feel 'in the dark' about their estate.

**Choosing an FM provider is about trust. Let us show you why so many UK businesses are switching to EntireFM.**
    `,
    faq: [
      {
        question: "Why should I choose an independent FM provider over a global firm?",
        answer: "Independent providers often offer better account management, faster response times, and more competitive pricing for mid-market and SME clients. You get the same technical expertise without the corporate bureaucracy."
      },
      {
        question: "What accreditations should a top FM provider have?",
        answer: "Look for ISO 9001 (Quality), ISO 14001 (Environment), SafeContractor or CHAS, and professional memberships like BIFM (now IWFM)."
      },
      {
        question: "Does EntireFM cover the whole of the UK?",
        answer: "Yes. From our headquarters in the Midlands, we manage a nationwide network of engineers and service partners covering England, Scotland, and Wales."
      }
    ]
  },
  {
    slug: "drone-inspection-facilities-management",
    category: "Industry Guides",
    title: "How Drone Technology Is Transforming Building Inspections in Facilities Management",
    description: "Explore the cost and safety benefits of using drones for aerial building surveys. Discover how EntireFM uses drone tech to inspect high-level assets without the need for scaffolding.",
    readTime: "5 min read",
    targetKeywords: ["drone inspection facilities management", "aerial building survey UK", "drone FM services", "building inspection drone"],
    date: "March 24, 2024",
    author: "EntireFM Editorial Team",
    content: `
## The End of the Ladder?

Historically, inspecting the roof of a three-story office block or a 100ft industrial chimney required complex planning, expensive scaffolding, or high-risk 'working at height' protocols involving cradles and cherry pickers. 

Today, that has changed. **Drone technology** is revolutionising the way EntireFM manages building fabric inspections and preventive maintenance for our clients.

## The 3 Major Benefits of Drone Inspections

### 1. Significant Cost Reduction
Scaffolding and high-access machinery are some of the most expensive line items in a maintenance budget. A drone survey can be completed in a fraction of the time for a fraction of the cost—often saving our clients **£5,000 to £20,000 per inspection** depending on the building size.

### 2. Enhanced Safety (Zero Working at Height)
By using a drone, we eliminate the need for an engineer to leave the ground for the initial inspection. This drastically reduces the health and safety risk profile of your site maintenance.

### 3. Superior Data Quality
A drone equipped with a high-resolution 4K camera and thermal imaging can capture details that are invisible to the naked eye from a ladder. We provide our clients with a full high-definition video report and high-res photography of every inch of their roof and facade.

## What Can Drones Inspect?

At EntireFM, we use drones for a wide range of facilities management tasks:
- **Roof Condition Surveys**: Identifying loose tiles, blocked gutters, or pooling water.
- **Cladding and Facade Integrity**: Checking for corrosion or loose panels on high-rise buildings.
- **HVAC and Plant Inspection**: Viewing rooftop AHUs and cooling towers without physical access.
- **Chimney and Flue Surveys**: Safely inspecting internal and external flues.
- **Solar Panel Audits**: Using thermal cameras to identify 'hot spots' or failing cells in solar arrays.

## Regulatory Compliance: The CAA

Operating drones in a commercial environment like a business park or city centre is strictly regulated. EntireFM ensures total compliance by:
- Using CAA-authorised (Civil Aviation Authority) pilots.
- Having comprehensive public liability insurance specific to drone operations.
- Managing all flight planning, risk assessments, and local permissions (e.g., notifying local authorities or air traffic control if near an airport).

## Why Drone Inspection is Now Part of PPM

We no longer view drones as a 'novelty'. They are a strategic tool in our PPM programmes. By performing an annual aerial survey, we can catch roof leaks before they damage internal assets, or spot cladding issues before they become a public safety risk.

**Is your building overdue for a high-level inspection? Contact EntireFM to discuss how a drone survey can save you time, money, and risk.**
    `,
    faq: [
      {
        question: "Are drone inspections legal in city centres?",
        answer: "Yes, provided they are managed by CAA-authorised pilots with the correct flight permissions and safety protocols. EntireFM handles all regulatory requirements for our clients."
      },
      {
        question: "How long does a drone inspection take?",
        answer: "Most commercial building roof surveys can be completed in 1-4 hours on site, depending on the complexity of the structure and local airspace restrictions."
      },
      {
        question: "What deliverables will I receive from a drone survey?",
        answer: "EntireFM provides a comprehensive report including 4K video footage, high-resolution photographs, and a written assessment from our building fabric experts identifying any required repairs."
      }
    ]
  },
  {
    slug: "fire-risk-guide",
    category: "Guides & Compliance",
    title: "The Essential Guide to Fire Risk Assessments (FRA) in Commercial Buildings",
    description: "Understand your legal responsibilities under the Regulatory Reform (Fire Safety) Order 2005. Learn how to conduct, record, and review your Fire Risk Assessment to ensure total compliance.",
    readTime: "8 min read",
    targetKeywords: ["fire risk assessment", "FRA compliance", "fire safety commercial building", "entirefm fire safety"],
    date: "March 27, 2026",
    author: "EntireFM Compliance Team",
    content: `
## Your Legal Obligations

Under the Regulatory Reform (Fire Safety) Order 2005, if you are an employer, owner, landlord, or occupier of a business or other non-domestic premises, you are the **'Responsible Person'**. 

It is your legal duty to ensure that a suitable and sufficient Fire Risk Assessment (FRA) is carried out and regularly reviewed. Failure to do so can result in severe fines, invalidated insurance, and in extreme cases, corporate manslaughter charges.

### What is a Fire Risk Assessment?

A Fire Risk Assessment is a methodical look at your premises, the activities carried out there, and the likelihood that a fire could start and cause harm to those in and around the premises. 

A comprehensive FRA must cover:
- Identification of fire hazards (sources of ignition, fuel, oxygen).
- Identification of people at risk (especially vulnerable individuals).
- Evaluation, removal, or reduction of risks.
- Recording your findings, preparing an emergency plan, and providing training.
- Regular review and updating of the FRA.

### Common FRA Failures We See at EntireFM

When EntireFM conduct takeover audits on new client sites, we frequently see the same compliance failures:
1. **The 'Static' Document**: An FRA was completed 5 years ago and placed in a drawer. FRAs must be dynamic—reviewed annually or whenever there is a significant change to the layout or use of the building.
2. **Ignored Action Plans**: The assessor highlighted 'High Risk' items (like wedged-open fire doors or blocked escape routes) that were never actually rectified.
3. **Lack of Evidence**: The FRA assumes systems are working, but the client cannot produce the weekly fire alarm or monthly emergency lighting test logs.

### How EntireFM Ensures Fire Safety Compliance

Fire safety is not a DIY task for complex commercial buildings. EntireFM provides complete fire compliance management:
- **Independent Assessors**: We deploy Level 3 & 4 certified fire safety assessors to conduct thorough FRAs.
- **Action Plan Resolution**: Unlike standalone assessors who just leave you with a list of problems, our Hard FM engineering teams immediately act to fix identified faults (e.g., repairing fire door intumescent strips).
- **Digital Logbooks**: All weekly alarm tests and statutory PPM certificates are stored in your secure EntireFM portal, providing instant proof of compliance during a Fire Authority inspection.

**Don't leave fire safety to chance. Book a comprehensive Fire Risk Assessment with EntireFM today.**
    `,
    faq: [
      {
        question: "How often must a Fire Risk Assessment be reviewed?",
        answer: "Best practice dictates an annual review. However, it MUST be reviewed if there are significant changes to the building layout, occupancy size, or if you have had a near-miss fire incident."
      },
      {
        question: "Can I do the Fire Risk Assessment myself?",
        answer: "If your business has fewer than 5 employees and the premises are simple, you can conduct it yourself. For larger or more complex sites, it is highly recommended to use a competent professional."
      }
    ]
  },
  {
    slug: "eicr-manual",
    category: "Guides & Compliance",
    title: "EICR Manual: Fixed Wire Testing for Commercial Estates",
    description: "An actionable manual explaining Electrical Installation Condition Reports (EICR). Discover why testing is legally mandated, what the codes mean, and how to maintain electrical compliance.",
    readTime: "6 min read",
    targetKeywords: ["EICR testing", "fixed wire testing", "electrical compliance commercial", "C1 C2 C3 electrical codes"],
    date: "March 27, 2026",
    author: "EntireFM Technical Division",
    content: `
## What is an EICR?

An **Electrical Installation Condition Report (EICR)**, often referred to as fixed wire testing, is an in-depth inspection and testing of the permanent electrical systems within a building. 

Just like an MOT for your car, an EICR ensures that the electrical wiring, sockets, light fittings, and consumer units are safe to use and do not pose a fire or shock hazard.

### The Legal Framework

The requirement for an EICR is driven by the **Electricity at Work Regulations 1989**, which state that all electrical systems must be maintained to prevent danger. 

For commercial properties, the standard interval for an EICR is **every 5 years**, or upon change of occupancy. For higher-risk environments like industrial sites, testing may be required every 3 years.

### Understanding the EICR Codes

When an engineer completes testing, they will issue observations coded by severity:
- **C1 (Danger Present)**: Risk of injury. Immediate remedial action required. The engineer may need to isolate the dangerous circuit immediately.
- **C2 (Potentially Dangerous)**: Urgent remedial action required. The installation is unsatisfactory and will fail the EICR.
- **C3 (Improvement Recommended)**: Does not comply with current BS 7671 regulations but is not deemed unsafe. The EICR will still 'pass'.
- **FI (Further Investigation Required)**: An issue was identified but could not be fully diagnosed.

**Important:** If your report contains any C1, C2, or FI codes, the overall assessment will be **Unsatisfactory**, meaning your building is not legally compliant until the remedial works are completed.

### The Problem with "Cheap" EICRs

A major issue in the FM industry is the "drive-by EICR." Budget contractors will offer testing at impossibly low rates per circuit. They achieve this by:
1. Conducting minimal visual inspections instead of full physical testing.
2. Issuing vast amounts of C2 failures to generate lucrative remedial repair work.

### The EntireFM Approach to Electrical Compliance

At EntireFM, we believe in transparent, robust electrical testing:
- **Sample Testing vs. 100% Testing**: We work with you to plan testing schedules that minimize operational downtime, often splitting the 100% test over a rolling 5-year programme (20% per year).
- **Honest Reporting**: Our NICEIC-approved engineers provide objective reports. We do not use EICRs as a mechanism to artificially inflate maintenance costs.
- **Remedial Turnaround**: If C1 or C2 faults are found, our engineering teams provide rapid, transparent quotes to return your site to compliance immediately.

**Is your EICR out of date? Contact our technical team today to schedule your fixed wire testing.**
    `,
    faq: [
      {
        question: "Do I have to shut down power to my business during an EICR?",
        answer: "Yes, brief power outages are necessary to safely test circuits. EntireFM frequently schedules EICR testing out of office hours or over weekends to prevent business disruption."
      },
      {
        question: "Is PAT testing included in an EICR?",
        answer: "No. PAT (Portable Appliance Testing) covers items plugged into sockets (kettles, computers). EICR covers the fixed wiring of the building itself."
      }
    ]
  },
  {
    slug: "legionella-guide",
    category: "Guides & Compliance",
    title: "Legionella Control in Commercial Properties: The L8 ACoP Guide",
    description: "A comprehensive guide to managing water hygiene risks in commercial buildings under the L8 Approved Code of Practice. Learn about risk assessments, temperature monitoring, and system descaling.",
    readTime: "7 min read",
    targetKeywords: ["legionella risk assessment", "L8 ACoP", "water hygiene fm", "legionella compliance uk"],
    date: "March 27, 2026",
    author: "EntireFM Compliance Team",
    content: `
## The Invisible Threat in Your Plumbing

Legionnaires' disease is a potentially fatal form of pneumonia caused by the inhalation of small droplets of contaminated water containing Legionella bacteria. 

For facilities managers and landlords in the UK, controlling this risk is not optional. The HSE's **L8 Approved Code of Practice (ACoP)** dictates strict legal duties for managing water systems.

### What Causes Legionella to Grow?

Legionella bacteria exist naturally in water, but they become dangerous when they multiply in man-made water systems. 

The conditions that encourage growth include:
- **Temperature**: The bacteria thrive between 20°C and 45°C. 
- **Stagnation**: Unused pipes ('dead legs') provide a breeding ground.
- **Nutrients**: Sludge, rust, scale, and organic matter in tanks feed the bacteria.

### Your 4 Core Legal Duties

To comply with health and safety law, the 'Responsible Person' for the building must:
1. **Identify and Assess Sources of Risk**: You must have a current Legionella Risk Assessment (LRA). This should be reviewed every 2 years or if the water system changes.
2. **Prepare a Written Scheme of Control**: A documented plan detailing how you will manage the identified risks.
3. **Implement and Manage Precautions**: This is your ongoing PPM schedule (temperature monitoring, flushing, descaling).
4. **Keep and Maintain Accurate Records**: If you are inspected by the HSE and have no records, you are highly liable.

### The Essential Legionella PPM Schedule

A robust maintenance programme from EntireFM includes:
- **Monthly Temperature Checks**: Ensuring cold water is kept cold (below 20°C) and hot water is kept hot (stored above 60°C and distributed above 50°C).
- **Weekly Flushing**: Running rarely used outlets (like disabled toilets or guest showers) to prevent water stagnation.
- **Quarterly Showerhead Cleaning**: Dismantling, descaling, and disinfecting showerheads and hoses.
- **Annual Tank Inspections**: Visual inspection and microbiological sampling of cold water storage tanks.

### How EntireFM Protects Your Estate

Managing water hygiene across a large estate requires military precision. EntireFM removes the administrative burden through our fully managed water hygiene services. 

Our engineers conduct all statutory temperature checks and descaling, instantly uploading digital service records to your compliance portal. If a risk is identified—such as an out-of-spec temperature—our automated system flags it for immediate remedial action.

**Ensure your water systems are 100% compliant and safe. Speak to EntireFM about a Legionella Risk Assessment today.**
    `,
    faq: [
      {
        question: "Do all buildings need a Legionella Risk Assessment?",
        answer: "Yes, if you are an employer or someone in control of premises, you have a duty to understand and manage legionella risks, regardless of the building size."
      },
      {
        question: "What should I do if my building has been unoccupied?",
        answer: "If a building has been empty (and water stagnant), the system must be thoroughly flushed and potentially chlorinated before occupants return to safely clear any bacterial buildup."
      }
    ]
  },
  {
    slug: "audit-framework",
    category: "Guides & Compliance",
    title: "The EntireFM Statutory Audit Framework",
    description: "Discover the exact framework EntireFM uses to assess, record, and verify statutory compliance across complex UK estates.",
    readTime: "5 min read",
    targetKeywords: ["FM audit framework", "statutory compliance audit", "facilities management audit", "building compliance check"],
    date: "March 27, 2026",
    author: "EntireFM Operations Division",
    content: `
## Re-gaining Control of Your Compliance

When EntireFM onboard a new client, we often find a state of 'compliance chaos'. Certificates are scattered across emails, logbooks are missing, and no one is entirely sure if the lift was serviced in June or January.

To resolve this, we implement the **EntireFM Statutory Audit Framework**—a rigorous, 4-stage process designed to eliminate legal risk and establish complete operational transparency.

### Stage 1: The Discovery Sweep
The first step is a physical and digital sweep of the estate. 
- We compile a master asset register of all M&E equipment.
- We hunt down all historical compliance certificates.
- We identify immediate 'Red Status' legal risks (e.g., expired gas safety certificates or overdue fire risk assessments).

### Stage 2: The Gap Analysis
Once we have the data, we compare the current state against the **SFG20 standard** and current UK legislation. We map out EXACTLY what is missing. 

The client receives a definitive visual RAG (Red/Amber/Green) report. For the first time, they have a clear picture of their statutory liability.

### Stage 3: The Remedial Action Plan
We do not just hand over a report; we execute the fixes. 
- Our certified Hard FM teams are deployed to close the compliance gaps. 
- Overdue inspections are booked.
- Broken emergency lighting or out-of-date extinguishers are replaced.

### Stage 4: Continuous Digital Governance
Once the baseline of 100% compliance is reached, we ensure it never drops.
- All assets are loaded into our automated PPM scheduling system.
- As engineers complete future visits, the new digital certificates automatically overwrite the old ones in the client's secure portal.
- Management receives automated monthly KPI reports showing 100% statutory adherence.

### Book Your Audit
Stop losing sleep over unknown compliance risks. The EntireFM Statutory Audit Framework is designed to give Directors and Estate Managers bulletproof peace of mind. 

**Contact our mobilisation team today to arrange a baseline audit of your facility.**
    `,
    faq: [
      {
        question: "How long does a baseline compliance audit take?",
        answer: "Depending on the size of the estate, the initial physical audit and documentation review usually takes between 1 to 3 days."
      }
    ]
  },
  {
    slug: "emergency-lighting-checklist",
    category: "Checklists",
    title: "The Comprehensive Emergency Lighting Testing Checklist",
    description: "Ensure your emergency lighting systems comply with BS 5266. Downloadable guide to monthly flick tests and annual duration testing.",
    readTime: "4 min read",
    targetKeywords: ["emergency lighting testing", "BS 5266", "emergency lighting checklist", "monthly flick test"],
    date: "March 27, 2026",
    author: "EntireFM Technical Division",
    content: `
## Illuminating the Path to Safety

In the event of a total power failure or a fire, emergency lighting is what guides your building's occupants to safety. If it fails to operate, the consequences are disastrous.

Under the **Fire Regulatory Reform Order 2005**, maintaining your emergency lighting to the **BS 5266** standard is a strict legal requirement.

Use this checklist to ensure your maintenance protocols are fully compliant.

### 1. The Monthly 'Flick' Test
This is a short functional test to ensure the luminaires are working, clean, and receiving power.
- [ ] Ensure you have the correct key to operate the emergency lighting test switch.
- [ ] Isolate the mains power to the lighting circuit using the test switch.
- [ ] Walk the floor and visually verify that **every** emergency luminaire and exit sign is illuminated.
- [ ] Check that all luminaires are clean and free from damage.
- [ ] Restore mains power and verify that the charge indicator LED on every unit has turned back on.
- [ ] **Crucial Step**: Record the date, the person testing, and the result in the physical or digital Fire Safety Logbook.
- [ ] Immediately report any failed units to your FM provider for replacement.

### 2. The Annual Full Duration Test
Once a year, the system must be tested to ensure the batteries can hold a charge for the required duration (usually 3 hours).
- [ ] Isolate the mains power to the lighting circuits.
- [ ] Leave the power off for the full rated duration (e.g., 3 hours).
- [ ] Check that all emergency luminaires remain illuminated at a satisfactory level for the entire period.
- [ ] If any light fails or dims significantly before the 3 hours are up, the battery pack or the entire unit must be replaced.
- [ ] Restore the power and ensure all units return to their charging state.
- [ ] Obtain a formal BS 5266 compliance certificate from the electrical engineer conducting the test.

## Common Testing Pitfalls
- **"We do the monthly test, but we don't write it down."** If it isn't recorded in a logbook, in the eyes of the Fire Authority, it didn't happen.
- **Ignoring Failed Units**: A failed emergency light is an immediate safety breach. Remedial replacements must be actioned rapidly.
- **Testing Without Planning**: A 3-hour duration test drains the batteries. If a real power cut happens immediately after the test, the building will have no emergency lighting. Annual tests should be sequenced so adjacent luminaires are not tested simultaneously, or performed out of operating hours.

### How EntireFM Can Help
EntireFM provides complete management of your emergency lighting systems. We handle both the monthly functional tests and the complex annual duration testing, ensuring instant remedial replacements for any failed units.

**Secure your building's safety today with EntireFM's electrical compliance packages.**
    `,
    faq: [
      {
        question: "Can my in-house staff perform the monthly test?",
        answer: "Yes, the monthly functional 'flick' test can be performed by designated in-house staff, provided they are trained on what to look for and how to record the results accurately. The annual test must be performed by a competent electrical contractor."
      }
    ]
  }
];

export function getResourceBySlug(slug: string) {
  return resources.find(r => r.slug === slug);
}
