import { Switch, Route } from "wouter";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Home from "@/pages/home";
import Services from "@/pages/services";
import ServiceDetail from "@/pages/service-detail";
import NotFound from "@/pages/not-found";
import Consultations from "@/pages/consultations";
import CellCore from "@/pages/cellcore";
import About from "@/pages/about";
import Contact from "@/pages/contact";
import { useEffect } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return null;
}

function MobileStickyCTA() {
  const [location] = useLocation();
  // Hide on booking pages or if we want logic to hide it on footer
  return (
    <div className="md:hidden fixed bottom-0 left-0 w-full z-50 p-4 bg-background/80 backdrop-blur-lg border-t border-border shadow-[0_-5px_20px_rgba(0,0,0,0.05)]">
      <Button size="lg" className="w-full rounded-full bg-primary text-primary-foreground font-bold shadow-lg" asChild>
        <a href="https://ohzoneclinics.janeapp.com/" target="_blank" rel="noreferrer">
          <Calendar className="w-4 h-4 mr-2" /> Book Appointment
        </a>
      </Button>
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-background font-sans text-foreground">
      <Navbar />
      <ScrollToTop />
      <main className="flex-grow pb-20 md:pb-0">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/services/:slug" component={ServiceDetail} />
          <Route path="/consultations" component={Consultations} />
          <Route path="/cellcore-detox" component={CellCore} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
      <MobileStickyCTA />
    </div>
  );
}

export default App;
