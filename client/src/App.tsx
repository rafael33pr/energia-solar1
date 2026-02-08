import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Beneficios from "./pages/Beneficios";
import Proceso from "./pages/Proceso";
import FAQ from "./pages/FAQ";
import Contacto from "./pages/Contacto";
import Calculadora from "./pages/Calculadora";
import WhatsAppButton from "./components/WhatsAppButton";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/beneficios" component={Beneficios} />
      <Route path="/proceso" component={Proceso} />
      <Route path="/faq" component={FAQ} />
      <Route path="/calculadora" component={Calculadora} />
      <Route path="/contacto" component={Contacto} />
      <Route path="/404" component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// Mediterranean Artisan Design Theme
// Light theme with warm earth tones (terracotta, clay cream, olive green)
// Typography: Cormorant Garamond (display), Raleway (headings), Lora (body)

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
          <WhatsAppButton />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
