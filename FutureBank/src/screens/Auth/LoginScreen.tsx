import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { useAuth } from '../../context/AuthContext'; // Adjust the import path accordingly
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from 'react-native-screens/lib/typescript/native-stack/types';
import { AppStackParamList } from '../../types/HomeStackParamList';

const LoginScreen: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<AppStackParamList>>();

  const handleLogin = async () => {
    // Your login logic here (e.g., calling an API)
    // Assuming login is successful, navigate to the app
    const loginSuccessful = true; // Replace this with actual login success condition

    if (loginSuccessful) {
      navigation.navigate('App'); // Navigate directly to App
    } else {
      // Handle login failure (e.g., show an error message)
    }
  };

  return (
    <View className="flex-1 justify-center items-center p-4">
      <TextInput
        placeholder="Email"
        style={{ width: '100%', padding: 10, marginBottom: 10, borderColor: '#ccc', borderWidth: 1 }}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        style={{ width: '100%', padding: 10, marginBottom: 20, borderColor: '#ccc', borderWidth: 1 }}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;
