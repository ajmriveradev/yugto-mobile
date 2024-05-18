import React, { useEffect, useState } from 'react'
import { useGlobalContext } from '../context/GlobalProvider';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router, useLocalSearchParams } from 'expo-router';
import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import { getChildById } from '../services/children';
import Swiper from 'react-native-screens-swiper';
import moment from 'moment';

const Child = () => {
  const { user } = useGlobalContext();
  const { id } = useLocalSearchParams();
  const [child, setChild] = useState(null);
  const [knownConditions, setKnownConditions] = useState(null);
  const [consultations, setConsultations] = useState(null);
  const [vaccinations, setVaccinations] = useState(null);

  useEffect( () => {
    async function getChild() {
      try {
        const result = await getChildById(id);

        console.log("CHILD: ", result.data);
        setChild(result.data.child);
        setKnownConditions(result.data.knownConditions);
        setConsultations(result.data.consultations);
        setVaccinations(result.data.vaccinationDates);
      } catch (error) {
        console.error("getChild - ERROR - ", error.message);
      }
    }

    getChild();
  }, []);

  const VaccinationItem = (item) => {
    const vaccination = item.item;

    return (
      <View>
        <TouchableOpacity
          // onPress={ () => {
          //   router.push({
          //     pathname: "/child/[id]",
          //     params: { id: child.id }
          //   })
          // }}
        >
          <Text className="text-2xl text-black text-semibold mt-3 font-pregular">{moment(vaccination.vaccination_date).format("YYYY-MM-DD")}</Text>
          <Text className="text-lg text-black text-semibold mt-3 font-pregular">{vaccination.vaccine_name}</Text>
        </TouchableOpacity>
      </View>
    )
  }

  const ConsultationItem = (item) => {
    const consultation = item.item;

    return (
      <View>
        <TouchableOpacity
          // onPress={ () => {
          //   router.push({
          //     pathname: "/child/[id]",
          //     params: { id: child.id }
          //   })
          // }}
        >
          <Text className="text-xl text-black text-semibold mt-3 font-pregular">{moment(consultation.created_at).format("YYYY-MM-DD")}</Text>
          <Text className="text-lg text-black text-semibold mt-3 font-pregular">{consultation.exam_type}</Text>
        </TouchableOpacity>
      </View>
    )
  }

  const KnownConditionItem = (item) => {
    const knownCondition = item.item;

    return (
      <View>
        <TouchableOpacity
          // onPress={ () => {
          //   router.push({
          //     pathname: "/child/[id]",
          //     params: { id: child.id }
          //   })
          // }}
        >
          <Text className="text-2xl text-black text-semibold mt-3 font-pregular">{moment(knownCondition.created_at).format("YYYY-MM-DD")}</Text>
          <Text className="text-lg text-black text-semibold mt-3 font-pregular">{knownCondition.type}</Text>
          <Text className="text-lg text-black text-semibold mt-3 font-pregular">{knownCondition.name}</Text>
        </TouchableOpacity>
      </View>
    )
  }

  const DashboardItem = (item) => {
    const value = item.item;

    return (
      <View>
        <TouchableOpacity
          // onPress={ () => {
          //   router.push({
          //     pathname: "/child/[id]",
          //     params: { id: child.id }
          //   })
          // }}
        >
          <Text className="text-2xl text-black text-semibold mt-3 font-pregular">{value.title}</Text>
          <Text className="text-lg text-black text-semibold mt-3 font-pregular">{value.value}</Text>
          { value.whoAverage && 
            <Text className="text-lg text-black text-semibold mt-3 font-pregular">{value.whoAverage}</Text> 
          }
        </TouchableOpacity>
      </View>
    )
  }

  const dashboardData = [
    {
      "id": 4,
      "title": "Weight",
      "value": 50,
      "whoAverage": 49,
    },
    {
      "id": 5,
      "title": "Height",
      "value": 120,
      "whoAverage": 115,
    },
    {
      "id": 6,
      "title": "Age",
      "value": 5,
      "whoAverage": null,
    },
    {
      "id": 1,
      "title": "Weight For Age",
      "value": 34,
      "whoAverage": 32,
    },
    {
      "id": 2,
      "title": "Height For Age",
      "value": 34,
      "whoAverage": 32,
    },
    {
      "id": 3,
      "title": "Weight For Height",
      "value": 34,
      "whoAverage": 32,
    },
  ]

  const swipableScreens = [
    {
      tabLabel: 'Dashboard',
      component: ({index, ...props}) => {
        return (
          <View className="h-full mx-4 my-6">
            <Text className="text-3xl text-black text-semibold font-psemibold">Dashboard</Text>
            {
              !!child &&
              <FlatList
                data={dashboardData}
                renderItem={ ({ item }) => <DashboardItem item={item} /> }
                keyExtractor={ (item) => item.id}
              />
            }
          </View>
        );
      }
    },
    {
      tabLabel: 'Known Conditions',
      component: ({index, ...props}) => {
        return (
          <View className="h-full mx-4 my-6">
            <Text className="text-3xl text-black text-semibold font-psemibold">Known Conditions</Text>
            {
              !!knownConditions &&
              <FlatList
                data={knownConditions}
                renderItem={ ({ item }) => <KnownConditionItem item={item} /> }
                keyExtractor={ (item) => item.id}
              />
            }
          </View>
        );
      }
    },
    {
      tabLabel: 'Consultations',
      component: ({index, ...props}) => {
        return (
          <View className="h-full mx-4 my-6">
            <Text className="text-3xl text-black text-semibold font-psemibold">Consultations</Text>
            {
              !!consultations &&
              <>
                <Text className="text-xl text-black text-semibold font-psemibold">Upcoming</Text>
                <FlatList
                  data={consultations}
                  renderItem={ ({ item }) => <ConsultationItem item={item} /> }
                  keyExtractor={ (item) => item.id}
                />
                <Text className="text-xl text-black text-semibold font-psemibold">Previous</Text>
                <FlatList
                  data={consultations}
                  renderItem={ ({ item }) => <ConsultationItem item={item} /> }
                  keyExtractor={ (item) => item.id}
                />
              </>
            }
          </View>
        );
      }
    },
    {
      tabLabel: 'Vaccinations',
      component: ({index, ...props}) => {
        return (
          <View className="h-full mx-4 my-6">
            <Text className="text-3xl text-black text-semibold font-psemibold">Vaccinations</Text>
            {
              !!vaccinations &&
              <FlatList
                data={vaccinations}
                renderItem={ ({ item }) => <VaccinationItem item={item} /> }
                keyExtractor={ (item) => item.id}
              />
            }
          </View>
        );
      }
    },
  ];

  const styles = {
    pillContainer: {
    },
  }

  return (
    <SafeAreaView className="h-full">
      { !!child &&
        <View className="h-full">
          <TouchableOpacity
            onPress={ () => { router.push("/(tabs)/children")}}  
          >
            <Text className="text-2xl text-black text-semibold my-2 ml-3 font-psemibold">{`<`} Back</Text>
          </TouchableOpacity>
          <View className="h-full">
            <Swiper
              data={swipableScreens}
              isStaticPills={false}
              style={styles}
              scrollableContainer={true}
            />
          </View>
        </View>
      }
    </SafeAreaView>
  )
}

export default Child