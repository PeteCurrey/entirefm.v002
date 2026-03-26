export type QuestionType = "single" | "multi";

export interface Question {
  id: string;
  key: string;
  text: string;
  type: QuestionType;
  maxSelect?: number;
  options: string[];
}

export const complianceQuestions: Question[] = [
  {
    id: "q1",
    key: "buildingType",
    text: "What type of building are you responsible for?",
    type: "single",
    options: [
      "Office / Commercial",
      "Residential Block",
      "Retail Unit or Estate",
      "Industrial / Warehouse",
      "Hotel or Hospitality",
      "Healthcare Facility",
      "Educational Building",
      "Mixed Use",
      "Other",
    ],
  },
  {
    id: "q2",
    key: "sector",
    text: "What sector does your organisation operate in?",
    type: "single",
    options: [
      "Private Commercial",
      "Residential Property Management",
      "Retail",
      "Industrial & Logistics",
      "Hospitality",
      "Healthcare",
      "Education",
      "Public Sector",
      "Other",
    ],
  },
  {
    id: "q3",
    key: "size",
    text: "How large is your building or estate?",
    type: "single",
    options: [
      "Under 500 sq m",
      "500–2,000 sq m",
      "2,000–10,000 sq m",
      "10,000–50,000 sq m",
      "Over 50,000 sq m",
      "Multiple sites",
    ],
  },
  {
    id: "q4",
    key: "floors",
    text: "How many floors does your building have?",
    type: "single",
    options: [
      "1–2 floors",
      "3–5 floors",
      "6–10 floors",
      "10+ floors",
      "Varies across sites",
    ],
  },
  {
    id: "q5",
    key: "currentFM",
    text: "How is your facilities management currently handled?",
    type: "single",
    options: [
      "We have an in-house FM team",
      "We use a single FM contractor",
      "We use multiple FM contractors",
      "We manage it ourselves (no dedicated FM)",
      "We're reviewing our FM arrangement",
    ],
  },
  {
    id: "q6",
    key: "lastPPM",
    text: "When was your last full PPM review or compliance audit?",
    type: "single",
    options: [
      "Within the last 6 months",
      "6–12 months ago",
      "1–2 years ago",
      "Over 2 years ago",
      "Never / Not sure",
    ],
  },
  {
    id: "q7",
    key: "gaps",
    text: "Which of these compliance areas are you least confident about?",
    type: "multi",
    maxSelect: 3,
    options: [
      "Fire safety systems",
      "Electrical compliance (EICR / PAT)",
      "HVAC & ventilation servicing",
      "Water safety (Legionella)",
      "Emergency lighting",
      "Building fabric & structural",
      "Security systems",
      "Grounds & external areas",
      "None — I'm confident across all areas",
    ],
  },
  {
    id: "q8",
    key: "concern",
    text: "What is your biggest FM concern right now?",
    type: "single",
    options: [
      "Staying legally compliant",
      "Reducing reactive maintenance costs",
      "Finding a reliable FM provider",
      "Managing a multi-site estate",
      "Preparing for an audit or inspection",
      "Improving building performance",
      "I'm not sure where to start",
    ],
  },
];
