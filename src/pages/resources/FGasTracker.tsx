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
import { FileText, Download, CheckCircle2, Wind, ArrowRight, Shield, Clock } from "lucide-react";
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
  { icon: Shield, text: "EU Regulation 517/2014 and UK F-Gas requirements" },
  { icon: Clock, text: "Leak detection frequency calculator by refrigerant charge size" },
  { icon: FileText, text: "Pre-populated inspection schedule templates" },
  { icon: CheckCircle2, text: "Multi-site asset register and certificate tracker" },
  { icon: Wind, text: "Automatic compliance alerts and renewal reminders" },
  { icon: Shield, text: "F-Gas engineer certification logging" },
];

const whyEntireItems = [
  { icon: Wind, title: "F-Gas Certified", description: "Certified refrigeration engineers" },
  { icon: Shield, title: "EU 517/2014", description: "Full regulatory compliance" },
  { icon: Clock, title: "Emergency Response", description: "Refrigerant leak response" },
  { icon: FileText, title: "Digital Logbook", description: "F-Gas logbook management" },
  { icon: CheckCircle2, title: "Auto Reminders", description: "Compliance renewal alerts" },
];

const FGasTracker = () => {
  const [downloadReady, setDownloadReady] = useState(false);
  const { trackDownload } = useConversionTracking();

  const { register, handleSubmit, formState: { errors } } = useForm<DownloadFormData>({
    resolver: zodResolver(downloadSchema),
  });

  const onSubmit = (data: DownloadFormData) => {
    setDownloadReady(true);
    trackDownload("F-Gas Leak Compliance Tracker");
    toast({ title: "Download Ready", description: "Your F-Gas Compliance Tracker is ready to download." });
    console.log("F-Gas Tracker download:", data);
  };

  const handleDownload = () => {
    toast({ title: "Download Started", description: "Your tracker will begin downloading shortly." });
  };

  const scrollToForm = () => {
    document.getElementById("download-form")?.scrollIntoView({ behavior: "smooth" });
  };

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Resources", href: "/resources" },
    { label: "F-Gas Compliance Tracker" },
  ];

  const heroStats = [
    { value: "Excel", label: "Format" },
    { value: "EU 517", label: "Compliant" },
    { value: "Free", label: "Download" },
    { value: "Multi", label: "Site Ready" },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "DownloadAction",
    name: "F-Gas Leak Detection Compliance Tracker",
    description: "Spreadsheet tool for tracking F-Gas refrigerant leak detection inspections and compliance with EU 517/2014 regulations.",
  };

  return (
    <>
      <Helmet>
        <title>F-Gas Compliance Tracker | Free Download | EntireFM</title>
        <meta name="description" content="Download our F-Gas Leak Detection Compliance Tracker. Excel tool for managing refrigerant leak inspections and EU 517/2014 compliance." />
        <link rel="canonical" href="https://entirefm.co.uk/resources/fgas-tracker" />
      </Helmet>
      <SchemaMarkup schema={schema} />

      <ServiceHeroSection
        breadcrumbItems={breadcrumbItems}
        title="F-Gas Leak Detection Compliance Tracker"
        description="Spreadsheet tool for tracking refrigerant leak detection inspections and maintaining F-Gas compliance across your estate — completely free."
        stats={heroStats}
        primaryCTA={{ label: "HVAC Services", icon: Wind, href: "/services/hvac" }}
        secondaryCTA={{ label: "Get Free Tracker", icon: Download, onClick: scrollToForm }}
      />

      <TrustBar variant="compact" />

      <ContentSection title="What's Inside" subtitle="A complete compliance tool for managing F-Gas leak detection inspections across multiple sites." centered>
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
              <span className="font-medium text-sm">Excel spreadsheet + PDF guide</span>
              <span className="text-xs text-muted-foreground ml-2">Instant access · Editable tracker · EU 517/2014 compliant</span>
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
                  <h2 className="text-2xl font-light mb-2">Download Your Free Tracker</h2>
                  <p className="text-sm text-muted-foreground">Enter your details to receive instant access to the F-Gas Compliance Tracker.</p>
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
                    Get Free Tracker
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
                  <h2 className="text-2xl font-light mb-2">Your Tracker is Ready!</h2>
                  <p className="text-muted-foreground">We've also sent a copy to your email.</p>
                </div>
                <Button onClick={handleDownload} className="w-full mb-4 hover-lift" size="lg">
                  <Download className="w-4 h-4 mr-2" />
                  Download F-Gas Compliance Tracker
                </Button>
                <div className="border-t pt-4">
                  <p className="text-sm text-muted-foreground mb-3">Need F-Gas certified refrigerant services?</p>
                  <Button asChild variant="outline" className="w-full hover-lift">
                    <Link to="/services/hvac">View HVAC Services <ArrowRight className="w-4 h-4 ml-2" /></Link>
                  </Button>
                </div>
              </Card>
            </motion.div>
          )}
        </div>
      </ContentSection>

      <ContentSection title="Why EntireFM?" subtitle="F-Gas certified engineers with digital compliance tracking across your entire estate." centered variant="gradient">
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
        title="Need F-Gas Certified Refrigerant Services?"
        description="Our certified engineers deliver leak detection, refrigerant management, and full F-Gas compliance across your portfolio."
        primaryLabel="Request Proposal"
        primaryHref="/request-proposal"
        secondaryLabel="View HVAC Services"
        secondaryHref="/services/hvac"
        variant="dark"
      />
    </>
  );
};

export default FGasTracker;
