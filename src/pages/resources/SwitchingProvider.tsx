import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { Download, RefreshCw, CheckCircle2 } from "lucide-react";

const SwitchingProvider = () => {
  const playbookCovers = [
    "How to avoid operational downtime",
    "Data to extract from your incumbent",
    "Stakeholder comms plan",
    "Vendor accountability structure",
    "Mobilisation timeline template",
    "Risk watchlist + mitigations"
  ];

  const perfectFor = [
    "Procurement leads",
    "FM directors",
    "Managing agents",
    "Anyone tired of being let down"
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Breadcrumb */}
      <div className="container mx-auto px-6 py-4">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Resources", href: "/resources" },
            { label: "Switching FM Provider" }
          ]}
        />
      </div>

      {/* Hero */}
      <section className="py-24 bg-gradient-to-b from-muted/50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <RefreshCw className="w-12 h-12 text-primary" />
              <h1 className="text-5xl md:text-6xl font-light underline-accent inline-block">
                Switching FM Provider — Pain-Free Playbook
              </h1>
            </div>
            <p className="text-2xl text-muted-foreground font-light leading-relaxed mb-8">
              Changing FM Provider Doesn't Need to Be Chaos.
            </p>
            <p className="text-lg text-muted-foreground font-light leading-relaxed mb-8">
              A step-by-step playbook for friction-free transition — without letting compliance slide.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gap-2">
                <Download className="w-5 h-5" />
                Download the Playbook
              </Button>
              <Button size="lg" variant="outline">
                Get a Mobilisation Proposal
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What the Playbook Covers */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-light mb-6 underline-accent inline-block">
              What the Playbook Covers
            </h2>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {playbookCovers.map((item, index) => (
                <Card key={index} className="p-4 hover-lift">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <p className="font-light">{item}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Perfect For */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-light mb-6 underline-accent inline-block">
              Perfect for
            </h2>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {perfectFor.map((role, index) => (
                <Card key={index} className="p-6 hover-lift">
                  <p className="text-lg font-light">{role}</p>
                </Card>
              ))}
            </div>
            <p className="text-xl text-muted-foreground font-light leading-relaxed italic">
              Better FM starts with a smarter switch.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-charcoal text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6">
            Download the Switching Provider Playbook
          </h2>
          <p className="text-lg text-gray-300 font-light mb-8">
            Make your FM transition smooth and risk-free
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-charcoal hover:bg-gray-100 gap-2">
              <Download className="w-5 h-5" />
              Download Playbook
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Get Mobilisation Proposal
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SwitchingProvider;
