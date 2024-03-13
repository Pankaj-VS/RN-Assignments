import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

import { buttonsTime } from '../../constants/exercises-constants'
import { exerciseCardButtonContainerGradient } from '../../theme/colors'

import { styles } from './CustomButtons-styles'

export const CustomButtons = () => {
  return (
    <LinearGradient
      colors={exerciseCardButtonContainerGradient}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      style={styles.container}>
      {buttonsTime.map((time, index) => (
        <TouchableOpacity key={index}>
          <View style={styles.button}>
            <Text style={styles.text}>{time}min</Text>
          </View>
        </TouchableOpacity>
      ))}
    </LinearGradient>
  )
}
