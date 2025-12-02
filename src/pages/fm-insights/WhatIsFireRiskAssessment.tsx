import { ResourceArticleTemplate } from '@/components/resources/ResourceArticleTemplate';

export default function WhatIsFireRiskAssessment() {
  return (
    <ResourceArticleTemplate
      title="What Is a Fire Risk Assessment? | FRA Requirements Explained"
      metaDescription="A Fire Risk Assessment identifies fire hazards and evaluates risks in your building. Learn about Responsible Person duties, FRA types, and how assessments integrate with maintenance."
      keywords={[
        'fire risk assessment',
        'FRA',
        'fire safety',
        'responsible person',
        'fire safety order',
        'building fire safety',
        'fire compliance',
        'high-rise fire safety'
      ]}
      category="Fire Safety"
      heroTitle="What Is a Fire Risk Assessment?"
      heroDescription="A Fire Risk Assessment (FRA) is a legal requirement for all non-domestic premises. It identifies fire hazards, evaluates who might be harmed, and determines what measures are needed to eliminate or reduce fire risk to an acceptable level."
      publishDate="2025-01-28"
      readTime="10 min"
      introduction={[
        "A Fire Risk Assessment is a structured evaluation of fire hazards in a building, the people who might be at risk, and the adequacy of existing fire safety measures. It forms the cornerstone of fire safety management under UK law.",
        "The Regulatory Reform (Fire Safety) Order 2005 requires a 'suitable and sufficient' fire risk assessment for virtually all non-domestic premises in England and Wales—offices, shops, factories, warehouses, residential common areas, and any workplace.",
        "An FRA is not a one-time exercise. It must be kept under regular review and updated whenever significant changes occur to the building, its use, or the people who occupy it. Failure to maintain an adequate FRA exposes the Responsible Person to enforcement action and, in the worst cases, prosecution."
      ]}
      keyDefinition={{
        term: "Fire Risk Assessment (FRA)",
        definition: "A systematic evaluation of fire hazards in a premises, the people at risk, and the adequacy of fire safety measures—required by law and forming the basis for all fire safety management decisions."
      }}
      sections={[
        {
          title: "What a Fire Risk Assessment Covers",
          content: [
            "A compliant FRA examines every aspect of fire safety in your building:",
            "**Identification of Fire Hazards**: Sources of ignition (electrical equipment, heating systems, smoking areas), sources of fuel (paper, textiles, flammable liquids, waste), and sources of oxygen (air supply, oxidising chemicals).",
            "**People at Risk**: Employees, visitors, contractors, members of the public, and vulnerable persons including those with disabilities, mobility impairments, or who may be sleeping on the premises.",
            "**Existing Fire Safety Measures**: Detection and warning systems (fire alarms, smoke detectors), firefighting equipment (extinguishers, hose reels, sprinklers), means of escape (routes, exits, emergency lighting, signage), compartmentation (fire doors, fire stopping, cavity barriers).",
            "**Management Procedures**: Emergency plans, staff training, maintenance regimes, testing schedules, and record-keeping.",
            "**Risk Evaluation**: Assessment of the likelihood of fire occurring and the potential consequences if it does, leading to a risk rating for the premises.",
            "**Action Plan**: Prioritised recommendations for reducing risk to an acceptable level, with timescales and assigned responsibilities.",
            "The depth and complexity of the assessment should be proportionate to the size, use, and risk profile of the building."
          ]
        },
        {
          title: "The Responsible Person",
          content: [
            "The Regulatory Reform (Fire Safety) Order 2005 places legal duties on the 'Responsible Person':",
            "**Who Is the Responsible Person?** In a workplace, it's the employer. In other premises, it's the person who has control of the premises—typically the owner, landlord, managing agent, or occupier. Where multiple parties have control (e.g., landlord and tenant), duties may be shared.",
            "**Core Duties**: The Responsible Person must carry out a fire risk assessment, implement appropriate fire safety measures, appoint competent persons to assist with fire safety duties, provide information and training to employees, and cooperate with other Responsible Persons where premises are shared.",
            "**Ongoing Obligations**: The FRA must be reviewed regularly, fire safety measures must be maintained, and records must be kept. Where five or more people are employed, the significant findings of the FRA must be recorded in writing.",
            "**Personal Liability**: The Responsible Person carries personal criminal liability for fire safety failures. Following Grenfell, sentencing guidelines have increased significantly—imprisonment is now a realistic outcome for serious breaches.",
            "**Competent Assistance**: While the Responsible Person retains ultimate responsibility, they can appoint competent persons (internal or external fire safety consultants) to carry out the FRA and advise on fire safety matters.",
            "You cannot contract out of responsibility. Even if you appoint an external assessor, you remain accountable for acting on their recommendations."
          ]
        },
        {
          title: "Types of Fire Risk Assessment",
          content: [
            "Fire risk assessments vary in scope depending on what they examine:",
            "**Type 1 — Common Parts Only (Non-Destructive)**: Assesses common areas (corridors, stairwells, lobbies) without physically examining construction elements. Suitable for lower-risk buildings with no concerns about compartmentation. The most basic level.",
            "**Type 2 — Common Parts Only (Destructive)**: Includes sampling of construction elements in common areas—opening up ceiling voids, checking fire stopping around service penetrations, examining cavity barriers. Reveals hidden defects that Type 1 would miss.",
            "**Type 3 — Common Parts and Flats (Non-Destructive)**: Extends assessment into a sample of individual flats or units, examining internal fire safety measures, escape routes from dwellings, and flat entrance doors. Essential where there are concerns about internal compartmentation.",
            "**Type 4 — Common Parts and Flats (Destructive)**: The most comprehensive assessment. Includes destructive examination of construction in both common areas and sampled flats—revealing compartmentation defects, missing fire stopping, and construction that doesn't match drawings.",
            "**Which Type Do You Need?** Post-Grenfell, expectations have increased significantly. For high-rise residential buildings (over 18m), Type 4 assessments are increasingly expected. For other buildings, the choice depends on age, construction type, previous fire history, and existing concerns.",
            "The assessor should advise on the appropriate type based on building characteristics and known risk factors."
          ]
        },
        {
          title: "Common Findings",
          content: [
            "Certain issues appear repeatedly in fire risk assessments:",
            "**Fire Door Defects**: Doors not self-closing properly, damaged or missing intumescent strips and cold smoke seals, incorrect door furniture, doors wedged open, and fire doors replaced with non-compliant alternatives.",
            "**Compartmentation Breaches**: Unsealed service penetrations through fire-rated walls and floors, missing or damaged cavity barriers, historic alterations that have compromised fire separation.",
            "**Detection and Alarm Issues**: Detectors missing or incorrectly sited, systems not tested or maintained, inadequate coverage for building use, outdated systems not meeting current standards.",
            "**Emergency Lighting Failures**: Lamps not working, batteries exhausted, inadequate coverage of escape routes, systems not tested to BS 5266.",
            "**Means of Escape Deficiencies**: Blocked or locked exits, insufficient exit width, inadequate signage, combustible storage in escape routes, excessive travel distances.",
            "**Housekeeping**: Accumulation of combustible materials in plant rooms, stores, and common areas, poor waste management, and inadequate control of ignition sources.",
            "**Training and Documentation**: Staff not trained in fire procedures, fire action notices missing or out of date, no record of fire drills, incomplete maintenance records.",
            "Most findings are readily addressed through maintenance, management, and minor works—but they must be prioritised and actioned."
          ]
        },
        {
          title: "High-Rise Specific Considerations",
          content: [
            "The Fire Safety Act 2021 and Building Safety Act 2022 have created additional requirements for higher-risk buildings:",
            "**Higher-Risk Buildings**: Buildings over 18m (or 7+ storeys) containing at least two residential units are subject to enhanced fire safety requirements, including registration with the Building Safety Regulator.",
            "**External Wall Systems**: Following Grenfell, FRAs must now consider the materials and construction of external wall systems, including cladding, insulation, and cavity barriers. Buildings with combustible cladding require specific risk mitigation.",
            "**Stay Put Strategy Review**: High-rise buildings traditionally rely on 'stay put' strategies where residents remain in their flats unless directly affected by fire. FRAs must confirm whether stay put remains appropriate given the building's compartmentation and external wall construction.",
            "**Evacuation Strategy**: Where stay put is not appropriate, alternative evacuation strategies must be developed—simultaneous evacuation, phased evacuation, or 'stay put unless affected'. These require different alarm systems, signage, and management procedures.",
            "**Personal Emergency Evacuation Plans (PEEPs)**: Information must be gathered about residents who may need assistance evacuating, and plans developed to support them. This requires engagement with building occupants.",
            "**Building Information**: The Responsible Person must provide prescribed information to the fire service, including floor plans, information about external walls, and details of firefighting equipment.",
            "High-rise fire safety is now a specialist discipline. FRAs for these buildings should be conducted by assessors with specific high-rise expertise."
          ]
        },
        {
          title: "How FRAs Integrate with Maintenance",
          content: [
            "Fire risk assessment findings drive maintenance requirements:",
            "**Detection Systems**: FRA recommendations inform fire alarm testing frequencies, detector coverage reviews, and system upgrades. Maintenance must align with BS 5839 requirements.",
            "**Emergency Lighting**: FRAs identify coverage gaps and condition issues. Maintenance schedules must include monthly functional tests and annual 3-hour duration tests per BS 5266.",
            "**Fire Doors**: FRA findings prioritise door repairs and replacements. Ongoing maintenance should include quarterly inspections of fire doors in higher-risk areas.",
            "**Fire Extinguishers**: FRAs verify appropriate provision and condition. Annual servicing and 5-yearly extended servicing must be scheduled.",
            "**Compartmentation**: Where breaches are identified, remedial fire stopping works must be programmed. Ongoing inspections prevent new penetrations going unsealed.",
            "**Dry Risers and Sprinklers**: FRAs confirm adequacy of active fire suppression. Maintenance must include 6-monthly visual inspections and annual flow testing.",
            "**Documentation Loop**: Completed maintenance creates the evidence that FRA recommendations have been actioned. This demonstrates ongoing compliance and informs the next FRA review.",
            "EntireFM integrates FRA action tracking with PPM delivery—ensuring recommendations are systematically addressed, not lost in email chains."
          ]
        }
      ]}
      complianceFramework={{
        laws: [
          "Regulatory Reform (Fire Safety) Order 2005",
          "Fire Safety Act 2021",
          "Building Safety Act 2022",
          "Health and Safety at Work Act 1974",
          "Management of Health and Safety at Work Regulations 1999"
        ],
        standards: [
          "BS 9999 (Fire Safety in Buildings)",
          "BS 9991 (Fire Safety in Residential Buildings)",
          "PAS 79 (Fire Risk Assessment Guidance)",
          "BS 5839 (Fire Detection and Alarm Systems)",
          "BS 5266 (Emergency Lighting)"
        ],
        responsiblePerson: "The employer in a workplace, or the person with control of premises—typically the owner, landlord, managing agent, or occupier. Multiple Responsible Persons may share duties where control is divided.",
        frequency: "FRAs should be reviewed at least annually, and immediately following any significant changes to the building, its use, or occupancy. High-risk buildings may require more frequent review."
      }}
      operationalImpact={[
        "Identifies fire hazards before they cause harm",
        "Prioritises fire safety investment based on actual risk",
        "Provides evidence of compliance for enforcement officers and insurers",
        "Integrates with maintenance planning to ensure recommendations are actioned",
        "Protects the Responsible Person from criminal liability"
      ]}
      risksIfIgnored={[
        "Criminal prosecution of the Responsible Person",
        "Unlimited fines and potential imprisonment (up to 2 years, or life for manslaughter)",
        "Enforcement and prohibition notices closing premises",
        "Insurance policies voided for non-compliance",
        "Civil liability to fire victims and their families",
        "Catastrophic harm to building occupants"
      ]}
      howEntireFMHelps={{
        title: "Request Fire Safety Review",
        points: [
          "Coordination of competent FRA by accredited fire safety consultants",
          "FRA action tracking integrated with maintenance delivery",
          "Fire door surveys and remediation programmes",
          "Emergency lighting testing and certification to BS 5266",
          "Fire alarm maintenance and testing to BS 5839",
          "Compartmentation surveys and fire stopping remedials",
          "Complete documentation for Responsible Person records"
        ]
      }}
      relatedLinks={[
        { title: "Fire Safety Services", url: "/services/fire-safety", type: "service" },
        { title: "Fire Risk Assessment Guide", url: "/resources/fire-risk-guide", type: "operation" },
        { title: "Emergency Lighting Services", url: "/services/emergency-lighting", type: "service" },
        { title: "Who Is the Responsible Person?", url: "/fm-insights/who-is-the-responsible-person", type: "operation" },
        { title: "What Is Statutory Maintenance?", url: "/fm-insights/what-is-statutory-maintenance", type: "operation" },
        { title: "PPM & Asset Lifecycle Governance", url: "/services/ppm", type: "service" },
        { title: "What Is a Compliance Calendar?", url: "/fm-insights/what-is-a-compliance-calendar", type: "operation" }
      ]}
      faqs={[
        {
          question: "How often should a fire risk assessment be reviewed?",
          answer: "At least annually, and immediately following any significant changes—alterations to the building, change of use, change of occupancy, or after a fire or near-miss. High-risk buildings may need more frequent review. The FRA should be treated as a living document, not a one-time exercise."
        },
        {
          question: "Do I need to record the fire risk assessment?",
          answer: "If you employ five or more people, you must record the significant findings in writing. Even below this threshold, recording is strongly recommended—it demonstrates compliance and provides a basis for action tracking. Enforcing authorities will expect to see documented evidence."
        },
        {
          question: "Can I do my own fire risk assessment?",
          answer: "Legally, yes—if you are competent to do so. In practice, competence requires training, knowledge of fire safety legislation and standards, and practical experience. For anything beyond simple, low-risk premises, appointing a qualified fire risk assessor is strongly recommended."
        },
        {
          question: "What qualifications should a fire risk assessor have?",
          answer: "Look for third-party certification from schemes like BAFE SP205, IFE Register of Fire Risk Assessors, or membership of the Institution of Fire Engineers. For high-rise residential buildings, assessors should have specific high-rise experience and relevant CPD on post-Grenfell legislation."
        },
        {
          question: "What happens if the fire service finds my FRA inadequate?",
          answer: "The fire authority can issue an enforcement notice requiring improvements, or a prohibition notice immediately restricting use of the premises. Failure to comply with notices is a criminal offence. In serious cases, prosecution can be brought without prior notice."
        }
      ]}
    />
  );
}
