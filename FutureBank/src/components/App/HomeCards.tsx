import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import CardSimp from "../../../assets/images/CardSImp";

const HomeCard: React.FC = () => {
    return (
        <ScrollView
            contentContainerStyle={{
                paddingBottom: 20, // Add some padding to the bottom
            }}
            className="w-full bg-[#262626] p-2 rounded-tl-3xl rounded-tr-3xl shadow-lg"
        >
            <View className="px-4 py-3">

                {/* Cards Header */}
                <View className="flex-row justify-between items-center">
                    {/* Left Section: Cards Title */}
                    <Text className="text-white text-left text-2xl font-semibold">
                        Cards
                    </Text>

                    {/* Right Section: Manage Button */}
                    <TouchableOpacity>
                        <View className="flex-row border border-[#ffffff5a] mb-2 rounded-full px-3 py-2 items-center space-x-2">
                            <Ionicons name="settings-sharp" size={16} color="white" />
                            <Text className="text-white text-md">Manage</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                {/* Card Type */}
                <View className="p-4 h-20 w-40 border border-[#4F5509] rounded-xl mt-5">
                    <Text className="text-[#F2FF53] text-sm">Debit</Text>
                    <Text className="text-[#fff] text-lg font-medium">Wave Simple</Text>
                </View>


                <View className="h-52 mt-10 flex-row ">
                    <View className="flex-1 gap-y-6">

                        <View className="flex-row items-center">
                            <TouchableOpacity className="p-2 rounded-full bg-[#3D3D3D]">
                                <MaterialIcons name="login" size={24} color="white" />
                            </TouchableOpacity>
                            <Text className="text-white text-lg ml-2">
                                <Text className="text-xl font-bold">$328.88</Text>
                                <Text className="text-[#4D4D4D]"> this week</Text>
                            </Text>
                        </View>

                        <View className="flex-row items-center">
                            <TouchableOpacity className="p-2 rounded-full bg-[#3D3D3D]">
                                <MaterialIcons name="paragliding" size={24} color="white" />
                            </TouchableOpacity>
                            <Text className="text-white text-lg ml-2">
                                <Text className="text-[#4D4D4D]">238-92389-232</Text>
                            </Text>
                        </View>

                    </View>

                    <CardSimp className="flex-1 absolute left-32 top-5 rounded-lg" />
                </View>


            </View>

        </ScrollView>
    );
}

export default HomeCard;
