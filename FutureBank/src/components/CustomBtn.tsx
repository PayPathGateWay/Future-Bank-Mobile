import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NativeStackNavigationProp } from 'react-native-screens/lib/typescript/native-stack/types';
import { AuthStackParamList } from '../types/AuthStackParamList';

export default function CustomBtn() {
  const navigation = useNavigation<NativeStackNavigationProp<AuthStackParamList>>();

  return (
    <View className="flex items-center space-y-4 pt-5">

      {/* Register Now Button */}
      <TouchableOpacity className="w-[330px] py-4 rounded-full bg-[#D6D3FF] justify-center"
        onPress={() => navigation.navigate('Register')}>
        
        <Text className="text-black font-bold text-center">Register Now</Text>
      </TouchableOpacity>

      {/* Already have an account Button */}
      <TouchableOpacity className="w-[330px] py-4 rounded-full border border-white justify-center"
        onPress={() => navigation.navigate('Login')}>

        <Text className="text-white font-semibold text-center">Already have an account</Text>
      </TouchableOpacity>

    </View>
  );
}
