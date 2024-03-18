import React, { useEffect, useState } from 'react'
import { FlatList, View } from 'react-native'

import { ASExerciseCard } from '../../components/exercise-card/ASExerciseCard'
import { ASHeader } from '../../components/header/ASHeader'
import { getScreensData } from '../../services/api/get-screens-data'
import { IExerciseData } from '../../types/exercise-types'
import ASLoader from '../../components/loader/ASLoader'

import { API } from '../../constants/api-constants'
import { backGreen } from '../../constants/common-constants'

import { styles } from './exercises-styles'

export const Exercises = () => {
  const [exerciseData, setExerciseData] = useState<IExerciseData[]>([])

  const fetchExerciseData = async () => {
    const response = await getScreensData(API.EXERCISES_API)
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
      <ASHeader image1={backGreen} title="D-active" />
      <FlatList
        data={exerciseData}
        renderItem={({ item }) => (
          <View style={styles.subContainer}>
            <ASExerciseCard name={item.name} />
          </View>
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={()=><ASLoader/>}
      />
    </View>
  )
}

