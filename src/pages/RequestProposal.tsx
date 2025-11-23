import { useState } from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useConversionTracking } from "@/hooks/useConversionTracking";
import { toast } from "@/hooks/use-toast";
import { CheckCircle2, Building2, Wrench, FileText, Calendar, Upload, X, Plus } from "lucide-react";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { SchemaMarkup } from "@/components/shared/SchemaMarkup";

// Form validation schema
const proposalSchema = z.object({
  // Step 1: Business Details
  companyName: z.string().min(2, "Company name is required").max(100),
  contactName: z.string().min(2, "Contact name is required").max(100),
  email: z.string().email("Valid email is required").max(255),
  phone: z.string().min(10, "Valid phone number is required").max(20),
  sites: z.array(z.object({
    location: z.string().min(1, "Location is required"),
    address: z.string().optional(),
  })).min(1, "At least one site location is required"),
  
  // Step 2: Services Required
  services: z.object({
    fire: z.boolean(),
    electrical: z.boolean(),
    emergencyLighting: z.boolean(),
    waterHygiene: z.boolean(),
    gas: z.boolean(),
    hvac: z.boolean(),
    ppm: z.boolean(),
  }).refine((data) => Object.values(data).some(v => v === true), {
    message: "Please select at least one service",
  }),
  
  // Step 3: Estate Complexity
  assetCount: z.string().min(1, "Please select asset count range"),
  highRisk: z.string().min(1, "Please specify if high-risk environment"),
  operatingHours: z.string().min(1, "Please specify operating hours"),
  
  // Step 4: Procurement
  contractExpiry: z.string().optional(),
  procurementStatus: z.string().min(1, "Please select procurement status"),
  budgetAwareness: z.string().min(1, "Please select budget awareness"),
  
  // Step 5: Additional Information
  additionalNotes: z.string().optional(),
});

type ProposalFormData = z.infer<typeof proposalSchema>;

const LOCATIONS = [
  "London", "Birmingham", "Manchester", "Leeds", "Sheffield",
  "Nottingham", "Derby", "Chesterfield", "Lincoln", "Leicester", "Liverpool", "Other"
];

const RequestProposal = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const { trackProposalRequest } = useConversionTracking();
  const totalSteps = 5;

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
    trigger,
  } = useForm<ProposalFormData>({
    resolver: zodResolver(proposalSchema),
    defaultValues: {
      sites: [{ location: "", address: "" }],
      services: {
        fire: false,
        electrical: false,
        emergencyLighting: false,
        waterHygiene: false,
        gas: false,
        hvac: false,
        ppm: false,
      },
    },
  });

  const sites = watch("sites") || [{ location: "", address: "" }];
  const services = watch("services");

  const addSite = () => {
    setValue("sites", [...sites, { location: "", address: "" }]);
  };

  const removeSite = (index: number) => {
    if (sites.length > 1) {
      setValue("sites", sites.filter((_, i) => i !== index));
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setUploadedFiles([...uploadedFiles, ...files]);
  };

  const removeFile = (index: number) => {
    setUploadedFiles(uploadedFiles.filter((_, i) => i !== index));
  };

  const nextStep = async () => {
    let fieldsToValidate: any[] = [];
    
    if (currentStep === 1) {
      fieldsToValidate = ["companyName", "contactName", "email", "phone", "sites"];
    } else if (currentStep === 2) {
      fieldsToValidate = ["services"];
    } else if (currentStep === 3) {
      fieldsToValidate = ["assetCount", "highRisk", "operatingHours"];
    } else if (currentStep === 4) {
      fieldsToValidate = ["procurementStatus", "budgetAwareness"];
    }

    const isValid = await trigger(fieldsToValidate as any);
    if (isValid && currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const onSubmit = async (data: ProposalFormData) => {
    console.log("Form submitted:", data);
    console.log("Uploaded files:", uploadedFiles);

    // Track conversion
    trackProposalRequest("rfp_form");

    // Here you would typically send the data to your backend
    // For now, we'll show a success toast
    toast({
      title: "Proposal Request Submitted",
      description: "We'll review your requirements and send a tailored proposal within 24 hours.",
    });

    // In production, this would:
    // 1. Auto-qualify high-value leads based on asset count, services, budget
    // 2. Route to Sales Director if high-value
    // 3. Auto-send Capability Pack PDF
    // 4. Add to CRM/CAFM pipeline
  };

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Request Proposal" },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Request FM Services Proposal | EntireFM",
    description: "Submit your facilities management requirements and receive a tailored proposal with fixed pricing, SLAs, and mobilisation timeline.",
    url: "https://entirefm.co.uk/request-proposal",
  };

  return (
    <>
      <Helmet>
        <title>Request FM Services Proposal | EntireFM</title>
        <meta
          name="description"
          content="Submit your facilities management requirements and receive a tailored proposal with fixed pricing, SLAs, and mobilisation timeline within 24 hours."
        />
        <link rel="canonical" href="https://entirefm.co.uk/request-proposal" />
      </Helmet>

      <SchemaMarkup schema={schema} />

      <div className="bg-background">
        <div className="container mx-auto px-4 py-8">
          <Breadcrumb items={breadcrumbItems} />

          <div className="max-w-4xl mx-auto mt-8">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-light mb-4">
                Request Tailored Proposal
              </h1>
              <p className="text-xl text-muted-foreground font-light">
                Fixed pricing • Guaranteed SLAs • Clear mobilisation timeline
              </p>
            </div>

            {/* Progress Indicator */}
            <div className="mb-12">
              <div className="flex justify-between items-center">
                {[1, 2, 3, 4, 5].map((step) => (
                  <div key={step} className="flex flex-col items-center flex-1">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                        step <= currentStep
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {step < currentStep ? <CheckCircle2 className="w-5 h-5" /> : step}
                    </div>
                    {step < 5 && (
                      <div
                        className={`h-1 w-full transition-colors ${
                          step < currentStep ? "bg-primary" : "bg-muted"
                        }`}
                      />
                    )}
                  </div>
                ))}
              </div>
              <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                <span>Business</span>
                <span>Services</span>
                <span>Estate</span>
                <span>Procurement</span>
                <span>Submit</span>
              </div>
            </div>

            {/* Form */}
            <Card className="p-8">
              <form onSubmit={handleSubmit(onSubmit)}>
                {/* Step 1: Business Details */}
                {currentStep === 1 && (
                  <div className="space-y-6">
                    <div className="flex items-center gap-3 mb-6">
                      <Building2 className="w-6 h-6 text-primary" />
                      <h2 className="text-2xl font-light">Business Details</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="companyName">Company Name *</Label>
                        <Input
                          id="companyName"
                          {...register("companyName")}
                          placeholder="Your Company Ltd"
                        />
                        {errors.companyName && (
                          <p className="text-sm text-destructive mt-1">{errors.companyName.message}</p>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="contactName">Contact Name *</Label>
                        <Input
                          id="contactName"
                          {...register("contactName")}
                          placeholder="John Smith"
                        />
                        {errors.contactName && (
                          <p className="text-sm text-destructive mt-1">{errors.contactName.message}</p>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          {...register("email")}
                          placeholder="john@company.com"
                        />
                        {errors.email && (
                          <p className="text-sm text-destructive mt-1">{errors.email.message}</p>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          {...register("phone")}
                          placeholder="020 1234 5678"
                        />
                        {errors.phone && (
                          <p className="text-sm text-destructive mt-1">{errors.phone.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="space-y-4">
                      <Label>Site Location(s) *</Label>
                      {sites.map((site, index) => (
                        <div key={index} className="border rounded-lg p-4 space-y-4">
                          <div className="flex justify-between items-center">
                            <h3 className="font-medium">Site {index + 1}</h3>
                            {sites.length > 1 && (
                              <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                onClick={() => removeSite(index)}
                              >
                                <X className="w-4 h-4" />
                              </Button>
                            )}
                          </div>
                          <div className="grid md:grid-cols-2 gap-4">
                            <div>
                              <Label>Location *</Label>
                              <Select
                                value={site.location}
                                onValueChange={(value) => {
                                  const newSites = [...sites];
                                  newSites[index].location = value;
                                  setValue("sites", newSites);
                                }}
                              >
                                <SelectTrigger>
                                  <SelectValue placeholder="Select location" />
                                </SelectTrigger>
                                <SelectContent>
                                  {LOCATIONS.map((loc) => (
                                    <SelectItem key={loc} value={loc}>
                                      {loc}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </div>
                            <div>
                              <Label>Address / Postcode (Optional)</Label>
                              <Input
                                value={site.address}
                                onChange={(e) => {
                                  const newSites = [...sites];
                                  newSites[index].address = e.target.value;
                                  setValue("sites", newSites);
                                }}
                                placeholder="SW1A 1AA"
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                      {errors.sites && (
                        <p className="text-sm text-destructive">{errors.sites.message}</p>
                      )}
                      <Button type="button" variant="outline" onClick={addSite} className="w-full">
                        <Plus className="w-4 h-4 mr-2" />
                        Add Another Site
                      </Button>
                    </div>
                  </div>
                )}

                {/* Step 2: Services Required */}
                {currentStep === 2 && (
                  <div className="space-y-6">
                    <div className="flex items-center gap-3 mb-6">
                      <Wrench className="w-6 h-6 text-primary" />
                      <h2 className="text-2xl font-light">Services Required</h2>
                    </div>

                    <p className="text-muted-foreground mb-4">
                      Select all services you require (multiple selection)
                    </p>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="flex items-center space-x-2 border rounded-lg p-4">
                        <Checkbox
                          id="fire"
                          checked={services.fire}
                          onCheckedChange={(checked) =>
                            setValue("services.fire", checked as boolean)
                          }
                        />
                        <Label htmlFor="fire" className="cursor-pointer flex-1">
                          <div className="font-medium">Fire Safety</div>
                          <div className="text-sm text-muted-foreground">
                            Alarms, extinguishers, evacuation
                          </div>
                        </Label>
                      </div>

                      <div className="flex items-center space-x-2 border rounded-lg p-4">
                        <Checkbox
                          id="electrical"
                          checked={services.electrical}
                          onCheckedChange={(checked) =>
                            setValue("services.electrical", checked as boolean)
                          }
                        />
                        <Label htmlFor="electrical" className="cursor-pointer flex-1">
                          <div className="font-medium">Electrical Compliance</div>
                          <div className="text-sm text-muted-foreground">
                            EICR, fixed wire testing
                          </div>
                        </Label>
                      </div>

                      <div className="flex items-center space-x-2 border rounded-lg p-4">
                        <Checkbox
                          id="emergencyLighting"
                          checked={services.emergencyLighting}
                          onCheckedChange={(checked) =>
                            setValue("services.emergencyLighting", checked as boolean)
                          }
                        />
                        <Label htmlFor="emergencyLighting" className="cursor-pointer flex-1">
                          <div className="font-medium">Emergency Lighting</div>
                          <div className="text-sm text-muted-foreground">
                            Testing & compliance
                          </div>
                        </Label>
                      </div>

                      <div className="flex items-center space-x-2 border rounded-lg p-4">
                        <Checkbox
                          id="waterHygiene"
                          checked={services.waterHygiene}
                          onCheckedChange={(checked) =>
                            setValue("services.waterHygiene", checked as boolean)
                          }
                        />
                        <Label htmlFor="waterHygiene" className="cursor-pointer flex-1">
                          <div className="font-medium">Water Hygiene</div>
                          <div className="text-sm text-muted-foreground">
                            Legionella, ACOP L8
                          </div>
                        </Label>
                      </div>

                      <div className="flex items-center space-x-2 border rounded-lg p-4">
                        <Checkbox
                          id="gas"
                          checked={services.gas}
                          onCheckedChange={(checked) =>
                            setValue("services.gas", checked as boolean)
                          }
                        />
                        <Label htmlFor="gas" className="cursor-pointer flex-1">
                          <div className="font-medium">Gas Safety</div>
                          <div className="text-sm text-muted-foreground">
                            CP42, appliance testing
                          </div>
                        </Label>
                      </div>

                      <div className="flex items-center space-x-2 border rounded-lg p-4">
                        <Checkbox
                          id="hvac"
                          checked={services.hvac}
                          onCheckedChange={(checked) =>
                            setValue("services.hvac", checked as boolean)
                          }
                        />
                        <Label htmlFor="hvac" className="cursor-pointer flex-1">
                          <div className="font-medium">HVAC Compliance</div>
                          <div className="text-sm text-muted-foreground">
                            TM44, F-Gas, ventilation
                          </div>
                        </Label>
                      </div>

                      <div className="flex items-center space-x-2 border rounded-lg p-4">
                        <Checkbox
                          id="ppm"
                          checked={services.ppm}
                          onCheckedChange={(checked) =>
                            setValue("services.ppm", checked as boolean)
                          }
                        />
                        <Label htmlFor="ppm" className="cursor-pointer flex-1">
                          <div className="font-medium">PPM (Planned Maintenance)</div>
                          <div className="text-sm text-muted-foreground">
                            Scheduled asset maintenance
                          </div>
                        </Label>
                      </div>
                    </div>

                    {errors.services && (
                      <p className="text-sm text-destructive">{errors.services.message}</p>
                    )}
                  </div>
                )}

                {/* Step 3: Estate Complexity */}
                {currentStep === 3 && (
                  <div className="space-y-6">
                    <div className="flex items-center gap-3 mb-6">
                      <FileText className="w-6 h-6 text-primary" />
                      <h2 className="text-2xl font-light">Estate Complexity</h2>
                    </div>

                    <div>
                      <Label htmlFor="assetCount">Approximate Asset Count *</Label>
                      <Select
                        value={watch("assetCount")}
                        onValueChange={(value) => setValue("assetCount", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select asset count range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-50">1-50 assets</SelectItem>
                          <SelectItem value="51-200">51-200 assets</SelectItem>
                          <SelectItem value="201-500">201-500 assets</SelectItem>
                          <SelectItem value="501-1000">501-1,000 assets</SelectItem>
                          <SelectItem value="1000+">1,000+ assets</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.assetCount && (
                        <p className="text-sm text-destructive mt-1">{errors.assetCount.message}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="highRisk">High-Risk Environment? *</Label>
                      <Select
                        value={watch("highRisk")}
                        onValueChange={(value) => setValue("highRisk", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="yes">Yes - Healthcare, industrial, or high-occupancy</SelectItem>
                          <SelectItem value="no">No - Standard commercial environment</SelectItem>
                          <SelectItem value="unsure">Unsure - Need assessment</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.highRisk && (
                        <p className="text-sm text-destructive mt-1">{errors.highRisk.message}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="operatingHours">Operating Hours *</Label>
                      <Select
                        value={watch("operatingHours")}
                        onValueChange={(value) => setValue("operatingHours", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select operating hours" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="business">Business hours (9am-5pm)</SelectItem>
                          <SelectItem value="extended">Extended hours (7am-9pm)</SelectItem>
                          <SelectItem value="24-7">24/7 operations</SelectItem>
                          <SelectItem value="shift">Shift-based operations</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.operatingHours && (
                        <p className="text-sm text-destructive mt-1">{errors.operatingHours.message}</p>
                      )}
                    </div>
                  </div>
                )}

                {/* Step 4: Procurement */}
                {currentStep === 4 && (
                  <div className="space-y-6">
                    <div className="flex items-center gap-3 mb-6">
                      <Calendar className="w-6 h-6 text-primary" />
                      <h2 className="text-2xl font-light">Procurement Details</h2>
                    </div>

                    <div>
                      <Label htmlFor="contractExpiry">Current Contract Expiry Date (Optional)</Label>
                      <Input
                        id="contractExpiry"
                        type="date"
                        {...register("contractExpiry")}
                      />
                    </div>

                    <div>
                      <Label htmlFor="procurementStatus">Procurement Process Status *</Label>
                      <Select
                        value={watch("procurementStatus")}
                        onValueChange={(value) => setValue("procurementStatus", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="planning">Planning stage - gathering information</SelectItem>
                          <SelectItem value="rfp">Ready to issue RFP/tender</SelectItem>
                          <SelectItem value="comparison">Comparing providers</SelectItem>
                          <SelectItem value="urgent">Urgent - need immediate cover</SelectItem>
                          <SelectItem value="renewal">Contract renewal review</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.procurementStatus && (
                        <p className="text-sm text-destructive mt-1">{errors.procurementStatus.message}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="budgetAwareness">Budget Awareness *</Label>
                      <Select
                        value={watch("budgetAwareness")}
                        onValueChange={(value) => setValue("budgetAwareness", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select budget awareness" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="approved">Budget approved and allocated</SelectItem>
                          <SelectItem value="estimated">Estimated budget in place</SelectItem>
                          <SelectItem value="benchmarking">Benchmarking - need cost guidance</SelectItem>
                          <SelectItem value="flexible">Flexible - focused on value</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.budgetAwareness && (
                        <p className="text-sm text-destructive mt-1">{errors.budgetAwareness.message}</p>
                      )}
                    </div>
                  </div>
                )}

                {/* Step 5: Submit */}
                {currentStep === 5 && (
                  <div className="space-y-6">
                    <div className="flex items-center gap-3 mb-6">
                      <Upload className="w-6 h-6 text-primary" />
                      <h2 className="text-2xl font-light">Additional Information</h2>
                    </div>

                    <div>
                      <Label htmlFor="additionalNotes">Additional Notes (Optional)</Label>
                      <Textarea
                        id="additionalNotes"
                        {...register("additionalNotes")}
                        placeholder="Any specific requirements, constraints, or priorities we should know about..."
                        rows={5}
                      />
                    </div>

                    <div>
                      <Label>Upload Documents (Optional)</Label>
                      <p className="text-sm text-muted-foreground mb-2">
                        Asset lists, current reports, site plans, or existing contracts
                      </p>
                      <div className="border-2 border-dashed rounded-lg p-6 text-center">
                        <input
                          type="file"
                          id="fileUpload"
                          multiple
                          onChange={handleFileUpload}
                          className="hidden"
                          accept=".pdf,.doc,.docx,.xls,.xlsx,.csv"
                        />
                        <Label htmlFor="fileUpload" className="cursor-pointer">
                          <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                          <p className="text-sm font-medium">Click to upload documents</p>
                          <p className="text-xs text-muted-foreground">PDF, DOC, XLS, CSV (max 10MB each)</p>
                        </Label>
                      </div>

                      {uploadedFiles.length > 0 && (
                        <div className="mt-4 space-y-2">
                          {uploadedFiles.map((file, index) => (
                            <div key={index} className="flex items-center justify-between p-2 bg-muted rounded">
                              <span className="text-sm truncate flex-1">{file.name}</span>
                              <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                onClick={() => removeFile(index)}
                              >
                                <X className="w-4 h-4" />
                              </Button>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="bg-muted p-6 rounded-lg">
                      <h3 className="font-medium mb-2">What Happens Next?</h3>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>✓ We'll review your requirements within 4 business hours</li>
                        <li>✓ High-value enquiries routed directly to our Sales Director</li>
                        <li>✓ Receive a tailored proposal with fixed pricing and guaranteed SLAs</li>
                        <li>✓ Capability Pack and case studies sent to your inbox</li>
                        <li>✓ Optional site audit scheduled at your convenience</li>
                      </ul>
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-8 pt-6 border-t">
                  {currentStep > 1 && (
                    <Button type="button" variant="outline" onClick={prevStep}>
                      Previous
                    </Button>
                  )}
                  {currentStep < totalSteps ? (
                    <Button type="button" onClick={nextStep} className="ml-auto">
                      Next Step
                    </Button>
                  ) : (
                    <Button type="submit" className="ml-auto">
                      Submit Proposal Request
                    </Button>
                  )}
                </div>
              </form>
            </Card>

            {/* Trust Indicators */}
            <div className="grid md:grid-cols-3 gap-6 mt-12 text-center">
              <div>
                <div className="text-3xl font-light mb-2">24hrs</div>
                <p className="text-sm text-muted-foreground">Average proposal turnaround</p>
              </div>
              <div>
                <div className="text-3xl font-light mb-2">Fixed</div>
                <p className="text-sm text-muted-foreground">Transparent pricing with no hidden costs</p>
              </div>
              <div>
                <div className="text-3xl font-light mb-2">Guaranteed</div>
                <p className="text-sm text-muted-foreground">SLA performance commitments</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RequestProposal;
