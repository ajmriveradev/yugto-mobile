import { View, Text, ScrollView, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from "../../constants";
import FormField from '../../components/FormField';
import CustomButton from "../../components/CustomButton";
import { Link, router } from 'expo-router';
import { useGlobalContext } from '../context/GlobalProvider';
import { signIn } from '../services/utils';

const SignIn = () => {
  const { setUser } = useGlobalContext();
  const [form, setForm] = useState({
    email: "amrivera3@up.edu.ph",
    password: "a"
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSignInSubmit = async () => {
    setIsSubmitting(true);

    if (!form.email || !form.password) {
      Alert.alert("Error", "Please fill in the required fields");
    }

    try {
      const result = await signIn(form);

      if (result) { 
        setUser(result);
        router.replace("/home");
      }
    } catch (error) {
      console.error(`SignIn: ERROR = ${error}`);
      Alert.alert("Error", error.message);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center min-h-[90vh] px-4 my-6">
          <Text className="text-3xl text-white text-bold mt-10 font-pbold text-center">Yugto!</Text>

          <Text className="text-2xl text-white text-semibold mt-10 font-psemibold">Log In to Aora</Text>

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
            title="Log In"
            handlePress={ () => { handleSignInSubmit() }}
            containerStyles="mt-7"
            isLoading={isSubmitting}
          />

          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100 font-pregular">
              Don't have an account?
            </Text>
            <Link href="/sign-up" className="text-lg font-psemibold text-secondary">Sign Up</Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn