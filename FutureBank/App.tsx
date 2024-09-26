import React, { useState } from 'react';
import MainNav from './src/navigation/MainNav';
import { AuthProvider } from './src/context/AuthContext'; // Adjust the import path accordingly
import SplashScreen from './src/screens/SplashScreen';
import { TamaguiProvider, createTamagui } from '@tamagui/core'
import { config } from '@tamagui/config/v3'
import { store } from './src/store/store';
import { Provider } from 'react-redux';

const tamaguiConfig = createTamagui(config);

// TypeScript types across all Tamagui APIs
type Conf = typeof tamaguiConfig
declare module '@tamagui/core' {
  interface TamaguiCustomConfig extends Conf {}
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleFinishLoading = () => {
    setIsLoading(false);
  };

  return (
    <Provider store={store}> 
      <AuthProvider>
        <TamaguiProvider config={tamaguiConfig}>
          {isLoading ? <SplashScreen onFinish={handleFinishLoading} /> : <MainNav />}
        </TamaguiProvider>
      </AuthProvider>
    </Provider>
  );
}
