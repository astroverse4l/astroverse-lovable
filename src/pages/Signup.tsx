
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { useTranslation } from '@/hooks/useTranslation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from '@/hooks/use-toast';
import Layout from '@/components/layout/Layout';
import StarField from '@/components/effects/StarField';
import ParallaxEffect from '@/components/effects/ParallaxEffect';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const { signup } = useAuth();
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email || !password || !confirmPassword) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }
    
    if (password !== confirmPassword) {
      toast({
        title: "Error",
        description: "Passwords do not match",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    
    try {
      await signup(name, email, password);
      toast({
        title: "Success",
        description: "Your account has been created successfully",
      });
      navigate('/');
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to create account",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Layout>
      <div className="min-h-[calc(100vh-80px)] flex items-center justify-center p-4">
        <StarField starCount={100} />
        
        <ParallaxEffect speed={0.3}>
          <div className="absolute top-1/3 left-1/3 w-32 h-32 bg-gradient-to-r from-astro-purple to-astro-blue rounded-full blur-3xl opacity-20"></div>
        </ParallaxEffect>
        
        <ParallaxEffect speed={0.5}>
          <div className="absolute bottom-1/3 right-1/3 w-40 h-40 bg-gradient-to-r from-astro-blue to-astro-cyan rounded-full blur-3xl opacity-20"></div>
        </ParallaxEffect>
        
        <div className="w-full max-w-md astro-card p-8 animate-fade-in">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gradient mb-2">{t('welcome')}</h1>
            <p className="text-muted-foreground">{t('signup_description')}</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">{t('name')}</Label>
              <Input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-white/5 border-white/10 focus:border-astro-blue/50 text-white"
                placeholder="John Doe"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">{t('email')}</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/5 border-white/10 focus:border-astro-blue/50 text-white"
                placeholder="name@example.com"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password">{t('password')}</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-white/5 border-white/10 focus:border-astro-blue/50 text-white"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">{t('confirm_password')}</Label>
              <Input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="bg-white/5 border-white/10 focus:border-astro-blue/50 text-white"
                required
              />
            </div>
            
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-astro-purple to-astro-blue hover:opacity-90"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                  {t('signup')}...
                </div>
              ) : (
                t('signup')
              )}
            </Button>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-muted-foreground text-sm">
              {t('already_have_account')}{' '}
              <Link to="/login" className="text-astro-purple hover:text-astro-blue transition-colors">
                {t('login')}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Signup;
