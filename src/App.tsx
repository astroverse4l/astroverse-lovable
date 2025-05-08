
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import { LanguageProvider } from "@/hooks/useLanguage";
import { GoogleAuthProvider } from "@/components/auth/GoogleAuthProvider";
import AssistantLauncher from "@/components/assistant/AssistantLauncher";

// Pages
import Index from "./pages/Index";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Community from "./pages/Community";
import NotFound from "./pages/NotFound";

// Project pages
import RetroTech from "./pages/projects/RetroTech";
import Echoe from "./pages/projects/Echoe";
import AstralFinance from "./pages/projects/AstralFinance";
import AstralStudios from "./pages/projects/AstralStudios";
import Spacecraft from "./pages/projects/Spacecraft";
import Lunex from "./pages/projects/Lunex";
import Aether from "./pages/projects/Aether";
import Syntril from "./pages/projects/Syntril";
import TarsNet from "./pages/projects/TarsNet";
import Astorium from "./pages/projects/Astorium";
import ProjectsList from "./pages/projects/ProjectsList";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <GoogleAuthProvider>
        <AuthProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/community" element={<Community />} />
                <Route path="/projects" element={<ProjectsList />} />
                
                {/* Project Routes */}
                <Route path="/retrotech" element={<RetroTech />} />
                <Route path="/echoe" element={<Echoe />} />
                <Route path="/astral-finance" element={<AstralFinance />} />
                <Route path="/astral-studios" element={<AstralStudios />} />
                <Route path="/spacecraft" element={<Spacecraft />} />
                <Route path="/lunex" element={<Lunex />} />
                <Route path="/aether" element={<Aether />} />
                <Route path="/syntril" element={<Syntril />} />
                <Route path="/tarsnet" element={<TarsNet />} />
                <Route path="/astorium" element={<Astorium />} />
                
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
              <AssistantLauncher />
            </BrowserRouter>
          </TooltipProvider>
        </AuthProvider>
      </GoogleAuthProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
