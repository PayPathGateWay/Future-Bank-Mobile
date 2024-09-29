import React from 'react';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import PersonalDataScreen from '../screens/PersonalDataScreen';
import SendVerifyEmailScreen from '../screens/SendVerifyEmailScreen';
import VerifyOTPScreen from '../screens/VerifyOTPScreen';
import { AuthStackParamList } from '../types/AuthStackParamList';
import { Easing } from 'react-native';
import IDVerificationScreen from '../screens/Auth/IDVerificationScreen';
import AccountCreationSuccessfulScreen from '../screens/Auth/AccountCreationSuccessfulScreen';

const Stack = createStackNavigator<AuthStackParamList>();

const RegisterStack: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="PersonalData"
      screenOptions={{
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        transitionSpec: {
          open: {
            animation: 'timing',
            config: {
              duration: 500,
              easing: Easing.inOut(Easing.ease),
            },
          },
          close: {
            animation: 'timing',
            config: {
              duration: 500,
              easing: Easing.inOut(Easing.ease),
            },
          },
        },
        cardStyle: {
          backgroundColor: '#000',
        },
      }}
    >

      <Stack.Screen
        name="PersonalData"
        component={PersonalDataScreen}
        options={{
          title: 'Personal Data',
          headerShown: false
        }}
      />
      <Stack.Screen
        name="SendVerifyEmail"
        component={SendVerifyEmailScreen}
        options={{
          title: 'Verify Email', headerShown: false
        }}
      />

      <Stack.Screen
        name="IDVerification"
        component={IDVerificationScreen}
        options={{
          title: 'IDVerification', headerShown: false
        }}
      />


    </Stack.Navigator>
  );
};

export default RegisterStack;
