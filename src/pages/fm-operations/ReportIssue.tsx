import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { AlertCircle, CheckCircle2, Loader2, Phone } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
const CATEGORIES = ["Fire Safety", "Electrical", "HVAC", "Water / Drainage", "Gas", "General Building Fabric", "Access Control / Security", "Other"];
const PRIORITIES = [{
  value: "Emergency",
  label: "Emergency (life or building safety)"
}, {
  value: "Urgent",
  label: "Urgent (within 24 hours)"
}, {
  value: "Routine",
  label: "Routine"
}];
const ROLES = ["Tenant", "Landlord", "FM Manager", "Building Manager", "Other"];
export default function ReportIssue() {
  const navigate = useNavigate();
  const {
    toast
  } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    company: "",
    email: "",
    phone: "",
    site_location: "",
    category: "",
    priority: "",
    asset_reference: "",
    description: ""
  });
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.company || !formData.site_location || !formData.category || !formData.priority || !formData.asset_reference || !formData.description) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }
    setIsSubmitting(true);
    try {
      const {
        data,
        error
      } = await supabase.functions.invoke('submit-helpdesk-job', {
        body: {
          ...formData,
          source_page: window.location.pathname
        }
      });
      if (error) throw error;
      if (data?.success) {
        setSubmitSuccess(true);
        toast({
          title: "Issue Reported",
          description: "Our helpdesk team will review your issue and respond shortly."
        });
      } else {
        throw new Error(data?.error || 'Submission failed');
      }
    } catch (error: any) {
      console.error('Error submitting job:', error);
      toast({
        title: "Submission Failed",
        description: "Something went wrong. Please try again or call our helpdesk directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  if (submitSuccess) {
    return <>
        <Helmet>
          <title>Issue Reported | EntireFM</title>
        </Helmet>
        <div className="min-h-screen bg-background pt-20 pb-16">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <CheckCircle2 className="w-16 h-16 text-green-600 mx-auto mb-6" />
            <h1 className="text-4xl font-bold mb-4">Issue Reported Successfully</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Your maintenance issue has been logged with our helpdesk team. We'll review it and respond as soon as possible.
            </p>
            <p className="text-muted-foreground mb-8">
              For urgent matters, you can call our 24/7 helpdesk directly.
            </p>
            <div className="flex gap-4 justify-center">
              <Button onClick={() => navigate('/fm-operations/helpdesk')} variant="outline">
                View Helpdesk Info
              </Button>
              <Button onClick={() => window.location.reload()}>
                Report Another Issue
              </Button>
            </div>
          </div>
        </div>
      </>;
  }
  return <>
      <Helmet>
        <title>Report a Maintenance Issue | EntireFM Helpdesk</title>
        <meta name="description" content="Log maintenance issues directly with EntireFM's 24/7 helpdesk. Quick, simple reporting for fire safety, electrical, HVAC, water, and all FM services." />
      </Helmet>

      <div className="min-h-screen bg-background pt-20 pb-16">
        {/* Hero Section */}
        <section className="py-16 border-b border-border/50">
          <div className="max-w-4xl mx-auto px-6">
            <h1 className="text-5xl font-bold mb-6">Report a Maintenance Issue</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Use this form to log issues directly with our helpdesk team. Available 24/7 for sites, tenants, FM managers, and building contacts across the UK.
            </p>

            <Alert className="mb-6 border-red-500/50 bg-red-500/5">
              <AlertCircle className="h-4 w-4 text-red-600" />
              <AlertDescription className="text-red-600">
                <strong>Life Safety Emergency?</strong> Always call 999 first for fire, flood, or immediate danger. Then notify us.
              </AlertDescription>
            </Alert>

            <Alert className="border-primary/50 bg-primary/5">
              <Phone className="h-4 w-4 text-primary" />
              <AlertDescription>
                <strong>020 4586 5422</strong> Call our 24/7 helpdesk: <span className="font-bold">0800 123 4567</span>
              </AlertDescription>
            </Alert>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-6">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Contact Details */}
              <div className="bg-card border border-border/50 rounded-lg p-8">
                <h2 className="text-2xl font-bold mb-6">Your Details</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">Your Name *</Label>
                    <Input id="name" value={formData.name} onChange={e => setFormData({
                    ...formData,
                    name: e.target.value
                  })} placeholder="John Smith" required />
                  </div>
                  <div>
                    <Label htmlFor="role">You Are *</Label>
                    <Select value={formData.role} onValueChange={value => setFormData({
                    ...formData,
                    role: value
                  })}>
                      <SelectTrigger id="role">
                        <SelectValue placeholder="Select your role" />
                      </SelectTrigger>
                      <SelectContent>
                        {ROLES.map(role => <SelectItem key={role} value={role}>{role}</SelectItem>)}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="company">Company / Building / Site Name *</Label>
                    <Input id="company" value={formData.company} onChange={e => setFormData({
                    ...formData,
                    company: e.target.value
                  })} placeholder="ABC Logistics, Unit 5" required />
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" type="email" value={formData.email} onChange={e => setFormData({
                    ...formData,
                    email: e.target.value
                  })} placeholder="john.smith@company.com" required />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" type="tel" value={formData.phone} onChange={e => setFormData({
                    ...formData,
                    phone: e.target.value
                  })} placeholder="07XXX XXXXXX" />
                  </div>
                  <div>
                    <Label htmlFor="site_location">Site Location *</Label>
                    <Input id="site_location" value={formData.site_location} onChange={e => setFormData({
                    ...formData,
                    site_location: e.target.value
                  })} placeholder="Manchester, M1 1AA" required />
                  </div>
                </div>
              </div>

              {/* Issue Details */}
              <div className="bg-card border border-border/50 rounded-lg p-8">
                <h2 className="text-2xl font-bold mb-6">Issue Details</h2>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="category">Issue Category *</Label>
                      <Select value={formData.category} onValueChange={value => setFormData({
                      ...formData,
                      category: value
                    })}>
                        <SelectTrigger id="category">
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          {CATEGORIES.map(cat => <SelectItem key={cat} value={cat}>{cat}</SelectItem>)}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="priority">Priority *</Label>
                      <Select value={formData.priority} onValueChange={value => setFormData({
                      ...formData,
                      priority: value
                    })}>
                        <SelectTrigger id="priority">
                          <SelectValue placeholder="Select priority" />
                        </SelectTrigger>
                        <SelectContent>
                          {PRIORITIES.map(p => <SelectItem key={p.value} value={p.value}>{p.label}</SelectItem>)}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="asset_reference">Asset / Area Reference *</Label>
                    <Input id="asset_reference" value={formData.asset_reference} onChange={e => setFormData({
                    ...formData,
                    asset_reference: e.target.value
                  })} placeholder="e.g. Fire alarm panel, 3rd floor east wing / AHU Unit 4 / Main entrance door" required />
                    <p className="text-sm text-muted-foreground mt-1">
                      Specify the equipment, room, floor, or location of the issue
                    </p>
                  </div>

                  <div>
                    <Label htmlFor="description">Description of Issue *</Label>
                    <Textarea id="description" value={formData.description} onChange={e => setFormData({
                    ...formData,
                    description: e.target.value
                  })} placeholder="Please describe the issue in detail. Include any error messages, unusual sounds, leaks, or other observations." rows={6} required />
                  </div>
                </div>
              </div>

              {/* Submit */}
              <div className="flex gap-4">
                <Button type="submit" size="lg" disabled={isSubmitting} className="flex-1 md:flex-initial">
                  {isSubmitting ? <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Submitting...
                    </> : 'Submit Issue'}
                </Button>
                <Button type="button" variant="outline" size="lg" onClick={() => navigate('/fm-operations/helpdesk')} disabled={isSubmitting}>
                  Cancel
                </Button>
              </div>

              <p className="text-sm text-muted-foreground">
                By submitting this form, you acknowledge that EntireFM will review your issue and respond as soon as possible. For immediate assistance, please call our 24/7 helpdesk.
              </p>
            </form>
          </div>
        </section>
      </div>
    </>;
}