"use client";

;
import { Card } from "@/components/ui/card";
import { Shield, FileCheck, CheckCircle } from "lucide-react";
import { SidebarCTA } from "@/components/shared/SidebarCTA";
import { FAQSection } from "@/components/shared/FAQSection";
import { SchemaMarkup, LocalBusinessSchema } from "@/components/shared/SchemaMarkup";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import ServiceHeroSection from "@/components/shared/ServiceHeroSection";

const FireNottingham = () => {
  const faqs = [{ question: "What fire compliance is needed for Nottingham's historic buildings?", answer: "Historic buildings in Nottingham require retrospective fire alarm systems meeting BS 5839 while respecting conservation requirements. EntireFM specializes in integrating modern detection technology into heritage structures with minimal visual impact." }];

  const heroStats = [
    { value: "24/7", label: "Emergency Response" },
    { value: "100", label: "Local Engineers", suffix: "%" },
    { value: "BS 5839", label: "Certified Testing" },
    { value: "<4hr", label: "Response Time" }
  ];

  return (
    <>
      

      <SchemaMarkup schema={{ "@context": "https://schema.org", "@type": "Service", "name": "Fire Alarm Compliance - Nottingham", "provider": { "@type": "Organization", "name": "EntireFM" }, "areaServed": "Nottingham, UK" }} />
      <BreadcrumbSchema items={[{ label: "Fire Compliance", href: "/services/fire-alarms" }, { label: "Nottingham" }]} />
      <LocalBusinessSchema name="EntireFM Nottingham" address={{ street: "Nottingham Office", city: "Nottingham", postalCode: "NG1 1AA", country: "UK" }} />

      <ServiceHeroSection
        breadcrumbItems={[{ label: "Fire Compliance", href: "/services/fire-alarms" }, { label: "Nottingham" }]}
        title="Fire Alarm Compliance – Nottingham"
        description="Historic buildings + student-dense environment. Compliance vulnerability protection with BS 5839 certified testing and rapid remedial response."
        stats={heroStats}
        primaryCTA={{ label: "Request Fire Audit", href: "/contact" }}
        secondaryCTA={{ label: "Download Checklist", href: "/resources" }}
        backgroundImage="https://images.unsplash.com/photo-1624018030910-e3c4b8f7eebe?q=80&w=2070&auto=format&fit=crop"
      />

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-16">
            <section>
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">Heritage & Student Housing Expertise</h2>
              <p className="text-lg text-muted-foreground">Nottingham's historic commercial buildings and high student population create unique fire compliance challenges. EntireFM delivers BS 5839 certification respecting conservation requirements while protecting modern PBSA developments.</p>

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <Card className="p-6">
                  <Shield className="h-10 w-10 text-destructive mb-4" />
                  <h3 className="text-xl font-medium mb-2">Heritage Integration</h3>
                  <p className="text-muted-foreground">Modern detection systems installed with minimal visual impact on historic structures.</p>
                </Card>
                <Card className="p-6">
                  <FileCheck className="h-10 w-10 text-destructive mb-4" />
                  <h3 className="text-xl font-medium mb-2">PBSA Compliance</h3>
                  <p className="text-muted-foreground">L1 system requirements met with priority sleeping risk response protocols.</p>
                </Card>
              </div>
            </section>

            <section className="bg-muted/30 p-8 rounded-lg">
              <h2 className="text-3xl font-light mb-6">Nottingham Coverage</h2>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                {['City Centre', 'Lace Market', 'Hockley', 'West Bridgford', 'Beeston', 'Sneinton'].map(area => (
                  <div key={area} className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-destructive" /><span>{area}</span></div>
                ))}
              </div>
            </section>

            <FAQSection faqs={faqs} />
          </div>
          <div className="lg:col-span-1"><div className="sticky top-4"><SidebarCTA /></div></div>
        </div>
      </div>
    </>
  );
};

export default FireNottingham;
