import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { Download, Calendar, CheckCircle2 } from "lucide-react";

const ComplianceCalendar = () => {
  const checklist = [
    "Fire systems (BS 5839)",
    "Emergency lighting (BS 5266)",
    "Sprinklers & risers (BS EN 12845 / BS 9990)",
    "Electrical testing (EICR, PAT)",
    "Water hygiene (ACOP L8 / HSG274)",
    "Gas & heating safety",
    "Lift & access systems (LOLER)",
    "Hazard & workplace safety checks"
  ];

  const audience = [
    "Directors / Responsible Persons",
    "FM Managers",
    "Managing Agents",
    "Site Operators"
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Breadcrumb */}
      <div className="container mx-auto px-6 py-4">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Resources", href: "/resources" },
            { label: "Compliance Calendar 2025" }
          ]}
        />
      </div>

      {/* Hero */}
      <section className="py-24 bg-gradient-to-b from-muted/50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <Calendar className="w-12 h-12 text-primary" />
              <h1 className="text-5xl md:text-6xl font-light underline-accent inline-block">
                FM Director's Compliance Calendar 2025
              </h1>
            </div>
            <p className="text-2xl text-muted-foreground font-light leading-relaxed mb-8">
              Stay Ahead of Every Compliance Deadline. Every Time.
            </p>
            <p className="text-lg text-muted-foreground font-light leading-relaxed mb-8">
              Your 2025 statutory maintenance and risk management calendar — engineered to keep Responsible Persons out of the firing line.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gap-2">
                <Download className="w-5 h-5" />
                Download the 2025 Compliance Calendar (PDF)
              </Button>
              <Button size="lg" variant="outline">
                Request a Compliance Audit
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Get */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-light mb-6 underline-accent inline-block">
              What You'll Get
            </h2>
            <p className="text-lg text-muted-foreground font-light leading-relaxed mb-8">
              A visual month-by-month calendar covering:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {checklist.map((item, index) => (
                <Card key={index} className="p-4 hover-lift">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <p className="font-light">{item}</p>
                  </div>
                </Card>
              ))}
            </div>
            <p className="text-lg text-muted-foreground font-light leading-relaxed">
              All mapped to legal obligations and best-practice intervals.
            </p>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-light mb-6 underline-accent inline-block">
              Who It's For
            </h2>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              {audience.map((role, index) => (
                <Card key={index} className="p-6 hover-lift">
                  <p className="text-lg font-light">{role}</p>
                </Card>
              ))}
            </div>
            <p className="text-xl text-muted-foreground font-light leading-relaxed italic">
              Compliance clarity = fewer arguments, faster decisions.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-charcoal text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6">
            Download your 2025 Compliance Calendar
          </h2>
          <p className="text-lg text-gray-300 font-light mb-8">
            → PDF sent instantly via email
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-charcoal hover:bg-gray-100 gap-2">
            <Download className="w-5 h-5" />
            Download Calendar
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ComplianceCalendar;
