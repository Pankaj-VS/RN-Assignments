import React, { useState, useEffect } from 'react'
import { FlatList, Text, View } from 'react-native'

import { ExerciseCard } from '../../components/exercise-card/ExerciseCard'
import { ExerciseData } from '../../types/exercise-types'
import { getData } from '../../services/service'

import { API } from '../../constants/api-constants'

import { styles } from './exercises-styles'

export const Exercises = () => {
  const [exerciseData, setExerciseData] = useState<ExerciseData[]>([])

  const fetchExerciseData = async () => {
    const response = await getData(API.EXCERISES_API)
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
      <View style={styles.header}>
        <Text style={styles.text}>D-active</Text>
      </View>
      <FlatList
        data={exerciseData}
        renderItem={({ item }) => (
          <View style={styles.subContainer}>
            <ExerciseCard name={item.name} />
          </View>
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}
