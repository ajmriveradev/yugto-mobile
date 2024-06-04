import { View, Text, ScrollView, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from "../../constants";
import FormField from '../../components/FormField';
import CustomButton from "../../components/CustomButton";
import { Link, router } from 'expo-router';
import { useGlobalContext } from '../context/GlobalProvider';
import { signIn } from '../services/auth';

const SignIn = () => {
  const { setUser } = useGlobalContext();
  const [form, setForm] = useState({
    email: "ajmr@test.com",
    password: "secret"
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSignInSubmit = async () => {
    setIsSubmitting(true);

    if (!form.email || !form.password) {
      Alert.alert("Error", "Please fill in the required fields");
    }

    try {
      const result = await signIn(form);

      if (result.data) { 
        setUser(result.data);
        router.replace("/home");
      } else {
        Alert.alert("Warning", result.message)
      }
    } catch (error) {
      console.error(`SignIn: ERROR = ${error}`);
      Alert.alert("Error", error.message);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <SafeAreaView className="bg-sky-500 h-full">
      <ScrollView>
        <View className="w-full justify-center min-h-[90vh] px-4 my-6">
          <Text className="text-3xl text-white text-bold mt-10 font-pbold text-center">Yugto!</Text>

          <Text className="text-2xl text-white text-semibold mt-10 font-psemibold">Sign In to Yugto</Text>

          <FormField 
            title="Email"
            value={form.email}
            handleChangeText={(e) => {
              setForm({ ...form, email: e })
            }}
            otherStyles="mt-10"
            keyboardType="email-address"
          />

          <FormField 
            title="Password"
            value={form.password}
            handleChangeText={(e) => {
              setForm({ ...form, password: e })
            }}
            otherStyles="mt-7"
          />

          <CustomButton 
            title="Sign In"
            handlePress={ () => { handleSignInSubmit() }}
            containerStyles="mt-7"
            isLoading={isSubmitting}
          />

          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100 font-pregular">
              Don't have an account?
            </Text>
            <Link href="/sign-up" className="text-lg font-psemibold text-yellow-300">Sign Up</Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn