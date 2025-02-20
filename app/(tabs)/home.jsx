import { View, Text, FlatList, Image, RefreshControl, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import images from '../../constants/images'
import SearchInput from '../../components/SearchInput'
import Trending from '../../components/Trending'
import EmptyState from '../../components/EmptyState'
import useDebounce from '../../hooks/useDebounce'
import { getAllPosts } from '../../lib/appwrite'
import useAppwrite from '../../lib/useAppwrite'
import VideoCard from '../../components/VideoCard'

const Home = () => {
  const { data: posts, refetch } = useAppwrite(getAllPosts)

  const [refreshing, setRefreshing] = useState(false)
  const [searchInput, setSearchInput] = useState("")

  const onRefresh = async () => {
    setRefreshing(true)
    // Fetching data
    await refetch()
    setRefreshing(false)
  }
  const handleInput = (e) => {
    const { target } = e
    setSearchInput(target)
  }

  return (
    <SafeAreaView className="bg-primary h-full">
      <FlatList
        // data={[{ id: 1 }, { id: 2 }, { id: 3 }]}
        data={posts}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => (
          <VideoCard video={item} />
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
              value={searchInput}
              placeholder={"Search for video"}
              handleChangeText={handleInput}
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
          <EmptyState
            title="No videos found"
            subtitle="Be the first to create one"
          />
        )}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
      />
    </SafeAreaView>
  )
}

export default Home