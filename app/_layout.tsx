import React, { useEffect } from 'react'
import { SplashScreen, Stack } from 'expo-router'
import { useFonts } from 'expo-font'

SplashScreen.preventAutoHideAsync()

const RootLayout = () => {
  const [fontsLoaded, error] = useFonts({
    hacked: require('../assets/fonts/HACKED.ttf')
  })

  useEffect(() => {
    if (error) throw error;
    if (fontsLoaded) SplashScreen.hideAsync()
  }, [fontsLoaded, error])

  if (!fontsLoaded && error) return null;

  return (
    // <Slot />
    // Renders the current child route
    <Stack>
      <Stack.Screen name="index" options={{
        headerShown: false,
      }}/>
    </Stack>
  )
}

export default RootLayout