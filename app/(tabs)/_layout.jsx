import React from 'react'
import { Tabs, Redirect } from 'expo-router'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { View, Text } from 'react-native';


const TabIcon = ({ icon, name, color, focused }) => {
    return (
        <View className="flex items-center justify-center gap-0">
            <FontAwesome name={icon} size={18} />
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
            title: "Profile",
            name: "profile",
            icon: "user"
        }
    ]

    return (
        <>
            <Tabs
                screenOptions={{
                    tabBarActiveTintColor: '#FFF',
                    // tabBarInactiveTintColor: 'blue',
                    tabBarActiveBackgroundColor: '#FFA001'
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
                                tabBarIcon: () => (
                                    <TabIcon name={item.title} icon={item.icon} />
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