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

// Page Imports
import Index from "./pages/Index";
import AdmissionForm from "./pages/AdmissionForm";
// ... (other page imports)
import NotFound from "./pages/NotFound";
import ComputerEngineering from "./pages/departments/ComputerEngineering";
// ... (other department page imports)

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
          {/* ... WRAP ALL OTHER ROUTES SIMILARLY ... */}
          <Route path="/departments/computer-engineering" element={<PageWrapper><ComputerEngineering /></PageWrapper>} />
          {/* ... WRAP ALL OTHER DEPARTMENT ROUTES ... */}
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