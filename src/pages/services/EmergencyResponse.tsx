import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { ServiceSchema } from "@/components/shared/SchemaMarkup";
import { FAQSection } from "@/components/shared/FAQSection";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { FAQSchema } from "@/components/shared/SchemaMarkup";
import { SidebarCTA } from "@/components/shared/SidebarCTA";

const EmergencyResponse = () => {
  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Emergency Response & Critical Incident Management" }
  ];

  const faqs = [
    {
      question: "What constitutes an FM emergency requiring immediate response?",
      answer: "FM emergencies are life-safety risks or critical system failures requiring immediate action: Fire alarm activation (investigate, liaise with fire service, manage evacuation if required), Major water leaks (flooding, structural damage risk, service disruption), Gas leaks (immediate isolation, site evacuation, Gas Safe emergency attendance), Power failures (loss of critical systems—IT, refrigeration, life-safety equipment), Lift entrapments (passenger safety, rescue coordination), Structural damage (collapse risk, falling debris, impact damage), HVAC failures in critical environments (data centres, healthcare, cleanrooms). Emergency response protocols include: Immediate dispatch, Client notification, Specialist contractor mobilisation, Site isolation/make-safe, Investigation and rectification."
    },
    {
      question: "How do you manage out-of-hours emergencies?",
      answer: "24/7 emergency response delivered via: On-call engineers (shift rotas, immediate dispatch), Specialist subcontractor networks (lifts, fire alarms, gas, electrical), Remote diagnostics (BMS access, CCTV review, system interrogation), Automated alerts (BMS fault notifications, access control breaches, critical parameter deviations). Out-of-hours protocol: Call received → Severity triage → Engineer dispatch → Client notification → Site attendance (target 1-2 hours) → Make safe/investigate → Temporary fix or isolate → Permanent repair scheduled. Critical incidents trigger management escalation—ensuring appropriate resources and decision-making authority. Emergency callout costs are transparently reported with justification for attendance."
    },
    {
      question: "What is the role of building management systems (BMS) in emergency response?",
      answer: "BMS provides real-time system visibility enabling: Remote diagnostics (investigate faults before site attendance), Automated alerts (critical failures, parameter deviations, system trips), System isolation (remotely shut down faulty equipment), Trend analysis (pre-failure warnings, performance deterioration). BMS integration with helpdesk enables: Proactive fault detection (issues identified before occupant complaints), Faster diagnosis (asset data, alarm history, control sequences available remotely), Evidence capture (alarm logs, temperature trends, runtime data for investigation). BMS-equipped buildings have faster emergency response times and reduced downtime. Engineers trained in BMS operation can often resolve faults remotely—avoiding unnecessary site visits."
    },
    {
      question: "How do you communicate during critical incidents?",
      answer: "Critical incident communication follows structured protocols: Immediate notification (client FM contact, duty manager—within 15 minutes of incident), Situation updates (hourly or as situation changes—engineer on-site, cause identified, ETA for resolution), Resolution confirmation (system restored, testing complete, follow-up actions), Post-incident report (timeline, root cause, remediation, preventative measures). Communication channels: Phone (immediate escalation), Email (formal record), SMS (status updates), Client portal (real-time job tracking). Transparent communication prevents confusion, manages expectations, and demonstrates professional incident management. Poor communication during emergencies causes reputational damage regardless of technical response quality."
    },
    {
      question: "What post-emergency actions are taken to prevent recurrence?",
      answer: "Post-incident analysis includes: Root cause investigation (why did failure occur?), Contributing factors (maintenance history, age, load conditions, environmental factors), Preventative measures (PPM adjustments, asset replacement, control modifications), Lessons learned (update procedures, training, emergency protocols). Critical incidents trigger: Incident reports (detailed timeline, actions taken, costs incurred), Management review meetings (discuss response effectiveness, identify improvements), PPM schedule reviews (increase inspection frequency, add monitoring tasks), Capital planning (if failure indicates asset end-of-life). Continuous improvement culture uses emergency events as learning opportunities—preventing repeat failures and enhancing response protocols."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Emergency Response & Critical Incident Management | 24/7 FM | EntireFM</title>
        <meta name="description" content="Emergency response and critical incident management for FM emergencies. 24/7 coordinated response for water leaks, electrical failures, fire alarms and plant breakdowns." />
      </Helmet>

      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema 
        name="Emergency Response & Critical Incident Management"
        description="Coordinated FM response for water leaks, electrical failures, fire alarms, plant breakdown and critical safety events. 24/7 emergency response with immediate dispatch and transparent communication."
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
                Emergency Response & Critical Incident Management
              </h1>
              <p className="text-xl text-muted-foreground font-light leading-relaxed">
                Coordinated FM response for water leaks, electrical failures, fire alarms, plant breakdown and critical safety events.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Emergency Response: Speed, Competence, Communication
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                FM emergencies—fire alarms, gas leaks, major water leaks, power failures, lift entrapments—require immediate, competent response. Delayed or inadequate emergency response causes: Life-safety risks (evacuation failures, trapped occupants, hazardous exposures), Operational disruption (business downtime, revenue loss, tenant complaints), Property damage (water ingress, fire spread, structural deterioration), Regulatory action (HSE investigations, enforcement notices, prosecution).
              </p>
              <p className="text-muted-foreground font-light leading-relaxed">
                Effective emergency response requires: 24/7 helpdesk (immediate call receipt, severity triage), On-call engineers (rapid dispatch, competent diagnosis), Specialist subcontractors (lifts, fire alarms, gas), BMS access (remote diagnostics, system isolation), Emergency protocols (clear procedures, escalation pathways), Transparent communication (client notifications, status updates). Our emergency response service delivers immediate attendance, make-safe actions, and permanent rectification—minimising risk, downtime, and disruption.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Emergency Categories & Response Protocols
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium mb-2">Fire Safety Emergencies</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Fire alarm activations, smoke detection, suppression system discharge, emergency lighting failures. <strong>Response:</strong> Immediate investigation (false alarm vs genuine fire), Fire service liaison (if 999 called), Evacuation support (if required), System reset (after clearance), Post-incident testing, Cause investigation. Fire emergencies require coordination with building management, fire wardens, and emergency services. Engineers attend to investigate technical faults (detector contamination, system faults, call point activation) and restore systems to operational status.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Water & Plumbing Emergencies</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Major leaks, burst pipes, tank overflows, flooding, loss of water supply. <strong>Response:</strong> Immediate isolation (shut-off valves, tank feeds), Water extraction (prevent structural damage, mould growth), Temporary repairs (clamps, patches, bypasses), Drying equipment deployment, Permanent repair, System testing and restoration. Water damage escalates rapidly—immediate response minimises property damage and disruption. Engineers carry leak detection equipment, pipe repair materials, and isolation tools for rapid intervention.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Electrical & Power Failures</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Total power loss, partial outages, distribution faults, generator failures, UPS faults. <strong>Response:</strong> Safety isolation (live fault investigation), Supply restoration (circuit identification, breaker resets, fault location), Temporary power (generators, UPS support), Load prioritisation (critical systems first—life safety, IT, refrigeration), Permanent repair, System testing. Power failures impact business continuity—rapid diagnosis and restoration are critical. Engineers coordinate with DNOs (distribution network operators) for external supply issues.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">HVAC & Plant Failures</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Boiler failures (winter heating loss), chiller failures (summer cooling loss, data centre risk), ventilation failures (poor air quality, production impact), BMS failures (loss of control, alarm floods). <strong>Response:</strong> System diagnosis (controls, mechanical, electrical), Temporary measures (portable heaters/coolers, manual control), Parts procurement (emergency supply chains), Permanent repair, System commissioning. Plant failures in critical environments (data centres, healthcare, cleanrooms) require immediate action—engineers prioritise based on operational impact.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Lift & Access Emergencies</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Passenger entrapments, door faults, safety system trips, mechanical failures. <strong>Response:</strong> Immediate callout to lift contractor (specialist rescue), Communication with trapped passengers (intercom, mobile), Building access support (fire service if required), Post-rescue investigation, Repair and testing, Return to service. Lift emergencies are high-stress incidents requiring calm communication and coordinated response with specialist contractors and emergency services.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                24/7 Emergency Response Infrastructure
              </h2>
              <div className="bg-muted/50 p-6 rounded-lg space-y-4">
                <div>
                  <h3 className="font-medium mb-2">On-Call Engineer Network</h3>
                  <p className="text-sm text-muted-foreground font-light">
                    24/7 on-call rotas covering electrical, HVAC, plumbing, and fabric trades. Engineers equipped with: Mobile CAFM (asset data, emergency procedures, contact lists), Diagnostic tools (multimeters, thermal cameras, leak detection), Emergency parts (fuses, contactors, pipe clamps, temporary fixings), Site access keys/fobs, BMS remote access credentials. Target response: 1-2 hours (urban), 2-4 hours (rural).
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Specialist Subcontractor Partnerships</h3>
                  <p className="text-sm text-muted-foreground font-light">
                    Pre-qualified emergency contractors for: Lifts (24/7 rescue and repair), Fire alarms (emergency callout, system resets), Gas (Gas Safe registered emergency engineers), Drainage (24/7 blockage clearance, CCTV surveys), Generators (emergency repair and hire), Glazing (emergency boarding, temporary weather protection). Contractual agreements ensure guaranteed response times and transparent pricing.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Remote Monitoring & BMS Integration</h3>
                  <p className="text-sm text-muted-foreground font-light">
                    Building management systems monitored 24/7 for critical alarms: Plant failures, Temperature deviations, Pressure faults, Fire alarm status, Security breaches. Automated alerts enable proactive response—engineers dispatched before building users report issues. Remote diagnostics reduce unnecessary site visits and accelerate fault resolution.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Post-Incident Analysis & Continuous Improvement
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                Every critical incident generates: Incident report (timeline, actions taken, root cause, costs), Management review (response effectiveness, lessons learned), Preventative measures (PPM adjustments, monitoring enhancements, protocol updates), Client debrief (discuss response, agree improvements). Root cause analysis identifies: Equipment end-of-life (repeated failures indicate replacement required), Maintenance gaps (inadequate PPM allowed failure), Design issues (systemic problems requiring capital intervention), Operational factors (misuse, loading, environmental conditions).
              </p>
              <p className="text-muted-foreground font-light leading-relaxed">
                Continuous improvement culture uses emergency data to: Reduce incident frequency (enhanced PPM, predictive monitoring), Improve response times (geographic coverage, parts availability), Enhance communication (clearer protocols, faster escalation). Transparent incident reporting demonstrates professional incident management and drives operational excellence.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Related Services
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link to="/fm-operations/helpdesk" className="p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                  <h3 className="font-medium mb-2">Technical Helpdesk</h3>
                  <p className="text-sm text-muted-foreground font-light">24/7 call logging and dispatch</p>
                </Link>
                <Link to="/fm-operations/business-continuity" className="p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                  <h3 className="font-medium mb-2">Business Continuity</h3>
                  <p className="text-sm text-muted-foreground font-light">Resilience planning</p>
                </Link>
                <Link to="/services/disaster-recovery" className="p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                  <h3 className="font-medium mb-2">Disaster Recovery</h3>
                  <p className="text-sm text-muted-foreground font-light">Major incident recovery services</p>
                </Link>
                <Link to="/services/fire-safety" className="p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                  <h3 className="font-medium mb-2">Fire Safety</h3>
                  <p className="text-sm text-muted-foreground font-light">Fire alarm testing and maintenance</p>
                </Link>
              </div>
            </section>

            <section className="mb-12">
              <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg">
                <h2 className="text-2xl font-light mb-4">Request Emergency Response Services</h2>
                <p className="text-muted-foreground font-light leading-relaxed mb-6">
                  Our 24/7 emergency response service delivers immediate dispatch, competent diagnosis, and transparent communication. Whether standalone emergency cover or integrated FM delivery, we provide engineered solutions that minimise risk, downtime, and disruption.
                </p>
                <Link 
                  to="/request-proposal" 
                  className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Request Emergency Cover
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

export default EmergencyResponse;
