import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Onboarding from '../screens/OnBoarding';
import LoginScreen from '../screens/LoginScreen'; 
import RegisterScreen from '../screens/RegisterScreen'; 
import { AuthStackParamList } from '../types/AuthStackParamList';

const Stack = createStackNavigator<AuthStackParamList>();

export default function AuthStack() {
  return (
    <Stack.Navigator
      initialRouteName="Onboarding" 
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e', // Change this to your desired color
        },
        headerTintColor: '#fff', // Change this to your desired tint color
        headerTitleStyle: {
          fontWeight: 'bold', // Customize title style
        },
      }}
    >
      <Stack.Screen 
        name="Onboarding" 
        component={Onboarding} 
        
        options={{ headerShown: false }} // Hide header for Onboarding
      />
      <Stack.Screen 
        name="Login" 
        component={LoginScreen} 
        options={{ title: 'Login' }} // Customize title for Login
      />
      <Stack.Screen 
        name="Register" 
        component={RegisterScreen} 
        options={{ title: 'Register' }} // Customize title for Register
      />
    </Stack.Navigator>
  );
}




/*



import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Onboarding from '../screens/OnBoarding';
import LoginScreen from '../screens/LoginScreen'; 
import RegisterScreen from '../screens/RegisterScreen'; 
import { AuthStackParamList } from '../types/AuthStackParamList';

const Stack = createStackNavigator<AuthStackParamList>();

export default function AuthStack() {
  return (
    <Stack.Navigator initialRouteName="Onboarding" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
}





import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Onboarding from '../screens/OnBoarding';
import Login from '../screens/Login';
import Register from '../screens/Register';
import { useAuth } from '../context/AuthContext';

export default function AuthStack() {
  const Stack = createStackNavigator();
  const { isAuthenticated } = useAuth();

  return (
    <Stack.Navigator initialRouteName="Onboarding">
      {!isAuthenticated ? (
        <>
          <Stack.Screen name="Onboarding" component={Onboarding} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
        </>
      ) : (
        // When authenticated, you can redirect to the main app stack
        <Stack.Screen name="MainApp" component={MainApp} />
      )}
    </Stack.Navigator>
  );
}

*/