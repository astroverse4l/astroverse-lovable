
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronRight, ExternalLink } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';
import ExplosionEffect from '@/components/effects/ExplosionEffect';
import Layout from '@/components/layout/Layout';
import ParallaxEffect from '@/components/effects/ParallaxEffect';

interface ProjectDetailProps {
  title: string;
  subtitle: string;
  description: string;
  logo?: string;
  coverImage: string;
  externalUrl?: string;
  features: string[];
  vision: string[];
  team: { name: string; role: string; avatar?: string }[];
  roadmap: { year: string; milestones: string[] }[];
  icon: React.ReactNode;
  stats?: { label: string; value: string }[];
  additionalContent?: React.ReactNode;
}

const ProjectDetailTemplate: React.FC<ProjectDetailProps> = ({
  title,
  subtitle,
  description,
  logo,
  coverImage,
  externalUrl,
  features,
  vision,
  team,
  roadmap,
  icon,
  stats,
  additionalContent,
}) => {
  const { t } = useTranslation();

  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center pt-24">
          <div
            className="absolute inset-0 z-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${coverImage})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-astro-black/80 via-astro-black/60 to-astro-black"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <div className="flex items-center space-x-4 mb-6">
                <div className="h-16 w-16 flex items-center justify-center rounded-full bg-gradient-to-r from-astro-purple to-astro-blue p-0.5">
                  <div className="h-full w-full rounded-full bg-astro-black/80 flex items-center justify-center">
                    {icon}
                  </div>
                </div>
                {logo ? (
                  <img src={logo} alt={title} className="h-20 object-contain" />
                ) : (
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient">{title}</h1>
                )}
              </div>

              <p className="text-xl md:text-2xl text-white/80 mb-6">{subtitle}</p>

              <p className="text-lg text-white/70 mb-8 max-w-2xl">{description}</p>

              <div className="flex flex-wrap gap-4">
                <ExplosionEffect>
                  <Link to="/">
                    <Button className="bg-gradient-to-r from-astro-purple to-astro-blue hover:opacity-90">
                      <ChevronRight className="mr-2 h-4 w-4" />
                      {t('back_to_astroverse')}
                    </Button>
                  </Link>
                </ExplosionEffect>

                {externalUrl && (
                  <ExplosionEffect>
                    <Button
                      variant="outline"
                      className="border-astro-blue text-astro-blue hover:bg-astro-blue/10"
                      onClick={() => window.open(externalUrl, '_blank')}
                    >
                      {t('visit_platform')}
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </ExplosionEffect>
                )}
              </div>

              {stats && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                  {stats.map((stat, index) => (
                    <div
                      key={index}
                      className="astro-card backdrop-blur-md p-4 text-center"
                    >
                      <div className="text-2xl md:text-3xl font-bold text-gradient mb-2">{stat.value}</div>
                      <div className="text-sm text-white/60">{stat.label}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 relative">
          <ParallaxEffect speed={0.1}>
            <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-astro-purple to-astro-blue rounded-full blur-3xl opacity-20"></div>
          </ParallaxEffect>

          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-12 text-center">
              {t('key_features')}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="astro-card hover:scale-105 transition-all duration-300 p-6 astro-glow h-full"
                >
                  <div className="h-12 w-12 rounded-full bg-gradient-to-r from-astro-purple to-astro-blue p-0.5 mb-6">
                    <div className="h-full w-full rounded-full bg-astro-black flex items-center justify-center">
                      <span className="text-xl font-bold text-white">{index + 1}</span>
                    </div>
                  </div>
                  <p className="text-white/80">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-20 relative bg-astro-dark/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-12 text-center">
              {t('our_vision')}
            </h2>

            <div className="max-w-3xl mx-auto space-y-6">
              {vision.map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="h-8 w-8 rounded-full bg-gradient-to-r from-astro-purple to-astro-blue p-0.5 flex-shrink-0 mt-1">
                    <div className="h-full w-full rounded-full bg-astro-black flex items-center justify-center">
                      <span className="text-sm font-bold text-white">{index + 1}</span>
                    </div>
                  </div>
                  <p className="text-lg text-white/80">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 relative">
          <ParallaxEffect speed={0.2}>
            <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-astro-blue to-astro-cyan rounded-full blur-3xl opacity-20"></div>
          </ParallaxEffect>

          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-12 text-center">
              {t('our_team')}
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div
                  key={index}
                  className="astro-card p-6 text-center hover:scale-105 transition-all duration-300"
                >
                  <div className="h-20 w-20 rounded-full bg-gradient-to-r from-astro-purple to-astro-blue p-0.5 mx-auto mb-4">
                    <div className="h-full w-full rounded-full bg-astro-black flex items-center justify-center overflow-hidden">
                      {member.avatar ? (
                        <img
                          src={member.avatar}
                          alt={member.name}
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <span className="text-xl font-bold text-white">
                          {member.name.charAt(0)}
                        </span>
                      )}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
                  <p className="text-sm text-astro-blue">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Roadmap Section */}
        <section className="py-20 relative bg-astro-dark/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-12 text-center">
              {t('roadmap')}
            </h2>

            <div className="relative max-w-4xl mx-auto">
              {/* Timeline */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-astro-purple via-astro-blue to-astro-cyan"></div>

              {roadmap.map((phase, index) => (
                <div
                  key={index}
                  className={`relative flex items-center mb-12 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                    <div className="h-8 w-8 rounded-full bg-gradient-to-r from-astro-purple to-astro-blue p-0.5">
                      <div className="h-full w-full rounded-full bg-astro-black flex items-center justify-center">
                        <span className="text-sm font-bold text-white">{index + 1}</span>
                      </div>
                    </div>
                  </div>

                  <div className="w-1/2 md:w-5/12 hidden md:block"></div>

                  <div className="astro-card p-6 backdrop-blur-md md:w-5/12 z-10 w-full">
                    <div className="text-xl font-bold text-gradient mb-4">{phase.year}</div>
                    <ul className="space-y-2 list-disc pl-5">
                      {phase.milestones.map((milestone, i) => (
                        <li key={i} className="text-white/80">{milestone}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Content */}
        {additionalContent && <div>{additionalContent}</div>}

        {/* CTA Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="astro-card p-8 md:p-12 bg-gradient-to-r from-astro-dark/80 to-astro-black/80 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-6">{t('join_adventure')}</h2>
              <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
                {t('join_project_description', { project: title })}
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <ExplosionEffect>
                  <Link to="/signup">
                    <Button className="bg-gradient-to-r from-astro-purple to-astro-blue hover:opacity-90">
                      {t('signup_astroverse')}
                    </Button>
                  </Link>
                </ExplosionEffect>

                {externalUrl && (
                  <ExplosionEffect>
                    <Button
                      variant="outline"
                      className="border-astro-blue text-astro-blue hover:bg-astro-blue/10"
                      onClick={() => window.open(externalUrl, '_blank')}
                    >
                      {t('visit_platform')}
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </ExplosionEffect>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ProjectDetailTemplate;
