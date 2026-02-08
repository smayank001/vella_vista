import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import WeddingsOverview from "./pages/weddings/WeddingsOverview";
import WeddingDetails from "./pages/weddings/WeddingDetails";
import WeddingPricing from "./pages/weddings/WeddingPricing";
import WeddingGallery from "./pages/weddings/WeddingGallery";
import WeddingDeals from "./pages/weddings/WeddingDeals";
import GolfOverview from "./pages/golf/GolfOverview";
import GolfTeeTimes from "./pages/golf/GolfTeeTimes";
import GolfPricing from "./pages/golf/GolfPricing";
import GolfCourse from "./pages/golf/GolfCourse";
import GolfLeagues from "./pages/golf/GolfLeagues";
import GolfOutings from "./pages/golf/GolfOutings";
import EventsOverview from "./pages/events/EventsOverview";
import ConferenceCenter from "./pages/events/ConferenceCenter";
import SocialEvents from "./pages/events/SocialEvents";
import Gallery from "./pages/Gallery";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Privacy from "./pages/Privacy";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/weddings" element={<WeddingsOverview />} />
            <Route path="/weddings/details" element={<WeddingDetails />} />
            <Route path="/weddings/pricing" element={<WeddingPricing />} />
            <Route path="/weddings/gallery" element={<WeddingGallery />} />
            <Route path="/weddings/deals" element={<WeddingDeals />} />
            <Route path="/golf" element={<GolfOverview />} />
            <Route path="/golf/tee-times" element={<GolfTeeTimes />} />
            <Route path="/golf/pricing" element={<GolfPricing />} />
            <Route path="/golf/course" element={<GolfCourse />} />
            <Route path="/golf/leagues" element={<GolfLeagues />} />
            <Route path="/golf/outings" element={<GolfOutings />} />
            <Route path="/events" element={<EventsOverview />} />
            <Route path="/events/conference" element={<ConferenceCenter />} />
            <Route path="/events/social" element={<SocialEvents />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
