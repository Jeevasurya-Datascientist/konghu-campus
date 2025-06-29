// src/App.tsx

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// NEW IMPORTS
import { LoadingProvider, useLoading } from "./hooks/LoadingContext";
// --- FIX: Corrected the import path for Loader ---
import Loader from "./components/Loader"; 
import ScrollToTop from "./components/ScrollToTop";

// Page Imports
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

// A new component to handle the routes and conditional loader
const AppContent = () => {
  const { isLoading } = useLoading();

  return (
    <>
      {isLoading && <Loader />}
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/admission" element={<AdmissionForm />} />
          <Route path="/campus-tour" element={<CampusTour />} />
          <Route path="/placement-details" element={<PlacementDetails />} />
          <Route path="/hostel-transport" element={<HostelTransport />} />
          <Route path="/clubs-cells" element={<ClubsCells />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/departments/computer-engineering" element={<ComputerEngineering />} />
          <Route path="/departments/chemical-engineering" element={<ChemicalEngineering />} />
          <Route path="/departments/petrochemical-engineering" element={<PetrochemicalEngineering />} />
          <Route path="/departments/eee" element={<ElectricalAndElectronicsEngineering />} />
          <Route path="/departments/ece" element={<ElectronicsAndCommunicationEngineering />} />
          <Route path="/departments/civil-engineering" element={<CivilEngineering />} />
          <Route path="/departments/mechanical-engineering" element={<MechanicalEngineering />} />
          <Route path="/departments/automobile-engineering" element={<AutomobileEngineering />} />
          <Route path="/departments/dmlt" element={<DMLT />} />
          <Route path="*" element={<NotFound />} />
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