import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { View, Text, ScrollView, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Redirect, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

import images from '../constants/images';
import CustomButton from '../components/CustomButton';

import { useGlobalContext } from "../context/GlobalProvider"

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
  });
  const { isLoading, isLoggedIn } = useGlobalContext()
  
  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  if (!isLoading && isLoggedIn) return <Redirect href={"/home"} />

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View className="w-full items-center justify-center min-h-[85vh] px-4">
          <Image
            source={images.logo}
            className="w-[100px] h-[84px]"
            resizeMode='contain'
          />
          <Image
            source={images.cards}
            className="max-w-[380px] w-full h-[300px]"
            resizeMode='contain'
          />
          <View className="relative mt-5">
            <Text className="text-3xl text-white font-bold text-center">
              Discover limitless posibilities with {' '}
              <Text className="text-secondary-200">Aora</Text>
            </Text>
            <Image
              source={images.path}
              className="absolute w-[136px] h-[15px] -bottom-2 -right-8"
              resizeMode='contain'
            />
          </View>
          <Text className="text-sm text-gray-100 mt-7 text-center">
            Where creativity meets innovation: embark on a journey of limitless exploration with Aura
          </Text>

          <CustomButton
            title={"Continue with Email"}
            handlePress={() => router.push('/sign-in')}
            containerStyles={"w-full mt-7"}
          />
        </View>
      </ScrollView>
      <StatusBar backgroundColor='#161622' style='light' />
    </SafeAreaView>
  );
}
