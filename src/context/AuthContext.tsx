import React, { createContext, useContext, useState } from 'react';
import { User } from '../types/user';

interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
}

interface AuthContextType extends AuthState {
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [auth, setAuth] = useState<AuthState>({
    isAuthenticated: false,
    user: null,
  });

  const login = async (username: string, password: string) => {
    // In a real application, this would make an API call to verify credentials
    if (username === 'admin' && password === 'neatnook2024') {
      const user: User = {
        id: '1',
        username: 'admin',
        email: 'admin@neatnook.co.uk',
        role: 'admin',
        lastLogin: new Date().toISOString()
      };
      setAuth({ isAuthenticated: true, user });
      return true;
    }
    return false;
  };

  const logout = () => {
    setAuth({ isAuthenticated: false, user: null });
  };

  return (
    <AuthContext.Provider value={{ ...auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}