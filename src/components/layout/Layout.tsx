
import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Sidebar from './Sidebar';
import StarField from '../effects/StarField';
import AIAssistantPanel from '../ai/AIAssistantPanel';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate app loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="loading-animation">
        <div className="flex flex-col items-center">
          <div className="h-16 w-16 rounded-full bg-gradient-to-r from-astro-purple to-astro-blue p-0.5 mb-4">
            <div className="h-full w-full rounded-full bg-astro-black flex items-center justify-center">
              <span className="text-2xl font-bold text-white">A</span>
            </div>
          </div>
          <div className="loading-ring"></div>
          <p className="mt-4 text-gradient text-lg font-medium font-orbitron">ASTROVERSE</p>
        </div>
        <StarField starCount={100} />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Sidebar isOpen={sidebarOpen} toggle={() => setSidebarOpen(!sidebarOpen)} />
      
      <main className={`flex-1 pt-20 transition-all duration-300 ${sidebarOpen ? 'md:ml-64' : ''}`}>
        <StarField starCount={100} />
        {children}
      </main>
      
      <div className={`transition-all duration-300 ${sidebarOpen ? 'md:ml-64' : ''}`}>
        <Footer />
      </div>
      
      {/* AI Assistant Panel */}
      <AIAssistantPanel />
    </div>
  );
};

export default Layout;
