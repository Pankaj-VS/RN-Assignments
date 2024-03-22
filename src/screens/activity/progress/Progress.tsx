import React, { useEffect, useState } from 'react'
import { FlatList, ImageBackground, Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

import { ASProgressCard } from '../../../components/progress-card/ASProgressCard.tsx'
import { getScreensData } from '../../../services/api/get-screens-data.ts'
import { StackNavigatorParams } from '../../../types/stackNavigator-types.ts'
import { IActivityData } from '../../../types/activity-types.ts'
import ASLoader from '../../../components/loader/ASLoader.tsx'

import { allReflection } from '../../../constants/activity-constants'
import { API } from '../../../constants/api-constants.ts'

import { styles } from './progress-styles'

export const Progress = () => {
  const [activityData, setActivityData] = useState<IActivityData[]>([])
  const navigation = useNavigation<StackNavigationProp<StackNavigatorParams>>()
  const [loading,setLoading]= useState<boolean>(true);

  const fetchActivityData = async () => {
    const response = await getScreensData(API.WRECKERS_API)
    if (response.success) {
      setActivityData(response.data)
    } else {
      console.error(response.error)
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchActivityData()
  }, [])

  return (
    loading ? <ASLoader/> : 
    <View style={styles.container}>
      <FlatList
        data={activityData}
        renderItem={({ item }) => (
          <View style={styles.subContainer}>
            <ASProgressCard {...item} />
          </View>
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => <Text>Loading Data...</Text>}
      />
      <View style={styles.allReflectionImageContainer}>
        <ImageBackground style={styles.allReflectionImage} source={allReflection}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('MyReflections')}>
            <Text style={styles.text}>View All Reflections</Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    </View>
  )
}
