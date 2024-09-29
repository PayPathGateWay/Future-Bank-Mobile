import React, { useEffect } from 'react';
import { Easing, Image, TouchableOpacity, Alert, BackHandler } from 'react-native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import Onboarding from '../screens/OnBoarding';
import LoginScreen from '../screens/Auth/LoginScreen';
import RegisterStack from './RegisterStack'; // Import RegisterStack
import { AuthStackParamList } from '../types/AuthStackParamList';
import { logoImage } from '../../constants/Index'; // Adjust path based on your structure
import IconBack from '../../assets/images/IconBack';
import AccountCreationSuccessfulScreen from '../screens/Auth/AccountCreationSuccessfulScreen';

const Stack = createStackNavigator<AuthStackParamList>();

export default function AuthStack() {
  const navigation = useNavigation();
  // Handle back button press for Android
  useEffect(() => {
    const backAction = () => {
      Alert.alert(
        'Exit App',
        'Are you sure you want to exit the app?',
        [
          {
            text: 'Cancel',
            onPress: () => null,
            style: 'cancel',
          },
          {
            text: 'Exit',
            onPress: () => BackHandler.exitApp(),
          },
        ],
        { cancelable: true }
      );
      return true;
    };

    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

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
        component={RegisterStack} // RegisterStack is used here
        options={{
          headerTitle: () => (
            <Image
              source={logoImage}
              style={{ width: 100, height: 40, resizeMode: 'contain', paddingTop: 5, marginTop: 30 }}
            />
          ),
          headerTitleAlign: 'center',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <IconBack width={35} height={35} style={{ marginLeft: 20, marginTop: 33 }} />
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

      <Stack.Screen
        name="AccountCreationSuccessful"
        component={AccountCreationSuccessfulScreen}
        options={{
          title: 'AccountCreationSuccessful', headerShown: false
        }}
      />
    </Stack.Navigator>
  );
}
