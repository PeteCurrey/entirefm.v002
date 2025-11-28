import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Shield, Wrench, Activity, Server, Battery, Cog, Thermometer, Flame } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

interface Service {
  title: string;
  description: string;
  url: string;
  icon: any;
  category: 'critical' | 'compliance' | 'fm-ops' | 'soft-service';
}

const serviceLibrary: Service[] = [
  // Critical Infrastructure
  {
    title: "UPS Maintenance",
    description: "Battery testing and uninterruptible power system servicing for critical operations.",
    url: "/services/critical/ups-maintenance",
    icon: Battery,
    category: "critical"
  },
  {
    title: "Generator Maintenance",
    description: "Backup power servicing, ATS testing and fuel management.",
    url: "/services/critical/generator-maintenance",
    icon: Cog,
    category: "critical"
  },
  {
    title: "Thermal Imaging",
    description: "Infrared surveys detecting electrical hotspots before catastrophic failure.",
    url: "/services/critical/thermal-imaging",
    icon: Thermometer,
    category: "critical"
  },
  {
    title: "Arc Flash Assessment",
    description: "High voltage electrical hazard analysis and PPE recommendations.",
    url: "/services/critical/arc-flash-assessment",
    icon: Zap,
    category: "critical"
  },
  {
    title: "Lightning Protection",
    description: "BS EN 62305 testing and earthing compliance for critical infrastructure.",
    url: "/services/critical/lightning-protection",
    icon: Zap,
    category: "critical"
  },
  {
    title: "Power Redundancy",
    description: "Load bank testing and N+1 validation for mission-critical systems.",
    url: "/services/critical/power-redundancy",
    icon: Server,
    category: "critical"
  },
  {
    title: "Data Room Audits",
    description: "Server room compliance covering power, cooling and fire suppression.",
    url: "/services/critical/data-room-audits",
    icon: Server,
    category: "critical"
  },
  
  // Compliance Services
  {
    title: "Electrical Compliance",
    description: "EICR testing, fixed-wire inspections and BS 7671 certification.",
    url: "/services/electrical",
    icon: Zap,
    category: "compliance"
  },
  {
    title: "Fire Safety",
    description: "Fire alarm testing, emergency lighting and suppression system compliance.",
    url: "/services/fire-safety",
    icon: Flame,
    category: "compliance"
  },
  {
    title: "Water Hygiene",
    description: "Legionella risk assessment, water sampling and temperature monitoring.",
    url: "/services/water-hygiene",
    icon: Activity,
    category: "compliance"
  },
  {
    title: "Gas Safety",
    description: "Commercial gas appliance servicing and CP42 certification.",
    url: "/services/gas-safety",
    icon: Flame,
    category: "compliance"
  },
  {
    title: "HVAC Compliance",
    description: "Air conditioning, ventilation and F-Gas compliance for commercial buildings.",
    url: "/services/hvac",
    icon: Activity,
    category: "compliance"
  },
  
  // FM Operations
  {
    title: "PPM Delivery",
    description: "Planned preventative maintenance preventing breakdowns and ensuring compliance.",
    url: "/services/ppm",
    icon: Wrench,
    category: "fm-ops"
  },
  {
    title: "Business Continuity",
    description: "Emergency preparedness and critical system resilience planning.",
    url: "/fm-operations/business-continuity",
    icon: Shield,
    category: "fm-ops"
  },
  {
    title: "Reactive Maintenance",
    description: "24/7 emergency response and breakdown repair across all building systems.",
    url: "/fm-operations/reactive-maintenance",
    icon: Wrench,
    category: "fm-ops"
  },
  {
    title: "Mobilisation",
    description: "Seamless contract handover and service transition management.",
    url: "/fm-operations/mobilisation",
    icon: Shield,
    category: "fm-ops"
  },
  
  // Soft Services
  {
    title: "Specialist Cleaning",
    description: "Deep cleaning, industrial cleaning and specialist hygiene services.",
    url: "/soft-services/specialist-cleaning",
    icon: Shield,
    category: "soft-service"
  },
  {
    title: "Waste & Recycling",
    description: "Commercial waste management and sustainability compliance.",
    url: "/soft-services/waste-recycling",
    icon: Activity,
    category: "soft-service"
  }
];

interface DynamicYouMayAlsoNeedProps {
  pageType: 'critical' | 'compliance' | 'sector' | 'fm-insights' | 'case-study';
  currentPageUrl?: string;
  specificServices?: string[];
  title?: string;
}

const getServicesForPageType = (
  pageType: string, 
  currentPageUrl?: string,
  specificServices?: string[]
): Service[] => {
  // If specific services are provided, use those
  if (specificServices && specificServices.length > 0) {
    return serviceLibrary.filter(s => specificServices.includes(s.url));
  }

  let services: Service[] = [];
  
  switch (pageType) {
    case 'critical':
      // Critical pages show: Electrical, PPM, Business Continuity, Thermal, UPS/Generator
      services = [
        serviceLibrary.find(s => s.url === "/services/electrical")!,
        serviceLibrary.find(s => s.url === "/services/ppm")!,
        serviceLibrary.find(s => s.url === "/fm-operations/business-continuity")!,
        serviceLibrary.find(s => s.url === "/services/critical/thermal-imaging")!,
        serviceLibrary.find(s => s.url === "/services/critical/ups-maintenance")!,
        serviceLibrary.find(s => s.url === "/services/critical/generator-maintenance")!,
      ];
      break;
      
    case 'compliance':
      // Compliance pages show: 2 Critical, 2 FM Ops, 1 Soft Service
      const criticalServices = serviceLibrary.filter(s => s.category === 'critical').slice(0, 2);
      const fmOpsServices = serviceLibrary.filter(s => s.category === 'fm-ops').slice(0, 2);
      const softService = serviceLibrary.filter(s => s.category === 'soft-service').slice(0, 1);
      services = [...criticalServices, ...fmOpsServices, ...softService];
      break;
      
    case 'sector':
      // Sector pages show: 3 Critical, 4 Compliance (up to 7 total)
      const sectorCritical = [
        serviceLibrary.find(s => s.url === "/services/critical/ups-maintenance")!,
        serviceLibrary.find(s => s.url === "/services/critical/thermal-imaging")!,
        serviceLibrary.find(s => s.url === "/services/critical/generator-maintenance")!,
      ];
      const sectorCompliance = [
        serviceLibrary.find(s => s.url === "/services/electrical")!,
        serviceLibrary.find(s => s.url === "/services/fire-safety")!,
        serviceLibrary.find(s => s.url === "/services/water-hygiene")!,
        serviceLibrary.find(s => s.url === "/services/hvac")!,
      ];
      services = [...sectorCritical, ...sectorCompliance];
      break;
      
    case 'fm-insights':
      // FM Insights show: 2 Critical, 2 Compliance
      const insightsCritical = serviceLibrary.filter(s => s.category === 'critical').slice(0, 2);
      const insightsCompliance = serviceLibrary.filter(s => s.category === 'compliance').slice(0, 2);
      services = [...insightsCritical, ...insightsCompliance];
      break;
      
    case 'case-study':
      // Case studies show relevant critical pages
      services = serviceLibrary.filter(s => s.category === 'critical').slice(0, 6);
      break;
      
    default:
      services = serviceLibrary.slice(0, 6);
  }
  
  // Filter out the current page if URL provided
  if (currentPageUrl) {
    services = services.filter(s => s.url !== currentPageUrl);
  }
  
  return services.filter(Boolean);
};

export const DynamicYouMayAlsoNeed = ({ 
  pageType,
  currentPageUrl,
  specificServices,
  title = "You May Also Need"
}: DynamicYouMayAlsoNeedProps) => {
  const services = getServicesForPageType(pageType, currentPageUrl, specificServices);
  
  if (services.length === 0) return null;

  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <h2 className="text-3xl font-light mb-12 text-center underline-accent inline-block mx-auto">
            {title}
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => {
              const IconComponent = service.icon;
              
              return (
                <motion.div
                  key={service.url}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Link to={service.url}>
                    <Card className="p-6 h-full hover:border-primary/50 transition-all hover-lift group bg-card/50 backdrop-blur-sm">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                          <IconComponent className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-medium mb-2 group-hover:text-primary transition-colors">
                            {service.title}
                          </h3>
                          <p className="text-sm text-muted-foreground font-light mb-4 leading-relaxed">
                            {service.description}
                          </p>
                          <div className="flex items-center text-sm text-primary font-light group-hover:translate-x-1 transition-transform">
                            <span>Learn more</span>
                            <ArrowRight className="ml-2 w-4 h-4" />
                          </div>
                        </div>
                      </div>
                    </Card>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
