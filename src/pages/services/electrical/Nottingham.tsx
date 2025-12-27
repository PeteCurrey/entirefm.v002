import { Helmet } from "react-helmet";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle, AlertTriangle } from "lucide-react";
import { SidebarCTA } from "@/components/shared/SidebarCTA";
import { FAQSection } from "@/components/shared/FAQSection";
import { SchemaMarkup, LocalBusinessSchema } from "@/components/shared/SchemaMarkup";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import ServiceHeroSection from "@/components/shared/ServiceHeroSection";

const ElectricalNottingham = () => {
  const faqs = [
    { question: "How much notice is needed to attend?", answer: "We can typically schedule initial compliance surveys within 48 hours. For urgent C1 dangerous defects, we mobilize immediate emergency response teams." },
    { question: "Do you notify repeat testing dates?", answer: "Yes - our digital governance platform automatically sends renewal reminders 90 days before certification expires." }
  ];

  const heroStats = [
    { value: "BS 7671", label: "Certified" },
    { value: "PBSA", label: "Specialist" },
    { value: "48hr", label: "Survey Response" },
    { value: "24/7", label: "Emergency Support" }
  ];

  return (
    <>
      <Helmet>
        <title>Commercial Electrical Compliance Nottingham | PBSA & Retail EICR Testing</title>
        <meta name="description" content="BS 7671 testing, fault remediation & documentation for Nottingham's PBSA, retail & leisure estates." />
        <link rel="canonical" href="https://entirefm.com/electrical/nottingham" />
      </Helmet>

      <SchemaMarkup schema={{ "@context": "https://schema.org", "@type": "Service", "name": "Electrical Compliance - Nottingham", "provider": { "@type": "Organization", "name": "EntireFM" }, "areaServed": "Nottingham, UK" }} />
      <BreadcrumbSchema items={[{ label: "Electrical Services", href: "/services/electrical" }, { label: "Nottingham" }]} />
      <LocalBusinessSchema name="EntireFM Nottingham - Electrical" address={{ street: "Nottingham Office", city: "Nottingham", postalCode: "NG1 1AA", country: "UK" }} />

      <ServiceHeroSection
        breadcrumbItems={[{ label: "Electrical Services", href: "/services/electrical" }, { label: "Nottingham" }]}
        title="Commercial Electrical Compliance – Nottingham"
        description="BS 7671 testing, fault remediation & documentation for Nottingham's PBSA, retail & leisure estates."
        stats={heroStats}
        primaryCTA={{ label: "Request Electrical Audit", href: "/contact" }}
        secondaryCTA={{ label: "Download BS 7671 Checklist", href: "/resources" }}
        backgroundImage="https://images.unsplash.com/photo-1621905252472-178d8ac26c65?q=80&w=2070&auto=format&fit=crop"
      />

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-16">
            <section>
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">Student Estates = High Risk Exposure</h2>
              <p className="text-lg text-muted-foreground mb-4">Large PBSA presence demands airtight compliance due to occupant vulnerability. Worst-case outcomes:</p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2"><AlertTriangle className="h-5 w-5 text-primary flex-shrink-0 mt-1" /><span>Evacuations</span></li>
                <li className="flex items-start gap-2"><AlertTriangle className="h-5 w-5 text-primary flex-shrink-0 mt-1" /><span>Public exposure</span></li>
                <li className="flex items-start gap-2"><AlertTriangle className="h-5 w-5 text-primary flex-shrink-0 mt-1" /><span>Enforcement proceedings</span></li>
              </ul>
              <p className="text-lg font-medium text-foreground mt-4">We eliminate compliance doubt entirely.</p>
            </section>

            <section>
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">Electrical Testing Services</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-muted/30 p-6 rounded-lg"><h3 className="font-medium mb-3">Full EICR</h3><p className="text-sm text-muted-foreground">Comprehensive electrical installation condition reporting.</p></div>
                <div className="bg-muted/30 p-6 rounded-lg"><h3 className="font-medium mb-3">Consumer board safety checks</h3><p className="text-sm text-muted-foreground">Individual unit distribution board inspection.</p></div>
                <div className="bg-muted/30 p-6 rounded-lg"><h3 className="font-medium mb-3">Earthing & bonding verification</h3><p className="text-sm text-muted-foreground">Safety earthing system validation.</p></div>
                <div className="bg-muted/30 p-6 rounded-lg"><h3 className="font-medium mb-3">Thermal detection</h3><p className="text-sm text-muted-foreground">Advanced thermal imaging to prevent electrical fires.</p></div>
              </div>
            </section>

            <section>
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">Sectors</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6"><h3 className="text-xl font-medium mb-2">PBSA</h3><p className="text-muted-foreground">Student accommodation electrical safety</p></Card>
                <Card className="p-6"><h3 className="text-xl font-medium mb-2">Leisure venues</h3><p className="text-muted-foreground">High-footfall entertainment facilities</p></Card>
                <Card className="p-6"><h3 className="text-xl font-medium mb-2">Heritage retail</h3><p className="text-muted-foreground">Conservation-sensitive compliance</p></Card>
                <Card className="p-6"><h3 className="text-xl font-medium mb-2">Corporate</h3><p className="text-muted-foreground">Office and business park safety</p></Card>
              </div>
            </section>

            <section className="bg-muted/30 p-8 rounded-lg">
              <h2 className="text-3xl font-light mb-6">Coverage</h2>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                {['City Centre', 'West Bridgford', 'Colwick', 'Beeston'].map(area => (
                  <div key={area} className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary" /><span>{area}</span></div>
                ))}
              </div>
            </section>

            <FAQSection faqs={faqs} />

            <section className="bg-primary text-white p-12 rounded-lg text-center">
              <h2 className="text-3xl font-light mb-4">Request Electrical Survey</h2>
              <Button size="lg" variant="secondary" asChild><Link to="/contact">Request Survey</Link></Button>
            </section>
          </div>
          <div className="lg:col-span-1"><div className="sticky top-4"><SidebarCTA /></div></div>
        </div>
      </div>
    </>
  );
};

export default ElectricalNottingham;
