import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Card } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Helmet } from "react-helmet";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const Contact = () => {
  const [estateType, setEstateType] = useState("");
  const [urgency, setUrgency] = useState("");
  
  return (
    <>
      <Helmet>
        <title>Request a Proposal | EntireFM</title>
        <meta name="description" content="Tell us the problem – we'll build the plan. Get a clear, no-nonsense FM proposal tailored to your facilities management challenges." />
      </Helmet>
      
      <div className="min-h-screen pt-20">
        {/* Hero */}
        <section className="py-24 bg-gradient-to-b from-muted/50 to-white">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-6xl font-light mb-6 underline-accent inline-block">
                Tell Us the Problem — We'll Build the Plan.
              </h1>
              <p className="text-xl text-muted-foreground font-light leading-relaxed">
                Share your FM challenges and we'll present a clear action plan with costs, risks removed, and timelines defined. No waffle. No commitments until you're ready.
              </p>
            </div>
          </div>
        </section>

      {/* Main Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-light mb-6 underline-accent inline-block">
                  Get in touch
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Phone className="w-5 h-5 text-primary mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-light mb-1">24/7 Helpdesk</p>
                      <a href="tel:08001234567" className="text-lg text-primary hover:underline">
                        0800 123 4567
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="w-5 h-5 text-primary mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-light mb-1">Email</p>
                      <a href="mailto:hello@entirefm.co.uk" className="text-lg text-primary hover:underline">
                        hello@entirefm.co.uk
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-primary mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-light mb-1">Head Office</p>
                      <p className="text-sm text-muted-foreground font-light">
                        London Office<br />
                        United Kingdom
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="w-5 h-5 text-primary mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-light mb-1">Office Hours</p>
                      <p className="text-sm text-muted-foreground font-light">
                        Monday - Friday: 8am - 6pm<br />
                        Emergency line: 24/7/365
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <Card className="h-64 bg-muted flex items-center justify-center">
                <p className="text-muted-foreground font-light">Map</p>
              </Card>
            </div>

            {/* Proposal Form */}
            <div className="lg:col-span-3">
              <Card className="p-8">
                <h2 className="text-2xl font-light mb-2 underline-accent inline-block">
                  Request a Proposal
                </h2>
                <p className="text-sm text-muted-foreground font-light mb-6">
                  Insight → Qualification → Relevance. All in 20 seconds.
                </p>
                
                <form className="space-y-8">
                  {/* Step 1: Who */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium border-b border-border pb-2">
                      Step 1 — Who Are We Helping?
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Your Name *</Label>
                        <Input id="name" placeholder="John Smith" required className="mt-2" />
                      </div>
                      <div>
                        <Label htmlFor="company">Company *</Label>
                        <Input id="company" placeholder="Your company name" required className="mt-2" />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="role">Your Role *</Label>
                        <Input id="role" placeholder="e.g. Facilities Manager" required className="mt-2" />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input id="email" type="email" placeholder="you@company.com" required className="mt-2" />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input id="phone" type="tel" placeholder="07XXX XXXXXX" required className="mt-2" />
                    </div>
                  </div>

                  {/* Step 2: Where */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium border-b border-border pb-2">
                      Step 2 — Where Are We Supporting?
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="postcodes">Postcode(s) *</Label>
                        <Input id="postcodes" placeholder="e.g. SW1A 1AA, B1 1AA" required className="mt-2" />
                      </div>
                      <div>
                        <Label htmlFor="estate-type">Estate Type *</Label>
                        <select 
                          id="estate-type"
                          value={estateType}
                          onChange={(e) => setEstateType(e.target.value)}
                          className="mt-2 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                          required
                        >
                          <option value="">Select estate type</option>
                          <option value="single">Single site</option>
                          <option value="multi">Multi-site</option>
                          <option value="uk-wide">UK-wide portfolio</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Step 3: What's Not Working */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium border-b border-border pb-2">
                      Step 3 — What's Not Working Right Now?
                    </h3>
                    <div className="grid md:grid-cols-2 gap-3">
                      {[
                        "Response delays",
                        "Compliance gaps",
                        "Too much reactive spend",
                        "Communication failures",
                        "Asset performance problems",
                        "Tenant/resident complaints",
                        "Brand presentation issues"
                      ].map((issue) => (
                        <div key={issue} className="flex items-center space-x-2">
                          <Checkbox id={issue.toLowerCase().replace(/\s+/g, '-')} />
                          <label
                            htmlFor={issue.toLowerCase().replace(/\s+/g, '-')}
                            className="text-sm font-light cursor-pointer"
                          >
                            {issue}
                          </label>
                        </div>
                      ))}
                    </div>
                    <div>
                      <Label htmlFor="issues-detail">Tell us more about your challenges</Label>
                      <Textarea
                        id="issues-detail"
                        rows={4}
                        placeholder="Be as specific as you like – this helps us build the right plan..."
                        className="mt-2"
                      />
                    </div>
                  </div>

                  {/* Step 4: What Do You Want Better */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium border-b border-border pb-2">
                      Step 4 — What Do You Want Better?
                    </h3>
                    <div className="grid md:grid-cols-2 gap-3">
                      {[
                        "Faster response",
                        "Full compliance control",
                        "Energy efficiency",
                        "Better workplace/customer experience",
                        "SLA reliability",
                        "Cost visibility & stability"
                      ].map((goal) => (
                        <div key={goal} className="flex items-center space-x-2">
                          <Checkbox id={goal.toLowerCase().replace(/\s+/g, '-')} />
                          <label
                            htmlFor={goal.toLowerCase().replace(/\s+/g, '-')}
                            className="text-sm font-light cursor-pointer"
                          >
                            {goal}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Step 5: When */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium border-b border-border pb-2">
                      Step 5 — When Should We Act?
                    </h3>
                    <RadioGroup value={urgency} onValueChange={setUrgency}>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="immediate" id="immediate" />
                        <Label htmlFor="immediate" className="font-light cursor-pointer">
                          Immediately (critical risk)
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="30days" id="30days" />
                        <Label htmlFor="30days" className="font-light cursor-pointer">
                          Within 30 days
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="90days" id="90days" />
                        <Label htmlFor="90days" className="font-light cursor-pointer">
                          Within 90 days
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="exploring" id="exploring" />
                        <Label htmlFor="exploring" className="font-light cursor-pointer">
                          Exploring options
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="flex items-start space-x-2">
                    <Checkbox id="consent" required />
                    <label htmlFor="consent" className="text-xs text-muted-foreground font-light cursor-pointer leading-relaxed">
                      I consent to EntireFM storing my details and contacting me about facilities management services. We won't share your data with third parties.
                    </label>
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Submit Proposal Request
                  </Button>

                  <p className="text-xs text-muted-foreground text-center font-light">
                    You'll receive a thank-you email with helpful resources while we prepare your custom proposal.
                  </p>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Alternative Contact */}
      <section className="py-16 bg-charcoal text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-light mb-4">
            Need immediate support?
          </h2>
          <p className="text-lg text-gray-300 font-light mb-8">
            Our 24/7 helpdesk is always available for emergencies.
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-charcoal hover:bg-gray-100" asChild>
            <a href="tel:08001234567">Call 24/7 Helpdesk: 0800 123 4567</a>
          </Button>
        </div>
      </section>
      </div>
    </>
  );
};

export default Contact;
