import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Phone, Mail, MapPin, Users, Headphones, AlertCircle, Globe } from "lucide-react";
import { Helmet } from "react-helmet";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { ContactPointSchema, OrganizationSchema } from "@/components/shared/SchemaMarkup";
import { useConversionTracking } from "@/hooks/useConversionTracking";

const Contact = () => {
  const { trackPhoneClick } = useConversionTracking();
  const breadcrumbItems = [
    { label: "Contact" }
  ];

  const handlePhoneClick = () => {
    trackPhoneClick();
  };

  const contactMethods = [
    {
      icon: Headphones,
      title: "24/7 Helpdesk",
      subtitle: "Always Answered by a Person",
      description: "No voicemail nonsense. No excuses. Real people, real-time response.",
      action: "Call 0800 123 4567",
      href: "tel:08001234567",
      onClick: handlePhoneClick
    },
    {
      icon: Mail,
      title: "Direct Email Channel",
      subtitle: "Immediate Triage",
      description: "Your email goes straight to the right team. No waiting in queues.",
      action: "hello@entirefm.co.uk",
      href: "mailto:hello@entirefm.co.uk"
    },
    {
      icon: Globe,
      title: "Portal Access",
      subtitle: "For All Existing Clients",
      description: "Live job tracking, compliance dashboard, and asset visibility 24/7.",
      action: "Access Portal",
      href: "#"
    },
    {
      icon: AlertCircle,
      title: "Escalation Line",
      subtitle: "Direct to Senior Leadership",
      description: "Critical issues get director-level attention immediately.",
      action: "Emergency Escalation",
      href: "tel:08001234567"
    }
  ];

  const coverage = [
    "Hard services across all disciplines",
    "Critical compliance work",
    "Reactive emergencies",
    "Multi-site portfolios"
  ];

  return (
    <>
      <Helmet>
        <title>Contact EntireFM | FM Support & Offices</title>
        <meta 
          name="description" 
          content="Contact EntireFM for facilities management support. One number. One team. Zero runaround. 24/7 helpdesk, direct email, portal access, and UK-wide coverage." 
        />
        <link rel="canonical" href="https://entirefm.com/contact" />
      </Helmet>

      <BreadcrumbSchema items={breadcrumbItems} />
      <ContactPointSchema />
      <OrganizationSchema />

      <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
          
          <div className="max-w-6xl mx-auto relative">
            <Breadcrumb items={breadcrumbItems} />
            
            <div className="mt-8 text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                One number. One team.<br />Zero runaround.
              </h1>
              
              <div className="flex flex-wrap gap-4 justify-center mt-8">
                <Button size="lg" className="gap-2">
                  <Headphones className="w-5 h-5" />
                  Speak to Helpdesk — Live
                </Button>
                <Button size="lg" variant="outline" className="gap-2">
                  <MapPin className="w-5 h-5" />
                  Book a Site Visit Today
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Ways to Reach Us Section */}
        <section className="py-16 px-4 bg-background/50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ways to Reach Us
              </h2>
              <p className="text-xl text-muted-foreground">
                No voicemail. No excuses. Just results.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {contactMethods.map((method, index) => (
                <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
                  <method.icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-2xl font-bold mb-1">{method.title}</h3>
                  <p className="text-primary font-semibold mb-3">{method.subtitle}</p>
                  <p className="text-muted-foreground mb-4">{method.description}</p>
                  <Button 
                    variant="outline" 
                    asChild
                    onClick={method.onClick}
                  >
                    <a href={method.href}>{method.action}</a>
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* UK Coverage Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Supporting the UK
                </h2>
                <p className="text-xl text-muted-foreground mb-6">
                  Engineer coverage across the country with central coordination for:
                </p>
                
                <div className="space-y-4">
                  {coverage.map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                      <p className="text-lg">{item}</p>
                    </div>
                  ))}
                </div>

                <p className="text-xl font-bold mt-8 text-primary">
                  We're always local — everywhere you operate.
                </p>
              </div>

              <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Phone className="w-8 h-8 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold mb-1">24/7 Helpdesk</h3>
                      <a href="tel:08001234567" className="text-2xl text-primary hover:underline">
                        0800 123 4567
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className="w-8 h-8 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold mb-1">Email</h3>
                      <a href="mailto:hello@entirefm.co.uk" className="text-lg text-primary hover:underline">
                        hello@entirefm.co.uk
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <MapPin className="w-8 h-8 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold mb-1">Head Office</h3>
                      <p className="text-muted-foreground">
                        London Office<br />
                        United Kingdom
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Users className="w-8 h-8 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold mb-1">Office Hours</h3>
                      <p className="text-muted-foreground">
                        Monday - Friday: 8am - 6pm<br />
                        Emergency line: 24/7/365
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 md:p-12 bg-gradient-to-br from-primary/5 to-accent/5 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Tell us what you need — we'll make it happen.
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Whether it's an emergency, a proposal request, or a strategic conversation with leadership, 
                we're here to help right now.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" className="gap-2">
                  <Headphones className="w-5 h-5" />
                  Call 24/7 Helpdesk
                </Button>
                <Button size="lg" variant="outline" className="gap-2">
                  <Mail className="w-5 h-5" />
                  Request a Proposal
                </Button>
              </div>
            </Card>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
