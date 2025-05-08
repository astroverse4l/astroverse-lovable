
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { Button } from "@/components/ui/button";
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from '@/hooks/useTranslation';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? 'neo-blur py-3' : 'py-5'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="h-10 w-10 rounded-full bg-gradient-to-r from-astro-purple to-astro-blue p-0.5 animate-pulse-glow">
              <div className="h-full w-full rounded-full bg-astro-black flex items-center justify-center">
                <span className="text-lg font-bold text-white">A</span>
              </div>
            </div>
            <span className="text-xl font-bold text-gradient">ASTROVERSE</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-6">
              <Link to="/" className="text-white hover:text-primary transition-colors">{t('home')}</Link>
              <Link to="/projects" className="text-white hover:text-primary transition-colors">{t('projects')}</Link>
              <Link to="/explore" className="text-white hover:text-primary transition-colors">{t('explore')}</Link>
              <Link to="/community" className="text-white hover:text-primary transition-colors">{t('community')}</Link>
            </div>
            
            <div className="flex items-center space-x-4">
              <LanguageSwitcher />
              <Link to="/login">
                <Button variant="outline" className="border-astro-blue text-astro-blue hover:bg-astro-blue/10">
                  {t('login')}
                </Button>
              </Link>
              <Link to="/signup">
                <Button className="bg-gradient-to-r from-astro-purple to-astro-blue hover:opacity-90">
                  {t('signup')}
                </Button>
              </Link>
            </div>
          </div>
          
          <button 
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden neo-blur">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link to="/" className="text-white hover:text-primary transition-colors py-2">{t('home')}</Link>
            <Link to="/projects" className="text-white hover:text-primary transition-colors py-2">{t('projects')}</Link>
            <Link to="/explore" className="text-white hover:text-primary transition-colors py-2">{t('explore')}</Link>
            <Link to="/community" className="text-white hover:text-primary transition-colors py-2">{t('community')}</Link>
            <div className="pt-2 flex items-center space-x-4">
              <LanguageSwitcher />
            </div>
            <div className="flex flex-col space-y-3 pt-2">
              <Link to="/login">
                <Button variant="outline" className="border-astro-blue text-astro-blue hover:bg-astro-blue/10 w-full">
                  {t('login')}
                </Button>
              </Link>
              <Link to="/signup">
                <Button className="bg-gradient-to-r from-astro-purple to-astro-blue hover:opacity-90 w-full">
                  {t('signup')}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
