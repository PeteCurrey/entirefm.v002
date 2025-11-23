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
import FireSafety from "./pages/services/FireSafety";
import ElectricalCompliance from "./pages/services/ElectricalCompliance";
import HVACCompliance from "./pages/services/HVACCompliance";
import FireLondon from "./pages/services/fire/London";
import FireBirmingham from "./pages/services/fire/Birmingham";
import FireManchester from "./pages/services/fire/Manchester";
import EmergencyLightingLondon from "./pages/services/emergency-lighting/London";
import EmergencyLightingBirmingham from "./pages/services/emergency-lighting/Birmingham";
import EmergencyLightingManchester from "./pages/services/emergency-lighting/Manchester";
import EmergencyLightingLeeds from "./pages/services/emergency-lighting/Leeds";
import EmergencyLightingSheffield from "./pages/services/emergency-lighting/Sheffield";
import EmergencyLightingNottingham from "./pages/services/emergency-lighting/Nottingham";
import EmergencyLightingDerby from "./pages/services/emergency-lighting/Derby";
import EmergencyLightingChesterfield from "./pages/services/emergency-lighting/Chesterfield";
import EmergencyLightingLincoln from "./pages/services/emergency-lighting/Lincoln";
import FireLeeds from "./pages/services/fire/Leeds";
import FireSheffield from "./pages/services/fire/Sheffield";
import FireNottingham from "./pages/services/fire/Nottingham";
import FireDerby from "./pages/services/fire/Derby";
import FireChesterfield from "./pages/services/fire/Chesterfield";
import FireLincoln from "./pages/services/fire/Lincoln";
import ElectricalLondon from "./pages/services/electrical/London";
import ElectricalBirmingham from "./pages/services/electrical/Birmingham";
import ElectricalManchester from "./pages/services/electrical/Manchester";
import ElectricalLeeds from "./pages/services/electrical/Leeds";
import ElectricalSheffield from "./pages/services/electrical/Sheffield";
import ElectricalNottingham from "./pages/services/electrical/Nottingham";
import ElectricalDerby from "./pages/services/electrical/Derby";
import ElectricalChesterfield from "./pages/services/electrical/Chesterfield";
import ElectricalLincoln from "./pages/services/electrical/Lincoln";
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
import Offices from "./pages/sectors/Offices";
import RetailHospitality from "./pages/sectors/RetailHospitality";
import IndustrialLogisticsHub from "./pages/sectors/IndustrialLogisticsHub";
import HealthcarePublic from "./pages/sectors/HealthcarePublic";
import HotelsLeisure from "./pages/sectors/HotelsLeisure";
import PBSAHub from "./pages/sectors/PBSAHub";
import Education from "./pages/sectors/Education";
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
import GasLondon from "./pages/services/gas/London";
import GasBirmingham from "./pages/services/gas/Birmingham";
import GasManchester from "./pages/services/gas/Manchester";
import GasLeeds from "./pages/services/gas/Leeds";
import GasSheffield from "./pages/services/gas/Sheffield";
import GasNottingham from "./pages/services/gas/Nottingham";
import GasDerby from "./pages/services/gas/Derby";
import GasChesterfield from "./pages/services/gas/Chesterfield";
import GasLincoln from "./pages/services/gas/Lincoln";
import HVACLondon from "./pages/services/hvac/London";
import HVACBirmingham from "./pages/services/hvac/Birmingham";
import HVACManchester from "./pages/services/hvac/Manchester";
import HVACLeeds from "./pages/services/hvac/Leeds";
import HVACSheffield from "./pages/services/hvac/Sheffield";
import HVACNottingham from "./pages/services/hvac/Nottingham";
import HVACDerby from "./pages/services/hvac/Derby";
import HVACChesterfield from "./pages/services/hvac/Chesterfield";
import HVACLincoln from "./pages/services/hvac/Lincoln";
import PPMLondon from "./pages/services/ppm/London";
import PPMBirmingham from "./pages/services/ppm/Birmingham";
import PPMManchester from "./pages/services/ppm/Manchester";
import PPMLeeds from "./pages/services/ppm/Leeds";
import PPMSheffield from "./pages/services/ppm/Sheffield";
import PPMNottingham from "./pages/services/ppm/Nottingham";
import PPMDerby from "./pages/services/ppm/Derby";
import PPMChesterfield from "./pages/services/ppm/Chesterfield";
import PPMLincoln from "./pages/services/ppm/Lincoln";
import WaterLondon from "./pages/services/water/London";
import WaterBirmingham from "./pages/services/water/Birmingham";
import WaterManchester from "./pages/services/water/Manchester";
import WaterLeeds from "./pages/services/water/Leeds";
import WaterSheffield from "./pages/services/water/Sheffield";
import WaterNottingham from "./pages/services/water/Nottingham";
import WaterDerby from "./pages/services/water/Derby";
import WaterChesterfield from "./pages/services/water/Chesterfield";
import WaterLincoln from "./pages/services/water/Lincoln";
import CorporateOfficeLondon from "./pages/case-studies/CorporateOfficeLondon";
import RetailComplexBirmingham from "./pages/case-studies/RetailComplexBirmingham";
import IndustrialWarehouseSheffield from "./pages/case-studies/IndustrialWarehouseSheffield";
import PBSAEstateManchester from "./pages/case-studies/PBSAEstateManchester";
import SiteMap from "./pages/SiteMap";
import RequestProposal from "./pages/RequestProposal";

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
              <Route path="/request-proposal" element={<RequestProposal />} />
              <Route path="/services" element={<Services />} />
          <Route path="/services/hard-fm" element={<HardServices />} />
          <Route path="/services/hvac" element={<HVAC />} />
          <Route path="/services/hvac-compliance" element={<HVACCompliance />} />
          <Route path="/services/ppm-compliance" element={<PPM />} />
          <Route path="/services/electrical" element={<Electrical />} />
          <Route path="/services/fire-alarms" element={<FireAlarms />} />
          <Route path="/services/fire-safety" element={<FireSafety />} />
          <Route path="/services/electrical-compliance" element={<ElectricalCompliance />} />
          
          {/* Fire Safety Location Routes */}
          <Route path="/services/fire/London" element={<FireLondon />} />
          <Route path="/services/fire/Birmingham" element={<FireBirmingham />} />
          <Route path="/services/fire/Manchester" element={<FireManchester />} />
          <Route path="/services/fire/Leeds" element={<FireLeeds />} />
          <Route path="/services/fire/Sheffield" element={<FireSheffield />} />
          <Route path="/services/fire/Nottingham" element={<FireNottingham />} />
          <Route path="/services/fire/Derby" element={<FireDerby />} />
          <Route path="/services/fire/Chesterfield" element={<FireChesterfield />} />
          <Route path="/services/fire/Lincoln" element={<FireLincoln />} />
          
          {/* Gas Safety Location Routes */}
          <Route path="/services/gas/London" element={<GasLondon />} />
          <Route path="/services/gas/Birmingham" element={<GasBirmingham />} />
          <Route path="/services/gas/Manchester" element={<GasManchester />} />
          <Route path="/services/gas/Leeds" element={<GasLeeds />} />
          <Route path="/services/gas/Sheffield" element={<GasSheffield />} />
          <Route path="/services/gas/Nottingham" element={<GasNottingham />} />
          <Route path="/services/gas/Derby" element={<GasDerby />} />
          <Route path="/services/gas/Chesterfield" element={<GasChesterfield />} />
          <Route path="/services/gas/Lincoln" element={<GasLincoln />} />
          
          {/* HVAC Location Routes */}
          <Route path="/services/hvac/London" element={<HVACLondon />} />
          <Route path="/services/hvac/Birmingham" element={<HVACBirmingham />} />
          <Route path="/services/hvac/Manchester" element={<HVACManchester />} />
          <Route path="/services/hvac/Leeds" element={<HVACLeeds />} />
          <Route path="/services/hvac/Sheffield" element={<HVACSheffield />} />
          <Route path="/services/hvac/Nottingham" element={<HVACNottingham />} />
          <Route path="/services/hvac/Derby" element={<HVACDerby />} />
          <Route path="/services/hvac/Chesterfield" element={<HVACChesterfield />} />
          <Route path="/services/hvac/Lincoln" element={<HVACLincoln />} />
          
          {/* PPM Location Routes */}
          <Route path="/services/ppm/London" element={<PPMLondon />} />
          <Route path="/services/ppm/Birmingham" element={<PPMBirmingham />} />
          <Route path="/services/ppm/Manchester" element={<PPMManchester />} />
          <Route path="/services/ppm/Leeds" element={<PPMLeeds />} />
          <Route path="/services/ppm/Sheffield" element={<PPMSheffield />} />
          <Route path="/services/ppm/Nottingham" element={<PPMNottingham />} />
          <Route path="/services/ppm/Derby" element={<PPMDerby />} />
          <Route path="/services/ppm/Chesterfield" element={<PPMChesterfield />} />
          <Route path="/services/ppm/Lincoln" element={<PPMLincoln />} />
          
          {/* Water Hygiene Location Routes */}
          <Route path="/services/water/London" element={<WaterLondon />} />
          <Route path="/services/water/Birmingham" element={<WaterBirmingham />} />
          <Route path="/services/water/Manchester" element={<WaterManchester />} />
          <Route path="/services/water/Leeds" element={<WaterLeeds />} />
          <Route path="/services/water/Sheffield" element={<WaterSheffield />} />
          <Route path="/services/water/Nottingham" element={<WaterNottingham />} />
          <Route path="/services/water/Derby" element={<WaterDerby />} />
          <Route path="/services/water/Chesterfield" element={<WaterChesterfield />} />
          <Route path="/services/water/Lincoln" element={<WaterLincoln />} />
          
          {/* Emergency Lighting Location Routes */}
          <Route path="/services/emergency-lighting/London" element={<EmergencyLightingLondon />} />
          <Route path="/services/emergency-lighting/Birmingham" element={<EmergencyLightingBirmingham />} />
          <Route path="/services/emergency-lighting/Manchester" element={<EmergencyLightingManchester />} />
          <Route path="/services/emergency-lighting/Leeds" element={<EmergencyLightingLeeds />} />
          <Route path="/services/emergency-lighting/Sheffield" element={<EmergencyLightingSheffield />} />
          <Route path="/services/emergency-lighting/Nottingham" element={<EmergencyLightingNottingham />} />
          <Route path="/services/emergency-lighting/Derby" element={<EmergencyLightingDerby />} />
          <Route path="/services/emergency-lighting/Chesterfield" element={<EmergencyLightingChesterfield />} />
          <Route path="/services/emergency-lighting/Lincoln" element={<EmergencyLightingLincoln />} />
          
          {/* Electrical Compliance Location Routes */}
          <Route path="/services/electrical/London" element={<ElectricalLondon />} />
          <Route path="/services/electrical/Birmingham" element={<ElectricalBirmingham />} />
          <Route path="/services/electrical/Manchester" element={<ElectricalManchester />} />
          <Route path="/services/electrical/Leeds" element={<ElectricalLeeds />} />
          <Route path="/services/electrical/Sheffield" element={<ElectricalSheffield />} />
          <Route path="/services/electrical/Nottingham" element={<ElectricalNottingham />} />
          <Route path="/services/electrical/Derby" element={<ElectricalDerby />} />
          <Route path="/services/electrical/Chesterfield" element={<ElectricalChesterfield />} />
          <Route path="/services/electrical/Lincoln" element={<ElectricalLincoln />} />
          
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
              <Route path="/sectors/offices" element={<Offices />} />
              <Route path="/sectors/retail-hospitality" element={<RetailHospitality />} />
              <Route path="/sectors/healthcare-public" element={<HealthcarePublic />} />
              <Route path="/sectors/hotels-leisure" element={<HotelsLeisure />} />
              <Route path="/sectors/pbsa" element={<PBSAHub />} />
              <Route path="/sectors/education" element={<Education />} />
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
              <Route path="/case-studies/corporate-office-london" element={<CorporateOfficeLondon />} />
              <Route path="/case-studies/retail-complex-birmingham" element={<RetailComplexBirmingham />} />
              <Route path="/case-studies/industrial-warehouse-sheffield" element={<IndustrialWarehouseSheffield />} />
              <Route path="/case-studies/pbsa-estate-manchester" element={<PBSAEstateManchester />} />
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
              {/* Site Map - Internal Tool */}
              <Route path="/site-map" element={<SiteMap />} />
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
