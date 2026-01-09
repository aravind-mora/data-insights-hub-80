import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

import desktopBg from "@/assets/background.jpg";
import mobileBg from "@/assets/hero-mobile.jpg";

const App = () => (
  <TooltipProvider>
    <Toaster />
    <Sonner />

    {/* 🌍 Global background wrapper */}
    <div className="relative min-h-screen">
      {/* 🖥️ Desktop background */}
      <div
        className="fixed inset-0 hidden md:block bg-cover bg-center"
        style={{ backgroundImage: `url(${desktopBg})` }}
      />

      {/* 📱 Mobile background */}
      <div
        className="fixed inset-0 block md:hidden bg-cover bg-center"
        style={{ backgroundImage: `url(${mobileBg})` }}
      />

      {/* 🌑 Dark overlay for readability */}
      <div className="fixed inset-0 bg-black/60" />

      {/* App content */}
      <div className="relative z-10">
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
