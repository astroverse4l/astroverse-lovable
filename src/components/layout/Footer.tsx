
import React from 'react';
import { Link } from 'react-router-dom';
import { Rocket, Github, Twitter, Linkedin, Instagram } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

const Footer = () => {
  const { t } = useTranslation();
  
  return (
    <footer className="neo-blur mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="h-10 w-10 rounded-full bg-gradient-to-r from-astro-purple to-astro-blue p-0.5">
                <div className="h-full w-full rounded-full bg-astro-black flex items-center justify-center">
                  <span className="text-lg font-bold text-white">A</span>
                </div>
              </div>
              <span className="text-xl font-bold text-gradient">ASTROVERSE</span>
            </Link>
            <p className="text-muted-foreground text-sm">
              {t('footer_description')}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Github size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4 text-gradient">{t('projects')}</h3>
            <ul className="space-y-2">
              <li><Link to="/retrotech" className="text-muted-foreground hover:text-primary transition-colors">RetroTech</Link></li>
              <li><Link to="/echoe" className="text-muted-foreground hover:text-primary transition-colors">Echoe-2077</Link></li>
              <li><Link to="/astral-finance" className="text-muted-foreground hover:text-primary transition-colors">Astral Finance</Link></li>
              <li><Link to="/astral-studios" className="text-muted-foreground hover:text-primary transition-colors">Astral Studios</Link></li>
              <li><Link to="/spacecraft" className="text-muted-foreground hover:text-primary transition-colors">Spacecraft</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4 text-gradient">{t('services')}</h3>
            <ul className="space-y-2">
              <li><Link to="/lunex" className="text-muted-foreground hover:text-primary transition-colors">Lunex</Link></li>
              <li><Link to="/aether" className="text-muted-foreground hover:text-primary transition-colors">Aether Wallet</Link></li>
              <li><Link to="/syntril" className="text-muted-foreground hover:text-primary transition-colors">Syntril eSIM</Link></li>
              <li><Link to="/tarsnet" className="text-muted-foreground hover:text-primary transition-colors">TarsNet</Link></li>
              <li><Link to="/astorium" className="text-muted-foreground hover:text-primary transition-colors">Astorium</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4 text-gradient">{t('resources')}</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">{t('about')}</Link></li>
              <li><Link to="/faq" className="text-muted-foreground hover:text-primary transition-colors">{t('faq')}</Link></li>
              <li><Link to="/support" className="text-muted-foreground hover:text-primary transition-colors">{t('support')}</Link></li>
              <li><Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">{t('privacy_policy')}</Link></li>
              <li><Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors">{t('terms')}</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Astroverse. {t('all_rights_reserved')}
          </p>
          
          <div className="flex items-center space-x-2 text-muted-foreground text-sm">
            <Link to="/privacy" className="hover:text-primary transition-colors">
              {t('privacy_policy')}
            </Link>
            <span>•</span>
            <Link to="/terms" className="hover:text-primary transition-colors">
              {t('terms_of_service')}
            </Link>
            <span>•</span>
            <Link to="/cookies" className="hover:text-primary transition-colors">
              {t('cookies')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
