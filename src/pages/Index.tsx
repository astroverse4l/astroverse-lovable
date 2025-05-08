
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '@/hooks/useTranslation';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { 
  Rocket, Planet, Star, Satellite, 
  Atom, CreditCard, Layers, Triangle
} from 'lucide-react';
import ParallaxEffect from '@/components/effects/ParallaxEffect';
import ExplosionEffect from '@/components/effects/ExplosionEffect';

const Index = () => {
  const { t } = useTranslation();
  const videoRef = useRef<HTMLVideoElement>(null);
  
  useEffect(() => {
    // You can replace this with actual video or add animation effects
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-80px)] flex flex-col items-center justify-center text-center px-4">
        {/* Parallax background elements */}
        <ParallaxEffect speed={0.3}>
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-astro-purple to-astro-blue rounded-full blur-3xl opacity-20"></div>
        </ParallaxEffect>
        
        <ParallaxEffect speed={0.5}>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-astro-blue to-astro-cyan rounded-full blur-3xl opacity-20"></div>
        </ParallaxEffect>
        
        {/* Planet decoration */}
        <div className="absolute right-10 top-32 md:right-32 md:top-40 w-20 h-20 md:w-40 md:h-40 rounded-full bg-astro-blue/20 backdrop-filter backdrop-blur-xl animate-float"></div>
        
        {/* Star decorations */}
        <div className="absolute left-20 bottom-40 text-astro-purple animate-pulse-glow">
          <Star className="h-6 w-6 md:h-10 md:w-10" />
        </div>
        <div className="absolute right-1/4 top-1/3 text-astro-blue animate-pulse-glow">
          <Star className="h-4 w-4 md:h-6 md:w-6" />
        </div>
        
        <div className="container max-w-4xl mx-auto relative z-10">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-gradient animate-fade-in">
            {t('hero_title')}
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-10 max-w-2xl mx-auto animate-fade-in">
            {t('hero_subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <ExplosionEffect>
              <Link to="/signup">
                <Button size="lg" className="bg-gradient-to-r from-astro-purple to-astro-blue hover:opacity-90">
                  {t('get_started')}
                </Button>
              </Link>
            </ExplosionEffect>
            
            <ExplosionEffect>
              <Link to="/explore">
                <Button size="lg" variant="outline" className="border-astro-blue text-astro-blue hover:bg-astro-blue/10">
                  {t('learn_more')}
                </Button>
              </Link>
            </ExplosionEffect>
          </div>
          
          <div className="absolute bottom-[10%] left-1/2 transform -translate-x-1/2">
            <div className="animate-bounce">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/50">
                <path d="M12 5v14M5 12l7 7 7-7"/>
              </svg>
            </div>
          </div>
        </div>
      </section>
      
      {/* Ecosystem Overview Section */}
      <section className="py-20 px-4 relative">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-6">{t('our_ecosystem')}</h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              {t('ecosystem_description')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* RetroTech */}
            <div className="astro-card hover:scale-105 transition-all duration-300 p-6 astro-glow">
              <div className="flex flex-col items-center text-center">
                <div className="h-16 w-16 flex items-center justify-center rounded-full bg-gradient-to-r from-astro-purple to-astro-blue p-0.5 mb-4">
                  <div className="h-full w-full rounded-full bg-astro-black flex items-center justify-center">
                    <Rocket className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">RetroTech</h3>
                <p className="text-muted-foreground mb-4">{t('tech_description')}</p>
                <img 
                  src="/public/lovable-uploads/e7bedbc5-9dc9-4797-a6cd-5feb5319b5f0.png" 
                  alt="RetroTech Logo" 
                  className="w-24 h-24 object-contain mb-4"
                />
                <Link to="/retrotech" className="text-astro-blue hover:text-astro-purple transition-colors">
                  {t('learn_more')}
                </Link>
              </div>
            </div>
            
            {/* Echoe-2077 */}
            <div className="astro-card hover:scale-105 transition-all duration-300 p-6 astro-glow">
              <div className="flex flex-col items-center text-center">
                <div className="h-16 w-16 flex items-center justify-center rounded-full bg-gradient-to-r from-astro-blue to-astro-cyan p-0.5 mb-4">
                  <div className="h-full w-full rounded-full bg-astro-black flex items-center justify-center">
                    <Planet className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">Echoe-2077</h3>
                <p className="text-muted-foreground mb-4">{t('gaming_description')}</p>
                <Link to="/echoe" className="text-astro-blue hover:text-astro-purple transition-colors">
                  {t('learn_more')}
                </Link>
              </div>
            </div>
            
            {/* Astral Finance */}
            <div className="astro-card hover:scale-105 transition-all duration-300 p-6 astro-glow">
              <div className="flex flex-col items-center text-center">
                <div className="h-16 w-16 flex items-center justify-center rounded-full bg-gradient-to-r from-astro-cyan to-astro-blue p-0.5 mb-4">
                  <div className="h-full w-full rounded-full bg-astro-black flex items-center justify-center">
                    <CreditCard className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">Astral Finance</h3>
                <p className="text-muted-foreground mb-4">{t('financial_description')}</p>
                <Link to="/astral-finance" className="text-astro-blue hover:text-astro-purple transition-colors">
                  {t('learn_more')}
                </Link>
              </div>
            </div>
            
            {/* Astral Studios */}
            <div className="astro-card hover:scale-105 transition-all duration-300 p-6 astro-glow">
              <div className="flex flex-col items-center text-center">
                <div className="h-16 w-16 flex items-center justify-center rounded-full bg-gradient-to-r from-astro-purple to-astro-violet p-0.5 mb-4">
                  <div className="h-full w-full rounded-full bg-astro-black flex items-center justify-center">
                    <Layers className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">Astral Studios</h3>
                <p className="text-muted-foreground mb-4">{t('design_description')}</p>
                <Link to="/astral-studios" className="text-astro-blue hover:text-astro-purple transition-colors">
                  {t('learn_more')}
                </Link>
              </div>
            </div>
            
            {/* Spacecraft */}
            <div className="astro-card hover:scale-105 transition-all duration-300 p-6 astro-glow">
              <div className="flex flex-col items-center text-center">
                <div className="h-16 w-16 flex items-center justify-center rounded-full bg-gradient-to-r from-astro-violet to-astro-purple p-0.5 mb-4">
                  <div className="h-full w-full rounded-full bg-astro-black flex items-center justify-center">
                    <Triangle className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">Spacecraft</h3>
                <p className="text-muted-foreground mb-4">{t('fashion_description')}</p>
                <Link to="/spacecraft" className="text-astro-blue hover:text-astro-purple transition-colors">
                  {t('learn_more')}
                </Link>
              </div>
            </div>
            
            {/* Web3 & NFT */}
            <div className="astro-card hover:scale-105 transition-all duration-300 p-6 astro-glow">
              <div className="flex flex-col items-center text-center">
                <div className="h-16 w-16 flex items-center justify-center rounded-full bg-gradient-to-r from-astro-blue to-astro-purple p-0.5 mb-4">
                  <div className="h-full w-full rounded-full bg-astro-black flex items-center justify-center">
                    <Atom className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{t('web3')}</h3>
                <p className="text-muted-foreground mb-4">{t('web3_description')}</p>
                <Link to="/web3" className="text-astro-blue hover:text-astro-purple transition-colors">
                  {t('learn_more')}
                </Link>
              </div>
            </div>
            
            {/* Lunex & Aether */}
            <div className="astro-card hover:scale-105 transition-all duration-300 p-6 astro-glow">
              <div className="flex flex-col items-center text-center">
                <div className="h-16 w-16 flex items-center justify-center rounded-full bg-gradient-to-r from-astro-cyan to-astro-blue p-0.5 mb-4">
                  <div className="h-full w-full rounded-full bg-astro-black flex items-center justify-center">
                    <Star className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">Lunex & Aether</h3>
                <p className="text-muted-foreground mb-4">{t('crypto_wallet')}</p>
                <img 
                  src="/public/lovable-uploads/570f303b-d79c-4529-a73a-39e849d88dc4.png" 
                  alt="Astorium Logo" 
                  className="w-24 h-24 object-contain mb-4"
                />
                <Link to="/lunex" className="text-astro-blue hover:text-astro-purple transition-colors">
                  {t('learn_more')}
                </Link>
              </div>
            </div>
            
            {/* Syntril & TarsNet */}
            <div className="astro-card hover:scale-105 transition-all duration-300 p-6 astro-glow">
              <div className="flex flex-col items-center text-center">
                <div className="h-16 w-16 flex items-center justify-center rounded-full bg-gradient-to-r from-astro-blue to-astro-cyan p-0.5 mb-4">
                  <div className="h-full w-full rounded-full bg-astro-black flex items-center justify-center">
                    <Satellite className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">Syntril & TarsNet</h3>
                <p className="text-muted-foreground mb-4">{t('esim_service')}</p>
                <div className="flex flex-row space-x-4">
                  <img 
                    src="/public/lovable-uploads/176de78f-b8be-402e-b1cf-72707a84b25a.png" 
                    alt="Syntril Logo" 
                    className="w-24 h-24 object-contain mb-4"
                  />
                  <img 
                    src="/public/lovable-uploads/f2adb176-2cca-441e-855f-ffab4caf920f.png" 
                    alt="TarsNet Logo" 
                    className="w-24 h-24 object-contain mb-4"
                  />
                </div>
                <Link to="/connectivity" className="text-astro-blue hover:text-astro-purple transition-colors">
                  {t('learn_more')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* AI Assistants */}
      <section className="py-20 px-4 relative">
        <div className="container mx-auto max-w-6xl">
          <div className="astro-card p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-6">{t('meet_lyra_astra')}</h2>
                <p className="text-lg text-white/80 mb-6">
                  {t('ai_assistant_description')}
                </p>
                <ExplosionEffect>
                  <Button className="bg-gradient-to-r from-astro-purple to-astro-blue hover:opacity-90">
                    {t('get_started')}
                  </Button>
                </ExplosionEffect>
              </div>
              
              <div className="flex justify-center">
                <div className="relative">
                  {/* AI Assistant Illustration */}
                  <div className="h-64 w-64 rounded-full bg-gradient-to-r from-astro-purple/20 to-astro-blue/20 flex items-center justify-center p-1 backdrop-blur-lg">
                    <div className="h-full w-full rounded-full bg-astro-black/50 flex items-center justify-center">
                      <div className="text-center">
                        <Atom className="h-16 w-16 text-white mx-auto animate-spin-slow" />
                        <h3 className="text-xl font-medium text-gradient mt-2">Lyra & Astra</h3>
                      </div>
                    </div>
                  </div>
                  
                  {/* Orbiting elements */}
                  <div className="absolute top-0 left-0 right-0 bottom-0 animate-spin-slow" style={{ animationDuration: '20s' }}>
                    <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/4">
                      <div className="h-8 w-8 rounded-full bg-astro-purple"></div>
                    </div>
                  </div>
                  <div className="absolute top-0 left-0 right-0 bottom-0 animate-spin-slow" style={{ animationDuration: '15s', animationDirection: 'reverse' }}>
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/4">
                      <div className="h-6 w-6 rounded-full bg-astro-blue"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Projects Carousel */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-6">{t('projects')}</h2>
          </div>
          
          <div className="flex overflow-x-auto pb-8 space-x-6 snap-x scrollbar-none">
            {/* Project 1 */}
            <div className="snap-center shrink-0 astro-card p-6 w-80 md:w-96 astro-glow">
              <img 
                src="/public/lovable-uploads/cbf88306-6035-4fe4-a787-08c3ebea7c34.png" 
                alt="Astroverse Logo" 
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Astroverse</h3>
              <p className="text-muted-foreground mb-4">The central hub connecting all projects and services</p>
              <ExplosionEffect>
                <Button size="sm" className="bg-gradient-to-r from-astro-purple to-astro-blue hover:opacity-90">
                  {t('explore')}
                </Button>
              </ExplosionEffect>
            </div>
            
            {/* Project 2 */}
            <div className="snap-center shrink-0 astro-card p-6 w-80 md:w-96 astro-glow">
              <img 
                src="/public/lovable-uploads/e7bedbc5-9dc9-4797-a6cd-5feb5319b5f0.png" 
                alt="RetroTech Logo" 
                className="w-full h-48 object-contain rounded-lg mb-4 bg-astro-dark/50"
              />
              <h3 className="text-xl font-semibold mb-2">RetroTech</h3>
              <p className="text-muted-foreground mb-4">Innovative technology solutions for modern challenges</p>
              <ExplosionEffect>
                <Button size="sm" className="bg-gradient-to-r from-astro-purple to-astro-blue hover:opacity-90">
                  {t('explore')}
                </Button>
              </ExplosionEffect>
            </div>
            
            {/* Project 3 */}
            <div className="snap-center shrink-0 astro-card p-6 w-80 md:w-96 astro-glow">
              <img 
                src="/public/lovable-uploads/54c19d36-37f1-4702-b358-e73b4df0f8b9.png" 
                alt="Astorium Logo" 
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Astorium</h3>
              <p className="text-muted-foreground mb-4">The cryptocurrency powering the Astroverse ecosystem</p>
              <ExplosionEffect>
                <Button size="sm" className="bg-gradient-to-r from-astro-purple to-astro-blue hover:opacity-90">
                  {t('explore')}
                </Button>
              </ExplosionEffect>
            </div>
            
            {/* Project 4 */}
            <div className="snap-center shrink-0 astro-card p-6 w-80 md:w-96 astro-glow">
              <img 
                src="/public/lovable-uploads/f2adb176-2cca-441e-855f-ffab4caf920f.png" 
                alt="TarsNet Logo" 
                className="w-full h-48 object-contain rounded-lg mb-4 bg-astro-dark/50"
              />
              <h3 className="text-xl font-semibold mb-2">TarsNet</h3>
              <p className="text-muted-foreground mb-4">High-speed connectivity services for the digital age</p>
              <ExplosionEffect>
                <Button size="sm" className="bg-gradient-to-r from-astro-purple to-astro-blue hover:opacity-90">
                  {t('explore')}
                </Button>
              </ExplosionEffect>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-4 relative">
        <div className="container mx-auto max-w-6xl">
          <div className="astro-card p-8 md:p-12 bg-gradient-to-r from-astro-dark/80 to-astro-black/80">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-6">
                {t('hero_title')}
              </h2>
              <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
                {t('hero_subtitle')}
              </p>
              <ExplosionEffect>
                <Link to="/signup">
                  <Button size="lg" className="bg-gradient-to-r from-astro-purple to-astro-blue hover:opacity-90">
                    {t('get_started')}
                  </Button>
                </Link>
              </ExplosionEffect>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
