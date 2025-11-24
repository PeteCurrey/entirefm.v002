import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { ServiceSchema } from "@/components/shared/SchemaMarkup";
import { FAQSection } from "@/components/shared/FAQSection";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { FAQSchema } from "@/components/shared/SchemaMarkup";
import { SidebarCTA } from "@/components/shared/SidebarCTA";

const Concierge = () => {
  const breadcrumbItems = [
    { label: "Soft Services", href: "/services" },
    { label: "Building Concierge & Front-of-House" }
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
      </Helmet>

      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema 
        name="Building Concierge & Front-of-House Services"
        description="First-impression management for commercial and residential estates. Building concierge providing visitor reception, access management and occupier support services."
        provider="EntireFM"
        areaServed="United Kingdom"
      />
      <FAQSchema faqs={faqs} />

      <div className="container mx-auto px-4 py-8">
        <Breadcrumb items={breadcrumbItems} />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          <div className="lg:col-span-2">
            <section className="mb-12">
              <h1 className="text-4xl md:text-5xl font-light mb-6">
                Building Concierge & Front-of-House Services
              </h1>
              <p className="text-xl text-muted-foreground font-light leading-relaxed">
                First-impression management for commercial and residential estates.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Concierge: The Face of Building Management
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                Building concierge delivers first-impression management—visitor reception, access control, information provision, and occupier support. Concierge is the visible face of building management—greeting visitors, resolving queries, coordinating services. Professional concierge enhances occupier satisfaction, supports building security, and strengthens brand reputation. Poor concierge—unwelcoming, unhelpful, unprofessional—damages first impressions regardless of technical FM excellence.
              </p>
              <p className="text-muted-foreground font-light leading-relaxed">
                Concierge services are appropriate for: Corporate headquarters (premium reception, visitor management), Multi-tenant commercial offices (occupier support, amenity coordination), Residential buildings (resident services, package management, security liaison), Hospitality-adjacent buildings (meeting spaces, events, flexible workspace). Service levels range from basic reception (visitor registration, call handling) to premium concierge (personalized service, problem-solving, relationship management). Our concierge teams combine hospitality standards with FM integration—delivering professional reception services that enhance occupier experience.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Core Concierge Services
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium mb-2">Visitor Reception & Management</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Professional visitor greeting and registration: Welcome (courteous greeting, professional first impression), Registration (digital sign-in, visitor badges, host notification), Escort (accompany visitors to meeting locations, ensure security compliance), Departure (check-out, badge return, feedback collection). Visitor management systems enable: Pre-registration (visitors expected, streamlined arrival), Security screening (watchlist checks, compliance with building policies), Data capture (audit trail, emergency roll-call, analytics). Premium buildings offer: Refreshments (tea, coffee, water while waiting), Cloakroom services (coat storage, umbrella provision), Wi-Fi access (guest network credentials).
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Access Control & Key Management</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Coordination of building access: Key collection (sign-out, tracking, return management), Fob activation (temporary access, contractor passes), Contractor sign-in (induction verification, permit-to-work liaison), Visitor escorts (accompany to restricted areas), Lost access (deactivate lost fobs, issue replacements). Access management ensures security while enabling efficient building operations. Concierge liaises with security, FM, and occupiers to balance access convenience with security protocols.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Occupier Support & Information</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    First-line occupier support: Queries (building navigation, amenity locations, service contacts), Service coordination (log helpdesk requests, liaise with FM team, provide status updates), Information distribution (notices, communications, post/package management), Building knowledge (fire procedures, emergency contacts, facility usage). Concierge acts as single point of contact—simplifying occupier interaction with building management. Proactive concierge anticipates needs, resolves issues, and enhances occupier satisfaction through responsive support.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Amenity Coordination & Bookings</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Management of shared facilities: Meeting room bookings (calendar management, setup, catering coordination), Car parking (space allocation, visitor parking, permit management), Gym/wellness facilities (access management, equipment bookings, class scheduling), Event spaces (booking, setup, post-event reset). Booking systems (digital calendars, mobile apps) enable self-service while concierge provides support for complex requirements, conflicts, and last-minute changes.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Premium Concierge Services
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium mb-2">Personalized Occupier Services</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Premium concierge provides hospitality-level services: Package acceptance (receive, store, notify, distribute parcels), Dry cleaning coordination (collection, drop-off service), Taxi/courier bookings (pre-book, coordinate arrivals), Local recommendations (restaurants, hotels, transport), Personal errands (discretionary services for executives). Personalization enhances occupier experience—recognizing regular visitors, remembering preferences, anticipating needs. Premium service is differentiator for Grade A buildings attracting corporate occupiers.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Event Support & Coordination</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Support for building events (conferences, exhibitions, networking): Pre-event planning (space setup, AV coordination, catering liaison), Event-day support (registration, directions, attendee management), Post-event reset (space restoration, feedback collection). Event coordination demonstrates building capabilities and enhances occupier satisfaction through seamless delivery of complex activities.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Concierge Training & Standards
              </h2>
              <div className="bg-muted/50 p-6 rounded-lg space-y-4">
                <div>
                  <h3 className="font-medium mb-2">Customer Service Excellence</h3>
                  <p className="text-sm text-muted-foreground font-light">
                    Training in hospitality standards: Professional greeting (eye contact, smile, courteous language), Active listening (understand needs, ask clarifying questions), Problem-solving (resourceful, proactive, escalate appropriately), Conflict resolution (calm, professional, de-escalate tensions). Customer service training differentiates concierge from basic reception—creating positive experiences through professional, proactive support.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Building Knowledge & FM Integration</h3>
                  <p className="text-sm text-muted-foreground font-light">
                    Comprehensive building understanding: Layout and navigation (direct visitors confidently), Amenity locations (meeting rooms, facilities, services), Emergency procedures (fire, evacuation, first aid, incident management), FM coordination (helpdesk liaison, maintenance scheduling, contractor management). Building knowledge enables effective information provision and service coordination—enhancing occupier support.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Professional Presentation & Conduct</h3>
                  <p className="text-sm text-muted-foreground font-light">
                    Consistent professional standards: Uniform/dress code (smart, clean, building-appropriate), Personal presentation (groomed, name badge visible), Communication (clear, articulate, positive tone), Punctuality and reliability (consistent shift coverage, minimal absences). Professional presentation reinforces building brand and occupier confidence in service quality.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Technology Integration
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                Modern concierge services leverage technology: Visitor management systems (digital registration, pre-registration, badge printing, host notifications—eliminates paper logs), Access control integration (temporary passes, contractor access, audit trails), Booking platforms (meeting rooms, parking, amenities—calendar sync, mobile apps), Communication tools (digital displays, mobile apps, occupier portals—real-time information), CAFM integration (service request logging, helpdesk tracking, building data access).
              </p>
              <p className="text-muted-foreground font-light leading-relaxed">
                Technology streamlines administrative tasks enabling concierge to focus on relationship-building and proactive service. However, technology cannot replace human interaction—professional, courteous staff remain essential for positive first impressions and occupier satisfaction. Best-practice concierge combines digital efficiency with personal service excellence.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Related Services
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link to="/fm-operations/occupier-experience" className="p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                  <h3 className="font-medium mb-2">Occupier Experience</h3>
                  <p className="text-sm text-muted-foreground font-light">Tenant engagement and satisfaction</p>
                </Link>
                <Link to="/services/access-control" className="p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                  <h3 className="font-medium mb-2">Access Control</h3>
                  <p className="text-sm text-muted-foreground font-light">Security and access management</p>
                </Link>
                <Link to="/services/front-of-house" className="p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                  <h3 className="font-medium mb-2">Front of House Services</h3>
                  <p className="text-sm text-muted-foreground font-light">Reception and soft FM services</p>
                </Link>
                <Link to="/fm-operations/helpdesk" className="p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                  <h3 className="font-medium mb-2">Technical Helpdesk</h3>
                  <p className="text-sm text-muted-foreground font-light">Service coordination and support</p>
                </Link>
              </div>
            </section>

            <section className="mb-12">
              <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg">
                <h2 className="text-2xl font-light mb-4">Request Concierge Services</h2>
                <p className="text-muted-foreground font-light leading-relaxed mb-6">
                  Our building concierge services combine hospitality standards with FM integration—delivering professional reception that enhances first impressions, supports occupiers, and strengthens building reputation. Contact us to discuss concierge requirements for your estate.
                </p>
                <Link 
                  to="/request-proposal" 
                  className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Request Concierge Proposal
                </Link>
              </div>
            </section>

            <FAQSection faqs={faqs} />
          </div>

          <aside className="lg:col-span-1">
            <SidebarCTA />
          </aside>
        </div>
      </div>
    </>
  );
};

export default Concierge;
