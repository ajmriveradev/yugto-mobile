import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useGlobalContext } from '../context/GlobalProvider';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getAllChildrenByParentId } from '../services/children';
import { router, usePathname } from 'expo-router';

const Children = () => {
  const pathname = usePathname();
  const { user } = useGlobalContext();
  const [children, setChildren] = useState(null);

  useEffect( () => {
    async function getChildren() {
      try {
        const result = await getAllChildrenByParentId(user.id);
        
        setChildren(result.data);
      } catch (error) {
        console.error("Children Page - ERROR - ", error.message);
      }
    }

    getChildren();
  }, [])

  const ChildItem = (item) => {
    const child = item.item;

    return (
      <View className="flex flex-row justify-between items-center bg-sky-500 mx-2 my-3 rounded-2xl drop-shadow-xl shadow-2xl">
        <View className="my-5 ml-3 mr-5">
          <Text className="text-2xl ml-2 text-slate-50 text-semibold font-psemibold">{child.first_name} {child.last_name}</Text>
        </View>
        <TouchableOpacity
          onPress={ () => {
            router.push({
              pathname: "/child/[id]",
              params: { id: child.id }
            })
          }}
          className={`bg-slate-100 mr-4 rounded-xl h-12 w-16 justify-center items-center`}
        >
          <Text className={`text-emerald-600 font-psemibold text-lg mt-1`}>
            View
          </Text>
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <SafeAreaView className="flex flex-col justify-between h-full">
      <View className="mx-3 mt-3">
        {
          !!children &&
          <FlatList
            data={children}
            renderItem={ ({ item }) => <ChildItem item={item} /> }
            keyExtractor={ (item) => item.id}
          />
        }
      </View>
      <View className="flex flex-row justify-end">
        <TouchableOpacity
          onPress={ () => {
            router.push({
              pathname: "/child/create",
            })
          }}
        >
          <View className="bg-sky-600 w-16 h-16 mb-5 mr-5 rounded-full flex flex-row justify-center items-center drop-shadow-2xl shadow-2xl">
            <Text className="text-slate-100 font-bold text-6xl mt-2">+</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default Children