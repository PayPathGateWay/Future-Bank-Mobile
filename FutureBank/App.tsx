import React, { useState } from 'react';
import MainNav from './src/navigation/MainNav';
import { AuthProvider } from './src/context/AuthContext'; // Adjust the import path accordingly
import SplashScreen from './src/screens/SplashScreen';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleFinishLoading = () => {
    setIsLoading(false);
  };

  return (
    <AuthProvider>
      {isLoading ? <SplashScreen onFinish={handleFinishLoading} /> : <MainNav />}
    </AuthProvider>
  );
}
