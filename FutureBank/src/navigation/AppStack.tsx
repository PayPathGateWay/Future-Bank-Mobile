import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, MaterialIcons } from '@expo/vector-icons'; // Import from expo-vector-icons
import { useFonts } from 'expo-font';
import SavingsScreen from '../screens/App/SavingsScreen';
import HomeScreen from '../screens/App/HomeScreen';




const TransactMenu = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <View className="justify-center items-center mt-52">
            <TouchableOpacity
                className="w-16 h-16 rounded-full bg-purple-500 justify-center items-center"
                onPress={toggleMenu}
            >
                <Ionicons name="arrow-up-outline" size={32} color="white" />
            </TouchableOpacity>
            {showMenu && (
                <View className="absolute bg-purple-900 p-4 rounded-lg top-[-80px] w-48 shadow-lg">
                    <TouchableOpacity className="mb-3 flex-row items-center">
                        <MaterialIcons name="lock" size={20} color="white" />
                        <Text className="text-white ml-2">Buy a digital product</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="mb-3 flex-row items-center">
                        <MaterialIcons name="flash-on" size={20} color="white" />
                        <Text className="text-white ml-2">Pay bills</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="flex-row items-center">
                        <Ionicons name="arrow-forward" size={20} color="white" />
                        <Text className="text-white ml-2">Transfer</Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
};

const Tab = createBottomTabNavigator();

const AppStack = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: 'black',
                    height: 90,
                    borderTopColor: 'black',
                    paddingBottom: 20,
                    // paddingTop: 20,
                    // borderRadius: 30,
                },
                tabBarActiveTintColor: '#fef08a',
                // tabBarBackground: () => (
                //     <View style={{ backgroundColor: 'black', flex: 1 }} />
                // ),
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color }) => <Ionicons name="home" size={26} color={color} />,
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="Savings"
                component={SavingsScreen}
                options={{
                    tabBarIcon: ({ color }) => <MaterialIcons name="attach-money" size={26} color={color} />,
                    headerShown: false,
                }}
            />

            <Tab.Screen
                name="Cards"
                component={TransactMenu}
                options={{
                    tabBarIcon: ({ color }) => <Ionicons name="card" size={26} color={color} />,
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="Transact"
                component={TransactMenu}
                options={{
                    tabBarIcon: ({ color }) => <Ionicons name="arrow-up-outline" size={26} color={color} />,
                    headerShown: false,
                }}
            />

        </Tab.Navigator>
    );
};


export default AppStack;