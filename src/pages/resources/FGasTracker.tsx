import { useState } from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { useConversionTracking } from "@/hooks/useConversionTracking";
import { toast } from "@/hooks/use-toast";
import { FileText, Download, CheckCircle2, Wind, ArrowRight, Shield, Clock } from "lucide-react";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { SchemaMarkup } from "@/components/shared/SchemaMarkup";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { Link } from "react-router-dom";

const downloadSchema = z.object({
  name: z.string().min(2, "Name required").max(100),
  email: z.string().email("Valid email required"),
  companyName: z.string().min(2, "Company name required").max(100),
  role: z.string().optional(),
});

type DownloadFormData = z.infer<typeof downloadSchema>;

const FGasTracker = () => {
  const [downloadReady, setDownloadReady] = useState(false);
  const { trackDownload } = useConversionTracking();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DownloadFormData>({
    resolver: zodResolver(downloadSchema),
  });

  const onSubmit = (data: DownloadFormData) => {
    setDownloadReady(true);
    trackDownload("F-Gas Leak Compliance Tracker");
    
    toast({
      title: "Download Ready",
      description: "Your F-Gas Compliance Tracker is ready to download.",
    });

    console.log("F-Gas Tracker download:", data);
  };

  const handleDownload = () => {
    toast({
      title: "Download Started",
      description: "Your tracker will begin downloading shortly.",
    });
  };

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Resources", href: "/resources" },
    { label: "F-Gas Compliance Tracker" },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "DownloadAction",
    name: "F-Gas Leak Detection Compliance Tracker",
    description: "Spreadsheet tool for tracking F-Gas refrigerant leak detection inspections and compliance with EU 517/2014 regulations.",
  };

  const features = [
    { icon: Shield, text: "EU Regulation 517/2014 and UK F-Gas requirements" },
    { icon: Clock, text: "Leak detection frequency calculator by refrigerant charge size" },
    { icon: FileText, text: "Pre-populated inspection schedule templates" },
    { icon: CheckCircle2, text: "Multi-site asset register and certificate tracker" },
    { icon: Wind, text: "Automatic compliance alerts and renewal reminders" },
    { icon: Shield, text: "F-Gas engineer certification logging" },
  ];

  return (
    <>
      <Helmet>
        <title>F-Gas Compliance Tracker | Free Download | EntireFM</title>
        <meta
          name="description"
          content="Download our F-Gas Leak Detection Compliance Tracker. Excel tool for managing refrigerant leak inspections and EU 517/2014 compliance."
        />
        <link rel="canonical" href="https://entirefm.co.uk/resources/fgas-tracker" />
      </Helmet>

      <SchemaMarkup schema={schema} />

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 bg-gradient-to-br from-primary/5 via-background to-muted/30 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />
          <div className="container mx-auto px-6 relative">
            <Breadcrumb items={breadcrumbItems} />

            <div className="max-w-6xl mx-auto mt-8">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <AnimatedSection animation="fade-up">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-4 bg-primary/10 rounded-2xl">
                      <Wind className="w-10 h-10 text-primary" />
                    </div>
                    <span className="text-sm font-medium text-primary bg-primary/10 px-4 py-2 rounded-full">
                      Free Resource
                    </span>
                  </div>
                  <h1 className="text-4xl md:text-5xl font-light mb-4 leading-tight">
                    F-Gas Leak Detection
                    <span className="block text-primary">Compliance Tracker</span>
                  </h1>
                  <p className="text-lg text-muted-foreground font-light leading-relaxed mb-8">
                    Spreadsheet tool for tracking refrigerant leak detection inspections and maintaining F-Gas compliance.
                  </p>

                  <Card className="p-6 mb-6 bg-background/80 backdrop-blur">
                    <h2 className="text-xl font-light mb-4">What's Inside</h2>
                    <ul className="space-y-3">
                      {features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <feature.icon className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                          <span className="text-sm font-light">{feature.text}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>

                  <Card className="p-6 bg-muted">
                    <div className="flex items-start gap-3">
                      <FileText className="w-6 h-6 text-primary shrink-0" />
                      <div>
                        <div className="font-medium mb-1">Excel spreadsheet + PDF guide</div>
                        <div className="text-sm text-muted-foreground">
                          Instant access • Editable tracker • EU 517/2014 compliant
                        </div>
                      </div>
                    </div>
                  </Card>
                </AnimatedSection>

                <AnimatedSection animation="fade-up" delay={150}>
                  {!downloadReady ? (
                    <Card className="p-8 shadow-xl border-primary/10">
                      <h2 className="text-2xl font-light mb-2">Download Your Free Tracker</h2>
                      <p className="text-sm text-muted-foreground mb-6">
                        Enter your details to receive instant access to the F-Gas Compliance Tracker.
                      </p>

                      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <div>
                          <Label htmlFor="name">Your Name *</Label>
                          <Input
                            id="name"
                            placeholder="John Smith"
                            className="mt-1"
                            {...register("name")}
                          />
                          {errors.name && (
                            <p className="text-sm text-destructive mt-1">{errors.name.message}</p>
                          )}
                        </div>

                        <div>
                          <Label htmlFor="email">Work Email *</Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="john@company.com"
                            className="mt-1"
                            {...register("email")}
                          />
                          {errors.email && (
                            <p className="text-sm text-destructive mt-1">{errors.email.message}</p>
                          )}
                        </div>

                        <div>
                          <Label htmlFor="companyName">Company Name *</Label>
                          <Input
                            id="companyName"
                            placeholder="Your Company Ltd"
                            className="mt-1"
                            {...register("companyName")}
                          />
                          {errors.companyName && (
                            <p className="text-sm text-destructive mt-1">{errors.companyName.message}</p>
                          )}
                        </div>

                        <div>
                          <Label htmlFor="role">Your Role (Optional)</Label>
                          <Input
                            id="role"
                            placeholder="Facilities Manager"
                            className="mt-1"
                            {...register("role")}
                          />
                        </div>

                        <Button type="submit" className="w-full shadow-lg" size="lg">
                          <Download className="w-4 h-4 mr-2" />
                          Get Free Tracker
                        </Button>

                        <p className="text-xs text-muted-foreground text-center">
                          We'll also send you occasional FM insights. Unsubscribe anytime.
                        </p>
                      </form>
                    </Card>
                  ) : (
                    <Card className="p-8 shadow-xl">
                      <div className="text-center mb-6">
                        <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-4">
                          <CheckCircle2 className="w-10 h-10 text-green-600" />
                        </div>
                        <h2 className="text-2xl font-light mb-2">Your Tracker is Ready!</h2>
                        <p className="text-muted-foreground">
                          We've also sent a copy to your email.
                        </p>
                      </div>

                      <Button onClick={handleDownload} className="w-full mb-4 shadow-lg" size="lg">
                        <Download className="w-4 h-4 mr-2" />
                        Download F-Gas Compliance Tracker
                      </Button>

                      <div className="border-t pt-4">
                        <p className="text-sm text-muted-foreground mb-3">
                          Need F-Gas certified refrigerant services?
                        </p>
                        <Button asChild variant="outline" className="w-full">
                          <Link to="/services/hvac">
                            View HVAC Services <ArrowRight className="w-4 h-4 ml-2" />
                          </Link>
                        </Button>
                      </div>
                    </Card>
                  )}

                  <Card className="p-6 mt-6">
                    <h3 className="font-medium mb-3">Why EntireFM?</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                        F-Gas certified refrigeration engineers
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                        Leak detection inspections to EU 517/2014
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                        Emergency refrigerant leak response
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                        Digital F-Gas logbook management
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                        Automatic compliance renewal reminders
                      </li>
                    </ul>
                  </Card>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>

        {/* Related Resources */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-6">
            <AnimatedSection animation="fade-up" className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-light mb-8 text-center">Related Resources</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <Link to="/fm-insights/what-is-fgas-compliance" className="group">
                  <Card className="p-6 h-full hover:border-primary/30 transition-all">
                    <h3 className="font-medium mb-2 group-hover:text-primary transition-colors">What is F-Gas Compliance?</h3>
                    <p className="text-sm text-muted-foreground mb-4">Complete guide</p>
                    <span className="text-sm text-primary flex items-center gap-2">
                      Read More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Card>
                </Link>
                <Link to="/services/hvac" className="group">
                  <Card className="p-6 h-full hover:border-primary/30 transition-all">
                    <h3 className="font-medium mb-2 group-hover:text-primary transition-colors">HVAC Services</h3>
                    <p className="text-sm text-muted-foreground mb-4">Refrigerant management</p>
                    <span className="text-sm text-primary flex items-center gap-2">
                      View Services <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Card>
                </Link>
                <Link to="/contact" className="group">
                  <Card className="p-6 h-full hover:border-primary/30 transition-all">
                    <h3 className="font-medium mb-2 group-hover:text-primary transition-colors">Get a Quote</h3>
                    <p className="text-sm text-muted-foreground mb-4">F-Gas certified services</p>
                    <span className="text-sm text-primary flex items-center gap-2">
                      Contact Us <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Card>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </div>
    </>
  );
};

export default FGasTracker;
