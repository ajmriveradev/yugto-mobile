import { View, Text } from 'react-native'
import React from 'react'
import { useGlobalContext } from '../context/GlobalProvider';
import { SafeAreaView } from 'react-native-safe-area-context';

const Vaccinations = () => {
  const { user } = useGlobalContext();

  return (
    <SafeAreaView>
      <Text className="text-3xl text-black text-semibold mt-5 ml-3 font-psemibold">Welcome {user.first_name}!</Text>

      <View className="ml-3">
        <Text className="text-2xl text-black text-semibold mt-10 font-psemibold">Upcoming Vaccination Dates</Text>
        <View>
          
        </View>
        <Text className="text-2xl text-black text-semibold mt-10 font-psemibold">Upcoming Consultations</Text>
      </View>
    </SafeAreaView>
  )
}

export default Vaccinations