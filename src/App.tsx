import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingCTA from "@/components/layout/FloatingCTA";
import LoadingBar from "@/components/layout/LoadingBar";
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
import FireRiskGuide from "./pages/resources/FireRiskGuide";
import EICRManual from "./pages/resources/EICRManual";
import EmergencyLightingChecklist from "./pages/resources/EmergencyLightingChecklist";
import LegionellaGuide from "./pages/resources/LegionellaGuide";
import FGasTracker from "./pages/resources/FGasTracker";
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
import DryRiserTesting from "./pages/services/DryRiserTesting";
import LiftingEquipment from "./pages/services/LiftingEquipment";
import HeightSafety from "./pages/services/HeightSafety";
import SmokeVentSystems from "./pages/services/SmokeVentSystems";
import RisingMains from "./pages/services/RisingMains";
import FireCompartmentationSurveys from "./pages/services/FireCompartmentationSurveys";
import PumpRoomMaintenance from "./pages/services/PumpRoomMaintenance";
import PlantRoomRiskAssessments from "./pages/services/PlantRoomRiskAssessments";
import GeneratorMaintenance from "./pages/services/GeneratorMaintenance";
import LoadBankTesting from "./pages/services/LoadBankTesting";
import UPSMaintenance from "./pages/services/UPSMaintenance";
import DataCentreCoolingCompliance from "./pages/services/DataCentreCoolingCompliance";
import DockLevellerMaintenance from "./pages/services/DockLevellerMaintenance";
import RollerShutterMaintenance from "./pages/services/RollerShutterMaintenance";
import EvacuationChairServicing from "./pages/services/EvacuationChairServicing";
import CarParkCOMonitoring from "./pages/services/CarParkCOMonitoring";
import WaterTreatmentPlantMaintenance from "./pages/services/WaterTreatmentPlantMaintenance";
import BMSIntegrationTesting from "./pages/services/BMSIntegrationTesting";
import HardServicesFM from "./pages/services/HardServicesFM";
import MEServices from "./pages/services/MEServices";
import AccessControl from "./pages/services/AccessControl";
import EmergencySystems from "./pages/services/EmergencySystems";
import CommercialPlumbing from "./pages/services/CommercialPlumbing";
import BuildingInspections from "./pages/services/BuildingInspections";
import SmartBuildingIoT from "./pages/services/SmartBuildingIoT";
import ThermalImagingSurveys from "./pages/services/ThermalImagingSurveys";
import PowerQualityAnalysis from "./pages/services/PowerQualityAnalysis";
import WasteCompliance from "./pages/services/WasteCompliance";
import WaterOptimisation from "./pages/services/WaterOptimisation";
import SustainabilityMonitoring from "./pages/services/SustainabilityMonitoring";
import DroneInspections from "./pages/services/DroneInspections";
import CCTVMaintenance from "./pages/services/CCTVMaintenance";
import ANPRSystems from "./pages/services/ANPRSystems";
import AccessControlAdvanced from "./pages/services/AccessControlAdvanced";
import SecuritySystemsHealthcheck from "./pages/services/SecuritySystemsHealthcheck";
import DrainageCCTVSurveys from "./pages/services/DrainageCCTVSurveys";
import InterceptorMaintenance from "./pages/services/InterceptorMaintenance";
import PumpStationServicing from "./pages/services/PumpStationServicing";
import GreaseTrapMaintenance from "./pages/services/GreaseTrapMaintenance";
import FumeExtractionLEV from "./pages/services/FumeExtractionLEV";
import IndustrialRefrigeration from "./pages/services/IndustrialRefrigeration";
import MEWPSafetyChecks from "./pages/services/MEWPSafetyChecks";
import LoadingBaySafetySystems from "./pages/services/LoadingBaySafetySystems";
import CompressorMaintenance from "./pages/services/CompressorMaintenance";
import BMUCradleServicing from "./pages/services/BMUCradleServicing";
import MansafeTesting from "./pages/services/MansafeTesting";
import AbseilRailCertification from "./pages/services/AbseilRailCertification";
import RoofSafetyInspections from "./pages/services/RoofSafetyInspections";
import StairwellPressurisationFans from "./pages/services/StairwellPressurisationFans";
import CarParkFumeExtraction from "./pages/services/CarParkFumeExtraction";
import IndoorAirQualityTesting from "./pages/services/IndoorAirQualityTesting";
import EnergyOptimisation from "./pages/services/EnergyOptimisation";
import EnvironmentalNoiseSurveys from "./pages/services/EnvironmentalNoiseSurveys";
import AirFiltrationHEPA from "./pages/services/AirFiltrationHEPA";
import DilapidationCompliance from "./pages/services/DilapidationCompliance";
import London from "./pages/locations/London";
import Manchester from "./pages/locations/Manchester";
import Birmingham from "./pages/locations/Birmingham";
import Leeds from "./pages/locations/Leeds";
import Sheffield from "./pages/locations/Sheffield";
import Liverpool from "./pages/locations/Liverpool";
import Leicester from "./pages/locations/Leicester";
import Nottingham from "./pages/locations/Nottingham";
import Derby from "./pages/locations/Derby";
import Chesterfield from "./pages/locations/Chesterfield";
import Lincoln from "./pages/locations/Lincoln";
import IndustrialLogistics from "./pages/sectors/IndustrialLogistics";
import RetailServiceStations from "./pages/sectors/RetailServiceStations";
import OfficesCorporate from "./pages/sectors/OfficesCorporate";
import AviationTravelHub from "./pages/sectors/AviationTravelHub";
import HospitalityLeisure from "./pages/sectors/HospitalityLeisure";
import ResidentialPBSA from "./pages/sectors/ResidentialPBSA";
import Offices from "./pages/sectors/Offices";
import RetailHospitality from "./pages/sectors/RetailHospitality";
import IndustrialLogisticsHub from "./pages/sectors/IndustrialLogisticsHub";
import Airports from "./pages/sectors/Airports";
import Venues from "./pages/sectors/Venues";
import Residential from "./pages/sectors/Residential";
import LogisticsParks from "./pages/sectors/LogisticsParks";
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
import Sustainability from "./pages/Sustainability";
import Innovation from "./pages/Innovation";
import Partnerships from "./pages/Partnerships";
import Awards from "./pages/Awards";
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
import PPMCalculator from "./pages/tools/PPMCalculator";
import TM44Checker from "./pages/tools/TM44Checker";
import WaterRiskGrader from "./pages/tools/WaterRiskGrader";
import FMInsights from "./pages/FMInsights";
import WhatIsFacilitiesManagement from "./pages/fm-insights/WhatIsFacilitiesManagement";
import WhatIsHardFM from "./pages/fm-insights/WhatIsHardFM";
import WhatIsSoftFM from "./pages/fm-insights/WhatIsSoftFM";
import WhatIsStatutoryMaintenance from "./pages/fm-insights/WhatIsStatutoryMaintenance";
import WhatIsPPM from "./pages/fm-insights/WhatIsPPM";
import WhatIsAnEICR from "./pages/fm-insights/WhatIsAnEICR";
import WhatIsATM44 from "./pages/fm-insights/WhatIsATM44";
import WhatIsACOPL8 from "./pages/fm-insights/WhatIsACOPL8";
import WhatIsFGasCompliance from "./pages/fm-insights/WhatIsFGasCompliance";
import HowOftenEmergencyLightingTested from "./pages/fm-insights/HowOftenEmergencyLightingTested";
import HowOftenFireAlarmsTested from "./pages/fm-insights/HowOftenFireAlarmsTested";
import WhoIsTheResponsiblePerson from "./pages/fm-insights/WhoIsTheResponsiblePerson";
import Suppliers from "./pages/Suppliers";
import Integrations from "./pages/Integrations";
import ELogbooks from "./pages/integrations/ELogbooks";
import Dwellant from "./pages/integrations/Dwellant";
import Verisae from "./pages/integrations/Verisae";
import MriQube from "./pages/integrations/MriQube";
import Planon from "./pages/integrations/Planon";
import ConceptEvolution from "./pages/integrations/ConceptEvolution";
import MyCompliance from "./pages/integrations/MyCompliance";
import Search from "./pages/Search";
import SearchAnalyticsDashboard from "./pages/SearchAnalyticsDashboard";
import LinkHealthDashboard from "./pages/LinkHealthDashboard";
import ProposalsDashboard from "./pages/admin/ProposalsDashboard";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminLayout from "./components/admin/AdminLayout";
import ContactSubmissions from "./pages/admin/ContactSubmissions";
import AssetLifecycle from "./pages/fm-operations/AssetLifecycle";
import EmergencyResponse from "./pages/services/EmergencyResponse";
import BusinessContinuity from "./pages/fm-operations/BusinessContinuity";
import DisasterRecovery from "./pages/services/DisasterRecovery";
import OccupierExperience from "./pages/fm-operations/OccupierExperience";
import Concierge from "./pages/soft-services/Concierge";
import SpacePlanning from "./pages/services/SpacePlanning";
import SpecialistCleaning from "./pages/soft-services/SpecialistCleaning";
import GroundsMaintenance from "./pages/soft-services/GroundsMaintenance";
import WasteRecycling from "./pages/soft-services/WasteRecycling";
import FMStrategy from "./pages/fm-operations/FMStrategy";
import FMOperationsTenderSupport from "./pages/fm-operations/TenderSupport";
import Helpdesk from "./pages/fm-operations/Helpdesk";
import Mobilisation from "./pages/fm-operations/Mobilisation";
import PPMDelivery from "./pages/fm-operations/PPMDelivery";
import ReactiveMaintenance from "./pages/fm-operations/ReactiveMaintenance";
import FMOperations from "./pages/FMOperations";
import { LegacyRedirects } from "./components/shared/LegacyRedirects";

const queryClient = new QueryClient();

// Scroll to top on route change
const ScrollToTop = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return null;
};
const App = () => <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <LoadingBar />
        <ScrollToTop />
        <LegacyRedirects />
        <div className="flex flex-col min-h-screen">
          <Header className="opacity-95" />
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
          <Route path="/services/sprinklers" element={<Sprinklers />} />
          <Route path="/services/plumbing" element={<Plumbing />} />
          <Route path="/services/water-hygiene" element={<WaterHygiene />} />
          <Route path="/services/building-fabric" element={<BuildingFabric />} />
          <Route path="/services/gas-safety" element={<GasSafety />} />
          <Route path="/services/dry-riser-testing" element={<DryRiserTesting />} />
          <Route path="/services/lifting-equipment" element={<LiftingEquipment />} />
          <Route path="/services/height-safety" element={<HeightSafety />} />
          <Route path="/services/smoke-vent-systems" element={<SmokeVentSystems />} />
          <Route path="/services/rising-mains" element={<RisingMains />} />
          <Route path="/services/fire-compartmentation-surveys" element={<FireCompartmentationSurveys />} />
          <Route path="/services/pump-room-maintenance" element={<PumpRoomMaintenance />} />
          <Route path="/services/plant-room-risk-assessments" element={<PlantRoomRiskAssessments />} />
          <Route path="/services/generator-maintenance" element={<GeneratorMaintenance />} />
          <Route path="/services/load-bank-testing" element={<LoadBankTesting />} />
          <Route path="/services/ups-maintenance" element={<UPSMaintenance />} />
          <Route path="/services/data-centre-cooling-compliance" element={<DataCentreCoolingCompliance />} />
          <Route path="/services/dock-leveller-maintenance" element={<DockLevellerMaintenance />} />
          <Route path="/services/roller-shutter-maintenance" element={<RollerShutterMaintenance />} />
          <Route path="/services/evacuation-chair-servicing" element={<EvacuationChairServicing />} />
          <Route path="/services/car-park-co-monitoring" element={<CarParkCOMonitoring />} />
          <Route path="/services/water-treatment-plant-maintenance" element={<WaterTreatmentPlantMaintenance />} />
          <Route path="/services/bms-integration-testing" element={<BMSIntegrationTesting />} />
          <Route path="/services/hard-services-fm" element={<HardServicesFM />} />
          <Route path="/services/me-services" element={<MEServices />} />
          <Route path="/services/access-control" element={<AccessControl />} />
          <Route path="/services/emergency-systems" element={<EmergencySystems />} />
          <Route path="/services/commercial-plumbing" element={<CommercialPlumbing />} />
          <Route path="/services/building-inspections" element={<BuildingInspections />} />
          <Route path="/services/smart-building-iot" element={<SmartBuildingIoT />} />
          <Route path="/services/thermal-imaging-surveys" element={<ThermalImagingSurveys />} />
          <Route path="/services/power-quality-analysis" element={<PowerQualityAnalysis />} />
          <Route path="/services/waste-compliance" element={<WasteCompliance />} />
          <Route path="/services/water-optimisation" element={<WaterOptimisation />} />
          <Route path="/services/sustainability-monitoring" element={<SustainabilityMonitoring />} />
          <Route path="/services/drone-inspections" element={<DroneInspections />} />
          <Route path="/services/cctv-maintenance" element={<CCTVMaintenance />} />
          <Route path="/services/anpr-systems" element={<ANPRSystems />} />
          <Route path="/services/access-control-advanced" element={<AccessControlAdvanced />} />
          <Route path="/services/security-systems-healthcheck" element={<SecuritySystemsHealthcheck />} />
          <Route path="/services/drainage-cctv-surveys" element={<DrainageCCTVSurveys />} />
          <Route path="/services/interceptor-maintenance" element={<InterceptorMaintenance />} />
          <Route path="/services/pump-station-servicing" element={<PumpStationServicing />} />
          <Route path="/services/grease-trap-maintenance" element={<GreaseTrapMaintenance />} />
          <Route path="/services/fume-extraction-lev" element={<FumeExtractionLEV />} />
          <Route path="/services/industrial-refrigeration" element={<IndustrialRefrigeration />} />
          <Route path="/services/mewp-safety-checks" element={<MEWPSafetyChecks />} />
          <Route path="/services/loading-bay-safety-systems" element={<LoadingBaySafetySystems />} />
          <Route path="/services/compressor-maintenance" element={<CompressorMaintenance />} />
          <Route path="/services/bmu-cradle-servicing" element={<BMUCradleServicing />} />
          <Route path="/services/mansafe-testing" element={<MansafeTesting />} />
          <Route path="/services/abseil-rail-certification" element={<AbseilRailCertification />} />
          <Route path="/services/roof-safety-inspections" element={<RoofSafetyInspections />} />
          <Route path="/services/smoke-vent-systems" element={<SmokeVentSystems />} />
          <Route path="/services/staircase-pressurisation" element={<StairwellPressurisationFans />} />
          <Route path="/services/car-park-fume-extraction" element={<CarParkFumeExtraction />} />
          <Route path="/services/indoor-air-quality-testing" element={<IndoorAirQualityTesting />} />
          <Route path="/services/energy-optimisation" element={<EnergyOptimisation />} />
          <Route path="/services/environmental-noise-surveys" element={<EnvironmentalNoiseSurveys />} />
          <Route path="/services/air-filtration-hepa" element={<AirFiltrationHEPA />} />
          <Route path="/services/dilapidation-compliance" element={<DilapidationCompliance />} />
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
              <Route path="/sectors/airports" element={<Airports />} />
              <Route path="/sectors/venues" element={<Venues />} />
              <Route path="/sectors/residential" element={<Residential />} />
              <Route path="/sectors/logistics-parks" element={<LogisticsParks />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/locations/london" element={<London />} />
            <Route path="/locations/manchester" element={<Manchester />} />
            <Route path="/locations/birmingham" element={<Birmingham />} />
            <Route path="/locations/leeds" element={<Leeds />} />
            <Route path="/locations/sheffield" element={<Sheffield />} />
            <Route path="/locations/liverpool" element={<Liverpool />} />
            <Route path="/locations/leicester" element={<Leicester />} />
            <Route path="/locations/nottingham" element={<Nottingham />} />
            <Route path="/locations/derby" element={<Derby />} />
            <Route path="/locations/chesterfield" element={<Chesterfield />} />
            <Route path="/locations/lincoln" element={<Lincoln />} />
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
              <Route path="/search" element={<Search />} />
        <Route path="/fm-insights" element={<FMInsights />} />
        <Route path="/fm-insights/what-is-facilities-management" element={<WhatIsFacilitiesManagement />} />
        <Route path="/fm-insights/what-is-hard-fm" element={<WhatIsHardFM />} />
        <Route path="/fm-insights/what-is-soft-fm" element={<WhatIsSoftFM />} />
        <Route path="/fm-insights/what-is-statutory-maintenance" element={<WhatIsStatutoryMaintenance />} />
        <Route path="/fm-insights/what-is-ppm" element={<WhatIsPPM />} />
        <Route path="/fm-insights/what-is-an-eicr" element={<WhatIsAnEICR />} />
        <Route path="/fm-insights/what-is-a-tm44" element={<WhatIsATM44 />} />
        <Route path="/fm-insights/what-is-acop-l8" element={<WhatIsACOPL8 />} />
        <Route path="/fm-insights/what-is-f-gas-compliance" element={<WhatIsFGasCompliance />} />
        <Route path="/fm-insights/how-often-emergency-lighting-tested" element={<HowOftenEmergencyLightingTested />} />
        <Route path="/fm-insights/how-often-fire-alarms-tested" element={<HowOftenFireAlarmsTested />} />
        <Route path="/fm-insights/who-is-the-responsible-person" element={<WhoIsTheResponsiblePerson />} />
              <Route path="/suppliers" element={<Suppliers />} />
              <Route path="/integrations" element={<Integrations />} />
              <Route path="/integrations/elogbooks" element={<ELogbooks />} />
              <Route path="/integrations/dwellant" element={<Dwellant />} />
              <Route path="/integrations/verisae" element={<Verisae />} />
              <Route path="/integrations/mri-qube" element={<MriQube />} />
              <Route path="/integrations/planon" element={<Planon />} />
              <Route path="/integrations/concept-evolution" element={<ConceptEvolution />} />
              <Route path="/integrations/mycompliance" element={<MyCompliance />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/resources/compliance-calendar" element={<ComplianceCalendar />} />
              <Route path="/resources/audit-framework" element={<AuditFramework />} />
              <Route path="/resources/switch-playbook" element={<SwitchingProvider />} />
              <Route path="/resources/fire-risk-guide" element={<FireRiskGuide />} />
              <Route path="/resources/eicr-manual" element={<EICRManual />} />
              <Route path="/resources/emergency-lighting-checklist" element={<EmergencyLightingChecklist />} />
              <Route path="/resources/legionella-guide" element={<LegionellaGuide />} />
              <Route path="/resources/fgas-tracker" element={<FGasTracker />} />
              <Route path="/resources/energy-esg" element={<EnergyESG />} />
              <Route path="/resources/engineer-standards" element={<EngineerStandards />} />
              <Route path="/resources/tender-support" element={<TenderSupport />} />
              <Route path="/resources/top-fm-providers-uk" element={<TopFMProviders />} />
              <Route path="/resources/fire-alarm-testing-frequency" element={<FireAlarmTesting />} />
              <Route path="/services/front-of-house" element={<FrontOfHouse />} />
              <Route path="/leadership" element={<Leadership />} />
              <Route path="/social-value" element={<SocialValue />} />
              <Route path="/visual-standards" element={<VisualStandards />} />
              <Route path="/sustainability" element={<Sustainability />} />
              <Route path="/innovation" element={<Innovation />} />
              <Route path="/partnerships" element={<Partnerships />} />
              <Route path="/awards" element={<Awards />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/contact" element={<Contact />} />
              {/* Comparison Pages */}
              <Route path="/compare/entirefm-vs-mitie" element={<EntireFMvsMitie />} />
              
              {/* Wave 7: FM Operations & Soft Services */}
              <Route path="/fm-operations" element={<FMOperations />} />
              <Route path="/fm-operations/asset-lifecycle" element={<AssetLifecycle />} />
              <Route path="/fm-operations/business-continuity" element={<BusinessContinuity />} />
              <Route path="/fm-operations/occupier-experience" element={<OccupierExperience />} />
              <Route path="/fm-operations/fm-strategy" element={<FMStrategy />} />
              <Route path="/fm-operations/tender-support" element={<FMOperationsTenderSupport />} />
              <Route path="/fm-operations/helpdesk" element={<Helpdesk />} />
              <Route path="/fm-operations/mobilisation" element={<Mobilisation />} />
              <Route path="/fm-operations/ppm-delivery" element={<PPMDelivery />} />
              <Route path="/fm-operations/reactive-maintenance" element={<ReactiveMaintenance />} />
              <Route path="/services/emergency-response" element={<EmergencyResponse />} />
              <Route path="/services/disaster-recovery" element={<DisasterRecovery />} />
              <Route path="/services/space-planning" element={<SpacePlanning />} />
              <Route path="/soft-services/concierge" element={<Concierge />} />
              <Route path="/soft-services/specialist-cleaning" element={<SpecialistCleaning />} />
              <Route path="/soft-services/grounds-maintenance" element={<GroundsMaintenance />} />
              <Route path="/soft-services/waste-recycling" element={<WasteRecycling />} />
              
              
              {/* Admin Routes */}
              <Route path="/admin/login" element={<AdminLogin />} />
              <Route path="/admin" element={<AdminLayout />}>
                <Route index element={<AdminDashboard />} />
                <Route path="proposals" element={<ProposalsDashboard />} />
                <Route path="contacts" element={<ContactSubmissions />} />
                <Route path="site-map" element={<SiteMap />} />
                <Route path="link-health" element={<LinkHealthDashboard />} />
                <Route path="search-analytics" element={<SearchAnalyticsDashboard />} />
                <Route path="ppm-calculator" element={<PPMCalculator />} />
                <Route path="tm44-checker" element={<TM44Checker />} />
                <Route path="water-risk-grader" element={<WaterRiskGrader />} />
                <Route path="cost-savings-calculator" element={<CostSavingsCalculator />} />
                <Route path="sla-benchmark" element={<SLABenchmark />} />
                <Route path="risk-diagnostic" element={<ComplianceDiagnostic />} />
              </Route>
              
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
          <FloatingCTA />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>;
export default App;