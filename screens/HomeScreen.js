import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import * as Animatable from 'react-native-animatable';

import { HeroImage } from '../assets';
import Discover from './Discover';

const HomeScreen = () => {
    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions ({
            headerShown: false,
        })
    },[])


  return (
    <SafeAreaView className="bg-white flex-1 relative pt-10">
         {/* first section */}
        <View className="flex-row px-6 mt-5 items-center space-x-2">
            <View className="bg-black w-16 h-16 rounded-full items-center justify-center">
                <Text className="text-[#00bcc9] text-3xl font-semibold" >Go</Text>
            </View>
            <Text className="text-[#2a2b49] text-3xl font-semibold" >Travel</Text>
        </View>

        {/* second section */}
        <View className="px-6 mt-8 space-y-3" >
            <Text className="text-[42px] text-[#3c6072]">Enjoy the trip with</Text>
            <Text className="text-[38px] text-[#00bcc9]">Good Moments</Text>
            <Text className="text-[#3c6072] text-base">
                Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor
            </Text>
        </View>

        {/* circle section */}
        <View className="bg-[#00bcc9] w-[400px] h-[400px] rounded-full absolute bottom-36 -right-36"></View>
        <View className="bg-[#e99265] w-[400px] h-[400px] rounded-full absolute -bottom-28 right-36"></View>

        {/* img */}
        <View className="flex-1 relative justify-center items-center">
            <Animatable.Image 
            animation="fadeIn"
            easing="ease-in-out"
            source={HeroImage} 
            className="w-full h-full object-cover mt-20" />
            <TouchableOpacity 
            onPress={() => navigation.navigate("Discover")}
            className="absolute bottom-24 w-24 h-24 border-l-2 border-r-2 border-t-4 border-[#00bcc9] rounded-full items-center justify-center" >
                <Animatable.View 
                animation="pulse" 
                easing="ease-in-out" 
                iterationCount={"infinite"} 
                className="w-20 h-20 items-center justify-center rounded-full bg-[#00bcc9]" >
                    <Text className="text-[36px] font-semibold text-gray-50">Go</Text>
                </Animatable.View>
            </TouchableOpacity>
        </View>


    </SafeAreaView>
  )
}

//{require("../assets/hero.png")}
export default HomeScreen