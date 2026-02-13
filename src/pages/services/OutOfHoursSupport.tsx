import { Helmet } from "react-helmet";
import { ArrowRight, Phone, Clock, Shield, Bell, Wrench, Monitor, Lock } from "lucide-react";
import ServiceHeroSection from "@/components/shared/ServiceHeroSection";
import { TrustBar } from "@/components/shared/TrustBar";
import ContentSection from "@/components/shared/ContentSection";
import FeatureCardGrid from "@/components/shared/FeatureCardGrid";
import StatsBanner from "@/components/shared/StatsBanner";
import CTASection from "@/components/shared/CTASection";
import { FAQSection } from "@/components/shared/FAQSection";
import { ServiceSchema, FAQSchema } from "@/components/shared/SchemaMarkup";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

const OutOfHoursSupport = () => {
  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Out of Hours Support and Emergency Attendance" }
  ];

  const features = [
    {
      icon: Phone,
      title: "Emergency Callouts",
      description: "24/7 engineer dispatch for critical system failures, water leaks, power loss, and safety hazards occurring outside business hours."
    },
    {
      icon: Shield,
      title: "Security Attendance",
      description: "Immediate response to security breaches, intruder alarms, and access control failures requiring physical attendance and investigation."
    },
    {
      icon: Bell,
      title: "Alarm Response",
      description: "Fire alarm activations, BMS critical alerts, plant alarms, and environmental monitoring alerts triaged and responded to 24/7."
    },
    {
      icon: Wrench,
      title: "Engineer Dispatch",
      description: "Multi-trade engineers on call for HVAC, electrical, plumbing, and fabric emergencies with van stock for common repairs."
    },
    {
      icon: Monitor,
      title: "BMS Monitoring",
      description: "Remote building management system monitoring for critical parameters — temperature, pressure, humidity, and plant status alerts."
    },
    {
      icon: Lock,
      title: "Site Lockdown",
      description: "Emergency site securing, temporary boarding, lock changes, and access restriction following security incidents or property damage."
    }
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Call Receipt",
      description: "24/7 helpdesk receives the call, captures details, and identifies the site and contract."
    },
    {
      step: "2",
      title: "Triage & Prioritisation",
      description: "Severity assessed against SLA framework. Life-safety and critical systems prioritised for immediate dispatch."
    },
    {
      step: "3",
      title: "Engineer Dispatch",
      description: "Nearest available engineer dispatched with appropriate trade skills, tools, and site access credentials."
    },
    {
      step: "4",
      title: "Resolution & Reporting",
      description: "Make-safe or permanent repair completed. Client notified. Full incident report logged with photos and next actions."
    }
  ];

  const faqs = [
    {
      question: "What hours does out-of-hours cover?",
      answer: "Our out-of-hours service covers evenings (typically after 6pm), weekends, bank holidays, and all public holidays — 365 days a year. The exact hours are defined in your service agreement."
    },
    {
      question: "What types of issues do you respond to out of hours?",
      answer: "We respond to any issue that cannot safely wait until the next working day — water leaks, power failures, fire alarm faults, HVAC breakdowns in critical environments, security breaches, lift entrapments, and any situation posing a safety risk."
    },
    {
      question: "How are out-of-hours callouts charged?",
      answer: "Out-of-hours callouts are charged at agreed contract rates. We provide full transparency on callout costs with detailed job reports justifying attendance and work completed."
    },
    {
      question: "Can you provide BMS monitoring outside business hours?",
      answer: "Yes — we offer remote BMS monitoring that detects critical parameter deviations and plant faults automatically. Alerts are triaged by our helpdesk and engineers dispatched when physical attendance is required."
    },
    {
      question: "Do you escalate to management for critical incidents?",
      answer: "Yes — critical incidents trigger management escalation protocols. Your designated contacts receive immediate notification, with situation updates provided until resolution. Post-incident reports are issued within 24 hours."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Out of Hours Support & Emergency Attendance | 24/7 | EntireFM</title>
        <meta name="description" content="24/7 out of hours support and emergency attendance for commercial buildings. Engineer dispatch, alarm response, BMS monitoring, and security attendance." />
        <link rel="canonical" href="https://entirefm.com/services/out-of-hours-support" />
      </Helmet>

      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        name="Out of Hours Support and Emergency Attendance"
        description="24/7 out of hours support including emergency engineer dispatch, alarm response, BMS monitoring, and security attendance for commercial buildings."
        provider="EntireFM"
        areaServed="United Kingdom"
      />
      <FAQSchema faqs={faqs} />

      <div className="min-h-screen bg-background">
        <ServiceHeroSection
          breadcrumbItems={breadcrumbItems}
          title="Out of Hours Support and Emergency Attendance"
          description="24/7/365 coverage for your commercial estate — emergency engineer dispatch, alarm response, BMS monitoring, and security attendance when your team isn't on site."
          primaryCTA={{
            label: "Request Proposal",
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
          title="Why 24/7 Coverage Matters"
          subtitle="Protecting your buildings around the clock"
        >
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground font-light leading-relaxed mb-4">
              Commercial buildings don't stop needing maintenance when the office closes. Critical systems run 24/7 — HVAC, fire alarms, security, lifts, and water systems all operate continuously. Failures outside business hours can cause flooding, fire risk, security breaches, equipment damage, and regulatory non-compliance if not responded to promptly.
            </p>
            <p className="text-muted-foreground font-light leading-relaxed mb-4">
              Landlords and managing agents have obligations to tenants, insurers, and regulators to maintain safe and operational buildings at all times. Insurance policies often require evidence of 24/7 monitoring and response capability. Lease agreements typically mandate emergency response procedures for critical incidents.
            </p>
            <p className="text-muted-foreground font-light leading-relaxed">
              EntireFM provides comprehensive out-of-hours support through our 24/7 helpdesk, on-call engineer network, and specialist subcontractor partnerships. Every call is triaged, every dispatch is tracked, and every incident is reported — giving you full visibility and control even when your team isn't on site.
            </p>
          </div>
        </ContentSection>

        <ContentSection title="Out of Hours Services" subtitle="Complete coverage when your team isn't on site">
          <FeatureCardGrid features={features} />
        </ContentSection>

        <StatsBanner
          stats={[
            { value: "24/7/365", label: "Availability" },
            { value: "Multi-Trade", label: "Engineers" },
            { value: "Immediate", label: "Triage" },
            { value: "UK Wide", label: "Coverage" }
          ]}
          variant="gradient"
        />

        <ContentSection
          title="How It Works"
          subtitle="From call receipt to resolution"
          variant="muted"
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorks.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 h-full text-center hover:border-primary/50 transition-colors">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                    <span className="text-xl font-medium text-primary">{item.step}</span>
                  </div>
                  <h3 className="text-lg font-medium mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground font-light">{item.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </ContentSection>

        <ContentSection title="Frequently Asked Questions">
          <FAQSection faqs={faqs} />
        </ContentSection>

        <CTASection
          title="Need 24/7 Out of Hours Cover?"
          description="Our helpdesk operates around the clock with multi-trade engineers on call for emergency dispatch — keeping your buildings protected when your team isn't there."
          primaryLabel="Request Proposal"
          primaryHref="/request-proposal"
          secondaryLabel="Contact Us"
          secondaryHref="/contact"
          variant="dark"
        />
      </div>
    </>
  );
};

export default OutOfHoursSupport;
