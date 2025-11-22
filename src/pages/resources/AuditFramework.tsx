import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { Download, ClipboardCheck, CheckCircle2 } from "lucide-react";

const AuditFramework = () => {
  const coverageAreas = [
    "SLA vs. actual vs. perceived performance",
    "Compliance evidence visibility",
    "Financial transparency",
    "Response + first-time fix rates",
    "Culture & communication scorecard",
    "Asset lifecycle strategy",
    "Environmental & energy performance",
    "Risk management & governance maturity"
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Breadcrumb */}
      <div className="container mx-auto px-6 py-4">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Resources", href: "/resources" },
            { label: "FM Audit Framework" }
          ]}
        />
      </div>

      {/* Hero */}
      <section className="py-24 bg-gradient-to-b from-muted/50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <ClipboardCheck className="w-12 h-12 text-primary" />
              <h1 className="text-5xl md:text-6xl font-light underline-accent inline-block">
                What Good Looks Like: FM Audit Framework
              </h1>
            </div>
            <p className="text-2xl text-muted-foreground font-light leading-relaxed mb-8">
              Evaluate Your FM Provider Like a Pro.
            </p>
            <p className="text-lg text-muted-foreground font-light leading-relaxed mb-8">
              A structured audit checklist that exposes weak delivery — and shines a spotlight on operational excellence.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gap-2">
                <Download className="w-5 h-5" />
                Download Audit Framework
              </Button>
              <Button size="lg" variant="outline">
                Book a Free Site Inspection
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What The Audit Framework Covers */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-light mb-6 underline-accent inline-block">
              What The Audit Framework Covers
            </h2>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {coverageAreas.map((item, index) => (
                <Card key={index} className="p-4 hover-lift">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <p className="font-light">{item}</p>
                  </div>
                </Card>
              ))}
            </div>
            <p className="text-xl text-muted-foreground font-light leading-relaxed italic">
              This guide highlights exactly where FM value is won or lost.
            </p>
          </div>
        </div>
      </section>

      {/* Why It Converts */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-light mb-6 underline-accent inline-block">
              Why It Converts
            </h2>
            <p className="text-2xl text-muted-foreground font-light leading-relaxed">
              Directors quickly realise how much they're missing with other providers.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-charcoal text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6">
            Download the FM Audit Framework
          </h2>
          <p className="text-lg text-gray-300 font-light mb-8">
            Evaluate your FM provider with professional standards
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-charcoal hover:bg-gray-100 gap-2">
              <Download className="w-5 h-5" />
              Download Framework
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Request Site Inspection
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AuditFramework;
