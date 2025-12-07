import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Activity, 
  Shield, 
  Eye, 
  FileText, 
  Database, 
  TrendingUp,
  AlertTriangle,
  BarChart3,
  Zap,
  Brain,
  GitBranch,
  CheckCircle2
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import RadarAnimation from "@/components/platform/RadarAnimation";

const Platform = () => {
  const heroPoints = [
    "Live job tracking",
    "Real-time compliance",
    "Director-level oversight",
    "Audit-ready documentation",
    "Client portal access"
  ];

  const clientFeatures = [
    {
      icon: Activity,
      title: "Live Job Tracking",
      description: "See real-time updates on every task, engineer status, progress and notes."
    },
    {
      icon: Shield,
      title: "PPM Compliance Dashboard",
      description: "Red/amber/green overview across all assets and statutory obligations."
    },
    {
      icon: FileText,
      title: "Document Library",
      description: "Service sheets, certificates, RAMS, reports — all filed automatically."
    },
    {
      icon: Database,
      title: "Asset Register",
      description: "Detailed asset profile, service history and lifecycle information."
    }
  ];

  const directorFeatures = [
    { icon: TrendingUp, label: "Failure rate trends" },
    { icon: AlertTriangle, label: "Risk scoring" },
    { icon: BarChart3, label: "Spend analysis" },
    { icon: Zap, label: "Reactive-to-PPM ratio" },
    { icon: Database, label: "Asset lifecycle predictions" },
    { icon: CheckCircle2, label: "SLA performance" },
    { icon: Eye, label: "High-risk site alerts" }
  ];

  const integrations = [
    { name: "eLogbooks", path: "/integrations/elogbooks" },
    { name: "Dwellant", path: "/integrations/dwellant" },
    { name: "MRI/Qube", path: "/integrations/mri-qube" },
    { name: "Concept Evolution", path: "/integrations/concept-evolution" },
    { name: "Planon", path: "/integrations/planon" },
    { name: "MyCompliance", path: "/integrations/mycompliance" },
    { name: "Verisae", path: "/integrations/verisae" }
  ];

  const aiFeatures = [
    "Automated triage",
    "Pattern recognition on asset failures",
    "Predictive prompts",
    "Automated job creation from chat",
    "Smart escalation logic"
  ];

  return (
    <>
      <Helmet>
        <title>Field Operations Intelligence Platform | EntireFM</title>
        <meta 
          name="description" 
          content="EntireFM's internal CAFM infrastructure powering national facilities management performance, compliance, and real-time operational visibility." 
        />
        <meta 
          name="keywords" 
          content="CAFM, FM operations platform, field operations intelligence, job tracking, PPM compliance, facilities management software, asset management, real-time monitoring" 
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "EntireFM Field Operations Intelligence Platform",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web-based",
            "description": "Internal CAFM platform for facilities management operations, compliance tracking, and real-time asset monitoring",
            "offers": {
              "@type": "Offer",
              "availability": "https://schema.org/InternalUseOnly",
              "description": "Available to EntireFM clients as part of service delivery"
            },
            "featureList": [
              "Real-time job tracking",
              "PPM compliance monitoring",
              "Asset lifecycle management",
              "Director-level intelligence",
              "Audit-ready documentation"
            ]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background pt-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          {/* Dark gradient background */}
          <div 
            className="absolute inset-0 z-0"
            style={{
              background: "linear-gradient(135deg, hsl(220, 30%, 15%) 0%, hsl(220, 40%, 8%) 100%)",
            }}
          />
          
          <div className="relative z-10 container mx-auto max-w-7xl px-4">
            <div className="flex flex-col items-center justify-center min-h-[700px] py-20">
              {/* Animated Radar */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="mb-12"
              >
                <RadarAnimation />
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-center max-w-4xl"
              >
                <h1 
                  className="text-5xl md:text-7xl font-thin tracking-tight mb-6"
                  style={{ 
                    color: "hsl(0, 0%, 98%)",
                    letterSpacing: "-0.02em"
                  }}
                >
                  Field Operations Intelligence Platform
                </h1>
                
                <p 
                  className="text-lg md:text-xl mb-12 leading-relaxed font-light"
                  style={{ color: "hsl(220, 20%, 75%)" }}
                >
                  Real-time visibility, engineered performance, and audit-ready compliance — the operational backbone behind our national FM delivery.
                </p>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="flex flex-wrap justify-center gap-4"
                >
                  <Button 
                    asChild 
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base font-normal transition-all hover:scale-105"
                  >
                    <Link to="/contact">Request Portal Access</Link>
                  </Button>
                  <Button 
                    asChild 
                    variant="outline" 
                    size="lg"
                    className="border-2 px-8 py-6 text-base font-normal transition-all hover:scale-105"
                    style={{
                      borderColor: "hsl(220, 20%, 50%)",
                      color: "hsl(0, 0%, 98%)",
                      background: "transparent"
                    }}
                  >
                    <Link to="/resources">Download Compliance Overview</Link>
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* Bottom fade */}
          <div 
            className="absolute bottom-0 left-0 right-0 h-32 z-20"
            style={{
              background: "linear-gradient(to bottom, transparent, hsl(var(--background)))"
            }}
          />
        </section>

        {/* Built for Performance Section */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
                Built for Performance, Not Sales
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                EntireFM runs its operations on a custom internal CAFM platform engineered around actual FM workflows.
              </p>
              <ul className="space-y-4">
                {[
                  "Built by FM operators, not software vendors",
                  "Designed around response, uptime and transparency",
                  "Used internally across our national service delivery",
                  "Clients receive portal access as standard",
                  "Zero-noise operational governance"
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground text-lg">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>

        {/* What Clients See */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground"
            >
              What Clients See
            </motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {clientFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                    <feature.icon className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3 text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* What Directors See */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-7xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-8 text-center text-foreground"
            >
              What Directors See
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto"
            >
              Premium, executive-level intelligence
            </motion.p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {directorFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="flex flex-col items-center text-center p-6 rounded-lg bg-background hover:shadow-md transition-shadow"
                >
                  <feature.icon className="h-8 w-8 text-primary mb-3" />
                  <span className="text-sm font-medium text-foreground">
                    {feature.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Integrations */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-5xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground"
            >
              Integrations
            </motion.h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {integrations.map((integration, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <Link to={integration.path}>
                    <Card className="p-4 text-center hover:shadow-md transition-shadow hover:border-primary cursor-pointer">
                      <GitBranch className="h-6 w-6 text-primary mx-auto mb-2" />
                      <span className="text-sm font-medium text-foreground">
                        {integration.name}
                      </span>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* AI-Assisted FM Operations */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <Brain className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                AI-Assisted FM Operations
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Subtle intelligence, not hype
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
              {aiFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-3 p-4 rounded-lg bg-background"
                >
                  <Zap className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-8 text-foreground"
            >
              Client Portal Onboarding
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <Button asChild size="lg">
                <Link to="/contact">Request Portal Access</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/resources">Download Compliance Overview</Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link to="/contact">Speak to Operations</Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Platform;