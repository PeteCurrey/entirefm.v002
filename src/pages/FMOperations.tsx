import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowRight, Settings, Shield, Users, TrendingUp, FileText, Headphones, Rocket, Wrench, Clock, AlertTriangle } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { EnhancedGlobalSearch } from '@/components/shared/EnhancedGlobalSearch';
import { Breadcrumb } from '@/components/shared/Breadcrumb';
import { RelatedServices } from '@/components/seo/RelatedServices';

const FMOperations = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "FM Operations" },
  ];

  const operationalServices = [
    {
      title: 'Asset Lifecycle Management',
      description: 'Comprehensive asset tracking and lifecycle optimization from acquisition through disposal, maximizing ROI.',
      icon: Settings,
      link: '/fm-operations/asset-lifecycle',
      features: ['Asset registers', 'Condition monitoring', 'Replacement planning', 'Performance tracking'],
      badge: 'Strategic'
    },
    {
      title: 'PPM Delivery',
      description: 'Planned preventive maintenance programs designed to minimize downtime and extend asset life.',
      icon: Wrench,
      link: '/fm-operations/ppm-delivery',
      features: ['Scheduled maintenance', 'Compliance tracking', 'Route optimization', 'Digital records'],
      badge: 'Core Service'
    },
    {
      title: 'Reactive Maintenance',
      description: '24/7 emergency response and reactive repair services with guaranteed response times.',
      icon: Clock,
      link: '/fm-operations/reactive-maintenance',
      features: ['24/7 helpdesk', 'Emergency response', 'First-time fix', 'Real-time tracking'],
      badge: 'Critical'
    },
    {
      title: 'Helpdesk & Support',
      description: 'Centralized FM helpdesk providing single point of contact for all facility management needs.',
      icon: Headphones,
      link: '/fm-operations/helpdesk',
      features: ['Single point of contact', 'Multi-channel support', 'Job tracking', 'SLA management'],
      badge: 'Essential'
    },
    {
      title: 'Business Continuity',
      description: 'Comprehensive business continuity planning and disaster recovery strategies for operational resilience.',
      icon: Shield,
      link: '/fm-operations/business-continuity',
      features: ['Risk assessment', 'Continuity plans', 'Testing protocols', 'Recovery procedures'],
      badge: 'Risk Management'
    },
    {
      title: 'Occupier Experience',
      description: 'Enhance workplace satisfaction through proactive occupier engagement and service excellence.',
      icon: Users,
      link: '/fm-operations/occupier-experience',
      features: ['Satisfaction surveys', 'Service excellence', 'Communication plans', 'Feedback systems'],
      badge: 'People-Focused'
    },
    {
      title: 'FM Strategy & Consulting',
      description: 'Strategic facilities management consulting to optimize operations and reduce total cost of ownership.',
      icon: TrendingUp,
      link: '/fm-operations/fm-strategy',
      features: ['Strategic reviews', 'Benchmarking', 'Cost optimization', 'Performance improvement'],
      badge: 'Advisory'
    },
    {
      title: 'Mobilisation & Transition',
      description: 'Seamless contract mobilization and provider transitions with zero disruption to operations.',
      icon: Rocket,
      link: '/fm-operations/mobilisation',
      features: ['Transition planning', 'TUPE support', 'Data migration', 'Handover protocols'],
      badge: 'Transition'
    },
    {
      title: 'Tender Support',
      description: 'Expert tender preparation and bid support services to secure optimal facilities management contracts.',
      icon: FileText,
      link: '/fm-operations/tender-support',
      features: ['Tender writing', 'Cost modeling', 'Compliance checks', 'Bid reviews'],
      badge: 'Procurement'
    }
  ];

  const stats = [
    { label: 'Average Response Time', value: '< 2 hours' },
    { label: 'First-Time Fix Rate', value: '87%' },
    { label: 'Client Satisfaction', value: '4.8/5' },
    { label: 'Assets Under Management', value: '50,000+' }
  ];

  return (
    <>
      <Helmet>
        <title>FM Operations | PPM, Helpdesk & Asset Management | EntireFM</title>
        <meta 
          name="description" 
          content="Expert FM operations including PPM delivery, 24/7 helpdesk, reactive maintenance, asset lifecycle management & mobilisation. Proven service excellence across UK portfolios." 
        />
        <meta name="keywords" content="FM operations, PPM delivery, facilities helpdesk, reactive maintenance, asset lifecycle management, mobilisation, business continuity, occupier experience" />
      </Helmet>

      <Breadcrumb items={breadcrumbItems} />

      <div className="min-h-screen bg-background pt-20">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-4">FM Operations Hub</Badge>
              <h1 className="text-4xl md:text-5xl font-light mb-6">
                FM Operations & Service Delivery Excellence
              </h1>
              <p className="text-xl text-muted-foreground font-light leading-relaxed mb-8 max-w-3xl mx-auto">
                From strategic planning to day-to-day operations, our comprehensive FM services 
                deliver reliability, compliance, and value across your entire property portfolio.
              </p>
              
              {/* Search Bar */}
              <div className="flex justify-center mb-8">
                <div className="w-full max-w-2xl">
                  <EnhancedGlobalSearch />
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/request-proposal">
                  <Button size="lg">
                    Request Proposal
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline">
                    Speak to Operations Team
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 border-y border-border">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-light text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground font-light">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-light mb-4 underline-accent inline-block">
                Our Operational Services
              </h2>
              <p className="text-lg text-muted-foreground font-light leading-relaxed">
                Comprehensive facilities management operations covering strategic planning, 
                maintenance delivery, and occupier experience excellence.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {operationalServices.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <Card key={index} className="p-6 hover-lift group transition-all duration-300">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <Badge variant="secondary" className="text-xs">{service.badge}</Badge>
                    </div>
                    
                    <h3 className="text-xl font-light mb-3 underline-accent group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-sm text-muted-foreground mb-4 font-light leading-relaxed">
                      {service.description}
                    </p>

                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="text-sm flex items-start font-light">
                          <span className="text-primary mr-2 mt-1">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Link 
                      to={service.link}
                      className="inline-flex items-center text-sm text-primary hover:text-primary/80 transition-colors group-hover:translate-x-1 duration-300"
                    >
                      Learn more
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Emergency Response CTA */}
        <section className="py-16 border-y border-border bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <AlertTriangle className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                24/7 Emergency Support
              </h2>
              <p className="text-lg text-muted-foreground font-light leading-relaxed mb-8 max-w-2xl mx-auto">
                Our reactive maintenance team is available around the clock to handle emergencies 
                and critical issues. Guaranteed response times and expert resolution.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/services/emergency-response">
                  <Button size="lg">
                    Emergency Services
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/fm-operations/reactive-maintenance">
                  <Button size="lg" variant="outline">
                    Reactive Maintenance
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-light mb-4 underline-accent inline-block">
                Our Operational Approach
              </h2>
              <p className="text-lg text-muted-foreground font-light leading-relaxed">
                A structured methodology ensuring consistent service delivery and continuous improvement.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {[
                { step: '01', title: 'Plan', description: 'Strategic planning and resource allocation' },
                { step: '02', title: 'Deploy', description: 'Seamless mobilisation and implementation' },
                { step: '03', title: 'Deliver', description: 'Consistent operational excellence' },
                { step: '04', title: 'Optimize', description: 'Continuous improvement and refinement' }
              ].map((phase, index) => (
                <div key={index} className="text-center">
                  <div className="text-5xl font-light text-primary/30 mb-4">{phase.step}</div>
                  <h3 className="text-xl font-light mb-2">{phase.title}</h3>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed">
                    {phase.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Services - Silo Aware */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <RelatedServices 
                currentUrl="/fm-operations"
                title="Related FM Operations"
              />
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-gradient-to-br from-primary/5 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-light mb-6 underline-accent inline-block">
                Ready to Transform Your FM Operations?
              </h2>
              <p className="text-lg text-muted-foreground font-light leading-relaxed mb-8">
                Let our operations team assess your current setup and propose improvements 
                that deliver measurable value and operational efficiency.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/request-proposal">
                  <Button size="lg">
                    Request Operations Assessment
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/case-studies">
                  <Button size="lg" variant="outline">
                    View Case Studies
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default FMOperations;
