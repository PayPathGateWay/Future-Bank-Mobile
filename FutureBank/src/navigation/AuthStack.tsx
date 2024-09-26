import React, { useEffect } from 'react';
import { Easing, Image, TouchableOpacity, Alert, BackHandler } from 'react-native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import Onboarding from '../screens/OnBoarding';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import { AuthStackParamList } from '../types/AuthStackParamList';
import { iconBack, logoImage } from '../../constants/Index';
import tw from 'twrnc';

const Stack = createStackNavigator<AuthStackParamList>();

export default function AuthStack() {
  const navigation = useNavigation();

  // Handle back button press for Android
  useEffect(() => {
    const backAction = () => {
      // Show an alert before exiting the app
      Alert.alert(
        'Exit App',
        'Are you sure you want to exit the app?',
        [
          {
            text: 'Cancel',
            onPress: () => null, // Do nothing
            style: 'cancel',
          },
          {
            text: 'Exit',
            onPress: () => BackHandler.exitApp(), // Exit the app
          },
        ],
        { cancelable: true }
      );
      return true; // Prevent default behavior (exiting the app immediately)
    };

    // Add the back button event listener
    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

    // Cleanup the event listener on component unmount
    return () => backHandler.remove();
  }, []);

  return (
    <Stack.Navigator
      initialRouteName="Onboarding"
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
        name="Onboarding"
        component={Onboarding}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          title: 'Login',
        }}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{
          headerTitle: () => (
            <Image
              source={logoImage}
              style={{ width: 120, height: 40 }}
              resizeMode="contain"
            />
          ),
          headerTitleAlign: 'center',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image
                source={iconBack}
                style={{ width: 25, height: 25, marginLeft: 20 }}
                resizeMode="contain"
              />
            </TouchableOpacity>
          ),
          headerStyle: {
            backgroundColor: '#000',
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
          },
        }}
      />
    </Stack.Navigator>
  );
}
