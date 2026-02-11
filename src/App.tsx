import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ServiceOdoo from "./pages/ServiceOdoo";
import ServiceZatca from "./pages/ServiceZatca";
import ServiceWebsites from "./pages/ServiceWebsites";
import ServiceAccounting from "./pages/ServiceAccounting";
import ServiceDigitalOps from "./pages/ServiceDigitalOps";
import ServiceConsultation from "./pages/ServiceConsultation";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services/odoo" element={<ServiceOdoo />} />
          <Route path="/services/zatca" element={<ServiceZatca />} />
          <Route path="/services/websites" element={<ServiceWebsites />} />
          <Route path="/services/accounting" element={<ServiceAccounting />} />
          <Route path="/services/digital-operations" element={<ServiceDigitalOps />} />
          <Route path="/services/consultation" element={<ServiceConsultation />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
