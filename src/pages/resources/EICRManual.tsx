import { useState } from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { useConversionTracking } from "@/hooks/useConversionTracking";
import { toast } from "@/hooks/use-toast";
import { FileText, Download, CheckCircle2, Zap, ArrowRight, Shield, Clock } from "lucide-react";
import { SchemaMarkup } from "@/components/shared/SchemaMarkup";
import ServiceHeroSection from "@/components/shared/ServiceHeroSection";
import { TrustBar } from "@/components/shared/TrustBar";
import ContentSection from "@/components/shared/ContentSection";
import CTASection from "@/components/shared/CTASection";
import { Link } from "react-router-dom";

const downloadSchema = z.object({
  name: z.string().min(2, "Name required").max(100),
  email: z.string().email("Valid email required"),
  companyName: z.string().min(2, "Company name required").max(100),
  role: z.string().optional(),
});

type DownloadFormData = z.infer<typeof downloadSchema>;

const features = [
  { icon: Shield, text: "EICR requirements and legal obligations for landlords" },
  { icon: CheckCircle2, text: "Understanding C1, C2, C3 codes and required actions" },
  { icon: FileText, text: "BS 7671:2018+A2:2022 18th Edition compliance checklist" },
  { icon: Clock, text: "5-year testing cycles and certificate management" },
  { icon: Zap, text: "Common EICR failures and remedial action priorities" },
  { icon: Shield, text: "Contractor selection and NICEIC/NAPIT accreditation" },
];

const whyEntireItems = [
  { icon: Shield, title: "NICEIC Approved", description: "Fully accredited electrical contractors" },
  { icon: Zap, title: "BS 7671 Certified", description: "18th Edition qualified engineers" },
  { icon: Clock, title: "Same-Day Response", description: "Emergency electrical response available" },
  { icon: CheckCircle2, title: "Remedial Works", description: "Completed within certification" },
  { icon: FileText, title: "Digital Portal", description: "Digital certificate management" },
];

const EICRManual = () => {
  const [downloadReady, setDownloadReady] = useState(false);
  const { trackDownload } = useConversionTracking();

  const { register, handleSubmit, formState: { errors } } = useForm<DownloadFormData>({
    resolver: zodResolver(downloadSchema),
  });

  const onSubmit = (data: DownloadFormData) => {
    setDownloadReady(true);
    trackDownload("Electrical EICR Survival Manual");
    toast({ title: "Download Ready", description: "Your EICR Survival Manual is ready to download." });
    console.log("EICR Manual download:", data);
  };

  const handleDownload = async () => {
    const { downloadEICRManualComprehensive } = await import("@/utils/generateEICRManualPDF");
    await downloadEICRManualComprehensive();
  };

  const scrollToForm = () => {
    document.getElementById("download-form")?.scrollIntoView({ behavior: "smooth" });
  };

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Resources", href: "/resources" },
    { label: "EICR Survival Manual" },
  ];

  const heroStats = [
    { value: "32", label: "Pages", suffix: "pg" },
    { value: "2025", label: "Updated" },
    { value: "Free", label: "Download" },
    { value: "BS 7671", label: "Compliant" },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "DownloadAction",
    name: "Electrical EICR Survival Manual",
    description: "Essential guide to Electrical Installation Condition Reports (EICR) and BS 7671 compliance for commercial properties.",
  };

  return (
    <>
      <Helmet>
        <title>EICR Survival Manual | Free Download | EntireFM</title>
        <meta name="description" content="Download our Electrical EICR Survival Manual. Essential guide for property managers to understand EICR requirements and electrical compliance." />
        <link rel="canonical" href="https://entirefm.co.uk/resources/eicr-manual" />
      </Helmet>
      <SchemaMarkup schema={schema} />

      <ServiceHeroSection
        breadcrumbItems={breadcrumbItems}
        title="Electrical EICR Survival Manual"
        description="Everything property managers need to know about Electrical Installation Condition Reports and BS 7671 compliance — completely free."
        stats={heroStats}
        primaryCTA={{ label: "Electrical Services", icon: Zap, href: "/services/electrical-compliance" }}
        secondaryCTA={{ label: "Get Free Manual", icon: Download, onClick: scrollToForm }}
      />

      <TrustBar variant="compact" />

      <ContentSection title="What's Inside" subtitle="A complete guide to understanding, managing, and maintaining EICR compliance across your property portfolio." centered>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((item, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-30px" }} transition={{ delay: idx * 0.1, duration: 0.5 }}>
              <Card className="p-6 h-full hover-lift border-border/50 hover:border-primary/50 transition-all">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm font-light text-muted-foreground leading-relaxed">{item.text}</span>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
        <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.6 }} className="flex items-center justify-center gap-3 mt-10">
          <Card className="inline-flex items-center gap-3 px-6 py-4 bg-muted/50">
            <FileText className="w-5 h-5 text-primary shrink-0" />
            <div>
              <span className="font-medium text-sm">32-page PDF manual</span>
              <span className="text-xs text-muted-foreground ml-2">Instant access · No payment required · BS 7671 compliant</span>
            </div>
          </Card>
        </motion.div>
      </ContentSection>

      <ContentSection variant="muted" id="download-form">
        <div className="max-w-xl mx-auto">
          {!downloadReady ? (
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <Card className="p-8 border-primary/20 shadow-lg">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-full mb-4">
                    <Download className="w-7 h-7 text-primary" />
                  </div>
                  <h2 className="text-2xl font-light mb-2">Download Your Free Manual</h2>
                  <p className="text-sm text-muted-foreground">Enter your details to receive instant access to the EICR Survival Manual.</p>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <motion.div initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                    <Label htmlFor="name">Your Name *</Label>
                    <Input id="name" placeholder="John Smith" {...register("name")} />
                    {errors.name && <p className="text-sm text-destructive mt-1">{errors.name.message}</p>}
                  </motion.div>
                  <motion.div initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                    <Label htmlFor="email">Work Email *</Label>
                    <Input id="email" type="email" placeholder="john@company.com" {...register("email")} />
                    {errors.email && <p className="text-sm text-destructive mt-1">{errors.email.message}</p>}
                  </motion.div>
                  <motion.div initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
                    <Label htmlFor="companyName">Company Name *</Label>
                    <Input id="companyName" placeholder="Your Company Ltd" {...register("companyName")} />
                    {errors.companyName && <p className="text-sm text-destructive mt-1">{errors.companyName.message}</p>}
                  </motion.div>
                  <motion.div initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
                    <Label htmlFor="role">Your Role (Optional)</Label>
                    <Input id="role" placeholder="Facilities Manager" {...register("role")} />
                  </motion.div>
                  <Button type="submit" className="w-full hover-lift" size="lg">
                    <Download className="w-4 h-4 mr-2" />
                    Get Free Manual
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">We'll also send you occasional FM insights. Unsubscribe anytime.</p>
                </form>
              </Card>
            </motion.div>
          ) : (
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
              <Card className="p-8 border-primary/20 shadow-lg">
                <div className="text-center mb-8">
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 200, delay: 0.2 }} className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                    <CheckCircle2 className="w-8 h-8 text-green-600" />
                  </motion.div>
                  <h2 className="text-2xl font-light mb-2">Your Manual is Ready!</h2>
                  <p className="text-muted-foreground">We've also sent a copy to your email.</p>
                </div>
                <Button onClick={handleDownload} className="w-full mb-4 hover-lift" size="lg">
                  <Download className="w-4 h-4 mr-2" />
                  Download EICR Survival Manual
                </Button>
                <div className="border-t pt-4">
                  <p className="text-sm text-muted-foreground mb-3">Need EICR testing or remedial works?</p>
                  <Button asChild variant="outline" className="w-full hover-lift">
                    <Link to="/services/electrical-compliance">View Electrical Services <ArrowRight className="w-4 h-4 ml-2" /></Link>
                  </Button>
                </div>
              </Card>
            </motion.div>
          )}
        </div>
      </ContentSection>

      <ContentSection title="Why EntireFM?" subtitle="Trusted electrical compliance expertise backed by industry accreditations." centered variant="gradient">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
          {whyEntireItems.map((item, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: "-30px" }} transition={{ delay: idx * 0.1, duration: 0.4 }}>
              <Card className="p-5 text-center h-full hover-lift border-border/50 hover:border-primary/50 transition-all">
                <div className="inline-flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg mb-3">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-sm font-medium mb-1">{item.title}</h3>
                <p className="text-xs text-muted-foreground font-light">{item.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </ContentSection>

      <CTASection
        title="Need Professional EICR Testing?"
        description="Our NICEIC-approved engineers deliver comprehensive EICR testing, remedial works, and ongoing compliance management."
        primaryLabel="Request Proposal"
        primaryHref="/request-proposal"
        secondaryLabel="View Electrical Services"
        secondaryHref="/services/electrical-compliance"
        variant="dark"
      />
    </>
  );
};

export default EICRManual;
