export interface RegionalOffice {
  id: string;
  name: string;
  city: string;
  region: string;
  lat: number;
  lng: number;
  coverageRadius: number;
  responseTime: string;
  emergencyResponse: string;
  services: string[];
  coverageAreas: string[];
  contactEmail: string;
  phone: string;
}

export const regionalOffices: RegionalOffice[] = [
  {
    id: "chesterfield",
    name: "EntireFM — East Midlands",
    city: "Chesterfield",
    region: "East Midlands & South Yorkshire",
    lat: 53.235,
    lng: -1.421,
    coverageRadius: 80,
    responseTime: "2–4 hours",
    emergencyResponse: "Under 2 hours",
    services: ["Hard FM", "Soft FM", "PPM", "Industrial Cleaning", "Drone Inspection", "Security", "Grounds"],
    coverageAreas: ["Chesterfield", "Sheffield", "Derby", "Nottingham", "Mansfield", "Rotherham", "Doncaster", "Worksop", "Matlock", "Alfreton"],
    contactEmail: "eastmidlands@entirefm.com",
    phone: "01246 000 000",
  },
  {
    id: "birmingham",
    name: "EntireFM — West Midlands",
    city: "Birmingham",
    region: "West Midlands & Midlands",
    lat: 52.4862,
    lng: -1.8904,
    coverageRadius: 80,
    responseTime: "2–4 hours",
    emergencyResponse: "Under 2 hours",
    services: ["Hard FM", "Soft FM", "PPM", "Industrial Cleaning", "Security", "Grounds"],
    coverageAreas: ["Birmingham", "Coventry", "Wolverhampton", "Walsall", "Solihull", "Leicester", "Northampton", "Stoke-on-Trent"],
    contactEmail: "westmidlands@entirefm.com",
    phone: "0121 000 0000",
  },
  {
    id: "london",
    name: "EntireFM — London & South East",
    city: "London",
    region: "London & South East",
    lat: 51.5074,
    lng: -0.1278,
    coverageRadius: 80,
    responseTime: "1–3 hours",
    emergencyResponse: "Under 2 hours",
    services: ["Hard FM", "Soft FM", "PPM", "Industrial Cleaning", "Drone Inspection", "Security", "Grounds", "Concierge"],
    coverageAreas: ["Central London", "Greater London", "Surrey", "Kent", "Essex", "Hertfordshire", "Berkshire", "Buckinghamshire"],
    contactEmail: "london@entirefm.com",
    phone: "020 0000 0000",
  },
  {
    id: "manchester",
    name: "EntireFM — North West",
    city: "Manchester",
    region: "North West England",
    lat: 53.4808,
    lng: -2.2426,
    coverageRadius: 80,
    responseTime: "2–4 hours",
    emergencyResponse: "Under 2 hours",
    services: ["Hard FM", "Soft FM", "PPM", "Industrial Cleaning", "Security", "Grounds"],
    coverageAreas: ["Manchester", "Salford", "Stockport", "Bolton", "Wigan", "Preston", "Blackburn", "Liverpool", "Warrington", "Chester"],
    contactEmail: "northwest@entirefm.com",
    phone: "0161 000 0000",
  },
  {
    id: "leeds",
    name: "EntireFM — Yorkshire",
    city: "Leeds",
    region: "Yorkshire & Humber",
    lat: 53.8008,
    lng: -1.5491,
    coverageRadius: 80,
    responseTime: "2–4 hours",
    emergencyResponse: "Under 2 hours",
    services: ["Hard FM", "Soft FM", "PPM", "Industrial Cleaning", "Security", "Grounds"],
    coverageAreas: ["Leeds", "Bradford", "Wakefield", "Huddersfield", "Halifax", "Hull", "York", "Harrogate", "Barnsley"],
    contactEmail: "yorkshire@entirefm.com",
    phone: "0113 000 0000",
  },
];
