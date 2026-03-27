import { PPMEstimate } from "./toolTypes";

const SECTOR_RATES: Record<string, [number, number]> = {
  "Retail": [12, 16],
  "Commercial / Office": [14, 18],
  "Residential Property": [8, 12],
  "Industrial / Warehouse": [6, 10],
  "Hotel & Hospitality": [18, 24],
  "Healthcare": [22, 28],
  "Education": [14, 18],
  "Other": [12, 16],
};

const SIZE_SQM: Record<string, number> = {
  "Under 500 sq m": 300,
  "500–2,000 sq m": 1250,
  "2,000–5,000 sq m": 3500,
  "5,000–15,000 sq m": 10000,
  "15,000–50,000 sq m": 32500,
  "Over 50,000 sq m": 60000,
};

const SITE_MULTIPLIERS: Record<string, number> = {
  "1": 1.0, 
  "2–5": 0.95, 
  "6–15": 0.90, 
  "16–30": 0.85, 
  "31–50": 0.80, 
  "50+": 0.75,
};

export function calculateLiveEstimate(profile: Record<string, string | string[]>): PPMEstimate & { progress: number } {
  const sector = (profile.sector as string) || "Commercial / Office";
  const size = (profile.size as string) || "500–2,000 sq m";
  const sites = (profile.siteCount as string) || "1";
  const services = (profile.services as string[]) || [];

  const baseRate = SECTOR_RATES[sector] || [12, 16];
  const sqm = SIZE_SQM[size] || 1250;
  
  // Calculate site count integer for multiplication
  const siteCountInt = sites === "50+" ? 50 : parseInt(sites.split("–")[0]) || 1;
  const multiSiteDiscount = SITE_MULTIPLIERS[sites] || 1.0;

  // Each added service increases the base rate slightly
  // We assume baseRate covers basic statutory. The more services, the higher the multiplier.
  // Standard array length is 10. If 0 picked, base multi is 0.5. If all 10 picked, multi is 1.5.
  const serviceMultiplier = services.length > 0 ? 0.5 + (services.length / 10) : 0.8;

  let annualLow = Math.round(baseRate[0] * sqm * siteCountInt * multiSiteDiscount * serviceMultiplier);
  let annualHigh = Math.round(baseRate[1] * sqm * siteCountInt * multiSiteDiscount * serviceMultiplier);

  // If no inputs are actually selected yet, return 0 to prevent a massive number on load
  const hasStarted = Object.keys(profile).length > 0;
  if (!hasStarted) {
    annualLow = 0;
    annualHigh = 0;
  }

  // Calculate progress %
  const totalQuestions = 7;
  let answered = 0;
  if (profile.sector) answered++;
  if (profile.buildingType) answered++;
  if (profile.siteCount) answered++;
  if (profile.size) answered++;
  if (profile.reactiveSpend) answered++;
  if (profile.services && profile.services.length > 0) answered++;
  if (profile.compliance) answered++;

  const progress = Math.round((answered / totalQuestions) * 100);

  return {
    annualLow,
    annualHigh,
    monthlyLow: Math.round(annualLow / 12),
    monthlyHigh: Math.round(annualHigh / 12),
    progress,
    includedServices: services.length > 0 ? services : ["Basic compliance maintenance"],
    assumptions: [
      `Based on UK average benchmarking for the ${sector} sector.`,
      `Assumes a ${size} average site profile.`,
      `Incorporates a ${Math.round((1 - multiSiteDiscount) * 100)}% multi-site efficiency discount.`
    ],
    savingsEstimate: "Expected 15–30% reactive spend reduction.",
    nextStep: "Schedule a formal site survey to lock in a hard-cost commercial proposal based on an accurate asset register."
  };
}
