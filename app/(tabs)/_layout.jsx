import React from 'react'
import { Tabs, Redirect } from 'expo-router'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { View } from 'react-native';


const TabIcon = ({ icon, color, focused }) => {
    return (
        <View className="flex items-center justify-center gap-0">
            <FontAwesome name={icon} size={18} color={color} />
        </View>
    )

}

const TabsLayout = () => {
    const tabs = [
        {
            title: "Home",
            name: "home",
            icon: "home",
        },
        {
            title: "Bookmark",
            name: "bookmark",
            icon: "bookmark"
        },

        {
            title: "Create",
            name: "create",
            icon: "plus-circle"
        },

        {
            title: "Profile",
            name: "profile",
            icon: "user"
        },
    ]

    return (
        <>
            <Tabs
                screenOptions={{
                    tabBarActiveTintColor: '#FFA001',
                    // tabBarInactiveTintColor: 'blue',
                    // tabBarActiveBackgroundColor: '#FFA001'
                }}
            >
                {
                    tabs.map((item, index) =>
                        <Tabs.Screen
                            key={index}
                            name={item.name}
                            options={{
                                title: item.title,
                                headerShown: false,
                                tabBarIcon: ({ color, focused }) => (
                                    <TabIcon name={item.title} icon={item.icon} color={color} />
                                )
                            }}
                        />
                    )
                }
            </Tabs>
        </>
    )
}

export default TabsLayout