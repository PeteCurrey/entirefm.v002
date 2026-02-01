import { useState } from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useConversionTracking } from "@/hooks/useConversionTracking";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { CheckCircle2, Building2, MapPin, Wrench, FileText, Upload, X, Plus, Download, Phone, FileCheck, ArrowRight } from "lucide-react";
import { SchemaMarkup } from "@/components/shared/SchemaMarkup";
import { Link } from "react-router-dom";
import ServiceHeroSection from "@/components/shared/ServiceHeroSection";
import { TrustBar } from "@/components/shared/TrustBar";
import ContentSection from "@/components/shared/ContentSection";

// Form validation schema
const proposalSchema = z.object({
  // Step 1: Organisation Details
  companyName: z.string().min(2, "Company name is required").max(100),
  contactName: z.string().min(2, "Contact name is required").max(100),
  email: z.string().email("Valid email is required").max(255),
  phone: z.string().min(10, "Valid phone number is required").max(20),
  businessType: z.string().min(1, "Please select business type"),
  // Step 2: Site Locations
  sites: z.array(z.object({
    cityRegion: z.string().min(1, "City/Region is required"),
    numberOfBuildings: z.string().min(1, "Number of buildings is required"),
    hours24_7: z.boolean()
  })).min(1, "At least one site is required"),
  // Step 3: Services Required
  services: z.object({
    fireSafety: z.boolean(),
    electricalCompliance: z.boolean(),
    emergencyLighting: z.boolean(),
    waterHygiene: z.boolean(),
    gasSafety: z.boolean(),
    hvacFGas: z.boolean(),
    ppmAsset: z.boolean(),
    other: z.boolean()
  }).refine(data => Object.values(data).some(v => v === true), {
    message: "Please select at least one service"
  }),
  servicesOther: z.string().optional(),
  // Step 4: Governance & Procurement
  existingFMProvider: z.string().min(1, "Please specify if you have an existing FM provider"),
  contractExpiryDate: z.string().optional(),
  budgetApproval: z.string().min(1, "Please select budget approval status"),
  urgencyLevel: z.string().min(1, "Please select urgency level"),
  // Step 5: Supporting Documents & Additional Info
  additionalNotes: z.string().optional()
});

type ProposalFormData = z.infer<typeof proposalSchema>;

const BUSINESS_TYPES = ["Office", "PBSA", "Retail", "Healthcare", "Logistics", "Other"];
const CITIES = ["London", "Birmingham", "Manchester", "Leeds", "Sheffield", "Nottingham", "Derby", "Chesterfield", "Lincoln", "Leicester", "Liverpool", "Other"];
const BUDGET_STATUSES = ["Approved", "Pending Approval", "Under Review", "Not Started"];
const URGENCY_LEVELS = ["Immediate", "1–3 months", "3–12 months", "Exploratory"];

const STEP_INFO = [
  { icon: Building2, title: "Organisation", description: "Company details" },
  { icon: MapPin, title: "Sites", description: "Location info" },
  { icon: Wrench, title: "Services", description: "Requirements" },
  { icon: FileText, title: "Governance", description: "Procurement" },
  { icon: FileCheck, title: "Submit", description: "Review & send" },
];

const RequestProposal = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { trackProposalRequest } = useConversionTracking();
  const totalSteps = 5;

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
    trigger
  } = useForm<ProposalFormData>({
    resolver: zodResolver(proposalSchema),
    defaultValues: {
      sites: [{
        cityRegion: "",
        numberOfBuildings: "",
        hours24_7: false
      }],
      services: {
        fireSafety: false,
        electricalCompliance: false,
        emergencyLighting: false,
        waterHygiene: false,
        gasSafety: false,
        hvacFGas: false,
        ppmAsset: false,
        other: false
      }
    }
  });

  const sites = watch("sites") || [];
  const services = watch("services");
  const existingFMProvider = watch("existingFMProvider");

  const addSite = () => {
    setValue("sites", [...sites, {
      cityRegion: "",
      numberOfBuildings: "",
      hours24_7: false
    }]);
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

  // FIXED: Removed window.scrollTo to prevent page jumping
  const nextStep = async () => {
    let fieldsToValidate: any[] = [];
    if (currentStep === 1) {
      fieldsToValidate = ["companyName", "contactName", "email", "phone", "businessType"];
    } else if (currentStep === 2) {
      fieldsToValidate = ["sites"];
    } else if (currentStep === 3) {
      fieldsToValidate = ["services"];
    } else if (currentStep === 4) {
      fieldsToValidate = ["existingFMProvider", "budgetApproval", "urgencyLevel"];
    }
    const isValid = await trigger(fieldsToValidate as any);
    if (isValid && currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
      // Scroll the form card into view smoothly without jumping to top
      const formElement = document.getElementById('proposal-form');
      if (formElement) {
        formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      // Scroll the form card into view smoothly without jumping to top
      const formElement = document.getElementById('proposal-form');
      if (formElement) {
        formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const onSubmit = async (data: ProposalFormData) => {
    setIsSubmitting(true);
    
    try {
      // Transform services object to array of selected services
      const selectedServices = Object.entries(data.services)
        .filter(([_, value]) => value)
        .map(([key]) => {
          const serviceNames: Record<string, string> = {
            fireSafety: 'Fire Safety & Life Protection',
            electricalCompliance: 'Electrical Compliance',
            emergencyLighting: 'Emergency Lighting',
            waterHygiene: 'Water Hygiene & Legionella',
            gasSafety: 'Gas Safety',
            hvacFGas: 'HVAC & F-Gas',
            ppmAsset: 'PPM & Asset Lifecycle',
            other: data.servicesOther || 'Other'
          };
          return serviceNames[key] || key;
        });

      // Transform sites data
      const sitesData = data.sites.map(site => ({
        city: site.cityRegion,
        buildings: parseInt(site.numberOfBuildings) || 1,
        is24_7: site.hours24_7
      }));

      const response = await supabase.functions.invoke('submit-proposal', {
        body: {
          company_name: data.companyName,
          contact_name: data.contactName,
          email: data.email,
          phone: data.phone,
          business_type: data.businessType,
          sites: sitesData,
          services: selectedServices,
          has_existing_provider: data.existingFMProvider === 'yes',
          contract_expiry_date: data.contractExpiryDate || null,
          budget_approval_status: data.budgetApproval,
          urgency_level: data.urgencyLevel,
        }
      });

      if (response.error) {
        throw new Error(response.error.message || 'Failed to submit proposal');
      }

      trackProposalRequest("proposal_request_form");
      setIsSubmitted(true);
      
      toast({
        title: "Proposal Request Submitted",
        description: "Thank you. Our team is reviewing your requirements."
      });
      
      // Scroll to top for success message
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error: any) {
      console.error('Submission error:', error);
      toast({
        title: "Submission Failed",
        description: error.message || "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Request Proposal" }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Request Proposal / Tender Pack | EntireFM",
    description: "Fast, compliant, and transparent procurement support — tailored to your estate.",
    url: "https://entirefm.co.uk/request-proposal"
  };

  const heroStats = [
    { value: "48", suffix: "hr", label: "Proposal Turnaround" },
    { value: "100", suffix: "%", label: "Tender-Ready Docs" },
    { value: "0", suffix: "", label: "Hidden Costs" },
    { value: "24/7", suffix: "", label: "Support Included" },
  ];

  if (isSubmitted) {
    return (
      <>
        <Helmet>
          <title>Request Submitted | EntireFM</title>
        </Helmet>
        <div className="bg-background min-h-[80vh] flex items-center justify-center pt-24">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl mx-auto text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              >
                <CheckCircle2 className="w-20 h-20 text-primary mx-auto mb-6" />
              </motion.div>
              <h1 className="text-4xl md:text-5xl font-light mb-4">Thank You</h1>
              <p className="text-xl text-muted-foreground mb-8">
                Our team is reviewing your requirements.
              </p>
              <Card className="p-6 mb-8 text-left">
                <h3 className="font-medium mb-4">What happens next?</h3>
                <div className="space-y-3 text-muted-foreground">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p>You will receive an email acknowledgment within the hour</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p>Our team will review your requirements and prepare a detailed proposal</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p>You'll receive your complete tender pack within 24-48 hours</p>
                  </div>
                </div>
              </Card>
              <div className="flex gap-4 justify-center">
                <Button asChild variant="outline">
                  <Link to="/">Return Home</Link>
                </Button>
                <Button asChild>
                  <Link to="/resources">Browse Resources</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>Request Proposal / Tender Pack | EntireFM</title>
        <meta name="description" content="Fast, compliant, and transparent procurement support — tailored to your estate. Submit your requirements and receive a detailed proposal." />
        <link rel="canonical" href="https://entirefm.co.uk/request-proposal" />
      </Helmet>

      <SchemaMarkup schema={schema} />

      {/* Premium Hero Section */}
      <ServiceHeroSection
        breadcrumbItems={breadcrumbItems}
        title="Request Proposal / Tender Pack"
        description="Fast, compliant, and transparent procurement support — tailored to your estate. Complete the form below and receive a comprehensive proposal within 48 hours."
        stats={heroStats}
        primaryCTA={{
          label: "Start Your Request",
          href: "#proposal-form",
          icon: ArrowRight
        }}
        secondaryCTA={{
          label: "Download Capability Pack",
          href: "/resources/tender-support"
        }}
      />

      {/* Trust Bar */}
      <TrustBar variant="compact" />

      {/* Why Choose Section */}
      <ContentSection variant="muted">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-light mb-4">Why Choose EntireFM</h2>
            <p className="text-lg text-muted-foreground">
              Enterprise-grade facilities management with zero friction switching
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Zero Disruption Switching",
                description: "We manage the entire transition with minimal impact to your operations",
                icon: CheckCircle2
              },
              {
                title: "Compliance Audit Included",
                description: "Full estate assessment and gap analysis at no additional cost",
                icon: CheckCircle2
              },
              {
                title: "Complete Documentation",
                description: "Tender-ready documentation delivered within 48 hours",
                icon: CheckCircle2
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                  <item.icon className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-medium mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link to="/why-entirefm" className="text-sm text-primary hover:underline font-medium mr-6">
              Learn more about why clients choose EntireFM →
            </Link>
            <Link to="/compare" className="text-sm text-primary hover:underline font-medium">
              Compare FM Providers →
            </Link>
          </div>
        </div>
      </ContentSection>

      {/* Main Form Section */}
      <ContentSection id="proposal-form">
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Form Section */}
          <div className="lg:col-span-2">
            {/* Progress Indicator - Enhanced */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <div className="flex items-center justify-between mb-4">
                {STEP_INFO.map((step, idx) => {
                  const stepNum = idx + 1;
                  const isActive = stepNum === currentStep;
                  const isComplete = stepNum < currentStep;
                  
                  return (
                    <div key={stepNum} className="flex items-center">
                      <div 
                        className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-medium transition-all ${
                          isComplete 
                            ? "bg-primary text-primary-foreground" 
                            : isActive 
                              ? "bg-primary text-primary-foreground ring-4 ring-primary/20" 
                              : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {isComplete ? <CheckCircle2 className="w-5 h-5" /> : <step.icon className="w-5 h-5" />}
                      </div>
                      {stepNum < 5 && (
                        <div className={`h-1 w-8 md:w-16 lg:w-20 transition-colors ${
                          stepNum < currentStep ? "bg-primary" : "bg-muted"
                        }`} />
                      )}
                    </div>
                  );
                })}
              </div>
              <div className="flex justify-between text-xs text-muted-foreground">
                {STEP_INFO.map((step, idx) => (
                  <span key={idx} className={`text-center ${idx + 1 === currentStep ? 'text-primary font-medium' : ''}`}>
                    {step.title}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Form Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card className="p-8">
                <form onSubmit={handleSubmit(onSubmit)}>
                  {/* Step 1: Organisation Details */}
                  {currentStep === 1 && (
                    <motion.div 
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="space-y-6"
                    >
                      <div className="flex items-center gap-3 mb-6">
                        <Building2 className="w-6 h-6 text-primary" />
                        <h2 className="text-2xl font-light">Organisation Details</h2>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="companyName">Company Name *</Label>
                          <Input id="companyName" {...register("companyName")} placeholder="Your Company Ltd" className="mt-1" />
                          {errors.companyName && <p className="text-sm text-destructive mt-1">{errors.companyName.message}</p>}
                        </div>

                        <div>
                          <Label htmlFor="contactName">Contact Name *</Label>
                          <Input id="contactName" {...register("contactName")} placeholder="John Smith" className="mt-1" />
                          {errors.contactName && <p className="text-sm text-destructive mt-1">{errors.contactName.message}</p>}
                        </div>

                        <div>
                          <Label htmlFor="email">Email *</Label>
                          <Input id="email" type="email" {...register("email")} placeholder="john@company.com" className="mt-1" />
                          {errors.email && <p className="text-sm text-destructive mt-1">{errors.email.message}</p>}
                        </div>

                        <div>
                          <Label htmlFor="phone">Phone *</Label>
                          <Input id="phone" type="tel" {...register("phone")} placeholder="020 1234 5678" className="mt-1" />
                          {errors.phone && <p className="text-sm text-destructive mt-1">{errors.phone.message}</p>}
                        </div>

                        <div className="md:col-span-2">
                          <Label htmlFor="businessType">Business Type *</Label>
                          <Select onValueChange={value => setValue("businessType", value)}>
                            <SelectTrigger className="mt-1">
                              <SelectValue placeholder="Select business type" />
                            </SelectTrigger>
                            <SelectContent>
                              {BUSINESS_TYPES.map(type => (
                                <SelectItem key={type} value={type}>{type}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          {errors.businessType && <p className="text-sm text-destructive mt-1">{errors.businessType.message}</p>}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 2: Site Locations */}
                  {currentStep === 2 && (
                    <motion.div 
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="space-y-6"
                    >
                      <div className="flex items-center gap-3 mb-6">
                        <MapPin className="w-6 h-6 text-primary" />
                        <h2 className="text-2xl font-light">Site Locations</h2>
                      </div>

                      <div className="space-y-4">
                        {sites.map((site, index) => (
                          <Card key={index} className="p-6 space-y-4">
                            <div className="flex justify-between items-center mb-4">
                              <h3 className="font-medium">Site {index + 1}</h3>
                              {sites.length > 1 && (
                                <Button type="button" variant="ghost" size="sm" onClick={() => removeSite(index)}>
                                  <X className="w-4 h-4" />
                                </Button>
                              )}
                            </div>

                            <div className="grid md:grid-cols-2 gap-4">
                              <div>
                                <Label>City / Region *</Label>
                                <Select 
                                  value={site.cityRegion} 
                                  onValueChange={value => {
                                    const newSites = [...sites];
                                    newSites[index].cityRegion = value;
                                    setValue("sites", newSites);
                                  }}
                                >
                                  <SelectTrigger className="mt-1">
                                    <SelectValue placeholder="Select city" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    {CITIES.map(city => (
                                      <SelectItem key={city} value={city}>{city}</SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>
                              </div>

                              <div>
                                <Label>Number of Buildings *</Label>
                                <Input 
                                  type="number" 
                                  min="1" 
                                  value={site.numberOfBuildings} 
                                  onChange={e => {
                                    const newSites = [...sites];
                                    newSites[index].numberOfBuildings = e.target.value;
                                    setValue("sites", newSites);
                                  }} 
                                  placeholder="e.g. 3"
                                  className="mt-1"
                                />
                              </div>
                            </div>

                            <div className="flex items-center space-x-2">
                              <Checkbox 
                                id={`hours24_7_${index}`} 
                                checked={site.hours24_7} 
                                onCheckedChange={checked => {
                                  const newSites = [...sites];
                                  newSites[index].hours24_7 = checked as boolean;
                                  setValue("sites", newSites);
                                }} 
                              />
                              <Label htmlFor={`hours24_7_${index}`} className="cursor-pointer">
                                24/7 Hours of Operation
                              </Label>
                            </div>
                          </Card>
                        ))}

                        {errors.sites && <p className="text-sm text-destructive">{errors.sites.message}</p>}

                        <Button type="button" variant="outline" onClick={addSite} className="w-full">
                          <Plus className="w-4 h-4 mr-2" />
                          Add Another Site
                        </Button>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 3: Services Required */}
                  {currentStep === 3 && (
                    <motion.div 
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="space-y-6"
                    >
                      <div className="flex items-center gap-3 mb-6">
                        <Wrench className="w-6 h-6 text-primary" />
                        <h2 className="text-2xl font-light">Services Required</h2>
                      </div>

                      <p className="text-muted-foreground mb-4">
                        Select all services you require (multiple selection)
                      </p>

                      <div className="space-y-3">
                        {[
                          { id: "fireSafety", label: "Fire Safety & Life Protection", desc: "Fire alarms, extinguishers, evacuation planning" },
                          { id: "electricalCompliance", label: "Electrical Compliance", desc: "EICR, fixed wire testing, PAT testing" },
                          { id: "emergencyLighting", label: "Emergency Lighting", desc: "Testing, maintenance, compliance certification" },
                          { id: "waterHygiene", label: "Water Hygiene & Legionella", desc: "Risk assessments, testing, ACOP L8 compliance" },
                          { id: "gasSafety", label: "Gas Safety", desc: "CP42 inspections, appliance servicing" },
                          { id: "hvacFGas", label: "HVAC & F-Gas", desc: "TM44, F-Gas compliance, ventilation systems" },
                          { id: "ppmAsset", label: "PPM & Asset Lifecycle", desc: "Planned preventative maintenance programs" },
                          { id: "other", label: "Other", desc: "Please specify below" },
                        ].map(service => (
                          <div key={service.id} className="flex items-start space-x-3 border rounded-lg p-4 hover:border-primary/50 transition-colors">
                            <Checkbox 
                              id={service.id} 
                              checked={(services as any)[service.id]} 
                              onCheckedChange={checked => setValue(`services.${service.id}` as any, checked as boolean)} 
                            />
                            <Label htmlFor={service.id} className="cursor-pointer flex-1">
                              <div className="font-medium">{service.label}</div>
                              <div className="text-sm text-muted-foreground">{service.desc}</div>
                            </Label>
                          </div>
                        ))}

                        {services.other && (
                          <div>
                            <Label htmlFor="servicesOther">Please specify other services</Label>
                            <Textarea 
                              id="servicesOther" 
                              {...register("servicesOther")} 
                              placeholder="Describe any additional services you require..." 
                              rows={3} 
                              className="mt-1"
                            />
                          </div>
                        )}
                      </div>

                      {errors.services && <p className="text-sm text-destructive">{errors.services.message}</p>}
                    </motion.div>
                  )}

                  {/* Step 4: Governance & Procurement */}
                  {currentStep === 4 && (
                    <motion.div 
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="space-y-6"
                    >
                      <div className="flex items-center gap-3 mb-6">
                        <FileText className="w-6 h-6 text-primary" />
                        <h2 className="text-2xl font-light">Governance & Procurement</h2>
                      </div>

                      <div className="space-y-6">
                        <div>
                          <Label htmlFor="existingFMProvider">Existing FM provider? *</Label>
                          <Select onValueChange={value => setValue("existingFMProvider", value)}>
                            <SelectTrigger className="mt-1">
                              <SelectValue placeholder="Select option" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="yes">Yes</SelectItem>
                              <SelectItem value="no">No</SelectItem>
                            </SelectContent>
                          </Select>
                          {errors.existingFMProvider && (
                            <p className="text-sm text-destructive mt-1">{errors.existingFMProvider.message}</p>
                          )}
                        </div>

                        {existingFMProvider === "yes" && (
                          <div>
                            <Label htmlFor="contractExpiryDate">Current contract expiry date (optional)</Label>
                            <Input id="contractExpiryDate" type="date" {...register("contractExpiryDate")} className="mt-1" />
                          </div>
                        )}

                        <div>
                          <Label htmlFor="budgetApproval">Budget approval status *</Label>
                          <Select onValueChange={value => setValue("budgetApproval", value)}>
                            <SelectTrigger className="mt-1">
                              <SelectValue placeholder="Select status" />
                            </SelectTrigger>
                            <SelectContent>
                              {BUDGET_STATUSES.map(status => (
                                <SelectItem key={status} value={status}>{status}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          {errors.budgetApproval && (
                            <p className="text-sm text-destructive mt-1">{errors.budgetApproval.message}</p>
                          )}
                        </div>

                        <div>
                          <Label htmlFor="urgencyLevel">Urgency level *</Label>
                          <Select onValueChange={value => setValue("urgencyLevel", value)}>
                            <SelectTrigger className="mt-1">
                              <SelectValue placeholder="Select urgency" />
                            </SelectTrigger>
                            <SelectContent>
                              {URGENCY_LEVELS.map(level => (
                                <SelectItem key={level} value={level}>{level}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          {errors.urgencyLevel && (
                            <p className="text-sm text-destructive mt-1">{errors.urgencyLevel.message}</p>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 5: Supporting Documents */}
                  {currentStep === 5 && (
                    <motion.div 
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="space-y-6"
                    >
                      <div className="flex items-center gap-3 mb-6">
                        <Upload className="w-6 h-6 text-primary" />
                        <h2 className="text-2xl font-light">Supporting Documents</h2>
                      </div>

                      <p className="text-muted-foreground">
                        Upload any supporting documents such as asset lists, risk assessments, or
                        existing certificates (optional).
                      </p>

                      <div className="border-2 border-dashed rounded-lg p-8 text-center hover:border-primary/50 transition-colors">
                        <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                        <Label htmlFor="fileUpload" className="cursor-pointer text-primary hover:underline">
                          Click to upload files
                        </Label>
                        <Input id="fileUpload" type="file" multiple onChange={handleFileUpload} className="hidden" />
                        <p className="text-sm text-muted-foreground mt-2">
                          PDF, DOC, XLS, or images (max 10MB per file)
                        </p>
                      </div>

                      {uploadedFiles.length > 0 && (
                        <div className="space-y-2">
                          <Label>Uploaded Files</Label>
                          {uploadedFiles.map((file, index) => (
                            <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                              <span className="text-sm">{file.name}</span>
                              <Button type="button" variant="ghost" size="sm" onClick={() => removeFile(index)}>
                                <X className="w-4 h-4" />
                              </Button>
                            </div>
                          ))}
                        </div>
                      )}

                      <div>
                        <Label htmlFor="additionalNotes">Additional Notes (optional)</Label>
                        <Textarea 
                          id="additionalNotes" 
                          {...register("additionalNotes")} 
                          placeholder="Any specific requirements, concerns, or questions..." 
                          rows={5} 
                          className="mt-1"
                        />
                      </div>
                    </motion.div>
                  )}

                  {/* Navigation Buttons */}
                  <div className="flex justify-between mt-8 pt-6 border-t">
                    {currentStep > 1 && (
                      <Button type="button" variant="outline" onClick={prevStep}>
                        Previous
                      </Button>
                    )}
                    <div className="flex gap-4 ml-auto">
                      {currentStep < totalSteps ? (
                        <Button type="button" onClick={nextStep}>
                          Next Step
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      ) : (
                        <Button type="submit" disabled={isSubmitting}>
                          {isSubmitting ? "Submitting..." : "Generate Proposal Request"}
                        </Button>
                      )}
                    </div>
                  </div>
                </form>
              </Card>
            </motion.div>
          </div>

          {/* Sidebar CTA */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <Card className="p-6">
                  <h3 className="text-lg font-medium mb-4">Need Help?</h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    Our team is available to discuss your requirements and guide you through the process.
                  </p>
                  <div className="space-y-3">
                    <Button asChild variant="outline" className="w-full">
                      <a href="mailto:hello@entirefm.com">
                        <Phone className="w-4 h-4 mr-2" />
                        Schedule Intro Call
                      </a>
                    </Button>
                    <Button asChild variant="secondary" className="w-full">
                      <a href="/resources/tender-support" target="_blank">
                        <Download className="w-4 h-4 mr-2" />
                        Download Capability Pack
                      </a>
                    </Button>
                  </div>
                </Card>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <Card className="p-6 bg-muted/50">
                  <h4 className="font-medium mb-4">Our Commitment</h4>
                  <div className="space-y-3 text-sm">
                    {[
                      "ISO 9001 Quality Management",
                      "CHAS & SafeContractor Accredited",
                      "Full transparency on pricing",
                      "24-48 hour proposal turnaround"
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>

              {/* Quick Stats */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <Card className="p-6 bg-primary/5 border-primary/20">
                  <h4 className="font-medium mb-4 text-primary">This Week</h4>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-light">12</div>
                      <div className="text-xs text-muted-foreground">Proposals Sent</div>
                    </div>
                    <div>
                      <div className="text-2xl font-light">98%</div>
                      <div className="text-xs text-muted-foreground">On-Time Delivery</div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </ContentSection>
    </>
  );
};

export default RequestProposal;
