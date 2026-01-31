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
import WhyEntireFM from "./pages/WhyEntireFM";
import CompliancePackRequest from "./pages/CompliancePackRequest";
import ComplianceDiagnostic from "./pages/ComplianceDiagnostic";
import CostSavingsCalculator from "./pages/tools/CostSavingsCalculator";
import TopFMProviders from "./pages/resources/TopFMProviders";
import FireAlarmTesting from "./pages/resources/FireAlarmTesting";
import EntireFMvsMitie from "./pages/compare/EntireFMvsMitie";
import Compare from "./pages/Compare";
import EntireFMvsCBRE from "./pages/compare/EntireFMvsCBRE";
import EntireFMvsJLL from "./pages/compare/EntireFMvsJLL";
import EntireFMvsSodexo from "./pages/compare/EntireFMvsSodexo";
import EntireFMvsInHouse from "./pages/compare/EntireFMvsInHouse";
import EntireFMvsFreelance from "./pages/compare/EntireFMvsFreelance";
import EntireFMvsCallOutOnly from "./pages/compare/EntireFMvsCallOutOnly";
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
import WhatIsPPMPlanner from "./pages/fm-insights/WhatIsPPMPlanner";
import WhatIsComplianceCalendar from "./pages/fm-insights/WhatIsComplianceCalendar";
import WhatIsAssetRegister from "./pages/fm-insights/WhatIsAssetRegister";
import WhatIsLOTO from "./pages/fm-insights/WhatIsLOTO";
import WhatIsFireRiskAssessment from "./pages/fm-insights/WhatIsFireRiskAssessment";
import WhatAreRAMS from "./pages/fm-insights/WhatAreRAMS";
import HardFMvsSoftFM from "./pages/fm-insights/HardFMvsSoftFM";
import WhatIsTFM from "./pages/fm-insights/WhatIsTFM";
import WhatIsIFM from "./pages/fm-insights/WhatIsIFM";
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
import HelpdeskJobs from "./pages/admin/HelpdeskJobs";
import MarketingDashboard from "./pages/admin/MarketingDashboard";
import ContentList from "./pages/admin/ContentList";
import ContentEditor from "./pages/admin/ContentEditor";
import SocialMediaManager from "./pages/admin/SocialMediaManager";
import AIMediaStudio from "./pages/admin/AIMediaStudio";
import PageManager from "./pages/admin/PageManager";
import PageCreator from "./pages/admin/PageCreator";
import SEOTools from "./pages/admin/SEOTools";
import ClientLogos from "./pages/admin/ClientLogos";
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
import Leads from "./pages/fm-operations/Leads";
import ReportIssue from "./pages/fm-operations/ReportIssue";
import KnowledgeBase from "./pages/fm-operations/KnowledgeBase";
import Platform from "./pages/fm-operations/Platform";
import Jobs from "./pages/admin/Jobs";
import { LegacyRedirects } from "./components/shared/LegacyRedirects";
import { CriticalInfrastructureRedirects } from "./components/shared/CriticalInfrastructureRedirects";
import LightningProtection from "./pages/services/critical/LightningProtection";
import CriticalUPSMaintenance from "./pages/services/critical/UPSMaintenance";
import CriticalGeneratorMaintenance from "./pages/services/critical/GeneratorMaintenance";
import PowerRedundancy from "./pages/services/critical/PowerRedundancy";
import ThermalImaging from "./pages/services/critical/ThermalImaging";
import ArcFlashAssessment from "./pages/services/critical/ArcFlashAssessment";
import HVSwitching from "./pages/services/critical/HVSwitching";
import PowerQuality from "./pages/services/critical/PowerQuality";
import DataRoomAudits from "./pages/services/critical/DataRoomAudits";

// Critical Infrastructure Regional Pages
import LightningProtectionLondon from "./pages/services/critical/lightning-protection/London";
import LightningProtectionBirmingham from "./pages/services/critical/lightning-protection/Birmingham";
import LightningProtectionManchester from "./pages/services/critical/lightning-protection/Manchester";
import LightningProtectionLeeds from "./pages/services/critical/lightning-protection/Leeds";
import LightningProtectionSheffield from "./pages/services/critical/lightning-protection/Sheffield";
import LightningProtectionNottingham from "./pages/services/critical/lightning-protection/Nottingham";
import LightningProtectionDerby from "./pages/services/critical/lightning-protection/Derby";
import LightningProtectionChesterfield from "./pages/services/critical/lightning-protection/Chesterfield";
import LightningProtectionLincoln from "./pages/services/critical/lightning-protection/Lincoln";

import CriticalUPSMaintenanceLondon from "./pages/services/critical/ups-maintenance/London";
import CriticalUPSMaintenanceBirmingham from "./pages/services/critical/ups-maintenance/Birmingham";
import CriticalUPSMaintenanceManchester from "./pages/services/critical/ups-maintenance/Manchester";
import CriticalUPSMaintenanceLeeds from "./pages/services/critical/ups-maintenance/Leeds";
import CriticalUPSMaintenanceSheffield from "./pages/services/critical/ups-maintenance/Sheffield";
import CriticalUPSMaintenanceNottingham from "./pages/services/critical/ups-maintenance/Nottingham";
import CriticalUPSMaintenanceDerby from "./pages/services/critical/ups-maintenance/Derby";
import CriticalUPSMaintenanceChesterfield from "./pages/services/critical/ups-maintenance/Chesterfield";
import CriticalUPSMaintenanceLincoln from "./pages/services/critical/ups-maintenance/Lincoln";

import CriticalGeneratorMaintenanceLondon from "./pages/services/critical/generator-maintenance/London";
import CriticalGeneratorMaintenanceBirmingham from "./pages/services/critical/generator-maintenance/Birmingham";
import CriticalGeneratorMaintenanceManchester from "./pages/services/critical/generator-maintenance/Manchester";
import CriticalGeneratorMaintenanceLeeds from "./pages/services/critical/generator-maintenance/Leeds";
import CriticalGeneratorMaintenanceSheffield from "./pages/services/critical/generator-maintenance/Sheffield";
import CriticalGeneratorMaintenanceNottingham from "./pages/services/critical/generator-maintenance/Nottingham";
import CriticalGeneratorMaintenanceDerby from "./pages/services/critical/generator-maintenance/Derby";
import CriticalGeneratorMaintenanceChesterfield from "./pages/services/critical/generator-maintenance/Chesterfield";
import CriticalGeneratorMaintenanceLincoln from "./pages/services/critical/generator-maintenance/Lincoln";

import ThermalImagingLondon from "./pages/services/critical/thermal-imaging/London";
import ThermalImagingBirmingham from "./pages/services/critical/thermal-imaging/Birmingham";
import ThermalImagingManchester from "./pages/services/critical/thermal-imaging/Manchester";
import ThermalImagingLeeds from "./pages/services/critical/thermal-imaging/Leeds";
import ThermalImagingSheffield from "./pages/services/critical/thermal-imaging/Sheffield";
import ThermalImagingNottingham from "./pages/services/critical/thermal-imaging/Nottingham";
import ThermalImagingDerby from "./pages/services/critical/thermal-imaging/Derby";
import ThermalImagingChesterfield from "./pages/services/critical/thermal-imaging/Chesterfield";
import ThermalImagingLincoln from "./pages/services/critical/thermal-imaging/Lincoln";

import ArcFlashAssessmentLondon from "./pages/services/critical/arc-flash-assessment/London";
import ArcFlashAssessmentBirmingham from "./pages/services/critical/arc-flash-assessment/Birmingham";
import ArcFlashAssessmentManchester from "./pages/services/critical/arc-flash-assessment/Manchester";
import ArcFlashAssessmentLeeds from "./pages/services/critical/arc-flash-assessment/Leeds";
import ArcFlashAssessmentSheffield from "./pages/services/critical/arc-flash-assessment/Sheffield";
import ArcFlashAssessmentNottingham from "./pages/services/critical/arc-flash-assessment/Nottingham";
import ArcFlashAssessmentDerby from "./pages/services/critical/arc-flash-assessment/Derby";
import ArcFlashAssessmentChesterfield from "./pages/services/critical/arc-flash-assessment/Chesterfield";
import ArcFlashAssessmentLincoln from "./pages/services/critical/arc-flash-assessment/Lincoln";

import HVSwitchingLondon from "./pages/services/critical/hv-switching/London";
import HVSwitchingBirmingham from "./pages/services/critical/hv-switching/Birmingham";
import HVSwitchingManchester from "./pages/services/critical/hv-switching/Manchester";
import HVSwitchingLeeds from "./pages/services/critical/hv-switching/Leeds";
import HVSwitchingSheffield from "./pages/services/critical/hv-switching/Sheffield";
import HVSwitchingNottingham from "./pages/services/critical/hv-switching/Nottingham";
import HVSwitchingDerby from "./pages/services/critical/hv-switching/Derby";
import HVSwitchingChesterfield from "./pages/services/critical/hv-switching/Chesterfield";
import HVSwitchingLincoln from "./pages/services/critical/hv-switching/Lincoln";

import PowerRedundancyLondon from "./pages/services/critical/power-redundancy/London";
import PowerRedundancyBirmingham from "./pages/services/critical/power-redundancy/Birmingham";
import PowerRedundancyManchester from "./pages/services/critical/power-redundancy/Manchester";
import PowerRedundancyLeeds from "./pages/services/critical/power-redundancy/Leeds";
import PowerRedundancySheffield from "./pages/services/critical/power-redundancy/Sheffield";
import PowerRedundancyNottingham from "./pages/services/critical/power-redundancy/Nottingham";
import PowerRedundancyDerby from "./pages/services/critical/power-redundancy/Derby";
import PowerRedundancyChesterfield from "./pages/services/critical/power-redundancy/Chesterfield";
import PowerRedundancyLincoln from "./pages/services/critical/power-redundancy/Lincoln";

import PowerQualityLondon from "./pages/services/critical/power-quality/London";
import PowerQualityBirmingham from "./pages/services/critical/power-quality/Birmingham";
import PowerQualityManchester from "./pages/services/critical/power-quality/Manchester";
import PowerQualityLeeds from "./pages/services/critical/power-quality/Leeds";
import PowerQualitySheffield from "./pages/services/critical/power-quality/Sheffield";
import PowerQualityNottingham from "./pages/services/critical/power-quality/Nottingham";
import PowerQualityDerby from "./pages/services/critical/power-quality/Derby";
import PowerQualityChesterfield from "./pages/services/critical/power-quality/Chesterfield";
import PowerQualityLincoln from "./pages/services/critical/power-quality/Lincoln";

import DataRoomAuditsLondon from "./pages/services/critical/data-room-audits/London";
import DataRoomAuditsBirmingham from "./pages/services/critical/data-room-audits/Birmingham";
import DataRoomAuditsManchester from "./pages/services/critical/data-room-audits/Manchester";
import DataRoomAuditsLeeds from "./pages/services/critical/data-room-audits/Leeds";
import DataRoomAuditsSheffield from "./pages/services/critical/data-room-audits/Sheffield";
import DataRoomAuditsNottingham from "./pages/services/critical/data-room-audits/Nottingham";
import DataRoomAuditsDerby from "./pages/services/critical/data-room-audits/Derby";
import DataRoomAuditsChesterfield from "./pages/services/critical/data-room-audits/Chesterfield";
import DataRoomAuditsLincoln from "./pages/services/critical/data-room-audits/Lincoln";

// Geographical FM Landing Pages
import FMLondon from "./pages/fm-locations/FMLondon";
import FMLeeds from "./pages/fm-locations/FMLeeds";
import FMBirmingham from "./pages/fm-locations/FMBirmingham";
import FMLincoln from "./pages/fm-locations/FMLincoln";
import FMChesterfield from "./pages/fm-locations/FMChesterfield";
import FMSheffield from "./pages/fm-locations/FMSheffield";
import FMNottingham from "./pages/fm-locations/FMNottingham";
import FMManchester from "./pages/fm-locations/FMManchester";
import FMLiverpool from "./pages/fm-locations/FMLiverpool";
import FMDerby from "./pages/fm-locations/FMDerby";
import FMOxford from "./pages/fm-locations/FMOxford";
import FMDoncaster from "./pages/fm-locations/FMDoncaster";
import FMRotherham from "./pages/fm-locations/FMRotherham";
import FMTelford from "./pages/fm-locations/FMTelford";

// Facilities Management Long-form URL Landing Pages
import FacilitiesManagementChesterfield from "./pages/fm-locations/FacilitiesManagementChesterfield";
import FacilitiesManagementManchester from "./pages/fm-locations/FacilitiesManagementManchester";
import FacilitiesManagementTelford from "./pages/fm-locations/FacilitiesManagementTelford";
import FacilitiesManagementMidlands from "./pages/fm-locations/FacilitiesManagementMidlands";
import FacilitiesManagementLincoln from "./pages/fm-locations/FacilitiesManagementLincoln";
import FacilitiesManagementLondon from "./pages/fm-locations/FacilitiesManagementLondon";
import FacilitiesManagementBradford from "./pages/fm-locations/FacilitiesManagementBradford";
import FacilitiesManagementDerby from "./pages/fm-locations/FacilitiesManagementDerby";
import FacilitiesManagementBirmingham from "./pages/fm-locations/FacilitiesManagementBirmingham";
import LondonFacilitiesManagement from "./pages/fm-locations/LondonFacilitiesManagement";
import FacilitiesManagementLeeds from "./pages/fm-locations/FacilitiesManagementLeeds";
import FacilitiesManagementSheffield from "./pages/fm-locations/FacilitiesManagementSheffield";
import FacilitiesManagementNottingham from "./pages/fm-locations/FacilitiesManagementNottingham";
import FacilitiesManagementLiverpool from "./pages/fm-locations/FacilitiesManagementLiverpool";
import FacilitiesManagementOxford from "./pages/fm-locations/FacilitiesManagementOxford";
import FacilitiesManagementDoncaster from "./pages/fm-locations/FacilitiesManagementDoncaster";
import FacilitiesManagementRotherham from "./pages/fm-locations/FacilitiesManagementRotherham";

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
        <CriticalInfrastructureRedirects />
        <div className="flex flex-col min-h-screen">
          <Header className="opacity-95" />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              
              {/* Geographical FM Landing Pages */}
              <Route path="/fm-london" element={<FMLondon />} />
              <Route path="/fm-leeds" element={<FMLeeds />} />
              <Route path="/fm-birmingham" element={<FMBirmingham />} />
              <Route path="/fm-lincoln" element={<FMLincoln />} />
              <Route path="/fm-chesterfield" element={<FMChesterfield />} />
              <Route path="/fm-sheffield" element={<FMSheffield />} />
              <Route path="/fm-nottingham" element={<FMNottingham />} />
              <Route path="/fm-manchester" element={<FMManchester />} />
              <Route path="/fm-liverpool" element={<FMLiverpool />} />
              <Route path="/fm-derby" element={<FMDerby />} />
              <Route path="/fm-oxford" element={<FMOxford />} />
              <Route path="/fm-doncaster" element={<FMDoncaster />} />
              <Route path="/fm-rotherham" element={<FMRotherham />} />
              <Route path="/fm-telford" element={<FMTelford />} />
              
              {/* Facilities Management Long-form URL Landing Pages */}
              <Route path="/facilities-management-chesterfield" element={<FacilitiesManagementChesterfield />} />
              <Route path="/facilities-management-manchester" element={<FacilitiesManagementManchester />} />
              <Route path="/facilities-management-telford" element={<FacilitiesManagementTelford />} />
              <Route path="/facilities-management-midlands" element={<FacilitiesManagementMidlands />} />
              <Route path="/facilities-management-lincoln" element={<FacilitiesManagementLincoln />} />
              <Route path="/facilities-management-london" element={<FacilitiesManagementLondon />} />
              <Route path="/facilities-management-bradford" element={<FacilitiesManagementBradford />} />
              <Route path="/facilities-management-derby" element={<FacilitiesManagementDerby />} />
              <Route path="/facilities-management-birmingham" element={<FacilitiesManagementBirmingham />} />
              <Route path="/london-facilities-management" element={<LondonFacilitiesManagement />} />
              <Route path="/facilities-management-leeds" element={<FacilitiesManagementLeeds />} />
              <Route path="/facilities-management-sheffield" element={<FacilitiesManagementSheffield />} />
              <Route path="/facilities-management-nottingham" element={<FacilitiesManagementNottingham />} />
              <Route path="/facilities-management-liverpool" element={<FacilitiesManagementLiverpool />} />
              <Route path="/facilities-management-oxford" element={<FacilitiesManagementOxford />} />
              <Route path="/facilities-management-doncaster" element={<FacilitiesManagementDoncaster />} />
              <Route path="/facilities-management-rotherham" element={<FacilitiesManagementRotherham />} />
              
              <Route path="/request-proposal" element={<RequestProposal />} />
              <Route path="/tools/ppm-calculator" element={<PPMCalculator />} />
              <Route path="/tools/tm44-checker" element={<TM44Checker />} />
              <Route path="/tools/water-risk-grader" element={<WaterRiskGrader />} />
              <Route path="/tools/cost-savings" element={<CostSavingsCalculator />} />
              <Route path="/tools/cost-savings-calculator" element={<CostSavingsCalculator />} />
              <Route path="/tools/sla-benchmark" element={<SLABenchmark />} />
              <Route path="/tools/risk-diagnostic" element={<ComplianceDiagnostic />} />
              <Route path="/compliance-diagnostic" element={<ComplianceDiagnostic />} /> {/* Alias */}
              <Route path="/services" element={<Services />} />
          <Route path="/services/hard-fm" element={<HardServices />} />
          <Route path="/services/hvac" element={<HVAC />} />
          <Route path="/services/hvac-compliance" element={<HVACCompliance />} />
          <Route path="/services/ppm-compliance" element={<PPM />} />
          <Route path="/services/ppm" element={<PPM />} /> {/* Alias for ppm-compliance */}
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
              {/* Critical Infrastructure - Parent Routes */}
              <Route path="/services/critical/lightning-protection" element={<LightningProtection />} />
              <Route path="/services/critical/ups-maintenance" element={<CriticalUPSMaintenance />} />
              <Route path="/services/critical/generator-maintenance" element={<CriticalGeneratorMaintenance />} />
              <Route path="/services/critical/power-redundancy" element={<PowerRedundancy />} />
              <Route path="/services/critical/thermal-imaging" element={<ThermalImaging />} />
              <Route path="/services/critical/arc-flash-assessment" element={<ArcFlashAssessment />} />
              <Route path="/services/critical/hv-switching" element={<HVSwitching />} />
              <Route path="/services/critical/power-quality" element={<PowerQuality />} />
              <Route path="/services/critical/data-room-audits" element={<DataRoomAudits />} />
              
              {/* Critical Infrastructure - Regional Routes: Lightning Protection */}
              <Route path="/services/critical/lightning-protection/London" element={<LightningProtectionLondon />} />
              <Route path="/services/critical/lightning-protection/Birmingham" element={<LightningProtectionBirmingham />} />
              <Route path="/services/critical/lightning-protection/Manchester" element={<LightningProtectionManchester />} />
              <Route path="/services/critical/lightning-protection/Leeds" element={<LightningProtectionLeeds />} />
              <Route path="/services/critical/lightning-protection/Sheffield" element={<LightningProtectionSheffield />} />
              <Route path="/services/critical/lightning-protection/Nottingham" element={<LightningProtectionNottingham />} />
              <Route path="/services/critical/lightning-protection/Derby" element={<LightningProtectionDerby />} />
              <Route path="/services/critical/lightning-protection/Chesterfield" element={<LightningProtectionChesterfield />} />
              <Route path="/services/critical/lightning-protection/Lincoln" element={<LightningProtectionLincoln />} />
              
              {/* UPS Maintenance Regional Routes */}
              <Route path="/services/critical/ups-maintenance/London" element={<CriticalUPSMaintenanceLondon />} />
              <Route path="/services/critical/ups-maintenance/Birmingham" element={<CriticalUPSMaintenanceBirmingham />} />
              <Route path="/services/critical/ups-maintenance/Manchester" element={<CriticalUPSMaintenanceManchester />} />
              <Route path="/services/critical/ups-maintenance/Leeds" element={<CriticalUPSMaintenanceLeeds />} />
              <Route path="/services/critical/ups-maintenance/Sheffield" element={<CriticalUPSMaintenanceSheffield />} />
              <Route path="/services/critical/ups-maintenance/Nottingham" element={<CriticalUPSMaintenanceNottingham />} />
              <Route path="/services/critical/ups-maintenance/Derby" element={<CriticalUPSMaintenanceDerby />} />
              <Route path="/services/critical/ups-maintenance/Chesterfield" element={<CriticalUPSMaintenanceChesterfield />} />
              <Route path="/services/critical/ups-maintenance/Lincoln" element={<CriticalUPSMaintenanceLincoln />} />
              
              {/* Generator Maintenance Regional Routes */}
              <Route path="/services/critical/generator-maintenance/London" element={<CriticalGeneratorMaintenanceLondon />} />
              <Route path="/services/critical/generator-maintenance/Birmingham" element={<CriticalGeneratorMaintenanceBirmingham />} />
              <Route path="/services/critical/generator-maintenance/Manchester" element={<CriticalGeneratorMaintenanceManchester />} />
              <Route path="/services/critical/generator-maintenance/Leeds" element={<CriticalGeneratorMaintenanceLeeds />} />
              <Route path="/services/critical/generator-maintenance/Sheffield" element={<CriticalGeneratorMaintenanceSheffield />} />
              <Route path="/services/critical/generator-maintenance/Nottingham" element={<CriticalGeneratorMaintenanceNottingham />} />
              <Route path="/services/critical/generator-maintenance/Derby" element={<CriticalGeneratorMaintenanceDerby />} />
              <Route path="/services/critical/generator-maintenance/Chesterfield" element={<CriticalGeneratorMaintenanceChesterfield />} />
              <Route path="/services/critical/generator-maintenance/Lincoln" element={<CriticalGeneratorMaintenanceLincoln />} />
              
              {/* Thermal Imaging Regional Routes */}
              <Route path="/services/critical/thermal-imaging/London" element={<ThermalImagingLondon />} />
              <Route path="/services/critical/thermal-imaging/Birmingham" element={<ThermalImagingBirmingham />} />
              <Route path="/services/critical/thermal-imaging/Manchester" element={<ThermalImagingManchester />} />
              <Route path="/services/critical/thermal-imaging/Leeds" element={<ThermalImagingLeeds />} />
              <Route path="/services/critical/thermal-imaging/Sheffield" element={<ThermalImagingSheffield />} />
              <Route path="/services/critical/thermal-imaging/Nottingham" element={<ThermalImagingNottingham />} />
              <Route path="/services/critical/thermal-imaging/Derby" element={<ThermalImagingDerby />} />
              <Route path="/services/critical/thermal-imaging/Chesterfield" element={<ThermalImagingChesterfield />} />
              <Route path="/services/critical/thermal-imaging/Lincoln" element={<ThermalImagingLincoln />} />
              
              {/* Arc Flash Assessment Regional Routes */}
              <Route path="/services/critical/arc-flash-assessment/London" element={<ArcFlashAssessmentLondon />} />
              <Route path="/services/critical/arc-flash-assessment/Birmingham" element={<ArcFlashAssessmentBirmingham />} />
              <Route path="/services/critical/arc-flash-assessment/Manchester" element={<ArcFlashAssessmentManchester />} />
              <Route path="/services/critical/arc-flash-assessment/Leeds" element={<ArcFlashAssessmentLeeds />} />
              <Route path="/services/critical/arc-flash-assessment/Sheffield" element={<ArcFlashAssessmentSheffield />} />
              <Route path="/services/critical/arc-flash-assessment/Nottingham" element={<ArcFlashAssessmentNottingham />} />
              <Route path="/services/critical/arc-flash-assessment/Derby" element={<ArcFlashAssessmentDerby />} />
              <Route path="/services/critical/arc-flash-assessment/Chesterfield" element={<ArcFlashAssessmentChesterfield />} />
              <Route path="/services/critical/arc-flash-assessment/Lincoln" element={<ArcFlashAssessmentLincoln />} />
              
              {/* HV Switching Regional Routes */}
              <Route path="/services/critical/hv-switching/London" element={<HVSwitchingLondon />} />
              <Route path="/services/critical/hv-switching/Birmingham" element={<HVSwitchingBirmingham />} />
              <Route path="/services/critical/hv-switching/Manchester" element={<HVSwitchingManchester />} />
              <Route path="/services/critical/hv-switching/Leeds" element={<HVSwitchingLeeds />} />
              <Route path="/services/critical/hv-switching/Sheffield" element={<HVSwitchingSheffield />} />
              <Route path="/services/critical/hv-switching/Nottingham" element={<HVSwitchingNottingham />} />
              <Route path="/services/critical/hv-switching/Derby" element={<HVSwitchingDerby />} />
              <Route path="/services/critical/hv-switching/Chesterfield" element={<HVSwitchingChesterfield />} />
              <Route path="/services/critical/hv-switching/Lincoln" element={<HVSwitchingLincoln />} />
              
              {/* Power Redundancy Regional Routes */}
              <Route path="/services/critical/power-redundancy/London" element={<PowerRedundancyLondon />} />
              <Route path="/services/critical/power-redundancy/Birmingham" element={<PowerRedundancyBirmingham />} />
              <Route path="/services/critical/power-redundancy/Manchester" element={<PowerRedundancyManchester />} />
              <Route path="/services/critical/power-redundancy/Leeds" element={<PowerRedundancyLeeds />} />
              <Route path="/services/critical/power-redundancy/Sheffield" element={<PowerRedundancySheffield />} />
              <Route path="/services/critical/power-redundancy/Nottingham" element={<PowerRedundancyNottingham />} />
              <Route path="/services/critical/power-redundancy/Derby" element={<PowerRedundancyDerby />} />
              <Route path="/services/critical/power-redundancy/Chesterfield" element={<PowerRedundancyChesterfield />} />
              <Route path="/services/critical/power-redundancy/Lincoln" element={<PowerRedundancyLincoln />} />
              
              {/* Power Quality Regional Routes */}
              <Route path="/services/critical/power-quality/London" element={<PowerQualityLondon />} />
              <Route path="/services/critical/power-quality/Birmingham" element={<PowerQualityBirmingham />} />
              <Route path="/services/critical/power-quality/Manchester" element={<PowerQualityManchester />} />
              <Route path="/services/critical/power-quality/Leeds" element={<PowerQualityLeeds />} />
              <Route path="/services/critical/power-quality/Sheffield" element={<PowerQualitySheffield />} />
              <Route path="/services/critical/power-quality/Nottingham" element={<PowerQualityNottingham />} />
              <Route path="/services/critical/power-quality/Derby" element={<PowerQualityDerby />} />
              <Route path="/services/critical/power-quality/Chesterfield" element={<PowerQualityChesterfield />} />
              <Route path="/services/critical/power-quality/Lincoln" element={<PowerQualityLincoln />} />
              
              {/* Data Room Audits Regional Routes */}
              <Route path="/services/critical/data-room-audits/London" element={<DataRoomAuditsLondon />} />
              <Route path="/services/critical/data-room-audits/Birmingham" element={<DataRoomAuditsBirmingham />} />
              <Route path="/services/critical/data-room-audits/Manchester" element={<DataRoomAuditsManchester />} />
              <Route path="/services/critical/data-room-audits/Leeds" element={<DataRoomAuditsLeeds />} />
              <Route path="/services/critical/data-room-audits/Sheffield" element={<DataRoomAuditsSheffield />} />
              <Route path="/services/critical/data-room-audits/Nottingham" element={<DataRoomAuditsNottingham />} />
              <Route path="/services/critical/data-room-audits/Derby" element={<DataRoomAuditsDerby />} />
              <Route path="/services/critical/data-room-audits/Chesterfield" element={<DataRoomAuditsChesterfield />} />
              <Route path="/services/critical/data-room-audits/Lincoln" element={<DataRoomAuditsLincoln />} />
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
        <Route path="/fm-insights/what-is-a-ppm-planner" element={<WhatIsPPMPlanner />} />
        <Route path="/fm-insights/what-is-a-compliance-calendar" element={<WhatIsComplianceCalendar />} />
        <Route path="/fm-insights/what-is-an-asset-register" element={<WhatIsAssetRegister />} />
        <Route path="/fm-insights/what-is-lock-out-tag-out" element={<WhatIsLOTO />} />
        <Route path="/fm-insights/what-is-a-fire-risk-assessment" element={<WhatIsFireRiskAssessment />} />
        <Route path="/fm-insights/what-are-rams" element={<WhatAreRAMS />} />
        <Route path="/fm-insights/hard-fm-vs-soft-fm" element={<HardFMvsSoftFM />} />
        <Route path="/fm-insights/what-is-tfm" element={<WhatIsTFM />} />
        <Route path="/fm-insights/what-is-ifm" element={<WhatIsIFM />} />
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
              {/* Why EntireFM & Comparison Pages */}
              <Route path="/why-entirefm" element={<WhyEntireFM />} />
              <Route path="/compliance-pack" element={<CompliancePackRequest />} />
              <Route path="/compare" element={<Compare />} />
              <Route path="/compare/entirefm-vs-mitie" element={<EntireFMvsMitie />} />
              <Route path="/compare/entirefm-vs-cbre" element={<EntireFMvsCBRE />} />
              <Route path="/compare/entirefm-vs-jll" element={<EntireFMvsJLL />} />
              <Route path="/compare/entirefm-vs-sodexo" element={<EntireFMvsSodexo />} />
              <Route path="/compare/entirefm-vs-in-house" element={<EntireFMvsInHouse />} />
              <Route path="/compare/entirefm-vs-freelance" element={<EntireFMvsFreelance />} />
              <Route path="/compare/entirefm-vs-call-out-only" element={<EntireFMvsCallOutOnly />} />
              
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
          <Route path="/fm-operations/leads" element={<Leads />} />
          <Route path="/fm-operations/report-issue" element={<ReportIssue />} />
          <Route path="/fm-operations/knowledge-base" element={<KnowledgeBase />} />
          <Route path="/fm-operations/platform" element={<Platform />} />
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
                <Route path="helpdesk-jobs" element={<HelpdeskJobs />} />
                <Route path="jobs" element={<Jobs />} />
                {/* Marketing Routes */}
                <Route path="marketing" element={<MarketingDashboard />} />
                <Route path="marketing/content" element={<ContentList />} />
                <Route path="marketing/content/new" element={<ContentEditor />} />
                <Route path="marketing/content/:id" element={<ContentEditor />} />
                <Route path="marketing/social" element={<SocialMediaManager />} />
                <Route path="marketing/media" element={<AIMediaStudio />} />
                <Route path="marketing/seo-tools" element={<SEOTools />} />
                {/* Client Logos */}
                <Route path="client-logos" element={<ClientLogos />} />
                {/* Page Management Routes */}
                <Route path="pages" element={<PageManager />} />
                <Route path="pages/new" element={<PageCreator />} />
                <Route path="pages/:id" element={<PageCreator />} />
                {/* Tools Routes */}
                <Route path="site-map" element={<SiteMap />} />
                <Route path="link-health" element={<LinkHealthDashboard />} />
                <Route path="search-analytics" element={<SearchAnalyticsDashboard />} />
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