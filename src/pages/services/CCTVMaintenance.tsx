import ServicePageTemplate from "@/components/shared/ServicePageTemplate";
import { Video } from "lucide-react";

const CCTVMaintenance = () => {
  return (
    <ServicePageTemplate
      title="CCTV System Maintenance & Compliance | Estate Surveillance Services"
      metaDescription="Protecting estates with compliant surveillance systems that meet SIA, GDPR and operational continuity standards. Expert CCTV maintenance and compliance."
      canonicalUrl="https://entirefm.com/services/cctv-maintenance"
      breadcrumbItems={[
        { label: "Services", href: "/services" },
        { label: "CCTV Maintenance" }
      ]}
      heroTitle="CCTV System Maintenance & Compliance"
      heroSubtitle="Protecting estates with compliant surveillance systems that meet SIA, GDPR and operational continuity standards."
      heroImage="https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80"
      heroIcon={Video}
      stats={[
        { value: "GDPR", label: "Compliant" },
        { value: "30 Days", label: "Standard Retention" },
        { value: "24/7", label: "Recording" },
        { value: "HD/4K", label: "Quality" },
      ]}
      overview={{
        title: "The Role of Surveillance in Estate Protection",
        paragraphs: [
          "CCTV systems are critical infrastructure for protecting people, property and reputation across commercial estates. But surveillance technology is only effective when it operates reliably, stores footage securely, and meets evolving regulatory obligations.",
          "Failure to maintain systems can result in evidential gaps during incidents, GDPR breaches, insurance invalidation, and operational blind spots that expose estates to risk."
        ]
      }}
      components={[
        {
          title: "Recording Integrity",
          description: "Verify footage is being captured continuously, storage capacity is adequate, and retention periods comply with GDPR and sector-specific requirements."
        },
        {
          title: "Network Connectivity",
          description: "Test remote access, bandwidth performance, and failover redundancy to ensure uninterrupted monitoring capability across distributed estates."
        },
        {
          title: "Camera Function Testing",
          description: "Inspect lens clarity, PTZ operation, night vision performance, and positioning to maintain evidential-quality footage across all zones."
        },
        {
          title: "Integration with Access Control",
          description: "Verify CCTV triggers correctly on door events, alarm activations, and access attempts to provide unified security event management."
        }
      ]}
      compliance={{
        title: "GDPR & Data Protection Compliance",
        intro: "CCTV systems must comply with GDPR requirements including clear signage, justified retention periods, restricted access to footage, and documented policies for handling subject access requests.",
        items: [
          {
            title: "Signage Requirements",
            description: "Clear signage must inform individuals of CCTV operation, the purpose of surveillance, and data controller contact details."
          },
          {
            title: "Retention Periods",
            description: "Footage retention must be justified and typically limited to 30 days unless legally required otherwise. Automatic deletion ensures compliance."
          },
          {
            title: "Access Controls",
            description: "Only authorized personnel should access footage. Audit trails must record who accessed what footage and when."
          }
        ]
      }}
      risks={[
        {
          title: "Evidential Gaps",
          description: "Missing footage during incidents undermines insurance claims, legal defenses, and incident investigation."
        },
        {
          title: "GDPR Breaches",
          description: "Unlawful retention, inadequate security or failure to comply with subject access requests can result in ICO enforcement and fines up to £17.5m."
        },
        {
          title: "Insurance Invalidation",
          description: "Policies often require functional surveillance as a condition of cover. Failed systems void protection when you need it most."
        },
        {
          title: "Operational Blind Spots",
          description: "Undetected camera failures create vulnerabilities in estate security posture, exposing sites to theft, vandalism, and liability."
        }
      ]}
      benefits={[
        "Quarterly health checks with comprehensive reporting",
        "GDPR compliance audits and documentation support",
        "Remote monitoring and rapid fault response",
        "Integration with access control and intruder alarms",
        "Firmware updates and security patch management"
      ]}
      relatedServices={[
        { title: "Access Control Systems", description: "Card, fob and biometric access solutions", href: "/services/access-control" },
        { title: "ANPR Systems", description: "Automated number plate recognition", href: "/services/anpr-systems" },
        { title: "Security Systems Health Check", description: "Whole-site security assessments", href: "/services/security-systems-healthcheck" },
        { title: "Fire Alarm Systems", description: "Life safety and security integration", href: "/services/fire-alarms" }
      ]}
      faqs={[
        {
          question: "How often should CCTV systems be serviced?",
          answer: "Quarterly health checks are recommended for business-critical systems, with annual deep inspections covering recording integrity, lens calibration, storage capacity and network connectivity."
        },
        {
          question: "What are the GDPR obligations for CCTV systems?",
          answer: "GDPR requires clear signage, limited retention periods (typically 30 days unless justified), controlled access to footage, and documented policies for data handling, storage and deletion."
        },
        {
          question: "What happens if CCTV footage is unavailable during an incident?",
          answer: "Insurance claims may be invalidated, liability disputes become harder to defend, and regulatory authorities may question duty of care compliance, particularly in sectors like retail, healthcare and PBSA."
        },
        {
          question: "Can CCTV systems integrate with access control?",
          answer: "Yes—modern systems can trigger camera recording on door events, link video verification to access attempts, and provide unified monitoring across security infrastructure."
        },
        {
          question: "What causes most CCTV system failures?",
          answer: "Common issues include hard drive failures, network connectivity drops, power supply problems, lens obstruction, and outdated firmware creating security vulnerabilities."
        }
      ]}
      ctaTitle="Request a Surveillance Compliance Review"
      ctaDescription="Speak to our security systems team about maintaining compliant, reliable CCTV infrastructure across your estate."
    />
  );
};

export default CCTVMaintenance;
