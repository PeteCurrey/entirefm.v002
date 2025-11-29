import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Shield, Zap, Target, Users, Building2, TrendingUp, Award, Rocket } from "lucide-react";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { SchemaMarkup } from "@/components/shared/SchemaMarkup";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

const About = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Our Story" }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "Our Story - Built by Operators, Not Bureaucrats",
    "description": "EntireFM was built by operators who saw the FM industry's failures and created an alternative. Accountable, agile, and relentless facilities management.",
    "mainEntity": {
      "@type": "Organization",
      "name": "EntireFM",
      "description": "Facilities management built around accountability, compliance, and delivery",
      "url": "https://entirefm.com"
    }
  };

  const problems = [
    "Blame suppliers",
    "Hide behind process",
    "Move slow",
    "Deliver excuses instead of execution"
  ];

  const principles = [
    "Accountability that doesn't disappear through layers",
    "Compliance that lives in the open",
    "Engineers that actually fix things",
    "Directors who answer the phone",
    "Tech that shows truth, not vanity metrics"
  ];

  const cultureCode = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Own it",
      description: "No passing the buck"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Move fast",
      description: "Delays are expensive"
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Be world-class",
      description: "Every visit matters"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Stay humble",
      description: "Listen, fix, improve"
    }
  ];

  const milestones = [
    {
      year: "2009",
      title: "The Beginning",
      description: "Founded as a modest building maintenance company serving local businesses and letting agents",
      icon: <Building2 className="h-5 w-5" />
    },
    {
      year: "2011-2013",
      title: "Building Reputation",
      description: "Exceptional service captured attention of larger clients who recognized our value",
      icon: <TrendingUp className="h-5 w-5" />
    },
    {
      year: "2014-2017",
      title: "Rapid Expansion",
      description: "Client base grew to include multinational firms, consultancies, logistics companies, and leading supermarket chains",
      icon: <Rocket className="h-5 w-5" />
    },
    {
      year: "2018-2021",
      title: "National Presence",
      description: "Established network of regional offices with forward-thinking professionals pushing industry boundaries",
      icon: <Award className="h-5 w-5" />
    },
    {
      year: "2022-Present",
      title: "Industry Leader",
      description: "Nationwide leader providing comprehensive FM services across diverse industries with unwavering commitment to excellence",
      icon: <Target className="h-5 w-5" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>Our Story — Built by Operators, Not Bureaucrats | EntireFM</title>
        <meta name="description" content="EntireFM was built by operators who saw the FM industry's failures and created an alternative. Accountable, agile, and relentless facilities management." />
        <link rel="canonical" href="https://entirefm.com/about" />
      </Helmet>
      <BreadcrumbSchema items={breadcrumbItems} />
      <SchemaMarkup schema={schema} />

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative py-20 px-4 bg-gradient-to-br from-primary/10 via-background to-background">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <Breadcrumb items={breadcrumbItems} />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              We didn't come from FM.<br />We came from fixing FM.
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              A business born from frustration — and driven by delivery.
            </p>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-20 px-4 bg-background">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left Column - Story Text */}
              <div className="space-y-6">
                <div className="border-b-2 border-primary pb-2 mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground">EntireFM Our Story</h2>
                </div>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  EntireFM is a proudly independent service provider specialising in facilities management and support services. Our journey began in 2009 as a modest building maintenance company, catering to local businesses and letting agents.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  From the very start, we focused on delivering exceptional service with honesty, reliability and a commitment to quality. It didn't take long for EntireFM to stand out in the industry, capturing the attention of larger clients who recognised the value we brought to their operations. Many of these clients remain our trusted partners today, a testament to the enduring relationships we've built.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  As our reputation grew, so did our client base. What started as a local business soon expanded to include multinational property management firms, consultancy companies, motorway service stations, logistics and manufacturing companies, and leading supermarket chains to name just a few. Despite our growth, the ethos that defined us in those early days continues to drive everything we do: delivering bespoke, personalised services tailored to each client's unique needs. We take pride in integrating seamlessly into our clients' teams, always going the extra mile to achieve excellence in every task.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Today, EntireFM operates with a network of regional offices and a strong, dynamic team of forward thinking professionals. Our people share a common passion for pushing the boundaries of the facilities management industry, ensuring EntireFM remains at the forefront of innovation and service delivery. Our commitment to progress is matched by our dedication to being a responsible employer and an active supporter of the local communities we serve.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Now a nationwide leader in facilities management, EntireFM provides comprehensive support services across a wide array of industries. We thrive in the fast paced world of facilities management, where no two days are ever the same. Our team's depth of expertise ensures that we can adapt quickly to meet the demands of new clients while maintaining the high standards of service our longstanding partners have come to expect.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Whether managing complex property portfolios, maintaining critical infrastructure, or providing tailored support solutions, EntireFM is your trusted partner for facilities management. By staying true to our values and continually evolving, we're shaping a future where excellence is the standard and client satisfaction is the ultimate measure of success.
                </p>
              </div>

              {/* Right Column - Featured Quote */}
              <div className="lg:sticky lg:top-24">
                <div className="bg-gradient-to-br from-muted/50 to-muted/30 border-l-4 border-primary p-8 rounded-lg">
                  <blockquote className="text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed text-muted-foreground">
                    "we aim to deliver a{" "}
                    <span className="text-primary font-semibold">bespoke</span>{" "}
                    facilities management solution to our clients, integrate in to their team and go the extra mile to achieve{" "}
                    <span className="text-primary font-semibold">excellence</span>"
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-muted/30 to-background">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Our Journey</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                From a local maintenance company to a nationwide FM leader — driven by excellence at every step
              </p>
            </div>

            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary/20 via-primary/40 to-primary/20 hidden md:block" />

              {/* Timeline Items */}
              <div className="space-y-12">
                {milestones.map((milestone, index) => {
                  const isEven = index % 2 === 0;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className={`flex flex-col md:flex-row gap-8 items-center ${
                        isEven ? "md:flex-row-reverse" : ""
                      }`}
                    >
                      {/* Content */}
                      <div className={`flex-1 ${isEven ? "md:text-right" : "md:text-left"} text-center`}>
                        <motion.div
                          initial={{ scale: 0.9 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                          className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors shadow-sm"
                        >
                          <div className={`flex items-center gap-3 mb-3 ${
                            isEven ? "md:justify-end justify-center" : "md:justify-start justify-center"
                          }`}>
                            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                              {milestone.icon}
                            </div>
                            <span className="text-2xl font-bold text-primary">{milestone.year}</span>
                          </div>
                          <h3 className="text-xl font-bold mb-2 text-foreground">{milestone.title}</h3>
                          <p className="text-muted-foreground">{milestone.description}</p>
                        </motion.div>
                      </div>

                      {/* Center Dot */}
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.1 + 0.1 }}
                        className="relative z-10"
                      >
                        <div className="w-6 h-6 rounded-full bg-primary border-4 border-background shadow-lg" />
                      </motion.div>

                      {/* Spacer for alignment */}
                      <div className="flex-1 hidden md:block" />
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* The Problem We Saw */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">The Problem We Saw</h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-center mb-8 font-semibold">
                Big FM providers:
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {problems.map((problem, index) => (
                  <div key={index} className="p-6 bg-card rounded-lg border border-destructive/20">
                    <p className="text-lg font-medium text-destructive">{problem}</p>
                  </div>
                ))}
              </div>
              <div className="text-center space-y-4">
                <p className="text-xl font-semibold">
                  Meanwhile, the client suffers —
                </p>
                <p className="text-lg text-muted-foreground">
                  operations wobble, compliance drifts, people complain.
                </p>
                <p className="text-xl font-bold text-foreground">
                  We couldn't watch that mess anymore.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* So We Built the Alternative */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              So We Built the Alternative
            </h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-center mb-8 font-semibold">
                We built EntireFM around what FM should be:
              </p>
              <div className="space-y-4 mb-8">
                {principles.map((principle, index) => (
                  <div key={index} className="flex items-start gap-4 p-6 bg-background rounded-lg border">
                    <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary font-bold">✓</span>
                    </div>
                    <p className="text-lg">{principle}</p>
                  </div>
                ))}
              </div>
              <div className="text-center p-6 bg-primary/10 rounded-lg border border-primary/20">
                <p className="text-xl font-bold">
                  There's no "that's not our department."<br />
                  There's only the result.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Culture Code */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Culture Code
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {cultureCode.map((item, index) => (
                <div key={index} className="p-6 bg-card rounded-lg border text-center hover:border-primary transition-colors">
                  <div className="flex justify-center text-primary mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
            <p className="text-2xl text-center font-bold">
              Accountable. Agile. Relentless.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-primary/10 via-background to-background">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Meet the leadership that actually leads
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Book a call with a Director and experience the difference accountability makes.
            </p>
            <Button asChild size="lg">
              <Link to="/contact">Book a Call with a Director</Link>
            </Button>
          </div>
        </section>

        {/* Internal Links Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-6">Learn More About Us</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              <Button asChild variant="outline" className="h-auto py-4">
                <Link to="/services">Our Services</Link>
              </Button>
              <Button asChild variant="outline" className="h-auto py-4">
                <Link to="/technology">Our Technology</Link>
              </Button>
              <Button asChild variant="outline" className="h-auto py-4">
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;