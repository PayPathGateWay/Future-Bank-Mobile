import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function CustomBtn() {
  return (
    <View className="flex items-center space-y-4">
      
      {/* Register Now Button */}
      <TouchableOpacity className="w-80 py-4 rounded-full bg-white justify-center">
        <Text className="text-black font-bold text-center">Register Now</Text>
      </TouchableOpacity>

      {/* Already have an account Button */}
      <TouchableOpacity className="w-80 py-4 rounded-full border border-white justify-center">
        <Text className="text-white font-bold text-center">Already have an account</Text>
      </TouchableOpacity>

    </View>
  );
}
