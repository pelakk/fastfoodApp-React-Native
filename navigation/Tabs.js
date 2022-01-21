import React from "react";
import { Image, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { LinearGradient } from "expo-linear-gradient";

import Home from "../screens/Home"
import Receip from "../screens/Receip"
import Options from "../screens/Options"

import { icons } from "../constants";

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    height: 60
                }
            }}
        >
            <Tab.Screen 
                name="Home" 
                component={Home}
                options={{
                    tabBarLabel: () => null,
                    header: () => null,
                    tabBarIcon: ({focused}) => (
                        <LinearGradient style={{width: 44, height: 44, 
                            justifyContent: 'center', alignItems: 'center',
                            borderRadius: 22}} 
                            start={{x: 0, y: 0}} end={{x: 1, y: 1}} 
                            colors={['#FFBA62', '#FF4448']} >
                            <View style={{ backgroundColor: 'white', width: 40, height: 40, 
                                justifyContent: 'center', alignItems: 'center', borderRadius: 20}}>
                                <Image
                                    source={icons.homeIcon}
                                    resizeMode="contain"
                                    style={{
                                        width: 22,
                                        height: 22,
                                        tintColor: focused ? '#FF975A' : 'grey'
                                    }}
                                />
                            </View>
                        </LinearGradient>
                    )
                }} 
            />
            <Tab.Screen 
                name="Receip" 
                component={Receip}
                options={{
                    tabBarLabel: () => null,
                    header: () => null,
                    tabBarIcon: ({focused}) => (
                        <LinearGradient style={{width: 44, height: 44, 
                            justifyContent: 'center', alignItems: 'center',
                            borderRadius: 22}} 
                            start={{x: 0, y: 0}} end={{x: 1, y: 1}} 
                            colors={['#FFBA62', '#FF4448']} >
                            <View style={{ backgroundColor: 'white', width: 40, height: 40, 
                                justifyContent: 'center', alignItems: 'center', borderRadius: 20}}>
                                <Image
                                    source={icons.receipIcon}
                                    resizeMode="contain"
                                    style={{
                                        width: 22,
                                        height: 22,
                                        tintColor: focused ? '#FF975A' : 'grey'
                                    }}
                                />
                            </View>
                        </LinearGradient>
                    )
                }} 
            />
            <Tab.Screen 
                name="Options" 
                component={Options}
                options={{
                    tabBarLabel: () => null,
                    header: () => null,
                    tabBarIcon: ({focused}) => (
                        <LinearGradient style={{width: 44, height: 44, 
                            justifyContent: 'center', alignItems: 'center',
                            borderRadius: 22}} 
                            start={{x: 0, y: 0}} end={{x: 1, y: 1}} 
                            colors={['#FFBA62', '#FF4448']} >
                            <View style={{ backgroundColor: 'white', width: 40, height: 40, 
                                justifyContent: 'center', alignItems: 'center', borderRadius: 20}}>
                                <Image
                                    source={icons.optionsIcon}
                                    resizeMode="contain"
                                    style={{
                                        width: 22,
                                        height: 25,
                                        tintColor: focused ? '#FF975A' : 'grey'
                                    }}
                                />
                            </View>
                        </LinearGradient>
                    )
                }} 
            />
        </Tab.Navigator>
    )
}

export default Tabs;