import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from 'react-native-screens/lib/typescript/native-stack/types';
import { AuthStackParamList } from '../types/AuthStackParamList';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { FORM_IDS } from '../../constants/Index';

const SendVerifyEmailScreen: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<AuthStackParamList>>();
  const [isLoading, setIsLoading] = useState(false);

  // Fetch the email from the Redux store (Rematch)
  const email = useSelector((state: RootState) => state.form[FORM_IDS.USER_REGISTRATION_FORM]?.emailAddress);

  const handleSubmit = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigation.navigate('VerifyOTP');
    }, 2000); // Simulate a 2-second loading time
  };

  return (
    <SafeAreaView className="bg-black flex-1 pt-5 px-3">
      <Text className="text-white text-2xl mb-3">Email Address Verification</Text>
      <Text className="text-white text-sm mb-5 w-72">
        Varius facilisis in duis volutpat. Viverra fermentum nibh consectetur purus.
      </Text>

      {/* Readonly input for email */}
      <View className="mb-5">
        <Text className="text-white text-sm mb-1">Email Address:</Text>
        <View className="bg-gray-700 p-3 rounded-md">
          <Text className="text-white">{email}</Text>
        </View>
      </View>

      {/* Confirm Email Button */}
      <TouchableOpacity
        className="w-[330px] py-4 rounded-full bg-[#D6D3FF] justify-center"
        onPress={handleSubmit}
        disabled={isLoading}
      >
        {isLoading ? (
          <ActivityIndicator color="black" />
        ) : (
          <Text className="text-black font-bold text-center">Confirm Email</Text>
        )}
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SendVerifyEmailScreen;
