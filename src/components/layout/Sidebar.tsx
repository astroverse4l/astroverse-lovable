
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronLeft, ChevronRight, 
  Rocket, Globe, Atom, Star, 
  CreditCard, Layers, Triangle, Satellite
} from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';
import { Button } from "@/components/ui/button";

interface SidebarProps {
  isOpen: boolean;
  toggle: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggle }) => {
  const { t } = useTranslation();
  
  const projects = [
    { name: 'RetroTech', icon: <Rocket className="h-5 w-5" />, path: '/retrotech' },
    { name: 'Echoe-2077', icon: <Globe className="h-5 w-5" />, path: '/echoe' },
    { name: 'Astral Finance', icon: <CreditCard className="h-5 w-5" />, path: '/astral-finance' },
    { name: 'Astral Studios', icon: <Layers className="h-5 w-5" />, path: '/astral-studios' },
    { name: 'Spacecraft', icon: <Triangle className="h-5 w-5" />, path: '/spacecraft' },
    { name: 'Lunex', icon: <Star className="h-5 w-5" />, path: '/lunex' },
    { name: 'Aether', icon: <Atom className="h-5 w-5" />, path: '/aether' },
    { name: 'Syntril', icon: <Satellite className="h-5 w-5" />, path: '/syntril' },
    { name: 'TarsNet', icon: <Satellite className="h-5 w-5" />, path: '/tarsnet' },
    { name: 'Astorium', icon: <Rocket className="h-5 w-5" />, path: '/astorium' },
  ];

  return (
    <>
      <div 
        className={`fixed inset-y-0 left-0 z-30 w-64 neo-blur transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0`}
      >
        <div className="h-full flex flex-col py-8 px-4">
          <div className="flex items-center justify-between mb-8 px-2">
            <Link to="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full bg-gradient-to-r from-astro-purple to-astro-blue p-0.5">
                <div className="h-full w-full rounded-full bg-astro-black flex items-center justify-center">
                  <span className="text-sm font-bold text-white">A</span>
                </div>
              </div>
              <span className="text-lg font-bold text-gradient">ASTROVERSE</span>
            </Link>
            
            <button 
              onClick={toggle}
              className="md:hidden text-white hover:text-primary"
            >
              <ChevronLeft size={20} />
            </button>
          </div>
          
          <div className="space-y-2 mb-8 px-2">
            <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">{t('navigation')}</h2>
            <nav className="space-y-1">
              <Link to="/" className="flex items-center space-x-3 text-white hover:text-primary px-3 py-2 rounded-md hover:bg-white/5 transition-colors">
                <Globe className="h-5 w-5" />
                <span>{t('home')}</span>
              </Link>
              <Link to="/projects" className="flex items-center space-x-3 text-white hover:text-primary px-3 py-2 rounded-md hover:bg-white/5 transition-colors">
                <Rocket className="h-5 w-5" />
                <span>{t('projects')}</span>
              </Link>
              <Link to="/explore" className="flex items-center space-x-3 text-white hover:text-primary px-3 py-2 rounded-md hover:bg-white/5 transition-colors">
                <Star className="h-5 w-5" />
                <span>{t('explore')}</span>
              </Link>
              <Link to="/community" className="flex items-center space-x-3 text-white hover:text-primary px-3 py-2 rounded-md hover:bg-white/5 transition-colors">
                <Atom className="h-5 w-5" />
                <span>{t('community')}</span>
              </Link>
            </nav>
          </div>
          
          <div className="flex-1 overflow-y-auto px-2">
            <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">{t('projects')}</h2>
            <nav className="space-y-1">
              {projects.map((item) => (
                <Link 
                  key={item.name}
                  to={item.path}
                  className="flex items-center space-x-3 text-white hover:text-primary px-3 py-2 rounded-md hover:bg-white/5 transition-colors"
                >
                  {item.icon}
                  <span>{item.name}</span>
                </Link>
              ))}
            </nav>
          </div>
          
          <div className="mt-auto px-2">
            <Button 
              variant="outline" 
              className="w-full border-astro-blue text-astro-blue hover:bg-astro-blue/10 flex items-center justify-center space-x-2"
              onClick={() => {
                window.open('https://retro-tech-ast.vercel.app', '_blank');
              }}
            >
              <Rocket className="h-4 w-4" />
              <span>{t('launch_retrotech')}</span>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Sidebar toggle button for mobile */}
      {!isOpen && (
        <button
          onClick={toggle}
          className="fixed left-0 top-1/2 transform -translate-y-1/2 z-30 md:hidden bg-astro-blue/20 backdrop-blur-lg p-2 rounded-r-md"
        >
          <ChevronRight className="h-5 w-5 text-white" />
        </button>
      )}
      
      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-20 md:hidden"
          onClick={toggle}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
