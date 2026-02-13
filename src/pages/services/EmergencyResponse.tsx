import { Helmet } from "react-helmet";
import { ArrowRight, Phone, Flame, Droplets, Zap, Wind, ArrowUpDown, Shield } from "lucide-react";
import ServiceHeroSection from "@/components/shared/ServiceHeroSection";
import { TrustBar } from "@/components/shared/TrustBar";
import ContentSection from "@/components/shared/ContentSection";
import FeatureCardGrid from "@/components/shared/FeatureCardGrid";
import StatsBanner from "@/components/shared/StatsBanner";
import CTASection from "@/components/shared/CTASection";
import { FAQSection } from "@/components/shared/FAQSection";
import { ServiceSchema, FAQSchema } from "@/components/shared/SchemaMarkup";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";

const EmergencyResponse = () => {
  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Emergency Response & Critical Incident Management" }
  ];

  const features = [
    {
      icon: Flame,
      title: "Fire Safety Emergencies",
      description: "Fire alarm activations, smoke detection faults, suppression system discharge, and emergency lighting failures — with fire service liaison and post-incident system restoration."
    },
    {
      icon: Droplets,
      title: "Water & Plumbing Emergencies",
      description: "Major leaks, burst pipes, tank overflows, and flooding. Immediate isolation, water extraction, temporary repairs, and permanent rectification."
    },
    {
      icon: Zap,
      title: "Electrical & Power Failures",
      description: "Total power loss, partial outages, distribution faults, and generator failures. Safety isolation, load prioritisation, and supply restoration."
    },
    {
      icon: Wind,
      title: "HVAC & Plant Failures",
      description: "Boiler failures, chiller breakdowns, ventilation faults, and BMS failures. Temporary measures deployed while permanent repairs are completed."
    },
    {
      icon: ArrowUpDown,
      title: "Lift & Access Emergencies",
      description: "Passenger entrapments, door faults, and mechanical failures. Coordinated rescue with specialist lift contractors and emergency services."
    },
    {
      icon: Shield,
      title: "Security & Access Incidents",
      description: "Access control failures, intruder alarms, CCTV faults, and site security breaches requiring immediate attendance and investigation."
    }
  ];

  const faqs = [
    {
      question: "What constitutes an FM emergency requiring immediate response?",
      answer: "FM emergencies are life-safety risks or critical system failures: fire alarm activation, major water leaks, gas leaks, power failures, lift entrapments, structural damage, and HVAC failures in critical environments like data centres or healthcare facilities."
    },
    {
      question: "How do you manage out-of-hours emergencies?",
      answer: "Our 24/7 helpdesk receives calls, triages severity, and dispatches on-call engineers or specialist subcontractors. Remote BMS diagnostics allow investigation before site attendance. Critical incidents trigger management escalation for appropriate resources and decision-making."
    },
    {
      question: "What is the role of BMS in emergency response?",
      answer: "Building management systems provide real-time visibility enabling remote diagnostics, automated alerts for critical failures, remote system isolation, and trend analysis for pre-failure warnings. BMS-equipped buildings typically achieve faster response times and reduced downtime."
    },
    {
      question: "What post-emergency actions prevent recurrence?",
      answer: "Every critical incident generates an incident report, management review, preventative measures, and client debrief. Root cause analysis identifies equipment end-of-life, maintenance gaps, design issues, or operational factors to prevent repeat failures."
    },
    {
      question: "Do you provide standalone emergency cover?",
      answer: "Yes — we offer emergency response as a standalone service or integrated within broader FM contracts. Both options include 24/7 helpdesk, multi-trade engineer dispatch, and transparent incident reporting."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Emergency Response & Critical Incident Management | 24/7 | EntireFM</title>
        <meta name="description" content="24/7 emergency response for FM emergencies. Coordinated response for water leaks, electrical failures, fire alarms, and plant breakdowns with immediate dispatch." />
        <link rel="canonical" href="https://entirefm.com/services/emergency-response" />
      </Helmet>

      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        name="Emergency Response & Critical Incident Management"
        description="Coordinated FM response for water leaks, electrical failures, fire alarms, plant breakdown and critical safety events. 24/7 emergency response with immediate dispatch."
        provider="EntireFM"
        areaServed="United Kingdom"
      />
      <FAQSchema faqs={faqs} />

      <div className="min-h-screen bg-background">
        <ServiceHeroSection
          breadcrumbItems={breadcrumbItems}
          title="Emergency Response and Critical Incident Management"
          description="Coordinated FM response for water leaks, electrical failures, fire alarms, plant breakdowns, and critical safety events — with immediate dispatch and transparent communication."
          primaryCTA={{
            label: "Request Emergency Cover",
            href: "/request-proposal",
            icon: ArrowRight
          }}
          secondaryCTA={{
            label: "24/7 Helpdesk",
            href: "/contact",
            icon: Phone
          }}
        />

        <TrustBar />

        <ContentSection
          title="What Is Emergency Response in Facilities Management?"
          subtitle="Speed, competence, and communication when it matters most"
        >
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground font-light leading-relaxed mb-4">
              FM emergencies — fire alarms, gas leaks, major water leaks, power failures, lift entrapments — require immediate, competent response. Delayed or inadequate emergency response causes life-safety risks, operational disruption, property damage, and potential regulatory action including HSE investigations and enforcement notices.
            </p>
            <p className="text-muted-foreground font-light leading-relaxed mb-4">
              Effective emergency response requires a 24/7 helpdesk for immediate call receipt and severity triage, on-call engineers for rapid dispatch and competent diagnosis, specialist subcontractor networks for lifts, fire alarms, and gas, BMS access for remote diagnostics and system isolation, and clear escalation pathways with transparent client communication.
            </p>
            <p className="text-muted-foreground font-light leading-relaxed">
              EntireFM delivers immediate attendance, make-safe actions, and permanent rectification — minimising risk, downtime, and disruption. Every incident is documented with full timeline, root cause analysis, and preventative recommendations.
            </p>
          </div>
        </ContentSection>

        <ContentSection title="Emergency Categories" subtitle="Multi-trade response across all critical building systems">
          <FeatureCardGrid features={features} />
        </ContentSection>

        <StatsBanner
          stats={[
            { value: "24/7/365", label: "Availability" },
            { value: "Multi-Trade", label: "Engineers" },
            { value: "Immediate", label: "Dispatch" },
            { value: "UK Wide", label: "Coverage" }
          ]}
          variant="gradient"
        />

        <ContentSection
          title="Post-Incident Analysis and Continuous Improvement"
          variant="muted"
        >
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground font-light leading-relaxed mb-4">
              Every critical incident generates a detailed incident report covering timeline, actions taken, root cause, and costs. Management reviews assess response effectiveness and identify improvements. Preventative measures are implemented through PPM adjustments, monitoring enhancements, and protocol updates.
            </p>
            <p className="text-muted-foreground font-light leading-relaxed">
              Our continuous improvement culture uses emergency data to reduce incident frequency through enhanced PPM and predictive monitoring, improve response times through geographic coverage and parts availability, and enhance communication through clearer protocols and faster escalation.
            </p>
          </div>
        </ContentSection>

        <ContentSection title="Frequently Asked Questions">
          <FAQSection faqs={faqs} />
        </ContentSection>

        <CTASection
          title="Need 24/7 Emergency Response Cover?"
          description="Our emergency response service delivers immediate dispatch, competent diagnosis, and transparent communication — whether standalone cover or integrated FM delivery."
          primaryLabel="Request Emergency Cover"
          primaryHref="/request-proposal"
          secondaryLabel="Contact Us"
          secondaryHref="/contact"
          variant="dark"
        />
      </div>
    </>
  );
};

export default EmergencyResponse;
