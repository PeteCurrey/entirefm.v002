export type PartnerType = {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  benefits: string[];
  whoItSuitsFor: string[];
  revenueModel: string;
  onboardingSteps: {
    step: number;
    title: string;
    description: string;
  }[];
  faq: { q: string; a: string }[];
  icon: string;
};

export type FeaturedPartner = {
  id: string;
  name: string;
  type: string;
  location: string;
  description: string;
  website: string;
  logoPlaceholder: boolean;
};

export const partnerTypes: PartnerType[] = [
  {
    id: "prop-mgnt",
    slug: "property-management",
    title: "Property Management Agents",
    subtitle: "Add FM to your service offering without the overhead",
    description: "If you manage residential or commercial blocks, your clients need FM services. Partner with EntireFM and refer with confidence — we'll handle everything, and you earn a referral fee on every contract placed.",
    icon: "Building2",
    benefits: [
      "Earn a referral fee on every FM contract we place via your introduction",
      "Offer your clients a trusted, named FM partner — not an unknown contractor",
      "Co-branded marketing materials for your client communications",
      "Dedicated account manager for all your referrals",
      "Quarterly partner performance reports showing contract values and earnings",
      "Priority onboarding for your clients — 28-day mobilisation guarantee"
    ],
    whoItSuitsFor: [
      "Residential block management companies",
      "Commercial property managing agents",
      "Mixed-use estate managers",
      "BTR (build-to-rent) operators"
    ],
    revenueModel: "Referral fee paid on contract signature — typically 5-8% of first year contract value. Ongoing commission available on multi-year contracts.",
    onboardingSteps: [
      { step: 1, title: "Apply Online", description: "Complete our partner application. We review all applications within 48 hours." },
      { step: 2, title: "Partnership Agreement", description: "We'll issue a simple partnership agreement — one page, plain English." },
      { step: 3, title: "Introduction & Training", description: "A 30-minute call with your dedicated EntireFM partner manager — we'll cover everything you need to make referrals with confidence." },
      { step: 4, title: "Start Referring", description: "You'll receive a partner referral link and co-branded materials. Start earning immediately." }
    ],
    faq: [
      { q: "Is there a cost to join the partner network?", a: "No, there are zero upfront or ongoing costs to be an EntireFM partner. We pay you." },
      { q: "How are referral fees tracked?", a: "Every partner is assigned a unique reference code. When your client signs a contract, our CRM automatically attributes the referral to your account." }
    ]
  },
  {
    id: "surv-cons",
    slug: "commercial-surveyors",
    title: "Commercial Surveyors & Consultancies",
    subtitle: "Refer your clients to a trusted FM partner — and earn a fee",
    description: "Commercial surveyors, building consultancies, and RICS professionals regularly advise clients on FM. Partner with EntireFM and turn that advice into revenue — with complete confidence in the service your clients receive.",
    icon: "Compass",
    benefits: [
      "Named FM partner for all client referrals",
      "Referral fee on contract placement",
      "Technical briefings from EntireFM — stay current on FM compliance and best practice",
      "Joint case study opportunities",
      "Co-branded compliance guides for your client communications",
      "CPD sessions available for your team on FM topics"
    ],
    whoItSuitsFor: [
      "RICS-accredited commercial surveyors",
      "Building consultancy firms",
      "Project managers advising on FM handover",
      "Facilities management consultants"
    ],
    revenueModel: "Referral fee on contract placement. CPD programme and co-marketing at no cost.",
    onboardingSteps: [
      { step: 1, title: "Application", description: "Submit your firm's details via our partner portal." },
      { step: 2, title: "Due Diligence", description: "We'll verify your professional accreditations and insurance." },
      { step: 3, title: "Agreement", description: "Sign our professional referral agreement." },
      { step: 4, title: "Activation", description: "Access your co-branded resources and technical guides." }
    ],
    faq: [
      { q: "Can we co-brand the reporting?", a: "Yes, we offer co-branded compliance and asset reports for our consultancy partners." }
    ]
  },
  {
    id: "const-dev",
    slug: "construction-developers",
    title: "Construction Firms & Developers",
    subtitle: "Hand your clients off to FM with confidence — from day one of occupation",
    description: "Construction firms and developers face the FM handover challenge on every project. Partner with EntireFM to offer your clients a seamless transition from construction completion to live FM operations.",
    icon: "HardHat",
    benefits: [
      "Guaranteed FM mobilisation within 28 days of practical completion",
      "Pre-occupation site surveys — EntireFM attends your site before handover",
      "Asset register built from your O&M manuals — no double-handling",
      "Single introduction to your client at practical completion stage",
      "Referral fee on contract placement",
      "Joint marketing for development launches"
    ],
    whoItSuitsFor: [
      "Residential developers (BTR, student, mixed-use)",
      "Commercial developers",
      "Main contractors on managed facilities",
      "Fit-out contractors"
    ],
    revenueModel: "Referral fee on FM contract placement. Pre-occupation survey at no cost to your client.",
    onboardingSteps: [
      { step: 1, title: "Partner Review", description: "We assess your upcoming project pipeline." },
      { step: 2, title: "Operational Mapping", description: "We align our mobilisation team with your PC deadlines." },
      { step: 3, title: "Framework Agreement", description: "Establish a portfolio-wide referral framework." },
      { step: 4, title: "Seamless Handover", description: "Hand off your clients to our management team at PC." }
    ],
    faq: [
      { q: "Do you handle snagging?", a: "While we are an FM firm, we often support developers by reporting snags discovered during our initial asset registration process." }
    ]
  },
  {
    id: "ins-brok",
    slug: "insurance-brokers",
    title: "Insurance Brokers",
    subtitle: "Help your clients reduce risk — and earn a referral fee",
    description: "Insurance brokers with commercial property clients regularly see FM compliance failures driving claims. Partner with EntireFM to offer your clients a proactive FM solution — reducing claims and demonstrating risk management.",
    icon: "ShieldAlert",
    benefits: [
      "Refer clients with FM compliance gaps — we solve the problem, you earn a fee",
      "Compliance certification from EntireFM can support reduced insurance premiums for your clients",
      "Technical resources on FM-related insurance risks for your team",
      "Co-branded risk guides for commercial property clients",
      "Referral fee on FM contracts"
    ],
    whoItSuitsFor: [
      "Commercial property insurance brokers",
      "Risk management consultants",
      "Employee liability specialists"
    ],
    revenueModel: "Referral fee on FM contract placement.",
    onboardingSteps: [
      { step: 1, title: "Join Network", description: "Apply via our broker-specific portal." },
      { step: 2, title: "Intro Call", description: "Meet your risk-management lead at EntireFM." },
      { step: 3, title: "Resources", description: "Receive your 'FM for Brokers' toolkit." },
      { step: 4, title: "Client Protection", description: "Start referring clients with high-risk estates." }
    ],
    faq: [
      { q: "How does FM help my clients' premiums?", a: "Insurers look favorably on estates with defensible, SFG20-aligned maintenance records. We provide the proof they need." }
    ]
  }
];

export const featuredPartners: FeaturedPartner[] = [
  {
    id: "fp-1",
    name: "Meridian Block Management",
    type: "Property Management",
    location: "East Midlands",
    description: "Meridian manages over 1,200 residential units across the East Midlands. Their clients benefit from EntireFM's rapid response and compliance-led approach.",
    website: "#",
    logoPlaceholder: true
  },
  {
    id: "fp-2",
    name: "Clarke Commercial Surveyors",
    type: "Commercial Surveyor",
    location: "Yorkshire",
    description: "Clarke Commercial advise clients across Yorkshire on FM procurement. EntireFM is their named FM partner for all commercial referrals.",
    website: "#",
    logoPlaceholder: true
  },
  {
    id: "fp-3",
    name: "Apex Developments Midlands",
    type: "Developer",
    location: "West Midlands",
    description: "Apex work with EntireFM on all BTR handovers across their Midlands portfolio — ensuring FM is live from day one of occupation.",
    website: "#",
    logoPlaceholder: true
  }
];

export function getPartnerTypeBySlug(slug: string) {
  return partnerTypes.find(p => p.slug === slug);
}
