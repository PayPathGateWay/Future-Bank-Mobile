import React from 'react';
import { View, Image, Text, Touchable, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { logoImage } from '../../../constants/Index';
import { AvatarDemo } from '../AvatarDemo';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import SetteingIcon from '../../../assets/images/setteingIcon';
import SavingsIcon from '../../../assets/images/SavingIcon';

const HomeNaVBar: React.FC = () => {
    return (
        <SafeAreaView className='mb-10 px-5'>
            <View className="flex-row items-center justify-between">
                <Image
                    source={logoImage}
                    className="bg-contain"
                    style={{ width: 90, height: 40, resizeMode: 'contain' }}
                    accessibilityLabel="App Logo"
                />
                <SetteingIcon />
            </View>

            {/* User */}
            <View className='flex-row pt-5 space-x-2 items-center'>
                <AvatarDemo />
                <Text className='text-white font-bold text-xl'>
                    Morning lazzy, {/* Dynamic username */}
                </Text>
            </View>

            {/* Account Balance Header */}
            <View className='items-center justify-center
             pt-4 space-x-1'>
                <View className='border-b border-[#FFBA53] flex-row items-center w-[80px] pl-3 space-x-2'>
                    <SavingsIcon />
                    <Text className='font-bold text-[16px] text-white '>USD</Text>
                </View>
                <Text className='text-white pt-3 text-[54px]'>
                    <Text className='text-[#7A7A7A]'>$</Text>41,520<Text className='text-[28px]'>.23</Text>
                </Text>

                <TouchableOpacity className="w-[90px] py-[4px] mt-3
                space-x-3 rounded-full bg-[#34324A] border border-white
                 items-center flex-row  justify-center">
                    <Ionicons name="eye-off" size={20} color={"white"} />
                    <Text className="text-white font-bold pt-1  text-xs">Close</Text>
                </TouchableOpacity>

            </View>


        </SafeAreaView>
    );
};

export default HomeNaVBar;
