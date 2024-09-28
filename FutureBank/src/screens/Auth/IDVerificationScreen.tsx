import React, { useState } from 'react';
import { SafeAreaView, Text, View, TouchableOpacity, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { DimondIcon } from '../../../constants/Index'; // Replace with actual path
import CustomCamera from '../../components/CustomCamera';
import CheckIcon from '../../../assets/images/CheckIcon'; // Ensure CheckIcon is a valid React component

const IDVerificationScreen: React.FC = () => {
  const [showCamera, setShowCamera] = useState(false);
  const [isIDSubmitted, setIsIDSubmitted] = useState(false); // State to track ID submission

  const handleTakePhoto = () => {
    setShowCamera(true);
  };

  const handleCloseCamera = () => {
    setShowCamera(false);
  };

  const handleOnSubmit = () => {
    // Logic for submitting the ID
    handleCloseCamera();
    setIsIDSubmitted(true);
  };

  return (
    <SafeAreaView className="bg-black flex-1 pt-5">
      {!showCamera ? (
        <>
          <View className="mb-5 w-[330px] mx-auto">
            <Text className="text-white text-2xl mb-3" accessibilityRole="header">
              ID Verification
            </Text>
            <Text className="text-[#6B698E] text-sm mb-1">
              Varius facilisis in duis volutpat. Viverra fermentum nibh consectetur purus.
            </Text>
          </View>
  
          <View className="bg-[#1C1A29] p-4 rounded-lg w-[330px] mb-5 mx-auto">
            <View className="flex-row items-center mb-3">
              <Image source={DimondIcon} className="h-8 w-8 mr-3" />
              <CheckIcon
                color={isIDSubmitted ? 'green' : '#fff'}
                fillOpacity={isIDSubmitted ? 1 : 0.1}
                className="h-8 w-8 absolute right-0 top-1"
              />
              <View>
                <Text className="text-white text-lg">Personal ID</Text>
                <Text className="text-[#6B698E] text-xs">National ID, passport, driver's license</Text>
              </View>
            </View>
  
            {/* Camera Button */}
            <TouchableOpacity
              className="bg-[#7C77FF] p-3 rounded-full flex-row justify-center items-center"
              onPress={handleTakePhoto}
            >
              <FontAwesome name="camera" size={16} color="white" />
              <Text className="text-white ml-2">Take Photo</Text>
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <CustomCamera onClose={handleCloseCamera} onSubmitted={handleOnSubmit} />
      )}
  
      {!showCamera && (
        <TouchableOpacity className="bg-[#7C77FF] p-4 w-[330px] rounded-full mt-auto mb-5 mx-auto">
          <Text className="text-center text-white text-lg">Create Account</Text>
        </TouchableOpacity>
      )}
    </SafeAreaView>
  );
  
};

export default IDVerificationScreen;
