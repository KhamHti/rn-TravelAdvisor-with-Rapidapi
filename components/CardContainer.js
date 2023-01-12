import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const CardContainer = ({imageSrc, title, location, data}) => {
    const navigation = useNavigation();
  return (
    <TouchableOpacity 
    onPress={() => navigation.navigate('ItemScreen', {param: data})}
    className="rounded-md border border-gray-300 
    shadow-md px-3 py-2 space-y-2 bg-white my-2">
        <Image
            source={{uri: imageSrc}}
            className="w-40 h-40 rounded-md object-cover"
        />
        {title ? (
          <>
            <Text className="text-[18px] font-bold text-[#428288]" >
            {title?.length > 14 ? `${title.slice(0, 14)}...` : title }
            </Text>
            <View className="flex-row  items-center space-x-1">
                <FontAwesome name="map-marker" size={20} color="#8597a2" />
                <Text className="text-[14px] font-bold text-[#428288]" >
                {location?.length > 18 ? `${location.slice(0, 18)}...` : location }
                </Text>
            </View>
          </>
        ): (
            <></>
        )}
    </TouchableOpacity>
  )
}

export default CardContainer;