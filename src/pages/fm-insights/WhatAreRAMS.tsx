import { ResourceArticleTemplate } from '@/components/resources/ResourceArticleTemplate';

export default function WhatAreRAMS() {
  return (
    <ResourceArticleTemplate
      title="What Are RAMS? | Risk Assessments & Method Statements Explained"
      metaDescription="RAMS (Risk Assessments and Method Statements) document hazards and safe working procedures before work begins. Learn when RAMS are required and how they support contractor governance."
      keywords={[
        'RAMS',
        'risk assessment',
        'method statement',
        'safe system of work',
        'CDM regulations',
        'contractor management',
        'facilities management safety',
        'permit to work'
      ]}
      category="Health & Safety"
      heroTitle="What Are RAMS?"
      heroDescription="RAMS—Risk Assessments and Method Statements—are essential safety documents that identify hazards, evaluate risks, and describe how work will be carried out safely. They form the foundation of contractor governance and legal compliance in facilities management."
      publishDate="2025-01-30"
      readTime="9 min"
      introduction={[
        "RAMS is an acronym for Risk Assessment and Method Statement—two documents that work together to ensure work is planned and executed safely. The risk assessment identifies what could go wrong; the method statement describes how the work will be done to prevent it.",
        "In facilities management, RAMS are essential for managing contractors, demonstrating duty of care, and meeting legal obligations under health and safety legislation. They apply to everything from routine maintenance to complex construction projects.",
        "RAMS are not bureaucratic box-ticking. Done properly, they force consideration of hazards before work begins, ensure appropriate controls are in place, and provide evidence of a safe system of work. Done badly—or not at all—they leave everyone exposed."
      ]}
      keyDefinition={{
        term: "RAMS (Risk Assessment and Method Statement)",
        definition: "A combined set of safety documents: the Risk Assessment identifies hazards and evaluates risks associated with a task; the Method Statement describes the step-by-step process for carrying out the work safely, including the control measures identified in the risk assessment."
      }}
      sections={[
        {
          title: "Risk Assessment vs Method Statement",
          content: [
            "Though often combined, risk assessments and method statements serve distinct purposes:",
            "**Risk Assessment**: A systematic process to identify hazards (anything with potential to cause harm), evaluate who might be harmed and how, assess the likelihood and severity of harm, and determine what controls are needed to reduce risk to an acceptable level.",
            "A risk assessment answers: *What could go wrong? How bad could it be? What are we doing about it?*",
            "**Method Statement**: A document describing how a task will be carried out step by step, incorporating the control measures identified in the risk assessment. It covers sequence of work, equipment and materials, personnel and competencies, safety measures, and emergency procedures.",
            "A method statement answers: *How exactly will we do this job safely?*",
            "**The Relationship**: The risk assessment comes first—you can't write a safe method of work until you understand the risks. The method statement then translates risk controls into practical working instructions.",
            "**Combined Documents**: In practice, RAMS are often presented as a single document with the risk assessment in one section and the method statement in another. This keeps everything together for review and site reference.",
            "Both documents should be specific to the task and location—generic templates need tailoring to the actual work and site conditions."
          ]
        },
        {
          title: "When RAMS Are Required",
          content: [
            "RAMS are required whenever work involves significant risk:",
            "**Legal Requirements**: The Management of Health and Safety at Work Regulations 1999 require employers to make a 'suitable and sufficient' assessment of risks to employees and others. For construction work, CDM Regulations 2015 require method statements for high-risk activities.",
            "**Client and Site Requirements**: Most commercial premises require contractors to submit RAMS before starting work. This is standard practice in FM and a contractual obligation in most service agreements.",
            "**High-Risk Activities**: Any work involving working at height, confined space entry, hot works, electrical isolation, asbestos disturbance, lifting operations, excavation, or other significant hazards requires detailed RAMS.",
            "**Routine Maintenance**: Even 'routine' tasks like filter changes or lamp replacements may require RAMS if they involve access equipment, isolation, or work in operational areas.",
            "**Reactive Callouts**: Emergency repairs still need risk consideration. While a full RAMS pack may not be practical, engineers should conduct dynamic risk assessments and follow safe systems of work.",
            "**Permit to Work**: For the highest-risk activities, RAMS are supplemented by permit-to-work systems that provide additional authorisation and control at the point of work.",
            "The threshold is significant risk—if someone could be seriously harmed, RAMS are needed."
          ]
        },
        {
          title: "Why RAMS Matter in FM",
          content: [
            "RAMS serve multiple critical functions in facilities management:",
            "**Duty of Care**: Building owners, occupiers, and managing agents have legal duties to ensure work on their premises is carried out safely. Reviewing RAMS before work starts demonstrates due diligence.",
            "**Contractor Competence**: RAMS quality indicates contractor competence. A contractor who submits generic, poorly-considered RAMS is unlikely to deliver safe, professional work.",
            "**Coordination**: In multi-occupancy buildings or active operational environments, RAMS enable coordination between different contractors and with building occupants—preventing clashes and ensuring everyone knows what's happening.",
            "**Insurance Requirements**: Insurers expect evidence of adequate risk management. RAMS provide documentation that work was planned safely, supporting claims defence if incidents occur.",
            "**Incident Investigation**: If something goes wrong, RAMS are examined to determine whether risks were properly assessed and whether the method statement was followed. Their absence or inadequacy becomes evidence of failure.",
            "**Training and Induction**: RAMS form the basis for task briefings and toolbox talks, ensuring everyone involved understands the hazards and controls.",
            "For FM providers, robust RAMS processes are a competitive differentiator and a fundamental requirement of professional service delivery."
          ]
        },
        {
          title: "CDM Obligations",
          content: [
            "The Construction (Design and Management) Regulations 2015 impose specific requirements relevant to RAMS:",
            "**Scope**: CDM applies to all construction work in Great Britain, including maintenance, repair, and refurbishment—not just new builds. Most FM work falls within scope.",
            "**Duty Holders**: CDM defines roles including Client (the building owner/occupier commissioning work), Principal Designer, Principal Contractor, and Contractors. Each has specific duties.",
            "**Client Duties**: Clients must make suitable arrangements for managing projects, including ensuring adequate time, resources, and information for safe planning. This includes reviewing contractor RAMS.",
            "**Contractor Duties**: Contractors must plan, manage, and monitor their work to ensure health and safety. They must not start work unless satisfied that appropriate RAMS are in place.",
            "**Construction Phase Plan**: For projects with more than one contractor, a written construction phase plan is required before work begins. RAMS form a key part of this plan.",
            "**Notification**: Projects lasting more than 30 working days with more than 20 workers, or exceeding 500 person-days, must be notified to HSE.",
            "**Competence**: All duty holders must have the skills, knowledge, experience, and organisational capability to fulfil their roles safely.",
            "CDM compliance is not optional. Failure to meet duties can result in HSE enforcement action and prosecution."
          ]
        },
        {
          title: "What Good RAMS Look Like",
          content: [
            "Effective RAMS share common characteristics:",
            "**Task-Specific**: Generic RAMS are inadequate. Documents should describe the actual work, at the actual location, with actual hazards considered.",
            "**Site-Specific**: RAMS should reflect site conditions—access routes, nearby activities, building-specific hazards, and any client-imposed restrictions.",
            "**Proportionate**: RAMS should be proportionate to risk. A simple task needs a concise assessment; complex high-risk work needs comprehensive documentation.",
            "**Clear and Usable**: RAMS should be understandable by the people doing the work. Technical jargon, excessive length, and poor formatting undermine usability.",
            "**Risk Assessment Content**: Hazard identification, who might be harmed, existing controls, risk rating (likelihood × severity), additional controls required, residual risk, and review triggers.",
            "**Method Statement Content**: Task description, sequence of operations, plant and equipment, materials, personnel and competencies, PPE requirements, control measures, emergency procedures, and environmental considerations.",
            "**Authorisation**: RAMS should be prepared by a competent person, reviewed by a manager, and accepted by the client before work begins.",
            "**Communication**: RAMS must be communicated to everyone involved in the work through briefings, toolbox talks, or site inductions."
          ]
        },
        {
          title: "EntireFM Contractor Governance",
          content: [
            "EntireFM operates rigorous RAMS processes across all service delivery:",
            "**Pre-Qualification**: Supply chain partners are assessed for competence, insurance, accreditations, and safety management systems before appointment. Only approved contractors work on client sites.",
            "**RAMS Review**: All RAMS are reviewed before work begins. Generic submissions are rejected; task-specific, site-specific documents are required.",
            "**Permit Integration**: High-risk activities operate under permit-to-work systems. RAMS form part of the permit pack, reviewed and authorised at point of work.",
            "**Engineer Competence**: Our directly-employed engineers hold relevant qualifications and complete ongoing safety training. Competence is verified, not assumed.",
            "**Toolbox Talks**: Regular safety briefings ensure engineers understand current risks and controls. Lessons from incidents and near-misses are shared across teams.",
            "**Site Inductions**: Engineers complete client site inductions before starting work, understanding site-specific hazards and procedures.",
            "**Audit and Monitoring**: RAMS compliance is audited through site inspections and documentation reviews. Non-compliance triggers corrective action.",
            "**Incident Reporting**: Near-misses and incidents are reported, investigated, and learned from. RAMS processes are updated based on findings.",
            "Safety isn't a department—it's embedded in how we plan and deliver every task."
          ]
        }
      ]}
      complianceFramework={{
        laws: [
          "Health and Safety at Work Act 1974",
          "Management of Health and Safety at Work Regulations 1999",
          "Construction (Design and Management) Regulations 2015",
          "Provision and Use of Work Equipment Regulations 1998",
          "Work at Height Regulations 2005",
          "Control of Substances Hazardous to Health Regulations 2002"
        ],
        standards: [
          "HSE Guidance HSG65 (Managing for Health and Safety)",
          "PAS 91 (Construction Prequalification Questionnaires)",
          "ISO 45001 (Occupational Health and Safety Management)",
          "BS OHSAS 18001 (Occupational Health and Safety)",
          "CHAS, SafeContractor, Constructionline Standards"
        ],
        responsiblePerson: "Employers have primary duty for employees. Clients commissioning work must ensure suitable arrangements. Contractors must plan and manage their work safely. All duty holders under CDM have specific responsibilities.",
        frequency: "RAMS must be prepared before work begins and reviewed when circumstances change—different location, different hazards, incident occurs, or controls prove inadequate."
      }}
      operationalImpact={[
        "Ensures hazards are identified and controlled before work begins",
        "Demonstrates duty of care and due diligence",
        "Enables effective contractor oversight and governance",
        "Provides documentation for insurance and legal compliance",
        "Reduces incidents through systematic risk management"
      ]}
      risksIfIgnored={[
        "Serious injuries or fatalities from uncontrolled hazards",
        "HSE prosecution for failure to assess risks and plan work safely",
        "CDM enforcement action against clients and contractors",
        "Insurance claims rejected due to inadequate risk management",
        "Civil liability for harm caused by unsafe working practices",
        "Reputational damage from safety failures"
      ]}
      howEntireFMHelps={{
        title: "Download RAMS Template",
        points: [
          "Standardised RAMS templates aligned to FM work activities",
          "Pre-qualification and ongoing assessment of supply chain partners",
          "RAMS review and approval integrated with job dispatch",
          "Permit-to-work systems for high-risk activities",
          "Competent, trained engineers with verified qualifications",
          "Audit and monitoring of RAMS compliance across all works"
        ]
      }}
      relatedLinks={[
        { title: "Health & Safety", url: "/health-safety", type: "service" },
        { title: "What Is Lock-Out Tag-Out?", url: "/fm-insights/what-is-lock-out-tag-out", type: "operation" },
        { title: "What Is Statutory Maintenance?", url: "/fm-insights/what-is-statutory-maintenance", type: "operation" },
        { title: "PPM & Asset Lifecycle Governance", url: "/services/ppm", type: "service" },
        { title: "Hard Services FM", url: "/services/hard-services-fm", type: "service" },
        { title: "Supplier Network", url: "/suppliers", type: "service" },
        { title: "What Is a Fire Risk Assessment?", url: "/fm-insights/what-is-a-fire-risk-assessment", type: "operation" }
      ]}
      faqs={[
        {
          question: "What's the difference between RAMS and a permit to work?",
          answer: "RAMS document hazards and safe working methods in advance. A permit to work is an additional control for high-risk activities, providing formal authorisation at the point of work. Permits typically reference RAMS but add site-specific checks, isolation verification, and formal sign-off before and after the task."
        },
        {
          question: "Who should prepare RAMS?",
          answer: "RAMS should be prepared by someone competent—with knowledge of the task, the hazards, and how to control them. This is typically the contractor carrying out the work or their safety advisor. Generic RAMS from a central library are a starting point but must be tailored to the specific task and site."
        },
        {
          question: "How detailed should a method statement be?",
          answer: "Detailed enough that someone unfamiliar with the task could understand how it will be done safely. For simple tasks, a page may suffice. For complex work, multiple pages with diagrams, sequences, and hold points may be needed. Proportionality is key—excessive detail obscures critical information."
        },
        {
          question: "Can I use generic RAMS templates?",
          answer: "Templates are useful starting points but must be adapted for each task and location. A generic 'working at height' RAMS doesn't address whether you're using a ladder, scaffold, or MEWP, or whether you're working over a public area, near live services, or in adverse weather. Specificity is what makes RAMS effective."
        },
        {
          question: "How long should RAMS be retained?",
          answer: "There's no statutory retention period, but best practice is to retain RAMS for at least 6 years (the limitation period for personal injury claims), and potentially 15 years for work involving asbestos or other long-latency health hazards. Digital storage makes indefinite retention practical."
        }
      ]}
    />
  );
}
