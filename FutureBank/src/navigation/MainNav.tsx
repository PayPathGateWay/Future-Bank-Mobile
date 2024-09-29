// src/navigation/MainNav.tsx
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './AuthStack'; // Assuming your AuthStack contains the app's main screens
import Splash from '../screens/SplashScreen'; // Import the animated splash screen
import AppStack from './AppStack';
import { createStackNavigator } from '@react-navigation/stack';



const Stack = createStackNavigator();

export default function MainNav() {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* We will create the rerendering loagic here just drive themee to the login page and save the user entry and logout */}
      {/* This will be in the authContext and localStorage to store the date */}
      <Stack.Screen name="Auth" component={AuthStack} />
      <Stack.Screen name="App" component={AppStack} />
    </Stack.Navigator>
  </NavigationContainer>
  );

}
