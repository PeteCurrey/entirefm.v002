export interface FMHealthCheckQuestion {
  id: string;
  category: string;
  question: string;
  yesLabel: string;
  noLabel: string;
  unsureLabel: string;
  scoring: { yes: number; no: number; unsure: number };
  explanation: string;
  risk: "high" | "medium" | "low";
}

export const fmHealthCheckQuestions: FMHealthCheckQuestion[] = [
  {
    id: "q1",
    category: "Fire Safety",
    question: "Has your fire alarm system been tested and serviced in the last 6 months?",
    yesLabel: "Yes — serviced within 6 months",
    noLabel: "No — overdue for servicing",
    unsureLabel: "Not sure when it was last done",
    scoring: { yes: 2, no: 0, unsure: 1 },
    explanation: "Fire alarm systems require quarterly testing under BS 5839. Failure to maintain service records can invalidate insurance and result in enforcement action.",
    risk: "high",
  },
  {
    id: "q2",
    category: "Fire Safety",
    question: "Has a fire risk assessment been carried out or reviewed in the last 12 months?",
    yesLabel: "Yes — reviewed within 12 months",
    noLabel: "No — not reviewed recently",
    unsureLabel: "Unsure of the last review date",
    scoring: { yes: 2, no: 0, unsure: 1 },
    explanation: "Under the Regulatory Reform (Fire Safety) Order 2005, responsible persons must ensure a suitable and sufficient fire risk assessment is in place and regularly reviewed.",
    risk: "high",
  },
  {
    id: "q3",
    category: "Electrical",
    question: "Has your building had a fixed wire test (EICR) carried out within the recommended period?",
    yesLabel: "Yes — EICR is current",
    noLabel: "No — EICR is overdue",
    unsureLabel: "Not sure of the EICR status",
    scoring: { yes: 2, no: 0, unsure: 1 },
    explanation: "EICRs are required every 5 years for commercial premises and every 3–5 years for HMOs. An out-of-date EICR is a compliance and insurance risk.",
    risk: "high",
  },
  {
    id: "q4",
    category: "Electrical",
    question: "Is emergency lighting tested monthly and serviced annually?",
    yesLabel: "Yes — tested on schedule",
    noLabel: "No — not tested regularly",
    unsureLabel: "Not sure of the testing schedule",
    scoring: { yes: 2, no: 0, unsure: 1 },
    explanation: "Emergency lighting requires monthly functional tests and annual full duration tests under BS 5266. This is a statutory requirement.",
    risk: "high",
  },
  {
    id: "q5",
    category: "Water Safety",
    question: "Has a Legionella risk assessment been completed for your water systems?",
    yesLabel: "Yes — risk assessment in place",
    noLabel: "No — assessment not completed",
    unsureLabel: "Not sure",
    scoring: { yes: 2, no: 0, unsure: 1 },
    explanation: "The L8 ACoP requires all responsible persons to assess the risk of Legionella in water systems. This is a legal duty under the Health and Safety at Work Act 1974.",
    risk: "high",
  },
  {
    id: "q6",
    category: "HVAC",
    question: "Are your HVAC systems serviced on a planned, scheduled basis?",
    yesLabel: "Yes — on a PPM schedule",
    noLabel: "No — only when faults occur",
    unsureLabel: "Not sure of the servicing schedule",
    scoring: { yes: 2, no: 0, unsure: 1 },
    explanation: "Unserviced HVAC systems degrade energy efficiency, shorten asset lifespan, and can create air quality compliance issues. SFG20 recommends bi-annual minimum servicing for most commercial HVAC systems.",
    risk: "medium",
  },
  {
    id: "q7",
    category: "PPM",
    question: "Do you have a documented PPM schedule covering your building's key assets?",
    yesLabel: "Yes — documented and followed",
    noLabel: "No — no formal PPM schedule",
    unsureLabel: "Partially — some assets only",
    scoring: { yes: 2, no: 0, unsure: 1 },
    explanation: "A written PPM schedule is the foundation of compliance management. Without one, statutory maintenance is at risk of being missed — and there is no audit trail if an incident occurs.",
    risk: "high",
  },
  {
    id: "q8",
    category: "Documentation",
    question: "Can you access compliance service records for your building on demand?",
    yesLabel: "Yes — records are easily accessible",
    noLabel: "No — records are poor or missing",
    unsureLabel: "Some records exist but not all",
    scoring: { yes: 2, no: 0, unsure: 1 },
    explanation: "In the event of an insurance claim, HSE inspection, or legal dispute, you must be able to produce evidence of maintenance and compliance. Poor record-keeping is one of the most common FM failures.",
    risk: "medium",
  },
  {
    id: "q9",
    category: "Reactive",
    question: "Do you have a clear process for reporting and tracking reactive maintenance jobs?",
    yesLabel: "Yes — using a helpdesk or CAFM system",
    noLabel: "No — ad hoc reporting only",
    unsureLabel: "Partially — informal processes in place",
    scoring: { yes: 2, no: 0, unsure: 1 },
    explanation: "Without a tracked reactive process, repeat failures go unnoticed, costs spiral, and assets degrade faster. A good FM helpdesk solves this entirely.",
    risk: "medium",
  },
  {
    id: "q10",
    category: "Cleaning",
    question: "Are communal and high-traffic areas cleaned to a documented schedule?",
    yesLabel: "Yes — to a written cleaning spec",
    noLabel: "No — cleaned on an ad hoc basis",
    unsureLabel: "Not sure if a spec exists",
    scoring: { yes: 2, no: 0, unsure: 1 },
    explanation: "Cleaning standards directly affect occupant health, fire escape compliance, and asset condition. A documented cleaning specification protects you in the event of a health and safety incident.",
    risk: "low",
  },
  {
    id: "q11",
    category: "Grounds",
    question: "Is your external grounds and hardstanding maintained year-round including winter gritting?",
    yesLabel: "Yes — year-round maintenance contract",
    noLabel: "No — reactive or seasonal only",
    unsureLabel: "Partially — some provision in place",
    scoring: { yes: 2, no: 0, unsure: 1 },
    explanation: "Slip and trip liability from untreated walkways is one of the most common causes of FM-related legal claims in the UK. A grounds maintenance contract with winter provision is essential risk management.",
    risk: "low",
  },
  {
    id: "q12",
    category: "Provider",
    question: "Do you have a single point of accountability for all your FM services?",
    yesLabel: "Yes — single integrated FM provider",
    noLabel: "No — multiple contractors, no single lead",
    unsureLabel: "Partially — a lead contractor but gaps exist",
    scoring: { yes: 2, no: 0, unsure: 1 },
    explanation: "Multi-supplier FM creates accountability gaps — when something goes wrong, contractors blame each other. A single integrated FM provider eliminates this risk entirely.",
    risk: "medium",
  },
];

export const scoreBrackets = [
  {
    min: 20,
    max: 24,
    label: "Strong Compliance Position",
    colour: "green",
    summary: "Your building demonstrates a strong approach to FM compliance. Keep maintaining your current standards and ensure records remain up to date.",
  },
  {
    min: 14,
    max: 19,
    label: "Some Gaps to Address",
    colour: "amber",
    summary: "You have a reasonable compliance foundation, but there are gaps that need attention. Prioritise any high-risk areas to avoid enforcement action.",
  },
  {
    min: 8,
    max: 13,
    label: "Compliance Action Needed",
    colour: "orange",
    summary: "Your building has significant compliance gaps. You should act now to address statutory requirements — particularly in fire safety and electrical testing.",
  },
  {
    min: 0,
    max: 7,
    label: "Significant Compliance Risk",
    colour: "red",
    summary: "Your building faces serious compliance risks across multiple areas. Immediate action is required to meet statutory obligations and protect against legal liability.",
  },
] as const;

export function getScoreBracket(score: number) {
  return scoreBrackets.find((b) => score >= b.min && score <= b.max) ?? scoreBrackets[scoreBrackets.length - 1];
}
