import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { ServiceSchema, FAQSchema } from "@/components/shared/SchemaMarkup";
import { FAQSection } from "@/components/shared/FAQSection";
import { SidebarCTA } from "@/components/shared/SidebarCTA";

const HospitalityLeisure = () => {
  const faqs = [
    {
      question: "Do you provide 24/7 reactive cover?",
      answer: "Yes — hospitality doesn't have office hours, and neither do we. Our team is available around the clock to handle urgent maintenance issues and ensure your operations continue smoothly."
    },
    {
      question: "Do you manage both front-of-house and back-of-house assets?",
      answer: "Comprehensively — we maintain both brand-critical front-of-house areas and essential back-of-house operational systems to ensure complete facility performance."
    },
    {
      question: "Can you work during live trading and high occupancy?",
      answer: "Absolutely — we excel at silent and discreet execution during busy periods, minimizing any disruption to guests while maintaining the highest standards."
    },
    {
      question: "Do you support national hotel portfolios?",
      answer: "Yes — we offer scalable FM models with unified reporting across multiple locations, ensuring consistent service delivery for national hospitality groups."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Hospitality Facilities Management UK</title>
        <meta 
          name="description" 
          content="Protect guest satisfaction & brand reviews with flawless FM." 
        />
        <link rel="canonical" href="https://entirefm.com/sectors/hospitality-leisure" />
      </Helmet>

      <ServiceSchema
        name="Hospitality & Leisure Facilities Management"
        description="Seamless FM that protects service continuity, brand perception, hygiene standards, and guest satisfaction in hotels and leisure facilities."
        provider="EntireFM"
        areaServed="United Kingdom"
      />
      <FAQSchema faqs={faqs} />

      <article>
        <section className="relative py-20 bg-gradient-to-br from-background via-background to-primary/5">
          <div className="container mx-auto px-4">
            <Breadcrumb 
              items={[
                { label: "Home", href: "/" },
                { label: "Sectors", href: "/sectors" },
                { label: "Hospitality & Leisure" }
              ]} 
            />
            
            <div className="max-w-4xl mt-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 leading-tight">
                When the Experience Fails, the Guest Doesn't Return.
              </h1>
              <p className="text-xl text-muted-foreground font-light mb-8 leading-relaxed">
                Seamless FM that protects service continuity, brand perception, hygiene standards, and guest satisfaction.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="text-base">
                  <Link to="/contact">Request Hospitality FM Proposal</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-base">
                  <Link to="/contact">Book Site Standards Review</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-16">
              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Hospitality Has Zero Tolerance for Downtime
                </h2>
                <p className="text-muted-foreground font-light leading-relaxed mb-6">
                  In hotels and leisure environments, facility failures translate directly into guest dissatisfaction and lost revenue:
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-card border border-border rounded-lg p-4">
                    <h3 className="font-medium mb-2">Comfort complaints</h3>
                    <p className="text-sm text-muted-foreground font-light">Temperature and ambience issues</p>
                  </div>
                  <div className="bg-card border border-border rounded-lg p-4">
                    <h3 className="font-medium mb-2">Food safety issues</h3>
                    <p className="text-sm text-muted-foreground font-light">Kitchen equipment and refrigeration</p>
                  </div>
                  <div className="bg-card border border-border rounded-lg p-4">
                    <h3 className="font-medium mb-2">Out-of-order rooms</h3>
                    <p className="text-sm text-muted-foreground font-light">Direct revenue loss</p>
                  </div>
                  <div className="bg-card border border-border rounded-lg p-4">
                    <h3 className="font-medium mb-2">Water hygiene risks</h3>
                    <p className="text-sm text-muted-foreground font-light">Health and compliance threats</p>
                  </div>
                  <div className="bg-card border border-border rounded-lg p-4">
                    <h3 className="font-medium mb-2">Aesthetic deterioration</h3>
                    <p className="text-sm text-muted-foreground font-light">Brand image damage</p>
                  </div>
                  <div className="bg-card border border-border rounded-lg p-4">
                    <h3 className="font-medium mb-2">Air quality failures</h3>
                    <p className="text-sm text-muted-foreground font-light">Guest discomfort and complaints</p>
                  </div>
                </div>
                <p className="text-muted-foreground font-light leading-relaxed">
                  Every issue becomes TripAdvisor ammunition and lost bookings. We eliminate excuses before they become public feedback.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Full-Scope Hospitality & Leisure FM
                </h2>
                <p className="text-muted-foreground font-light leading-relaxed mb-6">
                  Guests shouldn't notice good FM. They should only notice everything working flawlessly.
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-4 px-4 font-medium">Business Area</th>
                        <th className="text-left py-4 px-4 font-medium">What We Protect</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border">
                        <td className="py-4 px-4 font-light">Guest Rooms & Suites</td>
                        <td className="py-4 px-4 text-muted-foreground font-light">HVAC comfort, lighting, fixtures, fire doors</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-4 px-4 font-light">Front of House</td>
                        <td className="py-4 px-4 text-muted-foreground font-light">Reception presentation, ambience, brand feel</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-4 px-4 font-light">Food & Beverage</td>
                        <td className="py-4 px-4 text-muted-foreground font-light">Kitchen extraction, refrigeration, gas safety</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-4 px-4 font-light">Wet Leisure</td>
                        <td className="py-4 px-4 text-muted-foreground font-light">Pools, spas, water hygiene & specialist plant</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-4 px-4 font-light">Public Spaces</td>
                        <td className="py-4 px-4 text-muted-foreground font-light">Toilets, lifts, décor, safety signage</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-4 px-4 font-light">Back of House</td>
                        <td className="py-4 px-4 text-muted-foreground font-light">Staff comfort, secure logistics, plant rooms</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Hygiene & Safety First
                </h2>
                <p className="text-muted-foreground font-light leading-relaxed mb-6">
                  We ensure uncompromising compliance in:
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-primary mr-3 mt-1">✓</span>
                    <span className="font-light">Water systems — ACOP L8 compliance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3 mt-1">✓</span>
                    <span className="font-light">Fire & life safety regulations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3 mt-1">✓</span>
                    <span className="font-light">Kitchen gas certification</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3 mt-1">✓</span>
                    <span className="font-light">IAQ & ventilation compliance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3 mt-1">✓</span>
                    <span className="font-light">Slips, trips, and hazard controls</span>
                  </li>
                </ul>
                <p className="text-muted-foreground font-light leading-relaxed">
                  We make the Responsible Person actually feel confident.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  PPM That Protects Revenue
                </h2>
                <p className="text-muted-foreground font-light leading-relaxed mb-6">
                  Rooms offline = money lost. Our planned preventative maintenance approach ensures maximum revenue availability:
                </p>
                <div className="bg-card border border-border rounded-lg p-6 space-y-4">
                  <div className="flex items-start">
                    <span className="text-primary mr-3 mt-1">•</span>
                    <div>
                      <h3 className="font-medium mb-1">Low Occupancy Scheduling</h3>
                      <p className="text-sm text-muted-foreground font-light">Plan intrusive works during quiet periods</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-primary mr-3 mt-1">•</span>
                    <div>
                      <h3 className="font-medium mb-1">Rapid Turnarounds</h3>
                      <p className="text-sm text-muted-foreground font-light">Quick refurb and make-good delivery</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-primary mr-3 mt-1">•</span>
                    <div>
                      <h3 className="font-medium mb-1">Asset Health Tracking</h3>
                      <p className="text-sm text-muted-foreground font-light">Prevent repeat failures through data-driven insights</p>
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground font-light leading-relaxed mt-6">
                  Our job is to keep every room and venue revenue-ready.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Experience-Boosting Enhancements
                </h2>
                <p className="text-muted-foreground font-light leading-relaxed mb-6">
                  We help hospitality operators level up with strategic improvements:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-card border border-border rounded-lg p-6">
                    <h3 className="font-medium mb-2">Energy Efficiency</h3>
                    <p className="text-sm text-muted-foreground font-light">Upgrades that drive margin gains</p>
                  </div>
                  <div className="bg-card border border-border rounded-lg p-6">
                    <h3 className="font-medium mb-2">Enhanced Ambience</h3>
                    <p className="text-sm text-muted-foreground font-light">Lighting improvements for better atmosphere</p>
                  </div>
                  <div className="bg-card border border-border rounded-lg p-6">
                    <h3 className="font-medium mb-2">Brand-Critical Refresh</h3>
                    <p className="text-sm text-muted-foreground font-light">Décor updates that protect brand standards</p>
                  </div>
                  <div className="bg-card border border-border rounded-lg p-6">
                    <h3 className="font-medium mb-2">Smart Controls</h3>
                    <p className="text-sm text-muted-foreground font-light">Temperature & access control visibility</p>
                  </div>
                </div>
                <p className="text-muted-foreground font-light leading-relaxed mt-6">
                  Facilities directly shape guest loyalty. We ensure it's positive.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Proven Results
                </h2>
                <div className="space-y-6">
                  <div className="bg-card border border-border rounded-lg p-6">
                    <h3 className="text-lg font-medium mb-3">Major Hotel Group — North</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-primary mr-2">✓</span>
                        <span className="text-sm text-muted-foreground font-light">Returned 28 rooms to revenue status within 2 weeks</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">✓</span>
                        <span className="text-sm text-muted-foreground font-light">21% reduction in comfort-related complaints</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">✓</span>
                        <span className="text-sm text-muted-foreground font-light">Washroom refurb rollout with zero guest disruption</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-card border border-border rounded-lg p-6">
                    <h3 className="text-lg font-medium mb-3">Leisure Facility — UK</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-primary mr-2">✓</span>
                        <span className="text-sm text-muted-foreground font-light">Pool plant overhaul → stable water quality</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">✓</span>
                        <span className="text-sm text-muted-foreground font-light">Improved IAQ → fewer staff sickness reports</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">✓</span>
                        <span className="text-sm text-muted-foreground font-light">Immediate first-time fixes during peak trading hours</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              <FAQSection faqs={faqs} />

              <section className="bg-gradient-to-br from-primary/10 via-background to-background border border-border rounded-lg p-8 md:p-12">
                <h2 className="text-3xl font-light mb-4">
                  Delight guests. Protect reputation. Grow repeat bookings.
                </h2>
                <p className="text-muted-foreground font-light leading-relaxed mb-8">
                  We make facilities performance your competitive edge.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg">
                    <Link to="/contact">Request Hospitality FM Proposal</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link to="/contact">24/7 Helpdesk — Speak Now</Link>
                  </Button>
                </div>
              </section>
            </div>

            <aside className="lg:col-span-1">
              <div className="sticky top-24">
                <SidebarCTA />
              </div>
            </aside>
          </div>
        </div>
      </article>
    </>
  );
};

export default HospitalityLeisure;
