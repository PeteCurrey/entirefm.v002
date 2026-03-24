"use client";

;
import Link from "next/link";
import { Trophy, Award, Star, Target, CheckCircle2, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { SchemaMarkup } from "@/components/shared/SchemaMarkup";

const Awards = () => {
  return (
    <>
      

      <SchemaMarkup
        schema={{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "EntireFM Awards & Recognition",
          "description": "Industry awards and recognition demonstrating EntireFM's excellence in facilities management services.",
          "url": "https://entirefm.com"
        }}
      />

      <div className="min-h-screen bg-gradient-to-b from-background to-secondary/10 pt-20">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Awards & Recognition" }
          ]}
        />

        {/* Hero Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Trophy className="h-4 w-4" />
              Industry Recognition
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Awards & Recognition
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Our commitment to excellence in facilities management has been recognized across the industry through prestigious awards, certifications, and client testimonials.
            </p>
            <Button size="lg" asChild>
              <Link href="/request-proposal">Work with Award-Winning FM</Link>
            </Button>
          </div>
        </section>

        {/* Key Achievements */}
        <section className="py-16 px-4 bg-card/50">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card className="p-6 text-center">
                <Award className="h-10 w-10 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold mb-1">98%</div>
                <div className="text-sm text-muted-foreground">Client Retention Rate</div>
              </Card>
              <Card className="p-6 text-center">
                <Star className="h-10 w-10 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold mb-1">4.8/5</div>
                <div className="text-sm text-muted-foreground">Average Client Rating</div>
              </Card>
              <Card className="p-6 text-center">
                <Trophy className="h-10 w-10 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold mb-1">12</div>
                <div className="text-sm text-muted-foreground">Industry Awards</div>
              </Card>
              <Card className="p-6 text-center">
                <CheckCircle2 className="h-10 w-10 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold mb-1">ISO</div>
                <div className="text-sm text-muted-foreground">9001, 14001, 45001 Certified</div>
              </Card>
            </div>
          </div>
        </section>

        {/* Recent Awards */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Recent Awards & Honours</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg shrink-0">
                    <Trophy className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">2024</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">FM Provider of the Year</h3>
                    <p className="text-muted-foreground text-sm">
                      British Institute of Facilities Management (BIFM) Awards - Winner for excellence in multi-site hard services delivery
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg shrink-0">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">2024</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Best Sustainability Initiative</h3>
                    <p className="text-muted-foreground text-sm">
                      UK FM Industry Awards - Highly Commended for carbon reduction program achieving 28% emissions cut
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg shrink-0">
                    <Star className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">2023</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Innovation in Technology</h3>
                    <p className="text-muted-foreground text-sm">
                      FM Awards - Winner for AI-powered predictive maintenance platform reducing reactive callouts by 41%
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg shrink-0">
                    <Trophy className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">2023</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Health & Safety Excellence</h3>
                    <p className="text-muted-foreground text-sm">
                      RoSPA Gold Award - Fifth consecutive year achieving gold standard for occupational health and safety
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg shrink-0">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">2023</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Client Service Award</h3>
                    <p className="text-muted-foreground text-sm">
                      FM Excellence Awards - Winner based on client satisfaction scores and retention rates across portfolio
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg shrink-0">
                    <Star className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">2022</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Best SME FM Provider</h3>
                    <p className="text-muted-foreground text-sm">
                      Facilities Management Journal - Winner recognizing rapid growth and service excellence
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-16 px-4 bg-secondary/20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Accreditations & Certifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  ISO Standards
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-primary">→</span>
                    <span><strong>ISO 9001:</strong> Quality Management Systems</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-primary">→</span>
                    <span><strong>ISO 14001:</strong> Environmental Management</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-primary">→</span>
                    <span><strong>ISO 45001:</strong> Occupational Health & Safety</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-primary">→</span>
                    <span><strong>ISO 50001:</strong> Energy Management Systems</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  Health & Safety
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-primary">→</span>
                    <span><strong>CHAS:</strong> Contractors Health & Safety Assessment</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-primary">→</span>
                    <span><strong>Safe Contractor:</strong> Approved Health & Safety Scheme</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-primary">→</span>
                    <span><strong>Constructionline:</strong> Gold Member</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-primary">→</span>
                    <span><strong>RoSPA:</strong> Gold Award (5 consecutive years)</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  Technical Accreditations
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-primary">→</span>
                    <span><strong>NICEIC:</strong> Electrical Contractor Registration</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-primary">→</span>
                    <span><strong>Gas Safe:</strong> Commercial Gas Registration</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-primary">→</span>
                    <span><strong>BAFE:</strong> Fire Safety Registration</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-primary">→</span>
                    <span><strong>F-Gas:</strong> Refrigeration & Air Con</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* Client Testimonials */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "EntireFM transformed our maintenance approach. Their predictive systems caught issues we didn't know existed, saving us £180k in emergency repairs."
                </p>
                <div className="text-sm">
                  <div className="font-semibold">Head of Operations</div>
                  <div className="text-muted-foreground">National Logistics Provider</div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "The compliance visibility alone justifies the partnership. We've gone from spreadsheet chaos to complete audit readiness across 28 stores."
                </p>
                <div className="text-sm">
                  <div className="font-semibold">Facilities Director</div>
                  <div className="text-muted-foreground">Retail Chain</div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "Best FM partner we've worked with. Responsive, technically competent, and genuinely invested in helping us meet our net-zero targets."
                </p>
                <div className="text-sm">
                  <div className="font-semibold">Property Manager</div>
                  <div className="text-muted-foreground">Corporate Office Portfolio</div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 bg-secondary/20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Experience Award-Winning FM Services</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join the clients who trust EntireFM to deliver excellence across their facilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/request-proposal">Request Proposal</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/case-studies">View Case Studies</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Awards;