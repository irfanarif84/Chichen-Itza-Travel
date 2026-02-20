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
import DayToursPage from "./pages/tours/day-tours";
import PrivateToursPage from "./pages/tours/private-tours";
import CenoteToursPage from "./pages/tours/cenote-tours";
import SunriseToursPage from "./pages/tours/sunrise-tours";
import EkBalamToursPage from "./pages/tours/ek-balam-tours";
import ValladolidToursPage from "./pages/tours/valladolid-tours";
import NightToursPage from "./pages/tours/night-tours";
import CancunToursPage from "./pages/tours-from/cancun";
import PlayaDelCarmenToursPage from "./pages/tours-from/playa-del-carmen";
import TulumToursPage from "./pages/tours-from/tulum";
import RivieraMayaToursPage from "./pages/tours-from/riviera-maya";
import MeridaToursPage from "./pages/tours-from/merida";
import BestTimeToVisitPage from "./pages/guide/best-time-to-visit";
import WhatToBringPage from "./pages/guide/what-to-bring";
import HistoryAndFactsPage from "./pages/guide/history-and-facts";
import HowToGetTherePage from "./pages/guide/how-to-get-there";
import EntranceFeesPage from "./pages/guide/entrance-fees";
import PhotographyTipsPage from "./pages/guide/photography-tips";
import DressCodePage from "./pages/guide/dress-code-and-rules";
import VsOtherRuinsPage from "./pages/guide/vs-other-ruins";
import FAQPage from "./pages/practical/faq";
import ContactPage from "./pages/practical/contact";
import CancellationPolicyPage from "./pages/practical/cancellation-policy";
import TestimonialsPage from "./pages/practical/testimonials";
import BookingInfoPage from "./pages/practical/booking-info";
import SmallGroupPage from "./pages/tour-types/small-group";
import LuxuryToursPage from "./pages/tour-types/luxury";
import BudgetToursPage from "./pages/tour-types/budget";
import FamilyFriendlyPage from "./pages/tour-types/family-friendly";
import VIPSkipTheLinePage from "./pages/tour-types/vip-skip-the-line";
import CenoteIkKilComboPage from "./pages/combo-tours/cenote-ik-kil";
import CobaRuinsComboPage from "./pages/combo-tours/coba-ruins";
import IslaMujeresComboPage from "./pages/combo-tours/isla-mujeres";
import MultiDayYucatanPage from "./pages/combo-tours/multi-day-yucatan";
import BlogIndexPage from "./pages/blog/index";
import BlogPostPage from "./pages/blog/[slug]";
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
                <Route path="/tours/day-tours" element={<DayToursPage />} />
                <Route path="/tours/private-tours" element={<PrivateToursPage />} />
                <Route path="/tours/cenote-tours" element={<CenoteToursPage />} />
                <Route path="/tours/sunrise-tours" element={<SunriseToursPage />} />
                <Route path="/tours/ek-balam-tours" element={<EkBalamToursPage />} />
                <Route path="/tours/valladolid-tours" element={<ValladolidToursPage />} />
                <Route path="/tours/night-tours" element={<NightToursPage />} />
                <Route path="/tours-from/cancun" element={<CancunToursPage />} />
                <Route path="/tours-from/playa-del-carmen" element={<PlayaDelCarmenToursPage />} />
                <Route path="/tours-from/tulum" element={<TulumToursPage />} />
                <Route path="/tours-from/riviera-maya" element={<RivieraMayaToursPage />} />
                <Route path="/tours-from/merida" element={<MeridaToursPage />} />
                <Route path="/guide/best-time-to-visit" element={<BestTimeToVisitPage />} />
                <Route path="/guide/what-to-bring" element={<WhatToBringPage />} />
                <Route path="/guide/history-and-facts" element={<HistoryAndFactsPage />} />
                <Route path="/guide/how-to-get-there" element={<HowToGetTherePage />} />
                <Route path="/guide/entrance-fees" element={<EntranceFeesPage />} />
                <Route path="/guide/photography-tips" element={<PhotographyTipsPage />} />
                <Route path="/guide/dress-code-and-rules" element={<DressCodePage />} />
                <Route path="/guide/vs-other-ruins" element={<VsOtherRuinsPage />} />
                <Route path="/practical/faq" element={<FAQPage />} />
                <Route path="/practical/contact" element={<ContactPage />} />
                <Route path="/practical/cancellation-policy" element={<CancellationPolicyPage />} />
                <Route path="/practical/testimonials" element={<TestimonialsPage />} />
                <Route path="/practical/booking-info" element={<BookingInfoPage />} />
                <Route path="/tour-types/small-group" element={<SmallGroupPage />} />
                <Route path="/tour-types/luxury" element={<LuxuryToursPage />} />
                <Route path="/tour-types/budget" element={<BudgetToursPage />} />
                <Route path="/tour-types/family-friendly" element={<FamilyFriendlyPage />} />
                <Route path="/tour-types/vip-skip-the-line" element={<VIPSkipTheLinePage />} />
                <Route path="/combo-tours/cenote-ik-kil" element={<CenoteIkKilComboPage />} />
                <Route path="/combo-tours/coba-ruins" element={<CobaRuinsComboPage />} />
                <Route path="/combo-tours/isla-mujeres" element={<IslaMujeresComboPage />} />
                <Route path="/combo-tours/multi-day-yucatan" element={<MultiDayYucatanPage />} />
                <Route path="/blog" element={<BlogIndexPage />} />
                <Route path="/blog/:slug" element={<BlogPostPage />} />
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
