import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useGlobalContext } from '../context/GlobalProvider';
import { SafeAreaView } from 'react-native-safe-area-context';
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton';

const Settings = () => {
  const { user } = useGlobalContext();
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
  })
  return (
    <SafeAreaView>
      <ScrollView className="mx-3 divide-y divide-solid">
        <View className="mb-8">
          <Text className="text-3xl text-black text-semibold mt-5 font-psemibold">Settings</Text>
          <FormField 
            title="First Name"
            value={form.firstName}
            handleChangeText={(e) => {
              setForm({ ...form, firstName: e })
            }}
            otherStyles="mt-3"
            titleStyles="text-slate-800"
          />
          <FormField 
            title="Last Name"
            value={form.lastName}
            handleChangeText={(e) => {
              setForm({ ...form, lastName: e })
            }}
            otherStyles="mt-3"
            titleStyles="text-slate-800"
          />
          <FormField 
            title="Email Address"
            value={form.email}
            handleChangeText={(e) => {
              setForm({ ...form, email: e })
            }}
            otherStyles="mt-3"
            titleStyles="text-slate-800"
          />
          <FormField 
            title="Phone Number"
            value={form.phone}
            handleChangeText={(e) => {
              setForm({ ...form, phone: e })
            }}
            otherStyles="mt-3"
            titleStyles="text-slate-800"
          />
          <CustomButton 
            title="Save"
            // handlePress={ () => { handleSignUpSubmit() }}
            containerStyles="mt-8 bg-emerald-500"
            textStyles="text-slate-100 mt-1"
            // isLoading={isSubmitting}
          />
        </View>

        <View className="mb-8">
          <Text className="text-3xl text-black text-semibold mt-5 font-psemibold">Password</Text>
          <FormField 
            title="Password"
            value={form.password}
            handleChangeText={(e) => {
              setForm({ ...form, password: e })
            }}
            otherStyles="mt-3"
            titleStyles="text-slate-800"
          />
          <FormField 
            title="Confirm Password"
            value={form.confirmPassword}
            handleChangeText={(e) => {
              setForm({ ...form, confirmPassword: e })
            }}
            otherStyles="mt-3"
            titleStyles="text-slate-800"
          />
          <CustomButton 
            title="Save Password"
            // handlePress={ () => { handleSignUpSubmit() }}
            containerStyles="mt-8 bg-emerald-500"
            textStyles="text-slate-100 mt-1"
            // isLoading={isSubmitting}
          />
        </View>

        <View className="mb-8">
          <CustomButton 
            title="Log Out"
            // handlePress={ () => { handleSignUpSubmit() }}
            containerStyles="mt-8 bg-rose-600"
            textStyles="text-slate-100 mt-1"
            // isLoading={isSubmitting}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Settings