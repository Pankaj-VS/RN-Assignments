import React, { useEffect, useState } from 'react'
import { FlatList, View } from 'react-native'

import { ASExerciseCard } from '../../components/exercise-card/ASExerciseCard'
import { ASHeader } from '../../components/header/ASHeader'
import { getNotifcationsExercisesData } from '../../services/api/get-notifcations-exercises-data'
import { IExerciseData } from '../../types/exercise-types'

import { API } from '../../constants/api-constants'

import { styles } from './exercises-styles'

export const Exercises = () => {
  const [exerciseData, setExerciseData] = useState<IExerciseData[]>([])

  const fetchExerciseData = async () => {
    const response = await getNotifcationsExercisesData(API.EXERCISES_API)
    if (response.success) {
      setExerciseData(response.data)
    } else {
      console.error(response.error)
    }
  }

  useEffect(() => {
    fetchExerciseData()
  }, [])

  return (
    <View style={styles.container}>
      <ASHeader title="D-active" />
      <FlatList
        data={exerciseData}
        renderItem={({ item }) => (
          <View style={styles.subContainer}>
            <ASExerciseCard name={item.name} />
          </View>
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}
