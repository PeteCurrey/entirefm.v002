"use client";

;
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Scale, Shield, Clock, Users } from "lucide-react";
import { Breadcrumb } from "@/components/shared/Breadcrumb";

const Compare = () => {
  const comparisons = [
    {
      title: "EntireFM vs Mitie",
      summary: "Compare independent FM delivery against one of the UK's largest outsourced providers. Focus on decision speed and direct accountability.",
      href: "/compare/entirefm-vs-mitie"
    },
    {
      title: "EntireFM vs CBRE",
      summary: "How does owner-led FM compare to global property services? Examine responsiveness, local knowledge, and contract flexibility.",
      href: "/compare/entirefm-vs-cbre"
    },
    {
      title: "EntireFM vs JLL",
      summary: "Independent UK delivery versus multinational FM. Compare governance structures, escalation paths, and day-to-day operations.",
      href: "/compare/entirefm-vs-jll"
    },
    {
      title: "EntireFM vs Sodexo",
      summary: "Specialist hard FM against integrated services. Evaluate compliance focus, engineering expertise, and operational transparency.",
      href: "/compare/entirefm-vs-sodexo"
    },
    {
      title: "EntireFM vs In-House FM",
      summary: "When does outsourcing make sense? Compare cost structures, risk transfer, and access to specialist capabilities.",
      href: "/compare/entirefm-vs-in-house"
    },
    {
      title: "EntireFM vs Freelance Engineers",
      summary: "Single contractor relationships versus managed service. Examine coverage, compliance burden, and continuity of service.",
      href: "/compare/entirefm-vs-freelance"
    },
    {
      title: "EntireFM vs Call-Out-Only Providers",
      summary: "Reactive-only services versus planned maintenance. Compare long-term costs, asset protection, and compliance management.",
      href: "/compare/entirefm-vs-call-out-only"
    }
  ];

  const reasons = [
    {
      icon: Shield,
      title: "Risk & Governance",
      description: "Who holds statutory responsibility? How are compliance gaps identified and closed?"
    },
    {
      icon: Clock,
      title: "Responsiveness",
      description: "How quickly do issues get resolved? Who makes decisions when problems arise?"
    },
    {
      icon: Users,
      title: "Accountability",
      description: "Who owns the outcomes? How visible is performance? Where does the buck stop?"
    },
    {
      icon: Scale,
      title: "Cost Transparency",
      description: "What's included? How are variations handled? Are there hidden management fees?"
    }
  ];

  return (
    <>
      

      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-background via-background to-primary/5 py-16 md:py-20">
          <div className="container mx-auto px-4">
            <Breadcrumb items={[{ label: "Compare Providers" }]} />
            
            <h1 className="text-4xl md:text-5xl font-light mb-6 mt-8">
              Compare EntireFM <span className="text-primary">With Other FM Providers</span>
            </h1>
            <p className="text-xl text-muted-foreground font-light max-w-3xl">
              Making the right FM decision requires understanding the practical differences between delivery models. 
              These comparisons focus on what matters: governance, responsiveness, and day-to-day operations.
            </p>
          </div>
        </section>

        {/* Why Compare Section */}
        <section className="py-12 border-b border-border">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-light mb-8 text-center">What Clients Compare</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {reasons.map((reason, idx) => (
                <div key={idx} className="text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <reason.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-medium mb-2">{reason.title}</h3>
                  <p className="text-sm text-muted-foreground font-light">{reason.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-light mb-10 text-center">Detailed Comparisons</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {comparisons.map((comparison, idx) => (
                <Card key={idx} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-medium mb-3">{comparison.title}</h3>
                    <p className="text-sm text-muted-foreground font-light mb-4 line-clamp-3">
                      {comparison.summary}
                    </p>
                    <Button asChild variant="outline" size="sm">
                      <Link href={comparison.href}>
                        View Comparison
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-light mb-4">Need Help Deciding?</h2>
            <p className="text-muted-foreground font-light mb-8 max-w-2xl mx-auto">
              Every estate is different. We're happy to discuss your specific requirements and explain 
              how our approach would work for your portfolio — with no obligation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/request-proposal">Request a Proposal</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/fm-operations/helpdesk">Speak to Our Team</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Compare;