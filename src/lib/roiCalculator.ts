export interface FMInputs {
  currentFMContractCost: number;
  annualReactiveSpend: number;
  inHouseStaffCost: number;
  managementTimeHours: number;
  managementHourlyRate: number;
  complianceFinesCost: number;
  insuranceClaimsRelatedToFM: number;
  numberOfSites: string;
  averageSiteSizeSqm: string;
  sector: string;
  desiredContractLength: number;
}

export interface YearProjection {
  year: number;
  currentCost: number;
  entireFMCost: number;
  saving: number;
  cumulativeSaving: number;
}

export interface SavingsBreakdown {
  category: string;
  amount: number;
  percentage: number;
}

export interface ROIResults {
  currentVisibleCosts: number;
  currentHiddenCosts: number;
  currentAnnualTrueCost: number;
  entireFMEstimatedAnnual: number;
  projectedReactiveSavings: number;
  projectedManagementTimeSaving: number;
  projectedComplianceSaving: number;
  annualSaving: number;
  fiveYearSaving: number;
  roiPercentage: number;
  paybackMonths: number;
  yearByYear: YearProjection[];
  savingsBreakdown: SavingsBreakdown[];
  managementTimeCost: number;
}

// Benchmark pricing: [base per sqm, min annual, max annual]
const SECTOR_BENCHMARKS: Record<string, [number, number]> = {
  "Retail": [18, 22],
  "Commercial / Office": [14, 18],
  "Residential Property": [10, 14],
  "Industrial / Warehouse": [8, 12],
  "Hotel & Hospitality": [22, 30],
  "Healthcare": [24, 32],
  "Education": [16, 20],
  "Other": [14, 18],
};

const SITE_COUNT_MULTIPLIERS: Record<string, number> = {
  "1": 1.0, "2–5": 0.92, "6–15": 0.87, "16–30": 0.83, "31–50": 0.80, "50+": 0.77,
};

const SIZE_SQM: Record<string, number> = {
  "Under 500 sq m": 350,
  "500–2,000 sq m": 1250,
  "2,000–5,000 sq m": 3500,
  "5,000–15,000 sq m": 10000,
  "15,000–50,000 sq m": 30000,
  "Over 50,000 sq m": 60000,
};

function estimateEntireFMCost(inputs: FMInputs): number {
  const benchmark = SECTOR_BENCHMARKS[inputs.sector] ?? [14, 18];
  const midRate = (benchmark[0] + benchmark[1]) / 2;
  const sqm = SIZE_SQM[inputs.averageSiteSizeSqm] ?? 2000;
  const multiplier = SITE_COUNT_MULTIPLIERS[inputs.numberOfSites] ?? 1.0;
  const siteCount = inputs.numberOfSites === "50+" ? 50 : parseInt(inputs.numberOfSites.split("–")[0]) || 1;
  return Math.round(midRate * sqm * siteCount * multiplier);
}

export function calculateROI(inputs: FMInputs): ROIResults {
  const managementTimeCost = inputs.managementTimeHours * 52 * inputs.managementHourlyRate;

  const currentVisibleCosts = inputs.currentFMContractCost + inputs.annualReactiveSpend + inputs.inHouseStaffCost;
  const currentHiddenCosts = managementTimeCost + inputs.complianceFinesCost + inputs.insuranceClaimsRelatedToFM;
  const currentAnnualTrueCost = currentVisibleCosts + currentHiddenCosts;

  const projectedReactiveSavings = Math.round(inputs.annualReactiveSpend * 0.28);
  const projectedManagementTimeSaving = Math.round(inputs.managementTimeHours * 0.6 * 52 * inputs.managementHourlyRate);
  const projectedComplianceSaving = Math.round((inputs.complianceFinesCost + inputs.insuranceClaimsRelatedToFM) * 0.9);

  const entireFMEstimatedAnnual = estimateEntireFMCost(inputs);
  const annualSaving = Math.max(0, currentAnnualTrueCost - entireFMEstimatedAnnual);

  const roiPercentage = entireFMEstimatedAnnual > 0
    ? Math.round((annualSaving / entireFMEstimatedAnnual) * 100)
    : 0;

  const paybackMonths = annualSaving > 0
    ? Math.round(entireFMEstimatedAnnual / (annualSaving / 12))
    : 0;

  // 5-year projection with 3% inflation on current model
  const yearByYear: YearProjection[] = [];
  let cumulative = 0;
  for (let y = 1; y <= 5; y++) {
    const inflation = Math.pow(1.03, y - 1);
    const currentCost = Math.round(currentAnnualTrueCost * inflation);
    const efmCost = entireFMEstimatedAnnual; // fixed rate
    const saving = Math.max(0, currentCost - efmCost);
    cumulative += saving;
    yearByYear.push({ year: y, currentCost, entireFMCost: efmCost, saving, cumulativeSaving: cumulative });
  }

  const fiveYearSaving = yearByYear.reduce((s, y) => s + y.saving, 0);

  const totalBreakdown = projectedReactiveSavings + projectedManagementTimeSaving + projectedComplianceSaving;
  const savingsBreakdown: SavingsBreakdown[] = totalBreakdown > 0 ? [
    { category: "Reactive Maintenance Reduction", amount: projectedReactiveSavings, percentage: Math.round((projectedReactiveSavings / totalBreakdown) * 100) },
    { category: "Management Time Saved", amount: projectedManagementTimeSaving, percentage: Math.round((projectedManagementTimeSaving / totalBreakdown) * 100) },
    { category: "Compliance Cost Reduction", amount: projectedComplianceSaving, percentage: Math.round((projectedComplianceSaving / totalBreakdown) * 100) },
  ] : [];

  return {
    currentVisibleCosts,
    currentHiddenCosts,
    currentAnnualTrueCost,
    entireFMEstimatedAnnual,
    projectedReactiveSavings,
    projectedManagementTimeSaving,
    projectedComplianceSaving,
    annualSaving,
    fiveYearSaving,
    roiPercentage,
    paybackMonths,
    yearByYear,
    savingsBreakdown,
    managementTimeCost,
  };
}

export function fmt(n: number): string {
  return `£${Math.round(n).toLocaleString("en-GB")}`;
}
