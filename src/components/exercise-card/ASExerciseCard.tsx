import React from 'react'
import { ImageBackground, Text, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

import { ASButtons } from '../button/ASButtons'
import { COLORS } from '../../theme/colors'

import { ResizeMode } from '../../constants/common-constants'
import { ExerciseCardInfo } from '../../constants/exercises-constants'

import { styles } from './asExerciseCard-styles'

interface IASExerciseCardProps {
  name: string
}

export const ASExerciseCard = ({ name }: IASExerciseCardProps) => {
  const txtColor: string = ExerciseCardInfo[name].textColor
  const imgSource: number = ExerciseCardInfo[name].imageSource

  return (
    <View style={styles.container}>
      <ImageBackground
        source={imgSource}
        resizeMode={ResizeMode.contain}
        style={styles.imageBackground}>
        <LinearGradient
          colors={COLORS.exerciseCardTitleContainerGradient}
          locations={[0, 0.87, 1]}
          style={styles.imageHeadingContainer}>
          <Text style={[styles.imageHeading, { color: txtColor }]}>{name}</Text>
        </LinearGradient>
      </ImageBackground>
      <ASButtons />
    </View>
  )
}
