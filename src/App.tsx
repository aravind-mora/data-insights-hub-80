import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// ✅ import background image
import background from "./assets/background.jpg";

const App = () => (
  <TooltipProvider>
    <Toaster />
    <Sonner />

    {/* 🌌 Global Background Wrapper */}
    <div
      className="min-h-[100vh] bg-fixed bg-cover bg-center"
      style={{ backgroundImage: `url(${background})` }}
    >
      {/* 🌑 Dark transparent overlay */}
      <div className="min-h-[100vh] bg-black/70">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  </TooltipProvider>
);

export default App;
