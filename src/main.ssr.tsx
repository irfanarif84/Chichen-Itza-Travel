import { ViteReactSSG } from "vite-react-ssg";
import type { RouteRecord } from "vite-react-ssg";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import helmetAsync from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import "./index.css";

// Pages — English
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
import GuideIndexPage from "./pages/guide/index";
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
import TourDetailPage from "./pages/tours/[slug]";
import NotFound from "./pages/NotFound";

// Data for static path generation
import { tours } from "@/lib/tourData";
import { blogPosts } from "@/lib/blogData";
import { blogPostsEs } from "@/lib/blogData.es";

const queryClient = new QueryClient();
const { HelmetProvider } = helmetAsync;

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    if (typeof window !== "undefined") window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const RootLayout = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <ScrollToTop />
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">
            <Outlet />
          </main>
          <Footer />
          <WhatsAppButton />
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

const tourSlugs = tours
  .filter((t) => !["cancun", "playa-del-carmen", "tulum", "riviera-maya", "merida"].includes(t.slug))
  .map((t) => t.slug);

const blogSlugEn = blogPosts.map((p) => p.slug);
const blogSlugEs = blogPostsEs.map((p) => p.slug);

const routes: RouteRecord[] = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      // ===== English Routes =====
      { index: true, Component: Index },
      { path: "tours", Component: ToursPage },
      { path: "tours/day-tours", Component: DayToursPage },
      { path: "tours/private-tours", Component: PrivateToursPage },
      { path: "tours/cenote-tours", Component: CenoteToursPage },
      { path: "tours/sunrise-tours", Component: SunriseToursPage },
      { path: "tours/ek-balam-tours", Component: EkBalamToursPage },
      { path: "tours/valladolid-tours", Component: ValladolidToursPage },
      { path: "tours/night-tours", Component: NightToursPage },
      { path: "tours-from/cancun", Component: CancunToursPage },
      { path: "tours-from/playa-del-carmen", Component: PlayaDelCarmenToursPage },
      { path: "tours-from/tulum", Component: TulumToursPage },
      { path: "tours-from/riviera-maya", Component: RivieraMayaToursPage },
      { path: "tours-from/merida", Component: MeridaToursPage },
      { path: "guide", Component: GuideIndexPage },
      { path: "guide/best-time-to-visit", Component: BestTimeToVisitPage },
      { path: "guide/what-to-bring", Component: WhatToBringPage },
      { path: "guide/history-and-facts", Component: HistoryAndFactsPage },
      { path: "guide/how-to-get-there", Component: HowToGetTherePage },
      { path: "guide/entrance-fees", Component: EntranceFeesPage },
      { path: "guide/photography-tips", Component: PhotographyTipsPage },
      { path: "guide/dress-code-and-rules", Component: DressCodePage },
      { path: "guide/vs-other-ruins", Component: VsOtherRuinsPage },
      { path: "practical/faq", Component: FAQPage },
      { path: "practical/contact", Component: ContactPage },
      { path: "practical/cancellation-policy", Component: CancellationPolicyPage },
      { path: "practical/testimonials", Component: TestimonialsPage },
      { path: "practical/booking-info", Component: BookingInfoPage },
      { path: "tour-types/small-group", Component: SmallGroupPage },
      { path: "tour-types/luxury", Component: LuxuryToursPage },
      { path: "tour-types/budget", Component: BudgetToursPage },
      { path: "tour-types/family-friendly", Component: FamilyFriendlyPage },
      { path: "tour-types/vip-skip-the-line", Component: VIPSkipTheLinePage },
      { path: "combo-tours/cenote-ik-kil", Component: CenoteIkKilComboPage },
      { path: "combo-tours/coba-ruins", Component: CobaRuinsComboPage },
      { path: "combo-tours/isla-mujeres", Component: IslaMujeresComboPage },
      { path: "combo-tours/multi-day-yucatan", Component: MultiDayYucatanPage },
      {
        path: "tours/:slug",
        Component: TourDetailPage,
        getStaticPaths: () => tourSlugs.map((s) => `tours/${s}`),
      },
      { path: "blog", Component: BlogIndexPage },
      {
        path: "blog/:slug",
        Component: BlogPostPage,
        getStaticPaths: () => blogSlugEn.map((s) => `blog/${s}`),
      },

      // ===== Spanish Routes (/es/) =====
      { path: "es", Component: Index },
      { path: "es/tours", Component: ToursPage },
      { path: "es/tours/excursiones-de-dia", Component: DayToursPage },
      { path: "es/tours/tours-privados", Component: PrivateToursPage },
      { path: "es/tours/tours-de-cenotes", Component: CenoteToursPage },
      { path: "es/tours/tours-al-amanecer", Component: SunriseToursPage },
      { path: "es/tours/tours-ek-balam", Component: EkBalamToursPage },
      { path: "es/tours/tours-valladolid", Component: ValladolidToursPage },
      { path: "es/tours/tours-nocturnos", Component: NightToursPage },
      { path: "es/tours-desde/cancun", Component: CancunToursPage },
      { path: "es/tours-desde/playa-del-carmen", Component: PlayaDelCarmenToursPage },
      { path: "es/tours-desde/tulum", Component: TulumToursPage },
      { path: "es/tours-desde/riviera-maya", Component: RivieraMayaToursPage },
      { path: "es/tours-desde/merida", Component: MeridaToursPage },
      { path: "es/guia", Component: GuideIndexPage },
      { path: "es/guia/mejor-epoca-para-visitar", Component: BestTimeToVisitPage },
      { path: "es/guia/que-llevar", Component: WhatToBringPage },
      { path: "es/guia/historia-y-datos", Component: HistoryAndFactsPage },
      { path: "es/guia/como-llegar", Component: HowToGetTherePage },
      { path: "es/guia/precios-de-entrada", Component: EntranceFeesPage },
      { path: "es/guia/consejos-de-fotografia", Component: PhotographyTipsPage },
      { path: "es/guia/codigo-de-vestimenta", Component: DressCodePage },
      { path: "es/guia/comparacion-con-otras-ruinas", Component: VsOtherRuinsPage },
      { path: "es/practico/preguntas-frecuentes", Component: FAQPage },
      { path: "es/practico/contacto", Component: ContactPage },
      { path: "es/practico/politica-de-cancelacion", Component: CancellationPolicyPage },
      { path: "es/practico/testimonios", Component: TestimonialsPage },
      { path: "es/practico/informacion-de-reserva", Component: BookingInfoPage },
      { path: "es/tipos-de-tours/grupos-pequenos", Component: SmallGroupPage },
      { path: "es/tipos-de-tours/lujo", Component: LuxuryToursPage },
      { path: "es/tipos-de-tours/economico", Component: BudgetToursPage },
      { path: "es/tipos-de-tours/familiar", Component: FamilyFriendlyPage },
      { path: "es/tipos-de-tours/vip-sin-filas", Component: VIPSkipTheLinePage },
      { path: "es/combo-tours/cenote-ik-kil", Component: CenoteIkKilComboPage },
      { path: "es/combo-tours/ruinas-de-coba", Component: CobaRuinsComboPage },
      { path: "es/combo-tours/isla-mujeres", Component: IslaMujeresComboPage },
      { path: "es/combo-tours/yucatan-varios-dias", Component: MultiDayYucatanPage },
      {
        path: "es/tours/:slug",
        Component: TourDetailPage,
        getStaticPaths: () => tourSlugs.map((s) => `es/tours/${s}`),
      },
      { path: "es/blog", Component: BlogIndexPage },
      {
        path: "es/blog/:slug",
        Component: BlogPostPage,
        getStaticPaths: () => blogSlugEs.map((s) => `es/blog/${s}`),
      },

      { path: "*", Component: NotFound },
    ],
  },
];

export const createRoot = ViteReactSSG({ routes });
