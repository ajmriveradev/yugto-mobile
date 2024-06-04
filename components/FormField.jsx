import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'

import { icons } from "../constants";

const FormField = ({ title, value, placeholder, handleChangeText, otherStyles, keyboardType, ...props }) => {
  const [showPassword, setShowPassword] = useState(false);
  const passwordType = title === "Password" || title === "Confirm Password";

  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className={`text-slate-100 text-lg font-bold font-roboto ${props.titleStyles}`}>{title}</Text>

      <View className="border-2 border-black-200 w-full h-16 px-4 bg-sky-100 rounded-2xl focus:border-secondary items-center flex-row">
        <TextInput
          className="flex-1 text-slate-800 font-psemibold text-base"
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7b7b8b"
          onChangeText={handleChangeText}
          secureTextEntry={passwordType && !showPassword}
        />

        { passwordType && (
          <TouchableOpacity
            onPress={ () => { setShowPassword(!showPassword) }}
          >
            <Image
              source={!showPassword ? icons.eye : icons.eyeHide}
              className="w-6 h-6"
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  )
}

export default FormField