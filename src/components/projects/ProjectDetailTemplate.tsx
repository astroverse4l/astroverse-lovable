import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useTranslation } from '@/hooks/useTranslation';
import Layout from '@/components/layout/Layout';
import { ChevronRight } from 'lucide-react';
import ExplosionEffect from '@/components/effects/ExplosionEffect';
import StarField from '@/components/effects/StarField';

interface ProjectDetailTemplateProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  logoUrl?: string;
  logo?: string; // Added missing property
  backgroundImageUrl?: string;
  coverImage?: string; // Added missing property
  sections: {
    title: string;
    content: string;
  }[];
  features?: string[];
  externalUrl?: string;
  callToAction?: string;
}

const ProjectDetailTemplate: React.FC<ProjectDetailTemplateProps> = ({
  title,
  description,
  icon,
  logoUrl,
  logo, // Added to destructured props
  backgroundImageUrl,
  coverImage, // Added to destructured props
  sections,
  features,
  externalUrl,
  callToAction = 'Visit Platform'
}) => {
  const { t } = useTranslation();
  
  // Use logo or logoUrl (for backward compatibility)
  const displayLogo = logo || logoUrl;
  // Use coverImage or backgroundImageUrl (for backward compatibility)
  const displayBackgroundImage = coverImage || backgroundImageUrl;
  
  return (
    <Layout>
      {/* Hero section */}
      <section className="relative min-h-screen pt-24 pb-20">
        <div className="absolute inset-0 z-0">
          {displayBackgroundImage ? (
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${displayBackgroundImage})` }}>
              <div className="absolute inset-0 bg-gradient-to-b from-astro-black/80 via-astro-black/50 to-astro-black"></div>
            </div>
          ) : (
            <StarField starCount={150} />
          )}
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row md:items-center md:space-x-12">
            <div className="w-full md:w-1/2 space-y-8">
              <div className="flex flex-col">
                <div className="flex items-center space-x-6 mb-6">
                  <div className="h-20 w-20 rounded-full bg-gradient-to-r from-astro-purple to-astro-blue p-0.5 animate-float">
                    <div className="h-full w-full rounded-full bg-astro-black/80 flex items-center justify-center">
                      {icon}
                    </div>
                  </div>
                  
                  {displayLogo ? (
                    <img 
                      src={displayLogo} 
                      alt={`${title} Logo`}
                      className="h-16 md:h-24 object-contain"
                    />
                  ) : (
                    <h1 className="text-4xl md:text-6xl font-bold text-gradient font-orbitron">{title}</h1>
                  )}
                </div>
                
                {displayLogo && (
                  <h1 className="text-4xl md:text-6xl font-bold text-gradient mb-6 font-orbitron">{title}</h1>
                )}
                
                <p className="text-xl text-white/80 mb-8 leading-relaxed font-exo2">
                  {description}
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <ExplosionEffect>
                    <Link to="/projects">
                      <Button variant="outline" className="border-astro-blue text-astro-blue hover:bg-astro-blue/10">
                        {t('projects')}
                      </Button>
                    </Link>
                  </ExplosionEffect>
                  
                  {externalUrl && (
                    <ExplosionEffect>
                      <Button 
                        className="bg-gradient-to-r from-astro-purple to-astro-blue hover:opacity-90"
                        onClick={() => window.open(externalUrl, '_blank')}
                      >
                        {callToAction} <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                    </ExplosionEffect>
                  )}
                </div>
              </div>
            </div>
            
            <div className="w-full md:w-1/2 mt-12 md:mt-0">
              <div className="relative w-full max-w-xl mx-auto aspect-square">
                <div className="absolute inset-0 bg-gradient-to-r from-astro-purple/20 to-astro-blue/20 rounded-full blur-3xl animate-pulse-slow"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Project visualization here - could be replaced with a specific project visual */}
                  <div className="relative h-64 w-64 rounded-full bg-gradient-to-r from-astro-purple/30 to-astro-blue/30 flex items-center justify-center p-1 backdrop-blur-lg">
                    <div className="h-full w-full rounded-full bg-astro-black/50 flex items-center justify-center">
                      <div className="text-center">
                        {icon}
                      </div>
                    </div>
                    
                    {/* Orbiting elements */}
                    <div className="absolute top-0 left-0 right-0 bottom-0 animate-spin-slow" style={{ animationDuration: '20s' }}>
                      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2">
                        <div className="h-8 w-8 rounded-full bg-astro-purple"></div>
                      </div>
                    </div>
                    <div className="absolute top-0 left-0 right-0 bottom-0 animate-spin-slow animation-direction-reverse" style={{ animationDuration: '15s', animationDirection: 'reverse' }}>
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="h-6 w-6 rounded-full bg-astro-blue"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronRight className="h-8 w-8 text-white/50 transform rotate-90" />
        </div>
      </section>
      
      {/* Feature section */}
      {features && features.length > 0 && (
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-12 text-center font-orbitron">
              {t('key_features')}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="astro-card p-6 hover:transform hover:scale-105 transition-all duration-300">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-r from-astro-purple to-astro-blue p-0.5">
                      <div className="h-full w-full rounded-full bg-astro-black flex items-center justify-center">
                        <span className="text-white font-bold">{index + 1}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white">{feature.split(':')[0]}</h3>
                  </div>
                  <p className="text-white/70">{feature.split(':')[1] || ''}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
      
      {/* Content sections */}
      {sections.map((section, index) => (
        <section key={index} className={`py-20 relative ${index % 2 === 0 ? 'bg-astro-dark/30' : ''}`}>
          <div className="container mx-auto px-4">
            <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12`}>
              <div className="w-full md:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-6 font-orbitron">
                  {section.title}
                </h2>
                <div className="text-white/80 space-y-4 prose prose-invert max-w-none">
                  <p className="font-exo2">{section.content}</p>
                </div>
              </div>
              
              <div className="w-full md:w-1/2">
                <div className="astro-card aspect-video flex items-center justify-center p-8">
                  <div className="text-center">
                    <div className="h-24 w-24 mx-auto rounded-full bg-gradient-to-r from-astro-purple to-astro-blue p-0.5 animate-float">
                      <div className="h-full w-full rounded-full bg-astro-black flex items-center justify-center">
                        {icon}
                      </div>
                    </div>
                    <p className="mt-6 text-gradient font-bold font-exo2">
                      {/* This is the line that was causing the error, we need to pass the title as an object parameter */}
                      {t('section_visual', { title })}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
      
      {/* CTA section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="astro-card p-8 md:p-12 bg-gradient-to-r from-astro-dark/80 to-astro-black/80">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-6 font-orbitron">
                {t('join_project', { title })}
              </h2>
              <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8 font-exo2">
                {t('project_invitation', { title })}
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <ExplosionEffect>
                  <Link to="/community">
                    <Button variant="outline" className="border-astro-blue text-astro-blue hover:bg-astro-blue/10">
                      {t('community')}
                    </Button>
                  </Link>
                </ExplosionEffect>
                
                {externalUrl && (
                  <ExplosionEffect>
                    <Button 
                      className="bg-gradient-to-r from-astro-purple to-astro-blue hover:opacity-90"
                      onClick={() => window.open(externalUrl, '_blank')}
                    >
                      {callToAction} <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </ExplosionEffect>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectDetailTemplate;
