import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { ServiceSchema } from "@/components/shared/SchemaMarkup";
import { FAQSection } from "@/components/shared/FAQSection";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { FAQSchema } from "@/components/shared/SchemaMarkup";
import { SidebarCTA } from "@/components/shared/SidebarCTA";

const EnvironmentalNoiseSurveys = () => {
  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Environmental Noise Surveys" }
  ];

  const faqs = [
    {
      question: "What is BS4142 and when does it apply?",
      answer: "BS4142 is the British Standard for assessing commercial and industrial noise impact on residential areas. It compares the noise level from plant and equipment to the background noise level at nearby receptors. Planning authorities and Environmental Health Officers use BS4142 to assess noise complaints and planning applications."
    },
    {
      question: "What noise limits apply to rooftop plant?",
      answer: "Limits vary by location and time of day. Typical planning conditions require rooftop plant to be 5–10 dB below background noise levels at the nearest residential receptor. Night-time limits (23:00–07:00) are more stringent. Non-compliance can result in enforcement action and noise abatement notices."
    },
    {
      question: "Can mechanical plant noise lead to legal action?",
      answer: "Yes. The Environmental Protection Act 1990 defines excessive noise as a statutory nuisance. Local authorities can issue abatement notices requiring noise reduction or plant modification. Persistent breaches can lead to fines and court orders for plant shutdown."
    },
    {
      question: "How is noise measured and assessed?",
      answer: "Noise surveys measure sound pressure levels at receptor locations (e.g., residential windows) using calibrated sound level meters. Measurements are taken over representative periods—typically 24 hours for background noise—and analysed against BS4142 methodology to determine impact rating."
    },
    {
      question: "What mitigation measures reduce plant noise?",
      answer: "Acoustic enclosures, vibration isolation, duct attenuators, and operational restrictions (e.g., restricting noisy plant to daytime hours). In some cases, plant replacement or relocation is the only viable solution. Mitigation must be validated through post-installation noise surveys."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Environmental Noise Surveys | BS4142 Compliance | Mechanical Plant Noise | EntireFM</title>
        <meta name="description" content="Environmental noise surveys for mechanical plant and building services. BS4142 assessments, planning compliance, and noise mitigation for commercial and industrial estates." />
      </Helmet>

      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema 
        name="Environmental Noise Surveys"
        description="Environmental noise surveys for mechanical plant and building services across the UK. BS4142 assessments, planning compliance, and noise mitigation."
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
                Environmental Noise Surveys
              </h1>
              <p className="text-xl text-muted-foreground font-light leading-relaxed">
                Assessing mechanical plant and building noise impact under BS4142. Supporting planning applications, noise complaints, and compliance obligations.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Noise as a Statutory Nuisance
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                Mechanical plant—such as chillers, cooling towers, air handling units, and generators—produce noise that can affect neighbouring residential or commercial properties. Where noise levels are excessive, local authorities have powers under the Environmental Protection Act 1990 to issue noise abatement notices.
              </p>
              <p className="text-muted-foreground font-light leading-relaxed">
                Building owners and operators must demonstrate that plant noise does not cause statutory nuisance. Environmental noise surveys provide the evidence required for planning applications, neighbour complaints, and regulatory compliance.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                BS4142 Assessment Methodology
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium mb-2">Background Noise Measurement</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Background noise (LA90) is measured at receptor locations—typically residential windows or building façades—over a 24-hour period. This establishes the baseline environmental noise level against which plant noise is compared.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Specific Plant Noise Measurement</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Noise from the specific plant or equipment in question is measured at the same receptor locations. The measurement isolates the plant contribution from ambient noise, establishing the rating level (LAr).
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Acoustic Character Corrections</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    BS4142 applies penalties for tonal, impulsive, or intermittent noise characteristics—such as compressor hum, cooling tower drip, or chiller start-stop cycles. These corrections increase the rating level to reflect the increased annoyance potential.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Impact Assessment</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    The difference between the rating level (LAr) and the background noise level (LA90) determines the impact. A difference greater than +10 dB indicates significant adverse impact; +5 dB indicates adverse impact; and differences around 0 dB suggest low impact.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Context & Uncertainty</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    BS4142 requires consideration of context—such as existing noise environment, time of day, and receptor sensitivity. Uncertainty in measurements and operational variability must be accounted for in the assessment.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Planning & Regulatory Applications
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                Planning authorities commonly impose noise conditions on commercial developments. These conditions require plant noise to meet specified limits—typically defined relative to background noise levels or as absolute dB(A) values at receptor locations.
              </p>
              <p className="text-muted-foreground font-light leading-relaxed">
                Environmental noise surveys demonstrate compliance with planning conditions, support discharge of conditions applications, and provide evidence for variations where conditions cannot be met without mitigation.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Noise Mitigation Measures
              </h2>
              <div className="bg-muted/50 p-6 rounded-lg space-y-3">
                <p className="text-muted-foreground font-light leading-relaxed">
                  <span className="font-medium text-foreground">Acoustic Enclosures:</span> Enclosing noisy plant within sound-insulated housings reduces external noise emission. Requires adequate ventilation to prevent overheating.
                </p>
                <p className="text-muted-foreground font-light leading-relaxed">
                  <span className="font-medium text-foreground">Vibration Isolation:</span> Anti-vibration mounts prevent structure-borne noise transmission through building fabric. Essential for rooftop plant where vibration can radiate noise from floors and walls.
                </p>
                <p className="text-muted-foreground font-light leading-relaxed">
                  <span className="font-medium text-foreground">Duct Attenuators:</span> Silencers installed in ventilation ductwork reduce breakout noise from air handling systems.
                </p>
                <p className="text-muted-foreground font-light leading-relaxed">
                  <span className="font-medium text-foreground">Operational Restrictions:</span> Limiting plant operation to daytime hours (e.g., no operation 23:00–07:00) reduces night-time impact. Not always feasible for critical systems.
                </p>
                <p className="text-muted-foreground font-light leading-relaxed">
                  <span className="font-medium text-foreground">Relocation or Replacement:</span> In extreme cases, plant relocation or replacement with quieter equipment is the only viable solution. Expensive but may be required by enforcement notices.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Related Services
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link to="/services/hvac-compliance" className="p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                  <h3 className="font-medium mb-2">HVAC Compliance</h3>
                  <p className="text-sm text-muted-foreground font-light">Plant performance and regulatory compliance</p>
                </Link>
                <Link to="/services/energy-optimisation" className="p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                  <h3 className="font-medium mb-2">Energy Optimisation</h3>
                  <p className="text-sm text-muted-foreground font-light">Efficient plant operation reducing noise and energy</p>
                </Link>
                <Link to="/services/generator-maintenance" className="p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                  <h3 className="font-medium mb-2">Generator Maintenance</h3>
                  <p className="text-sm text-muted-foreground font-light">Standby power systems and noise management</p>
                </Link>
                <Link to="/services/building-inspections" className="p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                  <h3 className="font-medium mb-2">Building Inspections</h3>
                  <p className="text-sm text-muted-foreground font-light">Plant room assessments and compliance audits</p>
                </Link>
              </div>
            </section>

            <section className="mb-12">
              <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg">
                <h2 className="text-2xl font-light mb-4">Request Noise Survey</h2>
                <p className="text-muted-foreground font-light leading-relaxed mb-6">
                  Our acoustic consultants conduct BS4142 environmental noise surveys for mechanical plant across commercial, industrial, and mixed-use developments. We support planning applications, discharge of conditions, and noise complaint resolution. Contact us for a site-specific assessment.
                </p>
                <Link 
                  to="/request-proposal" 
                  className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Request Noise Survey
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

export default EnvironmentalNoiseSurveys;
