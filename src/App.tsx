import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingCTA from "@/components/layout/FloatingCTA";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Sectors from "./pages/Sectors";
import Technology from "./pages/Technology";
import CaseStudies from "./pages/CaseStudies";
import LogisticsDistributionHub from "./pages/case-studies/LogisticsDistributionHub";
import RetailServiceStationsCaseStudy from "./pages/case-studies/RetailServiceStations";
import CorporateHQ from "./pages/case-studies/CorporateHQ";
import Aviation from "./pages/case-studies/Aviation";
import ResidentialPBSACaseStudy from "./pages/case-studies/ResidentialPBSA";
import Hospitality from "./pages/case-studies/Hospitality";
import ServiceStations from "./pages/case-studies/ServiceStations";
import IndustrialPlant from "./pages/case-studies/IndustrialPlant";
import Healthcare from "./pages/case-studies/Healthcare";
import About from "./pages/About";
import ESG from "./pages/ESG";
import HealthSafety from "./pages/HealthSafety";
import Resources from "./pages/Resources";
import ComplianceCalendar from "./pages/resources/ComplianceCalendar";
import AuditFramework from "./pages/resources/AuditFramework";
import SwitchingProvider from "./pages/resources/SwitchingProvider";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import Locations from "./pages/Locations";
import NotFound from "./pages/NotFound";
import HardServices from "./pages/services/HardServices";
import HVAC from "./pages/services/HVAC";
import PPM from "./pages/services/PPM";
import Electrical from "./pages/services/Electrical";
import FireAlarms from "./pages/services/FireAlarms";
import FireLondon from "./pages/services/fire/London";
import FireBirmingham from "./pages/services/fire/Birmingham";
import FireManchester from "./pages/services/fire/Manchester";
import FireLeeds from "./pages/services/fire/Leeds";
import FireSheffield from "./pages/services/fire/Sheffield";
import FireNottingham from "./pages/services/fire/Nottingham";
import FireDerby from "./pages/services/fire/Derby";
import FireChesterfield from "./pages/services/fire/Chesterfield";
import FireLincoln from "./pages/services/fire/Lincoln";
import EmergencyLighting from "./pages/services/EmergencyLighting";
import Sprinklers from "./pages/services/Sprinklers";
import Plumbing from "./pages/services/Plumbing";
import WaterHygiene from "./pages/services/WaterHygiene";
import BuildingFabric from "./pages/services/BuildingFabric";
import GasSafety from "./pages/services/GasSafety";
import London from "./pages/locations/London";
import Manchester from "./pages/locations/Manchester";
import Birmingham from "./pages/locations/Birmingham";
import Leeds from "./pages/locations/Leeds";
import Sheffield from "./pages/locations/Sheffield";
import Liverpool from "./pages/locations/Liverpool";
import Leicester from "./pages/locations/Leicester";
import IndustrialLogistics from "./pages/sectors/IndustrialLogistics";
import RetailServiceStations from "./pages/sectors/RetailServiceStations";
import OfficesCorporate from "./pages/sectors/OfficesCorporate";
import AviationTravelHub from "./pages/sectors/AviationTravelHub";
import HospitalityLeisure from "./pages/sectors/HospitalityLeisure";
import ResidentialPBSA from "./pages/sectors/ResidentialPBSA";
import WhySwitch from "./pages/WhySwitch";
import ComplianceDiagnostic from "./pages/ComplianceDiagnostic";
import CostSavingsCalculator from "./pages/tools/CostSavingsCalculator";
import TopFMProviders from "./pages/resources/TopFMProviders";
import FireAlarmTesting from "./pages/resources/FireAlarmTesting";
import EntireFMvsMitie from "./pages/compare/EntireFMvsMitie";
import SLABenchmark from "./pages/tools/SLABenchmark";
import EnergyESG from "./pages/resources/EnergyESG";
import EngineerStandards from "./pages/resources/EngineerStandards";
import FrontOfHouse from "./pages/services/FrontOfHouse";
import TenderSupport from "./pages/resources/TenderSupport";
import Leadership from "./pages/Leadership";
import SocialValue from "./pages/SocialValue";
import VisualStandards from "./pages/VisualStandards";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
          <Route path="/services/hard-fm" element={<HardServices />} />
          <Route path="/services/hvac" element={<HVAC />} />
          <Route path="/services/ppm-compliance" element={<PPM />} />
          <Route path="/services/electrical" element={<Electrical />} />
          <Route path="/services/fire-alarms" element={<FireAlarms />} />
          <Route path="/fire/london" element={<FireLondon />} />
          <Route path="/fire/birmingham" element={<FireBirmingham />} />
          <Route path="/fire/manchester" element={<FireManchester />} />
          <Route path="/fire/leeds" element={<FireLeeds />} />
          <Route path="/fire/sheffield" element={<FireSheffield />} />
          <Route path="/fire/nottingham" element={<FireNottingham />} />
          <Route path="/fire/derby" element={<FireDerby />} />
          <Route path="/fire/chesterfield" element={<FireChesterfield />} />
          <Route path="/fire/lincoln" element={<FireLincoln />} />
          <Route path="/services/emergency-lighting" element={<EmergencyLighting />} />
          <Route path="/services/sprinklers-risers" element={<Sprinklers />} />
          <Route path="/services/plumbing" element={<Plumbing />} />
          <Route path="/services/water-hygiene" element={<WaterHygiene />} />
          <Route path="/services/building-fabric" element={<BuildingFabric />} />
          <Route path="/services/gas-safety" element={<GasSafety />} />
              <Route path="/sectors" element={<Sectors />} />
              <Route path="/sectors/industrial-logistics" element={<IndustrialLogistics />} />
              <Route path="/sectors/retail-service-stations" element={<RetailServiceStations />} />
              <Route path="/sectors/offices-corporate" element={<OfficesCorporate />} />
              <Route path="/sectors/aviation" element={<AviationTravelHub />} />
              <Route path="/sectors/hospitality-leisure" element={<HospitalityLeisure />} />
              <Route path="/sectors/residential-pbsa" element={<ResidentialPBSA />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/locations/london" element={<London />} />
            <Route path="/locations/manchester" element={<Manchester />} />
            <Route path="/locations/birmingham" element={<Birmingham />} />
            <Route path="/locations/leeds" element={<Leeds />} />
            <Route path="/locations/sheffield" element={<Sheffield />} />
            <Route path="/locations/liverpool" element={<Liverpool />} />
            <Route path="/locations/leicester" element={<Leicester />} />
              <Route path="/technology" element={<Technology />} />
          <Route path="/case-studies" element={<CaseStudies />} />
              <Route path="/case-studies/logistics" element={<LogisticsDistributionHub />} />
              <Route path="/case-studies/retail" element={<RetailServiceStationsCaseStudy />} />
              <Route path="/case-studies/corporate" element={<CorporateHQ />} />
              <Route path="/case-studies/aviation" element={<Aviation />} />
              <Route path="/case-studies/pbsa" element={<ResidentialPBSACaseStudy />} />
              <Route path="/case-studies/hospitality" element={<Hospitality />} />
              <Route path="/case-studies/service-stations" element={<ServiceStations />} />
              <Route path="/case-studies/engineering" element={<IndustrialPlant />} />
              <Route path="/case-studies/healthcare" element={<Healthcare />} />
              <Route path="/about" element={<About />} />
              <Route path="/esg" element={<ESG />} />
              <Route path="/health-safety" element={<HealthSafety />} />
              <Route path="/tools/cost-savings" element={<CostSavingsCalculator />} />
              <Route path="/tools/sla-benchmark" element={<SLABenchmark />} />
              <Route path="/tools/risk-diagnostic" element={<ComplianceDiagnostic />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/resources/compliance-calendar" element={<ComplianceCalendar />} />
              <Route path="/resources/audit-framework" element={<AuditFramework />} />
              <Route path="/resources/switch-playbook" element={<SwitchingProvider />} />
              <Route path="/resources/energy-esg" element={<EnergyESG />} />
              <Route path="/resources/engineer-standards" element={<EngineerStandards />} />
              <Route path="/resources/tender-support" element={<TenderSupport />} />
              <Route path="/resources/top-fm-providers-uk" element={<TopFMProviders />} />
              <Route path="/resources/fire-alarm-testing-frequency" element={<FireAlarmTesting />} />
              <Route path="/services/front-of-house" element={<FrontOfHouse />} />
              <Route path="/leadership" element={<Leadership />} />
              <Route path="/social-value" element={<SocialValue />} />
              <Route path="/visual-standards" element={<VisualStandards />} />
              <Route path="/tools/cost-savings-calculator" element={<CostSavingsCalculator />} />
              <Route path="/tools/sla-benchmark" element={<SLABenchmark />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/contact" element={<Contact />} />
              {/* Comparison Pages */}
              <Route path="/compare/entirefm-vs-mitie" element={<EntireFMvsMitie />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
          <FloatingCTA />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
