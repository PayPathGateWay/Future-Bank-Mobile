import React from 'react';
import { View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styled } from 'nativewind';
import { NativeStackNavigationProp } from 'react-native-screens/lib/typescript/native-stack/types';
import { AuthStackParamList } from '../types/AuthStackParamList';
import { SafeAreaView } from 'react-native-safe-area-context';
import { lineImage, yellowGlowImage } from '../../constants/Index';
import Slider from '../components/Slider';
import CustomBtn from '../components/CustomBtn';
import WavyGradientView from '../components/WavyBackground';
import { PathGradient } from '../utilities/index.ANM';

const Onboarding = () => {
  const navigation = useNavigation<NativeStackNavigationProp<AuthStackParamList>>();

  return (
    <SafeAreaView className="bg-black flex-1">


      <WavyGradientView />
      <PathGradient />

      {/* Content & ProgressBar */}
      {/* TODO: CHANGE THE IMGS */}
      <View className="flex-2 justify-center mb-5 z-10">
        <Slider />
      </View>

      <View className="mb-5 mt-5 z-10">
        <CustomBtn />
      </View>
    </SafeAreaView>
  );
};

export default Onboarding;
