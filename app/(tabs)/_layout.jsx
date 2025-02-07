import React from 'react'
import { Tabs, Redirect } from 'expo-router'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

const TabsLayout = () => {
    return (
        <>
            <Tabs>
                <Tabs.Screen
                    name="home"
                    options={{
                        title: 'Home',
                        headerShown: false,
                        tabBarIcon: () => (
                            <FontAwesome name="bus" size={24} color="black" />
                        )
                    }}
                />
                <Tabs.Screen
                    name="profile"
                    options={{
                        title: 'Profile',
                        headerShown: false,
                        tabBarIcon: () => (
                            <FontAwesome5 name="brain" size={24} color="black" />
                        )
                    }}
                />
            </Tabs>
        </>
    )
}

export default TabsLayout