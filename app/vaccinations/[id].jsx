import React, { useEffect, useState } from 'react'
import { useGlobalContext } from '../context/GlobalProvider';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router, useLocalSearchParams } from 'expo-router';
import { View, Text, FlatList, TouchableOpacity, ScrollView } from 'react-native'

const Vaccination = () => {
  const { user } = useGlobalContext();
  const { id } = useLocalSearchParams();
  const [vaccination, setVaccination] = useState(null);

  useEffect( () => {
    async function getVaccination() {
      try {
        // const result = await getVaccinationById(id);

        setVaccination(true);
      } catch (error) {
        console.error("getVaccination - ERROR - ", error.message);
      }
    }

    getVaccination();
  }, []);

  return (
    <SafeAreaView className="h-full">
      { !!vaccination &&
        <View className="h-full">
          <TouchableOpacity
            onPress={ () => { router.push("/home") }}  
          >
            <Text className="text-2xl text-black text-semibold my-2 ml-3 font-psemibold">{`<`} Back</Text>
          </TouchableOpacity>
          <View className="h-full">
            <Text className="text-2xl text-black text-semibold my-2 ml-3 font-psemibold">Vaccination Details</Text>
          </View>
        </View>
      }
    </SafeAreaView>
  )
}

export default Vaccination