// Comprehensive data for all geographical landing pages
export interface CityData {
  slug: string;
  name: string;
  region: string;
  heroImage: string;
  tagline: string;
  description: string;
  keyIndustries: string[];
  coverageAreas: string[];
  localClients: string[];
  caseStudies: {
    sector: string;
    title: string;
    metrics: string[];
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  metaTitle: string;
  metaDescription: string;
  localContext: string;
}

export const cityData: Record<string, CityData> = {
  london: {
    slug: "london",
    name: "London",
    region: "Greater London",
    heroImage: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1920&q=80",
    tagline: "Keeping London's Buildings Running",
    description: "From the City to Canary Wharf, EntireFM delivers expert facilities management across London's most demanding commercial environments.",
    keyIndustries: ["Financial Services", "Legal", "Media & Tech", "Retail", "Hospitality"],
    coverageAreas: ["City of London", "Canary Wharf", "Westminster", "Southwark", "Islington", "Camden", "Hammersmith", "Croydon", "Heathrow Corridor", "Stratford"],
    localClients: ["City Tower Portfolio", "Docklands Business Park", "West End Retail Group", "Heathrow Logistics Hub", "Thames Commercial Estate"],
    caseStudies: [
      {
        sector: "Corporate",
        title: "Managing 450,000 sq ft Grade A office space in the City",
        metrics: ["Response time under 35 mins", "£62k annual savings", "100% compliance maintained"]
      },
      {
        sector: "Retail",
        title: "24/7 FM support for flagship West End stores",
        metrics: ["Zero trading hour disruption", "Out-of-hours works coordinated", "Brand standards upheld"]
      },
      {
        sector: "Mixed-Use",
        title: "Integrated services for Canary Wharf development",
        metrics: ["Single point of contact", "Tenant satisfaction up 28%", "Energy costs reduced 18%"]
      }
    ],
    faqs: [
      {
        question: "Do you provide facilities management across all London boroughs?",
        answer: "Yes, we provide comprehensive FM services across all 32 London boroughs plus the City of London, with engineers strategically based to ensure rapid response times throughout the capital."
      },
      {
        question: "Can you handle the security requirements for City of London buildings?",
        answer: "Absolutely. Our engineers are security-cleared and experienced in working within regulated City environments, with full DBS checks and understanding of corporate security protocols."
      },
      {
        question: "What's your typical response time in Central London?",
        answer: "Our average response time in Central London is under 35 minutes for emergency call-outs, with dedicated engineers based in key zones including the City, West End, and Docklands."
      },
      {
        question: "Do you work with landlords and managing agents in London?",
        answer: "Yes, we work extensively with commercial landlords, property managers, and managing agents across London, providing both TFM and specialist service packages."
      }
    ],
    metaTitle: "Facilities Management London | Commercial FM Services | EntireFM",
    metaDescription: "Expert facilities management in London. 24/7 helpdesk, M&E services, compliance management & reactive maintenance across the City, Canary Wharf & all London boroughs.",
    localContext: "As the UK's largest commercial property market, London demands FM partners who understand the pace, complexity, and premium expectations of the capital. EntireFM has been delivering facilities management across London for over a decade."
  },
  leeds: {
    slug: "leeds",
    name: "Leeds",
    region: "West Yorkshire",
    heroImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80",
    tagline: "Yorkshire's FM Partner of Choice",
    description: "From Leeds city centre to the wider West Yorkshire region, EntireFM provides responsive, reliable facilities management services.",
    keyIndustries: ["Financial Services", "Legal", "Healthcare", "Education", "Retail"],
    coverageAreas: ["Leeds City Centre", "Headingley", "Armley", "Horsforth", "Bradford", "Wakefield", "Harrogate", "Huddersfield", "Halifax", "Dewsbury"],
    localClients: ["Leeds Business District", "Yorkshire Industrial Estate", "Aire Valley Logistics", "West Yorkshire Retail Portfolio", "Northern Healthcare Trust"],
    caseStudies: [
      {
        sector: "Financial",
        title: "Full FM for major Leeds city centre banking HQ",
        metrics: ["Response time cut to 38 mins", "£51k annual savings", "Zero compliance issues"]
      },
      {
        sector: "Healthcare",
        title: "Compliance-led FM for private healthcare facilities",
        metrics: ["100% CQC compliance", "HTM standards maintained", "24/7 cover provided"]
      },
      {
        sector: "Industrial",
        title: "Managing Aire Valley distribution centres",
        metrics: ["Minimal operational disruption", "PPM completion rate 99%", "Energy optimisation delivered"]
      }
    ],
    faqs: [
      {
        question: "Do you cover the whole of West Yorkshire?",
        answer: "Yes, we provide facilities management services across the entire West Yorkshire region including Leeds, Bradford, Wakefield, Huddersfield, Halifax, and surrounding areas."
      },
      {
        question: "Can you support healthcare facilities in Leeds?",
        answer: "Absolutely. We have extensive experience in healthcare FM, maintaining HTM compliance and working within CQC-regulated environments across West Yorkshire."
      },
      {
        question: "What industries do you serve in Leeds?",
        answer: "We serve a diverse range of sectors in Leeds including financial services, legal, healthcare, education, retail, logistics, and commercial property."
      },
      {
        question: "How quickly can you respond to emergencies in Leeds?",
        answer: "Our average emergency response time in Leeds city centre is 38 minutes, with engineers based locally to ensure rapid deployment across West Yorkshire."
      }
    ],
    metaTitle: "Facilities Management Leeds | FM Services West Yorkshire | EntireFM",
    metaDescription: "Professional facilities management in Leeds & West Yorkshire. 24/7 helpdesk, M&E maintenance, compliance services & reactive support across Yorkshire.",
    localContext: "Leeds is one of the UK's fastest-growing cities and a major hub for financial services, legal, and healthcare sectors. EntireFM understands the Yorkshire business landscape and delivers FM that meets local expectations."
  },
  birmingham: {
    slug: "birmingham",
    name: "Birmingham",
    region: "West Midlands",
    heroImage: "https://images.unsplash.com/photo-1574236170880-ffa2e8c2b5af?w=1920&q=80",
    tagline: "The Heart of Midlands FM",
    description: "From the Bullring to the NEC, EntireFM delivers exceptional facilities management across Birmingham and the West Midlands.",
    keyIndustries: ["Manufacturing", "Automotive", "Retail", "Hospitality", "Professional Services"],
    coverageAreas: ["Birmingham City Centre", "Digbeth", "Jewellery Quarter", "Solihull", "Wolverhampton", "Coventry", "Dudley", "Walsall", "NEC & Airport Corridor", "Sutton Coldfield"],
    localClients: ["Midlands Manufacturing Group", "Retail Parks Portfolio", "Birmingham Airport Hub", "NEC Campus", "Solihull Business Park"],
    caseStudies: [
      {
        sector: "Retail",
        title: "Managing major Birmingham retail destination",
        metrics: ["Trading hours protected 100%", "Tenant satisfaction up 32%", "Reactive response under 40 mins"]
      },
      {
        sector: "Manufacturing",
        title: "24/7 FM for automotive component facilities",
        metrics: ["Zero production line downtime", "PPM compliance 99.5%", "Energy costs reduced 22%"]
      },
      {
        sector: "Events",
        title: "Support services for NEC exhibition venues",
        metrics: ["Event-critical systems maintained", "Rapid mobilisation capability", "Multi-venue coordination"]
      }
    ],
    faqs: [
      {
        question: "Do you cover the NEC and Birmingham Airport area?",
        answer: "Yes, we provide comprehensive FM services across the NEC campus and Birmingham Airport corridor, with security-cleared engineers familiar with the specific requirements of these environments."
      },
      {
        question: "Can you support manufacturing facilities in the Midlands?",
        answer: "Absolutely. We have extensive experience in manufacturing FM, understanding the critical nature of production environments and providing 24/7 support to minimise downtime."
      },
      {
        question: "What's your coverage across the West Midlands?",
        answer: "We cover the entire West Midlands conurbation including Birmingham, Solihull, Wolverhampton, Coventry, Dudley, Walsall, and surrounding industrial areas."
      },
      {
        question: "Do you work with property managers in Birmingham?",
        answer: "Yes, we work with numerous commercial landlords and managing agents across Birmingham, providing TFM, compliance services, and specialist maintenance packages."
      }
    ],
    metaTitle: "Facilities Management Birmingham | FM Services West Midlands | EntireFM",
    metaDescription: "Expert facilities management in Birmingham & the West Midlands. 24/7 support, M&E services, compliance management for manufacturing, retail & commercial properties.",
    localContext: "Birmingham is the UK's second city and the heart of Midlands industry. From manufacturing to retail, the region demands FM partners who understand its diverse commercial landscape."
  },
  lincoln: {
    slug: "lincoln",
    name: "Lincoln",
    region: "Lincolnshire",
    heroImage: "https://images.unsplash.com/photo-1582647509711-c8aa8b8c8d0d?w=1920&q=80",
    tagline: "Lincolnshire's Trusted FM Partner",
    description: "From Lincoln's historic centre to the county's agricultural and food processing industries, EntireFM delivers reliable facilities management.",
    keyIndustries: ["Food Processing", "Agriculture", "Distribution", "Education", "Tourism"],
    coverageAreas: ["Lincoln City Centre", "Brayford Pool", "Newark", "Gainsborough", "Boston", "Grantham", "Sleaford", "Spalding", "Skegness", "Louth"],
    localClients: ["Lincolnshire Food Processors", "Agricultural Estate Holdings", "Lincoln Business Park", "County Distribution Network", "Heritage Properties Trust"],
    caseStudies: [
      {
        sector: "Food Processing",
        title: "FM for major food manufacturing facility",
        metrics: ["BRC compliance maintained", "Temperature-critical systems 100%", "Audit-ready documentation"]
      },
      {
        sector: "Distribution",
        title: "Managing regional distribution hub",
        metrics: ["24/7 operational support", "Loading bay systems maintained", "PPM completion rate 98%"]
      },
      {
        sector: "Education",
        title: "Term-time FM for Lincoln educational campus",
        metrics: ["DBS-cleared engineers", "Summer works programme delivered", "Student satisfaction improved"]
      }
    ],
    faqs: [
      {
        question: "Do you understand the requirements of food processing facilities?",
        answer: "Yes, we have extensive experience in food manufacturing FM, maintaining temperature-critical systems, supporting BRC audits, and ensuring compliance with food safety regulations."
      },
      {
        question: "Can you cover rural Lincolnshire locations?",
        answer: "Absolutely. We have engineers based across Lincolnshire and understand the logistics of serving both urban and rural commercial properties throughout the county."
      },
      {
        question: "What sectors do you serve in Lincoln?",
        answer: "We serve food processing, agriculture, distribution, education, tourism, and commercial property sectors across Lincoln and the wider Lincolnshire area."
      },
      {
        question: "Do you provide out-of-hours support in Lincolnshire?",
        answer: "Yes, we provide 24/7 helpdesk and emergency response across Lincolnshire, with engineers available around the clock for critical call-outs."
      }
    ],
    metaTitle: "Facilities Management Lincoln | FM Services Lincolnshire | EntireFM",
    metaDescription: "Professional facilities management in Lincoln & Lincolnshire. Food processing FM, distribution centre support, compliance services & 24/7 maintenance.",
    localContext: "Lincoln and Lincolnshire are home to the UK's food processing heartland. EntireFM understands the unique requirements of agricultural, food manufacturing, and distribution environments."
  },
  chesterfield: {
    slug: "chesterfield",
    name: "Chesterfield",
    region: "Derbyshire",
    heroImage: "https://images.unsplash.com/photo-1590074072786-a66914d668f1?w=1920&q=80",
    tagline: "Derbyshire FM Excellence",
    description: "From Chesterfield's business parks to the Peak District gateway, EntireFM provides expert facilities management across North Derbyshire.",
    keyIndustries: ["Manufacturing", "Distribution", "Engineering", "Retail", "Tourism"],
    coverageAreas: ["Chesterfield Town Centre", "Markham Vale", "Dunston", "Staveley", "Clay Cross", "Bolsover", "Dronfield", "Eckington", "Peak District Gateway", "Matlock"],
    localClients: ["Markham Vale Industrial Estate", "North Derbyshire Retail Park", "Engineering Solutions Group", "Peak District Commercial Portfolio", "Chesterfield Business Park"],
    caseStudies: [
      {
        sector: "Industrial",
        title: "Managing Markham Vale distribution facilities",
        metrics: ["Loading systems maintained 100%", "Response time under 45 mins", "Zero operational disruption"]
      },
      {
        sector: "Manufacturing",
        title: "FM for precision engineering facilities",
        metrics: ["Critical systems protected", "PPM completion rate 99%", "Compliance documentation complete"]
      },
      {
        sector: "Retail",
        title: "Town centre retail portfolio management",
        metrics: ["Trading hours protected", "Multi-unit coordination", "Tenant satisfaction improved"]
      }
    ],
    faqs: [
      {
        question: "Do you cover the Markham Vale business park?",
        answer: "Yes, we provide comprehensive FM services across Markham Vale and other industrial estates in the Chesterfield area, with engineers familiar with logistics and distribution requirements."
      },
      {
        question: "Can you support manufacturing facilities in Chesterfield?",
        answer: "Absolutely. We have extensive experience in manufacturing FM across Derbyshire, supporting precision engineering, production facilities, and industrial operations."
      },
      {
        question: "What areas around Chesterfield do you cover?",
        answer: "We cover Chesterfield and the surrounding areas including Staveley, Bolsover, Dronfield, Clay Cross, and the Peak District gateway region."
      },
      {
        question: "Do you provide emergency response in North Derbyshire?",
        answer: "Yes, we offer 24/7 emergency response across North Derbyshire with an average response time of 45 minutes to the Chesterfield area."
      }
    ],
    metaTitle: "Facilities Management Chesterfield | FM Services Derbyshire | EntireFM",
    metaDescription: "Expert facilities management in Chesterfield & Derbyshire. Industrial FM, manufacturing support, compliance services & 24/7 maintenance across North Derbyshire.",
    localContext: "Chesterfield sits at the heart of North Derbyshire's industrial landscape, with excellent transport links and a strong manufacturing heritage. EntireFM serves this dynamic business environment."
  },
  sheffield: {
    slug: "sheffield",
    name: "Sheffield",
    region: "South Yorkshire",
    heroImage: "https://images.unsplash.com/photo-1582647509711-c8aa8b8c8d0d?w=1920&q=80",
    tagline: "Steel City FM Solutions",
    description: "From the Advanced Manufacturing Park to Sheffield city centre, EntireFM delivers expert facilities management across South Yorkshire.",
    keyIndustries: ["Advanced Manufacturing", "Steel & Engineering", "Education", "Healthcare", "Digital & Tech"],
    coverageAreas: ["Sheffield City Centre", "Meadowhall", "Don Valley", "Rotherham", "Barnsley", "Doncaster", "Advanced Manufacturing Park", "Sheffield Business Park", "Hillsborough", "Attercliffe"],
    localClients: ["Steel Valley Industrial Estate", "Sheffield Hallam Properties", "South Yorkshire Logistics Hub", "Meadowhall Centre", "Advanced Manufacturing Campus"],
    caseStudies: [
      {
        sector: "Manufacturing",
        title: "FM for Advanced Manufacturing Research Centre",
        metrics: ["Critical systems maintained 100%", "Research environment protected", "Specialist equipment supported"]
      },
      {
        sector: "Retail",
        title: "Managing Meadowhall retail environment",
        metrics: ["Customer experience maintained", "Trading hours protected", "Tenant coordination delivered"]
      },
      {
        sector: "Education",
        title: "University campus FM services",
        metrics: ["Term-time priorities managed", "Student safety maintained", "Estate compliance achieved"]
      }
    ],
    faqs: [
      {
        question: "Do you serve the Advanced Manufacturing Park?",
        answer: "Yes, we provide specialist FM services to advanced manufacturing facilities, understanding the unique requirements of research and high-tech production environments."
      },
      {
        question: "Can you support retail centres like Meadowhall?",
        answer: "Absolutely. We have extensive experience in retail FM, managing complex multi-tenant environments and protecting trading hours with out-of-hours maintenance programmes."
      },
      {
        question: "What areas of South Yorkshire do you cover?",
        answer: "We cover the entire South Yorkshire region including Sheffield, Rotherham, Barnsley, Doncaster, and surrounding industrial and commercial areas."
      },
      {
        question: "Do you work with universities in Sheffield?",
        answer: "Yes, we provide FM services to educational institutions across Sheffield, with DBS-cleared engineers and understanding of term-time operational requirements."
      }
    ],
    metaTitle: "Facilities Management Sheffield | FM Services South Yorkshire | EntireFM",
    metaDescription: "Professional facilities management in Sheffield & South Yorkshire. Advanced manufacturing FM, retail support, compliance services & 24/7 maintenance.",
    localContext: "Sheffield's transformation from steel city to advanced manufacturing hub demands FM partners who understand both industrial heritage and cutting-edge technology environments."
  },
  nottingham: {
    slug: "nottingham",
    name: "Nottingham",
    region: "Nottinghamshire",
    heroImage: "https://images.unsplash.com/photo-1598346762291-aee88549193f?w=1920&q=80",
    tagline: "East Midlands FM Excellence",
    description: "From Nottingham's business district to the wider East Midlands region, EntireFM delivers comprehensive facilities management services.",
    keyIndustries: ["Healthcare", "Retail", "Distribution", "Education", "Manufacturing"],
    coverageAreas: ["Nottingham City Centre", "Lace Market", "Castle Quarter", "Mansfield", "Newark", "Beeston", "Long Eaton", "Hucknall", "Arnold", "Carlton"],
    localClients: ["East Midlands Healthcare Trust", "Nottingham Retail Quarter", "Logistics East Midlands", "University Campus Portfolio", "City Centre Commercial Estate"],
    caseStudies: [
      {
        sector: "Healthcare",
        title: "Compliance FM for regional healthcare facilities",
        metrics: ["HTM standards maintained", "CQC audit ready", "24/7 critical systems support"]
      },
      {
        sector: "Retail",
        title: "City centre retail environment management",
        metrics: ["Footfall areas maintained", "Trading continuity assured", "Seasonal demands managed"]
      },
      {
        sector: "Distribution",
        title: "East Midlands distribution centre FM",
        metrics: ["Zero operational downtime", "Loading systems 100%", "Energy efficiency improved"]
      }
    ],
    faqs: [
      {
        question: "Do you cover the East Midlands distribution corridor?",
        answer: "Yes, we provide comprehensive FM services to distribution and logistics facilities across the East Midlands, with 24/7 support for operational continuity."
      },
      {
        question: "Can you support healthcare facilities in Nottingham?",
        answer: "Absolutely. We have extensive healthcare FM experience, maintaining HTM compliance and supporting CQC requirements across Nottinghamshire."
      },
      {
        question: "What areas around Nottingham do you cover?",
        answer: "We cover Nottingham and the surrounding areas including Mansfield, Newark, Beeston, Long Eaton, and the wider Nottinghamshire region."
      },
      {
        question: "Do you work with universities in Nottingham?",
        answer: "Yes, we provide FM services to educational institutions across Nottingham, understanding the unique requirements of campus environments."
      }
    ],
    metaTitle: "Facilities Management Nottingham | FM Services East Midlands | EntireFM",
    metaDescription: "Expert facilities management in Nottingham & the East Midlands. Healthcare FM, distribution support, compliance services & 24/7 maintenance.",
    localContext: "Nottingham is the commercial heart of the East Midlands, with strong healthcare, retail, and distribution sectors. EntireFM understands the region's diverse business needs."
  },
  manchester: {
    slug: "manchester",
    name: "Manchester",
    region: "Greater Manchester",
    heroImage: "https://images.unsplash.com/photo-1515168985652-926fc1b61d4f?w=1920&q=80",
    tagline: "Powering the Northern Powerhouse",
    description: "From MediaCityUK to Manchester Airport, EntireFM delivers expert facilities management across Greater Manchester's dynamic commercial landscape.",
    keyIndustries: ["Media & Broadcasting", "Technology", "Logistics", "Retail", "Professional Services"],
    coverageAreas: ["Manchester City Centre", "Salford Quays", "MediaCityUK", "Trafford Park", "Stockport", "Bolton", "Oldham", "Rochdale", "Manchester Airport", "Altrincham"],
    localClients: ["MediaCity Broadcasting Hub", "Trafford Park Industrial Estate", "Manchester Airport Group", "Northern Quarter Tech Campus", "Greater Manchester Retail Portfolio"],
    caseStudies: [
      {
        sector: "Media",
        title: "Broadcast facility FM at MediaCityUK",
        metrics: ["Broadcast continuity maintained", "Critical systems 100%", "Specialist equipment supported"]
      },
      {
        sector: "Logistics",
        title: "Managing Trafford Park distribution facilities",
        metrics: ["24/7 operational support", "Response time under 38 mins", "Zero operational disruption"]
      },
      {
        sector: "Aviation",
        title: "Airport corridor commercial property FM",
        metrics: ["Security-cleared engineers", "Regulated environment expertise", "Complex coordination delivered"]
      }
    ],
    faqs: [
      {
        question: "Do you cover MediaCityUK and Salford Quays?",
        answer: "Yes, we provide specialist FM services to media and broadcasting facilities at MediaCityUK, understanding the critical nature of broadcast infrastructure."
      },
      {
        question: "Can you support logistics at Trafford Park?",
        answer: "Absolutely. We have extensive experience in logistics FM across Trafford Park and Greater Manchester's distribution network, providing 24/7 support."
      },
      {
        question: "What areas of Greater Manchester do you cover?",
        answer: "We cover the entire Greater Manchester conurbation including Manchester, Salford, Stockport, Bolton, Oldham, Rochdale, and surrounding areas."
      },
      {
        question: "Do you work at Manchester Airport?",
        answer: "Yes, we provide FM services to commercial properties in the Manchester Airport corridor, with security-cleared engineers familiar with aviation environments."
      }
    ],
    metaTitle: "Facilities Management Manchester | FM Services Greater Manchester | EntireFM",
    metaDescription: "Professional facilities management in Manchester & Greater Manchester. Media FM, logistics support, compliance services & 24/7 maintenance across the North West.",
    localContext: "Manchester is the UK's second economic centre and the heart of the Northern Powerhouse. From media to logistics, the city demands FM partners who match its ambition."
  },
  liverpool: {
    slug: "liverpool",
    name: "Liverpool",
    region: "Merseyside",
    heroImage: "https://images.unsplash.com/photo-1568659183540-9f4e7f25d3bd?w=1920&q=80",
    tagline: "Merseyside FM Excellence",
    description: "From Liverpool ONE to the historic waterfront, EntireFM delivers comprehensive facilities management across Merseyside.",
    keyIndustries: ["Retail", "Maritime", "Tourism", "Healthcare", "Education"],
    coverageAreas: ["Liverpool City Centre", "Albert Dock", "Liverpool ONE", "Wirral", "St Helens", "Warrington", "Knowsley", "Sefton", "Liverpool Waters", "Baltic Triangle"],
    localClients: ["Liverpool Waterfront Portfolio", "Merseyside Retail Group", "Liverpool Maritime Estate", "City Region Healthcare Trust", "University Campus Properties"],
    caseStudies: [
      {
        sector: "Retail",
        title: "Liverpool ONE shopping destination FM",
        metrics: ["Footfall of 27m annually supported", "Trading hours protected 100%", "Tenant satisfaction maintained"]
      },
      {
        sector: "Tourism",
        title: "Waterfront heritage property management",
        metrics: ["Listed building expertise", "Visitor experience maintained", "Compliance documentation complete"]
      },
      {
        sector: "Healthcare",
        title: "Regional healthcare campus FM",
        metrics: ["HTM compliance achieved", "24/7 critical systems", "CQC-ready at all times"]
      }
    ],
    faqs: [
      {
        question: "Do you cover Liverpool ONE and the city centre?",
        answer: "Yes, we provide comprehensive FM services across Liverpool city centre including Liverpool ONE, the waterfront, and the commercial district."
      },
      {
        question: "Can you manage heritage and listed buildings?",
        answer: "Absolutely. We have experience in FM for listed buildings and heritage properties, understanding the unique conservation and compliance requirements."
      },
      {
        question: "What areas of Merseyside do you cover?",
        answer: "We cover the entire Merseyside region including Liverpool, Wirral, St Helens, Warrington, Knowsley, and Sefton."
      },
      {
        question: "Do you support maritime and port facilities?",
        answer: "Yes, we provide FM services to maritime commercial properties, with engineers familiar with waterfront and port-adjacent environments."
      }
    ],
    metaTitle: "Facilities Management Liverpool | FM Services Merseyside | EntireFM",
    metaDescription: "Expert facilities management in Liverpool & Merseyside. Retail FM, heritage property support, compliance services & 24/7 maintenance across the Liverpool City Region.",
    localContext: "Liverpool is a city of heritage, culture, and commerce. From the iconic waterfront to thriving retail destinations, EntireFM understands Merseyside's unique property landscape."
  },
  derby: {
    slug: "derby",
    name: "Derby",
    region: "Derbyshire",
    heroImage: "https://images.unsplash.com/photo-1590074072786-a66914d668f1?w=1920&q=80",
    tagline: "Engineering Excellence in FM",
    description: "From Rolls-Royce to Toyota, Derby's engineering heritage demands FM partners who understand precision. EntireFM delivers.",
    keyIndustries: ["Aerospace", "Automotive", "Rail", "Manufacturing", "Technology"],
    coverageAreas: ["Derby City Centre", "Pride Park", "Infinity Park", "Spondon", "Chellaston", "Alvaston", "Allenton", "Mickleover", "Littleover", "Oakwood"],
    localClients: ["Aerospace Manufacturing Campus", "Pride Park Business Estate", "Automotive Supply Chain Facilities", "Rail Industry Hub", "Derby Technology Park"],
    caseStudies: [
      {
        sector: "Aerospace",
        title: "FM for aerospace manufacturing facility",
        metrics: ["AS9100 compliance maintained", "Critical systems 100%", "Zero production disruption"]
      },
      {
        sector: "Automotive",
        title: "Supporting automotive supply chain facilities",
        metrics: ["JIT delivery protected", "PPM completion 99.5%", "Energy optimisation achieved"]
      },
      {
        sector: "Rail",
        title: "Rail industry campus FM",
        metrics: ["Specialist facility requirements met", "Compliance documentation complete", "24/7 support provided"]
      }
    ],
    faqs: [
      {
        question: "Do you support aerospace manufacturing facilities?",
        answer: "Yes, we have extensive experience in aerospace FM, understanding AS9100 requirements and the critical nature of aerospace manufacturing environments."
      },
      {
        question: "Can you work within automotive supply chain requirements?",
        answer: "Absolutely. We understand JIT manufacturing requirements and provide FM that supports continuous production without disruption."
      },
      {
        question: "What areas around Derby do you cover?",
        answer: "We cover Derby and the surrounding areas including Pride Park, Infinity Park, Spondon, Chellaston, and the wider south Derbyshire region."
      },
      {
        question: "Do you support rail industry facilities?",
        answer: "Yes, we provide FM services to rail industry properties, with engineers familiar with the specific requirements of rail manufacturing and maintenance facilities."
      }
    ],
    metaTitle: "Facilities Management Derby | FM Services Derbyshire | EntireFM",
    metaDescription: "Professional facilities management in Derby & Derbyshire. Aerospace FM, automotive support, rail industry compliance & 24/7 maintenance.",
    localContext: "Derby is the UK's engineering heartland, home to Rolls-Royce, Toyota, and Bombardier. EntireFM understands the precision and reliability that engineering environments demand."
  },
  oxford: {
    slug: "oxford",
    name: "Oxford",
    region: "Oxfordshire",
    heroImage: "https://images.unsplash.com/photo-1590402494682-cd3fb53b1f70?w=1920&q=80",
    tagline: "Where Heritage Meets Innovation",
    description: "From the Dreaming Spires to the Science Vale, EntireFM delivers facilities management that respects heritage while embracing innovation.",
    keyIndustries: ["Education", "Research & Development", "Technology", "Publishing", "Tourism"],
    coverageAreas: ["Oxford City Centre", "Oxford Science Park", "Milton Park", "Headington", "Cowley", "Bicester", "Witney", "Abingdon", "Kidlington", "Banbury"],
    localClients: ["Science Vale Research Campus", "Oxford Business Park", "University Research Facilities", "Publishing House Portfolio", "Heritage Properties Trust"],
    caseStudies: [
      {
        sector: "Research",
        title: "FM for biomedical research facility",
        metrics: ["Laboratory environments maintained", "Critical systems 100%", "Research continuity protected"]
      },
      {
        sector: "Technology",
        title: "Science Park tech campus management",
        metrics: ["Data centre environments supported", "Rapid response achieved", "Tenant satisfaction high"]
      },
      {
        sector: "Heritage",
        title: "Listed building and heritage property FM",
        metrics: ["Conservation compliance met", "Historic fabric protected", "Modern services integrated"]
      }
    ],
    faqs: [
      {
        question: "Do you cover Oxford Science Park and Milton Park?",
        answer: "Yes, we provide comprehensive FM services to the Science Vale area including Oxford Science Park, Milton Park, and research facilities across Oxfordshire."
      },
      {
        question: "Can you manage listed and heritage buildings?",
        answer: "Absolutely. We have extensive experience in heritage property FM, understanding conservation requirements while integrating modern building services."
      },
      {
        question: "What areas around Oxford do you cover?",
        answer: "We cover Oxford and the surrounding areas including Bicester, Witney, Abingdon, Banbury, and the wider Oxfordshire region."
      },
      {
        question: "Do you support research and laboratory environments?",
        answer: "Yes, we provide specialist FM to research facilities, maintaining critical laboratory environments and supporting research operations."
      }
    ],
    metaTitle: "Facilities Management Oxford | FM Services Oxfordshire | EntireFM",
    metaDescription: "Expert facilities management in Oxford & Oxfordshire. Research FM, technology support, heritage property services & 24/7 maintenance.",
    localContext: "Oxford uniquely blends 800 years of heritage with cutting-edge research and technology. EntireFM delivers FM that respects this balance."
  },
  doncaster: {
    slug: "doncaster",
    name: "Doncaster",
    region: "South Yorkshire",
    heroImage: "https://images.unsplash.com/photo-1590074072786-a66914d668f1?w=1920&q=80",
    tagline: "Logistics Hub FM Specialists",
    description: "Strategically located at the heart of the UK's logistics network, EntireFM delivers 24/7 facilities management to keep Doncaster moving.",
    keyIndustries: ["Logistics & Distribution", "Rail", "Aviation", "Manufacturing", "Retail"],
    coverageAreas: ["Doncaster Town Centre", "Doncaster iPort", "Robin Hood Airport", "Thorne", "Mexborough", "Conisbrough", "Armthorpe", "Bentley", "Hatfield", "Rossington"],
    localClients: ["iPort Logistics Campus", "Rail Freight Terminal", "Distribution Centre Network", "Doncaster Business Park", "Retail Distribution Hub"],
    caseStudies: [
      {
        sector: "Logistics",
        title: "FM for iPort mega-distribution centre",
        metrics: ["24/7 operational support", "Loading systems 100%", "Zero pick disruption"]
      },
      {
        sector: "Rail",
        title: "Rail freight terminal facility management",
        metrics: ["Intermodal systems maintained", "Compliance achieved", "Operational continuity assured"]
      },
      {
        sector: "Distribution",
        title: "Multi-client distribution park FM",
        metrics: ["Response time under 40 mins", "PPM completion 99%", "Energy efficiency improved"]
      }
    ],
    faqs: [
      {
        question: "Do you cover the iPort logistics park?",
        answer: "Yes, we provide comprehensive FM services to the iPort and other major logistics facilities in the Doncaster area, with 24/7 support for operational continuity."
      },
      {
        question: "Can you support rail freight facilities?",
        answer: "Absolutely. We have experience in rail freight FM, understanding the specific requirements of intermodal and rail-connected distribution facilities."
      },
      {
        question: "What areas around Doncaster do you cover?",
        answer: "We cover Doncaster and the surrounding areas including Thorne, Mexborough, Armthorpe, and the wider logistics corridor."
      },
      {
        question: "Do you provide 24/7 support for distribution centres?",
        answer: "Yes, we provide round-the-clock FM support to distribution and logistics facilities, understanding the critical nature of 24/7 operations."
      }
    ],
    metaTitle: "Facilities Management Doncaster | FM Services South Yorkshire | EntireFM",
    metaDescription: "Professional facilities management in Doncaster. Logistics FM, distribution centre support, rail freight services & 24/7 maintenance.",
    localContext: "Doncaster sits at the heart of the UK's logistics network, with iPort and excellent rail, road, and air connectivity. EntireFM keeps this vital hub operational."
  },
  rotherham: {
    slug: "rotherham",
    name: "Rotherham",
    region: "South Yorkshire",
    heroImage: "https://images.unsplash.com/photo-1582647509711-c8aa8b8c8d0d?w=1920&q=80",
    tagline: "Industrial FM Heritage",
    description: "From Rotherham's manufacturing heartland to the Advanced Manufacturing Park, EntireFM delivers expert industrial facilities management.",
    keyIndustries: ["Steel & Metals", "Advanced Manufacturing", "Engineering", "Distribution", "Retail"],
    coverageAreas: ["Rotherham Town Centre", "Manvers", "Waverley", "Parkgate", "Rawmarsh", "Wath upon Dearne", "Swinton", "Maltby", "Wickersley", "Advanced Manufacturing Park"],
    localClients: ["Steel Processing Facilities", "Advanced Manufacturing Campus", "Waverley Development", "Manvers Industrial Estate", "Rotherham Business Park"],
    caseStudies: [
      {
        sector: "Steel",
        title: "FM for steel processing facility",
        metrics: ["Heavy industry expertise demonstrated", "Critical systems maintained", "24/7 support provided"]
      },
      {
        sector: "Manufacturing",
        title: "Advanced Manufacturing Park FM",
        metrics: ["Precision environment maintained", "Research capability protected", "Specialist requirements met"]
      },
      {
        sector: "Distribution",
        title: "Manvers distribution centre management",
        metrics: ["Operational continuity assured", "Response time under 42 mins", "PPM completion 98%"]
      }
    ],
    faqs: [
      {
        question: "Do you have experience in heavy industrial FM?",
        answer: "Yes, we have extensive experience in steel, metals, and heavy industrial FM, understanding the unique requirements of these demanding environments."
      },
      {
        question: "Can you cover the Advanced Manufacturing Park?",
        answer: "Absolutely. We provide specialist FM services to the Advanced Manufacturing Park and surrounding advanced manufacturing facilities."
      },
      {
        question: "What areas around Rotherham do you cover?",
        answer: "We cover Rotherham and the surrounding areas including Manvers, Waverley, Parkgate, and the wider South Yorkshire industrial belt."
      },
      {
        question: "Do you support regeneration and new developments?",
        answer: "Yes, we work with developers on new developments like Waverley, providing FM from handover through to full occupation."
      }
    ],
    metaTitle: "Facilities Management Rotherham | FM Services South Yorkshire | EntireFM",
    metaDescription: "Expert facilities management in Rotherham. Industrial FM, steel processing support, manufacturing compliance & 24/7 maintenance.",
    localContext: "Rotherham has transformed from steel town to advanced manufacturing hub while maintaining its industrial strength. EntireFM serves both traditional and cutting-edge facilities."
  },
  telford: {
    slug: "telford",
    name: "Telford",
    region: "Shropshire",
    heroImage: "https://images.unsplash.com/photo-1590074072786-a66914d668f1?w=1920&q=80",
    tagline: "West Midlands Gateway FM",
    description: "From Telford's modern business parks to the birthplace of the Industrial Revolution, EntireFM delivers facilities management across Shropshire.",
    keyIndustries: ["Manufacturing", "Technology", "Distribution", "Retail", "Tourism"],
    coverageAreas: ["Telford Town Centre", "Telford International Centre", "Hortonwood", "Stafford Park", "Shrewsbury", "Bridgnorth", "Newport", "Wellington", "Madeley", "Ironbridge"],
    localClients: ["Telford Business Park Portfolio", "Manufacturing Excellence Centre", "Regional Distribution Hub", "Telford Shopping Centre", "Ironbridge Heritage Properties"],
    caseStudies: [
      {
        sector: "Manufacturing",
        title: "FM for precision manufacturing facility",
        metrics: ["Critical production protected", "PPM completion 99%", "Zero quality impacts"]
      },
      {
        sector: "Technology",
        title: "Technology park campus management",
        metrics: ["Data environments maintained", "Rapid response achieved", "Tenant satisfaction high"]
      },
      {
        sector: "Retail",
        title: "Shopping centre FM delivery",
        metrics: ["Trading hours protected 100%", "Footfall areas maintained", "Tenant coordination delivered"]
      }
    ],
    faqs: [
      {
        question: "Do you cover Telford's business parks?",
        answer: "Yes, we provide comprehensive FM services across Telford's major business parks including Hortonwood, Stafford Park, and the wider Telford commercial area."
      },
      {
        question: "Can you support manufacturing facilities?",
        answer: "Absolutely. We have extensive manufacturing FM experience, supporting precision production environments across Telford and Shropshire."
      },
      {
        question: "What areas around Telford do you cover?",
        answer: "We cover Telford and the surrounding areas including Shrewsbury, Bridgnorth, Newport, Wellington, and the wider Shropshire region."
      },
      {
        question: "Do you manage heritage properties in Ironbridge?",
        answer: "Yes, we have experience in heritage property FM, understanding the unique requirements of historic sites and conservation areas."
      }
    ],
    metaTitle: "Facilities Management Telford | FM Services Shropshire | EntireFM",
    metaDescription: "Professional facilities management in Telford & Shropshire. Manufacturing FM, technology support, retail services & 24/7 maintenance.",
    localContext: "Telford is one of the UK's fastest-growing business locations, combining modern industry with the heritage of Ironbridge, birthplace of the Industrial Revolution."
  }
};
