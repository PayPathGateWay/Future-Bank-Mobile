import React from "react";
import { View, TouchableOpacity, Text, ScrollView } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const walletsData = [
    { id: 1, logo: "Logo 1", amount: "$1000" },
    { id: 2, logo: "Logo 2", amount: "$2000" },
    { id: 3, logo: "Logo 3", amount: "$3000" },
    { id: 4, logo: "Logo 4", amount: "$4000" },
];

const HomeWallets: React.FC = () => {
    return (
        <View className="px-4 py-3 w-full bg-[#262626]">
            {/* Cards Header */}
            <View className="flex-row justify-between items-center">
                {/* Left Section: Cards Title */}
                <Text className="text-white text-left text-2xl font-semibold">
                    Wallets
                </Text>

                {/* Right Section: Manage Button */}
                <TouchableOpacity>
                    <View className="flex-row border border-[#ffffff5a] mb-2 rounded-full px-3 py-2 items-center space-x-2">
                        <Ionicons name="settings-sharp" size={16} color="white" />
                        <Text className="text-white text-md">Manage</Text>
                    </View>
                </TouchableOpacity>
            </View>

            {/* List of Wallet Cards */}
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {walletsData.map(wallet => (
                    <LinearGradient
                        key={wallet.id}
                        className="border border-[#4D4D4D]"
                        colors={['rgba(0, 0, 0, 0.2)', 'rgba(0, 0, 0, 0)']} // Adjust colors for your gradient
                        style={{ borderRadius: 10, margin: 5, width: 112, padding: 10, height:103, borderColor:"#4D4D4D" }} // Adjust width and margin as needed
                    >
                        <View className="rounded-lg p-4 ">
                            <Text className="text-white text-lg">{wallet.logo}</Text>
                            <Text className="text-white text-md">{wallet.amount}</Text>
                        </View>
                    </LinearGradient>
                ))}
            </ScrollView>
        </View>
    );
}

export default HomeWallets;
