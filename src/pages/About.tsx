import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle2, Shield, Users, TrendingUp } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-b from-muted/50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-light mb-6 underline-accent inline-block">
              Built by people who've sat on your side of the table.
            </h1>
            <p className="text-xl text-muted-foreground font-light leading-relaxed">
              We know what it's like to chase contractors, deal with missed SLAs, and struggle with opaque FM providers. That's why we built EntireFM differently.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                The EntireFM Story
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground font-light leading-relaxed">
                <p>
                  EntireFM was founded in 2008 by Peter Curtsy, a facilities professional frustrated with the lack of accountability and responsiveness in the UK FM market.
                </p>
                <p>
                  After years of managing complex sites and dealing with slow-moving corporate FM providers, Peter saw an opportunity to create something different: an owner-led business that actually answers the phone, hits its KPIs, and treats technology as a tool rather than a barrier.
                </p>
                <p>
                  Since then, EntireFM has grown to become a leading provider of facilities management and support services across the UK, supporting clients in sectors from logistics to aviation, residential to hospitality – and everything in between.
                </p>
                <p>
                  We've built a reputation for being responsive, dependable, and genuinely committed to making our clients' lives easier. No corporate scripts. No passing the buck. Just accountable FM that works.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-light mb-12 text-center underline-accent inline-block">
            What we stand for
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: CheckCircle2,
                title: "Accountability",
                description: "We own the problem until it's solved. No excuses, no passing the buck."
              },
              {
                icon: Users,
                title: "Communication",
                description: "We actually answer the phone. Updates without chasing. Transparency as standard."
              },
              {
                icon: Shield,
                title: "Compliance",
                description: "Statutory requirements aren't optional. Digital records. Clear audit trails."
              },
              {
                icon: TrendingUp,
                title: "Continuous Improvement",
                description: "Regular reviews. Proactive recommendations. Finding savings and efficiencies."
              }
            ].map((pillar, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <pillar.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-light mb-3">{pillar.title}</h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-light mb-12 text-center underline-accent inline-block">
            Leadership team
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Peter Curtsy",
                role: "Founder & Managing Director",
                bio: "30+ years in FM and building services. Hands-on approach. Still does site audits."
              },
              {
                name: "Sarah Mitchell",
                role: "Operations Director",
                bio: "Compliance and safety specialist. Former corporate FM manager. Switched sides."
              },
              {
                name: "James Harper",
                role: "Technical Director",
                bio: "M&E background. Chartered engineer. Built our engineer network from scratch."
              }
            ].map((person, index) => (
              <div key={index} className="text-center">
                <div className="w-32 h-32 rounded-full bg-muted mx-auto mb-4" />
                <h3 className="text-xl font-light mb-1">{person.name}</h3>
                <p className="text-sm text-primary mb-3">{person.role}</p>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">
                  {person.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section className="py-16 bg-charcoal text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
              Accreditations & Standards
            </h2>
            <p className="text-lg text-gray-300 font-light leading-relaxed mb-12">
              We maintain industry accreditations and high standards across health & safety, quality, and environmental management.
            </p>
            <div className="flex flex-wrap justify-center gap-8 mb-12">
              {["CHAS", "SafeContractor", "ISO 9001", "ISO 14001", "ISO 45001", "Gas Safe"].map((accreditation) => (
                <div key={accreditation} className="text-center">
                  <div className="w-24 h-24 rounded-full bg-white/10 mx-auto mb-3 flex items-center justify-center">
                    <span className="text-xs font-light">{accreditation}</span>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-400 font-light">
              Our commitment to safety and compliance isn't just about ticking boxes – it's about protecting your people, your assets, and your reputation.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6">
            Want to know more?
          </h2>
          <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto mb-8">
            We're always happy to talk about what we do and how we can help.
          </p>
          <Button size="lg" asChild>
            <Link to="/contact">Get In Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;
