import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome';


const VideoCard = ({ video: { title, thumbnail, video, creator: { username, avatar } } }) => {
    const [playing, setPlaying] = useState(false)

    return (
        <View className="flex-col items-center px-4 mb-14">
            <View className="flex-row gap-3 items-start">
                <View className="justify-center items-center flex-row flex-1">
                    <View className="w-[46px] h-[46px] rounded-lg
                    border border-secondary justify-center items-center p-0.5">
                        <Image
                            source={{ uri: avatar }}
                            className="w-full h-full rounded-lg"
                            resizeMode="cover"
                        />
                    </View>
                    <View className="justify-center flex-1 ml-3 gap-y-1">
                        <Text className="text-white text-sm" numberOfLines={1} >{title}</Text>
                        <Text className="text-gray-100 text-xs" numberOfLines={1} >{username}</Text>
                    </View>
                </View>
                <View className="pt-2">
                    <FontAwesome name="ellipsis-v" size={24} color="white" />
                </View>
            </View>
            {
                playing ?
                    <Text className="text-white">Playing</Text> : (
                        <TouchableOpacity
                            activeOpacity={0.7}
                            onPress={() => setPlaying(true)}
                            className="w-full h-60 rounded-xl mt-3 relative justify-center items-center"
                        >
                            <Image
                                source={{ uri: thumbnail }}
                                className="w-full h-full rounded-xl mt-3"
                                resizeMode="cover"
                            />
                            <View className="absolute">
                                <FontAwesome name='play' size={24} color="white" />
                            </View>
                        </TouchableOpacity>
                    )
            }
        </View>
    )
}

export default VideoCard