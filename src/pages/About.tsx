import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle2, Shield, Users, TrendingUp, FileCheck, Lock, Award, UserCheck } from "lucide-react";
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <>
      <Helmet>
        <title>Trust & Accreditations | EntireFM</title>
        <meta name="description" content="Built on safety, powered by accountability. EntireFM delivers full compliance governance with UK standards including BS 5839, ISO certifications, and comprehensive insurance coverage." />
      </Helmet>
      
      <div className="min-h-screen pt-20">
        {/* Hero */}
        <section className="py-24 bg-gradient-to-b from-muted/50 to-white">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-6xl font-light mb-6 underline-accent inline-block">
                Built on Safety. Powered by Accountability.
              </h1>
              <p className="text-xl text-muted-foreground font-light leading-relaxed mb-8">
                You can't outsource responsibility. But you can outsource the risk.
              </p>
              <p className="text-lg text-muted-foreground font-light leading-relaxed">
                EntireFM delivers full compliance governance, safety assurance and accountability — with proof behind every promise.
              </p>
              <Button size="lg" className="mt-8" asChild>
                <Link to="/contact">Request Insurance & Compliance Pack</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Regulatory & Safety Alignment */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                Regulatory & Safety Alignment
              </h2>
              <p className="text-lg text-muted-foreground font-light leading-relaxed mb-8">
                We operate to the highest UK standards:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {[
                  "Health & Safety at Work Act",
                  "BS 5839 / BS 5266 / BS EN 12845 / BS 9990",
                  "ACOP L8 + HSG274",
                  "Electricity at Work Regulations",
                  "Gas Safety (Installation & Use) Regulations",
                  "ESG and sustainability pathways"
                ].map((standard, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground font-light">{standard}</span>
                  </div>
                ))}
              </div>
              
              <div className="bg-muted/30 p-6 rounded-lg">
                <p className="text-lg font-light text-center">
                  Every action is recorded. Every certificate traceable.<br />
                  <span className="text-primary font-medium">You stay audit-ready 24/7.</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Accreditations */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                Accreditations
              </h2>
              <p className="text-lg text-muted-foreground font-light leading-relaxed mb-12">
                We don't flash logos — we live what they stand for.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-8">
                {[
                  { name: "CHAS", icon: Shield },
                  { name: "SafeContractor", icon: Award },
                  { name: "Gas Safe", icon: FileCheck },
                  { name: "ISO 9001", icon: CheckCircle2 },
                  { name: "ISO 14001", icon: CheckCircle2 },
                  { name: "ISO 45001", icon: CheckCircle2 },
                  { name: "NICEIC", icon: Award },
                  { name: "Cyber Essentials", icon: Lock }
                ].map((accreditation) => (
                  <div key={accreditation.name} className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                      <accreditation.icon className="w-8 h-8 text-primary" />
                    </div>
                    <p className="text-xs font-medium text-center">{accreditation.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Insurance Cover */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                Insurance Cover
              </h2>
              <p className="text-lg text-muted-foreground font-light leading-relaxed mb-8">
                We remove commercial risk through:
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    icon: Shield,
                    title: "Public & Employer Liability",
                    description: "Multi-million coverage protecting your operations"
                  },
                  {
                    icon: Lock,
                    title: "Contract Works Protection",
                    description: "Full project and installation coverage"
                  },
                  {
                    icon: FileCheck,
                    title: "Professional Indemnity",
                    description: "Expert advice and service protection"
                  }
                ].map((item, index) => (
                  <div key={index} className="bg-muted/30 p-6 rounded-lg text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                      <item.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-light mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-lg font-light text-primary">
                  Risk transferred. Accountability yours to trust.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Engineer Vetting */}
        <section className="py-16 bg-charcoal text-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                Engineer Vetting & Competence
              </h2>
              <p className="text-lg text-gray-300 font-light leading-relaxed mb-8">
                The right people. The right qualifications. Every time.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    icon: UserCheck,
                    title: "DBS Checks",
                    description: "Enhanced screening where required for sensitive sites"
                  },
                  {
                    icon: Award,
                    title: "CSCS / Skillcard",
                    description: "All engineers verified to industry standards"
                  },
                  {
                    icon: TrendingUp,
                    title: "Technical Upskilling",
                    description: "Regular training to maintain cutting-edge competence"
                  },
                  {
                    icon: Shield,
                    title: "Security Clearance",
                    description: "Aviation & high-security environment capabilities"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mr-4 flex-shrink-0">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-light mb-1">{item.title}</h3>
                      <p className="text-sm text-gray-300 font-light leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-light mb-6">
              Send us your insurer's requirements. We'll exceed them.
            </h2>
            <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto mb-8">
              Our commitment to safety and compliance isn't just about ticking boxes – it's about protecting your people, your assets, and your reputation.
            </p>
            <Button size="lg" asChild>
              <Link to="/contact">Request Insurance & H&S Pack</Link>
            </Button>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;