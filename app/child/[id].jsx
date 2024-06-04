import React, { useEffect, useState } from 'react'
import { useGlobalContext } from '../context/GlobalProvider';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router, useLocalSearchParams } from 'expo-router';
import { View, Text, FlatList, TouchableOpacity, ScrollView } from 'react-native'
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

  const vaccinationData = [
    {
      "id": 6,
      "vaccination_date": "2024-06-23",
      "vaccine_name": "Measles",
    },
    {
      "id": 5,
      "vaccination_date": "2024-06-23",
      "vaccine_name": "Varicella",
    },
    {
      "id": 4,
      "vaccination_date": "2024-06-23",
      "vaccine_name": "Mumps",
    },
    {
      "id": 3,
      "vaccination_date": "2024-06-23",
      "vaccine_name": "Chickenpox",
    },
    {
      "id": 2,
      "vaccination_date": "2024-06-23",
      "vaccine_name": "Measles",
    },
    {
      "id": 1,
      "vaccination_date": "2024-06-23",
      "vaccine_name": "Measles",
    },
    {
      "id": 0,
      "vaccination_date": "2024-06-23",
      "vaccine_name": "Measles",
    },
  ]

  const VaccinationItem = (item) => {
    const vaccination = item.item;

    return (
      <View className="bg-sky-600 rounded-lg mx-1 my-3 p-3 drop-shadow-2xl shadow-2xl">
        <TouchableOpacity
          // onPress={ () => {
          //   router.push({
          //     pathname: "/child/[id]",
          //     params: { id: child.id }
          //   })
          // }}
        >
          <Text className="text-2xl text-slate-100 font-semibold font-roboto">{moment(vaccination.vaccination_date).format("YYYY-MM-DD")}</Text>
          <Text className="text-lg text-slate-100 font-semibold mt-3 font-roboto">{vaccination.vaccine_name}</Text>
        </TouchableOpacity>
      </View>
    )
  }

  const previousConsultationsData = [
    {
      "id": 6,
      "scheduled_at": "2024-06-23",
      "exam_type": "Nutrition",
      "medical_professional_name": "April Closa, RND",
    },
    {
      "id": 5,
      "scheduled_at": "2024-06-23",
      "exam_type": "Medical",
      "medical_professional_name": "Calixto Flores, MD",
    },
    {
      "id": 4,
      "scheduled_at": "2024-06-23",
      "exam_type": "Medical",
      "medical_professional_name": "Calixto Flores, MD",
    },
    {
      "id": 3,
      "scheduled_at": "2024-06-23",
      "exam_type": "Nutrition",
      "medical_professional_name": "April Closa, RND",
    },
    {
      "id": 2,
      "scheduled_at": "2024-06-23",
      "exam_type": "Medical",
      "medical_professional_name": "Calixto Flores, MD",
    },
    {
      "id": 1,
      "scheduled_at": "2024-06-23",
      "exam_type": "Nutrition",
      "medical_professional_name": "April Closa, RND",
    },
    {
      "id": 0,
      "scheduled_at": "2024-06-23",
      "exam_type": "Nutrition",
      "medical_professional_name": "April Closa, RND",
    },
  ]

  const upcomingConsultationsData = [
    {
      "id": 6,
      "scheduled_at": "2024-06-23",
      "exam_type": "Nutrition",
      "medical_professional_name": "April Closa, RND",
    },
    {
      "id": 5,
      "scheduled_at": "2024-06-23",
      "exam_type": "Medical",
      "medical_professional_name": "Calixto Flores, MD",
    },
    {
      "id": 4,
      "scheduled_at": "2024-06-23",
      "exam_type": "Medical",
      "medical_professional_name": "Calixto Flores, MD",
    },
    {
      "id": 3,
      "scheduled_at": "2024-06-23",
      "exam_type": "Nutrition",
      "medical_professional_name": "April Closa, RND",
    },
    {
      "id": 2,
      "scheduled_at": "2024-06-23",
      "exam_type": "Medical",
      "medical_professional_name": "Calixto Flores, MD",
    },
    {
      "id": 1,
      "scheduled_at": "2024-06-23",
      "exam_type": "Nutrition",
      "medical_professional_name": "April Closa, RND",
    },
    {
      "id": 0,
      "scheduled_at": "2024-06-23",
      "exam_type": "Nutrition",
      "medical_professional_name": "April Closa, RND",
    },
  ]

  const ConsultationItem = (item) => {
    const consultation = item.item;

    return (
      <View className={`${consultation.exam_type === "Nutrition" ? 'bg-sky-500' : 'bg-emerald-500'} my-2 p-3 rounded-xl drop-shadow-2xl shadow-2xl`}>
        <TouchableOpacity
          onPress={ () => {
            // router.push({
            //   pathname: "/child/[id]",
            //   params: { id: child.id }
            // })
            console.log("CONSULTATION DATA ID: ", consultation.id);
          }}
        >
          <View className="flex flex-row justify-between">
            <Text className="text-xl text-slate-100 font-bold font-roboto">{moment(consultation.scheduled_at).format("YYYY-MM-DD")}</Text>
            <Text className="text-lg text-slate-100 font-semibold font-roboto">{consultation.exam_type}</Text>
          </View>
          <Text className="text-2xl text-slate-100 font-semibold mt-3 font-roboto">{consultation.medical_professional_name}</Text>
        </TouchableOpacity>
      </View>
    )
  }

  const knownConditionsData = [
    {
      "id": 6,
      "created_at": "2024-06-23",
      "type": "Allergy",
      "name": "Peanut",
    },
    {
      "id": 5,
      "created_at": "2024-08-05",
      "type": "Chronic Condition",
      "name": "Asthma",
    },
    {
      "id": 4,
      "created_at": "2024-08-02",
      "type": "Allergy",
      "name": "Peanut",
    },
    {
      "id": 3,
      "created_at": "2023-11-21",
      "type": "Allergy",
      "name": "Peanut",
    },
    {
      "id": 2,
      "created_at": "2021-09-14",
      "type": "Allergy",
      "name": "Peanut",
    },
    {
      "id": 1,
      "created_at": "2022-03-06",
      "type": "Allergy",
      "name": "Peanut",
    },
    {
      "id": 0,
      "created_at": "2021-02-23",
      "type": "Allergy",
      "name": "Peanut",
    },
  ]

  const KnownConditionItem = (item) => {
    const knownCondition = item.item;

    return (
      <View>
        <TouchableOpacity
          onPress={ () => {
            // router.push({
            //   pathname: "/child/[id]",
            //   params: { id: child.id }
            // })
            console.log("KNOWN CONDITION ID: ", knownCondition.id);
          }}
        >
          <Text className="text-xl text-black font-semibold mt-3 font-roboto">{moment(knownCondition.created_at).format("YYYY-MM-DD")}</Text>
          <Text className="text-lg text-black font-bold mt-3 font-roboto">{knownCondition.type}: {knownCondition.name}</Text>
        </TouchableOpacity>
      </View>
    )
  }

  const getDashboardValueAndScale = (value, title) => {
    switch(title) {
      case "Weight":
        return `${value} kg`
      case "Height":
        return `${value} cm`
      case "Weight For Age":
        return `${value} percentile`
      case "Height For Age":
        return `${value} percentile`
      case "Weight For Height":
        return `${value} percentile`
      case "Age":
        return `${value} years ${value} months`
      default:
        return "N/A"
    }
  }

  const DashboardItem = (item) => {
    const value = item.item;

    return (
      <ScrollView>
        <View>
          <TouchableOpacity
            // onPress={ () => {
            //   router.push({
            //     pathname: "/child/[id]",
            //     params: { id: child.id }
            //   })
            // }}
          >
            <Text className="text-2xl font-bold color-sky-800 mt-3 font-roboto">{value.title}</Text>
            <View className="flex flex-row justify-between">
              <Text className="text-lg text-black font-regular mt-3 font-roboto">{child.first_name}'s {value.title.toLowerCase()}:</Text>
              <Text className="text-lg text-black font-semibold mt-3 font-roboto">{getDashboardValueAndScale(value.value, value.title)}</Text>
            </View>
            { value.whoAverage && 
              <View className="flex flex-row justify-between">
                <Text className="text-lg text-black font-regular mt-3 font-roboto">WHO ave. {value.title.toLowerCase()}:</Text>
                <Text className="text-lg text-black font-semibold mt-3 font-roboto">{getDashboardValueAndScale(value.value, value.title)}</Text>
              </View>
            }
          </TouchableOpacity>
        </View>
      </ScrollView>
    )
  }

  const dashboardData = [
    {
      "id": 6,
      "title": "Age",
      "value": 5,
      "whoAverage": null,
    },
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
          <View className="h-full mx-4 my-6 overflow-y-auto">
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
                data={knownConditionsData}
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
          <ScrollView className="h-full mx-4 my-6">
            <Text className="text-3xl text-slate-800 text-semibold font-psemibold">Consultations</Text>
            {
              !!upcomingConsultationsData && !!previousConsultationsData &&
              <>
                <Text className="text-xl text-slate-800 mt-3 text-semibold font-psemibold">Upcoming</Text>
                <FlatList
                  data={upcomingConsultationsData}
                  renderItem={ ({ item }) => <ConsultationItem item={item} /> }
                  keyExtractor={ (item) => item.id}
                />
                <Text className="text-xl text-slate-800 text-semibold font-psemibold">Previous</Text>
                <FlatList
                  data={previousConsultationsData}
                  renderItem={ ({ item }) => <ConsultationItem item={item} /> }
                  keyExtractor={ (item) => item.id}
                />
              </>
            }
          </ScrollView>
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
                data={vaccinationData}
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
            onPress={ () => { router.push("/(tabs)/children") }}  
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