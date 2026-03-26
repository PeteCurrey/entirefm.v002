export type Episode = {
  id: string;
  slug: string;
  episodeNumber: number;
  title: string;
  subtitle: string;
  description: string;
  duration: string;
  buildingType: "Retail" | "Commercial Office" | "Industrial / Warehouse" | "Residential Block" | "Hotel & Hospitality";
  host: string;
  hostTitle: string;
  publishDate: string;
  youtubeId: string | null;
  tags: string[];
  keyFindings: {
    title: string;
    description: string;
    risk: "Critical" | "Important" | "Recommended";
  }[];
  relatedResources: {
    title: string;
    url: string;
  }[];
  transcript: string;
  featured: boolean;
};

export const episodes: Episode[] = [
  {
    id: "ep1",
    slug: "retail-unit-compliance-walkthrough",
    episodeNumber: 1,
    title: "5 Compliance Issues We Found on a Retail FM Audit",
    subtitle: "A walkthrough of a typical UK high street retail unit — and what most building managers miss",
    description: "Our FM team walks through a 3,000 sq ft retail unit and identifies five compliance issues that would result in enforcement action. From fire door gaps to emergency lighting failures — these are the things the inspector will look for.",
    duration: "8 min",
    buildingType: "Retail",
    host: "The EntireFM Team",
    hostTitle: "Facilities Management Specialists",
    publishDate: "2025-09-01",
    youtubeId: null,
    featured: true,
    tags: ["retail", "compliance", "fire safety", "audit"],
    keyFindings: [
      { title: "Fire door self-closer missing", description: "Self-closer missing on staff corridor fire door — immediate enforcement risk and breach of Fire Safety Order.", risk: "Critical" },
      { title: "Emergency lighting failure", description: "Unit failed monthly test and was left undocumented for 3 weeks.", risk: "Critical" },
      { title: "Extinguisher service overdue", description: "Annual service overdue by 4 months, rendering the insurance potentially void in that area.", risk: "Important" },
      { title: "EICR expired", description: "No record of fixed wire testing (EICR) in 6 years. Statutory requirement for commercial units.", risk: "Critical" },
      { title: "Legionella Risk Assessment", description: "No risk assessment on record for staff kitchen and restroom facilities.", risk: "Important" }
    ],
    relatedResources: [
      { title: "Fire Safety Compliance Course", url: "/academy/fire-safety-compliance" },
      { title: "Building Compliance Checklist", url: "/resources/document-vault" }
    ],
    transcript: "Welcome to The Building Walk — I'm [host], and today we're walking through a typical UK retail unit. This is a 3,000 square foot high street shop — the kind of building that tens of thousands of businesses operate from every day.\n\n[Full episode transcript walking through each finding naturally and conversationally...]"
  },
  {
    id: "ep2",
    slug: "office-building-fm-walkthrough",
    episodeNumber: 2,
    title: "What Good Office FM Looks Like — A Floor by Floor Walkthrough",
    subtitle: "We walk a well-managed commercial office building and show you exactly what best practice looks like",
    description: "Rather than a list of problems — this episode shows what excellent FM looks like in a commercial office. From the plant room to the car park, here's the standard every building should be hitting.",
    duration: "11 min",
    buildingType: "Commercial Office",
    host: "The EntireFM Team",
    hostTitle: "Facilities Management Specialists",
    publishDate: "2025-09-08",
    youtubeId: null,
    featured: false,
    tags: ["office", "commercial", "best practice", "standards"],
    keyFindings: [
      { title: "Gold Standard Logbook", description: "Monthly fire alarm test logged with countersignature — exactly how it should be done.", risk: "Recommended" },
      { title: "PPM Visibility", description: "PPM schedule visible on plant room door — every engineer knows what's due.", risk: "Recommended" },
      { title: "Filtered HVAC", description: "HVAC filters changed quarterly — energy bills 18% below sector average.", risk: "Recommended" }
    ],
    relatedResources: [
      { title: "PPM Schedule Builder", url: "/tools/ppm-schedule-builder" },
      { title: "Hard FM Services", url: "/services/hard-fm" }
    ],
    transcript: "[Full 1,000-word episode transcript...]"
  },
  {
    id: "ep3",
    slug: "industrial-cleaning-before-after",
    episodeNumber: 3,
    title: "Before and After — Industrial Cleaning at a 120,000 sq ft Warehouse",
    subtitle: "What Alkota pressure washing and soft wash can actually achieve",
    description: "We document a full industrial cleaning project from first survey to completion — cladding restoration, concrete floor deep clean, and yard pressure washing at a logistics warehouse.",
    duration: "9 min",
    buildingType: "Industrial / Warehouse",
    host: "The EntireFM Team",
    hostTitle: "Industrial Cleaning Specialists",
    publishDate: "2025-09-15",
    youtubeId: null,
    featured: false,
    tags: ["industrial cleaning", "before and after", "warehouse", "pressure washing"],
    keyFindings: [
      { title: "Cladding Restoration", description: "External cladding restored without panel replacement — £85,000 saving vs re-clad.", risk: "Recommended" },
      { title: "Grime-Hidden Defects", description: "Concrete floor scrubbing revealed drainage issue invisible under years of grime.", risk: "Important" }
    ],
    relatedResources: [
      { title: "Industrial Cleaning Services", url: "/services/soft-fm" }
    ],
    transcript: "[Full 800-word episode transcript...]"
  },
  {
    id: "ep4",
    slug: "residential-block-fm-issues",
    episodeNumber: 4,
    title: "Residential Block FM — The 6 Things Residents Always Complain About",
    subtitle: "And how to fix every one of them with the right FM approach",
    description: "We walk a managed residential development and identify the six most common FM failures that drive resident complaints — and show exactly what good block management FM looks like.",
    duration: "10 min",
    buildingType: "Residential Block",
    host: "The EntireFM Team",
    hostTitle: "Block Management Specialists",
    publishDate: "2025-09-22",
    youtubeId: null,
    featured: false,
    tags: ["residential", "block management", "residents", "soft FM"],
    keyFindings: [
      { title: "Communal Lighting", description: "Reactive-only approach means weeks without lights in stairwells. Switch to LED bulkheads with 5-yr warranties.", risk: "Important" },
      { title: "Inconsistent Grounds", description: "No schedule means grounds maintenance only happens when someone complains.", risk: "Recommended" }
    ],
    relatedResources: [
      { title: "Residential FM Services", url: "/residential-facilities-management" }
    ],
    transcript: "[Full 900-word episode transcript...]"
  },
  {
    id: "ep5",
    slug: "hotel-fm-guest-experience",
    episodeNumber: 5,
    title: "Hotel FM — How Building Systems Directly Impact Guest Reviews",
    subtitle: "The link between FM performance and TripAdvisor scores is more direct than you think",
    description: "An FM walkthrough of a 4-star hotel property — identifying the building maintenance issues that show up directly in guest reviews, and the PPM approach that eliminates them.",
    duration: "12 min",
    buildingType: "Hotel & Hospitality",
    host: "The EntireFM Team",
    hostTitle: "Hospitality FM Specialists",
    publishDate: "2025-09-29",
    youtubeId: null,
    featured: false,
    tags: ["hotel", "hospitality", "guest experience", "PPM"],
    keyFindings: [
      { title: "Vibrating HVAC", description: "HVAC noise in guest rooms — unserviced FCUs vibrating in three rooms.", risk: "Important" },
      { title: "Boiler Downtime", description: "Heating outage in January — boiler hadn't been serviced in 14 months.", risk: "Critical" }
    ],
    relatedResources: [
      { title: "Hotel FM Services", url: "/hotel-facilities-management" },
      { title: "PPM Services", url: "/services/ppm" }
    ],
    transcript: "[Full 1,100-word episode transcript...]"
  }
];

export function getEpisodeBySlug(slug: string) {
  return episodes.find(e => e.slug === slug);
}

export function getFeaturedEpisode() {
  return episodes.find(e => e.featured) || episodes[0];
}

export function getRelatedEpisodes(excludeSlug: string, count = 2) {
  return episodes.filter(e => e.slug !== excludeSlug).slice(0, count);
}
