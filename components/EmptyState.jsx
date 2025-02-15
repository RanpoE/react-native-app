import { View, Text, Image } from 'react-native'
import React from 'react'
import image from "../constants/images"
import CustomButton from "../components/CustomButton"
import { router } from 'expo-router'

const EmptyState = ({ title, subtitle }) => {
  return (
    <View className="items-center justify-center px-4">
      <Image
        source={image.empty}
        resizeMode='contain'
        className="w-[270px] h-[215px]"
      />
      <Text className="text-xl text-center text-white mt-2">
        {title}
      </Text>
      <Text className="text-sm text-gray-100">
        {subtitle}
      </Text>
      <CustomButton
        title="Create a video"
        containerStyles="w-full my-5"
        handlePress={() => router.push("/create")}
      />
    </View>
  )
}

export default EmptyState