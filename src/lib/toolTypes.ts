export interface ComplianceObligation {
  area: string;
  status: "Required" | "Recommended" | "Review Needed";
  frequency: string;
  detail: string;
  urgency: "Immediate" | "Within 3 months" | "Within 12 months";
}

export interface ComplianceReport {
  overallRisk: "Low" | "Medium" | "High";
  summary: string;
  obligations: ComplianceObligation[];
  topRisks: string[];
  recommendation: string;
}

export interface PPMEstimate {
  annualLow: number;
  annualHigh: number;
  monthlyLow: number;
  monthlyHigh: number;
  includedServices: string[];
  assumptions: string[];
  savingsEstimate: string;
  nextStep: string;
}

export interface TenderBriefSection {
  title: string;
  content: string;
}

export interface TenderBrief {
  documentTitle: string;
  executiveSummary: string;
  sections: TenderBriefSection[];
  kpis: string[];
  slaRequirements: string[];
  complianceRequirements: string[];
  evaluationCriteria: string[];
}

export interface ROICalculation {
  currentAnnualCost: number;
  projectedAnnualCost: number;
  annualSavings: number;
  fiveYearSavings: number;
  roiPercentage: number;
  paybackMonths: number;
  efficiencyGains: string[];
  riskReduction: string;
  recommendation: string;
}
