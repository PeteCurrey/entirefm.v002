export type DataPoint = {
  label: string;
  value: number | string;
  unit: string;
  trend: "up" | "down" | "stable";
  trendValue: string;
  source: string;
  updatedDate: string;
  context: string;
};

export type ChartDataSet = {
  id: string;
  title: string;
  description: string;
  type: "bar" | "line" | "donut";
  source: string;
  updatedDate: string;
  data: { label: string; value: number }[];
};

export type SeasonalAlert = {
  month: number; // 0-indexed (0=Jan)
  title: string;
  description: string;
  urgency: "high" | "medium" | "low";
  action: string;
  actionUrl: string;
};

export const headlineMetrics: DataPoint[] = [
  {
    label: "UK FM Market Value",
    value: 70.4,
    unit: "£bn",
    trend: "up",
    trendValue: "+1.65% CAGR",
    source: "Mordor Intelligence 2025",
    updatedDate: "Q1 2025",
    context: "Projected to reach £76.4bn by 2030"
  },
  {
    label: "FM Outsourcing Rate — Commercial Sector",
    value: 71,
    unit: "%",
    trend: "up",
    trendValue: "+4% vs 2023",
    source: "BIFM Industry Survey 2024",
    updatedDate: "Q4 2024",
    context: "Up from 67% in 2023 as businesses focus on core operations"
  },
  {
    label: "Average Reactive Cost Reduction with PPM",
    value: 28,
    unit: "%",
    trend: "stable",
    trendValue: "Industry benchmark",
    source: "EntireFM Contract Data",
    updatedDate: "Q1 2025",
    context: "Range of 12–34% depending on sector and estate complexity"
  },
  {
    label: "HSE FM-Related Enforcement Notices (12 months)",
    value: 1847,
    unit: "",
    trend: "down",
    trendValue: "-3% vs 2023",
    source: "HSE Enforcement Database 2024",
    updatedDate: "Q1 2025",
    context: "Fire safety and electrical compliance remain most common"
  },
  {
    label: "Average FM Contract Length — UK Commercial",
    value: 3.2,
    unit: "years",
    trend: "up",
    trendValue: "+0.4 years vs 2022",
    source: "i-FM Market Analysis",
    updatedDate: "Q3 2024",
    context: "Longer contracts driven by TFM model adoption"
  },
  {
    label: "Buildings with at Least One Compliance Gap",
    value: 67,
    unit: "%",
    trend: "down",
    trendValue: "-2% vs 2023",
    source: "RICS Building Safety Survey 2024",
    updatedDate: "Q4 2024",
    context: "Electrical and fire safety most commonly missed"
  }
];

export const chartDataSets: ChartDataSet[] = [
  {
    id: "outsourcing-by-sector",
    title: "FM Outsourcing Rate by Sector (2025)",
    description: "Percentage of facilities management tasks outsourced to external providers across key UK industries.",
    type: "bar",
    source: "EntireFM / BIFM Industry Data",
    updatedDate: "Jan 2025",
    data: [
      { label: "Hotel", value: 88 },
      { label: "Healthcare", value: 82 },
      { label: "Retail", value: 76 },
      { label: "Commercial", value: 71 },
      { label: "Industrial", value: 64 },
      { label: "Education", value: 61 },
      { label: "Residential", value: 54 },
      { label: "Public Sector", value: 79 }
    ]
  },
  {
    id: "compliance-failures",
    title: "Most Common FM Compliance Failures (2024)",
    description: "Distribution of HSE enforcement notices across statutory maintenance categories in commercial buildings.",
    type: "bar",
    source: "HSE Enforcement Database Analysis",
    updatedDate: "Dec 2024",
    data: [
      { label: "Fire Safety", value: 34 },
      { label: "Electrical", value: 28 },
      { label: "Water Safety", value: 16 },
      { label: "HVAC", value: 11 },
      { label: "Structural", value: 7 },
      { label: "Other", value: 4 }
    ]
  },
  {
    id: "reactive-vs-ppm-cost",
    title: "Reactive vs PPM Cost Comparison by Sector (£ index)",
    description: "Comparison of total maintenance spend where 100 is the baseline PPM cost. Higher values indicate extreme reactive cost penalties.",
    type: "bar",
    source: "EntireFM Contract Benchmarks",
    updatedDate: "Jan 2025",
    data: [
      { label: "Retail", value: 134 },
      { label: "Commercial", value: 128 },
      { label: "Industrial", value: 142 },
      { label: "Hotel", value: 156 },
      { label: "Healthcare", value: 148 },
      { label: "Residential", value: 119 }
    ]
  },
  {
    id: "market-growth",
    title: "UK FM Market Size 2021–2030 (£bn projected)",
    description: "Historical and projected market valuation of the UK facilities management industry.",
    type: "line",
    source: "Mordor Intelligence / EntireFM Analysis",
    updatedDate: "Jan 2025",
    data: [
      { label: "2021", value: 64.2 },
      { label: "2022", value: 65.8 },
      { label: "2023", value: 67.5 },
      { label: "2024", value: 68.9 },
      { label: "2025", value: 70.4 },
      { label: "2026", value: 71.6 },
      { label: "2027", value: 72.8 },
      { label: "2028", value: 74.0 },
      { label: "2029", value: 75.2 },
      { label: "2030", value: 76.4 }
    ]
  }
];

export const seasonalAlerts: SeasonalAlert[] = [
  {
    month: 8, // September
    title: "September — Winter Gritting Review",
    description: "October marks the start of the UK winter gritting season. Review your gritting contract now — most providers are fully booked by mid-October.",
    urgency: "high",
    action: "Review Gritting Contract",
    actionUrl: "/services/soft-fm"
  },
  {
    month: 9, // October
    title: "October — HVAC Winter Preparation",
    description: "Heating systems that have sat dormant since spring need servicing before first use. Book boiler services now to avoid the winter rush.",
    urgency: "high",
    action: "Book HVAC Service",
    actionUrl: "/services/ppm"
  },
  {
    month: 2, // March
    title: "March — Annual Fire Risk Assessment Review Window",
    description: "Q1 is the optimal time to commission your annual fire risk assessment review before the busy spring period.",
    urgency: "medium",
    action: "Book Fire Safety Review",
    actionUrl: "/tools/compliance-checker"
  },
  {
    month: 3, // April
    title: "April — Grounds Maintenance Season Starts",
    description: "Spring is the start of the active grounds season. Ensure your grounds maintenance contract is active and schedules are confirmed.",
    urgency: "low",
    action: "Review Grounds Contract",
    actionUrl: "/services/soft-fm"
  },
  {
    month: 5, // June
    title: "June — Cooling System Pre-Season Check",
    description: "Before the summer heat peaks, HVAC cooling systems should be serviced and tested. Don't wait for a failure in August.",
    urgency: "medium",
    action: "Book Cooling Service",
    actionUrl: "/services/ppm"
  },
  {
    month: 0, // January
    title: "January — Annual Compliance Audit Window",
    description: "January is the ideal time for a full annual compliance audit — reviewing all statutory maintenance records from the prior year before any inspections.",
    urgency: "high",
    action: "Book Compliance Audit",
    actionUrl: "/tools/compliance-checker"
  }
];
