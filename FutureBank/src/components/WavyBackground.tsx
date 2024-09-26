import React from 'react';
import { View, Dimensions } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withRepeat, Easing, withTiming } from 'react-native-reanimated';
import { LinearGradient } from 'expo-linear-gradient';
import tw from 'twrnc'; // or from the appropriate Tailwind library you're using

const { height } = Dimensions.get('window');

const WavyGradientView = () => {
  const translateY = useSharedValue(0);

  translateY.value = withRepeat(
    withTiming(-20, {  // Increased translation distance
      duration: 3000, // Increased duration for smoother animation
      easing: Easing.inOut(Easing.ease),
    }),
    -1,
    true
  );

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
      opacity: withTiming(1, { duration: 1000 }), // Smooth opacity transition
    };
  });

  return (
    <View style={tw`flex-1 rounded-tl-3xl`}>
      <Animated.View 
        style={[
          tw`absolute top-[600px] left-0 right-0`, 
          { height: height * 0.3 }, 
          animatedStyle
        ]}
      >
        <LinearGradient
          colors={['#FFD700', '#FFC300', '#FFA500']} // Updated gradient colors for more contrast
          style={tw`flex-1 justify-end rounded-tl-3xl rounded-tr-3xl`}
        />
      </Animated.View>
    </View>
  );
};

export default WavyGradientView;
