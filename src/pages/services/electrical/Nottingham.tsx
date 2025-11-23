import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Download, CheckCircle, AlertTriangle } from "lucide-react";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { SidebarCTA } from "@/components/shared/SidebarCTA";
import { FAQSection } from "@/components/shared/FAQSection";
import { SchemaMarkup, LocalBusinessSchema } from "@/components/shared/SchemaMarkup";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { useConversionTracking } from "@/hooks/useConversionTracking";

const ElectricalNottingham = () => {
  const { trackDownload, trackProposalRequest } = useConversionTracking();

  const faqs = [
    {
      question: "How much notice is needed to attend?",
      answer: "We can typically schedule initial compliance surveys within 48 hours. For urgent C1 dangerous defects, we mobilize immediate emergency response teams to eliminate risk."
    },
    {
      question: "Do you notify repeat testing dates?",
      answer: "Yes - our digital governance platform automatically sends renewal reminders 90 days before certification expires, ensuring continuous compliance without manual tracking."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Commercial Electrical Compliance Nottingham | PBSA & Retail EICR Testing</title>
        <meta name="description" content="BS 7671 testing, fault remediation & documentation for Nottingham's PBSA, retail & leisure estates. Zero-tolerance compliance for student accommodation." />
        <link rel="canonical" href="https://entirefm.com/electrical/nottingham" />
      </Helmet>

      <SchemaMarkup schema={{ "@context": "https://schema.org", "@type": "Service", "name": "Electrical Compliance - Nottingham", "provider": { "@type": "Organization", "name": "EntireFM" }, "areaServed": "Nottingham, UK" }} />
      <BreadcrumbSchema items={[{ label: "Electrical Services", href: "/services/electrical" }, { label: "Nottingham" }]} />
      <LocalBusinessSchema name="EntireFM Nottingham - Electrical" address={{ street: "Nottingham Office", city: "Nottingham", postalCode: "NG1 1AA", country: "UK" }} />

      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-background/90 z-10" />
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1621905252472-178d8ac26c65?q=80&w=2070&auto=format&fit=crop')` }} aria-label="Student accommodation electrical safety inspection in Nottingham PBSA development" />
        
        <div className="relative z-20 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-light text-white mb-6">Commercial Electrical Compliance – Nottingham</h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto font-light">BS 7671 testing, fault remediation & documentation for Nottingham's PBSA, retail & leisure estates.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" onClick={() => trackProposalRequest('electrical-nottingham')}>Request Audit</Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" onClick={() => trackDownload('bs7671-checklist')}><Download className="mr-2 h-5 w-5" />BS 7671 Checklist</Button>
          </div>
        </div>
      </section>

      <Breadcrumb items={[{ label: "Electrical Services", href: "/services/electrical" }, { label: "Nottingham" }]} />

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-16">
            <section>
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">Student Estates = High Risk Exposure</h2>
              <p className="text-lg text-muted-foreground mb-4">Large PBSA presence demands airtight compliance due to occupant vulnerability.</p>
              <p className="text-lg text-muted-foreground mb-4">Worst-case outcomes:</p>
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
                <div className="bg-muted/30 p-6 rounded-lg">
                  <h3 className="font-medium mb-3">Full EICR</h3>
                  <p className="text-sm text-muted-foreground">Comprehensive electrical installation condition reporting to BS 7671 standards.</p>
                </div>
                <div className="bg-muted/30 p-6 rounded-lg">
                  <h3 className="font-medium mb-3">Consumer board safety checks</h3>
                  <p className="text-sm text-muted-foreground">Individual unit distribution board inspection and certification.</p>
                </div>
                <div className="bg-muted/30 p-6 rounded-lg">
                  <h3 className="font-medium mb-3">Earthing & bonding verification</h3>
                  <p className="text-sm text-muted-foreground">Safety earthing system validation across installations.</p>
                </div>
                <div className="bg-muted/30 p-6 rounded-lg">
                  <h3 className="font-medium mb-3">Thermal detection of overheating components</h3>
                  <p className="text-sm text-muted-foreground">Advanced thermal imaging to prevent electrical fires.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">Fast Remedials</h2>
              <div className="bg-muted/50 border-l-4 border-primary p-6 rounded-r-lg">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-medium mb-1">Urgent issues → resolved instantly</h3>
                      <p className="text-sm text-muted-foreground">C1 and C2 defects are prioritized and resolved immediately</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-medium mb-1">Budgeted recommendations → transparent & scheduled</h3>
                      <p className="text-sm text-muted-foreground">C3 improvements planned with clear costs and timelines</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">Compliance Governance</h2>
              <p className="text-lg text-muted-foreground mb-4">Digital records to satisfy insurers, regulators and owners:</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium mb-1">EICR certificates</h3>
                    <p className="text-sm text-muted-foreground">Digitally stored and instantly accessible</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium mb-1">Remedial documentation</h3>
                    <p className="text-sm text-muted-foreground">Complete audit trail of all corrective works</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium mb-1">Compliance dashboard</h3>
                    <p className="text-sm text-muted-foreground">Real-time portfolio compliance status</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium mb-1">Renewal alerts</h3>
                    <p className="text-sm text-muted-foreground">Automated compliance reminders</p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">Sectors</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card border p-6 rounded-lg">
                  <h3 className="text-xl font-medium mb-2">PBSA</h3>
                  <p className="text-muted-foreground">Student accommodation electrical safety compliance</p>
                </div>
                <div className="bg-card border p-6 rounded-lg">
                  <h3 className="text-xl font-medium mb-2">Leisure venues</h3>
                  <p className="text-muted-foreground">High-footfall entertainment facilities</p>
                </div>
                <div className="bg-card border p-6 rounded-lg">
                  <h3 className="text-xl font-medium mb-2">Heritage retail</h3>
                  <p className="text-muted-foreground">Conservation-sensitive electrical compliance</p>
                </div>
                <div className="bg-card border p-6 rounded-lg">
                  <h3 className="text-xl font-medium mb-2">Corporate</h3>
                  <p className="text-muted-foreground">Office and business park electrical safety</p>
                </div>
              </div>
            </section>

            <section className="bg-muted/20 p-8 rounded-lg">
              <h2 className="text-3xl font-light mb-4">Case Study</h2>
              <p className="text-muted-foreground italic">PBSA operator moved from high-risk to compliant status in days.</p>
            </section>

            <section className="bg-muted/30 p-8 rounded-lg">
              <h2 className="text-3xl font-light mb-6">Coverage</h2>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                {['City Centre', 'West Bridgford', 'Colwick', 'Beeston'].map(area => (
                  <div key={area} className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary" /><span>{area}</span></div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-background rounded-lg">
                <p className="text-sm text-muted-foreground mb-2">📩 <a href="mailto:nottingham@entirefm.com" className="text-primary hover:underline">nottingham@entirefm.com</a></p>
              </div>
            </section>

            <FAQSection faqs={faqs} />

            <section className="bg-gradient-to-br from-primary/10 to-primary/5 p-12 rounded-lg text-center">
              <h2 className="text-3xl md:text-4xl font-light mb-6">Request Survey</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">Eliminate compliance doubt for your PBSA and commercial estates.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="default" onClick={() => trackProposalRequest('electrical-nottingham-footer')}>Request Survey</Button>
              </div>
              <p className="text-sm text-muted-foreground mt-4">📩 nottingham@entirefm.com</p>
            </section>
          </div>
          <div className="lg:col-span-1"><div className="sticky top-4"><SidebarCTA /></div></div>
        </div>
      </div>
    </>
  );
};

export default ElectricalNottingham;
