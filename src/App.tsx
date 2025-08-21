import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Professores from "./pages/Professores";
import FAQ from "./pages/FAQ";
import Projetos from "./pages/Projetos";
import Politicas from "./pages/Politicas";
import GaleriaTurmas from "./pages/GaleriaTurmas";
import GaleriaEventos from "./pages/GaleriaEventos";
import PortalPais from "./pages/PortalPais";
import Depoimentos from "./pages/Depoimentos";
import CalendarioEscolar from "./pages/CalendarioEscolar";
import NoticiasBlog from "./pages/NoticiasBlog";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/professores" element={<Professores />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/projetos" element={<Projetos />} />
            <Route path="/politicas" element={<Politicas />} />
            <Route path="/galeria-turmas" element={<GaleriaTurmas />} />
            <Route path="/galeria-eventos" element={<GaleriaEventos />} />
            <Route path="/portal-pais" element={<PortalPais />} />
            <Route path="/depoimentos" element={<Depoimentos />} />
            <Route path="/calendario" element={<CalendarioEscolar />} />
            <Route path="/blog" element={<NoticiasBlog />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
