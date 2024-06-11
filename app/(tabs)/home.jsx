import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useGlobalContext } from '../context/GlobalProvider'
import CustomButton from '../../components/CustomButton'
import moment from 'moment'
import { router } from 'expo-router'

const Home = () => {
  const { user } = useGlobalContext();

  const handleVaccinationItemPress = () => {
    router.push({
      pathname: "/vaccination/[id]",
      params: { id: vaccination.id }
    })
  }

  const vaccinationData = [
    {
      "id": 1,
      "vaccination_date": "07-21-2024",
      "first_name": "Tofu",
      "last_name": "Gonzales",
      "vaccine_name": "Measles",
    },
    {
      "id": 2,
      "vaccination_date": "07-21-2024",
      "first_name": "Peachy",
      "last_name": "Gonzales",
      "vaccine_name": "Varicella",
    },
    {
      "id": 3,
      "vaccination_date": "07-21-2024",
      "first_name": "Tofu",
      "last_name": "Gonzales",
      "vaccine_name": "Chickenpox",
    },
    {
      "id": 4,
      "vaccination_date": "07-21-2024",
      "first_name": "Rudolf",
      "last_name": "Gonzales",
      "vaccine_name": "Primary Complex",
    },
  ]

  const VaccinationItem = () => {
    return vaccinationData.map( (vaccination, index) => {
      return(
        <View className={`bg-sky-500 my-2 p-3 rounded-xl drop-shadow-2xl shadow-2xl`} key={index}>
          <TouchableOpacity
            onPress={ () => {
              router.push({
                pathname: "/vaccinations/[id]",
                params: { id: vaccination.id }
              })
              console.log("VACCINATION DATA ID: ", vaccination.id);
            }}
          >
            <View className="flex flex-row justify-between">
              <Text className="text-xl text-slate-100 font-bold font-roboto">{vaccination.vaccination_date}</Text>
              <Text className="text-lg text-slate-100 font-semibold font-roboto">{vaccination.vaccine_name}</Text>
            </View>
            <Text className="text-2xl text-slate-100 font-semibold mt-3 font-roboto">{vaccination.first_name} {vaccination.last_name}</Text>
          </TouchableOpacity>
        </View>
      )
    })
  }

  const consultationData = [
    {
      "id": 0,
      "consultation_date": "07-21-2024",
      "first_name": "Tofu",
      "last_name": "Gonzales",
      "exam_type": "Nutrition",
      "medical_professional_name": "April Closa, RND"
    },
    {
      "id": 1,
      "consultation_date": "07-21-2024",
      "first_name": "Tofu",
      "last_name": "Gonzales",
      "exam_type": "Medical",
      "medical_professional_name": "Joan Quinones, MD"
    },
    {
      "id": 2,
      "consultation_date": "07-21-2024",
      "first_name": "Tofu",
      "last_name": "Gonzales",
      "exam_type": "Nutrition",
      "medical_professional_name": "Alex Misanggi, RND"
    },
    {
      "id": 3,
      "consultation_date": "07-21-2024",
      "first_name": "Tofu",
      "last_name": "Gonzales",
      "exam_type": "Medical",
      "medical_professional_name": "Mallari Nunes, MD"
    },
  ]

  const ConsultationItem = () => {
    return(
      consultationData.map( (consultation, index) => {
        return(
          <View className={`${consultation.exam_type === "Nutrition" ? 'bg-sky-500' : 'bg-emerald-500'} my-2 p-3 rounded-xl drop-shadow-2xl shadow-2xl`} key={index}>
            <TouchableOpacity
              onPress={ () => {
                router.push({
                  pathname: "/consultation/[id]",
                  params: { id: consultation.id }
                })
                console.log("CONSULTATION DATA ID: ", consultation.id);
              }}
            >
              <View className="flex flex-row justify-between">
                <Text className="text-xl text-slate-100 font-bold font-roboto">{consultation.consultation_date}</Text>
                <Text className="text-lg text-slate-100 font-semibold font-roboto">{consultation.exam_type}</Text>
              </View>
              <Text className="text-2xl text-slate-100 font-semibold mt-3 font-roboto">{consultation.medical_professional_name}</Text>
            </TouchableOpacity>
          </View>
        )
      })
    )
  }

  return (
    <SafeAreaView className="bg-slate-100">
      <ScrollView className="mx-3">
        <Text className="text-3xl text-black text-semibold mt-5 font-psemibold">Welcome {user.first_name}!</Text>
        <Text className="text-2xl text-black text-semibold mt-8 font-psemibold">Upcoming Vaccination Dates</Text>
        <VaccinationItem />
        <Text className="text-2xl text-black text-semibold mt-8 font-psemibold">Upcoming Consultations</Text>
        <ConsultationItem />
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home