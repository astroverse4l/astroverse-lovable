
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useGoogleAuth } from '@/components/auth/GoogleAuthProvider';
import { Menu, User, ChevronDown } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { useTranslation } from '@/hooks/useTranslation';
import LanguageSelector from './LanguageSelector';

interface NavbarProps {
  onMenuToggle?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onMenuToggle }) => {
  const { t } = useTranslation();
  const { isSignedIn, user, signIn, signOut } = useGoogleAuth();
  
  return (
    <header className="fixed top-0 inset-x-0 z-40 backdrop-blur-lg bg-astro-black/50 border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Left section - Logo & Menu button */}
          <div className="flex items-center space-x-4">
            {onMenuToggle && (
              <Button 
                variant="ghost" 
                size="icon"
                onClick={onMenuToggle}
                className="text-white hover:bg-white/10"
              >
                <Menu className="h-6 w-6" />
              </Button>
            )}
            
            <Link to="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full bg-gradient-to-r from-astro-purple to-astro-blue p-0.5">
                <div className="h-full w-full rounded-full bg-astro-black flex items-center justify-center">
                  <span className="text-sm font-bold text-white font-orbitron">A</span>
                </div>
              </div>
              <span className="text-xl font-bold text-gradient font-orbitron hidden sm:block">ASTROVERSE</span>
            </Link>
          </div>
          
          {/* Navigation links - shown on larger screens */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-white hover:text-astro-blue transition-colors font-exo2">
              {t('home')}
            </Link>
            <Link to="/projects" className="text-white hover:text-astro-blue transition-colors font-exo2">
              {t('projects')}
            </Link>
            <Link to="/explore" className="text-white hover:text-astro-blue transition-colors font-exo2">
              {t('explore')}
            </Link>
            <Link to="/community" className="text-white hover:text-astro-blue transition-colors font-exo2">
              {t('community')}
            </Link>
          </nav>
          
          {/* Right section - User & Language */}
          <div className="flex items-center space-x-4">
            <LanguageSelector />
            
            {isSignedIn ? (
              <div className="flex items-center">
                <Button
                  variant="ghost"
                  className="flex items-center space-x-2 text-white hover:bg-white/10"
                  onClick={signOut}
                >
                  <Avatar className="h-8 w-8">
                    {user?.imageUrl ? (
                      <AvatarImage src={user.imageUrl} alt={user.name} />
                    ) : (
                      <AvatarFallback className="bg-astro-purple text-white">
                        {user?.name?.substring(0, 2).toUpperCase() || 'U'}
                      </AvatarFallback>
                    )}
                  </Avatar>
                  <span className="hidden sm:block font-exo2">{user?.name}</span>
                  <ChevronDown className="h-4 w-4 hidden sm:block" />
                </Button>
              </div>
            ) : (
              <Button 
                variant="default" 
                size="sm" 
                className="bg-gradient-to-r from-astro-purple to-astro-blue hover:opacity-90"
                onClick={signIn}
              >
                <User className="h-4 w-4 mr-2" />
                <span className="font-exo2">{t('sign_in')}</span>
              </Button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
