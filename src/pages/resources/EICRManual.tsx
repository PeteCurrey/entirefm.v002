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
import { FileText, Download, CheckCircle2, Zap } from "lucide-react";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { SchemaMarkup } from "@/components/shared/SchemaMarkup";

const downloadSchema = z.object({
  name: z.string().min(2, "Name required").max(100),
  email: z.string().email("Valid email required"),
  companyName: z.string().min(2, "Company name required").max(100),
  role: z.string().optional(),
});

type DownloadFormData = z.infer<typeof downloadSchema>;

const EICRManual = () => {
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
    trackDownload("Electrical EICR Survival Manual");
    
    toast({
      title: "Download Ready",
      description: "Your EICR Survival Manual is ready to download.",
    });

    console.log("EICR Manual download:", data);
  };

  const handleDownload = () => {
    toast({
      title: "Download Started",
      description: "Your manual will begin downloading shortly.",
    });
  };

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Resources", href: "/resources" },
    { label: "EICR Survival Manual" },
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
        <meta
          name="description"
          content="Download our Electrical EICR Survival Manual. Essential guide for property managers to understand EICR requirements and electrical compliance."
        />
        <link rel="canonical" href="https://entirefm.co.uk/resources/eicr-manual" />
      </Helmet>

      <SchemaMarkup schema={schema} />

      <div className="bg-background">
        <div className="container mx-auto px-4 py-8">
          <Breadcrumb items={breadcrumbItems} />

          <div className="max-w-5xl mx-auto mt-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Zap className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Free Resource</div>
                      <h1 className="text-3xl font-light">Electrical EICR Survival Manual</h1>
                    </div>
                  </div>
                  <p className="text-lg text-muted-foreground font-light">
                    Everything property managers need to know about Electrical Installation Condition Reports and BS 7671 compliance.
                  </p>
                </div>

                <Card className="p-6 mb-6">
                  <h2 className="text-xl font-light mb-4">What's Inside</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">EICR requirements and legal obligations for landlords</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">Understanding C1, C2, C3 codes and required actions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">BS 7671:2018+A2:2022 18th Edition compliance checklist</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">5-year testing cycles and certificate management</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">Common EICR failures and remedial action priorities</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">Contractor selection and NICEIC/NAPIT accreditation</span>
                    </li>
                  </ul>
                </Card>

                <Card className="p-6 bg-muted">
                  <div className="flex items-start gap-3">
                    <FileText className="w-6 h-6 text-primary shrink-0" />
                    <div>
                      <div className="font-medium mb-1">32-page PDF manual</div>
                      <div className="text-sm text-muted-foreground">
                        Instant access • No payment required • BS 7671 compliant
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              <div>
                {!downloadReady ? (
                  <Card className="p-6">
                    <h2 className="text-2xl font-light mb-2">Download Your Free Manual</h2>
                    <p className="text-sm text-muted-foreground mb-6">
                      Enter your details to receive instant access to the EICR Survival Manual.
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
                        Get Free Manual
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
                      <h2 className="text-2xl font-light mb-2">Your Manual is Ready!</h2>
                      <p className="text-muted-foreground">
                        We've also sent a copy to your email.
                      </p>
                    </div>

                    <Button onClick={handleDownload} className="w-full mb-4" size="lg">
                      <Download className="w-4 h-4 mr-2" />
                      Download EICR Survival Manual
                    </Button>

                    <div className="border-t pt-4">
                      <p className="text-sm text-muted-foreground mb-3">
                        Need EICR testing or remedial works?
                      </p>
                      <Button asChild variant="outline" className="w-full">
                        <a href="/services/electrical-compliance">View Electrical Services</a>
                      </Button>
                    </div>
                  </Card>
                )}

                <Card className="p-6 mt-6">
                  <h3 className="font-medium mb-3">Why EntireFM?</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>✓ NICEIC approved contractors</li>
                    <li>✓ BS 7671:2018+A2:2022 certified engineers</li>
                    <li>✓ Same-day emergency electrical response</li>
                    <li>✓ Remedial works completed within certification</li>
                    <li>✓ Digital certificate management portal</li>
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

export default EICRManual;
