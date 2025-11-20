import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Card } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-b from-muted/50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-light mb-6 underline-accent inline-block">
              Let's talk about your FM challenges.
            </h1>
            <p className="text-xl text-muted-foreground font-light leading-relaxed">
              Tell us what's not working with your current setup. We'll come back with a clear, practical plan.
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

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <Card className="p-8">
                <h2 className="text-2xl font-light mb-6 underline-accent inline-block">
                  Request a proposal
                </h2>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Your Name *
                      </label>
                      <Input id="name" placeholder="John Smith" required />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium mb-2">
                        Company *
                      </label>
                      <Input id="company" placeholder="Your company name" required />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="role" className="block text-sm font-medium mb-2">
                        Your Role
                      </label>
                      <Input id="role" placeholder="e.g. Facilities Manager" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address *
                      </label>
                      <Input id="email" type="email" placeholder="you@company.com" required />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        Phone Number *
                      </label>
                      <Input id="phone" type="tel" placeholder="07XXX XXXXXX" required />
                    </div>
                    <div>
                      <label htmlFor="locations" className="block text-sm font-medium mb-2">
                        Site Locations
                      </label>
                      <Input id="locations" placeholder="e.g. London, Birmingham" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-3">
                      Services Required
                    </label>
                    <div className="grid md:grid-cols-2 gap-3">
                      {[
                        "Hard Services & M&E",
                        "Compliance & Life Safety",
                        "Soft Services",
                        "Projects & Small Works",
                        "Emergency Support",
                        "Integrated FM (TFM)"
                      ].map((service) => (
                        <div key={service} className="flex items-center space-x-2">
                          <Checkbox id={service.toLowerCase().replace(/\s+/g, '-')} />
                          <label
                            htmlFor={service.toLowerCase().replace(/\s+/g, '-')}
                            className="text-sm font-light cursor-pointer"
                          >
                            {service}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Tell us what's not working with your current FM setup *
                    </label>
                    <Textarea
                      id="message"
                      rows={6}
                      placeholder="Be as specific as you like – response times, communication, compliance issues, costs..."
                      required
                    />
                  </div>

                  <div className="flex items-start space-x-2">
                    <Checkbox id="consent" required />
                    <label htmlFor="consent" className="text-xs text-muted-foreground font-light cursor-pointer leading-relaxed">
                      I consent to EntireFM storing my details and contacting me about facilities management services. We won't share your data with third parties.
                    </label>
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Send Proposal Request
                  </Button>

                  <p className="text-xs text-muted-foreground text-center font-light">
                    We'll come back with a clear, no-nonsense action plan – not a generic brochure.
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
  );
};

export default Contact;
