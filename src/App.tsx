import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Index from "./pages/Index";
import ToursPage from "./pages/tours/index";
import CancunToursPage from "./pages/tours-from/cancun";
import PlayaDelCarmenToursPage from "./pages/tours-from/playa-del-carmen";
import TulumToursPage from "./pages/tours-from/tulum";
import RivieraMayaToursPage from "./pages/tours-from/riviera-maya";
import MeridaToursPage from "./pages/tours-from/merida";
import BestTimeToVisitPage from "./pages/guide/best-time-to-visit";
import WhatToBringPage from "./pages/guide/what-to-bring";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/tours" element={<ToursPage />} />
                <Route path="/tours-from/cancun" element={<CancunToursPage />} />
                <Route path="/tours-from/playa-del-carmen" element={<PlayaDelCarmenToursPage />} />
                <Route path="/tours-from/tulum" element={<TulumToursPage />} />
                <Route path="/tours-from/riviera-maya" element={<RivieraMayaToursPage />} />
                <Route path="/tours-from/merida" element={<MeridaToursPage />} />
                <Route path="/guide/best-time-to-visit" element={<BestTimeToVisitPage />} />
                <Route path="/guide/what-to-bring" element={<WhatToBringPage />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;