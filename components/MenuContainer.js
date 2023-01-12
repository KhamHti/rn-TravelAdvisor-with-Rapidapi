import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';

const MenuContainer = ({title, imageSrc, type, setType}) => {
    const handleChange = () => {
        setType(title.toLowerCase());
    };

  return (
    <TouchableOpacity 
      className="items-center justify-center space-y-3"
      onPress={handleChange} >
        <View 
          className={`items-center justify-center rounded-full p-2 w-24 h-24 shadow-sm
          ${ type === title.toLowerCase() ? "bg-gray-300" : ""
        }`}>
            <Image source={imageSrc} className="w-full h-full object-contain" />
        </View>
      <Text className="text-xl font-semibold text-[#00bcc9]" >{title}</Text>
    </TouchableOpacity>
  )
}

export default MenuContainer;