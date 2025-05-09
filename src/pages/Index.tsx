
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '@/hooks/useTranslation';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { 
  Rocket, Globe, Star, Satellite, 
  Atom, CreditCard, Layers, Triangle,
  Brain, Sparkles
} from 'lucide-react';
import ParallaxEffect from '@/components/effects/ParallaxEffect';
import ExplosionEffect from '@/components/effects/ExplosionEffect';
import SlideSection from '@/components/sections/SlideSection';
import AIAssistantsSection from '@/components/sections/AIAssistantsSection';
import '../styles/slideSection.css';

const Index = () => {
  const { t } = useTranslation();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    // Set video playback speed
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }

    // Add CSS to body for smooth scrolling
    document.body.style.scrollBehavior = 'smooth';
    
    // Track scroll position for parallax effects
    const handleScroll = () => {
      setScrollY(window.scrollY);
      document.documentElement.style.setProperty('--scroll-speed', String(window.scrollY * 0.001));
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      document.body.style.scrollBehavior = '';
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const projectSlides = [
    {
      id: 'retrotech',
      title: 'RetroTech',
      description: t('tech_description'),
      icon: <Rocket className="h-8 w-8 text-white" />,
      linkPath: '/retrotech',
      externalUrl: 'https://retro-tech-ast.vercel.app',
      logoUrl: '/public/lovable-uploads/e7bedbc5-9dc9-4797-a6cd-5feb5319b5f0.png',
      backgroundImageUrl: '/public/lovable-uploads/c9cd2b0a-6a28-486d-9845-6491ffd2f47a.png',
      facts: [
        'Our quantum processors achieve computational speeds 200x faster than traditional systems',
        'RetroTech neural networks can adapt to new data patterns without retraining',
        'Our RetroSafe™ security protocol has never been breached in independent testing'
      ],
      vision2030: 'By 2030, RetroTech aims to democratize quantum computing, making it accessible to researchers and businesses of all sizes while pioneering new standards in AI ethics and responsible innovation.'
    },
    {
      id: 'echoe',
      title: 'Echoe-2077',
      description: t('gaming_description'),
      icon: <Globe className="h-8 w-8 text-white" />,
      linkPath: '/echoe',
      backgroundImageUrl: '/public/lovable-uploads/912d57fb-fe1b-40c8-bc43-d6ca85898211.png',
      facts: [
        'Our neural feedback system creates sensations that 92% of users describe as "indistinguishable from reality"',
        'Echoe-2077 worlds continue to evolve even when players are offline',
        'Our AI NPCs have passed modified Turing tests in controlled studies'
      ],
      vision2030: 'By 2030, Echoe-2077 will blur the boundaries between virtual and physical reality, creating immersive worlds that respond to thought and emotion while fostering genuine human connection across digital spaces.'
    },
    {
      id: 'astral-finance',
      title: 'Astral Finance',
      description: t('financial_description'),
      icon: <CreditCard className="h-8 w-8 text-white" />,
      linkPath: '/astral-finance',
      backgroundImageUrl: '/public/lovable-uploads/093a8651-c02b-44a0-8ece-ac3587ac90ec.png',
      reversed: true,
      facts: [
        'Users who complete our financial education modules improve investment returns by an average of 32%',
        'Our AI advisory system has outperformed traditional financial advisors in 7 consecutive quarters',
        'Astral Finance has helped over 50,000 underserved individuals access banking services for the first time'
      ],
      vision2030: 'By 2030, Astral Finance will create a financial ecosystem where education and sophisticated tools work in harmony, empowering every individual to achieve financial security regardless of their starting point.'
    },
    {
      id: 'astral-studios',
      title: 'Astral Studios',
      description: t('design_description'),
      icon: <Layers className="h-8 w-8 text-white" />,
      linkPath: '/astral-studios',
      backgroundImageUrl: '/public/lovable-uploads/0081bfec-f662-43e2-a11c-7dd04c52474e.png',
      facts: [
        'Our real-time rendering engine processes architectural changes with zero perceptible latency',
        'Digital twins created by Astral Studios have been used in urban planning for 12 major cities',
        'Our VR walkthroughs reduce client revision requests by 78% compared to traditional presentations'
      ],
      vision2030: 'By 2030, Astral Studios will revolutionize spatial design by creating immersive digital environments that can be experienced before physical construction, bridging imagination and reality.'
    },
    {
      id: 'spacecraft',
      title: 'Spacecraft',
      description: t('fashion_description'),
      icon: <Triangle className="h-8 w-8 text-white" />,
      linkPath: '/spacecraft',
      backgroundImageUrl: '/public/lovable-uploads/8521ca11-d929-479f-aba7-92cb28897432.png',
      reversed: true,
      facts: [
        'Our adaptive fabrics can adjust temperature regulation within 0.5 degrees of optimal comfort',
        'Spacecraft textiles incorporate recycled materials from space industry waste',
        'Our programmable color-changing technology uses 80% less energy than previous generations'
      ],
      vision2030: "By 2030, Spacecraft will transform clothing from static items to dynamic personal ecosystems that adapt to the wearer's needs while maintaining zero environmental impact throughout the product lifecycle."
    },
    {
      id: 'aether',
      title: 'Aether',
      description: t('web3_description'),
      icon: <Atom className="h-8 w-8 text-white" />,
      linkPath: '/aether',
      backgroundImageUrl: '/public/lovable-uploads/e77a0b26-350e-47c6-85f3-0be2da5f2593.png',
      facts: [
        'Our NFT marketplace has helped digital artists earn over $42 million in primary sales',
        'The Astroverse DAO governance system has processed over 1,200 community proposals',
        'Our web3 authentication system reduces login friction by 95% while improving security'
      ],
      vision2030: 'By 2030, Aether will create a web3 ecosystem where digital ownership is intuitive, governance is transparent, and users have complete control over their digital identities and assets.'
    },
    {
      id: 'syntril',
      title: 'Syntril',
      description: t('esim_service'),
      icon: <Satellite className="h-8 w-8 text-white" />,
      linkPath: '/syntril',
      backgroundImageUrl: '/public/lovable-uploads/071bde78-c428-4001-a95e-b9ec132f9119.png',
      reversed: true,
      logoUrl: '/public/lovable-uploads/f2adb176-2cca-441e-855f-ffab4caf920f.png',
      facts: [
        'Our satellite constellation provides connectivity to regions covering 97.4% of the global population',
        'Syntril achieves sub-20ms latency across 85% of connected regions',
        'Our eSIM technology works in 195+ countries without requiring physical SIM changes'
      ],
      vision2030: 'By 2030, our connectivity solutions will eliminate digital divides worldwide, providing affordable, high-speed internet access to every region on Earth with near-zero latency.'
    },
    {
      id: 'astorium',
      title: 'Astorium',
      description: 'Secure digital assets powering the Astroverse ecosystem',
      icon: <Star className="h-8 w-8 text-white" />,
      linkPath: '/astorium',
      backgroundImageUrl: '/public/lovable-uploads/64deced2-a936-4cd3-b3b7-fe15ecb1e467.png',
      logoUrl: '/public/lovable-uploads/54c19d36-37f1-4702-b358-e73b4df0f8b9.png',
      facts: [
        'Astorium processes over 4.2 million transactions daily with negligible environmental impact',
        'Our wallet security has maintained perfect integrity against both conventional and quantum attack simulations',
        'The Astorium token serves as the utility backbone for all Astroverse platforms and services'
      ],
      vision2030: 'By 2030, Astorium will establish a seamless economic layer connecting all digital experiences, enabling frictionless value exchange while maintaining the highest standards of security and privacy.'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-80px)] flex flex-col items-center justify-center text-center px-4 overflow-hidden">
        {/* Video background */}
        <video 
          ref={videoRef}
          autoPlay 
          muted 
          loop 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover z-[-1]"
          style={{ filter: 'brightness(0.4) saturate(1.5)' }}
        >
          <source src="/public/lovable-uploads/27a7c211-bdba-4b2d-85a9-30d69e0dca8c.png" type="video/mp4" />
          <source src="/public/lovable-uploads/cf475c18-fb0f-4f87-8f72-fb35edbeff01.png" type="video/mp4" />
          <source src="/public/lovable-uploads/759e9d6a-9dbb-4160-91ac-4f8d386774b9.png" type="video/mp4" />
        </video>
        
        {/* Parallax background elements */}
        <ParallaxEffect speed={0.3}>
          <div 
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-astro-purple to-astro-blue rounded-full blur-3xl opacity-20"
            style={{ transform: `translateY(${scrollY * 0.05}px)` }}
          ></div>
        </ParallaxEffect>
        
        <ParallaxEffect speed={0.5}>
          <div 
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-astro-blue to-astro-cyan rounded-full blur-3xl opacity-20"
            style={{ transform: `translateY(${scrollY * -0.03}px)` }}
          ></div>
        </ParallaxEffect>
        
        {/* Planet decoration */}
        <div 
          className="absolute right-10 top-32 md:right-32 md:top-40 w-20 h-20 md:w-40 md:h-40 rounded-full bg-astro-blue/20 backdrop-filter backdrop-blur-xl animate-float"
          style={{ animationDelay: '0.5s' }}
        ></div>
        
        {/* Star decorations */}
        <div className="absolute left-20 bottom-40 text-astro-purple animate-pulse-slow">
          <Star className="h-6 w-6 md:h-10 md:w-10" />
        </div>
        <div className="absolute right-1/4 top-1/3 text-astro-blue animate-pulse-slow animation-delay-1000">
          <Star className="h-4 w-4 md:h-6 md:w-6" />
        </div>
        
        <div className="container max-w-4xl mx-auto relative z-10">
          <img 
            src="/public/lovable-uploads/89b21cf4-56a0-4c85-ac1f-5557bac0fc1b.png" 
            alt="Astroverse Logo" 
            className="h-20 md:h-32 mx-auto mb-8 animate-float"
          />
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-gradient font-orbitron">
            {t('hero_title')}
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-10 max-w-2xl mx-auto font-exo2">
            {t('hero_subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <ExplosionEffect>
              <Link to="/signup">
                <Button size="lg" className="bg-gradient-to-r from-astro-purple to-astro-blue hover:opacity-90 font-exo2">
                  {t('get_started')}
                </Button>
              </Link>
            </ExplosionEffect>
            
            <ExplosionEffect>
              <Link to="/projects">
                <Button size="lg" variant="outline" className="border-astro-blue text-astro-blue hover:bg-astro-blue/10 font-exo2">
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
      
      {/* Project Slides */}
      {projectSlides.map((project, index) => (
        <SlideSection
          key={project.id}
          id={project.id}
          title={project.title}
          description={project.description}
          facts={project.facts}
          vision2030={project.vision2030}
          backgroundColor={index % 2 === 0 ? 'bg-astro-dark/30' : 'bg-astro-black/50'}
          backgroundImageUrl={project.backgroundImageUrl}
          icon={project.icon}
          linkPath={project.linkPath}
          externalUrl={project.externalUrl}
          logoUrl={project.logoUrl}
          reversed={project.reversed}
          index={index}
        />
      ))}
      
      {/* AI Assistants Section */}
      <AIAssistantsSection />
      
      {/* CTA Section */}
      <section className="py-20 px-4 relative">
        <div className="container mx-auto max-w-6xl">
          <div className="astro-card p-8 md:p-12 bg-gradient-to-r from-astro-dark/80 to-astro-black/80">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-6 font-orbitron">
                {t('join_astroverse')}
              </h2>
              <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8 font-exo2">
                Join us in shaping the future of digital experiences. Explore our projects, connect with our community, and discover the limitless possibilities of the Astroverse.
              </p>
              <ExplosionEffect>
                <Link to="/signup">
                  <Button size="lg" className="bg-gradient-to-r from-astro-purple to-astro-blue hover:opacity-90 font-exo2">
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
