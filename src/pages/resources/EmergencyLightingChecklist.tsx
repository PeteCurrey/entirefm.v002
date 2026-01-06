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
import { FileText, Download, CheckCircle2, Lightbulb, ArrowRight, Clock, Shield } from "lucide-react";
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

const EmergencyLightingChecklist = () => {
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
    trackDownload("3-Hour Emergency Lighting Test Checklist");
    
    toast({
      title: "Download Ready",
      description: "Your Emergency Lighting Test Checklist is ready to download.",
    });

    console.log("Emergency Lighting Checklist download:", data);
  };

  const handleDownload = () => {
    toast({
      title: "Download Started",
      description: "Your checklist will begin downloading shortly.",
    });
  };

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Resources", href: "/resources" },
    { label: "Emergency Lighting Checklist" },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "DownloadAction",
    name: "3-Hour Emergency Lighting Test Checklist",
    description: "Comprehensive checklist for conducting annual 3-hour emergency lighting tests to BS 5266 standards.",
  };

  const features = [
    { icon: Shield, text: "BS 5266-1:2016 compliance requirements and testing frequencies" },
    { icon: CheckCircle2, text: "Pre-test preparation and building notification procedures" },
    { icon: Clock, text: "Step-by-step 3-hour duration test methodology" },
    { icon: Lightbulb, text: "Luminaire inspection and performance verification" },
    { icon: FileText, text: "Record-keeping templates and logbook requirements" },
    { icon: Shield, text: "Common failures and remedial action guidance" },
  ];

  return (
    <>
      <Helmet>
        <title>Emergency Lighting Test Checklist | Free Download | EntireFM</title>
        <meta
          name="description"
          content="Download our 3-Hour Emergency Lighting Test Checklist. BS 5266 compliant guide for annual testing and record-keeping."
        />
        <link rel="canonical" href="https://entirefm.co.uk/resources/emergency-lighting-checklist" />
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
                      <Lightbulb className="w-10 h-10 text-primary" />
                    </div>
                    <span className="text-sm font-medium text-primary bg-primary/10 px-4 py-2 rounded-full">
                      Free Resource
                    </span>
                  </div>
                  <h1 className="text-4xl md:text-5xl font-light mb-4 leading-tight">
                    3-Hour Emergency Lighting
                    <span className="block text-primary">Test Checklist</span>
                  </h1>
                  <p className="text-lg text-muted-foreground font-light leading-relaxed mb-8">
                    Complete checklist for conducting annual 3-hour emergency lighting tests to BS 5266 standards.
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
                        <div className="font-medium mb-1">12-page checklist PDF</div>
                        <div className="text-sm text-muted-foreground">
                          Instant access • Printable format • BS 5266 compliant
                        </div>
                      </div>
                    </div>
                  </Card>
                </AnimatedSection>

                <AnimatedSection animation="fade-up" delay={150}>
                  {!downloadReady ? (
                    <Card className="p-8 shadow-xl border-primary/10">
                      <h2 className="text-2xl font-light mb-2">Download Your Free Checklist</h2>
                      <p className="text-sm text-muted-foreground mb-6">
                        Enter your details to receive instant access to the Emergency Lighting Test Checklist.
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
                          Get Free Checklist
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
                        <h2 className="text-2xl font-light mb-2">Your Checklist is Ready!</h2>
                        <p className="text-muted-foreground">
                          We've also sent a copy to your email.
                        </p>
                      </div>

                      <Button onClick={handleDownload} className="w-full mb-4 shadow-lg" size="lg">
                        <Download className="w-4 h-4 mr-2" />
                        Download Emergency Lighting Checklist
                      </Button>

                      <div className="border-t pt-4">
                        <p className="text-sm text-muted-foreground mb-3">
                          Need professional emergency lighting testing?
                        </p>
                        <Button asChild variant="outline" className="w-full">
                          <Link to="/services/emergency-lighting">
                            View Emergency Lighting Services <ArrowRight className="w-4 h-4 ml-2" />
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
                        BS 5266-1:2016 certified testing
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                        Out-of-hours testing to minimize disruption
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                        Digital logbook and certificate management
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                        Immediate remedial works capability
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                        Annual test reminders and scheduling
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
                <Link to="/fm-insights/how-often-should-emergency-lighting-be-tested" className="group">
                  <Card className="p-6 h-full hover:border-primary/30 transition-all">
                    <h3 className="font-medium mb-2 group-hover:text-primary transition-colors">Testing Frequency Guide</h3>
                    <p className="text-sm text-muted-foreground mb-4">How often to test</p>
                    <span className="text-sm text-primary flex items-center gap-2">
                      Read More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Card>
                </Link>
                <Link to="/services/emergency-lighting" className="group">
                  <Card className="p-6 h-full hover:border-primary/30 transition-all">
                    <h3 className="font-medium mb-2 group-hover:text-primary transition-colors">Testing Services</h3>
                    <p className="text-sm text-muted-foreground mb-4">Professional testing</p>
                    <span className="text-sm text-primary flex items-center gap-2">
                      View Services <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Card>
                </Link>
                <Link to="/contact" className="group">
                  <Card className="p-6 h-full hover:border-primary/30 transition-all">
                    <h3 className="font-medium mb-2 group-hover:text-primary transition-colors">Get a Quote</h3>
                    <p className="text-sm text-muted-foreground mb-4">Testing for your building</p>
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

export default EmergencyLightingChecklist;
