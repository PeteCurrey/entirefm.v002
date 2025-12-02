import { Helmet } from "react-helmet";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  FileText, 
  CheckCircle, 
  Shield, 
  ClipboardCheck, 
  FileCheck,
  ArrowLeft
} from "lucide-react";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const CompliancePackRequest = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  const packContents = [
    { icon: Shield, title: "Statutory Compliance Overview", description: "Summary of RRO, Electricity at Work, Gas Safety, ACOP L8 obligations" },
    { icon: ClipboardCheck, title: "PPM Schedule Template", description: "Sample preventive maintenance planning document" },
    { icon: FileCheck, title: "Audit Documentation", description: "Example certificate tracking and remedial action logs" },
    { icon: FileText, title: "Risk Assessment Framework", description: "RAMS review and contractor control procedures" }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.email.trim() || !formData.company.trim()) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase.from("contact_submissions").insert({
        name: formData.name.trim(),
        email: formData.email.trim(),
        company: formData.company.trim(),
        message: formData.message.trim() || "Request for Sample Compliance Pack",
        subject: "Sample Compliance Pack Request",
        source_page: "/compliance-pack"
      });

      if (error) throw error;

      setIsSubmitted(true);
      toast({
        title: "Request submitted",
        description: "We'll send your compliance pack shortly."
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Sample Compliance Pack | EntireFM</title>
        <meta 
          name="description" 
          content="Request our sample compliance pack to see how EntireFM manages statutory obligations, PPM planning, and audit documentation." 
        />
        <link rel="canonical" href="https://entirefm.com/compliance-pack" />
      </Helmet>
      <BreadcrumbSchema items={[
        { label: "Home", href: "/" },
        { label: "Why EntireFM", href: "/why-entirefm" },
        { label: "Sample Compliance Pack" }
      ]} />

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link 
              to="/why-entirefm" 
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Why EntireFM
            </Link>

            <h1 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">
              Sample Compliance Pack
            </h1>
            <p className="text-xl text-muted-foreground font-light leading-relaxed mb-12">
              See how we document and manage compliance across our clients' estates. 
              Request a sample pack to understand our approach to statutory obligations and audit readiness.
            </p>

            {/* What's Included */}
            <div className="mb-12">
              <h2 className="text-2xl font-light mb-6">What's Included</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {packContents.map((item, index) => (
                  <Card key={index} className="bg-card/50">
                    <CardContent className="p-5 flex gap-4">
                      <item.icon className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-medium mb-1">{item.title}</h3>
                        <p className="text-sm text-muted-foreground font-light">{item.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Request Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-medium">Request Your Copy</CardTitle>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-medium mb-2">Request Received</h3>
                    <p className="text-muted-foreground font-light mb-6">
                      We'll send your sample compliance pack to {formData.email} shortly.
                    </p>
                    <Button asChild variant="outline">
                      <Link to="/why-entirefm">Return to Why EntireFM</Link>
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium mb-1.5 block">Name *</label>
                        <Input
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Your name"
                          maxLength={100}
                          required
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-1.5 block">Email *</label>
                        <Input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="you@company.com"
                          maxLength={255}
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-1.5 block">Company *</label>
                      <Input
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Your company name"
                        maxLength={100}
                        required
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-1.5 block">Additional Notes</label>
                      <Textarea
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Any specific compliance areas you'd like to see covered?"
                        rows={3}
                        maxLength={1000}
                      />
                    </div>
                    <Button type="submit" disabled={isSubmitting} className="w-full md:w-auto">
                      {isSubmitting ? "Submitting..." : "Request Compliance Pack"}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default CompliancePackRequest;
