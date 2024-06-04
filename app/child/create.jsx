import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useGlobalContext } from '../context/GlobalProvider';
import { SafeAreaView } from 'react-native-safe-area-context';
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton';
import { router } from 'expo-router';

const CreateChild = () => {
  const { user } = useGlobalContext();
  const [form, setForm] = useState({
    "birthdate": "01-15-2023",
    "religion": "Roman Catholic",
    "firstName": "Andrei", 
    "lastName": "Rivera", 
  })

  return (
    <SafeAreaView>
      <ScrollView className="mx-3">
          <Text className="text-3xl text-black text-semibold mt-5 font-psemibold">Add Child</Text>
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
            title="Birthdate"
            value={form.birthdate}
            handleChangeText={(e) => {
              setForm({ ...form, birthdate: e })
            }}
            otherStyles="mt-3"
            titleStyles="text-slate-800"
          />
          <FormField 
            title="Religion"
            value={form.religion}
            handleChangeText={(e) => {
              setForm({ ...form, religion: e })
            }}
            otherStyles="mt-3"
            titleStyles="text-slate-800"
          />
          <CustomButton 
            title="Submit"
            // handlePress={ () => { handleSignUpSubmit() }}
            containerStyles="mt-8 bg-emerald-500"
            textStyles="text-slate-100 mt-1"
            // isLoading={isSubmitting}
          />
          <CustomButton 
            title="Cancel"
            handlePress={ () => { router.push("/(tabs)/children") }}
            containerStyles="mt-8 bg-slate-100 border-2 border-red-500"
            textStyles="text-red-500 mt-1"
            // isLoading={isSubmitting}
          />
      </ScrollView>
    </SafeAreaView>
  )
}

export default CreateChild