import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import SeoManager from "@/components/SeoManager";
import Index from "./pages/Index";

const Toaster = lazy(() => import("@/components/ui/toaster").then(m => ({ default: m.Toaster })));

const FestivalPage = lazy(() => import("./pages/FestivalPage"));
const About = lazy(() => import("./pages/About"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));
const Contact = lazy(() => import("./pages/Contact"));
const Disclaimer = lazy(() => import("./pages/Disclaimer"));
const FAQ = lazy(() => import("./pages/FAQ"));
const HowItWorks = lazy(() => import("./pages/HowItWorks"));
const Sitemap = lazy(() => import("./pages/Sitemap"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const CookieConsent = lazy(() => import("@/components/CookieConsent"));

// Tools
const BirthdayWishesGenerator = lazy(() => import("./pages/tools/BirthdayWishesGenerator"));
const BirthdayCardMaker = lazy(() => import("./pages/tools/BirthdayCardMaker"));
const AgeCalculator = lazy(() => import("./pages/tools/AgeCalculator"));
const BirthdayCountdown = lazy(() => import("./pages/tools/BirthdayCountdown"));
const LoveCalculator = lazy(() => import("./pages/tools/LoveCalculator"));
const CrushCalculator = lazy(() => import("./pages/tools/CrushCalculator"));
const CoupleNameGenerator = lazy(() => import("./pages/tools/CoupleNameGenerator"));
const FriendshipCalculator = lazy(() => import("./pages/tools/FriendshipCalculator"));

const App = () => (
  <BrowserRouter>
    <ScrollToTop />
    <SeoManager />
    <Suspense fallback={<div className="min-h-screen bg-background" />}>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/about" element={<About />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/sitemap" element={<Sitemap />} />
        <Route path="/tools/birthday-wishes-generator" element={<BirthdayWishesGenerator />} />
        <Route path="/tools/birthday-card-maker" element={<BirthdayCardMaker />} />
        <Route path="/tools/age-calculator" element={<AgeCalculator />} />
        <Route path="/tools/birthday-countdown" element={<BirthdayCountdown />} />
        <Route path="/tools/love-calculator" element={<LoveCalculator />} />
        <Route path="/tools/crush-calculator" element={<CrushCalculator />} />
        <Route path="/tools/couple-name-generator" element={<CoupleNameGenerator />} />
        <Route path="/tools/friendship-calculator" element={<FriendshipCalculator />} />
        <Route path="/:slug" element={<FestivalPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
    <Suspense fallback={null}>
      <Toaster />
      <CookieConsent />
    </Suspense>
  </BrowserRouter>
);

export default App;
