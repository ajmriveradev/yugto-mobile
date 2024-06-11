import { router } from 'expo-router'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const NotFound = () => {
  return (
    <SafeAreaView>
      <View className="flex justify-center items-center h-full w-full bg-sky-600">
        <Text className="text-5xl font-bold text-slate-100">Naligaw ka?</Text>
        <TouchableOpacity
          onPress={ () => {
            router.push("/home")
          }}
          className="flex justify-center items-center text-center mt-8 bg-sky-800 h-20 w-1/2 rounded-lg drop-shadow-2xl shadow-xl"
        >
          <Text className="text-2xl font-semibold text-slate-100 text-center">Magbaligtad ng damit</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default NotFound