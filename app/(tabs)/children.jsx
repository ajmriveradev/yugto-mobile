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
      <View>
        <TouchableOpacity
          onPress={ () => {
            router.push({
              pathname: "/child/[id]",
              params: { id: child.id }
            })
          }}
        >
          <Text className="text-lg text-black text-semibold mt-3 font-pregular">{`\u2022`} {child.first_name} {child.last_name}</Text>
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <SafeAreaView>
      <Text className="text-3xl text-black text-semibold mt-5 ml-3 font-psemibold">Welcome {user.first_name}!</Text>

      <View className="ml-3">
        <Text className="text-2xl text-black text-semibold mt-10 font-psemibold">Children</Text>
        {
          !!children &&
          <FlatList
            data={children}
            renderItem={ ({ item }) => <ChildItem item={item} /> }
            keyExtractor={ (item) => item.id}
          />
        }
      </View>
    </SafeAreaView>
  )
}

export default Children