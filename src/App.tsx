
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AutoSeguro from "./pages/AutoSeguro";
import VidaSeguro from "./pages/VidaSeguro";
import ResidencialSeguro from "./pages/ResidencialSeguro";
import EmpresarialSeguro from "./pages/EmpresarialSeguro";
import SaudeSeguro from "./pages/SaudeSeguro";
import Contato from "./pages/Contato";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/auto-seguro" element={<AutoSeguro />} />
          <Route path="/vida-seguro" element={<VidaSeguro />} />
          <Route path="/residencial-seguro" element={<ResidencialSeguro />} />
          <Route path="/empresarial-seguro" element={<EmpresarialSeguro />} />
          <Route path="/saude-seguro" element={<SaudeSeguro />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
