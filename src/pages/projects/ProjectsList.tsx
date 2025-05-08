
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Rocket, Globe, Atom, Star, 
  CreditCard, Layers, Triangle, Satellite
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation } from '@/hooks/useTranslation';
import ExplosionEffect from '@/components/effects/ExplosionEffect';
import Layout from '@/components/layout/Layout';

const ProjectsList = () => {
  const { t } = useTranslation();
  
  const projects = [
    { 
      id: 'retrotech',
      name: 'RetroTech', 
      description: t('tech_description'),
      icon: <Rocket className="h-8 w-8 text-white" />,
      image: '/public/lovable-uploads/e7bedbc5-9dc9-4797-a6cd-5feb5319b5f0.png',
      color: 'from-purple-500 to-blue-500',
      link: '/retrotech',
      externalUrl: 'https://retro-tech-ast.vercel.app'
    },
    { 
      id: 'echoe',
      name: 'Echoe-2077', 
      description: t('gaming_description'),
      icon: <Globe className="h-8 w-8 text-white" />,
      color: 'from-blue-500 to-cyan-400',
      link: '/echoe'
    },
    { 
      id: 'astral-finance',
      name: 'Astral Finance', 
      description: t('financial_description'),
      icon: <CreditCard className="h-8 w-8 text-white" />,
      color: 'from-cyan-400 to-teal-500',
      link: '/astral-finance'
    },
    { 
      id: 'astral-studios',
      name: 'Astral Studios', 
      description: t('design_description'),
      icon: <Layers className="h-8 w-8 text-white" />,
      color: 'from-teal-500 to-green-500',
      link: '/astral-studios'
    },
    { 
      id: 'spacecraft',
      name: 'Spacecraft', 
      description: t('fashion_description'),
      icon: <Triangle className="h-8 w-8 text-white" />,
      color: 'from-pink-500 to-purple-500',
      link: '/spacecraft'
    },
    { 
      id: 'lunex',
      name: 'Lunex', 
      description: t('crypto_wallet'),
      icon: <Star className="h-8 w-8 text-white" />,
      image: '/public/lovable-uploads/570f303b-d79c-4529-a73a-39e849d88dc4.png',
      color: 'from-yellow-500 to-orange-500',
      link: '/lunex'
    },
    { 
      id: 'aether',
      name: 'Aether', 
      description: t('crypto_wallet'),
      icon: <Atom className="h-8 w-8 text-white" />,
      color: 'from-violet-500 to-purple-500',
      link: '/aether'
    },
    { 
      id: 'syntril',
      name: 'Syntril', 
      description: t('esim_service'),
      icon: <Satellite className="h-8 w-8 text-white" />,
      image: '/public/lovable-uploads/176de78f-b8be-402e-b1cf-72707a84b25a.png',
      color: 'from-blue-500 to-indigo-500',
      link: '/syntril'
    },
    { 
      id: 'tarsnet',
      name: 'TarsNet', 
      description: t('esim_service'),
      icon: <Satellite className="h-8 w-8 text-white" />,
      image: '/public/lovable-uploads/f2adb176-2cca-441e-855f-ffab4caf920f.png',
      color: 'from-cyan-500 to-blue-500',
      link: '/tarsnet'
    },
    { 
      id: 'astorium',
      name: 'Astorium', 
      description: 'The cryptocurrency powering the Astroverse ecosystem',
      icon: <Star className="h-8 w-8 text-white" />,
      image: '/public/lovable-uploads/54c19d36-37f1-4702-b358-e73b4df0f8b9.png',
      color: 'from-blue-500 to-purple-500',
      link: '/astorium'
    },
  ];

  return (
    <Layout>
      <div className="min-h-screen pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
              {t('projects')}
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              {t('ecosystem_description')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Link 
                key={project.id}
                to={project.link}
                className="block group"
              >
                <div className="astro-card hover:transform hover:scale-105 transition-all duration-300 h-full overflow-hidden group">
                  <div className={`h-3 w-full bg-gradient-to-r ${project.color}`}></div>
                  
                  <div className="p-8">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className={`h-16 w-16 flex items-center justify-center rounded-full bg-gradient-to-r ${project.color} p-0.5 group-hover:scale-110 transition-transform duration-300`}>
                        <div className="h-full w-full rounded-full bg-astro-black flex items-center justify-center">
                          {project.icon}
                        </div>
                      </div>
                      
                      {project.image ? (
                        <img 
                          src={project.image} 
                          alt={project.name} 
                          className="h-12 object-contain"
                        />
                      ) : (
                        <h2 className="text-2xl font-bold text-white">{project.name}</h2>
                      )}
                    </div>
                    
                    {project.image && (
                      <h2 className="text-2xl font-bold text-white mb-4">{project.name}</h2>
                    )}
                    
                    <p className="text-white/70 mb-6">{project.description}</p>
                    
                    <ExplosionEffect>
                      <Button 
                        className={`w-full bg-gradient-to-r ${project.color} hover:opacity-90 transition-opacity`}
                      >
                        {t('explore')}
                      </Button>
                    </ExplosionEffect>
                    
                    {project.externalUrl && (
                      <div className="text-center mt-4">
                        <button 
                          className="text-astro-blue hover:text-white transition-colors text-sm"
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            window.open(project.externalUrl, '_blank');
                          }}
                        >
                          {t('visit_platform')}
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProjectsList;
