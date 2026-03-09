import { Helmet } from "react-helmet";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Wrench, Headphones, UserCog, MapPin, Clock } from "lucide-react";

const Careers = () => {
  const benefits = [
    "Competitive salaries paid on time, every time",
    "Company van and tools for field engineers",
    "Training and professional development",
    "Career progression opportunities",
    "Modern CAFM and mobile tools",
    "Supportive team environment",
    "Employee assistance programme",
    "Company pension scheme"
  ];

  const openRoles = [
    {
      title: "Multi-Skilled Building Services Engineer",
      location: "London & South East",
      type: "Permanent",
      category: "Engineers",
      description: "PPM and reactive maintenance across commercial sites. Mechanical and electrical skills required."
    },
    {
      title: "Helpdesk Coordinator",
      location: "Office-based (London)",
      type: "Permanent",
      category: "Helpdesk",
      description: "First-line support for clients and engineers. CAFM experience beneficial but not essential."
    },
    {
      title: "Electrical Maintenance Engineer",
      location: "Midlands",
      type: "Permanent",
      category: "Engineers",
      description: "Electrical maintenance across industrial and logistics sites. 18th Edition required."
    },
    {
      title: "Account Manager",
      location: "Remote with travel",
      type: "Permanent",
      category: "Management",
      description: "Client relationship management, site audits, service delivery oversight. FM background required."
    },
    {
      title: "HVAC Engineer",
      location: "Manchester & North West",
      type: "Permanent",
      category: "Engineers",
      description: "Planned and reactive HVAC maintenance. F-Gas certification preferred."
    },
    {
      title: "Mobile Plumber",
      location: "Various UK locations",
      type: "Permanent",
      category: "Engineers",
      description: "Commercial plumbing across diverse sites. Valid driving licence essential."
    }
  ];

  const categories = [
    {
      icon: Wrench,
      title: "Engineers & Technicians",
      description: "Multi-skilled, electrical, mechanical, HVAC, plumbing, fabric maintenance"
    },
    {
      icon: Headphones,
      title: "Helpdesk & Admin",
      description: "Call handling, job coordination, client support, CAFM administration"
    },
    {
      icon: UserCog,
      title: "Supervisors & Managers",
      description: "Team leadership, account management, contract delivery, quality assurance"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-b from-charcoal to-charcoal-light text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-light mb-6 underline-accent inline-block">
              Join an FM company that actually invests in its team.
            </h1>
            <p className="text-xl text-gray-300 font-light leading-relaxed">
              No zero-hours contracts. No chasing payments. Just professional development, modern tools, and real support.
            </p>
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
              What it's like to work at EntireFM
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground font-light leading-relaxed">
              <p>
                We're an owner-led business, which means decisions get made quickly and common sense usually wins. If you've worked for big corporate FM providers, you'll notice the difference immediately.
              </p>
              <p>
                Our engineers aren't just a number on a spreadsheet. We invest in training, provide modern tools and vehicles, and actually listen when you tell us something isn't working.
              </p>
              <p>
                Our helpdesk and admin teams have the autonomy to solve problems without escalating through five layers of management. If you're good at your job, we'll trust you to do it.
              </p>
              <p>
                Safety and compliance aren't just corporate buzzwords here – they're how we operate every day. Proper RAMS, documented procedures, and a genuine commitment to getting everyone home safely.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Role Categories */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-light mb-12 text-center underline-accent inline-block">
            Role categories
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <Card key={index} className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <category.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-light mb-3">{category.title}</h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">
                  {category.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-light mb-12 text-center underline-accent inline-block">
              What you can expect
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <span className="text-primary mr-3 mt-1">✓</span>
                  <span className="text-foreground font-light">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-light mb-12 text-center underline-accent inline-block">
            Current opportunities
          </h2>
          <div className="space-y-4 max-w-4xl mx-auto">
            {openRoles.map((role, index) => (
              <Card key={index} className="p-6 hover-lift">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-grow">
                    <div className="flex items-start gap-3 mb-3">
                      <h3 className="text-xl font-light">{role.title}</h3>
                      <Badge variant="secondary" className="font-light text-xs">
                        {role.category}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground font-light mb-3">
                      {role.description}
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {role.location}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {role.type}
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" className="whitespace-nowrap">
                    View Details
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Speculative Applications */}
      <section className="py-16 bg-secondary text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6">
            Don't see the right role?
          </h2>
          <p className="text-lg text-gray-200 font-light max-w-2xl mx-auto mb-8 leading-relaxed">
            We're always interested in hearing from experienced FM professionals. Send us your CV and tell us what you're looking for.
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-secondary hover:bg-gray-100">
            Submit Speculative Application
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Careers;
