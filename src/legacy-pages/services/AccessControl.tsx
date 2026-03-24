"use client";

import ServicePageTemplate from "@/components/shared/ServicePageTemplate";
import { KeyRound } from "lucide-react";

const AccessControl = () => {
  return (
    <ServicePageTemplate
      title="Access Control Systems | Door Entry & Security Systems | EntireFM"
      metaDescription="Access control system maintenance and installation. Fobs, door entry, turnstiles, CCTV integration, and electrical compliance for building security systems."
      canonicalUrl="https://entirefm.com/services/access-control"
      breadcrumbItems={[
        { label: "Services", href: "/services" },
        { label: "Access Control" }
      ]}
      heroTitle="Access Control Systems"
      heroSubtitle="Fobs, door control, turnstiles, integration with CCTV, and electrical compliance crossover for comprehensive building security."
      heroImage="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80"
      heroIcon={KeyRound}
      stats={[
        { value: "BS 7671", label: "Compliant" },
        { value: "24/7", label: "Emergency Response" },
        { value: "100%", label: "Integration Ready" },
        { value: "Fail-Safe", label: "Tested" },
      ]}
      overview={{
        title: "System Coverage",
        paragraphs: [
          "Access control systems regulate building entry, manage visitor flow, and integrate with fire safety and security infrastructure. Modern systems combine electronic locks, card readers, biometric verification, and automated barrier controls.",
          "These systems require specialist maintenance covering electrical installation, mechanical door hardware, software management, and integration with building management systems. Failed access control creates security vulnerabilities and operational disruption."
        ]
      }}
      components={[
        {
          title: "Electronic Door Entry",
          description: "Proximity card readers, keypad systems, biometric scanners, and smartphone-based entry. Electromagnetic locks, electric strikes, and motorized latch mechanisms."
        },
        {
          title: "Turnstiles & Barriers",
          description: "Full-height turnstiles, waist-high barriers, speed gates, and wheelchair-accessible lanes. Vehicle barrier gates and bollards for car park access control."
        },
        {
          title: "Fire Safety Integration",
          description: "Fire alarm interfaces that release electromagnetic locks. Automatic door hold-open devices that release on alarm activation. Break-glass emergency exit releases."
        },
        {
          title: "CCTV & Security Integration",
          description: "Camera systems linked to access events for identity verification. Intruder alarm integration for after-hours arming. Visitor management system coordination."
        }
      ]}
      compliance={{
        title: "Electrical Compliance Requirements",
        intro: "Access control systems are electrical installations subject to BS 7671 wiring regulations. All cabling, power supplies, and control equipment must comply with fixed wire testing requirements.",
        items: [
          {
            title: "Power Supply Standards",
            description: "Dedicated power supplies with battery backup ensure continued operation during power failures. Surge protection prevents damage from lightning or voltage spikes. Five-yearly EICR testing covers all access control circuits."
          },
          {
            title: "Emergency Release Requirements",
            description: "Fire exit doors must unlock automatically on fire alarm activation. Manual break-glass units provide emergency override. Systems must fail-safe to prevent entrapment during power loss."
          },
          {
            title: "Cable Installation Standards",
            description: "Data cabling must meet structured cabling standards. Fire-rated cables are required in escape routes. Proper earthing and bonding prevents electric shock risks."
          }
        ]
      }}
      maintenance={[
        "Quarterly system health checks and reader cleaning",
        "Annual lock mechanism servicing and strike adjustment",
        "Fire alarm integration testing and fail-safe verification",
        "Battery backup testing and replacement",
        "Software updates and security patch management",
        "Door closer adjustment and hardware lubrication"
      ]}
      risks={[
        {
          title: "Security Breaches",
          description: "Failed locks allow unauthorized entry. Cloning vulnerabilities in older card systems enable security bypasses. Software glitches create access denial or uncontrolled entry."
        },
        {
          title: "Fire Safety Non-Compliance",
          description: "Magnetic locks that fail to release during fire alarms create entrapment risks. Non-functional break-glass units prevent emergency exit. Both create serious legal liability."
        },
        {
          title: "Operational Disruption",
          description: "System failures prevent staff access at shift changes. Broken turnstiles cause queuing and congestion. Visitor management failures impact customer experience and reception workflows."
        }
      ]}
      benefits={[
        "Engineers qualified in both electrical and access control systems",
        "Fire safety integration testing and compliance verification",
        "24/7 emergency response for access control failures",
        "System health monitoring and proactive fault detection",
        "CCTV and BMS integration capability"
      ]}
      relatedServices={[
        { title: "CCTV Maintenance", description: "Surveillance system compliance", href: "/services/cctv-maintenance" },
        { title: "ANPR Systems", description: "Vehicle access control", href: "/services/anpr-systems" },
        { title: "Security Health Check", description: "Whole-site assessments", href: "/services/security-systems-healthcheck" },
        { title: "Fire Alarms", description: "Life safety integration", href: "/services/fire-alarms" }
      ]}
      faqs={[
        {
          question: "What types of access control systems do you maintain?",
          answer: "We maintain proximity card readers, biometric scanners, keypad entry systems, turnstiles, automatic doors, barrier gates, and integrated building management systems. All electrical wiring and power supplies are tested to BS 7671 standards."
        },
        {
          question: "How does access control integrate with fire safety?",
          answer: "Access control systems must release electromagnetic locks on fire alarm activation. We test fail-safe operation, ensure compliant hold-open devices, and verify that fire doors close automatically during emergencies."
        },
        {
          question: "What compliance applies to access control electrical installations?",
          answer: "All access control wiring must comply with BS 7671 electrical regulations. Power supplies require surge protection, and emergency door releases must function without power. Five-yearly EICRs cover access control circuits."
        },
        {
          question: "Can access control be integrated with CCTV and building management?",
          answer: "Yes. We integrate access control with CCTV for event verification, link to intruder alarms for automatic arming, and connect to BMS systems for energy-saving automation and visitor management."
        }
      ]}
      ctaTitle="Discuss Access Control Requirements"
      ctaDescription="Talk to our team about access control system maintenance and compliance."
    />
  );
};

export default AccessControl;
