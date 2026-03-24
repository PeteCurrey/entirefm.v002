"use client";

;
import Link from "next/link";
import { ServiceSchema } from "@/components/shared/SchemaMarkup";
import { FAQSection } from "@/components/shared/FAQSection";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { FAQSchema } from "@/components/shared/SchemaMarkup";
import { SidebarCTA } from "@/components/shared/SidebarCTA";

const SmartMetering = () => {
  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Smart Metering & Submeter Installation" }
  ];

  const faqs = [
    {
      question: "What is the difference between smart meters and submeters?",
      answer: "Smart meters are utility-grade devices installed by energy suppliers at the main supply point, providing half-hourly consumption data. Submeters are additional meters installed within buildings to measure consumption at floor, tenant, or department level. Submeters enable accurate tenant billing, energy disaggregation, and identification of inefficient systems."
    },
    {
      question: "Can submeters be integrated with BMS systems?",
      answer: "Yes. Modern submeters use ModBus, BACnet, or M-Bus protocols for BMS integration. This enables real-time consumption monitoring, automated demand response, and alarm generation for abnormal consumption patterns. Cloud-based platforms provide remote access and analytics without requiring on-site BMS infrastructure."
    },
    {
      question: "How accurate are submeters for tenant billing?",
      answer: "Class 1 revenue-grade submeters meet accuracy standards for tenant billing (typically ±1% for electricity, ±2% for heat/water). Meters must be MID-approved (Measuring Instruments Directive) for legal billing purposes. Regular calibration and maintenance ensure ongoing accuracy and prevent billing disputes."
    },
    {
      question: "What utilities can be submetered?",
      answer: "Electricity, gas, water, heat, and chilled water. Electricity submetering is most common due to high cost and ease of installation. Heat metering is mandatory in some jurisdictions for district heating schemes. Water submetering supports leak detection and consumption benchmarking. Multi-utility dashboards provide comprehensive estate visibility."
    },
    {
      question: "Is submetering mandatory for ESOS or SECR?",
      answer: "Not mandatory, but strongly recommended. ESOS audits require 95% energy coverage—submetering provides accurate data rather than estimated apportionments. SECR reporting benefits from metered data to improve accuracy and demonstrate energy management. Well-metered buildings achieve higher BREEAM and ESG scores."
    }
  ];

  return (
    <>
      

      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema 
        name="Smart Metering & Submeter Installation"
        description="Smart metering and submeter installation for accurate consumption data across estates, tenants and multi-site portfolios in the UK. Supporting ESOS and SECR compliance."
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
                Smart Metering & Submeter Installation
              </h1>
              <p className="text-xl text-muted-foreground font-light leading-relaxed">
                Accurate consumption data for estates, tenants and multi-site portfolios. Supporting ESOS compliance and operational efficiency.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                The Value of Accurate Consumption Data
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                Buildings managed without submetering rely on estimated apportionments or single main meters—providing no visibility of floor-level consumption, tenant usage, or system-specific energy waste. This data blindness prevents effective energy management, causes billing disputes, and makes ESOS compliance challenging.
              </p>
              <p className="text-muted-foreground font-light leading-relaxed">
                Smart metering infrastructure provides granular, real-time consumption data enabling accurate tenant billing, system performance monitoring, and identification of waste or anomalies. Metered buildings achieve 10-20% energy savings through improved operational visibility and tenant accountability alone.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Metering Applications
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium mb-2">Electricity Submetering</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    CT-based or direct-wired submeters installed at distribution boards, tenant risers, or individual circuits. Provides kWh consumption, power factor, demand profiles, and abnormal load detection. Essential for multi-tenanted buildings, data centres, and industrial estates where accurate billing and load monitoring are required.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Gas & Thermal Metering</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Gas meters at boiler or tenant supply points. Heat meters for district heating, CHP systems, or landlord-provided heating. Thermal metering is mandatory in some jurisdictions for district heating schemes and supports accurate service charge apportionment.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Water Metering</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Submeters at tenant boundaries, floor risers, or major consumption points (cooling towers, irrigation, catering). Detects leaks, validates billing, and supports water efficiency programmes. Automatic meter reading (AMR) enables remote monitoring and rapid leak alerts.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">BMS & IoT Integration</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Submeters communicate with BMS or cloud platforms via ModBus, BACnet, M-Bus, or LoRaWAN protocols. Integration enables real-time dashboards, automated demand response, and alarm generation for abnormal consumption. Cloud platforms provide multi-site visibility without requiring on-premises BMS infrastructure.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Tenant Billing Accuracy</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Revenue-grade submeters (MID-approved) provide legally defensible consumption data for service charge recovery. Accurate billing reduces disputes, improves tenant satisfaction, and ensures landlords recover actual costs rather than estimated apportionments.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                ESOS & SECR Relevance
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                ESOS audits require 95% energy coverage of total organisational consumption. Buildings with single main meters rely on estimated disaggregations—submetering provides accurate consumption data meeting ESOS data quality requirements. Well-metered portfolios simplify ESOS compliance and reduce audit costs.
              </p>
              <p className="text-muted-foreground font-light leading-relaxed">
                SECR (Streamlined Energy and Carbon Reporting) mandates annual energy disclosure for quoted and large unquoted companies. Submetering improves reporting accuracy, supports intensity ratio calculations (kWh per m²), and demonstrates energy management capability to investors and regulators.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Return on Investment
              </h2>
              <div className="bg-muted/50 p-6 rounded-lg space-y-3">
                <p className="text-muted-foreground font-light leading-relaxed">
                  <span className="font-medium text-foreground">Energy Savings:</span> Metered buildings achieve 10-20% energy reduction through improved visibility, tenant accountability, and identification of wasteful systems. Payback periods typically range from 2-4 years.
                </p>
                <p className="text-muted-foreground font-light leading-relaxed">
                  <span className="font-medium text-foreground">Billing Accuracy:</span> Accurate tenant billing eliminates disputes, reduces administrative burden, and ensures landlords recover actual costs. Submetering increases service charge recovery rates by 15-30% in multi-tenanted buildings.
                </p>
                <p className="text-muted-foreground font-light leading-relaxed">
                  <span className="font-medium text-foreground">Operational Efficiency:</span> Real-time monitoring enables rapid identification of faults, leaks, or abnormal consumption. Early detection prevents costly failures and reduces maintenance costs.
                </p>
                <p className="text-muted-foreground font-light leading-relaxed">
                  <span className="font-medium text-foreground">ESG & Asset Value:</span> Well-metered buildings achieve higher BREEAM scores, support credible ESG reporting, and attract ESG-focused tenants. Metering infrastructure is increasingly expected by investors and green finance lenders.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Related Services
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link href="/services/energy-audits" className="p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                  <h3 className="font-medium mb-2">Energy Audits</h3>
                  <p className="text-sm text-muted-foreground font-light">ESOS-compliant audits and baseline consumption analysis</p>
                </Link>
                <Link href="/services/bms-optimisation" className="p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                  <h3 className="font-medium mb-2">BMS Optimisation</h3>
                  <p className="text-sm text-muted-foreground font-light">Meter data integration and automated control</p>
                </Link>
                <Link href="/services/smart-building-iot" className="p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                  <h3 className="font-medium mb-2">Smart Building IoT</h3>
                  <p className="text-sm text-muted-foreground font-light">Wireless sensors and cloud analytics platforms</p>
                </Link>
                <Link href="/services/water-optimisation" className="p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                  <h3 className="font-medium mb-2">Water Optimisation</h3>
                  <p className="text-sm text-muted-foreground font-light">Leak detection and consumption reduction</p>
                </Link>
              </div>
            </section>

            <section className="mb-12">
              <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg">
                <h2 className="text-2xl font-light mb-4">Request Metering Proposal</h2>
                <p className="text-muted-foreground font-light leading-relaxed mb-6">
                  Our metering specialists design and install smart metering infrastructure for single buildings and multi-site portfolios. We provide turnkey solutions including hardware, BMS integration, cloud platforms, and ongoing support. Contact us for a site-specific proposal.
                </p>
                <Link href="/request-proposal" 
                  className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Request Metering Proposal
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

export default SmartMetering;
