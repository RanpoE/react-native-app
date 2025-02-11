import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import images from '../../constants/images'
import SearchInput from '../../components/SearchInput'
import Trending from '../../components/Trending'

const Home = () => {
  return (
    <SafeAreaView className="bg-primary">
      <FlatList
        // data={[{ id: 1 }, { id: 2 }, { id: 3 }]}
        data={[]}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text className="text-3xl text-white">{item.id}</Text>
        )}
        ListHeaderComponent={() => (
          <View className="my-6 px-4 space-y-6">
            <View className="justify-between items-start flex-row mb-6">
              <View>
                <Text className="text-sm text-gray-100">Welcome back</Text>
                <Text className="text-2xl text-white font-semibold">Ranpoe</Text>
              </View>
              <View className="mt-1.5">
                <Image
                  source={images.logo_small}
                  className="w-9 h-10"
                  resizeMode="contain"
                />
              </View>
            </View>
            <SearchInput
              value={""}
              placeholder={"Search for video"}
              handleChangeText={() => { }}
            />
            <View className="w-full flex-1 pt-5 pb-8">
              <Text className="text-green-100 text-lg mb-3">
                Latest video
              </Text>
              <Trending
                post={[{ id: 1 }, { id: 2 }] ?? []}
              />
            </View>
          </View>
        )}
        ListEmptyComponent={() => (
          <Text className="text-xl text-white">Empty bottle.</Text>
        )}
      />
    </SafeAreaView>
  )
}

export default Home