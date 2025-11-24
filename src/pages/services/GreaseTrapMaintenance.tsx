import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { ArrowRight, Utensils, AlertTriangle, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { ServiceSchema, FAQSchema } from "@/components/shared/SchemaMarkup";
import { FAQSection } from "@/components/shared/FAQSection";
import { SidebarCTA } from "@/components/shared/SidebarCTA";

const GreaseTrapMaintenance = () => {
  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Grease Trap Maintenance" }
  ];

  const faqs = [
    {
      question: "How often should grease traps be serviced?",
      answer: "Monthly servicing is recommended for commercial kitchens, with frequency adjusted based on kitchen volume, menu type, and trap capacity. High-volume kitchens may require weekly servicing."
    },
    {
      question: "What happens if grease traps are neglected?",
      answer: "Blocked traps cause drainage backups, kitchen flooding, foul odors, pest attraction, environmental pollution, and breach of discharge consent conditions—potentially triggering EA enforcement."
    },
    {
      question: "Are grease traps legally required?",
      answer: "Yes—Building Regulations Part H and water company bylaws require grease management for commercial food preparation. Discharge consents specify maximum fat, oil, and grease (FOG) levels."
    },
    {
      question: "What documentation is required?",
      answer: "Waste transfer notes, servicing records, and discharge consent compliance logs demonstrate duty of care obligations and environmental compliance."
    },
    {
      question: "Can grease traps be emptied by site staff?",
      answer: "No—licensed waste carriers must remove and dispose of grease trap contents. DIY emptying breaches waste management regulations and environmental permits."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Grease Trap Maintenance | Commercial Kitchen Grease Management</title>
        <meta name="description" content="Commercial kitchen grease management compliance. Expert grease trap servicing and environmental compliance." />
      </Helmet>

      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema 
        name="Grease Trap Maintenance"
        description="Commercial kitchen grease management compliance."
        provider="EntireFM"
        areaServed="United Kingdom"
      />
      <FAQSchema faqs={faqs} />

      <div className="min-h-screen bg-background">
        <div className="relative h-[40vh] bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80')] bg-cover bg-center opacity-20" />
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Grease Trap Maintenance</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Commercial kitchen grease management compliance
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <Breadcrumb items={breadcrumbItems} />
          
          <div className="grid lg:grid-cols-3 gap-8 mt-8">
            <div className="lg:col-span-2 space-y-12">
              <section>
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                  <Utensils className="w-8 h-8 text-primary" />
                  Protecting Drainage from Fat, Oil & Grease
                </h2>
                <div className="prose prose-lg max-w-none space-y-4">
                  <p>
                    Grease traps prevent fats, oils, and grease (FOG) from commercial kitchens entering drainage systems—protecting infrastructure, preventing blockages, and meeting environmental discharge consent conditions.
                  </p>
                  <p>
                    Regular servicing maintains trap capacity, prevents kitchen flooding, eliminates odors, and demonstrates compliance with Building Regulations Part H and water company bylaws governing commercial food preparation.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                  <FileText className="w-8 h-8 text-primary" />
                  Regulatory Requirements
                </h2>
                <div className="prose prose-lg max-w-none space-y-4">
                  <p>
                    Building Regulations Part H requires adequate grease separation for commercial kitchens. Water companies enforce bylaws specifying maximum FOG content in discharge, with consent conditions requiring documented maintenance regimes.
                  </p>
                  <p>
                    Licensed waste carriers must remove grease trap contents, providing waste transfer notes demonstrating duty of care compliance. Unlicensed disposal breaches environmental regulations and can trigger prosecution.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                  <AlertTriangle className="w-8 h-8 text-destructive" />
                  Risks of Inadequate Maintenance
                </h2>
                <div className="bg-destructive/10 border-l-4 border-destructive p-6 rounded-lg space-y-4">
                  <p className="font-semibold text-lg">
                    Neglected grease traps expose commercial kitchens to:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-1">→</span>
                      <span><strong>Kitchen flooding:</strong> Blocked traps cause drainage backups into food preparation areas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-1">→</span>
                      <span><strong>Environmental breaches:</strong> Excessive FOG discharge violates consent conditions, triggering water company or EA enforcement</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-1">→</span>
                      <span><strong>Health hazards:</strong> Foul odors, pest attraction, and contamination risks breach food hygiene regulations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-1">→</span>
                      <span><strong>Operational closure:</strong> EHO intervention can force kitchen closure until compliance is restored</span>
                    </li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-6">Related Services</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <Link to="/services/drainage-cctv-surveys" className="border rounded-lg p-4 hover:border-primary transition-colors">
                    <h3 className="font-semibold mb-2">Drainage CCTV Surveys</h3>
                    <p className="text-sm text-muted-foreground">Remote drainage inspection</p>
                  </Link>
                  <Link to="/services/interceptor-maintenance" className="border rounded-lg p-4 hover:border-primary transition-colors">
                    <h3 className="font-semibold mb-2">Interceptor Maintenance</h3>
                    <p className="text-sm text-muted-foreground">Oil separator servicing</p>
                  </Link>
                  <Link to="/services/commercial-plumbing" className="border rounded-lg p-4 hover:border-primary transition-colors">
                    <h3 className="font-semibold mb-2">Commercial Plumbing</h3>
                    <p className="text-sm text-muted-foreground">Kitchen infrastructure</p>
                  </Link>
                  <Link to="/services/water-hygiene" className="border rounded-lg p-4 hover:border-primary transition-colors">
                    <h3 className="font-semibold mb-2">Water Hygiene</h3>
                    <p className="text-sm text-muted-foreground">Legionella control</p>
                  </Link>
                </div>
              </section>

              <section className="bg-primary/5 rounded-lg p-8">
                <h2 className="text-2xl font-bold mb-4">Request Grease Trap Servicing</h2>
                <p className="text-muted-foreground mb-6">
                  Speak to our team about compliant grease management for your commercial kitchen.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button asChild size="lg">
                    <Link to="/request-proposal">
                      Request Proposal <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link to="/contact">Contact Support</Link>
                  </Button>
                </div>
              </section>

              <FAQSection faqs={faqs} />
            </div>

            <aside className="space-y-6">
              <SidebarCTA />
            </aside>
          </div>
        </div>
      </div>
    </>
  );
};

export default GreaseTrapMaintenance;
