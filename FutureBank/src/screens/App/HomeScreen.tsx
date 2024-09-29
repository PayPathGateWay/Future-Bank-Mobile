import React from 'react';
import { View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HomeNaVBar from '../../components/App/HomeNavBar';
import WaveBg from '../../../assets/images/wavebg';
import HomeCard from '../../components/App/HomeCards';
import HomeWallets from '../../components/App/HomeWallets';

const HomeScreen: React.FC = () => {
  return (
    <SafeAreaView className='bg-black flex-1'>
      <View className="relative flex-1">
        {/* Background Wave */}
        <WaveBg className="absolute inset-0  bottom-10 bg-contain "/>

        {/* Scrollable Content */}
        <ScrollView 
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: 'flex-start', // Adjust to your layout needs
          }}
          showsVerticalScrollIndicator={false} // Hide the vertical scroll indicator
        >
          <HomeNaVBar />
          <HomeCard />
          {/* Wallet Transctions */}
          <HomeWallets/>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;