import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Users, 
  KeyRound, 
  Bell, 
  Calendar, 
  Sparkles, 
  GraduationCap,
  ArrowRight,
  Phone,
  CheckCircle2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ServiceSchema } from "@/components/shared/SchemaMarkup";
import { FAQSection } from "@/components/shared/FAQSection";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { FAQSchema } from "@/components/shared/SchemaMarkup";
import ServiceHeroSection from "@/components/shared/ServiceHeroSection";
import AnimatedSection from "@/components/shared/AnimatedSection";
import FeatureCardGrid from "@/components/shared/FeatureCardGrid";
import StatsBanner from "@/components/shared/StatsBanner";
import CTASection from "@/components/shared/CTASection";
import ContentSection from "@/components/shared/ContentSection";
import ServiceFeatureList from "@/components/shared/ServiceFeatureList";
import { TrustBar } from "@/components/shared/TrustBar";

const Concierge = () => {
  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Soft Services", href: "/services" },
    { label: "Building Concierge & Front-of-House" }
  ];

  const heroStats = [
    { value: "95", suffix: "%", label: "Occupier Satisfaction" },
    { value: "50", suffix: "+", label: "Buildings Supported" },
    { value: "24", suffix: "/7", label: "Coverage Available" },
    { value: "100", suffix: "%", label: "Staff Retention" }
  ];

  const features = [
    {
      icon: Users,
      title: "Visitor Reception",
      description: "Professional greeting, registration, and escort services with digital visitor management systems."
    },
    {
      icon: KeyRound,
      title: "Access Management",
      description: "Key collection, fob activation, contractor sign-in, and access control coordination."
    },
    {
      icon: Bell,
      title: "Occupier Support",
      description: "First-line query resolution, helpdesk liaison, and proactive service coordination."
    },
    {
      icon: Calendar,
      title: "Amenity Bookings",
      description: "Meeting room management, car parking allocation, and facility reservations."
    },
    {
      icon: Sparkles,
      title: "Premium Services",
      description: "Package acceptance, dry cleaning coordination, taxi bookings, and personal errands."
    },
    {
      icon: GraduationCap,
      title: "Trained Excellence",
      description: "Hospitality-trained staff with comprehensive building knowledge and customer service skills."
    }
  ];

  const coreServices = [
    {
      title: "Visitor Reception & Management",
      description: "Professional visitor greeting and registration including digital sign-in, visitor badges, host notification, and escort services. Pre-registration streamlines arrivals while security screening ensures compliance. Premium buildings offer refreshments, cloakroom, and Wi-Fi access."
    },
    {
      title: "Access Control & Key Management",
      description: "Coordination of building access including key sign-out and tracking, temporary fob activation, contractor sign-in with induction verification, and visitor escorts to restricted areas. Balances convenience with security protocols."
    },
    {
      title: "Occupier Support & Information",
      description: "First-line support for building queries, navigation, service contacts. Log helpdesk requests, liaise with FM team, provide status updates. Building knowledge covers fire procedures, emergency contacts, and facility usage."
    },
    {
      title: "Amenity Coordination",
      description: "Management of meeting room bookings, car parking allocation, gym access, and event spaces. Digital booking systems enable self-service while concierge handles complex requirements and last-minute changes."
    }
  ];

  const premiumServices = [
    {
      title: "Personalized Occupier Services",
      description: "Package acceptance and distribution, dry cleaning coordination, taxi and courier bookings, local recommendations, and discretionary personal errands for executives."
    },
    {
      title: "Event Support & Coordination",
      description: "Pre-event planning including space setup and AV coordination. Event-day registration and attendee management. Post-event reset and feedback collection."
    }
  ];

  const stats = [
    { value: "95", suffix: "%", label: "Occupier Satisfaction" },
    { value: "50", suffix: "+", label: "Buildings Supported" },
    { value: "4.8", suffix: "/5", label: "Service Rating" },
    { value: "100", suffix: "%", label: "Mystery Shopper Pass Rate" }
  ];

  const faqs = [
    {
      question: "What is the role of building concierge in commercial estates?",
      answer: "Building concierge provides first-impression management and occupier support: Visitor reception (greet, register, escort, issue passes), Access management (key collection, fob activation, contractor sign-in), Information provision (building navigation, amenity locations, occupier queries), Service coordination (link occupiers to FM helpdesk, building management), Amenity management (meeting room bookings, facility reservations), Communications (distribute post, packages, notices). Concierge is visible face of building management—professional, courteous service enhances occupier satisfaction and building reputation. Poor concierge—unwelcoming, unhelpful, unprofessional—damages first impressions regardless of technical FM excellence."
    },
    {
      question: "What is the difference between concierge and reception services?",
      answer: "Concierge is proactive and service-oriented (anticipate needs, solve problems, enhance experience), Reception is reactive and administrative (answer calls, register visitors, provide information). Concierge includes: Personalized service (recognize regular occupiers, remember preferences), Problem-solving (resolve issues, coordinate services, escalate concerns), Building knowledge (comprehensive understanding of facilities, services, procedures), Customer service excellence (hospitality-trained, professional conduct). Reception is entry-level—basic visitor management and call handling. Concierge is premium service—enhancing occupier experience through proactive support and relationship management. Appropriate service level depends on building grade and tenant expectations."
    },
    {
      question: "How do you recruit and train building concierge staff?",
      answer: "Recruitment prioritizes: Customer service experience (hospitality, retail, front-of-house background), Communication skills (articulate, courteous, professional presentation), Problem-solving ability (resourceful, calm under pressure), Building knowledge (willingness to learn technical systems, procedures). Training includes: Building familiarization (layout, amenities, emergency procedures, technical systems), Service procedures (visitor management, access control, booking systems), Customer service skills (greeting, communication, conflict resolution), FM coordination (helpdesk liaison, contractor management, incident reporting), Health & safety (fire procedures, first aid, incident management). Ongoing training ensures staff maintain service standards and adapt to building changes."
    },
    {
      question: "What technology supports modern concierge services?",
      answer: "Technology enhances concierge efficiency: Visitor management systems (digital registration, pre-registration, badge printing, host notifications), Access control integration (temporary passes, contractor access, key tracking), Booking systems (meeting rooms, car parking, amenities—calendar integration), Communication platforms (mobile apps, intranet, digital directories), CAFM integration (log service requests, track helpdesk jobs, view building information). Technology streamlines administrative tasks allowing concierge to focus on relationship-building and service delivery. However, technology cannot replace human interaction—professional, courteous staff remain essential for positive first impressions."
    },
    {
      question: "How do you measure concierge service quality and performance?",
      answer: "Performance metrics include: Occupier satisfaction scores (surveys, feedback, NPS), Response times (query resolution, service coordination), Complaint frequency (service failures, escalations), Visitor experience (feedback surveys, professional conduct), Attendance and punctuality (shift coverage, reliability). Mystery shopper audits assess service quality objectively—testing reception standards, problem-solving, building knowledge. Monthly performance reviews identify training needs, process improvements, and service refinements. High-performing concierge teams are: Consistently professional, Proactive problem solvers, Building knowledge experts, Positive ambassadors for building brand."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Building Concierge & Front-of-House Services | Commercial Estates | EntireFM</title>
        <meta name="description" content="Building concierge and front-of-house services for commercial and residential estates. First-impression management, visitor reception and occupier support." />
        <link rel="canonical" href="https://entirefm.com/soft-services/concierge" />
      </Helmet>

      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema 
        name="Building Concierge & Front-of-House Services"
        description="First-impression management for commercial and residential estates. Building concierge providing visitor reception, access management and occupier support services."
        provider="EntireFM"
        areaServed="United Kingdom"
      />
      <FAQSchema faqs={faqs} />

      {/* Hero Section */}
      <ServiceHeroSection
        breadcrumbItems={breadcrumbItems}
        title="Building Concierge & Front-of-House"
        description="First-impression management for commercial and residential estates. Hospitality-trained teams delivering visitor reception, access management, and proactive occupier support."
        stats={heroStats}
        primaryCTA={{ label: "Request Quote", href: "/request-proposal", icon: ArrowRight }}
        secondaryCTA={{ label: "0800 024 8550", href: "tel:08000248550", icon: Phone }}
      />

      {/* Trust Bar */}
      <TrustBar variant="compact" />

      {/* Features Grid */}
      <ContentSection
        title="The Face of Building Management"
        subtitle="Professional concierge enhances occupier satisfaction, supports building security, and strengthens brand reputation through exceptional front-of-house service."
        centered
      >
        <FeatureCardGrid features={features} columns={3} variant="gradient" />
      </ContentSection>

      {/* Stats Banner */}
      <StatsBanner stats={stats} variant="gradient" />

      {/* Core Services */}
      <ContentSection
        title="Core Concierge Services"
        subtitle="Essential front-of-house functions that create positive first impressions and streamline building operations."
        variant="muted"
      >
        <ServiceFeatureList items={coreServices} variant="cards" columns={2} />
      </ContentSection>

      {/* Premium Services */}
      <ContentSection
        title="Premium Concierge Services"
        subtitle="Hospitality-level services that differentiate Grade A buildings and enhance occupier experience."
      >
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {premiumServices.map((service, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <div className="h-full p-8 bg-gradient-to-br from-primary/5 to-background border border-primary/20 rounded-2xl">
                <h3 className="text-xl font-medium mb-4 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground font-light leading-relaxed">{service.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </ContentSection>

      {/* Training & Standards */}
      <ContentSection
        title="Training & Service Standards"
        subtitle="Hospitality-trained staff with comprehensive building knowledge deliver consistently excellent service."
        variant="gradient"
      >
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Customer Service Excellence",
              items: [
                "Professional greeting and active listening",
                "Problem-solving and conflict resolution",
                "Hospitality-standard presentation",
                "Proactive service delivery"
              ]
            },
            {
              title: "Building Knowledge",
              items: [
                "Complete layout and navigation mastery",
                "Emergency procedures and first aid",
                "Technical systems understanding",
                "FM and helpdesk coordination"
              ]
            },
            {
              title: "Professional Standards",
              items: [
                "Uniform and presentation standards",
                "Clear, articulate communication",
                "Punctuality and reliability",
                "Continuous improvement focus"
              ]
            }
          ].map((section, idx) => (
            <AnimatedSection key={idx} delay={idx * 0.1}>
              <div className="p-8 bg-card border border-border rounded-2xl h-full">
                <h3 className="text-xl font-medium mb-4">{section.title}</h3>
                <ul className="space-y-3">
                  {section.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground font-light">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </ContentSection>

      {/* Technology */}
      <ContentSection
        title="Technology Integration"
        subtitle="Modern concierge services leverage technology to streamline administration while maintaining the human touch that creates positive experiences."
      >
        <AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { title: "Visitor Management", desc: "Digital registration, pre-registration, badge printing" },
              { title: "Access Control", desc: "Temporary passes, contractor access, audit trails" },
              { title: "Booking Systems", desc: "Meeting rooms, parking, amenities with calendar sync" },
              { title: "CAFM Integration", desc: "Service requests, helpdesk tracking, building data" }
            ].map((tech, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 bg-muted/30 border border-border rounded-xl text-center"
              >
                <h4 className="font-medium mb-2">{tech.title}</h4>
                <p className="text-sm text-muted-foreground font-light">{tech.desc}</p>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </ContentSection>

      {/* Related Services */}
      <ContentSection
        title="Related Services"
        centered
        variant="muted"
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[
            { title: "Occupier Experience", desc: "Tenant engagement and satisfaction", href: "/fm-operations/occupier-experience" },
            { title: "Access Control", desc: "Security and access management", href: "/services/access-control" },
            { title: "Front of House", desc: "Reception and soft FM services", href: "/services/front-of-house" },
            { title: "Technical Helpdesk", desc: "Service coordination and support", href: "/fm-operations/helpdesk" }
          ].map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Link 
                to={service.href}
                className="block p-6 bg-card border border-border rounded-xl hover:border-primary/50 hover:shadow-md transition-all group"
              >
                <h3 className="font-medium mb-2 group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-sm text-muted-foreground font-light">{service.desc}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </ContentSection>

      {/* FAQ Section */}
      <ContentSection
        title="Frequently Asked Questions"
        centered
      >
        <div className="max-w-3xl mx-auto">
          <FAQSection faqs={faqs} />
        </div>
      </ContentSection>

      {/* CTA Section */}
      <CTASection
        title="Request Concierge Services"
        description="Elevate your building's first impression with hospitality-trained concierge teams. Professional, proactive, and personalized service for commercial and residential estates."
        variant="dark"
      />
    </>
  );
};

export default Concierge;
