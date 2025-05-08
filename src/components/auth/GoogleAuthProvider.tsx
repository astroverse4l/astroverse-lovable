
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { toast } from '@/components/ui/use-toast';

interface GoogleUser {
  id: string;
  name: string;
  email: string;
  imageUrl: string;
}

interface GoogleAuthContextType {
  isSignedIn: boolean;
  user: GoogleUser | null;
  isLoading: boolean;
  signIn: () => Promise<void>;
  signOut: () => Promise<void>;
}

const GoogleAuthContext = createContext<GoogleAuthContextType | undefined>(undefined);

interface GoogleAuthProviderProps {
  children: ReactNode;
}

// Google client configuration
const googleConfig = {
  clientId: "627304617194-jaod1bk93h8vacea0tpdsktict7ihqpa.apps.googleusercontent.com",
  scopes: "email profile",
};

export const GoogleAuthProvider = ({ children }: GoogleAuthProviderProps) => {
  const [isSignedIn, setIsSignedIn] = useState<boolean>(false);
  const [user, setUser] = useState<GoogleUser | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [googleAuth, setGoogleAuth] = useState<any>(null);

  useEffect(() => {
    const loadGoogleAuth = () => {
      setIsLoading(true);
      
      // Check if Google API script is already loaded
      if (window.gapi) {
        initGoogleAuth();
        return;
      }

      // Load Google API script
      const script = document.createElement('script');
      script.src = 'https://apis.google.com/js/platform.js';
      script.onload = initGoogleAuth;
      script.onerror = () => {
        setIsLoading(false);
        toast({
          title: "Failed to load Google authentication",
          description: "Please check your internet connection and try again.",
          variant: "destructive"
        });
      };
      document.body.appendChild(script);
    };

    const initGoogleAuth = () => {
      window.gapi.load('auth2', () => {
        window.gapi.auth2.init({
          client_id: googleConfig.clientId,
          scope: googleConfig.scopes,
        }).then((auth: any) => {
          setGoogleAuth(auth);
          
          // Update initial status
          const isUserSignedIn = auth.isSignedIn.get();
          setIsSignedIn(isUserSignedIn);
          
          if (isUserSignedIn) {
            const googleUser = auth.currentUser.get();
            const profile = googleUser.getBasicProfile();
            
            setUser({
              id: profile.getId(),
              name: profile.getName(),
              email: profile.getEmail(),
              imageUrl: profile.getImageUrl(),
            });
          }
          
          setIsLoading(false);
          
          // Listen for sign-in state changes
          auth.isSignedIn.listen((signedIn: boolean) => {
            setIsSignedIn(signedIn);
            
            if (signedIn) {
              const googleUser = auth.currentUser.get();
              const profile = googleUser.getBasicProfile();
              
              setUser({
                id: profile.getId(),
                name: profile.getName(),
                email: profile.getEmail(),
                imageUrl: profile.getImageUrl(),
              });
              
              toast({
                title: "Signed in successfully",
                description: `Welcome, ${profile.getName()}!`,
              });
            } else {
              setUser(null);
            }
          });
        }).catch((error: any) => {
          setIsLoading(false);
          console.error('Google Auth initialization failed:', error);
          toast({
            title: "Authentication failed",
            description: "There was an error initializing Google authentication.",
            variant: "destructive"
          });
        });
      });
    };

    loadGoogleAuth();
  }, []);

  const signIn = async (): Promise<void> => {
    if (!googleAuth) {
      toast({
        title: "Authentication not ready",
        description: "Please try again in a moment.",
        variant: "destructive"
      });
      return;
    }

    try {
      await googleAuth.signIn();
    } catch (error) {
      console.error('Sign in failed:', error);
      toast({
        title: "Sign in failed",
        description: "There was an error signing in with Google.",
        variant: "destructive"
      });
    }
  };

  const signOut = async (): Promise<void> => {
    if (!googleAuth) {
      return;
    }

    try {
      await googleAuth.signOut();
      toast({
        title: "Signed out successfully",
        description: "You have been signed out of your account.",
      });
    } catch (error) {
      console.error('Sign out failed:', error);
      toast({
        title: "Sign out failed",
        description: "There was an error signing out.",
        variant: "destructive"
      });
    }
  };

  const value: GoogleAuthContextType = {
    isSignedIn,
    user,
    isLoading,
    signIn,
    signOut,
  };

  return (
    <GoogleAuthContext.Provider value={value}>
      {children}
    </GoogleAuthContext.Provider>
  );
};

export const useGoogleAuth = (): GoogleAuthContextType => {
  const context = useContext(GoogleAuthContext);
  if (context === undefined) {
    throw new Error('useGoogleAuth must be used within a GoogleAuthProvider');
  }
  return context;
};

// Add type declaration for gapi
declare global {
  interface Window {
    gapi: any;
  }
}
