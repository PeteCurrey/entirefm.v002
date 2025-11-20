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
import About from "./pages/About";
import Resources from "./pages/Resources";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import Locations from "./pages/Locations";
import NotFound from "./pages/NotFound";
import HardServices from "./pages/services/HardServices";
import HVAC from "./pages/services/HVAC";
import PPM from "./pages/services/PPM";
import London from "./pages/locations/London";
import Manchester from "./pages/locations/Manchester";

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
              <Route path="/sectors" element={<Sectors />} />
              <Route path="/locations" element={<Locations />} />
              <Route path="/locations/london" element={<London />} />
              <Route path="/locations/manchester" element={<Manchester />} />
              <Route path="/technology" element={<Technology />} />
              <Route path="/case-studies" element={<CaseStudies />} />
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
