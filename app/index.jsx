import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, Text, View } from 'react-native';
import { Redirect, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

import { images } from '../constants'
import CustomButton from '../components/CustomButton';
import { useGlobalContext } from './context/GlobalProvider';

export default function App() {
  const { isLoading, isLoggedIn } = useGlobalContext();

  if (!isLoading && isLoggedIn) {
    return <Redirect href="/home" />
  }
  return (
    <SafeAreaView className="bg-sky-500 h-full">
      <ScrollView contentContainerStyle={{ height: '100%'}}>
        <View className='w-full justify-center items-center min-h-[85vh] px-4'>
          <Text className="text-6xl text-white font-bold text-center">YUGTO</Text>

          <View className="relative mt-10"> 
            <Text className="text-3xl text-white font-bold text-center">
              Mapapanatag ka sa Yugto
            </Text>
          </View>

          <CustomButton 
            title="Sign In"
            handlePress={ () => router.push('/sign-in')}
            containerStyles="w-full mt-7"
          />

          <CustomButton 
            title="Register"
            handlePress={ () => router.push('/sign-up')}
            containerStyles="w-full mt-7"
          />
        </View>
      </ScrollView>
      <StatusBar backgroundColor='#161622' style='light' />
    </SafeAreaView>
  );
}
