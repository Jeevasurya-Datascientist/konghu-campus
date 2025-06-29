// src/App.tsx

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Helper/Context Imports
import { LoadingProvider, useLoading } from "./hooks/LoadingContext";
import Loader from "./components/Loader";
import ScrollToTop from "./components/ScrollToTop";
import PageWrapper from "./components/PageWrapper"; // Import the wrapper

// Main Page Imports
import Index from "./pages/Index";
import AdmissionForm from "./pages/AdmissionForm";
import CampusTour from "./pages/CampusTour";
import PlacementDetails from "./pages/PlacementDetails";
import HostelTransport from "./pages/HostelTransport";
import ClubsCells from "./pages/ClubsCells";
import Academics from "./pages/Academics";
import NotFound from "./pages/NotFound";

// Department Page Imports
import ComputerEngineering from "./pages/departments/ComputerEngineering";
import CivilEngineering from "./pages/departments/CivilEngineering";
import MechanicalEngineering from "./pages/departments/MechanicalEngineering";
import AutomobileEngineering from "./pages/departments/AutomobileEngineering";
import DMLT from "./pages/departments/DMLT";
import ChemicalEngineering from "./pages/departments/ChemicalEngineering";
import PetrochemicalEngineering from "./pages/departments/PetrochemicalEngineering";
import ElectricalAndElectronicsEngineering from "./pages/departments/ElectricalAndElectronicsEngineering";
import ElectronicsAndCommunicationEngineering from "./pages/departments/ElectronicsAndCommunicationEngineering";

const queryClient = new QueryClient();

const AppContent = () => {
  const { isLoading } = useLoading();

  return (
    <>
      {isLoading && <Loader />}
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          {/* Wrap every page's element with PageWrapper */}
          <Route path="/" element={<PageWrapper><Index /></PageWrapper>} />
          <Route path="/admission" element={<PageWrapper><AdmissionForm /></PageWrapper>} />
          <Route path="/campus-tour" element={<PageWrapper><CampusTour /></PageWrapper>} />
          <Route path="/placement-details" element={<PageWrapper><PlacementDetails /></PageWrapper>} />
          <Route path="/hostel-transport" element={<PageWrapper><HostelTransport /></PageWrapper>} />
          <Route path="/clubs-cells" element={<PageWrapper><ClubsCells /></PageWrapper>} />
          <Route path="/academics" element={<PageWrapper><Academics /></PageWrapper>} />

          {/* Department Pages */}
          <Route path="/departments/computer-engineering" element={<PageWrapper><ComputerEngineering /></PageWrapper>} />
          <Route path="/departments/chemical-engineering" element={<PageWrapper><ChemicalEngineering /></PageWrapper>} />
          <Route path="/departments/petrochemical-engineering" element={<PageWrapper><PetrochemicalEngineering /></PageWrapper>} />
          <Route path="/departments/eee" element={<PageWrapper><ElectricalAndElectronicsEngineering /></PageWrapper>} />
          <Route path="/departments/ece" element={<PageWrapper><ElectronicsAndCommunicationEngineering /></PageWrapper>} />
          <Route path="/departments/civil-engineering" element={<PageWrapper><CivilEngineering /></PageWrapper>} />
          <Route path="/departments/mechanical-engineering" element={<PageWrapper><MechanicalEngineering /></PageWrapper>} />
          <Route path="/departments/automobile-engineering" element={<PageWrapper><AutomobileEngineering /></PageWrapper>} />
          <Route path="/departments/dmlt" element={<PageWrapper><DMLT /></PageWrapper>} />
          
          {/* Not Found Page */}
          <Route path="*" element={<PageWrapper><NotFound /></PageWrapper>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <LoadingProvider>
        <AppContent />
      </LoadingProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;