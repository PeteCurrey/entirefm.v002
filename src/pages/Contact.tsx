import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Users, Headphones, MessageCircle, Globe, Send, Loader2 } from "lucide-react";
import { Helmet } from "react-helmet";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { ContactPointSchema, OrganizationSchema } from "@/components/shared/SchemaMarkup";
import { useConversionTracking } from "@/hooks/useConversionTracking";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { z } from "zod";
const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  phone: z.string().trim().max(20, "Phone must be less than 20 characters").optional(),
  company: z.string().trim().max(100, "Company name must be less than 100 characters").optional(),
  message: z.string().trim().min(1, "Message is required").max(2000, "Message must be less than 2000 characters"),
});
const Contact = () => {
  const { trackPhoneClick } = useConversionTracking();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  // Parallax effect for hero section
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.6]);
  const blur = useTransform(scrollYProgress, [0, 1], [0, 8]);
  const breadcrumbItems = [
    {
      label: "Contact",
    },
  ];
  const handlePhoneClick = () => {
    trackPhoneClick();
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Validate form data
      const validatedData = contactSchema.parse(formData);
      setSubmitting(true);
      const { error } = await supabase.functions.invoke("submit-contact", {
        body: {
          ...validatedData,
          source_page: window.location.pathname,
        },
      });
      if (error) throw error;
      toast.success("Thanks – your enquiry has been received. Our FM team will be in touch shortly.");

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const firstError = error.errors[0];
        toast.error(firstError.message);
      } else {
        console.error("Error submitting contact form:", error);
        toast.error("Something went wrong submitting the form. Please try again or email enquiries@entirefm.com");
      }
    } finally {
      setSubmitting(false);
    }
  };
  const contactMethods = [
    {
      icon: Headphones,
      title: "24/7 Helpdesk",
      subtitle: "24/7 Maintenance Support & Site Monitoring",
      description: "Report maintenance issues and get real-time updates on your requests.",
      action: "Report an Issue",
      href: "/fm-operations/helpdesk",
    },
    {
      icon: Mail,
      title: "Send us an Email",
      subtitle: "We'll Get Back To You",
      description: "Your email goes straight to the right team. No waiting in queues.",
      action: "hello@entirefm.com",
      href: "mailto:hello@entirefm.com",
    },
    {
      icon: Globe,
      title: "Portal Access",
      subtitle: "For All Existing Clients",
      description: "Live job tracking, compliance dashboard, and asset visibility 24/7.",
      action: "Access Portal",
      href: "https://portal.entirefm.com",
      external: true,
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      subtitle: "Real-Time Support",
      description: "Connect with our team instantly for quick questions and support.",
      action: "Start Chat",
      href: "#live-chat",
    },
  ];
  const coverage = [
    "Hard services across all disciplines",
    "Critical compliance work",
    "Reactive emergencies",
    "Multi-site portfolios",
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

      <div className="min-h-screen bg-gradient-to-b from-background to-muted/20 pt-20">
        {/* Hero Section */}
        <section ref={heroRef} className="relative py-16 px-4 overflow-hidden">
          {/* Background Image with Parallax */}
          <motion.div
            className="absolute inset-0 bg-cover bg-center"
            style={
              {
                backgroundImage: "url(/images/contact-hero.jpg)",
                y,
                opacity,
                filter: blur.get() !== undefined ? `blur(${blur.get()}px)` : "none",
              } as any
            }
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />

          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.2,
                duration: 0.6,
              }}
            >
              <Breadcrumb items={breadcrumbItems} />
            </motion.div>

            <div className="mt-8 text-center max-w-4xl mx-auto">
              <motion.h1
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.3,
                  duration: 0.8,
                  ease: "easeOut",
                }}
                className="text-5xl md:text-6xl font-bold mb-6 text-white"
              >
                Get in Touch
              </motion.h1>

              <motion.div
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.5,
                  duration: 0.8,
                  ease: "easeOut",
                }}
                className="flex flex-wrap gap-4 justify-center mt-8"
              >
                <Button size="lg" className="gap-2 hover-scale" asChild>
                  <a href="/fm-operations/helpdesk">
                    <Headphones className="w-5 h-5" />
                    Speak to Helpdesk — Live
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="gap-2 hover-scale"
                  onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })}
                >
                  <MapPin className="w-5 h-5" />
                  Book a Site Visit Today
                </Button>
              </motion.div>
            </div>

            {/* Animated Scroll Indicator */}
            <motion.div
              initial={{
                opacity: 0,
                y: -20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 1,
                duration: 0.6,
              }}
              className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
              <motion.div
                animate={{
                  y: [0, 8, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-6 h-10 border-2 border-white/60 rounded-full flex items-start justify-center p-2 cursor-pointer hover:border-white/80 transition-colors"
                onClick={() =>
                  window.scrollTo({
                    top: window.innerHeight * 0.7,
                    behavior: "smooth",
                  })
                }
              >
                <motion.div
                  className="w-1 h-3 bg-white/70 rounded-full"
                  animate={{
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Ways to Reach Us Section */}
        <section className="py-16 px-4 bg-background/50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ways to Reach Us</h2>
              <p className="text-xl text-muted-foreground">Choose the best way to connect with our team.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {contactMethods.map((method, index) => (
                <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
                  <method.icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-2xl font-bold mb-1">{method.title}</h3>
                  <p className="text-primary font-semibold mb-3">{method.subtitle}</p>

                  <Button variant="outline" asChild>
                    <a
                      href={method.href}
                      {...((method as any).external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    >
                      {method.action}
                    </a>
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
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Nationwide Facilities Management</h2>
                <p className="text-lg text-muted-foreground mb-6">
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

                <p className="text-lg font-semibold mt-8 text-primary">We're always local — everywhere you operate.</p>
              </div>

              <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-bold mb-1">Email</h3>
                      <a className="text-primary hover:underline" href="mailto:hello@entirefm.com">
                        hello@entirefm.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-bold mb-1">Head Office</h3>
                      <p className="text-muted-foreground">
                        2 Old Brick Works Lane
                        <br />
                        Chesterfield S41 7JD
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Users className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-bold mb-1">Office Hours</h3>
                      <p className="text-muted-foreground">
                        Monday – Friday: 8am – 6pm
                        <br />
                        Helpdesk: 24/7/365
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contact-form" className="py-16 px-4 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 md:p-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Send Us a Message</h2>
                <p className="text-xl text-muted-foreground">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold mb-2">
                      Name *
                    </label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          name: e.target.value,
                        })
                      }
                      placeholder="Your name"
                      required
                      maxLength={100}
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          email: e.target.value,
                        })
                      }
                      placeholder="your@email.com"
                      required
                      maxLength={255}
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold mb-2">
                      Phone
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          phone: e.target.value,
                        })
                      }
                      placeholder="Your phone number"
                      maxLength={20}
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold mb-2">
                      Company
                    </label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          company: e.target.value,
                        })
                      }
                      placeholder="Your company name"
                      maxLength={100}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        message: e.target.value,
                      })
                    }
                    placeholder="Tell us how we can help..."
                    required
                    className="min-h-[150px]"
                    maxLength={2000}
                  />
                  <p className="text-sm text-muted-foreground mt-1">{formData.message.length}/2000 characters</p>
                </div>

                <div className="flex justify-center">
                  <Button type="submit" size="lg" disabled={submitting} className="gap-2">
                    {submitting ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        Send Message
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </Card>

            <div className="mt-8 text-center">
              <p className="text-muted-foreground mb-4">Need to report an issue? We're here 24/7</p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" variant="outline" className="gap-2" asChild>
                  <Link to="/fm-operations/helpdesk">
                    <Headphones className="w-5 h-5" />
                    Report an Issue
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="gap-2" asChild>
                  <a href="mailto:hello@entirefm.com">
                    <Mail className="w-5 h-5" />
                    Email Us
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default Contact;
