import { View, Text, FlatList, TouchableOpacity, ImageBackground } from 'react-native'
import React, { useState } from 'react'

import * as Animatable from 'react-native-animatable'
import EmptyState from './EmptyState'
import { FontAwesome } from '@expo/vector-icons'

const zoomIn = {
    0: {
        scale: 0.9,
    },
    1: {
        scale: 1,
    }
}

const zoomOut = {
    0: {
        scale: 1,
    },
    1: {
        scale: 0.9,
    }
}

const TrendingItem = ({ activeItem, item }) => {
    const [play, setPlay] = useState(false)
    return (
        <Animatable.View
            className="mr-5"
            animation={activeItem.$id === item.$id ? zoomIn : zoomOut}
            duration={500}
        >
            {play ? <Text className="text-white">Playing</Text> : (
                <TouchableOpacity
                    className="relative justify-center items-center"
                    activeOpacity={0.7}
                    onPress={() => setPlay(true)}
                >
                    <ImageBackground
                        source={{ uri: item.thumbnail }}
                        className="w-52 h-72 rounded-[35px] my-5 overflow-hidden shadow-lg shadow-black/40"
                        resizeMode="cover"
                    />
                    <View className="absolute">
                        <FontAwesome name='play' size={24} color="white" />
                    </View>
                </TouchableOpacity>
            )}
        </Animatable.View>)
}

const Trending = ({ posts }) => {
    const [activeItem, setActiveItem] = useState(posts[0])
    return (
        <FlatList
            data={posts}
            keyExtractor={(item) => item.$id}
            renderItem={({ item }) => (
                <TrendingItem activeItem={activeItem} item={item} />
            )}
            horizontal
        />
    )
}

export default Trending