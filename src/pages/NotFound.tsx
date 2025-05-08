
import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from '@/hooks/useTranslation';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Planet, Rocket } from 'lucide-react';
import StarField from '@/components/effects/StarField';
import ParallaxEffect from '@/components/effects/ParallaxEffect';

const NotFound = () => {
  const location = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-[calc(100vh-80px)] flex items-center justify-center p-4">
        <StarField starCount={200} />
        
        <ParallaxEffect speed={0.3}>
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-astro-purple to-astro-blue rounded-full blur-3xl opacity-20"></div>
        </ParallaxEffect>
        
        <ParallaxEffect speed={0.5}>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-astro-blue to-astro-cyan rounded-full blur-3xl opacity-20"></div>
        </ParallaxEffect>
        
        <div className="text-center relative z-10 animate-fade-in">
          <div className="flex items-center justify-center mb-6">
            <div className="relative">
              <Planet className="h-24 w-24 text-astro-blue/80" />
              <Rocket className="h-12 w-12 text-astro-purple absolute top-1/2 right-0 transform -translate-y-1/2 rotate-45" />
            </div>
          </div>
          <h1 className="text-8xl font-bold text-gradient mb-4">404</h1>
          <p className="text-2xl font-medium text-white mb-6">Lost in space? This dimension doesn't exist.</p>
          <p className="text-muted-foreground mb-8">
            The cosmic coordinates you're looking for might have shifted or been consumed by a black hole.
          </p>
          <Link to="/">
            <Button className="bg-gradient-to-r from-astro-purple to-astro-blue hover:opacity-90">
              Return to Home Base
            </Button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
