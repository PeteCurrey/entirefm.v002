export interface CaseStudy {
  slug: string;
  sector: string;
  client: string;
  location: string;
  services: string[];
  headline: string;
  challenge: string;
  solution: string;
  results: string[];
  image: string;
  quote: {
    text: string;
    author: string;
  };
  metrics: {
    label: string;
    value: string;
  }[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "retail-estate-ppm-rollout",
    sector: "Retail",
    client: "National Convenience Retail Group",
    location: "UK-wide",
    services: ["Planned Preventative Maintenance", "Hard FM", "Helpdesk"],
    headline: "40 Sites. One Provider. Zero Compliance Failures.",
    challenge: "The client had fragmented FM contracts across multiple suppliers, leading to inconsistent compliance documentation, missed PPM visits, and reactive spend spiralling out of control. Their internal team lacked visibility over which assets had been serviced and which were overdue.",
    solution: "EntireFM consolidated all FM delivery into a single contract. We conducted a full asset register across all 40 sites, built SFG20-aligned PPM schedules, and integrated reporting via our helpdesk. Within 8 weeks all sites were live with scheduled maintenance across HVAC, fire safety, electrical systems, emergency lighting, and building fabric.",
    results: [
      "100% PPM visit compliance across all 40 sites within the first 12 months",
      "34% reduction in reactive maintenance spend year-on-year",
      "Zero compliance failures across all regulatory inspections",
      "Full audit trail available on demand via client portal"
    ],
    image: "/images/services/hard-fm-hero.jpg",
    quote: {
      text: "EntireFM took a chaotic multi-supplier situation and turned it into a seamless operation. We finally have complete visibility and total confidence in our compliance position.",
      author: "Head of Estates, National Retail Group"
    },
    metrics: [
      { label: "PPM Compliance", value: "100%" },
      { label: "Reactive Saving", value: "34%" }
    ]
  },
  {
    slug: "residential-estate-management",
    sector: "Residential",
    client: "Large Property Management Company",
    location: "East Midlands",
    services: ["Soft FM", "Grounds Maintenance", "Caretaking", "Hard FM"],
    headline: "From Complaints to Compliments — 600 Homes, One FM Team",
    challenge: "A property management company managing a 650-unit residential development was receiving escalating resident complaints about communal area maintenance, grounds upkeep, and slow responses to building issues. Resident satisfaction scores were at a historic low.",
    solution: "EntireFM embedded a dedicated on-site caretaking team, restructured grounds maintenance schedules across the 14-acre estate, and took on all reactive maintenance via our helpdesk. We introduced monthly condition reports and a structured PPM programme for all shared M&E assets including lifts, communal HVAC, and entry systems.",
    results: [
      "Resident satisfaction score increased from 54% to 91% within 18 months",
      "Average reactive job response time reduced to under 4 hours",
      "Grounds maintenance complaints dropped to zero in Q3",
      "Estate manager's time freed up by an estimated 60% previously spent managing sub-contractors"
    ],
    image: "/images/about-hero.jpg",
    quote: {
      text: "Our residents notice the difference every single day. EntireFM feel like part of our team, not a supplier.",
      author: "Portfolio Manager, Property Management Company"
    },
    metrics: [
      { label: "Satisfaction", value: "91%" },
      { label: "Response Time", value: "<4h" }
    ]
  },
  {
    slug: "industrial-cleaning-restoration",
    sector: "Industrial",
    client: "Large Logistics and Warehouse Operator",
    location: "West Midlands",
    services: ["Industrial Cleaning", "Pressure Washing", "External Restoration", "Ongoing FM"],
    headline: "200,000 sq ft of Warehouse. Spotless in 6 Weeks.",
    challenge: "A logistics company acquiring a 200,000 sq ft warehouse facility needed deep industrial cleaning and external restoration of heavily stained cladding and concrete hardstanding before occupancy — on a 6-week deadline with operational restrictions.",
    solution: "EntireFM deployed an Alkota-equipped cleaning team for internal concrete floor scrubbing, racking removal and deep clean, and external soft wash and pressure washing of cladding and yard surfaces. We managed all works around the client's handover timeline, completing all phases within 5.5 weeks.",
    results: [
      "Full facility ready for occupancy ahead of schedule",
      "External cladding restored without panel replacement — estimated saving of £120,000 vs re-cladding quote",
      "Client subsequently retained EntireFM for ongoing FM contract across the site",
      "Zero health & safety incidents throughout works"
    ],
    image: "/images/services/me-services-hero.jpg",
    quote: {
      text: "EntireFM delivered exactly what they promised — on time, professionally, and with no surprises. The building looks brand new.",
      author: "Operations Director, Logistics Company"
    },
    metrics: [
      { label: "Cost Saving", value: "£120k" },
      { label: "Timeline", value: "5.5w" }
    ]
  },
  {
    slug: "hotel-fm-transformation",
    sector: "Hotel & Hospitality",
    client: "4-Star Regional Hotel Group",
    location: "Yorkshire",
    services: ["Hard FM", "PPM", "24/7 Reactive Helpdesk", "Building Fabric Maintenance"],
    headline: "Three Hotels. One FM Partner. 99.2% Guest-Facing Uptime.",
    challenge: "A hotel group with three properties was experiencing repeated guest complaints related to M&E failures — faulty HVAC in rooms, heating outages, and lift downtime. Their previous FM provider had slow response times and no dedicated account management.",
    solution: "EntireFM took on a full hard FM contract across all three sites, establishing SFG20-compliant PPM schedules for all boilers, chillers, HVAC systems, emergency lighting, and fire safety equipment. Our 24/7 helpdesk provided dedicated account management with sub-4-hour SLAs for all guest-facing systems.",
    results: [
      "Guest complaints related to building systems dropped by 87% in the first year",
      "All three properties passed their next fire safety inspections with zero observations",
      "99.2% uptime on guest-facing systems tracked over 12 months",
      "Average reactive response time: 2 hours 40 minutes"
    ],
    image: "/images/contact-hero.jpg",
    quote: {
      text: "We haven't had an M&E-related complaint in eight months. For a hotel group that's extraordinary. EntireFM made that happen.",
      author: "General Manager, Hotel Group"
    },
    metrics: [
      { label: "System Uptime", value: "99.2%" },
      { label: "Complaint Drop", value: "87%" }
    ]
  },
  {
    slug: "motorway-services-fm-contract",
    sector: "Commercial",
    client: "Motorway Services Operator",
    location: "UK-wide",
    services: ["Hard FM", "Soft FM", "PPM", "Reactive Maintenance", "Cleaning", "Security"],
    headline: "24/7/365 FM Across High-Traffic Commercial Sites",
    challenge: "Motorway services sites operate around the clock with zero tolerance for downtime on critical systems. The client needed a single integrated FM provider capable of covering all hard and soft services across multiple high-footfall locations with stringent SLAs.",
    solution: "EntireFM implemented a fully integrated TFM (total facilities management) solution covering M&E maintenance, HVAC, fire safety, commercial cleaning, security patrols, and grounds maintenance. Our national engineer network ensured guaranteed response times and our helpdesk handled over 400 reactive jobs per month across the portfolio.",
    results: [
      "400+ reactive jobs per month managed with 96% SLA compliance",
      "Consolidated FM spend reduced overall costs by 22% versus previous multi-supplier model",
      "Zero critical compliance failures across all regulatory audits",
      "Contract renewed at end of term with scope extended to additional sites"
    ],
    image: "/images/services/electrical-hero.jpg",
    quote: {
      text: "Managing a motorway services estate needs an FM partner who truly understands 24/7 operations. EntireFM deliver that every day.",
      author: "Head of Property, Motorway Services Group"
    },
    metrics: [
      { label: "SLA Compliance", value: "96%" },
      { label: "Cost Reduction", value: "22%" }
    ]
  },
  {
    slug: "corporate-office-campus-fm",
    sector: "Commercial",
    client: "Multnational Business Park Operator",
    location: "London & Home Counties",
    services: ["Soft FM", "Hard FM", "Security", "Grounds", "Cleaning"],
    headline: "Multi-Building Campus FM — Seamlessly Integrated",
    challenge: "A business park operator managing a campus of 8 commercial buildings across two sites needed to replace a failing incumbent FM supplier mid-contract. The transition had to be invisible to tenants and completed within 30 days.",
    solution: "EntireFM mobilised a dedicated FM team within 28 days, taking on all soft and hard services including daily office cleaning, security, grounds maintenance, HVAC servicing, and reactive maintenance. A dedicated account manager was on-site three days per week for the first 90 days to ensure a smooth transition.",
    results: [
      "Full mobilisation in 28 days with zero service interruption",
      "Tenant satisfaction surveys showed 94% positive rating after 6 months",
      "Grounds and external areas transformed within 60 days",
      "PPM compliance hit 100% in month three"
    ],
    image: "/images/case-studies-hero.jpg",
    quote: {
      text: "The transition was flawless. Our tenants didn't notice a thing — except that standards improved. That says everything about EntireFM.",
      author: "Asset Manager, Business Park Operator"
    },
    metrics: [
      { label: "Mobilisation", value: "28 Days" },
      { label: "Satisfaction", value: "94%" }
    ]
  }
];
