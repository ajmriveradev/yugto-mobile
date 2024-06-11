import { View, Text, ScrollView, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from "../../constants";
import FormField from '../../components/FormField';
import CustomButton from "../../components/CustomButton";
import { Link, router } from 'expo-router';
import { useGlobalContext } from '../context/GlobalProvider';
import { signUp } from '../services/auth';

const SignUp = () => {
  const { setUser } = useGlobalContext();
  const [form, setForm] = useState({
    "email": "amrivera3@up.edu.ph",
    "password": "a",
    "confirmPassword": "a",
    "firstName": "Andrei", 
    "lastName": "Rivera", 
    "phone": "09565210653", 
    "birthDate": "1998-12-07",
    "isParent": true, 
    "isMedicalProfessional": false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSignUpSubmit = async () => {
    setIsSubmitting(true);

    if (!form.email || !form.password || !form.confirmPassword || !form.firstName || !form.lastName || !form.phone || !form.birthDate) {
      Alert.alert("Error", "Please fill in the required fields");
    }

    try {
      const result = await signUp(form);
      
      console.log("SIGN UP - RESULT: ", result);

      if (result.data) { 
        setUser(result.data);
        router.replace("/home");
      } else {
        Alert.alert("Warning", result.message)
      }
    } catch (error) {
      console.error(`SignUp: ERROR = ${error}`);
      Alert.alert("Error", error.message);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <SafeAreaView className="bg-sky-600 h-full">
      <ScrollView>
        <View className="w-full justify-center min-h-[92vh] px-4 my-6">
          <Text className="text-3xl text-white font-bold mt-2 font-roboto">Sign Up to Yugto</Text>

          <FormField 
            title="First Name"
            value={form.firstName}
            handleChangeText={(e) => {
              setForm({ ...form, firstName: e })
            }}
            otherStyles="mt-5"
            keyboardType="first-name"
          />

          <FormField 
            title="Last Name"
            value={form.lastName}
            handleChangeText={(e) => {
              setForm({ ...form, lastName: e })
            }}
            otherStyles="mt-5"
            keyboardType="last-name"
          />

          <FormField 
            title="Phone"
            value={form.phone}
            handleChangeText={(e) => {
              setForm({ ...form, phone: e })
            }}
            otherStyles="mt-5"
            keyboardType="phone"
          />
          
          <FormField 
            title="Birth Date"
            value={form.birthDate}
            handleChangeText={(e) => {
              setForm({ ...form, birthDate: e })
            }}
            otherStyles="mt-5"
            keyboardType="birth-date"
          />

          <FormField 
            title="Email"
            value={form.email}
            handleChangeText={(e) => {
              setForm({ ...form, email: e })
            }}
            otherStyles="mt-5"
            keyboardType="email-address"
          />

          <FormField 
            title="Password"
            value={form.password}
            handleChangeText={(e) => {
              setForm({ ...form, password: e })
            }}
            otherStyles="mt-5"
          />

          <FormField 
            title="Confirm Password"
            value={form.confirmPassword}
            handleChangeText={(e) => {
              setForm({ ...form, confirmPassword: e })
            }}
            otherStyles="mt-5"
          />

          <CustomButton 
            title="Sign Up"
            handlePress={ () => { handleSignUpSubmit() }}
            containerStyles="mt-8"
            isLoading={isSubmitting}
          />

          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100 font-pregular">
              Already have an account?
            </Text>
            <Link href="/sign-in" className="text-lg font-psemibold text-yellow-300">Sign In</Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp