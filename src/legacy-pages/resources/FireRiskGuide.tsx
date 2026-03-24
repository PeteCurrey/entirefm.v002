"use client";

import { useState } from "react";
;
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { useConversionTracking } from "@/hooks/useConversionTracking";
import { toast } from "@/hooks/use-toast";
import { FileText, Download, CheckCircle2, Flame } from "lucide-react";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { SchemaMarkup } from "@/components/shared/SchemaMarkup";

const downloadSchema = z.object({
  name: z.string().min(2, "Name required").max(100),
  email: z.string().email("Valid email required"),
  companyName: z.string().min(2, "Company name required").max(100),
  role: z.string().optional(),
});

type DownloadFormData = z.infer<typeof downloadSchema>;

const FireRiskGuide = () => {
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
    trackDownload("Fire Risk Assessment Guide");
    
    toast({
      title: "Download Ready",
      description: "Your Fire Risk Assessment Guide is ready to download.",
    });

    console.log("Fire Risk Guide download:", data);
    // In production: Send email with PDF and add to CRM
  };

  const handleDownload = () => {
    toast({
      title: "Download Started",
      description: "Your guide will begin downloading shortly.",
    });
    // In production: Trigger actual PDF download
  };

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Resources", href: "/resources" },
    { label: "Fire Risk Assessment Guide" },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "DownloadAction",
    name: "Fire Risk Assessment Guide",
    description: "Comprehensive guide to conducting and maintaining fire risk assessments for UK commercial properties.",
  };

  return (
    <>
      

      <SchemaMarkup schema={schema} />

      <div className="bg-background">
        <div className="container mx-auto px-4 py-8">
          <Breadcrumb items={breadcrumbItems} />

          <div className="max-w-5xl mx-auto mt-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Guide Preview */}
              <div>
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Flame className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Free Resource</div>
                      <h1 className="text-3xl font-light">Fire Risk Assessment Guide</h1>
                    </div>
                  </div>
                  <p className="text-lg text-muted-foreground font-light">
                    Comprehensive guide to conducting and maintaining fire risk assessments for UK commercial properties.
                  </p>
                </div>

                <Card className="p-6 mb-6">
                  <h2 className="text-xl font-light mb-4">What's Inside</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">Fire Risk Assessment (FRA) methodology and legal requirements</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">Post-Grenfell compliance updates and building regulation changes</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">Step-by-step assessment checklist for commercial properties</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">Fire alarm, emergency lighting, and evacuation procedures</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">Record-keeping templates and documentation requirements</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">Common FRA failures and how to avoid enforcement notices</span>
                    </li>
                  </ul>
                </Card>

                <Card className="p-6 bg-muted">
                  <div className="flex items-start gap-3">
                    <FileText className="w-6 h-6 text-primary shrink-0" />
                    <div>
                      <div className="font-medium mb-1">28-page PDF guide</div>
                      <div className="text-sm text-muted-foreground">
                        Instant access • No payment required • Updated for 2025
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Download Form */}
              <div>
                {!downloadReady ? (
                  <Card className="p-6">
                    <h2 className="text-2xl font-light mb-2">Download Your Free Guide</h2>
                    <p className="text-sm text-muted-foreground mb-6">
                      Enter your details to receive instant access to the Fire Risk Assessment Guide.
                    </p>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                      <div>
                        <Label htmlFor="name">Your Name *</Label>
                        <Input
                          id="name"
                          placeholder="John Smith"
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
                          {...register("role")}
                        />
                      </div>

                      <Button type="submit" className="w-full" size="lg">
                        <Download className="w-4 h-4 mr-2" />
                        Get Free Guide
                      </Button>

                      <p className="text-xs text-muted-foreground text-center">
                        We'll also send you occasional FM insights. Unsubscribe anytime.
                      </p>
                    </form>
                  </Card>
                ) : (
                  <Card className="p-6">
                    <div className="text-center mb-6">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                        <CheckCircle2 className="w-8 h-8 text-green-600" />
                      </div>
                      <h2 className="text-2xl font-light mb-2">Your Guide is Ready!</h2>
                      <p className="text-muted-foreground">
                        We've also sent a copy to your email.
                      </p>
                    </div>

                    <Button onClick={handleDownload} className="w-full mb-4" size="lg">
                      <Download className="w-4 h-4 mr-2" />
                      Download Fire Risk Assessment Guide
                    </Button>

                    <div className="border-t pt-4">
                      <p className="text-sm text-muted-foreground mb-3">
                        Need help implementing your fire safety program?
                      </p>
                      <Button asChild variant="outline" className="w-full">
                        <a href="/services/fire-safety">View Fire Safety Services</a>
                      </Button>
                    </div>
                  </Card>
                )}

                <Card className="p-6 mt-6">
                  <h3 className="font-medium mb-3">Why EntireFM?</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>✓ 15+ years fire safety compliance experience</li>
                    <li>✓ BAFE-accredited fire alarm engineers</li>
                    <li>✓ Emergency lighting testing to BS 5266</li>
                    <li>✓ FRA reviews and action plan management</li>
                    <li>✓ 24/7 emergency fire safety response</li>
                  </ul>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FireRiskGuide;
