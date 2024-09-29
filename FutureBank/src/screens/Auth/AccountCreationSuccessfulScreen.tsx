import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { BlurView } from 'expo-blur';
import WaveBg from '../../../assets/images/wavebg'; // Ensure this is a valid image component
import Xicon from '../../../assets/images/xicon'; // Ensure this is a valid image component
import { DimondIcon } from '../../../constants/Index'; // Assuming an info icon is imported here
import { FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { AppStackParamList } from '../../types/HomeStackParamList';
import { NativeStackNavigationProp } from 'react-native-screens/lib/typescript/native-stack/types';

export default function AccountCreationSuccessfulScreen() {
    const navigation = useNavigation<NativeStackNavigationProp<AppStackParamList>>();

    const handleLoginSuccess = () => {
        navigation.navigate('App'); // Navigate directly to Home
      };
    return (
        <SafeAreaView className="flex-1 bg-black">
            <View className="flex-1 relative">
                {/* Background Wave */}
                <WaveBg className="absolute inset-0 w-full h-full" />

                {/* Header */}
                <View className="absolute top-10 left-0 right-0 flex-row items-center justify-between p-4">
                    <Text className="text-white font-bold text-2xl">
                        Account Creation Successful!
                    </Text>
                    <TouchableOpacity>
                        <Xicon onPress={handleLoginSuccess} />
                    </TouchableOpacity>
                </View>

                {/* Centered Content */}
                <View className="flex-1 items-center justify-center">
                    <BlurView
                        tint="dark" // Using dark tint for blur effect
                        intensity={100} // Adjust intensity for stronger or lighter blur
                        className="w-[340px] h-[365px] shadow-lg
                         rounded-3xl overflow-hidden p-5 items-center mb-3"
                    >
                        {/* Profile Circle */}
                        <View className="w-16 h-16 bg-[#4D4D4D] rounded-full border border-[#7A7A7A] items-center justify-center mb-4">
                            <Text className="text-[#D6D3FF] font-bold text-lg">TH</Text>
                        </View>

                        {/* User Information */}
                        <Text className="text-[#F7F7F7] text-2xl font-semibold mb-1">Tanya Hill</Text>
                        <Text className="text-[#F7F7F7] text-base mb-6">236-897 548963256</Text>


                        {/* Personal ID Section */}
                        <LinearGradient
                            colors={['rgba(0, 0, 0, 0.8)', 'rgba(0, 0, 0, 0.3)']}
                            start={{ x: 0.5, y: 0 }}
                            end={{ x: 0.5, y: 1 }}
                            style={{ padding: 20, borderRadius: 10, width: '100%', marginBottom: 12, borderColor: '#7A7A7A', borderWidth: 1 }}
                        >
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 12 }}>
                                <Image source={DimondIcon} style={{ height: 32, width: 32, marginRight: 12 }} />
                                <View>
                                    <Text style={{ color: 'white', fontSize: 18 }}>Create a new savings account</Text>
                                    <Text style={{ color: '#6B698E', fontSize: 12 }}>The benefits of multiple accounts</Text>
                                </View>
                            </View>

                            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 12 }}>
                                <TouchableOpacity style={{ backgroundColor: '#D6D3FF', borderRadius: 9999, justifyContent: 'center', alignItems: 'center', height: 40, width: '100%' }}>
                                    <Text style={{ color: 'black', fontWeight: 'bold' }}>New Savings</Text>
                                </TouchableOpacity>
                            </View>
                        </LinearGradient>


                    </BlurView>

                    {/* Personal ID and Date */}
                    <Text className="text-[#7A7A7A] text-sm mt-2 mb-6">ID:288219 Jan 23, 2023</Text>

                    {/* View Details Button */}
                    <TouchableOpacity className="border border-[#7A7A7A] rounded-full justify-center items-center h-10 w-[160px] mb-3">
                        <Text className="text-white font-semibold">View Details</Text>
                    </TouchableOpacity>

                    {/* Bottom Section - How to deposit funds? */}
                    <View className="absolute bottom-10 flex items-center justify-center w-full px-4">
                        <TouchableOpacity className="flex-row items-center space-x-4
                         justify-center border border-white rounded-full h-12 w-full max-w-[240px]">
                            <FontAwesome name="info-circle" size={24} color="white" />
                            <Text className="text-white font-semibold">How to deposit funds?</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}
