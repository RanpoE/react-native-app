
import { SafeAreaView } from 'react-native-safe-area-context';
import images from "../../constants/images"
import { View, Text, ScrollView, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton';
import { Link } from 'expo-router';
import { signIn } from '../../lib/appwrite';
import { router } from 'expo-router';

const SignIn = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async () => {
    const { email, password } = form
    if (!email || !password) {
      Alert.alert("Error please fill all fields")
      return
    }

    setIsSubmitting(true)

    try {
      const result = await signIn(email, password)

      // set to global state
      router.replace("/home")

    } catch (error) {
      Alert.alert('Error ', error.message)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center h-full px-4 my-6">
          <Image
            source={images.logo}
            resizeMode='contain'
            className="w-[155px] h-[35px]"
          />
          <Text className="text-2xl text-white mt-10 font-semibold">
            Log in Aora
          </Text>
          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => { setForm({ ...form, email: e }) }}
            otherStyle="mt-7"
            keyBoardType="email-address"
          />
          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => { setForm({ ...form, password: e }) }}
            otherStyle="mt-7"
          />
          <CustomButton
            title="Sign in"
            containerStyles="mt-7"
            handlePress={handleSubmit}
            isLoading={isSubmitting}
          />
          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-sm text-gray-100">Don't have account?</Text>
            <Link href={"/sign-up"} className='text-blue-300'>Sign up</Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn
