import {
  View,
  Text,
  SafeAreaView,
  Image,
  ActivityIndicator,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { FontAwesome } from "@expo/vector-icons";

import { Attractions, AvatarImage, Restaurants } from "../assets";
import { Hotels } from "../assets";
import MenuContainer from "../components/MenuContainer";
import CardContainer from "../components/CardContainer";
import { NotFound } from "../assets";
import { getPlacesData } from "../api";

const Discover = () => {
  const navigation = useNavigation();
  const [type, setType] = useState("hotels");
  const [isLoading, setLoading] = useState(false);
  const [mainData, setMainData] = useState([]);

  const [bl_lat, setBl_lat] = useState(null);
  const [bl_lng, setBl_lng] = useState(null);
  const [tr_lat, setTr_lat] = useState(null);
  const [tr_lng, setTr_lng] = useState(null);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    setLoading(true);
    getPlacesData(bl_lat, bl_lng, tr_lat, tr_lng, type).then((data) => {
      setMainData(data);
      setInterval(() => {
        setLoading(false);
      }, 2000);
    });
  }, [bl_lat, bl_lng, tr_lat, tr_lng, type]);

  return (
    <SafeAreaView className="bg-white flex-1 relative pt-10">
      {/* top  */}
      <View className="flex-row items-center justify-between px-8">
        <View>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Text className="text-[40px] text-[#0b646b] font-bold">
              Discover
            </Text>
          </TouchableOpacity>
          <Text className="text-[36px] text-[#527283]">the beauty today</Text>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <View className="w-16 h-16 bg-slate-600 rounded-md items-center justify-center shadow-lg">
            <Image
              source={AvatarImage}
              className="w-full h-full object-cover rounded-md"
            />
          </View>
        </TouchableOpacity>
      </View>
      <View className="flex-row items-center bg-white mx-4 rounded-xl py-1 px-4 shadow-lg">
        <GooglePlacesAutocomplete
          GooglePlacesDetailsQuery={{ fields: "geometry" }}
          placeholder="Fake Search"
          fetchDetails={true}
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(details?.geometry.viewport);
            setBl_lat(details?.geometry?.viewport?.southwest?.lat);
            setBl_lng(details?.geometry?.viewport?.southwest?.lng);
            setTr_lat(details?.geometry?.viewport?.northeast?.lat);
            setTr_lng(details?.geometry?.viewport?.northeast?.lng);
          }}
          query={{
            //i dont have any google api key so that's not work well
            key: "AIzaSyDWpuVw2apN-XqX3qmrzsHrZqr1AG4sCxQ", //fake key
            language: "en",
          }}
        />
      </View>

      {/* menu container */}
      {isLoading ? (
        <View className="flex-1 items-center justify-center">
          <ActivityIndicator size="large" color="#0b646b" />
        </View>
      ) : (
        <ScrollView>
          <View className="flex-row px-4 mt-8 items-center justify-between">
            <MenuContainer
              key={"hotels"}
              title="Hotels"
              imageSrc={Hotels}
              type={type}
              setType={setType}
            />
            <MenuContainer
              key={"attractions"}
              title="Attractions"
              imageSrc={Attractions}
              type={type}
              setType={setType}
            />
            <MenuContainer
              key={"restaurants"}
              title="Restaurants"
              imageSrc={Restaurants}
              type={type}
              setType={setType}
            />
          </View>

          {/* below menu container */}
          <View>
            <View className="items-center px-8 mt-8 flex-row justify-between">
              <Text className="text-[30px] text-[#2c7379] font-bold">
                Top Tips
              </Text>
              <TouchableOpacity className="flex-row items-center justify-center space-x-2">
                <Text className="text-[20px] font-bold text-[#a0c4c7]">
                  Explore
                </Text>
                <FontAwesome
                  name="long-arrow-right"
                  size={26}
                  color="#a0c4c7"
                />
              </TouchableOpacity>
            </View>

            {/* card container */}
            <View className="px-2 mt-4 flex-row items-center justify-evenly flex-wrap">
              {mainData?.length > 0 ? (
                <>
                  {mainData?.map((data, i) => (
                    <CardContainer
                      key={i}
                      imageSrc={
                        data?.photo?.images?.medium?.url
                          ? data?.photo?.images?.medium?.url
                          : "https://cdn.pixabay.com/photo/2017/01/18/15/34/singapore-1990090_1280.jpg"
                      }
                      title={data?.name}
                      location={data?.location_string}
                      data={data}
                    />
                  ))}
                </>
              ) : (
                <>
                  <View className="w-full h-[400px] items-center justify-center space-y-8">
                    <Image
                      source={NotFound}
                      className="w-32 h-32 object-cover"
                    />
                    <Text className="text-2xl text-[#2c7379] font-semi-bold">
                      Opps! No Data Found Folks...
                    </Text>
                  </View>
                </>
              )}
            </View>
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default Discover;
