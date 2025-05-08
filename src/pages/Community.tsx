import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from '@/hooks/useTranslation';
import ExplosionEffect from '@/components/effects/ExplosionEffect';
import Layout from '@/components/layout/Layout';
import ParallaxEffect from '@/components/effects/ParallaxEffect';

const Community = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center pt-24">
          <div
            className="absolute inset-0 z-0 bg-cover bg-center"
            style={{ backgroundImage: `url(/public/lovable-uploads/community-bg.jpg)` }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-astro-black/80 via-astro-black/60 to-astro-black"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient mb-6">
                {t('community_title')}
              </h1>

              <p className="text-xl md:text-2xl text-white/80 mb-6">
                {t('community_subtitle')}
              </p>

              <p className="text-lg text-white/70 mb-8 max-w-2xl">
                {t('community_description')}
              </p>

              <div className="flex flex-wrap gap-4">
                <ExplosionEffect>
                  <Link to="/signup">
                    <Button className="bg-gradient-to-r from-astro-purple to-astro-blue hover:opacity-90">
                      <ChevronRight className="mr-2 h-4 w-4" />
                      {t('join_community')}
                    </Button>
                  </Link>
                </ExplosionEffect>

                <ExplosionEffect>
                  <Button
                    variant="outline"
                    className="border-astro-blue text-astro-blue hover:bg-astro-blue/10"
                    onClick={() => window.open('https://discord.gg/astroverse', '_blank')}
                  >
                    {t('join_discord')}
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </ExplosionEffect>
              </div>
            </div>
          </div>
        </section>

        {/* Community Features */}
        <section className="py-20 relative">
          <ParallaxEffect speed={0.1}>
            <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-astro-purple to-astro-blue rounded-full blur-3xl opacity-20"></div>
          </ParallaxEffect>

          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-12 text-center">
              {t('community_features')}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((index) => (
                <div
                  key={index}
                  className="astro-card hover:scale-105 transition-all duration-300 p-6 astro-glow h-full"
                >
                  <div className="h-12 w-12 rounded-full bg-gradient-to-r from-astro-purple to-astro-blue p-0.5 mb-6">
                    <div className="h-full w-full rounded-full bg-astro-black flex items-center justify-center">
                      <span className="text-xl font-bold text-white">{index}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {t(`community_feature_${index}_title`)}
                  </h3>
                  <p className="text-white/80">
                    {t(`community_feature_${index}_description`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Community Events */}
        <section className="py-20 relative bg-astro-dark/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-12 text-center">
              {t('upcoming_events')}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((index) => (
                <div
                  key={index}
                  className="astro-card p-6 hover:scale-105 transition-all duration-300"
                >
                  <div className="aspect-video rounded-lg overflow-hidden mb-4 bg-astro-dark">
                    <img
                      src={`/public/lovable-uploads/event-${index}.jpg`}
                      alt={t(`event_${index}_title`)}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-sm text-astro-blue mb-2">
                    {t(`event_${index}_date`)}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {t(`event_${index}_title`)}
                  </h3>
                  <p className="text-white/80 mb-4">
                    {t(`event_${index}_description`)}
                  </p>
                  <Button
                    variant="outline"
                    className="border-astro-blue text-astro-blue hover:bg-astro-blue/10 w-full"
                  >
                    {t('register_now')}
                  </Button>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button
                variant="outline"
                className="border-astro-blue text-astro-blue hover:bg-astro-blue/10"
              >
                {t('view_all_events')}
              </Button>
            </div>
          </div>
        </section>

        {/* Community Leaders */}
        <section className="py-20 relative">
          <ParallaxEffect speed={0.2}>
            <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-astro-blue to-astro-cyan rounded-full blur-3xl opacity-20"></div>
          </ParallaxEffect>

          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-12 text-center">
              {t('community_leaders')}
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
                <div
                  key={index}
                  className="astro-card p-6 text-center hover:scale-105 transition-all duration-300"
                >
                  <div className="h-20 w-20 rounded-full bg-gradient-to-r from-astro-purple to-astro-blue p-0.5 mx-auto mb-4">
                    <div className="h-full w-full rounded-full bg-astro-black flex items-center justify-center overflow-hidden">
                      <img
                        src={`/public/lovable-uploads/leader-${index}.jpg`}
                        alt={t(`leader_${index}_name`)}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-1">
                    {t(`leader_${index}_name`)}
                  </h3>
                  <p className="text-sm text-astro-blue">
                    {t(`leader_${index}_role`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Community Stats */}
        <section className="py-20 relative bg-astro-dark/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-12 text-center">
              {t('community_stats')}
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { value: '10,000+', label: t('community_members') },
                { value: '50+', label: t('countries') },
                { value: '500+', label: t('active_contributors') },
                { value: '1,000+', label: t('projects_launched') },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="astro-card backdrop-blur-md p-4 text-center"
                >
                  <div className="text-2xl md:text-3xl font-bold text-gradient mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/60">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="astro-card p-8 md:p-12 bg-gradient-to-r from-astro-dark/80 to-astro-black/80 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-6">
                {t('join_community_cta')}
              </h2>
              <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
                {t('join_community_description')}
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <ExplosionEffect>
                  <Link to="/signup">
                    <Button className="bg-gradient-to-r from-astro-purple to-astro-blue hover:opacity-90">
                      {t('signup_astroverse')}
                    </Button>
                  </Link>
                </ExplosionEffect>

                <ExplosionEffect>
                  <Button
                    variant="outline"
                    className="border-astro-blue text-astro-blue hover:bg-astro-blue/10"
                    onClick={() => window.open('https://discord.gg/astroverse', '_blank')}
                  >
                    {t('join_discord')}
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </ExplosionEffect>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Community;
