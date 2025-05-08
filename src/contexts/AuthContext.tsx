
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  isAuthenticated: false,
  isLoading: true,
  login: async () => {},
  signup: async () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is already logged in
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    // This is a mock login function. In a real app, you would call an API
    // For now, we'll simulate a successful login after a delay
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        if (email && password) {
          const newUser = {
            id: 'user-' + Math.random().toString(36).substr(2, 9),
            email,
            name: email.split('@')[0],
          };
          
          setUser(newUser);
          localStorage.setItem('user', JSON.stringify(newUser));
          resolve();
        } else {
          reject(new Error('Invalid credentials'));
        }
      }, 1000);
    });
  };

  const signup = async (name: string, email: string, password: string) => {
    // This is a mock signup function
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        if (name && email && password) {
          const newUser = {
            id: 'user-' + Math.random().toString(36).substr(2, 9),
            email,
            name,
          };
          
          setUser(newUser);
          localStorage.setItem('user', JSON.stringify(newUser));
          resolve();
        } else {
          reject(new Error('Invalid information'));
        }
      }, 1000);
    });
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        login,
        signup,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
