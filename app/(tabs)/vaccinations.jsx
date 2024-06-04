import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { useGlobalContext } from '../context/GlobalProvider';
import { SafeAreaView } from 'react-native-safe-area-context';

const Vaccinations = () => {
  const { user } = useGlobalContext();

  const handleVaccinationItemPress = (e) => {
    console.log("VACCINATION ITEM CLICK: ", e);
  }

  const VaccinationItem = ({ status }) => {
    return(
      <>
        <View className={`flex flex-row justify-between items-center ${status === "Upcoming" ? 'bg-sky-500' : 'bg-emerald-700'} mx-5 my-3 rounded-2xl drop-shadow-xl shadow-2xl`}>
          <View className="my-5 ml-3 mr-5">
            <Text className="text-lg ml-2 font-bold text-slate-100 font-roboto">07-21-2024</Text>
            <Text className="text-2xl ml-2 text-slate-100 font-semibold font-roboto">Tofu Gonzales</Text>
            <Text className="text-xl ml-2 text-slate-100 font-semibold font-roboto">Measles Vaccine</Text>
          </View>
          <TouchableOpacity
            onPress={handleVaccinationItemPress}
            className={`bg-slate-100 mr-4 rounded-xl h-12 w-16 justify-center items-center`}
          >
            <Text className={`text-emerald-600 font-psemibold text-lg mt-1`}>
              View
            </Text>
          </TouchableOpacity>
        </View>
        <View className={`flex flex-row justify-between items-center ${status === "Upcoming" ? 'bg-sky-500' : 'bg-emerald-700'} mx-5 my-3 rounded-2xl drop-shadow-xl shadow-2xl`}>
          <View className="my-5 ml-3 mr-5">
            <Text className="text-lg ml-2 text-semibold text-slate-100 font-psemibold">07-21-2024</Text>
            <Text className="text-2xl ml-2 text-slate-100 font-semibold font-roboto">Peachy Gonzales</Text>
            <Text className="text-xl ml-2 text-slate-100 text-semibold font-psemibold">Measles Vaccine</Text>
          </View>
          <TouchableOpacity
            onPress={handleVaccinationItemPress}
            className={`bg-slate-100 mr-4 rounded-xl h-12 w-16 justify-center items-center`}
          >
            <Text className={`text-emerald-600 font-psemibold text-lg mt-1`}>
              View
            </Text>
          </TouchableOpacity>
        </View>
        <View className={`flex flex-row justify-between items-center ${status === "Upcoming" ? 'bg-sky-500' : 'bg-emerald-700'} mx-5 my-3 rounded-2xl drop-shadow-xl shadow-2xl`}>
          <View className="my-5 ml-3 mr-5">
            <Text className="text-lg ml-2 text-semibold text-slate-100 font-psemibold">07-21-2024</Text>
            <Text className="text-2xl ml-2 text-slate-100 font-semibold font-roboto">Rudolf Gonzales</Text>
            <Text className="text-xl ml-2 text-slate-100 text-semibold font-psemibold">Measles Vaccine</Text>
          </View>
          <TouchableOpacity
            onPress={handleVaccinationItemPress}
            className={`bg-slate-100 mr-4 rounded-xl h-12 w-16 justify-center items-center`}
          >
            <Text className={`text-emerald-600 font-psemibold text-lg mt-1`}>
              View
            </Text>
          </TouchableOpacity>
        </View>
        <View className={`flex flex-row justify-between items-center ${status === "Upcoming" ? 'bg-sky-500' : 'bg-emerald-700'} mx-5 my-3 rounded-2xl drop-shadow-xl shadow-2xl`}>
          <View className="my-5 ml-3 mr-5">
            <Text className="text-lg ml-2 text-semibold text-slate-100 font-psemibold">07-21-2024</Text>
            <Text className="text-2xl ml-2 text-slate-100 font-semibold font-roboto">Tofu Gonzales</Text>
            <Text className="text-xl ml-2 text-slate-100 text-semibold font-psemibold">Measles Vaccine</Text>
          </View>
          <TouchableOpacity
            onPress={handleVaccinationItemPress}
            className={`bg-slate-100 mr-4 rounded-xl h-12 w-16 justify-center items-center`}
          >
            <Text className={`text-emerald-600 font-psemibold text-lg mt-1`}>
              View
            </Text>
          </TouchableOpacity>
        </View>
      </>
    )
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <Text className="text-2xl ml-3 text-black text-semibold mt-10 font-psemibold">Upcoming Vaccinations</Text>
        <VaccinationItem status={"Upcoming"} />
        <Text className="text-2xl ml-3 text-black text-semibold mt-10 font-psemibold">Previous Vaccinations</Text>
        <VaccinationItem status={"Previous"} />
      </ScrollView>
    </SafeAreaView>
  )
}

export default Vaccinations