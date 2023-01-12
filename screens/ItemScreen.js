import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity, Touchable } from 'react-native';
import React,{useLayoutEffect} from 'react';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const ItemScreen = ({route}) => {
    const navigation = useNavigation();
    const data = route?.params?.param;

    useLayoutEffect(() => {
        navigation.setOptions ({
            headerShown: false,
        })
    },[]);


  return (
    <SafeAreaView className="flex-1 relative bg-white">
        <ScrollView className="flex-1 px-4 py-6">
            <View className="relative bg-white shadow-lg">
                <Image 
                source={
                    {uri: data?.photo?.images?.large?.url ?
                        data?.photo?.images?.large?.url  : 
                        "https://cdn.pixabay.com/photo/2017/01/18/15/34/singapore-1990090_1280.jpg"}
                }
                className="w-full h-72 object-cover rounded-2xl"
                />

                <View className="absolute flex-row inset-x-0 top-5 justify-between px-6">
                    <TouchableOpacity 
                        onPress={() => navigation.navigate("Discover")} 
                        className="w-10 h-10 rounded-md items-center justify-center bg-white"
                    >
                      <FontAwesome5 name="chevron-left" size={24} color="#06b2be" />
                    </TouchableOpacity>

                    <TouchableOpacity className="w-10 h-10 rounded-md items-center justify-center bg-[#06b2be]">
                    <FontAwesome5 name="heartbeat" size={24} color="#fff" />
                    </TouchableOpacity>
                </View>

                <View className="absolute flex-row inset-x-0 bottom-5 justify-between px-6">
                    <View className="flex-row items-center space-x-2">
                        <Text className="text-[12px] font-bold text-gray-100">
                            {data?.price_level}
                        </Text>
                        <Text className="text-[28px] font-bold text-gray-100">
                            {data?.price}
                        </Text>
                    </View>
                    <View className="px-2 py-1 rounded-md bg-teal-100">
                        <Text className="items-center justify-center text-semi-bold">Open Now</Text> 
                    </View>
                </View>
            </View>

            <View className="mt-6">
                <Text className="text-[24px] text-bold text-[#428288]">
                    {data?.name}
                </Text>
                <View className="flex-row items-center space-x-2 mt-2">
                    <FontAwesome name="map-marker" size={25} color="#8c9ea6" />
                    <Text className="text-[20px] font-bold text-[#8c9ea6]" >
                        {data?.location_string}
                    </Text>
                </View>
            </View>

            <View className="mt-3 flex-row justify-between items-center" >
                {data?.ranking && (
                    <View className="flex-row items-center space-x-1">
                        <View className="w-12 h-12 rounded-2xl items-center justify-center shadow-md bg-red-100">
                            <FontAwesome name='star' size={24} color="#d58574" />
                        </View>
                        <View>
                            <Text className="text-[#515151]">{data?.ranking_position}</Text>
                            <Text className="text-[#515151]">Ranking Position</Text>
                        </View>
                    </View> 
                )}

                {data?.price && (
                    <View className="flex-row items-center space-x-2">
                        <View className="w-12 h-12 rounded-2xl items-center justify-center shadow-md bg-red-100">
                            <MaterialIcons name="attach-money" size={24} color="black" />
                        </View>
                        <View>
                            <Text className="text-[#515151]">{data?.price}</Text>
                            <Text className="text-[#515151]">Price</Text>
                        </View>
                    </View> 
                )}

                {data?.bearing && (
                    <View className="flex-row items-center space-x-2">
                        <View className="w-12 h-12 rounded-2xl items-center justify-center shadow-md bg-red-100">
                            <FontAwesome5 name="map-signs" size={24} color="black" />                        
                        </View>
                        <View>
                            <Text className="text-[#515151]">{data?.bearing}</Text>
                            <Text className="text-[#515151]">Bearing</Text>
                        </View>
                    </View> 
                )}
            </View>

            {data?.ranking && (
                <Text className="mt-8 text-[#97a6af] tracking-wider text-[18px] font-semibold" >
                    {data?.ranking}
                </Text>
            )}
            
            <View className="mt-4 flex-row items-center justify-between">

                {data?.autobroaden_label && (
                    <TouchableOpacity className="px-2 py-1 bg-emerald-100 rounded-md">
                    <Text>
                        {data?.autobroaden_label}
                    </Text>
                    </TouchableOpacity>
                )}

                {data?.timezone && (
                    <TouchableOpacity className="px-2 py-1 bg-emerald-100 rounded-md">
                        <Text>{data?.timezone}</Text>
                    </TouchableOpacity>
                )}
            </View>

            <View className="mt-4 flex-row items-center justify-between">
                {data?.subcategory_type_label && (
                    <TouchableOpacity className="px-2 py-1 bg-emerald-100 rounded-md">
                    <Text>{data?.subcategory_type_label}</Text>
                    </TouchableOpacity>
                )}
                {data?.photo?.caption && (
                    <TouchableOpacity className="px-2 py-1 bg-emerald-100 rounded-md">
                    <Text>{data?.photo?.caption}</Text>
                    </TouchableOpacity>
                )}
            </View>
            

            <View className="space-y-2 mt-4 bg-gray-100 rounded-2xl px-4 py-2">
                <View className="items-center space-x-6 flex-row">
                    <FontAwesome name={"phone"} size={26} color={"#428288"} />
                    <Text className="text-lg"> +974 4485 3000 </Text>
                </View>
                <View className="items-center space-x-6 flex-row">
                    <FontAwesome name="envelope" size={24} color="#428288" />
                    <Text className="text-lg">mugiwara$piratingKing5@luffy.com</Text>
                </View>
                <View className="items-center space-x-6 flex-row">
                    <FontAwesome name="map-pin" size={24} color="#428288" />
                    <Text className="text-lg">9210 Illinois St. Amityville, NY 11701</Text>
                </View>
            </View>

            <TouchableOpacity className="mt-4 px-4 py-4 rounded-lg mb-12 items-center justify-center bg-[#06b2be]">
                    <Text className="text-xl font-semibold uppercase tracking-wider text-gray-100">
                        Book Now
                    </Text>
            </TouchableOpacity>


        </ScrollView>
    </SafeAreaView>
  )
}

export default ItemScreen