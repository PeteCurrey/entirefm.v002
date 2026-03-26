"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowRight, CheckCircle2, ChevronLeft, Loader2, Building2, ShieldCheck, Wrench } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface SectorQuoteFormProps {
  sectorName: string;
}

export default function SectorQuoteForm({ sectorName }: SectorQuoteFormProps) {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const [formData, setFormData] = useState({
    // Step 1: Building
    buildingType: "",
    siteSize: "",
    numberOfSites: "1",
    // Step 2: Requirements
    requirements: [] as string[],
    urgency: "Normal",
    customNotes: "",
    // Step 3: Contact
    name: "",
    email: "",
    company: "",
    phone: "",
  });

  const nextStep = () => setStep(s => s + 1);
  const prevStep = () => setStep(s => s - 1);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          phone: formData.phone,
          subject: `${sectorName} Sector Quote Request`,
          message: `Sector-Specific Quote Request for ${sectorName}\n\n` +
                   `Building Type: ${formData.buildingType}\n` +
                   `Size: ${formData.siteSize}\n` +
                   `Sites: ${formData.numberOfSites}\n` +
                   `Requirements: ${formData.requirements.join(", ")}\n` +
                   `Urgency: ${formData.urgency}\n` +
                   `Notes: ${formData.customNotes}`,
          source_page: `/${sectorName.toLowerCase().replace(/\s+/g, "-")}`,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
      }
    } catch (error) {
      console.error("Error submitting quote:", error);
    } finally {
      setLoading(false);
    }
  };

  const toggleRequirement = (req: string) => {
    setFormData(prev => ({
      ...prev,
      requirements: prev.requirements.includes(req)
        ? prev.requirements.filter(r => r !== req)
        : [...prev.requirements, req]
    }));
  };

  if (submitted) {
    return (
      <Card className="border-2 border-primary/20 bg-primary/5 shadow-2xl overflow-hidden rounded-2xl">
        <CardContent className="p-12 text-center">
          <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-charcoal mb-4 tracking-tight">Quote Request Received</h2>
          <p className="text-muted-foreground font-light text-lg leading-relaxed max-w-md mx-auto mb-8">
            Thank you. An EntireFM {sectorName} specialist will review your requirements and contact you within 4 business hours to discuss your proposal.
          </p>
          <Button variant="outline" onClick={() => setSubmitted(false)} className="uppercase tracking-widest font-bold">
            Send Another Request
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-none shadow-2xl overflow-hidden rounded-2xl bg-white">
      <CardHeader className="bg-charcoal text-white p-8">
        <div className="flex items-center justify-between mb-4">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">Step {step} of 3</span>
          <div className="w-24 h-1 bg-white/10 rounded-full overflow-hidden">
            <div 
              className="h-full bg-primary transition-all duration-500" 
              style={{ width: `${(step / 3) * 100}%` }}
            />
          </div>
        </div>
        <CardTitle className="text-2xl font-bold tracking-tight">Request a Precise {sectorName} Quote</CardTitle>
        <CardDescription className="text-gray-400 font-light mt-2">
          Tell us about your {sectorName.toLowerCase()} estate for a tailored FM proposal.
        </CardDescription>
      </CardHeader>
      
      <CardContent className="p-8">
        <form onSubmit={handleSubmit}>
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="building-type" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Building Type</Label>
                    <Input 
                      id="building-type"
                      placeholder="e.g. Distribution Centre, Retail Unit"
                      value={formData.buildingType}
                      onChange={e => setFormData({ ...formData, buildingType: e.target.value })}
                      className="h-12 border-border focus:ring-primary/20"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="site-size" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Approx. Site Size (sqm)</Label>
                    <Input 
                      id="site-size"
                      placeholder="e.g. 5,000 sqm"
                      value={formData.siteSize}
                      onChange={e => setFormData({ ...formData, siteSize: e.target.value })}
                      className="h-12 border-border focus:ring-primary/20"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="num-sites" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Number of Sites</Label>
                  <Input 
                    id="num-sites"
                    type="number"
                    value={formData.numberOfSites}
                    onChange={e => setFormData({ ...formData, numberOfSites: e.target.value })}
                    className="h-12 border-border focus:ring-primary/20"
                  />
                </div>
                <Button 
                  type="button" 
                  onClick={nextStep} 
                  disabled={!formData.buildingType || !formData.siteSize}
                  className="w-full h-14 bg-charcoal hover:bg-charcoal/90 text-white uppercase tracking-widest font-bold mt-4"
                >
                  Continue to Requirements <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4 block">Select Services Required</Label>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { id: "hard-fm", label: "Hard FM (Technical)", icon: Building2 },
                    { id: "soft-fm", label: "Soft FM (Cleaning/Security)", icon: ShieldCheck },
                    { id: "ppm", label: "SFG20 PPM", icon: Wrench },
                    { id: "reactive", label: "24/7 Reactive", icon: Loader2 },
                  ].map(service => (
                    <button
                      key={service.id}
                      type="button"
                      onClick={() => toggleRequirement(service.label)}
                      className={`flex flex-col items-center justify-center p-4 rounded-xl border-2 transition-all gap-2 ${
                        formData.requirements.includes(service.label)
                          ? "border-primary bg-primary/5 text-primary"
                          : "border-border hover:border-primary/20 bg-white"
                      }`}
                    >
                      <service.icon className="w-6 h-6" />
                      <span className="text-[10px] font-bold uppercase tracking-wider text-center">{service.label}</span>
                    </button>
                  ))}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="notes" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Any sector-specific challenges?</Label>
                  <Textarea 
                    id="notes"
                    placeholder="e.g. 24-hour access required, specialized cooling systems..."
                    value={formData.customNotes}
                    onChange={e => setFormData({ ...formData, customNotes: e.target.value })}
                    className="min-h-[100px] border-border focus:ring-primary/20"
                  />
                </div>
                <div className="flex gap-4 mt-6">
                  <Button type="button" variant="outline" onClick={prevStep} className="h-14 px-6 uppercase tracking-widest font-bold">
                    <ChevronLeft className="w-5 h-5" />
                  </Button>
                  <Button 
                    type="button" 
                    onClick={nextStep} 
                    disabled={formData.requirements.length === 0}
                    className="flex-1 h-14 bg-charcoal hover:bg-charcoal/90 text-white uppercase tracking-widest font-bold"
                  >
                    Continue to Contact <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Full Name</Label>
                    <Input 
                      id="name"
                      required
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      className="h-12 border-border focus:ring-primary/20"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Work Email</Label>
                    <Input 
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      className="h-12 border-border focus:ring-primary/20"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Company</Label>
                    <Input 
                      id="company"
                      required
                      value={formData.company}
                      onChange={e => setFormData({ ...formData, company: e.target.value })}
                      className="h-12 border-border focus:ring-primary/20"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Phone Number</Label>
                    <Input 
                      id="phone"
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      className="h-12 border-border focus:ring-primary/20"
                    />
                  </div>
                </div>
                <div className="flex gap-4 mt-8">
                  <Button type="button" variant="outline" onClick={prevStep} className="h-14 px-6 uppercase tracking-widest font-bold">
                    <ChevronLeft className="w-5 h-5" />
                  </Button>
                  <Button 
                    type="submit" 
                    disabled={loading || !formData.name || !formData.email || !formData.company}
                    className="flex-1 h-14 bg-primary hover:bg-primary/90 text-white uppercase tracking-widest font-bold shadow-xl shadow-primary/20"
                  >
                    {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Request Full Proposal"}
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </form>
      </CardContent>
    </Card>
  );
}
