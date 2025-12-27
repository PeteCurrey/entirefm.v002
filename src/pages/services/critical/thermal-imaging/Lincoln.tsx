import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Mail, ArrowRight, Thermometer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import ServiceHeroSection from "@/components/shared/ServiceHeroSection";
import { SidebarCTA } from "@/components/shared/SidebarCTA";

export default function ThermalImagingLincoln() {
  const breadcrumbItems = [{ label: "Critical Infrastructure", href: "/services/critical" }, { label: "Thermal Imaging", href: "/services/critical/thermal-imaging" }, { label: "Lincoln" }];
  const coverageAreas = ["City Centre", "Brayford", "West Common", "St Giles", "Monks Road", "North Hykeham", "Nettleham", "Washingborough", "Skellingthorpe"];

  return (
    <>
      <Helmet>
        <title>Thermal Imaging Surveys in Lincoln | Electrical Hotspot Detection | EntireFM</title>
        <meta name="description" content="Thermal imaging surveys in Lincoln. Electrical hotspot detection for agriculture, food processing and commercial facilities across Lincolnshire." />
        <link rel="canonical" href="https://entirefm.com/services/critical/thermal-imaging/lincoln" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <ServiceHeroSection breadcrumbItems={breadcrumbItems} title="Thermal Imaging Surveys in Lincoln" description="Electrical hotspot detection for agriculture, food processing and commercial facilities across Lincolnshire." stats={[{ value: "IR", label: "Certified" }, { value: "Same Day", label: "Reports" }, { value: "Level 2", label: "Thermographers" }, { value: "Local", label: "Engineers" }]} primaryCTA={{ label: "Request Survey", href: "/request-proposal", icon: ArrowRight }} secondaryCTA={{ label: "Back to Thermal Imaging", href: "/services/critical/thermal-imaging", icon: Thermometer }} backgroundImage="https://images.unsplash.com/photo-1533929736562-b553c33e8d83?w=1920&q=80" />
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-12">
              <section><h2 className="text-3xl font-light mb-6 underline-accent inline-block">Thermal Imaging Services in Lincoln</h2><p className="text-muted-foreground font-light leading-relaxed">Lincolnshire's food processing and agricultural industries rely on electrical systems for critical operations. Our thermographers provide inspection services for cold storage, processing facilities, and farm operations.</p></section>
              <section><h2 className="text-3xl font-light mb-6 underline-accent inline-block">Lincoln Service Coverage</h2><div className="grid grid-cols-2 md:grid-cols-3 gap-4">{coverageAreas.map((area, index) => (<motion.div key={area} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }}><Card className="p-4 text-center hover:border-primary/50 transition-colors"><span className="text-sm font-light">{area}</span></Card></motion.div>))}</div></section>
              <section><h2 className="text-3xl font-light mb-6 underline-accent inline-block">Contact Our Lincoln Team</h2><div className="space-y-4"><div className="flex items-center gap-3 text-muted-foreground"><MapPin className="w-5 h-5 text-primary" /><span>Serving Lincoln and Lincolnshire</span></div><div className="flex items-center gap-3 text-muted-foreground"><Mail className="w-5 h-5 text-primary" /><a href="mailto:lincoln@entirefm.com" className="text-primary hover:underline">lincoln@entirefm.com</a></div></div></section>
              <section className="bg-primary/5 border border-primary/20 rounded-lg p-8 text-center"><h3 className="text-2xl font-light mb-4">Request Thermal Imaging in Lincoln</h3><p className="text-muted-foreground mb-6 font-light">Lincolnshire specialists for thermal imaging surveys.</p><div className="flex flex-col sm:flex-row gap-4 justify-center"><Button asChild size="lg"><Link to="/request-proposal">Request Proposal</Link></Button><Button asChild variant="outline" size="lg"><Link to="/contact">Contact Lincoln Team</Link></Button></div></section>
            </div>
            <aside className="lg:col-span-1"><div className="sticky top-24"><SidebarCTA /></div></aside>
          </div>
        </div>
      </div>
    </>
  );
}