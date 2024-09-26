import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import PersonalDataScreen from '../screens/PersonalDataScreen';
import SendVerifyEmailScreen from '../screens/SendVerifyEmailScreen';
import VerifyOTPScreen from '../screens/VerifyOTPScreen';
import { AuthStackParamList } from '../types/AuthStackParamList';

const Stack = createStackNavigator<AuthStackParamList>();

const RegisterStack: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="PersonalData">
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
        name="VerifyOTP"
        component={VerifyOTPScreen}
        options={{ title: 'Verify OTP' }}
      />
    </Stack.Navigator>
  );
};

export default RegisterStack;
