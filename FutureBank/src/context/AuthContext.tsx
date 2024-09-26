import React, { createContext, useContext, useState } from 'react';

interface AuthContextType {
  user: any; // Replace 'any' with your user type
  loading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<any>(null); // Replace 'any' with your user type
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const login = async (email: string, password: string) => {
    setLoading(true);
    setError(null);
    try {
      // Implement your login logic (e.g., API call)
      const response = await fakeLoginAPI(email, password); // Replace with your API call
      setUser(response.user);
    } catch (err) {
      setError('Login failed');
    } finally {
      setLoading(false);
    }
  };

  const register = async (email: string, password: string) => {
    setLoading(true);
    setError(null);
    try {
      // Implement your registration logic (e.g., API call)
      const response = await fakeRegisterAPI(email, password); // Replace with your API call
      setUser(response.user);
    } catch (err) {
      setError('Registration failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, error, login, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// Mock API calls (replace these with your actual API calls)
const fakeLoginAPI = async (email: string, password: string) => {
  // Simulate an API call
  return new Promise<{ user: any }>((resolve) => {
    setTimeout(() => resolve({ user: { email } }), 1000);
  });
};

const fakeRegisterAPI = async (email: string, password: string) => {
  // Simulate an API call
  return new Promise<{ user: any }>((resolve) => {
    setTimeout(() => resolve({ user: { email } }), 1000);
  });
};
