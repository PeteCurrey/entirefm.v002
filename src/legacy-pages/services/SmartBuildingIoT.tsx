"use client";

;
import Link from "next/link";
import { ServiceSchema } from "@/components/shared/SchemaMarkup";
import { FAQSection } from "@/components/shared/FAQSection";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { FAQSchema } from "@/components/shared/SchemaMarkup";
import { SidebarCTA } from "@/components/shared/SidebarCTA";

const SmartBuildingIoT = () => {
  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Smart Building IoT Sensors & Analytics" }
  ];

  const faqs = [
    {
      question: "What is the difference between BMS and IoT systems?",
      answer: "BMS controls plant operation—chillers, AHUs, heating systems. IoT systems monitor conditions—occupancy, air quality, temperature, humidity. BMS systems are typically wired, expensive to modify, and focused on plant control. IoT systems use wireless sensors, cloud analytics, and focus on occupant comfort and energy visibility. Modern estates benefit from both: BMS for plant control, IoT for monitoring and optimisation."
    },
    {
      question: "Can IoT sensors be retrofitted to existing buildings?",
      answer: "Yes. Wireless IoT sensors require no cabling—they are battery-powered or energy-harvesting and communicate via LoRaWAN, Zigbee, or cellular networks. Installation is non-disruptive and can be completed during occupied hours. Sensors are typically wall-mounted or ceiling-mounted with adhesive or small fixings. Retrofit projects take days, not months, and require no building downtime."
    },
    {
      question: "How accurate are wireless occupancy sensors?",
      answer: "Modern PIR and CO₂-based occupancy sensors achieve 90-95% accuracy in typical office environments. Accuracy varies by sensor type: PIR detects motion (effective for meeting rooms, toilets), CO₂ sensors infer occupancy from breathing (effective for open-plan spaces), and desk sensors detect physical presence. Multiple sensor types can be combined for higher accuracy. False positives/negatives are minimised through machine learning algorithms."
    },
    {
      question: "What is the ROI for smart building IoT?",
      answer: "Typical payback is 12-24 months driven by energy savings (10-30% reduction through demand-based HVAC control), space optimisation (identifying underutilised areas), and maintenance cost reduction (predictive alerts prevent failures). Additional benefits include improved occupant comfort, data-driven lease negotiations, and ESG reporting. Buildings with high vacancy or inefficient HVAC achieve fastest payback."
    },
    {
      question: "Who owns the data from IoT sensors?",
      answer: "The building owner owns the data. Cloud platforms provide data sovereignty controls—data can be stored in UK/EU servers and access is controlled by the client. Most platforms comply with GDPR and allow data export/deletion on request. Occupancy data should be anonymised and aggregated to comply with privacy regulations. We recommend clear data governance policies before deployment."
    }
  ];

  return (
    <>
      

      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema 
        name="Smart Building IoT Sensors & Analytics"
        description="Smart building IoT sensors and analytics for commercial estates. Real-time visibility of occupancy, energy consumption, air quality and asset performance through wireless sensor networks."
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
                Smart Building IoT Sensors & Analytics
              </h1>
              <p className="text-xl text-muted-foreground font-light leading-relaxed">
                Real-time visibility of occupancy, energy, air quality and asset performance through wireless sensor networks and cloud analytics.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Beyond Traditional BMS
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                Building Management Systems excel at plant control but provide limited visibility into occupant experience, space utilisation, and granular energy consumption. Traditional BMS sensors are expensive to install, difficult to expand, and focused on mechanical systems rather than people.
              </p>
              <p className="text-muted-foreground font-light leading-relaxed">
                Smart building IoT systems use wireless sensors, cloud analytics, and machine learning to monitor conditions that traditional BMS cannot economically address—desk occupancy, meeting room utilisation, localised air quality, equipment health, and tenant-specific energy consumption. This data enables demand-based HVAC control, space optimisation, and predictive maintenance, delivering operational savings and improved occupant comfort.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                IoT Sensor Applications
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium mb-2">Occupancy Monitoring</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Wireless PIR, CO₂, and desk sensors track room and desk utilisation in real-time. This data enables demand-based HVAC (reducing heating/cooling in unoccupied zones), space planning (identifying underutilised areas), and cleaning optimisation (scheduling based on actual use). Typical occupancy rates in commercial offices are 40-60%—right-sizing HVAC to actual occupancy reduces energy consumption by 20-30%.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Indoor Air Quality (IAQ) Sensors</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    CO₂, VOC, PM2.5, temperature and humidity sensors monitor air quality at desk level. Poor IAQ causes occupant complaints, productivity loss, and sick building syndrome. Real-time IAQ data enables automated ventilation adjustments (increasing fresh air when CO₂ rises) and identifies problem zones (poor airflow, contamination sources). Post-pandemic, IAQ visibility has become essential for occupant confidence and ESG reporting.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Energy Submetering</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Clamp-on CT sensors monitor electricity consumption at circuit level without building downtime. This enables tenant billing accuracy, identification of energy-wasting equipment (printers left on, inefficient servers), and validation of energy-saving measures. Multi-tenant buildings benefit most—submetering allows fair cost allocation and incentivises tenant energy efficiency. ESOS and SECR reporting also benefit from granular consumption data.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Predictive Maintenance Sensors</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Vibration, temperature, and current sensors monitor mechanical plant health. Abnormal vibration indicates bearing wear, temperature spikes suggest lubrication failure, and current anomalies reveal motor degradation. Early detection prevents catastrophic failures—replacing a bearing costs £500, replacing a failed motor costs £10,000+. Predictive maintenance reduces reactive callouts by 30-50% and extends asset life by 15-25%.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Water Leak Detection</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Moisture sensors and flow meters detect leaks in plant rooms, risers, and toilets. Early detection prevents water damage (insurance claims averaging £50,000+), reduces water waste, and protects sensitive equipment. Sensors are typically installed at high-risk locations (below pipes, in plant rooms, under water heaters). Alerts are sent to facilities teams within seconds of detection.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Cloud Analytics & Dashboards</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Data from wireless sensors is aggregated in cloud platforms (Azure IoT Hub, AWS IoT Core, Google IoT) and visualised through dashboards accessible via web and mobile. Machine learning algorithms identify trends, anomalies, and optimisation opportunities. Automated alerts notify facilities teams of abnormal conditions—high CO₂, equipment failure, water leaks. Dashboards provide portfolio-level visibility for multi-site estates.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Wireless Sensor Technologies
              </h2>
              <div className="bg-muted/50 p-6 rounded-lg space-y-4">
                <div>
                  <h3 className="font-medium mb-2">LoRaWAN (Long Range Wide Area Network)</h3>
                  <p className="text-sm text-muted-foreground font-light">
                    Low-power, long-range wireless protocol. Single gateway covers 2-5km range (urban) or 15km+ (rural). Battery life 5-10 years. Ideal for campus estates, industrial sites, and multi-building portfolios. Lower bandwidth than WiFi but excellent for periodic data (temperature, occupancy).
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Zigbee / Z-Wave</h3>
                  <p className="text-sm text-muted-foreground font-light">
                    Mesh networking protocols—sensors relay data through neighbouring devices, extending range without additional gateways. Range 10-100m per hop. Battery life 1-5 years. Ideal for dense sensor networks (offices, hotels). Higher bandwidth than LoRaWAN but shorter range.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">NB-IoT / LTE-M (Cellular)</h3>
                  <p className="text-sm text-muted-foreground font-light">
                    Cellular-based IoT protocols. No gateway required—sensors communicate directly to cloud via mobile networks. Ideal for remote sites without local network infrastructure. Higher operating cost (SIM data charges) but unmatched reliability and coverage. Battery life 5-10 years.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">WiFi / Ethernet</h3>
                  <p className="text-sm text-muted-foreground font-light">
                    Mains-powered sensors connected to existing IT infrastructure. High bandwidth, real-time data, but requires power and cabling. Suitable for high-value applications (air quality monitoring in labs, critical equipment monitoring). No battery constraints but higher installation cost.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Real-World ROI Examples
              </h2>
              <div className="bg-muted/50 p-6 rounded-lg space-y-4">
                <div>
                  <h3 className="font-medium mb-2">Corporate Office, Manchester (10,000m²)</h3>
                  <p className="text-sm text-muted-foreground font-light">
                    <span className="font-medium text-foreground">Deployment:</span> 200 occupancy sensors, 50 IAQ sensors, 20 energy submeters<br/>
                    <span className="font-medium text-foreground">Findings:</span> 45% desk utilisation, 30% meeting room utilisation, 25% HVAC over-ventilation<br/>
                    <span className="font-medium text-foreground">Actions:</span> Implemented hot-desking (reduced leased space by 2,000m²), demand-based HVAC<br/>
                    <span className="font-medium text-foreground">Result:</span> £180,000 annual saving (rent + energy), 18-month payback
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Industrial Warehouse, Birmingham (50,000m²)</h3>
                  <p className="text-sm text-muted-foreground font-light">
                    <span className="font-medium text-foreground">Deployment:</span> 100 temperature sensors, 30 vibration sensors (motors), 10 water leak sensors<br/>
                    <span className="font-medium text-foreground">Findings:</span> 3 motors showing abnormal vibration, 1 water leak in plant room (undetected)<br/>
                    <span className="font-medium text-foreground">Actions:</span> Replaced bearings on 3 motors (£1,500), repaired water leak (£800)<br/>
                    <span className="font-medium text-foreground">Result:</span> Prevented 3 motor failures (£30,000+ saved), avoided water damage (£50,000+ claim)
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Multi-Tenant Office, London (15,000m²)</h3>
                  <p className="text-sm text-muted-foreground font-light">
                    <span className="font-medium text-foreground">Deployment:</span> Energy submetering (30 circuits), IAQ sensors (100 locations)<br/>
                    <span className="font-medium text-foreground">Findings:</span> One tenant consuming 40% more energy than similar-sized tenants<br/>
                    <span className="font-medium text-foreground">Actions:</span> Implemented accurate tenant billing, provided energy usage dashboards<br/>
                    <span className="font-medium text-foreground">Result:</span> Fair cost allocation, tenant energy reduction of 15% (behavioural change from visibility)
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Integration with Existing Systems
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                IoT systems integrate with BMS, lighting controls, access control, and energy management systems through open protocols (BACnet, Modbus, MQTT). This enables automated responses—reducing HVAC in unoccupied zones, dimming lights when daylight is sufficient, adjusting ventilation based on CO₂ levels.
              </p>
              <p className="text-muted-foreground font-light leading-relaxed">
                Data can also feed into CAFM systems (Computer-Aided Facilities Management) for maintenance scheduling, helpdesk systems for automated ticket creation, and ESG reporting platforms for carbon and energy tracking. The goal is actionable intelligence, not just data collection.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Related Services
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link href="/services/bms-optimisation" className="p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                  <h3 className="font-medium mb-2">BMS Optimisation</h3>
                  <p className="text-sm text-muted-foreground font-light">Controls tuning and strategy improvement</p>
                </Link>
                <Link href="/services/indoor-air-quality-testing" className="p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                  <h3 className="font-medium mb-2">Indoor Air Quality Testing</h3>
                  <p className="text-sm text-muted-foreground font-light">CO₂, VOC, PM2.5 monitoring</p>
                </Link>
                <Link href="/services/energy-optimisation-advanced" className="p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                  <h3 className="font-medium mb-2">Energy Optimisation</h3>
                  <p className="text-sm text-muted-foreground font-light">Reducing consumption through controls</p>
                </Link>
                <Link href="/services/smart-metering" className="p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                  <h3 className="font-medium mb-2">Smart Metering</h3>
                  <p className="text-sm text-muted-foreground font-light">Accurate energy submetering and billing</p>
                </Link>
              </div>
            </section>

            <section className="mb-12">
              <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg">
                <h2 className="text-2xl font-light mb-4">Request IoT Assessment</h2>
                <p className="text-muted-foreground font-light leading-relaxed mb-6">
                  Our team designs and installs wireless IoT sensor networks for commercial, industrial, and public sector estates. We provide turnkey solutions including sensor hardware, cloud platforms, analytics, and ongoing support. Contact us for a site-specific IoT proposal.
                </p>
                <Link href="/request-proposal" 
                  className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Request IoT Assessment
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

export default SmartBuildingIoT;
