"use client";

import ServicePageTemplate from "@/components/shared/ServicePageTemplate";
import { Car } from "lucide-react";

const ANPRSystems = () => {
  return (
    <ServicePageTemplate
      title="ANPR System Installation & Maintenance | Automated Number Plate Recognition"
      metaDescription="Automated number plate recognition for controlled access, vehicle flow management and estate security. Expert ANPR installation and maintenance."
      canonicalUrl="https://entirefm.com/services/anpr-systems"
      breadcrumbItems={[
        { label: "Services", href: "/services" },
        { label: "ANPR Systems" }
      ]}
      heroTitle="ANPR System Installation & Maintenance"
      heroSubtitle="Automated number plate recognition for controlled access, vehicle flow management and estate security."
      heroImage="https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&q=80"
      heroIcon={Car}
      stats={[
        { value: "95-98%", label: "Read Accuracy" },
        { value: "GDPR", label: "Compliant" },
        { value: "24/7", label: "Monitoring" },
        { value: "Integrated", label: "Systems" },
      ]}
      overview={{
        title: "Automated Vehicle Access Control",
        paragraphs: [
          "ANPR (Automatic Number Plate Recognition) systems automate vehicle access control across commercial estates, car parks, logistics hubs and residential developments—eliminating manual ticketing, reducing congestion, and providing real-time occupancy data.",
          "Modern ANPR technology integrates with barrier controls, payment platforms, and security systems to create frictionless vehicle flow while maintaining strict access control and audit trails."
        ]
      }}
      components={[
        {
          title: "Car Park Automation",
          description: "Touchless entry/exit, permit validation, payment enforcement, and real-time occupancy monitoring eliminate queuing and manual processing."
        },
        {
          title: "Barrier Integration",
          description: "ANPR triggers barrier operation for authorized vehicles, logs entry/exit events, and maintains audit trails for security and billing purposes."
        },
        {
          title: "Data Compliance",
          description: "Vehicle registration marks are personal data under GDPR. Systems must implement clear signage, justified retention, and controlled access policies."
        },
        {
          title: "Operational Reliability",
          description: "Camera positioning, lighting conditions, weather resilience, and maintenance schedules directly impact read accuracy and system uptime."
        }
      ]}
      compliance={{
        title: "Fail-Open vs Fail-Safe Configuration",
        intro: "ANPR system failures require predetermined responses. The correct configuration depends on site risk profile, fire safety requirements, and operational priorities.",
        items: [
          {
            title: "Fail-Open Configuration",
            description: "Barriers open during outages, prioritizing access continuity but risking unauthorized entry. Suitable for sites where traffic flow is critical."
          },
          {
            title: "Fail-Safe Configuration",
            description: "Barriers remain closed during failures, maintaining security but potentially causing congestion. Required for high-security sites."
          },
          {
            title: "Emergency Override",
            description: "Both approaches require clear signage and emergency override procedures for fire safety and manual intervention requirements."
          }
        ]
      }}
      risks={[
        {
          title: "Vehicle Queuing",
          description: "Failed cameras or processing delays create congestion at entry/exit points, impacting operations and user experience."
        },
        {
          title: "Unauthorized Access",
          description: "Misreads or system outages allow unpermitted vehicles to enter controlled zones, compromising site security."
        },
        {
          title: "Revenue Loss",
          description: "Failed enforcement of payment rules in commercial car parks results in lost income and unpaid parking."
        },
        {
          title: "GDPR Breaches",
          description: "Unlawful retention, inadequate security, or failure to comply with data subject rights leads to regulatory action and fines."
        }
      ]}
      benefits={[
        "Expert ANPR camera positioning and calibration",
        "Integration with barrier controls and payment systems",
        "GDPR-compliant data handling and retention policies",
        "Proactive maintenance to maximize read accuracy",
        "24/7 system monitoring and rapid response"
      ]}
      relatedServices={[
        { title: "CCTV Maintenance", description: "Surveillance system compliance", href: "/services/cctv-maintenance" },
        { title: "Access Control Systems", description: "Card and biometric access", href: "/services/access-control" },
        { title: "Security Health Check", description: "Whole-site security assessments", href: "/services/security-systems-healthcheck" },
        { title: "Loading Bay Safety", description: "Industrial traffic management", href: "/services/loading-bay-safety-systems" }
      ]}
      faqs={[
        {
          question: "How does ANPR improve car park management?",
          answer: "ANPR automates entry/exit control, eliminates manual ticketing, reduces congestion, provides occupancy data, and enables enforcement of permit/payment rules without physical barriers or staff intervention."
        },
        {
          question: "What happens if ANPR cameras fail?",
          answer: "System failures can cause vehicle queuing, unauthorized access, lost revenue, and operational disruption. Fail-safe configurations determine whether barriers open or remain closed during outages."
        },
        {
          question: "Is ANPR data subject to GDPR?",
          answer: "Yes—vehicle registration marks are personal data. Systems must have clear signage, justified retention periods, controlled access, and documented policies for data handling and deletion."
        },
        {
          question: "Can ANPR integrate with access control systems?",
          answer: "Yes—ANPR can trigger door/barrier release for authorized vehicles, log entry/exit events, and integrate with security management platforms for unified estate access control."
        },
        {
          question: "What accuracy should I expect from ANPR systems?",
          answer: "Quality systems achieve 95-98% read accuracy in good conditions. Accuracy depends on camera positioning, lighting, plate condition, weather, and vehicle speed. Regular maintenance and calibration are critical."
        }
      ]}
      ctaTitle="Request an ANPR System Consultation"
      ctaDescription="Speak to our team about automated vehicle access control solutions for your estate."
    />
  );
};

export default ANPRSystems;
