import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Link } from "react-router-dom";
import { AlertCircle, Calendar, CheckCircle } from "lucide-react";
import { FAQSection } from "@/components/shared/FAQSection";
import ServiceHeroSection from "@/components/shared/ServiceHeroSection";
import { TrustBar } from "@/components/shared/TrustBar";
import ContentSection from "@/components/shared/ContentSection";
import CTASection from "@/components/shared/CTASection";

const FireAlarmTesting = () => {
  const faqs = [
    { question: "How often should fire alarms be tested?", answer: "Under BS 5839-1, fire alarm systems must be tested weekly (call points/sounders), with quarterly inspection of detectors and annual full system testing by a competent engineer." },
    { question: "What happens if fire alarm testing is missed?", answer: "Missed testing creates compliance breaches, insurance invalidation risk, and potential prosecution under the Regulatory Reform (Fire Safety) Order 2005. It also increases fire risk to life and property." },
    { question: "Who is responsible for fire alarm maintenance?", answer: "The Responsible Person (typically building owner or facilities manager) must ensure fire alarm systems are maintained to BS 5839 standards. This includes regular testing, inspection, and records retention." },
    { question: "Can I test fire alarms myself?", answer: "Weekly call point testing can be done in-house, but quarterly inspections and annual servicing must be completed by BS 5839-certified competent engineers to meet legal requirements." },
  ];

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Resources", href: "/resources" },
    { label: "Fire Alarm Testing Guide" },
  ];

  const heroStats = [
    { value: "BS 5839", label: "Standard" },
    { value: "Weekly", label: "Min Frequency" },
    { value: "Legal", label: "Requirement" },
  ];

  const testingSchedule = [
    { frequency: "Weekly", title: "Call Point Testing", description: "Test a different manual call point each week on a rotational basis. Verify alarm activation, sounder operation, and panel display.", who: "In-house responsible person or trained staff", color: "primary" },
    { frequency: "Quarterly", title: "Detector Inspection", description: "Test 25% of smoke/heat detectors per quarter (100% annually). Verify functionality, clean detectors, and check panel zones.", who: "BS 5839-certified competent engineer", color: "orange" },
    { frequency: "Annual", title: "Full System Service", description: "Comprehensive inspection including all detectors, sounders, power supplies, backup batteries, wiring integrity, and control panel diagnostics.", who: "BS 5839-1 accredited service engineer", color: "blue" },
  ];

  return (
    <>
      <Helmet>
        <title>How Often Should Fire Alarms Be Tested? | BS 5839 Compliance Guide</title>
        <meta name="description" content="Complete fire alarm testing schedule under BS 5839. Weekly, quarterly, and annual requirements explained. Avoid prosecution and insurance issues." />
        <link rel="canonical" href="https://entirefm.com/resources/fire-alarm-testing-frequency" />
      </Helmet>

      <ServiceHeroSection
        breadcrumbItems={breadcrumbItems}
        title="How Often Should Fire Alarms Be Tested?"
        description="Complete BS 5839-1 compliance guide for fire alarm testing, inspection schedules, and record-keeping requirements."
        stats={heroStats}
        primaryCTA={{ label: "Fire Alarm Services", icon: Calendar, href: "/services/fire-alarms" }}
        secondaryCTA={{ label: "Request Proposal", href: "/request-proposal" }}
      />

      <TrustBar variant="compact" />

      <ContentSection>
        <div className="max-w-4xl mx-auto">
          <Alert className="mb-8">
            <AlertCircle className="h-5 w-5" />
            <AlertDescription>
              <strong>Legal Requirement:</strong> Fire alarm systems must be tested and maintained under BS 5839-1 and the Regulatory Reform (Fire Safety) Order 2005. Non-compliance can result in prosecution and insurance invalidation.
            </AlertDescription>
          </Alert>
        </div>
      </ContentSection>

      <ContentSection title="Fire Alarm Testing Schedule" centered>
        <div className="grid gap-6 max-w-4xl mx-auto">
          {testingSchedule.map((item, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-30px" }} transition={{ delay: index * 0.1, duration: 0.5 }}>
              <Card className="p-6 border-l-4 border-l-primary hover-lift transition-all">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <span className="text-2xl font-light">{item.frequency}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-light mb-2">{item.title}</h3>
                    <p className="text-muted-foreground font-light mb-3">{item.description}</p>
                    <div className="text-sm text-muted-foreground"><strong>Who:</strong> {item.who}</div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </ContentSection>

      <ContentSection title="What Gets Tested?" variant="muted" centered>
        <div className="max-w-4xl mx-auto">
          <Card className="p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-light mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  Weekly Testing Includes:
                </h3>
                <ul className="space-y-2 text-sm font-light text-muted-foreground">
                  <li>• Manual call point activation</li>
                  <li>• Alarm sounder verification</li>
                  <li>• Control panel display check</li>
                  <li>• Log book recording</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-light mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  Quarterly/Annual Includes:
                </h3>
                <ul className="space-y-2 text-sm font-light text-muted-foreground">
                  <li>• Smoke & heat detector testing</li>
                  <li>• Battery backup functionality</li>
                  <li>• Wiring and zone integrity</li>
                  <li>• Power supply voltage checks</li>
                  <li>• Full compliance certification</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </ContentSection>

      <ContentSection title="Record-Keeping Requirements" centered>
        <div className="max-w-4xl mx-auto">
          <Card className="p-6">
            <p className="font-light mb-4">The Responsible Person must maintain a fire alarm log book containing:</p>
            <ul className="space-y-2 font-light text-muted-foreground">
              <li>• Date and time of each test</li>
              <li>• Call point or detector tested</li>
              <li>• Test result (pass/fail)</li>
              <li>• Faults identified and remedial actions</li>
              <li>• Name and signature of tester</li>
              <li>• Quarterly and annual service certificates</li>
            </ul>
            <Alert className="mt-6">
              <AlertDescription>
                Records must be retained for inspection by fire authorities, insurers, and auditors. Digital log books via FM portals provide automated compliance tracking.
              </AlertDescription>
            </Alert>
          </Card>
        </div>
      </ContentSection>

      <ContentSection title="Consequences of Non-Compliance" centered variant="muted">
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { emoji: "⚖️", title: "Legal Risk", text: "Prosecution under RR(FS)O 2005. Fines and potential imprisonment for responsible persons." },
            { emoji: "🛡️", title: "Insurance Void", text: "Fire damage claims rejected if maintenance records are incomplete or non-compliant." },
            { emoji: "🔥", title: "Life Safety", text: "Untested systems may fail during emergencies, endangering occupants and property." },
          ].map((item, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}>
              <Card className="p-6 text-center hover-lift transition-all">
                <div className="text-3xl mb-2">{item.emoji}</div>
                <h3 className="font-light mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground font-light">{item.text}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </ContentSection>

      <ContentSection>
        <div className="max-w-4xl mx-auto">
          <FAQSection faqs={faqs} />
        </div>
      </ContentSection>

      <CTASection
        title="Never Miss Fire Alarm Testing Again"
        description="EntireFM delivers automated compliance tracking, engineer dispatch, and digital log books. Protect your people and avoid prosecution."
        primaryLabel="Explore Fire Alarm Services"
        primaryHref="/services/fire-alarms"
        secondaryLabel="Request Proposal"
        secondaryHref="/request-proposal"
        variant="dark"
      />
    </>
  );
};

export default FireAlarmTesting;
