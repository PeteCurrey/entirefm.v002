"use client";

;
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { Badge } from "@/components/ui/badge";
import { Award, CheckCircle2, Upload, Shield, TrendingUp, Clock, FileText } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
const ACCEPTED_FILE_TYPES = [
  "application/pdf",
  "image/jpeg",
  "image/jpg",
  "image/png",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

const formSchema = z.object({
  companyName: z.string().min(2, "Company name is required").max(200),
  registeredAddress: z.string().min(10, "Full address is required").max(500),
  yearsEstablished: z.coerce.number().min(0, "Invalid years").max(200),
  website: z.string().url("Invalid URL").optional().or(z.literal("")),
  contactName: z.string().min(2, "Contact name is required").max(100),
  email: z.string().email("Invalid email address").max(255),
  phone: z.string().min(10, "Valid phone number required").max(20),
  regions: z.array(z.string()).min(1, "Select at least one region"),
  serviceCategories: z.array(z.string()).min(1, "Select at least one service category"),
  hasSafetyPolicy: z.boolean(),
  hasNearMissReporting: z.boolean(),
  hasEngineerQualificationTracking: z.boolean(),
});

const Suppliers = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [insuranceFiles, setInsuranceFiles] = useState<File[]>([]);
  const [accreditationFiles, setAccreditationFiles] = useState<File[]>([]);
  const [ramsFile, setRamsFile] = useState<File | null>(null);

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Suppliers" },
  ];

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      companyName: "",
      registeredAddress: "",
      yearsEstablished: 0,
      website: "",
      contactName: "",
      email: "",
      phone: "",
      regions: [],
      serviceCategories: [],
      hasSafetyPolicy: false,
      hasNearMissReporting: false,
      hasEngineerQualificationTracking: false,
    },
  });

  const regions = ["London", "Midlands", "North West", "North East", "Yorkshire", "South West", "South East", "Nationwide"];
  
  const serviceCategories = [
    "Fire Safety Systems",
    "Electrical Compliance",
    "HVAC & F-Gas",
    "Water Hygiene",
    "Gas Safety",
    "PPM & Asset Maintenance",
    "Lifting & LOLER",
    "Height Safety & BMUs",
    "Drainage & Pumps",
    "Security & Automation",
    "Industrial Cleaning",
    "Other Specialist Services",
  ];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, type: 'insurance' | 'accreditation' | 'rams') => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    const fileArray = Array.from(files);
    
    // Validate files
    for (const file of fileArray) {
      if (file.size > MAX_FILE_SIZE) {
        toast({
          title: "File too large",
          description: `${file.name} exceeds 10MB limit`,
          variant: "destructive",
        });
        return;
      }
      if (!ACCEPTED_FILE_TYPES.includes(file.type)) {
        toast({
          title: "Invalid file type",
          description: `${file.name} must be PDF, JPG, PNG, or DOC/DOCX`,
          variant: "destructive",
        });
        return;
      }
    }

    if (type === 'insurance') {
      setInsuranceFiles(prev => [...prev, ...fileArray]);
    } else if (type === 'accreditation') {
      setAccreditationFiles(prev => [...prev, ...fileArray]);
    } else if (type === 'rams' && files[0]) {
      setRamsFile(files[0]);
    }
  };

  const uploadFile = async (file: File, folder: string, userId: string): Promise<{ name: string; path: string; size: number }> => {
    const fileExt = file.name.split('.').pop();
    const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;
    const filePath = `${userId}/${folder}/${fileName}`;

    const { error } = await supabase.storage
      .from('supplier-documents')
      .upload(filePath, file);

    if (error) throw error;

    return {
      name: file.name,
      path: filePath,
      size: file.size,
    };
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);

    try {
      // Get or create anonymous user session for file upload
      const { data: { session } } = await supabase.auth.getSession();
      let userId = session?.user?.id;
      
      // If no session, create anonymous session
      if (!userId) {
        const { data: anonData, error: anonError } = await supabase.auth.signInAnonymously();
        if (anonError) throw new Error('Failed to create upload session');
        userId = anonData.user?.id;
      }
      
      if (!userId) throw new Error('Unable to establish upload session');

      // Upload all files with user-scoped paths
      const insuranceUploads = await Promise.all(
        insuranceFiles.map(file => uploadFile(file, 'insurance', userId))
      );

      const accreditationUploads = await Promise.all(
        accreditationFiles.map(file => uploadFile(file, 'accreditations', userId))
      );

      const ramsUpload = ramsFile ? await uploadFile(ramsFile, 'rams', userId) : undefined;

      // Submit application
      const { data, error } = await supabase.functions.invoke('submit-supplier-application', {
        body: {
          ...values,
          insuranceFiles: insuranceUploads,
          accreditationFiles: accreditationUploads,
          ramsFile: ramsUpload,
        },
      });

      if (error) throw error;

      setSubmitted(true);
      toast({
        title: "Application submitted!",
        description: "Our team will review your submission and respond shortly.",
      });
    } catch (error) {
      console.error('Submission error:', error);
      toast({
        title: "Submission failed",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <>
        
        <div className="bg-background min-h-screen pt-20">
          <div className="container mx-auto px-4 py-16">
            <Card className="max-w-2xl mx-auto p-12 text-center">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-primary/10 rounded-full">
                  <CheckCircle2 className="w-16 h-16 text-primary" />
                </div>
              </div>
              <h1 className="text-3xl font-light mb-4">Application Submitted</h1>
              <p className="text-lg text-muted-foreground font-light mb-8">
                Thank you — our team will review your submission and respond shortly.
              </p>
              <div className="space-y-2 text-sm text-muted-foreground font-light">
                <p>📩 hello@entirefm.com</p>
                <p>Or call our specialist supply chain team.</p>
              </div>
            </Card>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      

      <div className="bg-background min-h-screen pt-20">
        <div className="container mx-auto px-4 py-8">
          <Breadcrumb items={breadcrumbItems} />

          {/* Hero Section */}
          <div className="mt-8 mb-12 text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-primary/10 rounded-full">
                <Award className="w-12 h-12 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-light mb-6">
              Supplier & Specialist Partner Hub
            </h1>
            <p className="text-xl text-muted-foreground font-light mb-8">
              We partner with qualified engineers, specialists and contractors who meet our governance standards — 
              delivering compliant, reliable outcomes across UK estates.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" onClick={() => document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' })}>
                Apply to Become a Supplier
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#standards">Download Supplier Standards Pack</a>
              </Button>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-4">
              {["SafeContractor", "CHAS", "Gas Safe", "NICEIC", "F-Gas", "OFTEC"].map((badge) => (
                <Badge key={badge} variant="outline" className="px-6 py-2 text-sm">
                  {badge}
                </Badge>
              ))}
            </div>
          </div>

          {/* Intro Copy */}
          <Card className="p-8 mb-12 bg-muted/50">
            <h2 className="text-2xl font-light mb-6 text-center">Our Supply-Chain Philosophy</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-light">We onboard specialists who share our quality values</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-light">Transparent governance and communication</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Award className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-light">Safety and compliance-first delivery</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <TrendingUp className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-light">Nationwide network with local response capability</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Why Partner */}
          <div className="mb-12">
            <h2 className="text-3xl font-light mb-6 text-center">Why Partner With EntireFM</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
              {[
                { icon: TrendingUp, text: "Regular work pipeline" },
                { icon: CheckCircle2, text: "Clear scopes and quick approvals" },
                { icon: FileText, text: "Digital job management + app access" },
                { icon: Clock, text: "Fast payment cycles for top performers" },
                { icon: Shield, text: "Governance and support from a real FM team" },
              ].map((item, index) => (
                <Card key={index} className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <p className="text-foreground font-light">{item.text}</p>
                  </div>
                </Card>
              ))}
            </div>
            <p className="text-center text-lg text-muted-foreground font-light italic">
              We don't hand out jobs — we build relationships.
            </p>
          </div>

          {/* Application Form */}
          <div id="application-form" className="mb-12">
            <Card className="p-8 max-w-4xl mx-auto">
              <h2 className="text-3xl font-light mb-8 text-center">Supplier Onboarding Form</h2>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  {/* Company Details */}
                  <div>
                    <h3 className="text-xl font-light mb-4">Company Details</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="companyName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Company Name *</FormLabel>
                            <FormControl>
                              <Input {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="yearsEstablished"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Years Established *</FormLabel>
                            <FormControl>
                              <Input type="number" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="registeredAddress"
                        render={({ field }) => (
                          <FormItem className="md:col-span-2">
                            <FormLabel>Registered Address *</FormLabel>
                            <FormControl>
                              <Input {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="website"
                        render={({ field }) => (
                          <FormItem className="md:col-span-2">
                            <FormLabel>Website</FormLabel>
                            <FormControl>
                              <Input placeholder="https://" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  {/* Contact Details */}
                  <div>
                    <h3 className="text-xl font-light mb-4">Contact Details</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="contactName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Contact Name *</FormLabel>
                            <FormControl>
                              <Input {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone *</FormLabel>
                            <FormControl>
                              <Input {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem className="md:col-span-2">
                            <FormLabel>Email *</FormLabel>
                            <FormControl>
                              <Input type="email" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  {/* Coverage */}
                  <FormField
                    control={form.control}
                    name="regions"
                    render={() => (
                      <FormItem>
                        <div className="mb-4">
                          <FormLabel className="text-xl font-light">Coverage *</FormLabel>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                          {regions.map((region) => (
                            <FormField
                              key={region}
                              control={form.control}
                              name="regions"
                              render={({ field }) => {
                                return (
                                  <FormItem
                                    key={region}
                                    className="flex flex-row items-start space-x-3 space-y-0"
                                  >
                                    <FormControl>
                                      <Checkbox
                                        checked={field.value?.includes(region)}
                                        onCheckedChange={(checked) => {
                                          return checked
                                            ? field.onChange([...field.value, region])
                                            : field.onChange(
                                                field.value?.filter(
                                                  (value) => value !== region
                                                )
                                              );
                                        }}
                                      />
                                    </FormControl>
                                    <FormLabel className="font-light">
                                      {region}
                                    </FormLabel>
                                  </FormItem>
                                );
                              }}
                            />
                          ))}
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Service Categories */}
                  <FormField
                    control={form.control}
                    name="serviceCategories"
                    render={() => (
                      <FormItem>
                        <div className="mb-4">
                          <FormLabel className="text-xl font-light">Service Capabilities *</FormLabel>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                          {serviceCategories.map((category) => (
                            <FormField
                              key={category}
                              control={form.control}
                              name="serviceCategories"
                              render={({ field }) => {
                                return (
                                  <FormItem
                                    key={category}
                                    className="flex flex-row items-start space-x-3 space-y-0"
                                  >
                                    <FormControl>
                                      <Checkbox
                                        checked={field.value?.includes(category)}
                                        onCheckedChange={(checked) => {
                                          return checked
                                            ? field.onChange([...field.value, category])
                                            : field.onChange(
                                                field.value?.filter(
                                                  (value) => value !== category
                                                )
                                              );
                                        }}
                                      />
                                    </FormControl>
                                    <FormLabel className="font-light">
                                      {category}
                                    </FormLabel>
                                  </FormItem>
                                );
                              }}
                            />
                          ))}
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* File Uploads */}
                  <div>
                    <h3 className="text-xl font-light mb-4">Compliance & Governance</h3>
                    <div className="space-y-6">
                      <div>
                        <Label className="mb-2 block">Insurance Documents (EL, PL, PI, HSQE)</Label>
                        <div className="flex items-center gap-4">
                          <Button
                            type="button"
                            variant="outline"
                            onClick={() => document.getElementById('insurance-upload')?.click()}
                          >
                            <Upload className="w-4 h-4 mr-2" />
                            Upload Insurance
                          </Button>
                          <input
                            id="insurance-upload"
                            type="file"
                            multiple
                            accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                            className="hidden"
                            onChange={(e) => handleFileChange(e, 'insurance')}
                          />
                          {insuranceFiles.length > 0 && (
                            <span className="text-sm text-muted-foreground">
                              {insuranceFiles.length} file(s) selected
                            </span>
                          )}
                        </div>
                      </div>

                      <div>
                        <Label className="mb-2 block">Accreditations (NICEIC, Gas Safe, F-Gas, etc.)</Label>
                        <div className="flex items-center gap-4">
                          <Button
                            type="button"
                            variant="outline"
                            onClick={() => document.getElementById('accreditation-upload')?.click()}
                          >
                            <Upload className="w-4 h-4 mr-2" />
                            Upload Accreditations
                          </Button>
                          <input
                            id="accreditation-upload"
                            type="file"
                            multiple
                            accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                            className="hidden"
                            onChange={(e) => handleFileChange(e, 'accreditation')}
                          />
                          {accreditationFiles.length > 0 && (
                            <span className="text-sm text-muted-foreground">
                              {accreditationFiles.length} file(s) selected
                            </span>
                          )}
                        </div>
                      </div>

                      <div>
                        <Label className="mb-2 block">RAMS Template</Label>
                        <div className="flex items-center gap-4">
                          <Button
                            type="button"
                            variant="outline"
                            onClick={() => document.getElementById('rams-upload')?.click()}
                          >
                            <Upload className="w-4 h-4 mr-2" />
                            Upload RAMS
                          </Button>
                          <input
                            id="rams-upload"
                            type="file"
                            accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                            className="hidden"
                            onChange={(e) => handleFileChange(e, 'rams')}
                          />
                          {ramsFile && (
                            <span className="text-sm text-muted-foreground">
                              {ramsFile.name}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Quality & Safety */}
                  <div>
                    <h3 className="text-xl font-light mb-4">Quality & Safety</h3>
                    <div className="space-y-4">
                      <FormField
                        control={form.control}
                        name="hasSafetyPolicy"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <FormLabel>Do you have a documented safety policy?</FormLabel>
                            </div>
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="hasNearMissReporting"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <FormLabel>Do you have near-miss reporting procedures?</FormLabel>
                            </div>
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="hasEngineerQualificationTracking"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <FormLabel>Do you track engineer qualification expiry dates?</FormLabel>
                            </div>
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Apply to Become a Supplier"}
                  </Button>
                </form>
              </Form>
            </Card>
          </div>

          {/* Final CTA */}
          <Card className="p-8 bg-primary/5 text-center">
            <h2 className="text-2xl md:text-3xl font-light mb-4">
              Don't want to wait?
            </h2>
            <p className="text-lg text-muted-foreground font-light mb-6">
              📩 hello@entirefm.com
            </p>
            <p className="text-muted-foreground font-light">
              Or call our specialist supply chain team.
            </p>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Suppliers;
