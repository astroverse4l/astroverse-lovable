
import React, { useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';
import ExplosionEffect from '@/components/effects/ExplosionEffect';

interface SlideSectionProps {
  id: string;
  title: string;
  description: string;
  facts: string[];
  vision2030: string;
  backgroundColor?: string;
  backgroundImageUrl?: string;
  icon: React.ReactNode;
  linkPath: string;
  externalUrl?: string;
  logoUrl?: string;
  reversed?: boolean;
  index: number;
}

const SlideSection: React.FC<SlideSectionProps> = ({
  id,
  title,
  description,
  facts,
  vision2030,
  backgroundColor = 'bg-astro-dark/50',
  backgroundImageUrl,
  icon,
  linkPath,
  externalUrl,
  logoUrl,
  reversed = false,
  index,
}) => {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('section-visible');
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const gradientOverlay = (
    <div
      className="absolute inset-0 bg-gradient-to-b from-transparent via-astro-black/70 to-astro-black z-0"
      aria-hidden="true"
    />
  );

  return (
    <section
      id={id}
      ref={sectionRef}
      className={`min-h-screen relative overflow-hidden ${
        index % 2 === 0 ? 'section-even' : 'section-odd'
      } section-hidden`}
      style={{
        zIndex: 10 - index,
        marginTop: index === 0 ? '0' : '-10vh',
      }}
    >
      {/* Background */}
      <div
        className={`absolute inset-0 ${backgroundColor} z-0 transform transition-transform duration-700`}
        style={{
          backgroundImage: backgroundImageUrl ? `url(${backgroundImageUrl})` : 'none',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {backgroundImageUrl && gradientOverlay}
      </div>

      {/* Content */}
      <div
        className={`container mx-auto px-4 py-24 h-full flex items-center relative z-10 pt-[15vh] ${
          reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'
        }`}
      >
        <div className="w-full lg:w-1/2 space-y-8 mt-[10vh]">
          <div className="flex flex-col">
            <div
              className={`flex items-center space-x-4 mb-6 ${
                reversed ? 'lg:justify-end' : 'lg:justify-start'
              }`}
            >
              <div className="h-16 w-16 flex items-center justify-center rounded-full bg-gradient-to-r from-astro-purple to-astro-blue p-0.5 animate-float">
                <div className="h-full w-full rounded-full bg-astro-black/80 flex items-center justify-center">
                  {icon}
                </div>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient">{title}</h2>
            </div>

            {logoUrl && (
              <div
                className={`mb-8 ${reversed ? 'lg:text-right' : 'lg:text-left'} max-w-xs mx-auto ${
                  reversed ? 'lg:ml-auto lg:mr-0' : 'lg:mr-auto lg:ml-0'
                }`}
              >
                <img
                  src={logoUrl}
                  alt={`${title} Logo`}
                  className="max-h-32 w-auto mx-auto lg:mx-0 object-contain"
                />
              </div>
            )}

            <p
              className={`text-xl text-white/80 mb-6 leading-relaxed ${
                reversed ? 'lg:text-right' : 'lg:text-left'
              }`}
            >
              {description}
            </p>

            <div
              className={`space-y-6 ${reversed ? 'lg:text-right' : 'lg:text-left'}`}
            >
              <div className="astro-card p-6 backdrop-blur-lg">
                <h3 className="text-xl font-semibold text-gradient mb-3">{t('fun_facts')}</h3>
                <ul className="space-y-2 list-disc pl-5">
                  {facts.map((fact, i) => (
                    <li key={i} className="text-white/80">
                      {fact}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="astro-card p-6 backdrop-blur-lg">
                <h3 className="text-xl font-semibold text-gradient mb-3">{t('vision_2030')}</h3>
                <p className="text-white/80">{vision2030}</p>
              </div>
            </div>

            <div
              className={`mt-8 flex flex-wrap gap-4 ${
                reversed ? 'lg:justify-end' : 'lg:justify-start'
              }`}
            >
              <ExplosionEffect>
                <Link to={linkPath}>
                  <Button className="bg-gradient-to-r from-astro-purple to-astro-blue hover:opacity-90">
                    {t('learn_more')}
                  </Button>
                </Link>
              </ExplosionEffect>

              {externalUrl && (
                <ExplosionEffect>
                  <Button
                    variant="outline"
                    className="border-astro-blue text-astro-blue hover:bg-astro-blue/10 flex items-center gap-2"
                    onClick={() => window.open(externalUrl, '_blank')}
                  >
                    {t('visit_platform')}
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </ExplosionEffect>
              )}
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 hidden lg:flex justify-center items-center">
          <div className="relative w-full max-w-lg aspect-square">
            <div className="absolute inset-0 bg-gradient-to-r from-astro-purple/20 to-astro-blue/20 rounded-full blur-3xl animate-pulse-slow"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Accent elements */}
              <div className="absolute top-0 right-10 h-3 w-3 bg-astro-purple rounded-full animate-ping"></div>
              <div className="absolute bottom-10 left-10 h-2 w-2 bg-astro-blue rounded-full animate-ping animation-delay-1000"></div>
              <div className="absolute top-1/4 left-1/4 h-4 w-4 bg-astro-purple/50 rounded-full animate-pulse-slow"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Overlap reveal effect for next section */}
      <div className="absolute bottom-0 left-0 right-0 h-[15vh] bg-gradient-to-t from-astro-black to-transparent z-20"></div>
    </section>
  );
};

export default SlideSection;
