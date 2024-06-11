import React, { useEffect, useState } from 'react'
import { useGlobalContext } from '../context/GlobalProvider';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router, useLocalSearchParams } from 'expo-router';
import { View, Text, FlatList, TouchableOpacity, ScrollView } from 'react-native'
import { getChildById } from '../services/children';
import Swiper from 'react-native-screens-swiper';
import moment from 'moment';

const Consultation = () => {
  const { user } = useGlobalContext();
  const { id } = useLocalSearchParams();
  const [child, setChild] = useState(null);
  const [knownConditions, setKnownConditions] = useState(null);
  const [consultations, setConsultations] = useState(null);
  const [vaccinations, setVaccinations] = useState(null);


  return (
    <SafeAreaView className="h-full">
      <View className="h-full">
        <TouchableOpacity
          onPress={ () => { router.push("/(tabs)/children") }}  
        >
          <Text className="text-2xl text-black text-semibold my-2 ml-3 font-psemibold">{`<`} Back</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default Consultation