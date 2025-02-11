import { View, Text, FlatList } from 'react-native'
import React from 'react'

const Trending = ({ post }) => {
    return (
        <FlatList
            data={[{ id: 1 }, { id: 2 }, { id: 3 }]}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <Text className="text-3xl text-white">{item.id}</Text>
            )}
            horizontal
            ListEmptyComponent={() => (
                <Text>Empty</Text>
            )}
        />
    )
}

export default Trending