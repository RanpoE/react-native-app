import { SafeAreaView } from 'react-native-safe-area-context';
import images from "../../constants/images"
import { View, Text, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton';
import { Link } from 'expo-router';

const SignUp = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
    c_password: ''
  })

  const handleSubmit = () => {

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
            Sign up in Aora
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
          <FormField
            title="Confirm password"
            value={form.c_password}
            handleChangeText={(e) => { setForm({ ...form, c_password: e }) }}
            otherStyle="mt-7"
          />
          <CustomButton
            title="Sign up"
            containerStyles="mt-7"
            handlePress={handleSubmit}
          />
          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-sm text-gray-100">Already have account?</Text>
            <Link href={"/sign-in"} className='text-blue-300'>Sign In</Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp