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
import About from "./pages/About";
import Resources from "./pages/Resources";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import Locations from "./pages/Locations";
import NotFound from "./pages/NotFound";
import HardServices from "./pages/services/HardServices";
import HVAC from "./pages/services/HVAC";
import PPM from "./pages/services/PPM";
import Electrical from "./pages/services/Electrical";
import FireAlarms from "./pages/services/FireAlarms";
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
          <Route path="/services/hard-services" element={<HardServices />} />
          <Route path="/services/hvac" element={<HVAC />} />
          <Route path="/services/ppm" element={<PPM />} />
          <Route path="/services/electrical" element={<Electrical />} />
          <Route path="/services/fire-alarms" element={<FireAlarms />} />
          <Route path="/services/emergency-lighting" element={<EmergencyLighting />} />
          <Route path="/services/sprinklers" element={<Sprinklers />} />
          <Route path="/services/plumbing" element={<Plumbing />} />
          <Route path="/services/water-hygiene" element={<WaterHygiene />} />
          <Route path="/services/building-fabric" element={<BuildingFabric />} />
          <Route path="/services/gas-safety" element={<GasSafety />} />
              <Route path="/sectors" element={<Sectors />} />
              <Route path="/sectors/industrial-logistics" element={<IndustrialLogistics />} />
              <Route path="/sectors/retail-service-stations" element={<RetailServiceStations />} />
              <Route path="/sectors/offices-corporate" element={<OfficesCorporate />} />
              <Route path="/sectors/aviation-travel-hub" element={<AviationTravelHub />} />
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
          <Route path="/case-studies/logistics-distribution-hub" element={<LogisticsDistributionHub />} />
          <Route path="/case-studies/retail-service-stations" element={<RetailServiceStationsCaseStudy />} />
          <Route path="/case-studies/corporate-hq" element={<CorporateHQ />} />
          <Route path="/case-studies/aviation" element={<Aviation />} />
          <Route path="/case-studies/residential-pbsa" element={<ResidentialPBSACaseStudy />} />
          <Route path="/case-studies/hospitality" element={<Hospitality />} />
              <Route path="/about" element={<About />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/contact" element={<Contact />} />
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
