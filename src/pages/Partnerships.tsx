import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Handshake, Users, Award, Target, CheckCircle2, Building2, Wrench, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FAQSection } from "@/components/shared/FAQSection";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { SchemaMarkup } from "@/components/shared/SchemaMarkup";

const Partnerships = () => {
  const faqs = [
    {
      question: "What types of partnerships does EntireFM offer?",
      answer: "We offer supplier partnerships (become part of our specialist network), strategic partnerships (collaborate on client delivery), technology partnerships (integrate your solutions with our platform), and channel partnerships (refer clients to EntireFM)."
    },
    {
      question: "What are the requirements to become a supplier partner?",
      answer: "Suppliers must maintain relevant trade accreditations, hold minimum £5M public liability insurance, demonstrate robust H&S policies, use our digital workflow platforms, and agree to our quality and compliance standards. Full criteria available in our supplier application."
    },
    {
      question: "How does the referral program work?",
      answer: "Partners who refer new clients to EntireFM receive commission based on contract value. We provide co-branded marketing materials, lead tracking, and transparent reporting on referral status and payments."
    },
    {
      question: "Can we white-label EntireFM services?",
      answer: "Yes, we offer white-label partnerships where your brand remains front-facing to the client while EntireFM delivers backend FM services. Ideal for consultancies, property advisors, and managed service providers."
    },
    {
      question: "What support does EntireFM provide to partners?",
      answer: "Partners receive dedicated account management, co-branded marketing collateral, lead generation support, technical training, access to our client portal, and regular business reviews to optimize mutual success."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Partnerships & Collaboration | EntireFM</title>
        <meta name="description" content="Partner with EntireFM: supplier network opportunities, strategic collaborations, technology integration, and referral programs for UK facilities management." />
        <link rel="canonical" href="https://entirefm.com/partnerships" />
      </Helmet>

      <SchemaMarkup
        schema={{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "EntireFM Partnerships",
          "description": "Partnership opportunities with EntireFM including supplier network, strategic collaborations, technology integration, and referral programs.",
          "url": "https://entirefm.com"
        }}
      />

      <div className="min-h-screen bg-gradient-to-b from-background to-secondary/10 pt-20">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Partnerships" }
          ]}
        />

        {/* Hero Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Handshake className="h-4 w-4" />
              Grow Together
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Partnerships & Collaboration
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Join the EntireFM partner ecosystem. Whether you're a specialist supplier, technology provider, or channel partner, we create mutually beneficial relationships that drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/suppliers">Become a Supplier</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/contact">Discuss Partnership</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Partnership Types */}
        <section className="py-16 px-4 bg-card/50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Partnership Opportunities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <Wrench className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Supplier Network</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Join our vetted specialist network delivering services across the UK
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link to="/suppliers">Apply Now</Link>
                </Button>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Strategic Partners</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Collaborate on large-scale client delivery and market expansion
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link to="/contact">Get in Touch</Link>
                </Button>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <Building2 className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Technology Partners</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Integrate your solutions with our digital FM platform
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link to="/integrations">View Integrations</Link>
                </Button>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Channel Partners</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Refer clients and earn commission on successful introductions
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link to="/contact">Learn More</Link>
                </Button>
              </Card>
            </div>
          </div>
        </section>

        {/* Partner Benefits */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Why Partner with EntireFM?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-8">
                <Award className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-2xl font-semibold mb-4">Access to Major Clients</h3>
                <p className="text-muted-foreground mb-6">
                  Work with leading UK organizations across retail, logistics, corporate, healthcare, and public sectors through our established client relationships.
                </p>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>National coverage opportunities across 200+ client sites</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Long-term contract visibility and revenue predictability</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Exposure to blue-chip organizations and government contracts</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-8">
                <TrendingUp className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-2xl font-semibold mb-4">Business Growth Support</h3>
                <p className="text-muted-foreground mb-6">
                  Accelerate your growth with dedicated support, streamlined processes, and co-marketing opportunities that amplify your market presence.
                </p>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Fast-track payment terms (net 30 days for suppliers)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Co-branded marketing materials and lead generation support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Preferred supplier status with regular work allocation</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-8">
                <Building2 className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-2xl font-semibold mb-4">Digital Platform Access</h3>
                <p className="text-muted-foreground mb-6">
                  Leverage our technology platform for efficient job allocation, compliance tracking, and automated invoicing that reduces admin overhead.
                </p>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Mobile apps for engineers with real-time job updates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Automated certificate management and compliance documentation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Integrated invoicing and financial reporting dashboards</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-8">
                <Users className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-2xl font-semibold mb-4">Dedicated Support</h3>
                <p className="text-muted-foreground mb-6">
                  Every partner is assigned a dedicated account manager who understands your business and helps maximize the value of our partnership.
                </p>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Quarterly business reviews and performance optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Technical training and certification support programs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>24/7 operations desk for urgent support and escalations</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* Partner Requirements */}
        <section className="py-16 px-4 bg-secondary/20">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Supplier Partner Requirements</h2>
            <Card className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Essential Criteria</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">Minimum £5M public liability insurance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">Relevant trade certifications (Gas Safe, NICEIC, BAFE, etc.)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">ISO 9001 quality management or equivalent</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">Comprehensive H&S policies and safety documentation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">References from at least 2 commercial clients</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Preferred Qualifications</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">ISO 14001 environmental management</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">CHAS or equivalent H&S accreditation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">National or regional coverage capabilities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">24/7 emergency response capability</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">Digital workflow system integration capability</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t">
                <Button size="lg" asChild>
                  <Link to="/suppliers">Complete Supplier Application</Link>
                </Button>
              </div>
            </Card>
          </div>
        </section>

        {/* Success Story */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 bg-gradient-to-br from-primary/10 to-secondary/10">
              <h2 className="text-2xl font-bold mb-6">Partner Success: Regional Fire & Security Specialist</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  <strong className="text-foreground">Partner:</strong> Midlands-based fire safety and security systems installer with 15 engineers.
                </p>
                <p>
                  <strong className="text-foreground">Before EntireFM:</strong> Reliant on sporadic project work with inconsistent revenue. Struggled with late payments and admin overhead managing multiple small clients.
                </p>
                <p>
                  <strong className="text-foreground">After Joining Our Network:</strong> Became preferred supplier for fire alarm and emergency lighting across 60+ client sites. Guaranteed monthly work allocation with net 30-day payment terms.
                </p>
                <p>
                  <strong className="text-foreground">Results:</strong>
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-background/50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-primary mb-1">65%</div>
                    <div className="text-sm">Revenue growth in 18 months</div>
                  </div>
                  <div className="bg-background/50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-primary mb-1">8</div>
                    <div className="text-sm">New engineers hired</div>
                  </div>
                  <div className="bg-background/50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-primary mb-1">95%</div>
                    <div className="text-sm">Work allocated digitally (less admin)</div>
                  </div>
                  <div className="bg-background/50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-primary mb-1">100%</div>
                    <div className="text-sm">On-time payments</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 px-4 bg-secondary/20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Partnership FAQs</h2>
            <FAQSection faqs={faqs} />
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Partner with EntireFM?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join our growing partner ecosystem and unlock new growth opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/suppliers">Apply as Supplier</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/contact">Discuss Partnership</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Partnerships;