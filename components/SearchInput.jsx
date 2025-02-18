import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome';

const SearchInput = ({ title, value, placeholder, handleChangeText, otherStyles, ...props }) => {
    return (
        <View
            className="border-2 border-black-200 w-full
            h-16 px-4 bg-black-100 rounded-2xl focus:border-secondary
            items-center flex-row"
        >
            <TextInput
                className="flex-1 mt-0.5 text-white font-semibold text-base"
                value={value}
                placeholder={placeholder}
                placeholderTextColor="#7b7b8b"
                onChangeText={handleChangeText}
            />
            <TouchableOpacity
                onPress={() => { }}
            >
                <FontAwesome name="search" size={24} color="#fff" />
            </TouchableOpacity>
            <Text className="text-xl text-white">{value}</Text>
        </View>
    )
}

export default SearchInput