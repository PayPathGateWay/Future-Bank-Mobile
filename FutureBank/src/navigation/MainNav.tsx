// src/navigation/MainNav.tsx
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './AuthStack'; // Assuming your AuthStack contains the app's main screens
import Splash from '../screens/SplashScreen'; // Import the animated splash screen

export default function MainNav() {

  return (
    <NavigationContainer>
        <AuthStack /> 
    </NavigationContainer>
  );
}
