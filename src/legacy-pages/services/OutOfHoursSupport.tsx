"use client";

import ServicePageTemplate from "@/components/shared/ServicePageTemplate";
import { Clock } from "lucide-react";

const OutOfHoursSupport = () => {
  return (
    <ServicePageTemplate
      title="Out-of-Hours FM Support | 24/7 Helpdesk & Emergency Response | EntireFM"
      metaDescription="Dedicated out-of-hours facilities management support. 24/7 helpdesk and mobile engineering cover protecting your property around the clock."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Out of Hours" }
      ]}
      heroTitle="24/7 Out-of-Hours FM Support"
      heroSubtitle="Reliable out-of-hours maintenance and emergency response ensuring your facility is protected 365 days a year."
      heroImage="https://images.unsplash.com/photo-1541746972996-4e0b0f43e03a?auto=format&fit=crop&q=80"
      heroIcon={Clock}
      stats={[
        { value: "24/7/365", label: "Availability" },
        { value: "60min", label: "Avg Callback" },
        { value: "100%", label: "Live Answer" },
        { value: "UK", label: "Coverage" }
      ]}
      overview={{
        title: "Round-the-Clock Resilience",
        paragraphs: [
          "Building failures don't just happen during business hours. Our dedicated out-of-hours support provides a seamless transition from your daytime operations to our 24/7 helpdesk and mobile engineering teams.",
          "We provide a single point of contact for all facilities emergencies, security issues, and critical system failures, ensuring your building remains secure and functional no matter the time of day."
        ]
      }}
      risks={[
        {
          title: "Safety Critical Failures",
          description: "Loss of power, fire system faults, and floods require immediate response regardless of the hour. Delayed action increases safety risks and financial loss."
        },
        {
          title: "Security Breaches",
          description: "Damage to doors, windows, or security systems overnight leaves your property vulnerable. 24/7 support ensures temporary secures and permanent repairs."
        }
      ]}
      components={[
        {
          title: "Helpdesk Services",
          description: "24/7 live call answering, emergency job dispatching, and critical incident logging."
        },
        {
          title: "Emergency Trades",
          description: "Emergency electricians, plumbers, HVAC specialists, locksmiths, and fire system technicians."
        }
      ]}
      benefits={[
        "Truly 24/7 live helpdesk operation",
        "National network of emergency engineers",
        "Guaranteed response times (SLAs)",
        "Single point of contact for all trades",
        "Integrated digital incident management",
        "Peace of mind for property managers"
      ]}
      faqs={[
        {
          question: "Is your helpdesk UK-based?",
          answer: "Yes, our helpdesk is UK-based and staffed by professional operators trained in FM triage."
        },
        {
          question: "What is your typical emergency response time?",
          answer: "Typical response times are 2-4 hours depending on the location and criticality of the incident."
        }
      ]}
    />
  );
};

export default OutOfHoursSupport;
