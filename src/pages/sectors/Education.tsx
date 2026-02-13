import SectorPageTemplate from "@/components/shared/SectorPageTemplate";
import { GraduationCap } from "lucide-react";
import heroImage from "@/assets/sector-education-hero.jpg";

const Education = () => {
  return (
    <SectorPageTemplate
      title="Universities & Education FM | Campus Compliance & Safety"
      metaDescription="Safe learning environments — full compliance across complex, multi-building campus estates with digital governance and asset lifecycle management."
      canonicalUrl="https://entirefm.com/sectors/education"
      heroTitle="Universities & Education FM"
      heroSubtitle="Safe learning environments — full compliance across complex, multi-building campus estates with digital governance and asset lifecycle management."
      heroImage={heroImage}
      heroIcon={GraduationCap}
      stats={[
        { value: "64%", label: "IAQ Improvement" },
        { value: "100%", label: "Campus Coverage" },
        { value: "BS 9999", label: "Compliant" },
        { value: "Multi-Site", label: "Governance" },
      ]}
      sectorSummary={{
        title: "Campus FM Challenges",
        paragraphs: [
          "University estates present unique facilities management challenges: aged plant infrastructure across multiple buildings, large-scale risk profiles, specialist lab environments, and heightened insurer scrutiny.",
          "Our approach delivers asset lifecycle governance, fire compartmentation assurance, and digital compliance dashboards designed specifically for estates teams managing complex educational portfolios."
        ]
      }}
      complianceRisks={[
        {
          title: "Aged Plant Infrastructure",
          description: "Many university buildings contain legacy mechanical and electrical systems requiring specialist maintenance knowledge and proactive lifecycle planning to avoid costly failures."
        },
        {
          title: "Fire Compartmentation",
          description: "Large buildings with multiple occupancy types require rigorous fire compartmentation surveys and ongoing maintenance to protect students and staff.",
          link: "/services/fire-compartmentation-surveys",
          linkText: "Fire compartmentation surveys"
        },
        {
          title: "Water Hygiene in Lab Environments",
          description: "Research facilities and laboratories present complex water hygiene challenges requiring specialist treatment and monitoring protocols.",
          link: "/services/water-hygiene",
          linkText: "Water hygiene management"
        },
        {
          title: "Insurer Scrutiny",
          description: "Educational institutions face increasing insurance requirements around fire safety, electrical compliance, and water hygiene documentation."
        }
      ]}
      keySystems={[
        {
          category: "Building Systems",
          items: [
            "HVAC and ventilation systems",
            "Fire detection and suppression",
            "Emergency lighting",
            "Electrical distribution",
            "Water treatment systems",
            "Building management systems"
          ]
        },
        {
          category: "Specialist Facilities",
          items: [
            "Laboratory fume extraction",
            "Lecture theatre AV systems",
            "Sports facility equipment",
            "Student accommodation plant",
            "Catering equipment",
            "Library environmental controls"
          ]
        }
      ]}
      operationalChallenges={[
        {
          title: "Term-Time Restrictions",
          description: "Major works must be scheduled during vacation periods. Reactive maintenance during term time requires minimal disruption to teaching and research activities."
        },
        {
          title: "Multi-Building Estates",
          description: "Campus estates often span dozens of buildings of varying age and construction. Consistent compliance standards must be applied across the entire portfolio."
        },
        {
          title: "Stakeholder Coordination",
          description: "Works require coordination with academic departments, student services, security, and estates teams to minimize impact on university operations."
        }
      ]}
      whyEntireFM={[
        "Asset lifecycle governance across complex estates",
        "Fire compartmentation and evacuation safety expertise",
        "Digital compliance dashboard for estates teams",
        "Vacation scheduling for major works",
        "Specialist laboratory and research facility support"
      ]}
      caseStudies={[
        {
          title: "Teaching Block Ventilation Upgrade",
          description: "IAQ improved by 64%. Student comfort complaints eliminated. Works completed during summer break.",
          link: "/case-studies",
          linkText: "View case studies"
        }
      ]}
      relatedServices={[
        { title: "PPM Programmes", description: "Campus-wide governance", href: "/services/ppm" },
        { title: "Fire Safety", description: "Compartmentation assurance", href: "/services/fire-safety" },
        { title: "Water Hygiene", description: "Lab environments", href: "/services/water-hygiene" }
      ]}
      faqs={[
        {
          question: "How do you manage maintenance during term time?",
          answer: "We prioritize non-disruptive works during teaching hours and schedule noisy or intrusive maintenance outside peak times. Major works are planned for vacation periods."
        },
        {
          question: "Can you provide a single compliance dashboard for our entire estate?",
          answer: "Yes. Our digital platform provides real-time visibility of compliance status, upcoming inspections, and certification expiry across all buildings in your portfolio."
        },
        {
          question: "Do you have experience with laboratory facilities?",
          answer: "Our engineers are trained in laboratory-specific systems including fume extraction, specialist ventilation, and water treatment for research environments."
        },
        {
          question: "How do you handle emergency callouts during term time?",
          answer: "Our 24/7 helpdesk provides rapid response for emergencies. Engineers coordinate with security and estates teams to access buildings while minimizing disruption."
        }
      ]}
    />
  );
};

export default Education;
