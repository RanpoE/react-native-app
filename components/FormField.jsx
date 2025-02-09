import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome';

const FormField = ({ title, value, placeholder, handleChangeText, otherStyles, ...props }) => {
    const [showPassword, setShowPassword] = useState(false)
    return (
        <View className={`space-y-2 ${otherStyles}`}>
            <Text className="text-base text-gray-100">{title}</Text>
            <View className="border-2 border-black-200 w-full h-16
                px-4 bg-black-100 rounded-2xl focus:border-secondary items-center flex-row"
            >
                <TextInput
                    className="flex-1 text-white font-semibold text-base"
                    value={value}
                    placeholder={placeholder}
                    placeholderTextColor="#7b7b8b"
                    onChangeText={handleChangeText}
                    secureTextEntry={title === "Password" && !showPassword}
                />
                {
                    title === "Password" && (
                        <TouchableOpacity
                            onPress={() => setShowPassword(!showPassword)}
                        >
                            <FontAwesome name={showPassword ? 'eye-slash' : 'eye'} size={24} color="#fff" />
                        </TouchableOpacity>)
                }
            </View>
        </View>
    )
}

export default FormField